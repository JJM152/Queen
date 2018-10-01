App = App || { Data: { }, Entity: { } };

/**
 * NPC Entity
 * @param {Object} Data
 * @Type {NPC}
 * @constructor
 */
App.Entity.NPC = function(Data, PlayerData) {

			this.Data = Data;
			this._PlayerData = PlayerData;

			this.Name = function() { return this.Data["Name"]; };
            this.pName = function() { return "@@color:cyan;" + this.Name() + "@@"; };
			this.Mood = function() { return this._PlayerData["Mood"]; };
			this.pMood = function() { return App.PR.GetRating("Mood", this.Mood(), true); };
			this.Lust = function() { return this._PlayerData["Lust"]; };
			this.pLust = function() { return App.PR.GetRating("Lust", this.Lust(), true); };
			this.Title = function() {
                return this.Data["Title"].replace("{NAME}", this.Name());
            };

			this.ShortDesc = function() { return this.Title() + " (" + this.pMood() + ", " + this.pLust() +")"; };
			this.LongDesc = function() { return this.Data["LongDesc"].replace("{NAME}", this.Name()); };
			this.HasStore = function() { return (typeof this.Data["Store"] !== 'undefined'); };
			this.StoreName = function() { return this.Data["Store"]; };

            this.GetFlag = function(Flag) {
                if (typeof this._PlayerData.QuestFlags[Flag] === 'undefined') return 0;
                return this._PlayerData.QuestFlags[Flag]["Value"];
            };

            this.SetFlag = function(Flag, Value, Tmp) {
                if (typeof Tmp === 'undefined') Tmp = 0;
                this._PlayerData.QuestFlags[Flag] = { "Value" : Value, "TMP" : Tmp };
            };

            this.ClearFlag = function(Flag) {
                if (typeof this._PlayerData.QuestFlags[Flag] === 'undefined') return;
                delete this._PlayerData.QuestFlags[Flag];
            };

            this.ResetFlags = function() {
                for (var prop in PlayerData.QuestFlags ) {
                    if (!this._PlayerData.QuestFlags.hasOwnProperty(prop)) continue;
                    if (this._PlayerData.QuestFlags[prop]["TMP"] != 0) delete this._PlayerData.QuestFlags[prop];
                }
            };
    /**
     * Adjust an NPC statistic (dictionary value)
     * @param {string} Stat
     * @param {number} Number
     */
			this.AdjustStat = function(Stat, Number)
			{
                this._PlayerData[Stat] = Math.ceil(Math.max(1, Math.min((this._PlayerData[Stat]+Number), 100)));
			};

    /**
     * Get the value of an NPC stat.
     * @param {string} Stat
     * @returns {*}
     */
            this.GetStat = function(Stat) {
                return this._PlayerData[Stat];
            };

			this.AdjustFeelings = function()
			{
				this.AdjustStat("Mood", this.Data["DailyMood"]);
				this.AdjustStat("Lust", this.Data["DailyLust"]);
			};
};


