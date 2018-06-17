App = App || { Data: { }, Entity: { } };
App.Data.EffectLib = App.Data.EffectLib || {};

/** ENERGY */
App.Data.EffectLib["ENERGY_COMMON"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustStat('Energy', 1); },
    "VALUE" : 20, "KNOWLEDGE" : [ "Energy Up+" ]
};

App.Data.EffectLib["ENERGY_UNCOMMON"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustStat('Energy', 3); },
    "VALUE" : 50, "KNOWLEDGE" : [ "Energy Up++" ]
};

App.Data.EffectLib["ENERGY_RARE"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustStat('Energy', 5); },
    "VALUE" : 100, "KNOWLEDGE" : [ "Energy Up+++" ]
};

App.Data.EffectLib["ENERGY_LEGENDARY"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustStat('Energy', 8); },
    "VALUE" : 200, "KNOWLEDGE" : [ "Energy Up++++" ]
};

/** TOXICITY */
App.Data.EffectLib["TOXICITY_COMMON"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustStat('Toxicity', 10); },
    "VALUE" : 0, "KNOWLEDGE" : [ "Toxicity Up-" ]
};

App.Data.EffectLib["TOXICITY_UNCOMMON"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustStat('Toxicity', 30); },
    "VALUE" : 0, "KNOWLEDGE" : [ "Toxicity Up--" ]
};

App.Data.EffectLib["TOXICITY_RARE"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustStat('Toxicity', 50); },
    "VALUE" : 0, "KNOWLEDGE" : [ "Toxicity Up---" ]
};

App.Data.EffectLib["TOXICITY_LEGENDARY"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustStat('Toxicity', 80); },
    "VALUE" : 0, "KNOWLEDGE" : [ "Toxicity Up----" ]
};

App.Data.EffectLib["PURGE_COMMON"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustStat('Toxicity',-30); },
    "VALUE" : 20, "KNOWLEDGE" : [ "Toxicity Down+" ]
};

App.Data.EffectLib["PURGE_UNCOMMON"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustStat('Toxicity',-50); },
    "VALUE" : 40, "KNOWLEDGE" : [ "Toxicity Down++" ]
};

App.Data.EffectLib["PURGE_RARE"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustStat('Toxicity',-80); },
    "VALUE" : 80, "KNOWLEDGE" : [ "Toxicity Down+++" ]
};

App.Data.EffectLib["PURGE_LEGENDARY"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustStat('Toxicity',-120); },
    "VALUE" : 160, "KNOWLEDGE" : [ "Toxicity Down++++" ]
};

/** WILLPOWER */
App.Data.EffectLib["BREAK_WILL_COMMON"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustStatXP('WillPower',-50); },
    "VALUE" : 0, "KNOWLEDGE" : [ "WillPower Down-" ]
};

App.Data.EffectLib["BREAK_WILL_UNCOMMON"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustStatXP('WillPower',-100); },
    "VALUE" : 0, "KNOWLEDGE" : [ "WillPower Down--" ]
};

App.Data.EffectLib["BREAK_WILL_RARE"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustStatXP('WillPower',-200); },
    "VALUE" : 0, "KNOWLEDGE" : [ "WillPower Down---" ]
};

App.Data.EffectLib["BREAK_WILL_LEGENDARY"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustStatXP('WillPower',-400); },
    "VALUE" : 0, "KNOWLEDGE" : [ "WillPower Down----" ]
};

App.Data.EffectLib["BOLSTER_WILL_COMMON"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustStatXP('WillPower', 50); },
    "VALUE" : 75, "KNOWLEDGE" : [ "WillPower Up+" ]
};

App.Data.EffectLib["BOLSTER_WILL_UNCOMMON"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustStatXP('WillPower', 100); },
    "VALUE" :150, "KNOWLEDGE" : [ "WillPower Up++" ]
};

App.Data.EffectLib["BOLSTER_WILL_RARE"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustStatXP('WillPower', 200); },
    "VALUE" : 300, "KNOWLEDGE" : [ "WillPower Up+++" ]
};

App.Data.EffectLib["BOLSTER_WILL_LEGENDARY"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustStatXP('WillPower', 400); },
    "VALUE" : 600, "KNOWLEDGE" : [ "WillPower Up++++" ]
};

