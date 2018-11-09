App = App || { Data: { }, Entity: { } };

/**
 * The basic player state object.
 * This will be serialized by the SugarCube and thus may not contain any functions
 * @Type {PlayerState}
 * @constructor
 */
App.Entity.PlayerState = function (){
    // Player Basic Variables
    this.OriginalName = "Joseph";
    this.SlaveName = "Josie";
    this.GirlfriendName = "Annette";
    this.NickName = "";
    this.HairColor = "black";
    this.HairStyle = "boy cut";
    this.HairBonus = 0;
    this.MakeupStyle = "plain faced";
    this.MakeupBonus = 0;
    this.EyeColor = "brown";
    this.Money = 0;
    this.SleepLog = [];
    /** @type {number} */
    this.SailDays = 1;
    this.LastUsedMakeup = "minimal blush and lipstick";
    this.LastUsedHair = "a spunky boy cut";
    this.LastQuickWardrobe = "Best Clothes";
    this.debugMode = false;
    this.difficultySetting = 1;
    this.WhoreTutorial = false;

    this.JobFlags = { };
    this.VoodooEffects = { };
    this.QuestFlags = { "Q001": "ACTIVE" }; // Default Quest.

    this.History = {
        "ITEMS" : { },
        "CLOTHING_KNOWLEDGE" : { }, // Flag to gain knowledge
        "CLOTHING_EFFECTS_KNOWN" : { },
        "DAYS_WORN" : { },
        "SEX"   : { },
        "CUSTOMERS" : { },
        "MONEY" : { }
    };

    // Game/Environment Variables
    this.Day = 1;
    this.Phase = 0; // 0 morning, 1 afternoon, 2 evening, 3 night, 4 late night

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
        "Balls":            0,
        "Lactation":        0
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
        "Balls":            0,
        "Lactation":        0
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
     * @type {string[]}
     */
    this.Wardrobe = [ ];
    /** @type {Object.<string, Object.<string, number>>} */
    this.Inventory = { };
    /** @type {Set<string>} */
    this.InventoryFavorites = new Set();
    /** @type {Object.<string, {ID:string, Locked:boolean}>} */
	this.Equipment = { };
	this.StoreInventory = { };
	this.NPCS = { };

    /** @type {Object.<number, string>} */
	this.Slots = {
        0: null, 1: null, 2: null, 3: null, 4: null, 5: null, 6: null, 7: null, 8: null
    };

    this.CurrentSlots = 3; // Starting allocation of whoring

    /**
     * @type {string[]}
     */
    this.BodyEffects = [ ]; // lists effect names

    this.GameStats = {
        "MoneyEarned":      0,
        Skills : {}
    };

    for (var skill in this.Skills) {
        if (!this.Skills.hasOwnProperty(skill)) continue;
        this.GameStats.Skills[skill] = {"Failure": 0, "Success": 0};
    }
};

/**
 * @Class InventoryManager
 * Provides convenient methods for inspecting an inventory objects (@see App.Entity.PlayerState.Inventory
 * and below the Player class).
 *
 * Might be used by NPCs in a future version, thus is not part of the Player class.
 *
 * This object is not meant to be serialized by SugarCube
 *
 */
App.Entity.InventoryManager = class InventoryManager {

    /**
     * @returns {*}
     */
    get _state() {
        return State.variables[this._stateObjName];
    }

    /**
     * @param {string} stateObjName
     */
    constructor(stateObjName) {
        /**
         * @type {string}
         * @private
         */
        this._stateObjName = stateObjName;

        this._MAX_ITEM_CHARGES = 100;

        // create item objects for each record
        this._items = {};
        this._ForEachItemRecord(undefined, undefined, function(charges, tag, itemClass) {
            this._ensureWrapObjectExists(itemClass, tag, charges);
        }, this);

        this._reelInSlots = {};
        for (var slot in this._state.Slots) {
            if (!this._state.Slots.hasOwnProperty(slot)) continue;
            if (this._state.Slots[slot] == null) {
                this._reelInSlots[slot] = null;
            } else {
                this._reelInSlots[slot] = App.Item.Factory("REEL", this._state.Slots[slot], this);
            }
        }
        if (this._state.InventoryFavorites == undefined) this._state.InventoryFavorites = new Set();
    }

    /**
     * Looks through all classes for item with the given tag and returns the item class
     * @param {string} Tag
     * @param {boolean} [FindAll] return all matching items (the first one otherwise)
     * @returns {string|string[]}
     * @private
     * TODO refactor the loop to exit early if FindAll = true
     */
    _FindItemClass(Tag, FindAll) {
        var res = [];
        Object.keys(this._state.Inventory).forEach(function(type) {
            if (!this._state.Inventory.hasOwnProperty(type)) return;
            if (this._state.Inventory[type].hasOwnProperty(Tag)) {
                res.push(type);
            }
        });
        if (res.length == 0) return undefined;
        return FindAll == true ? res[0] : res;
    }

    /**
     * @callback forEachCallback
     * @param {number} charges
     * @param {string} name
     * @param {string} itemClass
     */

    /**
     * @param {string|undefined} Tag
     * @param {string|undefined} ItemClass
     * @param {forEachCallback} func
     * @param {*} [thisObj]
     * @private
     */
    _ForEachItemRecord(Tag, ItemClass, func, thisObj) {
        var types = ItemClass == undefined ? Object.keys(this._state.Inventory) : [ItemClass];
        types.forEach(function(type) {
            if (!this._state.Inventory.hasOwnProperty(type)) return;
            if (Tag != undefined) {
                if (this._state.Inventory[type].hasOwnProperty(Tag)) {
                    func.call(thisObj, this._state.Inventory[type][Tag], Tag, type);
                }
            } else {
                for (var n in this._state.Inventory[type]) {
                    if (!this._state.Inventory[type].hasOwnProperty(n)) continue;
                    func.call(thisObj, this._state.Inventory[type][n], n, type);
                }
            }
        }, this);
    }

    /**
     *
     * @param {string} ItemClass
     * @param {string} Tag
     * @param {number} Charges
     * @param {string} [Id]
     */
    _ensureWrapObjectExists(ItemClass, Tag, Charges, Id){
        if (Id == undefined) Id = App.Item.MakeId(ItemClass, Tag);
        if (!this._items.hasOwnProperty(Id)) {
            this._items[Id] = App.Item.Factory(ItemClass, Tag, this, 0); // charges is stored already, hence '0' to prevent stack overflowing
        }
        return this._items[Id];
    }

    /**
     * @returns {App.Item[]}
     */
    filter(func, thisObj) {
        var res = [];
        this._ForEachItemRecord(undefined, undefined, function(ch, nm, cl){
            var itemId = App.Item.MakeId(cl, nm);
            var itemWrapObj = this._ensureWrapObjectExists(cl, nm, ch, itemId);
            if (func.call(thisObj, itemWrapObj) == true) res.push(itemWrapObj);
        }, this);
        return res;
    }

    /**
     * @param {string} ItemClass
     * @param {string} Tag
     * @returns {number}
     */
    Charges(ItemClass, Tag) {
        var res = 0;
        this._ForEachItemRecord(Tag, ItemClass, function(n) { res += n;});
        return res;
    }

    /**
     *
     * @param {string} ItemClass
     * @param {string} Tag
     * @param {number} Count
     * @returns {number}
     */
    SetCharges(ItemClass, Tag, Count) {
        var cl = (ItemClass == undefined) ? this._FindItemClass(Tag) : ItemClass;
        var clamped = Math.clamp(Math.floor(Count), 0, this._MAX_ITEM_CHARGES);
        if (clamped == 0) {
            if (this._state.Inventory.hasOwnProperty(cl) && this._state.Inventory[cl].hasOwnProperty(Tag)) {
                delete this._state.Inventory[cl][Tag];
                delete this._items[App.Item.MakeId(cl, Tag)];
            }
        } else {
            if (!this._state.Inventory.hasOwnProperty(cl)) this._state.Inventory[cl] = {};
            this._state.Inventory[cl][Tag] = clamped;
            this._ensureWrapObjectExists(ItemClass, Tag, clamped);
        }
        return clamped;
    }

    /**
     * Adds (or removes) charges to a given item. If item is not in the inventory and Amount > 0, item record is created.
     * If Amount < 0, resulting number of charges does not go below zero.
     * @param {string} Tag
     * @param {number} Amount
     * @param {string} ItemClass
     * @returns {number} new number of charges
     */
    AddCharges(ItemClass, Tag, Amount){
        var cl = (ItemClass == undefined) ? this._FindItemClass(Tag) : ItemClass;
        if (cl == undefined) throw Error("No item tagged '" + Tag + "'");
        if (!this._state.Inventory.hasOwnProperty(cl)) this._state.Inventory[cl] = {};
        if (!this._state.Inventory[cl].hasOwnProperty(Tag)) {
            this._state.Inventory[cl][Tag] = 0;
        }
        Amount = Amount == 0 ? App.Item.GetCharges(cl, Tag) : Amount;
        return this.SetCharges(cl,Tag, this._state.Inventory[cl][Tag] + Amount);
    }

    /**
     * @param {string} ItemClass
     * @param {string} Tag
     * @param {number} Charges
     * @returns {App.Item}
     */
    AddItem(ItemClass, Tag, Charges) {
        this.AddCharges(ItemClass, Tag, Charges == undefined ? 1 : Charges);
        return this._items[App.Item.MakeId(ItemClass, Tag)];
    }

    /**
     * @param {string} Id
     */
    RemoveItem(Id) {
        var n = App.Item.SplitId(Id);
        this.SetCharges(n.Category, n.Tag, 0);
    }

    /**
    * Attempt to pick a reel from inventory by Id and then equip it to a slot. It will remove any reel
    * equipped in that slot and place it back in the inventory.
    * @param {string} toEquipID
    * @param {string} reelSlot
    */
    EquipReel(toEquipID, reelSlot ) {
        var nm = App.Item.SplitId(toEquipID);
        this.AddCharges(nm.Category, nm.Tag, -1);

        if (this._state.Slots[reelSlot] != null) {
            this.AddCharges("REEL", this._state.Slots[reelSlot], 1);
        }

        this._state.Slots[reelSlot] = nm.Tag;
        this._reelInSlots[reelSlot] = App.Item.Factory(nm.Category, nm.Tag, this);
    }

    /**
     * Remove an equipped reel and place it in the inventory.
     * @param {string} slotID
     */
    RemoveReel(slotID) {
        if ( (typeof this._state.Slots[slotID] !== 'undefined') && (this._state.Slots[slotID] != null)) {
            this.AddCharges("REEL", this._state.Slots[slotID], 1);
            this._state.Slots[slotID] = null;
            this._reelInSlots[slotID] = null;
        }
    }

    /**
    * Turn the equipped reels into an array to iterate/read.
    * @returns {Array.<App.Items.Reel>}
    */
    EquippedReelItems() {
       var arr = Object.values(this._reelInSlots).filter(function(o) { return (typeof o !== 'undefined') && (o != null); });
       return (typeof arr === 'undefined') ? [ ] : arr;
    }

    /**
     * @returns {object}
     */
    ReelSlots() {
        return this._reelInSlots;
    }

    /**
     * Adds item to the set of favorites
     * @param {string} Id
     */
    AddFavorite(Id) {
        this._state.InventoryFavorites.add(Id);
    }

    /**
     * Removes item from the favorites set
     * @param {string} Id
     */
    DeleteFavorite(Id) {
        this._state.InventoryFavorites.delete(Id);
    }

    /**
     * Tests whether the item is in the favorites set
     * @param {string} Id
     * @returns {boolean}
     */
    IsFavorite(Id) {
        return this._state.InventoryFavorites.has(Id);
    }

};

