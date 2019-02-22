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
App.Data.Clothes["bimbo collar"] = { // +12
    Name: "bimbo collar", ShortDesc: "{COLOR} collar with the word 'BIMBO' in rhinestones",
    LongDesc: "\
    If you're not trying to hide it, you might as well flaunt it. This pink leather collar is studded with \
    shiny rhinestones spelling out the word 'B-I-M-B-O' just incase anyone looking at you couldn't \
    figure it out on their own.\
    ",
    Slot: "Neck", Restrict : [ "Neck" ],
    Color: "pink", Style : "LEGENDARY", Type : "ACCESSORY",
    WearEffect: [ "FEMININE_CLOTHING", "KINKY_CLOTHING" ],
    ActiveEffect : [ "FLIRTY"],
    Category : [ "Bimbo", "BDSM" ],
    InMarket : false
};

// NIPPLES SLOT

// BRA SLOT
App.Data.Clothes["bimbo bra"] = { // +15
    "Name": "bimbo bra", "ShortDesc": "a {COLOR} push-up bra trimmed with lace and studded with rhinestones",
    "LongDesc": "This sexy bra is designed to push up and display your assets in the most provocative way possible. The lace and shiny rhinestones there are for maximum eye-catching appeal.",
    "Slot": "Bra", "Restrict": ["Bra"], "Color": "pink", "Style": "RARE", "Type" : "CLOTHING",
    "WearEffect": [ "FEMININE_CLOTHING" ], "Category" :  [ "Bimbo" ]
};

// CORSET SLOT
App.Data.Clothes["cupless corset"] = { // +9
    "Name": "cupless corset", "ShortDesc": "a lacey {COLOR} cupless corset",
    "LongDesc": "This highly impractical garment doesn't cinch your waist at all and leaves your breasts totally exposed. It's obviously meant just for show.",
    "Slot": "Corset", "Restrict": ["Corset"], "Color": "black", "Style": "RARE", "Type" : "ACCESSORY",
    "WearEffect": [ "FEMININE_CLOTHING" ], "Category" :  [ "Bimbo", "Sexy Dancer", "Slutty Lady", "High Class Whore" ]
};

// PANTY SLOT
App.Data.Clothes["bimbo thong"] = { //15
    "Name": "bimbo thong", "ShortDesc": "a {COLOR} thong with 'I @@color:pink;&#9825;@@ Cum! written on the crotch' ",
    "LongDesc": "This tiny thong is practically a g-string. The advertisement printed on it leaves no doubt to any onlookers as to what you're all about.",
    "Slot": "Panty", "Restrict": ["Panty"], "Color": "pink", "Style": "RARE", "Type" : "CLOTHING",
    "WearEffect": [ "FEMININE_CLOTHING" ], "Category" :  [ "Bimbo" ]
};

// STOCKINGS SLOT

// SHIRT SLOT

// PANTS SLOT

// DRESS SLOT
App.Data.Clothes["sexy micro dress"] = { // +40
    "Name": "sexy micro dress", "ShortDesc": "a figure hugging {COLOR} micro dress",
    "LongDesc": "This dress is made out of some exotic material that hugs every curve of your body. It's so humiliatingly short that your genitals are half open for everyone and the top has several strategic holes to present multiple views of your chest.",
    "Slot": "Dress", "Restrict": ["Shirt", "Pants", "Dress", "Costume"], "Color": "pink", "Style": "LEGENDARY", "Type" : "ONE PIECE",
    "WearEffect": [ "SEXY_CLOTHING", "KINKY_CLOTHING" ], "ActiveEffect" : [ "SUCCUBUS_ALLURE" ], Category : [ "Bimbo" ]
};

App.Data.Clothes["bimbo cocktail dress"] = { // +40
    Name: "bimbo cocktail dress", ShortDesc: "extremely revealing {COLOR} cocktail dress",
    LongDesc: "\
    This tiny dress consists of a strapless top with a plunging neckline so low it threatens to show off \
    your nipples to anyone passing by. The bottom is made out of a stiff crinkly material that sticks \
    out the sides and is so short that it will show off your panties if you do anything but stand ramrod straight.\
    ",
    Slot: "Dress", Restrict : [ "Shirt", "Pants", "Dress", "Costume" ],
    Color: "pink", Style : "LEGENDARY", Type : "ONE PIECE",
    WearEffect: [ "FEMININE_CLOTHING" ],
    ActiveEffect : [ "FLIRTY"],
    Category : [ "Bimbo" ],
    InMarket : false
};

