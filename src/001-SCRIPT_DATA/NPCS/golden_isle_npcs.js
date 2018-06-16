App = App || { Data: { }, Entity: { } };

App.Data.NPCS = App.Data.NPCS || { };

App.Data.NPCS["Petey"] = {
    "Name": "Petey",
        "Mood": 40,
        "DailyMood": 0,
        "Lust": 40,
        "DailyLust": 10,
        "Title": "NPC_NAME O'Bannon, 'Re-purposed Goods Specialist'",
        "LongDesc": "NPC_NAME is a friendly looking middle aged man with a shock of red hair and a heavy smattering of freckles across his face. He's always game to make a deal or a trade, or just serve up a cold ale.",
        "Store": "SMUGGLERS"
};

App.Data.NPCS["Steve"] = {
    "Name": "Captain Steve",
        "Mood": 40,
        "DailyMood": 0,
        "Lust": 40,
        "DailyLust": 10,
        "Title": "NPC_NAME, Retired",
        "LongDesc": "This older gentlemen purports to have once been a fierce pirate Captain. The 'Kracken' that hangs in his shop being one of his so called legendary conquests. Despite how dubious this claim seems, and other than the occasional tall tale, he's more or less an honest merchant - for a retired pirate.",
        "Store" : "GOLDEN_GOODS"
};

App.Data.NPCS["Charmaine"] = {
    "Name": "Charmaine",
        "Mood": 40,
        "DailyMood": 0,
        "Lust": 40,
        "DailyLust": 10,
        "Title": "'Lady' NPC_NAME, Madame",
        // Description provided by Nynfeenia @ www.tfgamessite.com forums.
        "LongDesc": "Short, chubby and with shapeless face hidden under heavy layer of makeup Lady NPC_NAME may not be very beautiful. But apart from her rather ordinary looks, she is really polite and doesn’t lack very pleasant womanly charm. And for sure she has great taste and sense of style being able not only to hide her imperfections with correct choice of hairstyle or modelling corset and dress but at the same time make her overall look very elegant.",
        "Store" : "SAUCY_SLATTERN"
};

App.Data.NPCS["SlatternCustomers"] = {
    "Name" : "Saucy Slattern Customer", // This is a place holder and not meant to be used as an actual NPC.
        "Mood" : 50,
        "DailyMood" : -1,
        "Lust" : 100,
        "DailyLust" : 5,
        "Title" : "Customers of the Saucy Slattern",
        "LongDesc" : "A step above the common scum you're used to spreading your arse-cheeks for."
};

App.Data.NPCS["BAZAAR_STORE"] = {
    "Name": "Shop Keeper",
        "Mood": 40,
        "DailyMood": 0,
        "Lust": 40,
        "DailyLust": 0,
        "Title": "NPC_NAME of the Bazaar",
        "LongDesc": "Just a generic shop keeper, these guys breed like rabbits.",
        "Store" : "BAZAAR_STORE"
};

App.Data.NPCS["Justus"] = {
    "Name" : "Justus Clavicus",
    "Mood" : 50,
    "DailyMood" : -1,
    "Lust" : 100,
    "DailyLust" : 2,
    "Title" : "NPC_NAME, Captain of the Guard",
    "LongDesc" : "An older man, well into his fifth decade, but still strong and vital. An obvious veteran of many campaigns, his heavily muscled body is a map "+
        "of scars and old battle wounds. One of his eyes seems to have been injured, it is cloudy and blue."
};

App.Data.NPCS["GoldenIsleGuards"] = {
    "Name" : "Golden Isle Guards", // This is a place holder and not meant to be used as an actual NPC.
    "Mood" : 50,
    "DailyMood" : -1,
    "Lust" : 100,
    "DailyLust" : 2,
    "Title" : "Guards of Golden Isle",
    "LongDesc" : "A gang of ruffians and thugs employed as 'guards' by the Governor of Golden Isle."
};

App.Data.NPCS["Yvonne"] = {
    "Name" : "Madame Yvonne",
    "Mood" : 50,
    "DailyMood" : 0,
    "Lust" : 70,
    "DailyLust" : 2,
    "Title" : "NPC_NAME, the Lovely",
    "LongDesc" : "Despite her advanced years, NPC_NAME certainly lives up to her moniker. The signs of her age are barely noticeable, just a slight "+
        "wrinkle around an eye, or a small crease in a lip that disappears almost as soon as you spot it. Clearly as the proprietor of this salon, she "+
        "is at the top of her craft, but asides from that you can't help but suspect that she has had some magical or alchemical assistance beyond the means "+
        "of the average woman.",
    "Store" : "YVONNE_STORE"
};

//BELLA DARLING, Proprietor and Seamstress - Note: Mood/Lust values not adjusted//
App.Data.NPCS["Bella"] = {
    "Name": "Bella Darling",
    "Mood": 40,
    "DailyMood": 0,
    "Lust": 40,
    "DailyLust": 10,
    "Title": "NPC_NAME, Proprietor and Seamstress",
    "LongDesc": "Wearing her casual undress gown as well as other ladies do more formal clothing, her fashion-forward style and confident sensibility make her an admired shop mistress. Her dress' wide vertical stripes cover her bodice and skirts, dyed in cheerful candy colors, and project that she is always ready for happy diversions. However, her attentive, intelligent gaze instead promise that shopping will feel more fun. She looks over each customer with a practiced and insightful eye, often suggesting how to find a desired purchase without needing to be asked for it."
};

//THOMAS SHILLING, The Dancing Master - Note: Mood/Lust values not adjusted//
App.Data.NPCS["Shilling"] = {
    "Name": "Thomas Shilling",
    "Mood": 40,
    "DailyMood": 0,
    "Lust": 40,
    "DailyLust": 10,
    "Title": "NPC_NAME, The Dancing Master",
    "LongDesc": "A graceful man of mature age, his slender frame is the very model of vigor and health. His ordinary, buff-colored coat is coordinated with a simple set of waistcoat, breeches, and stockings, though his supple leather shoes are of the highest quality. He moves with confidence and agility, as suits an expert in the art of dancing."
};

App.Data.NPCS["Fineas Quincy"] = {
    "Name": "Fineas Quincy",
    "Mood": 40,
    "DailyMood": 0,
    "Lust": 40,
    "DailyLust": 10,
    "Title": "NPC_NAME, Apothecary",
    "LongDesc": "An experienced practitioner of physick, he plies his trade with a studied confidence. He is dressed in a first-rate white periwig, a long, black robe, and a broad, white falling band covering his throat and shoulders. Their combined effect creates a dignified, learned appearance."
};