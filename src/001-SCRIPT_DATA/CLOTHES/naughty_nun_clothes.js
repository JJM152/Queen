// STYLE TABLE
// TYPE         COMMON  UNCOMMON    RARE    LEGENDARY
// ACCESSORY    3       6           9       12
// CLOTHING     5       10          15      20
// ONE PIECE    10      20          30      40

// WIG SLOT

// HAT SLOT
App.Data.Clothes["sexy nun cowl"] = { // +12
    Name: "sexy nun cowl", ShortDesc: "sexy {COLOR} nun cowl and scapular",
    LongDesc: "\
    This combination of cowl and scapular seems mostly typical with the exception that instead of a solid \
    piece of cloth, the scapular component is made out of flowing black lace, all the better to show off \
    the cleavage of whomever is wearing it.\
    ",
    Slot: "Dress", Restrict : [ "Shirt", "Pants", "Dress", "Costume" ],
    Color: "black", Style : "LEGENDARY", Type : "ACCESSORY",
    WearEffect: [ "FEMININE_CLOTHING" ],
    ActiveEffect : [],
    Category : [ "Naughty Nun" ],
    InMarket : false
};

// NECK SLOT


// NIPPLES SLOT

// BRA SLOT


// CORSET SLOT


// PANTY SLOT


// STOCKINGS SLOT


// SHIRT SLOT


// PANTS SLOT


// DRESS SLOT
App.Data.Clothes["naughty nun dress"] = { // +40
    Name: "naughty nun dress", ShortDesc: "sexy {COLOR} religious dress",
    LongDesc: "\
    This form fitting dress is short, shoulderless and backless, with a corsetting of string running down the back and ending \
    just below your ass cleavage. The piping around the top of the dress is a solid white color and extends downwards towards \
    your navel, flaring out in a copy of a popular religious symbol.\
    ",
    Slot: "Dress", Restrict : [ "Shirt", "Pants", "Dress", "Costume" ],
    Color: "black", Style : "LEGENDARY", Type : "ONE PIECE",
    WearEffect: [ "SEXY_CLOTHING" ],
    ActiveEffect : [ "FLIRTY"],
    Category : [ "Naughty Nun" ],
    InMarket : false
};

// COSTUME SLOT
App.Data.Clothes["sexy nun habit"] = { // +40
    Name: "sexy nun habit", ShortDesc: "{COLOR} sexy nun's costume",
    LongDesc: "\
    This costume is designed to copy a typical nun's habit. It is daringly short and made out of silk with a revealing \
    neckline and a fake belt made out of beads ending in a dangling religious symbol.\
    ",
    Slot: "Costume", Restrict : [ "Shirt", "Pants", "Dress", "Costume" ],
    Color: "black", Style : "LEGENDARY", Type : "ONE PIECE",
    WearEffect: [ "KINKY_CLOTHING" ],
    ActiveEffect : [ "MAJOR_STRIPPERS_ALLURE"],
    Category : [ "Naughty Nun", "Sexy Dancer"],
    InMarket : false
};

// SHOES SLOT
App.Data.Clothes["sexy nun boots"] = { // +20
    Name: "sexy nun boots", ShortDesc: "pair of {COLOR} thigh high leather boots",
    LongDesc: "\
    This boots are made of supple leather that fits closely to your leg. The heel is a daringly tall and pointed \
    6 inch stilleto. The tips of the shoes are pointed and running up the front of each shoe to the top of the \
    boots is a white leather stripe that forms the iconography of a popular religious symbol.\
    ",
    Slot: "Shoes", Restrict: ["Shoes"],
    Color: "black", Style: "LEGENDARY", Type : "CLOTHING",
    WearEffect: [ "FEMININE_CLOTHING" ],
    ActiveEffect: [ "FANCY_MOVES" ],
    Category : [ "Naughty Nun", "Sexy Dancer" ],
    InMarket: false
};
// BUTT SLOT

// PENIS SLOT

// WEAPON SLOT (huh?)
