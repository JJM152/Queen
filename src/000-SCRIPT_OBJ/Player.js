App = App || { Data: { }, Entity: { } };

/**
 * The basic player object.
 * @constructor
 */
App.Entity.Player = function (){
    // Player Basic Variables
    this.OriginalName = "Joseph";
    this.SlaveName = "Josie";
    this.GirlfriendName = "Annette";
    this.NickName = "";
    this.HairColor = "black";
    this.HairStyle = "a boy cut";
    this.HairBonus = 0;
    this.MakeupStyle = "plain faced";
    this.MakeupBonus = 0;
    this.EyeColor = "brown";
    this.Money = 0;
    this.SleepLog = [];
    /** @type {number} */
    this.SailDays = 1;
    this.LastUsedMakeup = "minimal";
    this.LastUsedHair = "boy cut";
    this.debugMode = false;
    this.difficultySetting = 1;

    this.JobFlags = { };
    this.VoodooEffects = { };
    this.QuestFlags = { "Q001": "ACTIVE" }; // Default Quest.

    this.History = {
        "ITEMS" : { },
        "CLOTHING_KNOWLEDGE" : { }, // Flag to gain knowledge
        "CLOTHING_EFFECTS_KNOWN" : { },
        "DAYS_WORN" : { },
        "SEX"   : { },
        "MONEY" : { }
    };

    // Game/Environment Variables
    this.Day = 1;
    this.Phase = 0; // 0 morning, 1 afternoon, 2 evening, 3 night, 4 late night

    this.Init = function() {

        this.OriginalName = window.App.Data.Names["Male"][Math.floor(Math.random() * window.App.Data.Names["Male"].length)];
        this.SlaveName = window.App.Data.Names["Female"][Math.floor(Math.random() * window.App.Data.Names["Female"].length)];
        var GfName = window.App.Data.Names["Female"][Math.floor(Math.random() * window.App.Data.Names["Female"].length)];

        while (GfName == this.SlaveName) {
            GfName = window.App.Data.Names["Female"][Math.floor(Math.random() * window.App.Data.Names["Female"].length)];
        }

        this.GirlfriendName = GfName;

        this.SetStartingStats("STAT");
        this.SetStartingStats("BODY");
        this.SetStartingStats("SKILL");

        this.Inventory = [  window.App.Item.Factory("COSMETICS", "hair accessories",    10),
            window.App.Item.Factory("COSMETICS", "hair products",       10),
            window.App.Item.Factory("COSMETICS", "basic makeup",        10)];

        this.Equipment = {
            "Wig":              window.App.Item.Factory("CLOTHES", "cheap wig"),
            "Hat":              0,
            "Neck":             window.App.Item.Factory("CLOTHES", "collar"),
            "Nipples":          0,
            "Bra":              window.App.Item.Factory("CLOTHES", "chemise"),
            "Corset":           0,
            "Panty":            window.App.Item.Factory("CLOTHES", "cotton bloomers"),
            "Stockings":        window.App.Item.Factory("CLOTHES", "cotton stockings"),
            "Shirt":            0,
            "Pants":            0,
            "Dress":            window.App.Item.Factory("CLOTHES", "cotton dress"),
            "Costume":          0,
            "Shoes":            window.App.Item.Factory("CLOTHES", "worn boots"),
            "Butt":             0,
            "Penis":            window.App.Item.Factory("CLOTHES", "chastity cage"),
            "Weapon":           0
        };

        this.NPCS = {
            "Crew":                 window.App.Item.Factory("NPC",     "Crew"),
            "Cook":                 window.App.Item.Factory("NPC",     "Cook"),
            "Captain":              window.App.Item.Factory("NPC",     "Captain"),
            "Quartermaster":        window.App.Item.Factory("NPC",     "Quartermaster"),
            "FirstMate":            window.App.Item.Factory("NPC",     "FirstMate"),
            "IslaTavernKeeper" :    window.App.Item.Factory("NPC",     "IslaTavernKeeper"),
            "IslaShopKeeper" :      window.App.Item.Factory("NPC",     "IslaShopKeeper"),
            "Jarvis" :              window.App.Item.Factory("NPC",     "Jarvis"),
            "LordRowe":             window.App.Item.Factory("NPC",     "LordRowe"),
            "Petey":                window.App.Item.Factory("NPC",     "Petey"),
            "Georgina":             window.App.Item.Factory("NPC",     "Georgina"),
            "Paola":                window.App.Item.Factory("NPC",     "Paola"),
            "Steve":                window.App.Item.Factory("NPC",     "Steve"),
            "Gulliver":             window.App.Item.Factory("NPC",     "Gulliver"),
            "Blanche":              window.App.Item.Factory("NPC",     "Blanche"),
            "Simone":               window.App.Item.Factory("NPC",     "Simone"),
            "LustyLassCustomers":   window.App.Item.Factory("NPC",     "LustyLassCustomers"),
            "Charmaine":            window.App.Item.Factory("NPC",     "Charmaine"),
            "SlatternCustomers":    window.App.Item.Factory("NPC",     "SlatternCustomers")
        };

        /**
         * @param NpcName {string}
         * @returns {App.Entity.NPC}
         */
        this.GetNPC = function(NpcName ){
          if (!this.NPCS.hasOwnProperty(NpcName))
              this.NPCS[NpcName] = window.App.Item.Factory("NPC", NpcName);
            return this.NPCS[NpcName];
        };


        this.StoreInventory = {
            "GALLEY":           { "LAST_STOCKED" : 0, "INVENTORY" : [ ], "RARE" : [ ]},
            "CARGO":            { "LAST_STOCKED" : 0, "INVENTORY" : [ ], "RARE" : [ ]},
            "ISLATAVERN":       { "LAST_STOCKED" : 0, "INVENTORY" : [ ], "RARE" : [ ]},
            "ISLASTORE":        { "LAST_STOCKED" : 0, "INVENTORY" : [ ], "RARE" : [ ]},
            "SMUGGLERS":        { "LAST_STOCKED" : 0, "INVENTORY" : [ ], "RARE" : [ ]},
            "PEACOCK":          { "LAST_STOCKED" : 0, "INVENTORY" : [ ], "RARE" : [ ]},
            "GOLDEN_GOODS":     { "LAST_STOCKED" : 0, "INVENTORY" : [ ], "RARE" : [ ]},
            "LUSTY_LASS":       { "LAST_STOCKED" : 0, "INVENTORY" : [ ], "RARE" : [ ]}
        };
    };

    /**
     * Helper function. Sets the starting statistics for a player from the config objects.
     * @param Type
     */
    this.SetStartingStats = function (Type) {
        var Prop;
        var ConfigOb;

        ConfigOb = this.GetStatConfig(Type);

        for (Prop in ConfigOb) {
            if(!ConfigOb.hasOwnProperty(Prop)) continue;
            if (Type == "BODY") this.AdjustBody(Prop, ConfigOb[Prop]["START"]);
            if (Type == "SKILL") this.AdjustSkill(Prop, ConfigOb[Prop]["START"]);
            if (Type == "STAT") this.AdjustStat(Prop, ConfigOb[Prop]["START"]);
        }
    };

    /**
     * Helping function to get the starting value of a statistic.
     * @param {string} Type
     * @param {string} Stat
     * @returns {number}
     */
    this.GetStartStat = function(Type, Stat) {
        return this.GetStatConfig(Type)[Stat]["START"];
    };

    /**
     * With Icon = true then return string time with Icon.
     * With Icon = false return numerical time of day.
     * @param {boolean} Icon
     * @returns {*}
     */
    this.GetPhase = function (Icon) {
        if (typeof Icon === 'undefined') Icon = false;
        if (this.Phase == 0) return Icon ? "morning @@color:yellow;&#9788;@@" : "morning";
        if (this.Phase == 1) return Icon ? "afternoon @@color:orange;&#9728;@@" : "afternoon";
        if (this.Phase == 2) return Icon ? "evening @@color:azure;&#9734;@@" : "evening";
        if (this.Phase == 3) return Icon ? "night @@color:cornflowerblue;&#9789;@@" : "night";
        if (this.Phase == 4) return Icon ? "late night @@color:DeepPink;&#9789;@@" : "late night";
        return this.Phase;
    };

    /**
     * Returns the phase icon for the current phase.
     * @param {number} Arg
     * @returns {string}
     */
    this.GetPhaseIcon = function(Arg) {
        if (Arg == 0) return "@@color:yellow;&#9788;@@";
        if (Arg == 1) return "@@color:orange;&#9728;@@";
        if (Arg == 2) return "@@color:azure;&#9734;@@";
        if (Arg == 3) return "@@color:cornflowerblue;&#9789;@@";
        if (Arg == 4) return "@@color:DeepPink;&#9789;@@";
        return "@@color:DeepPink;&#9789;@@";
    };

    // Player Statistic Variables
    this.CoreStats = {
        "Health":           0,
        "Nutrition":        0,
        "WillPower":        0,
        "Perversion":       0,
        "Femininity":       0,
        "Fitness":          0,
        "Toxicity":         0,
        "Hormones":         0,
        "Energy":           0
    };

    this.CoreStatsXP = {
        "Health":           0,
        "Nutrition":        0,
        "WillPower":        0,
        "Perversion":       0,
        "Femininity":       0,
        "Fitness":          0,
        "Toxicity":         0,
        "Hormones":         0,
        "Energy":           0
    };

    this.BodyStats = {
        "Face":             0,
        "Lips":             0,
        "Bust":             0,
        "Ass":              0,
        "Waist":            0,
        "Hips":             0,
        "Penis":            0,
        "Hair":             0,
        "Height":           0,
        "Balls":            0
    };

    this.BodyXP = {
        "Face":             0,
        "Lips":             0,
        "Bust":             0,
        "Ass":              0,
        "Waist":            0,
        "Hips":             0,
        "Penis":            0,
        "Hair":             0,
        "Height":           0,
        "Balls":            0
    };

    this.Skills = {
        "HandJobs":         0,
        "TitFucking":       0,
        "BlowJobs":         0,
        "AssFucking":       0,
        "Dancing":          0,
        "Singing":          0,
        "Seduction":        0,
        "Cleaning":         0,
        "Cooking":          0,
        "Serving":          0,
        "Swashbuckling":    0,
        "Sailing":          0,
        "Navigating":       0,
        "Styling":          0
    };

    this.SkillsXP = {
        "HandJobs":         0,
        "TitFucking":       0,
        "BlowJobs":         0,
        "AssFucking":       0,
        "Dancing":          0,
        "Singing":          0,
        "Seduction":        0,
        "Cleaning":         0,
        "Cooking":          0,
        "Serving":          0,
        "Swashbuckling":    0,
        "Sailing":          0,
        "Navigating":       0,
        "Styling":          0
    };


    /**
     * Clothing items the Player owns.
     * @type {Array}
     */
    this.Wardrobe = [ ];

    /**
     * Performs a skill roll.
     * @param {string} SkillName - Skill to check.
     * @param {number} Difficulty - Test difficulty.
     * @param {boolean} [Scaling] - Return value is always the XpMod and never 0.
     * @returns {number} - result of check.
     */
    this._SkillRoll = function (SkillName, Difficulty, Scaling) {
        Scaling = Scaling || false;
        var Target      = this.CalculateSkillTarget(SkillName, Difficulty);
        var DiceRoll    = Math.floor(Math.random() * 100);
        var Synergy     = this.GetSynergyBonus(SkillName);

        DiceRoll += Math.max(0, Math.min(Synergy, 100)); // Cap 100
        DiceRoll += this._RollBonus("SKILL", SkillName);

        var BaseXp      = Math.max(10, Math.min((Difficulty - this.GetStat("SKILL", SkillName)), 50));
        var XpMod       = Math.max(0.25, Math.min((DiceRoll  / Target), 2.0)); // 0.25 - 2.0
        var XpEarned    = Math.ceil(BaseXp * XpMod);

        this.AdjustSkillXP(SkillName, XpEarned);

        console.log("SkillRoll(" + SkillName + "," + Difficulty + "):  Target = " + Target + ", DiceRoll = " + DiceRoll + " XPMod="+XpMod+"\n");

        if (Scaling == true) return XpMod;
        if (DiceRoll >= Target ) return 1;
        return 0;
    };

    /**
     *
     * @param {string} Type
     * @param {string} Name
     * @returns {number}
     * @private
     */
    this._RollBonus = function(Type, Name) {
      var bonus = 0;

        if (this.VoodooEffects.hasOwnProperty("PIRATES_PROWESS") && Type == "SKILL") bonus += this.VoodooEffects["PIRATES_PROWESS"];
        if (this.difficultySetting == 1) bonus += 5;
        if (this.difficultySetting == 2) bonus += 10;
        bonus += this.GetWornSkillBonus(Name)

        return bonus;
    };

    /**
     * Performs a skill roll with a value amount which is modified when returned.
     * @param {string} SkillName
     * @param {number} Difficulty
     * @param {number} Amount
     * @param {boolean} [Scaling]
     * @returns {number}
     */
    this.SkillRoll = function(SkillName, Difficulty, Amount, Scaling)
    {
        var Mod = this._SkillRoll(SkillName, Difficulty, Scaling);
        var ret = Math.ceil(Amount * Mod);
        console.log("SkillRoll: Mod="+Mod+",Amount="+Amount+",Ret="+ret+"\n");
        return Math.ceil(Amount * Mod);
    };

    /**
     * Like a skill roll, but a simple check for a statistic (BODY or STAT).
     * @param {string} Type
     * @param {string} Name
     * @param {number} Difficulty
     * @param {number} Amount
     * @param {boolean} Scaling
     * @returns {number}
     */
    this.StatRoll = function(Type, Name, Difficulty, Amount, Scaling)
    {
        Scaling = Scaling || false;
        var Target      = this.CalculateSkillTarget(Name, Difficulty, Type);
        var DiceRoll    = ( Math.floor(Math.random() * 100) + 1);
        DiceRoll += this._RollBonus("STAT", Name);
        var Mod       = Math.max(0.25, Math.min((DiceRoll  / Target), 2.0)); // 0.25 - 2.0

        console.log("StatRoll(" + Name + "," + Difficulty + "):  Target = " + Target + ", DiceRoll = " + DiceRoll + " Mod="+Mod+"\n");

        if (Scaling == true) return Math.ceil(Amount * Mod);
        if (DiceRoll >= Target) return 1;
        return 0;

    };
    /**
     * Calculate the target of the 1-100 dice roll for a skill check. Always a 5% chance of success/failure.
     * @param {string} SkillName
     * @param {number} Difficulty
     * @param {string} [Alternate]
     * @returns {number}
     */
    this.CalculateSkillTarget = function(SkillName, Difficulty, Alternate) {
        Alternate = Alternate || "SKILL";

        var SkillVal = this.GetStat(Alternate, SkillName);
        return (100 - Math.max(5, Math.min((50 + (SkillVal - Difficulty)), 95)));
    };

    /**
     * Checks the SkillSynergy dictionary and adds any skill bonuses to dice rolls on
     * skill checks. For example, TitFucking gets a bonus for the size of the Players Bust score.
     * @param {string} SkillName
     * @returns {number}
     */
    this.GetSynergyBonus = function (SkillName) {
        if (!window.App.Data.Lists["SkillSynergy"].hasOwnProperty(SkillName)) return 0;
        var Bonus = 0;
        var Synergy = window.App.Data.Lists["SkillSynergy"][SkillName];
        for (var i = 0; i < Synergy.length; i++) {
            Bonus += Math.ceil(this.GetStatPercent(Synergy[i]["TYPE"], Synergy[i]["NAME"]) * Synergy[i]["BONUS"]);
        }
        return Bonus;
    };

    /**
     * Style hair and makeup.
     * @param {string} HairID
     * @param {string} MakeupID
     */
    this.DoStyling = function(HairID, MakeupID )
    {
        if (HairID.indexOf(':') > -1) { // We passed an Item Id.
            if ((this.Equipment["Wig"] == 0) || (this.Equipment["Wig"].Id() != HairID))
                this.Wear( this.WardrobeItem(HairID));
        } else {
            if (this.Equipment["Wig"] != 0) this.Remove(this.Equipment["Wig"]);

            var Hair = window.App.Data.Lists["HairStyles"].filter(function(Item) { return Item["NAME"] == HairID; })[0];

            if ( this.GetItemCharges("hair tool") >= Hair["RESOURCE1"] && this.GetItemCharges("hair treatment") >= Hair["RESOURCE2"]) {
                this.HairStyle = Hair["SHORT"];
                this.HairBonus = this.SkillRoll("Styling", Hair["DIFFICULTY"], Hair["STYLE"], true);
                this.LastUsedHair = Hair["NAME"];
                this.UseItemCharges("hair tool", Hair["RESOURCE1"]);
                this.UseItemCharges("hair treatment", Hair["RESOURCE2"]);
            }
        }

        var Makeup = window.App.Data.Lists["MakeupStyles"].filter(function(Item) { return Item["NAME"] == MakeupID; })[0];

        if ( this.GetItemCharges("basic makeup") >= Makeup["RESOURCE1"] && this.GetItemCharges("expensive makeup") >= Makeup["RESOURCE2"]) {
            this.MakeupStyle = Makeup["SHORT"];
            this.MakeupBonus = this.SkillRoll("Styling", Makeup["DIFFICULTY"], Makeup["STYLE"], true);
            this.LastUsedMakeup = Makeup["NAME"];
            this.UseItemCharges("basic makeup", Makeup["RESOURCE1"]);
            this.UseItemCharges("expensive makeup", Makeup["RESOURCE2"]);
        }
    };

    /**
     * Returns an array of Customer objects as the result of solicitation for whoring customers.
     * @param {number} Opt
     * @param {number} rLust
     * @param {number} rMood
     * @param {number} rWealth
     * @returns {Array}
     */
    this.SolicitCustomer = function (Opt, rLust, rMood, rWealth) {
        var rBonus = this.GetSolicitationBonus(Opt);
        var Customers = Math.max(0, Math.min((Math.round(((rLust + rBonus) / 33)) - 1), 4));
        var name = "Fred";
        var CustomerList = [];

        for (var i = 0; i < Customers; i++) {
            name = window.App.Data.Names["Male"][Math.floor(Math.random() * window.App.Data.Names["Male"].length)];
            var co = new window.App.Entity.Customer(name, rMood, rLust, rWealth);
            CustomerList.push(co);
        }
        return CustomerList;
    };

    /**
     * Selects a style of solicitation for customers and then returns a bonus used by SolicitCustomer
     * @param {number} opt
     * @returns {number}
     */
    this.GetSolicitationBonus = function (opt) {
        var baseScore = Math.round((this.Beauty() * 0.5 ) + (this.GetStat("STAT", "Femininity") * 0.3) + (this.Style() * 0.2));
        baseScore = Math.round(baseScore * (1 + (this.GetStat("SKILL","Seduction") / 100)));

        switch (opt) {
            case 1:
                this.AdjustStatXP("Femininity", 25, 40);
                baseScore += Math.max(0, Math.min((this.GetStat("STAT", "Femininity") * 0.75), 100));
                break;
            case 2:
                this.AdjustStatXP("Perversion", 25, 40);
                this.AdjustStatXP("WillPower", -10, 60);
                baseScore += Math.max(0, Math.min((this.GetStat("STAT", "Perversion") * 0.75), 100));
                break;
            case 3:
                this.AdjustStatXP("Perversion", 50, 50);
                this.AdjustStatXP("Femininity", 25, 40);
                this.AdjustStatXP("WillPower", -20, 40);
                baseScore += Math.max(0, Math.min((this.GetStat("STAT", "Perversion") * 0.25), 100));
                baseScore += Math.max(0, Math.min((this.GetStat("STAT", "Femininity") * 0.25), 100));
                baseScore += Math.max(0, Math.min((this.Fetish() * 0.5), 100));
                break;

            default:
                this.AdjustStatXP("Femininity", 25, 40);
                baseScore += Math.max(0, Math.min((this.GetStat("STAT", "Femininity") * 0.75), 100));
                break;
        }

        return Math.floor(baseScore);
    };

    /**
     * Calculates the Players "Beauty" based on other statistics.
     * @returns {number}
     */
    this.Beauty = function () {
        var cBeauty = Math.round((this.GetStat("BODY", "Face") * 0.4) + (this.Figure() * 0.3 ) + (this.GetStat("STAT", "Fitness") * 0.3));
        return Math.max(1, Math.min(cBeauty, 100));
    };

    /**
     * Fetish rating is derived from the enlarged (or minimized) size of the Players body parts.
     * Generally however, bigger (what) means more points. Used to calculate whoring pay and some
     * other activities.
     * @returns {number}
     */
    this.Fetish = function () {
        var score = 0;
        // 5 - 15 for boobs and ass each   (30 pts)
        if (this.GetStatPercent("BODY", "Bust") >= 60)  score += Math.round ((5 + (this.GetStatPercent("BODY", "Bust")/10)));
        if (this.GetStatPercent("BODY", "Ass") >= 60)   score += Math.round ((5 + (this.GetStatPercent("BODY", "Ass")/10)));

        // up to 10 each for lips and waist and hips (35 pts)
        if (this.GetStatPercent("BODY", "Lips") >= 80)  score += Math.round((this.GetStatPercent("BODY", "Lips")/10));
        if (this.GetStatPercent("BODY", "Hips") >= 80)  score += Math.round((this.GetStatPercent("BODY", "Hips")/10));
        if (this.GetStatPercent("BODY", "Waist") <= 30) score += 5;
        if (this.GetStatPercent("BODY", "Waist") <= 15) score += 5;
        if (this.GetStatPercent("BODY", "Waist") <= 1)  score += 5;

        // Penis and Balls, 10 each. (20 pts)
        if ((this.GetStatPercent("BODY", "Penis") <= 10) && (this.GetStatPercent("BODY", "Balls") <= 10)) score += 10; // tiny genitals!
        if ((this.GetStatPercent("BODY", "Penis") >= 90) && (this.GetStatPercent("BODY", "Balls") >= 90)) score += 10; // big genitals

        return Math.max(0, Math.min(Math.round((( score / 85 ) * 100)), 100)); // clamp 1 - 100 rating
    };

    /**
     * Derived statistic that reports "style" made up out of hair, makeup and clothing.
     * @returns {number}
     */
    this.Style = function () {
        var cStyle = Math.round(( this.HairRating() * 0.25 ) + ( this.MakeupRating() * 0.25 ) + (this.ClothesRating() * 0.5));
        return Math.max(0, Math.min(cStyle, 100));
    };

    /**
     * shim function that returns the "hair rating" of the player, but checks first if they are wearing
     * a wig and then reports that number instead.
     * @returns {number}
     */
    this.HairRating = function () {
        if (this.Equipment["Wig"] != 0) return Math.max(0, Math.min(this.Equipment["Wig"].HairBonus(), 100));
        return Math.max(0, Math.min(this.HairBonus, 100));
    };

    /**
     * @returns {string}
     */
    this.GetHairStyle = function () {
        if (this.Equipment["Wig"] != 0) return this.Equipment["Wig"].HairStyle();
        return this.HairStyle;
    };

    /**
     * @returns {string}
     */
    this.GetHairColor = function () {
        if (this.Equipment["Wig"] != 0) return this.Equipment["Wig"].HairColor();
        return this.HairColor;
    };

    /**
     * The makeup rating of the player.
     * @returns {number}
     */
    this.MakeupRating = function () {
        return Math.max(0, Math.min(this.MakeupBonus, 100));
    };

    /**
     * Derived statistic (face + makeup). Bonus payout for hand jobs if you have a good face.
     * @returns {number}
     */
    this.FaceRating = function () {
        return Math.ceil(Math.max(0, Math.min((( this.MakeupRating() + this.GetStat("BODY", "Face")) / 2), 100)));
    };

    /**
     * Iterates through players worn items and sums .Style() property.
     * @returns {number}
     */
    this.ClothesRating = function () {
        var cStyle = 0;

        for (var prop in this.Equipment) {
            if (!this.Equipment.hasOwnProperty(prop)) continue;
            if (this.Equipment[prop] == 0) continue;
            cStyle += this.Equipment[prop].Style();
        }
        return Math.max(1, Math.min(Math.round(((cStyle / 100 ) * 100)), 100)); // 1 - 100 rating
    };

    /**
     *
     * @param {string} Spec
     * @returns {number}
     */
    this.GetStyleSpecRating = function(Spec){
        var Rating = 0;

        for (var prop in this.Equipment)
        {
            if (!this.Equipment.hasOwnProperty(prop)) continue;
            if (this.Equipment[prop] == 0) continue;

            Rating += this.Equipment[prop].CategoryBonus(Spec);
        }
        return Rating;
    };

    /**
     * Derived statistic, lends itself to Beauty. WaistRating, BustRating, HipsRating and AssRating contribute.
     * @returns {number}
     */
    this.Figure = function () {
        var tFig = Math.round((this.WaistRating() + this.BustRating() + this.HipsRating() + this.AssRating()) / 4);
        return Math.max(1, Math.min(tFig, 100)); // Normalize between 1 - 100
    };

    /**
     * Calculates "golden ratio" for waist @ Player's height and then returns a score relative their current waist.
     * @returns {number}
     */
    this.WaistRating = function () {
        var GoldenWaist = Math.round((window.App.PR.StatToCM(this, "Height") * 0.375)); // 54cm to 78cm
        return Math.round(((GoldenWaist / window.App.PR.WaistInCM(this)) / 1.8) * 100);
    };

    /**
     * Calculates "golden ratio" for bust @ Player's height and then returns a score relative their current bust.
     * @returns {number}
     */
    this.BustRating = function () {
        var GoldenBust = (Math.round((window.App.PR.StatToCM(this, "Height") * 0.375)) * 1.5 );
        return Math.round(((window.App.PR.BustCCtoCM(this) / GoldenBust) / 1.6) * 100);
    };

    /**
     * Calculates "golden ratio" for hips @ Player's height and then returns a score relative their current bust.
     * @returns {number}
     */
    this.HipsRating = function () {
        var GoldenHips = (Math.round((window.App.PR.StatToCM(this, "Height") * 0.375)) * 1.5 );
        return Math.round(((window.App.PR.HipsInCM(this) / GoldenHips) / 1.6) * 100);
    };

    /**
     * Combination of Ass + Hips.
     * @returns {number}
     */
    this.AssRating = function () {
        return Math.round((this.GetStatPercent("BODY", "Ass") + this.GetStatPercent("BODY", "Hips")) / 2);
    };

    /**
     * For now just the percentage of the lips 1-100.
     * @returns {number}
     */
    this.LipsRating = function () {
        return this.GetStatPercent("BODY", "Lips");
    };

    /**
     * Returns the config settings for a statistic type.
     * @param {string} Type - STAT | SKILL | BODY
     * @returns {*}
     */
    this.GetStatConfig = function (Type) {
        if (Type == "STAT") return window.App.Data.Lists.StatConfig;
        if (Type == "SKILL") return window.App.Data.Lists.SkillConfig;
        if (Type == "BODY") return window.App.Data.Lists.BodyConfig;
    };
    /**
     * Return a statistic value (raw)
     * @param {string} Type
     * @param {string} StatName
     * @returns {number}
     */
    this.GetStat = function (Type, StatName) {
        if (Type == "STAT") return this.CoreStats[StatName];
        if (Type == "SKILL") return this.Skills[StatName];
        if (Type == "BODY") return this.BodyStats[StatName];
    };

    /**
     * Returns the current XP of a statistic.
     * @param {string} Type
     * @param {string} StatName
     * @returns {number}
     */
    this.GetStatXP = function (Type, StatName) {
        if (Type == "STAT") return this.CoreStatsXP[StatName];
        if (Type == "SKILL") return this.SkillsXP[StatName];
        if (Type == "BODY") return this.BodyXP[StatName];
    };

    this.GetMaxStat = function (Type, StatName) {
        return this.GetStatConfig(Type)[StatName]["MAX"];
    };
    this.GetMinStat = function (Type, StatName) {
        return this.GetStatConfig(Type)[StatName]["MIN"];
    };

    /**
     * @param {string} Type
     * @param {string} StatName
     * @returns {number}
     */
    this.GetStatPercent = function (Type, StatName) {
        return Math.floor(((this.GetStat(Type, StatName) - this.GetMinStat(Type, StatName)) / ((this.GetMaxStat(Type, StatName) - this.GetMinStat(Type, StatName)))) * 100);
    };

    this.GetLeveling = function (Type, StatName, TargetScore) {
        var Levels = this.GetStatConfig(Type)[StatName]["LEVELING"];
        //var Percent = Math.round(( (( TargetScore - this.GetMinStat(Type, StatName)) / ( this.GetMaxStat(Type, StatName) - this.GetMinStat(Type,StatName))) * 100));
        var Percent = this.GetStatPercent(Type, StatName) + TargetScore;
        var Level = {"COST": 100, "STEP": 1};

        for (var prop in Levels) {
            if (!Levels.hasOwnProperty(prop)) continue;
            if ((Levels[prop] == 'FIXED') || (Levels[prop] == 'NONE') || (Percent <= prop)) {
                Level = {
                    "COST": Levels[prop]["COST"],
                    "STEP": ((this.GetMaxStat(Type, StatName) / 100) * Levels[prop]["STEP"])
                };
                break;
            }
        }

        return Level;
    };

    /**
     * @param {string} Type
     * @param {string} StatName
     * @param {number} Amount
     * @returns {number}
     */
    this.GetCapStat = function (Type, StatName, Amount) {
        return Math.round((Math.max(this.GetMinStat(Type, StatName), Math.min(Amount, this.GetMaxStat(Type, StatName)))) * 100) / 100;
    };

    this.AdjustStat = function (StatName, Amount) {
        if (this.debugMode) console.log("AdjustStat: Name="+StatName+", Amount="+Amount);
        this.CoreStats[StatName] = this.GetCapStat("STAT", StatName, ( this.CoreStats[StatName] + Amount));
    };

    this.AdjustBody = function (StatName, Amount) {
        if (this.debugMode) console.log("AdjustBody: Name="+StatName+", Amount="+Amount);
        this.BodyStats[StatName] = this.GetCapStat("BODY", StatName, ( this.BodyStats[StatName] + Amount));
    };

    this.AdjustSkill = function (StatName, Amount) {
        if (this.debugMode) console.log("AdjustSkill: Name="+StatName+", Amount="+Amount);
        this.Skills[StatName] = this.GetCapStat("SKILL", StatName, ( this.Skills[StatName] + Amount));
    };

    this.AdjustXP = function (Type, StatName, Amount, Limiter) {
        Amount = Math.ceil(Amount); // No floats.
        if (this.debugMode)
        console.debug("AdjustXP: Type="+Type+",Stat="+StatName+",Amount="+Amount+",Limit="+Limiter);

        if ((Amount > 0) && (this.GetStat(Type, StatName) >= Limiter) && (Limiter != 0)) return;
        if ((Amount < 0) && (this.GetStat(Type, StatName) <= Limiter) && (Limiter != 0)) return;
        if ((Amount > 0) && (this.GetStat(Type, StatName) >= this.GetMaxStat(Type, StatName))) return;
        if ((Amount < 0) && (this.GetStat(Type, StatName) <= this.GetMinStat(Type, StatName))) return;
        if (Math.abs(this.GetStatXP(Type, StatName)) >= 250) Amount = Math.ceil(Amount / 2);
        if (Math.abs(this.GetStatXP(Type, StatName)) >= 500) Amount = Math.ceil(Amount / 4);
        if (Math.abs(this.GetStatXP(Type, StatName)) >= 1000) Amount = Math.ceil(Amount / 10);
        if (Type == "STAT")  this.CoreStatsXP[StatName] += Amount;
        if (Type == "SKILL") this.SkillsXP[StatName] += Amount;
        if (Type == "BODY")  this.BodyXP[StatName] += Amount;
        if (this.debugMode)
        console.debug("AdjustXP: Adjusted by "+Amount);
    };

    this.AdjustStatXP = function (StatName, Amount, Limiter) {
        return this.AdjustXP("STAT", StatName, Amount, Limiter);
    };
    this.AdjustBodyXP = function (StatName, Amount, Limiter) {
        return this.AdjustXP("BODY", StatName, Amount, Limiter);
    };
    this.AdjustSkillXP = function (StatName, Amount, Limiter) {
        return this.AdjustXP("SKILL", StatName, Amount, Limiter);
    };

    this.LevelStat = function (Type, StatName) {
        var TargetScore = this.GetStatXP(Type, StatName) < 0 ? -1 : 1;
        var Leveling = this.GetLeveling(Type, StatName, TargetScore);
        if ((Math.abs(this.GetStatXP(Type, StatName))) < Leveling["COST"]) return;

        if (TargetScore < 0 && this.GetStat(Type, StatName) == this.GetMinStat(Type, StatName)) return;
        if (TargetScore > 0 && this.GetStat(Type, StatName) == this.GetMaxStat(Type, StatName)) return;

        console.log("Leveling Stat:"+StatName+"("+this.GetStat(Type, StatName)+")");

        var Cost = (TargetScore < 0) ? Leveling["COST"] : (Leveling["COST"] * -1.0);
        var Step = (TargetScore < 0) ? (Leveling["STEP"] * -1.0) : Leveling["STEP"];

        if (Type == "STAT") {
            if (StatName == "WillPower") {
                if (Step < 0) {
                    this.SleepLog.push(this.pBodyChange("WillPower", "Shrink"));
                } else {
                    this.SleepLog.push(this.pBodyChange("WillPower", "Grow"));
                }
            }

            if (StatName == "Hormones") {
                if (Step < 0 ) {
                    this.SleepLog.push(this.pBodyChange("Hormones", "Shrink"));
                } else {
                    this.SleepLog.push(this.pBodyChange("Hormones", "Grow"));
                }
            }
            this.AdjustStat(StatName, Step);
        }

        if (Type == "SKILL") this.AdjustSkill(StatName, Step);
        if (Type == "BODY") {
            this.AdjustBody(StatName, Step);
            if (Step < 0) {
                this.SleepLog.push(this.pBodyChange(StatName, "Shrink"));
            } else {
                this.SleepLog.push(this.pBodyChange(StatName, "Grow"));
            }
        }
        this.AdjustXP(Type, StatName, Cost);

    };

    this.LevelStatGroup = function (Type) {
        var Keys;
        if (Type == "STAT") Keys = Object.keys(this.CoreStats);
        if (Type == "SKILL") Keys = Object.keys(this.Skills);
        if (Type == "BODY") Keys = Object.keys(this.BodyStats);

        for (var i = 0; i < Keys.length; i++) this.LevelStat(Type, Keys[i]);
    };

    this.AdjustMoney = function (m) {
        this.Money = Math.max(0, (this.Money + m));
    };

    this.RandomAdjustBodyXP = function (Amount) {
        this.AdjustBodyXP(Object.keys(this.BodyStats)[Math.floor(Math.random() * Object.keys(this.BodyStats).length)], Amount, 0);
    };

    this.DoHealing = function (OvernightFlag) {
        var Heal = 5 + ( (this.GetStat("STAT", "Energy")*2) + (this.GetStat("STAT", "Fitness") / 10));
        Heal = Heal * (( 100 - Math.max(0, Math.min(this.GetStat("STAT", "Toxicity"), 100))) / 100); // Toxicity up to 100 reduces natural healing.

        if (OvernightFlag == 0) Heal = Heal / 2;
        if (OvernightFlag == 1) this.AdjustStat("Energy", ( Math.floor((this.GetStat("STAT", "Nutrition") / 20) + (this.GetStat("STAT", "Fitness") / 20))));

        this.AdjustStat("Health",   Math.ceil(Heal));

        if (OvernightFlag == 1) {
            var PoisonDamage = Math.ceil((this.GetStat("STAT", "Health") * ((Math.max(0, Math.min((this.GetStat("STAT", "Toxicity") - 100), 200)) / 10) * 0.1))); // 0 - .2
            if (PoisonDamage > 0) {
                this.AdjustStat("Health", (PoisonDamage * -0.5));
                this.SleepLog.push("@@color:red;&dArr;You feel slightly sick@@... your current " + window.App.PR.ColorizeString(this.GetStatPercent("STAT", "Toxicity"), "Toxicity") +
                    " is probably to blame.");
            }
        }
    };

    // Resting and Sleeping functions.
    this.NextDay = function () {
        this.SleepLog = []; // Null the overnight results text log.

        // Gain 'Knowledge' about worn clothes, log days worn.
        // Apply passive effects on worn items.
        for (var prop in this.Equipment) {
            if (!this.Equipment.hasOwnProperty(prop)) continue;
            if (this.Equipment[prop] == 0) continue;

            if (Math.floor(Math.random() * 100) > 80)
                this.AddHistory('CLOTHING_KNOWLEDGE', this.Equipment[prop].Name(), 1); // tracking effect knowledge
            this.AddHistory("DAYS_WORN", this.Equipment[prop].Name(), 1); // tracking just days worn
            this.Equipment[prop].ApplyEffects(this);
            var logMsg = this.Equipment[prop].LearnKnowledge(this);
            if ((typeof logMsg != 'undefined') && logMsg != "") this.SleepLog.push(logMsg);
        }

        // Basic Stat Mods
        this.AdjustStat("Nutrition", -5);
        this.AdjustStat("Toxicity", -( (5 + (this.CoreStats["Fitness"] / 10)))*2);
        this.DoHealing(1);

        // Basic XP Adding
        this.AdjustStatXP("Hormones", ((this.GetStat("BODY", "Balls") / 5) * -1.0)); // Bigger balls add more male hormones.
        this.AdjustBodyXP("Hair", 4, 0); // Hair grows about 0.05 CM per day.

        this.LevelStatGroup("STAT");

        //Adjust physical characteristics based on hormone balance. Only shift body if there is XP related to the hormone
        //shift stored in the player object.
        var HormoneShift = 0;

        if ((this.GetStat("STAT", "Hormones") > 100) && this.GetStatXP("STAT", "Hormones") > 0 ) {
            HormoneShift = ( this.GetStat("STAT", "Hormones") - 100 );
            this.AdjustBodyXP("Face",   HormoneShift            ,     40);
            this.AdjustBodyXP("Bust",   HormoneShift            ,      5);
            this.AdjustBodyXP("Lips",   HormoneShift            ,     40);
            this.AdjustBodyXP("Ass",    HormoneShift            ,     10);
            this.AdjustBodyXP("Hips",   HormoneShift            ,     10);
            this.AdjustBodyXP("Penis", (HormoneShift * -1.0)    ,      1);
            this.AdjustBodyXP("Balls", (HormoneShift * -1.0)    ,      0);
        } else {
            if (this.GetStatXP("STAT", "Hormones") < 0) {
                HormoneShift = ( 100 - this.GetStat("STAT", "Hormones"));
                this.AdjustBodyXP("Face", (HormoneShift * -1.0), this.GetStartStat("BODY", "Face"));
                this.AdjustBodyXP("Bust", (HormoneShift * -1.0), this.GetStartStat("BODY", "Bust"));
                this.AdjustBodyXP("Lips", (HormoneShift * -1.0), this.GetStartStat("BODY", "Lips"));
                this.AdjustBodyXP("Ass",  (HormoneShift * -1.0), this.GetStartStat("BODY", "Ass"));
                this.AdjustBodyXP("Hips", (HormoneShift * -1.0), this.GetStartStat("BODY", "Hips"));
                this.AdjustBodyXP("Penis", HormoneShift, this.GetStartStat("BODY", "Penis"));
                this.AdjustBodyXP("Balls", HormoneShift, this.GetStartStat("BODY", "Balls"));
            }
        }

        //Level remaining stats
        if ( this.GetStatXP("STAT", "Nutrition") > 150) this.AdjustBodyXP("Waist", (this.GetStatXP("STAT", "Nutrition")-150)); // Get Fatter!?
        this.LevelStatGroup("BODY");
        this.LevelStatGroup("SKILL");

        this.HairBonus = 0;
        this.MakeupBonus = 0;
        this.HairStyle = "bed head";
        this.MakeupStyle = "plain faced";

        this.Day++;
		// What day are we on our current voyage.
        this.SailDays = ((this.SailDays + 1) >= App.Data.Lists["ShipRoute"].length) ? 0 : (this.SailDays + 1);
        this.Phase = 0;

        // Going hungry, lose some belly fat.
        if (this.CoreStats["Nutrition"] < 50) {
            this.AdjustBodyXP("Waist", -25);
        }

        // Starving. Yikes.
        if (this.CoreStats["Nutrition"] < 20) {
            this.SleepLog.push("@@color:red;You are starving!@@");
            this.AdjustStat("Energy", -1); // Reduce Energy.
            this.AdjustStat("Health", -15);
            this.AdjustBodyXP("Waist", -50);
        }

        // Decrease voodoo effects
        this.EndHexDuration();
        this.NPCNextDay();

    }; // NextDay

    /**
     * Move time counter to next phase of day.
     * @param [Opt] - Number of phases to increment.
     */
    this.NextPhase = function (Opt) {
        Opt = Opt || 1;

        for (var i = 0; i < Opt; i++ ) {
            this.Phase++;
            this.AdjustStat("Nutrition", -5);
            this.LevelStat("STAT", "Nutrition");
            if (this.Phase == 4) break;
        }
    };

    this.Rest = function () {
        this.SleepLog = [];
        this.NextPhase(1);
        this.DoHealing(0);
        this.AdjustStat("Energy", 1);
        this.LevelStatGroup("SKILL");
    };

    this.NPCNextDay = function () {
        for (var prop in this.NPCS) { // NPC mood/desire/quest flags.
            if (!this.NPCS.hasOwnProperty(prop)) continue;
            if (this.NPCS[prop] == 0) continue;
            this.NPCS[prop].AdjustFeelings();
            this.NPCS[prop].ResetFlags();
        }
    };

    /**
     * @returns {*}
     */
    this.GetShipLocation = function () {
        var Routes = window.App.Data.Lists["ShipRoute"];
        if (Routes.length >= this.SailDays) this.SailDays = 0; // Shouldn't happen, but fix it if it does.
		
		var dict = { "X" : Routes[this.SailDays]["X"], "Y" : Routes[this.SailDays] };
		
		switch(Routes[this.SailDays]["P"]) {
			case 'IslaHarbor': dict["Passage"] = "IslaHarbor"; dict["Title"] = "Isla Harbor"; break;
			case 'GoldenIsle': dict["Passage"] = "GoldenIsle"; dict["Title"] = "Golden Isle"; break;
			case 'Abamond': dict["Passage"] = "Abamond"; dict["Title"] = "Abamond"; break;
			case 'PortRoyale': dict["Passage"] = "PortRoyale"; dict["Title"] = "Port Royale"; break;
			default: dict["Passage"] = ""; dict["Title"] = "";
		}
			
        return dict;
    };

    // Equipment and Inventory Related Functions

    /**
     *
     * @param ItemDict
     * @returns {boolean}
     */
    this.OwnsWardrobeItem = function(ItemDict)
    {
        if ((ItemDict["TYPE"] == "CLOTHES") || (ItemDict["TYPE"] == "WEAPON")) {
            if (this.Wardrobe.filter( function(o){return o.Name() == ItemDict["TAG"];}).length > 0 ) return true;
            var Slot = window.App.Data.Clothes[ItemDict["TAG"]]["Slot"];
            if ((this.Equipment[Slot] === undefined) || (this.Equipment[Slot] == 0)) return false;
            if (this.Equipment[Slot].Name() == ItemDict["TAG"]) return true;
        }
        return false;
    };

    /**
     * @param ItemDict
     * @returns {boolean}
     */
    this.MaxItemCapacity = function(ItemDict)
    {
        var o = this.GetItemByName(ItemDict["TAG"]);

        if (o != undefined) {
            if ( o.Charges() >= 100 ) return true;
        }
        return false;
    };

    this.WardrobeItem = function (id) {
        return this.Wardrobe.filter(function (o) {
            return o.Id() == id;
        })[0];
    };

    this.WardrobeItemsBySlot = function(Slot) {
        return this.Wardrobe.filter(function(Item) { return Item.Slot() == Slot;});
    };

    /**
     * @param {string} Slot
     * @returns {string}
     */
    this.PrintEquipment = function(Slot)
    {
        if (!this.Equipment.hasOwnProperty(Slot)) return "@@color:grey;Nothing@@";
        if (this.Equipment[Slot] == 0 ) return "@@color:grey;Nothing@@";
        return this.Equipment[Slot].Description();
    };

    /**
     * @param {string} Slot
     * @returns {*}
     */
    this.GetEquipmentInSlot = function(Slot) {
        if ( (!this.Equipment.hasOwnProperty(Slot)) || (this.Equipment[Slot] == 0 )) return 0;
        return this.Equipment[Slot];
    };

    /**
     * Search equipped items
     * @param {string} Name
     * @returns {boolean}
     */
    this.IsEquipped = function(Name) {
        for (var prop in this.Equipment) {
            if (!this.Equipment.hasOwnProperty(prop)) continue;
            if (this.Equipment[prop] == 0) continue;
            if (this.Equipment[prop].Name() == Name) return true;
        }
        return false;
    };

    this.Wear = function (item) {
        for (var i = 0; i < item.Restrict().length; i++) this.Remove(this.Equipment[item.Restrict()[i]]);
        this.Equipment[item.Slot()] = item;
        this.Wardrobe = this.Wardrobe.filter(function (o) {
            return o.Id() != item.Id();
        });
    };

    this.Strip = function() {
        for (var prop in this.Equipment) {
            if (!this.Equipment.hasOwnProperty(prop)) continue;
            if (this.Equipment[prop] == 0) continue;
            if (this.Equipment[prop].IsLocked() == 1) continue;

            this.Remove(this.Equipment[prop]);
        }
    };

    this.Remove = function (item) {
        if (item == 0) return;
        this.Equipment[item.Slot()] = 0;
        this.Wardrobe.push(item);
    };

    this.HasItemByType = function (Type) {
        return this.Inventory.filter(function (o) {
            return o.Type() == Type;
        });
    };
    this.GetItemByName = function (Name) {
        return this.Inventory.filter(function (o) {
            return o.Name() == Name;
        })[0];
    };
    this.GetItemById = function (Id) {
        return this.Inventory.filter(function (o) {
            return o.Id() == Id;
        })[0];
    };
    this.GetItemByTypes = function (Types) {
        return this.Inventory.filter(function (o) {
            return Types.indexOf(o.Type()) != -1;
        });
    };

    /**
     * Returns the total number of charges across all items belonging to a certain type.
     * @param {string} Type
     * @returns {number}
     */
    this.GetItemCharges = function(Type) {
        var Items = this.Inventory.filter(function (o) { return o.Type() == Type; });
        var Count = 0;
        for (var i = 0; i < Items.length; i++) Count += Items[i].Charges();
        return Count;
    };

    /**
     * Attempt to iterate through all items of same type and consume charges from them until Amount has been
     * satisfied. It will delete items if it consumes all their charges.
     * @param {string} Type
     * @param {number} Amount
     */
    this.UseItemCharges = function(Type, Amount) {
        if (Amount <= 0) return ;
        var Items = this.Inventory.filter(function (o) { return o.Type() == Type; });
        var Count = 0;

        while(Amount > 0 && Count < Items.length) {
            var Item = Items[Count];
            if (Item.Charges() <= 0) {
                this.DeleteItem(Item);
                Count++;
            } else {
                Item.RemoveCharge(1);
                Amount -= 1;
            }
        }
    };

    this.DeleteItem = function (item) {
        this.Inventory = this.Inventory.filter(function (o) {
            return o.Id() != item.Id();
        });
    };

    /**
     * Create and add an item to the player.
     * @param {string} Category
     * @param {string} Name
     * @param {number} Count
     * @param {string} [Opt]
     */
    this.AddItem = function (Category, Name, Count, Opt) {
        //Count = Count || 1;

        var Item = window.App.Item.Factory(Category, Name, Count);

        if (Category == "CLOTHES" || Category == "WEAPON" ) {
            this.Wardrobe.push(Item);
            if (Opt == "WEAR") this.Wear(Item);
            return;
        }

        var ItemArray = $.grep(this.Inventory, function(o) { return o.Name() == Item.Name(); });

        if (ItemArray.length != 0) {
            ItemArray[0].AddCharge(Item.Charges());
        } else {
            this.Inventory.push(Item);
        }
    };

    /**
     * @param {string} Skill
     * @returns {number}
     */
    this.GetWornSkillBonus = function (Skill) {
        var bonus = 0;
        for (var prop in this.Equipment) {
            if (!this.Equipment.hasOwnProperty(prop)) continue;
            if (this.Equipment[prop] == 0) continue;
            bonus += this.Equipment[prop].GetBonus(Skill);
            if (this.debugMode == true) console.log("Found skill bonus : "+Skill+" on" + this.Equipment[prop].Name());
        }
        return 0;
    };

    /**
     * Use an item. Apply effects. Delete from inventory if out of charges.
     * @param ItemId {string}
     */
    this.UseItem = function (ItemId) {
        var o = this.GetItemById(ItemId);
        this.AddHistory("ITEMS", o.Name(), 1);
        o.ApplyEffects(this);
        var msg = o.Message(this);
        o.RemoveCharge(1);
        if (o.Charges() <= 0) this.DeleteItem(o);
        return msg;
    };

    this.pBodyChange = function (BodyPart, Direction) {
        return window.App.Data.Lists["BodyChanges"][BodyPart][Direction];
    };

    /**
     * @param {string} Type
     * @param {string} Flag
     * @returns {*}
     */
    this.GetHistory = function(Type, Flag) {
        if ((typeof this.History[Type] === 'undefined')) return 0;
        if ((typeof this.History[Type][Flag] === 'undefined')) return 0;

        return this.History[Type][Flag];
    };

    this.AddHistory = function(Type, Flag, Amount) {
        if ((typeof this.History[Type] === 'undefined')) this.History[Type] = { };
        if ((typeof this.History[Type][Flag] === 'undefined')) this.History[Type][Flag] = 0;

        var t = this.GetHistory(Type, Flag);
        this.History[Type][Flag] = (t + Amount);
    };

    this.RemoveHistory = function(Type, Flag) {
        if ((typeof this.History[Type][Flag] !== 'undefined')) delete this.History[Type][Flag];
    };

// Voodoo
    /**
     * @param {string} Hex
     * @returns {boolean}
     */
    this.HasHex = function(Hex) {
        return this.VoodooEffects.hasOwnProperty(Hex) != false;
    };

    this.SetHex = function(Hex, Value) {
        this.VoodooEffects[Hex] = Value;
    };

    this.RemoveHex = function(Hex) {
        delete this.VoodooEffects[Hex];
    };

    this.EndHexDuration = function() {

        for(var prop in this.VoodooEffects) {

            if (!this.VoodooEffects.hasOwnProperty(prop)) continue;

            switch(prop) {

                case "PIRATES_PROWESS_DURATION":
                    this.VoodooEffects[prop]--;
                    if (this.VoodooEffects[prop] <= 0) {
                        delete this.VoodooEffects["PIRATES_PROWESS"];
                        delete this.VoodooEffects["PIRATES_PROWESS_DURATION"];
                        this.SleepLog.push("You feel the effects of your pirates skill leave you...")
                    }
            }
        }
    }
};

