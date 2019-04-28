/** ALCOHOL */
App.Data.Food["grog"] = {
    "Name": "grog",
    "ShortDesc": "Low Quality Grog",
    "LongDesc": "It's the typical alcoholic drink that pirates and mariners drink on long trips. It'll keep you hydrated and won't make you too sick.",
    "Message": "You tip back the crude swill. It has an unpleasant taste.",
    "Type": "food",
    "Charges": 1,
    "Effects" : [ "LIGHT_ALCOHOL" ]
};
App.Data.Food["beer"] = {
    "Name": "beer",
    "ShortDesc": "Common Beer",
    "LongDesc": "The typical beverage of choice for most men and some women. It's refreshingly cool and with a malty aftertaste.",
    "Message": "You tip back the beer and have a drink. It's refreshing.",
    "Type": "food",
    "Charges": 1,
    "Effects" : [ "LIGHT_ALCOHOL" ]
};
App.Data.Food["smugglers ale"] = {
    "Name": "smugglers ale",
    "ShortDesc": "A pint of Smuggler's Ale",
    "LongDesc": "Only brewed and sold on Golden Isle, this dark ale has a tangy, almost fruit after taste.",
    "Message": "You tip back the ale and have a drink. It's refreshing.",
    "Type": "food",
    "Charges": 1,
    "Effects" : [ "LIGHT_ALCOHOL", "ENERGY_COMMON" ]
};
App.Data.Food["cheap wine"] = {
    "Name": "cheap wine",
    "ShortDesc": "A bottle of cheap wine",
    "LongDesc": "Not the best quality wine, but palatable and in abundant supply.",
    "Message": "The wine has a deep red color and an almost sweet after taste.",
    "Type": "food",
    "Charges": 1,
    "Effects" : [ "LIGHT_ALCOHOL" ]
};

App.Data.Food["expensive wine"] = {
    "Name": "expensive wine",
    "ShortDesc": "A bottle of Lady Oliver's Reserve (1423)",
    "LongDesc": "This rather expensive beverage became well known several years ago both due to the quantity it was made in as well as for it's popularity with women. It's rare to see a bottle these days, and even rarer to not see it in some Noblewoman's cup.",
    "Message": "The wine is sweeter than treacle with a strong after taste reminiscent of cherries. It has more kick than you would imagine for such a sweet drink.",
    "Type": "food",
    "Charges": 1,
    "Effects" : [ "LIGHT_ALCOHOL", "FEMININITY_XP_RARE", "PERVERSION_XP_RARE", "BREAK_WILL_COMMON" ]
};

App.Data.Food["rum"] = {
    "Name": "rum",
    "ShortDesc": "A bottle of Captain Morganna's Spiced Rum",
    "LongDesc": "This cheap rum is mass produced in these islands by a purported 'Captain Morganna'. You've never heard of such a woman except in connection with her ubiquitous liquor.",
    "Message": "You tip back the bottle and have a drink. It burns going down and fills your stomach with fire.",
    "Type": "food",
    "Charges": 1,
    "Effects" : [ "HARD_ALCOHOL" ]
};

App.Data.Food["ol musky"] = {
    "Name": "ol musky",
    "ShortDesc": "A bottle of Ol' Musky (unknown vintage)",
    "LongDesc": "A world renown whisky, although for what reasons you can't tell. One thing's for sure, a bottle or two will definitely loosen your tongue.",
    "Message": "You tip back the bottle and have a drink. It burns going down and fills your stomach with fire and your mind with delusions of grandeur",
    "Type": "food",
    "Charges": 1,
    "Effects" : [ "HARD_ALCOHOL", "SEDUCTION_XP_COMMON" ]
};

App.Data.Food["fortified wine"] = {
    "Name": "fortified wine",
    "ShortDesc": "@@color:purple;A dusty bottle of fortified wine@@",
    "LongDesc": "This dusty old bottle has an almost illegible label, but you can make out that it appears to be extremely fortified (highly alcoholic) wine",
    "Message": "You tip back the bottle and have a drink. It burns going down and fills your stomach with fire. Holy shit that's strong!",
    "Type": "food",
    "InMarket" : false,
    "Quest" : true,
    "Charges": 1,
    "Effects" : [ "HARD_ALCOHOL" ],
    "Price": 500
};


