window.App = window.App || { Data: { }, Entity: { } };

window.App.Data.Drugs = {
            "nereid philtre": {
                "Name": "nereid philtre",
                "ShortDesc": "Philter of Nereid Tears",
                "LongDesc": "This light blue potion has faint specks of silver swirling in it. It smells faintly of the sea.",
                "Message": "You quaff the philter. For a moment you feel the bite of the sea... and then tranquility so sublime you lose yourself to it.",
                "Type": "potion",
                "Charges": 1,
                "UseEffect": {
                    "Hormones": [5, 300, 0],
                    "Femininity": [5, 100, 0],
                    "Face": [0, 500, 0],
                    "Lips": [0, 500, 0],
                    "Hair": [6, 600, 0],
                    "Waist" : [0,-500,0],
                    "WillPower": [-5, -200, 0],
                    "Toxicity": [50, 0, 0]
                },
                "Price": 500
            },
            "succubus philtre": {
                "Name": "succubus philtre",
                "ShortDesc": "Philter of Succubus Lust",
                "LongDesc": "This deep purple potion pulses with an otherworldly light. It smells of roses and brimstone.",
                "Message": "You quaff the philter. Almost instantly a deep feeling of arousal surfaces and your mind is filled with perverted thoughts.",
                "Type": "potion",
                "Charges": 1,
                "UseEffect": {
                    "Hormones": [5, 500, 0],
                    "Femininity": [5, 100, 0],
                    "Bust": [5, 500, 0],
                    "Ass": [5, 500, 0],
                    "Hips": [5, 500, 0],
                    "Waist": [-5, -500, 0],
                    "Perversion": [6, 600, 0],
                    "WillPower": [-10, -500, 0],
                    "Toxicity": [50, 0, 0]
                },
                "Price": 500
            },
            "pixie dust": {
                "Name": "pixie dust",
                "ShortDesc": "Pixie Dust",
                "LongDesc": "This pile of dust looks to be made of gold and glimmers with magic. Touching it makes your fingers itch.",
                "Message": "You snort the pixie dust up your nostril. After a few moments of dizziness you feel yourself invigorated with energy!",
                "Type": "potion",
                "Charges": 1,
                "UseEffect": {"Energy": [3, 0, 0], "Height" : [0,-100,0], "WillPower": [0, -50, 0], "Toxicity": [10, 0, 0]},
                "Price": 10
            },
            "fairy dust": {
                "Name": "fairy dust",
                "ShortDesc": "Fairy Dust",
                "LongDesc": "This pile of dust looks to be made of pink metal flakes and glimmers with magic. Touching it makes your fingers itch.",
                "Message": "You snort the fairy dust up your nostril. After a few moments of dizziness you start giggling madly and feel yourself invigorated with energy!",
                "Type": "potion",
                "Charges": 1,
                "UseEffect": {"Energy": [2, 0, 0], "WillPower": [0, -50, 0], "Toxicity": [10, 0, 0], "Height" : [0,-50,0], "Hormones" : [0,100,0] },
                "Price": 5
            },
            "medicinal herbs": {
                "Name": "medicinal herbs",
                "ShortDesc": "Medicinal Herbs",
                "LongDesc": "These are common herbs from a variety of plants with medicinal properties.",
                "Message": "You apply the herbs to your wounds and feel slightly better.",
                "Type": "potion",
                "Charges": 1,
                "UseEffect": {"Health": [10, 0, 0], "Toxicity": [3, 0, 0]},
                "Price": 10
            },
            "healing potion" : {
                "Name": "healing potion",
                "ShortDesc": "Potion of Healing",
                "LongDesc": "These potions are a lot more common than most people would believe. They have the ability to cure minor wounds, combat disease and purge poisons from your system.",
                "Message": "You gulp down the potion. It's sickly sweet, like a viscous syrup made from pure sugar. Within moments you feel the effects as your body starts to rejuvenate.",
                "Type": "potion",
                "Charges": 1,
                "UseEffect": {"Health": [30, 0, 0], "Toxicity": [-20, 0, 0], "Nutrition" : [20, 0, 0]},
                "Price": 50
            },
            "hair tonic": {
                "Name": "hair tonic",
                "ShortDesc": "Old JumJum's Hair Tonic",
                "LongDesc": "Old JumJum's Hair Tonic - Guaranteed to do something. Guarantee not valid if seal broken.",
                "Message": "You pour the tonic over your head and massage it into your scalp. Moments later you feel a burning and itching sensation.",
                "Type": "potion",
                "Charges": 1,
                "UseEffect": {"Hair": [0, 100, 0], "Toxicity": [20, 0, 0]},
                "Price": 10
            },
            "siren elixir": {
                "Name": "siren elixir",
                "ShortDesc": "Siren's Elixir of the Mind and Body",
                "LongDesc": "You can see the pulsing pink liquid bubbling inside the small glass bottle. It glows faintly in the dark.",
                "Message": "You drink the elixir in one gulp and sense a feeling of peace flow through you. It has a faint, bittersweet taste.",
                "Type": "potion",
                "Charges": 1,
                "UseEffect": {"WillPower" : [0,200,0], "Perversion" : [0,-200,0], "Hormones" : [0,200,0], "Face" : [0,200,0], "Bust" : [0,200,0], "Waist" : [0,-100,0], "Ass" : [0,200,0], "Hair": [0, 200, 0], "Toxicity": [100, 0, 0]},
                "Price": 100
            },
            "khafkir": {
                "Name": "khafkir",
                "ShortDesc": "A bottle of distilled Khafkir",
                "LongDesc": "This potent liquor is famed for it's healing and regenerative abilities. Over consumption can have odd side effects.",
                "Message": "You tip back the bottle and take a drink. Surprisingly it doesn't burn, but instead tastes earthy and strong.",
                "Type": "potion",
                "Charges": 1,
                "UseEffect": {"Health": [20, 0, 0], "Nutrition" : [10,0,0], "Hormones" : [0,-200,0], "Toxicity": [5, 0, 0]},
                "Price": 20
            },
            "face cream": {
                "Name": "face cream",
                "ShortDesc": "Jojo Nut Face Cream",
                "LongDesc": "This brown, buttery face cream is popular for it's anti-aging and moisturising properties.",
                "Message": "You rub the lightly tan cream into your face. It has an earthy, almost nutty scent. Your face feels refreshed.",
                "Type": "potion",
                "Charges": 1,
                "UseEffect": {"Face" : [0,100,0], "Hormones" : [0,100,0],  "Toxicity": [5, 0, 0]},
                "Price": 30
            }
        };

