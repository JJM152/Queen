window.App = window.App || { Data: { }, Entity: { } };

window.App.StoreEngine = new function() {

    /**
     * Creates a store object and returns it to the Twine engine.
     * @param {App.Entity.Player} Player
     * @param {App.Entity.NPC} NPC
     * @returns {Store}
     */
    this.OpenStore = function(Player, NPC)
    {
        return new Store(Player, NPC, window.App.Data.Stores[NPC.StoreName()]);
    };

    /**
     * Checks to see if an NPC has a store inventory or not attached to them.
     * @param {App.Entity.NPC} NPC
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
 * @param {App.Entity.NPC} NPC
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

        return Inventory.filter(function (Item) { return Player.OwnsWardrobeItem(Item) == false});
    };

    this.GetCommonInventory = function() {
        return this.GetInventory("COMMON");
    };

    this.GetRareInventory = function() {
        var Mood = this._NPC.Mood();
        return $.grep(this._Player.StoreInventory[this._Data["ID"]]["RARE"],
            function(Item) {
                return ((Item["LOCK"] != 1) && (Item["CATEGORY"] == "RARE") && (Mood >= Item["MOOD"]))
            });
    };

    this.PlayerCanAfford = function(Item)
    {
        return (this._Player.Money >= this.GetPrice(Item));
    };

    this.GetPrice = function(Item)
    {
        // Up to 50% discount with maximum NPC mood.
        return Math.round( (Item["PRICE"] - ((Item["PRICE"] / 2) * (this._NPC.Mood() / 100))));
    };

    this.BuyItem = function(Item)
    {
        Item["QTY"] = Math.max(0, (Item["QTY"] - 1));
        this._Player.AddItem(Item["TYPE"], Item["TAG"], 0);
        this._Player.AdjustMoney((this.GetPrice(Item) * -1.0));
    };

    this.StockInventory = function()
    {
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
        var oItem = window.App.Item.Factory( Item["TYPE"], Item["TAG"], 1);
        return oItem.Description();
    };

    /**
     * Used for examining items through shop interface
     * @param Item
     * @returns {string}
     */
    this.PrintItemLong = function(Item)
    {
        var oItem = window.App.Item.Factory( Item["TYPE"], Item["TAG"], 1);
		var Player = this._Player;
        return "@@color:yellow;You take a look at the @@" + oItem.Description()+ ".\n"+oItem.Examine(Player);
    };

    this.StockInventory();

};