App.Data.Food["cider"] = {
    "Name": "cider",
    "ShortDesc": "Cider",
    "LongDesc": "A low-potency cider fermented from pressed apples.",
    "Message": "The cider goes down with a pleasantly sour taste and leaves you with a mild warming sensation.",
    "Type": "food",
    "Charges": 1,
    "Effects" : [ "LIGHT_ALCOHOL" ]
};
// PIRATEY??? DRINKS - Courtesy of anonymous
App.Data.Food["arrack"] = {
    "Name": "arrack",
    "ShortDesc": "Arrack",
    "LongDesc": "A milky-colored coconut-derived beverage cut with cream and sugarcane, with moderate alchoholic qualities.",
    "Message": "The creamy-white beverage goes down smoothly with a milky, sweet flavor and a little bit of kick.",
    "Type": "food",
    "Charges": 1,
    "Effects" : [ "LIGHT_ALCOHOL" ]
};
App.Data.Food["flip"] = {
    "Name": "flip",
    "ShortDesc": "Flip",
    "LongDesc": "An egg-based drink beaten with sugar, mixed with rum and spiced with nutmeg, heated with a hot iron and served in a small glass.",
    "Message": "Smooth, creamy and sweet with a generous amount of froth, you savor the drink and feel pleasantly warmed by it.",
    "Type": "food",
    "Charges": 1,
    "Effects" : [ "LIGHT_ALCOHOL" ]
};
App.Data.Food["bumbo"] = {
    "Name": "bumbo",
    "ShortDesc": "Bumbo",
    "LongDesc": "Grog's better cousin, bumbo is a spicier, higher-quality mixture of rum, lime, brown sugar, cinnamon and nutmeg.",
    "Message": "You down the dark liquor and feel its smooth-yet-firey kick immediately. The flavor of sweet spice lingers nicely on your tongue.",
    "Type": "food",
    "Charges": 1,
    "Effects" : [ "HARD_ALCOHOL" ]
};
App.Data.Food["cordial waters"] = {
    "Name": "cordial waters",
    "ShortDesc": "Cordial Waters",
    "LongDesc": "A distilled drink said to fortify one's spirit, ward off disease and settle the stomach. It's rumored to be an aphrodisiac.",
    "Message": "You drink the spicy beverage and feel a gentle embering in your chest. You feel a little more vigorous (and a little looser).",
    "Type": "food",
    "Charges": 1,
    "Effects" : [ "LIGHT_ALCOHOL", "ENERGY_UNCOMMON" ]
};
App.Data.Food["orgeat"] = {
    "Name": "orgeat",
    "ShortDesc": "Orgeat",
    "LongDesc": "A distilled drink similar to rum, but made from almonds, sugar and orange blossom.",
    "Message": "You toss back the firey spirit, tasting its nutty, woody flavor. It lights up well going down.",
    "Type": "food",
    "Charges": 1,
    "Effects" : [ "HARD_ALCOHOL" ]
};
App.Data.Food["buttered toddy"] = {
    "Name": "buttered toddy",
    "ShortDesc": "Buttered Toddy",
    "LongDesc": "A hot drink of rum, generous amounts of butter, boiling water, honey and lemon juice.",
    "Message": "The tasty, soothing dessert drink fills you up with warmth and a delicious, contented feeling.",
    "Type": "food",
    "Charges": 1,
    "Effects" : [ "LIGHT_ALCOHOL", "NUTRITION_COMMON", "NUTRITION_XP_COMMON" ]
};
App.Data.Food["whip syllabub"] = {
    "Name": "whip syllabub",
    "ShortDesc": "Whip Syllabub",
    "LongDesc": "Derived from fortified white wine, this sugary dessert drink adds a lemony twist and heavy cream.",
    "Message": "You enjoy a frothy serving of heavily-sweetened wine, cream and lemon in a tasty gulp, leaving hints of citrus and nutmeg.",
    "Type": "food",
    "Charges": 1,
    "Effects" : [ "LIGHT_ALCOHOL", "NUTRITION_COMMON", "NUTRITION_XP_COMMON" ]
};
App.Data.Food["birch wine"] = {
    "Name": "birch wine",
    "ShortDesc": "Birch Wine",
    "LongDesc": "A honey-colored liquer wine fermented from birch sap, sweetened and flavorfully spiced with cinnamon and finely chopped raisin.",
    "Message": "Your tongue is pleased by the syrupy overtones of this delicious spiced wine, which leaves you with a toasty warmth.",
    "Type": "food",
    "Charges": 1,
    "Effects" : [ "LIGHT_ALCOHOL" ]
};
/** NORMAL FOOD **/
App.Data.Food["meat and beans"] = {
    "Name": "meat and beans",
    "ShortDesc": "A piece of meat with some beans in a bowl",
    "LongDesc": "It actually smells really nice and probably fills you up quite well.",
    "Message": "The meat is overcooked and the beans are hard but it tastes really good compared to what you have been eating so far.",
    "Type": "food",
    "Charges": 1,
    "Effects": [ "NUTRITION_RARE", "NUTRITION_XP_RARE" ]
};
App.Data.Food["mystery stew"] = {
    "Name": "mystery stew",
    "ShortDesc": "A deep brown stew of unidentifiable origin",
    "LongDesc": "This stew is so dark as to practically be mud. It has bits of unidentifiable meat and vegetables (you think?) floating in it.",
    "Message": "The stew tastes surprisingly better than you thought and certainly better than it looks.",
    "Type": "food",
    "Charges": 1,
    "Effects": [ "NUTRITION_UNCOMMON", "NUTRITION_XP_UNCOMMON" ]
};
App.Data.Food["bread crust"] = {
    "Name": "bread crust",
    "ShortDesc": "A stale crust of bread",
    "LongDesc": "This piece of bread has seen better days... about 5 days ago. It's still edible however.",
    "Message": "You bite into the bread. It's as hard as a rock, but eventually you manage to chew and swallow it.",
    "Type": "food",
    "Charges": 1,
    "Effects" : [ "SNACK" ]
};
/** WHOLESOME FOOD */
App.Data.Food["bread and cheese"] = {
    "Name": "bread and cheese",
    "ShortDesc": "A serving of bread with cheese",
    "LongDesc": "Standard and relatively wholesome food.",
    "Message": "The bread has a very yeasty taste and the cheese a sharp bite.",
    "Type": "food",
    "Charges": 1,
    "Effects" : [ "LIGHT_WHOLESOME_MEAL" ]
};
App.Data.Food["meat pie"] = {
    "Name": "meat pie",
    "ShortDesc": "A beef and cheese meat pie",
    "LongDesc": "Popular hand-held food commonly sold at pubs or on the side of the street. The meat is of dubious origin, but delicious nonetheless..",
    "Message": "The meat pie is warm and fatty on you platte while the crust is slightly hard. An errant trail of gravy drips down your lip and you wipe it away.",
    "Type": "food",
    "Charges": 1,
    "Effects" : [ "LIGHT_WHOLESOME_MEAL" ]
};
App.Data.Food["roast fish"] = {
    "Name": "roast fish",
    "ShortDesc": "A roasted fish",
    "LongDesc": "A local type of fish, roasted on a stick.",
    "Message": "You take a bite of the fish and chew. It's bland, but wholesome.",
    "Type": "food",
    "Charges": 1,
    "Effects" : [ "WHOLESOME_MEAL" ]
};

