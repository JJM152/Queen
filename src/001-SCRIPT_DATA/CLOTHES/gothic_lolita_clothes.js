// Gothic Lolita Style, contributed by 'littleslavegirl' @ wwww.tfgamessite.com Forums

// STYLE TABLE
// TYPE         COMMON  UNCOMMON    RARE    LEGENDARY
// ACCESSORY    3       6           9       12
// CLOTHING     5       10          15      20
// ONE PIECE    10      20          30      40

// WIG SLOT

// HAT SLOT
App.Data.Clothes["red and black flower hair pin"] = { // +9
    "Name": "red and black flower hair pin", "ShortDesc": "a red and {COLOR} flower",
    "LongDesc": "A black rose that adorns your hair, a trio of black ribbons hang down to which are attached 3 blood red stars.",
    "Slot": "Hat", "Restrict": ["Hat"], "Color": "black", "Style": "RARE", "Type" : "ACCESSORY",
    "WearEffect":[ "FEMININE_CLOTHING" ], "Category" : [ "Gothic Lolita" ]
};

App.Data.Clothes["dark dreams bonnet"] = { // +12
    Name: "dark dreams bonnet", ShortDesc: "DarkDreams &trade; brand hair bonnet",
    LongDesc: "\
    This elegant bonnet is doesn't fully cover the head, instead resting on top of ones hair and tied with a \
    simple black string. The bonnet itself is flat and wide, made of burgundy velvet with black piping and adorned \
    with an array of black roses.\
    ",
    Slot: "Hat", Restrict: ["Hat"],
    Color: "black", Style: "LEGENDARY", Type : "ACCESSORY",
    WearEffect: [ "FEMININE_CLOTHING" ],
    ActiveEffect: [],
    Category : [ "Gothic Lolita" ],
    InMarket: false
};

// NECK SLOT
App.Data.Clothes["black gothic collar"] = { // +9
    "Name": "black gothic collar", "ShortDesc": " a {COLOR} ribbon-lined leather collar emblazoned with the word 'SLAVE' burned into it.",
    "LongDesc": "A snug leather collar lined on both sides in black lace, slave is burned into the leather to remind you exactly what you are..",
    "Slot": "Neck", "Restrict": ["Neck"], "Color": "black", "Style": "RARE", "Type" : "ACCESSORY",
    "WearEffect": [ "FEMININE_CLOTHING" ], "Category" : [ "Gothic Lolita" ]
};

// NIPPLES SLOT

// BRA SLOT
App.Data.Clothes["gothic black bra"] = { // +10
    "Name": "gothic black bra", "ShortDesc": "a {COLOR} lace gothic style bra",
    "LongDesc": "A sexy black lace gothic style bra.",
    "Slot": "Bra", "Restrict": ["Bra"], "Color": "black", "Style": "UNCOMMON", "Type" : "CLOTHING",
    "WearEffect":[ "FEMININE_CLOTHING" ], "Category" : [ "Gothic Lolita", "Bimbo", "Sexy Dancer" ]
};

// CORSET SLOT

// PANTY SLOT
App.Data.Clothes["black panties"] = { // +10
    "Name": "black panties", "ShortDesc": "a pair of {COLOR} panties",
    "LongDesc": "Black sexy silk panties just asking for someone to remove them.",
    "Slot": "Panty", "Restrict": ["Panty"], "Color": "black", "Style": "UNCOMMON", "Type" : "CLOTHING",
    "WearEffect": [ "FEMININE_CLOTHING" ], "Category" : [  "Gothic Lolita", "Bimbo", "Sexy Dancer" ]
};

App.Data.Clothes["gothic frilly bloomers"] = { // +15
    "Name": "gothic frilly bloomers", "ShortDesc": "a pair of frilly {COLOR} cotton bloomers",
    "LongDesc": "These bloomers are cut short and have a frilly bottom.",
    "Slot": "Panty", "Restrict": ["Panty"], "Color": "black", "Style": "RARE", "Type" : "CLOTHING",
    "WearEffect": [ "FEMININE_CLOTHING" ], "Category" : [ "Gothic Lolita" ]
};

// STOCKINGS SLOT
App.Data.Clothes["gothic striped stockings"] = { // +15
    "Name": "gothic striped stockings", "ShortDesc": "a pair of {COLOR} and purple striped stockings",
    "LongDesc": "These stockings come up over your knees. They are striped, black and purple, with a slight lacey top that is adorned with tiny black roses.",
    "Slot": "Stockings", "Restrict": ["Stockings"], "Color": "black", "Style": "RARE", "Type" : "CLOTHING",
    "WearEffect": [ "FEMININE_CLOTHING" ], "Category" : [ "Gothic Lolita" ]
};

