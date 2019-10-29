// This file lists effects that happens with body on their own with time
/** HEALTH */
/** ENERGY */
// Overnight healing.
App.Data.EffectLib.NATURAL_HEALING = {
    "FUN" : /** @param {App.Entity.Player} p
    @param {App.Items.Consumable} o*/
    function(o, p) {
        var Health = 5 + Math.ceil(p.GetStat('STAT', 'Energy') * 2) +
                  Math.ceil(p.GetStat('STAT', 'Fitness') / 10); // 5 + 0-20 + 0-10
        var Energy = Math.floor( (p.GetStat('STAT', 'Nutrition')/25) + (p.GetStat('STAT', 'Fitness')/25)); // 1 - 8
        var mod = 1 - Math.max(0, Math.min(p.GetStat('STAT', 'Toxicity')/150, 1.0)); // 0 - 1

        Energy = Energy < 1 ? 1 : Math.ceil(Energy * mod); // Always give 1 energy.
        Health = Math.ceil(Health * mod) < 5 ? 5 : Math.ceil(Health * mod);
        p.AdjustStat('Health', Health);
        p.AdjustStat('Energy', Energy);
    },
    "VALUE" : 0, "KNOWLEDGE" : [ "Healing++" ]
};

// Resting healing.
App.Data.EffectLib.NATURAL_RESTING =
{
    "FUN" : /** @param {App.Entity.Player} p
    @param {App.Items.Consumable} o*/
    function(o, p) {
        var Heal = Math.max(1, Math.min(Math.ceil( (p.GetStat('STAT', 'Nutrition')/20) + (p.GetStat('STAT', 'Fitness')/20)), 10)); // 1 - 10
        var mod = 1 - Math.max(0, Math.min(p.GetStat('STAT', 'Toxicity')/150, 1.0)); // 0 - 1
        p.AdjustStat('Health', Math.ceil(Heal * mod));
        p.AdjustStat('Energy', 1);
        p.AdjustStat('Toxicity', -5);
    },
    "VALUE" : 0,
    "KNOWLEDGE" : [ "Healing+" ]
}
App.Data.EffectLib.NATURAL_QUEST_HOOKS = {
    "FUN" : /** @param {App.Entity.Player} p */
    function(o, p) {
        if (p.QuestFlags["BETTER_BED"] == "COMPLETED") p.AdjustStat("Energy", 1);
        if (p.QuestFlags["CABIN_DECORATION"] == "COMPLETED") p.AdjustStatXP("WillPower", 5);
        if (p.QuestFlags["CABIN_RUG"] == "COMPLETED") p.AdjustStatXP("WillPower", 5);
    },
    "VALUE" : 0, "KNOWLEDGE" : [ "Cabin Accessories++"]
};

/** NUTRITION*/
App.Data.EffectLib.NATURAL_NUTRITION = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Items.Consumable} o*/
    function(o, p) {
        p.AdjustStat("Nutrition", -5);
        var nutrition = p.GetStat("STAT", "Nutrition");
		var nutritionXP = p.GetStatXP("STAT", "Nutrition");
		if (nutrition >= 90 && nutritionXP > 150) {
            p.AdjustBodyXP("Waist", nutritionXP - 150); // Get Fatter!?
            setup.Notifications.AddMessage("STATUS_CHANGE", p.Day+1, "@@color:yellow;You feel as if you ate too much yesterday.@@");
        }

        var nutrition = p.GetStat("STAT", "Nutrition");
		// Going hungry, lose some belly fat.
        if (nutrition <= 40) {
            p.AdjustBodyXP("Waist", -25);
        }
        // Starving. Yikes.
        if (nutrition <= 20) {
            setup.Notifications.AddMessage("STATUS_CHANGE", p.Day+1, "@@color:red;You are starving!@@");
            p.AdjustStat("Energy", -1); // Reduce Energy.
            p.AdjustStat("Health", -15);
            p.AdjustBodyXP("Waist", -50);
        }
	},
    "VALUE" : 0, "KNOWLEDGE" : [ "Hunger+" ]
};

/** TOXICITY */
App.Data.EffectLib.NATURAL_DETOXIFICATION = {
    "FUN" : /** @param {App.Entity.Player} p
    @param {App.Items.Consumable} o*/
   function(o, p) { p.AdjustStat("Toxicity", -( (5 + (p.GetStat("STAT", "Fitness") / 10)))*2); },
   "VALUE" : 0, "KNOWLEDGE" : [ "Detoxification+" ]
};

App.Data.EffectLib.NATURAL_TOXIC_DAMAGE = {
    "FUN" : /** @param {App.Entity.Player} p
    @param {App.Items.Consumable} o*/
   function(o, p) {
        var Tox = p.GetStat('STAT', 'Toxicity');
        var dmg = Tox <= 100 ? 0 : Math.ceil(10 * (Tox/300));

        if (dmg > 0) {
            p.AdjustStat('Health', (dmg * -1.0));
            setup.Notifications.AddMessage("STATUS_CHANGE", p.Day+1, "@@color:red;&dArr;You feel slightly sick@@... your current " +
                App.PR.ColorizeString(p.GetStatPercent("STAT", "Toxicity"), "Toxicity") +
                " is probably to blame.");
            }
    },
   "VALUE" : 0,
   "KNOWLEDGE" : [ "Poisoned+" ]
};

