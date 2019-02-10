window.App = window.App || { Data: { }, Entity: { } };

window.App.StoreEngine = new function() {

    /**
     * Creates a store object and returns it to the Twine engine.
     * @param {App.Entity.Player} Player
     * @param {App.Entity.NPC|NPC} NPC
     * @returns {Store}
     */
    this.OpenStore = function(Player, NPC)
    {

        return new Store(Player, NPC, window.App.Data.Stores[NPC.StoreName()]);
    };

    /**
     * Checks to see if an NPC has a store inventory or not attached to them.
     * @param {App.Entity.NPC|NPC} NPC
     * @returns {boolean}
     */
    this.HasStore = function(NPC) {
        return (window.App.Data.Stores.hasOwnProperty(NPC.StoreName()));
    };

    /**
     * Is the NPCs store open.
     * @param {App.Entity.Player} Player
     * @param {App.Entity.NPC} NPC
     * @returns {boolean}
     */
    this.IsOpen = function(Player, NPC) {
        return ($.inArray(Player.Phase, window.App.Data.Stores[NPC.StoreName()]["OPEN"]) != -1);
    };

    /**
     * Lock/unlock a store item.
     * @param {App.Entity.Player} Player
     * @param {string} StoreKey
     * @param {string} ItemTag
     * @param {number} Locked
     * @constructor
     */
    this.ToggleStoreItem = function(Player, StoreKey, ItemTag, Locked)
    {
        var Match = Player.StoreInventory[StoreKey]["INVENTORY"].filter(
            function(Item) {
                return Item["TAG"] == ItemTag;
            });

        for (var i = 0; i < Match.length; i++)
            Match[i]["LOCK"] = Locked;
    };

};

/**
 * Store Container Object
 * @param {App.Entity.Player} Player
 * @param {App.Entity.NPC|NPC} NPC
 * @param {object} StoreData
 * @constructor
 */
