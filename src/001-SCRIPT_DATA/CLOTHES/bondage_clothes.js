// STYLE TABLE
// TYPE         COMMON  UNCOMMON    RARE    LEGENDARY
// ACCESSORY    3       6           9       12
// CLOTHING     5       10          15      20
// ONE PIECE    10      20          30      40

// WIG SLOT

// HAT SLOT
App.Data.Clothes["gimp mask"] = { // +12
    Name: "gimp mask", ShortDesc: "{COLOR} leather and metal strapped gimp mask",
    LongDesc: "\
    This full head mask is designed to be zipped up and locked over it's wearer. There is a flap for both the mouth \
    and eyes, but they can be closed, or in the case of the mouth have various accessories locked into it.\
    ",
    Slot: "Hat", Restrict: ["Hat"],
    Color: "black", Style: "LEGENDARY", Type : "ACCESSORY",
    WearEffect: [ "PERVERTED_CLOTHING" ],
    ActiveEffect: [],
    Category : [ "BDSM" ],
    InMarket: false
};

// NECK SLOT
App.Data.Clothes["collar"] = { // +3
    "Name": "collar", "ShortDesc": "a leather slave collar",
    "LongDesc": "This thick leather collar is worn to remind everyone that the wearer is a slave.",
    "Slot": "Neck", "Restrict": ["Neck"], "Color": "black", "Style": "COMMON", "Type" : "ACCESSORY", "Locked": true,
    "WearEffect": [ "SLAVE_COLLAR" ], "Category" :  [ "BDSM" ]
};

// NIPPLES SLOT
App.Data.Clothes["nipple rings"] = { // +9
    "Name": "nipple rings", "ShortDesc": "a pair of silver nipple rings joined by a chain",
    "LongDesc": "These rings are connected by a chain that is designed to torment and tug on the wearers nipples.",
    "Slot": "Nipples", "Restrict": ["Nipples"], "Color": "silver", "Style": "RARE", "Type" : "ACCESSORY",
    "WearEffect": [ "PERVERTED_CLOTHING" ], "Category" :  [ "BDSM" ]
};

App.Data.Clothes["nipple clamps"] = { // +6
    "Name": "nipple clamps", "ShortDesc": "a pair of silver nipple clamps",
    "LongDesc": "These sterling silver nipple clamps are designed to inflict punishment... or perhaps arousal?",
    "Slot": "Nipples", "Restrict": ["Nipples"], "Color": "silver", "Style": "UNCOMMON", "Type" : "ACCESSORY",
    "WearEffect": [ "PERVERTED_CLOTHING" ], "Category" :  [ "BDSM" ]
};

// BRA SLOT

// CORSET SLOT
App.Data.Clothes["training corset"] = { // +10
    "Name": "training corset", "ShortDesc": "a whale boned {COLOR} training corset",
    "LongDesc": "This garment borders on a torture device. It's designed to slim and shape a woman's waist and push up her bust.",
    "Slot": "Corset", "Restrict": ["Corset"], "Color": "black", "Style": "UNCOMMON", "Type" : "ACCESSORY",
    "WearEffect": [ "FEMININE_CLOTHING", "WAIST_TRAINING" ], "Category" :  [ "BDSM" ]
};

App.Data.Clothes["bondage corset"] = { // +15
    "Name": "bondage corset", "ShortDesc": "a steel boned {COLOR} leather bondage corset",
    "LongDesc": "This corset is made of strong leather and boned with steel. It has various straps and locks to ensure it must be worn at all times.",
    "Slot": "Corset", "Restrict": ["Corset"], "Color": "black", "Style": "RARE", "Type" : "ACCESSORY",
    "WearEffect": [ "FEMININE_CLOTHING", "EXTREME_WAIST_TRAINING" ], "Category" :  [ "Pirate Slut", "BDSM" ]
};

// PANTY SLOT

// STOCKINGS SLOT

// SHIRT SLOT

// PANTS SLOT

// DRESS SLOT
App.Data.Clothes["bondage dress"] = { // +40
    Name: "bondage dress", ShortDesc: "leather {COLOR} bondage dress",
    LongDesc: "\
    This shiny leather dress has a low cutout in the back that displays a generous portion of ass cleavage \
    and a neckline that could barely contain even the most modest of busts. It is adorned with a variety of \
    straps that look like belts until you realize that they can be used to make the person wearing the \
    dress completely immobile.\
    ",
    Slot: "Dress", Restrict : [ "Shirt", "Pants", "Dress", "Costume" ],
    Color: "black", Style : "LEGENDARY", Type : "ONE PIECE",
    WearEffect: [ "SEXY_CLOTHING" ],
    ActiveEffect : [ "FLIRTY"],
    Category : [ "BDSM" ],
    InMarket : false
};

