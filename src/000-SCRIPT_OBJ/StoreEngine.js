App.StoreEngine = new function() {

    /**
     * Creates a store object and returns it to the Twine engine.
     * @param {App.Entity.Player} Player
     * @param {App.Entity.NPC|NPC} NPC
     * @returns {Store}
     */
    this.OpenStore = function(Player, NPC)
    {

        return new Store(Player, NPC, App.Data.Stores[NPC.StoreName()]);
    };

    /**
     * Checks to see if an NPC has a store inventory or not attached to them.
     * @param {App.Entity.NPC} NPC
     * @returns {boolean}
     */
    this.HasStore = function(NPC) {

        if (!App.Data.Stores.hasOwnProperty(NPC.StoreName())) return false;
        const tmp = App.Data.Stores[NPC.StoreName()];
        if (tmp.hasOwnProperty('UNLOCK_FLAG') 
            && (setup.player.QuestFlags.hasOwnProperty(tmp.UNLOCK_FLAG) == false ||
               tmp.UNLOCK_FLAG_VALUE != setup.player.QuestFlags[tmp.UNLOCK_FLAG])) return false;

        return true;
    };

    /**
     * Is the NPCs store open.
     * @param {App.Entity.Player} Player
     * @param {App.Entity.NPC} NPC
     * @returns {boolean}
     */
    this.IsOpen = function(Player, NPC) {
        return ($.inArray(Player.Phase, App.Data.Stores[NPC.StoreName()]["OPEN"]) != -1);
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
 * @param {App.Entity.NPC} NPC
 * @param {object} StoreData
 * @constructor
 */
var Store = function(Player, NPC, StoreData) {

    this._Player = Player;
    this._NPC = NPC;
    this._Data = StoreData;
    this._Id = this._Data['ID'];

    //Hack to add store to player state if the store doesn't exist already.
    if (Player.StoreInventory.hasOwnProperty(this._Id) == false) {
        Player.StoreInventory[this._Id] = { "LAST_STOCKED" : 0, "INVENTORY" : [ ], "RARE" : [ ]};
    }

    this.GetName = function() { return this._Data["NAME"]; };

    this.GetInventory = function(Category)
    {
        var Mood =  this._NPC.Mood();
        var Player = this._Player;

        var Inventory = $.grep( this._Player.StoreInventory[this._Id]["INVENTORY"], function(Item) {
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
        // and we can't fetch that here
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
            this._Player.StoreInventory[this._Id]["INVENTORY"] = [ ];
            this._Player.StoreInventory[this._Id]["RARE"] = [ ];

            var items = 3 + (Math.floor(Math.random() * 4)); // 3 - 6 items.

            for (var i = 0; i < items; i++) {
                var roll = (1 + (Math.floor(Math.random() * 100)));
                var keys = { };
                var entry = { };
                var qty = 0;

                if (roll < 20 ) {  // cosmetics
                    keys = $.grep(Object.keys(App.Data.Cosmetics), function(c) {  return ( 'InMarket' in App.Data.Cosmetics[c] ? App.Data.Cosmetics[c]["InMarket"] : true ); });
                    entry = App.PR.GetRandomListItem(keys);
                    this._Player.StoreInventory[this._Id]["INVENTORY"].push(
                        {"CATEGORY":   "COMMON", "TYPE": "COSMETICS", "QTY":   12, "MAX":   12, "PRICE":  1.3, "MOOD":  0,   "LOCK": 0,  "TAG" : entry });
                }

                if (roll >= 20 && roll < 60 ) { // food
                    keys = $.grep(Object.keys(App.Data.Food), function(c) {  return ( 'InMarket' in App.Data.Food[c] ? App.Data.Food[c]["InMarket"] : true ); });
                    entry = App.PR.GetRandomListItem(keys);
                    qty = (1 + (Math.floor(Math.random() * 4)));
                    this._Player.StoreInventory[this._Id]["INVENTORY"].push(
                        {"CATEGORY":   "COMMON", "TYPE": "FOOD", "QTY":   qty, "MAX":   qty, "PRICE":  1.3, "MOOD":  0,   "LOCK": 0,  "TAG" : entry });
                }

                if (roll >= 60 && roll < 80) { // drugs
                    keys = $.grep(Object.keys(App.Data.Drugs), function(c) {  return ( 'InMarket' in App.Data.Drugs[c] ? App.Data.Drugs[c]["InMarket"] : true ); });
                    entry = App.PR.GetRandomListItem(keys);
                    qty = (1 + (Math.floor(Math.random() * 4)));
                    this._Player.StoreInventory[this._Id]["INVENTORY"].push(
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
                            this._Player.StoreInventory[this._Id]["RARE"].push(
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
                            this._Player.StoreInventory[this._Id]["INVENTORY"].push(
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
                    this._Player.StoreInventory[this._Id]["INVENTORY"].push(
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
             - this._Player.StoreInventory[this._Id]["LAST_STOCKED"]);
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
    /* FIXME: This entire system is a load of complicated garbage. Rewrite and simplify it in the future */
    this.StockInventory = function()
    {
        // Don't stock stuff in markets
        if (this._Data["RESTOCK"] == 0) return;

        if ( ( this._Player.StoreInventory[this._Id]["LAST_STOCKED"] == 0)
            || (this._Player.StoreInventory[this._Id]["LAST_STOCKED"] + this._Data["RESTOCK"] <= this._Player.Day) ) {

            // Something is bugged, prepare the inventory array.
            if (this._Player.StoreInventory[this._Id]["INVENTORY"].length == 0)
                this._Player.StoreInventory[this._Id]["INVENTORY"] = this._Data["INVENTORY"];

            // Add any records in Data that do not exist in the player state.Typically we added something to a shop
            // and the player already has a shop record in their state object.
            var toAdd = this._Data['INVENTORY'].filter(f1 => this._Player.StoreInventory[this._Id]["INVENTORY"].find(f2 => f1.TAG == f2.TAG) === undefined);
            toAdd.forEach( a => this._Player.StoreInventory[this._Id]["INVENTORY"].push(a));

            //Restock qty on items.
            for (var i = 0; i < this._Player.StoreInventory[this._Id]["INVENTORY"].length; i++)
                this._Player.StoreInventory[this._Id]["INVENTORY"][i]["QTY"] = this._Player.StoreInventory[this._Id]["INVENTORY"][i]["MAX"];

            this._Player.StoreInventory[this._Id]["RARE"] = [ ]; //Clear array.

            var Mood = this._NPC.Mood();
            var MaxRares = this._Data.hasOwnProperty("MAX_RARES") ? this._Data["MAX_RARES"] : 1;
            // List of all possible rares from inventory listing.
            var Rares = $.grep(this._Player.StoreInventory[this._Id]["INVENTORY"], function(Item) {
                return ((Item["CATEGORY"] == "RARE") && (Mood >= Item["MOOD"]) && (Item["LOCKED"] != 1));
            });

            // Add multiple rare items to the store inventory.
            if (Rares.length > 0) {
            for (i = 0; i < MaxRares; i++) {
                // Filter out Rares that already exist in the rares entry.
                Rares = Rares.filter(function(o) {
                    var current = this._Player.StoreInventory[this._Id]["RARE"];
                    for(var i = 0; i < current.length; i++)
                     if (current[i]["TYPE"] == o["TYPE"] && current[i]["TAG"] == o["TAG"]) return false;
                    return true;
                }.bind(this));

                // Copy data record object into new variable or we get some bad reference juju.
                var RareEntry = { };
                $.extend(RareEntry, Rares[Math.floor(Math.random() * Rares.length)]);
                this._Player.StoreInventory[this._Id]["RARE"].push( RareEntry );
            }
        }

            this._Player.StoreInventory[this._Id]["LAST_STOCKED"] = this._Player.Day;
        }
    };

    this.PrintItem = function(Item)
    {
        var oItem = App.Item.Factory( Item["TYPE"], Item["TAG"]);
        var res = "<span class='inventoryItem'>" + oItem.Description;
        if (this._Player.Inventory.IsFavorite(oItem.Id)) {
            res += "&nbsp;" + App.PR.GetItemFavoriteIcon(true);
        }

        if (SugarCube.settings.inlineItemDetails) {
            res += '<span class="tooltip">' + oItem.Examine(this._Player, false) + '</span></span>';
            res += "<br><div class='inventoryItemDetails'>" + oItem.Examine(this._Player, true) + '</div>';
        } else {
            res += '</span>';
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
        var oItem = App.Item.Factory( Item["TYPE"], Item["TAG"]);
		var Player = this._Player;
        return "@@color:yellow;You take a look at the @@" + oItem.Description+ ".\n"+oItem.Examine(Player);
    };

    this.StockInventory();

};
