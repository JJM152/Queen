/** CLOTHING PASSIVE WORN EFFECTS **/
//======================================
App.Data.EffectLib["FEMININE_CLOTHING"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Items.Clothing} o */
    function(o,p) {
        var gain = 0;
        var limit = 0;
        switch(o.Data.Style) {
            case 'COMMON': gain = 5; limit = 30; break;
            case 'UNCOMMON': gain = 10; limit = 60; break;
            case 'RARE': gain = 15; limit = 80; break;
            case 'LEGENDARY': gain = 20; limit = 0; break;
        }
        switch(o.Data.Type) {
            case 'ACCESSORY': gain = Math.ceil(gain * 0.8); break;
            case 'ONE PIECE': gain = Math.ceil(gain * 2.2); break;
        }
        p.AdjustStatXP('Femininity', gain, limit);
    },
    "VALUE" : 50,
        "KNOWLEDGE" : [ "Feminine ClothingRANK" ]
};
App.Data.EffectLib["SEXY_CLOTHING"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Items.Clothing} o */
    function(o,p) {
        var gain = 0;
        var limit = 0;
        switch(o.Data.Style) {
            case 'COMMON': gain = 5; limit = 30; break;
            case 'UNCOMMON': gain = 10; limit = 60; break;
            case 'RARE': gain = 15; limit = 80; break;
            case 'LEGENDARY': gain = 20; limit = 0; break;
        }
        switch(o.Data.Type) {
            case 'ACCESSORY': gain = Math.ceil(gain * 0.8); break;
            case 'ONE PIECE': gain = Math.ceil(gain * 2.2); break;
        }
        p.AdjustStatXP('Femininity', gain, limit);
        p.AdjustSkillXP('Seduction', gain, limit);
    },
    "VALUE" : 50,
        "KNOWLEDGE" : [ "Sexy ClothingRANK" ]
};
App.Data.EffectLib["PERVERTED_CLOTHING"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Items.Clothing} o */
    function(o,p) {
        var gain = 0;
        var limit = 0;
        switch(o.Data.Style) {
            case 'COMMON': gain = 5; limit = 30; break;
            case 'UNCOMMON': gain = 10; limit = 60; break;
            case 'RARE': gain = 15; limit = 80; break;
            case 'LEGENDARY': gain = 20; limit = 0; break;
        }
        switch(o.Data.Type) {
            case 'ACCESSORY': gain = Math.ceil(gain * 0.8); break;
            case 'ONE PIECE': gain = Math.ceil(gain * 2.2); break;
        }
        p.AdjustStatXP('Perversion', gain, limit);
    },
    "VALUE" : 100,
        "KNOWLEDGE" : [ "Pervert!RANK" ]
};
App.Data.EffectLib["KINKY_CLOTHING"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Items.Clothing} o */
    function(o,p) {
        var gain = 0;
        var limit = 0;
        switch(o.Data.Style) {
            case 'COMMON': gain = 5; limit = 15; break;
            case 'UNCOMMON': gain = 10; limit = 30; break;
            case 'RARE': gain = 15; limit = 40; break;
            case 'LEGENDARY': gain = 20; limit = 60; break;
        }
        switch(o.Data.Type) {
            case 'ACCESSORY': gain = Math.ceil(gain * 0.8); break;
            case 'ONE PIECE': gain = Math.ceil(gain * 2.2); break;
        }
        p.AdjustStatXP('Perversion', gain, limit);
    },
    "VALUE" : 100,
        "KNOWLEDGE" : [ "KinkyRANK" ]
};
App.Data.EffectLib["SLAVE_COLLAR"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Items.Consumable} o*/
    function(o,p) { p.AdjustStatXP('WillPower',-20, 50);p.AdjustStatXP("Perversion", 20, 50); },
    "VALUE" : 0,
        "KNOWLEDGE" : [ "Slave Breaking--", "Kinky+" ]
};
App.Data.EffectLib["WAIST_CINCHING"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Items.Consumable} o*/
    function(o,p) { p.AdjustBodyXP('Waist',-20, 30); },
    "VALUE" : 100,
        "KNOWLEDGE" : [ "Waist Training+" ]
};
App.Data.EffectLib["WAIST_TRAINING"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Items.Consumable} o*/
    function(o,p) { p.AdjustBodyXP('Waist',-20, 20); },
    "VALUE" : 100,
        "KNOWLEDGE" : [ "Waist Training++" ]
};
App.Data.EffectLib["EXTREME_WAIST_TRAINING"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Items.Consumable} o*/
    function(o,p) { p.AdjustBodyXP('Waist',-20, 10); },
    "VALUE" : 250,
        "KNOWLEDGE" : [ "Waist Training++++" ]
};
App.Data.EffectLib["GAPE_TRAINING"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Items.Consumable} o*/
    function(o,p) { p.AdjustSkillXP('AssFucking', 20, 80); },
    "VALUE" : 200,
        "KNOWLEDGE" : [ "Gape Training++" ]
};
App.Data.EffectLib["CHASTITY_CAGE"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Items.Consumable} o*/
    function(o,p) {
        p.AdjustBodyXP('Penis',-20, 20);
        p.AdjustBodyXP('Balls',-20, 10);
        p.AdjustStatXP("Perversion", 20, 70); },
    "VALUE" : 0,
        "KNOWLEDGE" : [ "Ball Breaking--", "Kinky++" ]
};
//======================================
/** CLOTHING ACTIVE WORN EFFECTS **/
//======================================
App.Data.EffectLib["SUCCUBUS_ALLURE"] = {
    "FUN" : /** @param {string} s
     @param {App.Items.Consumable} o*/
    function(o,s) { return ( s == "Seduction") ? 20 : 0; },
    "VALUE" : 200,
        "KNOWLEDGE" : [ "Allure of the Succubus++++" ]
};
App.Data.EffectLib["FLIRTY"] = {
    "FUN" : /** @param {string} s
     @param {App.Items.Consumable} o*/
    function(o,s) { return ( s == "Seduction") ? 10 : 0; },
    "VALUE" : 100,
        "KNOWLEDGE" : [ "Flirty++" ]
};
App.Data.EffectLib["MINOR_PIRATES_GRACE"] = {
    "FUN" : /** @param {string} s
     @param {App.Items.Consumable} o*/
    function(o,s) { return (s == 'Navigating' || s == 'Sailing') ? 10 : 0; },
    "VALUE" : 200,
        "KNOWLEDGE" : [ "Pirate's Grace++" ]
};
App.Data.EffectLib["MAJOR_PIRATES_GRACE"] = {
    "FUN" : /** @param {string} s
     @param {App.Items.Consumable} o*/
    function(o,s) { return (s == 'Navigating' || s == 'Sailing' || s == 'Swashbuckling') ? 20 : 0; },
    "VALUE" : 500,
        "KNOWLEDGE" : [ "Pirate's Grace++++" ]
};
App.Data.EffectLib["CUT_THROAT"] = {
    "FUN" : /** @param {string} s
     @param {App.Items.Consumable} o*/
    function(o,s) { return ( s == "Swashbuckling") ? 10 : 0; },
    "VALUE" : 200,
        "KNOWLEDGE" : [ "Cut Throat++" ]
};
App.Data.EffectLib["MINOR_STRIPPERS_ALLURE"] = {
    "FUN" : /** @param {string} s
     @param {App.Items.Consumable} o*/
    function(o,s) { return (s == 'Fitness' || s == 'Dancing' || s == 'Seduction') ? 10 : 0; },
    "VALUE" : 300,
        "KNOWLEDGE" : [ "Stripper's Allure++" ]
};
App.Data.EffectLib["MAJOR_STRIPPERS_ALLURE"] = {
    "FUN" : /** @param {string} s
     @param {App.Items.Consumable} o*/
    function(o,s) { return (s == 'Fitness' || s == 'Dancing' || s == 'Seduction') ? 15 : 0; },
    "VALUE" : 500,
        "KNOWLEDGE" : [ "Stripper's Allure+++" ]
};
App.Data.EffectLib["GREATER_STRIPPERS_ALLURE"] = {
    "FUN" : /** @param {string} s
     @param {App.Items.Consumable} o*/
    function(o,s) { return (s == 'Fitness' || s == 'Dancing' || s == 'Seduction') ? 20 : 0; },
    "VALUE" : 800,
        "KNOWLEDGE" : [ "Stripper's Allure++++" ]
};
App.Data.EffectLib["FANCY_MOVES"] = {
    "FUN" : /** @param {string} s
     @param {App.Items.Consumable} o*/
    function(o,s) { return ( s == "Dancing") ? 10 : 0; },
    "VALUE" : 200,
        "KNOWLEDGE" : [ "Fancy Moves++" ]
};
App.Data.EffectLib["REALLY_FANCY_MOVES"] = {
    "FUN" : /** @param {string} s
     @param {App.Items.Consumable} o*/
    function(o,s) { return (s == 'Dancing' || s == 'Seduction') ? 15 : 0; },
    "VALUE" : 600,
        "KNOWLEDGE" : [ "Fancy Moves+++" ]
};
App.Data.EffectLib["MAIDS_PROWESS"] = {
    "FUN" : /** @param {string} s
     @param {App.Items.Consumable} o*/
    function(o,s) { return (s == 'Cooking' || s == 'Cleaning' || s == 'Serving') ? 10 : 0; },
    "VALUE" : 300,
        "KNOWLEDGE" : [ "Maid's Prowess++" ]
};
