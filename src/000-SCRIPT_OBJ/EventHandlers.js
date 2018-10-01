
App.EventHandlers = new function() {

    this.Init = function() {

      console.log("Initializing Event Handlers...");

      // Add a hyperlink to run back to your Cabin when it's very, very late.
          $(document).on(':passagerender', function (ev) {
              if (App.EventHandlers.HasPlayerState() == true) {
                  if (SugarCube.setup.player.Phase >= 4) {
                      $(ev.content).wiki("<<lateNightTeleport>>");
                  }
              }
          });

      // Do something on passage start
      //      $(document).on(':passagestart', function (ev) {
      //          if (ev.passage['tags'].includes("event")) {
      //              console.log("event tag detected");
      //          }
      //
      //      });
    };

    /**
     * Do we have a player state and a player object?
     * @returns {boolean}
     */
    this.HasPlayerState = function() {
        return (this.exists("SugarCube.setup.player") == true && this.exists("SugarCube.State.variables.PlayerState") == true);
    };

    this.exists = function(namespace)
    {
        var tokens = namespace.split('.');
        return tokens.reduce(function(prev, curr) {
            return (typeof prev == "undefined") ? prev : prev[curr];
        }, window) != undefined;
    };

    this.onLoad = function(save)
    {
        function findItemId(Name) {

            function tryFindInClass(cl, Name, NameProp) {
                for (var prop in cl) {
                    if (!cl.hasOwnProperty(prop)) continue;
                    if (cl[prop][NameProp] == Name) return prop;
                }
                return undefined;
            }
            var nm = tryFindInClass(App.Data.Drugs, Name, "Name");
            if (nm) return ["DRUGS", nm];
            nm = tryFindInClass(App.Data.Food, Name, "Name");
            if (nm) return["FOOD", nm];
            nm = tryFindInClass(App.Data.Cosmetics, Name, "Name");
            if (nm) return["COSMETICS", nm];
            nm = tryFindInClass(App.Data.Misc, Name, "Name");
            if (nm) return ["MISC_CONSUMABLE", nm];
            nm = tryFindInClass(App.Data.Clothes, Name, "Name");
            if (nm) return["CLOTHES", nm];
            //?? if (Type == "WEAPON") return App.Data.Clothes;
            nm = tryFindInClass(App.Data.Stores, Name, "Name");
            if (nm) return["STORE", nm];
            nm = tryFindInClass(App.Data.NPCS, Name, "Name");
            if (nm) return["NPC", nm];
            nm = tryFindInClass(App.Data.QuestItems, Name, "Name");
            if (nm) return["QUEST", nm];
            nm = tryFindInClass(App.Data.LootBoxes, Name, "Name");
            if (nm) return["LOOT_BOX", nm];
            nm = tryFindInClass(App.Data.Slots, Name, "NAME");
            if (nm) return["REEL", nm];
        }

        if (save.id.indexOf("queen-of-the-seas") != 0) {
            throw new Error("Save from another game");
        }

        if (save.version == undefined) save.version = 0.0;
        if (save.version < 0.08) {
            console.log("Migrating inventory format...")
            // migrating inventory and wardrobe
            var oldInv = save.state.history[0].variables.PlayerState.Inventory; // array of items
            var newInv = {};
            for (var i = 0; i < oldInv.length; ++i) {
                var oi = oldInv[i];
                var id = findItemId(oi.Name());
                if (!newInv.hasOwnProperty(id[0])) newInv[id[0]] = {};
                newInv[id[0]][id[1]] = 0;
                if (id[0] == "REEL") {
                    newInv[id[0]][id[1]] = newInv[id[0]][id[1]] + 1;
                    console.log("Item " + oi.Name() + " of id " + id + " has 1 charge");
                } else {
                    newInv[id[0]][id[1]] = oi.Charges()
                    console.log("Item " + oi.Name() + " of id " + id + " has " + oi.Charges() + " charges");
                }
            }

            console.log("New Inventory:"); console.log(newInv);
            save.state.history[0].variables.PlayerState.Inventory = newInv;

            var oldSlots = save.state.history[0].variables.PlayerState.Slots;
            console.log("Old slots: "); console.log(oldSlots);
            var newSlots = {};
            for (var prop in oldSlots) {
                if (!oldSlots.hasOwnProperty(prop)) continue;
                if (oldSlots[prop] != null) {
                    var reelId = findItemId(oldSlots[prop].Name());
                    newSlots[prop] = reelId[1];
                } else {
                    newSlots[prop] = null;
                }
            }

            console.log("New slots:"); console.log(newSlots);
            save.state.history[0].variables.PlayerState.Slots = newSlots;

            var oldWb = save.state.history[0].variables.PlayerState.Wardrobe;
            console.log("Old wardrobe:"); console.log(oldWb);

            var newWb = [];
            for (var i = 0; i < oldWb.length; ++i) {
                var oi = oldWb[i];
                var id = findItemId(oi.Name());
                newWb.push(App.Item.MakeId(id[0], id[1]));
            }

            save.state.history[0].variables.PlayerState.Wardrobe = newWb;
            console.log("New wardrobe:"); console.log(newWb);

            var oldEqip = save.state.history[0].variables.PlayerState.Equipment;
            console.log("Old equipment:"); console.log(oldEqip);
            var newEquip = {};
            for (var prop in oldEqip) {
                if (!oldEqip.hasOwnProperty(prop)) continue;
                if (oldEqip[prop] != 0) {
                    var oi = oldEqip[prop];
                    var id = findItemId(oi.Name());
                    newEquip[prop] = {ID: App.Item.MakeId(id[0], id[1]), Locked: oi.IsLocked()};
                } else {
                    newEquip[prop] = 0;
                }
            }
            save.state.history[0].variables.PlayerState.Equipment = newEquip;
            console.log("New equipment:"); console.log(newEquip);
        }


        if (save.version > App.Data.Game.Version) {
            /* Invalidates saves outside of legal scope */
            throw new Error("The save you're attempting to load is incompatible with the current game. Please download the latest game version.");
        }

        save.id = SugarCube.session.id; // the game title includes version, hence this overwrite

        SugarCube.setup.player.SaveLoaded()
    };
};
