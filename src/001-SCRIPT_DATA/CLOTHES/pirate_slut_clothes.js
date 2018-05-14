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
    "LongDesc": "This cute little pirate hat is the perfect accessory for a sissy pirate slut.",
    "Slot": "Hat", "Restrict": ["Hat"], "Color": "black", "Price": 100, "Style": "LEGENDARY", "Type" : "ACCESSORY",
    "Category" : [ "Pirate Slut" ]
};

// NECK SLOT


// NIPPLES SLOT

// BRA SLOT
App.Data.Clothes["pirate bra"] = { // +15
    "Name": "pirate bra", "ShortDesc": "a {COLOR} push-up bra with the Jolly Roger",
    "LongDesc": "This sexy silk bra is fringed with gold and has a skull and bones, the traditional symbol of piracy emblazoned on the right breast cup.",
    "Slot": "Bra", "Restrict": ["Bra"], "Color": "black", "Price": 180, "Style": "RARE", "Type" : "CLOTHING",
    "WearEffect": {"Femininity": [0, 10, 50]}, "Category" :  [ "Pirate Slut" ]
};

// CORSET SLOT

// PANTY SLOT
App.Data.Clothes["pirate thong"] = { // +15
    "Name": "pirate thong", "ShortDesc": "a {COLOR} thong with the Jolly Roger",
    "LongDesc": "This t-back thong gently separates your arse cheeks, making them more prominent and luscious looking. It has the phrase 'Plunder my Booty' written across the rear waistband and a small skull and bones embroidered on the crotch.",
    "Slot": "Panty", "Restrict": ["Panty"], "Color": "black", "Price": 180, "Style": "RARE", "Type" : "CLOTHING",
    "WearEffect": {"Femininity": [0, 10, 50]}, "Category" :  [ "Pirate Slut" ]
};

// STOCKINGS SLOT
App.Data.Clothes["fishnet tights"] = { // +10
    "Name": "fishnet tights", "ShortDesc": "a pair of {COLOR} fishnet stockings",
    "LongDesc": "These fishnet tights wrap themselves perfectly to your legs. The feeling is quite exquisite.",
    "Slot": "Stockings", "Restrict": ["Stockings"], "Color": "black", "Price": 400, "Style": "UNCOMMON", "Type" : "CLOTHING",
    "WearEffect": {"Femininity": [0, 5, 60]}, "Category" :  [ "Pirate Slut", "BDSM", "Naughty Nun", "Bimbo", "High Class Whore", "Slutty Lady" ]
};

App.Data.Clothes["fishnet stockings"] = { // +10
    "Name": "fishnet stockings", "ShortDesc": "a pair of {COLOR} fishnet stockings",
    "LongDesc": "These fishnet stockings are topped with black lace and held up by garter straps.",
    "Slot": "Stockings", "Restrict": ["Stockings"], "Color": "black", "Price": 500, "Style": "UNCOMMON", "Type" : "CLOTHING",
    "WearEffect": {"Femininity": [0, 5, 60]}, "Category" :  [ "Pirate Slut", "BDSM", "Naughty Nun", "Bimbo", "High Class Whore", "Slutty Lady", "Sexy Dancer" ]
};

// SHIRT SLOT


// PANTS SLOT


// DRESS SLOT
App.Data.Clothes["pirate waistcoat"] = { // +40
    "Name": "pirate waistcoat", "ShortDesc": "a short {COLOR} velvet waistcoat",
    "LongDesc": "This tiny waistcoat only has one button, leaving your cleavage exposed. It's also quite short, with the coat tails only barely covering your ass and leaving your front entirely exposed.",
    "Slot": "Dress", "Restrict": ["Shirt", "Pants", "Dress", "Costume"], "Color": "black", "Price": 1100, "Style": "LEGENDARY", "Type" : "ONE PIECE",
    "WearEffect": { "Femininity": [0, 10, 80], "Seduction": [10,0,0], "Swashbuckling": [10,0,0], "Navigating": [10,0,0], "Sailing": [10,0,0] }, "Category" :  [ "Pirate Slut" ]
};

// COSTUME SLOT

// SHOES SLOT
App.Data.Clothes["pirate boots"] = { // +10
    "Name": "pirate boots", "ShortDesc": "very tall thigh-high {COLOR} leather boots",
    "LongDesc": "The heels on these boots are outrageously high and pointed. The supple and shiny leather comes up to your mid thigh and folds over on itself.",
    "Slot": "Shoes", "Restrict": ["Shoes"], "Color": "black", "Price": 250, "Style": "UNCOMMON", "Type" : "CLOTHING",
    "Category" : [ "Pirate Slut", "BDSM" ], "WearEffect": {"Femininity": [0, 8, 40]}
};

// BUTT SLOT

// PENIS SLOT

// WEAPON SLOT (huh?)

