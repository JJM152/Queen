App = App || { Data: { }, Entity: { } };
App.Data.LootBoxes = App.Data.LootBoxes || { };
App.Data.LootTables = App.Data.LootTables || { };

// BOX TYPE     MINIMUM     BONUS ROLL  COLOR
// COMMON       0           0           grey
// UNCOMMON     20          10          lime
// RARE         30          20          cyan
// LEGENDARY    50          30          orange

App.Data.LootBoxes["common dancer loot box"] = {
    "Name": "common dancer chest",
    "ShortDesc": "@@color:grey;A small gift box shaped like a treasure chest@@",
    "LongDesc": "This small black treasure chest sports an attractive leopard print pattern and is wrapped with a shiny white ribbon and bow.",
    "Message": "With unrestrained curiosity you tear open the treasure chest to find...\n\n",
    "Type": "LOOT_BOX",
    "Charges": 1,
    // Effect : [ TABLE, Minimum Roll, Bonus to roll
    "Effects" : [ "DANCER_BIMBO_LOOT_BOX_COMMON"]
};

App.Data.LootBoxes["uncommon dancer loot box"] = {
    "Name": "uncommon dancer chest",
    "ShortDesc": "@@color:lime;A gift box shaped like a treasure chest@@",
    "LongDesc": "This black treasure chest sports an attractive leopard print pattern and is wrapped with a shiny white ribbon and bow.",
    "Message": "With unrestrained curiosity you tear open the treasure chest to find...\n\n",
    "Type": "LOOT_BOX",
    "Charges": 1,
    // Effect : [ TABLE, Minimum Roll, Bonus to roll
    "Effects" : [ "DANCER_BIMBO_LOOT_BOX_UNCOMMON"]
};

App.Data.LootBoxes["rare dancer loot box"] = {
    "Name": "rare dancer chest",
    "ShortDesc": "@@color:cyan;A large gift box shaped like a treasure chest@@",
    "LongDesc": "This large black treasure chest sports an attractive leopard print pattern and is wrapped with a shiny white ribbon and bow.",
    "Message": "With unrestrained curiosity you tear open the treasure chest to find...\n\n",
    "Type": "LOOT_BOX",
    "Charges": 1,
    // Effect : [ TABLE, Minimum Roll, Bonus to roll
    "Effects" : [ "DANCER_BIMBO_LOOT_BOX_RARE"]
};

App.Data.LootBoxes["legendary dancer loot box"] = {
    "Name": "legendary dancer chest",
    "ShortDesc": "@@color:orange;A huge gift box shaped like a treasure chest@@",
    "LongDesc": "This huge black treasure chest sports an attractive leopard print pattern and is wrapped with a shiny white ribbon and bow.",
    "Message": "With unrestrained curiosity you tear open the treasure chest to find...\n\n",
    "Type": "LOOT_BOX",
    "Charges": 1,
    // Effect : [ TABLE, Minimum Roll, Bonus to roll
    "Effects" : [ "DANCER_BIMBO_LOOT_BOX_LEGENDARY"]
};

