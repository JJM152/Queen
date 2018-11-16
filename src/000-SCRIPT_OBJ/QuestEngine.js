/**
 * This class manages the tracking of quests and handing out of rewards.
 * @constructor
 */

/** TODO: REWRITE THIS ENTIRE MESS AND FOLD IT INTO JOB ENGINE **/

App.QuestEngine = class QuestEngine {
    /**
     * Retrieve a quest related flag.
     * @param {App.Entity.Player} Player
     * @param {string} Flag
     * @returns {*}
     */
    static GetQuestFlag(Player, Flag) {
        if ((typeof Player.QuestFlags[Flag] === 'undefined')) return false;
        return Player.QuestFlags[Flag];
    }

    /**
     * Set a quest flag value.
     * @param {App.Entity.Player} Player
     * @param {*} Flag
     * @param {String} Value
     */
    static SetQuestFlag(Player, Flag, Value) {
        Player.QuestFlags[Flag] = Value;
    }

    /**
     * Helper function to read progress value
     * @param {App.Entity.Player} Player - player being checked.
     * @param {String} Key - key from check entry.
     * @returns {number}
     */
    static GetProgressValue(Player, Key) {
        var res = App.QuestEngine.GetQuestFlag(Player, "progress_" + Key);
        return res === undefined ? 0. : res;
    }

    /**
     * Helper function to read progress value
     * @param {App.Entity.Player} Player - player being checked.
     * @param {String} Key - key from check entry.
     * @param {number} Value
     */
    SetProgressValue(Player, Key, Value) {
        Player.QuestFlags["progress_" + Key] = Value;
    }

    /**
     * Helper function for parsing evaluating quest checks.
     * @param {App.Entity.Player} Player - player being checked.
     * @param {String} Type - the type of check to perform.
     * @param {String} Key - key from check entry.
     * @param {Number} Value - value to check against.
     * @param {Number} Reverse - checking less than instead of greater than.
     * @returns {boolean}
     */
    static CheckCondition(Player, Type, Key, Value, Reverse) {
        var NPC;

        if (typeof Key !== 'undefined' && Key.charAt(0) == '-')
            Key = Key.slice(1);

        switch (Type) {
            case "NPC_MOOD":
                NPC = Player.GetNPC(Key);
                if ((NPC.Mood() < Value) && (Reverse == 0)) return false;
                if ((NPC.Mood() > Value) && (Reverse == 1)) return false;
                break;
            case "MONEY":
                if ((Player.Money < Value) && (Reverse == 0)) return false;
                if ((Player.Money > Value) && (Reverse == 1)) return false;
                break;
            case "STAT_BODY":
                if ((Player.GetStatPercent("BODY", Key) < Value) && (Reverse == 0)) return false;
                if ((Player.GetStatPercent("BODY", Key) > Value) && (Reverse == 1)) return false;
                break;
            case "STAT_SKILL":
                if ((Player.GetStatPercent("SKILL", Key) < Value) && (Reverse == 0)) return false;
                if ((Player.GetStatPercent("SKILL", Key) > Value) && (Reverse == 1)) return false;
                break;
            case "STAT_CORE":
                if ((Player.GetStatPercent("STAT", Key) < Value) && (Reverse == 0)) return false;
                if ((Player.GetStatPercent("STAT", Key) > Value) && (Reverse == 1)) return false;
                break;
            case "HAS_ITEM":
                if ((Player.GetItemByName(Key).length < 1)) return false;
                if ((Player.GetItemByName(Key).Charges() < Value )) return false;
                break;
            case "FLAG":
                if (this.GetQuestFlag(Player, Key) != Value) return false;
                break;
            case "STYLE_CATEGORY":
                if ((Player.GetStyleSpecRating(Key) < Value) && (Reverse == 0)) return false;
                if ((Player.GetStyleSpecRating(Key) >= Value) && (Reverse == 1)) return false;
                break;
            case "HAIR_STYLE":
                if ( (Player.GetHairStyle() == Key) != Value) return false;
                break;
            case "HAIR_COLOR":
                if ( (Player.GetHairColor() == Key) != Value) return false;
                break;
            case "QUEST_ITEM":
                var o = Player.GetItemByName(Key);
                if (typeof o === 'undefined') return false;
                if (o.Charges() < Value ) return false;
                break;
            case "DAYS_PASSED":
                if(Key){Value = this.GetQuestFlag(Player, Key)}
                if(Player.Day < Value) return false;
                break;
            /** TODO: Refactor this to check also for wearing specific items. **/
            case "IS_WEARING":
            console.log('Name='+Key+",Value="+Value);
                if(Value == "NOT" ) return (Player.GetEquipmentInSlot(Key) == null);
                if( (typeof Value === 'undefined' || Value == "") && Player.GetEquipmentInSlot(Key) == null) return false;
                return Player.IsEquipped(Value);
                break;
            case "TRACK_CUSTOMERS":
                var flag = this.GetQuestFlag(Player, "track_"+Key);
                var count = Player.GetHistory("CUSTOMERS", Key);
                if (count - flag < Value) return false;
                break;
            case "TRACK_PROGRESS":
                if (App.QuestEngine.GetProgressValue(Player, Key) < 1.) return false;
                break;
        }
        return true;
    }

    /**
     * Returns an array of objects that represent reward entries.
     * @param {string} QuestID
     * @param {string} RewardType
     * @returns {*}
     */
    static GetQuestRewards(QuestID, RewardType) {
        var r = App.Data.Quests[QuestID]["REWARD"];
        if (typeof RewardType === 'undefined') return r;
        return r.filter(function (o) {
            return o["REWARD_TYPE"] == RewardType;
        });
    }

    /**
     * Completes the quest. Pass optional arg of ChoiceItem to add an item from a selection dialogue.
     * Will add rewards from the REWARD array automatically that are not defined as TYPE=ITEM_CHOICE.
     * @param {App.Entity.Player} Player
     * @param {string} QuestID
     * @param {string} ChoiceItem
     */
    static CompleteQuest(Player, QuestID, ChoiceItem) {
        Player.QuestFlags[QuestID] = "COMPLETED";
        var r = App.Data.Quests[QuestID]["REWARD"];
        var p = App.Data.Quests[QuestID]["POST"];
        var c = App.Data.Quests[QuestID]["CHECKS"];
        var i;

        for (i = 0; i < r.length; i++) {
            if (r[i]["REWARD_TYPE"] != "ITEM_CHOICE") {
                QuestEngine.GiveQuestReward(Player, r[i]);
            } else if ((typeof ChoiceItem !== 'undefined') && (r[i]["NAME"] == ChoiceItem)) {
                Player.AddItem(r[i]["TYPE"], r[i]["NAME"], r[i]["AMOUNT"]);
            }
        }

        for (i = 0; i < p.length; i++) this._DoTriggers(p[i], Player);

        for (i = 0; i < c.length; i++) {
            if (c[i]["TYPE"] == 'QUEST_ITEM') {
                var o = Player.GetItemByName(c[i]["NAME"]);
                if (o !== undefined)  {
                    if (o._itemClass == 'QUEST') {
                        Player.DeleteItem(o);
                    } else {
                        o.RemoveCharges(c[i]["VALUE"]); // consumable quest items.
                    }
                }
            }
        }
    }

    /**
     * Accept the quest and process triggers.
     * @param {App.Entity.Player} Player
     * @param {string} QuestID
     */
    static AcceptQuest( Player, QuestID) {
        this.SetQuestFlag(Player, QuestID, "ACTIVE");
        if (App.Data.Quests[QuestID].hasOwnProperty("ON_ACCEPT")) {
            var a = App.Data.Quests[QuestID]["ON_ACCEPT"];
            for (var i = 0; i < a.length; i++) this._DoTriggers(a[i], Player);
        }

    }

    /**
     * Do stuff
     * @param {*} postCheck
     * @param {App.Entity.Player} Player
     * @private
     */
    static _DoTriggers( postCheck, Player ) {
        var Type, Name, Value, Opt;
        Type  = postCheck["TYPE"];
        Name  = postCheck["NAME"];
        Value = postCheck["VALUE"];
        Opt  = postCheck["OPT"];

        switch(Type) {
            case 'QUEST_FLAG':
                if (Opt === "DELETE") {
                    delete Player.QuestFlags[Name];
                } else {
                    Player.QuestFlags[Name] = Value;
                }
                break;
            case 'JOB_FLAG':
                Player.JobFlags[Name] = Value;
                break;
            case 'QUEST_ITEM':
                Player.AddItem("QUEST", Name, 0);
                break;
            case 'TRACK_CUSTOMERS':
                // Let's set a tag in the player to start tracking their history
                Player.QuestFlags["track_"+Name] = Player.GetHistory("CUSTOMERS", Name);
                break;
            case 'TRACK_PROGRESS':
                this.SetProgressValue(Player, Name, 0.0);
                break;
            case 'SET_CLOTHING_LOCK':
                Player.SetLock(Name, Value);
                break;

        }
    }
    /**
     * Gives a reward to a player.
     * @param {App.Entity.Player} Player
     * @param {Object} QuestReward
     */
    static GiveQuestReward(Player, QuestReward) {
        var Reward    = QuestReward["REWARD_TYPE"];
        var Type      = QuestReward["TYPE"];
        var Name      = QuestReward["NAME"];
        var Value     = QuestReward["AMOUNT"];
        if (typeof Value === 'undefined') Value = QuestReward["VALUE"];
        var NPC       = QuestReward["NPC"];

        switch (Reward) {
            case "UNLOCK_SHOP":
                if (Player.StoreInventory[Name]["INVENTORY"].length < 1) {
                    App.StoreEngine.OpenStore(Player, Player.GetNPC(NPC));
                }
                App.StoreEngine.ToggleStoreItem(Player, Name, Value, 0);
                break;
            case "RESET_SHOP":
                if (Player.StoreInventory.hasOwnProperty(Name) ) {
                    delete Player.StoreInventory[Name];
                }
                break;
            case "MONEY":
                Player.AdjustMoney(Value);
                break;
            case "MOOD":
                Player.GetNPC(Name).AdjustStat("Mood", Value);
                break;
            case "ITEM":
                Player.AddItem(Type, Name, Value);
                break;
            case "SLOT":
                Player.UnlockSlot();
                break;
        }
    }

    /**
     * Returns a list of quest entries that fit the criteria on the "flag" option.
     * cancomplete - Player can possibly complete these now.
     * available - Player can accept these quests.
     * completed - Quests the player has completed.
     * active - Quests that are currently active.
     * any - return all quests that match the above criteria.
     * @param {string} Flag
     * @param {App.Entity.Player} Player
     * @param {string} [NPC] - The NPC ID of the quest giver. Optional.
     * @returns {Array}
     */
    static GetQuests(Flag, Player, NPC) {
        var Quests = [];
        var List = Object.keys(App.Data.Quests);

        for (var i = 0; i < List.length; i++) {
            var o = App.Data.Quests[List[i]];
            if (typeof NPC === 'undefined') {
                if ((Flag == 'cancomplete') && (QuestEngine.CanCompleteQuest(Player, o["ID"]) == true)) Quests.push(o);
                if ((Flag == 'available' ) && (QuestEngine.QuestAvailable(Player, o["ID"]) == true)) Quests.push(o);
                if ((Flag == 'completed' ) && (QuestEngine.QuestCompleted(Player, o["ID"]) == true)) Quests.push(o);
                if ((Flag == 'active') && (QuestEngine.QuestActive(Player, o["ID"]) == true)) Quests.push(o);
                if ((Flag == 'any') &&
                    ( (QuestEngine.QuestActive(Player, o["ID"]) == true) || (QuestEngine.QuestCompleted(Player, o["ID"]) == true) ||
                    (QuestEngine.QuestAvailable(Player, o["ID"]) == true) || (QuestEngine.CanCompleteQuest(Player, o["ID"]) == true))) Quests.push(o);
            } else {
                if ((Flag == 'cancomplete') && (o["GIVER"] == NPC) && (QuestEngine.CanCompleteQuest(Player, o["ID"]) == true)) Quests.push(o);
                if ((Flag == 'available' ) && (o["GIVER"] == NPC) && (QuestEngine.QuestAvailable(Player, o["ID"]) == true)) Quests.push(o);
                if ((Flag == 'completed' ) && (o["GIVER"] == NPC) && (QuestEngine.QuestCompleted(Player, o["ID"]) == true)) Quests.push(o);
                if ((Flag == 'active') && (o["GIVER"] == NPC) && (QuestEngine.QuestActive(Player, o["ID"]) == true)) Quests.push(o);
                if (((Flag == 'any') && (o["GIVER"] == NPC)) &&
                    ( (QuestEngine.QuestActive(Player, o["ID"]) == true) || (QuestEngine.QuestCompleted(Player, o["ID"]) == true) ||
                    (QuestEngine.QuestAvailable(Player, o["ID"]) == true) || (QuestEngine.CanCompleteQuest(Player, o["ID"]) == true))) Quests.push(o);
            }
        }

        return Quests;
    }

    /**
     * Returns if a quest is available to be accepted.
     * @param {App.Entity.Player} Player
     * @param {string} QuestID
     * @returns {boolean}
     */
    static QuestAvailable(Player, QuestID) {
        if ((QuestEngine.QuestCompleted(Player, QuestID) == true) || (QuestEngine.QuestActive(Player, QuestID) == true)) return false;
        var PRE = App.Data.Quests[QuestID]["PRE"];
        var Type, Name, Value;

        for (var i = 0; i < PRE.length; i++) {
            Type    = PRE[i]["TYPE"];
            Name    = PRE[i]["NAME"];
            Value   = PRE[i]["VALUE"];

            //NOTE: QUEST_FLAG should be last PRE or it will override other PREs to return true
            switch(Type) {
                case "QUEST_FLAG":
                    if (typeof Player.QuestFlags[Name] === 'undefined') return false;
                    if (Player.QuestFlags[Name] != Value) return false;
                break;
                case "STYLE_CATEGORY":

                    if(Player.GetStyleSpecRating(Name) < Value) return false;
                break;
                case "DAYS_PASSED":
                    if(Player.Day < Value) return false;
                break;
                case "IS_WEARING":
                console.log("Name="+Name+",Value="+Value);
                    if(Value == "NOT" ) return (Player.GetEquipmentInSlot(Name) == null);
                    if( (typeof Value === 'undefined' || Value == "") && Player.GetEquipmentInSlot(Name) == null) return false;
                    return Player.IsEquipped(Value);
                    //if(Value == "NOT"){ if(Player.GetEquipmentInSlot(Name) != null){ return false } }
                    //if(Value != "NOT"){ if(Player.GetEquipmentInSlot(Name) == null){ return false } }
                break;
            }
        }

        return true;
    }

    /**
     * Returns if the quest has been completed.
     * @param {App.Entity.Player} Player
     * @param {*} QuestID
     * @returns {boolean}
     */
    static QuestCompleted(Player, QuestID) {
        return ((typeof Player.QuestFlags[QuestID] !== 'undefined') && (Player.QuestFlags[QuestID] == 'COMPLETED'));
    }

    /**
     * Returns if the quest is currently active (in progress).
     * @param {App.Entity.Player} Player
     * @param QuestID
     * @returns {boolean}
     */
    static QuestActive(Player, QuestID) {
        return ((typeof Player.QuestFlags[QuestID] !== 'undefined') && (Player.QuestFlags[QuestID] == 'ACTIVE'));
    }

    /**
     * Checks to see if player can complete a quest as defined by Flag.
     * @param {App.Entity.Player} Player
     * @param {String} Flag
     * @returns {boolean}
     */
    static CanCompleteQuest(Player, Flag) {
        if ((typeof Player.QuestFlags[Flag] === 'undefined')) return false;
        if (Player.QuestFlags[Flag] == 'COMPLETED') return false; // Should never happen eh??
        var checks = App.Data.Quests[Flag]["CHECKS"];
        var Name;
        var Reverse;

        for (var i = 0; i < checks.length; i++) {
            Name = checks[i]["NAME"];
            Reverse = 0;

            if (typeof Name !== 'undefined' && Name.charAt(0) == '-') {
                Name = Name.slice(1);
                Reverse = 1;
            }

            if ( this.CheckCondition(Player, checks[i]["TYPE"], Name, checks[i]["VALUE"], Reverse ) == false ) return false;

        }
        return true;
    }

    /**
     * Lists quests in active state
     * @param {App.Entity.Player} Player
     * @returns {string[]}
     */
    static ActiveQuestIDs = function(Player) {
        var res = [];
        for (var prop in Player.QuestFlags) {
            if (!Player.QuestFlags.hasOwnProperty(prop)) continue;
            if (this.QuestActive(Player, prop)) res.push(prop);
        }
        return res;
    }

    /**
     * Handles time-dependent changes for active quest
     * @param {App.Entity.Player} Player
     */
    static NextDay(Player) {
        var activeQuests = this.ActiveQuestIDs(Player);
        for (let questId of activeQuests) {
            if (App.Data.Quests[questId] === undefined || !App.Data.Quests[questId].hasOwnProperty("ON_DAY_PASSED")) continue;
            App.Data.Quests[questId]["ON_DAY_PASSED"].call(App.Data.Quests[questId], Player);
        }
    }
};
