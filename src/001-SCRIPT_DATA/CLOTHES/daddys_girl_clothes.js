// STYLE TABLE
// TYPE         COMMON  UNCOMMON    RARE    LEGENDARY
// ACCESSORY    3       6           9       12
// CLOTHING     5       10          15      20
// ONE PIECE    10      20          30      40

// WIG SLOT
App.Data.Clothes["pigtail wig"] = { // +9
    Name: "pigtail wig", ShortDesc: "a {COLOR} wig with pigtails and accessories",
        LongDesc: "This high quality wig is done up in pigtails fashioned with little heart accessories that have 'I @@color:pink;&#9825;@@ Daddy!' written on them.",
        Slot: "Wig", Restrict: ["Wig"], Color: "blond", Style: "RARE", Type : "ACCESSORY",
        HairLength: 60, HairStyle: "cute pig tails", HairBonus: 60, Category : [ "Daddy's Girl" ], WearEffect: [ "FEMININE_CLOTHING" ]
};

// HAT SLOT


// NECK SLOT
App.Data.Clothes["collar for daddy"] = { // +9
    Name: "collar for daddy", ShortDesc: "a lacey {COLOR} collar with pink hearts",
    LongDesc: "This lacey white collar is fashioned with little pink hearts that combine to form the words '@@color:pink;Daddy's Girl@@!' as a whole.",
    Slot: "Neck", Restrict: ["Neck"], Color: "white", Style: "UNCOMMON", Type : "ACCESSORY",
    Category : [ "Daddy's Girl" ], WearEffect: [ "FEMININE_CLOTHING", "KINKY_CLOTHING" ]
};

// NIPPLES SLOT

// BRA SLOT
App.Data.Clothes["cute pink bra"] = { // +10
    Name: "cute pink bra", ShortDesc: "a cute {COLOR} bra with tiny hearts on it",
        LongDesc: "This cute bra has tiny white &#9825; on it and a delicate little bow in the middle.",
        Slot: "Bra", Restrict: ["Bra"], Color: "pink", Style: "UNCOMMON", Type : "CLOTHING",
        WearEffect: [ "FEMININE_CLOTHING" ], Category :  [ "Daddy's Girl" ]
};

// CORSET SLOT
App.Data.Clothes["belt with glitter"] = { // +9
    Name: "belt with glitter", ShortDesc: "a {COLOR} belt with glittery letters",
    LongDesc: "This white belt features pink glitter spelling out the word '@@color:pink;PRECIOUS@@'.",
    Slot: "Corset", Restrict: ["Corset"], Color: "white", Style: "RARE", Type : "ACCESSORY",
    WearEffect: [ "FEMININE_CLOTHING", "WAIST_CINCHING" ], Category : [ "Daddy's Girl", "Bimbo", "Pet Girl", ]
};

// PANTY SLOT
App.Data.Clothes["cute pink panties"] = { // +15
    Name: "cute pink panties", ShortDesc: "a pair of cute {COLOR} panties",
        LongDesc: "On the surface these cute pink panties look quite demure, but they have 'I @@color:pink;&#9825;@@ Daddy!' written across the backside.",
        Slot: "Panty", Restrict: ["Panty"], Color: "pink", Style: "RARE", Type : "CLOTHING",
        WearEffect: [ "FEMININE_CLOTHING" ], Category :  [ "Daddy's Girl" ]
};

// STOCKINGS SLOT
App.Data.Clothes["pink knee socks"] = { // +10
    Name: "pink knee socks", ShortDesc: "a pair of {COLOR} knee socks",
        LongDesc: "These pink socks come up right to your knee and have little ties to hold them up.",
        Slot: "Stockings", Restrict: ["Stockings"], Color: "pink", Style: "UNCOMMON", Type : "CLOTHING",
        WearEffect: [ "FEMININE_CLOTHING" ], Category :  [ "Daddy's Girl", "Ordinary", "Bimbo" ]
};

App.Data.Clothes["white knee socks"] = { // +10
    Name: "white knee socks", ShortDesc: "a pair of {COLOR} knee socks",
        LongDesc: "These white socks come up right to your knee and have little ties to hold them up.",
        Slot: "Stockings", Restrict: ["Stockings"], Color: "white", Style: "UNCOMMON", Type : "CLOTHING",
        WearEffect: [ "FEMININE_CLOTHING" ], Category :  [ "Daddy's Girl" ]
};

// SHIRT SLOT
App.Data.Clothes["pink t-shirt"] = { // +20
    Name: "pink t-shirt", 
    ShortDesc: "a naughty {COLOR} t-shirt",
    LongDesc: "\
    This t-shirt is cut short, designed to show off a lot of under-boob. It says \
    '@@color:pink;&#9825;@@Daddy's Little Cumslut'@@color:pink;&#9825;@@ on it.",
    Slot: "Shirt", 
    Restrict: ["Shirt", "Dress", "Costume"], 
    Color: "pink", 
    Style: "LEGENDARY", 
    Type : "CLOTHING",
    WearEffect: [ "FEMININE_CLOTHING", "KINKY_CLOTHING" ], 
    Category : [ "Daddy's Girl" ]
};

