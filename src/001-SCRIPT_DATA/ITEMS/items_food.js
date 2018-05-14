App = App || { Data: { }, Entity: { } };

App.Data.Food = {
    "bread crust": {
        "Name": "bread crust",
        "ShortDesc": "A stale crust of bread",
        "LongDesc": "This piece of bread has seen better days... about 5 days ago. It's still edible however.",
        "Message": "You bite into the bread. It's as hard as a rock, but eventually you manage to chew and swallow it.",
        "Type": "food",
        "Charges": 1,
        "UseEffect": {"Nutrition": [5, 10, 0] },
        "Price": 1
    },
    "slave gruel": {
        "Name": "slave gruel",
        "ShortDesc": "Slave gruel mixed with semen",
        "LongDesc": "This watery looking gruel smells and tastes disgusting. The crew has 'donated' some extra nutrition to it.",
        "Message": "You wrinkle your nose and drink down the disgusting drool. You gag occasionally as thick clumps of rancid cum slide down your throat.",
        "Type": "food",
        "Charges": 1,
        "UseEffect": {"Nutrition": [5, 50, 0], "WillPower": [0, -25, 0], "Perversion": [0, 25, 0], "Hormones" : [0, 100, 0]},
        "Price": 1
    },
    "grog": {
        "Name": "grog",
        "ShortDesc": "Low Quality Grog",
        "LongDesc": "It's the typical alcoholic drink that pirates and mariners drink on long trips. It'll keep you hydrated and won't make you too sick.",
        "Message": "You tip back the crude swill. It has an unpleasant taste.",
        "Type": "food",
        "Charges": 1,
        "UseEffect": {"Nutrition": [3, 15, 0], "Toxicity": [5, 0, 0]},
        "Price": 1
    },
    "beer": {
        "Name": "beer",
        "ShortDesc": "Common Beer",
        "LongDesc": "The typical beverage of choice for most men and some women. It's refreshingly cool and with a malty aftertaste.",
        "Message": "You tip back the beer and have a drink. It's refreshing.",
        "Type": "food",
        "Charges": 1,
        "UseEffect": {"Nutrition": [3, 20, 0], "Toxicity": [2, 0, 0]},
        "Price": 2
    },
    "smugglers ale": {
        "Name": "smugglers ale",
        "ShortDesc": "A pint of Smuggler's Ale",
        "LongDesc": "Only brewed and sold on Golden Isle, this dark ale has a tangy, almost fruit after taste.",
        "Message": "You tip back the ale and have a drink. It's refreshing.",
        "Type": "food",
        "Charges": 1,
        "UseEffect": {"Nutrition": [5, 20, 0], "Toxicity": [1, 0, 0]},
        "Price": 10
    },
    "cheap wine": {
        "Name": "cheap wine",
        "ShortDesc": "Cheap Wine",
        "LongDesc": "Not the best quality wine, but palatable and in abundant supply.",
        "Message": "The wine has a deep red color and an almost sweet after taste.",
        "Type": "food",
        "Charges": 1,
        "UseEffect": {"Nutrition": [5, 20, 0], "Toxicity": [3, 0, 0]},
        "Price": 2
    },
    "bread and cheese": {
        "Name": "bread and cheese",
        "ShortDesc": "A serving of bread with cheese",
        "LongDesc": "Standard and relatively wholesome food.",
        "Message": "The bread has a very yeasty taste and the cheese a sharp bite.",
        "Type": "food",
        "Charges": 1,
        "UseEffect": {"Nutrition": [20, 20, 0], "Toxicity": [-5, 0, 0]},
        "Price": 5
    },
    "roast fish": {
        "Name": "roast fish",
        "ShortDesc": "A roasted fish",
        "LongDesc": "A local type of fish, roasted on a stick.",
        "Message": "You take a bite of the fish and chew. It's bland, but wholesome.",
        "Type": "food",
        "Charges": 1,
        "UseEffect": {"Nutrition": [20, 20, 0], "Toxicity": [-5, 0, 0]},
        "Price": 5
    },
    "rum": {
        "Name": "rum",
        "ShortDesc": "A bottle of Rum",
        "LongDesc": "This cheap rum is made from sugarcane.",
        "Message": "You tip back the bottle and have a drink. It burns going down and fills your stomach with fire.",
        "Type": "food",
        "Charges": 1,
        "UseEffect": {"Nutrition": [3, 10, 0], "Toxicity": [5, 0, 0], "WillPower" : [ 0, 10, 0 ]},
        "Price": 5
    },
    "starfruit": {
        "Name": "starfruit",
        "ShortDesc": "Strange starfruit",
        "LongDesc": "This slightly pink starfruit is pulpy and contains many black seeds. It has a fragrant and intoxicating smell.",
        "Message": "You take a bite out of the starfruit and savor it's sweet, but citrus taste. You feel your body filling with energy.",
        "Type": "food",
        "Charges": 1,
        "UseEffect": {"Nutrition": [15, 50, 0],  "Energy": [1, 0, 0], "Hormones": [0, 500, 0]},
        "Price": 20
    },
    "mystery stew": {
        "Name": "mystery stew",
        "ShortDesc": "A deep brown stew of unidentifiable origin",
        "LongDesc": "This stew is so dark as to practically be mud. It has bits of unidentifiable meat and vegetables (you think?) floating in it.",
        "Message": "The stew tastes surprisingly better than you thought and certainly better than it looks.",
        "Type": "food",
        "Charges": 1,
        "UseEffect": {"Nutrition": [10, 100, 0]},
        "Price": 5
    },
    "milkdew melon": {
        "Name": "milkdew melon",
        "ShortDesc": "Milkdew Melon",
        "LongDesc": "This rare melon has a milky white interior. It's has a sweet, but creamy taste.",
        "Message": "You crack the melon open and eat the contents. It tastes delicious and thick white juice dribbles down your chin.",
        "Type": "food",
        "Charges": 1,
        "UseEffect": {
            "Nutrition": [20, 50, 0],
            "Bust": [0, 100, 0],
            "Hormones": [0, 200, 0],
            "Perversion": [0, 50, 0]
        },
        "Price": 25
    },
    "honey mead": {
        "Name": "honey mead",
        "ShortDesc": "Bzzangr Honey Mead",
        "LongDesc": "A common drink along the Lingering Coast, made from the honey of giant Bzzangr insects.",
        "Message": "The mead has a delicious taste that tingles your tongue and lips.",
        "Type": "food",
        "Charges": 1,
        "UseEffect": {"Nutrition": [20, 50, 0], "Lips": [0, 100, 0]},
        "Price": 25
    },
    "butter gourd": {
        "Name": "butter gourd",
        "ShortDesc": "An oddly shaped gourd vegetable",
        "LongDesc": "The flesh of this vegetable can easily be eaten raw and it has a pleasant, almost buttery flavor and texture.",
        "Message": "You break open the gourd and dig into the fleshy interior. It's surprisingly smooth and melts in your mouth like butter or pure fat.",
        "Type": "food",
        "Charges": 1,
        "UseEffect": {"Nutrition": [20, 200, 0], "Ass": [0, 100, 0], "Hips": [0, 100, 0]},
        "Price": 35
    },
    "pink peach": {
        "Name": "pink peach",
        "ShortDesc": "A brightly colored pink peach",
        "LongDesc": "This brightly colored fruit has a sweet and musky scent. It's bulbous exterior is dimpled with purple specks.",
        "Message": "You bite into the peach and savor the sweetness of the fruit. You feel almost as if it has a calming, or curative effect on you.",
        "Type": "food",
        "Charges": 1,
        "UseEffect": {"Nutrition": [20, 100, 0], "Hormones" : [0, 100, 0], "Toxicity" : [-40, 0, 0] },
        "Price": 25
    },
    "fortified wine": {
        "Name": "fortified wine",
        "ShortDesc": "@@color:purple;A dusty bottle of fortified wine@@",
        "LongDesc": "This dusty old bottle has an almost illegible label, but you can make out that it appears to be extremely fortified (highly alcoholic) wine",
        "Message": "You tip back the bottle and have a drink. It burns going down and fills your stomach with fire. Holy shit that's strong!",
        "Type": "food",
        "Quest" : true,
        "Charges": 1,
        "UseEffect": {"Nutrition": [10, 10, 0], "Toxicity": [25, 0, 0], "WillPower" : [ 0, 20, 0 ]},
        "Price": 500
    },
    "red plum": {
        "Name": "red plum",
        "ShortDesc": "A dazzlingly bright red plum",
        "LongDesc": "This unusual plum is bright red and cool to the touch. It's so ripe that it practically oozes sweetness.",
        "Message": "You bite into the plum and instantly you are overcome with a wave of euphoria. You momentarily lose yourself as the sweet juices drip down your chin.",
        "Type": "food",
        "Charges": 1,
        "UseEffect": {"Nutrition": [20, 100, 0], "Toxicity" : [-80, 0, 0], "Health": [10, 0, 0] },
        "Price": 25
    },
    "purple mushrooms": {
        "Name": "purple mushroom",
        "ShortDesc": "A handful of rare purple mushrooms",
        "LongDesc": "These mushrooms range in shapes from small and skinny to rather large specimens. Their caps are bright purple and spotted with darker purple blotches. These are safe to eat, right?",
        "Message": "You ingest the mushrooms. They don't have much of a taste, but they definitely seem to have some 'kick' to them. You hope this wasn't a foolish idea...",
        "Type": "food",
        "Charges": 1,
        "UseEffect": {"Nutrition": [5, 20, 0], "Toxicity" : [ 20, 0, 0], "Hormones": [-5, -200, 0],
            "Penis" : [0,200,0], "Balls" : [0, 200,0] },
        "Price": 25
    },
    "ambrosia": {
        "Name": "ambrosia",
        "ShortDesc": "A dark green bottle of ambrosia",
        "LongDesc": "Ambrosia is known far and wide as the 'Food of the Gods'. Legends tell that it is brewed by Sea Nymphs in their under water caves, but how that is possible you have no idea.",
        "Message": "You uncork the bottle imbibe the potent brew. Words fail to describe how overwhelmingly good it tastes. You feel yourself filled with vigour and strength!",
        "Type": "food",
        "Charges": 1,
        "UseEffect": {"Nutrition": [100, 100, 0], "Toxicity" : [-200, 0, 0], "Health": [100, 0, 0],
            "WillPower" : [ 0, 100, 0 ] },
        "Price": 500
    },
    "pirates plunder": {
        "Name": "pirates plunder",
        "ShortDesc": "A flagon of 'Pirates Plunder'",
        "LongDesc": "No one knows the origin of this legendary drink, but Pirates up and down the Lost Coast swear by it's effects. A single flagon is said to turn the most pathetic land lubber into a half way decent pirate. Could that possibly be true?",
        "Message": "You tip back the flagon and drink deeply of the 'Pirates Plunder'. The taste is like nothing you've had before, dark, stormy and violent.",
        "Type": "food",
        "Charges": 1,
        "UseEffect": {"Nutrition": [20, 50, 0], "Toxicity" : [50, 0, 0], "Sailing": [0, 300, 0],
            "Navigating" : [ 0, 300, 0 ], "Swashbuckling" : [ 0, 300, 0 ] },
        "Price": 500
    },
    "purple sucker": {
        "Name": "erotic sucker",
        "ShortDesc": "A erotic purple sucker",
        "LongDesc": "This large sucker is shaped like a realistic penis, complete with veins and a flared head. The tag advertises the flavor as 'grape and semen'",
        "Message": "Suck... suck... slurp... gasp. Mmm. Fruity, but slightly salty.",
        "Type": "food",
        "Charges": 1,
        "UseEffect": {"Nutrition": [5, 10, 0], "Penis" : [0,50,0], "Lips" : [0, 50,0], "Perversion" : [0, 50,0] },
        "Price": 100
    },
};
