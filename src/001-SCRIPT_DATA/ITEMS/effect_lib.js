App = App || { Data: { }, Entity: { } };

App.Data.EffectLib = {
//======================================
    /** UNIQUE POTIONS **/
//======================================	
	/** NEREID PHILTRE */
    "NEREID_PHILTRE" : { 
        "FUN" :/** @param {App.Entity.Player} p */ 
            function(p) {
                p.AdjustStat('Hormones', 5);
                p.AdjustStat('Femininity', 5);
                p.AdjustStat('Toxicity', 50);
                p.AdjustStatXP('Femininity', 100);
                p.AdjustStatXP('WillPower', 200);
                p.AdjustStatXP('Hormones', 300);
                p.AdjustBodyXP('Face', 500);
                p.AdjustBodyXP('Hair', 500);
                p.AdjustBodyXP('Lips', 500);
                p.AdjustBodyXP('Waist', -500);
                p.AdjustSkillXP('Dancing', 500);
                p.AdjustSkillXP('Singing', 500);
                p.AdjustSkillXP('Seduction', 500);
        },
        "VALUE" : 2000,
        "KNOWLEDGE" : [ "Female Hormones ++++", "Femininity Up +++", "Femininity XP +++", "Toxicity Up ---",
                        "Face Prettier ++++", "Hair Growth ++++", "Lips Fuller ++++", "WillPower Up +++",
                        "Waist Narrower ++++", "Dancing XP ++++", "Singing XP ++++", "Seduction XP ++++" ]
    },
	/** SUCCUBUS PHILTRE */
    "SUCCUBUS_PHILTRE" : {
        "FUN" :/** @param {App.Entity.Player} p */
            function(p) {
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
            p.AdjustBodyXP('Waist', -500);
            p.AdjustSkillXP('Seduction', 500);
        },
        "VALUE" : 2000,
        "KNOWLEDGE" : [ "Female Hormones ++++", "Femininity Up +++", "Femininity XP +++", "Toxicity Up ---",
            "Bust Growth ++++", "Ass Growth ++++", "Hips Wider ++++", "WillPower Up +++",
            "Waist Narrower ++++", "Perversion XP ----", "Seduction XP ++++" ]
    },
	/** SIREN ELIXIR */
    "SIREN_ELIXIR" : {
        "FUN" :/** @param {App.Entity.Player} p */
            function(p) {
            p.AdjustStatXP('WillPower', 200);
            p.AdjustStatXP('Hormones', 200);
            p.AdjustStatXP('Perversion', -200);
            p.AdjustBodyXP('Face', 100);
            p.AdjustBodyXP('Bust', 100);
            p.AdjustBodyXP('Hips', 100);
            p.AdjustBodyXP('Ass', 100);
            p.AdjustBodyXP('Waist', -100);
            p.AdjustBodyXP('Hair', 100);
        },
        "VALUE" : 500,
        "KNOWLEDGE" : [ "Female Hormones +++", "Face Prettier ++",
            "Bust Growth ++", "Ass Growth ++", "Hips Wider ++", "WillPower Up +++",
            "Waist Narrower ++", "Perversion Down ++++" ]
    },
//======================================
    /** CORE STATS **/
//======================================
    /** ENERGY */
    "ENERGY_COMMON" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) { p.AdjustStat('Energy', 1); },
        "VALUE" : 20, "KNOWLEDGE" : [ "Energy Up +" ]
    },    
    "ENERGY_UNCOMMON" : {
        "FUN" : /** @param {App.Entity.Player} p */
          function(p) { p.AdjustStat('Energy', 3); }, 
        "VALUE" : 50, "KNOWLEDGE" : [ "Energy Up ++" ]
    },
    "ENERGY_RARE" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) { p.AdjustStat('Energy', 5); },
        "VALUE" : 100, "KNOWLEDGE" : [ "Energy Up +++" ]
    },
    "ENERGY_LEGENDARY" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) { p.AdjustStat('Energy', 8); },
        "VALUE" : 200, "KNOWLEDGE" : [ "Energy Up ++++" ]
    },
    /** TOXICITY */
    "TOXICITY_COMMON" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) { p.AdjustStat('Toxicity', 10); },
        "VALUE" : 0, "KNOWLEDGE" : [ "Toxicity Up -" ]
    },
    "TOXICITY_UNCOMMON" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) { p.AdjustStat('Toxicity', 30); },
        "VALUE" : 0, "KNOWLEDGE" : [ "Toxicity Up --" ]
    },
    "TOXICITY_RARE" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) { p.AdjustStat('Toxicity', 50); },
        "VALUE" : 0, "KNOWLEDGE" : [ "Toxicity Up ---" ]
    },
    "TOXICITY_LEGENDARY" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) { p.AdjustStat('Toxicity', 80); },
        "VALUE" : 0, "KNOWLEDGE" : [ "Toxicity Up ----" ]
    },
    "PURGE_COMMON" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) { p.AdjustStat('Toxicity', -30); },
        "VALUE" : 20, "KNOWLEDGE" : [ "Toxicity Down +" ]
    },
    "PURGE_UNCOMMON" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) { p.AdjustStat('Toxicity', -50); },
        "VALUE" : 40, "KNOWLEDGE" : [ "Toxicity Down ++" ]
    },
    "PURGE_RARE" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) { p.AdjustStat('Toxicity', -80); },
        "VALUE" : 80, "KNOWLEDGE" : [ "Toxicity Down +++" ]
    },
    "PURGE_LEGENDARY" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) { p.AdjustStat('Toxicity', -120); },
        "VALUE" : 160, "KNOWLEDGE" : [ "Toxicity Down ++++" ]
    },
    /** WILLPOWER */
    "BREAK_WILL_COMMON" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) { p.AdjustStatXP('WillPower', -50); },
        "VALUE" : 0, "KNOWLEDGE" : [ "WillPower Down -" ]
    },
    "BREAK_WILL_UNCOMMON" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) { p.AdjustStatXP('WillPower', -100); },
        "VALUE" : 0, "KNOWLEDGE" : [ "WillPower Down --" ]
    },
    "BREAK_WILL_RARE" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) { p.AdjustStatXP('WillPower', -200); },
        "VALUE" : 0, "KNOWLEDGE" : [ "WillPower Down ---" ]
    },
    "BREAK_WILL_LEGENDARY" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) { p.AdjustStatXP('WillPower', -400); },
        "VALUE" : 0, "KNOWLEDGE" : [ "WillPower Down ----" ]
    },
    "BOLSTER_WILL_COMMON" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) { p.AdjustStatXP('WillPower', 50); },
        "VALUE" : 75, "KNOWLEDGE" : [ "WillPower Up +" ]
    },
    "BOLSTER_WILL_UNCOMMON" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) { p.AdjustStatXP('WillPower', 100); },
        "VALUE" :150, "KNOWLEDGE" : [ "WillPower Up ++" ]
    },
    "BOLSTER_WILL_RARE" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) { p.AdjustStatXP('WillPower', 200); },
        "VALUE" : 300, "KNOWLEDGE" : [ "WillPower Up +++" ]
    },
    "BOLSTER_WILL_LEGENDARY" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) { p.AdjustStatXP('WillPower', 400); },
        "VALUE" : 600, "KNOWLEDGE" : [ "WillPower Up ++++" ]
    },    
    /** NUTRITION */
    "NUTRITION_WEAK" : {
    "FUN" : /** @param {App.Entity.Player} p */
        function(p) { p.AdjustStat('Nutrition', 5); },
    "VALUE" : 5, "KNOWLEDGE" : [ "Nutrition Up" ]
    },
    "NUTRITION_COMMON" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) { p.AdjustStat('Nutrition', 10); },
        "VALUE" : 10, "KNOWLEDGE" : [ "Nutrition Up +" ]
    },
    "NUTRITION_UNCOMMON" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) { p.AdjustStat('Nutrition', 20); },
        "VALUE" : 20, "KNOWLEDGE" : [ "Nutrition Up ++" ]
    },
    "NUTRITION_RARE" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) { p.AdjustStat('Nutrition', 50); },
        "VALUE" : 50, "KNOWLEDGE" : [ "Nutrition Up +++" ]
    },
    "NUTRITION_LEGENDARY" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) { p.AdjustStat('Nutrition', 100); },
        "VALUE" : 100, "KNOWLEDGE" : [ "Nutrition Up ++++" ]
    },
    "NUTRITION_XP_WEAK" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) { p.AdjustStatXP('Nutrition', 10); },
        "VALUE" : 5, "KNOWLEDGE" : [ "Satiation Up" ]
    },
    "NUTRITION_XP_COMMON" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) { p.AdjustStat('Nutrition', 25); },
        "VALUE" : 10, "KNOWLEDGE" : [ "Satiation Up +" ]
    },
    "NUTRITION_XP_UNCOMMON" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) { p.AdjustStat('Nutrition', 50); },
        "VALUE" : 20, "KNOWLEDGE" : [ "Satiation Up ++" ]
    },
    "NUTRITION_XP_RARE" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) { p.AdjustStat('Nutrition', 100); },
        "VALUE" : 50, "KNOWLEDGE" : [ "Satiation Up +++" ]
    },
    "NUTRITION_XP_LEGENDARY" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) { p.AdjustStat('Nutrition', 200); },
        "VALUE" : 100, "KNOWLEDGE" : [ "Satiation Up ++++" ]
    },    
    /** HEALTH **/
    "HEAL_COMMON" : {
    "FUN" : /** @param {App.Entity.Player} p */
        function(p) { p.AdjustStat('Health', 20); },
    "VALUE" : 20, "KNOWLEDGE" : [ "Health Up +" ]
    },
    "HEAL_UNCOMMON" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) { p.AdjustStat('Health', 40); },
        "VALUE" : 50, "KNOWLEDGE" : [ "Health Up ++" ]
    },
    "HEAL_RARE" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) { p.AdjustStat('Health', 75); p.AdjustStat('Toxicity', -50); },
        "VALUE" : 150, "KNOWLEDGE" : [ "Health Up +++" ]
    },
    "HEAL_LEGENDARY" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) { p.AdjustStat('Health', 100); p.AdjustStat('Toxicity', -100); },
        "VALUE" : 300, "KNOWLEDGE" : [ "Health Up ++++" ]
    },
    /** HORMONES */
    "MALE_HORMONE_XP_COMMON" : {
    "FUN" : /** @param {App.Entity.Player} p */
        function(p) { p.AdjustStatXP('Hormones', -50); },
    "VALUE" : 25, "KNOWLEDGE" : [ "Male Hormones +" ]
    },
    "MALE_HORMONE_XP_UNCOMMON" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) { p.AdjustStatXP('Hormones', -100); },
        "VALUE" : 50, "KNOWLEDGE" : [ "Male Hormones ++" ]
    },
    "MALE_HORMONE_XP_RARE" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) { p.AdjustStatXP('Hormones', -200); },
        "VALUE" : 100, "KNOWLEDGE" : [ "Male Hormones +++" ]
    },
    "MALE_HORMONE_XP_LEGENDARY" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) { p.AdjustStatXP('Hormones', -400); },
        "VALUE" : 200, "KNOWLEDGE" : [ "Male Hormones ++++" ]
    },
    "FEMALE_HORMONE_XP_COMMON" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) { p.AdjustStatXP('Hormones', 50); },
        "VALUE" : 10, "KNOWLEDGE" : [ "Female Hormones +" ]
    },
    "FEMALE_HORMONE_XP_UNCOMMON" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) { p.AdjustStatXP('Hormones', 100); },
        "VALUE" : 20, "KNOWLEDGE" : [ "Female Hormones ++" ]
    },
    "FEMALE_HORMONE_XP_RARE" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) { p.AdjustStatXP('Hormones', 200); },
        "VALUE" : 40, "KNOWLEDGE" : [ "Female Hormones +++" ]
    },
    "FEMALE_HORMONE_XP_LEGENDARY" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) { p.AdjustStatXP('Hormones', 400); },
        "VALUE" : 80, "KNOWLEDGE" : [ "Female Hormones ++++" ]
    },
    /** PERVERSION **/
    "PERVERSION_XP_COMMON" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) { p.AdjustStat('Perversion', 25); },
        "VALUE" : 10, "KNOWLEDGE" : [ "Perversion Up +" ]
    },
    "PERVERSION_XP_UNCOMMON" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) { p.AdjustStat('Perversion', 50); },
        "VALUE" : 20, "KNOWLEDGE" : [ "Perversion Up ++" ]
    },
    "PERVERSION_XP_RARE" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) { p.AdjustStat('Perversion', 100); },
        "VALUE" : 50, "KNOWLEDGE" : [ "Perversion Up +++" ]
    },
    "PERVERSION_XP_LEGENDARY" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) { p.AdjustStat('Perversion', 200); },
        "VALUE" : 100, "KNOWLEDGE" : [ "Perversion Up ++++" ]
    },    