/**
 * @Class ClothingManager
 */
App.Entity.ClothingManager = class ClothingManager {

    /**
     * @returns {App.Entity.PlayerState}
     */
    get _state() {
        return State.variables[this._stateObjName];
    }

    /**
     * @returns {string[]}
     */
    get _wardrobe() {
        return this._state.Wardrobe;
    }

     /**
     * @returns {Object.<string, {ID:string, Locked:boolean}|number>}
     */
    get _equipment() {
        return this._state.Equipment;
    }

    /**
     * Creates object for tracking equipment state
     * @param {string} Id
     * @param {boolean} [isLocked]
     */
    static EquipmentRecord(Id, isLocked) {
        return {ID: Id, Locked: isLocked == undefined ? false : isLocked};
    }
    /**
     *
     * @param {string} stateObjName
     */
    constructor(stateObjName) {
        this._stateObjName = stateObjName;

        /** @type {App.Items.Clothing[]} */
        this._wardrobeItems = [];
        for (var i = 0; i < this._wardrobe.length; ++i) {
            // wardrobe lists item ids
            var t = App.Item.SplitId(this._wardrobe[i]);
            this._ensureWrapObjectExists(t.Tag);
        }

        /** @type {Object.<string, App.Items.Clothing|number>} */
        this._equipedItems = {};
        for (var prop in this._equipment) {
            if (!this._equipment.hasOwnProperty(prop)) continue;
            if (this._equipment[prop] == 0) {this._equipedItems[prop] = 0; continue; }
            var n = App.Item.SplitId(this._equipment[prop].ID);
            this._equipedItems[prop] = App.Item.Factory(n.Category, n.Tag, this);
        }
    }

    /**
     * @param {string} Tag
     * @param {string=} Id
     * @returns {App.Items.Clothing}
     * @private
     */
    _ensureWrapObjectExists(Tag, Id){
        if (Id == undefined) Id = App.Item.MakeId("CLOTHES", Tag);
        for (var i = 0; i < this._wardrobeItems.length; ++i) {
            if (this._wardrobeItems[i].Id == Id) return this._wardrobeItems[i];
        }
        this._wardrobeItems.push(App.Item.Factory("CLOTHES", Tag, this));
        return this._wardrobeItems[this._wardrobeItems.length - 1];
    }

    /**
     * Finds slot in which item with the given Id is worn
     * @param {string} Id
     * @returns {?string} slot name or null
     * @private
     */
    _findWornSlot(Id) {
        for (var prop in this._equipedItems) {
            if (!this._equipedItems.hasOwnProperty(prop) || this._equipedItems[prop] == 0) continue;
            if (this._equipedItems[prop].Id == Id) return prop;
        }
        return null;
    }

    /**
     * Returns true an item with the given Id is worn in the given slot. If slot param is omitted,
     * every slot is checked.
     * @param {string} Id
     * @param {string} [Slot]
     * @returns {boolean}
     */
    IsWorn(Id, Slot) {
        if (Slot == undefined) return this._findWornSlot(Id) != null;
        return (this._equipment.hasOwnProperty(Slot) &&
            this._equipment[Slot] !== 0 &&
            this._equipment[Slot].ID == Id);
    }

    /**
     * Is item in the named slot is locked?
     * @param {string} Slot
     * @returns {boolean} True is there is an item in the slot and it's locked, false otherwise
     */
    IsLocked(Slot) {
        return this._equipment.hasOwnProperty(Slot) &&
            this._equipment[Slot] !== 0 &&
            this._equipment[Slot].Locked;
    }

    /**
     * Wear item and optionally set its 'locked' state.
     * @param {string} Id
     * @param {boolean} [Lock] lock or unlock item. Leaves locked state as is if the parameter is omitted.
     */
    Wear(Id, Lock) {
        var slot = this._findWornSlot(Id);
        if (slot === null) { // currently the item is not worn
            for (var i = 0; i < this._wardrobeItems.length; ++i) {
                if (this._wardrobeItems[i].Id != Id) continue;
                var itm = this._wardrobeItems[i];
                slot = itm.Slot;

                var slotsToUndress = [];
                if (this._equipedItems[slot] != 0) slotsToUndress.push(slot);
                // handle restriction by removing items from the restricted slots
                for (var j = 0; j < itm.Restrict.length; ++j) {
                    if ( (this._equipedItems[itm.Restrict[j]] != 0) && ( !slotsToUndress.contains(itm.Restrict[j]))) slotsToUndress.push(itm.Restrict[j]);
                }
                for (j = 0; j < slotsToUndress.length; ++j) {
                    // move worn item into the wardrobe
                    var sl = slotsToUndress[j];
                    this._wardrobeItems.push(this._equipedItems[sl]);
                    this._wardrobe.push(this._equipedItems[sl].Id);
                    this._equipedItems[sl] = 0;
                    this._equipment[sl] = 0;
                }
                this._equipedItems[slot] = itm;
                this._wardrobeItems.splice(i, 1);
                this._equipment[slot] = ClothingManager.EquipmentRecord(itm.Id, itm.IsLocked());
                this._wardrobe.splice(i, 1);
                break;
            }
        }
        if (Lock != undefined) this._equipment[slot].Locked = Lock;
    }

    /**
     *
     * @param {string} Id
     */
    TakeOff(Id) {
        for (var prop in this._equipedItems) {
            if (!this._equipedItems.hasOwnProperty(prop) || this._equipedItems[prop] == 0 ||
                this._equipedItems[prop].Id != Id) continue;
            var itm = this._equipedItems[prop];
            this._equipedItems[prop] = 0;
            this._equipment[prop] = 0;
            this._wardrobeItems.push(itm);
            this._wardrobe.push(itm.Id); // push(Id) ?
            break;
        }
    }

    /**
     *
     * @param {string} Name
     * @param {boolean} [Wear]
     * @returns {App.Items.Clothing}
     */
    AddItem(Name, Wear) {
        var item = App.Item.Factory("CLOTHES", Name, this);
        this._wardrobe.push(item.Id);
        this._wardrobeItems.push(item);
        if (Wear == true) {
            this.Wear(item.Id);
        }
        return item;
    }

    /**
     * @return {App.Items.Clothing[]}
     */
    get Wardrobe() {
        return this._wardrobeItems;
    }

    /**
     * @return {Object.<string, App.Items.Clothing|number>}
     */
    get Equipment() {
        return this._equipedItems;
    }
};

