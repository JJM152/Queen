// STYLE TABLE
// TYPE         COMMON  UNCOMMON    RARE    LEGENDARY
// ACCESSORY    3       6           9       12
// CLOTHING     5       10          15      20
// ONE PIECE    10      20          30      40

// WIG SLOT

// HAT SLOT
App.Data.Clothes["gold hairpin"] = { 
    Name: "gold hairpin", ShortDesc: "a {COLOR} hair pin",
    LongDesc: "\
    This delicate hair pin is plated in 24 karat gold and adds a touch of class to your appearance\
    ",
    Slot: "Hat", Restrict : [ "Hat" ],
    Color: "gold", Style : "RARE", Type : "ACCESSORY",
    WearEffect: [ ],
    ActiveEffect : [ ],
    Category : [ "High Class Whore", "Slutty Lady"],
    InMarket : true
};

// NECK SLOT
App.Data.Clothes["gold necklace"] = { 
    Name: "gold necklace", ShortDesc: "a flash {COLOR} necklace with gems",
    LongDesc: "\
    This flashy necklace is encrusted with sparkly fake gemstones. \
    ",
    Slot: "Neck", Restrict : [ "Neck" ],
    Color: "gold", Style : "LEGENDARY", Type : "ACCESSORY",
    WearEffect: [ ],
    ActiveEffect : [ ],
    Category : [ "High Class Whore", "Slutty Lady"],
    InMarket : true
};

// NIPPLES SLOT

// BRA SLOT
App.Data.Clothes["luxurious purple bra"] = { // +20
	Name: "luxurious purple bra",
	ShortDesc: "{COLOR} strapless lace bra",
    LongDesc: "\
    Besides having expertly crafted sexy lace, this bra can support quite a generous bust without straps and without \
    covering cleavage area. It is ideal for wearing with dresses with uncovered shoulders and deep cleavage.",
	Slot: "Bra", Restrict: ["Bra"],
	Color: "purple", Style: "LEGENDARY", Type: "CLOTHING",
	WearEffect: [ "FEMININE_CLOTHING", "SEXY_CLOTHING" ],
	Category : [ "High Class Whore", "Slutty Lady" ]
};

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
App.Data.Clothes["luxurious purple panties"] = { // +20
	Name: "luxurious purple panties",
	ShortDesc: "{COLOR} satin lace panties",
	LongDesc: "These panties are a perfect combination of conservatism and sexiness. They are not panties that are pushed aside because the man is too horny to bother to take them of. These panties are removed in a richly decorated room, illuminated by candles, while orchestra can be faintly heard from the ball room.",
	Slot: "Panty", Restrict: ["Panty"],
	Color: "purple", Style: "LEGENDARY", Type: "CLOTHING",
	WearEffect: [ "FEMININE_CLOTHING", "SEXY_CLOTHING" ],
	Category : [ "High Class Whore", "Slutty Lady" ]
};

// STOCKINGS SLOT
App.Data.Clothes["luxurious purple stockings"] = { // +20
	Name: "luxurious purple stockings",
	ShortDesc: "pair of {COLOR} stockings with an intricate pattern",
	LongDesc: "These stockings end halfway between knee and crotch, leaving enough skin to expose under a miniskirt or through a dress cut. They seem to have combination of several patterns of different scale, first coarse, then finer, then even finer, you aren't even sure you can see the finest. This creates almost hypnotic effect, drawing eyes to the legs of the wearer.",
	Slot: "Stockings", Restrict: ["Stockings"],
	Color: "purple", Style: "LEGENDARY", Type: "CLOTHING",
	WearEffect: [ "FEMININE_CLOTHING", "SEXY_CLOTHING" ],
	Category : [ "High Class Whore", "Slutty Lady" ]
};

// SHIRT SLOT
App.Data.Clothes["red halter top"] = { // +20
    Name: "red halter top", 
    ShortDesc: "a low cut {COLOR} halter top",
    LongDesc: "\
    This thin halter top exposes a generous amount of cleavage. The flimsy material allows for your nipples \
    to clearly be seen if you are not wearing a bra.",
    Slot: "Shirt", 
    Restrict: ["Shirt", "Dress", "Costume"], 
    Color: "red", 
    Style: "LEGENDARY", 
    Type : "CLOTHING",
    WearEffect: [ "FEMININE_CLOTHING", "SEXY_CLOTHING" ], 
    Category : [ "High Class Whore" ]
};

// PANTS SLOT
App.Data.Clothes["white microskirt"] = { // +20
    Name: "white microskirt", 
    ShortDesc: "a very short {COLOR} microskirt",
    LongDesc: "\
    This outrageously short skirt is little more than a strip of thin fabric designed to show off more than it conceals.",
    Slot: "Pants", 
    Restrict: ["Pants", "Dress", "Costume"], 
    Color: "white", 
    Style: "LEGENDARY", 
    Type : "CLOTHING",
    WearEffect: [ "FEMININE_CLOTHING", "SEXY_CLOTHING" ], 
    Category :  [ "High Class Whore" ]
};

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
    that wind upwards and around your leg to be tied in a bow.\
    ",
    Slot: "Shoes", Restrict: ["Shoes"],
    Color: "red", Style: "LEGENDARY", Type : "CLOTHING",
    WearEffect: [ "SEXY_CLOTHING" ],
    ActiveEffect: [ "FANCY_MOVES" ],
    Category : [ "High Class Whore", "Sexy Dancer" ],
    InMarket: false
};

App.Data.Clothes["red wedges"] = { // +20
    Name: "red wedges", ShortDesc: "pair of wedged {COLOR} shoes",
    LongDesc: "\
    These shoes support your feet with a large thick wedge that adds an extra few inches onto your height. \
    They are surprisingly comfortable and easy to walk in despite this. \
    ",
    Slot: "Shoes", Restrict: ["Shoes"],
    Color: "red", Style: "RARE", Type : "CLOTHING",
    WearEffect: [ "SEXY_CLOTHING" ],
    ActiveEffect: [ ],
    Category : [ "High Class Whore" ],
    InMarket: true
};

// BUTT SLOT

// PENIS SLOT

// WEAPON SLOT (huh?)
