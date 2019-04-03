/**
 * Represents a basic task for the player. Could be either a job or quest.
 */
App.Task = class Task {
    /**
     *
     * @param {Object} Data
     */
    constructor(Data) {
        /** @type {object}
         *  @private */
        this._TaskData   = Data;
        /** @type {Array.<App.Scene>}
         *  @private */
        this._SceneBuffer = [ ];
        /** @type {Array.<string>}
         * @private */
        this._MissingRequirements = [ ];
	}

	/**
	 * @returns {App.Data.Tasks.Task}
	 */
	get TaskData() {
		return this._TaskData;
    }

    /**
     * @returns {App.Scene[]}
     */
    get Scenes() {
        return this._SceneBuffer;
    }

    /** @private
     *  @param {number} X
     *  @param {number} Y
     *  @returns {boolean} */
    static _gte(X, Y) { return (X >= Y); }
    /** @private
     *  @param {number} X
     *  @param {number} Y
     *  @returns {boolean} */
    static _lte(X, Y) { return (X <= Y); }
    /** @private
     *  @param {number} X
     *  @param {number} Y
     *  @returns {boolean} */
    static _gt(X, Y) { return (X > Y);  }
    /** @private
     *  @param {number} X
     *  @param {number} Y
     *  @returns {boolean} */
    static _lt(X, Y) { return (X < Y);  }
    /** @private
     *  @param {number} X
     *  @param {number} Y
     *  @returns {boolean} */
    static _eq(X, Y) { return (X == Y); }
    /** @private
     *  @param {number} X
     *  @param {number} Y
     *  @returns {boolean} */
    static _ne(X, Y) { return (X != Y); }

    /** @returns {string} */
    ID() { return this.TaskData["ID"]; }
    /** @returns {string} */
    Giver() { return this.TaskData["GIVER"]; }
    /** @returns {boolean} */
    Hidden() { return this.TaskData["HIDDEN"]; }

    /**
     * Check to see if the player meets the other requirements to take the task. Usually skill, stat, body related or quest flags.
     * @param {App.Entity.Player} Player
     * @param {App.Entity.NPC|String} NPC
     * @param {App.Data.Tasks.Requirement[]} Requirements
     * @param {string[]} [MissingRequirements] Will be filled with textual description of missing requirements
     * @returns {boolean}
     */
    static CheckRequirements(Player, NPC, Requirements, MissingRequirements) {
        let Type, Name, Value, Condition, Option;
        let StatusFlag = true;
        let Result = true;
        let ReqString = "";
        if (MissingRequirements === undefined) MissingRequirements = [];

        for(const r of Requirements) {
            Type        = r.TYPE;
            Name        = r.NAME;
            Value       = r.VALUE;
            Condition   = r.CONDITION;
            Option      = r.OPT;
            ReqString   = "";

            switch(Type) {
                case "STAT" :
                    if (Task._Cmp( Player.GetStat(Type, Name), Value, Condition) == false) {
                        StatusFlag = false;
                        if (Condition == "lt" || Condition == "lte" ) {
                            ReqString = App.PR.ColorizeString(Value, Name + " stat is too high");
                        } else {
                            ReqString = App.PR.ColorizeString(Value, Name + " stat is too low");
                        }
                    }
                    break;
                case "SKILL" :
                    if (Task._Cmp( Player.GetStat(Type, Name), Value, Condition) == false) {
                        StatusFlag = false;
                        if (Condition == "lt" || Condition == "lte" ) {
                            ReqString = App.PR.ColorizeString(Value, Name  + " skill is too high");
                        } else {
                            ReqString = App.PR.ColorizeString(Value, Name + " skill is too low");
                        }
                    }
                    break;
                case "BODY" :
                    if (Task._Cmp( Player.GetStat(Type, Name), Value, Condition) == false) {
                        StatusFlag = false;
                        if (Condition == "lt" || Condition == "lte" ) {
                            ReqString = App.PR.ColorizeString(Value, "Too much "+ Name);
                        } else {
                            ReqString = App.PR.ColorizeString(Value, "Not enough " + Name);
                        }
                    }
                    break;
                case "META":
                    let pStat = 0;
                    if (Name == 'BEAUTY') pStat = Player.Beauty();
                    if (Task._Cmp(pStat, Value, Condition) == false) {
                        StatusFlag = false;
                        if (Condition == "lt" || Condition == "lte") {
                            ReqString = App.PR.ColorizeString(Value, "Too much " + Name.toLowerCase());
                        } else {
                            ReqString = App.PR.ColorizeString(Value, "Not enough " + Name.toLowerCase());
                        }
                    }
                    break;
                case "MONEY":
                    if (Task._Cmp( Player.Money, Value, Condition) == false) {
                        StatusFlag = false;
                        ReqString = "@@color:orange;Need Money ("+(Value - Player.Money) + ")";
                    }
                    break;
                case "NPC_STAT":
                    if (typeof Option !== 'undefined') NPC = Player.GetNPC(Option);
                    if (typeof NPC !== 'undefined') {
                        if (Task._Cmp( NPC.GetStat(Name), Value, Condition ) == false) {
                            StatusFlag = false;
                            if (Condition == "lt" || Condition == "lte" ) {
                                ReqString = App.PR.ColorizeString(Value, NPC.Name() +"'s " + Name  + " is too high");
                            } else {
                                ReqString = App.PR.ColorizeString(Value, NPC.Name() + "'s " + Name + " is too low");
                            }
                        }
                    }
                    break;
                case "DAYS_PASSED":
                    if (Name) {
                        Value = App.Quest.GetFlag(Player, Name);
                    }
                    StatusFlag = (Player.Day >= Value);
                    if (!StatusFlag) ReqString = `Wait until day ${Value}`;
                    break;
                case "QUEST":
                case "QUEST_FLAG":
                    if (Task._Cmp( Player.QuestFlags[Name], Value, Condition) == false) {
                        if (App.Data.Quests[Name] !== undefined) {
                            ReqString = "@@color:gold;Quest '"+ App.Data.Quests[Name]["Title"]+"' not complete@@";
                        }
                        StatusFlag = false;
                    }
                    break;
                case "FLAG":
                case "JOB_FLAG":
                    if (Task._Cmp( Player.JobFlags[Name], Value, Condition) == false ) {
                        StatusFlag = false;
                    }
                    break;
                case "ITEM":
                    if (Player.GetItemById(Name) === undefined) {
                        StatusFlag = false;
                        ReqString = "@@color:red;Missing item '" + Name + "' x" + Value + "@@";
                    } else if (Task._Cmp(Player.GetItemById(Name).Charges(), Value, Condition) == false) {
                        StatusFlag = false;
                        ReqString = "@@color:red;Missing item '" + Name + "' x" + Value + "@@";
                    }
                    break;
                case "EQUIPPED":
                    if (!Player.IsEquipped(Name)) {
                        StatusFlag = false;
                        ReqString = "@@color:red;Must have '" + Name + "' equipped.@@";
                    }
                    break;
                    /* TODO: Refactor this to check also for wearing specific items. **/
                case "IS_WEARING":
                    console.log('Name=' + Name + ",Value=" + Value);
                    if (Value === "NOT") {
                        StatusFlag = Player.GetEquipmentInSlot(Name) == null;
                    } else if ((typeof Value === 'undefined' || Value === "") && Player.GetEquipmentInSlot(Name) == null) {
                        StatusFlag = false;
                    } else {
                        StatusFlag = Player.IsEquipped(Value);
                    }
                    break;
                case "STYLE_CATEGORY":
                    if (Task._Cmp( Player.GetStyleSpecRating(Name), Value, Condition) == false ){
                        StatusFlag = false;
                        if (Condition == "lt" || Condition == "lte" ) {
                            ReqString = App.PR.ColorizeString(Value, "Too much style '"+Name+"'");
                        } else {
                            ReqString = App.PR.ColorizeString(Value, "Not enough style '"+Name+"'");
                        }
                    }
                    break;
                case "STYLE":
                    if (Task._Cmp( Player.Style(), Value, Condition) == false) {
                        StatusFlag = false;
                        if (Condition == "lt" || Condition == "lte" ) {
                            ReqString = App.PR.ColorizeString(Value, "Style and Grooming too high");
                        } else {
                            ReqString = App.PR.ColorizeString(Value, "Style and Grooming too low");
                        }
                    }
                    break;
                case "HAIR_STYLE":
                    if ((Player.GetHairStyle() == Name) != Value) {
                        StatusFlag = false;
                        ReqString = "@@color:red;Need '"+Name+"' hair style@@";
                    }
                    break;
                case "HAIR_COLOR":
                    if ((Player.GetHairColor() == Name) != Value) {
                        StatusFlag = false;
                        ReqString = "@@color:red;Need '"+Name+"' hair color@@";
                    }
                    break;
                case "PORT_NAME":
                    if ( (Player.GetShipLocation() == Name) != Value) {
                        StatusFlag = false;
                        ReqString = "@@color:red; Need Port'"+Name+"'@@";
                    }
                    break;
                case "IN_PORT":
                    if ( Player.IsInPort(Value) != Condition) {
                        StatusFlag = false;
                    }
                    break;
                case "TRACK_CUSTOMERS":
                    var flag = Player.QuestFlags["track_"+Name];
                    var count = Player.GetHistory("CUSTOMERS", Name);
                    if (count - flag < Value) StatusFlag = false;
                    break;
                case "TRACK_PROGRESS":
                    StatusFlag = (App.Quest.GetProgressValue(Player, Name) >= 1.);
                    break;

            }

            if (ReqString != "") MissingRequirements.push(ReqString);
            if (!StatusFlag && Result) { Result = false; }
        }

        return Result;
    }

    /**
     * Helper function - runs comparisons.
     * @param {number} A
     * @param {number} B
     * @param {string} C
     * @returns {boolean}
     * @private
     */
    static _Cmp(A, B, C) {
        switch(C) {
            case "gte":
                return Task._gte(A, B);
            case "lte":
                return Task._lte(A, B);
            case "gt" :
                return Task._gt(A, B);
            case "lt" :
                return Task._lt(A, B);
            case "eq" :
                return Task._eq(A, B);
            case "ne" :
                return Task._ne(A, B);
            default:
                return Task._lt(A, B);
        }
	}

	/**
     * @param {App.Entity.Player} _Player
     * @param {App.Entity.NPC} _NPC
	 * @returns {App.Scene[]}
	 * @abstract
     */
	_AvailableScenes(_Player, _NPC) {
		console.log("Pure virtual function call: App.Task._AvailableScenes()");
		return null;
	}

    /**
     * Play the selected task scenes.
     * @param {App.Entity.Player} Player
     * @param {App.Entity.NPC} NPC
     * @returns {Array.<App.Scene>}
	 * @virtual
     */
    PlayScenes(Player, NPC) {
        var Results = { };

        Task.Debug("PlayScenes", "Started");
        this._SceneBuffer = [ ];

		var Scenes = this._AvailableScenes(Player, NPC);
        for (const s of Scenes) {
            s.CalculateScene(Results);
            this._SceneBuffer.push(s);
        }

        Task.Debug("PlayScenes", "Ended");
        return $.grep(this._SceneBuffer, function(s) { return s.Triggered() == true; });
    }

    /**
     *
     * @param {App.Entity.Player} _Player
     */
    CompleteScenes(_Player) {
        for (const s of this._SceneBuffer) {
            if (s.Triggered()) {
                s.CompleteScene();
            }
        }
    }

    /**
     * Match a result to a string and return the colorized version.
     * @param {string} Tag
     * @param {number} Result
     * @param {number} Value
     * @returns {string}
     * @private
     */
    _MatchResult(Tag, Result, Value) {
        var Output = "";
        var Percent = Math.floor( ((Result / Value) * 100)/2);

        /**
         * @param {string} a
         * @returns {string}
         */
        var Colorize = function(a) { return  (typeof a !== 'undefined') ? App.PR.ColorizeString(Percent, a.slice(2,-2), 100) : ""; };

        for ( var i = 0; i < this.TaskData["JOB_RESULTS"].length; i++)
            if (Percent <= this.TaskData["JOB_RESULTS"][i][Tag])
                return this.TaskData["JOB_RESULTS"][i]["TEXT"].replace(/(@@.*@@)/g, Colorize );

        return Output;
    }

    /**
     * Print the "job results" at the end of a job.
     * @returns {string}
     * @private
     */
    _PrintJobResults() {
        var Checks = this._SceneBuffer[this._SceneBuffer.length-1].Results();
        var cKeys = Object.keys(Checks);
        /** @type {string[]} */
        var Results = [ ];

        for ( var i = 0; i < cKeys.length; i++)
            Results.push(this._MatchResult(cKeys[i], Checks[cKeys[i]]["RESULT"], Checks[cKeys[i]]["VALUE"]));
        Results = Results.filter( function(r) { return r != ""; });
        return Results.length > 0 ? " " + Results.join(" ") : Results.join("");
    }

    /**
     * Calculate the total pay from all scenes for the task.
     * @returns {string}
     * @private
     */
    _PrintPay() {
        var Pay = this.TaskData["PAY"];
        if (Pay === undefined) Pay = 0;
        for (const sb of this._SceneBuffer) {
            Pay += sb.RewardItems().Pay;
        }
        return (Pay > 0) ? "@@color:yellow;"+Pay+"@@" : "";
    }

    /**
     * Print all of the items earned in this task
     * @returns {string}
     * @private
     */
    _SummarizeTask() {
        var items = [ ];
        var Pay = this.TaskData["PAY"];
        if (Pay === undefined) Pay = 0;

        for (const sb of this._SceneBuffer) {
            console.log(sb.RewardItems());
            Pay += sb.RewardItems().Pay;
            for (const ri of sb.RewardItems().Items) {
                var n = App.Item.SplitId(ri["Name"]);
                var oItem = App.Item.Factory(n.Category, n.Tag);
                items.push(oItem.Description + " x " + ri["Value"]);
            }
        }

        if (Pay > 0) {
            items.unshift("@@color:yellow;"+Pay+" coins@@");
        }

        if (Pay > 0 || items.length > 0) {
            items.unshift("\n@@color:cyan;Your receive some items:@@");
        }

        if (items.length > 0 ) return items.join("\n") + "\n";
        return "";
    }

    /**
     * Tokenize a string and return result.
     * @param {App.Entity.Player} Player
     * @param {App.Entity.NPC} NPC
     * @param {string} String
     * @returns {*}
     * @virtual
     * @private
     */
    _Tokenize(Player, NPC, String) {
        if (typeof String == 'undefined') return "";
        String = App.PR.TokenizeString(Player, NPC, String);
        return String;
    }

    /**
     * Print the intro to a task.
     * @param {App.Entity.Player}Player
     * @param {App.Entity.NPC} Npc
     * @returns {string}
     */
    Intro(Player, Npc) {
        return  App.PR.TokenizeString(Player, Npc, this.TaskData["INTRO"]);
    }

    /**
     * Print the "start" scene of a job.
     * @param {App.Entity.Player} Player
     * @param {App.Entity.NPC} NPC
     * @returns {string}
     */
    PrintStart(Player, NPC) {
        return this.TaskData["START"] == "" ? "" : this._Tokenize(Player, NPC, this.TaskData["START"]) + "\n";
    }

    /**
     * Print the "end" scene of a job.
     * @param {App.Entity.Player} Player
     * @param {App.Entity.NPC} NPC
     * @returns {string}
     */
    PrintEnd(Player, NPC) {
        var JobEnd = this.TaskData["END"] == "" ? "" :  this._Tokenize(Player, NPC, this.TaskData["END"])+ "\n";
        // if (this._SummarizeTask() != "") JobEnd += this._SummarizeTask();
        return JobEnd;
    }

    static get _Debug() {
        return Task._debug;
    }

    /**
     * @param {boolean} v
     */
    static set _Debug(v) {
        Task._debug = v;
    }

    /**
     *
     * @param {string} Fun
     * @param {string} String
     */
    static Debug(Fun, String) {
        if (Task._Debug == true)
        console.log(Fun+":"+String+"\n");
    }
};

