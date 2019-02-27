/**
 * @Class Item
 */
App.Item = class Item {
    /**
     * Return the appropriate data dictionary for the item in question. If item type is invalid, returns null.
     * @param Type
     * @returns {*}
     * @private
     * @static
     */
    static _TryGetItemsDictionary(Type) {
        if (Type == "DRUGS") return App.Data.Drugs;
        if (Type == "FOOD") return App.Data.Food;
        if (Type == "COSMETICS") return App.Data.Cosmetics;
        if (Type == "MISC_CONSUMABLE") return App.Data.Misc;
        if (Type == "CLOTHES") return App.Data.Clothes;
        if (Type == "WEAPON") return App.Data.Clothes;
        if (Type == "STORE") return App.Data.Stores;
        if (Type == "NPC") return App.Data.NPCS;
        if (Type == "QUEST") return App.Data.QuestItems;
        if (Type == "LOOT_BOX") return App.Data.LootBoxes;
        if (Type == 'REEL') return App.Data.Slots;
		return null;
    }

    /**
     * Return the appropriate data dictionary item for the item in question. If item type is invalid or
     * item is not found, shows error message and throws exception
     * @param Type
     * @param Name
     * @returns {*}
     * @private
     * @static
     */
    static _FetchData(Type, Name) {
		var itemsDictionary = this._TryGetItemsDictionary(Type);
        var errorMessage;
		if (itemsDictionary == null) {
            errorMessage = "Invalid item type: " + Type;
			alert(errorMessage);
			throw new Error(errorMessage);
		}

		var itemData = itemsDictionary[Name];
		if (itemData == null || itemData == 0) {
            errorMessage = "Item with name \"" + Name + "\" of type \"" + Type + "\" not found";
			alert(errorMessage);
			throw new Error(errorMessage);
		}

		return itemData;
    }


    /**
     * Automatically calculate the price of an item based on it's attributes.
     * @param {string} Category the dictionary name
     * @param {string} Tag the key of the item
     * @returns {number} the price in gold coins.
     */
    static CalculateBasePrice(Category, Tag) {
		try {
	        var d = this._FetchData(Category, Tag);
		} catch (e) {
			// Whatever, I guess?
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
                price += typeof d["Effects"] !== 'undefined' ? App.Item.CalculateEffectPrice( d["Effects"]) : 0;
                break;
            case 'COSMETICS':
            case 'MISC_CONSUMABLE':
                price = (typeof d["VALUE"] !== 'undefined') ? d["VALUE"] : 25;
                break;
            case 'CLOTHES':
            case 'WEAPON':
                // Base price set on style rank.
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

                // Add values from worn effects
                price += typeof d["WearEffect"] !== 'undefined' ? App.Item.CalculateEffectPrice( d["WearEffect"]) : 0;

                // Add values from active effects
                price += typeof d["ActiveEffect"] !== 'undefined' ? App.Item.CalculateEffectPrice( d["ActiveEffect"]) : 0;

                // Round up
                price = Math.ceil(price);

                break;

        }

		if (typeof (d.PriceAdjustment) === "number" || d.PriceAdjustment instanceof Number) {
			price *= d.PriceAdjustment;
		}

        return (price == 0 ) ? 100 : price;
    }

    static CalculateEffectPrice(Effects) {
        if (Effects.length == 0) return 0;
        var price = 0;
        if ( Effects.length > 1 ) {
            price += Effects.reduce(function (accumulator, effect) {
                return (isNaN(accumulator)) ? App.Data.EffectLib[accumulator]["VALUE"] + App.Data.EffectLib[effect]["VALUE"] :
                accumulator + App.Data.EffectLib[effect]["VALUE"];
            });
        } else {
            price += App.Data.EffectLib[Effects[0]]["VALUE"];
        }

        return price;
    }
    /**
     * Search and find clothing items by a variety of categories.
     * @param {string} Category
     * @param {string} Rank
     * @param {string} Slot
     * @returns {Array}
     * @static
     */
    static ListAllClothes(Category, Rank, Slot ) {
        var Clothes = [ ];

        for (var k in App.Data.Clothes) {
            if (!App.Data.Clothes.hasOwnProperty(k)) continue;
            var cat = App.Data.Clothes[k]['Category'];
            if (typeof cat !== 'undefined' && cat.length >= 1) {
                var item = { tag: k, rank: App.Data.Clothes[k]['Style'], slot: App.Data.Clothes[k]['Slot'], cat: cat};
                if (Category != null && $.inArray(Category, cat) != -1) {
                    Clothes.push(item);
                } else if(Category == null) {
                    Clothes.push(item);
                }
            }
        }

        if (Rank != null) Clothes = Clothes.filter( function(ob) { return ob.rank == Rank;});
        if (Slot != null) Clothes = Clothes.filter( function(ob) { return ob.slot == Slot;});

        return Clothes;

    }
    /** Just a debug function
     * @param {string} Category
     * @param {number} Filter;
     * @returns {Array.<*>}
     * @static
     */
    static ListAllPrices(Category, Filter) {
        Filter = Filter || false;
        var out = [ ];
        var d;
        switch(Category) {
            case 'DRUGS': d = App.Data.Drugs; break;
            case 'FOOD' : d = App.Data.Food; break;
            case 'COSMETICS': d = App.Data.Cosmetics; break;
            case 'MISC_CONSUMABLE': d = App.Data.Misc; break;
            case 'WEAPON':
            case 'CLOTHES': d = App.Data.Clothes; break;
            case 'REEL': d = App.Data.Slots; break;
            default: throw "App.Item.ListAllPrices: Unhandled category: "+Category;
        }

        for( var k in d ) {
            if (d.hasOwnProperty(k) == false) continue;
            var res = { };
            var item = d[k];
            res.cat = Category;
            res.tag = k;
            res.name = item['Name'];
            res.desc = item['ShortDesc'];
            res.price = this.CalculateBasePrice(Category, res.tag);
            res.style = item.hasOwnProperty('Style') ? item['Style'] : null;
            res.category = item.hasOwnProperty('Category') ? item['Category'] : null;
            res.useEffects = item.hasOwnProperty('Effects') ? item["Effects"] : [ ];
            res.wearEffects = item.hasOwnProperty('WearEffect') ? item['WearEffect'] : [ ];
            res.activeEffects = item.hasOwnProperty('ActiveEffect') ? item['ActiveEffect'] : [ ];
            res.meta = item.hasOwnProperty('Meta') ? item['Meta'] : null;
            out.push(res);
        }

        out.sort(function(a, b) { return a.price - b.price;});
        return (Filter) ? out.filter(function(a) { return a.price < Filter; }) : out;
    }

    /**
     * Fetch a random item based on price / category.
     * @param {string|Array.<string>} Category
     * @param {*} filterOb
     * @returns {null|*}
     * @static
     */
    static PickItem(Category, filterOb) {
        var items = [ ];
        console.log(filterOb);
        if (Category.constructor === Array) {
            while (Category.length > 0) {
                var tmpCategory = App.PR.GetRandomListItem(Category);
                Category.splice(Category.indexOf(tmpCategory), 1); // Pop the item off.
                items = items.concat(this.ListAllPrices(tmpCategory, filterOb.price));
            }
        } else {
            items = this.ListAllPrices(Category, filterOb.price);
        }

        // Ignore items that we don't want showing up randomly.
        if(items.length > 0) items = items.filter(function(o) { return o.hasOwnProperty('InMarket')? o.InMarket : true; });
        // Filter on clothing category
        if (items.length > 0 && (filterOb.hasOwnProperty("category")))
            items = items.filter(function(o) { return o.category != null && o.category.contains(filterOb.category);});
        // Filter on meta data
        if (items.length > 0 && (filterOb.hasOwnProperty("meta_key")))
            items = items.filter(function(o) { return o.meta != null && o.meta.contains(filterOb.meta_key);});
        console.log(items);
        return items.length > 0 ? App.PR.GetRandomListItem(items) : null;
    }

    /**
     *
     * @param {string} Type
     * @param {string} Tag
     * @param {App.Entity.InventoryManager|App.Entity.ClothingManager=} Inventory
     * @param {number=} [Count]
     * @returns {App.Item|App.Items.Consumable|App.Items.QuestItem|App.Items.Clothing|App.Items.Reel|App.Items.Shop|App.Entity.NPC}
     */
    static Factory(Type, Tag, Inventory, Count) {

        var d = this._FetchData(Type, Tag);
        var o;

        // might change this in the future, for now weapons are "clothing"
        if (Type == "CLOTHES") o = new App.Items.Clothing(Tag, d, Inventory);
        if (Type == "WEAPON") o = new App.Items.Clothing(Tag, d, Inventory);

        if (Type == "NPC") o = new App.Entity.NPC(d);

        if (Type == "STORE")
        {
            o = new App.Items.Store(d, Inventory);
            o.Init();
            return o;
        }

        if (Type == "REEL") {
            o = new App.Items.Reel(Tag, d, Inventory);
            return o;
        }

        if (Type == "QUEST") o = new App.Items.QuestItem(Tag, d, Inventory);

        if (Type == "DRUGS" || Type == "FOOD" || Type == "COSMETICS" || Type == "LOOT_BOX" || Type == 'MISC_CONSUMABLE') {
             o = new App.Items.Consumable(Type, Tag, d, Inventory);
        }

        // HACK: when an item is created in an "disconnected" state, without an inventory manager,
        // this probably mean we want to get a description from the item. Thus we discard charges
        // from the data record in that case.
        if (Inventory !== undefined && Count == undefined) Count = Item.GetCharges(undefined, undefined, d);
        if (Count > 1) o.AddCharges(Count - 1);

        return o;
    }

    /**
     * Open a loot box!
     * @param {App.Entity.Player} Player
     * @param {string} Type
     * @param {number} Minimum
     * @param {number} Bonus
     * @returns {string}
     */
    static DoLootBox(Player, Type, Minimum, Bonus) {

        var DiceRoll    = Math.floor(Math.random() * 100);
        var Table       = App.Data.LootTables[Type];
        var output      = "";

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
                    for (var x = 0; x < Items[i]["QTY"]; x++) {
                        if ( (Items[i]["TYPE"] == "CLOTHES") && (Player.OwnsWardrobeItem(Items[i]) == true)) {
                            // We own this already. Give some cash.
                            var coins = Math.floor((this.CalculateBasePrice(Items[i]["TYPE"], Items[i]["TAG"]) * 0.25));
                            Player.AdjustMoney( coins );
                            output += "@@color:yellow;"+coins + " gold coins.@@\n";
                        } else {
                            var obj = Player.AddItem(Items[i]["TYPE"], Items[i]["TAG"], 0);
                            if (x == 0) {
                                output += obj.Description;
                                output += Items[i]["QTY"] > 1 ? "@@color:gold; x " + Items[i]["QTY"] + "@@\n" : "\n";
                            }
                        }
                    }
                }
                break;
            }
        }

        return (output != "" ? output : "Nothing?!?!?");
    }

    /**
     * @param {string} Category
     * @param {string} Tag
     * Generate an item id
     * @returns {string}
     */
    static MakeId (Category, Tag) {
        return Category + '/' + Tag;
    }

    /**
     * @param {string} Id
     * @returns {{Category: string, Tag:string}}
     */
    static SplitId(Id) {
        var _t = Id.split('/');
        return {Category: _t[0], Tag: _t[1]};
    }

    /**
     *
     * @param {string} ItemClass
     * @param {string} Tag
     * * @param {object} d
     * @param {App.Entity.InventoryManager|App.Entity.ClothingManager} Inventory
     * @constructor
     */
    constructor(ItemClass, Tag, d, Inventory) {
        /** @type {string}
         * @private */
        this._itemClass = ItemClass;
        /** @type {string}
         * @private */
        this._tag = Tag;
        /** @type {App.Entity.InventoryManager|App.Entity.ClothingManager}
         * @private */
        this._inventory = Inventory;

        /** @type {object}
         * @private
        */
        this._o = $.extend( true, {}, d );
    }

    /**
     * @returns {string}
     */
    get Id() {
        return Item.MakeId(this._itemClass, this._tag);
    }

    /**
     * @returns {string}
     */
    get Tag() {
        return this._tag;
    }
    /**
     * @returns {string}
     */
    get ItemClass() {
        return this._itemClass;
    }

    /**
     * @returns {App.Entity.InventoryManager|App.Entity.ClothingManager}
     */
    get Inventory() {
        return this._inventory;
    }

    /**
     * @returns {object}
     */
    get Data() {
        return this._o;
    }

    /**
     * Name of item.
     * @returns {string}
     */
    get Name() {
        return this._o["Name"];
    }

    /**
     * Sub category of quest item. If applicable.
     * @returns {string}
     */
    get Type() {
        return this.Data.Type;
    }

    /**
     * @returns {boolean}
     */
    IsFavorite() {
        return this._inventory.IsFavorite(this.Id);
    }

    /**
     * @param {boolean} Value
     * @returns {boolean} Value
     */
    SetFavorite(Value) {
        if (Value == true) {
            this._inventory.AddFavorite(this.Id);
        } else {
            this._inventory.DeleteFavorite(this.Id);
        }
        return Value;
    }

    /**
     * @returns {boolean} new value for IsFavorite()
     */
    ToggleFavorite() {
        return this.SetFavorite(!this.IsFavorite());
    }

    /**
     * Fetch the default charges from an items data record.
     * @param {string|undefined} Type
     * @param {string|undefined} Tag
     * @param {object} [rec]
     * @returns {number}
     */
    static GetCharges(Type, Tag, rec) {
        if (rec === undefined) rec = this._FetchData(Type, Tag);
        return rec.hasOwnProperty("Charges") ? rec["Charges"] : 1;
    }

    /**
     * @returns {number}
     */
    Charges() {
        console.log("Error: calling Item.Charges() for class " + this.Id);
        return 0;
    }

    /**
     *
     * @param {number} n
     */
    AddCharges(n) {
        console.log("Error: calling Item.AddCharges(" + n + ") for class " + this.Id);
    }

    /**
     * @param {number} n
     * @returns {number}
     */
    RemoveCharges(n) {
        return this._inventory.AddCharges(this._itemClass, this._tag, -n);
    }
};

