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

App.Data.LootTables["FOOD"] = {
    10 :  {
        "LOOT" : [
            { "TYPE": "FOOD", "QTY": 4, "TAG" : "slave gruel"  },
            { "TYPE": "FOOD", "QTY": 4, "TAG" : "grog"}
        ] },
    20 :  {
        "LOOT" : [
            { "TYPE": "FOOD", "QTY": 6, "TAG" : "beer"  },
            { "TYPE": "FOOD", "QTY": 2, "TAG" : "mystery stew"}
        ] },
    30 :  {
        "LOOT" : [
            { "TYPE": "FOOD", "QTY": 6, "TAG" : "cheap wine"  },
            { "TYPE": "FOOD", "QTY": 2, "TAG" : "bread and cheese"}
        ] },
    40 :  {
        "LOOT" : [
            { "TYPE" : "FOOD", "TAG" : "smugglers ale", "QTY" : 2},
            { "TYPE" : "FOOD", "TAG" : "roast fish", "QTY" : 4}
        ] },
    50 :  {
        "LOOT" : [
            { "TYPE" : "FOOD", "TAG" : "smugglers ale", "QTY" : 3},
            { "TYPE" : "FOOD", "TAG" : "milkdew melon", "QTY" : 2}
        ] },
    60 :  {
        "LOOT" : [
            { "TYPE" : "FOOD", "TAG" : "smugglers ale", "QTY" : 4},
            { "TYPE" : "FOOD", "TAG" : "milkdew melon", "QTY" : 2},
            { "TYPE" : "FOOD", "TAG" : "butter gourd", "QTY" : 2}
        ] },
    70 :  {
        "LOOT" : [
            { "TYPE" : "FOOD", "TAG" : "honey mead", "QTY" : 2},
            { "TYPE" : "FOOD", "TAG" : "milkdew melon", "QTY" : 2},
            { "TYPE" : "FOOD", "TAG" : "butter gourd", "QTY" : 2},
            { "TYPE" : "FOOD", "TAG" : "rum", "QTY" : 2}
        ] },
    80 :  {
        "LOOT" : [
            { "TYPE" : "FOOD", "TAG" : "honey mead", "QTY" : 2},
            { "TYPE" : "FOOD", "TAG" : "milkdew melon", "QTY" : 2},
            { "TYPE" : "FOOD", "TAG" : "butter gourd", "QTY" : 2},
            { "TYPE" : "FOOD", "TAG" : "rum", "QTY" : 2},
            { "TYPE" : "FOOD", "TAG" : "starfruit", "QTY" : 2}
        ] },
    90 :  {
        "LOOT" : [
            { "TYPE" : "FOOD", "TAG" : "honey mead", "QTY" : 2},
            { "TYPE" : "FOOD", "TAG" : "milkdew melon", "QTY" : 2},
            { "TYPE" : "FOOD", "TAG" : "butter gourd", "QTY" : 2},
            { "TYPE" : "FOOD", "TAG" : "rum", "QTY" : 2},
            { "TYPE" : "FOOD", "TAG" : "starfruit", "QTY" : 2},
            { "TYPE" : "FOOD", "TAG" : "pink peach", "QTY" : 2}
        ] },
    100 :  {
        "LOOT" : [
            { "TYPE" : "FOOD", "TAG" : "purple sucker",  "QTY" : 2},
            { "TYPE" : "FOOD", "TAG" : "honey mead", "QTY" : 2},
            { "TYPE" : "FOOD", "TAG" : "red plum",   "QTY" : 2}
        ] },
    110 :  {
        "LOOT" : [
            { "TYPE" : "FOOD", "TAG" : "starfruit", "QTY" : 2},
            { "TYPE" : "FOOD", "TAG" : "purple mushrooms", "QTY" : 2}
        ] },
    120 :  {
        "LOOT" : [
            { "TYPE" : "FOOD", "TAG" : "pirates plunder", "QTY" : 1}
        ] },
    130 :  {
        "LOOT" : [
            { "TYPE" : "FOOD", "TAG" : "ambrosia", "QTY" : 1}
        ] }
};
