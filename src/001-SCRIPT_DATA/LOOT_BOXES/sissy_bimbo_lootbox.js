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

App.Data.LootTables["SISSY_BIMBO"] =  {
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
            { "TYPE" : "CLOTHES", "TAG" : "pink head bow", "QTY" : 1}
        ] },
    40 :  {
        "LOOT" : [
            { "TYPE" : "CLOTHES", "TAG" : "striped panties", "QTY" : 1}
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
            { "TYPE" : "CLOTHES", "TAG" : "bimbo bra", "QTY" : 1}
        ] },
    80 :  {
        "LOOT" : [
            { "TYPE" : "CLOTHES", "TAG" : "bimbo thong", "QTY" : 1}
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
            { "TYPE" : "CLOTHES", "TAG" : "frilly dress", "QTY" : 1},
            { "TYPE" : "FOOD", "TAG" : "honey mead", "QTY" : 1}
        ] },
    120 :  {
        "LOOT" : [
            { "TYPE" : "CLOTHES", "TAG" : "pink platform mary janes", "QTY" : 1},
            { "TYPE" : "FOOD", "TAG" : "honey mead", "QTY" : 2}
        ] },
    130 :  {
        "LOOT" : [
            { "TYPE" : "CLOTHES", "TAG" : "sissy collar", "QTY" : 1},
            { "TYPE" : "FOOD", "TAG" : "honey mead", "QTY" : 3 }
        ] }
};
