// BOX TYPE     MINIMUM     BONUS ROLL  COLOR
// COMMON       0           0           grey
// UNCOMMON     20          10          lime
// RARE         30          20          cyan
// LEGENDARY    50          30          orange

App.Data.LootBoxes["pathetic loser chest"] = {
    "Name": "Pathetic loser chest",
    "ShortDesc": "@@color:purple;A big box with a big purple bow over it@@",
    "LongDesc": "This sparkling big box is shaped like a giftbox you used to give to your fiancee and opens with a big bow on it's top. Wonder what's inside?",
    "Message": "With unrestrained curiosity you tear open the treasure chest to find...\n\n",
    "Type": "LOOT_BOX",
    "Charges": 1,
    // Effect : [ TABLE, Minimum Roll, Bonus to roll
    "Effects" : [ "PATHETIC_LOSER_LOOT_BOX_COMMON"]
};

App.Data.LootTables["PATHETIC_LOSER"] =  {
    10 :  {
        "LOOT" : [
            { "TYPE" : "COSMETICS", "TAG" : "basic makeup", "QTY" : 20},
            { "TYPE" : "COSMETICS", "TAG" : "hair accessories", "QTY" : 20},
            { "TYPE" : "COSMETICS", "TAG" : "expensive makeup", "QTY" : 10},
            { "TYPE" : "COSMETICS", "TAG" : "hair products", "QTY" : 10},
            { "TYPE" : "FOOD", "TAG" : "bread crust", "QTY" : 15},
            { "TYPE" : "FOOD", "TAG" : "mystery stew", "QTY" : 15},
            { "TYPE" : "FOOD", "TAG" : "roast fish", "QTY" : 5},
            { "TYPE" : "FOOD", "TAG" : "red plum", "QTY" : 5},
            { "TYPE" : "FOOD", "TAG" : "cheap wine", "QTY" : 5},
            { "TYPE" : "FOOD", "TAG" : "smugglers ale", "QTY" : 5},
            { "TYPE" : "DRUGS", "TAG" : "medicinal herbs", "QTY" : 5},
            { "TYPE" : "DRUGS", "TAG" : "healing potion", "QTY" : 5},
            { "TYPE" : "DRUGS", "TAG" : "pixie dust", "QTY" : 10},
            { "TYPE" : "CLOTHES", "TAG" : "wig", "QTY" : 1},
            { "TYPE" : "CLOTHES", "TAG" : "choker", "QTY" : 1},
            { "TYPE" : "CLOTHES", "TAG" : "fishnet tights", "QTY" : 1},
            { "TYPE" : "CLOTHES", "TAG" : "pathetic loser costume", "QTY" : 1}

        ] },
    100 :  {
        "LOOT" : [
            { "TYPE" : "COSMETICS", "TAG" : "basic makeup", "QTY" : 20},
            { "TYPE" : "COSMETICS", "TAG" : "hair accessories", "QTY" : 20},
            { "TYPE" : "COSMETICS", "TAG" : "expensive makeup", "QTY" : 10},
            { "TYPE" : "COSMETICS", "TAG" : "hair products", "QTY" : 10},
            { "TYPE" : "FOOD", "TAG" : "bread crust", "QTY" : 15},
            { "TYPE" : "FOOD", "TAG" : "mystery stew", "QTY" : 15},
            { "TYPE" : "FOOD", "TAG" : "roast fish", "QTY" : 5},
            { "TYPE" : "FOOD", "TAG" : "red plum", "QTY" : 5},
            { "TYPE" : "FOOD", "TAG" : "cheap wine", "QTY" : 5},
            { "TYPE" : "FOOD", "TAG" : "smugglers ale", "QTY" : 5},
            { "TYPE" : "DRUGS", "TAG" : "medicinal herbs", "QTY" : 5},
            { "TYPE" : "DRUGS", "TAG" : "healing potion", "QTY" : 5},
            { "TYPE" : "DRUGS", "TAG" : "pixie dust", "QTY" : 10},
            { "TYPE" : "CLOTHES", "TAG" : "wig", "QTY" : 1},
            { "TYPE" : "CLOTHES", "TAG" : "choker", "QTY" : 1},
            { "TYPE" : "CLOTHES", "TAG" : "fishnet tights", "QTY" : 1},
            { "TYPE" : "CLOTHES", "TAG" : "pathetic loser costume", "QTY" : 1}
        ] }
};
