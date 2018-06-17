App = App || { Data: { }, Entity: { } };
App.Data.EffectLib = App.Data.EffectLib || {};

/** HEIGHT */
App.Data.EffectLib["SHRINK_COMMON"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustBodyXP('Height',-50); },
    "VALUE" : 15, "KNOWLEDGE" : [ "Height Down-" ]
};
App.Data.EffectLib["SHRINK_UNCOMMON"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustBodyXP('Height',-100); },
    "VALUE" : 30, "KNOWLEDGE" : [ "Height Down--" ]
};
App.Data.EffectLib["SHRINK_RARE"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustBodyXP('Height',-200); },
    "VALUE" : 60, "KNOWLEDGE" : [ "Height Down---" ]
};
App.Data.EffectLib["SHRINK_LEGENDARY"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustBodyXP('Height',-400); },
    "VALUE" : 120, "KNOWLEDGE" : [ "Height Down----" ]
};
/** HAIR */
App.Data.EffectLib["HAIR_XP_COMMON"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustBodyXP('Hair', 50); },
    "VALUE" : 25, "KNOWLEDGE" : [ "Hair Growth+" ]
};
App.Data.EffectLib["HAIR_XP_UNCOMMON"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustBodyXP('Hair', 100); },
    "VALUE" : 50, "KNOWLEDGE" : [ "Hair Growth++" ]
};
App.Data.EffectLib["HAIR_XP_RARE"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustBodyXP('Hair', 200); },
    "VALUE" : 100, "KNOWLEDGE" : [ "Hair Growth+++" ]
};
App.Data.EffectLib["HAIR_XP_LEGENDARY"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustBodyXP('Hair', 400); },
    "VALUE" : 200, "KNOWLEDGE" : [ "Hair Growth++++" ]
};
/** FACE */
App.Data.EffectLib["FACE_XP_COMMON"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustBodyXP('Face', 50); },
    "VALUE" : 50, "KNOWLEDGE" : [ "Face Prettier+" ]
};
App.Data.EffectLib["FACE_XP_UNCOMMON"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustBodyXP('Face', 100); },
    "VALUE" : 100, "KNOWLEDGE" : [ "Face Prettier++" ]
};
App.Data.EffectLib["FACE_XP_RARE"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustBodyXP('Face', 200); },
    "VALUE" : 200, "KNOWLEDGE" : [ "Face Prettier+++" ]
};
App.Data.EffectLib["FACE_XP_LEGENDARY"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustBodyXP('Face', 400); },
    "VALUE" : 400, "KNOWLEDGE" : [ "Face Prettier++++" ]
};
/** BUST */
App.Data.EffectLib["BUST_XP_COMMON"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustBodyXP('Bust', 50); },
    "VALUE" : 50, "KNOWLEDGE" : [ "Bust Grow+" ]
};
App.Data.EffectLib["BUST_XP_UNCOMMON"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustBodyXP('Bust', 100); },
    "VALUE" : 100, "KNOWLEDGE" : [ "Bust Grow++" ]
};
App.Data.EffectLib["BUST_XP_RARE"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustBodyXP('Bust', 200); },
    "VALUE" : 200, "KNOWLEDGE" : [ "Bust Grow+++" ]
};
App.Data.EffectLib["BUST_XP_LEGENDARY"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustBodyXP('Bust', 400); },
    "VALUE" : 400, "KNOWLEDGE" : [ "Bust Grow++++" ]
};
/** ASS */
App.Data.EffectLib["ASS_XP_COMMON"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustBodyXP('Ass', 50); },
    "VALUE" : 50, "KNOWLEDGE" : [ "Ass Grow+" ]
};
App.Data.EffectLib["ASS_XP_UNCOMMON"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustBodyXP('Ass', 100); },
    "VALUE" : 100, "KNOWLEDGE" : [ "Ass Grow++" ]
};
App.Data.EffectLib["ASS_XP_RARE"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustBodyXP('Ass', 200); },
    "VALUE" : 200, "KNOWLEDGE" : [ "Ass Grow+++" ]
};
App.Data.EffectLib["ASS_XP_LEGENDARY"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustBodyXP('Ass', 400); },
    "VALUE" : 400, "KNOWLEDGE" : [ "Ass Grow++++" ]
};
/** HIPS */
App.Data.EffectLib["HIPS_XP_COMMON"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustBodyXP('Hips', 50); },
    "VALUE" : 50, "KNOWLEDGE" : [ "Hips Wider+" ]
};
App.Data.EffectLib["HIPS_XP_UNCOMMON"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustBodyXP('Hips', 100); },
    "VALUE" : 100, "KNOWLEDGE" : [ "Hips Wider++" ]
};
App.Data.EffectLib["HIPS_XP_RARE"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustBodyXP('Hips', 200); },
    "VALUE" : 200, "KNOWLEDGE" : [ "Hips Wider+++" ]
};
App.Data.EffectLib["HIPS_XP_LEGENDARY"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustBodyXP('Hips', 400); },
    "VALUE" : 400, "KNOWLEDGE" : [ "Hips Wider++++" ]
};
/** LIPS */
App.Data.EffectLib["LIPS_XP_COMMON"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustBodyXP('Lips', 50); },
    "VALUE" : 50, "KNOWLEDGE" : [ "Lips Plumper+" ]
};
App.Data.EffectLib["LIPS_XP_UNCOMMON"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustBodyXP('Lips', 100); },
    "VALUE" : 100, "KNOWLEDGE" : [ "Lips Plumper++" ]
};
App.Data.EffectLib["LIPS_XP_RARE"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustBodyXP('Lips', 200); },
    "VALUE" : 200, "KNOWLEDGE" : [ "Lips Plumper+++" ]
};
App.Data.EffectLib["LIPS_XP_LEGENDARY"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustBodyXP('Lips', 400); },
    "VALUE" : 400, "KNOWLEDGE" : [ "Lips Plumper++++" ]
};
/** PENIS */
App.Data.EffectLib["PENIS_XP_COMMON"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustBodyXP('Penis', 50); },
    "VALUE" : 50, "KNOWLEDGE" : [ "Penis Grow+" ]
};
App.Data.EffectLib["PENIS_XP_UNCOMMON"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustBodyXP('Penis', 100); },
    "VALUE" : 100, "KNOWLEDGE" : [ "Penis Grow++" ]
};
App.Data.EffectLib["PENIS_XP_RARE"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustBodyXP('Penis', 200); },
    "VALUE" : 200, "KNOWLEDGE" : [ "Penis Grow+++" ]
};
App.Data.EffectLib["PENIS_XP_LEGENDARY"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustBodyXP('Penis', 400); },
    "VALUE" : 400, "KNOWLEDGE" : [ "Penis Grow++++" ]
};
/** BALLS */
App.Data.EffectLib["BALLS_XP_COMMON"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustBodyXP('Balls', 50); },
    "VALUE" : 50, "KNOWLEDGE" : [ "Balls Grow+" ]
};
App.Data.EffectLib["BALLS_XP_UNCOMMON"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustBodyXP('Balls', 100); },
    "VALUE" : 100, "KNOWLEDGE" : [ "Balls Grow++" ]
};
App.Data.EffectLib["BALLS_XP_RARE"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustBodyXP('Balls', 200); },
    "VALUE" : 200, "KNOWLEDGE" : [ "Balls Grow+++" ]
};
App.Data.EffectLib["BALLS_XP_LEGENDARY"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustBodyXP('Balls', 400); },
    "VALUE" : 400, "KNOWLEDGE" : [ "Balls Grow++++" ]
};
/** WAIST */
App.Data.EffectLib["WAIST_XP_COMMON"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustBodyXP('Waist', -50); },
    "VALUE" : 50, "KNOWLEDGE" : [ "Waist Narrower+" ]
};
App.Data.EffectLib["WAIST_XP_UNCOMMON"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustBodyXP('Waist', -100); },
    "VALUE" : 100, "KNOWLEDGE" : [ "Waist Narrower++" ]
};
App.Data.EffectLib["WAIST_XP_RARE"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustBodyXP('Waist', -200); },
    "VALUE" : 200, "KNOWLEDGE" : [ "Waist Grow+++" ]
};
App.Data.EffectLib["WAIST_XP_LEGENDARY"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustBodyXP('Waist', -400); },
    "VALUE" : 400, "KNOWLEDGE" : [ "Waist Grow++++" ]
};