//======================================
    /** BODY STATS **/
//======================================
    /** HEIGHT */
    "SHRINK_COMMON" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) { p.AdjustBodyXP('Height', -50); },
        "VALUE" : 15, "KNOWLEDGE" : [ "Height Down -" ]
    },
    "SHRINK_UNCOMMON" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) { p.AdjustBodyXP('Height', -100); },
        "VALUE" : 30, "KNOWLEDGE" : [ "Height Down --" ]
    },
    "SHRINK_RARE" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) { p.AdjustBodyXP('Height', -200); },
        "VALUE" : 60, "KNOWLEDGE" : [ "Height Down ---" ]
    },
    "SHRINK_LEGENDARY" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) { p.AdjustBodyXP('Height', -400); },
        "VALUE" : 120, "KNOWLEDGE" : [ "Height Down ----" ]
    },
    /** HAIR */
    "HAIR_XP_COMMON" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) { p.AdjustBodyXP('Hair', 50); },
        "VALUE" : 25, "KNOWLEDGE" : [ "Hair Growth +" ]
    },
    "HAIR_XP_UNCOMMON" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) { p.AdjustBodyXP('Hair', 100); },
        "VALUE" : 50, "KNOWLEDGE" : [ "Hair Growth ++" ]
    },
    "HAIR_XP_RARE" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) { p.AdjustBodyXP('Hair', 200); },
        "VALUE" : 100, "KNOWLEDGE" : [ "Hair Growth +++" ]
    },
    "HAIR_XP_LEGENDARY" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) { p.AdjustBodyXP('Hair', 400); },
        "VALUE" : 200, "KNOWLEDGE" : [ "Hair Growth ++++" ]
    },
    /** FACE */
    "FACE_XP_COMMON" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) { p.AdjustBodyXP('Face', 50); },
        "VALUE" : 50, "KNOWLEDGE" : [ "Face Prettier +" ]
    },
    "FACE_XP_UNCOMMON" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) { p.AdjustBodyXP('Face', 100); },
        "VALUE" : 100, "KNOWLEDGE" : [ "Face Prettier ++" ]
    },
    "FACE_XP_RARE" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) { p.AdjustBodyXP('Face', 200); },
        "VALUE" : 200, "KNOWLEDGE" : [ "Face Prettier +++" ]
    },
    "FACE_XP_LEGENDARY" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) { p.AdjustBodyXP('Face', 400); },
        "VALUE" : 400, "KNOWLEDGE" : [ "Face Prettier ++++" ]
    },
    /** BUST */
    "BUST_XP_COMMON" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) { p.AdjustBodyXP('Bust', 50); },
        "VALUE" : 50, "KNOWLEDGE" : [ "Bust Grow +" ]
    },
    "BUST_XP_UNCOMMON" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) { p.AdjustBodyXP('Bust', 100); },
        "VALUE" : 100, "KNOWLEDGE" : [ "Bust Grow ++" ]
    },
    "BUST_XP_RARE" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) { p.AdjustBodyXP('Bust', 200); },
        "VALUE" : 200, "KNOWLEDGE" : [ "Bust Grow +++" ]
    },
    "BUST_XP_LEGENDARY" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) { p.AdjustBodyXP('Bust', 400); },
        "VALUE" : 400, "KNOWLEDGE" : [ "Bust Grow ++++" ]
    },
    /** ASS */
    "ASS_XP_COMMON" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) { p.AdjustBodyXP('Ass', 50); },
        "VALUE" : 50, "KNOWLEDGE" : [ "Ass Grow +" ]
    },
    "ASS_XP_UNCOMMON" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) { p.AdjustBodyXP('Ass', 100); },
        "VALUE" : 100, "KNOWLEDGE" : [ "Ass Grow ++" ]
    },
    "ASS_XP_RARE" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) { p.AdjustBodyXP('Ass', 200); },
        "VALUE" : 200, "KNOWLEDGE" : [ "Ass Grow +++" ]
    },
    "ASS_XP_LEGENDARY" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) { p.AdjustBodyXP('Ass', 400); },
        "VALUE" : 400, "KNOWLEDGE" : [ "Ass Grow ++++" ]
    },
    /** HIPS */
    "HIPS_XP_COMMON" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) { p.AdjustBodyXP('Hips', 50); },
        "VALUE" : 50, "KNOWLEDGE" : [ "Hips Wider +" ]
    },
    "HIPS_XP_UNCOMMON" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) { p.AdjustBodyXP('Hips', 100); },
        "VALUE" : 100, "KNOWLEDGE" : [ "Hips Wider ++" ]
    },
    "HIPS_XP_RARE" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) { p.AdjustBodyXP('Hips', 200); },
        "VALUE" : 200, "KNOWLEDGE" : [ "Hips Wider +++" ]
    },
    "HIPS_XP_LEGENDARY" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) { p.AdjustBodyXP('Hips', 400); },
        "VALUE" : 400, "KNOWLEDGE" : [ "Hips Wider ++++" ]
    },    
    /** LIPS */
    "LIPS_XP_COMMON" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) { p.AdjustBodyXP('Lips', 50); },
        "VALUE" : 50, "KNOWLEDGE" : [ "Lips Plumper +" ]
    },
    "LIPS_XP_UNCOMMON" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) { p.AdjustBodyXP('Lips', 100); },
        "VALUE" : 100, "KNOWLEDGE" : [ "Lips Plumper ++" ]
    },
    "LIPS_XP_RARE" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) { p.AdjustBodyXP('Lips', 200); },
        "VALUE" : 200, "KNOWLEDGE" : [ "Lips Plumper +++" ]
    },
    "LIPS_XP_LEGENDARY" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) { p.AdjustBodyXP('Lips', 400); },
        "VALUE" : 400, "KNOWLEDGE" : [ "Lips Plumper ++++" ]
    },
    /** PENIS */
    "PENIS_XP_COMMON" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) { p.AdjustBodyXP('Penis', 50); },
        "VALUE" : 50, "KNOWLEDGE" : [ "Penis Grow +" ]
    },
    "PENIS_XP_UNCOMMON" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) { p.AdjustBodyXP('Penis', 100); },
        "VALUE" : 100, "KNOWLEDGE" : [ "Penis Grow ++" ]
    },
    "PENIS_XP_RARE" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) { p.AdjustBodyXP('Penis', 200); },
        "VALUE" : 200, "KNOWLEDGE" : [ "Penis Grow +++" ]
    },
    "PENIS_XP_LEGENDARY" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) { p.AdjustBodyXP('Penis', 400); },
        "VALUE" : 400, "KNOWLEDGE" : [ "Penis Grow ++++" ]
    },
    /** BALLS */
    "BALLS_XP_COMMON" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) { p.AdjustBodyXP('Balls', 50); },
        "VALUE" : 50, "KNOWLEDGE" : [ "Balls Grow +" ]
    },
    "BALLS_XP_UNCOMMON" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) { p.AdjustBodyXP('Balls', 100); },
        "VALUE" : 100, "KNOWLEDGE" : [ "Balls Grow ++" ]
    },
    "BALLS_XP_RARE" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) { p.AdjustBodyXP('Balls', 200); },
        "VALUE" : 200, "KNOWLEDGE" : [ "Balls Grow +++" ]
    },
    "BALLS_XP_LEGENDARY" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) { p.AdjustBodyXP('Balls', 400); },
        "VALUE" : 400, "KNOWLEDGE" : [ "Balls Grow ++++" ]
    },