var Store = function(Player, NPC, StoreData) {

    this._Player = Player;
    this._NPC = NPC;
    this._Data = StoreData;

    this.GetName = function() { return this._Data["NAME"]; };

    this.GetInventory = function(Category)
    {
        var Mood =  this._NPC.Mood();
        var Player = this._Player;

        var Inventory = $.grep( this._Player.StoreInventory[this._Data["ID"]]["INVENTORY"], function(Item) {
           return ((Item["LOCK"] != 1) && (Item["CATEGORY"] == Category) && (Mood >= Item["MOOD"]));
        });

        //return Inventory; // Show item, but no buy.
        return Inventory.filter(function (Item) { return Player.OwnsWardrobeItem(Item) == false;});
    };

    this.GetCommonInventory = function() {
        return this.GetInventory("COMMON");
    };

    this.GetRareInventory = function() {
        var Mood = this._NPC.Mood();
        return $.grep(this._Player.StoreInventory[this._Data["ID"]]["RARE"],
            function(Item) {
                return ((Item["LOCK"] != 1) && (Item["CATEGORY"] == "RARE") && (Mood >= Item["MOOD"]));
            });
    };

    /**
     * Can the player afford this onion? Er.. item.
     * @param {*} Item The object that represents the stores inventory for the item
     * @returns {boolean}
     */
    this.PlayerCanAfford = function(Item)
    {
        return (this._Player.Money >= this.GetPrice(Item));
    };

    /**
     * Fetch the price from the Item calculator. Applies store bonus and discount for good npc mood.
     * @param {*} Item The object that represents the stores inventory for the item
     * @returns {number}
     */
    this.GetPrice = function(Item)
    {

        var price = App.Item.CalculateBasePrice( Item["TYPE"], Item["TAG"]);
        if (typeof Item["PRICE"] !== 'undefined') price = Math.ceil( price * Item["PRICE"]);

        // Up to 30% discount with maximum NPC mood. Mood must be above 50
        var discount = Math.floor( price * 0.3);
        return (this._NPC.Mood() > 50) ?  Math.ceil ( price - ( discount * ((this._NPC.Mood()-50)/ 50))) : price;

    };

    this.BuyItems = function(Item, Count)
    {
        if (Count === undefined) Count = Item["QTY"];
        var itemPrice = this.GetPrice(Item);
        // looping because some items contain more than 1 charge
        // and we cann't fetch that here
        for (var i = 0; i < Count; ++i) {
            if (this._Player.Money < itemPrice || Item["QTY"] === 0 || this._Player.MaxItemCapacity(Item)) break;
            Item["QTY"] = Math.max(0, (Item["QTY"] - 1));
            this._Player.AddItem(Item["TYPE"], Item["TAG"], 0);
            this._Player.AdjustMoney(itemPrice * -1.0);
        }
    };

    this.GenerateMarket = function() {
        if (this._Data["RESTOCK"] == 0) {
            // Clear all the data...
            this._Player.StoreInventory[this._Data["ID"]]["INVENTORY"] = [ ];
            this._Player.StoreInventory[this._Data["ID"]]["RARE"] = [ ];

            var items = 3 + (Math.floor(Math.random() * 4)); // 3 - 6 items.

            for (var i = 0; i < items; i++) {
                var roll = (1 + (Math.floor(Math.random() * 100)));
                var keys = { };
                var entry = { };
                var qty = 0;

                if (roll < 20 ) {  // cosmetics
                    keys = $.grep(Object.keys(App.Data.Cosmetics), function(c) {  return ( 'InMarket' in App.Data.Cosmetics[c] ? App.Data.Cosmetics[c]["InMarket"] : true ); });
                    entry = App.PR.GetRandomListItem(keys);
                    this._Player.StoreInventory[this._Data["ID"]]["INVENTORY"].push(
                        {"CATEGORY":   "COMMON", "TYPE": "COSMETICS", "QTY":   12, "MAX":   12, "PRICE":  1.3, "MOOD":  0,   "LOCK": 0,  "TAG" : entry });
                }

                if (roll >= 20 && roll < 60 ) { // food
                    keys = $.grep(Object.keys(App.Data.Food), function(c) {  return ( 'InMarket' in App.Data.Food[c] ? App.Data.Food[c]["InMarket"] : true ); });
                    entry = App.PR.GetRandomListItem(keys);
                    qty = (1 + (Math.floor(Math.random() * 4)));
                    this._Player.StoreInventory[this._Data["ID"]]["INVENTORY"].push(
                        {"CATEGORY":   "COMMON", "TYPE": "FOOD", "QTY":   qty, "MAX":   qty, "PRICE":  1.3, "MOOD":  0,   "LOCK": 0,  "TAG" : entry });
                }

                if (roll >= 60 && roll < 80) { // drugs
                    keys = $.grep(Object.keys(App.Data.Drugs), function(c) {  return ( 'InMarket' in App.Data.Drugs[c] ? App.Data.Drugs[c]["InMarket"] : true ); });
                    entry = App.PR.GetRandomListItem(keys);
                    qty = (1 + (Math.floor(Math.random() * 4)));
                    this._Player.StoreInventory[this._Data["ID"]]["INVENTORY"].push(
                        {"CATEGORY":   "COMMON", "TYPE": "DRUGS", "QTY":   qty, "MAX":   qty, "PRICE":  1.3, "MOOD":  0,   "LOCK": 0,  "TAG" : entry });
                }

                if (roll >= 80 && roll <= 95) { // clothes

                    // if roll == 95 then include legendary items
                    if (roll == 95 ) {
                        keys = $.grep(Object.keys(App.Data.Clothes), function(c) {  return ( 'InMarket' in App.Data.Clothes[c] ? App.Data.Clothes[c]["InMarket"] : true ); });
                    } else {
                        keys = $.grep(Object.keys(App.Data.Clothes), function(c) { return ( 'InMarket' in App.Data.Clothes[c] ? App.Data.Clothes[c]["InMarket"] : true ) && App.Data.Clothes[c]["Style"] != "LEGENDARY"; });
                    }

                    if (keys && keys.length > 0 ) {
                         entry = keys[(Math.floor(Math.random() * keys.length))];
                        if (App.Data.Clothes[entry]["Style"] == "LEGENDARY") {
                            this._Player.StoreInventory[this._Data["ID"]]["RARE"].push(
                                {
                                    "CATEGORY": "RARE",
                                    "TYPE": "CLOTHES",
                                    "QTY": 1,
                                    "MAX": 1,
                                    "PRICE": 1.3,
                                    "MOOD": 0,
                                    "LOCK": 0,
                                    "TAG": entry
                                });
                        } else {
                            this._Player.StoreInventory[this._Data["ID"]]["INVENTORY"].push(
                                {
                                    "CATEGORY": "COMMON",
                                    "TYPE": "CLOTHES",
                                    "QTY": 1,
                                    "MAX": 1,
                                    "PRICE": 1.3,
                                    "MOOD": 0,
                                    "LOCK": 0,
                                    "TAG": entry
                                });
                        }
                    }
                }

                if (roll > 95) { // slot reels.
                    entry = Object.keys(App.Data.Slots)[(Math.floor(Math.random() * Object.keys(App.Data.Slots).length))];
                    this._Player.StoreInventory[this._Data["ID"]]["INVENTORY"].push(
                        {"CATEGORY":   "COMMON", "TYPE": "REEL", "QTY":   1, "MAX":   1, "PRICE":  1.3, "MOOD":  0,   "LOCK": 0,  "TAG" : entry });
                }
            }
        }
    };

    /**
     * Returns days until the next restocking
     * @returns {number}
     */
    this.DaysUntilRestocking = function()
    {
        // Don't stock stuff in markets
        if (this._Data["RESTOCK"] == 0) return 0;
        return this._Data["RESTOCK"] - (this._Player.Day
             - this._Player.StoreInventory[this._Data["ID"]]["LAST_STOCKED"]);
    };

    /**
     * Owner's mood
     * @returns {number}
     */
    this.OwnerMood = function()
    {
        return this._NPC.Mood();
    };

    /* FIXME: Let's make this trigger for the SHIP whenever you land at a port. But not otherwise. */
    this.StockInventory = function()
    {
        // Don't stock stuff in markets
        if (this._Data["RESTOCK"] == 0) return;

        if ( ( this._Player.StoreInventory[this._Data["ID"]]["LAST_STOCKED"] == 0)
            || (this._Player.StoreInventory[this._Data["ID"]]["LAST_STOCKED"] + this._Data["RESTOCK"] <= this._Player.Day) ) {

            if (this._Player.StoreInventory[this._Data["ID"]]["INVENTORY"].length == 0)
                this._Player.StoreInventory[this._Data["ID"]]["INVENTORY"] = this._Data["INVENTORY"];

            for (var i = 0; i < this._Player.StoreInventory[this._Data["ID"]]["INVENTORY"].length; i++)
                this._Player.StoreInventory[this._Data["ID"]]["INVENTORY"][i]["QTY"] = this._Player.StoreInventory[this._Data["ID"]]["INVENTORY"][i]["MAX"];

            this._Player.StoreInventory[this._Data["ID"]]["RARE"] = [ ];

            var Mood = this._NPC.Mood();
            var Rares = $.grep(this._Player.StoreInventory[this._Data["ID"]]["INVENTORY"], function(Item) {
                return ((Item["CATEGORY"] == "RARE") && (Mood >= Item["MOOD"]) && (Item["LOCKED"] != 1));
            });

            if (Rares.length > 0) this._Player.StoreInventory[this._Data["ID"]]["RARE"].push($.extend({},Rares[Math.floor(Math.random() * Rares.length)]));

            this._Player.StoreInventory[this._Data["ID"]]["LAST_STOCKED"] = this._Player.Day;
        }
    };

    this.PrintItem = function(Item)
    {
        var oItem = window.App.Item.Factory( Item["TYPE"], Item["TAG"]);
        var res = "<span class='inventoryItem'>" + oItem.Description;
        console.log("store print item called");
        if (this._Player.Inventory.IsFavorite(oItem.Id)) {
            res += "&nbsp;" + App.PR.GetItemFavoriteIcon(true);
        }

        if (SugarCube.settings.inlineItemDetails) {
            res += "</span><br><div class='inventoryItemDetails'>" + oItem.Examine(this._Player, false) + '</div>';
        } else {
            res += '<span class="tooltip">' + oItem.Examine(this._Player, false) + '</span></span>';
        }
        return res;
    };

    /**
     * Used for examining items through shop interface
     * @param {object} Item
     * @returns {string}
     */
    this.PrintItemLong = function(Item)
    {
        var oItem = window.App.Item.Factory( Item["TYPE"], Item["TAG"]);
		var Player = this._Player;
        return "@@color:yellow;You take a look at the @@" + oItem.Description+ ".\n"+oItem.Examine(Player);
    };

    this.StockInventory();

};
