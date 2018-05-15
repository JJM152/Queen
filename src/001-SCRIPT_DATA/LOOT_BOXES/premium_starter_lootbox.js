App = App || { Data: { }, Entity: { } };
App.Data.LootBoxes = App.Data.LootBoxes || { };
App.Data.LootTables = App.Data.LootTables || { };

// BOX TYPE     MINIMUM     BONUS ROLL  COLOR
// COMMON       0           0           grey
// UNCOMMON     20          10          lime
// RARE         30          20          cyan
// LEGENDARY    50          30          orange

App.Data.LootBoxes["premium starter loot box"] = {
    "Name": "premium starter chest",
    "ShortDesc": "@@color:purple;A big box with a big purple bow over it@@",
    "LongDesc": "This sparkling big box is shaped like a giftbox you used to give to your fiancee and opens with a big bow on it's top. Wonder what's inside?",
    "Message": "With unrestrained curiosity you tear open the treasure chest to find...\n\n",
    "Type": "LOOT_BOX",
    "Charges": 1,
    // Effect : [ TABLE, Minimum Roll, Bonus to roll
    "UseEffect": { "LootBox": ["PREMIUM_STARTER", 0, 0]},
    "Price": 0
};

App.Data.LootTables["PREMIUM_STARTER"] =  {
    10 :  {
        "LOOT" : [
            { "TYPE" : "COSMETICS", "TAG" : "basic makeup", "QTY" : 50},
            { "TYPE" : "COSMETICS", "TAG" : "hair accessories", "QTY" : 50},
            { "TYPE" : "COSMETICS", "TAG" : "expensive makeup", "QTY" : 50},
            { "TYPE" : "COSMETICS", "TAG" : "hair products", "QTY" : 50},
            { "TYPE" : "FOOD", "TAG" : "milkdew melon", "QTY" : 10},
            { "TYPE" : "FOOD", "TAG" : "honey mead", "QTY" : 10},
            { "TYPE" : "FOOD", "TAG" : "butter gourd", "QTY" : 10},
            { "TYPE" : "FOOD", "TAG" : "mystery stew", "QTY" : 50},
            { "TYPE" : "FOOD", "TAG" : "pink peach", "QTY" : 10},
            { "TYPE" : "FOOD", "TAG" : "starfruit", "QTY" : 10},
            { "TYPE" : "DRUGS", "TAG" : "healing potion", "QTY" : 15},
            { "TYPE" : "DRUGS", "TAG" : "hair tonic", "QTY" : 10},
            { "TYPE" : "DRUGS", "TAG" : "face cream", "QTY" : 10},
            { "TYPE" : "DRUGS", "TAG" : "siren elixir", "QTY" : 15},
            { "TYPE" : "DRUGS", "TAG" : "nereid philtre", "QTY" : 3},
            { "TYPE" : "DRUGS", "TAG" : "succubus philtre", "QTY" : 3}
        ] },
    100 :  {
        "LOOT" : [
            { "TYPE" : "COSMETICS", "TAG" : "basic makeup", "QTY" : 50},
            { "TYPE" : "COSMETICS", "TAG" : "hair accessories", "QTY" : 50},
            { "TYPE" : "COSMETICS", "TAG" : "expensive makeup", "QTY" : 50},
            { "TYPE" : "COSMETICS", "TAG" : "hair products", "QTY" : 50},
            { "TYPE" : "FOOD", "TAG" : "milkdew melon", "QTY" : 10},
            { "TYPE" : "FOOD", "TAG" : "honey mead", "QTY" : 10},
            { "TYPE" : "FOOD", "TAG" : "butter gourd", "QTY" : 10},
            { "TYPE" : "FOOD", "TAG" : "mystery stew", "QTY" : 50},
            { "TYPE" : "FOOD", "TAG" : "pink peach", "QTY" : 10},
            { "TYPE" : "FOOD", "TAG" : "starfruit", "QTY" : 10},
            { "TYPE" : "DRUGS", "TAG" : "healing potion", "QTY" : 15},
            { "TYPE" : "DRUGS", "TAG" : "hair tonic", "QTY" : 10},
            { "TYPE" : "DRUGS", "TAG" : "face cream", "QTY" : 10},
            { "TYPE" : "DRUGS", "TAG" : "siren elixir", "QTY" : 15},
            { "TYPE" : "DRUGS", "TAG" : "nereid philtre", "QTY" : 3},
            { "TYPE" : "DRUGS", "TAG" : "succubus philtre", "QTY" : 3}
        ] }        
};