//======================================
    /** SKILLS **/
//======================================
    /** SAILING */
    "SAILING_XP_COMMON" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) { p.AdjustSkillXP('Sailing', 50); },
        "VALUE" : 100, "KNOWLEDGE" : [ "Sailing XP +" ]
    },
    "SAILING_XP_UNCOMMON" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) { p.AdjustSkillXP('Sailing', 100); },
        "VALUE" : 200, "KNOWLEDGE" : [ "Sailing XP ++" ]
    },
    "SAILING_XP_RARE" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) { p.AdjustSkillXP('Sailing', 200); },
        "VALUE" : 400, "KNOWLEDGE" : [ "Sailing XP +++" ]
    },
    "SAILING_XP_LEGENDARY" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) { p.AdjustSkillXP('Sailing', 400); },
        "VALUE" : 800, "KNOWLEDGE" : [ "Sailing XP ++++" ]
    },
    /** SWASHBUCKLING */
    "SWASHBUCKLING_XP_COMMON" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) { p.AdjustSkillXP('Swashbuckling', 50); },
        "VALUE" : 100, "KNOWLEDGE" : [ "Swashbuckling XP +" ]
    },
    "SWASHBUCKLING_XP_UNCOMMON" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) { p.AdjustSkillXP('Swashbuckling', 100); },
        "VALUE" : 200, "KNOWLEDGE" : [ "Swashbuckling XP ++" ]
    },
    "SWASHBUCKLING_XP_RARE" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) { p.AdjustSkillXP('Swashbuckling', 200); },
        "VALUE" : 400, "KNOWLEDGE" : [ "Swashbuckling XP +++" ]
    },
    "SWASHBUCKLING_XP_LEGENDARY" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) { p.AdjustSkillXP('Swashbuckling', 400); },
        "VALUE" : 800, "KNOWLEDGE" : [ "Swashbuckling XP ++++" ]
    },
    /** NAVIGATING */
    "NAVIGATING_XP_COMMON" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) { p.AdjustSkillXP('Navigating', 50); },
        "VALUE" : 100, "KNOWLEDGE" : [ "Navigating XP +" ]
    },
    "NAVIGATING_XP_UNCOMMON" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) { p.AdjustSkillXP('Navigating', 100); },
        "VALUE" : 200, "KNOWLEDGE" : [ "Navigating XP ++" ]
    },
    "NAVIGATING_XP_RARE" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) { p.AdjustSkillXP('Navigating', 200); },
        "VALUE" : 400, "KNOWLEDGE" : [ "Navigating XP +++" ]
    },
    "NAVIGATING_XP_LEGENDARY" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) { p.AdjustSkillXP('Navigating', 400); },
        "VALUE" : 800, "KNOWLEDGE" : [ "Navigating XP ++++" ]
    },
