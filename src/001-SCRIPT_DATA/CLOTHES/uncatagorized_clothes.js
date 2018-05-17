App = App || { Data: { }, Entity: { } };
App.Data.Clothes = App.Data.Clothes || { };

// STYLE TABLE
// TYPE         COMMON  UNCOMMON    RARE    LEGENDARY
// ACCESSORY    3       6           9       12
// CLOTHING     5       10          15      20
// ONE PIECE    10      20          30      40

// WIG SLOT
App.Data.Clothes["cheap wig"] = {
    "Name": "cheap wig", "ShortDesc": "a short {COLOR} wig",
    "LongDesc": "This cheap wig is made out of badly dyed horse hair.",
    "Slot": "Wig", "Restrict": ["Wig"], "Color": "black", "Style": "COMMON", "Type" : "ACCESSORY",
    "HairLength": 30, "HairStyle": "a short bob", "HairBonus": 30,
    "WearEffect": [ "FEMININE_CLOTHING" ]
};

App.Data.Clothes["wig"] = {
    "Name": "wig", "ShortDesc": "a long {COLOR} wig",
    "LongDesc": "This wig is made from human hair and of quite a fine quality.",
    "Slot": "Wig", "Restrict": ["Wig"], "Color": "blond", "Style": "UNCOMMON", "Type" : "ACCESSORY",
    "HairLength": 60, "HairStyle": "loose curls", "HairBonus": 60,
    "WearEffect": [ "FEMININE_CLOTHING" ]
};

// HAT SLOT
App.Data.Clothes["bonnet"] = {
    "Name": "bonnet", "ShortDesc": "a frilly {COLOR} bonnet",
    "LongDesc": "This frilly little bonnet is a dainty accessory sure to give off a girlish demeanor.",
    "Slot": "Hat", "Restrict": ["Hat"], "Color": "pink", "Style": "RARE", "Type" : "ACCESSORY",
    "WearEffect": [ "FEMININE_CLOTHING" ]
};

App.Data.Clothes["cat ears"] = {
    "Name": "cat ears", "ShortDesc": "a pair of fluffy {COLOR} cat ears",
    "LongDesc": "These large furry cat ears are attached by a headband to be worn.",
    "Slot": "Hat", "Restrict": ["Hat"], "Color": "black", "Style": "RARE", "Type" : "ACCESSORY"
};

// NECK SLOT
App.Data.Clothes["choker"] = {
    "Name": "choker", "ShortDesc": "a {COLOR} silk choker",
    "LongDesc": "This thin choker is made of silk and designed to accentuate a delicate neck.",
    "Slot": "Neck", "Restrict": ["Neck"], "Color": "black", "Style": "COMMON", "Type" : "ACCESSORY",
    "WearEffect": [ "FEMININE_CLOTHING" ]
};

// NIPPLES SLOT

// BRA SLOT
App.Data.Clothes["chemise"] = {
    "Name": "chemise", "ShortDesc": "a plain {COLOR} cotton chemise",
    "LongDesc": "A brief slip designed to cover the breasts under clothes. Not very supportive at all.",
    "Slot": "Bra", "Restrict": ["Bra"], "Color": "white", "Style": "COMMON", "Type" : "CLOTHING",
    "WearEffect": [ "FEMININE_CLOTHING" ]
};

App.Data.Clothes["cotton bra"] = {
    "Name": "cotton bra", "ShortDesc": "a {COLOR} cotton bra trimmed with lace",
    "LongDesc": "A regular sized bra designed to contain and support female breasts. It offers modest support and a small amount of sexual appeal.",
    "Slot": "Bra", "Restrict": ["Bra"], "Color": "white", "Style": "COMMON", "Type" : "CLOTHING",
    "WearEffect": [ "FEMININE_CLOTHING" ]
};

App.Data.Clothes["silk bra"] = {
    "Name": "silk bra", "ShortDesc": "a sexy {COLOR} silk bra with lace trim",
    "LongDesc": "This expensive undergarment is designed to accentuate and display a woman's chest with lustful appeal.",
    "Slot": "Bra", "Restrict": ["Bra"], "Color": "black", "Style": "COMMON", "Type" : "CLOTHING",
    "WearEffect": [ "FEMININE_CLOTHING" ]
};

// CORSET SLOT
App.Data.Clothes["fashion corset"] = {
    "Name": "fashion corset", "ShortDesc": "a tightly bound {COLOR} silk and lace corset",
    "LongDesc": "This corset is made from silk and lace, more fashionable than functional, but it still tightly binds your waist and lifts your breasts.",
    "Slot": "Corset", "Restrict": ["Corset"], "Color": "black", "Price": 200,"Style": "UNCOMMON", "Type" : "ACCESSORY",
    "WearEffect": [ "FEMININE_CLOTHING", "WAIST_CINCHING" ]
};

