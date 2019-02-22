App = App || { Data: { }, Entity: { } };
App.Data.Clothes = App.Data.Clothes || { };
// Cow girl clothing descriptions provided by sirwolffe @ the tfgamessite.com forums.

// STYLE TABLE
// TYPE         COMMON  UNCOMMON    RARE    LEGENDARY
// ACCESSORY    3       6           9       12
// CLOTHING     5       10          15      20
// ONE PIECE    10      20          30      40

// WIG SLOT

// HAT SLOT
App.Data.Clothes["cow headband"] = { // +9
    "Name": "cow headband", "ShortDesc": "a well crafted cowgirl headband",
    "LongDesc": "A sturdy black hair band with cute little scrimshawed cow horns and fuzzy ears.",
    "Slot": "Hat", "Restrict": ["Hat"], "Color": "black", "Style": "RARE", "Type" : "ACCESSORY",
    "WearEffect":[ "FEMININE_CLOTHING" ], "Category" : [ "Pet Girl" ], "Meta" : [ 'cow outfit', 'job reward' ]
};

App.Data.Clothes["cat ears"] = {
    "Name": "cat ears", "ShortDesc": "a pair of fluffy {COLOR} cat ears",
    "LongDesc": "These large furry cat ears are attached by a headband to be worn.",
    "Slot": "Hat", "Restrict": ["Hat"], "Color": "black", "Style": "RARE", "Type" : "ACCESSORY",
    "Category" : [ "Pet Girl" ]
};

// NECK SLOT
App.Data.Clothes["cow collar"] = { // +9
    "Name": "cow collar", "ShortDesc": " a cute gold cowbell and collar",
    "LongDesc": "A shiny cowbell gently clangs from from a soft leather collar decorated with a black lace ribbon.",
    "Slot": "Neck", "Restrict": ["Neck"], "Color": "black", "Style": "RARE", "Type" : "ACCESSORY",
    "WearEffect": [ "FEMININE_CLOTHING" ], "Category" : [ "Pet Girl" ], "Meta" : [ 'cow outfit', 'job reward' ]
};

// NIPPLES SLOT
App.Data.Clothes["nipple bells"] = { // +9
    "Name": "nipple bells", "ShortDesc": "a pair of belled gold nipple rings",
    "LongDesc": "These large diameter and heavy gage rings have little bells hanging from them. Their weight ceaselessly stimulates your nipples to \"full mast\".",
    "Slot": "Nipples", "Restrict": ["Nipples"], "Color": "gold", "Style": "RARE", "Type" : "ACCESSORY",
    "WearEffect": [ "PERVERTED_CLOTHING" ], "Category" :  [ "Pet Girl", "BDSM" ], "Meta" : [ 'cow outfit', 'job reward' ]
};

// BRA SLOT
App.Data.Clothes["cow bra"] = { // +10
    "Name": "cow bra", "ShortDesc": "a reinforced {COLOR} comfy maternity bra",
    "LongDesc": "In white on the right cup it says, \"got milk under spot X\". In white on the left cup is a horned bull skull over a pair of crossed milk cans, making an X.",
    "Slot": "Bra", "Restrict": ["Bra"], "Color": "black", "Style": "UNCOMMON", "Type" : "CLOTHING",
    "WearEffect":[ "FEMININE_CLOTHING" ], "Category" : [ "Pet Girl" ], "Meta" : [ 'cow outfit', 'job reward' ]
};

// CORSET SLOT
App.Data.Clothes["cow corset"] = { // +10
    "Name": "cow corset", "ShortDesc": "a holstein patterned cup-less corset in velvet",
    "LongDesc": "This ingeniously designed piece is built to be let out as the wearer become plumper, or safely carry a baby, while providing substantial back support.",
    "Slot": "Corset", "Restrict": ["Corset"], "Color": "white", "Style": "RARE", "Type" : "ACCESSORY",
    "WearEffect": [ "FEMININE_CLOTHING", "WAIST_CINCHING" ], "Category" :  [ "Pet Girl" ], "Meta" : [ 'cow outfit', 'job reward' ]
};

// PANTY SLOT
App.Data.Clothes["cow panties"] = { // +10
    "Name": "cow panties", "ShortDesc": "a high cut brief of {COLOR} silk",
    "LongDesc": "It is trimmed in elegant black lace. The back panel proudly proclaims,\"Moo Matey!\". The front has little white satin bows. Has a tail hole.",
    "Slot": "Panty", "Restrict": ["Panty"], "Color": "black", "Style": "UNCOMMON", "Type" : "CLOTHING",
    "WearEffect": [ "FEMININE_CLOTHING" ], "Category" : [  "Pet Girl" ], "Meta" : [ 'cow outfit', 'job reward' ]
};

// STOCKINGS SLOT
App.Data.Clothes["cow stockings"] = { // +15
    "Name": "cow stockings", "ShortDesc": "a pair of black & white vertically striped silk stockings",
    "LongDesc": "They reach to mid-thigh, are topped off by black lace and tied with a wide white ribbon in a bow.",
    "Slot": "Stockings", "Restrict": ["Stockings"], "Color": "black", "Style": "RARE", "Type" : "CLOTHING",
    "WearEffect": [ "FEMININE_CLOTHING" ], "Category" : [ "Pet Girl" ], "Meta" : [ 'cow outfit', 'job reward' ]
};

// SHIRT SLOT

