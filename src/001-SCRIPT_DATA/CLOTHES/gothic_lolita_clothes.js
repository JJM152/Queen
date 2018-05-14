App = App || { Data: { }, Entity: { } };
App.Data.Clothes = App.Data.Clothes || { };
// Gothic Lolita Style, contributed by 'littleslavegirl' @ wwww.tfgamessite.com Forums

// STYLE TABLE
// TYPE         COMMON  UNCOMMON    RARE    LEGENDARY
// ACCESSORY    3       6           9       12
// CLOTHING     5       10          15      20
// ONE PIECE    10      20          30      40

// WIG SLOT

// HAT SLOT
App.Data.Clothes["black flower hairpin"] = { // +12
    "Name": "red and black flower hair pin", "ShortDesc": "a red and {COLOR} flower",
    "LongDesc": "A black rose that adorns your hair, a trio of black ribbons hang down to which are attached 3 blood red stars.",
    "Slot": "Hat", "Restrict": ["Hat"], "Color": "black", "Price": 60, "Style": "LEGENDARY", "Type" : "ACCESSORY",
    "WearEffect": {"Femininity": [0, 10, 80]}, "Category" : [ "Gothic Lolita" ]
};

// NECK SLOT
App.Data.Clothes["gothic collar"] = { // +9
    "Name": "Black gothic collar", "ShortDesc": " a {COLOR} ribbon-lined leather collar emblazoned with the word 'SLAVE' burned into it.",
    "LongDesc": "A snug leather collar lined on both sides in black lace, slave is burned into the leather to remind you exactly what you are..",
    "Slot": "Neck", "Restrict": ["Neck"], "Color": "black", "Price": 50, "Style": "RARE", "Type" : "ACCESSORY",
    "WearEffect": {"Femininity": [0, 10, 70]}, "Category" : [ "Gothic Lolita" ]
};

// NIPPLES SLOT

// BRA SLOT
App.Data.Clothes["gothic black bra"] = { // +10
    "Name": "black bra", "ShortDesc": "a {COLOR} lace gothic style bra",
    "LongDesc": "A sexy black lace gothic style bra.",
    "Slot": "Bra", "Restrict": ["Bra"], "Color": "black", "Price": 80, "Style": "UNCOMMON", "Type" : "CLOTHING",
    "WearEffect": {"Femininity": [0, 10, 60]}, "Category" : [ "Gothic Lolita", "BIMBO", "Sexy Dancer" ]
};

// CORSET SLOT

// PANTY SLOT
App.Data.Clothes["black panties"] = { // +10
    "Name": "black panties", "ShortDesc": "a pair of {COLOR} black panties",
    "LongDesc": "Black sexy silk panties just asking for someone to remove them.",
    "Slot": "Panty", "Restrict": ["Panty"], "Color": "black", "Price": 80, "Style": "UNCOMMON", "Type" : "CLOTHING",
    "WearEffect": {"Femininity": [0, 10, 60]}, "Category" : [  "Gothic Lolita", "BIMBO", "Sexy Dancer" ]
};

App.Data.Clothes["gothic frilly bloomers"] = { // +15
    "Name": "frilly bloomers", "ShortDesc": "a pair of frilly {COLOR} cotton bloomers",
    "LongDesc": "These bloomers are cut short and have a frilly bottom.",
    "Slot": "Panty", "Restrict": ["Panty"], "Color": "black", "Price": 150, "Style": "RARE", "Type" : "CLOTHING",
    "WearEffect": {"Femininity": [0, 10, 70]}, "Category" : [ "Gothic Lolita" ]
};

// STOCKINGS SLOT
App.Data.Clothes["gothic striped stockings"] = { // +15
    "Name": "black stockings", "ShortDesc": "a pair of {COLOR} and purple striped stockings",
    "LongDesc": "These stockings come up over your knees. They are striped, black and purple, with a slight lacey top that is adorned with tiny black roses.",
    "Slot": "Stockings", "Restrict": ["Stockings"], "Color": "black", "Price": 75, "Style": "RARE", "Type" : "CLOTHING",
    "WearEffect": {"Femininity": [0, 10, 60]}, "Category" : [ "Gothic Lolita" ]
};

// SHIRT SLOT

// PANTS SLOT

// DRESS SLOT
App.Data.Clothes["gothic frilly dress"] = { // +40
    "Name": "black gothic dress", "ShortDesc": "a {COLOR} gothic dress",
    "LongDesc": "A short sleeved snug black knee length dress. Lace along the the collar, sleeves and along the bottom of the heavily petticoated skirt that bounces with every step you take.",
    "Slot": "Dress", "Restrict": ["Shirt", "Pants", "Dress", "Costume"], "Color": "black", "Price": 250, "Style": "LEGENDARY", "Type" : "ONE PIECE",
    "WearEffect": {"Femininity": [0, 10, 70]}, "Category" : [ "Gothic Lolita" ]
};

// COSTUME SLOT

// SHOES SLOT
App.Data.Clothes["black boots"] = { // +15
    "Name": "black high heeled boots", "ShortDesc": "A pair of black knee length heeled boots",
    "LongDesc": "A pair of knee high black boots with a 5 inch heel and 1 inch platform. Red stars dangle from the zipper.",
    "Slot": "Shoes", "Restrict": ["Shoes"], "Color": "black", "Price": 125, "Style": "RARE", "Type" : "CLOTHING",
    "WearEffect": {"Femininity": [0, 5, 50]}, "Category" : [ "Gothic Lolita", "Sexy Dancer" ]
};

App.Data.Clothes["black platform mary janes"] = { // +15
    "Name": "black platform mary janes", "ShortDesc": "a pair of {COLOR} platform mary janes",
    "LongDesc": "These black platform shoes have Have red stars for the buckles at the ankles and a chunky platform heel. Difficult to walk in but sexy.",
    "Slot": "Shoes", "Restrict": ["Shoes"], "Color": "black", "Price": 200, "Style": "RARE", "Type" : "CLOTHING",
    "WearEffect": {"Femininity": [0, 10, 70]}, "Category" : [ "Gothic Lolita" ]
};

// BUTT SLOT

// PENIS SLOT

// WEAPON SLOT (huh?)