// PANTY SLOT
App.Data.Clothes["cotton bloomers"] = {
    "Name": "cotton bloomers", "ShortDesc": "a pair of {COLOR} cotton bloomers",
    "LongDesc": "The most basic of undergarments. No frills and almost zero sex appeal.",
    "Slot": "Panty", "Restrict": ["Panty"], "Color": "white", "Style": "COMMON", "Type" : "CLOTHING",
    "WearEffect": [ "FEMININE_CLOTHING" ]
};

App.Data.Clothes["sheer bloomers"] = {
    "Name": "sheer bloomers", "ShortDesc": "a pair of sheer {COLOR} silk and lace bloomers",
    "LongDesc": "Made from sheer silk, they're smooth against your skin and decidedly sexy.",
    "Slot": "Panty", "Restrict": ["Panty"], "Color": "black", "Style": "COMMON", "Type" : "CLOTHING",
    "WearEffect": [ "FEMININE_CLOTHING" ]
};

// STOCKINGS SLOT
App.Data.Clothes["cotton stockings"] = {
    "Name": "cotton stockings", "ShortDesc": "a pair of {COLOR} cotton stockings",
    "LongDesc": "Basic stockings, held up with string ties.",
    "Slot": "Stockings", "Restrict": ["Stockings"], "Color": "white", "Style": "COMMON", "Type" : "CLOTHING",
    "WearEffect": [ "FEMININE_CLOTHING" ]
};

// SHIRT SLOT
App.Data.Clothes["cotton blouse"] = {
    "Name": "cotton blouse", "ShortDesc": "a {COLOR} cotton blouse",
    "LongDesc": "This simple cotton blouse is made from rough cotton.",
    "Slot": "Shirt", "Restrict": ["Shirt", "Dress", "Costume"], "Color": "white", "Style": "COMMON", "Type" : "CLOTHING",
    "WearEffect": [ "FEMININE_CLOTHING" ]
};

App.Data.Clothes["silk blouse"] = {
    "Name": "silk blouse", "ShortDesc": "a low cut {COLOR} silk blouse",
    "LongDesc": "This elegant silk blouse is cut daringly low.",
    "Slot": "Shirt", "Restrict": ["Shirt", "Dress", "Costume"], "Color": "white", "Style": "COMMON", "Type" : "CLOTHING",
    "WearEffect": [ "FEMININE_CLOTHING" ]
};

// PANTS SLOT
App.Data.Clothes["leather pants"] = {
    "Name": "leather pants", "ShortDesc": "a pair of {COLOR} leather pants",
    "LongDesc": "These leather pants are incredibly tight and designed to show off your ass.",
    "Slot": "Pants", "Restrict": ["Pants", "Dress", "Costume"], "Color": "black", "Style": "COMMON", "Type" : "CLOTHING"
};

App.Data.Clothes["leather shorts"] = {
    "Name": "leather shorts", "ShortDesc": "a pair of low rise {COLOR} leather shorts",
    "LongDesc": "These tight leather shorts ride up in all the right places.",
    "Slot": "Pants", "Restrict": ["Pants", "Dress", "Costume"], "Color": "black", "Style": "COMMON", "Type" : "CLOTHING"
};

// DRESS SLOT
App.Data.Clothes["cotton dress"] = {
    "Name": "cotton dress", "ShortDesc": "a {COLOR} cotton dress",
    "LongDesc": "This simple cotton dress is made from rough cotton.",
    "Slot": "Dress", "Restrict": ["Shirt", "Pants", "Dress", "Costume"], "Color": "blue", "Style": "COMMON", "Type" : "ONE PIECE",
    "WearEffect": [ "FEMININE_CLOTHING" ]
};
App.Data.Clothes["sundress"] = {
    "Name": "sundress", "ShortDesc": "a cute {COLOR} floral sundress",
    "LongDesc": "This soft sundress has a cute floral pattern that is exceptionally girly.",
    "Slot": "Dress", "Restrict": ["Shirt", "Pants", "Dress", "Costume"], "Color": "pink", "Style": "UNCOMMON", "Type" : "ONE PIECE",
    "WearEffect": [ "FEMININE_CLOTHING" ]
};
App.Data.Clothes["sexy dress"] = {
    "Name": "sexy dress", "ShortDesc": "a sexy {COLOR} mini dress",
    "LongDesc": "This daringly short dress hugs your body and lets everyone know it's for sale.",
    "Slot": "Dress", "Restrict": ["Shirt", "Pants", "Dress", "Costume"], "Color": "black", "Style": "UNCOMMON", "Type" : "ONE PIECE",
    "WearEffect": [ "FEMININE_CLOTHING" ], "ActiveEffect" : [ "FLIRTY" ]
};

// COSTUME SLOT