/** @type {boolean}
 *  @private */
App.Task._debug = false;

App.SceneRewards = class SceneRewards {
    constructor() {
        this.Pay = 0;
        this.ScaledValues = [ ];
        this.Items = [ ];
        this.ItemChoices = [ ];
        this.ChosenItem = -1;
        this.SlotUnlockCount = 0;
    }
};

/**
 * Stores and plays a "scene" from a job.
*/
App.Scene = class Scene {
    /**
     * @param {App.Entity.Player} Player
     * @param {App.Entity.NPC} NPC
     * @param {object} SceneData
     * @constructor
     */
    constructor(Player, NPC, SceneData) {
        /** @type {boolean}
         *  @private */
        this._Debug     = true;
        /** @type {App.Entity.Player}
         *  @private */
        this._Player    = Player;
        /** @type {App.Entity.NPC}
         *  @private */
        this._NPC       = NPC;
        /** @type {object}
         *  @private */
        this._SceneData = SceneData;
        /** @type {object}
         *  @private */
        this._Flags     = Player.JobFlags;
        /** @type {boolean}
         *  @private */
        this._Triggered = false;
        /** @type {string}
         *  @private */
        this._StrBuffer = "";

        /** @type {App.Data.Tasks.CheckResults}
         * @private */
        this._Results = { };

        /** @type {App.SceneRewards}
         * @private */
        this._RewardItems = new App.SceneRewards();
    }

    /** @returns {string} */
    Id() { return this._SceneData["ID"]; }
    /** @returns {boolean} */
	Triggered() { return this._Triggered; }
    /** @returns {string} */
    Print() { return (this._StrBuffer != "") ? this._StrBuffer + "\n" : ""; }
    /** @returns {object} */
    Results() { return this._Results; }
    /** @returns {App.SceneRewards} */
    RewardItems() { return this._RewardItems; }

	/**
     * Tokenize a string
     * @param String
     * @returns {string}
     * @protected
     */
    _Tokenize(String) {
		return App.PR.TokenizeString(this._Player, this._NPC, String);
	}
    /**
     * Process a Trigger rule and return true/false state on if it fires.
     * @param {string} Type
     * @param {string} Name
     * @param {number} Value
     * @param {string} Condition
     * @param {string} Opt
	 * @param {object} Checks
     * @returns {boolean}
     * @private
     */
    _ProcessTrigger(Type, Name, Value, Condition, Opt, Checks) {
        Scene.Debug("_ProcessTrigger", "Type="+Type+",Name="+Name+",Value="+Value+",Condition="+Condition+",Opt="+Opt);

        switch(Type)
        {
            case "NPC_STAT":
                return App.Task._Cmp(this._NPC.GetStat(Name), Value, Condition);
            case "RANDOM-100":
                return App.Task._Cmp(Math.ceil((100 * Math.random())+1), Value, Condition);
            case "COUNTER":
                if ( this._Player.JobFlags.hasOwnProperty(Name) == false ) this._Player.JobFlags[Name] = 0;
                if ( (typeof Opt !== 'undefined') && (Opt == "RANDOM"))
                    return App.Task._Cmp(this._Player.JobFlags[Name], Math.ceil(Value * Math.random()), Condition);
                return App.Task._Cmp(this._Player.JobFlags[Name], Value, Condition);
            case "STAT_CORE":
                if ((typeof Opt !== 'undefined') && (Opt == "RANDOM"))
                    return App.Task._Cmp(this._Player.GetStatPercent("STAT", Name), Math.ceil((100 * Math.random())+1), Condition);
                return App.Task._Cmp(this._Player.GetStatPercent("STAT", Name), Value, Condition);
            case "STAT_BODY":
                if ((typeof Opt !== 'undefined') && (Opt == "RANDOM"))
                    return App.Task._Cmp(this._Player.GetStatPercent("BODY", Name), Math.ceil((100 * Math.random())+1), Condition);
                return App.Task._Cmp(this._Player.GetStatPercent("BODY", Name), Value, Condition);
            case "STAT_SKILL":
                if ((typeof Opt !== 'undefined') && (Opt == "RANDOM"))
                    return App.Task._Cmp(this._Player.GetStatPercent("SKILL", Name), Math.ceil((100 * Math.random())+1), Condition);
                return App.Task._Cmp(this._Player.GetStatPercent("SKILL", Name), Value, Condition);
            case "FLAG":
                if ( (typeof Opt !== 'undefined') && (Opt == "NOT_SET")) {
                    return (this._Player.JobFlags.hasOwnProperty(Name) == false);
                }

                if ( (typeof Opt !== 'undefined') && (Opt == "SET"))
                    return (this._Player.JobFlags.hasOwnProperty(Name) == true);

                return App.Task._Cmp(this._Player.JobFlags[Name], Value, Condition);
            case "TAG":
                if (Checks.hasOwnProperty(Name) == false) return true;
                var Percent = Math.ceil( (Checks[Name]["RESULT"] / Checks[Name]["VALUE"]) * 100);
                return App.Task._Cmp(Percent, Value, Condition);
            case 'HAS_ITEM':
                // Format like CATEGORY/NAME
                return (typeof this._Player.GetItemById(Name) !== 'undefined');
        }

        return true;
    }

    /**
     * Check the status of each trigger in a group and return true/false on if the scene fires
     * @param {Array.<object>} Triggers
	 * @param {object} Checks
     * @returns {boolean}
     * @private
     */
    _ProcessTriggers(Triggers, Checks) {
        for (var i = 0; i < Triggers.length; i++) {
            let r = this._ProcessTrigger(Triggers[i]["TYPE"], Triggers[i]["NAME"], Triggers[i]["VALUE"], Triggers[i]["CONDITION"], Triggers[i]["OPT"], Checks);
            Scene.Debug("_ProcessTriggers", `Trigger result: ${r}`);
            if (!r) return false;
        }

        return true;
    }

    /**
     * Check the status of each trigger in a group and return true/false on if the scene fires
     * @param {Array.<object>} Triggers
	 * @param {object} Checks
     * @returns {boolean}
     * @private
     */
    _ProcessTriggersAny(Triggers, Checks) {
        for (var i = 0; i < Triggers.length; i++) {
            let r = this._ProcessTrigger(Triggers[i]["TYPE"], Triggers[i]["NAME"], Triggers[i]["VALUE"], Triggers[i]["CONDITION"], Triggers[i]["OPT"], Checks);
            Scene.Debug("_ProcessTriggersAny", `Trigger result: ${r}`);
            if (r) return true;
        }

        return false;
    }

    /**
     * Process a reward rule from a scene and fill _RewardItems and _RewardObjects
     * @param {string} Type
     * @param {string} Name
     * @param {number|string} Value
     * @param {string} Opt
	 * @param {object} Checks
     * @private
     */
    _CalculateReward(Type, Name, Value, Opt, Checks) {
        var tagRef = /** @returns {number} */ function(TagRef, Checks, Prop) {
            return Checks[TagRef.slice(TagRef.indexOf("_")+1)][Prop];
        };

        // value refers to a result of a previous check
        var val = (typeof (Value) === 'string' && Value.indexOf("TAG_") === 0) ? tagRef(Value, Checks, "RESULT") : Value;
        if (Opt == 'RANDOM' ) val = Math.floor((val * Math.random())+1);
        // Retrieve the result of another check and modify the value of this reward by that scaling percentage.
        if ((typeof Opt === 'string') && (Opt.indexOf( "TAG_" ) > -1)) {
            val = Math.ceil(val * (tagRef(Opt, Checks, "MOD")));
        }

        this._RewardItems.ScaledValues.push(val);

        switch(Type) {
            case "MONEY":
                this._RewardItems.Pay += Math.floor(val);
                Scene.Debug("_CalculateReward", "Pay +=" + this._RewardItems.Pay.toString());
                break;
            case "ITEM": // any item by ID
                Scene.Debug("_CalculateReward", "Items.push(" + {"Name": Name, "Value": val, "Opt": Opt}.toString() + ")");
                this._RewardItems.Items.push({"Name": Name, "Value": val, "Opt": Opt});
                break;
            case "FOOD":
            case "DRUGS":
            case "COSMETICS":
            case "LOOT_BOX":
                Scene.Debug("_CalculateReward", "Items.push(" + {"Name": App.Item.MakeId(Type, Name), "Value": val, "Opt": Opt}.toString() + ")");
                this._RewardItems.Items.push({"Name": App.Item.MakeId(Type, Name), "Value": val, "Opt": Opt});
                break;
            case "CLOTHES":
                var data = App.Data.Clothes[Name];
                if (this._Player.OwnsWardrobeItem(data)) {
                    var clothCost = Math.floor( App.Item.CalculateBasePrice("CLOTHES", Name) * 0.3);
                    this._RewardItems.Pay += clothCost;
                    this._RewardItems.Items.push(clothCost);
                    break;
                } else {
                    this._RewardItems.Items.push({"Name": App.Item.MakeId(Type, Name), "Value": val, "Opt": Opt});
                }
                break;
            case "PICK_ITEM":
                var item = App.Item.PickItem( Name, val);
                if (item != null) {
                    if (item.cat == 'CLOTHES' && this._Player.OwnsWardrobeItem(item.cat, item.tag)) {
                        var itemCost = Math.floor( App.Item.CalculateBasePrice("CLOTHES", item.tag) * 0.3);
                        this._RewardItems.Pay += itemCost;
                        this._RewardItems.Items.push(itemCost);
                    } else {
                        this._RewardItems.Items.push({"Name": App.Item.MakeId(item.cat, item.tag), "Value": 1});
                    }
                }
                break;
            case "ITEM_CHOICE":
                this._RewardItems.ItemChoices.push({"Name": Name, "Value": val, "Opt": Opt});
                break;
            case "SLOT":
                this._RewardItems.SlotUnlockCount += 1;
                break;
        }
    }

    /**
     * Process a reward rule from a scene.
     * @param {string} Type
     * @param {string} Name
     * @param {string} Opt
     * @private
     */
    _ApplyReward(Type, Name, Opt) {
        var Value = this._RewardItems.ScaledValues.shift();

        Scene.Debug("_ApplyReward", "Type="+Type+",Name="+Name+",Value="+Value+",Opt="+Opt);

        switch(Type)
        {
            case "MONEY":
                // The total scene pay is handled upstream
                break;
            case "ITEM": // any item by ID
            case "FOOD":
            case "DRUGS":
            case "COSMETICS":
            case "LOOT_BOX":
            case "CLOTHES":
            case "PICK_ITEM":
                var itemRec = this._RewardItems.Items.shift();
                if (typeof (itemRec) !== 'number') { // if item was converted to money, its value was added to the _RewardItems.Pay
                    var n = App.Item.SplitId(itemRec["Name"]);
                    if (itemRec.Value > 0) {
                        this._Player.AddItem(n.Category, n.Tag, Value, Opt);
                    } else {
                        this._Player.TakeItem(itemRec["Name"], 0-itemRec.Value);
                    }
                }
                break;
            case "ITEM_CHOICE":
                if (this._RewardItems.ChosenItem >= 0 && this._RewardItems.ItemChoices.length > 0) {
                    var chosenItemRec = this._RewardItems.ItemChoices[this._RewardItems.ChosenItem];
                    var nameSplit = App.Item.SplitId(chosenItemRec["Name"]);
                    if (Value >= 0) {
                        this._Player.AddItem(nameSplit.Category, nameSplit.Tag, Value, Opt);
                    } else {
                        this._Player.TakeItem(chosenItemRec["Name"], Value);
                    }
                    this._RewardItems.ItemChoices = [ ];
                }
                break;
            case "STAT_XP":
            case "BODY_XP":
            case "SKILL_XP":
                this._Player.AdjustXP(Type.slice(0,-3), Name, Value);
                break;
            case "STAT":
                this._Player.AdjustStat(Name, Value);
                break;
            case "BODY":
                this._Player.AdjustBody(Name, Value);
                break;
            case "SKILL":
                this._Player.AdjustSkill(Name, Value);
                break;
            case "FLAG":
            case "JOB_FLAG":
                if (Opt == "DELETE")    delete this._Player.JobFlags[Name];
                if (Opt == "SET" )      this._Player.JobFlags[Name] = Value;
                if (Opt == "ADD" )      this._Player.JobFlags[Name] += Value;
                break;
            case "QUEST":
                let q = new App.Quest(App.Data.Quests[Name]);
                if (Value === "START") q.Accept(this._Player);
                if (Value === "COMPLETE") q.Complete(this._Player);
                break;
            case "QUEST_FLAG":
                if (Opt == "DELETE")    delete this._Player.QuestFlags[Name];
                if (Opt == "SET" )      this._Player.QuestFlags[Name] = Value;
                if (Opt == "ADD" )      this._Player.QuestFlags[Name] += Value;
                break;
            case "COUNTER":
                if (typeof this._Player.JobFlags[Name] === 'undefined') this._Player.JobFlags[Name] = 0;
                this._Player.JobFlags[Name] += 1;
                break;
            case "STORE":
                if (this._Player.StoreInventory[Name]["INVENTORY"].length < 1) {
                    App.StoreEngine.OpenStore(this._Player, this._NPC);
                }

                if (Opt == "LOCK") App.StoreEngine.ToggleStoreItem(this._Player, Name, Value, 1);
                if (Opt == "UNLOCK") App.StoreEngine.ToggleStoreItem(this._Player, Name, Value, 0);
                break;
            case "NPC_STAT":
                this._NPC.AdjustStat(Name, Value);
                break;
            case "PIRATE_STATS":
                this._Player.GetNPC("Crew").AdjustStat(Name, Value);
                this._Player.GetNPC("Cook").AdjustStat(Name, Value);
                this._Player.GetNPC("Quartermaster").AdjustStat(Name, Value);
                this._Player.GetNPC("FirstMate").AdjustStat(Name, Value);
                this._Player.GetNPC("Captain").AdjustStat(Name, Value);
                break;
            case "SAIL_DAYS":
                this._Player.AdvanceSailDays(Value);
                break;
            case "SET_CLOTHING_LOCK":
                this._Player.Clothing.SetLock(Name, Value);
                break;
            case "SLOT":
                this._Player.UnlockSlot();
                break;
            case "TRACK_CUSTOMERS":
                // Let's set a tag in the player to start tracking their history
                App.Quest.SetFlag(this._Player, "track_" + Name, this._Player.GetHistory("CUSTOMERS", Name));
                break;
        }
    }

    /**
     * Process a check rule on a a scene, store results in this._Checks[Tag]
     * @param {App.Data.Tasks.Check} Check
	 * @param {Object.<string, App.Data.Tasks.CheckResult>} Results
     * @private
     */
    _ProcessCheck(Check, Results) {
        let Scaling     = (Check.OPT != "NO_SCALING");
        let Value       = Check.VALUE || 100;
        let Result      = 0;

        switch(Check.TYPE)
        {
            case "STAT":
            case "BODY":
                Result = this._Player.StatRoll(Check.TYPE, Check.NAME, Check.DIFFICULTY, Value, Scaling);
                break;
            case "SKILL":
                Result = this._Player.SkillRoll(Check.NAME, Check.DIFFICULTY, Value, Scaling);
                break;
            case "META":
                switch (Check.NAME) {
                    case "BEAUTY":
                        Result = this._Player.GenericRoll(this._Player.Beauty(), Check.DIFFICULTY, Value, Scaling);
                        break;
                    case "DANCE_STYLE":
                        let defaultStyleResult = this._Player.GenericRoll(
                            this._Player.GetStyleSpecRating("Sexy Dancer"), Check.DIFFICULTY, Value, Scaling);
                        let specStyleResult = this._Player.GenericRoll(
                            this._Player.GetStyleSpecRating(App.JobEngine.instance.GetDance()), Check.DIFFICULTY, Value, Scaling);
                        Result = (defaultStyleResult + specStyleResult) / 2;
                        break;
                }
                break;
            case "FUNC":
                Result = Check.FUN(this._Player, this, this._Results);
                break;
        }
        let r = {
            "RESULT": Result,
            "VALUE": Value,
            "MOD": Result / Value
        };
        Scene.Debug("_ProcessCheck", `${Check.TAG}: ${JSON.stringify(r)}`);
        Results[Check.TAG] = r;
        this._Results[Check.TAG] = r;
        if (typeof Check.REWARD !== 'undefined') {
            this._CalculateReward(Check.REWARD, Check.R_NAME, Value, Check.OPT, Result);
        }
    }

    /**
     * Process all the checks in a scene.
     * @param {Array.<object>} Checks
	 * @param {object} Results
     * @private
     */
    _ProcessChecks(Checks, Results) {
        for (var i = 0; i < Checks.length; i++)
            this._ProcessCheck( Checks[i], Results);
    }

    /**
     * Process all the "POST" flags in a scene. Generally they give rewards/set status flags.
     * @param Posts
	 * @param {object} Checks
     * @private
     */
    _ProcessPost(Posts, Checks) {
        Scene.Debug("_ProcessPost", JSON.stringify(Checks));

        for (var i = 0; i < Posts.length; i++)
            this._CalculateReward(Posts[i]["TYPE"], Posts[i]["NAME"], Posts[i]["VALUE"], Posts[i]["OPT"], Checks);
    }

    /**
     * Pass a result value from a Check and find the appropriate flavor text and colorize it.
     * @param {string} Tag
     * @param {number} Result
     * @param {number} Value
     * @returns {string}
     * @private
     */
    _MatchResult(Tag, Result, Value) {
        var Output = "";
        var Percent = Math.floor((Result / Value) * 100);
        /**
         * @param {string} a
         * @returns {string}
         */
        var Colorize = function(a) { return  (typeof a !== 'undefined') ? App.PR.ColorizeString(Percent, a.slice(2,-2), 100) : ""; };

        for (var i = 0; i < this._SceneData["RESULTS"].length; i++) {
            if (Percent <= this._SceneData["RESULTS"][i][Tag]) {
                console.log("Percent " + Percent + "<=" + this._SceneData["RESULTS"][i][Tag]);
                return this._SceneData["RESULTS"][i]["TEXT"].replace(/(@@.*@@)/g, Colorize);
            }
        }
        return Output;
    }

    /**
     * Iterate through all of the Check results for a scene and then find their appropriate flavor text.
     * @returns {string}
	 * @param {object} Checks
     * @private
     */
    _SceneResults(Checks) {
        var cKeys = Object.keys(Checks);
        var Results = [ ];

        for ( var i = 0; i < cKeys.length; i++)
            Results.push( this._Tokenize(this._MatchResult(cKeys[i], Checks[cKeys[i]]["RESULT"], Checks[cKeys[i]]["VALUE"])));

        Results = Results.filter( function(r) { return r != ""; });
        return Results.length > 0 ? " " + Results.join(" ") : "";
    }

    /**
     * Process all the rules in a scene and store the results in the object.
	 * @param {object} Checks
     * @abstract
     */
    CalculateScene(Checks) {
        App.Scene.Debug(this.Id() + ":CalculateScene", "Started");

        this._Results = Checks;
        if ((this._SceneData["TRIGGERS"].length > 0) && (this._ProcessTriggers(this._SceneData["TRIGGERS"], Checks) == false)) return;
        if ((this._SceneData["TRIGGERS_ANY"].length > 0) && (this._ProcessTriggersAny(this._SceneData["TRIGGERS_ANY"], Checks) == false)) return;

        this._Triggered = true;
        Scene.Debug(this.Id() + ":CalculateScene", 'Scene triggered');

        if (this._SceneData["CHECKS"].length > 0) this._ProcessChecks(this._SceneData["CHECKS"], Checks);

        if (this._SceneData["POST"].length > 0) this._ProcessPost(this._SceneData["POST"], Checks);

        this._StrBuffer =   this._SceneData["START"] != "" ? this._Tokenize(this._SceneData["START"]) : "";
        this._StrBuffer +=  this._SceneResults(Checks);
        this._StrBuffer +=  this._SceneData["END"] != "" ? " " + this._Tokenize(this._SceneData["END"]) : "";

        App.Scene.Debug(this.Id() + ":CalculateScene", "Ended");
    }

    CompleteScene() {
        App.Scene.Debug(this.Id() + ":CompleteScene", "Started");
        this._Player.AdjustMoney(this._RewardItems.Pay);
        // apply rewards from checks with "REWARD" prop
        const Checks = this._SceneData["CHECKS"];
        for (const c of Checks) {
            if (typeof c.REWARD !== 'undefined') {
                this._ApplyReward(c.REWARD, c.R_NAME, c.OPT);
            }
        }
        const Posts = this._SceneData["POST"];
        for (const p of Posts) {
            this._ApplyReward(p["TYPE"], p["NAME"], p["OPT"]);
        }
        App.Scene.Debug(this.Id() + ":CompleteScene", "Ended");
    }

    static get _Debug() {
        return Scene._debug;
    }

    /**
     * @param {boolean} v
     */
    static set _Debug(v) {
        Scene._debug = v;
    }

    /**
     * @param {string} Fun
     * @param {string} String
     */
    static Debug(Fun,String) {
        if (Scene._Debug == true)
            console.log(Fun +":"+String+"\n");
    }
};

