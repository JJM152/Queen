App = App || { Data: { }, Entity: { } };
App.Data.Loot = App.Data.Loot || { };

App.Data.Loot["DUNGEON_COMMON"] = [
    { category: "MISC_CONSUMABLE", tag: "torch", min: 1, max: 3 },
    { category: "MISC_CONSUMABLE", tag: "shovel", min: 1, max: 1 },
    { category: "MISC_CONSUMABLE", tag: "junk", min: 1, max: 1 },
    { category: "DRUGS", tag: "hair tonic", min: 1, max: 1 },
    { category: "DRUGS", tag: "fairy dust", min: 1, max: 1 },
    { category: "DRUGS", tag: "lip balm", min: 1, max: 1 },
    { category: "FOOD", tag: "beer", min: 1, max: 3 },
    { category: "FOOD", tag: "cheap wine", min: 1, max: 3 },
    { category: "FOOD", tag: "hardtack", min: 1, max: 1 }
];

App.Data.Loot["DUNGEON_UNCOMMON"] = [
    { category: "DRUGS", tag: "pixie dust", min: 1, max: 1 },
    { category: "DRUGS", tag: "khafkir", min: 1, max: 1 },
    { category: "DRUGS", tag: "AP_coldsfoot", min: 1, max: 1 },
    { category: "DRUGS", tag: "AP_damiana", min: 1, max: 1 },
    { category: "DRUGS", tag: "AP_rose", min: 1, max: 1 },
    { category: "DRUGS", tag: "AP_baneberry", min: 1, max: 1 },
    { category: "FOOD", tag: "hardtack", min: 1, max: 3 },
    { category: "FOOD", tag: "milkdew melon", min: 1, max: 2 },
    { category: "FOOD", tag: "butter gourd", min: 1, max: 2 },
    { category: "FOOD", tag: "orgeat", min: 1, max: 3 }
];

App.Data.Loot["DUNGEON_RARE"] = [
    { category: "LOOT_BOX", tag: "rare lolita loot box", min: 1, max: 1 },
    { category: "LOOT_BOX", tag: "rare pirate loot box", min: 1, max: 1 },
    { category: "LOOT_BOX", tag: "rare dancer loot box", min: 1, max: 1 },
    { category: "LOOT_BOX", tag: "rare sissy chest", min: 1, max: 1 },
    { category: "DRUGS", tag: "siren elixir", min: 1, max: 1 },
    { category: "DRUGS", tag: "AP_sarsaparilla", min: 1, max: 1 },
    { category: "DRUGS", tag: "AP_widows_web", min: 1, max: 1 },
    { category: "FOOD", tag: "pirates plunder", min: 1, max: 1 },
    { category: "FOOD", tag: "purple mushrooms", min:1, max: 3 }
];

App.Data.Loot["DUNGEON_LEGENDARY"] = [
    { category: "DRUGS", tag: "siren elixir", min: 1, max: 1 },
    { category: "DRUGS", tag: "nereid philtre", min: 1, max: 1 },
    { category: "DRUGS", tag: "succubus philtre", min: 1, max: 1 },
    { category: "FOOD", tag: "pirates plunder", min: 1, max: 2 },
    { category: "FOOD", tag: "purple mushrooms", min:1, max: 3 },
    { category: "FOOD", tag: "ambrosia", min:1, max: 1 }

];