window.App.Data.Food = {
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
            }
};

// STYLE TABLE
// TYPE         COMMON  UNCOMMON    RARE    LEGENDARY
// ACCESSORY    3       6           9       12
// CLOTHING     5       10          15      20
// ONE PIECE    10      20          30      40
window.App.Data.Clothes = {
// Sissy Lolita Style
            "pink head bow": {
                "Name": "pink head bow", "ShortDesc": "a cute {COLOR} bow",
                "LongDesc": "This pink bow is a cute accessory that makes you feel like a little girl.",
                "Slot": "Hat", "Restrict": ["Hat"], "Color": "pink", "Price": 60, "Style": "UNCOMMON", "Type" : "ACCESSORY",
                "WearEffect": {"Femininity": [0, 10, 50]}, "Category" : [ "Sissy Lolita", "Daddy's Girl" ]
            },
            "sissy collar": {
                "Name": "sissy collar", "ShortDesc": "a {COLOR} fur-lined leather collar emblazoned with the word 'SISSY' in rhinestones.",
                "LongDesc": "This thick collar is made of sturdy leather and lined with soft fur, making it somewhat tolerable to wear... if it wasn't for the word 'SISSY' writ large in shiny faux gems across it.",
                "Slot": "Neck", "Restrict": ["Neck"], "Color": "pink", "Price": 50, "Style": "RARE", "Type" : "ACCESSORY",
                "WearEffect": {"Femininity": [0, 10, 70]}, "Category" : [ "Sissy Lolita" ]
            },
            "striped bra": {
                "Name": "striped bra", "ShortDesc": "a {COLOR} and white striped bra",
                "LongDesc": "This cute little number is exceptionally girly, perfect for a little sissy baby.",
                "Slot": "Bra", "Restrict": ["Bra"], "Color": "pink", "Price": 80, "Style": "UNCOMMON", "Type" : "CLOTHING",
                "WearEffect": {"Femininity": [0, 10, 50]}, "Category" :  [ "Sissy Lolita" ]
            },
            "striped panties": {
                "Name": "striped panties", "ShortDesc": "a pair of {COLOR} and white striped panties",
                "LongDesc": "This cute little number is exceptionally girly, perfect for a little sissy baby.",
                "Slot": "Panty", "Restrict": ["Panty"], "Color": "pink", "Price": 80, "Style": "UNCOMMON", "Type" : "CLOTHING",
                "WearEffect": {"Femininity": [0, 10, 50]}, "Category" :  [ "Sissy Lolita" ]
            },
            "frilly bloomers": {
                "Name": "frilly bloomers", "ShortDesc": "a pair of frilly {COLOR} cotton bloomers",
                "LongDesc": "These bloomers are cut short and have a frilly bottom, perfect for a little sissy girl.",
                "Slot": "Panty", "Restrict": ["Panty"], "Color": "pink", "Price": 150, "Style": "RARE", "Type" : "CLOTHING",
                "WearEffect": {"Femininity": [0, 10, 70]}, "Category" :  [ "Sissy Lolita" ]
            },
            "striped stockings": {
                "Name": "striped stockings", "ShortDesc": "a pair of {COLOR} and white striped stockings",
                "LongDesc": "These cute striped stockings have adorable little pink bows at the top.",
                "Slot": "Stockings", "Restrict": ["Stockings"], "Color": "pink", "Price": 75, "Style": "UNCOMMON", "Type" : "CLOTHING",
                "WearEffect": {"Femininity": [0, 10, 50]}, "Category" :  [ "Sissy Lolita", "Bimbo" ]
            },
            "frilly dress": {
                "Name": "frilly dress", "ShortDesc": "a cute frilly {COLOR} dress",
                "LongDesc": "This dress is all ruffles and lace. Perfect for attire for a dedicated sissy girl.",
                "Slot": "Dress", "Restrict": ["Shirt", "Pants", "Dress", "Costume"], "Color": "pink", "Price": 250, "Style": "UNCOMMON", "Type" : "ONE PIECE",
                "WearEffect": {"Femininity": [0, 10, 70]}, "Category" :  [ "Sissy Lolita" ]
            },
            "pink mary janes": {
                "Name": "pink mary janes", "ShortDesc": "a pair of low heeled {COLOR} mary janes",
                "LongDesc": "These girly shoes have bows on the ankles and a short heel making them easy to walk in.",
                "Slot": "Shoes", "Restrict": ["Shoes"], "Color": "pink", "Price": 125, "Style": "UNCOMMON", "Type" : "CLOTHING",
                "WearEffect": {"Femininity": [0, 5, 50]}, "Category" : [ "Sissy Lolita", "Daddy's Girl" ]
            },
            "pink platform mary janes": {
                "Name": "pink platform mary janes", "ShortDesc": "a pair of {COLOR} platform mary janes",
                "LongDesc": "These girly shoes have bows on the ankles and a chunky platform heel. Difficult to walk in but both sexy and girly.",
                "Slot": "Shoes", "Restrict": ["Shoes"], "Color": "pink", "Price": 200, "Style": "RARE", "Type" : "CLOTHING",
                "WearEffect": {"Femininity": [0, 10, 70]}, "Category" :  [ "Sissy Lolita", "Daddy's Girl" ]
            },
// Daddy's Girl style
            "pigtail wig": {
                "Name": "pigtail wig", "ShortDesc": "a {COLOR} wig with pigtails and accessories",
                "LongDesc": "This high quality wig is done up in pigtails fashioned with little heart accessories that have 'I @@color:pink;&#9825;@@ Daddy!' written on them.",
                "Slot": "Wig", "Restrict": ["Wig"], "Color": "blond", "Price": 150, "Style": "RARE", "Type" : "ACCESSORY",
                "HairLength": 60, "HairStyle": "cute pig tails", "HairBonus": 60, "Category" : [ "Daddy's Girl" ]
            },
            "pink knee socks": { // 10
                "Name": "pink knee socks", "ShortDesc": "a pair of {COLOR} knee socks",
                "LongDesc": "These pink socks come up right to your knee and have little ties to hold them up.",
                "Slot": "Stockings", "Restrict": ["Stockings"], "Color": "pink", "Price": 75, "Style": "UNCOMMON", "Type" : "CLOTHING",
                "WearEffect": {"Femininity": [0, 10, 50]}, "Category" :  [ "Daddy's Girl", "Ordinary", "Bimbo" ]
            },
            "white knee socks": { // 10
                "Name": "pink knee socks", "ShortDesc": "a pair of {COLOR} knee socks",
                "LongDesc": "These white socks come up right to your knee and have little ties to hold them up.",
                "Slot": "Stockings", "Restrict": ["Stockings"], "Color": "white", "Price": 75, "Style": "UNCOMMON", "Type" : "CLOTHING",
                "WearEffect": {"Femininity": [0, 10, 50]}, "Category" :  [ "Daddy's Girl", "Ordinary" ]
            },
            "pink gingham dress": {
                "Name": "pink gingham dress", "ShortDesc": "a super short {COLOR} gingham dress",
                "LongDesc": "This dress has a girly gingham pattern with white lace collar trim. Normally it'd look quite demure, but it's so short it barely covers your arse and it has a very prominent cleavage window to show off your assets.",
                "Slot": "Dress", "Restrict": ["Shirt", "Pants", "Dress", "Costume"], "Color": "pink", "Price": 800, "Style": "LEGENDARY", "Type" : "ONE PIECE",
                "WearEffect": {"Femininity": [0, 10, 80]}, "Category" :  [ "Daddy's Girl" ]
            },
            "cute pink bra": { // 10
                "Name": "cute pink bra", "ShortDesc": "a cute {COLOR} bra with tiny hearts on it",
                "LongDesc": "This cute bra has tiny white &#9825; on it and a delicate little bow in the middle.",
                "Slot": "Bra", "Restrict": ["Bra"], "Color": "pink", "Price": 80, "Style": "UNCOMMON", "Type" : "CLOTHING",
                "WearEffect": {"Femininity": [0, 10, 50]}, "Category" :  [ "Daddy's Girl" ]
            },
            "cute pink panties": { // 5
                "Name": "cute pink panties", "ShortDesc": "a pair of cute {COLOR} pink panties",
                "LongDesc": "On the surface these cute pink panties look quite demure, but they have 'I @@color:pink;&#9825;@@ Daddy!' written across the backside.",
                "Slot": "Panty", "Restrict": ["Panty"], "Color": "pink", "Price": 200, "Style": "RARE", "Type" : "CLOTHING",
                "WearEffect": {"Femininity": [0, 10, 50]}, "Category" :  [ "Daddy's Girl" ]
            },
// Pirate Slut
            "pirate hat": { // 12
                "Name": "pirate hat", "ShortDesc": "a cute little pirate hat",
                "LongDesc": "This cute little pirate hat is the perfect accessory for a sissy pirate slut.",
                "Slot": "Hat", "Restrict": ["Hat"], "Color": "black", "Price": 100, "Style": "LEGENDARY", "Type" : "ACCESSORY",
                "Category" : [ "Pirate Slut" ]
            },
            "pirate boots": { //10
                "Name": "pirate boots", "ShortDesc": "a pair of very tall thigh-high {COLOR} leather boots",
                "LongDesc": "The heels on these boots are outrageously high and pointed. The supple and shiny leather comes up to your mid thigh and folds over on itself.",
                "Slot": "Shoes", "Restrict": ["Shoes"], "Color": "black", "Price": 250, "Style": "UNCOMMON", "Type" : "CLOTHING",
                "Category" : [ "Pirate Slut", "BDSM" ], "WearEffect": {"Femininity": [0, 8, 40]}
            },
            "pirate bra": { //15
                "Name": "pirate bra", "ShortDesc": "a {COLOR} push-up bra emblazoned with the skull and bones",
                "LongDesc": "This sexy silk bra is fringed with gold and has a skull and bones, the traditional symbol of piracy emblazoned on the right breast cup.",
                "Slot": "Bra", "Restrict": ["Bra"], "Color": "black", "Price": 180, "Style": "RARE", "Type" : "CLOTHING",
                "WearEffect": {"Femininity": [0, 10, 50]}, "Category" :  [ "Pirate Slut" ]
            },
            "pirate thong": { //15
                "Name": "pirate thong", "ShortDesc": "a {COLOR} thong emblazoned with the skull and bones",
                "LongDesc": "This t-back thong gently separates your arse cheeks, making them more prominent and luscious looking. It has the phrase 'Plunder my Booty' written across the rear waistband and a small skull and bones embroidered on the crotch.",
                "Slot": "Panty", "Restrict": ["Panty"], "Color": "black", "Price": 180, "Style": "RARE", "Type" : "CLOTHING",
                "WearEffect": {"Femininity": [0, 10, 50]}, "Category" :  [ "Pirate Slut" ]
            },
            "pirate waistcoat": { // 40
                "Name": "pirate waistcoat", "ShortDesc": "a short {COLOR} velvet waistcoat",
                "LongDesc": "This tiny waistcoat only has one button, leaving your cleavage exposed. It's also quite short, with the coat tails only barely covering your ass and leaving your front entirely exposed.",
                "Slot": "Dress", "Restrict": ["Shirt", "Pants", "Dress", "Costume"], "Color": "black", "Price": 1100, "Style": "LEGENDARY", "Type" : "ONE PIECE",
                "WearEffect": {
                    "Femininity"    : [0, 10, 80],
                    "Seduction"     : [10,0,0],
                    "Swashbuckling" : [10,0,0],
                    "Navigating"    : [10,0,0],
                    "Sailing"       : [10,0,0]
                    },
                "Category" :  [ "Pirate Slut" ]
            },
            "pistol brace": { // 9
                "Name": "pistol brace", "ShortDesc": "a {COLOR} leather pistol brace",
                "LongDesc": "More of a belt than anything else, it can hold pistols if you find any.",
                "Slot": "Corset", "Restrict": ["Corset"], "Color": "black", "Price": 200, "Style": "RARE", "Type" : "ACCESSORY",
                "WearEffect": {"Femininity": [0, 5, 50], "Waist": [0, -20, 10], "Swashbuckling" : [ 10, 0, 0 ]}, "Category" :  [ "Pirate Slut", "BDSM" ]
            },
            "fishnet tights": { // 10
                "Name": "fishnet tights", "ShortDesc": "a pair of {COLOR} fishnet stockings",
                "LongDesc": "These fishnet tights wrap themselves perfectly to your legs. The feeling is quite exquisite.",
                "Slot": "Stockings", "Restrict": ["Stockings"], "Color": "black", "Price": 400, "Style": "UNCOMMON", "Type" : "CLOTHING",
                "WearEffect": {"Femininity": [0, 5, 60]}, "Category" :  [ "Pirate Slut", "BDSM", "Naughty Nun", "Bimbo", "High Class Whore", "Slutty Lady" ]
            },
            "fishnet stockings": { // 10
                "Name": "fishnet stockings", "ShortDesc": "a pair of {COLOR} fishnet stockings",
                "LongDesc": "These fishnet stockings are topped with black lace and held up by garter straps.",
                "Slot": "Stockings", "Restrict": ["Stockings"], "Color": "black", "Price": 500, "Style": "UNCOMMON", "Type" : "CLOTHING",
                "WearEffect": {"Femininity": [0, 5, 60]}, "Category" :  [ "Pirate Slut", "BDSM", "Naughty Nun", "Bimbo", "High Class Whore", "Slutty Lady", "Sexy Dancer" ]
            },
// Bimbo
            "tall heels": { // 10
                "Name": "tall heels", "ShortDesc": "a pair of very tall {COLOR} platform heels",
                "LongDesc": "The heels on these sexy shoes are so tall that you prance and waddle, shaking your ass everywhere you walk.",
                "Slot": "Shoes", "Restrict": ["Shoes"], "Color": "black", "Price": 250, "Style": "UNCOMMON", "Type" : "CLOTHING",
                "WearEffect": {"Femininity": [0, 5, 60]}, Category : [ "Bimbo", "Sexy Dancer", "High Class Whore" ]
            },
            "bimbo heels": { // 15
                "Name": "bimbo heels", "ShortDesc": "a pair of outrageously tall {COLOR} platform heels",
                "LongDesc": "The heels on these platform shoes are so tall that you prance and waddle, shaking your ass, everywhere you walk.",
                "Slot": "Shoes", "Restrict": ["Shoes"], "Color": "pink", "Price": 300, "Style": "RARE", "Type" : "CLOTHING",
                "WearEffect": {"Femininity": [0, 5, 60]}, Category : [ "Bimbo", "Sexy Dancer" ]
            },
            "micro dress": { // 40
                "Name": "sexy micro dress",
                "ShortDesc": "a figure hugging {COLOR} micro dress",
                "LongDesc": "This dress is made out of some exotic material that hugs every curve of your body. It's so humiliatingly short that your genitals are half open for everyone and the top has several strategic holes to present multiple views of your chest.",
                "Slot": "Dress",
                "Restrict": ["Shirt", "Pants", "Dress", "Costume"],
                "Color": "pink",
                "Price": 1000,
                "Style": "LEGENDARY", "Type" : "ONE PIECE",
                "WearEffect": {"Femininity": [0, 15, 60], "Seduction" : [10,0,0]}, Category : [ "Bimbo" ]
            },
            "small plug": { // 9
                "Name": "small plug", "ShortDesc": "a small anal plug with a heart-shaped {COLOR} faux gem",
                "LongDesc": "This tiny little plug is designed be worn in your ass. The fake gem is there for decoration because everyone is going to be looking at it..",
                "Slot": "Butt", "Restrict": ["Butt"], "Color": "pink", "Price": 200, "Style": "RARE", "Type" : "ACCESSORY",
                "WearEffect": {"Perversion": [0, 10, 40]}, Category : [ "Bimbo", "Sexy Dancer", "High Class Whore", "Ordinary" ]
            },
            "bimbo bra": { //15
                "Name": "bimbo bra", "ShortDesc": "a {COLOR} push-up bra trimmed with lace and studded with rhinestones",
                "LongDesc": "This sexy bra is designed to push up and display your assets in the most provocative way possible. The lace and shiny rhinestones there are for maximum eye-catching appeal.",
                "Slot": "Bra", "Restrict": ["Bra"], "Color": "pink", "Price": 180, "Style": "RARE", "Type" : "CLOTHING",
                "WearEffect": {"Femininity": [0, 10, 50]}, "Category" :  [ "Bimbo" ]
            },
            "bimbo thong": { //15
                "Name": "bimbo thong", "ShortDesc": "a {COLOR} thong with 'I @@color:pink;&#9825;@@ Cum! written on the crotch' ",
                "LongDesc": "This tiny thong is practically a g-string. The advertisement printed on it leaves no doubt to any onlookers as to what you're all about.",
                "Slot": "Panty", "Restrict": ["Panty"], "Color": "pink", "Price": 180, "Style": "RARE", "Type" : "CLOTHING",
                "WearEffect": {"Femininity": [0, 10, 50]}, "Category" :  [ "Bimbo" ]
            },
// BDSM
            "nipple rings": { // 9
                "Name": "nipple rings", "ShortDesc": "a pair of silver nipple rings joined by a chain",
                "LongDesc": "These rings are connected by a chain that is designed to torment and tug on the wearers nipples.",
                "Slot": "Nipples", "Restrict": ["Nipples"], "Color": "silver", "Price": 150, "Style": "RARE", "Type" : "ACCESSORY",
                "WearEffect": {"WillPower": [0, -5, 80], "Perversion": [0, 5, 30]}, "Category" :  [ "BDSM" ]
            },
            "nipple clamps": { // 6
                "Name": "nipple clamps", "ShortDesc": "a pair of silver nipple clamps",
                "LongDesc": "These sterling silver nipple clamps are designed to inflict punishment... or perhaps arousal?",
                "Slot": "Nipples", "Restrict": ["Nipples"], "Color": "silver", "Price": 100, "Style": "UNCOMMON", "Type" : "ACCESSORY",
                "WearEffect": {"WillPower": [0, -5, 80], "Perversion": [0, 5, 30]}, "Category" :  [ "BDSM" ]
            },
            "training corset": { // 10
                "Name": "training corset", "ShortDesc": "a whale boned {COLOR} training corset",
                "LongDesc": "This garment borders on a torture device. It's designed to slim and shape a woman's waist and push up her bust.",
                "Slot": "Corset", "Restrict": ["Corset"], "Color": "black", "Price": 200, "Style": "UNCOMMON", "Type" : "ACCESSORY",
                "WearEffect": {"Femininity": [0, 5, 50], "Waist": [0, -20, 10]}, "Category" :  [ "BDSM" ]
            },
            "bondage corset": { // 15
                "Name": "bondage corset", "ShortDesc": "a steel boned {COLOR} leather bondage corset",
                "LongDesc": "This corset is made of strong leather and boned with steel. It has various straps and locks to ensure it must be worn at all times.",
                "Slot": "Corset", "Restrict": ["Corset"], "Color": "black", "Price": 400, "Style": "RARE", "Type" : "ACCESSORY",
                "WearEffect": {"Femininity": [0, 5, 50], "Waist": [0, -25, 0]}, "Category" :  [ "Pirate Slut", "BDSM" ]
            },
            "shiny knee boots": { // 10
                "Name": "shiny knee boots", "ShortDesc": "a shiny pair of high heeled knee-high {COLOR} leather boots",
                "LongDesc": "These fashionable leather boots are polished to a shine. Very tall and slightly intimidating.",
                "Slot": "Shoes", "Restrict": ["Shoes"], "Color": "black", "Price": 250, "Style": "UNCOMMON", "Type" : "CLOTHING",
                "WearEffect": {"Femininity": [0, 8, 40]}, "Category" :  [ "Pirate Slut", "BDSM" ]
            },
            "large plug": { // 9
                "Name": "large plug", "ShortDesc": "a thick {COLOR} anal plug",
                "LongDesc": "The perfect accessory for the horny masochist, or just good for keeping your arse ready to be used.",
                "Slot": "Butt", "Restrict": ["Butt"], "Color": "black", "Price": 200, "Style": "RARE", "Type" : "ACCESSORY",
                "WearEffect": {"Perversion": [0, 10, 70], "AssFucking" : [10, 10, 80]}, Category : [ "BDSM" ]
            },
// Other Styles
            "cheap wig": {
                "Name": "cheap wig", "ShortDesc": "a short {COLOR} wig",
                "LongDesc": "This cheap wig is made out of badly dyed horse hair.",
                "Slot": "Wig", "Restrict": ["Wig"], "Color": "black", "Price": 50, "Style": "COMMON", "Type" : "ACCESSORY",
                "HairLength": 30, "HairStyle": "a short bob", "HairBonus": 30
            },
            "wig": {
                "Name": "wig", "ShortDesc": "a long {COLOR} wig",
                "LongDesc": "This wig is made from human hair and of quite a fine quality.",
                "Slot": "Wig", "Restrict": ["Wig"], "Color": "blond", "Price": 150, "Style": "UNCOMMON", "Type" : "ACCESSORY",
                "HairLength": 60, "HairStyle": "loose curls", "HairBonus": 60
            },
            "exotic wig": {
                "Name": "exotic wig", "ShortDesc": "an exotic {COLOR} wig",
                "LongDesc": "This exotic wig is made of finely dyed human hair and strung with jewels.",
                "Slot": "Wig", "Restrict": ["Wig"], "Color": "purple", "Price": 300, "Style": "RARE", "Type" : "ACCESSORY",
                "HairLength": 80, "HairStyle": "twin tails", "HairBonus": 90
            },
            "bonnet": {
                "Name": "bonnet", "ShortDesc": "a frilly {COLOR} bonnet",
                "LongDesc": "This frilly little bonnet is a dainty accessory sure to give off a girlish demeanor.",
                "Slot": "Hat", "Restrict": ["Hat"], "Color": "pink", "Price": 100, "Style": "RARE", "Type" : "ACCESSORY"
            },
            "cat ears": {
                "Name": "cat ears", "ShortDesc": "a pair of fluffy {COLOR} cat ears",
                "LongDesc": "These large furry cat ears are attached by a headband to be worn.",
                "Slot": "Hat", "Restrict": ["Hat"], "Color": "black", "Price": 200, "Style": "RARE", "Type" : "ACCESSORY"
            },
            "choker": {
                "Name": "choker", "ShortDesc": "a {COLOR} silk choker",
                "LongDesc": "This thin choker is made of silk and designed to accentuate a delicate neck.",
                "Slot": "Neck", "Restrict": ["Neck"], "Color": "black", "Price": 50, "Style": "COMMON", "Type" : "ACCESSORY"
            },
            "collar": {
                "Name": "collar", "ShortDesc": "a leather slave collar",
                "LongDesc": "This thick leather collar is worn to remind everyone that the wearer is a slave.",
                "Slot": "Neck", "Restrict": ["Neck"], "Color": "black", "Price": 200, "Style": "COMMON", "Type" : "ACCESSORY", "Locked": 1,
                "WearEffect": {"WillPower": [0, -5, 50], "Perversion": [0, 5, 30]}
            },
            "chemise": {
                "Name": "chemise", "ShortDesc": "a plain {COLOR} cotton chemise",
                "LongDesc": "A brief slip designed to cover the breasts under clothes. Not very supportive at all.",
                "Slot": "Bra", "Restrict": ["Bra"], "Color": "white", "Price": 50, "Style": "COMMON", "Type" : "CLOTHING",
                "WearEffect": {"Femininity": [0, 5, 20]}
            },
            "cotton bra": {
                "Name": "cotton bra", "ShortDesc": "a {COLOR} cotton bra trimmed with lace",
                "LongDesc": "A regular sized bra designed to contain and support female breasts. It offers modest support and a small amount of sexual appeal.",
                "Slot": "Bra", "Restrict": ["Bra"], "Color": "white", "Price": 100, "Style": "COMMON", "Type" : "CLOTHING",
                "WearEffect": {"Femininity": [0, 5, 30]}
            },
            "silk bra": {
                "Name": "silk bra", "ShortDesc": "a sexy {COLOR} silk bra with lace trim",
                "LongDesc": "This expensive undergarment is designed to accentuate and display a woman's chest with lustful appeal.",
                "Slot": "Bra", "Restrict": ["Bra"], "Color": "black", "Price": 200, "Style": "COMMON", "Type" : "CLOTHING",
                "WearEffect": {"Femininity": [0, 5, 50]}
            },
            "fashion corset": {
                "Name": "fashion corset", "ShortDesc": "a tightly bound {COLOR} silk and lace corset",
                "LongDesc": "This corset is made from silk and lace, more fashionable than functional, but it still tightly binds your waist and lifts your breasts.",
                "Slot": "Corset", "Restrict": ["Corset"], "Color": "black", "Price": 200,"Style": "UNCOMMON", "Type" : "ACCESSORY",
                "WearEffect": {"Femininity": [0, 5, 50], "Waist": [0, -10, 17]}
            },
            "cotton bloomers": {
                "Name": "cotton bloomers", "ShortDesc": "a pair of {COLOR} cotton bloomers",
                "LongDesc": "The most basic of undergarments. No frills and almost zero sex appeal.",
                "Slot": "Panty", "Restrict": ["Panty"], "Color": "white", "Price": 50, "Style": "COMMON", "Type" : "CLOTHING",
                "WearEffect": {"Femininity": [0, 5, 20]}
            },
            "sheer bloomers": {
                "Name": "sheer bloomers", "ShortDesc": "a pair of sheer {COLOR} silk and lace bloomers",
                "LongDesc": "Made from sheer silk, they're smooth against your skin and decidedly sexy.",
                "Slot": "Panty", "Restrict": ["Panty"], "Color": "black", "Price": 150, "Style": "COMMON", "Type" : "CLOTHING",
                "WearEffect": {"Femininity": [0, 5, 50]}
            },
            "cotton stockings": {
                "Name": "cotton stockings", "ShortDesc": "a pair of {COLOR} cotton stockings",
                "LongDesc": "Basic stockings, held up with string ties.",
                "Slot": "Stockings", "Restrict": ["Stockings"], "Color": "white", "Price": 50, "Style": "COMMON", "Type" : "CLOTHING",
                "WearEffect": {"Femininity": [0, 5, 20]}
            },
            "silk stockings": {
                "Name": "silk stockings", "ShortDesc": "a pair of {COLOR} silk stockings and garters",
                "LongDesc": "Luxurious and sexy silk stockings held up with garters.",
                "Slot": "Stockings", "Restrict": ["Stockings"], "Color": "black", "Price": 150, "Style": "COMMON", "Type" : "CLOTHING",
                "WearEffect": {"Femininity": [0, 5, 40]}
            },
            "worn boots": {
                "Name": "worn boots", "ShortDesc": "a worn pair of {COLOR} boots",
                "LongDesc": "These boots are decidedly ugly. More functional than fashionable.",
                "Slot": "Shoes", "Restrict": ["Shoes"], "Color": "brown", "Price": 50, "Style": "COMMON", "Type" : "CLOTHING"
            },
            "short heels": {
                "Name": "short heels", "ShortDesc": "a pair of short {COLOR} heels",
                "LongDesc": "These dainty shoes have a small kitten heel. Not too hard to walk in.",
                "Slot": "Shoes", "Restrict": ["Shoes"], "Color": "black", "Price": 100, "Style": "COMMON", "Type" : "CLOTHING",
                "WearEffect": {"Femininity": [0, 5, 20]}
            },
            "medium heels": {
                "Name": "medium heels", "ShortDesc": "a pair of medium {COLOR} heels",
                "LongDesc": "These shoes have a medium height heel that causes you to roll your ass as you walk.",
                "Slot": "Shoes", "Restrict": ["Shoes"], "Color": "black", "Price": 150, "Style": "COMMON", "Type" : "CLOTHING",
                "WearEffect": {"Femininity": [0, 8, 40]}
            },
            "cotton blouse": {
                "Name": "cotton blouse", "ShortDesc": "a {COLOR} cotton blouse",
                "LongDesc": "This simple cotton blouse is made from rough cotton.",
                "Slot": "Shirt", "Restrict": ["Shirt", "Dress", "Costume"], "Color": "white", "Price": 50, "Style": "COMMON", "Type" : "CLOTHING",
                "WearEffect": {"Femininity": [0, 5, 20]}
            },
            "silk blouse": {
                "Name": "silk blouse", "ShortDesc": "a low cut {COLOR} silk blouse",
                "LongDesc": "This elegant silk blouse is cut daringly low.",
                "Slot": "Shirt", "Restrict": ["Shirt", "Dress", "Costume"], "Color": "white", "Price": 150, "Style": "COMMON", "Type" : "CLOTHING",
                "WearEffect": {"Femininity": [0, 5, 40]}
            },
            "leather pants": {
                "Name": "leather pants", "ShortDesc": "a pair of {COLOR} leather pants",
                "LongDesc": "These leather pants are incredibly tight and designed to show off your ass.",
                "Slot": "Pants", "Restrict": ["Pants", "Dress", "Costume"], "Color": "black", "Price": 200, "Style": "COMMON", "Type" : "CLOTHING"
            },
            "leather shorts": {
                "Name": "leather shorts", "ShortDesc": "a pair of low rise {COLOR} leather shorts",
                "LongDesc": "These tight leather shorts ride up in all the right places.",
                "Slot": "Pants", "Restrict": ["Pants", "Dress", "Costume"], "Color": "black", "Price": 150, "Style": "COMMON", "Type" : "CLOTHING"
            },
            "cotton dress": {
                "Name": "cotton dress",
                "ShortDesc": "a {COLOR} cotton dress",
                "LongDesc": "This simple cotton dress is made from rough cotton.",
                "Slot": "Dress",
                "Restrict": ["Shirt", "Pants", "Dress", "Costume"],
                "Color": "blue",
                "Price": 50,
                "Style": "COMMON", "Type" : "ONE PIECE",
                "WearEffect": {"Femininity": [0, 5, 20]}
            },
            "sundress": {
                "Name": "sundress", "ShortDesc": "a cute {COLOR} floral sundress",
                "LongDesc": "This soft sundress has a cute floral pattern that is exceptionally girly.",
                "Slot": "Dress", "Restrict": ["Shirt", "Pants", "Dress", "Costume"], "Color": "pink", "Price": 100, "Style": "UNCOMMON", "Type" : "ONE PIECE",
                "WearEffect": {"Femininity": [0, 5, 50]}
            },
            "sexy dress": {
                "Name": "sexy dress",
                "ShortDesc": "a sexy {COLOR} mini dress",
                "LongDesc": "This daringly short dress hugs your body and lets everyone know it's for sale.",
                "Slot": "Dress",
                "Restrict": ["Shirt", "Pants", "Dress", "Costume"],
                "Color": "black",
                "Price": 250,
                "Style": "UNCOMMON", "Type" : "ONE PIECE",
                "WearEffect": {"Femininity": [0, 15, 60],  "Seduction" : [10,0,0]}
            },
            "stripper costume": {
                "Name": "stripper costume",
                "ShortDesc": "a tacky looking {COLOR} stripper costume",
                "LongDesc": "This costume consists of a two piece outfit with accessories that is designed to mimic a navy officers uniform, if the navy was a service filled with "+
                "brazen whores. The skirt is flared and too low, showing off your bottom. The top is tight and mostly open, it has patches that can be pulled off to reveal tassels hanging "+
                "off your tits from pasties that are shaped like anchors. Instead of sleeves or a collar it has little accessories designed to look like them, including the epaulets of the navy "+
                "suit jacket.",
                "Slot": "Costume",
                "Restrict": ["Shirt", "Pants", "Dress", "Costume"],
                "Color": "white",
                "Price": 450,
                "Style": "UNCOMMON", "Type" : "ONE PIECE",
                "WearEffect": {"Femininity": [0, 15, 60], "Perversion": [0, 5, 50]},
                "SkillBonus": {"Dancing": [10, 20, 0], "Singing": [10, 10, 0]}
            },
            "burlesque costume": {
                "Name": "burlesque costume",
                "ShortDesc": "a fancy {COLOR} burlesque costume",
                "LongDesc": "This costume is typical of the many burlesque dancers that entertain customers in taverns throughout the land. It has a variety of accessories and flair designed to be torn off as you strip.",
                "Slot": "Costume",
                "Restrict": ["Shirt", "Pants", "Dress", "Costume"],
                "Color": "red",
                "Price": 450,
                "Style": "UNCOMMON", "Type" : "ONE PIECE",
                "WearEffect": {"Femininity": [0, 15, 60], "Perversion": [0, 5, 50]},
                "SkillBonus": {"Dancing": [10, 20, 0], "Singing": [10, 10, 0]}
            },
            "maid costume": {
                "Name": "maid costume",
                "ShortDesc": "a frilly {COLOR} maid uniform",
                "LongDesc": "This is a typical maid costume that has been altered to showcase your ass and chest.",
                "Slot": "Costume",
                "Restrict": ["Shirt", "Pants", "Dress", "Costume"],
                "Color": "black",
                "Price": 450,
                "Style": "UNCOMMON", "Type" : "ONE PIECE",
                "WearEffect": {"Femininity": [0, 15, 60], "Perversion": [0, 5, 50]},
                "SkillBonus": {"Cooking": [20, 20, 0], "Cleaning": [20, 20, 0]}
            },
            "cat tail": {
                "Name": "cat tail", "ShortDesc": "a long furry {COLOR} cat tail anal plug",
                "LongDesc": "This large anal plug has a long furry cat tail attached to it. Wearing it will loosen your asshole and probably attract animal lovers.",
                "Slot": "Butt", "Restrict": ["Butt"], "Color": "black", "Price": 300, "Style": "COMMON", "Type" : "ACCESSORY",
                "WearEffect": {"Perversion": [0, 10, 50], "AssFucking": [0, 20, 30]}
            },
            "chastity cage": {
                "Name": "chastity cage", "ShortDesc": "a metal and leather chastity device",
                "LongDesc": "This cruel device constricts and crushes your genitals. Wearing it is not only painful but probably bad for your health.",
                "Slot": "Penis", "Restrict": ["Penis"], "Color": "black", "Price": 300, "Style": "COMMON", "Type" : "ACCESSORY", "Locked": 1,
                "WearEffect": {
                    "Perversion": [0, 10, 30],
                    "Penis": [0, -15, 0],
                    "Balls": [0, -15, 0]
                }
            },
            "cock ribbon": {
                "Name": "cock ribbon", "ShortDesc": "a cute little {COLOR} ribbon",
                "LongDesc": "This dainty little ribbon is meant to be tied on a sissy clit for decoration.",
                "Slot": "Penis", "Restrict": ["Penis"], "Color": "pink", "Price": 300, "Style": "COMMON", "Type" : "ACCESSORY",
                "WearEffect": {"Femininity": [0, 10, 30]}
            }
        };

