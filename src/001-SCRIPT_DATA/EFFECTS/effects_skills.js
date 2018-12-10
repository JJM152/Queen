App = App || { Data: { }, Entity: { } };
App.Data.EffectLib = App.Data.EffectLib || {};

/** SAILING */
App.Data.EffectLib["SAILING_XP_COMMON"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Items.Consumable} o*/
    function(o,p) { p.AdjustSkillXP('Sailing', 50); },
    "VALUE" : 100, "KNOWLEDGE" : [ "Sailing XP+" ]
};
App.Data.EffectLib["SAILING_XP_UNCOMMON"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Items.Consumable} o*/
    function(o,p) { p.AdjustSkillXP('Sailing', 100); },
    "VALUE" : 200, "KNOWLEDGE" : [ "Sailing XP++" ]
};
App.Data.EffectLib["SAILING_XP_RARE"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Items.Consumable} o*/
    function(o,p) { p.AdjustSkillXP('Sailing', 200); },
    "VALUE" : 400, "KNOWLEDGE" : [ "Sailing XP+++" ]
};
App.Data.EffectLib["SAILING_XP_LEGENDARY"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Items.Consumable} o*/
    function(o,p) { p.AdjustSkillXP('Sailing', 400); },
    "VALUE" : 800, "KNOWLEDGE" : [ "Sailing XP++++" ]
};
/** SWASHBUCKLING */
App.Data.EffectLib["SWASHBUCKLING_XP_COMMON"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Items.Consumable} o*/
    function(o,p) { p.AdjustSkillXP('Swashbuckling', 50); },
    "VALUE" : 100, "KNOWLEDGE" : [ "Swashbuckling XP+" ]
};
App.Data.EffectLib["SWASHBUCKLING_XP_UNCOMMON"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Items.Consumable} o*/
    function(o,p) { p.AdjustSkillXP('Swashbuckling', 100); },
    "VALUE" : 200, "KNOWLEDGE" : [ "Swashbuckling XP++" ]
};
App.Data.EffectLib["SWASHBUCKLING_XP_RARE"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Items.Consumable} o*/
    function(o,p) { p.AdjustSkillXP('Swashbuckling', 200); },
    "VALUE" : 400, "KNOWLEDGE" : [ "Swashbuckling XP+++" ]
};
App.Data.EffectLib["SWASHBUCKLING_XP_LEGENDARY"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Items.Consumable} o*/
    function(o,p) { p.AdjustSkillXP('Swashbuckling', 400); },
    "VALUE" : 800, "KNOWLEDGE" : [ "Swashbuckling XP++++" ]
};
/** NAVIGATING */
App.Data.EffectLib["NAVIGATING_XP_COMMON"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Items.Consumable} o*/
    function(o,p) { p.AdjustSkillXP('Navigating', 50); },
    "VALUE" : 100, "KNOWLEDGE" : [ "Navigating XP+" ]
};
App.Data.EffectLib["NAVIGATING_XP_UNCOMMON"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Items.Consumable} o*/
    function(o,p) { p.AdjustSkillXP('Navigating', 100); },
    "VALUE" : 200, "KNOWLEDGE" : [ "Navigating XP++" ]
};
App.Data.EffectLib["NAVIGATING_XP_RARE"] = {
    "FUN" : /** @param {App.Entity.Player} p

     @param {App.Items.Consumable} o*/
    function(o,p) { p.AdjustSkillXP('Navigating', 200); },
    "VALUE" : 400, "KNOWLEDGE" : [ "Navigating XP+++" ]
};
App.Data.EffectLib["NAVIGATING_XP_LEGENDARY"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Items.Consumable} o*/
    function(o,p) { p.AdjustSkillXP('Navigating', 400); },
    "VALUE" : 800, "KNOWLEDGE" : [ "Navigating XP++++" ]
};
/** SERVING **/
App.Data.EffectLib["SERVING_XP_COMMON"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Items.Consumable} o*/
    function(o,p) { p.AdjustSkillXP('Serving', 50); },
    "VALUE" : 100, "KNOWLEDGE" : [ "Serving XP+" ]
};
App.Data.EffectLib["SERVING_XP_UNCOMMON"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Items.Consumable} o*/
    function(o,p) { p.AdjustSkillXP('Serving', 100); },
    "VALUE" : 200, "KNOWLEDGE" : [ "Serving XP++" ]
};
App.Data.EffectLib["SERVING_XP_RARE"] = {
    "FUN" : /** @param {App.Entity.Player} p

     @param {App.Items.Consumable} o*/
    function(o,p) { p.AdjustSkillXP('Serving', 200); },
    "VALUE" : 400, "KNOWLEDGE" : [ "Serving XP+++" ]
};
App.Data.EffectLib["SERVING_XP_LEGENDARY"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Items.Consumable} o*/
    function(o,p) { p.AdjustSkillXP('Serving', 400); },
    "VALUE" : 800, "KNOWLEDGE" : [ "Serving XP++++" ]
};
/** COOKING **/
App.Data.EffectLib["COOKING_XP_COMMON"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Items.Consumable} o*/
    function(o,p) { p.AdjustSkillXP('Cooking', 50); },
    "VALUE" : 100, "KNOWLEDGE" : [ "Cooking XP+" ]
};
App.Data.EffectLib["COOKING_XP_UNCOMMON"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Items.Consumable} o*/
    function(o,p) { p.AdjustSkillXP('Cooking', 100); },
    "VALUE" : 200, "KNOWLEDGE" : [ "Cooking XP++" ]
};
App.Data.EffectLib["COOKING_XP_RARE"] = {
    "FUN" : /** @param {App.Entity.Player} p

     @param {App.Items.Consumable} o*/
    function(o,p) { p.AdjustSkillXP('Cooking', 200); },
    "VALUE" : 400, "KNOWLEDGE" : [ "Cooking XP+++" ]
};
App.Data.EffectLib["COOKING_XP_LEGENDARY"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Items.Consumable} o*/
    function(o,p) { p.AdjustSkillXP('Cooking', 400); },
    "VALUE" : 800, "KNOWLEDGE" : [ "Cooking XP++++" ]
};
/** CLEANING **/
App.Data.EffectLib["CLEANING_XP_COMMON"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Items.Consumable} o*/
    function(o,p) { p.AdjustSkillXP('Cleaning', 50); },
    "VALUE" : 100, "KNOWLEDGE" : [ "Cleaning XP+" ]
};
App.Data.EffectLib["CLEANING_XP_UNCOMMON"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Items.Consumable} o*/
    function(o,p) { p.AdjustSkillXP('Cleaning', 100); },
    "VALUE" : 200, "KNOWLEDGE" : [ "Cleaning XP++" ]
};
App.Data.EffectLib["CLEANING_XP_RARE"] = {
    "FUN" : /** @param {App.Entity.Player} p

     @param {App.Items.Consumable} o*/
    function(o,p) { p.AdjustSkillXP('Cleaning', 200); },
    "VALUE" : 400, "KNOWLEDGE" : [ "Cleaning XP+++" ]
};
App.Data.EffectLib["CLEANING_XP_LEGENDARY"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Items.Consumable} o*/
    function(o,p) { p.AdjustSkillXP('Cleaning', 400); },
    "VALUE" : 800, "KNOWLEDGE" : [ "Cleaning XP++++" ]
};
/** SEDUCTION **/
App.Data.EffectLib["SEDUCTION_XP_COMMON"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Items.Consumable} o*/
    function(o,p) { p.AdjustSkillXP('Seduction', 50); },
    "VALUE" : 100, "KNOWLEDGE" : [ "Seduction XP+" ]
};
App.Data.EffectLib["SEDUCTION_XP_UNCOMMON"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Items.Consumable} o*/
    function(o,p) { p.AdjustSkillXP('Seduction', 100); },
    "VALUE" : 200, "KNOWLEDGE" : [ "Seduction XP++" ]
};
App.Data.EffectLib["SEDUCTION_XP_RARE"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Items.Consumable} o*/
    function(o,p) { p.AdjustSkillXP('Seduction', 200); },
    "VALUE" : 400, "KNOWLEDGE" : [ "Seduction XP+++" ]
};
App.Data.EffectLib["SEDUCTION_XP_LEGENDARY"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Items.Consumable} o*/
    function(o,p) { p.AdjustSkillXP('Seduction', 400); },
    "VALUE" : 800, "KNOWLEDGE" : [ "Seduction XP++++" ]
};
/** RANDOM SKILL XP */
App.Data.EffectLib["RANDOM_SKILL_XP_LEGENDARY"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Items.Consumable} o*/
    function(o,p) {
        p.AdjustSkillXP( App.PR.GetRandomListItem( Object.keys(p.SkillsXP)), 400);
    },
    "VALUE" : 800, "KNOWLEDGE" : [ "Random Skill XP++++" ]
};
