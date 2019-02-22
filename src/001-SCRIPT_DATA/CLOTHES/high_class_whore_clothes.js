App = App || { Data: { }, Entity: { } };
App.Data.Clothes = App.Data.Clothes || { };

// STYLE TABLE
// TYPE         COMMON  UNCOMMON    RARE    LEGENDARY
// ACCESSORY    3       6           9       12
// CLOTHING     5       10          15      20
// ONE PIECE    10      20          30      40

// WIG SLOT

// HAT SLOT


// NECK SLOT


// NIPPLES SLOT

// BRA SLOT


// CORSET SLOT
App.Data.Clothes["whore belt"] = { // +40
    Name: "whore belt", ShortDesc: "golden chain with the word 'WHORE'",
    LongDesc: "\
    This delicate golden chain is designed to be worn off the hips and has large golden letters \
    hanging from it that spell out the word 'W-H-O-R-E' just incase anyone had any doubts in their mind.\
    ",
    Slot: "Corset", Restrict : [ "Corset" ],
    Color: "gold", Style : "LEGENDARY", Type : "ONE PIECE",
    WearEffect: [ "SEXY_CLOTHING" ],
    ActiveEffect : [ "FLIRTY" ],
    Category : [ "High Class Whore", "Sexy Dancer"],
    InMarket : false
};

// PANTY SLOT


// STOCKINGS SLOT


// SHIRT SLOT


// PANTS SLOT


// DRESS SLOT
App.Data.Clothes["slutty strumpet dress"] = { // +40
    Name: "slutty strumpet dress", ShortDesc: "slutty {COLOR} dress",
    LongDesc: "\
    This backless dress plunges down to the middle of your arsecheeks, displaying a generous amount of \
    butt-cleavage. It has a tight bodice that lifts and display your breasts prominently and a hemline \
    that is just short of scandalous. Pefect for advertising your wares. \
    ",
    Slot: "Dress", Restrict : [ "Shirt", "Pants", "Dress", "Costume" ],
    Color: "red", Style : "LEGENDARY", Type : "ONE PIECE",
    WearEffect: [ "SEXY_CLOTHING" ],
    ActiveEffect : [ "FLIRTY" ],
    Category : [ "High Class Whore" ],
    InMarket : false
};

// COSTUME SLOT
App.Data.Clothes["sexy librarian outfit"] = { // +40
    Name: "sexy librarian outfit", ShortDesc: "sexy librarian outfit",
    LongDesc: "\
    A classic combination of demure and slutty, the high waisted pencil skirt is designed to hug and stretch \
    over the buttocks while the flimsy white ruffled top is casually left unbuttoned to show off an impressive \
    amount of décolletage.\
    ",
    Slot: "Costume", Restrict : [ "Shirt", "Pants", "Dress", "Costume" ],
    Color: "black", Style : "LEGENDARY", Type : "ONE PIECE",
    WearEffect: [ "KINKY_CLOTHING" ],
    ActiveEffect : [ "MAJOR_STRIPPERS_ALLURE"],
    Category : [ "High Class Whore", "Sexy Dancer"],
    InMarket : false
};

// SHOES SLOT
App.Data.Clothes["whore sandals"] = { // +20
    Name: "whore sandals", ShortDesc: "pair of {COLOR} high heeled sandals",
    LongDesc: "\
    These sandals have a medium height heel on them and conists of a series of delicate straps \
    that winde upwards and around your leg to be tied in a bow.\
    ",
    Slot: "Shoes", Restrict: ["Shoes"], 
    Color: "red", Style: "LEGENDARY", Type : "CLOTHING",
    WearEffect: [ "SEXY_CLOTHING" ],
    ActiveEffect: [ "FANCY_MOVES" ], 
    Category : [ "High Class Whore", "Sexy Dancer" ],
    InMarket: false
};
// BUTT SLOT

// PENIS SLOT

// WEAPON SLOT (huh?)
