App = App || { Data: { }, Entity: { } };
App.Data.EffectLib = App.Data.EffectLib || {};

//* FACE */
App.Data.EffectLib["FACE_REVERT_COMMON"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustBodyXP('Face', -50); },
    "VALUE" : 50, "KNOWLEDGE" : [ "Face Harder+" ]
};
App.Data.EffectLib["FACE_REVERT_UNCOMMON"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustBodyXP('Face', -100); },
    "VALUE" : 50, "KNOWLEDGE" : [ "Face Harder++" ]
};
App.Data.EffectLib["FACE_REVERT_RARE"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustBodyXP('Face', -200); },
    "VALUE" : 50, "KNOWLEDGE" : [ "Face Harder+++" ]
};
App.Data.EffectLib["FACE_REVERT_LEGENDARY"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustBodyXP('Face', -300); },
    "VALUE" : 50, "KNOWLEDGE" : [ "Face Harder++++" ]
};
//* BUST */
App.Data.EffectLib["BUST_REVERT_COMMON"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustBodyXP('Bust', -50); },
    "VALUE" : 50, "KNOWLEDGE" : [ "Bust Shrink+" ]
};
App.Data.EffectLib["BUST_REVERT_UNCOMMON"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustBodyXP('Bust', -100); },
    "VALUE" : 100, "KNOWLEDGE" : [ "Bust Shrink++" ]
};
App.Data.EffectLib["BUST_REVERT_RARE"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustBodyXP('Bust', -200); },
    "VALUE" : 200, "KNOWLEDGE" : [ "Bust Shrink+++" ]
};
App.Data.EffectLib["BUST_REVERT_LEGENDARY"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustBodyXP('Bust', -400); },
    "VALUE" : 400, "KNOWLEDGE" : [ "Bust Shrink++++" ]
};
//* ASS */
App.Data.EffectLib["ASS_REVERT_COMMON"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustBodyXP('Ass', -50); },
    "VALUE" : 50, "KNOWLEDGE" : [ "Ass Shrink+" ]
};
App.Data.EffectLib["ASS_REVERT_UNCOMMON"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustBodyXP('Ass', -100); },
    "VALUE" : 100, "KNOWLEDGE" : [ "Ass Shrink++" ]
};
App.Data.EffectLib["ASS_REVERT_RARE"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustBodyXP('Ass', -200); },
    "VALUE" : 200, "KNOWLEDGE" : [ "Ass Shrink+++" ]
};
App.Data.EffectLib["ASS_REVERT_LEGENDARY"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustBodyXP('Ass', -400); },
    "VALUE" : 400, "KNOWLEDGE" : [ "Ass Shrink++++" ]
};
/** HIPS */
App.Data.EffectLib["HIPS_REVERT_COMMON"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustBodyXP('Hips', -50); },
    "VALUE" : 50, "KNOWLEDGE" : [ "Hips Narrower+" ]
};
App.Data.EffectLib["HIPS_REVERT_UNCOMMON"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustBodyXP('Hips', -100); },
    "VALUE" : 100, "KNOWLEDGE" : [ "Hips Narrower++" ]
};
App.Data.EffectLib["HIPS_REVERT_RARE"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustBodyXP('Hips', -200); },
    "VALUE" : 200, "KNOWLEDGE" : [ "Hips Narrower+++" ]
};
App.Data.EffectLib["HIPS_REVERT_LEGENDARY"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustBodyXP('Hips', -400); },
    "VALUE" : 400, "KNOWLEDGE" : [ "Hips Narrower++++" ]
};
/** LIPS */
App.Data.EffectLib["LIPS_REVERT_COMMON"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustBodyXP('Lips', -50); },
    "VALUE" : 50, "KNOWLEDGE" : [ "Lips Thinner+" ]
};
App.Data.EffectLib["LIPS_REVERT_UNCOMMON"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustBodyXP('Lips', -100); },
    "VALUE" : 100, "KNOWLEDGE" : [ "Lips Thinner++" ]
};
App.Data.EffectLib["LIPS_REVERT_RARE"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustBodyXP('Lips', -200); },
    "VALUE" : 200, "KNOWLEDGE" : [ "Lips Thinner+++" ]
};
App.Data.EffectLib["LIPS_REVERT_LEGENDARY"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustBodyXP('Lips', -400); },
    "VALUE" : 400, "KNOWLEDGE" : [ "Lips Thinner++++" ]
};
/** PENIS */
App.Data.EffectLib["PENIS_REVERT_COMMON"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustBodyXP('Penis', -50); },
    "VALUE" : 50, "KNOWLEDGE" : [ "Penis Shrink+" ]
};
App.Data.EffectLib["PENIS_REVERT_UNCOMMON"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustBodyXP('Penis', -100); },
    "VALUE" : 100, "KNOWLEDGE" : [ "Penis Shrink++" ]
};
App.Data.EffectLib["PENIS_REVERT_RARE"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustBodyXP('Penis', -200); },
    "VALUE" : 200, "KNOWLEDGE" : [ "Penis Shrink+++" ]
};
App.Data.EffectLib["PENIS_REVERT_LEGENDARY"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustBodyXP('Penis', -400); },
    "VALUE" : 400, "KNOWLEDGE" : [ "Penis Shrink++++" ]
};
/** BALLS */
App.Data.EffectLib["BALLS_REVERT_COMMON"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustBodyXP('Balls', -50); },
    "VALUE" : 50, "KNOWLEDGE" : [ "Balls Shrink+" ]
};
App.Data.EffectLib["BALLS_REVERT_UNCOMMON"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustBodyXP('Balls', -100); },
    "VALUE" : 100, "KNOWLEDGE" : [ "Balls Shrink++" ]
};
App.Data.EffectLib["BALLS_REVERT_RARE"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustBodyXP('Balls', -200); },
    "VALUE" : 200, "KNOWLEDGE" : [ "Balls Shrink+++" ]
};
App.Data.EffectLib["BALLS_REVERT_LEGENDARY"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustBodyXP('Balls', -400); },
    "VALUE" : 400, "KNOWLEDGE" : [ "Balls Shrink++++" ]
};
/** WAIST */
App.Data.EffectLib["WAIST_REVERT_COMMON"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustBodyXP('Waist', 50); },
    "VALUE" : 50, "KNOWLEDGE" : [ "Waist Thicker+" ]
};
App.Data.EffectLib["WAIST_REVERT_UNCOMMON"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustBodyXP('Waist', 100); },
    "VALUE" : 100, "KNOWLEDGE" : [ "Waist Thicker++" ]
};
App.Data.EffectLib["WAIST_REVERT_RARE"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustBodyXP('Waist', 200); },
    "VALUE" : 200, "KNOWLEDGE" : [ "Waist Thicker+++" ]
};
App.Data.EffectLib["WAIST_REVERT_LEGENDARY"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
    function(o,p) { p.AdjustBodyXP('Waist', 400); },
    "VALUE" : 400, "KNOWLEDGE" : [ "Waist Thicker++++" ]
};