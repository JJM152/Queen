App = App || { Data: { }, Entity: { } };
App.Data.Clothes = App.Data.Clothes || { };

// STYLE TABLE
// TYPE         COMMON  UNCOMMON    RARE    LEGENDARY
// ACCESSORY    3       6           9       12
// CLOTHING     5       10          15      20
// ONE PIECE    10      20          30      40

// WIG SLOT

// HAT SLOT
App.Data.Clothes["pirate hat"] = { // +12
    "Name": "pirate hat", "ShortDesc": "a cute little pirate hat",
    "LongDesc": "This cute little pirate hat has an adorable version of the Jolly Rodger on it, complete with bows. A large ribbon is affixed to the side and flows down your back.",
    "Slot": "Hat", "Restrict": ["Hat"], "Color": "black", "Style": "LEGENDARY", "Type" : "ACCESSORY",
    "ActiveEffect" : [ "MINOR_PIRATES_GRACE" ], "Category" : [ "Pirate Slut" ]
};

// NECK SLOT


// NIPPLES SLOT

// BRA SLOT
App.Data.Clothes["pirate bra"] = { // +15
    "Name": "pirate bra", "ShortDesc": "a {COLOR} push-up bra with the Jolly Roger",
    "LongDesc": "This sexy silk bra is fringed with gold and has a skull and bones, the traditional symbol of piracy emblazoned on the right breast cup.",
    "Slot": "Bra", "Restrict": ["Bra"], "Color": "black", "Style": "RARE", "Type" : "CLOTHING",
    "WearEffect": [ "FEMININE_CLOTHING" ], "Category" :  [ "Pirate Slut" ]
};

// CORSET SLOT
App.Data.Clothes["pistol brace"] = { // +9
    "Name": "pistol brace", "ShortDesc": "a {COLOR} leather pistol brace",
    "LongDesc": "More corset than bandoleer, it cinches tightly around your waist and there are two small red bows at the tops of the pistol holsters.",
    "Slot": "Corset", "Restrict": ["Corset"], "Color": "black", "Style": "RARE", "Type" : "ACCESSORY",
    "WearEffect": [ "FEMININE_CLOTHING", "WAIST_TRAINING" ], "ActiveEffect" : [ "CUT_THROAT" ], "Category" :  [ "Pirate Slut", "BDSM" ]
};

// PANTY SLOT
App.Data.Clothes["pirate thong"] = { // +15
    "Name": "pirate thong", "ShortDesc": "a {COLOR} thong with the Jolly Roger",
    "LongDesc": "This t-back thong gently separates your arse cheeks, making them more prominent and luscious looking. It has the phrase 'Plunder my Booty' written across the rear waistband and a small skull and bones embroidered on the crotch.",
    "Slot": "Panty", "Restrict": ["Panty"], "Color": "black", "Style": "RARE", "Type" : "CLOTHING",
    "WearEffect": [ "FEMININE_CLOTHING" ], "Category" :  [ "Pirate Slut" ]
};

// STOCKINGS SLOT
App.Data.Clothes["fishnet tights"] = { // +10
    "Name": "fishnet tights", "ShortDesc": "a pair of {COLOR} fishnet tights",
    "LongDesc": "These fishnet tights wrap themselves perfectly to your legs. The feeling is quite exquisite.",
    "Slot": "Stockings", "Restrict": ["Stockings"], "Color": "black", "Style": "UNCOMMON", "Type" : "CLOTHING",
    "WearEffect": [ "FEMININE_CLOTHING" ], "Category" :  [ "Pirate Slut", "BDSM", "Naughty Nun", "Bimbo", "High Class Whore", "Slutty Lady" ]
};

App.Data.Clothes["fishnet stockings"] = { // +10
    "Name": "fishnet stockings", "ShortDesc": "a pair of {COLOR} fishnet stockings",
    "LongDesc": "These fishnet stockings are topped with black lace and held up by garter straps.",
    "Slot": "Stockings", "Restrict": ["Stockings"], "Color": "black", "Style": "UNCOMMON", "Type" : "CLOTHING",
    "WearEffect": [ "FEMININE_CLOTHING" ], "Category" :  [ "Pirate Slut", "BDSM", "Naughty Nun", "Bimbo", "High Class Whore", "Slutty Lady", "Sexy Dancer" ]
};

// SHIRT SLOT


// PANTS SLOT


// DRESS SLOT
App.Data.Clothes["pirate waistcoat"] = { // +40
    "Name": "pirate waistcoat", "ShortDesc": "a short {COLOR} velvet waistcoat",
    "LongDesc": "This tiny waistcoat only has one button, leaving your cleavage exposed. It's also quite short, with the coat tails only barely covering your ass and leaving your front entirely exposed.",
    "Slot": "Dress", "Restrict": ["Shirt", "Pants", "Dress", "Costume"], "Color": "black", "Style": "LEGENDARY", "Type" : "ONE PIECE",
    "WearEffect": [ "FEMININE_CLOTHING" ], "ActiveEffect" : [ "MAJOR_PIRATES_GRACE", "FLIRTY" ], "Category" :  [ "Pirate Slut" ]
};

// COSTUME SLOT

// SHOES SLOT
App.Data.Clothes["pirate boots"] = { // +10
    "Name": "pirate boots", "ShortDesc": "very tall thigh-high {COLOR} leather boots",
    "LongDesc": "The heels on these boots are outrageously high and pointed. The supple and shiny leather comes up to your mid thigh and folds over on itself.",
    "Slot": "Shoes", "Restrict": ["Shoes"], "Color": "black", "Style": "UNCOMMON", "Type" : "CLOTHING",
    "WearEffect": [ "FEMININE_CLOTHING" ], "Category" : [ "Pirate Slut", "Sexy Dancer", "BDSM" ]
};

// BUTT SLOT

// PENIS SLOT

// WEAPON SLOT (huh?)
App.Data.Clothes["steel cutlass"] = {
    "Name": "steel cutlass", "ShortDesc": "a nasty looking {COLOR} cutlass",
    "LongDesc": "The edge on this curved blade is wicked sharp and glints in the sun. Just holding it you feel like a real pirate.",
    "Slot": "Weapon", "Restrict": ["Weapon"], "Color": "steel", "Style": "RARE", "Type": "WEAPON",
    "WearEffect": [], "ActiveEffect" : [ "CUT_THROAT" ], "Category" : [ "Pirate Slut"], "InMarket": false
};

