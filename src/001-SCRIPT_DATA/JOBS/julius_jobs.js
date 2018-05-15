App = App || { Data: { }, Entity: { } };
App.Data.JobData = App.Data.JobData || { };

App.Data.JobData["QUAR01"] =  {
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
    "END" : "NPC_NAME comes up to you and says, \"JOB_RESULTS\" He then hands you some coins.",
    "JOB_RESULTS" : [
        { "A" :  25,  "TEXT" : "Well, I guess that's @@better than nothing@@." },
        { "A" :  50, "TEXT" : "Hmm... @@not too bad@@. You certainly know your way around a broom." },
        { "A" : 500, "TEXT" : "That's a @@pretty good job@@ PLAYER_NAME. Come back again sometime for more work." }
    ]
};

App.Data.JobData["QUAR02"] = {
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
        "NPC_NAME tosses a small bag of coins at you and then waves you on his way, continuing to furiously study at his notes.",
    "JOB_RESULTS" : [ ]
};
