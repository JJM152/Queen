App = App || { Data: { }, Entity: { } };

App.PR = new function() {

	/** Shortcut
	 */
	this.lengthString = function(x, compact) {
		return App.unitSystem.lengthString(x, compact);
	};

	/** Shortcut
	 */
	this.lengthValue = function(x) {
		return App.unitSystem.lengthValue(x);
	};

    /**
     * Returns config object which describe naming of the given type
     * @param {string} Type Config type ("BODY")
     * @returns {any}
     */
    this.GetNamingConfig = function(Type) {
        if (Type == "BODY") return App.Data.Naming.BodyConfig;
    };

    /**
     * Fetch index names required to find leveld value for a leveling property
     * @param {string} Stat Stat type (SKILL, BODY, STAT)
     * @param {string} Property Property name ("Bust", "Lips", etc.)
     * @param {string} Aspect "NOUN", "ADJECTIVE"
     * @return {string[]}
     */
    this.GetNamingIndicies = function(Stat, Property, Aspect) {
        var st = this.GetNamingConfig(Stat);
        if (st == undefined || !st.hasOwnProperty(Property) || !st[Property].hasOwnProperty(Aspect)) return undefined;
        return st[Property][Aspect].hasOwnProperty("INDEX") ? st[Property][Aspect]["INDEX"] : [Property];
    };

    /**
     * @summary Fetch a leveled value from the given rating for given values.
     *
     * This function descends into the passed ratings object using supplied index
     * value array. The rating object is indexed as using the first element of the
     * index array. The result of this operation is passed to this function again with
     * sliced index array. This continues until index array is exhausted or indexing
     * returns a simple string or array of strings (a random element of wchih is returned then).
     *
     * @param {(object|string)} Ratings object with ratings or the final string
     * @param {(number[]|number)} Value array of rating index values or a single value
     * @returns {string}
     */
    this.GetMultiIndexLevelingProperty = function(Ratings, Value) {
        if (typeof(Ratings) == "string") return Ratings; // value does not change

        var v;
        var nextValues = undefined;
        if (Array.isArray(Value)) {
            v = Value[0];
            if (Value.length > 1) nextValues = Value.slice(1);
        } else {
            v = Value;
        }
        var lastSmallerRating;
        for (var prop in Ratings) {
            if (!Ratings.hasOwnProperty(prop)) continue;
            if (prop > v) break;
            lastSmallerRating = prop;
        }
        if (lastSmallerRating == undefined)  return "Untyped rating: " + Value;
        var res = Ratings[lastSmallerRating];
        if (nextValues == undefined) {
            if (Array.isArray(res)) {
                return res.random(); // SugarCube adds Array.random()
            } else {
                return res;
            }
        }
        return this.GetMultiIndexLevelingProperty(res, nextValues);
	};

    /**
     * Fetch a rating for a statistic/value
     * @param Type
     * @param {number|number[]} Value
     * @param [Colorize]
     * @returns {string}
     */
	this.GetRating = function (Type, Value, Colorize) {
        Colorize    = Colorize || false;
        var Ratings  = App.Data.Ratings[Type];

        var lastSmallerRating;
        for (var prop in Ratings) {
            if (!Ratings.hasOwnProperty(prop)) continue;
            if (prop > Value) break;
            lastSmallerRating = prop;
        }

        if (lastSmallerRating == undefined)  return "Untyped rating: " + Type + "," + Value;
        if (Colorize == true) {
            return this.ColorizeString(Value, Ratings[lastSmallerRating]);
        } else {
            return Ratings[lastSmallerRating];
        }
    };

	/**
     * Helper function. Checks relevant statistic config and returns the leveling record if one exists.
     * @param {string} Type
     * @param {string} Stat
     * @param {number} Value
     * @returns {*}
     */
	this.GetLevelingRecord = function(Type, Stat, Value) {
        var Ratings = this.GetStatConfig(Type)[Stat].LEVELING;
        var lastSmallerProp;
        for (var prop in Ratings) {
            if (!Ratings.hasOwnProperty(prop)) continue;
            if (prop > Value) break;
            lastSmallerProp = prop;
        }
        if (lastSmallerProp !== undefined) return Ratings[lastSmallerProp];
        return undefined;
    };

    /**
     * Helper function. Checks relevant statistic config and returns a colorized Property value for use if one exists.
     * @param {string} Type
     * @param {string} Stat
     * @param {string} Property
     * @param {number|number[]} Value
     * @returns {string}
     */
    this.GetLevelingProperty = function(Type, Stat, Property, Value) {
        var propValue = this.GetLevelingRecord(Type, Stat, Value);
        if (propValue == undefined) return "";

        var Arr = App.Data.Lists.ColorScale;
        return "@@color:" + Arr[propValue.COLOR] + ";" + propValue[Property] +"@@";
    };

    /**
     * Helper function. Checks relevant statistic config and returns a NOUN (colorized) for use if one exists.
     * @param {string} Type
     * @param {string} Stat
     * @param {number|number[]} Value
     * @param [Colorize]
     * @returns {string}
     */
    this.GetNoun = function(Type, Stat, Value, Colorize) {
        var nCfg = this.GetNamingConfig(Type);
        if (nCfg == undefined || !nCfg.hasOwnProperty(Stat)) return "NO_NOUN_FOR_" + Type + ":" + Stat;
        var str = this.GetMultiIndexLevelingProperty(nCfg[Stat].NOUN.LEVELING, Value);

        if (Colorize == true) {
            // use colour from the first index for now
            // TODO blend colors from all indices
            var color = this.GetLevelingRecord(Type, Stat, Array.isArray(Value) ? Value[0] : Value).COLOR;
            return "@@color:" + App.Data.Lists.ColorScale[color] + ";" + str + "@@";
        }
        return str;
    };

	/**
	 * Returns aray of applicable adjective values for a leveling noun
	 * @param {string} Type
	 * @param {string} Stat
	 * @param {App.Entity.Player} Player
	 * @returns {string[]}
	 */
	this.GetNoneAdjectives = function(Type, Stat, Player) {
        var tCfg = this.GetNamingConfig(Type);
        var sCfg = tCfg != undefined ? tCfg[Stat] : undefined;
        if (sCfg == undefined) return [];
        var adjCfg = sCfg["ADJECTIVE"];
        if (adjCfg == undefined) return [];

        var adjectiveRatings = adjCfg.RATING || [Type + '/' + Stat];
        var adjectiveIndicies = adjCfg.INDEX || adjectiveRatings;
        var adjectiveApplicableLevels = adjCfg.APPLICABLE_LEVEL || adjectiveRatings.map(x => { return { "MIN" : 0, "MAX" : 100 };});

        var adjs = [];
        for (var i = 0; i < adjectiveRatings.length; ++i) {
            var s = adjectiveIndicies[i].split('/');
            var statVal = Player.GetStatPercent(s[0], s[1]);
            if (statVal >= adjectiveApplicableLevels[i].MIN && statVal <= adjectiveApplicableLevels[i].MAX) {
                var r = adjectiveRatings[i].split('/');
                adjs.push(this.GetAdjective(r[0], r[1], statVal));
            }
        }

        return adjs;
    };

	/**
	 * Returns leveling noun, optionally with applicable adjectives prepended
	 * @param {string} Type
	 * @param {string} Stat
	 * @param {App.Entity.Player} Player
	 * @param {boolean} [Adjectives = false] Whether to prepend adjectives
	 * @param {boolean} [Colorize = false] colorize output
	 * @return {string}
	 */
	this.GetPlayerNoun = function(Type, Stat, Player, Adjectives, Colorize) {
        var indexNames = this.GetNamingIndicies(Type, Stat, "NOUN");
        if (indexNames == undefined) return "NO_NOUN_FOR_" + Type + ":" + Stat;
        var indicies = indexNames.map(s => s.includes('/') ? s.split('/') : [Type, s]);
        var indexValues = indicies.map(x => Player.GetStat(x[0], x[1]));
        var str = this.GetNoun(Type, Stat, indexValues, Colorize);

        if (Adjectives == true) {
            str = this.GetNoneAdjectives(Type, Stat, Player).join(' ') + ' ' + str;
        }
        return str;
    };

    /**
     * Helper function. Checks relevant statistic config and returns an ADJECTIVE (colorized) for use if one exists.
     * @param {string} Type
     * @param {string} Stat
     * @param {number} Value
     * @returns {string}
     */
	this.GetAdjective = function(Type, Stat, Value) {
		return this.GetLevelingProperty(Type, Stat, "ADJECTIVE", Value);
	};

    /**
     *
     * @param {App.Entity.Player} Player
     * @param {string} Type
     * @param {string} Stat
     * @param {string} String
     * @returns {string}
     */
    this.TokenizeRating = function(Player, Type, Stat, String)
    {
        var _this = this;
        function nounReplacer(match, delim) {
            return _this.GetPlayerNoun(Type, Stat, Player, false, true) + delim;
        }
        function adjReplace(match, delim) {
            return _this.GetAdjective(Type, Stat, Player.GetStat(Type, Stat)) + delim;
        }
        String = String.replace(/PLAYER_NAME/g, Player.SlaveName);
        String = String.replace(/LENGTH_C/g, this.lengthString(this.StatToCM(Player,Stat), true).toString());
        String = String.replace(/LENGTH/g, this.lengthString(this.StatToCM(Player,Stat), false).toString());
        String = String.replace(/NOUN([^A-Za-z_|$])/g, nounReplacer);
        String = String.replace(/ADJECTIVE([^A-Za-z_|$])/g, adjReplace);
        return this.TokenizeString(Player, undefined, String);
    };

    /**
     * Helper function for getting stat configurations.
     * @param Type
     * @returns {*}
     */
        this.GetStatConfig = function (Type) {
            if (Type == "STAT") return App.Data.Lists.StatConfig;
            if (Type == "SKILL") return App.Data.Lists.SkillConfig;
            if (Type == "BODY") return App.Data.Lists.BodyConfig;
        };

    /**
     * Colorizes and returns a string primitive
     * @param {number} Value
     * @param {string} String
     * @param {number} [Opt]
     * @returns {string}
     */
        this.ColorizeString = function (Value, String, Opt) {
                //return "@@color:" + this.ColorScale(Value, Opt) + ";" + String + "@@("+Value+")";
                return "@@color:" + this.ColorScale(Value, Opt) + ";" + String + "@@";
        };
    /**
     * Used to colorize a string with colors corresponding to the meter scheme.
     * @param {number} n the value to rate the color on.
     * @param {string} s the string to colorize
     * @param {boolean} h HTML safe?
     * @returns {string}
     */
		this.ColorizeMeter = function (n, s, h) {
                var Colors = ["red", "brown", "yellow", "cyan", "lime"];
                var cIndex = Math.max(0, Math.min(Math.round(((n / 20) - 1)), 4));
                return h ? "<span style='color:"+ Colors[cIndex]+"'>"+s+"</span>" : "@@color:" + Colors[cIndex] + ";" + s + "@@";
        };

    /**
     * Returns a color that defines the percentage type of the "Value" passed.
     * @param {number} Value
     * @param {number} [Opt] - Defaults to 100, Percent = Value / Opt
     * @returns {string}
     */
        this.ColorScale = function(Value, Opt) {
            var Max = Opt || 100;
            var Arr = App.Data.Lists.ColorScale;
            if (Value > Opt ) Value = Opt;
            return Arr[Math.floor( Math.max(0, Math.min((Arr.length * (Value/Max)-1),(Arr.length-1))))];
        };

    /**
     * Prints out a 10 star meter surrounded with brackets.
     * @param {number} Score - Current stat/score
     * @param {number} MaxScore - Maximum stat/score
     * @param {number} InvertMeter - reverse direction of stars relative to score so that high scores are less stars.
     * @param {boolean} HtmlSafe
     * @returns {string}
     */
        this.pMeter = function (Score, MaxScore, InvertMeter, HtmlSafe) {
				Score = Math.max(0, Math.min(Score, MaxScore));
                var units = (MaxScore / 10);
                var Stars = Math.floor((Score / units));
                var sMeter = "";
				var nMeter = (InvertMeter == 1) ? (100 - (10 * Stars)) : (10 * Stars);
				var i = 0;

				for (i = 0; i < Stars; i++)
					sMeter += "&#9733;";
				sMeter = this.ColorizeMeter(nMeter, sMeter, HtmlSafe);

				if ( (10 - Stars ) != 0) {
					sMeter += HtmlSafe ? "<span style=\"color:grey;\">" : "@@color:grey;";
					for (i = 0; i < (10 - Stars); i++)
						sMeter += "&#9733;";
						sMeter += HtmlSafe ? "</span>" : "@@";
					}

				if (App.PR.numericalMeters) {
					return "[" + sMeter + "] " + Score;
				} else {
					return "[" + sMeter + "]";
				}
        };

    /**
     * Simple calculator turns CM into Inches.
     * @param {number} n
     * @returns {number}
     */
        this.CMtoINCH = function (n) {
            return Math.round(n * 0.393700);
        };

    /**
     * Lookup a body part's configuration entry and figure out the current CM size of it for the player.
     * @param {App.Entity.Player} Player
     * @param {string} StatName - currently supported: Bust, Ass, Hips, Waist, Penis
     * @param {number} [Adjust] - Optional arg: adjust stat by this and report figure.
     * @returns {number}
     */
        this.StatToCM = function(Player, StatName, Adjust)
        {
            if (typeof Adjust === 'undefined') Adjust = 0;
            if (typeof Player.GetStatConfig("BODY")[StatName] === 'undefined') return 0;

            var CMScale = Player.GetStatConfig("BODY")[StatName]["CM_MAX"] - Player.GetStatConfig("BODY")[StatName]["CM_MIN"];
            return ( CMScale * ( (Player.GetStatPercent("BODY", StatName)+Adjust) / 100)) + Player.GetStatConfig("BODY")[StatName]["CM_MIN"];
        };

    /**
     * Convert Ass stat into CM
     * @param {App.Entity.Player} Player
     * @returns {number}
     */
        this.AssCCtoCM = function (Player) { return this.StatToCM(Player, "Ass"); };

    /**
     * Convert Waist Stat into CM.
     * @param Player
     * @returns {number}
     */
        this.WaistInCM = function (Player) { return this.StatToCM(Player, "Waist"); };

    /**
     * Convert Hips Stat into CM.
     * @param {App.Entity.Player} Player
     * @returns {number}
     */
        this.HipsInCM = function (Player) { return this.StatToCM(Player, "Hips"); };

    /**
     * Convert Bust Stat into CM.
     * @param {App.Entity.Player} Player
     * @returns {number}
     */
        this.BustCCtoCM = function (Player) { return this.StatToCM(Player, "Bust"); };

    /**
     * Print out a 10 star colorized stat meter for a statistic.
     * @param {string} StatName
     * @param {App.Entity.Player} Player
     * @param {number} [Invert] - reverse direction of stars relative to score so that high scores are less stars.
     * @param {boolean} {HtmlSafe]
     * @returns {string}
     */
		this.pStatMeter = function(StatName, Player, Invert, HtmlSafe) {
            var Opt = Invert || 0;
            var StatValue = Player.GetStat("STAT", StatName);

            if (StatName == "Hormones" ) {
                if (StatValue > 100 ) // Return "Female" version of this meter.
                    return this.pMeter( (Player.GetStat("STAT", "Hormones") - 100), 100, 0, HtmlSafe);
                if (StatValue <= 100)
                    return this.pMeter( (100 - StatValue), 100, 0, HtmlSafe);
            }

            return this.pMeter( Player.GetStat("STAT", StatName), Player.GetMaxStat("STAT", StatName), Opt, HtmlSafe);
        };

    /**
     * Return a string describing and coloring the effect
     * @param {string} effect
     * @param {*} item
     * @returns {string}
     */
        this.pEffectMeter = function(effect, item)
        {
            var output = "";

            // Build color and arrow
            if (effect.indexOf('-') != -1 ) {
                output = "@@color:red;"+effect+"@@";
                output = output.replace(/-/g, '&dArr;');
            } else
            if (effect.indexOf('+') != -1) {
                output = "@@color:lime;"+effect+"@@";
                output = output.replace(/\+/g, '&uArr;');
            } else
            if (effect.indexOf('?') != -1) {
                output = "@@color:lime;&uArr;"+effect+"@@";
                if (typeof item.o['Style'] !== 'undefined') {
                    switch(item.o['Style']) {
                        case 'COMMON': output = output.replace(/RANK/g, "&uArr;" ); break;
                        case 'UNCOMMON': output = output.replace(/RANK/g, "&uArr;&uArr;" ); break;
                        case 'RARE': output = output.replace(/RANK/g, "&uArr;&uArr;&uArr;" ); break;
                        case 'LEGENDARY': output = output.replace(/RANK/g, "&uArr;&uArr;&uArr;&uArr;" ); break;
                    }
                }
            } else {
                output = "@@color:grey;"+effect+"@@";
                output =  output.replace(/RANK/g, "&uArr;");
            }

            return output;
        };
    /**
     * Print out a 10 star colorized stat meter for a skill.
     * @param {string} StatName
     * @param {App.Entity.Player} Player
     * @param {number} [Invert] - reverse direction of stars relative to score so that high scores are less stars.
     */
        this.pSkillMeter = function(StatName, Player, Invert) { return this.pMeter( Player.GetStat("SKILL", StatName), 100, Invert); };

    /**
     * Print out a 10 start colorized state meter for a particular fashion style
     * @param {string} Style
     * @param {App.Entity.Player} Player
     * @returns {string}
     */
        this.pStyleMeter = function(Style, Player) { return this.pMeter( Player.GetStyleSpecRating(Style), 100, 0); };

    /**
     * Print out a 10 star colorized stat meter for a body part.
     * @param {string} StatName
     * @param {App.Entity.Player} Player
     * @param {number} [Invert] - reverse direction of stars relative to score so that high scores are less stars.
     */
        this.pBodyMeter = function(StatName, Player, Invert) { return this.pMeter( Player.GetStat("BODY", StatName), 100, Invert);};

    /**
     * Finds and prints out the NPC quest dialog as a string.
     * @param {string} QuestID - ID of the Quest.
     * @param {string} Stage - INTRO, MIDDLE, FINISH
     * @param {App.Entity.Player} Player
     * @param {string} NPC - String, ID of the NPC in Player.NPCS array.
     */
        this.pQuestDialog = function(QuestID, Stage, Player, NPC) { return this.TokenizeString(Player, NPC, App.Data.Quests[QuestID][Stage]); };

    /**
     * Prints out the requirements for completion of a quest.
     * @param {string} QuestID
     * @param {App.Entity.Player} Player
     * @returns {string}
     */
        this.pQuestRequirements = function(QuestID, Player)
		{
			var checks = App.Data.Quests[QuestID]["CHECKS"];
			var Out = [];
			var Meter = "";
            var Percent = 0;
            var Val = 0;
            var Name = "";
			var pString  = "";
            var Invert = 0;
            var bMeter = false;

			for (var i = 0; i < checks.length; i++) {
                Name = checks[i]["NAME"];
                Invert = 0;
                bMeter = false;
                pString = "";

                if (Name.charAt(0) == '-') {
                    Name = Name.slice(1);
                    Invert = 1;
                }

                switch (checks[i]["TYPE"]) {
                    case "FLAG":
                        continue;
                        break;
                    case "NPC_MOOD":
                        bMeter = true;
                        Val = Player.GetNPC(Name).Mood();
                        pString = Player.GetNPC(Name).pName();
                        break;
                    case "MONEY":
                        bMeter = true;
                        Val = Player.Money;
                        pString = "@@color:yellow;Coins@@";
                        break;
                    case "STAT_BODY":
                        bMeter = true;
                        Val = Player.GetStatPercent("BODY", Name);
                        pString = Name;
                        break;
                    case "STAT_CORE":
                        bMeter = true;
                        Val = Player.GetStatPercent("STAT", Name);
                        pString = Name;
                        break;
                    case "STAT_SKILL":
                        bMeter = true;
                        Val = Player.GetStatPercent("SKILL", Name);
                        pString = Name;
                        break;
                    case "STYLE_CATEGORY":
                        bMeter = true;
                        Val = Math.max(0, Math.min(Player.GetStyleSpecRating(Name), 100));
                        pString = Name;
                        break;
                    case "HAIR_STYLE":
                        bMeter = false;
                        Val = ((Player.GetHairStyle() == Name) == checks[i]["VALUE"]);
                        pString = "Hair style - "+Name;
                        break;
                    case "HAIR_COLOR":
                        bMeter = false;
                        Val = ((Player.GetHairColor() == Name) == checks[i]["VALUE"]);
                        pString = "Hair color - "+Name;
                        break;
                    case "QUEST_ITEM":
                        bMeter = false;
                        pString = App.Data.QuestItems[Name]["ShortDesc"];
                        Val = (typeof Player.GetItemByName(Name) !== 'undefined');
                        break;
                    case "DAYS_PASSED":
                        bMeter = false;
                        pString = "wait " + (App.QuestEngine.GetQuestFlag(Player, Name) - Player.Day) + " days";
                        Val = ((App.QuestEngine.GetQuestFlag(Player, Name) - Player.Day) < 1);
                        break;
                    case "IS_WEARING":
                        bMeter = false;
                        if(checks[i]["VALUE"] == "NOT") pString = "''NOT'' ";
                        Val = (checks[i]["VALUE"] == "NOT" ? (Player.GetEquipmentInSlot(Name) == 0) : (Player.GetEquipmentInSlot(Name) != 0));
                        pString = pString + "wearing " + Name.toLowerCase();
                        break;
                    case "TRACK_CUSTOMERS":
                        bMeter = false;
                        var flag = App.QuestEngine.GetQuestFlag(Player, "track_"+Name);
                        var count = Player.GetHistory("CUSTOMERS", Name);
                        Val = (count - flag >= checks[i]["VALUE"]);
                        pString = "Satisfy Customers "+(count-flag)+"/"+checks[i]["VALUE"];
                        break;
                }

                if (bMeter == true) {
                    Out.push(this.pQuestMeter(Player, pString, Val, checks[i]["VALUE"], Invert));
                } else {
                    Out.push(this.pQuestCheckbox(Player, pString, Val));
                }

			}

			return Out.join("\n");
		};

        this.pQuestCheckbox = function(Player, pString, Val)
        {
            var Out = pString + " ";
            Out = Out + (Val == true ? "@@color:lime; &#9745; @@" : "@@color:red; &#9746; @@");
            return Out;
        };

        this.pQuestMeter = function(Player, Name, PlayerValue, GoalValue, Invert )
        {
            console.log("pQuestMeter("+Player+","+Name+","+PlayerValue+","+GoalValue+","+Invert+")");
            var c, m, p;
            if (typeof Invert !== 'undefined' && Invert == 1) {
                m = (100 - GoalValue);
                c = (100 - PlayerValue);
            }  else {
                c = PlayerValue;
                m = GoalValue;
            }

            p = Math.floor( ((c/m)*100));
            console.log("pMeter("+c+","+m+",0) called by pQuestMeter");

            return "<span id=\"fixed-font\">" + this.pMeter(c, m, 0) +"</span>&nbsp;"+ p +"% "+Name;
        };

        this.pQuestRewards = function(QuestID)
		{
			var Rewards = App.Data.Quests[QuestID]["REWARD"];
			var Output = [ ];
			var oItem;

			for (var i = 0; i < Rewards.length; i++)
			{
				if (Rewards[i]["REWARD_TYPE"] == "MONEY") Output.push( "@@color:yellow;"+ Rewards[i]["AMOUNT"] + " coins@@.");
                if (Rewards[i]["REWARD_TYPE"] == "SLOT") Output.push( "@@color:cyan;A slot reel unlock!@@");
				if (Rewards[i]["REWARD_TYPE"] == "ITEM" ) {
					oItem = App.Item.Factory( Rewards[i]["TYPE"], Rewards[i]["NAME"]);
					Output.push( oItem.Description() + " x " + Rewards[i]["AMOUNT"]);
				}
			}

			return Output;
		};

    /**
     * Print the description of an item.
     * @param {string} ItemType
     * @param {string} ItemTag
     * @param {number} ItemAmount
     * @param {boolean} Opt
     * @returns {string}
     */
        this.pItemDesc = function(ItemType, ItemTag, ItemAmount, Opt)
		{
			var oItem = App.Item.Factory( ItemType, ItemTag);
            if ((typeof Opt !== 'undefined') && ItemAmount > 1) return oItem.Description() + " x "+ItemAmount;
			return oItem.Description();
		};

    /**
     * Print out a description of the players Ass statistic.
     * @param {App.Entity.Player} Player
     * @param {number} Arg
     * @returns {string}
     */
    this.pAss = function (Player, Arg) {
        var aPercent = Player.GetStatPercent("BODY", "Ass");
        var fPercent = Player.GetStatPercent("STAT", "Fitness");

        if (typeof Arg !== 'undefined') {
            return this.GetAdjective("BODY", "Ass", aPercent) + ' ' + this.GetAdjective("BODY", "AssFirmness", fPercent);
        }

        var hPercent = Player.GetStatPercent("BODY", "Hips");
        var Output = this.TokenizeRating(Player, "BODY", "Ass", this.GetRating("Ass", aPercent));

        if ((aPercent > 30) || (hPercent > 30)) {
            if ( aPercent  < ( hPercent - 15) ) {
                Output += " It is @@color:yellow;disproportionately small@@ for your ";
            } else if ( aPercent > ( hPercent + 15)) {
                Output += " It is @@color:yellow;disproportionately big@@ for your ";
            } else {
                Output += " It is @@color:lime;flattered@@ by your ";
            }
            Output += this.GetAdjective("BODY", "Hips", hPercent) + " hips.";
        }

        return Output;
    };

    /**
     * Print out a description of the players Penis statistic.
     * @param {App.Entity.Player} Player
     * @param {number} [Arg]
     * @returns {XML|string|void}
     */
        this.pPenis = function (Player, Arg) {
            var pPercent = Player.GetStatPercent("BODY", "Penis");
            var iLength = this.CMtoINCH(Player.GetStat("BODY", "Penis"));
            if (typeof Arg !== 'undefined') return this.GetAdjective("BODY", "Penis", pPercent);
            return this.TokenizeRating(Player, "BODY", "Penis", this.GetRating("Penis", pPercent));
		};

    /**
     * Prints out a description of the Player's height statistic.
     * @param {App.Entity.Player} Player
     * @returns {string}
     */
        this.pHeight = function (Player) {
            var pHeight = this.StatToCM(Player, "Height");
            return this.lengthString(pHeight, true) + " tall";
        };

    this.pFetish = function (Player) {
            return this.ColorizeString(Player.Fetish(), this.GetRating("Fetish", Player.Fetish()));
        };

    this.pBeauty = function (Player) {
            return this.ColorizeString(Player.Beauty(), this.GetRating("Beauty", Player.Beauty()));
        };

    /**
     * Print out a description of the Player's Balls statistic.
     * @param {App.Entity.Player} Player
     * @param {number|null} Arg
     * @returns {string}
     */
    this.pBalls = function (Player, Arg) {
            var bPercent = Player.GetStatPercent("BODY", "Balls");
            if (typeof Arg !== 'undefined') return this.GetAdjective("BODY", "Balls", bPercent);
            return this.TokenizeRating(Player, "BODY", "Balls", this.GetRating("Balls", bPercent));
        };

    /**
     * Print out a description of the Player's Waist statistic.
     * @param {App.Entity.Player} Player
     * @param {number|null} Arg
     * @returns {XML|string|void}
     */
    this.pWaist = function (Player, Arg) {
            var wPercent = Player.GetStatPercent("BODY", "Waist");
            var iLength = this.CMtoINCH(this.WaistInCM(Player));
            if (typeof Arg !== 'undefined') return this.GetAdjective("BODY", "Waist", wPercent);
            return this.TokenizeRating(Player, "BODY", "Waist", this.GetRating("Waist", wPercent));
        };

    /**
     * Print out a description of the Player's Bust statistic.
     * @param {App.Entity.Player} Player
     * @param {number|null} Arg
     * @returns {XML|string|void}
     */
    this.pBust = function (Player, Arg) {
        var bPercent = Player.GetStatPercent("BODY", "Bust");
        if (typeof Arg !== 'undefined') {
            return this.GetAdjective("BODY", "Bust", bPercent);
        }
        return this.TokenizeRating(Player, "BODY", "Bust", this.GetRating("Bust", bPercent));
    };

    /**
     * Print out a description of the Player's Bust (CUP) statistic.
     * @param {App.Entity.Player} Player
     * @returns {XML|string|void}
     */
    this.pCup = function (Player) {
        var bPercent = Player.GetStatPercent("BODY", "Bust");
        return this.GetRating("Cup", bPercent) + " cup";
    };

    /**
     * Print out a description of the Player's Lips statistic.
     * @param {App.Entity.Player} Player
     * @param {number|null} Arg
     * @returns {string}
     */
    this.pLips = function (Player, Arg) {
            var lPercent = Player.GetStatPercent("BODY", "Lips");
            if (typeof Arg !== 'undefined') return this.GetAdjective("BODY", "Lips", lPercent);
        return this.TokenizeRating(Player, "BODY", "Lips", this.GetRating("Lips", lPercent));
        };
    /**
     * Print out a description of the Player's Hips statistic.
     * @param {App.Entity.Player} Player
     * @param {number|null} Arg
     * @returns {string}
     */
    this.pHips = function (Player, Arg) {
            var hPercent = Player.GetStatPercent("BODY", "Hips");
            if (typeof Arg !== 'undefined') return this.GetAdjective("BODY", "Hips", hPercent);
            return this.TokenizeRating(Player, "BODY", "Hips", this.GetRating("Hips", hPercent));
        };

    /**
     * Print out a description of the Player's Eyes.
     * @param {App.Entity.Player} Player
     * @param {number|null} Arg
     * @returns {string}
     */
    this.pEyes = function (Player, Arg) {
            var lashes = Player.GetStatPercent("STAT","Hormones") >= 75 ? "long" : "average length";
            return "You have " + lashes + " eyelashes and " + Player.EyeColor + " colored eyes.";
        };
    /**
     * Print out a description of the Player's Style.
     * @param {App.Entity.Player} Player
     * @param {number|null} Arg
     * @returns {string}
     */
    this.pStyle = function (Player, Arg) {
            return this.ColorizeString(Player.Style(), this.GetRating("Style", Player.Style()));
        };

    /**
     * Print out a description of the Player's Clothing.
     * @param {App.Entity.Player} Player
     * @param {number|null} Arg
     * @returns {string}
     */
    this.pClothing = function (Player, Arg) {
            return this.ColorizeString(Player.ClothesRating(), this.GetRating("Clothing", Player.ClothesRating()));
        };

    /**
     * Print out a description of the Player's Makeup.
     * @param {App.Entity.Player} Player
     * @param {number|null} Arg
     * @returns {string}
     */
    this.pMakeup = function (Player, Arg) {
            if (Player.MakeupStyle == "plain faced") return "You are plain faced and not wearing any makeup";
            return "You are wearing " + this.ColorizeString(Player.MakeupRating(), Player.MakeupStyle) + " makeup";
        };

    /**
     * Print out a description of the Player's Face.
     * @param {App.Entity.Player} Player
     * @param {number|null} Arg
     * @returns {string}
     */
    this.pFace = function (Player, Arg) {
            var fPercent = Player.GetStatPercent("BODY", "Face");
            if (typeof Arg !== 'undefined') return this.GetAdjective("BODY", "Face", fPercent);
            var Output = this.TokenizeRating(Player, "BODY", "Face", this.GetRating("Face", fPercent));
            if (Player.MakeupRating() == 0) {
                Output += " it is bare and devoid of cosmetics.";
            } else if (Player.MakeupRating() < 40 ) {
                Output += " it is poorly done up in " + this.ColorizeString(Player.MakeupRating(), Player.MakeupStyle) + " makeup.";
            } else if (Player.MakeupRating() < 60 ) {
                Output += " it is moderately well done up in " + this.ColorizeString(Player.MakeupRating(), Player.MakeupStyle) + " makeup, somewhat enhancing your appeal.";
            } else if (Player.MakeupRating() < 80 ) {
                Output += " it is expertly done up in " + this.ColorizeString(Player.MakeupRating(), Player.MakeupStyle) + " makeup, enhancing your appeal.";
            } else {
                Output += " it is flawlessly painted in " + this.ColorizeString(Player.MakeupRating(), Player.MakeupStyle) + " makeup, greatly enhancing your appeal.";
            }
            return Output;
        };

    /**
     * Print out a description of the Player's Fitness.
     * @param {App.Entity.Player} Player
     * @param {number|null} Arg
     * @returns {string}
     */
    this.pFitness = function (Player, Arg) {
            var fPercent = Player.GetStatPercent("STAT", "Fitness");
            if (typeof Arg !== 'undefined') return this.GetAdjective("STAT", "Fitness", fPercent);
            return this.TokenizeRating(Player, "STAT", "Fitness", this.GetRating("Fitness", fPercent));
        };

    /**
     * Print out a description of the Player's Hormones.
     * @param {App.Entity.Player} Player
     * @param {number|null} Arg
     * @returns {string}
     */
    this.pHormones = function (Player, Arg) {
        return this.GetAdjective("STAT", "Hormones", Player.GetStat("STAT", "Hormones"));
    };

    /**
     * Print out a description of the Player's Hair.
     * @param {Player} Player
     * @returns {string}
     */
    this.pHair = function (Player) {
            var Wig = Player.GetEquipmentInSlot("Wig");
            if (Wig!= 0)
                return "You are wearing a wig to hide your natural hair. It is " +Wig.HairColor()+ " and " +
                    this.lengthString(Wig.HairLength()) + " long, styled in " +
                    this.ColorizeString(Wig.HairBonus(), Wig.HairStyle()) + ".";

                return "Your hair is " + Player.HairColor + " and " + this.lengthString(this.StatToCM(Player,"Hair"), false) +
                    " long, styled in " + this.ColorizeString(Player.HairRating(), Player.HairStyle) +".";
        };

    /**
     * Print out a description of the Player's Figure.
     * @param {App.Entity.Player} Player
     * @returns {string}
     */
    this.pFigure = function (Player) {
            var pBust = Player.GetStatPercent("BODY", "Bust");
            var pWaist = Player.GetStatPercent("BODY", "Waist");
            var pHips = Player.GetStatPercent("BODY", "Hips");
            var statsStr = this.lengthValue(this.StatToCM(Player, "Bust"), false).toString() + '-' +
                           this.lengthValue(this.StatToCM(Player, "Waist"), false).toString() + '-' +
                           this.lengthValue(this.StatToCM(Player, "Hips"), false).toString() + " figure";
            var sCurve = "a @@color:yellow;waifish@@ " + statsStr;

            if (pWaist >= 20) sCurve = "a @@color:yellow;small@@ " + statsStr;
            if (pWaist >= 30) sCurve = "a @@color:yellow;thin@@ " + statsStr;
            if (pWaist >= 40) sCurve = "an @@color:yellow;average@@ " + statsStr;
            if (pWaist >= 60) sCurve = "a @@color:yellow;chubby@@ " + statsStr;
            if (pWaist >= 80) sCurve = "an @@color:red;obese@@ " + statsStr;

            if ( (pWaist + 10 < pBust) && (pWaist + 10 < pHips )) sCurve = "a @@color:lime;slightly curvy@@ " + statsStr;
            if ( (pWaist + 20 < pBust) && (pWaist + 20 < pHips )) sCurve = "a @@color:cyan;sexy and curvy@@ " + statsStr;
            if ( (pWaist + 30 < pBust) && (pWaist + 30 < pHips )) sCurve = "a @@color:magenta;hourglass@@ " + statsStr;
            if ( (pWaist + 40 < pBust) && (pWaist + 40 < pHips )) sCurve = "an @@color:DeepPink;extreme hourglass@@ " + statsStr;

            return sCurve;
        };


    /**
     * Replace tokens in string with calculated/derived literals and return it.
     * @param {Player} Player
     * @param {object} NPC
     * @param {string}String
     * @param {object} [Opt]
     * @returns {string}
     */
    this.TokenizeString = function(Player, NPC, String, Opt) {
        if (typeof NPC !== 'undefined' ) {
            String = String.replace(/NPC_NAME/g, NPC.pName());
        }

        var _this = this;
        function adjReplacer(match, stat) {
            return _this.GetAdjective("BODY", stat, Player.GetStat("BODY", stat));
        }
        function nounReplacer(match, stat) {
            return _this.GetPlayerNoun("BODY", stat, Player, false, true);
        }
        function pReplacer(match, prefix, stat, delim) {
            // uppercase charachters following underscore (which is removed)
            // STAT_NAME -> StatName
            var statName = stat[0] + stat.slice(1).toLowerCase().replace(/_([a-z])/g, (m, c) => c.toUpperCase());
            var statFuncName = 'p' + statName;
            if (_this.hasOwnProperty(statFuncName))
                return _this[statFuncName](Player, 1) + delim;
            return prefix + stat + delim;
        }
        function nReplacer(match, prefix, stat, delim) {
            // uppercase charachters following underscore (which is removed)
            // STAT_NAME -> StatName
            var statName = stat[0] + stat.slice(1).toLowerCase().replace(/_([a-z])/g, (m, c) => c.toUpperCase());
            if (App.Data.Naming.BodyConfig.hasOwnProperty(statName))
                return _this.GetPlayerNoun("BODY", statName, Player, true, true) + delim;
            return prefix + stat + delim;
        }
        function vReplacer(match, prefix, stat, delim) {
            // uppercase charachters following underscore (which is removed)
            // STAT_NAME -> StatName
            var statName = stat[0] + stat.slice(1).toLowerCase().replace(/_([a-z])/g, (m, c) => c.toUpperCase());
            if (Player.GetStatObject("BODY").hasOwnProperty(statName))
                return Player.GetStat("BODY", statName) + delim;
            return prefix + stat + delim;
        }

        String = String.replace(/PLAYER_NAME/g, "@@color:DeepPink;"+Player.SlaveName+"@@");
        String = String.replace(/GF_NAME/g, "@@color:pink;"+Player.GirlfriendName+"@@");
        String = String.replace(/pCUP/g, this.pCup(Player)); // needs special handling because it has only a single parameter
        String = String.replace(/NOUN_([A-Za-z_]+)/g, nounReplacer);
        String = String.replace(/ADJECTIVE_([A-Za-z_]+)/g, adjReplacer);
        String = String.replace(/pBLOWJOBS/g, this.GetAdjective("SKILL", "BlowJobs", Player.GetStat("SKILL", "BlowJobs")));
        String = String.replace(/pPHASE/g, Player.GetPhase(false));
        String = String.replace(/(p)([A-Z_]+)([^A-Za-z]|$)/g, pReplacer);
        String = String.replace(/(n)([A-Z_]+)([^A-Za-z]|$)/g, nReplacer);
        String = String.replace(/(v)([A-Z_]+)([^A-Za-z]|$)/g, vReplacer);

        return String;
    };

    this.pSkillName = function (Skill) {
        return App.Data.Lists["SkillDictionary"][Skill];
    };

    this.pShipMapIcon = function(index) {
        if (index >= App.Data.Lists["ShipRoute"].length) index = 0; // Force reset.
        var top = App.Data.Lists["ShipRoute"][index]["top"];
        var left = App.Data.Lists["ShipRoute"][index]["left"];
        console.log("Placing map icon at top="+top+", left="+left);
        $(document).one(":passageend", function() { $("#mapIcon").css( { "top" : top, "left" : left }); });

    };

    // Pass it an array, returns a random element of that array.
    this.GetRandomListItem = function (List) {
        return List[Math.floor(Math.random() * List.length)];
    };

    /**
     * Get icon for marking favorite item in inventory or shop lists
     * @param {boolean} IsFavorite
     * @returns {string}
     */
    this.GetItemFavoriteIcon = function (IsFavorite) {
        return IsFavorite ? "@@color:yellow;&#9733;@@" : "@@color:white;&#9734;@@";
    };

    this.RefreshTwineMoney = function() {
        try {
            $("#Money").html( setup.player.Money );
        } catch (err) {

        }
    };

    this.RefreshTwineMeter = function(m) {
        try {
            $("#"+m).html(this.pStatMeter(m, setup.player, 0, true));
        } catch (err) {

        }
    };

    this.RefreshTwineScore = function() {
        // Redraw Energy Bars
        try {
            this.RefreshTwineMeter("Health");
            this.RefreshTwineMeter("Energy");
            this.RefreshTwineMeter("WillPower");
            this.RefreshTwineMeter("Perversion");
            this.RefreshTwineMeter("Nutrition");
            this.RefreshTwineMeter("Femininity");
            this.RefreshTwineMeter("Toxicity");
            this.RefreshTwineMeter("Hormones");
        } catch (err) {
            //no-op
        }
    };
};

/**
 * Handler for the meters 'print numbers' setting
 */
var handleMetersNumberValueSettingChanged = function() {
    if (SugarCube.settings.displayMeterNumber) {
        // to accommodate longer meters
        $('#ui-bar').css("width","320px"); // seems to work better on most browsers
        App.PR.numericalMeters = true;
    } else {
        App.PR.numericalMeters = false;
        $('#ui-bar').css("width","");
    }

    App.PR.RefreshTwineScore();
};