// SHIRT SLOT

// PANTS SLOT

// DRESS SLOT
App.Data.Clothes["gothic frilly dress"] = { // +40
    "Name": "gothic frilly dress", "ShortDesc": "a {COLOR} gothic dress",
    "LongDesc": "A short sleeved snug black knee length dress. Lace along the the collar, sleeves and along the bottom of the heavily petticoated skirt that bounces with every step you take.",
    "Slot": "Dress", "Restrict": ["Shirt", "Pants", "Dress", "Costume"], "Color": "black", "Style": "LEGENDARY", "Type" : "ONE PIECE",
    "WearEffect": [ "FEMININE_CLOTHING" ], "Category" : [ "Gothic Lolita" ]
};

App.Data.Clothes["dark dreams dress"] = { // +40
    Name: "dark dreams dress", ShortDesc: "DarkDreams &trade; brand lolita dress",
    LongDesc: "\
    This extravagant dress is made from dark burgundy velvet with black piping and lace. The bodice is narrow and \
    form fitting as it meets a lace covered plunging neckline. The arms are frilly and equally as trimmed with cuffs \
    that nearly bury your hands. The skirt is provocatively short, ending at about mid thigh and just barely offering \
    a tantalizing glimpse of what lies underneath.\
    ",
    Slot: "Dress", Restrict : [ "Shirt", "Pants", "Dress", "Costume" ],
    Color: "burgundy", Style : "LEGENDARY", Type : "ONE PIECE",
    WearEffect: [ "SEXY_CLOTHING" ],
    ActiveEffect : [ "FLIRTY"],
    Category : [ "Gothic Lolita" ],
    InMarket : false
};

// COSTUME SLOT
App.Data.Clothes["gothic maid outfit"] = { // +40
    Name: "gothic maid outfit", ShortDesc: "dark velvet gothic maid outfit",
    LongDesc: "\
    This costume is a racy version of the uniform you might find on a high class maid. A velvet black bodice \
    meets a laced covered plunging neckline and the skirt, while far too short to be worn by a real maid, is packed \
    with black crinole and a short black and white striped immitation of a petticoat designed to draw the attention \
    of the eye.\
    ",
    Slot: "Costume", Restrict : [ "Shirt", "Pants", "Dress", "Costume" ],
    Color: "black", Style : "LEGENDARY", Type : "ONE PIECE",
    WearEffect: [ "FEMININE_CLOTHING", "KINKY_CLOTHING"],
    ActiveEffect : [ "MAJOR_STRIPPERS_ALLURE"],
    Category : [ "Gothic Lolita", "Sexy Dancer"],
    InMarket : false
};

// SHOES SLOT
App.Data.Clothes["black high heeled boots"] = { // +15
    "Name": "black high heeled boots", "ShortDesc": "A pair of black knee length heeled boots",
    "LongDesc": "A pair of knee high black boots with a 5 inch heel and 1 inch platform. Red stars dangle from the zipper.",
    "Slot": "Shoes", "Restrict": ["Shoes"], "Color": "black", "Style": "RARE", "Type" : "CLOTHING",
    "WearEffect": [ "FEMININE_CLOTHING" ], "Category" : [ "Gothic Lolita", "Sexy Dancer" ]
};

App.Data.Clothes["black platform mary janes"] = { // +15
    "Name": "black platform mary janes", "ShortDesc": "a pair of {COLOR} platform mary janes",
    "LongDesc": "These black platform shoes have Have red stars for the buckles at the ankles and a chunky platform heel. Difficult to walk in but sexy.",
    "Slot": "Shoes", "Restrict": ["Shoes"], "Color": "black", "Style": "RARE", "Type" : "CLOTHING",
    "WearEffect": [ "FEMININE_CLOTHING" ], "Category" : [ "Gothic Lolita" ]
};

App.Data.Clothes["dark dreams shoes"] = { // +20
    Name: "dark dreams shoes", ShortDesc: "DarkDreams &trade; brand platform shoes",
    LongDesc: "\
    These shoes are made in the popular 'maryjane' style, commplete with toestrap, buckle and a chunk heel. The \
    platform is tall and the shoe is heavy causing you to walk in an exagerated prancing gait. They are extremely \
    well made and durable and despite everything incredibly comfortable to walk in.\
    ",
    Slot: "Shoes", Restrict: ["Shoes"],
    Color: "black", Style: "LEGENDARY", Type : "CLOTHING",
    WearEffect: [ "FEMININE_CLOTHING" ],
    ActiveEffect: [],
    Category : [ "Gothic Lolita", "Sexy Dancer" ],
    InMarket: false
};
// BUTT SLOT

// PENIS SLOT

// WEAPON SLOT (huh?)
