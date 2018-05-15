App = App || { Data: { }, Entity: { } };
App.Data.LootBoxes = App.Data.LootBoxes || { };
App.Data.LootTables = App.Data.LootTables || { };

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
    "UseEffect": { "LootBox": ["LOLITA_SISSY", 0, 0]},
    "Price": 0
};

App.Data.LootBoxes["uncommon lolita loot box"] = {
    "Name": "uncommon lolita chest",
    "ShortDesc": "@@color:lime;A novelty bag shaped like a teddy bear@@",
    "LongDesc": "This pink bag is shaped like a stuffed toy and opens with a drawstring on it's back. Wonder what's inside?",
    "Message": "With unrestrained curiosity you tear open the treasure chest to find...\n\n",
    "Type": "LOOT_BOX",
    "Charges": 1,
    // Effect : [ TABLE, Minimum Roll, Bonus to roll
    "UseEffect": { "LootBox": ["LOLITA_SISSY", 20, 10]},
    "Price": 0
};

App.Data.LootBoxes["rare lolita loot box"] = {
    "Name": "rare lolita chest",
    "ShortDesc": "@@color:cyan;A large novelty bag shaped like a teddy bear@@",
    "LongDesc": "This large pink bag is shaped like a stuffed toy and opens with a drawstring on it's back. Wonder what's inside?",
    "Message": "With unrestrained curiosity you tear open the treasure chest to find...\n\n",
    "Type": "LOOT_BOX",
    "Charges": 1,
    // Effect : [ TABLE, Minimum Roll, Bonus to roll
    "UseEffect": { "LootBox": ["LOLITA_SISSY", 30, 20]},
    "Price": 0
};

App.Data.LootBoxes["legendary lolita loot box"] = {
    "Name": "legendary lolita chest",
    "ShortDesc": "@@color:orange;A huge novelty bag shaped like a teddy bear@@",
    "LongDesc": "This huge pink bag is shaped like a stuffed toy and opens with a drawstring on it's back. Wonder what's inside?",
    "Message": "With unrestrained curiosity you tear open the treasure chest to find...\n\n",
    "Type": "LOOT_BOX",
    "Charges": 1,
    // Effect : [ TABLE, Minimum Roll, Bonus to roll
    "UseEffect": { "LootBox": ["LOLITA_SISSY", 50, 30]},
    "Price": 0
};

App.Data.LootTables["LOLITA_SISSY"] =  {
    10 :  {
        "LOOT" : [
            { "TYPE" : "COSMETICS", "TAG" : "basic makeup", "QTY" : 5},
            { "TYPE" : "COSMETICS", "TAG" : "hair accessories", "QTY" : 5}
        ] },
    20 :  {
        "LOOT" : [
            { "TYPE" : "COSMETICS", "TAG" : "basic makeup", "QTY" : 5},
            { "TYPE" : "COSMETICS", "TAG" : "hair accessories", "QTY" : 5},
            { "TYPE" : "COSMETICS", "TAG" : "expensive makeup", "QTY" : 5},
            { "TYPE" : "COSMETICS", "TAG" : "hair products", "QTY" : 5}
        ] },
    30 :  {
        "LOOT" : [
            { "TYPE" : "CLOTHES", "TAG" : "pink head bow", "QTY" : 1},
            { "TYPE" : "FOOD", "TAG" : "purple sucker",  "QTY" : 1}
        ] },
    40 :  {
        "LOOT" : [
            { "TYPE" : "CLOTHES", "TAG" : "striped panties", "QTY" : 1}
        ] },
    45 :  {
        "LOOT" : [
            { "TYPE" : "CLOTHES", "TAG" : "white knee socks", "QTY" : 1},
            { "TYPE" : "FOOD", "TAG" : "purple sucker",  "QTY" : 1}
        ] },
    50 :  {
        "LOOT" : [
            { "TYPE" : "CLOTHES", "TAG" : "striped bra", "QTY" : 1}
        ] },
    60 :  {
        "LOOT" : [
            { "TYPE" : "CLOTHES", "TAG" : "striped stockings", "QTY" : 1}
        ] },
    70 :  {
        "LOOT" : [
            { "TYPE" : "CLOTHES", "TAG" : "cute pink bra", "QTY" : 1}
        ] },
    80 :  {
        "LOOT" : [
            { "TYPE" : "CLOTHES", "TAG" : "cute pink panties", "QTY" : 1}
        ] },
    90 :  {
        "LOOT" : [
            { "TYPE" : "CLOTHES", "TAG" : "pink mary janes", "QTY" : 1}
        ] },
    100 :  {
        "LOOT" : [
            { "TYPE" : "CLOTHES", "TAG" : "pink knee socks", "QTY" : 1},
            { "TYPE" : "FOOD", "TAG" : "honey mead", "QTY" : 1}
        ] },
    110 :  {
        "LOOT" : [
            { "TYPE" : "CLOTHES", "TAG" : "pink platform mary janes", "QTY" : 1},
            { "TYPE" : "FOOD", "TAG" : "honey mead", "QTY" : 1}
        ] },
    120 :  {
        "LOOT" : [
            { "TYPE" : "CLOTHES", "TAG" : "pink t-shirt", "QTY" : 1},
            { "TYPE" : "FOOD", "TAG" : "purple sucker",  "QTY" : 1}
        ] },
    130 :  {
        "LOOT" : [
            { "TYPE" : "CLOTHES", "TAG" : "pink tartan", "QTY" : 1},
            { "TYPE" : "FOOD", "TAG" : "purple sucker",  "QTY" : 2}
        ] }
};