App.Data.Clothes["landlubber costume"] = {
    "Name": "landlubber costume", "ShortDesc": "A perverted {COLOR} school girl outfit",
    "LongDesc": "This costume consists of a two-piece outfit with accessories that is designed to mimic a perverts dream of a school uniform. It has a skirt that has holes where the anus and penis are "+
    "as well as on the shirt where the cutouts are over the nipples. And the material of it goes invisible when it becomes wet, which is a favourite of the crew.",
    "Slot": "Costume", "Restrict": ["Shirt", "Pants", "Dress", "Costume"], "Color": "white", "Style": "COMMON", "Type" : "ONE PIECE",
    "WearEffect": [ "FEMININE_CLOTHING", "PERVERTED_CLOTHING" ]
};

App.Data.Clothes["pathetic loser costume"] = {
    "Name": "pathetic loser costume", "ShortDesc": "A perverted {COLOR} clown outfit",
    "LongDesc": "This costume consists of a full-blown clown outfit including red glue on nose. It makes one look ridiculous but also sexy since it is tight at the right places so that it shows of "+
    "one's assets. Also, there are undoubtedly some people that have always dreamed of fucking a clown, those sick bastards.",
    "Slot": "Costume", "Restrict": ["Shirt", "Pants", "Dress", "Costume"], "Color": "red", "Style": "COMMON", "Type" : "ONE PIECE",
    "WearEffect": [ "FEMININE_CLOTHING", "PERVERTED_CLOTHING" ]
};



App.Data.Clothes["maid costume"] = {
    "Name": "maid costume", "ShortDesc": "a frilly {COLOR} maid uniform",
    "LongDesc": "This is a typical maid costume that has been altered to showcase your ass and chest.",
    "Slot": "Costume", "Restrict": ["Shirt", "Pants", "Dress", "Costume"], "Color": "black", "Style": "UNCOMMON", "Type" : "ONE PIECE",
    "WearEffect": [ "FEMININE_CLOTHING", "KINKY_CLOTHING" ], "ActiveEffect": [ "MAIDS_PROWESS" ]
};

// SHOES SLOT
App.Data.Clothes["worn boots"] = {
    "Name": "worn boots", "ShortDesc": "a worn pair of {COLOR} boots",
    "LongDesc": "These boots are decidedly ugly. More functional than fashionable.",
    "Slot": "Shoes", "Restrict": ["Shoes"], "Color": "brown", "Style": "COMMON", "Type" : "CLOTHING"
};

App.Data.Clothes["short heels"] = {
    "Name": "short heels", "ShortDesc": "a pair of short {COLOR} heels",
    "LongDesc": "These dainty shoes have a small kitten heel. Not too hard to walk in.",
    "Slot": "Shoes", "Restrict": ["Shoes"], "Color": "black", "Style": "COMMON", "Type" : "CLOTHING",
    "WearEffect": [ "FEMININE_CLOTHING" ]
};

App.Data.Clothes["medium heels"] = {
    "Name": "medium heels", "ShortDesc": "a pair of medium {COLOR} heels",
    "LongDesc": "These shoes have a medium height heel that causes you to roll your ass as you walk.",
    "Slot": "Shoes", "Restrict": ["Shoes"], "Color": "black", "Style": "COMMON", "Type" : "CLOTHING",
    "WearEffect": [ "FEMININE_CLOTHING" ]
};

// BUTT SLOT
App.Data.Clothes["cat tail"] = {
    "Name": "cat tail", "ShortDesc": "a long furry {COLOR} cat tail anal plug",
    "LongDesc": "This large anal plug has a long furry cat tail attached to it. Wearing it will loosen your asshole and probably attract animal lovers.",
    "Slot": "Butt", "Restrict": ["Butt"], "Color": "black", "Style": "COMMON", "Type" : "ACCESSORY",
    "WearEffect": [ "PERVERTED_CLOTHING", "GAPE_TRAINING" ]
};

// PENIS SLOT
App.Data.Clothes["cock ribbon"] = {
    "Name": "cock ribbon", "ShortDesc": "a cute little {COLOR} ribbon",
    "LongDesc": "This dainty little ribbon is meant to be tied on a sissy clit for decoration.",
    "Slot": "Penis", "Restrict": ["Penis"], "Color": "pink", "Style": "COMMON", "Type" : "ACCESSORY",
    "WearEffect": [ "PERVERTED_CLOTHING" ]
};

// WEAPON SLOT (huh?)
App.Data.Clothes["worn machete"] = {
    "Name": "worn machete", "ShortDesc": "@@color:purple;a well worn machete@@",
    "LongDesc": "This large blade is 32cm long and has a slightly curved angle to it. It's not really a knife, but more like an axe. In a fight you could use it similar to a short sword.",
    "Slot": "Weapon", "Restrict": ["Weapon"], "Color": "steel", "Style": "NONE", "Type" : "WEAPON",
    "WearEffect": [ ]
};