App.Data.Food["apple tart"] = {
    "Name": "apple tart",
    "ShortDesc": "A fresh apple tart",
    "LongDesc": "A pastry made of baked apples and dusted with powdered sugar",
    "Message": "The sweetness of the apples overpowers the sugary outside of this pastry. It's delicious and fills you with energy.",
    "Type": "food",
    "Charges": 1,
    "Effects" : [ "WHOLESOME_MEAL", "ENERGY_COMMON" ]
};

App.Data.Food["hardtack"] = {
    "Name": "hardtack",
    "ShortDesc": "A piece of hardtack",
    "LongDesc": "A well preserved biscuit. Plain, but nutritious and filling.",
    "Message": "The dryness of the hardtack makes it difficult to consume without first soaking it in water. While boring to eat, ultimately you feel yourself refreshed.",
    "Type": "food",
    "Charges": 1,
    "Effects" : [ "WHOLESOME_MEAL", "ENERGY_COMMON" ]
};

/** MAGICAL FOOD */
App.Data.Food["slave gruel"] = {
    "Name": "slave gruel",
    "ShortDesc": "Slave gruel mixed with semen",
    "LongDesc": "\
        This watery looking gruel smells and tastes disgusting. The crew has 'donated' some extra nutrition to it.\
        ",
    "Message": "\
        You wrinkle your nose and drink down the disgusting drool. You gag occasionally as thick clumps of rancid \
        cum slide down your throat.\
        ",
    "Type": "food",
    "Charges": 1,
    "Effects" : [  
        "UNWHOLESOME_MEAL", 
        "SLAVE_GRUEL" 
    ]
};

