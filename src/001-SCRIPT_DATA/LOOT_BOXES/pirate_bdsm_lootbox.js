App = App || { Data: { }, Entity: { } };
App.Data.LootBoxes = App.Data.LootBoxes || { };
App.Data.LootTables = App.Data.LootTables || { };

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

App.Data.LootTables["PIRATE_BDSM"] =  {
    10 :  {
        "LOOT" : [
            { "TYPE" : "CLOTHES", "TAG" : "fishnet tights", "QTY" : 1}
        ] },
    20 :  {
        "LOOT" : [
            { "TYPE" : "CLOTHES", "TAG" : "fishnet tights", "QTY" : 1},
            { "TYPE" : "CLOTHES", "TAG" : "fishnet stockings", "QTY" : 1}
        ] },
    30 :  {
        "LOOT" : [
            { "TYPE" : "CLOTHES", "TAG" : "pirate bra", "QTY" : 1}
        ] },
    40 :  {
        "LOOT" : [
            { "TYPE" : "CLOTHES", "TAG" : "pirate thong", "QTY" : 1}
        ] },
    50 :  {
        "LOOT" : [
            { "TYPE" : "CLOTHES", "TAG" : "nipple clamps", "QTY" : 1}
        ] },
    60 :  {
        "LOOT" : [
            { "TYPE" : "CLOTHES", "TAG" : "training corset", "QTY" : 1}
        ] },
    70 :  {
        "LOOT" : [
            { "TYPE" : "CLOTHES", "TAG" : "bondage corset", "QTY" : 1}
        ] },
    80 :  {
        "LOOT" : [
            { "TYPE" : "CLOTHES", "TAG" : "shiny knee boots", "QTY" : 1}
        ] },
    85 :  {
        "LOOT" : [
            { "TYPE" : "CLOTHES", "TAG" : "nipple rings", "QTY" : 1}
        ] },
    90 :  {
        "LOOT" : [
            { "TYPE" : "CLOTHES", "TAG" : "pirate boots", "QTY" : 1}
        ] },
    100 :  {
        "LOOT" : [
            { "TYPE" : "CLOTHES", "TAG" : "large plug", "QTY" : 1}
        ] },
    110 :  {
        "LOOT" : [
            { "TYPE" : "CLOTHES", "TAG" : "pirate hat", "QTY" : 1},
            { "TYPE" : "FOOD", "TAG" : "rum", "QTY" : 6}
        ] },
    120 :  {
        "LOOT" : [
            { "TYPE" : "CLOTHES", "TAG" : "pistol brace", "QTY" : 1},
            { "TYPE" : "FOOD", "TAG" : "pirates plunder", "QTY" : 2}
        ] },
    130 :  {
        "LOOT" : [
            { "TYPE" : "CLOTHES", "TAG" : "pirate waistcoat", "QTY" : 1},
            { "TYPE" : "FOOD", "TAG" : "pirates plunder", "QTY" : 3 }
        ] }
};