//======================================
    /** FOOD **/
//======================================
    "SLAVE_GRUEL" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) {
                p.AdjustStat('Nutrition', 15);
                p.AdjustStatXP('Nutrition', 75);
                p.AdjustStatXP('WillPower', -25);
                p.AdjustStatXP('Perversion', 50);
                p.AdjustStatXP('Hormones', 50);
            },
        "VALUE" : 30, 
        "KNOWLEDGE" : [ "Nutrition Up ++", "Satiation +++", "WillPower Down -", 
                        "Perversion Up +", "Female Hormones ++"]
    },
    "SNACK" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) { p.AdjustStat('Nutrition', 5);p.AdjustStatXP('Nutrition', 10); },
        "VALUE" : 10,
        "KNOWLEDGE" : [ "Nutrition Up", "Satiation Up +" ]
    },
    "LIGHT_WHOLESOME_MEAL" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) { 
            p.AdjustStat('Nutrition', 10);
            p.AdjustStatXP('Nutrition', 25);
            p.AdjustStat('Toxicity', -5);
        },
        "VALUE" : 30,
        "KNOWLEDGE" : [ "Nutrition Up +", "Satiation Up +", "Toxicity Down" ]
    },
    "WHOLESOME_MEAL" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) {
            p.AdjustStat('Nutrition', 20);
            p.AdjustStatXP('Nutrition', 50);
            p.AdjustStat('Toxicity', -10);
        },
        "VALUE" : 60,
        "KNOWLEDGE" : [ "Nutrition Up ++", "Satiation Up ++", "Toxicity Down" ]
    },
    "LIGHT_ALCOHOL" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) {
                p.AdjustStat('Nutrition', 5);
                p.AdjustStatXP('Nutrition', 15);
                p.AdjustStat('Toxicity', 5);
            },
        "VALUE" : 20,
        "KNOWLEDGE" : [ "Nutrition Up", "Satiation Up", "Toxicity Up" ]        
    },
    "HARD_ALCOHOL" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) {
            p.AdjustStat('Nutrition', 5);
            p.AdjustStatXP('Nutrition', 10);
            p.AdjustStat('Toxicity', 30);
            p.AdjustStatXP('WillPower', 50);
        },
        "VALUE" : 100,
        "KNOWLEDGE" : [ "Nutrition Up", "Satiation Up", "Toxicity Up --", "WillPower Up +" ]
    },
