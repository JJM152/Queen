// STYLE TABLE
// TYPE         COMMON  UNCOMMON    RARE    LEGENDARY
// ACCESSORY    3       6           9       12
// CLOTHING     5       10          15      20
// ONE PIECE    10      20          30      40

// WIG SLOT
App.Data.Clothes["exotic wig"] = { // +12
    "Name": "exotic wig", "ShortDesc": "an exotic {COLOR} wig done in twin tails",
    "LongDesc": "This exotic wig is made of finely dyed human hair and strung with jewels.",
    "Slot": "Wig", "Restrict": ["Wig"], "Color": "purple", "Style": "LEGENDARY", "Type" : "ACCESSORY",
    "HairLength": 80, "HairStyle": "twin tails", "HairBonus": 90,
    "WearEffect": [ "FEMININE_CLOTHING" ],  "Category" : [ "Sexy Dancer", "Sissy Lolita", "Bimbo" ]
};
// HAT SLOT

// NECK SLOT

// NIPPLES SLOT

// BRA SLOT
App.Data.Clothes["nipple tassels"] = { // +15
    "Name": "nipple tassels", "ShortDesc": "a pair of red nipple tassels",
    "LongDesc": "These tassels can be pasted onto your nipples with a strong adhesive, allowing you to twirl and shake them as you gyrate. You can't wear them with a bra.",
    "Slot": "Bra", "Restrict": [ "Bra"], "Color": "red", "Style": "RARE", "Type" : "CLOTHING",
    "WearEffect": [ "FEMININE_CLOTHING", "KINKY_CLOTHING" ], "Category" :  [ "Sexy Dancer" ]
};

// CORSET SLOT

// PANTY SLOT
App.Data.Clothes["sequined g-string"] = { // +15
    "Name": "sequined g-string", "ShortDesc": "a {COLOR} sequined g-string",
    "LongDesc": "It's more like a patch connected by dental floss. The main point, other than the extreme ass exposure, are the shiny silver sequins.",
    "Slot": "Panty", "Restrict": ["Panty"], "Color": "black", "Style": "RARE", "Type" : "CLOTHING",
    "WearEffect": [ "FEMININE_CLOTHING", "KINKY_CLOTHING" ], "Category" :  [ "Sexy Dancer" ]
};

// STOCKINGS SLOT
App.Data.Clothes["silk stockings"] = { // +10
    "Name": "silk stockings", "ShortDesc": "a pair of {COLOR} silk stockings and garters",
    "LongDesc": "Luxurious and sexy silk stockings held up with garters.",
    "Slot": "Stockings", "Restrict": ["Stockings"], "Color": "black", "Style": "UNCOMMON", "Type" : "CLOTHING",
    "WearEffect": [ "FEMININE_CLOTHING" ], "Category" : [ "Sexy Dancer", "High Class Whore", "Naughty Nun", "Slutty Lady"]
};
// SHIRT SLOT

// PANTS SLOT

// DRESS SLOT

// COSTUME SLOT
App.Data.Clothes["stripper costume"] = { // +20
    "Name": "stripper costume", "ShortDesc": "a tiny {COLOR} naval uniform",
    "LongDesc": "This costume consists of a two piece outfit with accessories that is designed to mimic a navy officers uniform, if the navy was a service filled with "+
    "brazen whores. The skirt is flared and too low, showing off your bottom. The top is tight and mostly open, it has patches that can be pulled off to reveal tassels hanging "+
    "off your tits from pasties that are shaped like anchors. Instead of sleeves or a collar it has little accessories designed to look like them, including the epaulets of the navy "+
    "suit jacket.",
    "Slot": "Costume", "Restrict": ["Shirt", "Pants", "Dress", "Costume"], "Color": "white", "Style": "UNCOMMON", "Type" : "ONE PIECE",
    "WearEffect": [ "FEMININE_CLOTHING", "KINKY_CLOTHING" ], "ActiveEffect": [ "MINOR_STRIPPERS_ALLURE" ], Category : [ "Sexy Dancer" ]
};

