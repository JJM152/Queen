App = App || { Data: { }, Entity: { } };
App.Data.Whoring = App.Data.Whoring || { };

App.Data.Whoring["SaltyMermaid"] = {
    // Shows in the UI as location.
    "DESC"      : "The Salty Mermaid",
    // Sex act weighted table.
    "WANTS"     : [ "Hand", "Hand", "Ass", "Ass", "Ass", "Ass", "BJ", "BJ", "BJ", "BJ", "Tits", "Tits" ],
    // Minimum payout rank.
    "MIN_PAY"   : 1,
    // Maximum payout rank.
    "MAX_PAY"   : 3,
    // Bonus payout, weighted table
    "BONUS"     : [
        // Style based bonuses first. (1/2 as much as body bonuses)
        "Pirate Slut", "Pirate Slut", "Pirate Slut", "Sexy Dancer", "Bimbo",
        // Body based bonuses (twice as many as style bonuses)
        "Bust", "Bust", "Bust", "Bust", "Ass", "Ass", "Ass", "Face", "Face", "Lips" ],
    "BONUS_CATS": [ "Perversion", "Perversion", "Perversion", "Femininity", "Femininity", "Beauty" ],
    "NAMES"     : App.Data.Names["Male"],
    "TITLE"     : "Pirate",
    "RARES"     : [ "Reginald", "Kipler", "Cookie", "Julius" ],
    "NPC_TAG"   : "Crew"
};

App.Data.Whoring["Reginald"] = {
    // Shows in the UI as location.
    "DESC"      : "The Salty Mermaid",
    // Sex act weighted table.
    "WANTS"     : [ "Ass", "BJ" ],
    // Minimum payout rank.
    "MIN_PAY"   : 3,
    // Maximum payout rank.
    "MAX_PAY"   : 4,
    // Bonus payout, weighted table
    "BONUS"     : [
        // Style based bonuses first. (1/2 as much as body bonuses)
        "Pirate Slut", "Pirate Slut", "BDSM", "BDSM",
        // Body based bonuses (twice as many as style bonuses)
        "Bust", "Bust", "Bust", "Bust", "Ass", "Ass", "Ass", "Face", "Face", "Lips" ],
    "BONUS_CATS": [ "Perversion", "Perversion", "Perversion", "Femininity", "Femininity", "Beauty" ],
    "NAMES"     : [ "Reginald" ],
    "TITLE"     : "Captain",
    "RARES"     : [ ],
    "NPC_TAG"   : "Captain"
};

App.Data.Whoring["Kipler"] = {
    // Shows in the UI as location.
    "DESC"      : "The Salty Mermaid",
    // Sex act weighted table.
    "WANTS"     : [ "Tits", "Tits", "Ass", "BJ" ],
    // Minimum payout rank.
    "MIN_PAY"   : 2,
    // Maximum payout rank.
    "MAX_PAY"   : 3,
    // Bonus payout, weighted table
    "BONUS"     : [
        // Style based bonuses first. (1/2 as much as body bonuses)
        "Pirate Slut", "Pirate Slut", "Pet Girl", "Pet Girl",
        // Body based bonuses (twice as many as style bonuses)
        "Bust", "Bust", "Bust", "Bust", "Bust", "Ass", "Ass", "Ass" ],
    "BONUS_CATS": [ "Perversion", "Perversion", "Perversion", "Femininity", "Femininity", "Beauty" ],
    "NAMES"     : [ "Kipler" ],
    "TITLE"     : "1st Mate",
    "RARES"     : [ ],
    "NPC_TAG"   : "FirstMate"
};

App.Data.Whoring["Cookie"] = {
    // Shows in the UI as location.
    "DESC"      : "The Salty Mermaid",
    // Sex act weighted table.
    "WANTS"     : [ "Ass", "Ass", "Ass", "BJ", "Tits", "Tits", "Hand" ],
    // Minimum payout rank.
    "MIN_PAY"   : 2,
    // Maximum payout rank.
    "MAX_PAY"   : 4,
    // Bonus payout, weighted table
    "BONUS"     : [
        // Style based bonuses first. (1/2 as much as body bonuses)
        "Sissy Lolita", "Sissy Lolita", "Daddy's Girl", "Daddy's Girl",
        // Body based bonuses (twice as many as style bonuses)
        "Bust", "Bust", "Bust", "Bust", "Ass", "Ass", "Ass", "Face", "Face", "Lips" ],
    "BONUS_CATS": [ "Perversion", "Perversion", "Perversion", "Femininity", "Femininity", "Beauty" ],
    "NAMES"     : [ "Cookie" ],
    "TITLE"     : "Chef",
    "RARES"     : [ ],
    "NPC_TAG"   : "Cook"
};

App.Data.Whoring["Julius"] = {
    // Shows in the UI as location.
    "DESC"      : "The Salty Mermaid",
    // Sex act weighted table.
    "WANTS"     : [ "Ass", "Ass", "Ass", "BJ", "Tits", "Tits", "Hand" ],
    // Minimum payout rank.
    "MIN_PAY"   : 2,
    // Maximum payout rank.
    "MAX_PAY"   : 4,
    // Bonus payout, weighted table
    "BONUS"     : [
        // Style based bonuses first. (1/2 as much as body bonuses)
        "Pirate Slut", "Pirate Slut", "Bimbo", "Daddy's Girl",
        // Body based bonuses (twice as many as style bonuses)
        "Bust", "Bust", "Ass", "Ass", "Ass", "Ass", "Ass", "Ass", "Face", "Lips" ],
    "BONUS_CATS": [ "Perversion", "Perversion", "Perversion", "Femininity", "Femininity", "Style" ],
    "NAMES"     : [ "Julius" ],
    "TITLE"     : "Qtr. Mstr.",
    "RARES"     : [ ],
    "NPC_TAG"   : "Quartermaster"
};