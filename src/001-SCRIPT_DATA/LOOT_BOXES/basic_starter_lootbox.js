App = App || { Data: { }, Entity: { } };
App.Data.LootBoxes = App.Data.LootBoxes || { };
App.Data.LootTables = App.Data.LootTables || { };

// BOX TYPE     MINIMUM     BONUS ROLL  COLOR
// COMMON       0           0           grey
// UNCOMMON     20          10          lime
// RARE         30          20          cyan
// LEGENDARY    50          30          orange

App.Data.LootBoxes["basic starter loot box"] = {
    "Name": "basic starter chest",
    "ShortDesc": "@@color:pink;A small box with a big pink bow over it@@",
    "LongDesc": "This small box is shaped like a giftbox you used to give to your fiancee and opens with a big bow on it's top. Wonder what's inside?",
    "Message": "With unrestrained curiosity you tear open the treasure chest to find...\n\n",
    "Type": "LOOT_BOX",
    "Charges": 1,
    // Effect : [ TABLE, Minimum Roll, Bonus to roll
    "UseEffect": { "LootBox": ["BASIC_STARTER", 0, 0]},
    "Price": 0
};

App.Data.LootTables["BASIC_STARTER"] =  {
    10 :  {
        "LOOT" : [
            { "TYPE" : "COSMETICS", "TAG" : "basic makeup", "QTY" : 20},
            { "TYPE" : "COSMETICS", "TAG" : "hair accessories", "QTY" : 20},
            { "TYPE" : "COSMETICS", "TAG" : "expensive makeup", "QTY" : 20},
            { "TYPE" : "COSMETICS", "TAG" : "hair products", "QTY" : 20},
            { "TYPE" : "FOOD", "TAG" : "milkdew melon", "QTY" : 3},
            { "TYPE" : "FOOD", "TAG" : "honey mead", "QTY" : 3},
            { "TYPE" : "FOOD", "TAG" : "butter gourd", "QTY" : 3},
            { "TYPE" : "FOOD", "TAG" : "bread crust", "QTY" : 25},
            { "TYPE" : "FOOD", "TAG" : "pink peach", "QTY" : 3},
            { "TYPE" : "FOOD", "TAG" : "starfruit", "QTY" : 3},
            { "TYPE" : "DRUGS", "TAG" : "healing potion", "QTY" : 5},
            { "TYPE" : "DRUGS", "TAG" : "hair tonic", "QTY" : 3},
            { "TYPE" : "DRUGS", "TAG" : "face cream", "QTY" : 3},
            { "TYPE" : "DRUGS", "TAG" : "siren elixir", "QTY" : 3}
        ] },
    80 :  {
        "LOOT" : [
            { "TYPE" : "COSMETICS", "TAG" : "basic makeup", "QTY" : 20},
            { "TYPE" : "COSMETICS", "TAG" : "hair accessories", "QTY" : 20},
            { "TYPE" : "COSMETICS", "TAG" : "expensive makeup", "QTY" : 20},
            { "TYPE" : "COSMETICS", "TAG" : "hair products", "QTY" : 20},
            { "TYPE" : "FOOD", "TAG" : "milkdew melon", "QTY" : 3},
            { "TYPE" : "FOOD", "TAG" : "honey mead", "QTY" : 3},
            { "TYPE" : "FOOD", "TAG" : "butter gourd", "QTY" : 3},
            { "TYPE" : "FOOD", "TAG" : "bread crust", "QTY" : 25},
            { "TYPE" : "FOOD", "TAG" : "pink peach", "QTY" : 3},
            { "TYPE" : "FOOD", "TAG" : "starfruit", "QTY" : 3},
            { "TYPE" : "DRUGS", "TAG" : "healing potion", "QTY" : 5},
            { "TYPE" : "DRUGS", "TAG" : "hair tonic", "QTY" : 3},
            { "TYPE" : "DRUGS", "TAG" : "face cream", "QTY" : 3},
            { "TYPE" : "DRUGS", "TAG" : "siren elixir", "QTY" : 3}
        ] }
};
