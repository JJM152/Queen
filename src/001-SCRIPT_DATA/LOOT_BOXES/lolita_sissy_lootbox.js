// BOX TYPE     MINIMUM     BONUS ROLL  COLOR
// COMMON       0           0           grey
// UNCOMMON     20          10          lime
// RARE         30          20          cyan
// LEGENDARY    50          30          orange

App.Data.LootBoxes["common lolita loot box"] = {
    "Name": "common lolita chest",
    "ShortDesc": "@@color:grey;A small novelty bag shaped like a teddy bear@@",
    "LongDesc": "This small pink bag is shaped like a stuffed toy and opens with a drawstring on it's back. Wonder what's inside?",
    "Message": "With unrestrained curiosity you tear open the treasure chest to find...\n\n",
    "Type": "LOOT_BOX",
    "Charges": 1,
    // Effect : [ TABLE, Minimum Roll, Bonus to roll
    "Effects" : [ "LOLITA_SISSY_LOOT_BOX_COMMON"]

};

App.Data.LootBoxes["uncommon lolita loot box"] = {
    "Name": "uncommon lolita chest",
    "ShortDesc": "@@color:lime;A novelty bag shaped like a teddy bear@@",
    "LongDesc": "This pink bag is shaped like a stuffed toy and opens with a drawstring on it's back. Wonder what's inside?",
    "Message": "With unrestrained curiosity you tear open the treasure chest to find...\n\n",
    "Type": "LOOT_BOX",
    "Charges": 1,
    // Effect : [ TABLE, Minimum Roll, Bonus to roll
    "Effects" : [ "LOLITA_SISSY_LOOT_BOX_UNCOMMON"]
};

App.Data.LootBoxes["rare lolita loot box"] = {
    "Name": "rare lolita chest",
    "ShortDesc": "@@color:cyan;A large novelty bag shaped like a teddy bear@@",
    "LongDesc": "This large pink bag is shaped like a stuffed toy and opens with a drawstring on it's back. Wonder what's inside?",
    "Message": "With unrestrained curiosity you tear open the treasure chest to find...\n\n",
    "Type": "LOOT_BOX",
    "Charges": 1,
    // Effect : [ TABLE, Minimum Roll, Bonus to roll
    "Effects" : [ "LOLITA_SISSY_LOOT_BOX_RARE"]
};

App.Data.LootBoxes["legendary lolita loot box"] = {
    "Name": "legendary lolita chest",
    "ShortDesc": "@@color:orange;A huge novelty bag shaped like a teddy bear@@",
    "LongDesc": "This huge pink bag is shaped like a stuffed toy and opens with a drawstring on it's back. Wonder what's inside?",
    "Message": "With unrestrained curiosity you tear open the treasure chest to find...\n\n",
    "Type": "LOOT_BOX",
    "Charges": 1,
    // Effect : [ TABLE, Minimum Roll, Bonus to roll
    "Effects" : [ "LOLITA_SISSY_LOOT_BOX_LEGENDARY"]
};

App.Data.LootTables["LOLITA_SISSY"] =  [
    {
        Type : "COINS",
        Chance: 100,
        Min: 1,
        Max: 50
    },
    {
        Type : "CLOTHES",
        Chance: 100,
        MaxCount: 1,
        Filter: App.Loot.any("Category", [ "Sissy Lolita", "Daddy's Girl" ])
    },
    {
        Type : "COSMETICS",
        Chance: 80,
        MaxCount: 5
    },
    {
        Type : "COSMETICS",
        Chance: 80,
        MaxCount: 5
    },
    {
        Type: "FOOD",
        Chance: 75,
        MaxCount: 2,
        Filter: App.Loot.any("Effects", 
            [
                "LIPS_XP_COMMON", "LIPS_XP_UNCOMMON", "LIPS_XP_RARE", "LIPS_XP_LEGENDARY",
            ])
    },
    {
        Type: "FOOD",
        Chance: 50,
        MaxCount: 4,
        Filter: App.Loot.any("Effects", 
            [
                "WHOLESOME_MEAL", "SNACK", "LIGHT_WHOLESOME_MEAL"
            ])
    },
    {
        Type: "FOOD",
        Chance: 25,
        MaxCount: 2,
        Filter: App.Loot.any("Effects", [ "HARD_ALCOHOL"])
    },
    {
        Type: "DRUGS",
        Chance: 75,
        MaxCount: 2,
        Filter: App.Loot.any("Effects", 
            [
                "LIPS_XP_COMMON", "LIPS_XP_UNCOMMON", "LIPS_XP_RARE", "LIPS_XP_LEGENDARY",
                "FACE_XP_COMMON", "FACE_XP_UNCOMMON", "FACE_XP_RARE", "FACE_XP_LEGENDARY",
            ])
    },
    {
        Type: "DRUGS",
        Chance: 50,
        MaxCount: 2,
        Filter: App.Loot.any("Effects", 
            [
                "LIPS_XP_COMMON", "LIPS_XP_UNCOMMON", "LIPS_XP_RARE", "LIPS_XP_LEGENDARY",
                "FEMININITY_XP_COMMON", "FEMININITY_XP_UNCOMMON", "FEMININITY_XP_RARE", "FEMININITY_XP_LEGENDARY"
            ])
    },

];