App.Items = {};

App.Items.Shop = /** @class Shop @extends {App.Item} */ class Shop extends App.Item {
    constructor(ShopName, InventoryObj) {
        super('SHOP', ShopName, undefined, InventoryObj);
    }

};

App.Items.Clothing = /** @class Clothing @extends {App.Item} */ class Clothing extends App.Item {
    /**
     * @param {string} Tag
     * @param {object} d
     * @param {App.Entity.InventoryManager} InventoryObj
     */
    constructor(Tag, d, InventoryObj) {
        super('CLOTHES', Tag, d, InventoryObj);
        this._Knowlege = [ ];

        for(var i = 0; i < this.WearEffect.length; i++)
            this._Knowlege = this._Knowlege.concat(App.Data.EffectLib[this.WearEffect[i]]["KNOWLEDGE"]);
        for(i = 0; i < this.ActiveEffect.length; i++)
            this._Knowlege = this._Knowlege.concat(App.Data.EffectLib[this.ActiveEffect[i]]["KNOWLEDGE"]);
    }

    /**
     * Short description of item
     * @returns {string}
     */
    get Description() {
        var result = this.Data.ShortDesc;
        if (result instanceof String) result = String(result);
        if (typeof (result) !== "string" || result === "") return this.Name;
        result = result.replace("{COLOR}", String(this.Data.Color));

        if (this.IsLocked()) result += " @@color:red;(Locked)@@";

        return result;
    }

    /**
     * Examine an item, relate detailed description and any knowledge.
     * @param {App.Entity.Player} Player
     * @param {boolean} [OmitDescription]
     * @returns {string}
     */
    Examine(Player, OmitDescription) {

        if (OmitDescription == true) {

            Output = this.Category.join(", ") + " " + this.Rank +"\n";
            var Usages = Player.GetHistory("CLOTHING_EFFECTS_KNOWN", this.Tag);
            var max = Math.min(Usages, this.GetKnowledge().length);

            for(var i = 0; i < max; i++)
                Output += App.PR.pEffectMeter(this.GetKnowledge()[i], this) + " ";
            return Output;
        }

        var Output = this.Data["LongDesc"];
        var Usages = Player.GetHistory("CLOTHING_EFFECTS_KNOWN", this.Tag);

        Output += "\n";

        Output += "@@color:yellow;Style Categories  @@ ";
        Output += this.Category.join(", ");
        Output += "\n";
        Output += "@@color:yellow;Rank @@ " + this.Rank + "\n";
        var max = Math.min(Usages, this.GetKnowledge().length);

        for(var i = 0; i < max; i++)
            Output += App.PR.pEffectMeter(this.GetKnowledge()[i], this) + " ";
        return Output;
    }

    /**
     * Apply (worn) affects overnight like skill gains / body mods.
     * Apply all effects of this clothing item, usually overnight.
     * @param {App.Entity.Player} Player
     */
    ApplyEffects(Player) {

        for (var i = 0; i < this.WearEffect.length;i++) {
            if (Player.debugMode == true) console.log("Applying effect: "+this.WearEffect[i]);
            App.Data.EffectLib[this.WearEffect[i]]["FUN"](this, Player);
        }
    }

    /**
     * Learn Knowledge sleeping...
     * @param {App.Entity.Player} Player
     * @returns {string}
     */
    LearnKnowledge(Player)
    {
        var flag = ( Player.GetHistory("CLOTHING_KNOWLEDGE", this.Tag) > 0);
        var know = Player.GetHistory("CLOTHING_EFFECTS_KNOWN", this.Tag);
        if (flag && know < this.GetKnowledge().length){
            var output = "@@color:yellow;You learn something... your " + this.Name +" has an effect!@@ " + App.PR.pEffectMeter(this.GetKnowledge()[know], this);
            Player.AddHistory("CLOTHING_EFFECTS_KNOWN", this.Tag, 1);
            Player.RemoveHistory("CLOTHING_KNOWLEDGE", this.Tag);
            return output;
        }
    }

    /**
     * List all categories this piece of clothing belongs to.
     * @returns {string[]}
     */
    get Category()
    {
        if (this.Data.hasOwnProperty("Category") == false) return [ "Ordinary" ];
        return this.Data["Category"];
    }

    /**
     * Return the style of the item if it fits within the category supplied.
     * @param {string} Cat
     * @returns {number}
     */
    CategoryBonus(Cat)
    {
        return ( $.inArray(Cat, this.Category) != -1 ) ? this.Style : 0;
    }

    /**
     * What slot this is worn in.
     * @returns {string}
     */
    get Slot() {
        return this.Data.Slot;
    }

    /**
     * Slots to disable when this is worn.
     * @returns {string[]}
     */
    get Restrict() {
        return this.Data.Restrict;
    }

    /**
     * Effects that happen when the item is worn, overnight.
     * @returns {string[]}
     */
    get WearEffect() {
        return (typeof this.Data["WearEffect"] !== 'undefined') ? this.Data.WearEffect : [ ];
    }

    /**
     * Effects that can be applied to active skill rolls.
     * @returns {string[]}
     */
    get ActiveEffect() {
        return (typeof this.Data["ActiveEffect"] !== 'undefined') ? this.Data.ActiveEffect : [ ];
    }

    /**
     * Color of item.
     * @returns {string}
     */
    get Color() {
        return this.Data.Color;
    }

// STYLE TABLE
// TYPE         COMMON  UNCOMMON    RARE    LEGENDARY
// ACCESSORY    3       6           9       12
// CLOTHING     5       10          15      20
// ONE PIECE    10      20          30      40
    /**
     * Style bonus related to quality of clothing item.
     * @returns {number} */
    get Style() {
        const bonus = {
            "ACCESSORY" : { "COMMON" : 3, "UNCOMMON" : 6, "RARE" : 9, "LEGENDARY" : 12 },
            "WEAPON"    : { "COMMON" : 3, "UNCOMMON" : 6, "RARE" : 9, "LEGENDARY" : 12 },
            "CLOTHING"  : { "COMMON" : 5, "UNCOMMON" : 10, "RARE" : 15, "LEGENDARY" : 20 },
            "ONE PIECE" : { "COMMON" : 10, "UNCOMMON" : 20, "RARE" : 30, "LEGENDARY" : 40 }
        };

        if (this.Type == "WEAPON") return 0;
        return bonus[this.Type][this.Data.Style];
    }
    /**
     * Show stars relating to rank on clothing.
     * @returns {string}
     */
    get Rank() {
        if (this.Data["Style"] == "COMMON") return "@@color:gold;&#9733;@@";
        if (this.Data["Style"] == "UNCOMMON") return "@@color:gold;&#9733;&#9733;@@";
        if (this.Data["Style"] == "RARE") return "@@color:gold;&#9733;&#9733;&#9733;@@";
        if (this.Data["Style"] == "LEGENDARY") return "@@color:gold;&#9733;&#9733;&#9733;&#9733;@@";
        return "@@color:gold;&#9733;@@";
    }

    /** @returns {string} */
    HairColor() {
        return this.Data["Color"] ? this.Data["Color"] : "black";
    }

    /** @returns {number} */
    HairLength() {
        return this.Data["HairLength"] ? this.Data["HairLength"] : 0;
    }

    /** @returns {string} */
    HairStyle() {
        return this.Data["HairStyle"] ? this.Data["HairStyle"] : "";
    }

    /** @returns {number} */
    HairBonus() {
        return this.Data["HairBonus"] ? this.Data["HairBonus"] : 0;
    }

    /**
     * Locked items cannot be removed unless unlocked.
     */
    IsLocked() {
        if (this.Inventory !== undefined && this.Inventory.IsWorn(this.Id, this.Slot)) return this.Inventory.IsLocked(this.Slot);
        return false;
    }

    /**
     * Query the effects (if present) on this piece of clothing and return the bonus
     * @param {string} skillName
     * @returns {number}
     */
    GetBonus(skillName) {
        var bonus = 0;
        for (var i = 0; i < this.ActiveEffect.length;i++) bonus += App.Data.EffectLib[this.ActiveEffect[i]]["FUN"](this,skillName);
        return bonus;
    }

    /**
     * Checks whether this item can be sold in shops
     * @returns {boolean}
     */
    InMarket() {
        var inMarket = this.Data.InMarket;
        return typeof (inMarket) === "boolean" ? inMarket : true; // Default to yes.
    }

    /**
     * @returns {string[]}
     */
    GetKnowledge() { return this._Knowlege.sort(); }
};