//======================================
    /** LOOT BOXES **/
//======================================    
    /** FOOD BOX */
    "FOOD_LOOT_BOX_COMMON" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) { return App.Item.DoLootBox(p, "FOOD", 0, 0); },
        "VALUE" : 0,
        "KNOWLEDGE" : [ "Loot Box +" ]
    },
    "FOOD_LOOT_BOX_UNCOMMON" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) { return App.Item.DoLootBox(p, "FOOD", 20, 10); },
        "VALUE" : 0,
        "KNOWLEDGE" : [ "Loot Box ++" ]
    },
    "FOOD_LOOT_BOX_RARE" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) { return App.Item.DoLootBox(p, "FOOD", 30, 20); },
        "VALUE" : 0,
        "KNOWLEDGE" : [ "Loot Box +++" ]
    },
    "FOOD_LOOT_BOX_LEGENDARY" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) { return App.Item.DoLootBox(p, "FOOD", 50, 30); },
        "VALUE" : 0,
        "KNOWLEDGE" : [ "Loot Box ++++" ]
    },
    /** LANDLUBBER BOX */
    "LANDLUBBER_LOOT_BOX_COMMON" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) { return App.Item.DoLootBox(p, "LANDLUBBER", 0, 0); },
        "VALUE" : 0,
        "KNOWLEDGE" : [ "Loot Box +" ]
    },
    "LANDLUBBER_LOOT_BOX_UNCOMMON" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) { return App.Item.DoLootBox(p, "LANDLUBBER", 20, 10); },
        "VALUE" : 0,
        "KNOWLEDGE" : [ "Loot Box ++" ]
    },
    "LANDLUBBER_LOOT_BOX_RARE" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) { return App.Item.DoLootBox(p, "LANDLUBBER", 30, 20); },
        "VALUE" : 0,
        "KNOWLEDGE" : [ "Loot Box +++" ]
    },
    "LANDLUBBER_LOOT_BOX_LEGENDARY" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) { return App.Item.DoLootBox(p, "LANDLUBBER", 50, 30); },
        "VALUE" : 0,
        "KNOWLEDGE" : [ "Loot Box ++++" ]
    },
    /** LOLITA_SISSY BOX */
    "LOLITA_SISSY_LOOT_BOX_COMMON" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) { return App.Item.DoLootBox(p, "LOLITA_SISSY", 0, 0); },
        "VALUE" : 0,
        "KNOWLEDGE" : [ "Loot Box +" ]
    },
    "LOLITA_SISSY_LOOT_BOX_UNCOMMON" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) { return App.Item.DoLootBox(p, "LOLITA_SISSY", 20, 10); },
        "VALUE" : 0,
        "KNOWLEDGE" : [ "Loot Box ++" ]
    },
    "LOLITA_SISSY_LOOT_BOX_RARE" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) { return App.Item.DoLootBox(p, "LOLITA_SISSY", 30, 20); },
        "VALUE" : 0,
        "KNOWLEDGE" : [ "Loot Box +++" ]
    },
    "LOLITA_SISSY_LOOT_BOX_LEGENDARY" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) { return App.Item.DoLootBox(p, "LOLITA_SISSY", 50, 30); },
        "VALUE" : 0,
        "KNOWLEDGE" : [ "Loot Box ++++" ]
    },
    /** PATHETIC_LOSER BOX */
    "PATHETIC_LOSER_LOOT_BOX_COMMON" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) { return App.Item.DoLootBox(p, "PATHETIC_LOSER", 0, 0); },
        "VALUE" : 0,
        "KNOWLEDGE" : [ "Loot Box +" ]
    },
    "PATHETIC_LOSER_LOOT_BOX_UNCOMMON" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) { return App.Item.DoLootBox(p, "PATHETIC_LOSER", 20, 10); },
        "VALUE" : 0,
        "KNOWLEDGE" : [ "Loot Box ++" ]
    },
    "PATHETIC_LOSER_LOOT_BOX_RARE" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) { return App.Item.DoLootBox(p, "PATHETIC_LOSER", 30, 20); },
        "VALUE" : 0,
        "KNOWLEDGE" : [ "Loot Box +++" ]
    },
    "PATHETIC_LOSER_LOOT_BOX_LEGENDARY" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) { return App.Item.DoLootBox(p, "PATHETIC_LOSER", 50, 30); },
        "VALUE" : 0,
        "KNOWLEDGE" : [ "Loot Box ++++" ]
    },
    /** PIRATE_BDSM BOX */
    "PIRATE_BDSM_LOOT_BOX_COMMON" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) { return App.Item.DoLootBox(p, "PIRATE_BDSM", 0, 0); },
        "VALUE" : 0,
        "KNOWLEDGE" : [ "Loot Box +" ]
    },
    "PIRATE_BDSM_LOOT_BOX_UNCOMMON" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) { return App.Item.DoLootBox(p, "PIRATE_BDSM", 20, 10); },
        "VALUE" : 0,
        "KNOWLEDGE" : [ "Loot Box ++" ]
    },
    "PIRATE_BDSM_LOOT_BOX_RARE" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) { return App.Item.DoLootBox(p, "PIRATE_BDSM", 30, 20); },
        "VALUE" : 0,
        "KNOWLEDGE" : [ "Loot Box +++" ]
    },
    "PIRATE_BDSM_LOOT_BOX_LEGENDARY" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) { return App.Item.DoLootBox(p, "PIRATE_BDSM", 50, 30); },
        "VALUE" : 0,
        "KNOWLEDGE" : [ "Loot Box ++++" ]
    },
    /** SISSY_BIMBO BOX */
    "SISSY_BIMBO_LOOT_BOX_COMMON" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) { return App.Item.DoLootBox(p, "SISSY_BIMBO", 0, 0); },
        "VALUE" : 0,
        "KNOWLEDGE" : [ "Loot Box +" ]
    },
    "SISSY_BIMBO_LOOT_BOX_UNCOMMON" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) { return App.Item.DoLootBox(p, "SISSY_BIMBO", 20, 10); },
        "VALUE" : 0,
        "KNOWLEDGE" : [ "Loot Box ++" ]
    },
    "SISSY_BIMBO_LOOT_BOX_RARE" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) { return App.Item.DoLootBox(p, "SISSY_BIMBO", 30, 20); },
        "VALUE" : 0,
        "KNOWLEDGE" : [ "Loot Box +++" ]
    },
    "SISSY_BIMBO_LOOT_BOX_LEGENDARY" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) { return App.Item.DoLootBox(p, "SISSY_BIMBO", 50, 30); },
        "VALUE" : 0,
        "KNOWLEDGE" : [ "Loot Box ++++" ]
    },
//======================================
    /** OTHER ITEMS**/
//======================================	
    "BLACK_HAIR_DYE" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) { p.HairColor = 'black'; },
        "VALUE" : 100,
        "KNOWLEDGE" : [ "Dye Hair Black" ]
    },
	    "BROWN_HAIR_DYE" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) { p.HairColor = 'brown'; },
        "VALUE" : 100,
        "KNOWLEDGE" : [ "Dye Hair Brown" ]
    },
	    "RED_HAIR_DYE" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) { p.HairColor = 'red'; },
        "VALUE" : 100,
        "KNOWLEDGE" : [ "Dye Hair Red" ]
    },
	    "BLOND_HAIR_DYE" : {
        "FUN" : /** @param {App.Entity.Player} p */
            function(p) { p.HairColor = 'blond'; },
        "VALUE" : 100,
        "KNOWLEDGE" : [ "Dye Hair Blond" ]
    },
};