/** HORMONES */
App.Data.EffectLib.NATURAL_HORMONE_SHIFT = {
	"VALUE" : 0, "KNOWLEDGE" : [ "Hormonal processes+" ],
	"FUN" : /** @param {App.Entity.Player} p
	@param {App.Items.Consumable} o*/
   function(o, p) {
        //Adjust physical characteristics based on hormone balance. Only shift body if there is XP related to the hormone
        //shift stored in the player object.
        var HormoneShift = 0;
        // The "Futa" stat blocks penis, bust, and balls shrinking if their stats are lower or equal to the futa stat.
        // Also, if the balls stat percent is lower than the futa one, balls do not produce hormonal shift.
        // If, however, the futa stat is higher than the penis or bust stat, it results in willpower drain down to 15
        const FutaPercent = p.GetStatPercent("STAT", "Futa");

        if ((p.GetStat("STAT", "Hormones") > 100) && p.GetStatXP("STAT", "Hormones") > 0 ) {
            HormoneShift = ( p.GetStat("STAT", "Hormones") - 100 );
            p.AdjustBodyXP("Face",   HormoneShift            ,     40);
            p.AdjustBodyXP("Bust",   HormoneShift            ,      5);
            p.AdjustBodyXP("Lips",   HormoneShift            ,     40);
            p.AdjustBodyXP("Ass",    HormoneShift            ,     10);
            p.AdjustBodyXP("Hips",   HormoneShift            ,     10);
            const PenisPercent = p.GetStatPercent("BODY", "Penis");
            if (PenisPercent > FutaPercent) {
                p.AdjustBodyXP("Penis", (HormoneShift * -1.0)    ,      1);
            } else if (FutaPercent > PenisPercent) {
                p.AdjustStatXP("WillPower", FutaPercent - PenisPercent, 15);
            }
            if (p.GetStatPercent("BODY", "Balls") > FutaPercent) {
                p.AdjustBodyXP("Balls", (HormoneShift * -1.0)    ,      0);
            }
        } else if (p.GetStat("STAT", "Hormones") < 100 && p.GetStatXP("STAT", "Hormones") < 0 ) {
            HormoneShift = (100 - p.GetStat("STAT", "Hormones"));
            const BustPercent = p.GetStatPercent("BODY", "Bust");
            p.AdjustBodyXP("Face", (HormoneShift * -1.0), p.GetStartStat("BODY", "Face"));
            if (BustPercent > FutaPercent) {
                p.AdjustBodyXP("Bust", (HormoneShift * -1.0), p.GetStartStat("BODY", "Bust"));
            } else if (FutaPercent > BustPercent) {
                p.AdjustStatXP("WillPower", FutaPercent - BustPercent, 15);
            }
            p.AdjustBodyXP("Lips", (HormoneShift * -1.0), p.GetStartStat("BODY", "Lips"));
            p.AdjustBodyXP("Ass",  (HormoneShift * -1.0), p.GetStartStat("BODY", "Ass"));
            p.AdjustBodyXP("Hips", (HormoneShift * -1.0), p.GetStartStat("BODY", "Hips"));
            p.AdjustBodyXP("Penis", HormoneShift, p.GetStartStat("BODY", "Penis"));
            p.AdjustBodyXP("Balls", HormoneShift, p.GetStartStat("BODY", "Balls"));
        }
        // Decrease the players hormone XP relative to the size of their balls.
        if (p.GetStatPercent("BODY", "Balls") > FutaPercent) {
            p.AdjustStatXP("Hormones", ((p.GetStat("BODY", "Balls") / 5) * -1.0)); // Bigger balls add more male hormones.
        }
	}
};

/** FITNESS */
App.Data.EffectLib.NATURAL_FITNESS_DECREASE = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Items.Consumable} o*/
    function(o,p) { p.AdjustStatXP("Fitness", -5); },
    "VALUE" : 0, "KNOWLEDGE" : [ "Flabbiness+" ]
};
/** HEIGHT */
/** HAIR */
App.Data.EffectLib.NATURAL_HAIR_GROW = {
    "FUN" : /** @param {App.Entity.Player} p
        @param {App.Items.Consumable} o*/
    function(o,p) { p.AdjustBodyXP("Hair", 4, 0); /* Hair grows about 0.05 CM per day.*/ },
    "VALUE" : 0, "KNOWLEDGE" : [ "Hair grow+" ]
};

/** FACE */
/** BUST */
/** LACTATION */
App.Data.EffectLib.NATURAL_LACTATION_DECREASE = {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Items.Consumable} o*/
    function(o,p) { p.AdjustBody("Lactation", -1); },
    "VALUE" : 0
};
/** ASS */
/** HIPS */
/** LIPS */
/** PENIS */
/** BALLS */
/** WAIST */

App.Data.NaturalBodyEffects = [
    "NATURAL_DETOXIFICATION",
    "NATURAL_HEALING",
    "NATURAL_NUTRITION",
    "NATURAL_TOXIC_DAMAGE",
    "NATURAL_HORMONE_SHIFT",
    "NATURAL_FITNESS_DECREASE",
    "NATURAL_HAIR_GROW",
    "NATURAL_LACTATION_DECREASE",
    "NATURAL_QUEST_HOOKS" // Overnight quest hooks.
];