App.Items.Consumable = /** @class Consumable @extends {App.Item} */ class Consumable extends App.Item {
    /**
     * @param {string} Category
     * @param {string} Tag
     * @param {object} d
     * @param {App.Entity.InventoryManager} InventoryObj
     */
    constructor(Category, Tag, d, InventoryObj) {
        super(Category, Tag, d, InventoryObj);

        this._messageBuffer = [ ];

        this._Knowlege = [ ];

        for(const e of this.UseEffect){
            this._Knowlege = this._Knowlege.concat(App.Data.EffectLib[e].KNOWLEDGE);
        }
    }

    /**
     * Short description of item
     * @returns {string}
     */
    get Description() {
        return this.Data["ShortDesc"];
    }

    /**
     * Shows long description of item and any knowledge known about it.
     * @param {App.Entity.Player} Player
     * @param {boolean} [OmitDescription]
     * @returns {string}
     */
    Examine(Player, OmitDescription) {
        var Output = OmitDescription ? "" : this.Data["LongDesc"];
        var Usages = Player.GetHistory("ITEMS", this.Tag);

        if (Usages == 0) return Output;

        if (!OmitDescription) Output += "\n\n";
        var max = Math.min(Usages, this.GetKnowledge().length);

        for(var i = 0; i < max; i++)
            Output += App.PR.pEffectMeter(this.GetKnowledge()[i], this) + "  ";

        return Output;
    }

    /** @returns {*}*/
    get UseEffect() {
        return (typeof this.Data["Effects"] !== 'undefined') ? this.Data["Effects"] : [ ];
    }

    /**
     * Apply all effects of this consumable item.
     * @param {App.Entity.Player} Player
     */
   ApplyEffects(Player) {

        if (this.Data.hasOwnProperty("Effects") == false) return;
        var tmp;
        for (var i = 0; i < this.Data["Effects"].length;i++) {
            if (Player.debugMode == true) console.log("Applying effect: "+this.Data["Effects"][i]);
            tmp = App.Data.EffectLib[this.Data["Effects"][i]]["FUN"](this, Player);
            if ((typeof tmp !== 'undefined') && (tmp != "")) this._messageBuffer.push(tmp);
        }

        // Knowledge.
        var Usages = Player.GetHistory("ITEMS", this.Tag);

        if (Usages <= this.GetKnowledge().length)
            this._messageBuffer.push("\n\n@@color:yellow;You learn something... this item has an effect!@@ " + App.PR.pEffectMeter(this.GetKnowledge()[(Usages-1)], this));

    }

    /**
     * This message is printed when a player uses an item
     * @param {App.Entity.Player} Player
     * @returns {string} */
    Message(Player) {
        var Output = this.Data["Message"];
        if (this._messageBuffer.length > 0) Output += this._messageBuffer.join("\n");
        this._messageBuffer = [ ];
        return Output;
    }

    /**
     * Price of the item
     * @returns {number}
     * @todo unused
     */
    get Price() {
        return this.Data["Price"];
    }

    /**
     * No. of uses
     * @returns {number}
     */
    Charges() {
        return this._inventory.Charges(this._itemClass, this.Tag);
    }

    /** @param {number} n */
    SetCharges(n) {
        this._inventory.SetCharges(this._itemClass, this.Tag, n);
    }

    /**
     * @param {number} n
     * @returns {number}
     */
    AddCharges(n) {
        return this._inventory.AddCharges(this._itemClass, this.Tag, n);
    }

    /**
     * @param {number} n
     * @returns {number}
     */
    RemoveCharges(n) {
        return this._inventory.AddCharges(this._itemClass, this.Tag, -n);
    }

    /** @returns {boolean}*/
    IsFull() {
        return this.Charges() == this._inventory._MAX_ITEM_CHARGES;
    }

    // TODO: HasBonus / GetBonus should probably be factored out of the game. Not sure if this was ever used.
    /**
     * Determine if an item has a bonus of a specific type.
     * @param b {string}
     * @returns {boolean}
     */
    HasBonus(b) {
        if (this.Data.hasOwnProperty("SkillBonus") == false) return false;
        return this.Data["SkillBonus"].hasOwnProperty(b);
    }

    /**
     * Get the bonus for an item by key
     * @param {string} b - bonus type to find
     * @returns {number[]}
     */
    GetBonus(b) {
        if (this.Data.hasOwnProperty("SkillBonus") == false) return [0, 0, 0];
        if (this.Data["SkillBonus"].hasOwnProperty(b) == false) return [0, 0, 0];
        return this.Data["SkillBonus"][b];
    }

    /**
     * @returns {string[]}
     */
    GetKnowledge() { return this._Knowlege.sort(); }
};

