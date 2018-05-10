window.App = window.App || { Data: { }, Entity: { } };

window.App.Item = new function() {

        this.Factory = function(Type, Name, Count) {

            var d = 0;
            var o;

            if (Type == "DRUGS") d = window.App.Data.Drugs[Name];
            if (Type == "FOOD") d = window.App.Data.Food[Name];
            if (Type == "COSMETICS") d = window.App.Data.Cosmetics[Name];
            if (Type == "CLOTHES") d = window.App.Data.Clothes[Name];
            if (Type == "STORE") d = window.App.Data.Stores[Name];
			if (Type == "NPC") d = window.App.Data.NPCS[Name];
            if (Type == "QUEST") d = window.App.Data.QuestItems[Name];
            if (Type == "LOOT_BOX") d = window.App.Data.LootBoxes[Name];

            if (d == 0 || (typeof d === 'undefined')) alert("Factory Failed: (" + Type + "," + Name + "," + Count + ")");


            if (Type == "CLOTHES") o = new this.Clothing(d);

			if (Type == "NPC") o = new window.App.Entity.NPC(d);

            if (Type == "STORE")
            {
                o = new this.Store(d);
                o.Init();
                return o;
            }

            if (Type == "QUEST") o = new this.QuestItem(d);

            if (Type == "DRUGS" || Type == "FOOD" || Type == "COSMETICS" || Type == "LOOT_BOX" ) o = new this.Consumable(d);
            if ((Count != 0) && (typeof d["Charges"] !== 'undefined')) o.Data["Charges"] = Count;

            return o;
        };

    /**
     *
     * @param ItemID {string}
     * @param Player {App.Entity.Player}
     * @returns {string}
     */
        this.DoLootBox = function( ItemID, Player) {
            var LootBox = Player.GetItemById(ItemID);
            console.log(LootBox);
            var Effect = LootBox.UseEffect()["LootBox"];
            var Type = Effect[0];
            var Minimum = Effect[1];
            var Bonus = Effect[2];
            var DiceRoll    = Math.floor(Math.random() * 100);
            var Table = window.App.Data.LootTables[Type];
            var output = "";

            console.log("DoLootBox: Type="+Type+", Minimum="+Minimum+", Bonus="+Bonus);
            DiceRoll = ( DiceRoll + Bonus) < Minimum ? Minimum : (DiceRoll + Bonus);

            for (var prop in Table) {
                if (!Table.hasOwnProperty(prop)) continue;

                if (DiceRoll <= prop) {
                    var Items = Table[prop]["LOOT"];
                    for (var i = 0; i < Items.length; i++)
                    {
                        var obj = this.Factory(Items[i]["TYPE"], Items[i]["TAG"], Items[i]["QTY"]);

                        if ( (Items[i]["TYPE"] == "CLOTHES") && (Player.OwnsWardrobeItem(Items[i]) == true)) {
                            // We own this already. Give some cash.
                            var coins = Math.floor((obj.Price() * 0.5))
                            Player.AdjustMoney( coins );
                            output += coins + " gold coins.\n";
                        } else {
                            output += obj.Description() + "\n";
                            Player.AddItem(Items[i]["TYPE"], Items[i]["TAG"], Items[i]["QTY"]);
                        }
                    }
                    break;
                }
            }

            return (output != "" ? output : "Nothing?!?!?");
        };

        this.Clothing = function(d) {
            this.o = $.extend( true, {}, d );
            var timestamp = new Date().getTime();
            this._id = this.o["Name"] + ":" + timestamp;

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

            this.Examine = function () {
                var Output = this.o["LongDesc"];
                Output += "\n\n";

                Output += "@@color:yellow;Style Categories  @@ ";
                Output += this.Category().join(", ");
                Output += "\n\n";
                Output += "@@color:yellow;Rank @@ " + this.Rank();

                return Output;
            };

            this.Category = function()
            {
              if (this.o.hasOwnProperty("Category") == false) return [ "Ordinary" ];
                return this.o["Category"];
            };

            this.CategoryBonus = function(Cat)
            {
                if ( $.inArray(Cat, this.Category()) != -1 ) return this.Style();
                return 0;
            };

            this.Slot = function () {
                return this.o["Slot"];
            };
            this.Restrict = function () {
                return this.o["Restrict"];
            };
            this.WearEffect = function () {
                return this.o["WearEffect"] ? this.o["WearEffect"] : {};
            };
            this.SkillBonus = function () {
                return this.o["SkillBonus"];
            };
            this.Price = function () {
                return this.o["Price"];
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
            this.Style = function () {
                var bonus = {
                    "ACCESSORY" : { "COMMON" : 3, "UNCOMMON" : 6, "RARE" : 9, "LEGENDARY" : 12 },
                    "CLOTHING"  : { "COMMON" : 5, "UNCOMMON" : 10, "RARE" : 15, "LEGENDARY" : 20 },
                    "ONE PIECE" : { "COMMON" : 10, "UNCOMMON" : 20, "RARE" : 30, "LEGENDARY" : 40 }
                };

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

            /** @returns {boolean} */
            this.HasBonus = function (b) {
                if (this.o.hasOwnProperty("SkillBonus") == false) return false;
                return this.o["SkillBonus"].hasOwnProperty(b);
            };

            this.GetBonus = function (b) {
                if (this.o.hasOwnProperty("SkillBonus") == false) return [0, 0, 0];
                if (this.o["SkillBonus"].hasOwnProperty(b) == false) return [0, 0, 0];
                return this.o["SkillBonus"][b];
            };
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
                var Effects = Object.keys(this.Data["UseEffect"] || {});

                if (Usages == 0) return Output;

                Output += "\n\n";
                var max = Math.min(Usages, Effects.length);
                var EDict = [ ];

                for(var i = 0; i < max; i++) {
                    EDict = this.Data["UseEffect"][Effects[i]];
                    if (EDict[0] > 0 || EDict[1] > 0 || Effects[i] == "LootBox") {
                        Output += "@@color:lime;&uArr;"+Effects[i]+"@@ ";
                    } else {
                        Output +=  "@@color:red;&dArr;"+Effects[i]+"@@ ";
                    }
                }
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
                return this.Data["UseEffect"];
            };
            /** This message is printed when a player uses an item
             * @returns {string} */
            this.Message = function (Player) {
                var Output = this.Data["Message"];
                var Usages = Player.GetHistory("ITEMS", this.Name());
                var Effects = Object.keys(this.Data["UseEffect"]);
                console.log("Item usages:" + Usages);
                if (Usages >= Effects.length ) return Output;

                var EffectLearn = "";
                var EDict = this.Data["UseEffect"][Effects[Usages]];
                if (EDict[0] > 0 || EDict[1] > 0 || Effects[Usages] == "LootBox" ) {
                    EffectLearn = "@@color:lime;&uArr;"+Effects[Usages]+"@@";
                } else {
                    EffectLearn = "@@color:red;&dArr;"+Effects[Usages]+"@@";
                }

                if (Effects[Usages] != "LootBox")
                Output = Output + "\n\nYou learn something... This item has an effect: " +EffectLearn;
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
        this.Charges = function() { return 1; }

    }
};