/** NUTRITION  AND HUNGER */
App.Data.EffectLib["NUTRITION_WEAK"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustStat('Nutrition', 5); },
    "VALUE" : 5, "KNOWLEDGE" : [ "Nutrition Up" ]
};

App.Data.EffectLib["NUTRITION_COMMON"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustStat('Nutrition', 10); },
    "VALUE" : 10, "KNOWLEDGE" : [ "Nutrition Up+" ]
};

App.Data.EffectLib["NUTRITION_UNCOMMON"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustStat('Nutrition', 20); },
    "VALUE" : 20, "KNOWLEDGE" : [ "Nutrition Up++" ]
};

App.Data.EffectLib["NUTRITION_RARE"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustStat('Nutrition', 50); },
    "VALUE" : 50, "KNOWLEDGE" : [ "Nutrition Up+++" ]
};

App.Data.EffectLib["HUNGER_RARE"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustStat('Nutrition', -50); },
    "VALUE" : 0, "KNOWLEDGE" : [ "Nutrition Down---" ]
};

App.Data.EffectLib["NUTRITION_LEGENDARY"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustStat('Nutrition', 100); },
    "VALUE" : 100, "KNOWLEDGE" : [ "Nutrition Up++++" ]
};

App.Data.EffectLib["NUTRITION_XP_WEAK"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustStatXP('Nutrition', 10); },
    "VALUE" : 5, "KNOWLEDGE" : [ "Satiation Up" ]
};

App.Data.EffectLib["NUTRITION_XP_COMMON"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustStatXP('Nutrition', 25); },
    "VALUE" : 10, "KNOWLEDGE" : [ "Satiation Up+" ]
};

App.Data.EffectLib["NUTRITION_XP_UNCOMMON"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustStatXP('Nutrition', 50); },
    "VALUE" : 20, "KNOWLEDGE" : [ "Satiation Up++" ]
};

App.Data.EffectLib["NUTRITION_XP_RARE"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustStatXP('Nutrition', 100); },
    "VALUE" : 50, "KNOWLEDGE" : [ "Satiation Up+++" ]
};

App.Data.EffectLib["NUTRITION_XP_LEGENDARY"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustStatXP('Nutrition', 200); },
    "VALUE" : 100, "KNOWLEDGE" : [ "Satiation Up++++" ]
};

/** Femininity **/
App.Data.EffectLib["FEMININITY_XP_COMMON"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustStatXP('Femininity', 25); },
    "VALUE" : 10, "KNOWLEDGE" : [ "Femininity Up+" ]
};

App.Data.EffectLib["FEMININITY_XP_UNCOMMON"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustStatXP('Femininity', 50); },
    "VALUE" : 20, "KNOWLEDGE" : [ "Femininity Up++" ]
};

App.Data.EffectLib["FEMININITY_XP_RARE"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustStatXP('Femininity', 100); },
    "VALUE" : 50, "KNOWLEDGE" : [ "Femininity Up+++" ]
};

App.Data.EffectLib["FEMININITY_XP_LEGENDARY"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustStatXP('Femininity', 200); },
    "VALUE" : 100, "KNOWLEDGE" : [ "Femininity Up++++" ]
};

App.Data.EffectLib["FEMININITY_DOWN_XP_LEGENDARY"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustStatXP('Femininity', -200); },
    "VALUE" : 100, "KNOWLEDGE" : [ "Femininity Down----" ]
};

/** HEALTH **/
App.Data.EffectLib["HEAL_COMMON"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustStat('Health', 20); },
    "VALUE" : 20, "KNOWLEDGE" : [ "Health Up+" ]
};

App.Data.EffectLib["HEAL_UNCOMMON"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustStat('Health', 40); },
    "VALUE" : 50, "KNOWLEDGE" : [ "Health Up++" ]
};

App.Data.EffectLib["HEAL_RARE"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustStat('Health', 75); p.AdjustStat('Toxicity',-50); },
    "VALUE" : 150, "KNOWLEDGE" : [ "Health Up+++" ]
};

App.Data.EffectLib["HEAL_LEGENDARY"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustStat('Health', 100); p.AdjustStat('Toxicity',-100); },
    "VALUE" : 300, "KNOWLEDGE" : [ "Health Up++++" ]
};

/** FITNESS */
App.Data.EffectLib["FITNESS_XP_COMMON"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustStatXP('Fitness', 25); },
    "VALUE" : 10, "KNOWLEDGE" : [ "Fitness Up+" ]
};

