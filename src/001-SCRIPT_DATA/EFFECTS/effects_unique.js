App = App || { Data: { }, Entity: { } };
App.Data.EffectLib = App.Data.EffectLib || {};

App.Data.EffectLib["NEREID_PHILTRE"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Items.Consumable} o*/
        function(o,p) {
        p.AdjustStat('Hormones', 5);
        p.AdjustStat('Femininity', 5);
        p.AdjustStat('Toxicity', 50);
        p.AdjustStatXP('Femininity', 100);
        p.AdjustStatXP('WillPower', 200);
        p.AdjustStatXP('Hormones', 300);
        p.AdjustBodyXP('Face', 500);
        p.AdjustBodyXP('Hair', 500);
        p.AdjustBodyXP('Lips', 500);
        p.AdjustBodyXP('Waist',-500);
        p.AdjustSkillXP('Dancing', 500);
        p.AdjustSkillXP('Singing', 500);
        p.AdjustSkillXP('Seduction', 500);
    },
    "VALUE" : 2000,
    "KNOWLEDGE" : [ "Female Hormones++++", "Femininity Up+++", "Femininity XP+++", "Toxicity Up---",
        "Face Prettier++++", "Hair Growth++++", "Lips Fuller++++", "WillPower Up+++",
        "Waist Narrower++++", "Dancing XP++++", "Singing XP++++", "Seduction XP++++" ]
};

App.Data.EffectLib["SUCCUBUS_PHILTRE"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Items.Consumable} o*/
        function(o,p) {
        p.AdjustStat('Hormones', 5);
        p.AdjustStat('Femininity', 5);
        p.AdjustStat('Toxicity', 50);
        p.AdjustStatXP('Femininity', 300);
        p.AdjustStatXP('WillPower', 200);
        p.AdjustStatXP('Hormones', 300);
        p.AdjustStatXP('Perversion', 500);
        p.AdjustBodyXP('Bust', 500);
        p.AdjustBodyXP('Ass', 500);
        p.AdjustBodyXP('Hips', 500);
        p.AdjustBodyXP('Waist',-500);
        p.AdjustSkillXP('Seduction', 500);
    },
    "VALUE" : 2000,
    "KNOWLEDGE" : [ "Female Hormones++++", "Femininity Up+++", "Femininity XP+++", "Toxicity Up---",
        "Bust Growth++++", "Ass Growth++++", "Hips Wider++++", "WillPower Up+++",
        "Waist Narrower++++", "Perversion XP----", "Seduction XP++++" ]
};

App.Data.EffectLib["FEMALE_MANDRAKE"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Items.Consumable} o*/
        function(o,p) {
        p.AdjustStat('Hormones', 10);
        p.AdjustStat('Femininity', 15);
        p.AdjustStat('Toxicity', 80);
        p.AdjustStatXP('Femininity', 200);
        p.AdjustStatXP('WillPower', 400);
        p.AdjustStatXP('Hormones', 300);
        p.AdjustStatXP('Perversion', 300);
        p.AdjustBodyXP('Lips', 300);
        p.AdjustBodyXP('Bust', 300);
        p.AdjustBodyXP('Ass', 300);
        p.AdjustBodyXP('Hips', 300);
        p.AdjustBodyXP('Waist',-300);
        p.AdjustSkillXP('Seduction', 500);
    },
    "VALUE" : 2000,
    "KNOWLEDGE" : [ "Female Hormones++++", "Femininity Up+++", "Femininity XP+++", "Toxicity Up----",
        "Bust Growth+++", "Ass Growth+++", "Hips Wider+++", "WillPower Up+++",
        "Waist Narrower+++", "Lips Fuller+++", "Perversion XP+++", "Seduction XP++++" ]
};

App.Data.EffectLib["MALE_MANDRAKE"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Items.Consumable} o*/
        function(o,p) {
        p.AdjustStat('Hormones', -10);
        p.AdjustStat('Femininity', -15);
        p.AdjustStat('Toxicity', 80);
        p.AdjustStat('WillPower', 5);
        p.AdjustStatXP('Femininity', -200);
        p.AdjustStatXP('WillPower', 400);
        p.AdjustStatXP('Hormones', -300);
        p.AdjustStatXP('Perversion', 500);
        p.AdjustBodyXP('Lips', -300);
        p.AdjustBodyXP('Bust', -300);
        p.AdjustBodyXP('Penis', 500);
        p.AdjustBodyXP('Balls', 500);
        p.AdjustBodyXP('Ass', -300);
        p.AdjustBodyXP('Hips', -300);
        p.AdjustBodyXP('Waist', 300);
        p.AdjustSkillXP('Seduction', -500);
    },
    "VALUE" : 2000,
    "KNOWLEDGE" : [ "Female Hormones----", "Femininity Down+++", "Femininity XP---", "Toxicity Up----",
        "Bust Growth---", "Ass Growth---", "Hips Wider---", "WillPower Up++++", "Balls XP++++",
        "Penis XP++++", "Waist Narrower---", "Lips Fuller---", "Perversion XP+++", "Seduction XP----" ]
};