App.Data.Food["red plum"] = {
    "Name": "red plum",
    "ShortDesc": "A dazzlingly bright red plum",
    "LongDesc": "This unusual plum is bright red and cool to the touch. It's so ripe that it practically oozes sweetness.",
    "Message": "You bite into the plum and instantly you are overcome with a wave of euphoria. You momentarily lose yourself as the sweet juices drip down your chin.",
    "Type": "food",
    "Charges": 1,
    "Effects" : [ "PURGE_RARE", "HEAL_UNCOMMON", "NUTRITION_COMMON", "NUTRITION_XP_COMMON"]
};
App.Data.Food["pirates plunder"] = {
    "Name": "pirates plunder",
    "ShortDesc": "A flask of 'Pirates Plunder'",
    "LongDesc": "No one knows the origin of this legendary drink, but Pirates up and down the Lost Coast swear by it's effects. A single flask is said to turn the most pathetic land lubber into a half way decent pirate. Could that possibly be true?",
    "Message": "You tip back the flask and drink deeply of the 'Pirates Plunder'. The taste is like nothing you've had before, dark, stormy and violent.",
    "Type": "food",
    "Charges": 1,
    "Effects" : [   "NUTRITION_COMMON", "NUTRITION_XP_COMMON", "TOXICITY_UNCOMMON",
                    "SWASHBUCKLING_XP_RARE", "NAVIGATING_XP_RARE", "SAILING_XP_RARE" ]
};

App.Data.Food["ambrosia"] = {
    "Name": "ambrosia",
    "ShortDesc": "A dark green bottle of ambrosia",
    "LongDesc": "Ambrosia is known far and wide as the 'Food of the Gods'. Legends tell that it is brewed by Sea Nymphs in their under water caves, but how that is possible you have no idea.",
    "Message": "You uncork the bottle imbibe the potent brew. Words fail to describe how overwhelmingly good it tastes. You feel yourself filled with vigour and strength!",
    "Type": "food",
    "Charges": 1,
    "Effects" : [ "NUTRITION_LEGENDARY", "NUTRITION_XP_LEGENDARY", "PURGE_LEGENDARY", "HEAL_LEGENDARY", "BOLSTER_WILL_LEGENDARY"]
};

/** TF FOOD */
App.Data.Food["starfruit"] = {
    Name: "starfruit",
    ShortDesc: "Strange starfruit",
    LongDesc: "\
        This slightly pink starfruit is pulpy and contains many black seeds. It has a fragrant and intoxicating smell.\
        ",
    Message: "\
        You take a bite out of the starfruit and savor it's sweet, but citrus taste. You feel your body filling with energy.\
        ",
    Type: "food",
    Charges: 1,
    Effects: [ 
        "UNWHOLESOME_MEAL",
        "NUTRITION_UNCOMMON", 
        "NUTRITION_XP_UNCOMMON", 
        "ENERGY_COMMON", 
        "FEMALE_HORMONE_XP_COMMON"
    ]
};

