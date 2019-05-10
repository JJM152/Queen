// BOX TYPE     MINIMUM     BONUS ROLL  COLOR
// COMMON       0           0           grey
// UNCOMMON     20          10          lime
// RARE         30          20          cyan
// LEGENDARY    50          30          orange

App.Data.LootBoxes["common pirate loot box"] = {
    "Name": "common pirate chest",
    "ShortDesc": "@@color:grey;A studded iron treasure chest emblazoned with a skull and bones@@",
    "LongDesc": "This treasure chest is banded and studded with iron rivets. It has a white skull and bones on its top and smells faintly of the sea.",
    "Message": "With unrestrained curiosity you tear open the treasure chest to find...\n\n",
    "Type": "LOOT_BOX",
    "Charges": 1,
    // Effect : [ TABLE, Minimum Roll, Bonus to roll
    "Effects" : [ "PIRATE_BDSM_LOOT_BOX_COMMON"]
};

App.Data.LootBoxes["uncommon pirate loot box"] = {
    "Name": "uncommon pirate chest",
    "ShortDesc": "@@color:lime;A studded iron treasure chest emblazoned with a skull and bones@@",
    "LongDesc": "This treasure chest is banded and studded with iron rivets. It has a white skull and bones on its top and smells faintly of the sea.",
    "Message": "With unrestrained curiosity you tear open the treasure chest to find...\n\n",
    "Type": "LOOT_BOX",
    "Charges":1,
    // Effect : [ TABLE, Minimum Roll, Bonus to roll
    "Effects" : [ "PIRATE_BDSM_LOOT_BOX_UNCOMMON"]
};

App.Data.LootBoxes["rare pirate loot box"] = {
    "Name": "rare pirate chest",
    "ShortDesc": "@@color:cyan;A studded iron treasure chest emblazoned with a skull and bones@@",
    "LongDesc": "This treasure chest is banded and studded with iron rivets. It has a white skull and bones on its top and smells faintly of the sea.",
    "Message": "With unrestrained curiosity you tear open the treasure chest to find...\n\n",
    "Type": "LOOT_BOX",
    "Charges": 1,
    // Effect : [ TABLE, Minimum Roll, Bonus to roll
    "Effects" : [ "PIRATE_BDSM_LOOT_BOX_RARE"]
};

App.Data.LootBoxes["legendary pirate loot box"] = {
    "Name": "legendary pirate chest",
    "ShortDesc": "@@color:orange;A studded iron treasure chest emblazoned with a skull and bones@@",
    "LongDesc": "This treasure chest is banded and studded with iron rivets. It has a white skull and bones on its top and smells faintly of the sea.",
    "Message": "With unrestrained curiosity you tear open the treasure chest to find...\n\n",
    "Type": "LOOT_BOX",
    "Charges": 1,
    // Effect : [ TABLE, Minimum Roll, Bonus to roll
    "Effects" : [ "PIRATE_BDSM_LOOT_BOX_LEGENDARY"]
};

App.Data.LootTables["PIRATE_BDSM"] =  [
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
        Filter: App.Loot.any("Category", [ "Pirate Slut", "BDSM" ])
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
                "ASS_XP_COMMON", "ASS_XP_UNCOMMON", "ASS_XP_RARE", "ASS_XP_LEGENDARY",
                "SWASHBUCKLING_XP_COMMON", "SWASHBUCKLING_XP_UNCOMMON", "SWASHBUCKLING_XP_RARE", "SWASHBUCKLING_XP_LEGENDARY",
                "NAVIGATING_XP_COMMON", "NAVIGATING_XP_UNCOMMON", "NAVIGATING_XP_RARE", "NAVIGATING_XP_LEGENDARY",
                "SAILING_XP_COMMON", "SAILING_XP_UNCOMMON", "SAILING_XP_RARE", "SAILING_XP_LEGENDARY",
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
                "ASS_XP_COMMON", "ASS_XP_UNCOMMON", "ASS_XP_RARE", "ASS_XP_LEGENDARY",
                "SWASHBUCKLING_XP_COMMON", "SWASHBUCKLING_XP_UNCOMMON", "SWASHBUCKLING_XP_RARE", "SWASHBUCKLING_XP_LEGENDARY",
                "NAVIGATING_XP_COMMON", "NAVIGATING_XP_UNCOMMON", "NAVIGATING_XP_RARE", "NAVIGATING_XP_LEGENDARY",
                "SAILING_XP_COMMON", "SAILING_XP_UNCOMMON", "SAILING_XP_RARE", "SAILING_XP_LEGENDARY",
            ])
    },
    {
        Type: "DRUGS",
        Chance: 50,
        MaxCount: 2,
        Filter: App.Loot.any("Effects", 
            [
                "HEAL_COMMON", "HEAL_UNCOMMON", "HEAL_RARE", "HEAL_LEGENDARY",
                "ASS_XP_COMMON", "ASS_XP_UNCOMMON", "ASS_XP_RARE", "ASS_XP_LEGENDARY",
                "PERVERSION_XP_COMMON", "PERVERSION_XP_UNCOMMON", "PERVERSION_XP_RARE", "PERVERSION_XP_LEGENDARY"
            ])
    },

];

