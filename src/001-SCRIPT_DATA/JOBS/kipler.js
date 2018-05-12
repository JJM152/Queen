App = App || { Data: { }, Entity: { } };
App.Data.JobData = App.Data.JobData || { };

App.Data.JobData["MATE01"] =  {
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
};

App.Data.JobData["MATE02"] =  {
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

};

App.Data.JobData["MATE03"] =  {
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

};

App.Data.JobData["MATE04"] =  {
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

};