// COSTUME SLOT
App.Data.Clothes["bimbo cheerleader costume"] = { // +40
    Name: "bimbo cheerleader costume", ShortDesc: "bright {COLOR} cheerleader outfit",
    LongDesc: "\
    Legends tell that in ages long ago great wars were fought with the assistance of beautiful women \
    known as 'cheerleaders'. No one is quite sure what that means, and all recent attempts to ressurect the \
    practice have met with limited success. Despite that, many men are still attracted to the ceremonial costume \
    which consists in this case of a tight midrift halter top emblazoned with the words 'BJ U' on it and a tiny \
    pleated pink skirt.\
    ",
    Slot: "Costume", Restrict : [ "Shirt", "Pants", "Dress", "Costume" ],
    Color: "pink", Style : "LEGENDARY", Type : "ONE PIECE",
    WearEffect: [ "FEMININE_CLOTHING", "KINKY_CLOTHING"],
    ActiveEffect : [ "MAJOR_STRIPPERS_ALLURE"],
    Category : [ "Bimbo", "Sexy Dancer"],
    InMarket : false
};

// SHOES SLOT
App.Data.Clothes["tall heels"] = { // +10
    Name: "tall heels", ShortDesc: "very tall {COLOR} high heels",
    LongDesc: "\
    These tall high heels make your arse stick out and your hips wiggle when you walk.\
    ",
    Slot: "Shoes", Restrict: ["Shoes"], 
    Color: "black", Style: "UNCOMMON", Type : "CLOTHING",
    WearEffect: [ "FEMININE_CLOTHING" ],
    ActiveEffect: [], 
    Category : [ "Bimbo", "Sexy Dancer", "High Class Whore" ],
    InMarket: true
};

App.Data.Clothes["platform heels"] = { // +15
    Name: "platform heels", ShortDesc: "very tall {COLOR} platform high heels",
    LongDesc: "\
    The thick platform on these heels gives you several inches of height and forces you walk with \
    a slight mincing or prancing motion. The effect is most noticible in how attention is drawn to your arse \
    and how it wiggles and shakes as you walk. \
    ",
    Slot: "Shoes", Restrict: ["Shoes"], 
    Color: "black", Style: "RARE", Type : "CLOTHING",
    WearEffect: [ "FEMININE_CLOTHING" ],
    ActiveEffect: [], 
    Category : [ "Bimbo", "Sexy Dancer", "High Class Whore" ],
    InMarket: true
};

App.Data.Clothes["bimbo heels"] = { // +20
    Name: "bimbo heels", ShortDesc: "{COLOR} rhinestone encrusted platform high heels",
    LongDesc: "\
    The thick platform on these heels gives you several inches of height and forces you walk with \
    a slight mincing or prancing motion. The effect is most noticible in how attention is drawn to your arse \
    and how it wiggles and shakes as you walk. The shiny rhinestones encrusted around the front and back \
    of the heel make it just that much more 'extra'.\
    ",
    Slot: "Shoes", Restrict: ["Shoes"], 
    Color: "pink", Style: "LEGENDARY", Type : "CLOTHING",
    WearEffect: [ "FEMININE_CLOTHING" ],
    ActiveEffect: [], 
    Category : [ "Bimbo", "Sexy Dancer" ],
    InMarket: false
};


// BUTT SLOT
App.Data.Clothes["small plug"] = { // +9
    "Name": "small plug", "ShortDesc": "a small anal plug with a heart-shaped {COLOR} faux gem",
    "LongDesc": "This tiny little plug is designed be worn in your ass. The fake gem is there for decoration because everyone is going to be looking at it..",
    "Slot": "Butt", "Restrict": ["Butt"], "Color": "pink", "Style": "RARE", "Type" : "ACCESSORY",
    WearEffect: [ "PERVERTED_CLOTHING" ], Category : [ "Bimbo", "Sexy Dancer", "High Class Whore" ]
};

// PENIS SLOT

// WEAPON SLOT (huh?)