window.App.Data.Cosmetics = {
            "hair accessories": {
                "Name": "haircare accessories",
                "ShortDesc": "hair accessories [x5]",
                "LongDesc": "A collection of cheap brushes, combs, ribbons and other accessories for styling hair.",
                "Type": "hair tool",
                "Charges": 5,
                "SkillBonus": {"Styling": [5, 0, 0]},
                "Price": 2
            },
            "hair products": {
                "Name": "haircare supplies",
                "ShortDesc": "haircare supplies [x5]",
                "LongDesc": "Various substances for styling and maintaining hair.",
                "Type": "hair treatment",
                "Charges": 5,
                "SkillBonus": {"Styling": [10, 0, 0]},
                "Price": 3
            },
            "basic makeup": {
                "Name": "basic makeup",
                "ShortDesc": "basic makeup [x5]",
                "LongDesc": "A collection of cheap makeup. Basic pigments and foundation with lipstick.",
                "Type": "basic makeup",
                "Charges": 5,
                "SkillBonus": {"Styling": [10, 0, 0]},
                "Price": 4
            },
            "expensive makeup": {
                "Name": "expensive makeup",
                "ShortDesc": "expensive makeup [x5]",
                "LongDesc": "A collection of nice makeup. It contains attractive pigments, eyeshadow and lipstick.",
                "Type": "expensive makeup",
                "Charges": 5,
                "SkillBonus": {"Styling": [20, 0, 0]},
                "Price": 6
            }
        };

