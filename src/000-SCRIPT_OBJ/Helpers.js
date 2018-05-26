App = App || { Data: { }, Entity: { } };

App.PR = new function() {

    /**
     * Fetch a rating for a statistic/value
     * @param Type
     * @param Value
     * @param [Colorize]
     * @returns {string}
     */
	    this.GetRating = function (Type, Value, Colorize) {
            Colorize    = Colorize || false;
            var Rating  = App.Data.Ratings[Type];

            for (var prop in Rating) {
                if (!Rating.hasOwnProperty(prop)) continue;

                if ((Value <= prop) && (Colorize == true)) return this.ColorizeString(Value, Rating[prop]);
                if (Value <= prop) return Rating[prop];
            }

            return "Untyped rating: " + Type + "," + Value;
        };

    /**
     * Helper function. Checks relevant statistic config and returns an ADJECTIVE (colorized) for use if one exists.
     * @param {string} Type
     * @param {string} Stat
     * @param {number} Value
     * @returns {string}
     */
        this.GetAdjective = function(Type, Stat, Value)
        {
            var Ratings = this.GetStatConfig(Type)[Stat]["LEVELING"];
            var Arr = App.Data.Lists.ColorScale;
            for (var prop in Ratings) {
                if (!Ratings.hasOwnProperty(prop)) continue;
                if (Value <= prop)
                    return "@@color:" + Arr[Ratings[prop]["COLOR"]] + ";" + Ratings[prop]["ADJECTIVE"] +"@@";
            }
            return "";
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
        String = String.replace(/PLAYER_NAME/g, Player.SlaveName);
        String = String.replace(/pBUST/g, this.pBust(Player, 1));
        String = String.replace(/pASS/g, this.pBust(Player, 1));
        String = String.replace(/pCUP/g, this.pCup(Player));
        String = String.replace(/pHIPS/g, this.pHips(Player, 1));
        String = String.replace(/pHORMONES/g, this.pHormones(Player, 1));
        String = String.replace(/ADJECTIVE/g, this.GetAdjective(Type, Stat, Player.GetStat(Type, Stat)));
        String = String.replace(/INCHES/g, this.CMtoINCH(this.StatToCM(Player,Stat)).toString());

        return String;
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

				return "[" + sMeter + "]"
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
				if (Rewards[i]["REWARD_TYPE"] == "ITEM" ) {
					oItem = App.Item.Factory( Rewards[i]["TYPE"], Rewards[i]["NAME"], Rewards[i]["AMOUNT"]);
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
			var oItem = App.Item.Factory( ItemType, ItemTag, ItemAmount);
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
            var hPercent = Player.GetStatPercent("BODY", "Hips");

            if (typeof Arg !== 'undefined') return this.GetAdjective("BODY", "Ass", aPercent);

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
            var realFeet = (this.CMtoINCH(pHeight) / 12);
            var feet = Math.floor(realFeet);
            var inches = Math.round((realFeet - feet) * 12);
            return feet + "&prime;" + inches + "&Prime; tall";
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
            if (typeof Arg !== 'undefined') return this.GetAdjective("BODY", "Bust", bPercent);
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
     * @param {App.Entity.Player} Player
     * @returns {string}
     */
    this.pHair = function (Player) {
            var Wig = Player.Equipment["Wig"];
            if (Wig!= 0)
                return "You are wearing a wig to hide your natural hair. It is " +Wig.HairColor()+ " and " +
                    this.CMtoINCH(Wig.HairLength()) + " inches long, styled in " +
                    this.ColorizeString(Wig.HairBonus(), Wig.HairStyle()) + ".";

                return "Your hair is " + Player.HairColor + " and " + this.CMtoINCH(this.StatToCM(Player,"Hair")) +
                    " inches long, styled in " + this.ColorizeString(Player.HairRating(), Player.HairStyle) +".";
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
            var sCurve = "a @@color:yellow;waifish@@ figure";

            if (pWaist >= 20) sCurve = "a @@color:yellow;small@@ figure";
            if (pWaist >= 30) sCurve = "a @@color:yellow;thin@@ figure";
            if (pWaist >= 40) sCurve = "an @@color:yellow;average@@ figure";
            if (pWaist >= 60) sCurve = "a @@color:yellow;chubby@@ figure";
            if (pWaist >= 80) sCurve = "an @@color:red;obese@@ figure";

            if ( (pWaist + 10 < pBust) && (pWaist + 10 < pHips )) sCurve = "a @@color:lime;slightly curvy@@ figure";
            if ( (pWaist + 20 < pBust) && (pWaist + 20 < pHips )) sCurve = "a @@color:cyan;sexy and curvy@@ figure";
            if ( (pWaist + 30 < pBust) && (pWaist + 30 < pHips )) sCurve = "an @@color:magenta;hourglass@@ figure";
            if ( (pWaist + 40 < pBust) && (pWaist + 40 < pHips )) sCurve = "an @@color:DeepPink;extreme hourglass@@ figure";

            return sCurve;
        };


    /**
     * Replace tokens in string with calculated/derived literals and return it.
     * @param {App.Entity.Player} Player
     * @param {object} NPC
     * @param {string}String
     * @param {object} [Opt]
     * @returns {string}
     */
    this.TokenizeString = function(Player, NPC, String, Opt)
        {
            if (typeof NPC !== 'undefined' ) {
                String = String.replace(/NPC_NAME/g, NPC.pName());
            }

            String = String.replace(/PLAYER_NAME/g, "@@color:DeepPink;"+Player.SlaveName+"@@");
            String = String.replace(/GF_NAME/g, "@@color:pink;"+Player.GirlfriendName+"@@");
            String = String.replace(/pBUST/g, this.pBust(Player, 1));
            String = String.replace(/pASS/g, this.pAss(Player, 1));
            String = String.replace(/pCUP/g, this.pCup(Player));
            String = String.replace(/pHIPS/g, this.pHips(Player, 1));
            String = String.replace(/pLIPS/g, this.pLips(Player, 1));
            String = String.replace(/pHORMONES/g, this.pHormones(Player, 1));
            String = String.replace(/pBLOWJOBS/g, this.GetAdjective("SKILL", "BlowJobs", Player.GetStat("SKILL", "BlowJobs")));
            String = String.replace(/pPHASE/g, Player.GetPhase(false));
            String = String.replace(/pPENIS/g, this.pPenis(Player,1));
            String = String.replace(/pWAIST/g, this.pWaist(Player, 1));
            String = String.replace(/pFACE/g, this.pFace(Player, 1));

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
};