App = App || { Data: { }, Entity: { } };

App.Item = new function() {

    /**
     * Return the appropriate data dictionary entry for the item in question.
     * @param Type
     * @param Name
     * @returns {*}
     * @private
     */
    this._FetchData = function(Type, Name){
        if (Type == "DRUGS") return window.App.Data.Drugs[Name];
        if (Type == "FOOD") return window.App.Data.Food[Name];
        if (Type == "COSMETICS") return window.App.Data.Cosmetics[Name];
        if (Type == "CLOTHES") return window.App.Data.Clothes[Name];
        if (Type == "WEAPON") return window.App.Data.Clothes[Name];
        if (Type == "STORE") return window.App.Data.Stores[Name];
        if (Type == "NPC") return window.App.Data.NPCS[Name];
        if (Type == "QUEST") return window.App.Data.QuestItems[Name];
        if (Type == "LOOT_BOX") return window.App.Data.LootBoxes[Name];
        if (Type == "REEL") return window.App.Data.Slots[Name];
    };

    /**
     * Automatically calculate the price of an item based on it's attributes.
     * @param {string} Category the dictionary name
     * @param {string} Tag the key of the item
     * @returns {number} the price in gold coins.
     */
    this.CalculateBasePrice = function(Category, Tag) {
        var d = this._FetchData(Category, Tag);
        if (d == 0 || (typeof d === 'undefined')) {
            console.log("Error calculating price for item "+Category+":"+Tag+" - dictionary entry not found");
            return 100;
        }

        var price = 0;

        switch(Category) {

            case 'REEL':
                price = (typeof d["VALUE"] !== 'undefined') ? d["VALUE"] : 500;
                break;
            case 'DRUGS':
            case 'FOOD':
                // Drugs and food have a price which is the sum of their effect values
                if (typeof d["Effects"] !== 'undefined') {
                    if ( d["Effects"].length > 1 ) {
                        price = d["Effects"].reduce(function (accumulator, effect) {
                            return (isNaN(accumulator)) ? App.Data.EffectLib[accumulator]["VALUE"] + App.Data.EffectLib[effect]["VALUE"] :
                            accumulator + App.Data.EffectLib[effect]["VALUE"];
                        });
                    } else {
                        price = App.Data.EffectLib[d["Effects"][0]]["VALUE"];
                    }
                }
                break;
            case 'COSMETICS':
                price = (typeof d["VALUE"] !== 'undefined') ? d["VALUE"] : 25;
                break;
            case 'CLOTHES':
            case 'WEAPON':
                // Base price set on style.
                if (typeof d["Style"] !== 'undefined') {

                    switch(d["Style"]) {
                        case 'COMMON': price = 50; break;
                        case 'UNCOMMON': price = 100; break;
                        case 'RARE': price = 250; break;
                        case 'LEGENDARY': price = 600; break;
                        default: price = 50; break;
                    }

                } else {
                    price = 50;
                }

                //modify based on type
                if (typeof d["Type"] !== 'undefined') {

                    switch(d["Type"]) {
                        case 'ACCESSORY': price = price * 1.4; break;
                        case 'CLOTHING' : price = price * 1.1; break;
                        case 'ONE PIECE': price = price * 2.5; break;
                        case 'WEAPON': price = price * 3; break;
                    }
                }

                // Wigs have a special stat on them.
                if (typeof d["HairBonus"] !== 'undefined') price = price + (d["HairBonus"] * 2);

                // Check for Categories. Extra categories other than 1 increase price by 10% per category
                if (typeof d["Category"] !== 'undefined')
                    price = (d["Category"].length > 1) ? price + ((price * 0.1) * (d["Category"].length - 1)) : price;

                // Round up
                price = Math.ceil(price);

                break;

        }

        return (price == 0 ) ? 100 : price;
    };
    
    this.Factory = function(Type, Name, Count) {

        var d = this._FetchData(Type, Name);
        var o;

        if (d == 0 || (typeof d === 'undefined'))  { 
			alert("Factory Failed: (" + Type + "," + Name + "," + Count + ")");
			return
		}

        // might change this in the future, for now weapons are "clothing"
        if (Type == "CLOTHES") o = new this.Clothing(d);
        if (Type == "WEAPON") o = new this.Clothing(d);

        if (Type == "NPC") o = new window.App.Entity.NPC(d);

        if (Type == "STORE")
        {
            o = new this.Store(d);
            o.Init();
            return o;
        }

        if (Type == "REEL") {
            o = new this.Reel(d);
            return o;
        }

        if (Type == "QUEST") o = new this.QuestItem(d);

        if (Type == "DRUGS" || Type == "FOOD" || Type == "COSMETICS" || Type == "LOOT_BOX" ) o = new this.Consumable(d);
        if ((Count != 0) && (typeof d["Charges"] !== 'undefined')) o.Data["Charges"] = Count;

        return o;
    };

    /**
     * Open a loot box!
     * @param {App.Entity.Player} Player
     * @param {string} Type
     * @param {number} Minimum
     * @param {number} Bonus
     * @returns {string}
     * @constructor
     */
    this.DoLootBox = function( Player, Type, Minimum, Bonus) {

        var DiceRoll    = Math.floor(Math.random() * 100);
        var Table       = App.Data.LootTables[Type];
        var output      = "";

        if (Player.debugMode == true)
        console.log("DoLootBox: Type="+Type+", Minimum="+Minimum+", Bonus="+Bonus);

        DiceRoll = ( DiceRoll + Bonus) < Minimum ? Minimum : (DiceRoll + Bonus);

        if (Player.HasHex("TREASURE_FINDER")) {
            DiceRoll += Player.VoodooEffects["TREASURE_FINDER"];
            Player.RemoveHex("TREASURE_FINDER");
        }

        for (var prop in Table) {
            if (!Table.hasOwnProperty(prop)) continue;

            if (DiceRoll <= prop) {
                var Items = Table[prop]["LOOT"];
                for (var i = 0; i < Items.length; i++)
                {
                    if (Items[i]["TYPE"] == "MONEY") {
                        Player.AdjustMoney( Items[i]["QTY"]);
                        output += "@@color:yellow;"+coins + " gold coins.@@\n";
                        continue;
                    }
                    var obj;
                    for (var x = 0; x < Items[i]["QTY"]; x++) {
                        obj = this.Factory(Items[i]["TYPE"], Items[i]["TAG"]);

                        if ( (Items[i]["TYPE"] == "CLOTHES") && (Player.OwnsWardrobeItem(Items[i]) == true)) {
                            // We own this already. Give some cash.
                            var coins = Math.floor((this.CalculateBasePrice(Items[i]["TYPE"], Items[i]["TAG"]) * 0.5));
                            Player.AdjustMoney( coins );
                            output += "@@color:yellow;"+coins + " gold coins.@@\n";
                        } else {
                            Player.AddItem(Items[i]["TYPE"], Items[i]["TAG"], 0);
                            if (x == 0) {
                                output += obj.Description();
                                output += Items[i]["QTY"] > 1 ? "@@color:gold; x " + Items[i]["QTY"] + "@@\n" : "\n";
                            }
                        }
                    }
                }
                break;
            }
        }

        return (output != "" ? output : "Nothing?!?!?");
    };

    this.Shop = function(ShopName)
    {

    };

    this.Clothing = function(d) {
        this.o = $.extend( true, {}, d );
        var timestamp = new Date().getTime();
        this._id = this.o["Name"] + ":" + timestamp;
        this._Knowlege = [ ];

        this.Id = function () {
            return this._id;
        };
        this.Name = function () {
            return this.o["Name"];
        };
        this.Description = function () {
            var _d = this.o["ShortDesc"].replace("{COLOR}", this.o["Color"]);
            if (this.o["Locked"] && this.o["Locked"] == 1) _d += " @@color:red;(Locked)@@";
            return _d;
        };

        this.Examine = function (Player) {
            var Output = this.o["LongDesc"];
            var Usages = Player.GetHistory("CLOTHING_EFFECTS_KNOWN", this.Name());
            Output += "\n";

            Output += "@@color:yellow;Style Categories  @@ ";
            Output += this.Category().join(", ");
            Output += "\n";
            Output += "@@color:yellow;Rank @@ " + this.Rank() + "\n";
            var max = Math.min(Usages, this.GetKnowledge().length);

            for(var i = 0; i < max; i++)
                Output += App.PR.pEffectMeter(this.GetKnowledge()[i], this) + "&nbsp;&nbsp;";
            return Output;
        };
        /**
         * Apply all effects of this clothing item, usually overnight.
         * @param {App.Entity.Player} Player
         */
        this.ApplyEffects = function(Player) {
            var tmp;

            for (var i = 0; i < this.WearEffect().length;i++) {
                if (Player.debugMode == true) console.log("Applying effect: "+this.WearEffect()[i]);
                App.Data.EffectLib[this.WearEffect()[i]]["FUN"](this, Player);
            }
        };

        /**
         * Learn Knowledge sleeping...
         * @param {App.Entity.Player} Player
         * @returns {string}
         */
        this.LearnKnowledge = function(Player)
        {
            var flag = ( Player.GetHistory("CLOTHING_KNOWLEDGE", this.Name()) > 0);
            var know = Player.GetHistory("CLOTHING_EFFECTS_KNOWN", this.Name());
            if (flag && know < this.GetKnowledge().length){
                var output = "@@color:yellow;You learn something... your " + this.Name() +" has an effect!@@ " + App.PR.pEffectMeter(this.GetKnowledge()[know], this);
                Player.AddHistory("CLOTHING_EFFECTS_KNOWN", this.Name(), 1);
                Player.RemoveHistory("CLOTHING_KNOWLEDGE", this.Name());
                return output;
            }
        };

        this.Category = function()
        {
          if (this.o.hasOwnProperty("Category") == false) return [ "Ordinary" ];
            return this.o["Category"];
        };

        /**
         * Return the style of the item if it fits within the category supplied.
         * @param {string} Cat
         * @returns {number}
         */
        this.CategoryBonus = function(Cat)
        {
            return ( $.inArray(Cat, this.Category()) != -1 ) ? this.Style() : 0;
        };

        this.Slot = function () {
            return this.o["Slot"];
        };
        this.Restrict = function () {
            return this.o["Restrict"];
        };
        this.WearEffect = function () {
            return (typeof this.o["WearEffect"] !== 'undefined') ? this.o["WearEffect"] : [ ];
        };
        this.ActiveEffect = function () {
            return (typeof this.o["ActiveEffect"] !== 'undefined') ? this.o["ActiveEffect"] : [ ];
        };

        this.Color = function () {
            return this.o["Color"];
        };

        this.Type = function() {
            return this.o["Type"];
        };

// STYLE TABLE
// TYPE         COMMON  UNCOMMON    RARE    LEGENDARY
// ACCESSORY    3       6           9       12
// CLOTHING     5       10          15      20
// ONE PIECE    10      20          30      40
        /** @returns {number} */
        this.Style = function () {
            var bonus = {
                "ACCESSORY" : { "COMMON" : 3, "UNCOMMON" : 6, "RARE" : 9, "LEGENDARY" : 12 },
                "WEAPON"    : { "COMMON" : 3, "UNCOMMON" : 6, "RARE" : 9, "LEGENDARY" : 12 },
                "CLOTHING"  : { "COMMON" : 5, "UNCOMMON" : 10, "RARE" : 15, "LEGENDARY" : 20 },
                "ONE PIECE" : { "COMMON" : 10, "UNCOMMON" : 20, "RARE" : 30, "LEGENDARY" : 40 }
            };

            if (this.Type() == "WEAPON") return 0;
            return bonus[this.Type()][this.o["Style"]];
        };
        /**
         * Show stars relating to rank on clothing.
         * @returns {string}
         */
        this.Rank = function() {
            if (this.o["Style"] == "COMMON") return "@@color:gold;&#9733;@@";
            if (this.o["Style"] == "UNCOMMON") return "@@color:gold;&#9733;&#9733;@@";
            if (this.o["Style"] == "RARE") return "@@color:gold;&#9733;&#9733;&#9733;@@";
            if (this.o["Style"] == "LEGENDARY") return "@@color:gold;&#9733;&#9733;&#9733;&#9733;@@";
            return "@@color:gold;&#9733;@@";
        };

        /** @returns {string} */
        this.HairColor = function () {
            return this.o["Color"] ? this.o["Color"] : "black";
        };

        /** @returns {number} */
        this.HairLength = function () {
            return this.o["HairLength"] ? this.o["HairLength"] : 0;
        };

        /** @returns {string} */
        this.HairStyle = function () {
            return this.o["HairStyle"] ? this.o["HairStyle"] : "";
        };

        /** @returns {number} */
        this.HairBonus = function () {
            return this.o["HairBonus"] ? this.o["HairBonus"] : 0;
        };

        /** @returns {number} */
        this.IsLocked = function () {
            return this.o["Locked"] ? this.o["Locked"] : 0;
        };
        /**
         * Query the effects (if present) on this piece of clothing and return the bonus
         * @param {string} skillName
         * @returns {number}
         */
        this.GetBonus = function (skillName) {
            var bonus = 0;
            for (var i = 0; i < this.ActiveEffect().length;i++) bonus += App.Data.EffectLib[this.ActiveEffect()[i]]["FUN"](this,skillName);
            return bonus;
        };

        /** @returns {boolean} */
        this.InMarket = function() {
            return this.o["InMarket"] ? this.o["InMarket"] : true; // Default to yes.
        };

        // Init knowledge variable

        for(var i = 0; i < this.WearEffect().length; i++)
            this._Knowlege = this._Knowlege.concat(App.Data.EffectLib[this.WearEffect()[i]]["KNOWLEDGE"]);
        for(i = 0; i < this.ActiveEffect().length; i++)
            this._Knowlege = this._Knowlege.concat(App.Data.EffectLib[this.ActiveEffect()[i]]["KNOWLEDGE"]);


        this.GetKnowledge = function() { return this._Knowlege.sort(); };
    };

    /**
     * A consumable object.
     * @param d {*}
     * @constructor
     */
    this.Consumable = function(d) {
        this.Data = $.extend( true, {}, d );

        var timestamp = new Date().getTime();
        this._id = this.Data["Name"] + ":" + timestamp;

        this._messageBuffer = [ ];

        this._Knowlege = [ ];

        this.Id = function () {
            return this._id;
        };
        this.Name = function () {
            return this.Data["Name"];
        };
        this.Description = function () {
            return this.Data["ShortDesc"];
        };
        this.Examine = function (Player) {
            var Output = this.Data["LongDesc"];
            var Usages = Player.GetHistory("ITEMS", this.Name());

            if (Usages == 0) return Output;

            Output += "\n\n";
            var max = Math.min(Usages, this.GetKnowledge().length);

            for(var i = 0; i < max; i++)
                Output += App.PR.pEffectMeter(this.GetKnowledge()[i], this) + "&nbsp;&nbsp;";

            return Output;
        };

        this.Type = function () {
            return this.Data["Type"];
        };
        this.Charges = function () {
            return this.Data["Charges"];
        };

        /** @returns {*}*/
        this.UseEffect = function () {
            return (typeof this.Data["Effects"] !== 'undefined') ? this.Data["Effects"] : [ ];
        };

        /**
         * Apply all effects of this consumable item.
         * @param {App.Entity.Player} Player
         */
        this.ApplyEffects = function(Player) {

            if (this.Data.hasOwnProperty("Effects") == false) return;
            var tmp;
            for (var i = 0; i < this.Data["Effects"].length;i++) {
                if (Player.debugMode == true) console.log("Applying effect: "+this.Data["Effects"][i]);
                tmp = App.Data.EffectLib[this.Data["Effects"][i]]["FUN"](this, Player);
                if ((typeof tmp !== 'undefined') && (tmp != "")) this._messageBuffer.push(tmp);
            }

            // Knowledge.
            var Usages = Player.GetHistory("ITEMS", this.Name());

            if (Usages <= this.GetKnowledge().length)
                this._messageBuffer.push("\n\n@@color:yellow;You learn something... this item has an effect!@@ " + App.PR.pEffectMeter(this.GetKnowledge()[(Usages-1)], this));

        };

        /** This message is printed when a player uses an item
         * @returns {string} */
        this.Message = function (Player) {
            var Output = this.Data["Message"];
            if (this._messageBuffer.length > 0) Output += this._messageBuffer.join("\n");
            this._messageBuffer = [ ];
            return Output;
        };

        this.Price = function () {
            return this.Data["Price"];
        };

        this.RemoveCharge = function (n) {
            this.Data["Charges"] = Math.max(0, Math.min((this.Charges() - n), 100));
        };

        this.AddCharge = function (n) {
            this.Data["Charges"] = Math.max(0, Math.min((this.Data["Charges"] + n), 100));
        };

        /** @returns {boolean}*/
        this.IsFull = function () {
            return this.Data["Charges"] == 100;
        };

        /**
         * Determine if an item has a bonus of a specific type.
         * @param b {string}
         * @returns {boolean}
         */
        this.HasBonus = function (b) {
            if (this.Data.hasOwnProperty("SkillBonus") == false) return false;
            return this.Data["SkillBonus"].hasOwnProperty(b);
        };

        this.GetBonus = function (b) {
            if (this.Data.hasOwnProperty("SkillBonus") == false) return [0, 0, 0];
            if (this.Data["SkillBonus"].hasOwnProperty(b) == false) return [0, 0, 0];
            return this.Data["SkillBonus"][b];
        };

        // Init knowledge variable

        for(var i = 0; i < this.UseEffect().length; i++){
            this._Knowlege = this._Knowlege.concat(App.Data.EffectLib[this.UseEffect()[i]]["KNOWLEDGE"]);
        }

        this.GetKnowledge = function() { return this._Knowlege.sort(); };
    };

    this.QuestItem = function(d) {
        this.Data = $.extend( true, {}, d );

        var timestamp = new Date().getTime();
        this._id = this.Data["Name"] + ":" + timestamp;

        this.Id = function () {
            return this._id;
        };
        this.Name = function () {
            return this.Data["Name"];
        };
        this.Description = function () {
            return this.Data["ShortDesc"];
        };
        this.Examine = function (Player) {
            return this.Data["LongDesc"];
        };
        this.Type = function () {
            return this.Data["Type"];
        };
        /** @returns {number} */
        this.AddCharge = function(n) { return 1; };
        /** @returns {number} */
        this.Charges = function() { return 1; }

    };

    this.Reel = function(d) {
        this.Data = $.extend(true, { }, d);

        var timestamp = new Date().getTime();
        this._id = this.Data["NAME"] + ":" + timestamp;

        this.Id = function () {
            return this._id;
        };
        this.Name = function () {
            return this.Data["NAME"];
        };

        this.Description = function () {
            return this.Data["NAME"];
        };

        this.Examine = function (Player) {
            return this.Data["DESC"];
        };

        this.Reels = function() {
            return this.Data["DATA"];
        }
    }
};



