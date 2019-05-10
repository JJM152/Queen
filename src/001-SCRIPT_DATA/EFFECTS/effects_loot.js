/** FOOD BOX */
App.Data.EffectLib["FOOD_LOOT_BOX_COMMON"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Items.Consumable} o*/
    function(o,p) { return setup.Loot.GenerateLootBox(App.Data.LootTables["FOOD"], 100, 300); },
    "VALUE" : 0,
        "KNOWLEDGE" : [ "Loot Box+" ]
};
App.Data.EffectLib["FOOD_LOOT_BOX_UNCOMMON"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Items.Consumable} o*/
    function(o,p) { return setup.Loot.GenerateLootBox(App.Data.LootTables["FOOD"], 200, 500); },
    "VALUE" : 0,
        "KNOWLEDGE" : [ "Loot Box++" ]
};
App.Data.EffectLib["FOOD_LOOT_BOX_RARE"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Items.Consumable} o*/
    function(o,p) { return setup.Loot.GenerateLootBox(App.Data.LootTables["FOOD"], 300, 700); },
    "VALUE" : 0,
        "KNOWLEDGE" : [ "Loot Box+++" ]
};
App.Data.EffectLib["FOOD_LOOT_BOX_LEGENDARY"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Items.Consumable} o*/
    function(o,p) { return setup.Loot.GenerateLootBox(App.Data.LootTables["FOOD"], 400, 1000); },
    "VALUE" : 0,
        "KNOWLEDGE" : [ "Loot Box++++" ]
};
/** LANDLUBBER BOX */
App.Data.EffectLib["LANDLUBBER_LOOT_BOX_COMMON"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Items.Consumable} o*/
    function(o,p) { return setup.Loot.GenerateLootBox(App.Data.LootTables["LANDLUBBER"], 500, 1000); },
    "VALUE" : 0,
        "KNOWLEDGE" : [ "Loot Box+" ]
};

/** LOLITA_SISSY BOX */
App.Data.EffectLib["LOLITA_SISSY_LOOT_BOX_COMMON"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Items.Consumable} o*/
    function(o,p) { return setup.Loot.GenerateLootBox(App.Data.LootTables["LOLITA_SISSY"], 500, 1000); },
    "VALUE" : 0,
        "KNOWLEDGE" : [ "Loot Box+" ]
};
App.Data.EffectLib["LOLITA_SISSY_LOOT_BOX_UNCOMMON"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Items.Consumable} o*/
    function(o,p) { return setup.Loot.GenerateLootBox(App.Data.LootTables["LOLITA_SISSY"], 1000, 1500); },
    "VALUE" : 0,
        "KNOWLEDGE" : [ "Loot Box++" ]
};
App.Data.EffectLib["LOLITA_SISSY_LOOT_BOX_RARE"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Items.Consumable} o*/
    function(o,p) { return setup.Loot.GenerateLootBox(App.Data.LootTables["LOLITA_SISSY"], 1500, 2000); },
    "VALUE" : 0,
        "KNOWLEDGE" : [ "Loot Box+++" ]
};
App.Data.EffectLib["LOLITA_SISSY_LOOT_BOX_LEGENDARY"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Items.Consumable} o*/
    function(o,p) { return setup.Loot.GenerateLootBox(App.Data.LootTables["LOLITA_SISSY"], 2000, 2500); },
    "VALUE" : 0,
        "KNOWLEDGE" : [ "Loot Box++++" ]
};
/** PATHETIC_LOSER BOX */
App.Data.EffectLib["PATHETIC_LOSER_LOOT_BOX_COMMON"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Items.Consumable} o*/
    function(o,p) { return setup.Loot.GenerateLootBox(App.Data.LootTables["PATHETIC_LOSER"], 1000, 2000); },
    "VALUE" : 0,
        "KNOWLEDGE" : [ "Loot Box+" ]
};