App.Data.EffectLib["SIREN_ELIXIR"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Items.Consumable} o*/
        function(o,p) {
        p.AdjustStatXP('WillPower', 200);
        p.AdjustStatXP('Hormones', 200);
        p.AdjustStatXP('Perversion',-200);
        p.AdjustBodyXP('Face', 100);
        p.AdjustBodyXP('Bust', 100);
        p.AdjustBodyXP('Hips', 100);
        p.AdjustBodyXP('Ass', 100);
        p.AdjustBodyXP('Waist',-100);
        p.AdjustBodyXP('Hair', 100);
    },
    "VALUE" : 500,
    "KNOWLEDGE" : [ "Female Hormones+++", "Face Prettier++",
        "Bust Growth++", "Ass Growth++", "Hips Wider++", "WillPower Up+++",
        "Waist Narrower++", "Perversion Down++++" ]
};

App.Data.EffectLib["ELECTUARY_MARS"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Items.Consumable} o*/
    function(o,p) {
        p.AdjustStat('Hormones', -200);
        p.AdjustBody('Face', -1000);
        p.AdjustBody('Bust', -15);
        p.AdjustBody('Hips', -20);
        p.AdjustBody('Ass', -16);
        p.AdjustBody('Waist', 18);
        p.AdjustBody('Lips', -20);
        p.AdjustBody('Height', +20);
        p.AdjustBody('Penis', 100);
        p.AdjustBody('Balls', 100);
    },
    "VALUE" : 5000,
        "KNOWLEDGE" : [ "Male Hormones++++", "Face Harder++++", "Bust Shrink----", "Hips Narrower----", "Ass Shrink----",
        "Waist Wider----", "Lips Thinner----", "Height Up++", "Penis Grow++++", "Balls Grow++++"]
};
/** POSSET VENUS */
App.Data.EffectLib["POSSET_VENUS"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Items.Consumable} o*/
    function(o,p) {
        p.AdjustStat('Hormones', 200);
        p.AdjustBody('Face', 1000);
        p.AdjustBody('Bust', 15);
        p.AdjustBody('Hips', 20);
        p.AdjustBody('Ass', 16);
        p.AdjustBody('Waist',-18);
        p.AdjustBody('Hair', 40);
        p.AdjustBody('Lips', 20);
        p.AdjustBody('Height', -20);
        p.AdjustBody('Penis', -100);
        p.AdjustBody('Balls', -100);
    },
    "VALUE" : 5000,
        "KNOWLEDGE" : [ "Female Hormones++++", "Face Prettier++++", "Bust Growth++++", "Hips Wider++++", "Ass Growth++++",
        "Waist Narrower++++", "Hair Growth++++", "Lips Fuller++++", "Height Down--", "Penis Shrink----",
        "Balls Shrink----" ]
};
/** BALSAM PULCHRITUDE */
App.Data.EffectLib["BALSAM_PULCHRITUDE"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Items.Consumable} o*/
    function(o,p) {
        p.AdjustStat('Hormones', 50);
        p.AdjustBody('Face', 20);
        p.AdjustBody('Hair', 40);
        p.AdjustBody('Lips', 20);
    },
    "VALUE" : 2000,
        "KNOWLEDGE" : [ "Face Prettier++++", "Lips Fuller++++", "Hair Growth++++", "Female Hormones++", ]
};
/** OIL ENDOWMENT */
App.Data.EffectLib["OIL_ENDOWMENT"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Items.Consumable} o*/
    function(o,p) {
        p.AdjustStat('Hormones', -200);
        p.AdjustBody('Penis', 40);
        p.AdjustBody('Balls', 40);
    },
    "VALUE" : 2000,
        "KNOWLEDGE" : [ "Penis Grow++++", "Balls Grow++++", "Male Hormones++++",]
};
/** RESOLUTE_DROUGHT */
App.Data.EffectLib["RESOLUTE_DROUGHT"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Items.Consumable} o*/
    function(o,p) {
        p.AdjustStat('WillPower', 10);
        p.AdjustStat('Energy', 100);
        p.AdjustStat('Health', 100);
        p.AdjustStat('Toxicity', -100);
    },
    "VALUE" : 2000,
        "KNOWLEDGE" : [ "WillPower Up++++", "Energy Up++++", "Health Up++++", "Toxicity Down----" ]
};

App.Data.EffectLib["MAGIC_COCK_RING"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Items.Consumable} o*/
    function(o,p) {
        p.SetXP('BODY','Penis', 0);
        p.SetXP('BODY','Balls', 0);
    },
    "VALUE" : 0,
        "KNOWLEDGE" : [ "Gential Protection++++" ]
};

App.Data.EffectLib["VOODOO_ANAL_PLUG"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Items.Consumable} o*/
    function(o,p) {
        p.AdjustBodyXP('Ass', 50, 70);
        p.AdjustBodyXP('Hips', 50, 70);
        p.AdjustStatXP('Perversion', 50, 70);
        p.AdjustSkillXP('AssFucking', 50, 70);
    },
    "VALUE" : 0,
        "KNOWLEDGE" : [ "Ass Growth++++", "Hips Growth++++", "Kinky+++", "Gape Training+++" ]
};

App.Data.EffectLib["VOODOO_ANAL_PLUG2"] = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Items.Consumable} o*/
     function(o,s) { return ( s == "AssFucking") ? 20 : 0; },
    "VALUE" : 0,
        "KNOWLEDGE" : [ "Butt Slut++++" ]
};