/** @type {boolean}
 *  @private */
App.Scene._debug = false;

// --------------------- Jobs ----------------------------
/**
 * Represents a job.
 */
App.Job = class Job extends App.Task {
    /**
     *
     * @param {Object} Data
     */
    constructor(Data) {
        super(Data);

        /** @type {Array.<string>}
         * @private */
        this._MissingRequirements = [ ];
        /** @private
         *  @returns {App.Data.Tasks.Cost[]} */
        this._Cost      = function() { return this.TaskData["COST"]; };
        /** @private
         *  @returns {App.Data.Tasks.Requirement[]} */
        this._Req       = function() { return this.TaskData["REQUIREMENTS"]; };
    }

    /** @returns {number} */
    Pay() { return this.TaskData["PAY"]; }
    /** @returns {Array.<number>} */
    Phases() { return this.TaskData["PHASES"]; }

    /**
     * Check to see if the player meets the other requirements to take the job. Usually skill, stat, body related or quest flags.
     * @param {App.Entity.Player} Player
     * @param NPC|String} NPC
     * @returns {boolean}
     */
    Requirements(Player, NPC) {
        this._MissingRequirements = [];
        return Job.CheckRequirements(Player, NPC, this._Req(), this._MissingRequirements);
    }

    /**
     * Print the title of a job.
     * @param {boolean} [Opt]
     * @returns {string}
     */
    Title(Opt) {
        var Output = this.TaskData["TITLE"];
        if (Opt) return Output;

        for (var i = 0; i < this.TaskData["RATING"];i++) Output += " &#9733;";
        Output = App.PR.ColorizeString(this.TaskData["RATING"], Output, 5);

        var Time    = this._GetCost("TIME");
        var Energy  = this._GetCost("STAT", "Energy");
        var Money   = this._GetCost("MONEY");
        var Strings = [];

        if (Time != 0) Strings.push("@@color:lime;Time " + Time + "@@");
        if (Energy != 0) Strings.push("@@color:yellow;Energy " + Energy + "@@");
        if (Money != 0) Strings.push("@@color:orange;Money " + Money + "@@");

        if (Strings.length != 0) Output = Output + " [" + Strings.join("&nbsp;") + "]";
        return Output;
    }

    /**
     * Calculate cost of a job
     * @param {string} Type
     * @param {string} [Name]
     * @returns {number}
     * @private
     */
    _GetCost(Type, Name) {
        var Check = [];
        if (typeof Name !== 'undefined') {
            Check = $.grep(this._Cost(), function (c) {
                return c["TYPE"] == Type && c["NAME"] == Name;
            });
        } else {
            Check = $.grep(this._Cost(), function (c) {
                return c["TYPE"] == Type;
            });
        }
        if (typeof Check !== 'undefined' && Check.length > 0) return Check[0]["VALUE"];
        return 0;
    }

    /**
     * @returns {number}
     */
    GetEnergyCost() {
        return this._GetCost("STAT", "Energy");
    }

    /**
     * @returns {number}
     */
    GetTimeCost() {
        return this._GetCost("TIME");
    }

    /**
     * Check to see if the player meets the "Cost" requirement for a job. Usually energy as this
     * is subtracted from their status upon taking the job.
     * @param {App.Entity.Player} Player
     * @returns {boolean}
     */
    Cost(Player) {
        if (typeof this._Cost() === 'undefined') return true;

        for(var i = 0; i < this._Cost().length; i++) {
            switch(this._Cost()[i]["TYPE"]) {
                case "STAT" :
                case "SKILL" :
                case "BODY" :
                    if (Player.GetStat(this._Cost()[i]["TYPE"], this._Cost()[i]["NAME"]) < this._Cost()[i]["VALUE"]) return false;
                    break;
                case "MONEY":
                    if (Player.Money < this._Cost()[i]["VALUE"]) return false;
                    break;
            }
        }
        return true;
    }

    /**
     * Deduct the costs of the Job from the player (usually energy, but could be other stats)
     * @param {App.Entity.Player} Player
     * @private
     */
    _DeductCosts(Player) {
        if (typeof this._Cost() === 'undefined') return;
        var Type, Name, Value;

        for(var i = 0; i < this._Cost().length; i++) {
            Type = this._Cost()[i]["TYPE"];
            Name = this._Cost()[i]["NAME"];
            Value = this._Cost()[i]["VALUE"];

            Job.Debug("_DeductCosts","Type="+ Type + ",Name="+Name+",VALUE="+Value);
            switch(Type) {
                case "STAT" :
                    Player.AdjustStat(Name, Math.floor(Value * -1.0));
                    break;
                case "SKILL" :
                    Player.AdjustSkill(Name, Math.floor(Value * -1.0));
                    break;
                case "BODY" :
                    Player.AdjustBody(Name, Math.floor(Value * -1.0));
                    break;
                case "MONEY":
                    Player.AdjustMoney(Math.floor(Value * -1.0));
                    break;
                case "ITEM":
                    var o = Player.GetItemById(Name);
                    o.RemoveCharges(Value);
                    break;
                case "TIME":
                    Player.NextPhase(Value);
                    break;
            }
        }
    }

    /**
     * Check to see if the time cost falls within the open/allowed phases of the activity and that there
     * is enough time in the day to complete it.
     * @param {App.Entity.Player} Player
     * @returns {boolean}
     * @private
     */
    _CheckTime(Player) {
        return (($.inArray(Player.Phase, this.Phases()) != -1) && (this._GetCost("TIME") + Player.Phase <= 4));
    }

    /**
     * Check to see if the time cost falls within the open/allowed phases of the activity
     * @param {App.Entity.Player} Player
     * @param {boolean} [Opt]
     * @returns {boolean|number}
     * @private
     */
    _CheckReady(Player, Opt) {
            Opt         = Opt || false;
        var Key         = this.ID()+"_LastCompleted";
        var FlagValue   = Player.JobFlags[Key] ? Player.JobFlags[Key] : 0;
        if (Opt) return (FlagValue + this.TaskData["DAYS"] - Player.Day);
        return ((FlagValue == 0) || (FlagValue + this.TaskData["DAYS"] <= Player.Day));
    }

    /**
     * Set's the last completed flag for the job.
     * @param {App.Entity.Player} Player
     * @private
     */
    _SetLastCompleted(Player) {
        var Key = this.ID()+"_LastCompleted";
        Player.JobFlags[Key] = Player.Day;
    }

    /**
     * Check to see if this job is available to be used.
     * @param {App.Entity.Player} Player
     * @param {App.Entity.NPC} NPC
     * @returns {boolean}
     */
    Available(Player, NPC) {
        Job.Debug("Job.Available:", this.ID());
        Job.Debug("Cost:", ""+this.Cost(Player));
        Job.Debug("Requirements:", ""+this.Requirements(Player, NPC));
        Job.Debug("_CheckTime:", ""+this._CheckTime(Player));
        Job.Debug("_CheckReady:", ""+this._CheckReady(Player));

        return ((this.Cost(Player) == true) && (this.Requirements(Player, NPC) == true) && (this._CheckTime(Player) == true) && (this._CheckReady(Player) == true));
    }

    /**
     * Print out the requirements (missing) string for a job.
     * @param {App.Entity.Player} Player
     * @param {App.Entity.NPC} NPC
     * @returns {string}
     */
    ReqString(Player, NPC) {
        var Output  = "";

        var CoolDown = this._CheckReady(Player, true);
        if (this.OnCoolDown(Player))
            Output = "@@color:yellow;Available in " + CoolDown + " day" + (CoolDown > 1 ? "s@@" :"@@");

        if (this.OnCoolDown(Player) == false && this._CheckTime(Player) == false) {
          Output = "@@color:yellow;Only Available@@ ";
            for (var i = 0; i < this.Phases().length; i++)
                Output += App.Entity.Player.GetPhaseIcon(this.Phases()[i]) + " ";
        }

        if (this._MissingRequirements.length > 0)
            Output += "\n" + this._MissingRequirements.join(", ");

        return Output;
    }

    /**
     * Print the intro to a job.
     * @param {App.Entity.Player}Player
     * @param {App.Entity.NPC} Npc
     * @returns {string}
     */
    Intro(Player, Npc) {
        let r = super.Intro(Player, Npc);
        if (this.Requirements(Player, Npc) == false) {
            r += " @@color:red;(Requirements not met)@@";
        }
        return r;
    }

    /**
     * Check to see if a job is ready (if it's known about).
     * @param {App.Entity.Player} Player
     * @returns {boolean}
     */
    Ready(Player) {
        return ((this.Cost(Player) == true)  && (this._CheckTime(Player) == true) && (this._CheckReady(Player) == true));
    }

    /**
     * Return if the job is on cool down.
     * @param {App.Entity.Player} Player
     * @returns {boolean}
     */
    OnCoolDown(Player) {
        Job.Debug("OnCoolDown", JSON.stringify(Player.JobFlags));
        return (this._CheckReady(Player) != true);
    }

    /**
     *
     * @param {App.Entity.Player} Player
     */
    CompleteScenes(Player) {
        Player.AdjustMoney(this.Pay());
        this._DeductCosts(Player);
        this._SetLastCompleted(Player);
        super.CompleteScenes(Player);
    }

    /**
     * @param {App.Entity.Player} Player
     * @param {App.Entity.NPC} NPC
	 * @returns {App.Scene[]}
	 * @abstract
     * @override
     */
    _AvailableScenes(Player, NPC) {
        return this.TaskData["SCENES"].map(function(x) { return new App.JobScene(Player, NPC, x); });
    }

    /**
     * Tokenize a string and return result.
     * @param {App.Entity.Player} Player
     * @param {App.Entity.NPC} NPC
     * @param {string} String
     * @returns {*}
     * @virtual
     * @private
     */
    _Tokenize(Player, NPC, String) {
        if (typeof String == 'undefined') return "";
        String = String.replace(/JOB_PAY/g, this._PrintPay());

        if (String.indexOf("JOB_RESULTS") != -1) { // Kludge because replace evaluates function even if no pattern match. Dumb.
            String = String.replace(/JOB_RESULTS/g, this._PrintJobResults());
        }
        return super._Tokenize(Player, NPC, String);
    }
};