App.Data.Food["milkdew melon"] = {
    "Name": "milkdew melon",
    "ShortDesc": "Milkdew Melon",
    "LongDesc": "\
        This rare melon has a milky white interior. It's has a sweet, but creamy taste.\
        ",
    "Message": "\
        You crack the melon open and eat the contents. It tastes delicious and thick white juice dribbles down your chin.\
        ",
    "Type": "food",
    "Charges": 1,
    "Effects" : [ 
        "UNWHOLESOME_MEAL",
        "NUTRITION_COMMON", 
        "NUTRITION_XP_COMMON", 
        "FEMALE_HORMONE_XP_COMMON", 
        "BUST_XP_UNCOMMON", 
        "PERVERSION_XP_COMMON"
     ]
};

App.Data.Food["peaches and cream"] = {
    "Name": "peaches and cream",
    "ShortDesc": "Peaches and Cream",
    "LongDesc": "\
        This rare desert is made from the thick juice of the Milkdew Melon that has been combined with preserved \
        peaches of unknown origin.\
        ",
    "Message": "\
        The taste of this desert is sinful on your tongue - it's unlike anything you've eaten before. The sweetness, \
        the creamy texture, the cloying aroma... all together they overwhelm your senses and bring a flush to your body.\
        ",
    "Type": "food",
    "Charges": 1,
    "Effects" : [ 
        "NUTRITION_RARE", 
        "NUTRITION_XP_RARE", 
        "FEMALE_HORMONE_XP_RARE", 
        "BUST_XP_RARE", 
        "PERVERSION_XP_RARE", 
        "PURGE_UNCOMMON" 
    ]
};

App.Data.Food["honey mead"] = {
    "Name": "honey mead",
    "ShortDesc": "Bzzangr Honey Mead",
    "LongDesc": "\
        A common drink along the Lingering Coast, made from the honey of giant Bzzangr insects.\
        ",
    "Message": "\
        The mead has a delicious taste that tingles your tongue and lips.\
        ",
    "Type": "food",
    "Charges": 1,
    "Effects" : [ 
        "UNWHOLESOME_MEAL",
        "NUTRITION_COMMON", 
        "NUTRITION_XP_COMMON", 
        "LIPS_XP_UNCOMMON"
     ]
};

App.Data.Food["butter gourd"] = {
    "Name": "butter gourd",
    "ShortDesc": "An oddly shaped gourd vegetable",
    "LongDesc": "\
        The flesh of this vegetable can easily be eaten raw and it has a pleasant, almost buttery flavor and texture.\
        ",
    "Message": "\
        You break open the gourd and dig into the fleshy interior. It's surprisingly smooth and melts in your mouth like \
        butter or pure fat.\
        ",
    "Type": "food",
    "Charges": 1,
    "Effects" : [ 
        "UNWHOLESOME_MEAL",
        "NUTRITION_COMMON", 
        "NUTRITION_XP_COMMON", 
        "ASS_XP_UNCOMMON", 
        "HIPS_XP_UNCOMMON"
     ]
};

App.Data.Food["butter gourd pie"] = {
    "Name": "butter gourd pie",
    "ShortDesc": "A small butter gourd pie",
    "LongDesc": "\
        Best served warm, but still tasty cold - this delicious pastry is filled with spiced butter gourd and \
        glazed with honey\
        ",
    "Message": "\
        You bite into the pie, suppressing an involuntary moan as the delicious filling slides across your tongue.\
        ",
    "Type": "food",
    "Charges": 1,
    "Effects" : [ 
        "UNWHOLESOME_MEAL",
        "NUTRITION_RARE", 
        "NUTRITION_XP_RARE", 
        "ASS_XP_RARE", 
        "HIPS_XP_RARE", 
        "LIPS_XP_RARE"
     ]
};

App.Data.Food["jojo nut pie"] = {
    "Name": "jojo nut pie",
    "ShortDesc": "Buttered Jojo nut and pecan pie",
    "LongDesc": "\
        A relatively common island delicacy. The JoJo nuts that make up the crust of this pie are usually toxic, \
        but a long blanching process renders them harmless and quite tasty - almost like doughy bread.\
        ",
    "Message": "\
        You bite into the pie and chew vigorously. The candied pecans contrast nicely with the odd dough like texture \
        of the Jojo nut crust.\
        ",
    "Type": "food",
    "Charges": 1,
    "Effects" : [ 
        "UNWHOLESOME_MEAL",
        "NUTRITION_RARE", 
        "NUTRITION_XP_RARE", 
        "FACE_XP_RARE" 
    ]
};