App.Items.QuestItem = /** @class QuestItem @extends {App.Item} */ class QuestItem extends App.Item {
    /**
     *
     * @param {string} Tag
     * @param {string} d
     * @param {App.Entity.InventoryManager} InventoryObj
     * @constructor
     */
    constructor(Tag, d, InventoryObj) {
        super("QUEST", Tag, d, InventoryObj);
    }

    /**
     * Short description
     * @returns {string}
     */
    get Description() {
        return this.Data["ShortDesc"];
    }

    /**
     * Long description of item. No knowledge on quest items.
     * @param {App.Entity.Player} Player
     * @param {boolean} [OmitDescription]
     * @returns {string}
     */
    Examine(Player, OmitDescription) {
        return OmitDescription ? "" : this.Data["LongDesc"];
    }

    /**
     * Doesn't work. You can't have more than 1 of any quest item.
     * @param {number} n
     * @returns {number} */
    AddCharges(n) { return 1; };

    /** Fake: This makes it so that quest items are unique.
     * @returns {number} */
    Charges() { return 1; }

};

App.Items.Reel = /** @class Reel @extends {App.Item} */ class Reel extends App.Item {
    /**
     * @param {string} id
     * @param {object} d
     * @param {App.Entity.InventoryManager} InventoryObj
     */
    constructor(id, d, InventoryObj) {
        super("REEL", id, d, InventoryObj);
    }

    /**
     * The name of the reel.
     * @returns {string}
     */
    get Name() {
        return this.Data.NAME;
    }

    /** @returns {string} */
    get Description() {
        var color;
        switch(this.Data["RANK"]) {
            case 'COMMON': color="grey"; break;
            case 'UNCOMMON' : color="lime"; break;
            case 'RARE' : color="cyan"; break;
            case 'LEGENDARY': color="orange"; break;
        }
        return "@@color:"+color+";("+ this.Data['RANK']+ ") "+this.Data["NAME"]+"@@";
    }

    /**
     * @param {App.Entity.Player} Player
     * @param {boolean} [OmitDescription]
     * @returns {string}
     */
    Examine(Player, OmitDescription) {
        var attrs = [ 'ASS', 'BJ', 'HAND', 'TITS', 'FEM', 'PERV', 'BEAUTY'];
        var text = ['Ass Fucking', 'Blowjobs', 'Handjobs', 'Tit Fucking', 'Femininity', 'Perversion', 'Beauty'];
        var output = OmitDescription ? "" : "A slot reel used for whoring. It has the following attributes:\n";
        for (var x = 0; x < attrs.length; x++) {
            var percent = this.CalcPercent(attrs[x]);
            if (percent <= 0) continue;
            output += text[x] + " - " + percent + "% ";
        }
        return output;
    }

    /** @returns {number} */
    CalcPercent(key) {
        var filterArr = this.Data['DATA'].filter(function(o) { return o == key; });
        return Math.round( (filterArr.length/ this.Data['DATA'].length) * 100);
    }

    /** @returns {string} */
    get Rank() { return this.Data.RANK; }

    /** @returns {string} */
    get Reels() {
        return this.Data["DATA"];
    }

    /** @returns {string} */
    get Css() {
        return this.Data["CSS"];
    }

    /**
     * Find a particular symbol at an array index
     * @param {number} index
     * @returns {string}
     */
    Symbol(index) {
        return this.Data["DATA"][index];
    }

    /** @returns {string} */
    get Type() { return this.ItemClass; }

    /**
     * No. of uses
     * @returns {number}
     */
    Charges() {
        return this._inventory.Charges(this._itemClass, this.Tag);
    }
};
