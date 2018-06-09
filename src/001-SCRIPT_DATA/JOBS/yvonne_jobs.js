App = App || { Data: { }, Entity: { } };
App.Data.JobData = App.Data.JobData || { };

App.Data.JobData["YVONNE_TRAINING"] = {
    "ID": "YVONNE_TRAINING", "TITLE": "Hair and Makeup Training", "GIVER": "Yvonne", "PAY" : 0,
    "RATING" : 3, // of 5
    "PHASES" : [ 0, 1 ],
    "DAYS"   : 1,
    "HIDDEN" : false,
    "COST" : [
        { "TYPE" : "TIME", "VALUE" : 2 },
        { "TYPE" : "STAT", "NAME" : "Energy", "VALUE" : 2 },
        { "TYPE" : "MONEY", "VALUE" : 250 }
    ],
    "REQUIREMENTS" : [

    ],
    "INTRO" :
        "NPC_NAME says, \"Looking for some style tutoring? Sure, I can help you, for a price...\"",
    "START" :
        "NPC_NAME ushers you into her inner working area and sits you in front of a large vanity situated in front of a wide picture window. She explains that the " +
        "natural light is good for exposing flaws that need to be addressed. With a bit of flourish, she sits you in front of a pristine glass mirror and begins "+
        "to explain to you many concepts and techniques related to applying pigments and powder to 'accentuate your natural beauty'.",
    "SCENES" : [
        {
            // No requirements.
            "ID" : "MAKEUP",
            "TRIGGERS" :[ ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [
            { "TAG": "A", "TYPE" : "SKILL", "NAME" : "Styling", "DIFFICULTY" : 70, "REWARD" : "", "R_NAME" : "","VALUE" : 100, "OPT" : 0 }
            ],
            "POST" : [
                { "TYPE" : "SKILL_XP", "NAME" : "Styling", "VALUE" :  50, "OPT" : 0 }
            ],
            // Just print widget
            "START" :
                "You spend some time, deeply enraptured by her lecture and then attempt to apply the principles that she taught you to your own face.",
            "RESULTS" : [
                {"A":  85, "TEXT":  "It's @@more difficult@@ than you thought and NPC_NAME has to constantly correct your technique or choices."},
                {"A": 120, "TEXT":  "With only minor commentary from NPC_NAME, you manage to do @@a decent job@@. "},
                {"A": 500, "TEXT":  "You take your time and manage to @@skillfully recreate the techniques@@ that you were shown. NPC_NAME looks at you and then nods in approval."}
            ],
            "END" :
                ""
        },
        {
            // No requirements.
            "ID" : "HAIR",
            "TRIGGERS" :[ ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [
                { "TAG": "B", "TYPE" : "SKILL", "NAME" : "Styling", "DIFFICULTY" : 70, "REWARD" : "", "R_NAME" : "","VALUE" : 100, "OPT" : 0 }
            ],
            "POST" : [
                { "TYPE" : "SKILL_XP", "NAME" : "Styling", "VALUE" :  50, "OPT" : 0 }
            ],
            // Just print widget
            "START" :
                "Next, comes a lecture and practice session related to hair care and styling. NPC_NAME spends quite a long time going into detail about "+
            "how you should care for and maintain your hair, even recommending several products that (of course) she happens to sell. On the back of that "+
            "she segues into some practical examples of styling - taking your hair and demonstrating how to craft various popular styles. Finally, it becomes "+
            "your turn to try and attempt it, and you bite your lip with concentration as you get to work.",
            "RESULTS" : [
                {"B":  85, "TEXT":  "It's @@more difficult@@ than you thought and NPC_NAME has to constantly correct your technique or choices."},
                {"B": 120, "TEXT":  "With only minor commentary from NPC_NAME, you manage to do @@a decent job@@. "},
                {"B": 500, "TEXT":  "You take your time and manage to @@skillfully recreate the techniques@@ that you were shown. NPC_NAME looks at you and then nods in approval."}
            ],
            "END" :
                ""
        }

    ],
    "END" :
        "Finally, finished for the day, NPC_NAME happily takes your payment and ushers you to the door.\n\n"+
        "\"You're welcome to come back any time you want PLAYER_NAME,\" she says, \"Just come early enough in the day and we'll work something out.\"\n\n"+
        "Despite your misgivings about makeup in general, the experience was good enough that you might just take her up on that offer.",
    "JOB_RESULTS" : [ ]
};