App.Data.LootTables["DANCER_BIMBO"] =  {
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
            { "TYPE" : "CLOTHES", "TAG" : "fishnet stockings", "QTY" : 1}
        ] },
    40 :  {
        "LOOT" : [
            { "TYPE" : "CLOTHES",   "TAG" : "silk stockings", "QTY" : 1},
            { "TYPE" : "COSMETICS", "TAG" : "basic makeup", "QTY" : 5},
            { "TYPE" : "COSMETICS", "TAG" : "hair accessories", "QTY" : 5},
            { "TYPE" : "COSMETICS", "TAG" : "expensive makeup", "QTY" : 5},
            { "TYPE" : "COSMETICS", "TAG" : "hair products", "QTY" : 5}
        ] },
    50 :  {
        "LOOT" : [
            { "TYPE" : "CLOTHES", "TAG" : "tall heels", "QTY" : 1},
            { "TYPE" : "COSMETICS", "TAG" : "basic makeup", "QTY" : 5},
            { "TYPE" : "COSMETICS", "TAG" : "hair accessories", "QTY" : 5},
            { "TYPE" : "COSMETICS", "TAG" : "expensive makeup", "QTY" : 5},
            { "TYPE" : "COSMETICS", "TAG" : "hair products", "QTY" : 5}
        ] },
    60 :  {
        "LOOT" : [
            { "TYPE" : "CLOTHES", "TAG" : "fishnet stockings", "QTY" : 1},
            { "TYPE" : "DRUGS", "TAG" : "siren elixir", "QTY" : 1}
        ] },
    65 :  {
        "LOOT" : [
            { "TYPE" : "CLOTHES", "TAG" : "cupless corset", "QTY" : 1},
            { "TYPE" : "DRUGS", "TAG" : "lip balm", "QTY" : 2},
            { "TYPE" : "DRUGS", "TAG" : "face cream", "QTY" : 2}
        ] },
    70 :  {
        "LOOT" : [
            { "TYPE" : "CLOTHES", "TAG" : "nipple tassels", "QTY" : 1},
            { "TYPE" : "DRUGS", "TAG" : "lip balm", "QTY" : 2}
        ] },
    75 :  {
        "LOOT" : [
            { "TYPE" : "CLOTHES", "TAG" : "gothic black bra", "QTY" : 1},
            { "TYPE" : "DRUGS", "TAG" : "lip balm", "QTY" : 2}
        ] },
    80 :  {
        "LOOT" : [
            { "TYPE" : "CLOTHES", "TAG" : "sequined g-string", "QTY" : 1},
            { "TYPE" : "DRUGS", "TAG" : "face cream", "QTY" : 2}
        ] },
    85 :  {
        "LOOT" : [
            { "TYPE" : "CLOTHES", "TAG" : "black panties", "QTY" : 1},
            { "TYPE" : "DRUGS", "TAG" : "hair tonic", "QTY" : 1}
        ] },
    90 :  {
        "LOOT" : [
            { "TYPE" : "CLOTHES", "TAG" : "small plug", "QTY" : 1},
            { "TYPE" : "FOOD", "TAG" : "milkdew melon", "QTY" : 3}
        ] },
    100 :  {
        "LOOT" : [
            { "TYPE" : "CLOTHES", "TAG" : "burlesque costume", "QTY" : 1},
            { "TYPE" : "FOOD", "TAG" : "honey mead", "QTY" : 2},
            { "TYPE" : "DRUGS", "TAG" : "face cream", "QTY" : 2},
            { "TYPE" : "FOOD", "TAG" : "butter gourd", "QTY" : 2}
        ] },
    105 :  {
        "LOOT" : [
            { "TYPE" : "CLOTHES", "TAG" : "platform heels", "QTY" : 1},
            { "TYPE" : "FOOD", "TAG" : "honey mead", "QTY" : 2},
            { "TYPE" : "DRUGS", "TAG" : "face cream", "QTY" : 2},
            { "TYPE" : "FOOD", "TAG" : "butter gourd", "QTY" : 2}
        ] },
    110 :  {
        "LOOT" : [
            { "TYPE" : "CLOTHES", "TAG" : "exotic wig", "QTY" : 1},
            { "TYPE" : "FOOD", "TAG" : "honey mead", "QTY" : 1},
            { "TYPE" : "FOOD", "TAG" : "milkdew melon", "QTY" : 1}
        ] },
    120 :  {
        "LOOT" : [
            { "TYPE" : "CLOTHES", "TAG" : "stripper heels", "QTY" : 1},
            { "TYPE" : "FOOD", "TAG" : "milkdew melon", "QTY" : 4}
        ] },
    130 :  {
        "LOOT" : [
            { "TYPE" : "CLOTHES", "TAG" : "slutty schoolgirl", "QTY" : 1},
            { "TYPE" : "FOOD", "TAG" : "butter gourd", "QTY" : 4 }
        ] }
};