//TODO: Contemplating redoing this as an ECMA 5.1 compliant implementation.
App.Entity.Player = /** @class Player @type {Player} */ class Player {
    /**
     * @returns {App.Entity.PlayerState}
     */
    get _state() {
        return State.variables.PlayerState;
    }

    Init() {
        this._state.OriginalName = window.App.Data.Names["Male"][Math.floor(Math.random() * window.App.Data.Names["Male"].length)];
        this._state.SlaveName = window.App.Data.Names["Sissy"][Math.floor(Math.random() * window.App.Data.Names["Sissy"].length)];
        var GfName = window.App.Data.Names["Female"][Math.floor(Math.random() * window.App.Data.Names["Female"].length)];

        while (GfName == this._state.SlaveName) {
            GfName = window.App.Data.Names["Female"][Math.floor(Math.random() * window.App.Data.Names["Female"].length)];
        }

		this._state.GirlfriendName = GfName;

		this.SetStartingStats("STAT");
		this.SetStartingStats("BODY");
		this.SetStartingStats("SKILL");

		this._state.Inventory = {
			"COSMETICS": {
                "hair accessories": 10,
                "hair products": 10,
                "basic makeup": 10
            },
            "REEL" : {
                "COMMON_WHORE": 2,
                "COMMON_WILDCARD": 1
            }
        };

        // TODO replace with App.Data.Clothes lookup
        function makeEquipRecord(Name) {
            var tmp = App.Data.Clothes[Name];
            return App.Entity.ClothingManager.EquipmentRecord(
                App.Item.MakeId("CLOTHES", Name), tmp.hasOwnProperty("Locked") ? tmp.Locked : false);
        }

		this._state.Equipment = {
			"Wig":              makeEquipRecord("cheap wig"),
			"Hat":              0,
			"Neck":             makeEquipRecord("collar"),
			"Nipples":          0,
			"Bra":              makeEquipRecord("chemise"),
			"Corset":           0,
			"Panty":            makeEquipRecord("cotton bloomers"),
			"Stockings":        makeEquipRecord("cotton stockings"),
			"Shirt":            0,
			"Pants":            0,
			"Dress":            makeEquipRecord("cotton dress"),
			"Costume":          0,
			"Shoes":            makeEquipRecord("worn boots"),
			"Butt":             0,
			"Penis":            makeEquipRecord("chastity cage"),
			"Weapon":           0
		};

		this._state.NPCS = { };

		this._state.StoreInventory = {
			"GALLEY":           { "LAST_STOCKED" : 0, "INVENTORY" : [ ], "RARE" : [ ]},
			"CARGO":            { "LAST_STOCKED" : 0, "INVENTORY" : [ ], "RARE" : [ ]},
			"ISLATAVERN":       { "LAST_STOCKED" : 0, "INVENTORY" : [ ], "RARE" : [ ]},
			"ISLASTORE":        { "LAST_STOCKED" : 0, "INVENTORY" : [ ], "RARE" : [ ]},
			"SMUGGLERS":        { "LAST_STOCKED" : 0, "INVENTORY" : [ ], "RARE" : [ ]},
			"PEACOCK":          { "LAST_STOCKED" : 0, "INVENTORY" : [ ], "RARE" : [ ]},
			"GOLDEN_GOODS":     { "LAST_STOCKED" : 0, "INVENTORY" : [ ], "RARE" : [ ]},
			"LUSTY_LASS":       { "LAST_STOCKED" : 0, "INVENTORY" : [ ], "RARE" : [ ]},
			"SAUCY_SLATTERN":   { "LAST_STOCKED" : 0, "INVENTORY" : [ ], "RARE" : [ ]},
			"YVONNE_STORE":     { "LAST_STOCKED" : 0, "INVENTORY" : [ ], "RARE" : [ ]},
			"MARKET_STORE":     { "LAST_STOCKED" : 0, "INVENTORY" : [ ], "RARE" : [ ]},
			"BAZAAR_STORE":     { "LAST_STOCKED" : 0, "INVENTORY" : [ ], "RARE" : [ ]},
			"Emily":            { "LAST_STOCKED" : 0, "INVENTORY" : [ ], "RARE" : [ ]},
			"Bradshaw":         { "LAST_STOCKED" : 0, "INVENTORY" : [ ], "RARE" : [ ]},
			"BarnabyLong":      { "LAST_STOCKED" : 0, "INVENTORY" : [ ], "RARE" : [ ]},
			"MeghanLong":       { "LAST_STOCKED" : 0, "INVENTORY" : [ ], "RARE" : [ ]},
			"Isabella":         { "LAST_STOCKED" : 0, "INVENTORY" : [ ], "RARE" : [ ]},
			"Fineas":           { "LAST_STOCKED" : 0, "INVENTORY" : [ ], "RARE" : [ ]}
        };
	}

    /**
     * Previously we stored a dictionary of NPC objects. Now we just store some vital information and make new ones as needed.
     * @param npcTag {string}
     * @returns {App.Entity.NPC}
     */
    GetNPC(npcTag ){
        var data = App.Data.NPCS[npcTag];
        if (!this._state.NPCS.hasOwnProperty(npcTag)) {
            this._state.NPCS[npcTag] = { QuestFlags: { }, Mood: data["Mood"], Lust: data["Lust"] };
            return new App.Entity.NPC( data, this._state.NPCS[npcTag]);
        }
        return new App.Entity.NPC(data, this._state.NPCS[npcTag]);
    }

    /**
     * Helper function. Sets the starting statistics for a player from the config objects.
     * @param Type
     */
    SetStartingStats(Type) {
        var Prop;
        var ConfigOb;

        ConfigOb = this.GetStatConfig(Type);

        for (Prop in ConfigOb) {
            if(!ConfigOb.hasOwnProperty(Prop)) continue;
            if (Type == "BODY") this.AdjustBody(Prop, ConfigOb[Prop]["START"]);
            if (Type == "SKILL") this.AdjustSkill(Prop, ConfigOb[Prop]["START"]);
            if (Type == "STAT") this.AdjustStat(Prop, ConfigOb[Prop]["START"]);
        }
    }

    /**
     * Helping function to get the starting value of a statistic.
     * @param {string} Type
     * @param {string} Stat
     * @returns {number}
     */
     GetStartStat(Type, Stat) {
        return this.GetStatConfig(Type)[Stat]["START"];
    }

    /**
     * With Icon = true then return string time with Icon.
     * With Icon = false return numerical time of day.
     * @param {boolean} Icon
     * @returns {*}
     */
    GetPhase (Icon) {
        if (typeof Icon === 'undefined') Icon = false;
        if (this._state.Phase == 0) return Icon ? "morning @@color:yellow;&#9788;@@" : "morning";
        if (this._state.Phase == 1) return Icon ? "afternoon @@color:orange;&#9728;@@" : "afternoon";
        if (this._state.Phase == 2) return Icon ? "evening @@color:azure;&#9734;@@" : "evening";
        if (this._state.Phase == 3) return Icon ? "night @@color:cornflowerblue;&#9789;@@" : "night";
        if (this._state.Phase == 4) return Icon ? "late night @@color:DeepPink;&#9789;@@" : "late night";
        return this._state.Phase;
    }

    /**
     * Returns the phase icon for the current phase.
     * @param {number} Arg
     * @returns {string}
     */
     static GetPhaseIcon(Arg) {
        if (Arg == 0) return "@@color:yellow;&#9788;@@";
        if (Arg == 1) return "@@color:orange;&#9728;@@";
        if (Arg == 2) return "@@color:azure;&#9734;@@";
        if (Arg == 3) return "@@color:cornflowerblue;&#9789;@@";
        if (Arg == 4) return "@@color:DeepPink;&#9789;@@";
        return "@@color:DeepPink;&#9789;@@";
    }

    /**
     * Performs a skill roll.
     * @param {string} SkillName - Skill to check.
     * @param {number} Difficulty - Test difficulty.
     * @param {boolean} [Scaling] - Return value is always the XpMod and never 0.
     * @returns {number} - result of check.
     */
    _SkillRoll (SkillName, Difficulty, Scaling) {
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

        if (this._state.debugMode) console.log("SkillRoll(" + SkillName + "," + Difficulty + "):  Target = " + Target + ", DiceRoll = " + DiceRoll + " XPMod="+XpMod+"\n");

        if (DiceRoll >= Target) {
            this._state.GameStats.Skills[SkillName].Success += 1;
        } else {
            this._state.GameStats.Skills[SkillName].Failure += 1;
        }

        if (Scaling == true) return XpMod;
        if (DiceRoll >= Target ) return 1;
        return 0;
    }

    /**
     *
     * @param {string} Type
     * @param {string} Name
     * @returns {number}
     * @private
     */
    _RollBonus(Type, Name) {
        var bonus = 0;

        if (this._state.VoodooEffects.hasOwnProperty("PIRATES_PROWESS") && Type == "SKILL") bonus += this._state.VoodooEffects["PIRATES_PROWESS"];
        if (this._state.difficultySetting == 1) bonus += 5;
        if (this._state.difficultySetting == 2) bonus += 10;
        bonus += this.GetWornSkillBonus(Name);

        return bonus;
    }

    /**
     * Performs a skill roll with a value amount which is modified when returned. Only works on skills
     * and will auto generate and apply XP to characters.
     * @param {string} SkillName
     * @param {number} Difficulty
     * @param {number} Amount
     * @param {boolean} [Scaling]
     * @returns {number}
     */
    SkillRoll(SkillName, Difficulty, Amount, Scaling)
    {
        var Mod = this._SkillRoll(SkillName, Difficulty, Scaling);
        var ret = Math.ceil(Amount * Mod);
        if (this._state.debugMode) console.log("SkillRoll: Mod="+Mod+",Amount="+Amount+",Ret="+ret+"\n");
        return Math.ceil(Amount * Mod);
    }

    /**
     * Like a skill roll, but doesn't grant xp. Can roll against other stats as well.
     * @param {string} Type
     * @param {string} Name
     * @param {number} Difficulty
     * @param {number} Amount
     * @param {boolean} Scaling
     * @returns {number}
     */
    StatRoll(Type, Name, Difficulty, Amount, Scaling)
    {
        Scaling = Scaling || false;
        var Target      = this.CalculateSkillTarget(Name, Difficulty, Type);
        var DiceRoll    = ( Math.floor(Math.random() * 100) + 1);

        if (Type == "SKILL") DiceRoll += Math.max(0, Math.min(this.GetSynergyBonus(Name), 100)); // Cap 100
        DiceRoll        += this._RollBonus(Type, Name);

        var Mod         = Math.max(0.10, Math.min((DiceRoll  / Target), 2.0)); // 0.1 - 2.0

        if(this._state.debugMode) console.log("StatRoll(" + Name + "," + Difficulty + "):  Target = " + Target + ", DiceRoll = " + DiceRoll + " Mod="+Mod+"\n");

        if (Scaling == true) return (Amount * Mod);
        if (DiceRoll >= Target) return 1;
        return 0;

    }
    /**
     * Calculate the target of the 1-100 dice roll for a skill check. Always a 5% chance of success/failure.
     * @param {string} SkillName
     * @param {number} Difficulty
     * @param {string} [Alternate]
     * @returns {number}
     */
    CalculateSkillTarget(SkillName, Difficulty, Alternate) {
        Alternate = Alternate || "SKILL";

        var SkillVal = this.GetStat(Alternate, SkillName);
        return (100 - Math.max(5, Math.min((50 + (SkillVal - Difficulty)), 95)));
    }

    /**
     * Checks the SkillSynergy dictionary and adds any skill bonuses to dice rolls on
     * skill checks. For example, TitFucking gets a bonus for the size of the Players Bust score.
     * @param {string} SkillName
     * @returns {number}
     */
    GetSynergyBonus (SkillName) {
        if (!App.Data.Lists["SkillSynergy"].hasOwnProperty(SkillName)) return 0;
        var Bonus = 0;
        var Synergy = App.Data.Lists["SkillSynergy"][SkillName];
        for (var i = 0; i < Synergy.length; i++) {
            Bonus += Math.ceil(this.GetStatPercent(Synergy[i]["TYPE"], Synergy[i]["NAME"]) * Synergy[i]["BONUS"]);
        }
        return Bonus;
    }

    /**
     * Restyle hair.
     */
    ReStyle()
    {
        if (this.CanReStyle() == false) return;
        var lm = this._state.LastUsedMakeup;
        var Makeup = App.Data.Lists["MakeupStyles"].filter(function(Item) { return Item["SHORT"] == lm; })[0]["NAME"];
        var lh = this._state.LastUsedHair;
        var Hair = App.Data.Lists["HairStyles"].filter(function(Item) { return Item["SHORT"] == lh; })[0]["NAME"];

        if (this.GetEquipmentInSlot("Wig") != 0) {
            this.DoStyling(this.GetEquipmentInSlot("Wig").Id, Makeup);
        } else {
            this.DoStyling(Hair, Makeup);
        }

        this.AdjustStat("Energy", -1);
    }

    /**
     * Simple routine to check if the player can reapply their style.
     * @returns {boolean}
     */
    CanReStyle()
    {
        if(this._state.CoreStats["Energy"] < 1) return false;
        if (this._state.LastUsedMakeup == this._state.MakeupStyle) return false;
        var m1 = this.Inventory.Charges('COSMETICS', 'basic makeup');
        var m2 = this.Inventory.Charges('COSMETICS', 'expensive makeup');
        var h1 = this.Inventory.Charges('COSMETICS', 'hair accessories');
        var h2 = this.Inventory.Charges('COSMETICS', 'hair products');
        var lm = this._state.LastUsedMakeup;
        var Makeup = window.App.Data.Lists["MakeupStyles"].filter(function(Item) { return Item["SHORT"] == lm; })[0];
        if ( (m1 < Makeup["RESOURCE1"]) || (m2 < Makeup["RESOURCE2"])) return false;

        if (this.GetEquipmentInSlot("Wig") !== 0) return true;
        var lh = this._state.LastUsedHair;
        var Hair = window.App.Data.Lists["HairStyles"].filter(function(Item) { return Item["SHORT"] == lh; })[0];
        return ( (h1 >= Hair["RESOURCE1"]) && (h2 >= Hair["RESOURCE2"]));
    }

    /** TODO: THIS ENTIRE AREA IS GARBAGE. REFACTOR IT AND REDO MAKEUP AND HAIRSTYLE STUFF **/

    /**
     * Style hair and makeup.
     * @param {string} HairID
     * @param {string} MakeupID
     */
    DoStyling(HairID, MakeupID )
    {

        var obj = this.GetItemById(HairID);
        if (typeof obj !== 'undefined') { // We passed an Item Id and found an item.
            if ((this.GetEquipmentInSlot("Wig") == 0) || (this.GetEquipmentInSlot("Wig").Id != HairID))
                this.Wear( this.WardrobeItem(HairID));
        } else {
            if (this.GetEquipmentInSlot("Wig") != 0) this.Remove(this.GetEquipmentInSlot("Wig"));

            var Hair = App.Data.Lists["HairStyles"].filter(function(Item) { return Item["NAME"] == HairID; })[0];

            if ( this.GetItemCharges("hair tool") >= Hair["RESOURCE1"] && this.GetItemCharges("hair treatment") >= Hair["RESOURCE2"]) {
                this._state.HairStyle = Hair["SHORT"];
                this._state.HairBonus = this.SkillRoll("Styling", Hair["DIFFICULTY"], Hair["STYLE"], true);
                this._state.LastUsedHair = Hair["SHORT"];
                this.UseItemCharges("hair tool", Hair["RESOURCE1"]);
                this.UseItemCharges("hair treatment", Hair["RESOURCE2"]);
            }
        }

        var Makeup = window.App.Data.Lists["MakeupStyles"].filter(function(Item) { return Item["NAME"] == MakeupID; })[0];

        if ( this.GetItemCharges("basic makeup") >= Makeup["RESOURCE1"] && this.GetItemCharges("expensive makeup") >= Makeup["RESOURCE2"]) {
            this._state.MakeupStyle = Makeup["SHORT"];
            this._state.MakeupBonus = this.SkillRoll("Styling", Makeup["DIFFICULTY"], Makeup["STYLE"], true);
            this._state.LastUsedMakeup = Makeup["SHORT"];
            this.UseItemCharges("basic makeup", Makeup["RESOURCE1"]);
            this.UseItemCharges("expensive makeup", Makeup["RESOURCE2"]);
        }
    }

    /**
     * Calculates the Players "Beauty" based on other statistics.
     * @returns {number}
     */
    Beauty () {
        var cBeauty = Math.round((this.GetStat("BODY", "Face") * 0.4) + (this.Figure() * 0.3 ) + (this.GetStat("STAT", "Fitness") * 0.3));
        return Math.max(1, Math.min(cBeauty, 100));
    }

    /**
     * Fetish rating is derived from the enlarged (or minimized) size of the Players body parts.
     * Generally however, bigger (what) means more points. Used to calculate whoring pay and some
     * other activities.
     * @returns {number}
     */
    Fetish() {
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

        // Penis and Balls, 10 each. (10 pts)
        if ((this.GetStatPercent("BODY", "Penis") <= 10) && (this.GetStatPercent("BODY", "Balls") <= 10)) score += 10; // tiny genitals!
        if ((this.GetStatPercent("BODY", "Penis") >= 90) && (this.GetStatPercent("BODY", "Balls") >= 90)) score += 10; // big genitals

        return Math.max(0, Math.min(Math.round((( score / 75 ) * 100)), 100)); // clamp 1 - 100 rating
    }

    /**
     * Derived statistic that reports "style" made up out of hair, makeup and clothing.
     * @returns {number}
     */
    Style () {
        var cStyle = Math.round(( this.HairRating() * 0.25 ) + ( this.MakeupRating() * 0.25 ) + (this.ClothesRating() * 0.5));
        return Math.max(0, Math.min(cStyle, 100));
    }

    /**
     * shim function that returns the "hair rating" of the player, but checks first if they are wearing
     * a wig and then reports that number instead.
     * @returns {number}
     */
    HairRating () {
        if (this.GetEquipmentInSlot("Wig") != 0) return Math.max(0, Math.min(this.GetEquipmentInSlot("Wig").HairBonus(), 100));
        return Math.max(0, Math.min(this._state.HairBonus, 100));
    }

    /**
     * @returns {string}
     */
    GetHairStyle () {
        if (this.GetEquipmentInSlot("Wig") != 0) return this.GetEquipmentInSlot("Wig").HairStyle();
        return this._state.HairStyle;
    }

    /**
     * @returns {string}
     */
    GetHairColor () {
        if (this.GetEquipmentInSlot("Wig") != 0) return this.GetEquipmentInSlot("Wig").HairColor();
        return this._state.HairColor;
    }

    /**
     * The makeup rating of the player.
     * @returns {number}
     */
    MakeupRating () {
        return Math.max(0, Math.min(this._state.MakeupBonus, 100));
    }

    /**
     * Derived statistic (face + makeup). Bonus payout for hand jobs if you have a good face.
     * @returns {number}
     */
    FaceRating () {
        return Math.ceil(Math.max(0, Math.min((( this.MakeupRating() + this.GetStat("BODY", "Face")) / 2), 100)));
    }

    /**
     * Iterates through players worn items and sums .Style property.
     * @returns {number}
     */
    ClothesRating () {
        var cStyle = 0;

        for (var prop in this.Clothing.Equipment) {
            if (!this.Clothing.Equipment.hasOwnProperty(prop)) continue;
            if (this.Clothing.Equipment[prop] == 0) continue;
            cStyle += this.Clothing.Equipment[prop].Style;
        }
        return Math.max(1, Math.min(Math.round(((cStyle / 100 ) * 100)), 100)); // 1 - 100 rating
    }

    /**
     *
     * @param {string} Spec
     * @returns {number}
     */
    GetStyleSpecRating(Spec){
        var Rating = 0;

        for (var prop in this.Clothing.Equipment)
        {
            if (!this.Clothing.Equipment.hasOwnProperty(prop)) continue;
            if (this.Clothing.Equipment[prop] == 0) continue;

            Rating += this.Clothing.Equipment[prop].CategoryBonus(Spec);
        }
        return Rating;
    }

    /**
     * Derived statistic, lends itself to Beauty. WaistRating, BustRating, HipsRating and AssRating contribute.
     * @returns {number}
     */
    Figure () {
        var tFig = Math.round((this.WaistRating() + this.BustRating() + this.HipsRating() + this.AssRating()) / 4);
        return Math.max(1, Math.min(tFig, 100)); // Normalize between 1 - 100
    }

    /**
     * Calculates "golden ratio" for waist @ Player's height and then returns a score relative their current waist.
     * @returns {number}
     */
    WaistRating () {
        var GoldenWaist = Math.round((window.App.PR.StatToCM(this, "Height") * 0.375)); // 54cm to 78cm
        return Math.round(((GoldenWaist / window.App.PR.WaistInCM(this)) / 1.8) * 100);
    }

    /**
     * Calculates "golden ratio" for bust @ Player's height and then returns a score relative their current bust.
     * @returns {number}
     */
    BustRating () {
        var GoldenBust = (Math.round((window.App.PR.StatToCM(this, "Height") * 0.375)) * 1.5 );
        return Math.round(((window.App.PR.BustCCtoCM(this) / GoldenBust) / 1.6) * 100);
    }

    /**
     * Calculates "golden ratio" for hips @ Player's height and then returns a score relative their current bust.
     * @returns {number}
     */
    HipsRating () {
        var GoldenHips = (Math.round((App.PR.StatToCM(this, "Height") * 0.375)) * 1.5 );
        return Math.round(((App.PR.HipsInCM(this) / GoldenHips) / 1.6) * 100);
    }

    /**
     * Combination of Ass + Hips.
     * @returns {number}
     */
    AssRating () {
        return Math.round((this.GetStatPercent("BODY", "Ass") + this.GetStatPercent("BODY", "Hips")) / 2);
    }

    /**
     * For now just the percentage of the lips 1-100.
     * @returns {number}
     */
    LipsRating () {
        return this.GetStatPercent("BODY", "Lips");
    }

    /**
     * Returns the config settings for a statistic type.
     * @param {string} Type - STAT | SKILL | BODY
     * @returns {object}
     */
    GetStatConfig (Type) {
        if (Type == "STAT") return App.Data.Lists.StatConfig;
        if (Type == "SKILL") return App.Data.Lists.SkillConfig;
        if (Type == "BODY") return App.Data.Lists.BodyConfig;
    }

    /**
     * Returns object that holds stat values
     * @param {string} Type
     * @returns {object}
     */
    GetStatObject(Type) {
        if (Type == "STAT") return this._state.CoreStats;
        if (Type == "SKILL") return this._state.Skills;
        if (Type == "BODY") return this._state.BodyStats;
    }

    /**
     * Returns object that holds stat XP values
     * @param {string} Type
     * @returns {object}
     */
    GetStatXPObject(Type) {
        if (Type == "STAT") return this._state.CoreStatsXP;
        if (Type == "SKILL") return this._state.SkillsXP;
        if (Type == "BODY") return this._state.BodyXP;
    }

    /**
     * Return a statistic value (raw)
     * @param {string} Type
     * @param {string} StatName
     * @returns {number}
     */
    GetStat (Type, StatName) {
        var statObj = this.GetStatObject(Type);
        if (!statObj.hasOwnProperty(StatName)) {
            var st = this.GetStartStat(Type, StatName);
            if (st != undefined) {
                statObj[StatName] = st;
            }
        }
        return statObj[StatName];
    }

    /**
     * Returns the current XP of a statistic.
     * @param {string} Type
     * @param {string} StatName
     * @returns {number}
     */
    GetStatXP (Type, StatName) {
        var xpObj = this.GetStatXPObject(Type);
        if (!xpObj.hasOwnProperty(StatName)) {
            xpObj[StatName] = 0;
        }
        return xpObj[StatName];
    }

    GetMaxStat (Type, StatName) {
        return this.GetStatConfig(Type)[StatName]["MAX"];
    }
    GetMinStat (Type, StatName) {
        return this.GetStatConfig(Type)[StatName]["MIN"];
    }

    /**
     * @param {string} Type
     * @param {string} StatName
     * @returns {number}
     */
    GetStatPercent (Type, StatName) {
        return Math.floor(((this.GetStat(Type, StatName) - this.GetMinStat(Type, StatName)) / ((this.GetMaxStat(Type, StatName) - this.GetMinStat(Type, StatName)))) * 100);
    }

    GetLeveling (Type, StatName, TargetScore) {
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
    }

    /**
     * @param {string} Type
     * @param {string} StatName
     * @param {number} Amount
     * @returns {number}
     */
    GetCapStat (Type, StatName, Amount) {
        return Math.round((Math.max(this.GetMinStat(Type, StatName), Math.min(Amount, this.GetMaxStat(Type, StatName)))) * 100) / 100;
    }

    AdjustStat (StatName, Amount) {
        if (this._state.debugMode) console.log("AdjustStat: Name="+StatName+", Amount="+Amount);
        this._state.CoreStats[StatName] = this.GetCapStat("STAT", StatName, ( this.GetStat("STAT", StatName) + Amount));
    }

    AdjustBody (StatName, Amount) {
        if (this._state.debugMode) console.log("AdjustBody: Name="+StatName+", Amount="+Amount);
        this._state.BodyStats[StatName] = this.GetCapStat("BODY", StatName, ( this.GetStat('BODY', StatName) + Amount));
    }

    AdjustSkill (StatName, Amount) {
        if (this._state.debugMode) console.log("AdjustSkill: Name="+StatName+", Amount="+Amount);
        this._state.Skills[StatName] = this.GetCapStat("SKILL", StatName, ( this.GetStat('SKILL', StatName) + Amount));
    }

    AdjustXP (Type, StatName, Amount, Limiter) {
        Amount = Math.ceil(Amount); // No floats.
        if (typeof Limiter === 'undefined') Limiter = 0;
        if (this._state.debugMode)
            console.debug("AdjustXP: Type="+Type+",Stat="+StatName+",Amount="+Amount+",Limit="+Limiter);

        if ((Amount > 0) && (this.GetStat(Type, StatName) >= Limiter) && (Limiter != 0)) return;
        if ((Amount < 0) && (this.GetStat(Type, StatName) <= Limiter) && (Limiter != 0)) return;
        if ((Amount > 0) && (this.GetStat(Type, StatName) >= this.GetMaxStat(Type, StatName))) return;
        if ((Amount < 0) && (this.GetStat(Type, StatName) <= this.GetMinStat(Type, StatName))) return;
        if (Math.abs(this.GetStatXP(Type, StatName)) >= 250) Amount = Math.ceil(Amount / 2);
        if (Math.abs(this.GetStatXP(Type, StatName)) >= 500) Amount = Math.ceil(Amount / 4);
        if (Math.abs(this.GetStatXP(Type, StatName)) >= 1000) Amount = Math.ceil(Amount / 10);
        if (Type == "STAT")  this._state.CoreStatsXP[StatName] += Amount;
        if (Type == "SKILL") this._state.SkillsXP[StatName] += Amount;
        if (Type == "BODY")  this._state.BodyXP[StatName] += Amount;
        if (this._state.debugMode)
            console.debug("AdjustXP: Adjusted by "+Amount);
    }

    AdjustStatXP (StatName, Amount, Limiter) {
        return this.AdjustXP("STAT", StatName, Amount, Limiter);
    }
    AdjustBodyXP (StatName, Amount, Limiter) {
        return this.AdjustXP("BODY", StatName, Amount, Limiter);
    }
    AdjustSkillXP (StatName, Amount, Limiter) {
        return this.AdjustXP("SKILL", StatName, Amount, Limiter);
    }

    LevelStat (Type, StatName) {
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
                    this._state.SleepLog.push(this.pBodyChange("WillPower", "Shrink"));
                } else {
                    this._state.SleepLog.push(this.pBodyChange("WillPower", "Grow"));
                }
            }

            if (StatName == "Hormones") {
                if (Step < 0 ) {
                    this._state.SleepLog.push(this.pBodyChange("Hormones", "Shrink"));
                } else {
                    this._state.SleepLog.push(this.pBodyChange("Hormones", "Grow"));
                }
            }
            this.AdjustStat(StatName, Step);
        }

        if (Type == "SKILL") this.AdjustSkill(StatName, Step);
        if (Type == "BODY") {
            this.AdjustBody(StatName, Step);
            if (Step < 0) {
                this._state.SleepLog.push(this.pBodyChange(StatName, "Shrink"));
            } else {
                this._state.SleepLog.push(this.pBodyChange(StatName, "Grow"));
            }
        }
        this.AdjustXP(Type, StatName, Cost);
    }

    LevelStatGroup (Type) {
        var Keys;
        if (Type == "STAT") Keys = Object.keys(this._state.CoreStats);
        if (Type == "SKILL") Keys = Object.keys(this._state.Skills);
        if (Type == "BODY") Keys = Object.keys(this._state.BodyStats);

        for (var i = 0; i < Keys.length; i++) this.LevelStat(Type, Keys[i]);
    }

    AdjustMoney (m) {
        var mi = Math.ceil(m);
        if (mi > 0) {this._state.GameStats.MoneyEarned += mi;}
        this._state.Money = Math.max(0, (this._state.Money + mi));
    }

    RandomAdjustBodyXP (Amount) {
        this.AdjustBodyXP(Object.keys(this._state.BodyStats)[Math.floor(Math.random() * Object.keys(this._state.BodyStats).length)], Amount, 0);
    }

    DoHealing (OvernightFlag) {
        var Heal = 5 + ( (this.GetStat("STAT", "Energy")*2) + (this.GetStat("STAT", "Fitness") / 10));
        Heal = Heal * (( 100 - Math.max(0, Math.min(this.GetStat("STAT", "Toxicity"), 100))) / 100); // Toxicity up to 100 reduces natural healing.

        if (OvernightFlag == 0) Heal = Heal / 2;
        if (OvernightFlag == 1) this.AdjustStat("Energy", ( Math.floor((this.GetStat("STAT", "Nutrition") / 20) + (this.GetStat("STAT", "Fitness") / 20))));

        this.AdjustStat("Health",   Math.ceil(Heal));

        if (OvernightFlag == 1) {
            var PoisonDamage = Math.ceil((this.GetStat("STAT", "Health") * ((Math.max(0, Math.min((this.GetStat("STAT", "Toxicity") - 100), 200)) / 10) * 0.1))); // 0 - .2
            if (PoisonDamage > 0) {
                this.AdjustStat("Health", (PoisonDamage * -0.5));
                this._state.SleepLog.push("@@color:red;&dArr;You feel slightly sick@@... your current " + window.App.PR.ColorizeString(this.GetStatPercent("STAT", "Toxicity"), "Toxicity") +
                    " is probably to blame.");
            }
        }
	}

	BodyEffects() {
        if(this._state.BodyEffects !== undefined) return App.Data.NaturalBodyEffects.concat(this._state.BodyEffects);
        return App.Data.NaturalBodyEffects;
	}

    // Resting and Sleeping functions.
    NextDay () {
        this._state.SleepLog = []; // Null the overnight results text log.

        // Gain 'Knowledge' about worn clothes, log days worn.
        // Apply passive effects on worn items.
        for (var prop in this.Clothing.Equipment) {
            if (!this.Clothing.Equipment.hasOwnProperty(prop)) continue;
            if (this.Clothing.Equipment[prop] == 0) continue;

            if (Math.floor(Math.random() * 100) > 80)
                this.AddHistory('CLOTHING_KNOWLEDGE', this.Clothing.Equipment[prop].Name, 1); // tracking effect knowledge
            this.AddHistory("DAYS_WORN", this.Clothing.Equipment[prop].Name, 1); // tracking just days worn
            this.Clothing.Equipment[prop].ApplyEffects(this);
            var logMsg = this.Clothing.Equipment[prop].LearnKnowledge(this);
            if ((typeof logMsg != 'undefined') && logMsg != "") this._state.SleepLog.push(logMsg);
        }

        this.ApplyEffects(this.BodyEffects());

        this.LevelStatGroup("STAT");
        this.LevelStatGroup("BODY");
        this.LevelStatGroup("SKILL");

        this._state.HairBonus = 0;
        this._state.MakeupBonus = 0;
        this._state.HairStyle = "bed head";
        this._state.MakeupStyle = "plain faced";

        this._state.Day++;
        // What day are we on our current voyage.
        this._state.SailDays = ((this._state.SailDays + 1) >= App.Data.Lists["ShipRoute"].length) ? 0 : (this._state.SailDays + 1);
        this._state.Phase = 0;

        // Decrease voodoo effects
        this.EndHexDuration();
        this.NPCNextDay();

    } // NextDay

    /**
     * Move time counter to next phase of day.
     * @param [Opt] - Number of phases to increment.
     */
    NextPhase (Opt) {
        if (this._state.Phase == 4) return; // Can't advance to next day, only do that when sleeping.
        Opt = Opt || 1;

        for (var i = 0; i < Opt; i++ ) {
            this._state.Phase++;
            this.AdjustStat("Nutrition", -5);
            this.LevelStat("STAT", "Nutrition");
            if (this._state.Phase == 4) break;
        }
    }

    Rest () {
        this._state.SleepLog = [];
        this.NextPhase(1);
        this.DoHealing(0);
        this.AdjustStat("Energy", 1);
        this.LevelStatGroup("SKILL");
    }

    NPCNextDay () {
        for (var prop in this.NPCS) { // NPC mood/desire/quest flags.
            if (!this.NPCS.hasOwnProperty(prop)) continue;
            if (this.NPCS[prop] == 0) continue;
            var npc = this.GetNPC(prop);
            npc.AdjustFeelings();
            npc.ResetFlags();
        }
    }

    /**
     * @returns {*}
     */
    GetShipLocation () {
        var Routes = window.App.Data.Lists["ShipRoute"];
        if (this._state.SailDays >= Routes.length) this._state.SailDays = 0; // Shouldn't happen, but fix it if it does.

        var dict = { "X" : Routes[this._state.SailDays]["X"], "Y" : Routes[this._state.SailDays] };

        switch(Routes[this._state.SailDays]["P"]) {
            case 'IslaHarbor': dict["Passage"] = "IslaHarbor"; dict["Title"] = "Isla Harbor"; break;
            case 'GoldenIsle': dict["Passage"] = "GoldenIsle"; dict["Title"] = "Golden Isle"; break;
            case 'Abamond': dict["Passage"] = "Abamond"; dict["Title"] = "Abamond"; break;
            case 'PortRoyale': dict["Passage"] = "PortRoyale"; dict["Title"] = "Port Royale"; break;
            default: dict["Passage"] = ""; dict["Title"] = "";
        }

        return dict;
    }

    /**
     * @param {number=} n Number of days to look ahead.
     * @returns {boolean}
     */
    IsInPort (n) {
        n = n || 0;
        var Routes = window.App.Data.Lists["ShipRoute"];
        var days = (this._state.SailDays + n >= Routes.length ? 0 : this._state.SailDays + n);
        return (Routes[days]["P"] != "AtSea");
    }

    /**
     *
     * @param {number=} n Days to advance
     * @returns {boolean}
     */
    AdvanceSailDays (n) {
        n = n || 1;
        if ( this.IsInPort(0) == true || this.IsInPort(n) == true ) return false;
        var Routes = window.App.Data.Lists["ShipRoute"];
        this._state.SailDays = (this._state.SailDays >= Routes.length ? n : this._state.SailDays + n);
        return true;
    }

    // Equipment and Inventory Related Functions

    /**
     * Does the character own the item in question
     * @param {*} ItemDictOrType The dictionary entry from the Store
     * @param {string|String} [Name]
     * @returns {boolean}
     */
    OwnsWardrobeItem(ItemDictOrType, Name)
    {
        var Type;
        if (typeof(ItemDictOrType) === "object" && !(ItemDictOrType instanceof String) && typeof(Name) === "undefined") {
            Type = ItemDictOrType["TYPE"];
            Name = ItemDictOrType["TAG"];
        } else {
            if (ItemDictOrType instanceof String) ItemDictOrType = String(ItemDictOrType);
            if (Name instanceof String) Name = String(Name);
            if (typeof (ItemDictOrType) != "string" || typeof (Name) != "string") throw new Error("Invalid arguments");
            Type = ItemDictOrType;
        }

        if (Type != "CLOTHES" && Type != "WEAPON") return false;
        if (this.Clothing.Wardrobe.filter( function(o) { return o.Name == Name; }).length > 0 ) return true;
        var Slot = window.App.Data.Clothes[Name].Slot;
        var EquipmentInSlot = this.Clothing.Equipment[Slot];
        if (EquipmentInSlot == null || EquipmentInSlot == 0) return false;
        return EquipmentInSlot.Name == Name;
    }

    /**
     * @param ItemDict
     * @returns {boolean}
     */
    MaxItemCapacity(ItemDict)
    {
        var o = this.GetItemByName(ItemDict["TAG"]);

        if (o != undefined) {
            if ( o.Charges() >= 100 ) return true;
        }
        return false;
    }

    WardrobeItem (id) {
        return this.Clothing.Wardrobe.filter(function (o) {
            return o.Id == id;
        })[0];
    }

    WardrobeItemsBySlot(Slot) {
        var res = this.Clothing.Wardrobe.filter(function(Item) { return Item.Slot == Slot; });
        res.sort(function(a, b) { return a.Name.localeCompare(b.Name); });
        return res;
    }

    /**
     * @param {string} Slot
     * @returns {string}
     */
    PrintEquipment(Slot)
    {
        if (!this.Clothing.Equipment.hasOwnProperty(Slot)) return "@@color:grey;Nothing@@";
        if (this.Clothing.Equipment[Slot] == 0 ) return "@@color:grey;Nothing@@";
        return this.Clothing.Equipment[Slot].Description;
    }

    /**
     * @param {string} Slot
     * @returns {(App.Items.Clothing|number)}
     */
    GetEquipmentInSlot(Slot) {
        if ( (!this.Clothing.Equipment.hasOwnProperty(Slot)) || (this.Clothing.Equipment[Slot] == 0 )) return 0;
        return this.Clothing.Equipment[Slot];
    }

    /**
     * Search equipped items
     * @param {string} Name
     * @returns {boolean}
     */
    IsEquipped(Name) {
        for (var prop in this.Clothing.Equipment) {
            if (!this.Clothing.Equipment.hasOwnProperty(prop)) continue;
            if (this.Clothing.Equipment[prop] == 0) continue;
            if (this.Clothing.Equipment[prop].Name == Name) return true;
        }
        return false;
    }

    Wear (item, lock) {
        this.Clothing.Wear(item.Id, lock);
    }

    AutoWearCategory (Category) {
        for (var slot in this.Clothing.Equipment) {
            if (!this.Clothing.Equipment.hasOwnProperty(slot)) continue;
            var currentlyWorn = this.Clothing.Equipment[slot];

            if (currentlyWorn != 0 && currentlyWorn.IsLocked()) continue;

            // Get all matching items by Category and Slot.
            var matchingItems = $.grep(this.Clothing.Wardrobe, function(clothing) {
                return clothing.Slot == slot && $.inArray(Category, clothing.Category) >= 0;
            });

            if (matchingItems.length < 1) continue; // Nothing matching

            // Sorting by style descending
            matchingItems.sort(function(a, b) { return b.Style - a.Style; });

            var wear = currentlyWorn == 0 // Nothing being worn, so wear it.
                || $.inArray(Category, currentlyWorn.Category) < 0 // Item in slot is not of the right category, so swap them.
                || currentlyWorn.Style < matchingItems[0].Style; // Item in slot has less style, so swap them.

            if (wear) this.Wear(matchingItems[0]);
        }
    }

    Strip() {
        for (var prop in this.Clothing.Equipment) {
            if (!this.Clothing.Equipment.hasOwnProperty(prop)) continue;
            if (this.Clothing.Equipment[prop] == 0) continue;
            if (this.Clothing.Equipment[prop].IsLocked()) continue;

            this.Clothing.TakeOff(this.Clothing.Equipment[prop].Id);
        }
    }

    /**
     * Tests is any of the named clothes worn in the given slot
     * @param {string[]} Tags
     * @param {string} Slot
     * @returns {boolean} True is any of the items is worn, false otherwise
     */
    IsAnyClothingWorn(Tags, Slot) {
        for (const t of Tags) {
            if (this.Clothing.IsWorn(App.Item.MakeId("CLOTHES", t), Slot)) return true;
        }
        return false;
    }

    Remove (item) {
        if (item == 0) return;
        this.Clothing.TakeOff(item.Id);
    }

    GetItemByName (Name) {
        return this.Inventory.filter(function (o) {
            return o.Tag == Name;
        })[0];
    }

    /**
     *
     * @param {string} Id String of "CATEGORY/NAME" template
     */
    GetItemById (Id) {
        var result;

        var ItemList = this.Inventory.filter(function (o) {return o.Id == Id; }); // Look in items first.

        if (ItemList.length < 1) { // Now check wardrobe
            ItemList = this.Clothing.Wardrobe.filter(function(o) { return o.Id == Id; });
        }

        if (ItemList.length < 1 ) { // Check worn stuff.
            for (var k in this.Clothing.Equipment)
            {
                if (!this.Clothing.Equipment.hasOwnProperty(k)) continue;
                if (this.Clothing.Equipment[k] != 0) {
                    if (this.Clothing.Equipment[k].Id == Id) {
                        result = this.Clothing.Equipment[k];
                        break;
                    }
                }
            }
        }

        if (!result && ItemList.length > 0) result = ItemList[0];
        return result;
    }

    /**
     *
     * @param {string[]} Types
     * @param {boolean} [Sort]
     */
    GetItemByTypes (Types, Sort) {
        var res = this.Inventory.filter(function (o) {
            return Types.indexOf(o.Type) != -1;
        });

        if (Sort != true) return res;

        res.sort(function(a, b) {
            var af = a.IsFavorite();
            if (af != b.IsFavorite()) {return af ? -1 : 1;}
            return a.Name.localeCompare(b.Name);
        });
        return res;
    }

    /**
     * Returns the total number of charges across all items belonging to a certain type.
     * @param {string} Type
     * @returns {number}
     */
    GetItemCharges(Type) {
        var Items = this.Inventory.filter(function (o) { return o.Type == Type; });
        var Count = 0;
        for (var i = 0; i < Items.length; i++) Count += Items[i].Charges();
        return Count;
    }

    /**
     * Returns number of charges for item with the given name and type (if provided) or among all types otherwise.
     * @param {string} Name Item name
     * @param {string} [Type] Item type (category) name
     * @returns Nmmber of charges available or zero.
     */
    ItemCharges(Name, Type) {
        return this.Inventory.Charges(Type, Name);
    }

    /**
     * Attempt to iterate through all items of same type and consume charges from them until Amount has been
     * satisfied. It will delete items if it consumes all their charges.
     * @param {string} Name
     * @param {number} Amount
     */
    UseItemCharges(Type, Amount) {
        if (Amount <= 0) return ;
        var Items = this.Inventory.filter(function (o) { return o.Type == Type; });
        var Count = 0;

        while(Amount > 0 && Count < Items.length) {
            var Item = Items[Count];
            if (Item.Charges() <= 0) {
                Count++;
            } else {
                Item.RemoveCharges(1);
                Amount -= 1;
            }
        }
    }

    DeleteItem(item) {
        this.Inventory.RemoveItem(item.Id);
    }

    /**
     * Create and add an item to the player.
     * @param {string} Category
     * @param {string} Name
     * @param {number} [Count]
     * @param {string} [Opt]
     */
    AddItem(Category, Name, Count, Opt) {
        var Item;
        if (Category == "CLOTHES" || Category == "WEAPON" ) {
            if (this.OwnsWardrobeItem(Category, Name)) return; // No duplicate equipment allowed.
            Item = this.Clothing.AddItem(Name, Opt == "WEAR");
        } else {
            Item = this.Inventory.AddItem(Category, Name, Count);
        }

        return Item;
    }

    /**
     * @param {string} Skill
     * @returns {number}
     */
    GetWornSkillBonus (Skill) {
        var bonus = 0;
        for (var prop in this.Clothing.Equipment) {
            if (!this.Clothing.Equipment.hasOwnProperty(prop)) continue;
            if (this.Clothing.Equipment[prop] == 0) continue;
            var tBonus = this.Clothing.Equipment[prop].GetBonus(Skill);
            if (tBonus > 0 ) {
                bonus += tBonus;
                if (this._state.debugMode == true) console.log("Found skill bonus : "+Skill+" on" + this.Clothing.Equipment[prop].Name);
            }
        }
        return bonus;
    }

    /**
     * Find item and reduce charges. Delete from inventory if out of charges.
     * @param ItemId {string}
     * @returns The item object
     */
    TakeItem (ItemId) {
        var o = this.GetItemById(ItemId);
        o.RemoveCharges(1); // will remove the item from inventory if charges reaches 0
        return o;
    }

    /**
     * Use an item. Apply effects. Delete from inventory if out of charges.
     * @param {string} ItemId
     */
    UseItem (ItemId) {
        var o = this.TakeItem(ItemId);
        this.AddHistory("ITEMS", o.Tag, 1);
        o.ApplyEffects(this);
        var msg = o.Message(this);
        return msg;
    }

    /**
     * Applies named effests on the player
     * @param {string[]} EffectNames
     */
    ApplyEffects(EffectNames)
    {
        for (const eName of EffectNames) {
            App.Data.EffectLib[eName]["FUN"].call(App.Data.EffectLib[eName], null, this);
        }
    }

    pBodyChange (BodyPart, Direction) {
        return window.App.Data.Lists["BodyChanges"][BodyPart][Direction];
    }

    /**
     * @param {string} Type
     * @param {string} Flag
     * @returns {*}
     */
    GetHistory(Type, Flag) {
        if ((typeof this._state.History[Type] === 'undefined')) return 0;
        if ((typeof this._state.History[Type][Flag] === 'undefined')) return 0;

        return this._state.History[Type][Flag];
    }

    AddHistory(Type, Flag, Amount) {
        if ((typeof this._state.History[Type] === 'undefined')) this._state.History[Type] = { };
        if ((typeof this._state.History[Type][Flag] === 'undefined')) this._state.History[Type][Flag] = 0;

        var t = this.GetHistory(Type, Flag);
        this._state.History[Type][Flag] = (t + Amount);
    }

    RemoveHistory(Type, Flag) {
        if ((typeof this._state.History[Type][Flag] !== 'undefined')) delete this._state.History[Type][Flag];
    }

