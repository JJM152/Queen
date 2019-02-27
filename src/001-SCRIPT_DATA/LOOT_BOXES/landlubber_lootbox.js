// BOX TYPE     MINIMUM     BONUS ROLL  COLOR
// COMMON       0           0           grey
// UNCOMMON     20          10          lime
// RARE         30          20          cyan
// LEGENDARY    50          30          orange

App.Data.LootBoxes["landlubber chest"] = {
    "Name": "Landlubber chest",
    "ShortDesc": "@@color:pink;A small box with a big pink bow over it@@",
    "LongDesc": "This small box is shaped like a giftbox you used to give to your fiancee and opens with a big bow on it's top. Wonder what's inside?",
    "Message": "With unrestrained curiosity you tear open the treasure chest to find...\n\n",
    "Type": "LOOT_BOX",
    "Charges": 1,
    // Effect : [ TABLE, Minimum Roll, Bonus to roll
    "Effects" : [ "LANDLUBBER_LOOT_BOX_COMMON"]
};

App.Data.LootTables["LANDLUBBER"] =  {
    10 :  {
        "LOOT" : [
            { "TYPE" : "COSMETICS", "TAG" : "basic makeup", "QTY" : 15},
            { "TYPE" : "COSMETICS", "TAG" : "hair accessories", "QTY" : 15},
            { "TYPE" : "FOOD", "TAG" : "bread crust", "QTY" : 10},
            { "TYPE" : "FOOD", "TAG" : "mystery stew", "QTY" : 8},
            { "TYPE" : "FOOD", "TAG" : "roast fish", "QTY" : 5},
            { "TYPE" : "FOOD", "TAG" : "cheap wine", "QTY" : 5},
            { "TYPE" : "FOOD", "TAG" : "smugglers ale", "QTY" : 5},
            { "TYPE" : "DRUGS", "TAG" : "medicinal herbs", "QTY" : 5},
            { "TYPE" : "DRUGS", "TAG" : "pixie dust", "QTY" : 5},
            { "TYPE" : "CLOTHES", "TAG" : "landlubber costume", "QTY" : 1}
        ] },
    80 :  {
        "LOOT" : [
            { "TYPE" : "COSMETICS", "TAG" : "basic makeup", "QTY" : 15},
            { "TYPE" : "COSMETICS", "TAG" : "hair accessories", "QTY" : 15},
            { "TYPE" : "FOOD", "TAG" : "bread crust", "QTY" : 20},
            { "TYPE" : "FOOD", "TAG" : "mystery stew", "QTY" : 12},
            { "TYPE" : "FOOD", "TAG" : "roast fish", "QTY" : 8},
            { "TYPE" : "FOOD", "TAG" : "cheap wine", "QTY" : 8},
            { "TYPE" : "FOOD", "TAG" : "smugglers ale", "QTY" : 10},
            { "TYPE" : "DRUGS", "TAG" : "medicinal herbs", "QTY" : 5},
            { "TYPE" : "DRUGS", "TAG" : "pixie dust", "QTY" : 5},
            { "TYPE" : "CLOTHES", "TAG" : "landlubber costume", "QTY" : 1}
        ] }
};
