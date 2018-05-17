App = App || { Data: { }, Entity: { } };
App.Data.Clothes = App.Data.Clothes || { };

// STYLE TABLE
// TYPE         COMMON  UNCOMMON    RARE    LEGENDARY
// ACCESSORY    3       6           9       12
// CLOTHING     5       10          15      20
// ONE PIECE    10      20          30      40

// WIG SLOT

// HAT SLOT
App.Data.Clothes["pink head bow"] = { // +6
    "Name": "pink head bow", "ShortDesc": "a cute {COLOR} bow",
    "LongDesc": "This pink bow is a cute accessory that makes you feel like a little girl.",
    "Slot": "Hat", "Restrict": ["Hat"], "Color": "pink", "Style": "UNCOMMON", "Type" : "ACCESSORY",
    "WearEffect": [ "FEMININE_CLOTHING" ], "Category" : [ "Sissy Lolita", "Daddy's Girl" ]
};

// NECK SLOT
App.Data.Clothes["sissy collar"] = { // +9
    "Name": "sissy collar", "ShortDesc": "a {COLOR} fur-lined leather collar emblazoned with the word 'SISSY' in rhinestones.",
    "LongDesc": "This thick collar is made of sturdy leather and lined with soft fur, making it somewhat tolerable to wear... if it wasn't for the word 'SISSY' writ large in shiny faux gems across it.",
    "Slot": "Neck", "Restrict": ["Neck"], "Color": "pink", "Style": "RARE", "Type" : "ACCESSORY",
    "WearEffect": [ "FEMININE_CLOTHING" ], "Category" : [ "Sissy Lolita" ]
};

// NIPPLES SLOT

// BRA SLOT
App.Data.Clothes["striped bra"] = { // +10
    "Name": "striped bra", "ShortDesc": "a {COLOR} and white striped bra",
        "LongDesc": "This cute little number is exceptionally girly, perfect for a little sissy baby.",
        "Slot": "Bra", "Restrict": ["Bra"], "Color": "pink", "Style": "UNCOMMON", "Type" : "CLOTHING",
        "WearEffect": [ "FEMININE_CLOTHING" ], "Category" :  [ "Sissy Lolita" ]
};

// CORSET SLOT

// PANTY SLOT
App.Data.Clothes["striped panties"] = { // +10
    "Name": "striped panties", "ShortDesc": "a pair of {COLOR} and white striped panties",
        "LongDesc": "This cute little number is exceptionally girly, perfect for a little sissy baby.",
        "Slot": "Panty", "Restrict": ["Panty"], "Color": "pink", "Style": "UNCOMMON", "Type" : "CLOTHING",
        "WearEffect": [ "FEMININE_CLOTHING" ], "Category" :  [ "Sissy Lolita" ]
};

App.Data.Clothes["frilly bloomers"] = { // +15
    "Name": "frilly bloomers", "ShortDesc": "a pair of frilly {COLOR} cotton bloomers",
        "LongDesc": "These bloomers are cut short and have a frilly bottom, perfect for a little sissy girl.",
        "Slot": "Panty", "Restrict": ["Panty"], "Color": "pink", "Style": "RARE", "Type" : "CLOTHING",
        "WearEffect": [ "FEMININE_CLOTHING" ], "Category" :  [ "Sissy Lolita" ]
};

// STOCKINGS SLOT
App.Data.Clothes["striped stockings"] = { // +10
    "Name": "striped stockings", "ShortDesc": "a pair of {COLOR} and white striped stockings",
        "LongDesc": "These cute striped stockings have adorable little pink bows at the top.",
        "Slot": "Stockings", "Restrict": ["Stockings"], "Color": "pink", "Style": "UNCOMMON", "Type" : "CLOTHING",
        "WearEffect": [ "FEMININE_CLOTHING" ], "Category" :  [ "Sissy Lolita", "Bimbo" ]
};
// SHIRT SLOT

// PANTS SLOT

// DRESS SLOT
App.Data.Clothes["frilly dress"] = { // +20
    "Name": "frilly dress", "ShortDesc": "a cute frilly {COLOR} dress",
    "LongDesc": "This dress is all ruffles and lace. Perfect for attire for a dedicated sissy girl.",
    "Slot": "Dress", "Restrict": ["Shirt", "Pants", "Dress", "Costume"], "Color": "pink", "Style": "UNCOMMON", "Type" : "ONE PIECE",
    "WearEffect": [ "FEMININE_CLOTHING" ], "Category" :  [ "Sissy Lolita" ]
};

// COSTUME SLOT

// SHOES SLOT
App.Data.Clothes["pink mary janes"] = { // +10
    "Name": "pink mary janes", "ShortDesc": "a pair of low heeled {COLOR} mary janes",
        "LongDesc": "These girly shoes have bows on the ankles and a short heel making them easy to walk in.",
        "Slot": "Shoes", "Restrict": ["Shoes"], "Color": "pink", "Style": "UNCOMMON", "Type" : "CLOTHING",
        "WearEffect": [ "FEMININE_CLOTHING" ], "Category" : [ "Sissy Lolita", "Daddy's Girl" ]
};

App.Data.Clothes["pink platform mary janes"] = { // +15
    "Name": "pink platform mary janes", "ShortDesc": "a pair of {COLOR} platform mary janes",
        "LongDesc": "These girly shoes have bows on the ankles and a chunky platform heel. Difficult to walk in but both sexy and girly.",
        "Slot": "Shoes", "Restrict": ["Shoes"], "Color": "pink", "Style": "RARE", "Type" : "CLOTHING",
        "WearEffect": [ "FEMININE_CLOTHING" ], "Category" :  [ "Sissy Lolita", "Daddy's Girl" ]
};
// BUTT SLOT

// PENIS SLOT

// WEAPON SLOT (huh?)