// PANTS SLOT
App.Data.Clothes["cow skirt"] = { // +20
    "Name": "cow skirt", "ShortDesc": "a fine wool holstein patterned full skirt",
    "LongDesc": "Hangs from the hips and just barely covers your ass when you bend forward. It doesn't if you hug your knees. Sways enticingly and flares out on spins.",
    "Slot": "Pants", "Restrict": ["Pants", "Dress", "Costume"], "Color": "pink", "Style": "LEGENDARY", "Type" : "CLOTHING",
    "WearEffect": [ "FEMININE_CLOTHING", "FLIRTY" ], "Category" :  [ "Pet Girl", "Bimbo" ], "Meta" : [ 'cow outfit', 'job reward' ]
};

// DRESS SLOT
App.Data.Clothes["fuzzy black bikini"] = { // +40
    Name: "fuzzy black bikini", ShortDesc: "fuzzy {COLOR} bikini",
    LongDesc: "\
    This two piece ensemble consists of a strapless bikini top and high cut briefs that are covered with a soft \
    fur like material that is soft to the touch and has a brilliant sheen. \
    ",
    Slot: "Dress", Restrict : [ "Shirt", "Pants", "Dress", "Costume" ],
    Color: "black", Style : "LEGENDARY", Type : "ONE PIECE",
    WearEffect: [ "SEXY_CLOTHING" ],
    ActiveEffect : [ "FLIRTY" ],
    Category : [ "Pet Girl" ],
    InMarket : false
};

// COSTUME SLOT
App.Data.Clothes["sexy kitten costume"] = { // +40
    Name: "sexy kitten costume", ShortDesc: "{COLOR} sexy kitten costume",
    LongDesc: "\
    A furry one piece costume that comes with some accessories such as a pair of kitten ears and a tail. It's \
    obviously designed for either a costume ball or private 'play'.\
    ",
    Slot: "Costume", Restrict : [ "Shirt", "Pants", "Dress", "Costume" ],
    Color: "white", Style : "LEGENDARY", Type : "ONE PIECE",
    WearEffect: [ "KINKY_CLOTHING" ],
    ActiveEffect : [ "MAJOR_STRIPPERS_ALLURE"],
    Category : [ "Pet Girl", "Sexy Dancer"],
    InMarket : false
};

// SHOES SLOT
App.Data.Clothes["cow boots"] = { // +20
    "Name": "cow boots", "ShortDesc": "a pair of shiny black calf length cavalier boots",
    "LongDesc": "These 3 inch heels sport a sleek in design with 4\" fold over on the sides and front. They have white laces up from the back of ankle to top, white felt liner and large mirrored steel buckles with ankle support strap. The front sports a hoof shaped mirrored steel toe piece.",
    "Slot": "Shoes", "Restrict": ["Shoes"], "Color": "black", "Style": "LEGENDARY", "Type" : "CLOTHING",
    "WearEffect": [ "FEMININE_CLOTHING", "FANCY_MOVES" ], "Category" : [ "Pet Girl", "Sexy Dancer" ], "Meta" : [ 'cow outfit', 'job reward' ]
};

App.Data.Clothes["fuzzy paws"] = { // +20
    Name: "fuzzy paws", ShortDesc: "pair of {COLOR} fuzzy paws",
    LongDesc: "\
    These shoes are designed to look like animal paws, right down to having an exaggerated footpad imprint. They are \
    made of some sort of high quality material and covered with a layer of luxuriously soft fur.\
    ",
    Slot: "Shoes", Restrict: ["Shoes"], 
    Color: "black", Style: "LEGENDARY", Type : "CLOTHING",
    WearEffect: [ "SEXY_CLOTHING" ],
    ActiveEffect: [ "FANCY_MOVES" ], 
    Category : [ "Pet Girl", "Sexy Dancer" ],
    InMarket: false
};

// BUTT SLOT
App.Data.Clothes["cow tail"] = { // +9
    "Name": "cow tail", "ShortDesc": "a butt plug with a {COLOR} cow tail attached ",
    "LongDesc": "This anal plug is attached to a faux cow tail, sporting a cute little ribbon. It's warm to the touch, and sways on its own or when you walk. It feels real, is it magical? And it’s very comfortable, never accidentally slips out, and is always clean. It’s white with a black bush tip.",
    "Slot": "Butt", "Restrict": ["Butt"], "Color": "white", "Style": "RARE", "Type" : "ACCESSORY",
    "WearEffect": [ "PERVERTED_CLOTHING", "GAPE_TRAINING" ], Category : [ "Pet Girl", "BDSM" ], "Meta" : [ 'cow outfit', 'job reward' ]
};

App.Data.Clothes["fuzzy anal tail"] = { // +12
	Name: "fuzzy anal tail",
	ShortDesc: "{COLOR} fuzzy tail ending in a thick butt plug",
	LongDesc: "\
    The perfect accessory for any kitten on the prowl. The tail has been enchanted so that as long as the plug part \
    is nestled within your sphincter you can move it freely with but a mere thought!\
	",
	Slot: "Butt", Restrict: ["Butt"],
	Color: "black", Style: "LEGENDARY", Type: "ACCESSORY",
	WearEffect: [ "PERVERTED_CLOTHING", "GAPE_TRAINING" ],
	Category : [ "Pet Girl" ],
	InMarket: false
};

// PENIS SLOT

// WEAPON SLOT (huh?)