// PANTS SLOT
App.Data.Clothes["pink tartan"] = { // +20
    Name: "pink tartan", 
    ShortDesc: "a very short {COLOR} tartan schoolgirl's skirt",
    LongDesc: "\
    This pleated skirt is pink with a black and deep purple tartan pattern. It's incredibly short. Way too short.",
    Slot: "Pants", 
    Restrict: ["Pants", "Dress", "Costume"], 
    Color: "pink", 
    Style: "LEGENDARY", 
    Type : "CLOTHING",
    WearEffect: [ "FEMININE_CLOTHING", "KINKY_CLOTHING" ], 
    Category :  [ "Daddy's Girl", "Sexy Dancer", "Bimbo" ]
};

// DRESS SLOT
App.Data.Clothes["pink gingham dress"] = { // +40
    Name: "pink gingham dress", ShortDesc: "a super short {COLOR} gingham dress",
        LongDesc: "This dress has a girly gingham pattern with white lace collar trim. Normally it'd look quite demure, but it's so short it barely covers your arse and it has a very prominent cleavage window to show off your assets.",
        Slot: "Dress", Restrict: ["Shirt", "Pants", "Dress", "Costume"], Color: "pink", Style: "LEGENDARY", Type : "ONE PIECE",
        WearEffect: [ "FEMININE_CLOTHING" ], Category :  [ "Daddy's Girl" ],
        "InMarket" : false
};

App.Data.Clothes["babydoll dress"] = { // +40
    Name: "babydoll dress", ShortDesc: "{COLOR} babydoll dress",
    LongDesc: "\
    This humiliatingly short dress is made out of a light breezy material that is almost see-through. It has a plunging\
    neckline that leaves little to the imagination and delicate embroidery across the collar and hem depicting \
    an assortment of wildflowers.\
    ",
    Slot: "Dress", Restrict : [ "Shirt", "Pants", "Dress", "Costume" ],
    Color: "white", Style : "LEGENDARY", Type : "ONE PIECE",
    WearEffect: [ "FEMININE_CLOTHING" ],
    ActiveEffect : [ "FLIRTY"],
    Category : [ "Daddy's Girl" ],
    InMarket : false
};

// COSTUME SLOT
App.Data.Clothes["naughty schoolgirl outfit"] = { // +40
    Name: "naughty schoolgirl outfit", ShortDesc: "naughty schoolgirl uniform",
    LongDesc: "\
    This costume is designed to copy a typical schoolgirl uniform - white shirt with blazer and a tartan skirt, \
    however the skirt is far too short to be decent, the shirt is more of a low cut tank top and the jacket is \
    so tiny that it's more of an accessory than anything else. It'd be ridiculous for a grown woman to wear this, \
    which is kind of the point.\
    ",
    Slot: "Costume", Restrict : [ "Shirt", "Pants", "Dress", "Costume" ],
    Color: "tartan", Style : "LEGENDARY", Type : "ONE PIECE",
    WearEffect: [ "KINKY_CLOTHING" ],
    ActiveEffect : [ "MAJOR_STRIPPERS_ALLURE"],
    Category : [ "Daddy's Girl", "Sexy Dancer"],
    InMarket : false
};

// SHOES SLOT
App.Data.Clothes["low heel maryjanes"] = { // +20
    Name: "low heel maryjanes", ShortDesc: "pair of {COLOR} low heeled maryjanes",
    LongDesc: "\
    This style of shoe is popular with young girls for their fashionable look and ease of wearing. The heel \
    is higher than typical for this style, but not so much as to impair ones walking. The craftsmanship and \
    quality of the shoe is apparent in how sturdy and lightweight it is. \
    ",
    Slot: "Shoes", Restrict: ["Shoes"],
    Color: "black", Style: "LEGENDARY", Type : "CLOTHING",
    WearEffect: [ "FEMININE_CLOTHING" ],
    ActiveEffect: [ "FANCY_MOVES" ],
    Category : [ "Daddy's Girl", "Sexy Dancer" ],
    InMarket: false
};
// BUTT SLOT

// PENIS SLOT
App.Data.Clothes["pink cock ribbon"] = { // +12
    Name: "pink cock ribbon", ShortDesc: "delicate {COLOR} cock ribbon",
    LongDesc: "\
    A tiny ribbon meant to be worn around the cock and tied into a bow. The ribbon itself has the phrase \
    'I @@color:pink;&#9825;@@ Daddy!' embroidered on it.\
    ",
    Slot: "Penis", Restrict : [ "Penis" ],
    Color: "pink", Style : "LEGENDARY", Type : "ACCESSORY",
    WearEffect: [ "KINKY_CLOTHING" ],
    ActiveEffect : [],
    Category : [ "Daddy's Girl" ],
    InMarket : false
};
// WEAPON SLOT (huh?)
