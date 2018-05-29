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

// NIPPLES SLOT

// BRA SLOT
App.Data.Clothes["luxurious black bra"] = { // +20
	Name: "luxurious black bra",
	ShortDesc: "a {COLOR} strapless lace bra",
	LongDesc: "Besides having expertly crafted sexy lace, this bra can support quite a generous bust without straps and without covering cleavage area. It is ideal for wearing with dresses with uncovered shoulders and deep cleavage.",
	Slot: "Bra", Restrict: ["Bra"],
	Color: "black", Style: "LEGENDARY", Type: "CLOTHING",
	WearEffect: [ "FEMININE_CLOTHING", "SEXY_CLOTHING" ],
	Category : [ "Slutty Lady" ],
	PriceAdjustment: 2
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
	Category : [ "Slutty Lady" ],
	PriceAdjustment: 2
};

// STOCKINGS SLOT
App.Data.Clothes["luxurious black stockings"] = { // +20
	Name: "luxurious black stockings",
	ShortDesc: "a pair of {COLOR} stockings with intricate pattern",
	LongDesc: "These stockings end halfway between knee and crotch, leaving enough skin to expose under a miniskirt or through a dress cut. They seem to have combination of several patterns of different scale, first coarse, then finer, then even finer, you aren't even sure you can see the finest. This creates almost hypnotic effect, drawing eyes to the legs of the wearer.",
	Slot: "Stockings", Restrict: ["Stockings"],
	Color: "black", Style: "LEGENDARY", Type: "CLOTHING",
	WearEffect: [ "FEMININE_CLOTHING", "SEXY_CLOTHING" ],
	Category : [ "Slutty Lady" ],
	PriceAdjustment: 2
};

// SHIRT SLOT

// PANTS SLOT

// DRESS SLOT
App.Data.Clothes["luxurious black evening gown"] = { // +40
	Name: "luxurious black evening gown",
	ShortDesc: "a {COLOR} full-length silk evening gown",
	LongDesc: "This dress looks worth of a queen. It's strapless with a large cleavage, requiring a very specific type of bra to look its best. The low edge almost touches the floor, but one deep cut on the side, almost to panties, ensures that the wearer's legs will not be hidden from the public. A dozen small diamonds decorate the area around cleavage, completing feeling of luxury.",
	Slot: "Dress", Restrict: ["Shirt", "Pants", "Dress", "Costume"],
	Color: "black", Style: "LEGENDARY", Type: "ONE PIECE",
	WearEffect: [ "FEMININE_CLOTHING", "SEXY_CLOTHING" ],
	ActiveEffect : [ "FLIRTY" ],
	Category : [ "Slutty Lady" ],
	PriceAdjustment: 2
};

// COSTUME SLOT

// SHOES SLOT
App.Data.Clothes["luxurious black high heels"] = { // +20
	Name: "luxurious black high heels",
	ShortDesc: "a pair of {COLOR} high-heeled shoes",
	LongDesc: "The heels of these shoes seem to be of ideal height: catching eyes, but far from ridiculous heels of \"bimbo\" shoes. The craftsmanship is immaculate, and several small diamonds are an excellent finishing touch.",
	Slot: "Shoes", Restrict: ["Shoes"],
	Color: "black", Style: "LEGENDARY", Type: "CLOTHING",
	WearEffect: [ "FEMININE_CLOTHING" ],
	Category : [ "Slutty Lady" ],
	PriceAdjustment: 2
};

// BUTT SLOT
App.Data.Clothes["luxurious butt plug"] = { // +12
	Name: "luxurious butt plug",
	ShortDesc: "a thick {COLOR} bull plug decorated with ruby",
	LongDesc: "The perfect accessory for a kinky lady. Wear it to a ball, to a wedding, to a casual promenade. No-one will guess! Well, depending on your reputation, they may guess, but they will never know for sure. And when the time comes, your butt is ready for sex! This one is made of material unknown to you, but it feels unbelievably nice. The base is encrusted with a large ruby.",
	Slot: "Butt", Restrict: ["Butt"],
	Color: "black", Style: "LEGENDARY", Type: "ACCESSORY",
	WearEffect: [ "PERVERTED_CLOTHING", "GAPE_TRAINING" ],
	Category : [ "Slutty Lady" ],
	PriceAdjustment: 2
};

// PENIS SLOT
App.Data.Clothes["luxurious chastity cage"] = { // +12
	Name: "luxurious chastity cage",
	ShortDesc: "a high-quality metal chastity cage",
	LongDesc: "This chastity cage is made from the finest steel by the finest craftsman. Its constructions ensures not only that the wearer will not escape, but also that it will not damage him. The sheer value of this thing means that whoever locked the wearer did that consensually, and the cage itself is a loving gift.",
	Slot: "Penis", Restrict: ["Penis"],
	Color: "silvery", Style: "LEGENDARY", Type: "ACCESSORY", Locked: true,
	WearEffect: [ "PERVERTED_CLOTHING" ],
	Category : [ "Slutty Lady", "BDSM" ],
	PriceAdjustment: 2
};


// WEAPON SLOT (huh?)