// COSTUME SLOT
App.Data.Clothes["rubber nurse outfit"] = { // +40
    Name: "rubber nurse outfit", ShortDesc: "{COLOR} rubber nurse's outfit",
    LongDesc: "\
    This costume is designed to mimic a stanard nurse's uniform, except it's made entirely out of a thin type \
    of black rubber that stretches and confines the body. The outfit has red piping along the hems and two red \
    crosses, on each breast.\
    ",
    Slot: "Costume", Restrict : [ "Shirt", "Pants", "Dress", "Costume" ],
    Color: "black", Style : "LEGENDARY", Type : "ONE PIECE",
    WearEffect: [ "PERVERTED_CLOTHING" ],
    ActiveEffect : [ "MAJOR_STRIPPERS_ALLURE"],
    Category : [ "BDSM", "Sexy Dancer"],
    InMarket : false
};

// SHOES SLOT
App.Data.Clothes["shiny knee boots"] = { // +10
    "Name": "shiny knee boots", "ShortDesc": "a shiny pair of high heeled knee-high {COLOR} leather boots",
    "LongDesc": "These fashionable leather boots are polished to a shine. Very tall and slightly intimidating.",
    "Slot": "Shoes", "Restrict": ["Shoes"], "Color": "black", "Style": "UNCOMMON", "Type" : "CLOTHING",
    "WearEffect": [ "FEMININE_CLOTHING" ], "Category" :  [ "Pirate Slut", "BDSM" ]
};

App.Data.Clothes["spiked boots"] = { // +20
    Name: "spiked boots", ShortDesc: "{COLOR} leather spiked platform boots",
    LongDesc: "\
    These high heeled platform boots don't look like they are designed to walk in. The impractically high platform \
    weighs enough to make taking a step precarious and the height means that if you fall, you'll take some serious \
    damage. To make matters worse, the boots themselves are adorned with various studs and spikes meaning that it's \
    quite possible to carelessly injure yourself. Perfect for a budding masochist.\
    ",
    Slot: "Shoes", Restrict: ["Shoes"],
    Color: "black", Style: "LEGENDARY", Type : "CLOTHING",
    WearEffect: [ "KINKY_CLOTHING" ],
    ActiveEffect: [],
    Category : [ "BDSM", "Sexy Dancer" ],
    InMarket: false
};

// BUTT SLOT
App.Data.Clothes["large plug"] = { // +9
    "Name": "large plug", "ShortDesc": "a thick {COLOR} anal plug",
    "LongDesc": "The perfect accessory for the horny masochist, or just good for keeping your arse ready to be used.",
    "Slot": "Butt", "Restrict": ["Butt"], "Color": "black", "Style": "RARE", "Type" : "ACCESSORY",
    "WearEffect": [ "PERVERTED_CLOTHING", "GAPE_TRAINING" ], "Category" : [ "BDSM" ]
};

App.Data.Clothes["voodoo anal plug"] = { // +9
    "Name": "voodoo anal plug", "ShortDesc": "an enormous rubbery anal plug",
    "LongDesc": "\
    This giant plug was hand crafted just for your sissy-hole. It has a special feature that causes it to \
    gradually expand while worn. It also secretes a concentrated essence of various chemical and herbal \
    extracts to promote a truly fuckable arse.\
    ",
    "Slot": "Butt", "Restrict": ["Butt"], "Color": "black", "Style": "RARE", "Type" : "ACCESSORY",
    "Category" : [ "BDSM" ], "InMarket" : false,
    "WearEffect": [ "VOODOO_ANAL_PLUG" ] , "ActiveEffect" : [ "VOODOO_ANAL_PLUG2"]
};

// PENIS SLOT
App.Data.Clothes["chastity cage"] = { // +3
    "Name": "chastity cage", "ShortDesc": "a metal and leather chastity device",
    "LongDesc": "This cruel device constricts and crushes your genitals. Wearing it is not only painful but probably bad for your health.",
    "Slot": "Penis", "Restrict": ["Penis"], "Color": "black", "Style": "COMMON", "Type" : "ACCESSORY", "Locked": true,
    "WearEffect": [ "CHASTITY_CAGE" ], "Category" : [ "BDSM" ]
};

App.Data.Clothes["magic cock ring"] = { // +3
    "Name": "magic cock ring", "ShortDesc": "@@color:purple;a shiny metal cock ring@@",
    "LongDesc": "\
    This shiny silver ring was made custom order from a rare magical ore. It supposedly has the ability to \
    protect your genitals from curses and other magical effects.",
    "Slot": "Penis", "Restrict": ["Penis"], "Color": "silver", "Style": "LEGENDARY", "Type" : "ACCESSORY", "Locked": false,
    "WearEffect": [ "MAGIC_COCK_RING" ], "Category" : [ "BDSM" ], "InMarket" : false,
};

// WEAPON SLOT (huh?)
