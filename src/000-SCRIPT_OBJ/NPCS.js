window.App = window.App || { Data: { }, Entity: { } };
/**
 * Customer object for whoring.
 * @param {string} Name
 * @param {number} Mood
 * @param {number}Lust
 * @param {number}Coins
 * @constructor
 */
window.App.Entity.Customer = function(Name, Mood, Lust, Coins) {
            this.Name = Name;
            this.Mood = Mood;
            this.Lust = Lust;
            this.Coins = Coins;
            this.ServiceRating = 0;
            this.Refused = [ ];
            this.Arousal = Math.ceil(Lust/2);
            this.RapeMode = false;
            this.GetRandomListItem = function (List) {
                return List[Math.floor(Math.random() * List.length)];
            };

            this.pName = function() { return "@@color:cyan;"+this.Name+"@@"; };
            this.GetServiceRating = function() { return Math.max(0, Math.min(this.ServiceRating, 100)); };
            this.GetArousal = function() {return Math.max(0, Math.min(this.Arousal, 100)); };

            this.SexAct = this.GetRandomListItem(window.App.Data.Lists["SexActFrequency"]);

            this.AdjustMood = function (m) {
                this.Mood = Math.max(0, Math.min(m, 100));
            };
            this.AdjustLust = function (m) {
                this.Lust = Math.max(0, Math.min(m, 100));
            };
    /**
     * Fuck a customer. Returns a chat dialog
     * @param {App.Entity.Player} Player
     * @param {Object} SexCommand
     * @returns {string}
     */
            this.Fuck = function(Player, SexCommand) {
                var Difficulty  = SexCommand["DIFFICULTY"] + (100 - this.GetArousal());
                var Effective = Player._SkillRoll(SexCommand["SKILL"], Difficulty, true); // Get the modifier without an amount and scale instead of returning 0 on failure.

                if (this.SexAct == "HandJobs" )     Effective += (Player.FaceRating() / 100);
                if (this.SexAct == "BlowJobs" )     Effective += (Player.LipsRating() / 100);
                if (this.SexAct == "TitFucking" )   Effective += (Player.BustRating() / 100);
                if (this.SexAct == "AssFucking" )   Effective += (Player.AssRating()  / 100);

                Player.AdjustStatXP("Perversion", (SexCommand["DIFFICULTY"] / 10));

                var toArousal = Math.ceil( SexCommand["Arousal"] * Effective );
                this.Arousal += toArousal;
                var toService = Math.ceil( SexCommand["Satisfaction"] * (Effective + (this.Arousal / 200)));
                this.ServiceRating += toService;

                console.log("Fuck("+SexCommand["Name"]+"): Effectiveness:"+Effective+", toArousal:"+toArousal+", toService:"+toService+"\n");

                var MessageType = SexCommand["Name"]+"Basic";
                var Skill = Player.GetStat("SKILL", SexCommand["SKILL"]);
                if ( Skill >= SexCommand["Advanced"]) MessageType = SexCommand["Name"]+"Advanced";
                if ( Skill >= SexCommand["Expert"]) MessageType = SexCommand["Name"]+"Expert";

                var Output = this.GetRandomListItem(window.App.Data.Lists["SexChats"][SexCommand["SKILL"]][MessageType]);
                //var Output = window.App.PR.TokenizeString(Player, this, this.GetRandomListItem(window.App.Data.Lists["SexChats"][SexCommand["SKILL"]][MessageType]));

                if (this.RapeMode == true && Effective < 1.0 ) {
                    Player.AdjustStat("Health", (Math.floor(Math.random() * 5) * -1.0));
                    Output += "\n\nNPC_NAME is angered by your lack of skill and @@color:red;hits you@@!\n\n";
                    if (Player.GetStat("STAT", "Health") < 1) Output += "\n\nThe beating is too much for your fragile body! You die!\n\n"
                }

                return window.App.PR.TokenizeString(Player, this, Output);
            };

            this.DoChat = function (Player, Type, OptAct) {
                var Act =  (typeof OptAct !== 'undefined') ? OptAct : this.SexAct;
                return window.App.PR.TokenizeString(Player, this, this.GetRandomListItem(window.App.Data.Lists["SexChats"][Act][Type]));
            };

    /**
     * Calculates payout from whoring job.
     * @param {App.Entity.Player} Player
     * @returns {number}
     */
			this.PayOut = function(Player) {
				var BasePay     =   Math.round( this.Coins * (this.ServiceRating / 100));
                var BeautyBonus =   Math.floor(Math.random() * ( this.Coins * (Player.Beauty() / 100)));
                var StyleBonus  =   Math.floor(Math.random() * ( this.Coins * (Player.Style() / 100)));
                var FetishBonus =   Math.floor(Math.random() * ( this.Coins * (Player.Fetish() / 100)));
                var FemBonus    =   Math.floor(Math.random() * ( this.Coins * (Player.GetStatPercent("STAT", "Femininity") / 100)));
				
				if (this.Arousal >= 90) BasePay = ( BasePay * ( 1 + (this.Arousal/100)));				
				
				var Pay = Math.round( BasePay + BeautyBonus + ( StyleBonus * 0.5 ) + (FetishBonus * 0.5) + (FemBonus * 0.5));
                return Math.ceil(Math.max((this.Coins / 10), Math.min(Pay, (this.Coins * 6))));
			};

            this.HasRefused = function(Act)
            {
                return ( $.inArray(Act, this.Refused) != -1);
            };

    /**
     * Used when the player needs to negotiate a new sex act.
     * @param {string} Act
     * @param {App.Entity.Player} Player
     * @returns {number}
     */
            this.Negotiate = function (Act, Player) {
                var res = Player._SkillRoll("Seduction", (25 + (100 - this.Mood)));
                if (res == 0 && (Math.floor(Math.random() * 100) + 1) < (100 - this.Mood)) {
                    this.ServiceRating -= 10;
                    return -1;
                } else if (res == 0) {
                    this.ServiceRating -= 5;
                    this.Refused.push(Act);
                    return 0;
                } else {
                    this.SexAct = Act;
                    return 1;
                }
            };
        };

