// BOX TYPE     MINIMUM     BONUS ROLL  COLOR
// COMMON       0           0           grey
// UNCOMMON     20          10          lime
// RARE         30          20          cyan
// LEGENDARY    50          30          orange

App.Data.LootBoxes["common food loot box"] =  {
    "Name": "common food chest",
    "ShortDesc": "@@color:grey;A small crate used for storing foodstuff@@",
    "LongDesc": "This small crate looks rather shoddy and the contents rattle when you shake it.",
    "Message": "With unrestrained curiosity you tear open the treasure chest to find...\n\n",
    "Type": "LOOT_BOX",
    "Charges": 1,
    // Effect : [ TABLE, Minimum Roll, Bonus to roll
    "Effects" : [ "FOOD_LOOT_BOX_COMMON" ]
};

App.Data.LootBoxes["uncommon food loot box"] =  {
    "Name": "uncommon food chest",
    "ShortDesc": "@@color:lime;A crate used for storing foodstuff@@",
    "LongDesc": "This crate looks rather shoddy and the contents rattle when you shake it.",
    "Message": "With unrestrained curiosity you tear open the treasure chest to find...\n\n",
    "Type": "LOOT_BOX",
    "Charges": 1,
    // Effect : [ TABLE, Minimum Roll, Bonus to roll
    "Effects" : [ "FOOD_LOOT_BOX_UNCOMMON" ]
};

App.Data.LootBoxes["rare food loot box"] =  {
    "Name": "rare food chest",
    "ShortDesc": "@@color:cyan;A large crate used for storing foodstuff@@",
    "LongDesc": "This large crate looks rather shoddy and the contents rattle when you shake it.",
    "Message": "With unrestrained curiosity you tear open the treasure chest to find...\n\n",
    "Type": "LOOT_BOX",
    "Charges": 1,
    // Effect : [ TABLE, Minimum Roll, Bonus to roll
    "Effects" : [ "FOOD_LOOT_BOX_RARE" ]
};

App.Data.LootBoxes["legendary food loot box"] =  {
    "Name": "legendary food chest",
    "ShortDesc": "@@color:orange;A large crate used for storing foodstuff@@",
    "LongDesc": "This large crate looks rather shoddy and the contents rattle when you shake it.",
    "Message": "With unrestrained curiosity you tear open the treasure chest to find...\n\n",
    "Type": "LOOT_BOX",
    "Charges": 1,
    // Effect : [ TABLE, Minimum Roll, Bonus to roll
    "Effects" : [ "FOOD_LOOT_BOX_LEGENDARY" ]
};

App.Data.LootTables["FOOD"] = [
    {
        Type : "FOOD",
        Chance: 100,
    }
];

