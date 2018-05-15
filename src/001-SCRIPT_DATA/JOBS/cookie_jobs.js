App = App || { Data: { }, Entity: { } };
App.Data.JobData = App.Data.JobData || { };

App.Data.JobData["COOK01"] = {
    "ID": "COOK01", "TITLE": "Helping out in the Galley", "GIVER": "Cook", "PAY" : 10,
    "RATING" : 2, // of 5
    "PHASES" : [ 0, 1, 2, 3 ],
    "DAYS"   : 1,
    "HIDDEN" : false,
    "COST" : [  { "TYPE" : "TIME", "VALUE" : 1 },
        { "TYPE" : "STAT", "NAME" : "Energy", "VALUE" : 1 } ],
    "REQUIREMENTS" : [
        { "TYPE" : "SKILL", "NAME" : "Cooking", "VALUE" : 20, "CONDITION" : "gte" } ],
    "INTRO" :   "NPC_NAME says, \"PLAYER_NAME, you've become a decently good hand in the galley recently, so if you'd "+
    "like to earn some extra coin, how 'bout giving me an the boys a 'hand'... or an arse even! "+
    "Ye have no idea how boring it is to slop up gruel all day long - having a pBLOWJOBS like you "+
    "around'd be a nice change o' pace...\"",
    "START" : "",
    "SCENES" : [
        {
            "ID" : "SCENE01",
            "TRIGGERS" :[ ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [
                { "TAG": "A", "TYPE" : "SKILL", "NAME" : "Cooking", "DIFFICULTY" : 30, "REWARD" : "MONEY", "R_NAME" : "MONEY","VALUE" : 10, "OPT" : 0 }],
            "POST" : [
                { "TYPE" : "NPC_STAT", "NAME" : "Mood", "VALUE" : 5, "OPT" : 0 } ],
            "START" :   "The galley is small and cramped and it doesn't help matters that NPC_NAME himself is enormous. "+
            "You do your best to mostly try to stay out of the way, but every now and then his hands "+
            "seem to find you with a not so subtle shove or a grope of your pBUST chest or pASS ass.",
            "END" : "",
            "RESULTS" : [
                {"A":  25, "TEXT": "The @@distraction is too much for you@@ and you end up burning some food. That'll come out of your pay, or your ass, later."},
                {"A":  50, "TEXT": "Despite being distracted by the constant groping you @@manage to keep your food from burning@@."},
                {"A": 500, "TEXT": "You @@expertly manage to keep your eyes on the dishes@@ you are preparing even as your tits and ass are being "+
                "mauled by NPC_NAME and his staff. It seems you're quite used to being sexually harassed."} ]
        },
        {
            "ID" : "SCENE02",
            "TRIGGERS" :[
                { "TYPE" : "NPC_STAT", "NAME" : "Lust", "VALUE" : 80, "CONDITION" : "gte" }
            ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [
                { "TAG" : "B", "TYPE" : "SKILL", "NAME" : "Cooking", "DIFFICULTY" : 30, "REWARD" : "MONEY", "R_NAME" : "MONEY", "VALUE" : 10, "OPT" : 0 },
                { "TAG" : "C", "TYPE" : "SKILL", "NAME" : "AssFucking", "DIFFICULTY" : 30, "REWARD" : "MONEY","R_NAME" : "MONEY","VALUE" : 10, "OPT" : 0 }],
            "POST" : [
                { "TYPE" : "NPC_STAT", "NAME" : "Lust", "VALUE" : -20, "OPT" : 0 },
                { "TYPE" : "NPC_STAT", "NAME" : "Mood", "VALUE" : 5, "OPT" : 0 }
            ],
            "START" :   "You're chopping some vegetables for NPC_NAME's famous 'mystery stew' when you feel a pair of large arms "+
            "wrap around you. It's NPC_NAME and he whispers in your ear, \"Just relax and keep chopping those veggies slut.\" "+
            "You take a deep breath and continue chopping while his burly hands start removing your lower clothes. Within minutes "+
            "you feel something wet and slick being rubbed all over your asshole and shortly after that the sensation of NPC_NAME's "+
            "cock being pushed up against your sphincter.",
            END : "NPC_NAME cleans off his cock on a nearby rag and wanders off, leaving you humiliated and with a slippery ass dripping cum.",
            "RESULTS" : [
                {"B":  25, "TEXT":  "You try to steady yourself, but the feeling of the rough penetration is too much for your inexperienced ass and @@you "+
                "make a huge mess of the vegetables@@ as NPC_NAME pillages your butt hole."},
                {"B":  50, "TEXT":  "It's difficult, but you @@somehow manage to not make too much of a mess@@ as NPC_NAME rams his tool up your slick asshole."},
                {"B": 500, "TEXT":  "You steel yourself for a moment and force your asshole to gape open so as to accommodate NPC_NAME's tool. Doing so allows "+
                "him to easily achieve maximum penetration into your sissy ass and @@keeps you from ruining the food in front of you@@."},
                {"C":  25, "TEXT":  "He pumps away at your pASS butt for what seems like ages, you try to encourage him, just to get the ordeal over, but it "+
                "@@doesn't seem to have much effect@@. Eventually he does manage to climax, and dumps a hot load of cum up your whore ass."},
                {"C":  50, "TEXT":  "He ravages your whore ass, pushing his meaty cock so deep into you that you @@gasp in a mixture of pain and arousal@@. This goes on "+
                "for a long time until you feel his cock twitch and start squirting hot jizz up your pASS butt."},
                {"C": 500, "TEXT":  "He plows your whore ass with extreme vigour and you do your best to respond and encourage him, @@grinding your own ass against "+
                "his cock and bucking your hips in time with him@@. It doesn't take long for NPC_NAME to loudly groan and climax, his meaty cock shooting an "+
                "enormous amount of cum up your backside. As he pulls out, NPC_NAME gives you a swat on the ass and says, \"Good job, whore.\""}]
        },
        {
            "ID" : "SCENE03",
            "TRIGGERS" :[
                { "TYPE" : "RANDOM-100", "VALUE" : 33, "CONDITION" : "lte" } ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [ ],
            "POST" : [
                { "TYPE" : "FOOD", "NAME" : "bread crust", "VALUE" : 3, "OPT" : "RANDOM" }
            ],
            "START" :   "The work in the galley is winding down and there are less people about, you take the opportunity to pocket a few crusts of bread.",
            "END" : "",
            "RESULTS" : [ ]
        },
        {   // If pass both cooking checks and If counter is at MAX (5), reward player and set counter to 0.
            "ID" : "SCENE04a",
            "TRIGGERS" :[
                { "TYPE" : "TAG", "NAME" : "A", "VALUE" : 100, "CONDITION" : "gte" },
                { "TYPE" : "TAG", "NAME" : "B", "VALUE" : 100, "CONDITION" : "gte" },
                { "TYPE" : "COUNTER", "NAME" : "COOKIE_LOOT", "VALUE" : 5, "CONDITION" : "gte" }
            ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [ ],
            "POST" : [
                { "TYPE" : "FLAG",      "NAME" : "COOKIE_LOOT",             "VALUE" :   0,  "OPT" : "SET" },
                { "TYPE" : "FLAG",      "NAME" : "COOKIE_REWARD",           "VALUE" :   1,  "OPT" : "SET" },
                { "TYPE" : "LOOT_BOX",  "NAME" : "common food loot box",    "VALUE" : 1,    "OPT" : "" }
            ],
            "START" :   "NPC_NAME says, \"Here, you've earned this PLAYER_NAME\" He hands you a small wooden crate, you wonder what's inside it?",
            "END" : "",
            "RESULTS" : [ ]
        },
        {   // If passed both cooking checks then increment counter. Doesn't trigger if the counter is already at MAX (5) or the reward has been given this time.
            "ID" : "SCENE04b",
            "TRIGGERS" :[
                { "TYPE" : "TAG", "NAME" : "A", "VALUE" : 100, "CONDITION" : "gte" },
                { "TYPE" : "TAG", "NAME" : "B", "VALUE" : 100, "CONDITION" : "gte" },
                { "TYPE" : "COUNTER", "NAME" : "COOKIE_LOOT", "VALUE" : 4, "CONDITION" : "lte" },
                { "TYPE" : "FLAG", "NAME" : "COOKIE_REWARD",  "OPT" : "NOT_SET" }
            ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [ ],
            "POST" : [
                { "TYPE" : "COUNTER",   "NAME" : "COOKIE_LOOT",    "VALUE" :   1,  "OPT" : 1 }
            ],
            "START" :   "NPC_NAME says, \"Nice work today. It's a pleasure to have you around the galley... in more ways than one. Keep it up and I might slip you a little bit something extra...\"",
            "END" : "",
            "RESULTS" : [ ]
        },
        {   // Just unset the flag that shows we received loot and make sure we clear the counter.
            "ID" : "SCENE04c",
            "TRIGGERS" :[
                { "TYPE" : "FLAG", "NAME" : "COOKIE_REWARD", "OPT" : "SET" }
            ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [ ],
            "POST" : [
                { "TYPE" : "FLAG",   "NAME" : "COOKIE_REWARD",  "OPT" : "DELETE" }
            ],
            "START" : "",
            "END" : "",
            "RESULTS" : [ ]
        }
    ],
    "END" : "Finally, your shift in the galley is over. NPC_NAME comes up to you and says, \"JOB_RESULTS\" He then hands you some coins.",
    "JOB_RESULTS" : [
        { "A" :  25,  "TEXT" : "Your @@cooking was pretty horrible@@, don't complain about the pay." },
        { "A" :  50, "TEXT" : "Your @@cooking was passable@@, but then again these slobs here aren't used to fine chow anyway." },
        { "A" : 500, "TEXT" : "I'm impressed that your @@cooking was so good@@. Who knew you had that kind of talent as well?" },
        { "C" :  25, "TEXT" : "How can you be such @@a bad fuck@@? You'd think after all the dicks you've taken you'd be halfway decent at it by now." },
        { "C" :  50, "TEXT" : "Your ass @@was pretty good@@ - but I think you need more practice. Like tomorrow, and here." },
        { "C" : 500, "TEXT" : "But who cares about your cooking when you can @@work a cock with your ass like that@@. Come back later if you want some more fun." }
    ]
};

App.Data.JobData["COOK02"] = {
    "ID": "COOK02", "TITLE": "Cooking Lessons", "GIVER": "Cook", "PAY" : 0,
    "RATING" : 1, // of 5
    "PHASES" : [ 0, 1, 2, 3 ],
    "DAYS"   : 1,
    "HIDDEN" : false,
    "COST" : [
        { "TYPE" : "TIME",  "VALUE" : 1 },
        { "TYPE" : "STAT",  "NAME" : "Energy", "VALUE" : 1 },
        { "TYPE" : "MONEY", "VALUE" : 20 } ],
    "REQUIREMENTS" : [
        { "TYPE" : "SKILL", "NAME" : "Cooking", "VALUE" : 5,  "CONDITION" : "gte" } ],
    "INTRO" :
    "NPC_NAME says, \"We can always use help in the galley PLAYER_NAME. If your skill at cooking is too low then I could give you "+
    "a 'personal lesson' for a small fee...\"",
    "START" :
    "NPC_NAME leads you to the back of the galley and to a large table where he has laid out a collection of cooking tools and ingredients. "+
    "You're actually surprised that he's put so much thought into this considering the quality of the food it that the pirates on board the "+
    "ship eat.",
    "SCENES" : [
        {
            "ID" : "SCENE01",
            "TRIGGERS" :[ ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [
                { "TAG" : "A", "TYPE" : "SKILL", "NAME" : "Cooking", "DIFFICULTY" : 30, "REWARD" : "NONE", "R_NAME" : "NONE", "VALUE" : 100, "OPT" : 0 }
            ],
            "POST" : [
                { "TYPE" : "SKILL_XP", "NAME" : "Cooking", "VALUE" :  10, "OPT" : 0 },
                { "TYPE" : "SKILL_XP", "NAME" : "Cooking", "VALUE" : 100, "OPT" : "RANDOM" }
            ],
            "START" :
            "NPC_NAME starts by giving you some basic instruction on how to use various tools and implements in the galley. He then goes into a "+
            "practical demonstration of some simple dishes, their ingredients and their preparation. After watching him it's then your turn to "+
            "try and repeat the recipes.",
            "END" : "",
            "RESULTS" : [
                {"A":  25, "TEXT":  "Unfortunately it seems that the lesson didn't really stick well with you and your @@dishes came out horrible@@. NPC_NAME isn't pleased with the result."},
                {"A":  50, "TEXT":  "With a small amount of effort you manage to cook a @@dish that isn't half bad@@. NPC_NAME takes a few tastes and nods his head with slight approval."},
                {"A": 500, "TEXT":  "You take your time and manage to @@skillfully recreate the dishes@@ that you were shown. NPC_NAME looks at them, takes a few tastes and then nods with approval."} ]
        },
        {
            "ID" : "SCENE02",
            "TRIGGERS" :[
                { "TYPE" : "NPC_STAT", "NAME" : "Lust", "VALUE" : 50, "CONDITION" : "gte" }
            ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [
                { "TAG" : "B", "TYPE" : "SKILL", "NAME" : "BlowJobs", "DIFFICULTY" : 30, "REWARD" : "MONEY", "R_NAME" : "MONEY", "VALUE" : 10, "OPT" : 0 }
            ],
            "POST" : [
                { "TYPE" : "NPC_STAT",  "NAME" : "Lust",        "VALUE" : -20,  "OPT" : 0 },
                { "TYPE" : "NPC_STAT",  "NAME" : "Mood",        "VALUE" : 5,    "OPT" : 0 },
                { "TYPE" : "STAT",      "NAME" : "Nutrition",   "VALUE" : 5,    "OPT" : 0 }
            ],
            "START" :
            "After the cooking lesson, NPC_NAME comes to you and says, \"Now that we've got that out of the way, how about you get on your knees "+
            "here and try to earn back a little bit of your tuition with that slutty mouth of yours?\" NPC_NAME doesn't even wait for you to respond before he "+
            "pushes you down by the shoulder and fishes his stiffening cock from his trousers. You wince internally a bit, but then resign yourself to having to suck "+
            "his sweaty cock. He pushes his turgid meat against your pLIPS lips and you begin to slowly lick the glans of his penis trying to arouse him.",
            END :
                "NPC_NAME pulls up his trousers and gives you a rough pat on the head and then walks away.",
            "RESULTS" : [
                {"B":  25, "TEXT":
                "Without warning NPC_NAME shoves his dick full in your mouth. You try to accommodate his massive meat pole @@but you struggle to "+
                "find the right movement and tempo@@. Not that it matters much because NPC_NAME simply grabs your head and then forcibly rams his dick down your throat until he cums.\n\n"+
                "NPC_NAME says, \"That was horrible PLAYER_NAME. You should be paying me for that kind of shitty blow job. Go get some more practice god damn it, it's not like there "+
                "isn't a ship full of dicks to suck here.\""},
                {"B":  50, "TEXT":
                "You take NPC_NAME's stiffening cock in your mouth and @@begin to suck on it in earnest@@. Within moments he is starting to moan and you increase " +
                "the pleasure by bobbing your head up and down on his shaft, the tip of his dick tickling the back of your throat. After a few minutes of this treatment NPC_NAME grabs "+
                "a hold of your head and rams his dick in as far as it can go, you know what this means and do your best to relax so that he can shoot his load straight into your gullet.\n\n" +
                "NPC_NAME says, \"Not bad PLAYER_NAME, I'll give you back JOB_PAY coins.\""},
                {"B": 500, "TEXT":
                "@@You easily swallow his dick@@ and within moments you have it sufficiently lubricated and your throat relaxed enough to be able to take him down "+
                "so deeply that he's quickly moaning and panting in pleasure. You toy with the tempo and your tongue movements until he's almost about to pass out from the stimulation and then "+
                "he suddenly starts shooting his load directly into your mouth. There's so much of it that it's a real struggle to swallow it all down.\n\n"+
                "NPC_NAME says, \"Not bad PLAYER_NAME, I'll give you back JOB_PAY coins.\""} ]
        },
        {
            "ID" : "SCENE03",
            "TRIGGERS" :[
                { "TYPE" : "RANDOM-100", "VALUE" : 50, "CONDITION" : "lte" } ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [ ],
            "POST" : [
                { "TYPE" : "FOOD", "NAME" : "bread crust", "VALUE" : 3, "OPT" : "RANDOM" }],
            "START" :
            "With the lesson in galley over, you notice an opportunity for you to steal some food. Normally you're not a thief, but these are not "+
            "normal times. When you're sure no one is looking you manage to swipe some bread crusts. At least it's better than the semen gruel they keep feeding you.",
            "END" : "",
            "RESULTS" : [ ]
        }
    ],
    "END" :
        "You feel like you made some JOB_RESULTS.",
    "JOB_RESULTS" : [
        { "A" :  25,  "TEXT" : "@@minimal progress@@ today" },
        { "A" :  50, "TEXT" : "@@moderate progress@@ today" },
        { "A" : 500, "TEXT" : "@@good progress@@ today" },
        { "B" :  25, "TEXT" : " even if you did have to @@suck a cock@@ to get the lesson" },
        { "B" :  50, "TEXT" : " even if you did have to @@suck a cock@@ to get the lesson" },
        { "B" : 500, "TEXT" : " even if you did have to @@suck a cock@@ to get the lesson" }
    ]

};

App.Data.JobData["COOK03"] = {
    "ID": "COOK03", "TITLE": "A 'Free Meal'", "GIVER": "Cook", "PAY" : 0,
    "RATING" : 1, // of 5
    "PHASES" : [ 0, 1, 2, 3 ],
    "DAYS"   : 1,
    "HIDDEN" : true,
    "COST" : [
    { "TYPE" : "TIME",  "VALUE" : 1 },
    { "TYPE" : "STAT",  "NAME" : "Energy", "VALUE" : 1 }],
    "REQUIREMENTS" : [
    { "TYPE" : "STAT",      "NAME" : "Nutrition",   "VALUE" : 70,   "CONDITION" : "lte" },
    { "TYPE" : "NPC_STAT",  "NAME" : "Lust",        "VALUE" : 60,   "CONDITION" : "gte" }
],
    "INTRO" :
    "NPC_NAME says, \"You're looking a little hungry PLAYER_NAME... and I don't just mean for cock. Tell you what, if you want to get a "+
    "'free meal' I might be willing to oblige if you have a little fun with me in return.\" He gestures his head in the direction of a "+
    "large 'high chair' across the room, the kind you might feed a child from, but obviously built for an adult. You have a bad feeling about this.",
        "START" :
    "NPC_NAME leads you over to the looming high chair and shoves you into it. Before you can even catch your breath, you find yourself "+
    "locked in behind the large wooden tray. Just as you are about to protest, NPC_NAME puts one of his massive fingers against your lips "+
    "and goes, \"Shh... just be quiet like a good little sissy baby.\"\n\n"+
    "He then manacles you to the chair and produces a large pink bonnet that he secures to your head as well as a frilly pink bib that he "+
    "places around your neck. He chuckles mirthfully to himself and then says, \"One minute sissy girl. Daddy has a treat for you.\" You  "+
    "hear some shuffling behind you as NPC_NAME rummages around in the kitchen. Within moments he returns with a large bowl of yellowish "+
    "goop and ominously, no spoon. He sets the bowl down on the counter next to him and pulls down his trousers, revealing a fat and massive cock.",
        "SCENES" : [
    {
        "ID" : "SCENE01",
        "TRIGGERS" :[ ],
        "TRIGGERS_ANY" : [ ],
        "CHECKS" : [
            { "TAG" : "A", "TYPE" : "SKILL", "NAME" : "BlowJobs", "DIFFICULTY" : 30, "REWARD" : "NPC_STAT", "R_NAME" : "Mood", "VALUE" : 10, "OPT" : 0 }
        ],
        "POST" : [
            { "TYPE" : "STAT_XP",   "NAME" : "Nutrition",   "VALUE" : 100,  "OPT" : 0 },
            { "TYPE" : "STAT",      "NAME" : "Nutrition",   "VALUE" :  20,  "OPT" : 0 },
            { "TYPE" : "BODY_XP",   "NAME" : "Lips",        "VALUE" :  50,  "OPT" : 0 },
            { "TYPE" : "BODY_XP",   "NAME" : "Lips",        "VALUE" : 100,  "OPT" : "RANDOM" },
            { "TYPE" : "STAT_XP",   "NAME" : "Hormones",    "VALUE" : 100,  "OPT" : "RANDOM" },
            { "TYPE" : "STAT_XP",   "NAME" : "WillPower",   "VALUE" : -20,  "OPT" : 0 },
            { "TYPE" : "NPC_STAT",  "NAME" : "Mood",        "VALUE" :   5,  "OPT" : 0 },
            { "TYPE" : "NPC_STAT",  "NAME" : "Lust",        "VALUE" : -20,  "OPT" : 0 }
        ],
        "START" :
        "With one hand he scoops up some of the mysterious goop and slathers a large heaping on his turgid member. He approaches you eagerly, "+
        "his massive cock waving in front of your face.\n\n NPC_NAME says, \"Now be a good sissy and open wide...\"\n\n"+
        "You quickly turn your head away, but it's to no avail as NPC_NAME easily palms your entire skull with one of his massive meat hooks and "+
        "turns you to face his cock. Without much ceremony he pushes his meat past your pLIPS lips.\n\n"+
        "Inwardly you sigh. This entire act is humiliating and degrading, but you're the one that wanted a free meal. Faking a smile you lean forward "+
        "and start licking the goop from NPC_NAME's dick, taking care to run your tongue and pLIPS lips over his glans while consuming as much of the 'food' as you can.\n\n"+
        "NPC_NAME continues feeding you this way by putting more and more of the mystery gruel on his cock and forcing it past your lips. Somewhere "+
        "after the fourth or fifth serving you start to feel your head get light and your lips start to tingle. Without even noticing it you have been "+
        "absently slurping and licking the gruel off his massive member and licking your lips in between servings. Eventually NPC_NAME gets tired of "+
        "the game and begins to fuck your face in earnest. You think that this is supposed to hurt, but for some reason your entire face and brain feel numb. "+
        "Maybe there was something in the gruel?\n\n"+
        "NPC_NAME grabs your head and forces it down on his pole. The strength of this man is not to be underestimated as he easily buries "+
        "your pLIPS lips down to the root of his shaft. You feel his already massive member swell in size and then start to spasm as he shoots an enormous "+
        "amount of cum past your tonsils and down your throat.",
        "END" :
            "After all is said and done and after NPC_NAME has unlocked you from the chair, you let out a small burp flavored with sperm and say to yourself, \"I guess there's no such thing as a 'free meal'\"",
        "RESULTS" : [
            {"A": 25,    "TEXT": "NPC_NAME says, \"That was fun, but you're a @@lousy cock sucker@@. Oh well at least you'll have time to learn.\""},
            {"A": 50,   "TEXT": "NPC_NAME says, \"Not bad PLAYER_NAME. Not bad at all. You keep @@sucking my dick like that@@ and I might keep you as my personal little girl.\""},
            {"A": 500,  "TEXT": "NPC_NAME says, \"Damn you're a pretty @@good cock sucker@@ ain't ya? Come back later if you want to 'fill your belly' again slut.\""}
        ]
    }
],
    "END" : "",
    "JOB_RESULTS" : [ ]
};