/**
 * NPC Entity
 * @param {Object} Data
 * @constructor
 */
window.App.Entity.NPC = function(Data) {

			this.Data = Data;
			this.QuestFlags = { };
			this.Name = function() { return this.Data["Name"]; };
            this.pName = function() { return "@@color:cyan;" + this.Name() + "@@"; };
			this.Mood = function() { return this.Data["Mood"]; };
			this.pMood = function() { return window.App.PR.GetRating("Mood", this.Mood(), true); };
			this.Lust = function() { return this.Data["Lust"]; };
			this.pLust = function() { return window.App.PR.GetRating("Lust", this.Lust(), true); };
			this.Title = function() {
                return this.Data["Title"].replace("{NAME}", this.Name());
            };
			this.ShortDesc = function() { return this.Title() + " (" + this.pMood() + ", " + this.pLust() +")"; };
			this.LongDesc = function() { return this.Data["LongDesc"].replace("{NAME}", this.Name()); };
			this.HasStore = function() { return (typeof this.Data["Store"] !== 'undefined'); };
			this.StoreName = function() { return this.Data["Store"]; };
            this.Wealth = function() { return this.Data["Wealth"]; };

            this.GetFlag = function(Flag) {
                if (typeof this.QuestFlags[Flag] === 'undefined') return 0;
                return this.QuestFlags[Flag]["Value"];
            };

            this.SetFlag = function(Flag, Value, Tmp) {
                if (typeof Tmp === 'undefined') Tmp = 0;
                this.QuestFlags[Flag] = { "Value" : Value, "TMP" : Tmp };
            };

            this.ClearFlag = function(Flag) {
                if (typeof this.QuestFlags[Flag] === 'undefined') return;
                delete this.QuestFlags[Flag];
            };

            this.ResetFlags = function() {
                for (var prop in this.QuestFlags ) {
                    if (!this.QuestFlags.hasOwnProperty(prop)) continue;
                    if (this.QuestFlags[prop]["TMP"] != 0) delete this.QuestFlags[prop];
                }
            };
    /**
     * Adjust an NPC statistic (dictionary value)
     * @param {string} Stat
     * @param {number} Number
     */
			this.AdjustStat = function(Stat, Number)
			{
                this.Data[Stat] = Math.ceil(Math.max(0, Math.min((this.Data[Stat]+Number), 100)));
			};

    /**
     * Get the value of an NPC stat.
     * @param {string} Stat
     * @returns {*}
     */
            this.GetStat = function(Stat) {
                return this.Data[Stat];
            };

			this.AdjustFeelings = function()
			{
				this.AdjustStat("Mood", this.Data["DailyMood"]);
				this.AdjustStat("Lust", this.Data["DailyLust"]);
			};
		};


