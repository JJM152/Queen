// BOX TYPE     MINIMUM     BONUS ROLL  COLOR
// COMMON       0           0           grey
// UNCOMMON     20          10          lime
// RARE         30          20          cyan
// LEGENDARY    50          30          orange

App.Data.LootBoxes["common dancer loot box"] = {
    "Name": "common dancer chest",
    "ShortDesc": "@@color:grey;A small tacky looking treasure chest@@",
    "LongDesc": "This small black treasure chest sports an attractive leopard print pattern and is wrapped with a shiny white ribbon and bow.",
    "Message": "With unrestrained curiosity you tear open the treasure chest to find...\n\n",
    "Type": "LOOT_BOX",
    "Charges": 1,
    // Effect : [ TABLE, Minimum Roll, Bonus to roll
    "Effects" : [ "DANCER_BIMBO_LOOT_BOX_COMMON"]
};

App.Data.LootBoxes["uncommon dancer loot box"] = {
    "Name": "uncommon dancer chest",
    "ShortDesc": "@@color:lime;A tacky looking  treasure chest@@",
    "LongDesc": "This black treasure chest sports an attractive leopard print pattern and is wrapped with a shiny white ribbon and bow.",
    "Message": "With unrestrained curiosity you tear open the treasure chest to find...\n\n",
    "Type": "LOOT_BOX",
    "Charges": 1,
    // Effect : [ TABLE, Minimum Roll, Bonus to roll
    "Effects" : [ "DANCER_BIMBO_LOOT_BOX_UNCOMMON"]
};

App.Data.LootBoxes["rare dancer loot box"] = {
    "Name": "rare dancer chest",
    "ShortDesc": "@@color:cyan;A large tacky looking treasure chest@@",
    "LongDesc": "This large black treasure chest sports an attractive leopard print pattern and is wrapped with a shiny white ribbon and bow.",
    "Message": "With unrestrained curiosity you tear open the treasure chest to find...\n\n",
    "Type": "LOOT_BOX",
    "Charges": 1,
    // Effect : [ TABLE, Minimum Roll, Bonus to roll
    "Effects" : [ "DANCER_BIMBO_LOOT_BOX_RARE"]
};

App.Data.LootBoxes["legendary dancer loot box"] = {
    "Name": "legendary dancer chest",
    "ShortDesc": "@@color:orange;A huge tacky looking treasure chest@@",
    "LongDesc": "This huge black treasure chest sports an attractive leopard print pattern and is wrapped with a shiny white ribbon and bow.",
    "Message": "With unrestrained curiosity you tear open the treasure chest to find...\n\n",
    "Type": "LOOT_BOX",
    "Charges": 1,
    // Effect : [ TABLE, Minimum Roll, Bonus to roll
    "Effects" : [ "DANCER_BIMBO_LOOT_BOX_LEGENDARY"]
};

App.Data.LootTables["DANCER_BIMBO"] =  [
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
        Filter: App.Loot.any("Category", [ "Bimbo", "Sexy Dancer" ])
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
                "SEDUCTION_XP_COMMON", "SEDUCTION_XP_UNCOMMON", "SEDUCTION_XP_RARE", "SEDUCTION_XP_LEGENDARY"
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
                "SEDUCTION_XP_COMMON", "SEDUCTION_XP_UNCOMMON", "SEDUCTION_XP_RARE", "SEDUCTION_XP_LEGENDARY"
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
                "PERVERSION_XP_COMMON", "PERVERSION_XP_UNCOMMON", "PERVERSION_XP_RARE", "PERVERSION_XP_LEGENDARY"
            ])
    },

];