App.Data.EffectLib["FITNESS_XP_UNCOMMON"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustStatXP('Fitness', 50); },
    "VALUE" : 20, "KNOWLEDGE" : [ "Fitness Up++" ]
};

App.Data.EffectLib["FITNESS_XP_RARE"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustStatXP('Fitness', 100); },
    "VALUE" : 50, "KNOWLEDGE" : [ "Fitness Up+++" ]
};

App.Data.EffectLib["FITNESS_XP_LEGENDARY"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustStatXP('Fitness', 200); },
    "VALUE" : 100, "KNOWLEDGE" : [ "Fitness Up++++" ]
};

/** HORMONES */
App.Data.EffectLib["MALE_HORMONE_XP_COMMON"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustStatXP('Hormones',-50); },
    "VALUE" : 25, "KNOWLEDGE" : [ "Male Hormones+" ]
};

App.Data.EffectLib["MALE_HORMONE_XP_UNCOMMON"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustStatXP('Hormones',-100); },
    "VALUE" : 50, "KNOWLEDGE" : [ "Male Hormones++" ]
};

App.Data.EffectLib["MALE_HORMONE_XP_RARE"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustStatXP('Hormones',-200); },
    "VALUE" : 100, "KNOWLEDGE" : [ "Male Hormones+++" ]
};

App.Data.EffectLib["MALE_HORMONE_XP_LEGENDARY"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustStatXP('Hormones',-400); },
    "VALUE" : 200, "KNOWLEDGE" : [ "Male Hormones++++" ]
};

App.Data.EffectLib["FEMALE_HORMONE_XP_COMMON"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustStatXP('Hormones', 50); },
    "VALUE" : 10, "KNOWLEDGE" : [ "Female Hormones+" ]
};

App.Data.EffectLib["FEMALE_HORMONE_XP_UNCOMMON"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustStatXP('Hormones', 100); },
    "VALUE" : 20, "KNOWLEDGE" : [ "Female Hormones++" ]
};

App.Data.EffectLib["FEMALE_HORMONE_XP_RARE"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustStatXP('Hormones', 200); },
    "VALUE" : 40, "KNOWLEDGE" : [ "Female Hormones+++" ]
};

App.Data.EffectLib["FEMALE_HORMONE_XP_LEGENDARY"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustStatXP('Hormones', 400); },
    "VALUE" : 80, "KNOWLEDGE" : [ "Female Hormones++++" ]
};

App.Data.EffectLib["HORMONAL_BALANCE_COMMON"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) {
        var h = p.GetStat("STAT","Hormones");
        p.CoreStats["Hormones"] = h > 100 ?  Math.min((h-10), 100) : Math.max((h+10), 100);
    },
    "VALUE" : 500, "KNOWLEDGE" : [ "Hormonal Balance+" ]
};

/** PERVERSION **/
App.Data.EffectLib["PERVERSION_XP_COMMON"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustStatXP('Perversion', 25); },
    "VALUE" : 10, "KNOWLEDGE" : [ "Perversion Up+" ]
};

App.Data.EffectLib["PERVERSION_DOWN_XP_COMMON"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustStatXP('Perversion', -25); },
    "VALUE" : 10, "KNOWLEDGE" : [ "Perversion Down-" ]
};
App.Data.EffectLib["PERVERSION_XP_UNCOMMON"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustStatXP('Perversion', 50); },
    "VALUE" : 20, "KNOWLEDGE" : [ "Perversion Up++" ]
};

App.Data.EffectLib["PERVERSION_XP_RARE"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustStatXP('Perversion', 100); },
    "VALUE" : 50, "KNOWLEDGE" : [ "Perversion Up+++" ]
};

App.Data.EffectLib["PERVERSION_DOWN_XP_RARE"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustStatXP('Perversion', -100); },
    "VALUE" : 50, "KNOWLEDGE" : [ "Perversion Down---" ]
};

App.Data.EffectLib["PERVERSION_XP_LEGENDARY"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustStatXP('Perversion', 200); },
    "VALUE" : 100, "KNOWLEDGE" : [ "Perversion Up++++" ]
};

App.Data.EffectLib["PERVERSION_DOWN_XP_LEGENDARY"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustStatXP('Perversion', -200); },
    "VALUE" : 100, "KNOWLEDGE" : [ "Perversion Down----" ]
};