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
App.Data.Clothes["collar"] = { // +3
    "Name": "collar", "ShortDesc": "a leather slave collar",
    "LongDesc": "This thick leather collar is worn to remind everyone that the wearer is a slave.",
    "Slot": "Neck", "Restrict": ["Neck"], "Color": "black", "Price": 200, "Style": "COMMON", "Type" : "ACCESSORY", "Locked": 1,
    "WearEffect": {"WillPower": [0, -5, 50], "Perversion": [0, 5, 30]}, "Category" :  [ "BDSM" ]
};

// NIPPLES SLOT
App.Data.Clothes["nipple rings"] = { // +9
    "Name": "nipple rings", "ShortDesc": "a pair of silver nipple rings joined by a chain",
    "LongDesc": "These rings are connected by a chain that is designed to torment and tug on the wearers nipples.",
    "Slot": "Nipples", "Restrict": ["Nipples"], "Color": "silver", "Price": 200, "Style": "RARE", "Type" : "ACCESSORY",
    "WearEffect": {"WillPower": [0, -5, 70], "Perversion": [0, 5, 40]}, "Category" :  [ "BDSM" ]
};

App.Data.Clothes["nipple clamps"] = { // +6
    "Name": "nipple clamps", "ShortDesc": "a pair of silver nipple clamps",
    "LongDesc": "These sterling silver nipple clamps are designed to inflict punishment... or perhaps arousal?",
    "Slot": "Nipples", "Restrict": ["Nipples"], "Color": "silver", "Price": 100, "Style": "UNCOMMON", "Type" : "ACCESSORY",
    "WearEffect": {"WillPower": [0, -5, 80], "Perversion": [0, 5, 30]}, "Category" :  [ "BDSM" ]
};

// BRA SLOT

// CORSET SLOT
App.Data.Clothes["training corset"] = { // +10
    "Name": "training corset", "ShortDesc": "a whale boned {COLOR} training corset",
    "LongDesc": "This garment borders on a torture device. It's designed to slim and shape a woman's waist and push up her bust.",
    "Slot": "Corset", "Restrict": ["Corset"], "Color": "black", "Price": 200, "Style": "UNCOMMON", "Type" : "ACCESSORY",
    "WearEffect": {"Femininity": [0, 5, 50], "Waist": [0, -20, 10]}, "Category" :  [ "BDSM" ]
};

App.Data.Clothes["bondage corset"] = { // +15
    "Name": "bondage corset", "ShortDesc": "a steel boned {COLOR} leather bondage corset",
    "LongDesc": "This corset is made of strong leather and boned with steel. It has various straps and locks to ensure it must be worn at all times.",
    "Slot": "Corset", "Restrict": ["Corset"], "Color": "black", "Price": 400, "Style": "RARE", "Type" : "ACCESSORY",
    "WearEffect": {"Femininity": [0, 5, 50], "Waist": [0, -25, 0]}, "Category" :  [ "Pirate Slut", "BDSM" ]
};

// PANTY SLOT

// STOCKINGS SLOT

// SHIRT SLOT

// PANTS SLOT

// DRESS SLOT

// COSTUME SLOT

// SHOES SLOT
App.Data.Clothes["shiny knee boots"] = { // +10
    "Name": "shiny knee boots", "ShortDesc": "a shiny pair of high heeled knee-high {COLOR} leather boots",
    "LongDesc": "These fashionable leather boots are polished to a shine. Very tall and slightly intimidating.",
    "Slot": "Shoes", "Restrict": ["Shoes"], "Color": "black", "Price": 250, "Style": "UNCOMMON", "Type" : "CLOTHING",
    "WearEffect": {"Femininity": [0, 8, 40]}, "Category" :  [ "Pirate Slut", "BDSM" ]
};

// BUTT SLOT
App.Data.Clothes["large plug"] = { // +9
    "Name": "large plug", "ShortDesc": "a thick {COLOR} anal plug",
    "LongDesc": "The perfect accessory for the horny masochist, or just good for keeping your arse ready to be used.",
    "Slot": "Butt", "Restrict": ["Butt"], "Color": "black", "Price": 200, "Style": "RARE", "Type" : "ACCESSORY",
    "WearEffect": {"Perversion": [0, 10, 70], "AssFucking" : [10, 10, 80]}, Category : [ "BDSM" ]
};

// PENIS SLOT
App.Data.Clothes["chastity cage"] = { // +3
    "Name": "chastity cage", "ShortDesc": "a metal and leather chastity device",
    "LongDesc": "This cruel device constricts and crushes your genitals. Wearing it is not only painful but probably bad for your health.",
    "Slot": "Penis", "Restrict": ["Penis"], "Color": "black", "Price": 300, "Style": "COMMON", "Type" : "ACCESSORY", "Locked": 1,
    "WearEffect": { "Perversion": [0, 10, 30], "Penis": [0, -15, 0], "Balls": [0, -15, 0]}, Category : [ "BDSM" ]
};

// WEAPON SLOT (huh?)

