App = App || { Data: { }, Entity: { } };
App.Data.Whoring = App.Data.Whoring || { };

App.Data.Whoring["GoldenIsleGuards"] = {
    // Shows in the UI as location.
    "DESC"      : "Golden Isle Guard House",
    // Sex act weighted table.
    "WANTS"     : [ "HAND", "HAND", "ASS", "ASS", "ASS", "ASS", "BJ", "BJ", "BJ", "BJ", "TITS", "TITS", "TITS" ],
    // Minimum payout rank.
    "MIN_PAY"   : 2,
    // Maximum payout rank.
    "MAX_PAY"   : 2,
    // Bonus payout, weighted table
    "BONUS"     : [
        // Style based bonuses first. (1/2 as much as body bonuses)
        "Pirate Slut", "Sexy Dancer", "Sexy Dancer", "Sexy Dancer", "Bimbo", "Bimbo", "Slutty Lady", "Slutty Lady",
        // Body based bonuses (twice as many as style bonuses)
        "Bust", "Bust", "Bust", "Bust", "Ass", "Ass", "Ass", "Face", "Face", "Lips", "Lips" ],
    "BONUS_CATS": [ "Perversion", "Perversion", "Perversion", "Femininity", "Femininity", "Beauty", "Beauty", "Beauty" ],
    "NAMES"     : App.Data.Names["Male"],
    "TITLE"     : "Guard",
    "RARES"     : [ "Justus" ],
    "NPC_TAG"   : "GoldenIsleGuards"
};

App.Data.Whoring["Justus"] = {
    // Shows in the UI as location.
    "DESC"      : "Golden Isle Guard House",
    // Sex act weighted table.
    "WANTS"     : [ "ASS", "BJ", "TITS", "HAND" ],
    // Minimum payout rank.
    "MIN_PAY"   : 3,
    // Maximum payout rank.
    "MAX_PAY"   : 5,
    // Bonus payout, weighted table
    "BONUS"     : [
        // Style based bonuses first. (1/2 as much as body bonuses)
        "Sexy Dancer", "Sexy Dancer", "Bimbo", "Bimbo",
        // Body based bonuses (twice as many as style bonuses)
        "Bust", "Bust", "Bust", "Bust", "Ass", "Ass", "Ass", "Face", "Face", "Lips" ],
    "BONUS_CATS": [ "Perversion", "Perversion", "Beauty", "Femininity", "Femininity", "Beauty" ],
    "NAMES"     : [ "Justus" ],
    "TITLE"     : "Guard Cpt.",
    "RARES"     : [ ],
    "NPC_TAG"   : "Justus"
};