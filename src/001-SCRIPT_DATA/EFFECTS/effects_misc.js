App = App || { Data: { }, Entity: { } };
App.Data.EffectLib = App.Data.EffectLib || {};

App.Data.EffectLib["BLACK_HAIR_DYE"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Items.Consumable} o*/
    function(o,p) { p.HairColor = 'black'; },
    "VALUE" : 100,
        "KNOWLEDGE" : [ "Dye Hair Black" ]
};
App.Data.EffectLib["BROWN_HAIR_DYE"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Items.Consumable} o*/
    function(o,p) { p.HairColor = 'brown'; },
    "VALUE" : 100,
        "KNOWLEDGE" : [ "Dye Hair Brown" ]
};
App.Data.EffectLib["RED_HAIR_DYE"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Items.Consumable} o*/
    function(o,p) { p.HairColor = 'red'; },
    "VALUE" : 100,
        "KNOWLEDGE" : [ "Dye Hair Red" ]
};
App.Data.EffectLib["BLOND_HAIR_DYE"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Items.Consumable} o*/
    function(o,p) { p.HairColor = 'blond'; },
    "VALUE" : 100,
        "KNOWLEDGE" : [ "Dye Hair Blond" ]
};
/** THE LOVERS - TAROT CARD */
App.Data.EffectLib["THE_LOVERS"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Items.Consumable} o*/
    function(o,p) {p.AddItem("DRUGS", "siren elixir", 0);},
    "VALUE" : 500, "KNOWLEDGE" : [ "Add Item++++" ]
};
/** THE EMPRESS - TAROT CARD */
App.Data.EffectLib["THE_EMPRESS"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Items.Consumable} o*/
    function(o,p) {p.AddItem("LOOT_BOX", "common food loot box", 0);},
    "VALUE" : 500, "KNOWLEDGE" : [ "Add Item++++" ]
};