// Voodoo
    /**
     * @param {string} Hex
     * @returns {boolean}
     */
    HasHex(Hex) {
        return this._state.VoodooEffects.hasOwnProperty(Hex) != false;
    }

    SetHex(Hex, Value) {
        this._state.VoodooEffects[Hex] = Value;
    }

    RemoveHex(Hex) {
        delete this._state.VoodooEffects[Hex];
    }

    EndHexDuration() {

        for(var prop in this._state.VoodooEffects) {

            if (!this._state.VoodooEffects.hasOwnProperty(prop)) continue;

            switch(prop) {

                case "PIRATES_PROWESS_DURATION":
                    this._state.VoodooEffects[prop]--;
                    if (this._state.VoodooEffects[prop] <= 0) {
                        delete this._state.VoodooEffects["PIRATES_PROWESS"];
                        delete this._state.VoodooEffects["PIRATES_PROWESS_DURATION"];
                        this._state.SleepLog.push("You feel the effects of your pirates skill leave you...");
                    }
            }
        }
    }

    // Acquire everything for debug purposes
    AcquireAllItems() {
        console.group("AcquireAllItems");
        for (var prop in window.App.Data.Clothes) {
            if (window.App.Data.Clothes.hasOwnProperty(prop)) {
                if (!this.OwnsWardrobeItem("CLOTHES", prop)) {
                    console.log("Adding \"" + prop + "\" (clothes)");
                    this.AddItem("CLOTHES", prop);
                } else {
                    console.log("\"" + prop + "\" (clothes) already owned");
                }
            }
        }
        console.groupEnd();
    }

    /**
     * Returns number that represents how high-class the PC looks. 0 is obvious commoner and 100 is a rich noble. Can be higher or lower.
     * @returns {number}
     */
    HighClassPresentability() {
        // For now just consider "Slutty Lady" the proper attire, while other clothes contribute only part of their style.
        // Do not count parts that are not visible in a "proper" situation.
        var getBonus = function(slot, equipmentItem) {
            // The proper attire
            var bonus = equipmentItem.CategoryBonus("Slutty Lady");
            if (bonus > 0) {
                console.log("Slot: " + slot + ", equipment name: \"" + equipmentItem.Name + "\", bonus: " + bonus);
                return bonus;
            }

            // Not so proper, but closer than others
            bonus = equipmentItem.CategoryBonus("High Class Whore") / 2;
            if (bonus > 0) {
                console.log("Slot: " + slot + ", equipment name: \"" + equipmentItem.Name + "\", bonus: " + bonus);
                return bonus;
            }

            // Oh well
            bonus = equipmentItem.Style / 4;
            console.log("Slot: " + slot + ", equipment name: \"" + equipmentItem.Name + "\", bonus: " + bonus);
            return bonus;
        };

        console.group("HighClassPresentability");
        var result = 0;

        for (var slot in this.Clothing.Equipment) {
            if (slot == "Nipples" || slot == "Bra" || slot == "Panty" || slot == "Butt" || slot == "Penis") continue;
            if (!this.Clothing.Equipment.hasOwnProperty(slot)) continue;

            var equipmentItem = this.Clothing.Equipment[slot];
            if (equipmentItem == null || equipmentItem == 0) continue;

            result += getBonus(slot, equipmentItem);
        }

        console.log("Total for clothes: " + result);

        var forHair = this.HairRating() * 0.25;
        var forMakeup = this.MakeupRating() * 0.25;
        console.log("For hair: " + forHair);
        console.log("For makeup: " + forMakeup);

        result += forHair + forMakeup;
        console.log("Total: " + result);
        console.groupEnd();
        return result;
    }

    // TODO: include other factors and maybe calibrate.
    /**
     * Returns number that represents how obvious it is that the PC is male. 100 means completely unpassable and 0 means completely passable. Can be higher or lower.
     * @returns {number}
     */
    ObviousTrappiness() {
        console.group("ObviousTrappiness");
        console.log(this._state.BodyStats);
        console.log(this._state.CoreStats);

        // Huge penis makes trappiness very, very obvious
        var penisOversizing = Math.max(this._state.BodyStats.Penis - 75, 0);
        var penisContribution = penisOversizing * penisOversizing;
        console.log("penisContribution: " + penisContribution);

        // Let's say DD breasts give -50, and we have diminishing returns
        var bustContribution = - Math.sqrt(this._state.BodyStats.Bust * 50 * 50 / 11);
        console.log("bustContribution: " + bustContribution);

        // Style gives a small contribution, but synergizes with femininity
        var styleContribution = - this.ClothesRating() * .1;
        console.log("styleContribution: " + styleContribution);

        // Femininity is important
        var femininityContribution = - this._state.CoreStats.Femininity * .3;
        console.log("femininityContribution: " + femininityContribution);

        // Full femininity and full style give -50 together
        var femininityStyleSynergy = - this._state.CoreStats.Femininity * this.ClothesRating() * .005;
        console.log("femininityStyleSynergy: " + femininityStyleSynergy);

        // Base value is full
        var result = 100 + penisContribution + bustContribution + styleContribution + femininityContribution + femininityStyleSynergy;
        // Let's make sure result is not too far from soft borders
        if (result > 100) result = 100 + Math.sqrt(result - 100);
        if (result < 0) result = - Math.sqrt(-result);

        console.log("result: " + result);
        console.groupEnd();

        return result;
    }

    // region SLOT wheel stuff

    /**
     * Unlock a slot.
     * @returns {boolean}
     */
    UnlockSlot() {
        if (this._state.CurrentSlots + 1 > this.MaxSlots) return false;
        this._state.CurrentSlots++;
        return true;
    }

    /**
     * Fetch all reels in the players inventory.
     * @returns {Array.<App.Items.Reel>}
     */
    GetReelsInInventory() {
        return this.Inventory.filter( function(o) { return  (o.Type == 'REEL'); });
    }

    /**
     * Fetch a single reel by ID.
     * @param filterID
     * @returns {App.Items.Reel}
     */
    GetReelByID(filterID) {
        var arr = this.GetReelsInInventory();
        arr = arr.filter( function(o) { return (typeof o.Id === 'function') && (o.Id == filterID); });
        if (arr.length > 0) return arr[0]; // huh? At least grab the first one.
    }

    /**
     * Attempt to pick a reel from inventory by Id and then equip it to a slot. It will remove any reel
     * equipped in that slot and place it back in the inventory.
     * @param {string} toEquipID
     * @param {string} reelSlot
     */
    EquipReel(toEquipID, reelSlot ) {
        this.Inventory.EquipReel(toEquipID, reelSlot);
    }

    /**
     * Remove an equipped reel and place it in the inventory.
     * @param slotID
     */
    RemoveReel(slotID) {
        this.Inventory.RemoveReel(slotID);
    }

    /**
     * Turn the equipped reels into an array to iterate/read.
     * @returns {Array.<App.Items.Reel>}
     */
    GetReels() {
        return this.Inventory.EquippedReelItems();
    }

    // endregion

    /**
     * @returns {App.Entity.InventoryManager}
     */
    get InventoryManager() {
        if (!this._inventory) {
            this._inventory = new App.Entity.InventoryManager("PlayerState");
        }
        return this._inventory;
    }

    /**
     * @returns {App.Entity.ClothingManager}
     */
    get Clothing() {
        if (!this._clothing) {
            this._clothing = new App.Entity.ClothingManager("PlayerState");
        }
        return this._clothing;
    }

    // redirections for the state properties

    get OriginalName() { return this._state.OriginalName; }
    get SlaveName() { return this._state.SlaveName; }
    get GirlfriendName() { return this._state.GirlfriendName; }
    get NickName() { return this._state.NickName; }
    get HairColor() { return this._state.HairColor; }
    set HairColor(c) { this._state.HairColor = c; }
    get HairStyle() { return this._state.HairStyle; }
    get HairBonus() { return this._state.HairBonus; }
    get MakeupStyle() { return this._state.MakeupStyle; }
    get MakeupBonus() { return this._state.MakeupBonus; }
    get EyeColor() { return this._state.EyeColor; }
    get Money() { return this._state.Money; }
    get SleepLog() { return this._state.SleepLog; }
    /** @type {number} */
    get SailDays() { return this._state.SailDays; }
    get LastUsedMakeup() { return this._state.LastUsedMakeup; }
    get LastUsedHair() { return this._state.LastUsedHair; }
    get LastQuickWardrobe() { return this._state.LastQuickWardrobe; }
    get debugMode() { return this._state.debugMode; }
    set debugMode(v) { this._state.debugMode = v; }
    get difficultySetting() { return this._state.difficultySetting; }
    get WhoreTutorial() { return this._state.WhoreTutorial; }
    set WhoreTutorial(v) { this._state.WhoreTutorial = v; }

    get JobFlags() { return this._state.JobFlags; }
    get VoodooEffects() { return this._state.VoodooEffects; }
    get QuestFlags() { return this._state.QuestFlags; } // Default Quest.

    get History() { return this._state.History; }

    // Game/Environment Variables
    get Day() { return this._state.Day; }
    get Phase() { return this._state.Phase; } // 0 morning, 1 afternoon, 2 evening, 3 night, 4 late night
    set Phase(n) { this._state.Phase = n; }

    // Player Statistic Variables
    get CoreStats() { return this._state.CoreStats; }

    get CoreStatsXP() { return this._state.CoreStatsXP; }

    get BodyStats() { return this._state.BodyStats; }

    get BodyXP() { return this._state.BodyXP; }

    get Skills() { return this._state.Skills; }

    get SkillsXP() { return this._state.SkillsXP; }

    get Wardrobe() { return this.Clothing.Wardrobe; }

    /**
     * @returns {App.Entity.InventoryManager}
     */
    get Inventory() {
         return this.InventoryManager;
    }
    get Equipment() { return this.Clothing.Equipment; }

    get StoreInventory() { return this._state.StoreInventory; }
    get NPCS() { return this._state.NPCS; }

    get Slots() { return this.Inventory.ReelSlots(); }
    get CurrentSlots() { return this._state.CurrentSlots; } // Starting allocation of whoring

    get MaxSlots() { return 9; } // YOU SHALL NOT PASS

    SaveLoaded() {
        delete this._inventory;
        delete this._clothing;
    }

    get GameStats() { return this._state.GameStats; }
};