/**
 * Stores and plays a "scene" from a job.
*/
App.JobScene = class JobScene extends App.Scene {
    /**
     * @param {App.Entity.Player} Player
     * @param {App.Entity.NPC} NPC
     * @param {object} SceneData
     * @constructor
     */
    constructor(Player, NPC, SceneData) {
        super(Player, NPC, SceneData);
    }

    /**
     * Tokenize a string
     * @param String
     * @returns {string}
     * @protected
     * @override
     */
    _Tokenize(String) {
        //String = String.replace(/JOB_PAY/g, this.Pay());
        return super._Tokenize(String);
    }
};


// ---------------------  Quests -------------------------
App.Quest = class Quest extends App.Task {
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
     * @returns {App.Quest[]}
     */
    static List(Flag, Player, NPC) {
        /** @type {App.Quest[]} */
        var Quests = [];
        var List = Object.keys(App.Data.Quests);

        for (var i = 0; i < List.length; i++) {
            var q = new Quest(App.Data.Quests[List[i]]);
            if (typeof NPC === 'undefined') {
                if ((Flag == 'cancomplete') && (q.CanComplete(Player) == true)) Quests.push(q);
                if ((Flag == 'available' ) && (q.IsAvailable(Player) == true)) Quests.push(q);
                if ((Flag == 'completed' ) && (q.IsCompleted(Player) == true)) Quests.push(q);
                if ((Flag == 'active') && (q.IsActive(Player) == true)) Quests.push(q);
                if ((Flag == 'any') &&
                    ((q.IsActive(Player) == true) || (q.IsCompleted(Player) == true) ||
                    (q.IsAvailable(Player) == true) || (q.CanComplete(Player) == true))) Quests.push(q);
            } else {
                if ((Flag == 'cancomplete') && (q.Giver() == NPC) && (q.CanComplete(Player) == true)) Quests.push(q);
                if ((Flag == 'available' ) && (q.Giver() == NPC) && (q.IsAvailable(Player) == true)) Quests.push(q);
                if ((Flag == 'completed' ) && (q.Giver() == NPC) && (q.IsCompleted(Player) == true)) Quests.push(q);
                if ((Flag == 'active') && (q.Giver() == NPC) && (q.IsActive(Player) == true)) Quests.push(q);
                if (((Flag == 'any') && (q.Giver() == NPC)) &&
                    ((q.IsActive(Player) == true) || (q.IsCompleted(Player) == true) ||
                    (q.IsAvailable(Player) == true) || (q.CanComplete(Player) == true))) Quests.push(q);
            }
        }

        return Quests;
    }

    /**
     * Create quest by tag
     * @param {string} Tag
     * @returns {App.Quest}
     */
    static ByTag(Tag) {
        return new App.Quest(App.Data.Quests[Tag]);
    }

    /**
     * Creates a quest object that operates a virtual quest
     *
     * The virtual quest does not have a definition (in App.Data.Quests)
     * and its only property is the quest ID. Thus it can be used only for
     * testing or setting quest flags.
     * @param {string} Id
     */
    static VirtualById(Id) {
        return new App.Quest({ "ID": Id });
    }

    /**
     * Retrieve a quest related flag.
     * @param {App.Entity.Player} Player
     * @param {string} Flag
     * @returns {*}
     */
    static GetFlag(Player, Flag) {
        if ((typeof Player.QuestFlags[Flag] === 'undefined')) return false;
        return Player.QuestFlags[Flag];
    }

    /**
     * Set a quest flag value.
     * @param {App.Entity.Player} Player
     * @param {String} Flag
     * @param {*} Value
     */
    static SetFlag(Player, Flag, Value) {
        Player.QuestFlags[Flag] = Value;
    }

    /**
     * Helper function to read progress value
     * @param {App.Entity.Player} Player - player being checked.
     * @param {String} Key - key from check entry.
     * @returns {number}
     */
    static GetProgressValue(Player, Key) {
        var res = App.Quest.GetFlag(Player, "progress_" + Key);
        return res === undefined ? 0. : res;
    }

    /**
     * Helper function to read progress value
     * @param {App.Entity.Player} Player - player being checked.
     * @param {String} Key - key from check entry.
     * @param {number} Value
     */
    static SetProgressValue(Player, Key, Value) {
        App.Quest.SetFlag(Player, "progress_" + Key, Value);
    }

    /**
     * Handles time-dependent changes for active quest
     * @param {App.Entity.Player} Player
     */
    static NextDay(Player) {
        Quest.List('active', Player).forEach(q => q.NextDay(Player));
    }

    /**
     * @param {App.Entity.Player} Player
     * @param {string} id Quest id
     * @returns {boolean}
     */
    static IsActive(Player, id) {
        return ((typeof Player.QuestFlags[id] !== 'undefined') && (Player.QuestFlags[id] == 'ACTIVE'));
    }

    /**
     * @param {App.Entity.Player} Player
     * @param {string} id Quest id
     * @returns {boolean}
     */
    static IsCompleted(Player, id) {
        return ((typeof App.Quest.GetFlag(Player, id) !== 'undefined') && (App.Quest.GetFlag(Player, id) == 'COMPLETED'));
    }

    constructor(Data) {
        super(Data);
    }

    Title() { return this.TaskData["Title"]; }

    /** @returns {string} */
    get JournalEntry() { return this.TaskData['JOURNAL_ENTRY']; }
    /** @returns {string} */
    get JournalCompleteEntry() { return this.TaskData['JOURNAL_COMPLETE']; }
    /** @returns {Array} */
    get Checks() { return this.TaskData['CHECKS']; }

    /**
     * Maps scene
     */
    _MakeSceneData(sceneId) {
        var res = {
            "ID" : sceneId,
            "TRIGGERS" :[ ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [ ],
            "POST" : [ ],
            "START" : this.TaskData[sceneId],
            "END" : "",
            "RESULTS" : [ ]
        };
        switch (sceneId) {
            case "INTRO":
                if (this.TaskData.hasOwnProperty("ON_ACCEPT")) {
                    for (const ar of this.TaskData["ON_ACCEPT"]) {
                        res.POST.push(ar);
                    }
                }
                break;
            case "MIDDLE":
                break;
            case "FINISH":
                res.POST = clone(this.TaskData['POST']);
                for (let p of res.POST) {
                    if (p["TYPE"] === "QUEST_FLAG" && typeof p["OPT"] === 'undefined') {
                        p["OPT"] = "SET";
                    }
                }
                var rewards = this.TaskData['REWARD'];
                if (rewards !== undefined) {
                    for (const r of rewards) {
                        res.POST.push({
                            "TYPE" : r['REWARD_TYPE'],
                            "NAME" : App.Item.MakeId(r['TYPE'], r['NAME']),
                            "VALUE": r['AMOUNT']
                        });
                    }
                }

                const checks = this.TaskData['CHECKS'];
                let itemsToConsume = checks.filter(function (o) {
                    return o["TYPE"] == 'ITEM' &&
                        typeof o["NAME"] !== 'undefined' &&
                        !o["NAME"].startsWith("CLOTHES/");
                });
                for (const itemRule of itemsToConsume) {
                    itemRule['VALUE'] = 0 - itemRule['VALUE'];
                    res.POST.push(itemRule);
                }
                break;
        }
        return res;
    }

    /**
     * Converts quest format condition into the job format
     * @param {object} Req
     * @returns {object}
     */
    static _ConvertRequirement(Req) {
        var Type        = Req["TYPE"];
        var Name        = Req["NAME"];
        var Value       = Req["VALUE"];
        var Condition   = Req["CONDITION"];
        var Option      = Req["OPT"];

        if (Condition === undefined) {
            if (typeof Value === 'string') {
                Condition = "eq";
            } else {
                Condition = "gte";
            }
        }
        if (typeof Name !== 'undefined' && Name.charAt(0) == '-') {
            Name = Name.slice(1);
            Condition = "lte";
        }
        switch (Type) {
            case "FLAG":
                Type = "QUEST_FLAG";
                break;
            case "NPC_MOOD":
                Type = "NPC_STAT";
                Option = Name;
                Name = "Mood";
                break;
            case "STAT_BODY":
                Type = "BODY";
                break;
            case "STAT_SKILL":
                Type = "SKILL";
                break;
            case "STAT_CORE":
                Type = "STAT";
                break;
        }
        return {
            "TYPE": Type,
            "NAME": Name,
            "VALUE": Value,
            "CONDITION": Condition,
            "OPT": Option
        };
    }

    /**
     * @param {App.Entity.Player} Player
     * @param {App.Entity.NPC} NPC
	 * @returns {App.Scene[]}
	 * @abstract
     * @override
     */
    _AvailableScenes(Player, NPC) {
        var scenes = [ ];
        if (this.IsAvailable(Player, NPC)) {
            scenes.push(new App.QuestIntroScene(Player, NPC, this._MakeSceneData('INTRO'), this));
        } else if (this.CanComplete(Player, NPC)) {
            scenes.push(new App.QuestFinishingScene(Player, NPC, this._MakeSceneData('FINISH'), this));
        } else if (this.IsActive(Player)) {
            scenes.push(new App.QuestMiddleScene(Player, NPC, this._MakeSceneData('MIDDLE'), this));
        }
        return scenes;
    }

    /**
     * @param {App.Entity.Player} Player
     * @param {App.Entity.NPC} [NPC]
     * @returns {boolean}
     */
    IsAvailable(Player, NPC) {
        if (this.IsCompleted(Player) || this.IsActive(Player)) return false;
        if (NPC === undefined) NPC = Player.GetNPC(this.Giver());
        return App.Task.CheckRequirements(Player, NPC,
            this.TaskData['PRE'].map(function(r){ return Quest._ConvertRequirement(r); }));
    }

    /**
     * @param {App.Entity.Player} Player
     * @returns {boolean}
     */
    IsActive(Player) {
        return App.Quest.IsActive(Player, this.ID());
    }

    /**
     * @param {App.Entity.Player} Player
     * @param {App.Entity.NPC} [NPC]
     * @returns {boolean}
     */
    CanComplete(Player, NPC) {
        if ((typeof Player.QuestFlags[this.ID()] === 'undefined')) return false;
        if (Player.QuestFlags[this.ID()] == 'COMPLETED') return false; // Should never happen eh??
        if (NPC === undefined) NPC = Player.GetNPC(this.Giver());
        return App.Task.CheckRequirements(Player, NPC,
            this.TaskData['CHECKS'].map(function(r){ return Quest._ConvertRequirement(r); }));
    }

    /**
     * @param {App.Entity.Player} Player
     * @returns {boolean}
     */
    IsCompleted(Player) {
        return App.Quest.IsCompleted(Player, this.ID());
    }

    /**
     * Accepts the quest
     *
     * This method is not meant to be used for "Accept" button in the quest dialog because
     * it creates its own copy of the INTRO scene.
     * @param {App.Entity.Player} Player
     */
    Accept(Player) {
        let scene = new App.QuestIntroScene(Player, Player.GetNPC(this.Giver()), this._MakeSceneData('INTRO'), this);
        let checks = {};
        scene.CalculateScene(checks);
        scene.CompleteScene();
    }

    /**
     * Completes the quest
     * @param {App.Entity.Player} Player
     */
    Complete(Player) {
        var scene = new App.QuestFinishingScene(Player, Player.GetNPC(this.Giver()), this._MakeSceneData('FINISH'), this);
        var Checks = { };
        scene.CalculateScene(Checks);
        scene.CompleteScene();
    }

    /**
     * Marks quest as completed without processing the finishing scene
     * @param {App.Entity.Player} Player
     */
    MarkAsCompleted(Player) {
        App.Quest.SetFlag(Player, this.ID(), "COMPLETED");
        App.Quest.SetFlag(Player, this.ID() + "_CompletedOn", Player.Day);
    }

    /**
     * Handles time-dependent changes for active quest
     * @param {App.Entity.Player} Player
     */
    NextDay(Player) {
        if (this.TaskData.hasOwnProperty("ON_DAY_PASSED")) {
            this.TaskData["ON_DAY_PASSED"].call(this.TaskData, Player);
        }
    }

    /**
     * Returns an array of objects that represent reward entries.
     * @param {string} [RewardType]
     * @returns {object[]}
     */
    Reward(RewardType) {
        var r = this.TaskData['REWARD'];
        if (typeof RewardType === 'undefined') return r;
        return r.filter(function (o) {
            return o["REWARD_TYPE"] == RewardType;
        });
    }

    /**
     * Day when the quest was acceped by player
     * @param {App.Entity.Player} Player
     * @returns {number}
     */
    AcceptedOn(Player) {
        let r = App.Quest.GetFlag(Player, this.ID() + "_AcceptedOn");
        return typeof r === 'number' ? r : 1;
    }

    /**
     * Day when the quest was completed by player
     * @param {App.Entity.Player} Player
     * @returns {number}
     */
    CompletedOn(Player) {
        let r = App.Quest.GetFlag(Player, this.ID() + "_CompletedOn");
        return typeof r === 'number' ? r : 1;
    }
};

App.QuestScene = class QuestScene extends App.Scene {
    /**
     * @param {App.Entity.Player} Player
     * @param {App.Entity.NPC} NPC
     * @param {object} SceneData
     * @param {App.Quest} Quest
     * @param {string} SceneName
     * @constructor
     */
    constructor(Player, NPC, SceneData, Quest, SceneName) {
        super(Player, NPC, SceneData);

        this._Quest = Quest;
        this._SceneName = SceneName;
    }

    /** @returns {string} */
    Id() {
        return this._SceneName;
    }
};


App.QuestIntroScene = class QuestIntroScene extends App.QuestScene {
   /**
    * @param {App.Entity.Player} Player
    * @param {App.Entity.NPC} NPC
    * @param {object} SceneData
    * @param {App.Quest} Quest
    * @constructor
   */
    constructor(Player, NPC, SceneData, Quest) {
       super(Player, NPC, SceneData, Quest, "INTRO");
    }

    /**
     * Accept the quest and process triggers.
     */
    CompleteScene() {
        super.CompleteScene();
        App.Quest.SetFlag(this._Player, this._Quest.ID(), "ACTIVE");
        App.Quest.SetFlag(this._Player, this._Quest.ID() + "_AcceptedOn", this._Player.Day);
    }
};

App.QuestMiddleScene = class QuestMiddleScene extends App.QuestScene {
    /**
     * @param {App.Entity.Player} Player
     * @param {App.Entity.NPC} NPC
     * @param {object} SceneData
     * @param {App.Quest} Quest
     * @constructor
    */
    constructor(Player, NPC, SceneData, Quest) {
        super(Player, NPC, SceneData, Quest, "MIDDLE");
    }

    /**
     * Process all the rules in a scene and store the results in the object.
	 * @param {object} Checks
     * @abstract
     */
    CalculateScene(Checks) {
        super.CalculateScene(Checks);
        this._StrBuffer += "<br/><br/>" + App.PR.pQuestRequirements(this._Quest.ID(), this._Player);
    }
 };

 App.QuestFinishingScene = class QuestFinishingScene extends App.QuestScene {
    /**
     * @param {App.Entity.Player} Player
     * @param {App.Entity.NPC} NPC
     * @param {object} SceneData
     * @param {App.Quest} Quest
     * @constructor
    */
    constructor(Player, NPC, SceneData, Quest) {
        super(Player, NPC, SceneData, Quest, "FINISH");
    }

    /**
     * Completes the quest.
     */
    CompleteScene() {
        super.CompleteScene();
        this._Quest.MarkAsCompleted(this._Player);
    }
 };
