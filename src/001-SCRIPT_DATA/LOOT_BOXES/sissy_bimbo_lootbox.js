// BOX TYPE     MINIMUM     BONUS ROLL  COLOR
// COMMON       0           0           grey
// UNCOMMON     20          10          lime
// RARE         30          20          cyan
// LEGENDARY    50          30          orange

App.Data.LootBoxes["common sissy loot box"] = {
    "Name": "common sissy chest",
    "ShortDesc": "@@color:grey;A small gift box shaped like a treasure chest@@",
    "LongDesc": "This small pink treasure chest sports an attractive heart pattern and is wrapped with a shiny white ribbon and bow.",
    "Message": "With unrestrained curiosity you tear open the treasure chest to find...\n\n",
    "Type": "LOOT_BOX",
    "Charges": 1,
    // Effect : [ TABLE, Minimum Roll, Bonus to roll
    "Effects" : [ "SISSY_BIMBO_LOOT_BOX_COMMON"]
};

App.Data.LootBoxes["uncommon sissy loot box"] = {
    "Name": "uncommon sissy chest",
    "ShortDesc": "@@color:lime;A gift box shaped like a treasure chest@@",
    "LongDesc": "This pink treasure chest sports an attractive heart pattern and is wrapped with a shiny white ribbon and bow.",
    "Message": "With unrestrained curiosity you tear open the treasure chest to find...\n\n",
    "Type": "LOOT_BOX",
    "Charges": 1,
    // Effect : [ TABLE, Minimum Roll, Bonus to roll
    "Effects" : [ "SISSY_BIMBO_LOOT_BOX_UNCOMMON"]
};

App.Data.LootBoxes["rare sissy loot box"] = {
    "Name": "rare sissy chest",
    "ShortDesc": "@@color:cyan;A large gift box shaped like a treasure chest@@",
    "LongDesc": "This large pink treasure chest sports an attractive heart pattern and is wrapped with a shiny white ribbon and bow.",
    "Message": "With unrestrained curiosity you tear open the treasure chest to find...\n\n",
    "Type": "LOOT_BOX",
    "Charges": 1,
    // Effect : [ TABLE, Minimum Roll, Bonus to roll
    "Effects" : [ "SISSY_BIMBO_LOOT_BOX_RARE"]
};

App.Data.LootBoxes["legendary sissy loot box"] = {
    "Name": "legendary sissy chest",
    "ShortDesc": "@@color:orange;A huge gift box shaped like a treasure chest@@",
    "LongDesc": "This huge pink treasure chest sports an attractive heart pattern and is wrapped with a shiny white ribbon and bow.",
    "Message": "With unrestrained curiosity you tear open the treasure chest to find...\n\n",
    "Type": "LOOT_BOX",
    "Charges": 1,
    // Effect : [ TABLE, Minimum Roll, Bonus to roll
    "Effects" : [ "SISSY_BIMBO_LOOT_BOX_LEGENDARY"]
};

App.Data.LootTables["SISSY_BIMBO"] =  [
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
        Filter: App.Loot.any("Category", [ "Bimbo", "Sissy Lolita" ])
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
                "BUST_XP_COMMON", "BUST_XP_UNCOMMON", "BUST_XP_RARE", "BUST_XP_LEGENDARY",
                "FITNESS_XP_COMMON", "FITNESS_XP_UNCOMMON", "FITNESS_XP_RARE", "FITNESS_XP_LEGENDARY",
                "SEDUCTION_XP_COMMON", "SEDUCTION_XP_UNCOMMON", "SEDUCTION_XP_RARE", "SEDUCTION_XP_LEGENDARY",
                "LIPS_XP_COMMON", "LIPS_XP_UNCOMMON", "LIPS_XP_RARE", "LIPS_XP_LEGENDARY",
            ])
    },
    {
        Type: "FOOD",
        Chance: 30,
        MaxCount: 4,
        Filter: App.Loot.any("Effects", 
            [
                "WHOLESOME_MEAL", "SNACK", "LIGHT_WHOLESOME_MEAL"
            ])
    },
    {
        Type: "FOOD",
        Chance: 50,
        MaxCount: 5,
        Filter: App.Loot.any("Effects", [ "HARD_ALCOHOL"])
    },
    {
        Type: "DRUGS",
        Chance: 75,
        MaxCount: 2,
        Filter: App.Loot.any("Effects", 
            [
                "BUST_XP_COMMON", "BUST_XP_UNCOMMON", "BUST_XP_RARE", "BUST_XP_LEGENDARY",
                "FITNESS_XP_COMMON", "FITNESS_XP_UNCOMMON", "FITNESS_XP_RARE", "FITNESS_XP_LEGENDARY",
                "SEDUCTION_XP_COMMON", "SEDUCTION_XP_UNCOMMON", "SEDUCTION_XP_RARE", "SEDUCTION_XP_LEGENDARY",
                "FACE_XP_COMMON", "FACE_XP_UNCOMMON", "FACE_XP_RARE", "FACE_XP_LEGENDARY"
            ])
    },
    {
        Type: "DRUGS",
        Chance: 50,
        MaxCount: 2,
        Filter: App.Loot.any("Effects", 
            [
                "ENERGY_COMMON", "ENERGY_UNCOMMON", "ENERGY_RARE", "ENERGY_LEGENDARY",
                "SEDUCTION_XP_COMMON", "SEDUCTION_XP_UNCOMMON", "SEDUCTION_XP_RARE", "SEDUCTION_XP_LEGENDARY",
                "PERVERSION_XP_COMMON", "PERVERSION_XP_UNCOMMON", "PERVERSION_XP_RARE", "PERVERSION_XP_LEGENDARY",
                "FEMININITY_XP_COMMON", "FEMININITY_XP_UNCOMMON", "FEMININITY_XP_RARE", "FEMININITY_XP_LEGENDARY"
            ])
    },

];