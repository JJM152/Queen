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

App.Data.LootTables["LANDLUBBER"] =  [
    {
        Type : "CLOTHES",
        Chance: 100,
        Free: true,
        MaxCount: 1,
        Filter: App.Loot.cmp("Name", "landlubber costume")
    },
    {
        Type : "COSMETICS",
        Chance: 100,
        Free: true,
        MaxCount: 20
    },
    {
        Type : "COSMETICS",
        Chance: 100,
        Free: true,
        MaxCount: 20
    },
    {
        Type : "FOOD",
        Chance: 50,
        Min: 1,
        Max: 200,
    },
    {
        Type: "DRUGS",
        Chance: 50,
        Min: 1,
        Max: 200
    }
];

