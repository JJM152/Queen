// STYLE TABLE
// TYPE         COMMON  UNCOMMON    RARE    LEGENDARY
// ACCESSORY    3       6           9       12
// CLOTHING     5       10          15      20
// ONE PIECE    10      20          30      40

// WIG SLOT

// HAT SLOT

// NECK SLOT

// NIPPLES SLOT

// BRA SLOT
App.Data.Clothes["luxurious black bra"] = { // +20
	Name: "luxurious black bra",
	ShortDesc: "{COLOR} strapless lace bra",
	LongDesc: "Besides having expertly crafted sexy lace, this bra can support quite a generous bust without straps and without covering cleavage area. It is ideal for wearing with dresses with uncovered shoulders and deep cleavage.",
	Slot: "Bra", Restrict: ["Bra"],
	Color: "black", Style: "LEGENDARY", Type: "CLOTHING",
	WearEffect: [ "FEMININE_CLOTHING", "SEXY_CLOTHING" ],
	Category : [ "Slutty Lady" ]
};

// CORSET SLOT

// PANTY SLOT
App.Data.Clothes["luxurious black panties"] = { // +20
	Name: "luxurious black panties",
	ShortDesc: "{COLOR} satin lace panties",
	LongDesc: "These panties are a perfect combination of conservatism and sexiness. They are not panties that are pushed aside because the man is too horny to bother to take them of. These panties are removed in a richly decorated room, illuminated by candles, while orchestra can be faintly heard from the ball room.",
	Slot: "Panty", Restrict: ["Panty"],
	Color: "black", Style: "LEGENDARY", Type: "CLOTHING",
	WearEffect: [ "FEMININE_CLOTHING", "SEXY_CLOTHING" ],
	Category : [ "Slutty Lady" ]
};

// STOCKINGS SLOT
App.Data.Clothes["luxurious black stockings"] = { // +20
	Name: "luxurious black stockings",
	ShortDesc: "pair of {COLOR} stockings with an intricate pattern",
	LongDesc: "These stockings end halfway between knee and crotch, leaving enough skin to expose under a miniskirt or through a dress cut. They seem to have combination of several patterns of different scale, first coarse, then finer, then even finer, you aren't even sure you can see the finest. This creates almost hypnotic effect, drawing eyes to the legs of the wearer.",
	Slot: "Stockings", Restrict: ["Stockings"],
	Color: "black", Style: "LEGENDARY", Type: "CLOTHING",
	WearEffect: [ "FEMININE_CLOTHING", "SEXY_CLOTHING" ],
	Category : [ "Slutty Lady" ]
};

// SHIRT SLOT

// PANTS SLOT

// DRESS SLOT
App.Data.Clothes["luxurious black evening gown"] = { // +40
	Name: "luxurious black evening gown",
	ShortDesc: "{COLOR} full-length silk evening gown",
	LongDesc: "\
	This dress looks worthy of a queen. It's strapless with a large plunging neckline, requiring a very specific type of bra \
	to look its best. It's low hem almost touches the floor, but one deep slit in the side, almost to panties, ensures that \
	the wearer's legs are quite on display. A dozen small gemstones decorate the area around cleavage, completing feeling of luxury.\
	",
	Slot: "Dress", Restrict: ["Shirt", "Pants", "Dress", "Costume"],
	Color: "black", Style: "LEGENDARY", Type: "ONE PIECE",
	WearEffect: [ "SEXY_CLOTHING", "SEXY_CLOTHING" ],
	ActiveEffect : [ "FLIRTY" ],
	Category : [ "Slutty Lady" ],
	InMarket: false
};

// COSTUME SLOT
App.Data.Clothes["sexy showgirl outfit"] = { // +40
    Name: "sexy showgirl outfit", ShortDesc: "sexy {COLOR} showgirl outfit",
    LongDesc: "\
	A classic showgirl costume, albiet one designed to be taken off quickly and in pieces. It comes complete \
	with a pair of large fans for dancing with.\
    ",
    Slot: "Costume", Restrict : [ "Shirt", "Pants", "Dress", "Costume" ],
    Color: "red", Style : "LEGENDARY", Type : "ONE PIECE",
    WearEffect: [ "SEXY_CLOTHING" ],
    ActiveEffect : [ "MAJOR_STRIPPERS_ALLURE"],
    Category : [ "Slutty Lady", "Sexy Dancer"],
    InMarket : false
};

// SHOES SLOT
App.Data.Clothes["luxurious black high heels"] = { // +20
	Name: "luxurious black high heels",
	ShortDesc: "pair of {COLOR} designer heels",
	LongDesc: "\
	The heels of these shoes seem to be of ideal height: catching eyes, but far from ridiculous heels of 'bimbo' shoes. \
	The craftsmanship is immaculate, and several small diamonds are an excellent finishing touch.",
	Slot: "Shoes", Restrict: ["Shoes"],
	Color: "black", Style: "LEGENDARY", Type: "CLOTHING",
	WearEffect: [ "SEXY_CLOTHING" ],
	ActiveEffect: ["FANCY_MOVES"],
	Category : [ "Slutty Lady", "Sexy Dancer" ],
	InMarket: false
};

// BUTT SLOT
App.Data.Clothes["luxurious butt plug"] = { // +12
	Name: "luxurious butt plug",
	ShortDesc: "thick {COLOR} butt plug decorated with gems",
	LongDesc: "\
	The perfect accessory for a kinky lady. Wear it to a ball, to a wedding, to a casual promenade. No-one will guess! \
	Well, depending on your reputation, they may guess, but they will never know for sure. And when the time comes, \
	your butt is ready for sex! This one is made of material unknown to you, but it feels unbelievably nice. \
	The base is encrusted with a large gemstone to add an extra eye-catching appeal.\
	",
	Slot: "Butt", Restrict: ["Butt"],
	Color: "black", Style: "LEGENDARY", Type: "ACCESSORY",
	WearEffect: [ "PERVERTED_CLOTHING", "GAPE_TRAINING" ],
	Category : [ "Slutty Lady" ],
	InMarket: false
};

// PENIS SLOT
App.Data.Clothes["luxurious chastity cage"] = { // +12
	Name: "luxurious chastity cage",
	ShortDesc: "high-quality metal chastity cage",
	LongDesc: "This chastity cage is made from the finest steel by the finest craftsman. Its constructions ensures not only that the wearer will not escape, but also that it will not damage him. The sheer value of this thing means that whoever locked the wearer did that consensually, and the cage itself is a loving gift.",
	Slot: "Penis", Restrict: ["Penis"],
	Color: "silvery", Style: "LEGENDARY", Type: "ACCESSORY", Locked: false,
	WearEffect: [ "PERVERTED_CLOTHING" ],
	Category : [ "Slutty Lady", "BDSM" ],
	InMarket: false
};


// WEAPON SLOT (huh?)
