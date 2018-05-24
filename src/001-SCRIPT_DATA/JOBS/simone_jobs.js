App = App || { Data: { }, Entity: { } };
App.Data.JobData = App.Data.JobData || { };

App.Data.JobData["SIMONE_JOB1"] = {
    "ID": "SIMONE_JOB1", "TITLE": "Whoring - Handjob Specialist", "GIVER": "Simone", "PAY" : 50,
    "RATING" : 3, // of 5
    "PHASES" : [ 2, 3 ],
    "DAYS"   : 1,
    "HIDDEN" : false,
    "COST" : [
        { "TYPE" : "TIME", "VALUE" : 1 },
        { "TYPE" : "STAT", "NAME" : "Energy", "VALUE" : 1 } ],
    "REQUIREMENTS" : [
        { "TYPE" : "SKILL", "NAME" : "HandJobs", "VALUE" : 50, "CONDITION" : "gte" }
    ],
    "INTRO" : "NPC_NAME says, \"I have a special group of clients that might be interested in you... if you have the skills.\"",
    "START" :
        "NPC_NAME says, \"So here's the deal PLAYER_NAME, none of my regular girls will take the job, but I have a group of clients paying good coin "+
        "to have a bit of a party in the back room. You won't be the only entertainment for the evening, but it's been requested to supply a slut who can "+
        "wank a good load all over her face and look happy about it. Swallow a little jizz here and there. You know, the usual.\"\n\n"+
        "Yes, you think to yourself, 'the usual'.\n\n"+
        "NPC_NAME gives you the run down on the rest of the job and ushers you into the back room."
    ,
    "SCENES" : [
        {
            // Enter into room. Flirt with men.
            "ID" : "SCENE01",
            "TRIGGERS" :[ ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [
                { "TAG" : "A", "TYPE" : "SKILL", "NAME" : "Seduction", "DIFFICULTY" : 50, "REWARD" : "NONE", "R_NAME" : "NONE", "VALUE" : 100, "OPT" : 0 }
            ],
            "POST" : [
                { "TYPE" : "MONEY", "NAME" : "", "VALUE" : 20, "OPT" : "TAG_A" }
            ],
            "START" :
                "Inside you find several men lounging around on couches swilling drinks while various girls hang on their arms. One of those girls, a young  "+
                "blond with smouldering eyes grabs your hand and leads you to the middle of the room. Once there she starts brushing against you while shaking her hips, "+
                "it doesn't take you long to understand and soon the two of you are lewdly groping each other for the enjoyment of the small group."
            ,
            "RESULTS" : [
                {"A":  33, "TEXT": "It @@doesn't seem to have much effect though@@ as the men seem more interested in the girls on their arms."},
                {"A":  66, "TEXT": "You notice several pairs of eyes turn your way, it @@appears you've gotten their interest@@."},
                {"A": 500, "TEXT": "The men seem to take @@a keen interest@@ in your little show and you think you see an erection straining against one of the men's trousers."} ],
            "END" :
                ""
        },
        {
            // Start performing hand jobs
            "ID" : "SCENE02",
            "TRIGGERS" :[ ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [
                { "TAG" : "B", "TYPE" : "SKILL", "NAME" : "HandJobs", "DIFFICULTY" : 75, "REWARD" : "NONE", "R_NAME" : "NONE", "VALUE" : 100, "OPT" : 0 } ],
            "POST" : [
                { "TYPE" : "MONEY", "NAME" : "", "VALUE" : 100, "OPT" : "TAG_B" }
            ],
            "START" :
                "It doesn't take long after this for the evening to move on to the next, more intimate performance. Several of the other women start to disrobe and "+
                    "engage in various sex acts with the customers - a blow job here, some straight fucking in the corner. One particularly petite girl with a huge ass "+
                    "is bent over a chair and getting anally violated. It's clear what her job is for this evenings festivities.\n\n"+
                    "You start your own little 'station' in the corner, on your knees."
            ,
            "END" :
                "",
            "RESULTS" : [
                {"B":  33, "TEXT": "You spend most of the time just fondling customers while they get ready for one of the other girls. It @@seems they just aren't that interested@@ in you."},
                {"B":  66, "TEXT": "You start off slowly, but soon the men are starting to notice how @@good your hand jobs@@ are and before you notice it, you're pulling a significant "+
                                    "number of men your way."},
                {"B": 500, "TEXT": "The remainders of the evening passes in a blur of cocks and semen. Your skills are @@so good that you find yourself in high demand@@ and you start to worry "+
                "if your arms are going to hold out or not from all the dick pumping."} ]
        },
        {
            // Perversion check for cum play.
            "ID" : "SCENE03",
            "TRIGGERS" :[ ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [
                { "TAG" : "C", "TYPE" : "STAT", "NAME" : "Perversion", "DIFFICULTY" : 50, "REWARD" : "MONEY", "R_NAME" : "MONEY", "VALUE" : 50, "OPT" : 0 } ],
            "POST" : [
                { "TYPE" : "STAT_XP", "NAME" : "Perversion", "VALUE" : 100, "OPT" : "TAG_C" }
            ],
            "START" :
                "Finally, the last two clients are in front of you, their cocks out and flopping free. You slowly stroke them both to hardness, using your tongue and saliva to "+
                "lubricate their shafts. Eventually both men are sporting huge erections and the pace of your ministrations starts to increase as does their moans. "+
                "You keep pumping the turgid cocks in your hands furiously until they begin shooting long ropey streams of cum into your face and hair. There's so much cum, "+
                "sticking to your face, your eye lids, your lips. "
            ,
            "RESULTS" : [
                {"C":  33, "TEXT": "It's difficult to deal with and you @@struggle to remain smiling@@ while the customers blow their loads."},
                {"C":  66, "TEXT": "You try to really put on a show for the men, smiling and making @@half hearted attempts@@ to lick their jizz from your lips. You couldn't really tell if "+
                                    "they noticed your performance or not."},
                {"C": 500, "TEXT": "You lock eyes on the men and open your mouth wide, letting their cum fall directly onto your tongue. Letting out a throaty moan you start to lap it up from "+
                "your lips and swallow it down. The super lewd act spurs them on and soon they're rock hard and you're pumping them again. They better pay you extra for this."} ],
            "END" :
            "\n\nEventually everyone is spent and you find yourself covered, literally dripping with jism. You wipe some out of your eyes and then "+
            "politely excuse yourself to clean up your face and clothes. Eventually you go to find NPC_NAME to collect your pay. She's at the front of the bar and nods when she sees you."
        },
        {   // If pass check 'A' and If counter is at MAX (5), reward player and set counter to 0.
            "ID" : "SCENE04a",
            "TRIGGERS" :[
                { "TYPE" : "TAG", "NAME" : "A", "VALUE" : 100, "CONDITION" : "gte" },
                { "TYPE" : "TAG", "NAME" : "B", "VALUE" : 100, "CONDITION" : "gte" },
                { "TYPE" : "TAG", "NAME" : "C", "VALUE" : 100, "CONDITION" : "gte" },
                { "TYPE" : "COUNTER", "NAME" : "SIMONE_LOOT", "VALUE" : 5, "CONDITION" : "gte" }
            ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [ ],
            "POST" : [
                { "TYPE" : "NPC_STAT",  "NAME" : "Mood", "VALUE" : 5 },
                { "TYPE" : "FLAG",      "NAME" : "SIMONE_LOOT",              "VALUE" :   0,  "OPT" : "SET" },
                { "TYPE" : "FLAG",      "NAME" : "SIMONE_REWARD",            "VALUE" :   1,  "OPT" : "SET" },
                { "TYPE" : "LOOT_BOX",  "NAME" : "uncommon lolita loot box", "VALUE" :   1,  "OPT" : "" }
            ],
            "START" :   "NPC_NAME says, \"Here, you've earned this PLAYER_NAME\". She hands you a novelty gift bag shaped like a teddy bear, you wonder what's inside it?",
            "END" : "",
            "RESULTS" : [ ]
        },
        {   // If passed both cooking checks then increment counter. Doesn't trigger if the counter is already at MAX (5) or the reward has been given this time.
            "ID" : "SCENE04b",
            "TRIGGERS" :[
                { "TYPE" : "TAG", "NAME" : "A", "VALUE" : 100, "CONDITION" : "gte" },
                { "TYPE" : "TAG", "NAME" : "B", "VALUE" : 100, "CONDITION" : "gte" },
                { "TYPE" : "TAG", "NAME" : "C", "VALUE" : 100, "CONDITION" : "gte" },
                { "TYPE" : "COUNTER", "NAME" : "SIMONE_LOOT", "VALUE" : 4, "CONDITION" : "lte" },
                { "TYPE" : "FLAG", "NAME" : "SIMONE_REWARD",  "OPT" : "NOT_SET" }
            ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [ ],
            "POST" : [
                { "TYPE" : "NPC_STAT",  "NAME" : "Mood", "VALUE" : 5 },
                { "TYPE" : "COUNTER",   "NAME" : "SIMONE_LOOT",    "VALUE" :   1,  "OPT" : 1 }
            ],
            "START" :   "NPC_NAME says, \"Nice work today. Those rascals were quite happy with your service. Keep it up and I might slip you a little bit something extra...\"",
            "END" : "",
            "RESULTS" : [ ]
        },
        {   // Just unset the flag that shows we received loot and make sure we clear the counter.
            "ID" : "SCENE04c",
            "TRIGGERS" :[
                { "TYPE" : "FLAG", "NAME" : "SIMONE_REWARD", "OPT" : "SET" }
            ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [ ],
            "POST" : [
                { "TYPE" : "FLAG",   "NAME" : "SIMONE_REWARD",  "OPT" : "DELETE" }
            ],
            "START" : "",
            "END" : "",
            "RESULTS" : [ ]
        }

    ],
    "END" :
        "NPC_NAME says, \"Another day, another coin, eh PLAYER_NAME?\"\n\n"+
        "NPC_NAME fetches a small bag from behind the counter and hands it to you, it contains your pay and tips for the night.",
    "JOB_RESULTS" : [ ]
};
App.Data.JobData["SIMONE_JOB2"] = {
    "ID": "SIMONE_JOB2", "TITLE": "Whoring - Blowjob Specialist", "GIVER": "Simone", "PAY" : 50,
    "RATING" : 3, // of 5
    "PHASES" : [ 2, 3 ],
    "DAYS"   : 1,
    "HIDDEN" : false,
    "COST" : [
        { "TYPE" : "TIME", "VALUE" : 1 },
        { "TYPE" : "STAT", "NAME" : "Energy", "VALUE" : 1 } ],
    "REQUIREMENTS" : [
        { "TYPE" : "SKILL", "NAME" : "BlowJobs", "VALUE" : 50, "CONDITION" : "gte" }
    ],
    "INTRO" : "NPC_NAME says, \"I have a special group of clients that might be interested in you... if you have the skills.\"",
    "START" :
    "NPC_NAME says, \"So here's the deal PLAYER_NAME, none of my regular girls will take the job, but I have a group of clients paying good coin "+
    "to have a bit of a party in the back room. You won't be the only entertainment for the evening, but it's been requested to supply a slut who can "+
    "deep throat a monster cock and look happy about it. Swallow a little jizz here and there. You know, the usual.\"\n\n"+
    "Yes, you think to yourself, 'the usual'.\n\n"+
    "NPC_NAME gives you the run down on the rest of the job and ushers you into the back room."
    ,
    "SCENES" : [
        {
            // Enter into room. Flirt with men.
            "ID" : "SCENE01",
            "TRIGGERS" :[ ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [
                { "TAG" : "A", "TYPE" : "SKILL", "NAME" : "Seduction", "DIFFICULTY" : 50, "REWARD" : "NONE", "R_NAME" : "NONE", "VALUE" : 100, "OPT" : 0 }
            ],
            "POST" : [
                { "TYPE" : "MONEY", "NAME" : "", "VALUE" : 20, "OPT" : "TAG_A" }
            ],
            "START" :
            "Inside you find several men lounging around on couches swilling drinks while various girls hang on their arms. One of those girls, a young  "+
            "blond with smouldering eyes grabs your hand and leads you to the middle of the room. Once there she starts brushing against you while shaking her hips, "+
            "it doesn't take you long to understand and soon the two of you are lewdly groping each other for the enjoyment of the small group."
            ,
            "RESULTS" : [
                {"A":  33, "TEXT": "It @@doesn't seem to have much effect though@@ as the men seem more interested in the girls on their arms."},
                {"A":  66, "TEXT": "You notice several pairs of eyes turn your way, it @@appears you've gotten their interest@@."},
                {"A": 500, "TEXT": "The men seem to take @@a keen interest@@ in your little show and you think you see an erection straining against one of the men's trousers."} ],
            "END" :
                ""
        },
        {
            // Start performing hand jobs
            "ID" : "SCENE02",
            "TRIGGERS" :[ ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [
                { "TAG" : "B", "TYPE" : "SKILL", "NAME" : "BlowJobs", "DIFFICULTY" : 75, "REWARD" : "NONE", "R_NAME" : "NONE", "VALUE" : 100, "OPT" : 0 } ],
            "POST" : [
                { "TYPE" : "MONEY", "NAME" : "", "VALUE" : 100, "OPT" : "TAG_B" }
            ],
            "START" :
            "It doesn't take long after this for the evening to move on to the next, more intimate performance. Several of the other women start to disrobe and "+
            "engage in various sex acts with the customers - a hand job here, some straight fucking in the corner. One particularly petite girl with a huge ass "+
            "is bent over a chair and getting anally violated. It's clear what her job is for this evenings festivities.\n\n"+
            "You start your own little 'station' in the corner, on your knees."
            ,
            "END" :
                "",
            "RESULTS" : [
                {"B":  33, "TEXT": "You spend most of the time just fondling customers while they get ready for one of the other girls. It @@seems they just aren't that interested@@ in you."},
                {"B":  66, "TEXT": "You start off slowly, but soon the men are starting to notice how @@good your cock sucking@@ is and before you notice it, you're pulling a significant "+
                "number of men your way."},
                {"B": 500, "TEXT": "The remainders of the evening passes in a blur of cocks and semen. Your skills are @@so good that you find yourself in high demand@@ and you start to worry "+
                "if your jaw is going to lock from all the dick sucking."} ]
        },
        {
            // Perversion check for cum play.
            "ID" : "SCENE03",
            "TRIGGERS" :[ ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [
                { "TAG" : "C", "TYPE" : "STAT", "NAME" : "Perversion", "DIFFICULTY" : 50, "REWARD" : "MONEY", "R_NAME" : "MONEY", "VALUE" : 50, "OPT" : 0 } ],
            "POST" : [
                { "TYPE" : "STAT_XP", "NAME" : "Perversion", "VALUE" : 100, "OPT" : "TAG_C" }
            ],
            "START" :
            "Finally, the last two clients are in front of you, their cocks out and flopping free. You slowly stroke them both to hardness, using your tongue and saliva to "+
            "lubricate their shafts. Eventually both men are sporting huge erections and you greedily start slurping on their meat poles. "+
            "You bob your head up and down furiously, alternating between the men, until they begin shooting long ropey streams of cum into your mouth and lips."
            ,
            "RESULTS" : [
                {"C":  33, "TEXT": "It's difficult to deal with and you @@struggle to remain smiling@@ while the customers blow their loads."},
                {"C":  66, "TEXT": "You try to really put on a show for the men, smiling and making @@half hearted attempts@@ to lick their jizz from your lips. You couldn't really tell if "+
                "they noticed your performance or not."},
                {"C": 500, "TEXT": "You lock eyes on the men and open your mouth wide, letting their cum fall directly onto your tongue. Letting out a throaty moan you start to lap it up from "+
                "your lips and swallow it down. The super lewd act spurs them on and soon they're rock hard and you're pumping them again. They better pay you extra for this."} ],
            "END" :
            "\n\nEventually everyone is spent and you find yourself covered, literally dripping with jism. You wipe some out of your eyes and then "+
            "politely excuse yourself to clean up your face and clothes. Eventually you go to find NPC_NAME to collect your pay. She's at the front of the bar and nods when she sees you."
        },
        {   // If pass check 'A' and If counter is at MAX (5), reward player and set counter to 0.
            "ID" : "SCENE04a",
            "TRIGGERS" :[
                { "TYPE" : "TAG", "NAME" : "A", "VALUE" : 100, "CONDITION" : "gte" },
                { "TYPE" : "TAG", "NAME" : "B", "VALUE" : 100, "CONDITION" : "gte" },
                { "TYPE" : "TAG", "NAME" : "C", "VALUE" : 100, "CONDITION" : "gte" },
                { "TYPE" : "COUNTER", "NAME" : "SIMONE_LOOT", "VALUE" : 5, "CONDITION" : "gte" }
            ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [ ],
            "POST" : [
                { "TYPE" : "NPC_STAT",  "NAME" : "Mood", "VALUE" : 5 },
                { "TYPE" : "FLAG",      "NAME" : "SIMONE_LOOT",              "VALUE" :   0,  "OPT" : "SET" },
                { "TYPE" : "FLAG",      "NAME" : "SIMONE_REWARD",            "VALUE" :   1,  "OPT" : "SET" },
                { "TYPE" : "LOOT_BOX",  "NAME" : "uncommon dancer loot box",    "VALUE" :   1,  "OPT" : "" }
            ],
            "START" :   "NPC_NAME says, \"Here, you've earned this PLAYER_NAME\". She hands you a novelty gift bag shaped like a teddy bear, you wonder what's inside it?",
            "END" : "",
            "RESULTS" : [ ]
        },
        {   // If passed both cooking checks then increment counter. Doesn't trigger if the counter is already at MAX (5) or the reward has been given this time.
            "ID" : "SCENE04b",
            "TRIGGERS" :[
                { "TYPE" : "TAG", "NAME" : "A", "VALUE" : 100, "CONDITION" : "gte" },
                { "TYPE" : "TAG", "NAME" : "B", "VALUE" : 100, "CONDITION" : "gte" },
                { "TYPE" : "TAG", "NAME" : "C", "VALUE" : 100, "CONDITION" : "gte" },
                { "TYPE" : "COUNTER", "NAME" : "SIMONE_LOOT", "VALUE" : 4, "CONDITION" : "lte" },
                { "TYPE" : "FLAG", "NAME" : "SIMONE_REWARD",  "OPT" : "NOT_SET" }
            ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [ ],
            "POST" : [
                { "TYPE" : "NPC_STAT",  "NAME" : "Mood", "VALUE" : 5 },
                { "TYPE" : "COUNTER",   "NAME" : "SIMONE_LOOT",    "VALUE" :   1,  "OPT" : 1 }
            ],
            "START" :   "NPC_NAME says, \"Nice work today. Those rascals were quite happy with your service. Keep it up and I might slip you a little bit something extra...\"",
            "END" : "",
            "RESULTS" : [ ]
        },
        {   // Just unset the flag that shows we received loot and make sure we clear the counter.
            "ID" : "SCENE04c",
            "TRIGGERS" :[
                { "TYPE" : "FLAG", "NAME" : "SIMONE_REWARD", "OPT" : "SET" }
            ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [ ],
            "POST" : [
                { "TYPE" : "FLAG",   "NAME" : "SIMONE_REWARD",  "OPT" : "DELETE" }
            ],
            "START" : "",
            "END" : "",
            "RESULTS" : [ ]
        }

    ],
    "END" :
    "NPC_NAME says, \"Another day, another coin, eh PLAYER_NAME?\"\n\n"+
    "NPC_NAME fetches a small bag from behind the counter and hands it to you, it contains your pay and tips for the night.",
    "JOB_RESULTS" : [ ]
};
App.Data.JobData["SIMONE_JOB3"] = {
    "ID": "SIMONE_JOB3", "TITLE": "Whoring - Tit Fucking Specialist", "GIVER": "Simone", "PAY" : 50,
    "RATING" : 3, // of 5
    "PHASES" : [ 2, 3 ],
    "DAYS"   : 1,
    "HIDDEN" : false,
    "COST" : [
        { "TYPE" : "TIME", "VALUE" : 1 },
        { "TYPE" : "STAT", "NAME" : "Energy", "VALUE" : 1 } ],
    "REQUIREMENTS" : [
        { "TYPE" : "SKILL", "NAME" : "TitFucking", "VALUE" : 50, "CONDITION" : "gte" },
        { "TYPE" : "BODY",  "NAME" : "BUST", "VALUE" : 20, "CONDITION" : "gte" }
    ],
    "INTRO" : "NPC_NAME says, \"I have a special group of clients that might be interested in you... if you have the skills.\"",
    "START" :
    "NPC_NAME says, \"So here's the deal PLAYER_NAME, none of my regular girls will take the job, but I have a group of clients paying good coin "+
    "to have a bit of a party in the back room. You won't be the only entertainment for the evening, but it's been requested to supply a slut who can "+
    "wank a good load all over her tits and look happy about it. Swallow a little jizz here and there. You know, the usual.\"\n\n"+
    "Yes, you think to yourself, 'the usual'.\n\n"+
    "NPC_NAME gives you the run down on the rest of the job and ushers you into the back room."
    ,
    "SCENES" : [
        {
            // Enter into room. Flirt with men.
            "ID" : "SCENE01",
            "TRIGGERS" :[ ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [
                { "TAG" : "A", "TYPE" : "SKILL", "NAME" : "Seduction", "DIFFICULTY" : 50, "REWARD" : "NONE", "R_NAME" : "NONE", "VALUE" : 100, "OPT" : 0 }
            ],
            "POST" : [
                { "TYPE" : "MONEY", "NAME" : "", "VALUE" : 20, "OPT" : "TAG_A" }
            ],
            "START" :
            "Inside you find several men lounging around on couches swilling drinks while various girls hang on their arms. One of those girls, a young  "+
            "blond with smouldering eyes grabs your hand and leads you to the middle of the room. Once there she starts brushing against you while shaking her hips, "+
            "it doesn't take you long to understand and soon the two of you are lewdly groping each other for the enjoyment of the small group."
            ,
            "RESULTS" : [
                {"A":  33, "TEXT": "It @@doesn't seem to have much effect though@@ as the men seem more interested in the girls on their arms."},
                {"A":  66, "TEXT": "You notice several pairs of eyes turn your way, it @@appears you've gotten their interest@@."},
                {"A": 500, "TEXT": "The men seem to take @@a keen interest@@ in your little show and you think you see an erection straining against one of the men's trousers."} ],
            "END" :
                ""
        },
        {
            // Start performing hand jobs
            "ID" : "SCENE02",
            "TRIGGERS" :[ ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [
                { "TAG" : "B", "TYPE" : "SKILL", "NAME" : "TitFucking", "DIFFICULTY" : 75, "REWARD" : "NONE", "R_NAME" : "NONE", "VALUE" : 100, "OPT" : 0 } ],
            "POST" : [
                { "TYPE" : "MONEY", "NAME" : "", "VALUE" : 100, "OPT" : "TAG_B" }
            ],
            "START" :
            "It doesn't take long after this for the evening to move on to the next, more intimate performance. Several of the other women start to disrobe and "+
            "engage in various sex acts with the customers - a blow job here, some straight fucking in the corner. One particularly petite girl with a huge ass "+
            "is bent over a chair and getting anally violated. It's clear what her job is for this evenings festivities.\n\n"+
            "You start your own little 'station' in the corner, on your knees."
            ,
            "END" :
                "",
            "RESULTS" : [
                {"B":  33, "TEXT": "You spend most of the time just fondling customers with your pBUST tits while they get ready for one of the other girls. It @@seems they just aren't that interested@@ in you."},
                {"B":  66, "TEXT": "You start off slowly, but soon the men are starting to notice how @@good your tit jobs@@ are and before you notice it, you're pulling a significant "+
                "number of men your way."},
                {"B": 500, "TEXT": "The remainders of the evening passes in a blur of cocks and semen. Your skills are @@so good that you find yourself in high demand@@ and you start to worry "+
                "if your arms are going to hold out or not from all the dick pumping."} ]
        },
        {
            // Perversion check for cum play.
            "ID" : "SCENE03",
            "TRIGGERS" :[ ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [
                { "TAG" : "C", "TYPE" : "STAT", "NAME" : "Perversion", "DIFFICULTY" : 50, "REWARD" : "MONEY", "R_NAME" : "MONEY", "VALUE" : 50, "OPT" : 0 } ],
            "POST" : [
                { "TYPE" : "STAT_XP", "NAME" : "Perversion", "VALUE" : 100, "OPT" : "TAG_C" }
            ],
            "START" :
            "Finally, the last two clients are in front of you, their cocks out and flopping free. You slowly stroke them both to hardness, using your tongue and saliva to "+
            "lubricate their shafts. Eventually both men are sporting huge erections and the pace of your ministrations starts to increase as does their moans. "+
            "You furiously pump their turgid cocks with your tits until they begin shooting long ropey streams of cum into your face and chest. There's so much cum, "+
            "sticking to your face, your eye lids, your lips and of course your pBUST tits. "
            ,
            "RESULTS" : [
                {"C":  33, "TEXT": "It's difficult to deal with and you @@struggle to remain smiling@@ while the customers blow their loads."},
                {"C":  66, "TEXT": "You try to really put on a show for the men, smiling and making @@half hearted attempts@@ to lick their jizz from your breasts. You couldn't really tell if "+
                "they noticed your performance or not."},
                {"C": 500, "TEXT": "You lock eyes on the men and open your mouth wide, letting their cum fall directly onto your tongue. Letting out a throaty moan you start to lap it up from "+
                "your lips and swallow it down. You bring one of your breasts to your mouth and lick up an errant pool of jizz, smiling all the while. "+
                "The super lewd act spurs them on and soon they're rock hard and you're pumping them again. They better pay you extra for this."} ],
            "END" :
            "\n\nEventually everyone is spent and you find yourself covered, literally dripping with jism. You wipe some out of your eyes and then "+
            "politely excuse yourself to clean up your face and clothes. Eventually you go to find NPC_NAME to collect your pay. She's at the front of the bar and nods when she sees you."
        },
        {   // If pass check 'A' and If counter is at MAX (5), reward player and set counter to 0.
            "ID" : "SCENE04a",
            "TRIGGERS" :[
                { "TYPE" : "TAG", "NAME" : "A", "VALUE" : 100, "CONDITION" : "gte" },
                { "TYPE" : "TAG", "NAME" : "B", "VALUE" : 100, "CONDITION" : "gte" },
                { "TYPE" : "TAG", "NAME" : "C", "VALUE" : 100, "CONDITION" : "gte" },
                { "TYPE" : "COUNTER", "NAME" : "SIMONE_LOOT", "VALUE" : 5, "CONDITION" : "gte" }
            ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [ ],
            "POST" : [
                { "TYPE" : "NPC_STAT",  "NAME" : "Mood", "VALUE" : 5 },
                { "TYPE" : "FLAG",      "NAME" : "SIMONE_LOOT",              "VALUE" :   0,  "OPT" : "SET" },
                { "TYPE" : "FLAG",      "NAME" : "SIMONE_REWARD",            "VALUE" :   1,  "OPT" : "SET" },
                { "TYPE" : "LOOT_BOX",  "NAME" : "uncommon sissy loot box", "VALUE" :    1,  "OPT" : "" }
            ],
            "START" :   "NPC_NAME says, \"Here, you've earned this PLAYER_NAME\". She hands you a novelty gift bag shaped like a teddy bear, you wonder what's inside it?",
            "END" : "",
            "RESULTS" : [ ]
        },
        {   // If passed both cooking checks then increment counter. Doesn't trigger if the counter is already at MAX (5) or the reward has been given this time.
            "ID" : "SCENE04b",
            "TRIGGERS" :[
                { "TYPE" : "TAG", "NAME" : "A", "VALUE" : 100, "CONDITION" : "gte" },
                { "TYPE" : "TAG", "NAME" : "B", "VALUE" : 100, "CONDITION" : "gte" },
                { "TYPE" : "TAG", "NAME" : "C", "VALUE" : 100, "CONDITION" : "gte" },
                { "TYPE" : "COUNTER", "NAME" : "SIMONE_LOOT", "VALUE" : 4, "CONDITION" : "lte" },
                { "TYPE" : "FLAG", "NAME" : "SIMONE_REWARD",  "OPT" : "NOT_SET" }
            ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [ ],
            "POST" : [
                { "TYPE" : "NPC_STAT",  "NAME" : "Mood", "VALUE" : 5 },
                { "TYPE" : "COUNTER",   "NAME" : "SIMONE_LOOT",    "VALUE" :   1,  "OPT" : 1 }
            ],
            "START" :   "NPC_NAME says, \"Nice work today. Those rascals were quite happy with your service. Keep it up and I might slip you a little bit something extra...\"",
            "END" : "",
            "RESULTS" : [ ]
        },
        {   // Just unset the flag that shows we received loot and make sure we clear the counter.
            "ID" : "SCENE04c",
            "TRIGGERS" :[
                { "TYPE" : "FLAG", "NAME" : "SIMONE_REWARD", "OPT" : "SET" }
            ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [ ],
            "POST" : [
                { "TYPE" : "FLAG",   "NAME" : "SIMONE_REWARD",  "OPT" : "DELETE" }
            ],
            "START" : "",
            "END" : "",
            "RESULTS" : [ ]
        }

    ],
    "END" :
    "NPC_NAME says, \"Another day, another coin, eh PLAYER_NAME?\"\n\n"+
    "NPC_NAME fetches a small bag from behind the counter and hands it to you, it contains your pay and tips for the night.",
    "JOB_RESULTS" : [ ]
};
App.Data.JobData["SIMONE_JOB4"] = {
    "ID": "SIMONE_JOB4", "TITLE": "Whoring - Anal Specialist", "GIVER": "Simone", "PAY" : 50,
    "RATING" : 3, // of 5
    "PHASES" : [ 2, 3 ],
    "DAYS"   : 1,
    "HIDDEN" : false,
    "COST" : [
        { "TYPE" : "TIME", "VALUE" : 1 },
        { "TYPE" : "STAT", "NAME" : "Energy", "VALUE" : 1 } ],
    "REQUIREMENTS" : [
        { "TYPE" : "SKILL", "NAME" : "AssFucking", "VALUE" : 50, "CONDITION" : "gte" }
    ],
    "INTRO" : "NPC_NAME says, \"I have a special group of clients that might be interested in you... if you have the skills.\"",
    "START" :
    "NPC_NAME says, \"So here's the deal PLAYER_NAME, none of my regular girls will take the job, but I have a group of clients paying good coin "+
    "to have a bit of a party in the back room. You won't be the only entertainment for the evening, but it's been requested to supply a slut who can "+
    "furious anal pounding and look happy about it. Swallow a little jizz here and there. You know, the usual.\"\n\n"+
    "Yes, you think to yourself, 'the usual'.\n\n"+
    "NPC_NAME gives you the run down on the rest of the job and ushers you into the back room."
    ,
    "SCENES" : [
        {
            // Enter into room. Flirt with men.
            "ID" : "SCENE01",
            "TRIGGERS" :[ ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [
                { "TAG" : "A", "TYPE" : "SKILL", "NAME" : "Seduction", "DIFFICULTY" : 50, "REWARD" : "NONE", "R_NAME" : "NONE", "VALUE" : 100, "OPT" : 0 }
            ],
            "POST" : [
                { "TYPE" : "MONEY", "NAME" : "", "VALUE" : 20, "OPT" : "TAG_A" }
            ],
            "START" :
            "Inside you find several men lounging around on couches swilling drinks while various girls hang on their arms. One of those girls, a young  "+
            "blond with smouldering eyes grabs your hand and leads you to the middle of the room. Once there she starts brushing against you while shaking her hips, "+
            "it doesn't take you long to understand and soon the two of you are lewdly groping each other for the enjoyment of the small group."
            ,
            "RESULTS" : [
                {"A":  33, "TEXT": "It @@doesn't seem to have much effect though@@ as the men seem more interested in the girls on their arms."},
                {"A":  66, "TEXT": "You notice several pairs of eyes turn your way, it @@appears you've gotten their interest@@."},
                {"A": 500, "TEXT": "The men seem to take @@a keen interest@@ in your little show and you think you see an erection straining against one of the men's trousers."} ],
            "END" :
                ""
        },
        {
            // Start performing hand jobs
            "ID" : "SCENE02",
            "TRIGGERS" :[ ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [
                { "TAG" : "B", "TYPE" : "SKILL", "NAME" : "AssFucking", "DIFFICULTY" : 75, "REWARD" : "NONE", "R_NAME" : "NONE", "VALUE" : 100, "OPT" : 0 } ],
            "POST" : [
                { "TYPE" : "MONEY", "NAME" : "", "VALUE" : 100, "OPT" : "TAG_B" }
            ],
            "START" :
            "It doesn't take long after this for the evening to move on to the next, more intimate performance. Several of the other women start to disrobe and "+
            "engage in various sex acts with the customers - a blow job here, some straight fucking in the corner. One particularly petite girl with a huge pair of tits "+
            "is wanking cocks on a couch. Without much warning you find yourself led by the hand and bent over a chair. It's clear what your part in tonight's festivities is.\n\n"
            ,
            "END" :
                "",
            "RESULTS" : [
                {"B":  33, "TEXT": "You spend most of the time trying to not cry and scream as you are relentlessly anally violated. This does turn some men on,but it @@seems they most aren't that interested@@ in you."},
                {"B":  66, "TEXT": "It's not easy, but since you've had enough practice you're able to mostly fake (you are faking, right?) enjoying the act of being ass raped. @@You're not the most popular girl here, but not the worst either.@@"},
                {"B": 500, "TEXT": "Fortunately for you, tonight your asshole seems up to the task of the seemingly @@endless array of dicks you satisfy@@ with it. You grind and wiggle on every cock, moaning and gasping with pleasure as you've learned to do so well."} ]
        },
        {
            // Perversion check for cum play.
            "ID" : "SCENE03",
            "TRIGGERS" :[ ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [
                { "TAG" : "C", "TYPE" : "STAT", "NAME" : "Perversion", "DIFFICULTY" : 50, "REWARD" : "MONEY", "R_NAME" : "MONEY", "VALUE" : 50, "OPT" : 0 } ],
            "POST" : [
                { "TYPE" : "STAT_XP", "NAME" : "Perversion", "VALUE" : 100, "OPT" : "TAG_C" }
            ],
            "START" :
            "Finally, the last client is in front of you, his massive tool flopping down to his knees. You slowly stroke him to hardness, using your tongue and saliva to "+
            "lubricate his shafts. Eventually he sports huge erections and flips you over, the head of his massive tool poking against your asshole. Thankfully the combination of all of the spit you "+
            " placed on his rod and the use your ass has seen tonight, makes it easy for him to enter your rectum. You start pushing back against his dick while he pounds you, reaching down " +
            "to fondle yourself, trying to get your own climax."
            ,
            "RESULTS" : [
                {"C":  33, "TEXT": "It's @@difficult to deal with the pounding you're getting@@ and still get off yourself, the customer finishes off inside you, but you're left unsatisfied."},
                {"C":  66, "TEXT": "You try to really put on a show for the man, gasping and moaning as you stroke your balls and pPENIS sissy clit. Eventually he comes hard in your ass and gives you a smile. @@Your enthusiasm was appreciated.@@" },
                {"C": 500, "TEXT": "You furiously rub your pPENIS sissy clit while being brutally sodomized by the man. Every time he thrusts into you, it sends a shiver up your spine and causes you" +
                "to moan like a bitch in heat. Eventually the man bottoms out in your ass, the violent force of his ejaculation sending you into your own perversion filed orgasm. He notices the mess and smile at you, it appears @@he liked how much you enjoyed the act.@@"} ],
            "END" :
            "\n\nEventually everyone is spent and you find yourself covered, literally dripping with jism. You wipe some out of your eyes and then "+
            "politely excuse yourself to clean up your face and clothes. Eventually you go to find NPC_NAME to collect your pay. She's at the front of the bar and nods when she sees you."
        },
        {   // If pass check 'A' and If counter is at MAX (5), reward player and set counter to 0.
            "ID" : "SCENE04a",
            "TRIGGERS" :[
                { "TYPE" : "TAG", "NAME" : "A", "VALUE" : 100, "CONDITION" : "gte" },
                { "TYPE" : "TAG", "NAME" : "B", "VALUE" : 100, "CONDITION" : "gte" },
                { "TYPE" : "TAG", "NAME" : "C", "VALUE" : 100, "CONDITION" : "gte" },
                { "TYPE" : "COUNTER", "NAME" : "SIMONE_LOOT", "VALUE" : 5, "CONDITION" : "gte" }
            ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [ ],
            "POST" : [
                { "TYPE" : "NPC_STAT",  "NAME" : "Mood", "VALUE" : 5 },
                { "TYPE" : "FLAG",      "NAME" : "SIMONE_LOOT",              "VALUE" :   0,  "OPT" : "SET" },
                { "TYPE" : "FLAG",      "NAME" : "SIMONE_REWARD",            "VALUE" :   1,  "OPT" : "SET" },
                { "TYPE" : "LOOT_BOX",  "NAME" : "uncommon pirate loot box", "VALUE" :   1,  "OPT" : "" }
            ],
            "START" :   "NPC_NAME says, \"Here, you've earned this PLAYER_NAME\". She hands you a novelty gift bag shaped like a teddy bear, you wonder what's inside it?",
            "END" : "",
            "RESULTS" : [ ]
        },
        {   // If passed both cooking checks then increment counter. Doesn't trigger if the counter is already at MAX (5) or the reward has been given this time.
            "ID" : "SCENE04b",
            "TRIGGERS" :[
                { "TYPE" : "TAG", "NAME" : "A", "VALUE" : 100, "CONDITION" : "gte" },
                { "TYPE" : "TAG", "NAME" : "B", "VALUE" : 100, "CONDITION" : "gte" },
                { "TYPE" : "TAG", "NAME" : "C", "VALUE" : 100, "CONDITION" : "gte" },
                { "TYPE" : "COUNTER", "NAME" : "SIMONE_LOOT", "VALUE" : 4, "CONDITION" : "lte" },
                { "TYPE" : "FLAG", "NAME" : "SIMONE_REWARD",  "OPT" : "NOT_SET" }
            ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [ ],
            "POST" : [
                { "TYPE" : "NPC_STAT",  "NAME" : "Mood", "VALUE" : 5 },
                { "TYPE" : "COUNTER",   "NAME" : "SIMONE_LOOT",    "VALUE" :   1,  "OPT" : 1 }
            ],
            "START" :   "NPC_NAME says, \"Nice work today. Those rascals were quite happy with your service. Keep it up and I might slip you a little bit something extra...\"",
            "END" : "",
            "RESULTS" : [ ]
        },
        {   // Just unset the flag that shows we received loot and make sure we clear the counter.
            "ID" : "SCENE04c",
            "TRIGGERS" :[
                { "TYPE" : "FLAG", "NAME" : "SIMONE_REWARD", "OPT" : "SET" }
            ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [ ],
            "POST" : [
                { "TYPE" : "FLAG",   "NAME" : "SIMONE_REWARD",  "OPT" : "DELETE" }
            ],
            "START" : "",
            "END" : "",
            "RESULTS" : [ ]
        }

    ],
    "END" :
    "NPC_NAME says, \"Another day, another coin, eh PLAYER_NAME?\"\n\n"+
    "NPC_NAME fetches a small bag from behind the counter and hands it to you, it contains your pay and tips for the night.",
    "JOB_RESULTS" : [ ]
};