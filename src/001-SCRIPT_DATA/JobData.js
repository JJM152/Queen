window.App = window.App || { Data: { }, Entity: { } };

window.App.Data.JobData = {
    "COOK01": {
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
        "END" : "Finally, your shift in the galley is over. NPC_NAME comes up to you and says, \"JOB_RESULTS\" He then hands you JOB_PAY coins.",
        "JOB_RESULTS" : [
            { "A" :  25,  "TEXT" : "Your @@cooking was pretty horrible@@, don't complain about the pay." },
            { "A" :  50, "TEXT" : "Your @@cooking was passable@@, but then again these slobs here aren't used to fine chow anyway." },
            { "A" : 500, "TEXT" : "I'm impressed that your @@cooking was so good@@. Who knew you had that kind of talent as well?" },
            { "C" :  25, "TEXT" : "How can you be such @@a bad fuck@@? You'd think after all the dicks you've taken you'd be halfway decent at it by now." },
            { "C" :  50, "TEXT" : "Your ass @@was pretty good@@ - but I think you need more practice. Like tomorrow, and here." },
            { "C" : 500, "TEXT" : "But who cares about your cooking when you can @@work a cock with your ass like that@@. Come back later if you want some more fun." }
        ]

    },
    "COOK02": {
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

    },
    "COOK03": {
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
    },
    "QUAR01": {
        "ID": "QUAR01", "TITLE": "Helping down in the hold", "GIVER": "Quartermaster", "PAY" : 10,
        "RATING" : 1, // of 5
        "PHASES" : [ 0, 1 ],
        "DAYS"   : 1,
        "HIDDEN" : false,
        "COST" : [
            { "TYPE" : "TIME",  "VALUE" : 2 },
            { "TYPE" : "STAT",  "NAME" : "Energy", "VALUE" : 2 }],
        "REQUIREMENTS" : [
        ],
        "INTRO" :
        "NPC_NAME says, \"If you're looking for a way to earn some extra coin, I usually need help cleaning up and taking stock down here in the hold "+
        "every morning. It's backbreaking work and pays like shit, but maybe it's better than sucking dick all day?\"",
        "START" : "",
        "SCENES" : [
            {
                "ID" : "SCENE01",
                "TRIGGERS" :[ ],
                "TRIGGERS_ANY" : [ ],
                "CHECKS" : [
                    { "TAG" : "A", "TYPE" : "SKILL", "NAME" : "Cleaning", "DIFFICULTY" : 50, "REWARD" : "MONEY", "R_NAME" : "MONEY", "VALUE" : 10, "OPT" : 0 }
                ],
                "POST" : [
                    { "TYPE" : "STAT_XP",   "NAME" : "Fitness",     "VALUE" :  50,  "OPT" : 0 },
                    { "TYPE" : "NPC_STAT",  "NAME" : "Mood",        "VALUE" :  10,  "OPT" : 0 }
                ],
                "START" :
                    "The cargo hold is vast, dark and dirty. It's a huge amount of tiring work, but thankfully you're so far out of the way "+
                    "that most of the crew leaves you alone to get on with it. That's not to say that this lack of distraction makes this an "+
                    "easy good, not at all. In fact, you find the work rather difficult and exhausting. The boxes are heavy and dust is " +
                    "covering everything. Occasionally you are surprised by the presence of a small rodent or spider - stow aways on the ship, much like you.\n\n",
                "END" : "",
                "RESULTS" : [
                    {"A": 25,   "TEXT":
                        "The work is back breaking and grueling, but you manage to work for a couple of hours and get the majority of the task done. "+
                        "While keeping any semblance of order down here in the hold is probably impossible, for today at least @@you've done your part@@."},
                    {"A": 50,   "TEXT":
                        "The work is back breaking and grueling, but you manage to work for a couple of hours and get the majority of the task done. "+
                        "At the end of the shift, while not perfect, the area is @@much improved@@."},
                    {"A": 500,  "TEXT":
                        "The work is back breaking and grueling, but you manage to work for a couple of hours and get the majority of the task done. "+
                        "Taking a break to wipe the sweat from your eyes, you look upon your handy work with a @@sense of satisfaction@@."}
                ]
            },
            {
                "ID" : "SCENE02",
                "TRIGGERS" :[
                    { "TYPE" : "RANDOM-100", "VALUE" : 33, "CONDITION" : "lte" } ],
                "TRIGGERS_ANY" : [ ],
                "CHECKS" : [ ],
                "POST" : [
                    { "TYPE" : "DRUGS", "NAME" : "medicinal herbs", "VALUE" : 1, "OPT" : 0 }],
                "START" :
                    "While cleaning, out of the corner of your eye you spot a small pouch of herbs. These must belong to NPC_NAME, " +
                    "or he must have lost them. With a quick glance to make sure no one is looking, you snatch them up.",
                "END" : "",
                "RESULTS" : [ ]
            }
        ],
        "END" : "NPC_NAME comes up to you and says, \"JOB_RESULTS\" He then hands you JOB_PAY coins.",
        "JOB_RESULTS" : [
            { "A" :  25,  "TEXT" : "Well, I guess that's @@better than nothing@@." },
            { "A" :  50, "TEXT" : "Hmm... @@not too bad@@. You certainly know your way around a broom." },
            { "A" : 500, "TEXT" : "That's a @@pretty good job@@ PLAYER_NAME. Come back again sometime for more work." }
        ]
    },
    "QUAR02": {
        "ID": "QUAR02", "TITLE": "Human Experimentation", "GIVER": "Quartermaster", "PAY" : 20,
        "RATING" : 3, // of 5
        "PHASES" : [ 0, 1, 2 ],
        "DAYS"   : 3,
        "HIDDEN" : false,
        "COST" : [
            { "TYPE" : "TIME",  "VALUE" : 2 },
            { "TYPE" : "STAT",  "NAME" : "Energy", "VALUE" : 3 }],
        "REQUIREMENTS" : [
        ],
        "INTRO" :
            "NPC_NAME says, \"You know, I've got this new special 'substance' that I've been working on. The effects are currently unknown. "+
            "How about it? Are you willing to be my human guinea pig? It shouldn't be dangerous... or at least fatal... hopefully. I can "+
            "pay you a bit of coin for your time and who knows... I might discover something useful?\"",
        "START" :
            "NPC_NAME takes you to a dark corner of the cargo hold, it's a small area set off to the side with ramshackle "+
            "partitions made of scavenged wood and cloth. He motions for you to take a seat on a long table, which you do "+
            "and then he proceeds to tinker with some alchemical equipment.\n\n"+
            "NPC_NAME says, \"Now... I can't honestly say what will happen PLAYER_NAME, but it shouldn't be fatal.\"\n\n"+
            "He coughs for a moment and mutters under his breath, \"Probably...\"\n\n"+
            "Before you have time to reconsider if this is a wise idea or not, NPC_NAME approaches you with a vial filled to "+
            "the brim with a strange bubbling liquid. He holds it up to your pLIPS lips and says, \"Come now, PLAYER_NAME, just the tip here...\"\n\n"+
            "It's not the first time you've heard that on this ship.\n\n"+
            "Hesitantly you swallow the liquid. It burns your throat as it goes down. Minutes pass by and you don't seem to notice any "+
            "immediate effects. Then, suddenly, your vision goes blurry. You try to inform NPC_NAME of this, but your words come out "+
            "sodden and slurry. The room is spinning and everything becomes incredibly colourful and loud.",
        "SCENES" : [
            {
                "ID" : "SCENE01",
                "TRIGGERS" :[ ],
                "TRIGGERS_ANY" : [ ],
                "CHECKS" : [
                    { "TAG" : "A", "TYPE" : "SKILL", "NAME" : "AssFucking", "DIFFICULTY" : 30, "REWARD" : "MONEY", "R_NAME" : "MONEY", "VALUE" : 10, "OPT" : 0 }
                ],
                "POST" : [
                    { "TYPE" : "STAT_XP",   "NAME" : "Nutrition",   "VALUE" : -50,  "OPT" : 0 },
                    { "TYPE" : "STAT",      "NAME" : "Toxicity",    "VALUE" :  20,  "OPT" : 0 },
                    { "TYPE" : "STAT",      "NAME" : "Toxicity",    "VALUE" : 100,  "OPT" : "RANDOM" },
                    { "TYPE" : "STAT_XP",   "NAME" : "Hormones",    "VALUE" : 100,  "OPT" : "RANDOM" },
                    { "TYPE" : "STAT_XP",   "NAME" : "Hormones",    "VALUE" : 100,  "OPT" : 0 },
                    { "TYPE" : "STAT_XP",   "NAME" : "WillPower",   "VALUE" : -50,  "OPT" : "RANDOM" },
                    { "TYPE" : "BODY_XP",   "NAME" : "Ass",         "VALUE" :  50,  "OPT" : 0 },
                    { "TYPE" : "BODY_XP",   "NAME" : "Ass",         "VALUE" :  100, "OPT" : "RANDOM" },
                    { "TYPE" : "NPC_STAT",  "NAME" : "Mood",        "VALUE" :  10,  "OPT" : 0 },
                    { "TYPE" : "NPC_STAT",  "NAME" : "Lust",        "VALUE" : -10,  "OPT" : 0 },
                    { "TYPE" : "COUNTER",   "NAME" : "CARGO_XP",    "VALUE" :   1,  "OPT" : 1 }
                ],
                "START" :
                    "NPC_NAME says, \"Ah, I see it's taken effect. Now to wait and see what happens...\"\n\n"+
                    "He looks at you for a moment and then seems to have an idea. He quickly comes over to you and rolls you over on "+
                    "your stomach, your legs danging over the table and revealing your pASS ass. The last thing you hear before you lose "+
                    "consciousness is the phrase, \"Well, at least this gives me something to do while I wait.\""+
                    "...\n....\n.....\n......\n.......\n........\n",
                "END" :
                    "\n\nYou start collecting your thing (how did you clothes end up on the floor?) and you notice NPC_NAME is sitting at "+
                    "a desk going over some papers. He turns around to face you...",
                "RESULTS" : [
                    {"A":  50,   "TEXT": "You wake up hours later, still groggy and with a suspiciously slippery and @@sore ass@@."},
                    {"A": 500,   "TEXT": "You wake up hours later, still groggy and with what you suspect is a @@thoroughly fucked ass@@"}
                ]
            },
            {
                "ID" : "SCENE02",
                "TRIGGERS" :[
                    { "TYPE" : "COUNTER",   "NAME" : "CARGO_XP",        "VALUE" :   10, "CONDITION" : "gte",    "OPT" : "RANDOM" },
                    { "TYPE" : "FLAG",      "NAME" : "CARGO_DISCOVER1", "OPT" : "NOT_SET" }
                ],
                "TRIGGERS_ANY" : [ ],
                "CHECKS" : [
                ],
                "POST" : [
                    { "TYPE" : "MONEY",     "NAME" : "MONEY",           "VALUE" :  50,          "OPT" : 0           },
                    { "TYPE" : "MONEY",     "NAME" : "MONEY",           "VALUE" :  50,          "OPT" : "RANDOM"    },
                    { "TYPE" : "FLAG",      "NAME" : "CARGO_DISCOVER1", "VALUE" :   1,          "OPT" : "SET"       },
                    { "TYPE" : "FLAG",      "NAME" : "CARGO_XP",        "VALUE" :   0,          "OPT" : "SET"       },
                    { "TYPE" : "NPC_STAT",  "NAME" : "Mood",            "VALUE" :  10,          "OPT" : 0           },
                    { "TYPE" : "STORE",     "NAME" : "CARGO",           "VALUE" :  "khafkir",   "OPT" : "UNLOCK"    }
                ],
                "START" :
                "NPC_NAME says, \"Ah, PLAYER_NAME, you're up! Well, I have good news - it seems that the test results are in and "+
                "I've been able to re-create an old brew from these notes the Captain found. Thanks for your help... here have some extra coin "+
                "and if you're interested, a new drink should be available in my shop... it's a liquor called \"Khafkir\" and it supposedly "+
                "has some quite strong healing properties.",
                "END" : "",
                "RESULTS" : []
            },
            {
                "ID" : "SCENE03",
                "TRIGGERS" :[
                    { "TYPE" : "COUNTER",   "NAME" : "CARGO_XP",        "VALUE" :   10, "CONDITION" : "gte",    "OPT" : "RANDOM" },
                    { "TYPE" : "FLAG",      "NAME" : "CARGO_DISCOVER1", "OPT" : "SET" },
                    { "TYPE" : "FLAG",      "NAME" : "CARGO_DISCOVER2", "OPT" : "NOT_SET" }
                ],
                "TRIGGERS_ANY" : [ ],
                "CHECKS" : [
                ],
                "POST" : [
                    { "TYPE" : "MONEY",     "NAME" : "MONEY",           "VALUE" :  50,              "OPT" : 0           },
                    { "TYPE" : "MONEY",     "NAME" : "MONEY",           "VALUE" :  50,              "OPT" : "RANDOM"    },
                    { "TYPE" : "FLAG",      "NAME" : "CARGO_DISCOVER2", "VALUE" :   1,              "OPT" : "SET"       },
                    { "TYPE" : "FLAG",      "NAME" : "CARGO_XP",        "VALUE" :   0,              "OPT" : "SET"       },
                    { "TYPE" : "NPC_STAT",  "NAME" : "Mood",            "VALUE" :  10,              "OPT" : 0           },
                    { "TYPE" : "STORE",     "NAME" : "CARGO",           "VALUE" :  "siren elixir",  "OPT" : "UNLOCK"    }
                ],
                "START" :
                "NPC_NAME says, \"Ah, PLAYER_NAME, you're up! Well, I have good news - it seems that the test results are in and "+
                "I've been able to re-create an old brew from these notes the Captain found. Thanks for your help... here have some extra coin "+
                "and if you're interested, a new potion should be available in my shop... it's an elixir called \"Siren's Tears\" and it supposedly "+
                "has the power to instill tranquility in a person. Amazing!",
                "END" : "",
                "RESULTS" : []
            }
        ],
        "END" :
            "NPC_NAME tosses a small bag of JOB_PAY coins at you and then waves you on his way, continuing to furiously study at his notes.",
        "JOB_RESULTS" : [ ]
    },
    "MATE01": {
        "ID": "MATE01", "TITLE": "Personal Whore", "GIVER": "FirstMate", "PAY" : 20,
        "RATING" : 4, // of 5
        "PHASES" : [ 1, 2, 3 ],
        "DAYS"   : 1,
        "HIDDEN" : false,
        "COST" : [
            { "TYPE" : "TIME",  "VALUE" : 1 },
            { "TYPE" : "STAT",  "NAME" : "Energy", "VALUE" : 2 }],
        "REQUIREMENTS" : [
            { "TYPE" : "BODY",      "NAME" : "Bust",        "VALUE" :  5,   "CONDITION" : "gte" },
            { "TYPE" : "NPC_STAT",  "NAME" : "Lust",        "VALUE" : 60,   "CONDITION" : "gte" }
        ],
        "INTRO" :
            "NPC_NAME leers at your pBUST tits and says, Well, it looks like you're packing quite a bit up top these days. How about you be my personal whore for the "+
            "pPHASE and I make it worth your while? A bit of coin for a bit of fun... with your funbags.",
        "SCENES" : [
            {
                "ID" : "SCENE01",
                "TRIGGERS" :[ ],
                "TRIGGERS_ANY" : [ ],
                "CHECKS" : [
                    { "TAG" : "A", "TYPE" : "STAT", "NAME" : "Perversion", "DIFFICULTY" : 80, "REWARD" : "STAT_XP", "R_NAME" : "Perversion", "VALUE" : 50, "OPT" : "RANDOM" }
                ],
                "POST" : [
                    { "TYPE" : "STAT_XP", "NAME" : "WillPower",     "VALUE" : -20,  "OPT" : 0 },
                    { "TYPE" : "STAT_XP", "NAME" : "Perversion",    "VALUE" :  50,  "OPT" : "TAG_A"}
                ],
                "START" :
                    "You agree to serve NPC_NAME and obediently follow him to his quarters. Once there he shoves you through the "+
                    "door and onto the floor. As you try to get up, you feel one of his big boots on your ass, holding you down.\n\n"+
                    "\"Just stay like that for now slut,\" he growls.",
                "END" : "",
                "RESULTS" : [
                    {"A": 50,   "TEXT": "The feral sound of his voice causes a @@color:red;shiver of fear@@ to crawl down your spine as you fear what " +
                                        "the massive black man has in store for you."   },
                    {"A": 500,  "TEXT": "The feral sound of his voice @@color:DeepPink;sends a thrill up your spine@@ as you start to anticipate what " +
                                        "the massive black man is going to do to you."  }
                ]
            },
            {
                "ID" : "SCENE02",
                "TRIGGERS" :[ ],
                "TRIGGERS_ANY" : [ ],
                "CHECKS" : [
                    { "TAG" : "B", "TYPE" : "SKILL", "NAME" : "Seduction", "DIFFICULTY" : 60, "REWARD" : "MONEY", "R_NAME" : "MONEY", "VALUE" : 20, "OPT" : 0 }
                ],
                "POST" : [
                    { "TYPE" : "NPC_STAT", "NAME" : "Mood",    "VALUE" :  3,  "OPT" : "TAG_B" },
                    { "TYPE" : "NPC_STAT", "NAME" : "Lust",    "VALUE" : -5,  "OPT" : "TAG_B" }
                ],
                "START" :
                "Within moments he returns with small sack and from it he produces a costume that he throws at you.\n\n"+
                "\"Get changed,\"he simply states.\n\n"+
                "You unfold the costume to realize that it'ss a small bikini, dyed with a pattern to match a popular form of milk "+
                "giving aurach - included with the costume are a matching collar, headband and anal plug with a thick bristly tail "+
                "attached. It seems that NPC_NAME does indeed have a strong tit fetish if he wants you to pretend to be a cow. The "+
                "costume is not well made and the tail is slightly painful to jab up your rectum without any lubricant other than "+
                "your spit, but you somehow manage the task, transforming into a vision of a perverted cow slave.\n\n"+
                "NPC_NAME admires the fetish outfit on you and gives you a tug on the collar, causing the cowbell to jingle. One of "+
                "his big paws reaches out to grope your pBUST tits, causing them to wobble slightly. He then looks you dead in the "+
                "eyes and commands you to prostrate yourself before him and to arouse him.",
                "END" : "",
                "RESULTS" : [
                    {"B": 50,   "TEXT": "You drop to your knees and feebly grope your pBUST boobs, trying to shake them and fondle them to be arousing. You "+
                                        "mutter some lame pick up lines, but @@it doesn't seem to have much effect@@."   },
                    {"B": 500,  "TEXT": "You drop to your knees and slowly start to massage and shake your pBUST tits. @@You fondle and shake them while cooing@@ "+
                                        "at NPC_NAME that you're a \"naughty little cow that needs to be milked by a big black stud.\""  } ]
            },
            {
                "ID" : "SCENE03",
                "TRIGGERS" :[ ],
                "TRIGGERS_ANY" : [ ],
                "CHECKS" : [
                    { "TAG" : "C", "TYPE" : "SKILL", "NAME" : "BlowJobs", "DIFFICULTY" : 60, "REWARD" : "MONEY", "R_NAME" : "MONEY", "VALUE" : 20, "OPT" : 0 }
                ],
                "POST" : [
                    { "TYPE" : "NPC_STAT", "NAME" : "Mood",    "VALUE" :  3,  "OPT" : "TAG_C" },
                    { "TYPE" : "NPC_STAT", "NAME" : "Lust",    "VALUE" : -5,  "OPT" : "TAG_C" }
                ],
                "START" :
                    "Eventually NPC_NAME can't take it any more and he produces a large vial of oil from his bag which he proceeds to pour "+
                    "all over your tits. You start to massage the oil into your flesh and within minutes your entire chest is a shiny and "+
                    "slick mess. NPC_NAME drops his pants and produces an incredibly huge erect black cock that he waves menacingly at you.\n\n"+
                    "\"Suck it,\" he commands.\n\n",
                "END" :
                "NPC_NAME proceeds to fuck your face, causing you to gag as his dick slides in and out of your throat. You choke back "+
                "tears and focus on your breathing as the horrible oral abuse goes on for what seems like ages. Eventually he picks up "+
                "the pace and forces your head down his shaft. You feel his already massive prick swell in size as he starts to ejaculate "+
                "burst after burst of semen down your abused throat.",
                "RESULTS" : [
                    {"C": 50,   "TEXT": "You hesitate for a moment, trying to figure out how you'll get NPC_NAME's massive tool into your mouth, but eventually "+
                                        "he just grabs it and shoves it towards your pLIPS lips. There is a moment of fear as you try to adjust your breathing "+
                                        "and unhinge your jaw to @@take the huge dick@@."   },
                    {"C": 500,  "TEXT": "@@You expertly wrap@@ your pLIPS lips around NPC_NAME's enormous cock, working your tongue up and down his glands and "+
                                        "making sure that your pBUST tits are rubbing against his balls and legs."  } ]
            },
            {
                "ID" : "SCENE04",
                "TRIGGERS" :[ ],
                "TRIGGERS_ANY" : [ ],
                "CHECKS" : [
                    { "TAG" : "D", "TYPE" : "SKILL", "NAME" : "TitFucking", "DIFFICULTY" : 60, "REWARD" : "MONEY", "R_NAME" : "MONEY", "VALUE" : 20, "OPT" : 0 }
                ],
                "POST" : [
                    { "TYPE" : "NPC_STAT",  "NAME" : "Mood",    "VALUE" :  3,   "OPT" : "TAG_D" },
                    { "TYPE" : "NPC_STAT",  "NAME" : "Lust",    "VALUE" : -5,   "OPT" : "TAG_D" },
                    { "TYPE" : "BODY_XP",   "NAME" : "Bust",    "VALUE" : 50,   "OPT" : 0 },
                    { "TYPE" : "BODY_XP",   "NAME" : "Bust",    "VALUE" : 100,  "OPT" : "RANDOM" }
                ],
                "START" :
                    "NPC_NAME finishes cumming and pushes you down on the ground, his dick flying out of your mouth with an audible \"pop\" "+
                    "and sending a stream of drool and semen arching towards the air. He straddles you and produces two small "+
                    "syringes filled with a glowing pink liquid.\n\n"+
                    "\"Now comes the fun part,\" he says as he jabs each of your tits in turn with the mysterious drug. The pain "+
                    "from the injection is momentary, but as NPC_NAME begins to rub your breasts you start to feel a burning sensation "+
                    "and tightness. Your breathing increases and you realize that you're getting incredibly aroused. Just as you are "+
                    "pondering this, without warning, you feel a wetness... your eyes open wide as you realize that almost implausibly, "+
                    "you have watery streams of milk shooting from your nipples!\n\n"+
                    "NPC_NAME grins and slides his huge pick between your already lubricated tits and begins to fuck them furiously. "+
                    "His fingers are tweaking and pulling at your nipples and every time he thrusts a dribble of milk squirts. As he "+
                    "increases the tempo you feel the sensations actually flowing from your engorged nips and shooting into your brain.",
                "END" : "",
                "RESULTS" : [
                    {"D": 50,   "TEXT": "You try to help NPC_NAME cum by holding your breasts together for him and encouraging him with dirty talk, "+
                                        "but you're so damn distracted by the unusual experience that @@it doesn't have much effect@@. Still, he "+
                                        "proceeds to thoroughly fuck your lactating hooters with a frenzied pace."   },
                    {"D": 500,  "TEXT": "You take your hands and squeeze the sides of your tits onto NPC_NAME's dick, trying your best to jack him "+
                                        "off as he @@frantically fucks your now lactating tits@@. You look at him and say, \"Yeah! Fuck my big cow udders! "+
                                        "I'm just a dumb fucking milk cow! A fucking pair of tits with legs! Fuck my tits stupid!\" The verbal encouragement drives him wild."  } ]
            },
            {
                "ID" : "SCENE05",
                "TRIGGERS" :[ ],
                "TRIGGERS_ANY" : [ ],
                "CHECKS" : [
                    { "TAG" : "E", "TYPE" : "SKILL", "NAME" : "AssFucking", "DIFFICULTY" : 60, "REWARD" : "MONEY", "R_NAME" : "MONEY", "VALUE" : 10, "OPT" : 0 }
                ],
                "POST" : [
                    { "TYPE" : "NPC_STAT", "NAME" : "Mood",         "VALUE" :  3,       "OPT" : "TAG_E" },
                    { "TYPE" : "NPC_STAT", "NAME" : "Lust",         "VALUE" : -5,       "OPT" : "TAG_E" },
                    { "TYPE" : "STAT_XP",  "NAME" : "Perversion",   "VALUE" : 50,       "OPT" : "TAG_E" }
                ],
                "START" :
                    "Without much warning NPC_NAME squeezes your pBUST tits one last time and cums furiously, coating your face "+
                    "and hair with his seed and causing your jugs to release an enormous stream of milk. The sensation is too "+
                    "much for you and your pPENIS sissy clit starts shooting your own cum in unison.\n\n"+
                    "You roll over on your side, your breathing ragged and your vision blurred, clearly exhausted from your recent orgasm. "+
                    "You feel a tugging sensation from your anus and realize that NPC_NAME is removing the anal plug from your asshole. "+
                    "However any thoughts of relief you might have had are immediately banished as you feel the head of NPC_NAME's bulbous "+
                    "cock pushing up against your abused fuckhole.",
                "END" : "",
                "RESULTS" : [
                    {"E": 50,   "TEXT": "You don't have any time to prepare as NPC_NAME rams his huge dick past your tight sphincter. "+
                                        "Thankfully he's at least conscious of the fact that the size of his tool makes it @@impossible for him "+
                                        "to get it all inside@@ at one go and he slowly works it up your pASS ass."  },
                    {"E": 500,  "TEXT": "You do your best and bear down on your sphincter, opening it wide for NPC_NAME's dick to slide into "+
                                        "your pASS ass. Maybe the oil from the earlier tit fuck helped, but whatever the case, you feel an incredible "+
                                        "sensation of fullness as NPC_NAME @@manages to bottom out in your sissy butt@@."  } ]
            }
        ],
        "END" :
            "A minute later he's finally got you face down, tits leaking milk and with the biggest black dick you've ever "+
            "seen shoved up your ass. You gasp as he begins to saw that giant dick of his in and out of your butt. The "+
            "sensation you had earlier, when he was fucking your tits returns and you find yourself incredibly aroused, "+
            "your pPENIS sissy clit becoming painfully erect.\n\n"+
            "NPC_NAME starts breathing harder as he picks up the pace in your ass, each thrust sending a shiver up your spine "+
            "and through your pPENIS dick. Then, with one last massive push he jams his cock so deep into your ass you're "+
            "positive that you felt it in the back of your throat. The sensation - a mixture of drug induced arousal and "+
            "humiliation is so intense that you have a second orgasm and pass out.\n"+
            "...\n"+
            "......\n"+
            ".........\n"+
            "You wake up later, mostly naked, covered in semen and oil and with cum matted on your face, in your hair and leaking "+
            "out of your abused asshole. On the floor next to you, you find JOB_PAY coins.\n\n"+
            "NPC_NAME is nowhere to be seen.",
        "JOB_RESULTS" : [ ]
    },
    "MATE02": {
        "ID": "MATE02", "TITLE": "Navigation Lessons", "GIVER": "FirstMate", "PAY" : 0,
        "RATING" : 3, // of 5
        "PHASES" : [ 1 ],
        "DAYS"   : 1,
        "HIDDEN" : false,
        "COST" : [
            { "TYPE" : "TIME",  "VALUE" : 2 },
            { "TYPE" : "STAT",  "NAME" : "Energy", "VALUE" : 1 },
            { "TYPE" : "MONEY", "VALUE" : 50 } ],
        "REQUIREMENTS" : [
            { "TYPE" : "QUEST",     "NAME" : "Q002",    "VALUE" : "COMPLETED",  "CONDITION" : "eq" },
            { "TYPE" : "NPC_STAT",  "NAME" : "Lust",    "VALUE" : 60,           "CONDITION" : "gte" }
        ],
        "INTRO" :
        "You often see NPC_NAME scouring maps and using strange tools that seem to be related to navigation. Maybe if you were a little 'friendly' to him, he'd show you what he knows?",
        "START" :
        "NPC_NAME says, \"@@color:cyan;So you want to learn about navigation huh? I normally wouldn't bother but if you're willing to pay with coins and your arse, then who am I to say no?@@\"\n\n"+
        "The leering grin he gives you makes you feel rather uncomfortable about the entire exchange and you're fairly sure that you're not getting a good deal and you're even MORE by the outline of "+
        "the bulge in NPC_NAME's trousers that your asshole is going to regret this later, but for some reason you go along with it. Definitely it's because of your thirst for knowledge and not because "+
        "you want his massive black member up your backside...",
        "SCENES" : [
            {
                "ID" : "SCENE01",
                "TRIGGERS" :[ ],
                "TRIGGERS_ANY" : [ ],
                "CHECKS" : [
                    { "TAG" : "A", "TYPE" : "SKILL", "NAME" : "Navigating", "DIFFICULTY" : 25, "REWARD" : "NONE", "R_NAME" : "NONE", "VALUE" : 100, "OPT" : 0 }
                ],
                "POST" : [
                    { "TYPE" : "SKILL_XP", "NAME" : "Navigating", "VALUE" :  25, "OPT" : "TAG_A" }
                ],
                "START" :
                "NPC_NAME leads you to sit next to him at a table and starts the lesson by giving you some basic instruction on how to read various charts and maps that he "+
                "has stored in his cabin. He's surprisingly serious and thoughtful with his instruction ",
                "END" : "",
                "RESULTS" : [
                    {"A":  25, "TEXT":  "and you do your best to take it in, but @@color:red;unfortunately it's a bit too complex@@ for you to understand."},
                    {"A":  50, "TEXT":  "and you do your best to take it in, but some @@color:yellow;key points still elude@@ you. Maybe more instruction is required?"},
                    {"A": 500, "TEXT":  "and you find yourself @@color:green;completely comprehending the lesson@@. In short order you move on to the next topic."} ]
            },
            {
                "ID" : "SCENE02",
                "TRIGGERS" :[
                    { "TYPE" : "NPC_STAT", "NAME" : "Lust", "VALUE" : 90, "CONDITION" : "gte" }
                ],
                "TRIGGERS_ANY" : [ ],
                "CHECKS" : [
                    { "TAG" : "B", "TYPE" : "SKILL", "NAME" : "BlowJobs", "DIFFICULTY" : 50, "REWARD" : "NONE", "R_NAME" : "NONE", "VALUE" : 100, "OPT" : 0 }
                ],
                "POST" : [
                    { "TYPE" : "NPC_STAT",  "NAME" : "Lust",        "VALUE" : -10,      "OPT" : "TAG_B" },
                    { "TYPE" : "NPC_STAT",  "NAME" : "Mood",        "VALUE" : 10,       "OPT" : "TAG_B" }
                ],
                "START" :
                "After the map reading lesson NPC_NAME stands up from the table pulls down his trousers and unleashes his massive black cock. It dangles almost menacingly in front of your "+
                "face. You look up at him and just as you begin to ask him what's going on, he takes the opportunity to slip the fat head of his dick into your pLIPS lips. Considering this "+
                "to be the answer to your question, you begin to do your best to work on this part of your 'payment'",
                END :
                    "NPC_NAME wipes off his dick with an errant towel and then throws it at you. Even though it's covered with your drool and some remnants of his cum, you do your best to try "+
                "and clean up as he prepares for the next part of the lesson.",
                "RESULTS" : [
                    {"B":  25, "TEXT":
                    "You try to accommodate his massive meat pole @@but you struggle to find the right movement and tempo@@. Not that it matters much because NPC_NAME simply grabs your head "+
                    "and then forcibly rams his dick down your throat until he cums.\n\n" },
                    {"B":  50, "TEXT":
                    "You take NPC_NAME's stiffening cock in your mouth and @@begin to suck on it in earnest@@. Within moments he is starting to moan and you increase " +
                    "the pleasure by bobbing your head up and down on his shaft, the tip of his dick tickling the back of your throat. After a few minutes of this treatment NPC_NAME grabs "+
                    "a hold of your head and rams his dick in as far as it can go, you know what this means and do your best to relax so that he can shoot his load straight into your gullet.\n\n" },
                    {"B": 500, "TEXT":
                    "@@You easily swallow his dick@@ and within moments you have it sufficiently lubricated and your throat relaxed enough to be able to take him down "+
                    "so deeply that he's quickly moaning and panting in pleasure. You toy with the tempo and your tongue movements until he's almost about to pass out from the stimulation and then "+
                    "he suddenly starts shooting his load directly into your mouth. There's so much of it that it's a real struggle to swallow it all down.\n\n" }
                ]
            },
            {
                "ID" : "SCENE03",
                "TRIGGERS" :[ ],
                "TRIGGERS_ANY" : [ ],
                "CHECKS" : [
                    { "TAG" : "C", "TYPE" : "SKILL", "NAME" : "Navigating", "DIFFICULTY" : 50, "REWARD" : "NONE", "R_NAME" : "NONE", "VALUE" : 100, "OPT" : 0 }
                ],
                "POST" : [
                    { "TYPE" : "SKILL_XP", "NAME" : "Navigating", "VALUE" :  50, "OPT" : "TAG_C" }
                ],
                "START" :
                "NPC_NAME returns to the table with a large weighted rope and an hourglass like timer. He explains that these tools are used to determine how fast the ship "+
                "is travelling at and how to use this to determine where on the map it will be. After the explanation he then takes you out of his cabin and to the deck so "+
                "that you can practice this skill. ",
                "END" : "",
                "RESULTS" : [
                    {"C":  25, "TEXT":  "You do your best, but @@color:red;despite his instruction@@ it doesn't seem that you've quite grasped the concept yet."},
                    {"C":  50, "TEXT":  "You do your best and while you are able to @@color:yellow;make some progress@@ you're note quite confident in your skill doing this yet."},
                    {"C": 500, "TEXT":  "You take your time counting the knots in the rope as you swing it over the side of the ship and measuring both the time as well as the "+
                    "number of knots slipped. Eventually you @@color:green;come up with a figure and plot a trajectory@@ that seems to satisfy NPC_NAME. "} ]
            },
            {
                "ID" : "SCENE04",
                "TRIGGERS" :[ ],
                "TRIGGERS_ANY" : [ ],
                "CHECKS" : [
                    { "TAG" : "D", "TYPE" : "SKILL", "NAME" : "AssFucking", "DIFFICULTY" : 50, "REWARD" : "NONE", "R_NAME" : "NONE", "VALUE" : 100, "OPT" : 0 }
                ],
                "POST" : [
                    { "TYPE" : "NPC_STAT",  "NAME" : "Lust",        "VALUE" : -10,      "OPT" : "TAG_D" },
                    { "TYPE" : "NPC_STAT",  "NAME" : "Mood",        "VALUE" : 10,       "OPT" : "TAG_D" }
                ],
                "START" :
                "NPC_NAME leads you back to the cabin and motions for you to approach the table. He roughly bends you over it, making sure your hands are flat on it's cold wooden surface. "+
                "It doesn't take much imagination for you to guess what is about to happen next, so you do your best to try and 'loosen' up your ass-pussy for the pounding it's about to "+
                "to receive. You feel NPC_NAME's rough hands on you as he removes your bottom clothes. You even start to make a move to help him, only to have him slap your hands away and "+
                "roughly shove you down again even more flat on the table. You're resting in this awkward position when you feel something cold and slimy start to spread between your ass cheeks.\n\n"+
                "Somewhat relieved that at least he is going to lubricate before shoving his monster cock inside you, you are surprised when you feel a thick meaty finger slip in to your "+
                "sissy hole. You gasp... (or is that a moan) as he works his thick finger in and out of you. Eventually this becomes two fingers and then finally three and accompanied by "+
                "the embarrassing sounds of your now well lubricated ass opening and closing.\n\n"+
                "\"@@color:cyan;Here it comes bitch.@@\" he says, and while you appreciate the warning it doesn't do much to lesson the shock of what you swear is over a foot of black cock "+
                "suddenly entering your well lubricated rectum. ",
                END :
                "NPC_NAME starts breathing harder as he picks up the pace in your ass, each thrust sending a shiver up your spine "+
                "and through your pPENIS dick. Then, with one last massive push he jams his cock so deep into your ass you're "+
                "positive that you felt it in the back of your throat. The sensation - a mixture of arousal and "+
                "humiliation is so intense that you have a tiny orgasm and your pPENIS sissy clit leaks a pathetic spurt of cum.",
                "RESULTS" : [
                    {"D":  25, "TEXT":
                    "You try hard to accommodate NPC_NAME's massive dick, @@color:red;but even with the lube@@ it's still a struggle. You mostly just lay there, trying not to cry as he fucks your sissy slut ass." },
                    {"D":  50, "TEXT":
                    "You make a valiant effort to open your sphincter as wide as it can go as NPC_NAME shoves his massive meat up your backside. Unfortunately there is only @@color:yellow;so far you can stretch@@ "+
                    "when faced with so many angry inches of dick. You gasp and struggle slightly as he continues to work his way up your insides until eventually you feel like you're going to pass out "+
                    "as he lodges himself deep inside you."},
                    {"D": 500, "TEXT":
                    "You push out as hard as you can to @@color:green;fully open your asshole@@ to the big black First Mate. He grunts approvingly as he easily slides his monstrous member up your "+
                    "slutty sissy ass. Within seconds he has completely filled you, bottoming out someplace so deep that it almost makes you faint. Thankfully he starts off slow, giving you time to "+
                    "relax and get into the motion and ultimately you are able to match his motion and start thrusting your ass back towards him, reaching all the way to the root of his cock." }
                ]
            }
        ],
        "END" :
            "It takes some time for you to recover your wits after being so thoroughly fucked but thankfully NPC_NAME must be in a good mood since he mostly leaves you alone as you gather up your "+
        "discarded clothes and leave his cabin. It was an eventful afternoon and even though the sun has gone down you feel that JOB_RESULTS.",
        "JOB_RESULTS" : [
            { "A" :  25,  "TEXT" : "@@minimal progress@@ at map reading" },
            { "A" :  50, "TEXT" : "@@moderate progress@@ at map reading" },
            { "A" :  75, "TEXT" : "@@good progress@@ at map reading" },
            { "A" : 505, "TEXT" : "@@excellent progress@@ at map reading" },
            { "C" :  25, "TEXT" : " and @@minimal progress@@ at navigation" },
            { "C" :  50, "TEXT" : " and @@moderate progress@@ at navigation" },
            { "C" :  75, "TEXT" : " and @@good progress@@ at navigation" },
            { "C" : 505, "TEXT" : " and @@excellent progress@@ at navigation" }
        ]

    },
    "MATE03": {
        "ID": "MATE03", "TITLE": "Sailing Lessons", "GIVER": "FirstMate", "PAY" : 0,
        "RATING" : 3, // of 5
        "PHASES" : [ 1 ],
        "DAYS"   : 1,
        "HIDDEN" : false,
        "COST" : [
            { "TYPE" : "TIME",  "VALUE" : 2 },
            { "TYPE" : "STAT",  "NAME" : "Energy", "VALUE" : 1 },
            { "TYPE" : "MONEY", "VALUE" : 50 } ],
        "REQUIREMENTS" : [
            { "TYPE" : "QUEST",     "NAME" : "Q003",    "VALUE" : "COMPLETED",  "CONDITION" : "eq" },
            { "TYPE" : "NPC_STAT",  "NAME" : "Lust",    "VALUE" : 60,           "CONDITION" : "gte" }
        ],
        "INTRO" : "You often see NPC_NAME directing the pirates on deck and giving orders related to sailing. Maybe if you were a little 'friendly' to him, he'd show you what he knows?",
        "START" :
        "NPC_NAME says, \"@@color:cyan;So you want to learn about sailing huh? I normally wouldn't bother but if you're willing to pay with coins and your arse, then who am I to say no?@@\"\n\n"+
        "The leering grin he gives you makes you feel rather uncomfortable about the entire exchange and you're fairly sure that you're not getting a good deal and you're even MORE by the outline of "+
        "the bulge in NPC_NAME's trousers that your asshole is going to regret this later, but for some reason you go along with it. Definitely it's because of your thirst for knowledge and not because "+
        "you want his massive black member up your backside...",
        "SCENES" : [
            {
                "ID" : "SCENE01",
                "TRIGGERS" :[ ],
                "TRIGGERS_ANY" : [ ],
                "CHECKS" : [
                    { "TAG" : "A", "TYPE" : "SKILL", "NAME" : "Sailing", "DIFFICULTY" : 25, "REWARD" : "NONE", "R_NAME" : "NONE", "VALUE" : 100, "OPT" : 0 }
                ],
                "POST" : [
                    { "TYPE" : "SKILL_XP", "NAME" : "Sailing", "VALUE" :  25, "OPT" : "TAG_A" }
                ],
                "START" :
                "NPC_NAME leads you on a tour around the deck, taking time to point out the various stations on the ship and the activities that they are responsible for. He's surprisingly thoughtful in his explanations and answers questions seriously.",
                "END" : "",
                "RESULTS" : [
                    {"A":  25, "TEXT":  "You do your best to take it in, but @@color:red;unfortunately it's a bit too complex@@ for you to understand."},
                    {"A":  50, "TEXT":  "You do your best to take it in, but some @@color:yellow;key points still elude@@ you. Maybe more instruction is required?"},
                    {"A": 500, "TEXT":  "You find yourself @@color:green;completely comprehending the lesson@@. In short order you move on to the next topic."} ]
            },
            {
                "ID" : "SCENE02",
                "TRIGGERS" :[
                    { "TYPE" : "NPC_STAT", "NAME" : "Lust", "VALUE" : 90, "CONDITION" : "gte" }
                ],
                "TRIGGERS_ANY" : [ ],
                "CHECKS" : [
                    { "TAG" : "B", "TYPE" : "SKILL", "NAME" : "BlowJobs", "DIFFICULTY" : 50, "REWARD" : "NONE", "R_NAME" : "NONE", "VALUE" : 100, "OPT" : 0 }
                ],
                "POST" : [
                    { "TYPE" : "NPC_STAT",  "NAME" : "Lust",        "VALUE" : -10,      "OPT" : "TAG_B" },
                    { "TYPE" : "NPC_STAT",  "NAME" : "Mood",        "VALUE" : 10,       "OPT" : "TAG_B" }
                ],
                "START" :
                "After the lesson NPC_NAME takes you aside and pulls down his trousers, unleashing his massive black cock. It dangles almost menacingly in front of your "+
                "face. You look up at him and just as you begin to ask him what's going on, he takes the opportunity to slip the fat head of his dick into your pLIPS lips. Considering this "+
                "to be the answer to your question, you begin to do your best to work on this part of your 'payment'",
                END :
                "NPC_NAME wipes off his dick with an errant towel and then throws it at you. Even though it's covered with your drool and some remnants of his cum, you do your best to try "+
                "and clean up as he prepares for the next part of the lesson.",
                "RESULTS" : [
                    {"B":  25, "TEXT":
                    "You try to accommodate his massive meat pole @@but you struggle to find the right movement and tempo@@. Not that it matters much because NPC_NAME simply grabs your head "+
                    "and then forcibly rams his dick down your throat until he cums.\n\n" },
                    {"B":  50, "TEXT":
                    "You take NPC_NAME's stiffening cock in your mouth and @@begin to suck on it in earnest@@. Within moments he is starting to moan and you increase " +
                    "the pleasure by bobbing your head up and down on his shaft, the tip of his dick tickling the back of your throat. After a few minutes of this treatment NPC_NAME grabs "+
                    "a hold of your head and rams his dick in as far as it can go, you know what this means and do your best to relax so that he can shoot his load straight into your gullet.\n\n" },
                    {"B": 500, "TEXT":
                    "@@You easily swallow his dick@@ and within moments you have it sufficiently lubricated and your throat relaxed enough to be able to take him down "+
                    "so deeply that he's quickly moaning and panting in pleasure. You toy with the tempo and your tongue movements until he's almost about to pass out from the stimulation and then "+
                    "he suddenly starts shooting his load directly into your mouth. There's so much of it that it's a real struggle to swallow it all down.\n\n" }
                ]
            },
            {
                "ID" : "SCENE03",
                "TRIGGERS" :[ ],
                "TRIGGERS_ANY" : [ ],
                "CHECKS" : [
                    { "TAG" : "C", "TYPE" : "SKILL", "NAME" : "Sailing", "DIFFICULTY" : 50, "REWARD" : "NONE", "R_NAME" : "NONE", "VALUE" : 100, "OPT" : 0 }
                ],
                "POST" : [
                    { "TYPE" : "SKILL_XP", "NAME" : "Sailing", "VALUE" :  50, "OPT" : "TAG_C" }
                ],
                "START" :
                "NPC_NAME pulls you to your feet and takes you to the ships helm. He launches into a long explanation of how to steer and sail the ship, even letting you try your hand "+
                    "at steering a few times.",
                "END" : "",
                "RESULTS" : [
                    {"C":  25, "TEXT":  "You do your best, but @@color:red;despite his instruction@@ it doesn't seem that you've quite grasped the concept yet."},
                    {"C":  50, "TEXT":  "You do your best and while you are able to @@color:yellow;make some progress@@ you're note quite confident in your skill doing this yet."},
                    {"C": 500, "TEXT":  "Maybe you're a natural, or NPC_NAME is just a good instructor, but it seems that the lesson @@color:green;comes easily to you@@."} ]
            },
            {
                "ID" : "SCENE04",
                "TRIGGERS" :[ ],
                "TRIGGERS_ANY" : [ ],
                "CHECKS" : [
                    { "TAG" : "D", "TYPE" : "SKILL", "NAME" : "AssFucking", "DIFFICULTY" : 50, "REWARD" : "NONE", "R_NAME" : "NONE", "VALUE" : 100, "OPT" : 0 }
                ],
                "POST" : [
                    { "TYPE" : "NPC_STAT",  "NAME" : "Lust",        "VALUE" : -10,      "OPT" : "TAG_D" },
                    { "TYPE" : "NPC_STAT",  "NAME" : "Mood",        "VALUE" : 10,       "OPT" : "TAG_D" }
                ],
                "START" :
                "After the lesson is over, NPC_NAME leads you back to the cabin and motions for you to approach the table. He roughly bends you over it, making sure your hands are flat on it's cold wooden surface. "+
                "It doesn't take much imagination for you to guess what is about to happen next, so you do your best to try and 'loosen' up your ass-pussy for the pounding it's about to "+
                "to receive. You feel NPC_NAME's rough hands on you as he removes your bottom clothes. You even start to make a move to help him, only to have him slap your hands away and "+
                "roughly shove you down again even more flat on the table. You're resting in this awkward position when you feel something cold and slimy start to spread between your ass cheeks.\n\n"+
                "Somewhat relieved that at least he is going to lubricate before shoving his monster cock inside you, you are surprised when you feel a thick meaty finger slip in to your "+
                "sissy hole. You gasp... (or is that a moan) as he works his thick finger in and out of you. Eventually this becomes two fingers and then finally three and accompanied by "+
                "the embarrassing sounds of your now well lubricated ass opening and closing.\n\n"+
                "\"@@color:cyan;Here it comes bitch.@@\" he says, and while you appreciate the warning it doesn't do much to lesson the shock of what you swear is over a foot of black cock "+
                "suddenly entering your well lubricated rectum. ",
                END :
                "NPC_NAME starts breathing harder as he picks up the pace in your ass, each thrust sending a shiver up your spine "+
                "and through your pPENIS dick. Then, with one last massive push he jams his cock so deep into your ass you're "+
                "positive that you felt it in the back of your throat. The sensation - a mixture of arousal and "+
                "humiliation is so intense that you have a tiny orgasm and your pPENIS sissy clit leaks a pathetic spurt of cum.",
                "RESULTS" : [
                    {"D":  25, "TEXT":
                        "You try hard to accommodate NPC_NAME's massive dick, @@color:red;but even with the lube@@ it's still a struggle. You mostly just lay there, trying not to cry as he fucks your sissy slut ass." },
                    {"D":  50, "TEXT":
                    "You make a valiant effort to open your sphincter as wide as it can go as NPC_NAME shoves his massive meat up your backside. Unfortunately there is only @@color:yellow;so far you can stretch@@ "+
                    "when faced with so many angry inches of dick. You gasp and struggle slightly as he continues to work his way up your insides until eventually you feel like you're going to pass out "+
                    "as he lodges himself deep inside you."},
                    {"D": 500, "TEXT":
                    "You push out as hard as you can to @@color:green;fully open your asshole@@ to the big black First Mate. He grunts approvingly as he easily slides his monstrous member up your "+
                    "slutty sissy ass. Within seconds he has completely filled you, bottoming out someplace so deep that it almost makes you faint. Thankfully he starts off slow, giving you time to "+
                    "relax and get into the motion and ultimately you are able to match his motion and start thrusting your ass back towards him, reaching all the way to the root of his cock." }
                ]
            }
        ],
        "END" :
        "It takes some time for you to recover your wits after being so thoroughly fucked but thankfully NPC_NAME must be in a good mood since he mostly leaves you alone as you gather up your "+
        "discarded clothes and leave his cabin. It was an eventful afternoon and even though the sun has gone down you feel that JOB_RESULTS.",
        "JOB_RESULTS" : [
            { "A" :  25,  "TEXT" : "@@minimal progress@@ at jobbing" },
            { "A" :  50, "TEXT" : "@@moderate progress@@ at jobbing" },
            { "A" :  75, "TEXT" : "@@good progress@@ at jobbing" },
            { "A" : 500, "TEXT" : "@@excellent progress@@ at jobbing" },
            { "C" :  25, "TEXT" : " and @@minimal progress@@ at sailing" },
            { "C" :  50, "TEXT" : " and @@moderate progress@@ at sailing" },
            { "C" :  75, "TEXT" : " and @@good progress@@ at sailing" },
            { "C" : 500, "TEXT" : " and @@excellent progress@@ at sailing" }
        ]

    },
    "MATE04": {
        "ID": "MATE04", "TITLE": "Swashbuckling Lessons", "GIVER": "FirstMate", "PAY" : 0,
        "RATING" : 4, // of 5
        "PHASES" : [ 1 ],
        "DAYS"   : 1,
        "HIDDEN" : false,
        "COST" : [
            { "TYPE" : "TIME",  "VALUE" : 2 },
            { "TYPE" : "STAT",  "NAME" : "Energy", "VALUE" : 1 },
            { "TYPE" : "MONEY", "VALUE" : 50 } ],
        "REQUIREMENTS" : [
            { "TYPE" : "QUEST",     "NAME" : "Q004",    "VALUE" : "COMPLETED",  "CONDITION" : "eq" },
            { "TYPE" : "NPC_STAT",  "NAME" : "Lust",    "VALUE" : 60,           "CONDITION" : "gte" }
        ],
        "INTRO" : "You often see the pirates on deck engaging in various mock duels. NPC_NAME appears to be the reigning champion, maybe if you were a little 'friendly' to him, he'd show you what he knows?",
        "START" :
        "NPC_NAME says, \"@@color:cyan;So you want to learn about sword fighting? I normally wouldn't bother but if you're willing to pay with coins and your arse, then who am I to say no?@@\"\n\n"+
        "The leering grin he gives you makes you feel rather uncomfortable about the entire exchange and you're fairly sure that you're not getting a good deal and you're even MORE by the outline of "+
        "the bulge in NPC_NAME's trousers that your asshole is going to regret this later, but for some reason you go along with it. Definitely it's because of your thirst for knowledge and not because "+
        "you want his massive black member up your backside...",
        "SCENES" : [
            {
                "ID" : "SCENE01",
                "TRIGGERS" :[ ],
                "TRIGGERS_ANY" : [ ],
                "CHECKS" : [
                    { "TAG" : "A", "TYPE" : "SKILL", "NAME" : "Swashbuckling", "DIFFICULTY" : 25, "REWARD" : "NONE", "R_NAME" : "NONE", "VALUE" : 100, "OPT" : 0 }
                ],
                "POST" : [
                    { "TYPE" : "SKILL_XP", "NAME" : "Swashbuckling", "VALUE" :  25, "OPT" : "TAG_A" }
                ],
                "START" :
                    "NPC_NAME leads you to the main deck and tosses you a rusty old cutlass, an act that draws the attention of several pirates standing nearby. He leans in and begins to explain the "+
                "basics of sword fighting - footwork, balance, the correct way to thrust and parry. The instruction is mostly verbal with you aping his motions as he calls them off. After a time he "+
                "starts to drill you in earnest ",
                "END" : "",
                "RESULTS" : [
                    {"A":  25, "TEXT":  "and while you do your best to follow along, your @@color:red;ineptitude is plain to see@@."},
                    {"A":  50, "TEXT":  "and while you do your best to follow along, you @@color:yellow;struggle to keep up with his commands@@."},
                    {"A": 500, "TEXT":  "and you do your best to keep up, eventually managing to @@color:green;flawlessly execute the routine@@."} ]
            },
            {
                "ID" : "SCENE02",
                "TRIGGERS" :[
                    { "TYPE" : "NPC_STAT", "NAME" : "Lust", "VALUE" : 90, "CONDITION" : "gte" }
                ],
                "TRIGGERS_ANY" : [ ],
                "CHECKS" : [
                    { "TAG" : "B", "TYPE" : "SKILL", "NAME" : "BlowJobs", "DIFFICULTY" : 50, "REWARD" : "NONE", "R_NAME" : "NONE", "VALUE" : 100, "OPT" : 0 }
                ],
                "POST" : [
                    { "TYPE" : "NPC_STAT",  "NAME" : "Lust",        "VALUE" : -10,      "OPT" : "TAG_B" },
                    { "TYPE" : "NPC_STAT",  "NAME" : "Mood",        "VALUE" : 10,       "OPT" : "TAG_B" }
                ],
                "START" :
                "After the lesson NPC_NAME pulls you aside and pushes you to your knees. The pirates who were watching before are now snickering, some of them begin to hoot and toss "+
                "lewd words your way. It's pretty obvious what's going to happen next and sure enough within moments you're face to face with NPC_NAME's enormous black cock. Inwardly you "+
                "sigh - truthfully this isn't any different from what you normally do for coin on the ship, but the way he is asserting his dominance over you is utterly humiliating. Without any "+
                "ceremony you decide to get the chore over and begin to suck the tip of NPC_NAME's cock.",
                END :
                "NPC_NAME wipes off his dick with an errant towel and then throws it at you. Even though it's covered with your drool and some remnants of his cum, you do your best to try "+
                "and clean up as he prepares for the next part of the lesson.",
                "RESULTS" : [
                    {"B":  25, "TEXT":
                    "You try to accommodate his massive meat pole @@but you struggle to find the right movement and tempo@@. Not that it matters much because NPC_NAME simply grabs your head "+
                    "and then forcibly rams his dick down your throat until he cums.\n\n" },
                    {"B":  50, "TEXT":
                    "You take NPC_NAME's stiffening cock in your mouth and @@begin to suck on it in earnest@@. Within moments he is starting to moan and you increase " +
                    "the pleasure by bobbing your head up and down on his shaft, the tip of his dick tickling the back of your throat. After a few minutes of this treatment NPC_NAME grabs "+
                    "a hold of your head and rams his dick in as far as it can go, you know what this means and do your best to relax so that he can shoot his load straight into your gullet.\n\n" },
                    {"B": 500, "TEXT":
                    "@@You easily swallow his dick@@ and within moments you have it sufficiently lubricated and your throat relaxed enough to be able to take him down "+
                    "so deeply that he's quickly moaning and panting in pleasure. You toy with the tempo and your tongue movements until he's almost about to pass out from the stimulation and then "+
                    "he suddenly starts shooting his load directly into your mouth. There's so much of it that it's a real struggle to swallow it all down.\n\n" }
                ]
            },
            {
                "ID" : "SCENE03",
                "TRIGGERS" :[ ],
                "TRIGGERS_ANY" : [ ],
                "CHECKS" : [
                    { "TAG" : "C", "TYPE" : "SKILL", "NAME" : "Swashbuckling", "DIFFICULTY" : 100, "REWARD" : "NONE", "R_NAME" : "NONE", "VALUE" : 100, "OPT" : 0 }
                ],
                "POST" : [
                    { "TYPE" : "SKILL_XP", "NAME" : "Swashbuckling", "VALUE" :  50, "OPT" : "TAG_C" },
                    { "TYPE" : "STAT_XP", "NAME" : "Fitness", "VALUE" : 50, "OPT" : 0 }
                ],
                "START" :
                "As you're busy inspecting your clothing for errant cum stains, NPC_NAME abruptly pulls you to your feet. \"@@color:cyan;No time for that whore... now you'll be facing my other sword. Get ready to receive!@@\""+
                    "It's clear he's quite serious about this and you do your best to get into a proper fighting stance. You raise your feeble cutlass and prepare to meet his assault.\n\n",
                "END" : "",
                "RESULTS" : [
                    {"C":  25, "TEXT":  "NPC_NAME's attacks come @@color:red;too fast and too hard for you to deal with@@. You struggle to maintain even a pitiful defence, let alone strike back and ultimately he has you bent over on the deck and is swatting your pASS behind playfully with his sword."},
                    {"C":  50, "TEXT":  "NPC_NAME is an expert duelist and @@color:yellow;you are clearly outmatched@@. At first you manage to put up some sort of defense, but within minutes the tide of the duel is clearly in his favor. Not long after that your defense entirely collapses and you find yourself laying prone on the deck with everyone laughing at you."},
                    {"C": 500, "TEXT":  "Right from the start, NPC_NAME tries to go in for the kill but you nimbly dance backwards and meet his thrust with a parry. The two of you go back and forth in a " +
                    "@@color:green;flurry of blows that manages to draw the attention of the remaining pirates on deck@@. Soon everyone is captivated by the display of swordsmanship before them and are actively cheering. Eventually you tire, but thankfully before NPC_NAME can press this advantage he calls the lesson over. You suspect that he was going easy on you."} ]
            },
            {
                "ID" : "SCENE04",
                "TRIGGERS" :[ ],
                "TRIGGERS_ANY" : [ ],
                "CHECKS" : [
                    { "TAG" : "D", "TYPE" : "SKILL", "NAME" : "AssFucking", "DIFFICULTY" : 50, "REWARD" : "NONE", "R_NAME" : "NONE", "VALUE" : 100, "OPT" : 0 }
                ],
                "POST" : [
                    { "TYPE" : "NPC_STAT",  "NAME" : "Lust",        "VALUE" : -10,      "OPT" : "TAG_D" },
                    { "TYPE" : "NPC_STAT",  "NAME" : "Mood",        "VALUE" : 10,       "OPT" : "TAG_D" }
                ],
                "START" :
                "After the lesson is over, NPC_NAME leads you back to the cabin and motions for you to approach the table. He roughly bends you over it, making sure your hands are flat on it's cold wooden surface. "+
                "It doesn't take much imagination for you to guess what is about to happen next, so you do your best to try and 'loosen' up your ass-pussy for the pounding it's about to "+
                "to receive. You feel NPC_NAME's rough hands on you as he removes your bottom clothes. You even start to make a move to help him, only to have him slap your hands away and "+
                "roughly shove you down again even more flat on the table. You're resting in this awkward position when you feel something cold and slimy start to spread between your ass cheeks.\n\n"+
                "Somewhat relieved that at least he is going to lubricate before shoving his monster cock inside you, you are surprised when you feel a thick meaty finger slip in to your "+
                "sissy hole. You gasp... (or is that a moan) as he works his thick finger in and out of you. Eventually this becomes two fingers and then finally three and accompanied by "+
                "the embarrassing sounds of your now well lubricated ass opening and closing.\n\n"+
                "\"@@color:cyan;Here it comes bitch.@@\" he says, and while you appreciate the warning it doesn't do much to lesson the shock of what you swear is over a foot of black cock "+
                "suddenly entering your well lubricated rectum. ",
                END :
                "NPC_NAME starts breathing harder as he picks up the pace in your ass, each thrust sending a shiver up your spine "+
                "and through your pPENIS dick. Then, with one last massive push he jams his cock so deep into your ass you're "+
                "positive that you felt it in the back of your throat. The sensation - a mixture of arousal and "+
                "humiliation is so intense that you have a tiny orgasm and your pPENIS sissy clit leaks a pathetic spurt of cum.",
                "RESULTS" : [
                    {"D":  25, "TEXT":
                        "You try hard to accommodate NPC_NAME's massive dick, @@color:red;but even with the lube@@ it's still a struggle. You mostly just lay there, trying not to cry as he fucks your sissy slut ass." },
                    {"D":  50, "TEXT":
                    "You make a valiant effort to open your sphincter as wide as it can go as NPC_NAME shoves his massive meat up your backside. Unfortunately there is only @@color:yellow;so far you can stretch@@ "+
                    "when faced with so many angry inches of dick. You gasp and struggle slightly as he continues to work his way up your insides until eventually you feel like you're going to pass out "+
                    "as he lodges himself deep inside you."},
                    {"D": 500, "TEXT":
                    "You push out as hard as you can to @@color:green;fully open your asshole@@ to the big black First Mate. He grunts approvingly as he easily slides his monstrous member up your "+
                    "slutty sissy ass. Within seconds he has completely filled you, bottoming out someplace so deep that it almost makes you faint. Thankfully he starts off slow, giving you time to "+
                    "relax and get into the motion and ultimately you are able to match his motion and start thrusting your ass back towards him, reaching all the way to the root of his cock." }
                ]
            }
        ],
        "END" :
        "It takes some time for you to recover your wits after being so thoroughly fucked but thankfully NPC_NAME must be in a good mood since he mostly leaves you alone as you gather up your "+
        "discarded clothes and leave his cabin. It was an eventful afternoon and even though the sun has gone down you feel that JOB_RESULTS.",
        "JOB_RESULTS" : [
            { "A" :  25,  "TEXT" : "@@minimal progress@@ at technique" },
            { "A" :  50, "TEXT" : "@@moderate progress@@ at technique" },
            { "A" :  75, "TEXT" : "@@good progress@@ at technique" },
            { "A" : 500, "TEXT" : "@@excellent progress@@ at technique" },
            { "C" :  25, "TEXT" : " and @@minimal progress@@ at dueling" },
            { "C" :  50, "TEXT" : " and @@moderate progress@@ at dueling" },
            { "C" :  75, "TEXT" : " and @@good progress@@ at dueling" },
            { "C" : 500, "TEXT" : " and @@excellent progress@@ at dueling" }
        ]

    },
    "CAPT01": {
        "ID": "CAPT01", "TITLE": "Sissy Training", "GIVER": "Captain", "PAY" : 40,
        "RATING" : 4, // of 5
        "PHASES" : [ 1, 2 ],
        "DAYS"   : 2,
        "HIDDEN" : false,
        "COST" : [
            { "TYPE" : "TIME",  "VALUE" : 2 },
            { "TYPE" : "STAT",  "NAME" : "Energy", "VALUE" : 2 }],
        "REQUIREMENTS" : [
            { "TYPE" : "QUEST",     "NAME" : "Q005",        "VALUE" : "COMPLETED",  "CONDITION" : "eq"  },
            { "TYPE" : "NPC_STAT",  "NAME" : "Lust",        "VALUE" : 70,           "CONDITION" : "gte" },
            { "TYPE" : "STAT",      "NAME" : "Perversion",  "VALUE" : 30,           "CONDITION" : "gte"  }
        ],
        "INTRO" :
        "NPC_NAME says, \"Not bad PLAYER_NAME, not bad at all. I was dubious at first, but it seems like you're 'developing' quite nicely. "+
        "With those pBUST tits and pASS ass you certainly have the right assets for the job of the ship's whore. Tell you what, I might be "+
        "persuaded to part with some coin and some 'special training' that is guaranteed to increase your income. You game slut?\"",
        "START" :
        "NPC_NAME roughly pushes you through the door into his private chambers with such force that you nearly trip. You "+
        "recover your sense and turn around only to see that he has locked the heavy iron door behind him. The \"click\" of "+
        "the lock itself rings out loudly and ominously in your ears.\n\n"+
        "NPC_NAME says, \"Now that's a good whore. Get on your knees.\"",
        "SCENES" : [
            {
                "ID" : "SCENE01a",
                "TRIGGERS" :[
                    { "TYPE" : "FLAG",      "NAME" : "CAPTAIN_TRAINING", "OPT" : "NOT_SET" }
                ],
                "TRIGGERS_ANY" : [ ],
                "CHECKS" : [ ],
                "POST" : [ ],
                "START" :
                    "Nothing out of the regular here, it seems a good blow job is what most of these pirate "+
                    "scum want. Just as you're about to comply however, $n reaches out and backhands you across the face!\n\n"+
                    "\"Stupid slut!\" he bellows at you. \"When I give you a command, you immediately answer 'Yes master!'. Do you understand?\"\n\n"+
                    "@@color:DeepPink;\"Yes master!\"@@ you respond as you lower yourself to your knees before NPC_NAME. "+
                    "It's humiliating, but it's better than getting belted across the side of the face again.",
                "END" : "",
                "RESULTS" : [ ]
            },
            {
                "ID" : "SCENE01b",
                "TRIGGERS" :[
                    { "TYPE" : "FLAG",      "NAME" : "CAPTAIN_TRAINING", "OPT" : "SET" }
                ],
                "TRIGGERS_ANY" : [ ],
                "CHECKS" : [ ],
                "POST" : [ ],
                "START" :
                    "@@color:DeepPink;\"Yes master!\"@@ you respond as you lower yourself to your knees before NPC_NAME. "+
                    "You've learned from experience that he expects you to act like a completely subservient bimbo slut "+
                    "otherwise he'll quickly get abusive. For a good tip and a few less bruises, then you'll gladly act the part.",
                "END" : "",
                "RESULTS" : [ ]
            },
            {
                "ID": "SCENE02a",
                "TRIGGERS": [
                    {"TYPE": "FLAG", "NAME": "CAPTAIN_TRAINING", "OPT": "NOT_SET"}
                ],
                "TRIGGERS_ANY" : [ ],
                "CHECKS": [],
                "POST": [],
                "START":
                    "You are about to reach for NPC_NAME's trousers so that you can fish out his cock and start your service, but he bats your " +
                    "hands away. A look of confusion flutters across your face and he rolls his eyes and explains, \"Keep your hands behind " +
                    "your back and use your mouth like a good little whore.\n\n" +
                    "You put your hands behind your back as the Captain wants. He could probably use shackles, or even command you with his ring " +
                    ", but for some reason he prefers that you do this of your own accord. You clumsily move your head forward and with your " +
                    "teeth start yanking down his trousers. It takes some effort, but eventually you free his cock, a massive 11 inch member that " +
                    "is already erect and waving dauntingly in front of your face.",
                "END": "",
                "RESULTS": []
            },
            {
                "ID": "SCENE02b",
                "TRIGGERS": [
                    {"TYPE": "FLAG", "NAME": "CAPTAIN_TRAINING", "OPT": "SET"}
                ],
                "TRIGGERS_ANY" : [ ],
                "CHECKS": [],
                "POST": [],
                "START":
                    "You put your hands behind your back as you know is NPC_NAME's preference. He could probably use shackles, or even command you with his ring, " +
                    "but for some reason he prefers that you do this of your own accord. It's probably more humiliating this way. You clumsily move your head forward and with your " +
                    "teeth start yanking down his trousers. It takes some effort, but eventually you free his cock, a massive 11 inch member that " +
                    "is already erect and waving menacingly in front of your face.",
                "END": "",
                "RESULTS": []
            },
            {
                "ID": "SCENE03",
                "TRIGGERS": [ ],
                "TRIGGERS_ANY" : [ ],
                "CHECKS": [
                    { "TAG" : "A", "TYPE" : "SKILL", "NAME" : "BlowJobs", "DIFFICULTY" : 80, "REWARD" : "MONEY", "R_NAME" : "MONEY", "VALUE" : 20, "OPT" : 0 }
                ],
                "POST": [
                    { "TYPE" : "NPC_STAT", "NAME" : "Mood",    "VALUE" :  3,  "OPT" : "TAG_A" },
                    { "TYPE" : "NPC_STAT", "NAME" : "Lust",    "VALUE" : -5,  "OPT" : "TAG_A" }
                ],
                "START":
                    "You wrap your pLIPS lips around the head of NPC_NAME's cock and begin to suck. He doesn't move at all, evidently "+
                    "he expects you to completely service him. It takes some effort but you slowly work your mouth down to the root of "+
                    "his thick dick. Your jaw hurts and you have trouble breathing through your nose as you struggle to get his massive "+
                    "member in your mouth.\n\n"+
                    "Eventually NPC_NAME grabs the back of your head and pushes his cock, inch by inch down your throat. You gag and "+
                    "struggle even harder to breath, tears flowing from your eyes. After what seems like ages your pLIPS lips are "+
                    "buried in his pubic hair and his massive member is halfway down your gullet. From there he starts mercilessly "+
                    "pounding away at your face, his dick using your mouth and throat as a cock sleeve.\n\n",
                "END":
                    "\n\nAfter withdrawing his cock from your throat, NPC_NAME produces a long leash, like the kind used for a dog or other pet and attaches "+
                    "it to your collar. You try to move, to get up from your knees, but you find yourself unable to do anything except crawl. "+
                    "You look up at NPC_NAME expectantly and he nods as to confirm your fears - he's using his magic ring on your slave collar to compel "+
                    "you to \"forget\" how to walk.",
                "RESULTS": [
                    {"A":  50,   "TEXT":"You try your best to accommodate NPC_NAME's tool, but @@it doesn't seem to matter too much@@. After a few minutes "+
                                        "of the steady face fucking, you feel his already huge member engorge to what feels like almost double it's normal "+
                                        "size and then the familiar twitching sensation as stream after stream of hot white jizz is deposited directly into your stomach."},
                    {"A": 500,   "TEXT":"Slowly you start to work your head up and down, the tightness of your full throat fucking causing NPC_NAME to "+
                                        "@@moan in pleasure@@. You quickly pick up the tempo and after what seems like an eternity you feel his already "+
                                        "huge member engorge to what feels like almost double it's normal size and start to shake as stream after stream of "+
                                        "hot white jizz is deposited directly into your stomach."}
                ]
            },
            {
                "ID": "SCENE04a",
                "TRIGGERS": [
                    {"TYPE": "FLAG", "NAME": "CAPTAIN_TRAINING", "OPT": "NOT_SET"}
                ],
                "TRIGGERS_ANY" : [ ],
                "CHECKS": [],
                "POST": [],
                "START":
                    "NPC_NAME slowly strips you and produces a new garment and accessories that cause your blood to run cold. First there "+
                    "is a small, but vicious looking garment - an @@color:orange;extreme bondage corset@@ that is made out of metal and steel with "+
                    "various attachments for keeping it's wearer subjugated. Next to that are a @@color:orange;pair of nipple clamps@@, horrible looking devices that "+
                    "leave little to the imagination as to what they are for.\n\n"+
                    "Finally, the last item is the one that scares you the most. It's a large black @@color:orange;anal dildo@@. It's obviously designed to be "+
                    "inserted into your ass and then locked into place with a strap on the corset. This is not going to end well for your poor behind.",
                "END": "",
                "RESULTS": []
            },
            {
                "ID": "SCENE04b",
                "TRIGGERS": [
                    {"TYPE": "FLAG", "NAME": "CAPTAIN_TRAINING", "OPT": "SET"}
                ],
                "TRIGGERS_ANY" : [ ],
                "CHECKS": [],
                "POST": [],
                "START":
                    "NPC_NAME slowly strips you and produces the familiar 'training' equipment that he used on you last time. You stare timidly at the "+
                    "@@color:orange;extreme bondage corset and anal dildo@@, the memory still fresh in your mind of the previous experience. You slowly swallow "+
                    "in fear...",
                "END": "",
                "RESULTS": []
            },
            {
                "ID": "SCENE05",
                "TRIGGERS": [ ],
                "TRIGGERS_ANY" : [ ],
                "CHECKS": [
                    { "TAG" : "B", "TYPE" : "SKILL", "NAME" : "AssFucking", "DIFFICULTY" : 80, "REWARD" : "MONEY", "R_NAME" : "MONEY", "VALUE" : 20, "OPT" : 0 }
                ],
                "POST": [
                    { "TYPE" : "NPC_STAT", "NAME" : "Mood",    "VALUE" :  3,  "OPT" : "TAG_B" },
                    { "TYPE" : "NPC_STAT", "NAME" : "Lust",    "VALUE" : -5,  "OPT" : "TAG_B" }
                ],
                "START":
                "NPC_NAME changes your clothes. The corset is so tight around your pWAIST waist that it keeps you from taking "+
                "anything but the most shallow of breaths. It pushes up your pBUST tits and flatters your pHIPS hips, causing "+
                "your pASS ass to look more pronounced.\n\n"+
                "After you've been situated such, he locks you into the device, your arms firmly at your side. Next comes the "+
                "@@color:orange;nipple clamps@@ - he spends some time toying with your nipples to get them fully errect and you "+
                "have to admit that it feels quite pleasurable, at least until he attaches the cruel clamps to you. It's all "+
                "you can manage to keep from crying.\n\n"+
                "Finally, he produces the @@color:orange;large anal plug@@. He puts it in front of your face so that you can "+
                "spit on it to try and provide some small amount of lubrication before it finds purchase in your soon to be "+
                "abused ass. Once done, he bends you over - a painful prospect in the corset and proceeds to push the end of "+
                "the bulbous dildo against your rectum.\n\n",
                "END":
                    "\n\nOnce fully attired NPC_NAME spends the rest of the pPHASE tormenting you with a variety of implements and raping "+
                    "your mouth. He constantly degrades you, forcing you to lick his feet, his anus and his cum off the floor while you call yourself names.\n\n"+
                    "@@color:DeepPink;\"I'm a stupid dumb bimbo whore!\"@@ you say with false pride in your happy voice. "+
                    "NPC_NAME laughs and slaps you on the ass, obviously pleased at your act of self degradation.\n\n"+
                    "\"That's right, and now you're going to prove it,\" NPC_NAME says as he removes the dildo from your ass.\n\n"+
                    "He grabs you by the collar and leads you over to a specially prepared rocking horse. It has a long furry and "+
                    "plush main and a (slightly) smaller dildo protruding from the seat.",
                "RESULTS": [
                    {"B":  50,   "TEXT":"You try your hardest to gape your asshole, but it's to no avail. The dildo is just @@too massive to easily "+
                                        "fit up your butt@@ and it takes NPC_NAME quite a bit of effort to slowly work it up into your bowels. You grunt "+
                                        "in pain and tears begin streaming from your eyes. NPC_NAME doesn't relent and methodically keeps forcing "+
                                        "the monstrous tool up your rectum. By the time he manages to get it firmly lodged in your posterior and locked "+
                                        "into place you are sobbing and convulsing as much the cruel corset you are wearing allows you to."},
                    {"B": 500,   "TEXT":"You strain and with great effort manage to gape your asshole sufficiently enough so that the @@monstrously "+
                                        "huge dildo easily enters your backside@@. NPC_NAME is surprised by how fluidly he is able to drive the evil "+
                                        "looking phallus into you. Obviously it annoys him a little, so right as the dildo is about to bottom out he "+
                                        "gives it a wicked slam, driving it deep into your bowels. The shock and pain cause you to involuntarily let out "+
                                        "a scream and despite yourself your eyes start to tear up. While painful, the display seems to have satisfied "+
                                        "the sadistic Captain and he locks the dildo in place with a grin."}
                ]
            },
            {
                "ID": "SCENE06a",
                "TRIGGERS": [
                    {"TYPE": "FLAG", "NAME": "CAPTAIN_TRAINING", "OPT": "NOT_SET"}
                ],
                "TRIGGERS_ANY" : [ ],
                "CHECKS": [],
                "POST": [],
                "START":
                "\"Well slut, get to it\" he states. You look confused for a moment until you feel the harsh boot of NPC_NAME's foot upon your arse, "+
                "sending you sprawling towards the little horsie. It's obvious what he wants you to do, but how much more can the man humiliate you? "+
                "Slowly you pick yourself up off the floor, a task made more difficult by the constricting corset you are wearing and straddle the "+
                "perverted toy. You give one last look at NPC_NAME and he simply nods. You hold your breath and steel your guts while you impale yourself on the phallus.",
                "END": "",
                "RESULTS": []
            },
            {
                "ID": "SCENE06b",
                "TRIGGERS": [
                    {"TYPE": "FLAG", "NAME": "CAPTAIN_TRAINING", "OPT": "SET"}
                ],
                "TRIGGERS_ANY" : [ ],
                "CHECKS": [],
                "POST": [],
                "START":
                "\"Well slut, get to it\" he states."+
                "Knowing just what NPC_NAME wants to see, you daintily prance over to the perverted rocking horse and straddle it, only taking a "+
                "moment to catch your breath in the constricting corset until you impale your abused ass on the upright phallus.",
                "END": "",
                "RESULTS": []
            },
            {
                "ID": "SCENE07",
                "TRIGGERS": [ ],
                "TRIGGERS_ANY" : [ ],
                "CHECKS": [
                    { "TAG" : "C", "TYPE" : "SKILL", "NAME" : "BlowJobs", "DIFFICULTY" : 80, "REWARD" : "MONEY", "R_NAME" : "MONEY", "VALUE" : 20, "OPT" : 0 }
                ],
                "POST": [
                    { "TYPE" : "NPC_STAT", "NAME" : "Mood",    "VALUE" :  3,  "OPT" : "TAG_C" },
                    { "TYPE" : "NPC_STAT", "NAME" : "Lust",    "VALUE" : -5,  "OPT" : "TAG_C" }
                ],
                "START":
                "Once in place, NPC_NAME puts his dick in front of your face and with your hands at your side you proceed to "+
                "give him a blow job while riding the rocking dildo with your sissy asshole. The mane of the rocking horse is "+
                "made out of some type of material that brushes sensually against your pPENIS sissy clit and combined with the "+
                "stimulation in your ass starts to arouse you. It doesn't take long until your pPENIS dick is hard and you "+
                "are straining you rub it more furiously as you bounce up and down, your butt being self-raped while you suck off NPC_NAME.\n\n",
                "END":
                "\n\nAfter you've recovered your senses NPC_NAME leads you again by the collar to the floor and forces you to eat all "+
                "of the semen with your tongue and not using your hands. You lazily gobble up the mixed pool of jizz while he continues "+
                "to humiliate and insult you. By the time you are done, without even realizing it you're crying and sobbing to yourself.\n"+
                "Thankfully the 'special training' time is almost over and NPC_NAME lets you get changed and cleaned up.",
                "RESULTS": [
                    {"C": 500,   "TEXT":"Eventually @@your cock sucking has the desired effect@@ on NPC_NAME and he grabs your head and starts to blow load "+
                    "and load of hot semen in your mouth. There's so much of it that you can't even swallow it all and it starts to "+
                    "pool out of your lips and nose. At this exact same moment, the combination of the anal stimulation, your pPENIS "+
                    "dick rubbing on the horse and the humiliation of the situation brings about your own orgasm and you find yourself "+
                    "shooting your own sissy cum while ironically drinking another mans hot jizz."}
                ]
            },
            {   // If pass check 'A', 'B', 'C' and If counter is at MAX (5), reward player and set counter to 0.
                "ID" : "SCENE08a",
                "TRIGGERS" :[
                    { "TYPE" : "TAG", "NAME" : "A", "VALUE" : 100, "CONDITION" : "gte" },
                    { "TYPE" : "TAG", "NAME" : "B", "VALUE" : 100, "CONDITION" : "gte" },
                    { "TYPE" : "TAG", "NAME" : "C", "VALUE" : 100, "CONDITION" : "gte" },
                    { "TYPE" : "COUNTER", "NAME" : "CAPTAIN_LOOT", "VALUE" : 5, "CONDITION" : "gte" }
                ],
                "TRIGGERS_ANY" : [ ],
                "CHECKS" : [ ],
                "POST" : [
                    { "TYPE" : "FLAG",      "NAME" : "CAPTAIN_LOOT",              "VALUE" :   0,  "OPT" : "SET" },
                    { "TYPE" : "FLAG",      "NAME" : "CAPTAIN_REWARD",            "VALUE" :   1,  "OPT" : "SET" },
                    { "TYPE" : "LOOT_BOX",  "NAME" : "uncommon pirate loot box",   "VALUE" :   1,  "OPT" : "" }
                ],
                "START" :   "NPC_NAME says, \"You've really come a long way PLAYER_NAME. When I first brought you aboard I had no idea you'd turn into "+
                            "such a fine slut. I'm pleasantly surprised. Here, take this...\" NPC_NAME retrieves something from his desk. It's a small treasure chest emblazoned with a skull and crossbones. You wonder what's inside?",
                "END" : "",
                "RESULTS" : [ ]
            },
            {   // If passed all checks then increment counter. Doesn't trigger if the counter is already at MAX (5) or the reward has been given this time.
                "ID" : "SCENE08b",
                "TRIGGERS" :[
                    { "TYPE" : "TAG", "NAME" : "A", "VALUE" : 100, "CONDITION" : "gte" },
                    { "TYPE" : "TAG", "NAME" : "B", "VALUE" : 100, "CONDITION" : "gte" },
                    { "TYPE" : "TAG", "NAME" : "C", "VALUE" : 100, "CONDITION" : "gte" },
                    { "TYPE" : "COUNTER", "NAME" : "CAPTAIN_LOOT", "VALUE" : 4, "CONDITION" : "lte" },
                    { "TYPE" : "FLAG", "NAME" : "CAPTAIN_REWARD",  "OPT" : "NOT_SET" }
                ],
                "TRIGGERS_ANY" : [ ],
                "CHECKS" : [ ],
                "POST" : [
                    { "TYPE" : "COUNTER",   "NAME" : "CAPTAIN_LOOT",    "VALUE" :   1,  "OPT" : 1 }
                ],
                "START" :   "NPC_NAME says, \"Ahh... that was relaxing. Who knew you'd take so well to your new job, eh my little cumslut?\"\n\n"+
                            "You're not sure this is the kind of compliment you've ever wanted, but what choice do you have?\n\n"+
                            "NPC_NAME says, \"Keep up the good work and I'll make sure to reward you properly... and not just with a gullet full o' me jizz!\"",
                "END" : "",
                "RESULTS" : [ ]
            },
            {   // Just unset the flag that shows we received loot and make sure we clear the counter.
                "ID" : "SCENE08c",
                "TRIGGERS" :[
                    { "TYPE" : "FLAG", "NAME" : "CAPTAIN_REWARD", "OPT" : "SET" }
                ],
                "TRIGGERS_ANY" : [ ],
                "CHECKS" : [ ],
                "POST" : [
                    { "TYPE" : "FLAG",   "NAME" : "CAPTAIN_REWARD",  "OPT" : "DELETE" }
                ],
                "START" : "",
                "END" : "",
                "RESULTS" : [ ]
            },
            {
                "ID": "SCENE09",
                "TRIGGERS": [],
                "TRIGGERS_ANY" : [ ],
                "CHECKS": [],
                "POST": [
                    { "TYPE" : "FLAG",       "NAME" : "CAPTAIN_TRAINING",   "VALUE" :   1, "OPT" : "SET"},
                    { "TYPE" : "STAT_XP",    "NAME" : "WillPower",          "VALUE" : -50, "OPT" : "RANDOM" },
                    { "TYPE" : "STAT_XP",    "NAME" : "Perversion",         "VALUE" : 100, "OPT" : "RANDOM" }
                ],
                "START": "",
                "END": "",
                "RESULTS": []
            }

        ],
        "END" : "NPC_NAME hands you a small pouch filled with JOB_PAY coins and says, \"Don't just lay there, your job is over so see yourself out whore.\"\n\n"+
        "You'd almost be offended if it wasn't for the fact that what he said was essentially true. You pick up your poor and battered body and head for the door.",
        "JOB_RESULTS" : [ ]
    },
    "STRP01": {
        "ID": "STRP01", "TITLE": "Practice Stripping", "GIVER": "GALLEY", "PAY" : 0,
        "RATING" : 2, // of 5
        "PHASES" : [ 0 ],
        "DAYS"   : 1,
        "HIDDEN" : true,
        "COST" : [  { "TYPE" : "TIME", "VALUE" : 1 },
                    { "TYPE" : "STAT", "NAME" : "Energy", "VALUE" : 1 } ],
        "REQUIREMENTS" : [
                    { "TYPE" : "QUEST",     "NAME" : "STRIPPING",        "VALUE" : "ACTIVE",  "CONDITION" : "eq"  }
        ],
        "INTRO" :   "Not used",
        "START" : "The stage in the galley looks like it's been recently repaired. You wonder if it wasn't done expressly so that you could use it. Did one of the Pirates, "+
        "or even the Captain, foretell that you'd sink this far into depravity? You take a moment to think about what you need to do. It's not like you've never seen a dancing "+
        "girl before, or even a lewd dancing girl or two on occasion, but the concept of being the woman up on stage jiggling her ass and tits for a horde of men is "+
        "something you never imagined. Still, you need the money... and truthfully it's an easier way to earn coin than most other options you have right now.",
        "SCENES" : [
            {
                "ID" : "SCENE01",
                "TRIGGERS" :[ ],
                "TRIGGERS_ANY" : [ ],
                "CHECKS" : [
                    { "TAG": "A", "TYPE" : "SKILL", "NAME" : "Seduction", "DIFFICULTY" : 30, "REWARD" : "NONE", "R_NAME" : "NONE", "VALUE" : 0, "OPT" : 0 }],
                "POST" : [ ],
                "START" :   "You start off you \"act\" by trying to make a big entrance. You saunter sexily across the stage, twisting and shaking your body at "+
                "an imaginary crowd. Winking and smiling while groping your tits or slapping your ass.",
                "END" : "",
                "RESULTS" : [
                    {"A":  25, "TEXT": "The overall result @@seems more comical@@ than anything else. You doubt that you'd get anything but laughter from the crowd.."},
                    {"A":  50, "TEXT": "You're not entirely confident, but you think you @@did a good enough job@@ showcasing your assets and being flirty. More practice may be needed."},
                    {"A": 500, "TEXT": "You are surprised by @@how easily it comes to you@@. Perhaps all the time you've spent \"acting\" as a girl on this ship has managed to change your personality to such a degree that this is natural to you now?"}
                ]
            },
            {
                "ID" : "SCENE02",
                "TRIGGERS" :[ ],
                "TRIGGERS_ANY" : [ ],
                "CHECKS" : [
                    { "TAG": "B", "TYPE" : "SKILL", "NAME" : "Dancing", "DIFFICULTY" : 30, "REWARD" : "NONE", "R_NAME" : "NONE", "VALUE" : 0, "OPT" : 0 }],
                "POST" : [
                    { "TYPE" : "STAT_XP", "NAME" : "Fitness",    "VALUE" :  25,  "OPT" : "TAG_B" }
                ],
                "START" :   "Next up, you start off trying to do some sexy dance moves. There's no music, so you need to pretend and move along to an imaginary beat. "+
                "You swish your hips and shake your ass, twisting and pivoting for the \"crowd\" and making sure to occasionally hike up your skirt or dip your pBUST tits out of your top.",
                "END" : "",
                "RESULTS" : [
                    {"B":  25, "TEXT": "The effect is muted heavily by the fact that you appear to have @@two left feet@@. Your dancing needs improvement."},
                    {"B":  50, "TEXT": "You feel that you've @@mostly got a handle on it@@ but your moves could do with some refinement.."},
                    {"B": 500, "TEXT": "The entire experience is @@surprisingly easy@@, your body moving naturally and fluidly like that of a seasoned stripper. Maybe you have some natural talent in this area?"}
                ]
            },
            {
                "ID" : "SCENE03",
                "TRIGGERS" :[ ],
                "TRIGGERS_ANY" : [ ],
                "CHECKS" : [
                    { "TAG": "C", "TYPE" : "SKILL", "NAME" : "Dancing", "DIFFICULTY" : 50, "REWARD" : "NONE", "R_NAME" : "NONE", "VALUE" : 0, "OPT" : 0 },
                    { "TAG": "C1", "TYPE" : "SKILL", "NAME" : "Seduction", "DIFFICULTY" : 50, "REWARD" : "NONE", "R_NAME" : "NONE", "VALUE" : 0, "OPT" : 0 }],
                "POST" : [
                    { "TYPE" : "STAT_XP", "NAME" : "Fitness",    "VALUE" :  25,  "OPT" : "TAG_C" }
                ],
                "START" :   "You decide to kick it up a notch and start to disrobe while doing your dance moves. You first start trying to be \"flirty\" by peeking your "+
                "pBUST bosom out of your top or exposing your pASS ass by flipping your skirt and then move into the full act of removing your clothes one by one while still "+
                "trying to put on a sexy dance number.",
                "END" : "",
                "RESULTS" : [
                    {"C":  25, "TEXT": "The dancing of course, ends up @@being terrible@@ due to your inexperience and the extra challenge of trying to get naked at the same time."},
                    {"C":  50, "TEXT": "You somehow @@manage to keep a beat@@ while taking off your garments, one by one."},
                    {"C": 500, "TEXT": "You @@shake your stuff sexily@@ while you strip your clothes."},
                    {"C1":  25, "TEXT": "But you find it @@difficult@@ to actually remove your garments. Who knew getting naked would be so hard?"},
                    {"C1":  50, "TEXT": "You @@manage to disrobe@@ yourself during this act without too much hassle. Maybe it wasn't as sexy as it could be however?"},
                    {"C1": 500, "TEXT": "You @@sexily remove your clothing@@, making a huge show of each piece as it comes off your body and onto the floor."}
                ]
            },
            {
                "ID" : "SCENE04",
                "TRIGGERS" :[ ],
                "TRIGGERS_ANY" : [ ],
                "CHECKS" : [
                    { "TAG": "D", "TYPE" : "SKILL", "NAME" : "Seduction", "DIFFICULTY" : 50, "REWARD" : "NONE", "R_NAME" : "NONE", "VALUE" : 0, "OPT" : 0 }],
                "POST" : [ ],
                "START" :   "Now that you're mostly naked, you continue to try and jiggle and gyrate your assets at the imaginary crowd. You cover your breasts with your hands "+
                "and arms, while turning your back to show off your pASS derriere, wiggling and shimmying your body to the beat of the imaginary tune in your head.",
                "END" : "",
                "RESULTS" : [
                    {"D":  25, "TEXT": "This is @@surprisingly much harder than you thought@@ and you feel inexperienced and foolish."},
                    {"D":  50, "TEXT": "You think you managed to @@pull it off well enough@@, but you could improve some in a couple of areas."},
                    {"D": 500, "TEXT": "You @@seem to be a natural@@ at these types of seductive movements. If it wasn't for the obvious proof between your legs, no one would suspect you weren't born a woman."}
                ]
            },
            {
                "ID" : "SCENE05",
                "TRIGGERS" :[ ],
                "TRIGGERS_ANY" : [ ],
                "CHECKS" : [
                    { "TAG": "E", "TYPE" : "SKILL", "NAME" : "Dancing", "DIFFICULTY" : 50, "REWARD" : "NONE", "R_NAME" : "NONE", "VALUE" : 0, "OPT" : 0 }],
                "POST" : [
                    { "TYPE" : "STAT_XP", "NAME" : "Fitness",    "VALUE" :  25,  "OPT" : "TAG_E" }
                ],
                "START" :   "Finally, you decide to end your \"show\" with a big dance number. You start picking up the pace and stop hiding your pBUST tits. You have a pair "+
                "of long red tassels attached to your nipples and you try to make them spin in circles as you undulate your body to the beat in your head.",
                "END" : "",
                "RESULTS" : [
                    {"E":  25, "TEXT": "You try to pick up the tempo, but just as you're about to put on a finishing move, you @@slip and fall on your arse@@. Not a great way to end a performance."},
                    {"E":  50, "TEXT": "The tassels and your tits are flying everywhere as you @@strut your stuff@@ on the stage. It's not perfect, but passable enough for pirate scum. You finish off by doing the splits and landing on the stage, somewhat awkwardly."},
                    {"E": 500, "TEXT": "You really get into the act and start experimenting, doing @@more and more complex moves@@ as you finish with spinning your tassels in opposite directions while landing forward on the stage doing the splits. You think you pulled it off well enough."}
                ]
            }
        ],
        "END" : "You pick yourself up off the stage and start gathering your discarded clothing. You're surprised at how much of a workout that is and you wonder how much "+
        "more you're going to have to practice until you get good enough for the \"real thing\".",
        "JOB_RESULTS" : [
        ]

    },
    "STRP02": {
        "ID": "STRP02", "TITLE": "Perform Strip Show", "GIVER": "GALLEY", "PAY" : 30,
        "RATING" : 2, // of 5
        "PHASES" : [ 2 ],
        "DAYS"   : 1,
        "HIDDEN" : true,
        "COST" : [
                    { "TYPE" : "TIME", "VALUE" : 1 },
                    { "TYPE" : "STAT", "NAME" : "Energy", "VALUE" : 2 } ],
        "REQUIREMENTS" : [
                    { "TYPE" : "QUEST",     "NAME" : "STRIPPING",        "VALUE" : "COMPLETED",  "CONDITION" : "eq"  }
        ],
        "INTRO" :   "Not used",
        "START" : "There's a surprisingly large crowd gathered in the galley to watch you perform this evening. The pirates are generally a rowdy bunch "+
        "but even more so when they've been hitting the grog and expecting a show. You give a nod to the pirate who's manning the piano and he starts to "+
        "play a bawdy fanfare that signifies you're about to \"enter the stage\". A roar goes up from the crowd!",
        "SCENES" : [
            {
                "ID" : "SCENE01",
                "TRIGGERS" :[ ],
                "TRIGGERS_ANY" : [ ],
                "CHECKS" : [
                    { "TAG": "A", "TYPE" : "SKILL", "NAME" : "Dancing",     "DIFFICULTY" : 70,  "REWARD" : "MONEY", "R_NAME" : "MONEY", "VALUE" : 10, "OPT" : "RANDOM" },
                    { "TAG": "B", "TYPE" : "SKILL", "NAME" : "Seduction",   "DIFFICULTY" : 70,  "REWARD" : "MONEY", "R_NAME" : "MONEY", "VALUE" : 10, "OPT" : "RANDOM" }
                ],
                "POST" : [
                    { "TYPE" : "STAT_XP",        "NAME" : "Fitness",    "VALUE" :  10,  "OPT" : "TAG_A" },
                    { "TYPE" : "PIRATE_STATS",   "NAME" : "Mood",       "VALUE" :   5,  "OPT" : "TAG_A" },
                    { "TYPE" : "PIRATE_STATS",   "NAME" : "Lust",       "VALUE" :   5,  "OPT" : "TAG_B" }
                ],
                "START" :   "You enter onto the stage holding up large feather fans in front of your body. You put extra emphasis in your walk, shaking your pASS ass and pBUST tits "+
                "in time with the music. You do your best to try and make a spectacle of yourself and flaunting your body and sexuality.",
                "END" : "",
                "RESULTS" : [
                    {"A":  25, "TEXT": "Your moves are @@less than impressive@@, bordering on incompetent. You just hope the crowd didn't notice."},
                    {"A":  50, "TEXT": "You feel like you @@managed to enter sexily enough@@ onto the stage, your assets giving you a clear edge."},
                    {"A": 500, "TEXT": "You @@easily handle entering the stage@@ and the wiggling up your hips and tits gets everyone's attention."},
                    {"B":  25, "TEXT": "The crowd's reaction is @@not very impressive@@ however. You'll have to work harder."},
                    {"B":  50, "TEXT": "The crowd seems to @@really get into it@@ which is a good sign for your tips."},
                    {"B": 500, "TEXT": "The crowd is @@clapping and cheering@@ as you strut your stuff. Hopefully you can keep this energy level up."}
                ]
            },
            {
                "ID" : "SCENE02",
                "TRIGGERS" :[ ],
                "TRIGGERS_ANY" : [ ],
                "CHECKS" : [
                    { "TAG": "C", "TYPE" : "SKILL", "NAME" : "Dancing",     "DIFFICULTY" : 70,  "REWARD" : "MONEY", "R_NAME" : "MONEY", "VALUE" : 10, "OPT" : "RANDOM" },
                    { "TAG": "D", "TYPE" : "SKILL", "NAME" : "Seduction",   "DIFFICULTY" : 70,  "REWARD" : "MONEY", "R_NAME" : "MONEY", "VALUE" : 10, "OPT" : "RANDOM" }
                ],
                "POST" : [
                    { "TYPE" : "STAT_XP",        "NAME" : "Fitness",    "VALUE" :  10,  "OPT" : "TAG_C" },
                    { "TYPE" : "PIRATE_STATS",   "NAME" : "Mood",       "VALUE" :   5,  "OPT" : "TAG_C" },
                    { "TYPE" : "PIRATE_STATS",   "NAME" : "Lust",       "VALUE" :   5,  "OPT" : "TAG_D" }
                ],
                "START" :   "The music starts to pick up and you do your best to gyrate your body in time with it. You toy with the crowd, starting to remove "+
                "your clothing bit by bit while giving them glimpses of your pBUST tits from behind the fans. Each piece of your costume that you remove gets held "+
                "up over a fan and dangled for a bit before being discarded, each time eliciting a hoot from the crowd. Eventually you're entirely naked except for "+
                "the tassels on your tits and a small thong hiding your pPENIS sissy dick from the audience.",
                "END" : "",
                "RESULTS" : [
                    {"C":  25, "TEXT": "Except for a @@few mistakes@@ you manage to keep your footing to the music."},
                    {"C":  50, "TEXT": "Your dancing is @@relatively well done@@ and gets a good response from the crowd."},
                    {"C": 500, "TEXT": "Your @@sexy moves@@ get a roar of approval from the crowd."},
                    {"D":  25, "TEXT": "However, you do see a @@few disinterested faces out there@@. Maybe you're not trying hard enough?"},
                    {"D":  50, "TEXT": "Everyone seems to be @@really into your act@@ at this stage."},
                    {"D": 500, "TEXT": "The @@crowd roars with approval@@ at your display."}
                ]
            },
            {
                "ID" : "SCENE03",
                "TRIGGERS" :[ ],
                "TRIGGERS_ANY" : [ ],
                "CHECKS" : [
                    { "TAG": "E", "TYPE" : "SKILL", "NAME" : "Dancing",     "DIFFICULTY" : 70,  "REWARD" : "MONEY", "R_NAME" : "MONEY", "VALUE" : 20, "OPT" : "RANDOM" },
                    { "TAG": "F", "TYPE" : "SKILL", "NAME" : "Seduction",   "DIFFICULTY" : 70,  "REWARD" : "MONEY", "R_NAME" : "MONEY", "VALUE" : 20, "OPT" : "RANDOM" }
                ],
                "POST" : [
                    { "TYPE" : "STAT_XP",        "NAME" : "Fitness",    "VALUE" :  10,  "OPT" : "TAG_E" },
                    { "TYPE" : "PIRATE_STATS",   "NAME" : "Mood",       "VALUE" :   5,  "OPT" : "TAG_E" },
                    { "TYPE" : "PIRATE_STATS",   "NAME" : "Lust",       "VALUE" :   5,  "OPT" : "TAG_F" },
                    { "TYPE" : "STAT_XP",        "NAME" : "Femininity", "VALUE" :  50,  "OPT" : "TAG_E" }
                ],
                "START" :   "Now that you have their attention, it's time for the big finisher. This is the part of the act that will get them out of their "+
                "seats and their coins out of their pockets. You continue to flirt and toy with the audience, peeking your pBUST tits out from behind the fans "+
                "and giggling and laughing while you blow kisses to the men. You turn around and slowly start to shimmy the fans down your body... "+
                "eventually exposing your bare pASS rear end. This gets a cheer and you discard the fans to either side and then turn around as fast as "+
                "you can, revealing your pBUST hooters in all their glory. You start shaking your jugs back and forth, causing the tassels attached to the pasties "+
                "on your tits to swing around in large circles and your tit-flesh to wobble and jiggle.",
                "END" : "You finish off your act with a flurry of movement, shaking, jiggling and gyrating. Finally - arms stretched outwards, breasts fully exposed, "+
                "you tilt your head back at the ceiling and let everyone take in the lewdness of your body.",
                "RESULTS" : [
                    {"E":  25, "TEXT": "You @@almost lose your footing@@ a couple of times, but barely manage to recover."},
                    {"E":  50, "TEXT": "You @@strut your stuff@@ for the crowd, putting on a display of seductive gyrating."},
                    {"E": 500, "TEXT": "Your @@movements are fluid and sexy@@, entrancing everyone who watches."},
                    {"F":  25, "TEXT": "Still... you notice that @@not everyone has their concentration on you@@, or your tits."},
                    {"F":  50, "TEXT": "The crowd is @@cat calling you intently@@ and several men start propositioning."},
                    {"F": 500, "TEXT": "The crowd goes wild - men are staring at you with @@lust filled eyes@@ bordering on madness."}
                ]
            }

        ],
        "END" : "JOB_RESULTS Some of the men start throwing coins at the stage. Still naked, you bend over to pick them up and count JOB_PAY in total. You give the crowd a wink and blow them a kiss and then "+
        "remove yourself to get dressed.",
        "JOB_RESULTS" : [
            { "E" :  25, "TEXT" : "The crowd @@didn't seem too impressed@@ with your dancing ability, which isn't saying much, but " },
            { "E" :  50, "TEXT" : "The crowd @@seemed to enjoy@@ your dancing, but " },
            { "E" : 500, "TEXT" : "The crowd @@was really into your dance performance@@, but " },
            { "F" :  25, "TEXT" : "your @@sex appeal was overall lacking@@. You need to do better if you want to earn more money." },
            { "F" :  50, "TEXT" : "your @@sex appeal was on point@@. At least they can appreciate a good body." },
            { "F" : 500, "TEXT" : "your @@sex appeal was through the roof@@. You can see several of the pirate sporting large boners even from here." }
        ]

    },
    "JARV01": {
        "ID": "JARV01", "TITLE": "A slutty seduction", "GIVER": "Jarvis", "PAY" : 0,
        "RATING" : 5, // of 5
        "PHASES" : [ 3 ],
        "DAYS"   : 1,
        "HIDDEN" : true,
        "COST" : [  { "TYPE" : "TIME", "VALUE" : 1 },
                    { "TYPE" : "STAT", "NAME" : "Energy", "VALUE" : 3 },
                    { "TYPE" : "ITEM", "NAME" : "fortified wine", "VALUE" : 1 }
                 ],
        "REQUIREMENTS" : [
            { "TYPE" : "QUEST",     "NAME" : "THEBACKDOOR",         "VALUE" : "ACTIVE",     "CONDITION" : "eq"  },
            { "TYPE" : "ITEM",      "NAME" : "fortified wine",      "VALUE" : 1,            "CONDITION" : "gte" }
        ],
        "INTRO" :   "NPC_NAME wouldn't normally stoop so low as to fuck a common whore behind a tavern, but perhaps if you gave him a little 'mental lubrication' first he might become a little more compliant?",
        "START" : "You slowly saunter up to NPC_NAME's table making sure to stick out your bust and give your arse an extra wiggle. You've clearly got his attention but he briskly turns his head to side. Undeterred "+
        "you sit down at a free chair next to him and slide across a bottle of @@color:purple;fortified wine@@.\n\n"+
        "\"@@color:DeepPink;Care you have a drink with me handsome?@@\" you ask while fluttering your eyelashes at him. NPC_NAME seems to consider for a moment and smiles and uncorks the bottle of wine. With some light flirting and banter it doesn't "+
        "take long for him to get drunk off the potent alcohol. Sensing your opportunity, you grab him by the hand and whisper in his ear to come with you outside so that you can show him a \"@@color:DeepPink;real good time@@\".",
        "SCENES" : [
            {
                "ID" : "SCENE01",
                "TRIGGERS" :[ ],
                "TRIGGERS_ANY" : [ ],
                "CHECKS" : [
                    { "TAG": "A", "TYPE" : "SKILL", "NAME" : "Seduction", "DIFFICULTY" : 50, "REWARD" : "NONE", "R_NAME" : "NONE", "VALUE" : 0, "OPT" : 0 }],
                "POST" : [ ],
                "START" :   "Once outside you find a quiet alley to begin your work. Thankfully it's late enough at night that there aren't any passer-bys and NPC_NAME seems to mostly be either too drunk, or too horny "+
                "to care about being found out. You rub your pBUST tits against him and start to stroke his groin through his trousers.\n\n"+
                "\"@@color:DeepPink;Oh, what a thick cock you have hiding in there,@@\" you whisper against his ear, \"@@color:DeepPink;I want to have a taste of it just sooooo bad...@@\"",
                "RESULTS" : [
                    {"A":  25, "TEXT": "NPC_NAME seems to sober up momentarily and he gives you a weary look. Was that a @@little bit too much@@ perhaps?"},
                    {"A":  50, "TEXT": "You're not entirely confident, but you think you @@did a good enough job@@ getting NPC_NAME ready to go."},
                    {"A": 500, "TEXT": "You are surprised by @@how easily it is@@ to turn this old goat on. You feel his cock practically surge in your hand and hear his breath hitch in his throat."}
                ],
                "END" : "Without warning he grabs one of your turgid nipples and gives it a firm twist, causing you to gasp out loud. A wicked grin comes across his face and he roughly pushes you down to your knees. It's obvious what he wants."
            },
            {
                "ID" : "SCENE02",
                "TRIGGERS" :[ ],
                "TRIGGERS_ANY" : [ ],
                "CHECKS" : [
                    { "TAG": "B", "TYPE" : "SKILL", "NAME" : "BlowJobs", "DIFFICULTY" : 80, "REWARD" : "NONE", "R_NAME" : "NONE", "VALUE" : 0, "OPT" : 0 }],
                "POST" : [ ],
                "START" :   "You fumble momentarily with the front of NPC_NAME's trousers and he slightly moans when you finally release his turgid member from their confines. It's a short, but thick and meaty cock, ripe with the smell of "+
                "a man who has worked a full day. You place your pLIPS lips on the tip of his member and take an experimental lick, it's salty and not altogether unpleasant. Encouraged, you engulf his member in your mouth and begin to suck like you've done so many times before. "+
                "NPC_NAME doesn't wait for you to pick up the pace and one of his hands winds itself into your hair, pushing your mouth further down his cock. You do your best to keep up a steady rhythm while trying not to choke, but it doesn't keep the tears from coming out of your eyes.",
                "END" : "",
                "RESULTS" : [
                    {"B":  25, "TEXT": "Finally, after @@what seems like ages@@ you feel his body tense up and he slams his hips into your face. Within moments a torrent of hot cum invades your throat, it's all you can do to swallow it without choking."},
                    {"B":  50, "TEXT": "You increase your pace on his cock, blinking away the tears and forcing his thick member down your poor abused throat. The extra effort @@seems to pay off@@ and within minutes NPC_NAME is pouring a hot helping of cum down your sissy gullet."},
                    {"B": 500, "TEXT": "You @@expertly suck and deep throat@@ NPC_NAME's cock, your lips and tongue moving up and down his shaft like a musician playing a fiddle. With sudden urgency you plunge his stiff rod to the back of your mouth and choke on it's thickness. Within moments he's cumming and you back off to let it pool in your mouth. Once he's spent, he looks down at you and you smile, opening your mouth and showing him his cum before you greedily swallow it down. "}
                ]
            },
            {
                "ID" : "SCENE03",
                "TRIGGERS" :[ ],
                "TRIGGERS_ANY" : [ ],
                "CHECKS" : [
                    { "TAG": "C", "TYPE" : "SKILL", "NAME" : "AssFucking", "DIFFICULTY" : 80, "REWARD" : "NONE", "R_NAME" : "NONE", "VALUE" : 0, "OPT" : 0 }],
                "POST" : [ ],
                "START" :   "Jarvis seems spent, but still coherent and you can't have that. You rise from your knees and start fondling his dick with one hand while you free your pASS arse from the confines of your clothing.\n\n"+
                "\"@@color:DeepPink;You're not going to leave a girl hanging are you?@@\" you ask. He looks momentarily taken aback but is soon lost again to the tender administrations of your hands.\n\n"+
                "You slowly turn around and start rubbing your exposed backside against his now stiffening member. You hear a grunt and are rewarded with the feeling of a turgid cock poking against your arse. He's almost there."+
                "\"@@color:Cyan;What is it you want, you little slut?@@\" NPC_NAME says in a low tone, his eyes greedily clinging to your arse.\n\n"+
                "\"@@color:DeepPink;You know what I need...@@\" you say in a low throaty voice, \"@@color:DeepPink;That big hard cock up my backside... please, please fuck me!@@\"\n\n"+
                "NPC_NAME doesn't require much encouragement after that, your slutty display and the motions of your whore ass against his dick having aroused him for the second time. You deftly shift your ass and position his cock at the "+
                "entrance of your sphincter. Since his dick is already well lubricated from your blow job, it goes in rather easily and with a sudden gasp you shove yourself down on his pole. The thickness is so much that you swear you can "+
                "actually feel your bowels push apart. NPC_NAME, obviously turned on by your lewd act, grabs you by your pHIPS hips and starts to furiously pump away at your pASS ass.",
                "END" : "",
                "RESULTS" : [
                    {"C":  25, "TEXT": "Despite the furious pounding your backside is receiving, you are @@unable to either loosen up enough or shift into a good enough position@@ to allow NPC_NAME to really bottom out in your colon. After what seems like ages, you think that maybe NPC_NAME has cum, but you're not entirely sure. In either case, he removes himself from your ass-pussy and puts away his cock."},
                    {"C":  50, "TEXT": "You @@furiously buck your hips@@ against NPC_NAME's burgeoning boner, impaling yourself so deep that you feel your guts twist and flop with each thrust. Quickly you get into a good rhythm and with scant encouragement you feel a torrent of boiling jizz fill your bowels."},
                    {"C": 500, "TEXT": "\"@@color:DeepPink;Yeah! Fuck me daddy!@@\" you scream while impaling your sissy ass on NPC_NAME's thick shaft. The verbal encouragement really excites him and he begins to really plow your ass deeply. Maybe it's the hours of practice you've already had, but it doesn't take long for your sissy hole to respond and you feel your own orgasm explode, a thin trail of sissy cum leaking out of your limp clit. NPC_NAME doesn't seem to notice the dripping girl jizz, but he definitely feels the spasms of your orgasmic rectum and it quickly brings him over the edge. With a guttural groan he impales his hot cock fully inside you, spewing a torrent of jizz so deep that you swear you can taste it in your mouth. The pure lust and perversion of the act causes you to cum again and you barely notice that NPC_NAME falls back, seemingly dazed."}
                ]
            },
            {
                "ID" : "SCENE04a",
                "TRIGGERS" :[
                    {"TYPE" : "TAG",  "NAME": "A", "VALUE":   50, "CONDITION" : "gte" },
                    {"TYPE" : "TAG",  "NAME": "B", "VALUE":   50, "CONDITION" : "gte" },
                    {"TYPE" : "TAG",  "NAME": "C", "VALUE":  100, "CONDITION" : "gte" }
                ],
                "TRIGGERS_ANY" : [ ],
                "CHECKS" : [ ],
                "POST" : [
                    { "TYPE" : "QUEST_FLAG", "NAME": "THEBACKDOOR", "OPT": "SET", "VALUE" : "COMPLETED"},
                    { "TYPE" : "QUEST_ITEM", "NAME" : "isla harbor mansion key", "VALUE" : 1 }
                ],
                "START" :   "",
                "END" : "Once you come out of your own orgasmic fog, you notice that NPC_NAME appears to have fainted dead against the alley wall. Without hesitation you rummage through his pockets until you find a specific key that GF_NAME used to use to let you into the mansion after hours. Ironically enough, you let Jarvis up your backdoor so that you could use his later.",
                "RESULTS" : [ ]
            },
            {
                "ID" : "SCENE04b",
                "TRIGGERS" : [ ],
                "TRIGGERS_ANY" :[
                    {"TYPE" : "TAG",  "NAME": "A", "VALUE":   50, "CONDITION" : "lt" },
                    {"TYPE" : "TAG",  "NAME": "B", "VALUE":   50, "CONDITION" : "lt" },
                    {"TYPE" : "TAG",  "NAME": "C", "VALUE":  100, "CONDITION" : "lt" }
                ],
                "CHECKS" : [ ],
                "POST" : [
                ],
                "START" :   "",
                "END" : "Turning around you notice that NPC_NAME appears to be leaning heavily against the wall. You make your way up to him and start rubbing your hands on him, but what you're actually doing is searching for his keys. Unfortunately he slaps your hands away and says, \"@@color:Cyan;Dammit slut, I'm spent, there'll be no more of that!@@\" and walks away while fixing up his trousers. Alas, it seems that your efforts tonight went to waste. Where did you go wrong?",
                "RESULTS" : [ ]
            }

        ],
        "END" : "You take a moment to straighten out your clothes, fix your hair and wipe away some of the cum before checking to make sure no one has seen you. You quickly depart the alley and make your way back to the tavern.",
        "JOB_RESULTS" : [
        ]

    },
    "GOV01": {
        "ID": "GOV01", "TITLE": "Daddy's Little Girl", "GIVER": "LordRowe", "PAY" : 200,
        "RATING" : 5, // of 5
        "PHASES" : [ 1, 2, 3 ],
        "DAYS"   : 1,
        "HIDDEN" : false,
        "COST" : [
            { "TYPE" : "TIME",  "VALUE" : 1 },
            { "TYPE" : "STAT",  "NAME" : "Energy", "VALUE" : 1 }],
        "REQUIREMENTS" : [
            { "TYPE" : "NPC_STAT",      "NAME" : "Lust",            "VALUE" : 70,           "CONDITION" : "gte" },
            {"TYPE": "STYLE_CATEGORY",  "NAME": "Daddy's Girl",     "VALUE": 100,           "CONDITION" : "gte" },
            {"TYPE": "HAIR_STYLE",      "NAME": "cute pig tails",   "VALUE": true,          "CONDITION" : "eq" },
            {"TYPE": "HAIR_COLOR",      "NAME": "blond",            "VALUE": true,          "CONDITION" : "eq" },
            {"TYPE": "QUEST",           "NAME": "DADDYSGIRL",       "VALUE": "COMPLETED",   "CONDITION" : "eq" }
        ],
        "INTRO" :
        "NPC_NAME smiles at you and says, \"@@color:cyan;Well, if it isn't Daddy's little girl. Come here princess and sit on Daddy's lap, he has a nice surprise for you in his pants.@@\"",
        "SCENES" : [
            {
                "ID" : "SCENE01",
                "TRIGGERS" :[ ],
                "TRIGGERS_ANY" : [ ],
                "CHECKS" : [
                    { "TAG" : "A", "TYPE" : "SKILL", "NAME" : "Seduction", "DIFFICULTY" : 60, "REWARD" : "MONEY", "R_NAME" : "MONEY", "VALUE" : 50, "OPT" : 0 }
                ],
                "POST" : [
                     { "TYPE" : "SKILL_XP", "NAME" : "Seduction",    "VALUE" :  50,  "OPT" : "TAG_A"}
                ],
                "START" :
                "You flounce across the floor in NPC_NAME's direction taking care to put your pASS ass and pBUST tits to their maximum use with the exaggerated movement. Once there, you abruptly  "+
                "turn around and lift up your skirt, giving NPC_NAME a look at your derriere and the words, 'I @@color:pink;&#9825;@@ Daddy!' emblazoned on your panties. \"@@color:DeepPink;Like what "+
                "you see Daddy?@@\" you say with a giggle, earning you a playful swat on the rump. ",
                "RESULTS" : [
                    {"A": 50,   "TEXT": "You're @@color:red;not sure@@ if your display was effective or not, but NPC_NAME at least seems interested. " },
                    {"A": 500,  "TEXT": "A quick peek at NPC_NAME's lap confirms that his cock is already tenting his trousers. It seems your little display was @@color:green;very effective@@. "  }
                ],
                "END" : ""
            },
            {
                "ID" : "SCENE02",
                "TRIGGERS" :[ ],
                "TRIGGERS_ANY" : [ ],
                "CHECKS" : [
                    { "TAG" : "B", "TYPE" : "SKILL", "NAME" : "HandJobs", "DIFFICULTY" : 60, "REWARD" : "MONEY", "R_NAME" : "MONEY", "VALUE" : 50, "OPT" : 0 }
                ],
                "POST" : [
                    { "TYPE" : "SKILL_XP", "NAME" : "HandJobs",    "VALUE" :  50,  "OPT" : "TAG_B"}
                ],
                "START" :
                "NPC_NAME pulls you into his lap and starts roughly groping you. You let out a well acted girlish giggle and say, \"@@color:DeepPink;Sheesh Daddy! You're all handsy today!@@\" and then you "+
                "proceed to make quite a show of rubbing your ass in circles on his crotch. It doesn't take long before you hear NPC_NAME's breath start to become more strained and you gasp, \"@@color:DeepPink;Ooh Daddy! "+
                "Something hard is poking me in the bottom!@@\"\n\n"+
                "NPC_NAME says, \"@@color:cyan;That's my... uh....@@\" he moans softly and continues, \"@@color:cyan;My... trouser snake!@@\"\n\n"+
                "You give out another fake gasp. \"@@color:DeepPink;Wow! What's that Daddy? Can I see?@@\" Without waiting for a response you get down on your knees and start stroking NPC_NAME's cock through his pants. "+
                "\"@@color:DeepPink;Gee Daddy, Mr. Snake is getting so big and hard now, I'm going to let him out, okaaaaay?@@\"\n\n"+
                "NPC_NAME merely nods as you unhitch his trousers, his thick meat pole springing up and flinging a droplet of pre-cum at your forehead. You give out a fake gasp of surprise and cover your mouth with your free hand, "+
                "earning you a short laugh for your performance. ",
                "RESULTS" : [
                    {"B": 50,   "TEXT": "Without being asked to, you quickly start to work your fingers up and down NPC_NAME's shaft. It's hot and hard to the touch and you find yourself @@color:red;somewhat distracted@@ "+
                    "by it's girth. You barely notice that NPC_NAME is starting to get more agitated than aroused."},
                    {"B": 500,  "TEXT": "Without being asked to, you quickly start to work your fingers up and down NPC_NAME's shaft. You take your time and gently massage the underside of his cock, making sure to stop "+
                    "every so often to give it a long and drool laden lick to aid in lubrication. Your ministrations @@color:green;quickly have the desired effect@@ and soon NPC_NAME is panting and moaning in arousal."}
                ],
                "END" : "\"@@color:DeepPink;Daddy, Mr. Snake looks so red and angry, what do you think I should do?@@\" you ask sweetly. NPC_NAME does his best to collect his thoughts under your erotic onslaught and responds, \"@@color:cyan;He's mad because "+
                    "he is so filled with venom Princess. Why don't you do Daddy a favor and see if you can suck it all out?@@\""
            },
            {
                "ID" : "SCENE03",
                "TRIGGERS" :[ ],
                "TRIGGERS_ANY" : [ ],
                "CHECKS" : [
                    { "TAG" : "C", "TYPE" : "SKILL", "NAME" : "BlowJobs", "DIFFICULTY" : 60, "REWARD" : "MONEY", "R_NAME" : "MONEY", "VALUE" : 50, "OPT" : 0 }
                ],
                "POST" : [
                    { "TYPE" : "SKILL_XP",       "NAME" : "BlowJobs",   "VALUE" :  50,  "OPT" : "TAG_C"},
                    { "TYPE" : "NPC_STAT",   "NAME" : "Mood",       "VALUE" :  20,  "OPT" : "TAG_C" },
                    { "TYPE" : "NPC_STAT",   "NAME" : "Lust",       "VALUE" :  20,  "OPT" : "TAG_C" }
                ],
                "START" :
                "At NPC_NAME's prompting, you engulf his member with your mouth, making sure to play it up with a extremely girlish squeal. You take your time at first, making sure to cover his member "+
                " with your saliva and slowly stretching your mouth to accommodate his meaty cock. It's a struggle to get it fully past your lips without scraping it with your teeth, but eventually you manage "+
                "to establish a good rhythm. You feel NPC_NAME wrap his hand in your hair, pushing your head deep into his crotch while he starts moaning...\"GF_NAME@@color:cyan;... oh @@GF_NAME\"\n\n"+
                "Is this for real? Is the perverted old man fantasizing about his own daughter? As disturbing as this information is, you don't have much time to ponder it as you feel NPC_NAME's cock swell in your mouth, "+
                "poking against the back of your throat. ",
                "RESULTS" : [
                    {"C": 50,   "TEXT": "You do your best to suppress your gag reflex and accept his member, @@color:red;but it's difficult@@ and soon your eyes are filled with tears and you are struggling to get breath."},
                    {"C": 500,  "TEXT": "You @@color:green;expertly suppress your gag reflex@@ and easily accept his member deep into your throat. Soon your head is pistoning up and down on his shaft and the room is filled with "+
                    "the lewd sounds of his panting and your face being fucked."}
                ],
                "END" : "Long minutes pass, but eventually NPC_NAME firmly grasps the sides of your head and thrusts deeply into your throat. In your oxygen deprived state it barely registers that this cock is "+
                    "twitching and spewing what feels like a literal bucket of semen straight into your gut. You struggle to breathe through your nose while waiting for your customer to finally be spent and are relieved "+
                    "when you finally feel the raging hardness in your mouth start to soften. As soon as NPC_NAME's iron grip goes slack, you remove your mouth from his dick with a gasp and an audible 'pop'. "
            }
      ],
        "END" : "NPC_NAME is reclining in his chair, his face sweaty and flushed. You straighten up your clothing and use a small handkerchief to wipe the drool and errant cum from your clothing and face.\n\n"+
        "\"@@color:DeepPink;So Daddy, how about some allowance for widdle ol me?@@\" you say in your best little girl voice. NPC_NAME doesn't respond but he moves to his desk and takes out a bag of coins, counting "+
        "out JOB_PAY and placing them in your hands.\n\n"+
        "\"@@color:cyan;Come back some time dear,@@\" he says after catching his breath. You nod eagerly and tell him you always have time to play with 'Daddy' before taking your leave.",
        "JOB_RESULTS" : [ ]
    },
    "ISLA_WAITRESS": {
        "ID": "ISLA_WAITRESS", "TITLE": "Wench For Hire", "GIVER": "IslaTavernKeeper", "PAY" : 40,
        "RATING" : 3, // of 5
        "PHASES" : [ 1 ],
        "DAYS"   : 1,
        "HIDDEN" : false,
        "COST" : [  { "TYPE" : "TIME", "VALUE" : 3 },
                    { "TYPE" : "STAT", "NAME" : "Energy", "VALUE" : 2 } ],
        "REQUIREMENTS" : [
                    { "TYPE" : "STYLE", "NAME" : "STYLE", "VALUE" : 50, "CONDITION" : "gte" }
        ],
        "START" :   "NPC_NAME eyes you up and down, muttering to himself and then nods slowly in your direction.\n\n"+
                    "\"@@color:cyan;The job's easy enough lass, so don't worry if you don't have much experience at wenching. So long as you don't "+
                    "screw up too badly, you'll get paid@@\", he says.\n\n"+
                    "That's a relief. For once it seems you can get paid some coin without having to suck a dick... or five.\n\n"+
                    "\"@@color:cyan;Just a word of warning...@@\" he adds, \"@@color:cyan;The boys can get pretty 'hands on' if you know what I mean, "+
                    "especially after they've had a few. It shouldn't go too far... not like last time anyway.@@\"\n\n"+
                    "Aaaaaand... there it is.",
        "INTRO" : "NPC_NAME says, \"@@color:cyan;I'm always looking for help on the floor. If you can sling beers and don't mind a hand or two on your arse, we're hiring.@@\"",
        "SCENES" : [
            {
                "ID" : "SCENE01",
                "TRIGGERS" :[ ],
                "TRIGGERS_ANY" : [ ],
                "CHECKS" : [
                    { "TAG" : "A", "TYPE" : "SKILL", "NAME" : "Serving", "DIFFICULTY" : 30, "REWARD" : "NONE", "R_NAME" : "NONE", "VALUE" : 100, "OPT" : 0 } ],
                "POST" : [
                    { "TYPE" : "NPC_STAT", "NAME" : "Mood", "VALUE" : 5, "OPT" : "TAG_A" },
                    { "TYPE" : "MONEY", "NAME" : "", "VALUE" : 20, "OPT" : "TAG_A" }
                ],
                "START" :
                    "You start your shift. The Tavern is mostly quiet this time of day and the customers are relatively orderly. "
                ,
                "END" :
                    "Eventually the rush ends and you get a few moments to catch your breath and prepare for the next bustle of customers.",
                "RESULTS" : [
                    {"A":  33, "TEXT": "However, despite this, you find it @@difficult@@ to manage all of your orders and keep them happy."},
                    {"A":  66, "TEXT": "You start off slowly and make a few miss-steps, but eventually @@you get the hang of it@@ and fall into a natural rhythm of slinging ale and grub."},
                    {"A": 500, "TEXT": "All in all, it's @@not very difficult@@ to keep everyone happy - plied with drinks and food."} ]
            },
            {
                "ID" : "SCENE02",
                "TRIGGERS" :[ ],
                "TRIGGERS_ANY" : [ ],
                "CHECKS" : [
                    { "TAG" : "B", "TYPE" : "SKILL", "NAME" : "Serving", "DIFFICULTY" : 30, "REWARD" : "NONE", "R_NAME" : "NONE", "VALUE" : 100, "OPT" : 0 } ],
                "POST" : [
                    { "TYPE" : "NPC_STAT", "NAME" : "Mood", "VALUE" : 5, "OPT" : "TAG_B" },
                    { "TYPE" : "MONEY", "NAME" : "", "VALUE" : 20, "OPT" : "TAG_B" }
                ],
                "START" :
                    "The sky outside starts to darken and before long new customers start to arrive and you steel yourself for the dinner rush. "
                ,
                "END" :
                    "",
                "RESULTS" : [
                    {"B":  33, "TEXT": "However, despite this, you find it @@difficult@@ to manage all of your orders and keep them happy."},
                    {"B":  66, "TEXT": "You start off slowly and make a few miss-steps, but eventually @@you get the hang of it@@ and fall into a natural rhythm of slinging ale and grub."},
                    {"B": 500, "TEXT": "All in all, it's @@not very difficult@@ to keep everyone happy - plied with drinks and food."} ]
            },
            {
                "ID" : "SCENE02a",
                "TRIGGERS" :[
                    { "TYPE" : "STAT_BODY", "NAME" : "Ass", "VALUE" : 40, "CONDITION" : "gte", "OPT" : 0 }
                ],
                "TRIGGERS_ANY" : [ ],
                "CHECKS" : [
                    { "TAG" : "B1", "TYPE" : "SKILL", "NAME" : "Seduction", "DIFFICULTY" : 30, "REWARD" : "MONEY", "R_NAME" : "MONEY", "VALUE" : 50, "OPT" : 0 } ],
                "POST" : [ ],
                "START" :
                    "Your pASS arse attracts a lot of attention of the customers. Several times during your shift you find yourself being groped or otherwise fondled by smelly labourers or fishermen."
                ,
                "END" :
                    "",
                "RESULTS" : [
                    {"B1":  33, "TEXT": "You do your best to ignore the constant molestation and smile through it, but @@your tips suffer for it@@."},
                    {"B1":  66, "TEXT": "You do your best at flirting and smiling while being molested and @@mostly it seems to work@@, getting you some extra coin in tips."},
                    {"B1": 500, "TEXT": "You use the opportunity to flirt and grin at the obviously sex starved customers, who are more than happy to @@tip you generously@@"} ]
            },
            {
                "ID" : "SCENE03",
                "TRIGGERS" :[ ],
                "TRIGGERS_ANY" : [ ],
                "CHECKS" : [
                    { "TAG" : "C", "TYPE" : "SKILL", "NAME" : "Serving", "DIFFICULTY" : 30, "REWARD" : "NONE", "R_NAME" : "NONE", "VALUE" : 100, "OPT" : 0 } ],
                "POST" : [
                    { "TYPE" : "NPC_STAT", "NAME" : "Mood", "VALUE" : 5, "OPT" : "TAG_C" },
                    { "TYPE" : "MONEY", "NAME" : "", "VALUE" : 20, "OPT" : "TAG_C" }
                ],
                "START" :
                    "Eventually the dinner rush comes to an end, leaving behind only the customers who are interested in some late night drinking and entertainment. You take a "+
                    "short break and then with renewed determination head back into the growing crowd."
                ,
                "END" :
                    "",
                "RESULTS" : [
                    {"C":  33, "TEXT": "However, despite this, you find it @@difficult@@ to manage all of your orders and keep them happy."},
                    {"C":  66, "TEXT": "You start off slowly and make a few miss-steps, but eventually @@you get the hang of it@@ and fall into a natural rhythm of slinging ale and grub."},
                    {"C": 500, "TEXT": "All in all, it's @@not very difficult@@ to keep everyone happy - plied with drinks and food."} ]
            },
            {
                "ID" : "SCENE03a",
                "TRIGGERS" :[
                    { "TYPE" : "STAT_SKILL", "NAME" : "Dancing", "VALUE" : 30, "CONDITION" : "gte", "OPT" : 0 }
                ],
                "TRIGGERS_ANY" : [ ],
                "CHECKS" : [
                    { "TAG" : "C1", "TYPE" : "SKILL", "NAME" : "Dancing", "DIFFICULTY" : 60, "REWARD" : "NONE", "R_NAME" : "NONE", "VALUE" : 100, "OPT" : 0 } ],
                "POST" : [
                    {"TYPE" : "MONEY", "NAME" : "", "VALUE" : 60, "OPT" : "TAG_C1" }
                ],
                "START" :
                    "During your shift one of the locals begins to entertain the crowd by playing on his fiddle. The tune is quite catchy and you find yourself tapping your feet "+
                        "in time with the music. Some of the patrons catch on and with a little encouragement start to dance with you. Soon they are encouraging you as you twirl and "+
                        "twist away on the floor and the incessant clapping starts to get to your head. Caught up in the moment you quickly climb on top of the bar and start dancing for "+
                        "the crowd."
                ,
                "END" :
                    "",
                "RESULTS" : [
                    {"C1":  33, "TEXT": "Your dancing is @@competent, if not inspired@@ and while the crowd seems to enjoy it, they don't really loosen their purse strings for you either."},
                    {"C1":  66, "TEXT": "You mix in a few sexy moves with your dancing, exposing your pBUST tits in brief flashes and winking saucily at the crowd and you are @@rewarded with a good amount of tips@@ for your effort."},
                    {"C1": 500, "TEXT": "Using everything you know, you prance and strut your stuff across the bar. You tease and flirt with the crowd, exposing brief glimpses of your pBUST tits and pASS ass to them and riling them up into a sexual frenzy. By the end of your routine they are @@practically showering you with coins@@."} ]
            }
        ],
        "END" : "Finally, your shift in the tavern is over. NPC_NAME comes up to you and hands you your pay for the night, JOB_PAY coins.",
        "JOB_RESULTS" : [ ]
    },
    "PEACOCK_WAITRESS": {
        "ID": "PEACOCK_WAITRESS", "TITLE": "Wench For Hire", "GIVER": "Georgina", "PAY" : 40,
        "RATING" : 3, // of 5
        "PHASES" : [ 1 ],
        "DAYS"   : 1,
        "HIDDEN" : false,
        "COST" : [  { "TYPE" : "TIME", "VALUE" : 3 },
            { "TYPE" : "STAT", "NAME" : "Energy", "VALUE" : 2 } ],
        "REQUIREMENTS" : [
            { "TYPE" : "STYLE", "NAME" : "STYLE", "VALUE" : 50, "CONDITION" : "gte" }
        ],
        "START" :   "NPC_NAME smiles at you brightly and takes your hand in greeting.\n\n"+
        "\"@@color:cyan;The job's easy enough lass, so don't worry if you don't have much experience at wenching. So long as you don't "+
        "screw up too badly, you'll get paid@@\", he says.\n\n"+
        "That's a relief. For once it seems you can get paid some coin without having to suck a dick... or five.\n\n"+
        "\"@@color:cyan;Just a word of warning...@@\" he adds, \"@@color:cyan;The boys can get pretty 'hands on' if you know what I mean, "+
        "especially after they've had a few. It shouldn't go too far... not like last time anyway.@@\"\n\n"+
        "Aaaaaand... there it is.",
        "INTRO" : "NPC_NAME says, \"@@color:cyan;I'm always looking for help on the floor. If you can sling beers and don't mind a hand or two on your arse, we're hiring.@@\"",
        "SCENES" : [
            {
                "ID" : "SCENE01",
                "TRIGGERS" :[ ],
                "TRIGGERS_ANY" : [ ],
                "CHECKS" : [
                    { "TAG" : "A", "TYPE" : "SKILL", "NAME" : "Serving", "DIFFICULTY" : 30, "REWARD" : "NONE", "R_NAME" : "NONE", "VALUE" : 100, "OPT" : 0 } ],
                "POST" : [
                    { "TYPE" : "NPC_STAT", "NAME" : "Mood", "VALUE" : 5, "OPT" : "TAG_A" },
                    { "TYPE" : "MONEY", "NAME" : "", "VALUE" : 20, "OPT" : "TAG_A" }
                ],
                "START" :
                    "You start your shift. The Tavern is mostly quiet this time of day and the customers are relatively orderly. "
                ,
                "END" :
                    "Eventually the rush ends and you get a few moments to catch your breath and prepare for the next bustle of customers.",
                "RESULTS" : [
                    {"A":  33, "TEXT": "However, despite this, you find it @@difficult@@ to manage all of your orders and keep them happy."},
                    {"A":  66, "TEXT": "You start off slowly and make a few miss-steps, but eventually @@you get the hang of it@@ and fall into a natural rhythm of slinging ale and grub."},
                    {"A": 500, "TEXT": "All in all, it's @@not very difficult@@ to keep everyone happy - plied with drinks and food."} ]
            },
            {
                "ID" : "SCENE02",
                "TRIGGERS" :[ ],
                "TRIGGERS_ANY" : [ ],
                "CHECKS" : [
                    { "TAG" : "B", "TYPE" : "SKILL", "NAME" : "Serving", "DIFFICULTY" : 30, "REWARD" : "NONE", "R_NAME" : "NONE", "VALUE" : 100, "OPT" : 0 } ],
                "POST" : [
                    { "TYPE" : "NPC_STAT", "NAME" : "Mood", "VALUE" : 5, "OPT" : "TAG_B" },
                    { "TYPE" : "MONEY", "NAME" : "", "VALUE" : 20, "OPT" : "TAG_B" }
                ],
                "START" :
                    "The sky outside starts to darken and before long new customers start to arrive and you steel yourself for the dinner rush. "
                ,
                "END" :
                    "",
                "RESULTS" : [
                    {"B":  33, "TEXT": "However, despite this, you find it @@difficult@@ to manage all of your orders and keep them happy."},
                    {"B":  66, "TEXT": "You start off slowly and make a few miss-steps, but eventually @@you get the hang of it@@ and fall into a natural rhythm of slinging ale and grub."},
                    {"B": 500, "TEXT": "All in all, it's @@not very difficult@@ to keep everyone happy - plied with drinks and food."} ]
            },
            {
                "ID" : "SCENE02a",
                "TRIGGERS" :[
                    { "TYPE" : "STAT_BODY", "NAME" : "Ass", "VALUE" : 40, "CONDITION" : "gte", "OPT" : 0 }
                ],
                "TRIGGERS_ANY" : [ ],
                "CHECKS" : [
                    { "TAG" : "B1", "TYPE" : "SKILL", "NAME" : "Seduction", "DIFFICULTY" : 30, "REWARD" : "MONEY", "R_NAME" : "MONEY", "VALUE" : 50, "OPT" : 0 } ],
                "POST" : [ ],
                "START" :
                    "Your pASS arse attracts a lot of attention of the customers. Several times during your shift you find yourself being groped or otherwise fondled by smelly labourers or fishermen."
                ,
                "END" :
                    "",
                "RESULTS" : [
                    {"B1":  33, "TEXT": "You do your best to ignore the constant molestation and smile through it, but @@your tips suffer for it@@."},
                    {"B1":  66, "TEXT": "You do your best at flirting and smiling while being molested and @@mostly it seems to work@@, getting you some extra coin in tips."},
                    {"B1": 500, "TEXT": "You use the opportunity to flirt and grin at the obviously sex starved customers, who are more than happy to @@tip you generously@@"} ]
            },
            {
                "ID" : "SCENE03",
                "TRIGGERS" :[ ],
                "TRIGGERS_ANY" : [ ],
                "CHECKS" : [
                    { "TAG" : "C", "TYPE" : "SKILL", "NAME" : "Serving", "DIFFICULTY" : 30, "REWARD" : "NONE", "R_NAME" : "NONE", "VALUE" : 100, "OPT" : 0 } ],
                "POST" : [
                    { "TYPE" : "NPC_STAT", "NAME" : "Mood", "VALUE" : 5, "OPT" : "TAG_C" },
                    { "TYPE" : "MONEY", "NAME" : "", "VALUE" : 20, "OPT" : "TAG_C" }
                ],
                "START" :
                "Eventually the dinner rush comes to an end, leaving behind only the customers who are interested in some late night drinking and entertainment. You take a "+
                "short break and then with renewed determination head back into the growing crowd."
                ,
                "END" :
                    "",
                "RESULTS" : [
                    {"C":  33, "TEXT": "However, despite this, you find it @@difficult@@ to manage all of your orders and keep them happy."},
                    {"C":  66, "TEXT": "You start off slowly and make a few miss-steps, but eventually @@you get the hang of it@@ and fall into a natural rhythm of slinging ale and grub."},
                    {"C": 500, "TEXT": "All in all, it's @@not very difficult@@ to keep everyone happy - plied with drinks and food."} ]
            },
            {
                "ID" : "SCENE03a",
                "TRIGGERS" :[
                    { "TYPE" : "STAT_SKILL", "NAME" : "Dancing", "VALUE" : 30, "CONDITION" : "gte", "OPT" : 0 }
                ],
                "TRIGGERS_ANY" : [ ],
                "CHECKS" : [
                    { "TAG" : "C1", "TYPE" : "SKILL", "NAME" : "Dancing", "DIFFICULTY" : 60, "REWARD" : "NONE", "R_NAME" : "NONE", "VALUE" : 100, "OPT" : 0 } ],
                "POST" : [
                    {"TYPE" : "MONEY", "NAME" : "", "VALUE" : 60, "OPT" : "TAG_C1" }
                ],
                "START" :
                "During your shift one of the locals begins to entertain the crowd by playing on his fiddle. The tune is quite catchy and you find yourself tapping your feet "+
                "in time with the music. Some of the patrons catch on and with a little encouragement start to dance with you. Soon they are encouraging you as you twirl and "+
                "twist away on the floor and the incessant clapping starts to get to your head. Caught up in the moment you quickly climb on top of the bar and start dancing for "+
                "the crowd."
                ,
                "END" :
                    "",
                "RESULTS" : [
                    {"C1":  33, "TEXT": "Your dancing is @@competent, if not inspired@@ and while the crowd seems to enjoy it, they don't really loosen their purse strings for you either."},
                    {"C1":  66, "TEXT": "You mix in a few sexy moves with your dancing, exposing your pBUST tits in brief flashes and winking saucily at the crowd and you are @@rewarded with a good amount of tips@@ for your effort."},
                    {"C1": 500, "TEXT": "Using everything you know, you prance and strut your stuff across the bar. You tease and flirt with the crowd, exposing brief glimpses of your pBUST tits and pASS ass to them and riling them up into a sexual frenzy. By the end of your routine they are @@practically showering you with coins@@."} ]
            }
        ],
        "END" : "Finally, your shift in the tavern is over. NPC_NAME comes up to you and hands you your pay for the night, JOB_PAY coins.",
        "JOB_RESULTS" : [ ]
    },
    "ISLA_MASCOT": {
        "ID": "ISLA_MASCOT", "TITLE": "Store Mascot", "GIVER": "IslaShopKeeper", "PAY" : 40,
        "RATING" : 3, // of 5
        "PHASES" : [ 1, 2, 3 ],
        "DAYS"   : 1,
        "HIDDEN" : false,
        "COST" : [  { "TYPE" : "TIME", "VALUE" : 1 },
            { "TYPE" : "STAT", "NAME" : "Energy", "VALUE" : 1 } ],
        "REQUIREMENTS" : [
            { "TYPE" : "STYLE", "NAME" : "STYLE", "VALUE" : 50, "CONDITION" : "gte" },
            { "TYPE" : "STAT", "NAME" : "Femininity", "VALUE" : 10, "CONDITION" : "gte"}
        ],
        "START" :   "NPC_NAME eyes you up and down, muttering to herself and then nods slowly in your direction.\n\n"+
        "\"@@color:cyan;I'll be honest dear, this job doesn't pay much, but it doesn't require much from you either. All you need to do is wear one of the"+
        "outfits from my shop and beckon customers inside. You can start immediately and I'll pay you at the end of your shift.@@\"\n\n"+
        "This sounds okay to you. Sure, it's probably not a lot of money, but it should be easy work. But what about that costume...\n\n"+
        "Almost on cue NPC_NAME reaches behind her counter and pulls out a frilly pink dress along with a pair of the highest platform shoes you've ever "+
        "seen before. What kind of clothes does this shop sell anyway? Before you can ask, she shoves the garments into your hands and directs you to a back room to change.\n\n"+
        "Moment's later you are standing in front of shop looking like a cross between a little girl and a prostitute. You sigh to yourself and begin to call out to random people passing by.",
        "INTRO" : "NPC_NAME says, \"@@color:cyan;I'm looking for help driving customers into the shop. The pay's not great, but it's easy work.@@\"",
        "SCENES" : [
            {
                "ID" : "SCENE01",
                "TRIGGERS" :[ ],
                "TRIGGERS_ANY" : [ ],
                "CHECKS" : [
                    { "TAG" : "A", "TYPE" : "SKILL", "NAME" : "Seduction", "DIFFICULTY" : 50, "REWARD" : "NONE", "R_NAME" : "NONE", "VALUE" : 100, "OPT" : 0 } ],
                "POST" : [
                    { "TYPE" : "NPC_STAT", "NAME" : "Mood", "VALUE" : 5, "OPT" : "TAG_A" },
                    { "TYPE" : "MONEY", "NAME" : "", "VALUE" : 20, "OPT" : "TAG_A" },
                    { "TYPE" : "STAT_XP", "NAME" : "Femininity", "VALUE" : 50, "OPT" : "TAG_A" }
                ],
                "START" :
                    "Several potential customers, both men and women, walk by. You call out to them extolling the virtues of the wares inside the shop. At least you think "+
                    "you are considering you're not exactly sure what this shop sells, or if it's any good. Still, lying isn't difficult and you do your best."
                ,
                "END" :
                    "Eventually your shift ends and you saunter back inside.",
                "RESULTS" : [
                    {"A":  33, "TEXT": "Despite your efforts and outgoing antics @@not very many@@ customers enter the store. Hopefully it'll be enough."},
                    {"A":  66, "TEXT": "You seem to have a @@modest success@@ at cajoling people to check out the store. It's surprisingly more tiring than you thought to be so outgoing."},
                    {"A": 500, "TEXT": "You put on your best face and try to exert your 'girlish charm'. It seems to @@have the desired effect@@ and you draw a respectable amount of customers to the shop."} ]
            },
            {   // If pass check 'A' and If counter is at MAX (5), reward player and set counter to 0.
                "ID" : "SCENE04a",
                "TRIGGERS" :[
                    { "TYPE" : "TAG", "NAME" : "A", "VALUE" : 100, "CONDITION" : "gte" },
                    { "TYPE" : "COUNTER", "NAME" : "HEDDY_LOOT", "VALUE" : 5, "CONDITION" : "gte" }
                ],
                "TRIGGERS_ANY" : [ ],
                "CHECKS" : [ ],
                "POST" : [
                    { "TYPE" : "FLAG",      "NAME" : "HEDDY_LOOT",              "VALUE" :   0,  "OPT" : "SET" },
                    { "TYPE" : "FLAG",      "NAME" : "HEDDY_REWARD",            "VALUE" :   1,  "OPT" : "SET" },
                    { "TYPE" : "LOOT_BOX",  "NAME" : "common sissy loot box",   "VALUE" :   1,  "OPT" : "" }
                ],
                "START" :   "NPC_NAME says, \"Here, you've earned this PLAYER_NAME\" She hands you a small novelty gift box shaped like a treasure chest, you wonder what's inside it?",
                "END" : "",
                "RESULTS" : [ ]
            },
            {   // If passed both cooking checks then increment counter. Doesn't trigger if the counter is already at MAX (5) or the reward has been given this time.
                "ID" : "SCENE04b",
                "TRIGGERS" :[
                    { "TYPE" : "TAG", "NAME" : "A", "VALUE" : 100, "CONDITION" : "gte" },
                    { "TYPE" : "TAG", "NAME" : "B", "VALUE" : 100, "CONDITION" : "gte" },
                    { "TYPE" : "COUNTER", "NAME" : "HEDDY_LOOT", "VALUE" : 4, "CONDITION" : "lte" },
                    { "TYPE" : "FLAG", "NAME" : "HEDDY_REWARD",  "OPT" : "NOT_SET" }
                ],
                "TRIGGERS_ANY" : [ ],
                "CHECKS" : [ ],
                "POST" : [
                    { "TYPE" : "COUNTER",   "NAME" : "HEDDY_LOOT",    "VALUE" :   1,  "OPT" : 1 }
                ],
                "START" :   "NPC_NAME says, \"Nice work today. You really brought in those customers. Keep it up and I might slip you a little bit something extra...\"",
                "END" : "",
                "RESULTS" : [ ]
            },
            {   // Just unset the flag that shows we received loot and make sure we clear the counter.
                "ID" : "SCENE04c",
                "TRIGGERS" :[
                    { "TYPE" : "FLAG", "NAME" : "HEDDY_REWARD", "OPT" : "SET" }
                ],
                "TRIGGERS_ANY" : [ ],
                "CHECKS" : [ ],
                "POST" : [
                    { "TYPE" : "FLAG",   "NAME" : "HEDDY_REWARD",  "OPT" : "DELETE" }
                ],
                "START" : "",
                "END" : "",
                "RESULTS" : [ ]
            }
        ],
        "END" : "NPC_NAME comes up to you and hands you your pay for the shift, JOB_PAY coins. JOB_RESULTS",
        "JOB_RESULTS" : [
            {"A":  33, "TEXT": "It seems that she was a @@little disappointed@@ in the turn out, but hey at least you still got paid."},
            {"A":  66, "TEXT": "It appears you did @@reasonably well@@ and the pay reflects that."},
            {"A": 500, "TEXT": "You definitely did a @@good job@@ and the pay reflects that."}
        ]
    }

};