// BOX TYPE     MINIMUM     BONUS ROLL  COLOR
// COMMON       0           0           grey
// UNCOMMON     20          10          lime
// RARE         30          20          cyan
// LEGENDARY    50          30          orange
window.App.Data.LootBoxes = {
    "common sissy loot box": {
        "Name": "common sissy chest",
        "ShortDesc": "@@color:grey;A small gift box shaped like a treasure chest@@",
        "LongDesc": "This small pink treasure chest sports an attractive heart pattern and is wrapped with a shiny white ribbon and bow.",
        "Message": "With unrestrained curiosity you tear open the treasure chest to find...\n\n",
        "Type": "LOOT_BOX",
        "Charges": 1,
        // Effect : [ TABLE, Minimum Roll, Bonus to roll
        "UseEffect": { "LootBox": ["SISSY_BIMBO", 0, 0]},
        "Price": 0
    },
    "uncommon pirate loot box": {
        "Name": "uncommon pirate chest",
        "ShortDesc": "@@color:lime;A studded iron treasure chest emblazoned with a skull and bones@@",
        "LongDesc": "This treasure chest is banded and studded with iron rivets. It has a white skull and bones on its top and smells faintly of the sea.",
        "Message": "With unrestrained curiosity you tear open the treasure chest to find...\n\n",
        "Type": "LOOT_BOX",
        "Charges": 1,
        // Effect : [ TABLE, Minimum Roll, Bonus to roll
        "UseEffect": { "LootBox": ["PIRATE_BDSM", 20, 10]},
        "Price": 0
    },
    "common food loot box": {
        "Name": "common food chest",
        "ShortDesc": "@@color:grey;A small crate used for storing foodstuff@@",
        "LongDesc": "This small crate looks rather shoddy and the contents rattle when you shake it.",
        "Message": "With unrestrained curiosity you tear open the treasure chest to find...\n\n",
        "Type": "LOOT_BOX",
        "Charges": 1,
        // Effect : [ TABLE, Minimum Roll, Bonus to roll
        "UseEffect": { "LootBox": ["FOOD", 0, 0]},
        "Price": 0
    }
};

window.App.Data.QuestItems = {
        "isla harbor mansion key": {
            "Name": "isla harbor mansion key",
            "ShortDesc": "@@color:purple;isla harbor mansion key@@",
            "LongDesc": "You obtained this backdoor key by letting Jarvis the butler pillage YOUR backdoor. It was hard work and your poor abused asshole leaked cum for hours afterwards, but now you can sneak into the mansion after dark.",
            "Type": "QUEST"
        },
        "14 inch purple dildo": {
            "Name": "14 inch purple dildo",
            "ShortDesc": "@@color:purple;a 14 inch purple dildo@@",
            "LongDesc": "This giant dildo is surprisingly rubbery with realistic veins and an equally impressive set of fake balls attached to you. Somewhat surprisingly you found this in the closet of your supposedly virginal girlfriend.",
            "Type": "QUEST"
        },
        "porno portfolio": {
            "Name": "porno portfolio",
            "ShortDesc": "@@color:purple;a portfolio of pornographic drawings@@",
            "LongDesc": "This leather portfolio is bound with string and contains numerous drawings of naked women engaged in various acts of fornication using all sorts of implements. You wonder why this was at the bottom of your girlfriends closet?",
            "Type": "QUEST"
        }
};
