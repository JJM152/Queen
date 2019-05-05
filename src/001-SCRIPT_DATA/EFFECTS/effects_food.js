App.Data.EffectLib["SLAVE_GRUEL"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Items.Consumable} o*/
    function(o,p) {
        p.AdjustStat('Nutrition', 15);
        p.AdjustStatXP('Nutrition', 75);
        p.AdjustStatXP('WillPower',-25);
        p.AdjustStatXP('Perversion', 50);
        p.AdjustStatXP('Hormones', 50);
    },
    "VALUE" : 30,
        "KNOWLEDGE" : [ "Nutrition Up++", "Satiation+++", "WillPower Down-",
        "Perversion Up+", "Female Hormones++"]
};
App.Data.EffectLib["SNACK"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Items.Consumable} o*/
    function(o,p) { p.AdjustStat('Nutrition', 5);p.AdjustStatXP('Nutrition', 10); },
    "VALUE" : 10,
        "KNOWLEDGE" : [ "Nutrition Up", "Satiation Up+" ]
};

App.Data.EffectLib["UNWHOLESOME_MEAL"] = {
    "FUN" : /** 
    @param {App.Entity.Player} p
    @param {App.Items.Consumable} o
    **/
    function(o,p) {
        p.AdjustStat('Toxicity', 10);
    },
   "VALUE" : 0,
       "KNOWLEDGE" : [ "Unwholesome Meal-" ]
};

App.Data.EffectLib["LIGHT_WHOLESOME_MEAL"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Items.Consumable} o*/
    function(o,p) {
        p.AdjustStat('Nutrition', 10);
        p.AdjustStatXP('Nutrition', 25);
        p.AdjustStat('Toxicity',-5);
    },
    "VALUE" : 30,
        "KNOWLEDGE" : [ "Wholesome Meal+" ]
};
App.Data.EffectLib["WHOLESOME_MEAL"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Items.Consumable} o*/
    function(o,p) {
        p.AdjustStat('Nutrition', 20);
        p.AdjustStatXP('Nutrition', 50);
        p.AdjustStat('Toxicity',-10);
    },
    "VALUE" : 60,
        "KNOWLEDGE" : [ "Wholesome Meal++" ]
};
App.Data.EffectLib["LIGHT_ALCOHOL"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Items.Consumable} o*/
    function(o,p) {
        p.AdjustStat('Nutrition', 5);
        p.AdjustStatXP('Nutrition', 15);
        p.AdjustStat('Toxicity', 5);
    },
    "VALUE" : 20,
        "KNOWLEDGE" : [ "Nutrition Up", "Satiation Up", "Toxicity Up" ]
};
App.Data.EffectLib["HARD_ALCOHOL"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Items.Consumable} o*/
    function(o,p) {
        p.AdjustStat('Nutrition', 5);
        p.AdjustStatXP('Nutrition', 10);
        p.AdjustStat('Toxicity', 30);
        p.AdjustStatXP('WillPower', 50);
    },
    "VALUE" : 100,
        "KNOWLEDGE" : [ "Nutrition Up", "Satiation Up", "Toxicity Up--", "WillPower Up+" ]
};