App.Data.Food["pink peach"] = {
    "Name": "pink peach",
    "ShortDesc": "A brightly colored pink peach",
    "LongDesc": "\
        This brightly colored fruit has a sweet and musky scent. It's bulbous exterior is dimpled with purple specks.\
        ",
    "Message": "\
        You bite into the peach and savor the sweetness of the fruit. You feel almost as if it has a calming, or curative \
        effect on you.\
        ",
    "Type": "food",
    "Charges": 1,
    "Effects" : [ 
        "NUTRITION_COMMON", 
        "NUTRITION_XP_COMMON", 
        "PURGE_UNCOMMON", 
        "FEMALE_HORMONE_XP_COMMON"
     ]
};

 App.Data.Food["mighty banana"] = {
    "Name": "mighty banana",
    "ShortDesc": "A big red banana that is shaped like a certain organ",
    "LongDesc": "\
        This banana was imported from a mystified island where the population is said to have dicks as long as their legs.\
        ",
    "Message": "\
        You take a bite from the peeled banana and realise that it has a salty aftertaste. At the same time you feel \
        really manly and empowered\
        ",
    "Type": "food",
    "Charges": 1,
    "Effects" : [ 
        "UNWHOLESOME_MEAL",
        "NUTRITION_COMMON", 
        "NUTRITION_XP_COMMON", 
        "MALE_HORMONE_XP_UNCOMMON", 
        "PENIS_XP_UNCOMMON", 
        "BALLS_XP_UNCOMMON"
    ]
};

App.Data.Food["purple mushrooms"] = {
    "Name": "purple mushroom",
    "ShortDesc": "A handful of rare purple mushrooms",
    "LongDesc": "\
        These mushrooms range in shapes from small and skinny to rather large specimens. Their caps are bright purple \
        and spotted with darker purple blotches. These are safe to eat, right?\
        ",
    "Message": "\
        You ingest the mushrooms. They don't have much of a taste, but they definitely seem to have some 'kick' to them. \
        You hope this wasn't a foolish idea...\
        ",
    "Type": "food",
    "Charges": 1,
    "Effects" : [ 
        "NUTRITION_COMMON", 
        "NUTRITION_XP_COMMON", 
        "TOXICITY_UNCOMMON", 
        "MALE_HORMONE_XP_RARE", 
        "PENIS_XP_RARE", 
        "BALLS_XP_RARE"
    ]
};

App.Data.Food["purple sucker"] = {
    "Name": "erotic sucker",
    "ShortDesc": "A erotic purple sucker",
    "LongDesc": "\
        This large sucker is shaped like a realistic penis, complete with veins and a flared head. The tag \
        advertises the flavor as 'grape and semen'\
        ",
    "Message": "Suck... suck... slurp... gasp. Mmm. Fruity, but slightly salty.",
    "Type": "food",
    "Charges": 1,
    "Effects" : [ 
        "UNWHOLESOME_MEAL",
        "NUTRITION_COMMON", 
        "NUTRITION_XP_COMMON", 
        "LIPS_XP_UNCOMMON", 
        "PERVERSION_XP_COMMON", 
        "PENIS_XP_COMMON"
     ]
};

App.Data.Food["purple tentacle"] = {
    Name : "purple tentacle",
    ShortDesc: "A slimy purple tentacle",
    LongDesc: "\
    This slimy tentacle comes from a rare form of ocean creature called a Kraken. It's deep purple skin is mottled \
    with splotches of green and the underside is lined with suckers.\
    ",
    Message: "The tentacle is rubbery, faintly oily and tastes disturbingly unidentifable. You feel like you've had better ideas...",
    Type: "food",
    Charges: 1,
    Effects: [
        "UNWHOLESOME_MEAL",
        "NUTRITION_COMMON",
        "NUTRITION_XP_COMMON",
        "PERVERSION_XP_RARE"
    ]
}
