/**
 * @class For generating random treasure scenarios
 */
App.Loot = class Loot {

    constructor()
    {
        //Init vars
        this._Prices = { };
        // Populate
        for(var prop in App.Data.Clothes) {
            this._Prices["CLOTHES/"+prop] = App.Item.CalculateBasePrice('CLOTHES', prop);
        }

        for(var prop in App.Data.Drugs) {
            this._Prices["DRUGS/"+prop] = App.Item.CalculateBasePrice('DRUGS', prop);
        }

        for(var prop in App.Data.Food) {
            this._Prices["FOOD/"+prop] = App.Item.CalculateBasePrice('FOOD', prop);
        }

        for(var prop in App.Data.Cosmetics) {
            this._Prices["COSMETICS/"+prop] = App.Item.CalculateBasePrice('COSMETICS', prop);
        }

        for(var prop in App.Data.Misc) {
            this._Prices["MISC_CONSUMABLE/"+prop] = App.Item.CalculateBasePrice('MISC_CONSUMABLE', prop);
        }

        for(var prop in App.Data.Slots) {
            this._Prices["REEL/"+prop] = App.Item.CalculateBasePrice('REEL', prop);
        }

    }

    get Prices() { return this._Prices; }
 

    /**
     * 
     * @param {Array.<string>} Lists ['CLOTHES', 'DRUGS', 'FOOD', 'COSMETICS', 'MISC_CONSUMABLE', 'REEL' ]
     * @param {number} PoolMin Minimum loot pool
     * @param {number} PoolMax Maximum loot pool
     * @param {function} Filter Function to apply to find item
     */
    GenerateStash(Lists, PoolMin, PoolMax, Filter)
    {
        var pool = Math.max(PoolMin, Math.ceil(PoolMax * Math.random()));
        var loot = { };
        var item = { }; //record to fetch
        
        var i = 0;
        while(item != null && i < 100) { // safety
            item = this._FindItem( App.PR.GetRandomListItem(Lists), pool, Filter);
            if (item != null) {
                //Add item to loot dictionary, or increment.
                if (loot.hasOwnProperty(item.record)) {
                    loot[item.record] += 1;
                } else {
                    loot[item.record] = 1;
                }
                pool -= item.price;
            }
            i++;
        }

        return loot;
    }
    /**
     * 
     * @param {Array.<object>} Table array of objects defining loot drop chances 
     * @param {*} PoolMin minimum amount of loot
     * @param {*} PoolMax maximum amount of loot
     */
    GenerateLootBox( Table, PoolMin, PoolMax) {
        var buffer = "";

        var pool = Math.max(PoolMin, Math.ceil(PoolMax * Math.random()));

        // Multiply loot value.
        if (setup.player.HasHex("TREASURE_FINDER")) {
            pool = Math.ceil( pool * setup.player.VoodooEffects["TREASURE_FINDER"]);
            setup.player.RemoveHex("TREASURE_FINDER");
        }

        var counter = [];
        var loot = { };
        var item = { }; //record to fetch
        var coins = 0; // cash converts

        var i = 0;
        var breakcount = 0;

        while(pool > 0 && breakcount < 100) { // Break out after 100 rolls no matter what.
          
            var obj = Table[i];
            
            if ( Math.ceil(100*Math.random()) <= obj.Chance) {
                //Handle money.
                if (obj.Type == 'COINS') {
                    var tmpCoins = Math.max(obj.Min, Math.min(Math.ceil(obj.Max * Math.random()),pool));
                    coins += tmpCoins;
                    pool -= tmpCoins;
                    if (pool <= 0) {
                        break;
                    } else {
                        breakcount++;
                        i++;
                        i = i >= Table.length ? 0 : i;
                        continue;
                    }
                }
                
                if (obj.hasOwnProperty('MaxCount') && counter[i] >= Table[i].MaxCount) {
                    breakcount++;
                    i++;
                    i = i >= Table.length ? 0 : i;
                    continue;
                }

                //Fetch an item instead.
                var tmpPool = (obj.hasOwnProperty("Max") ? 
                            Math.max(obj.Min, Math.min(Math.ceil(obj.Max * Math.random()),pool)) : pool);
                item = this._FindItem( obj.Type, tmpPool, obj.Filter);

                if (item != null) {
                    //Add item to loot dictionary, or increment.
                    if (loot.hasOwnProperty(item.record)) {
                        loot[item.record].Count += 1;
                        counter[i]++;
                    } else {
                        loot[item.record] = item;
                        loot[item.record].Count = 1;
                        counter[i] = 1;
                    }

                    pool -= (obj.hasOwnProperty('Free') && obj.Free == true) ? 0 : item.price;
                } 

                //increment counters
                breakcount++;
                i++;
                i = i >= Table.length ? 0 : i;
            }
        }

        var k = Object.keys(loot).sort((a,b) => loot[a].title.localeCompare(loot[b].title));
        if (coins == 0 && k.length < 1) return "<span style='color:red'>Poof! It's empty?!?!?</span>";

        for(i = 0; i < k.length; i++) {
            var obj = loot[k[i]];
            setup.player.AddItem(obj.category, obj.tag, obj.Count);
        }

        if (coins) buffer += "You found <span style='color:gold;'>"+coins+" coins</span>!\n";
        var out = k.map( o => loot[o].title + (loot[o].Count > 1 ? 
            "<span style='color:gold;'> x"+loot[o].Count+"</span>" : ""));
        buffer += out.join("\n");

        if (coins) setup.player.AdjustMoney(coins);

        return buffer;
    }

    /**
     * 
     * @param {string} Category Category to search.
     * @param {number} Pool amount of funds available
     * @param {filter} Filter function to apply to result
     */
    _FindItem(Category, Pool, Filter)
    {
        var ds = App.Item._TryGetItemsDictionary(Category); // Create a data source.
        if (typeof Filter === 'function') ds = Filter(ds, Category, Pool); //optional filter.
        var that = this;
        var tags = Object.keys(ds).filter( k => 
            ((typeof ds[k].InMarket !== 'undefined' && ds[k].InMarket != false) || 
            typeof ds[k].InMarket === 'undefined') && 
            setup.player.OwnsWardrobeItem(Category, k) != true && // no duplicate clothing
            that.Prices[Category+"/"+k] < Pool);

        if (tags.length < 1) return null;
        var t = App.PR.GetRandomListItem(tags);
        var record = Category + "/" + t;
        var desc = ds[t].ShortDesc.replace(/{COLOR}/g, ds[t].Color); // legacy
        var item = {
            record: record, // CLOTHES/cheap wig
            price: this.Prices[record], // number
            tag: t, //cheap wig
            category: Category, // CLOTHES
            title: desc // blah blah a cheap wig
        };

        return item;
        
    }

    /**
     * Filter creation shortcut
     * @param {function} Test the test to apply to the object to
     * @returns {function}
     */
    static GetFilter(Test)
    {
        var f = function(a, b, c) {
            var o = { };
            for(var p in a) 
                if (Test(a[p])) 
                    o[p] = a[p];
            return o;
        };

        return f;
    }

    /**
     * Simple comparison on a property.
     * @param {string} A Object property to test
     * @param {string|number|boolean} b value to test == or includes for arrays
     * @returns {function}
     */
    static cmp(A, b) {
        var t = function(o) { return (o[A] == b) || (Array.isArray(o[A]) && o[A].includes(b));}
        return this.GetFilter(t);
    }
    /**
     * 
     * @param {string} A Object property to test
     * @param {Array.<string>} b array of values to check
     */
    static any(A, b) {
        var t = function(o) { 
            for(var i = 0; i < b.length; i++) {

                if (Array.isArray(o[A]) && o[A].includes(b[i])) {
                    return true;
                } else if (Array.isArray(o[A]) == false && o[A] == b[i]) {
                    return true;
                }
            }
            return false; 
        };

        return this.GetFilter(t);
    }

    TestLoot()
    {
        var Table = [
            {
                Type : "FOOD",
                Chance: 50,
                Min: 200, 
                Max: 500,
                Filter: App.Loot.any("Effects", 
                    [ "BUST_XP_COMMON", "BUST_XP_UNCOMMON", "BUST_XP_RARE", "BUST_XP_LEGENDARY"])
            }
         ];

        
        return this.GenerateLootBox(Table, 100, 1000);
    }
}