/** PIRATE_BDSM BOX */
App.Data.EffectLib["PIRATE_BDSM_LOOT_BOX_COMMON"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Items.Consumable} o*/
    function(o,p) {  return setup.Loot.GenerateLootBox(App.Data.LootTables["PIRATE_BDSM"], 500, 1000); },
    "VALUE" : 0,
        "KNOWLEDGE" : [ "Loot Box+" ]
};
App.Data.EffectLib["PIRATE_BDSM_LOOT_BOX_UNCOMMON"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Items.Consumable} o*/
    function(o,p) { return setup.Loot.GenerateLootBox(App.Data.LootTables["PIRATE_BDSM"], 1000, 1500); },
    "VALUE" : 0,
        "KNOWLEDGE" : [ "Loot Box++" ]
};
App.Data.EffectLib["PIRATE_BDSM_LOOT_BOX_RARE"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Items.Consumable} o*/
    function(o,p) { return setup.Loot.GenerateLootBox(App.Data.LootTables["PIRATE_BDSM"], 1500, 2000); },
    "VALUE" : 0,
        "KNOWLEDGE" : [ "Loot Box+++" ]
};
App.Data.EffectLib["PIRATE_BDSM_LOOT_BOX_LEGENDARY"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Items.Consumable} o*/
    function(o,p) { return setup.Loot.GenerateLootBox(App.Data.LootTables["PIRATE_BDSM"], 2000, 2500); },
    "VALUE" : 0,
        "KNOWLEDGE" : [ "Loot Box++++" ]
};
/** SISSY_BIMBO BOX */
App.Data.EffectLib["SISSY_BIMBO_LOOT_BOX_COMMON"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Items.Consumable} o*/
    function(o,p) {  return setup.Loot.GenerateLootBox(App.Data.LootTables["DANCER_BIMBO"], 500, 1000);  },
    "VALUE" : 0,
        "KNOWLEDGE" : [ "Loot Box+" ]
};
App.Data.EffectLib["SISSY_BIMBO_LOOT_BOX_UNCOMMON"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Items.Consumable} o*/
    function(o,p) {  return setup.Loot.GenerateLootBox(App.Data.LootTables["DANCER_BIMBO"], 1000, 1500);  },
    "VALUE" : 0,
        "KNOWLEDGE" : [ "Loot Box++" ]
};
App.Data.EffectLib["SISSY_BIMBO_LOOT_BOX_RARE"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Items.Consumable} o*/
    function(o,p) {  return setup.Loot.GenerateLootBox(App.Data.LootTables["DANCER_BIMBO"], 1500, 2000);  },
    "VALUE" : 0,
        "KNOWLEDGE" : [ "Loot Box+++" ]
};
App.Data.EffectLib["SISSY_BIMBO_LOOT_BOX_LEGENDARY"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Items.Consumable} o*/
    function(o,p) {  return setup.Loot.GenerateLootBox(App.Data.LootTables["DANCER_BIMBO"], 2000, 2500);  },
    "VALUE" : 0,
        "KNOWLEDGE" : [ "Loot Box++++" ]
};
/** DANCER_BIMBO BOX */
App.Data.EffectLib["DANCER_BIMBO_LOOT_BOX_COMMON"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Items.Consumable} o*/
    function(o,p) { return setup.Loot.GenerateLootBox(App.Data.LootTables["DANCER_BIMBO"], 500, 1000);  },
    "VALUE" : 0,
        "KNOWLEDGE" : [ "Loot Box+" ]
};
App.Data.EffectLib["DANCER_BIMBO_LOOT_BOX_UNCOMMON"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Items.Consumable} o*/
    function(o,p) { return setup.Loot.GenerateLootBox(App.Data.LootTables["DANCER_BIMBO"], 1000, 1500);  },
    "VALUE" : 0,
        "KNOWLEDGE" : [ "Loot Box++" ]
};
App.Data.EffectLib["DANCER_BIMBO_LOOT_BOX_RARE"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Items.Consumable} o*/
    function(o,p) { return setup.Loot.GenerateLootBox(App.Data.LootTables["DANCER_BIMBO"], 1500, 2000);  },
    "VALUE" : 0,
        "KNOWLEDGE" : [ "Loot Box+++" ]
};
App.Data.EffectLib["DANCER_BIMBO_LOOT_BOX_LEGENDARY"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Items.Consumable} o*/
    function(o,p) { return setup.Loot.GenerateLootBox(App.Data.LootTables["DANCER_BIMBO"], 2000, 2500);  },
    "VALUE" : 0,
        "KNOWLEDGE" : [ "Loot Box++++" ]
};
