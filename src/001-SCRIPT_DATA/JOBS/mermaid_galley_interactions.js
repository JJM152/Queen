App = App || { Data: { }, Entity: { } };
App.Data.JobData = App.Data.JobData || { };

App.Data.JobData["STRP01"] = {
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

};

App.Data.JobData["STRP02"] = {
    "ID": "STRP02", "TITLE": "Perform Strip Show", "GIVER": "GALLEY", "PAY" : 30,
    "RATING" : 2, // of 5
    "PHASES" : [ 2, 3],
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

};