App.Data.Clothes["burlesque costume"] = { // +30
    "Name": "burlesque costume", "ShortDesc": "a fancy {COLOR} burlesque costume",
    "LongDesc": "This two piece red outfit is designed to be taken off in pieces. With the accompanying giant fan and feather boa, you're sure to put on an excellent show.",
    "Slot": "Costume", "Restrict": ["Shirt", "Pants", "Dress", "Costume"], "Color": "red", "Style": "RARE", "Type" : "ONE PIECE",
    "WearEffect": [ "FEMININE_CLOTHING", "KINKY_CLOTHING" ], "ActiveEffect": [ "MAJOR_STRIPPERS_ALLURE" ]
};

App.Data.Clothes["slutty schoolgirl"] = { // +40
    "Name": "slutty schoolgirl", "ShortDesc": "skimpy school uniform",
    "LongDesc": "This costume consists of a tiny shirt tied over your breasts, exposing your midriff, a high-waisted school jacket and a tartan skirt so small it's barely there.",
    "Slot": "Dress", "Restrict": ["Shirt", "Pants", "Dress", "Costume"], "Color": "blue", "Style": "LEGENDARY", "Type" : "ONE PIECE",
    "WearEffect": [ "SEXY_CLOTHING", "KINKY_CLOTHING" ], "ActiveEffect" : [ "GREATER_STRIPPERS_ALLURE" ], Category : [ "Sexy Dancer" ]
};

// SHOES SLOT
App.Data.Clothes["go-go boots"] = { // +10
    "Name": "go-go boots", "ShortDesc": "a pair of {COLOR} platform go-go boots",
    "LongDesc": "These knee high boots sport an elevated platform and a chunky heel. Perfect for strutting your stuff and getting down on the dance floor.",
    "Slot": "Shoes", "Restrict": ["Shoes"], "Color": "white", "Style": "UNCOMMON", "Type" : "CLOTHING",
    "WearEffect": [ "FEMININE_CLOTHING" ], "ActiveEffect" : [ "FANCY_MOVES" ], Category : [ "Bimbo", "Sexy Dancer" ]
};

App.Data.Clothes["stripper heels"] = { // +20
    Name: "stripper heels", ShortDesc: "a pair of outrageously tall {COLOR} platform heels",
    LongDesc: "\
    These type of shoes are commonly worn by exotic dancers or women who want to make themselves the center \
    of attention. The thick platform on the bottom is outrageously tall, giving you several inches on your \
    normal height. They're also so heavy that it takes practice care to walk with them, more so than regular \
    heels. The effect is that you prance and waddle while you step, forcing your ass to jiggle and shake \
    everywhere you walk.\
    ",
    Slot: "Shoes", Restrict: ["Shoes"],
    Color: "black", Style: "LEGENDARY", Type : "CLOTHING",
    WearEffect: [ "FEMININE_CLOTHING" ],
    ActiveEffect : [ "REALLY_FANCY_MOVES" ],
    Category : [ "Sexy Dancer", "Bimbo" ],
    InMarket: false
};

App.Data.Clothes["barefoot sandals"] = {
    "Name": "barefoot sandals", "ShortDesc": "a pair of {COLOR} barefoot sandals",
    "LongDesc": "These ornamental chains elegantly embellish your dainty effeminate feet without appreciable weight or concealment.",
    "Slot": "Shoes", "Restrict": ["Shoes"], "Color": "silver", "Style": "UNCOMMON", "Type" : "CLOTHING",
    "WearEffect": [ "FEMININE_CLOTHING", "KINKY_CLOTHING" ], "ActiveEffect": [ "MINOR_STRIPPERS_ALLURE" ], Category : [ "Sexy Dancer" ], "InMarket" : false
};

// BUTT SLOT

// PENIS SLOT

// WEAPON SLOT (huh?)
