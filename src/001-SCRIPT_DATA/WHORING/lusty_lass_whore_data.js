App = App || { Data: { }, Entity: { } };
App.Data.Whoring = App.Data.Whoring || { };

App.Data.Whoring["LustyLass"] = {
    // Shows in the UI as location.
    "DESC"      : "The Lusty Lass",
    // Sex act weighted table.
    "WANTS"     : [ "HAND", "ASS", "ASS", "ASS", "ASS", "BJ", "BJ", "BJ", "BJ", "TITS", "TITS", "TITS" ],
    // Minimum payout rank.
    "MIN_PAY"   : 2,
    // Maximum payout rank.
    "MAX_PAY"   : 3,
    // Bonus payout, weighted table
    "BONUS"     : [
        // Style based bonuses first. (1/2 as much as body bonuses)
        "Pirate Slut", "Sexy Dancer", "Sexy Dancer", "Sexy Dancer", "Bimbo", "Bimbo", "Slutty Lady", "Slutty Lady",
        // Body based bonuses (twice as many as style bonuses)
        "Bust", "Bust", "Bust", "Bust", "Ass", "Ass", "Ass", "Face", "Face", "Lips", "Lips" ],
    "BONUS_CATS": [ "Perversion", "Perversion", "Perversion", "Femininity", "Femininity", "Beauty", "Beauty", "Beauty" ],
    "NAMES"     : App.Data.Names["Male"],
    "TITLE"     : null,
    "RARES"     : [ ],
    "NPC_TAG"   : "LustyLassCustomers"
};