App = App || { Data: { }, Entity: { } };
App.Data.Clothes = App.Data.Clothes || { };

// STYLE TABLE
// TYPE         COMMON  UNCOMMON    RARE    LEGENDARY
// ACCESSORY    3       6           9       12
// CLOTHING     5       10          15      20
// ONE PIECE    10      20          30      40

// WIG SLOT
App.Data.Clothes["pigtail wig"] = { // +9
    "Name": "pigtail wig", "ShortDesc": "a {COLOR} wig with pigtails and accessories",
        "LongDesc": "This high quality wig is done up in pigtails fashioned with little heart accessories that have 'I @@color:pink;&#9825;@@ Daddy!' written on them.",
        "Slot": "Wig", "Restrict": ["Wig"], "Color": "blond", "Style": "RARE", "Type" : "ACCESSORY",
        "HairLength": 60, "HairStyle": "cute pig tails", "HairBonus": 60, "Category" : [ "Daddy's Girl" ], "WearEffect": [ "FEMININE_CLOTHING" ]
};

// HAT SLOT


// NECK SLOT


// NIPPLES SLOT

// BRA SLOT
App.Data.Clothes["cute pink bra"] = { // +10
    "Name": "cute pink bra", "ShortDesc": "a cute {COLOR} bra with tiny hearts on it",
        "LongDesc": "This cute bra has tiny white &#9825; on it and a delicate little bow in the middle.",
        "Slot": "Bra", "Restrict": ["Bra"], "Color": "pink", "Style": "UNCOMMON", "Type" : "CLOTHING",
        "WearEffect": [ "FEMININE_CLOTHING" ], "Category" :  [ "Daddy's Girl" ]
};

// CORSET SLOT

// PANTY SLOT
App.Data.Clothes["cute pink panties"] = { // +15
    "Name": "cute pink panties", "ShortDesc": "a pair of cute {COLOR} panties",
        "LongDesc": "On the surface these cute pink panties look quite demure, but they have 'I @@color:pink;&#9825;@@ Daddy!' written across the backside.",
        "Slot": "Panty", "Restrict": ["Panty"], "Color": "pink", "Style": "RARE", "Type" : "CLOTHING",
        "WearEffect": [ "FEMININE_CLOTHING" ], "Category" :  [ "Daddy's Girl" ]
};

// STOCKINGS SLOT
App.Data.Clothes["pink knee socks"] = { // +10
    "Name": "pink knee socks", "ShortDesc": "a pair of {COLOR} knee socks",
        "LongDesc": "These pink socks come up right to your knee and have little ties to hold them up.",
        "Slot": "Stockings", "Restrict": ["Stockings"], "Color": "pink", "Style": "UNCOMMON", "Type" : "CLOTHING",
        "WearEffect": [ "FEMININE_CLOTHING" ], "Category" :  [ "Daddy's Girl", "Ordinary", "Bimbo" ]
};

App.Data.Clothes["white knee socks"] = { // +10
    "Name": "pink knee socks", "ShortDesc": "a pair of {COLOR} knee socks",
        "LongDesc": "These white socks come up right to your knee and have little ties to hold them up.",
        "Slot": "Stockings", "Restrict": ["Stockings"], "Color": "white", "Style": "UNCOMMON", "Type" : "CLOTHING",
        "WearEffect": [ "FEMININE_CLOTHING" ], "Category" :  [ "Daddy's Girl" ]
};

// SHIRT SLOT
App.Data.Clothes["pink t-shirt"] = { // +20
    "Name": "pink t-shirt", "ShortDesc": "a naughty {COLOR} t-shirt",
        "LongDesc": "This t-shirt is cut short, designed to show off a lot of under-boob. It says '@@color:pink;&#9825;@@Daddy's Little Cumslut'@@color:pink;&#9825;@@ on it.",
        "Slot": "Shirt", "Restrict": ["Shirt", "Dress", "Costume"], "Color": "pink", "Style": "LEGENDARY", "Type" : "CLOTHING",
        "WearEffect": [ "FEMININE_CLOTHING", "KINKY_CLOTHING" ], "Category" :  [ "Daddy's Girl" ]
};

// PANTS SLOT
App.Data.Clothes["pink tartan"] = { // +20
    "Name": "pink tartan", "ShortDesc": "a very short {COLOR} tartan schoolgirl's skirt",
        "LongDesc": "This pleated skirt is pink with a black and deep purple tartan pattern. It's incredibly short. Way too short.",
        "Slot": "Pants", "Restrict": ["Pants", "Dress", "Costume"], "Color": "pink", "Style": "LEGENDARY", "Type" : "CLOTHING",
        "WearEffect": [ "FEMININE_CLOTHING", "KINKY_CLOTHING" ], "Category" :  [ "Daddy's Girl", "Sexy Dancer", "Bimbo" ]
};

// DRESS SLOT
App.Data.Clothes["pink gingham dress"] = { // +40
    "Name": "pink gingham dress", "ShortDesc": "a super short {COLOR} gingham dress",
        "LongDesc": "This dress has a girly gingham pattern with white lace collar trim. Normally it'd look quite demure, but it's so short it barely covers your arse and it has a very prominent cleavage window to show off your assets.",
        "Slot": "Dress", "Restrict": ["Shirt", "Pants", "Dress", "Costume"], "Color": "pink", "Style": "LEGENDARY", "Type" : "ONE PIECE",
        "WearEffect": [ "FEMININE_CLOTHING" ], "Category" :  [ "Daddy's Girl" ],
        "InMarket" : false
};

// COSTUME SLOT

// SHOES SLOT

// BUTT SLOT

// PENIS SLOT

// WEAPON SLOT (huh?)
