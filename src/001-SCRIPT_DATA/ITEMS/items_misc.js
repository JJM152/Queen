App = App || { Data: { }, Entity: { } };
App.Data.Misc = App.Data.Misc || { };
// Non usable items, not quest items, can have multiple's of.

App.Data.Misc["torch"] = {
    "Name": "torch",
    "ShortDesc": "a wooden torch",
    "LongDesc": "A wooden torch. It burns quickly, so carry more than one.",
    "Type": "misc",
    "Charges": 1,
    "VALUE": 20
};

App.Data.Misc["shovel"] = {
    "Name": "shovel",
    "ShortDesc": "a sturdy shovel",
    "LongDesc": "A sturdy shovel, useful for digging up buried treasure. A true pirate never leaves port without one.",
    "Type": "misc",
    "Charges": 1,
    "VALUE": 100
};
