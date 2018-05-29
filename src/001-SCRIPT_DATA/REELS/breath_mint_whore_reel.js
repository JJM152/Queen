App = App || { Data: { }, Entity: { } };
App.Data.Slots = App.Data.Slots || { };
// apologies to dexter sinister - Mal.

// region generic whoring reels
App.Data.Slots["COMMON_BREATH_MINT"] =
{
    "NAME"  : "The 'Breath Mint'",
    "RANK"  : "COMMON",
    "VALUE" : 1000,
    "CSS"   : 'BJSlotReel',
    "DATA"  : // 50% BJ
        [ "ASS", "HAND", "TITS", "BJ", "BJ", "BJ"  ]

};

App.Data.Slots["UNCOMMON_BREATH_MINT"] =
{
    "NAME"  : "The 'Breath Mint'",
    "RANK"  : "UNCOMMON",
    "VALUE" : 2000,
    "CSS"   : 'BJSlotReel',
    "DATA"  : // 63% BJ.
        [ "ASS", "HAND", "TITS", "BJ", "BJ", "BJ", "BJ", "BJ"  ]

};

App.Data.Slots["RARE_BREATH_MINT"] =
{
    "NAME"  : "The 'Breath Mint'",
    "RANK"  : "RARE",
    "VALUE" : 4000,
    "CSS"   : 'BJSlotReel',
    "DATA"  : // 70% BJ or Wild
        [ "ASS", "HAND", "TITS", "BJ", "BJ", "BJ", "BJ", "BJ", "BJ", "BEAUTY"  ]

};

App.Data.Slots["LEGENDARY_BREATH_MINT"] =
{
    "NAME"  : "The 'Breath Mint'",
    "RANK"  : "RARE",
    "VALUE" : 8000,
    "CSS"   : 'BJSlotReel',
    "DATA"  : // 75% BJ or Wild
        [ "ASS", "HAND", "TITS", "BJ", "BJ", "BJ", "BJ", "BJ", "BJ", "BJ","BEAUTY", "PERV"  ]

};

// endregion
