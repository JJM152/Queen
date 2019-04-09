App.Data.JobData["GRYPHON_WAITRESS"] = {
    "ID": "GRYPHON_WAITRESS",
    "TITLE": "Wench For Hire",
    "GIVER": "Cutchbart",
    "PAY" : 80,
    "RATING" : 4,
    "PHASES" : [ 1 ],
    "DAYS"   : 1,
    "HIDDEN" : false,
    "COST" : [
        {
            "TYPE" : "TIME", "VALUE" : 3
        },
        {
            "TYPE" : "STAT", "NAME" : "Energy", "VALUE" : 2
        }
    ],
    "REQUIREMENTS" : [
        {
            "TYPE" : "STYLE", "NAME" : "STYLE", "VALUE" : 50, "CONDITION" : "gte",
            "TYPE" : "SKILL", "NAME" : "Serving", "VALUE" : 30, "CONDITION" : "gte"
        }
    ],
    "START" : "\
        NPC_NAME eyes you up and down, muttering to himself and then nods slowly in your direction.\n\n\
        s(The job's easy enough lass, so don't worry if you don't have much experience at wenching. So long as \
        you don't screw up too badly, you'll get paid), he says.\n\n\
        That's a relief. For once it seems you can get paid some coin without having to suck a dick... or five.\n\n\
        s(Just a word of warning...) he adds, s(The boys can get pretty 'hands on' if you know what I mean, \
        especially after they've had a few. It shouldn't go too far... not like last time anyway.)\n\n\
        Aaaaaand... there it is.\
        ",
    "INTRO" : "\
        NPC_NAME says, s(I'm always looking for help on the floor. If you can sling beers and don't mind a \
        hand or two on your arse, we're hiring.)\
        ",
    "SCENES" : [
        {
            "ID" : "SCENE01",
            "TRIGGERS" :[ ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [
                {
                    "TAG" : "A", "TYPE" : "SKILL", "NAME" : "Serving", "DIFFICULTY" : 30,
                    "REWARD" : "NONE", "R_NAME" : "NONE", "VALUE" : 100, "OPT" : 0
                } ],
            "POST" : [
                {
                    "TYPE" : "NPC_STAT", "NAME" : "Mood", "VALUE" : 5, "OPT" : "TAG_A"
                },
                {
                    "TYPE" : "MONEY", "VALUE" : 20, "OPT" : "TAG_A"
                }
            ],
            "START" : "\
                You start your shift. The Tavern is mostly quiet this time of day and the customers are \
                relatively orderly. "
            ,
            "RESULTS" : [
                {
                    "A":  33,
                    "TEXT": "However, despite this, you find it @@difficult@@ to manage all of your orders and \
                    keep them happy."
                },
                {
                    "A":  66,
                    "TEXT": "You start off slowly and make a few miss-steps, but eventually @@you get the hang of it@@ \
                    and fall into a natural rhythm of slinging ale and grub."
                },
                {
                    "A": 500,
                    "TEXT": "All in all, it's @@not very difficult@@ to keep everyone happy - plied with drinks and food."
                }
            ],
            "END" : "\
                Eventually the rush ends and you get a few moments to catch your breath and prepare for the \
                next bustle of customers.\
            ",
        }
    ],
    "END" : "\
        Finally, your shift in the tavern is over. NPC_NAME comes up to you and hands you your pay for the night.\
        ",
    "JOB_RESULTS" : [ ]
};

App.Data.JobData["GRYPHON_MAID"] = {
    "ID": "GRYPHON_MAID",
    "TITLE": "Naughty maid",
    "GIVER": "Cutchbart",
    "PAY" : 80,
    "RATING" : 4,
    "PHASES" : [ 0 ],
    "DAYS"   : 1,
    "HIDDEN" : false,
    "COST" : [
        {
            "TYPE" : "TIME", "VALUE" : 2
        },
        {
            "TYPE" : "STAT", "NAME" : "Energy", "VALUE" : 2
        }
    ],
    "REQUIREMENTS" : [
        {
            "TYPE" : "STYLE", "NAME" : "STYLE", "VALUE" : 50, "CONDITION" : "gte",
            "TYPE" : "SKILL", "NAME" : "Cleaning", "VALUE" : 35, "CONDITION" : "gte"
        }
    ],
    "START" : "\
        NPC_NAME eyes you up and down, muttering to himself and then nods slowly in your direction.\n\n\
        s(The job's easy enough lass, so don't worry if you don't have much experience at wenching. So long as \
        you don't screw up too badly, you'll get paid), he says.\n\n\
        That's a relief. For once it seems you can get paid some coin without having to suck a dick... or five.\n\n\
        s(Just a word of warning...) he adds, s(The boys can get pretty 'hands on' if you know what I mean, \
        especially after they've had a few. It shouldn't go too far... not like last time anyway.)\n\n\
        Aaaaaand... there it is.\
        ",
    "INTRO" : "\
        NPC_NAME says, s(I'm always looking for help on the floor. If you can sling beers and don't mind a \
        hand or two on your arse, we're hiring.)\
        ",
    "SCENES" : [
        {
            "ID" : "SCENE01",
            "TRIGGERS" :[ ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [
                {
                    "TAG" : "A", "TYPE" : "SKILL", "NAME" : "Serving", "DIFFICULTY" : 30,
                    "REWARD" : "NONE", "R_NAME" : "NONE", "VALUE" : 100, "OPT" : 0
                } ],
            "POST" : [
                {
                    "TYPE" : "NPC_STAT", "NAME" : "Mood", "VALUE" : 5, "OPT" : "TAG_A"
                },
                {
                    "TYPE" : "MONEY", "VALUE" : 20, "OPT" : "TAG_A"
                }
            ],
            "START" : "\
                You start your shift. The Tavern is mostly quiet this time of day and the customers are \
                relatively orderly. "
            ,
            "RESULTS" : [
                {
                    "A":  33,
                    "TEXT": "However, despite this, you find it @@difficult@@ to manage all of your orders and \
                    keep them happy."
                },
                {
                    "A":  66,
                    "TEXT": "You start off slowly and make a few miss-steps, but eventually @@you get the hang of it@@ \
                    and fall into a natural rhythm of slinging ale and grub."
                },
                {
                    "A": 500,
                    "TEXT": "All in all, it's @@not very difficult@@ to keep everyone happy - plied with drinks and food."
                }
            ],
            "END" : "\
                Eventually the rush ends and you get a few moments to catch your breath and prepare for the \
                next bustle of customers.\
            ",
        }
    ],
    "END" : "\
        Finally, your shift in the tavern is over. NPC_NAME comes up to you and hands you your pay for the night.\
        ",
    "JOB_RESULTS" : [ ]
};

App.Data.JobData["GRYPHON_COOK"] = {
    "ID": "GRYPHON_COOK",
    "TITLE": "cook's assistant",
    "GIVER": "Cutchbart",
    "PAY" : 80,
    "RATING" : 4,
    "PHASES" : [ 0, 1, 2, 3 ],
    "DAYS"   : 1,
    "HIDDEN" : false,
    "COST" : [
        {
            "TYPE" : "TIME", "VALUE" : 1
        },
        {
            "TYPE" : "STAT", "NAME" : "Energy", "VALUE" : 2
        }
    ],
    "REQUIREMENTS" : [
        {
            "TYPE" : "SKILL", "NAME" : "Cooking", "VALUE" : 35, "CONDITION" : "gte"
        }
    ],
    "START" : "\
        NPC_NAME eyes you up and down, muttering to himself and then nods slowly in your direction.\n\n\
        s(The job's easy enough lass, so don't worry if you don't have much experience at wenching. So long as \
        you don't screw up too badly, you'll get paid), he says.\n\n\
        That's a relief. For once it seems you can get paid some coin without having to suck a dick... or five.\n\n\
        s(Just a word of warning...) he adds, s(The boys can get pretty 'hands on' if you know what I mean, \
        especially after they've had a few. It shouldn't go too far... not like last time anyway.)\n\n\
        Aaaaaand... there it is.\
        ",
    "INTRO" : "\
        NPC_NAME says, s(I'm always looking for help on the floor. If you can sling beers and don't mind a \
        hand or two on your arse, we're hiring.)\
        ",
    "SCENES" : [
        {
            "ID" : "SCENE01",
            "TRIGGERS" :[ ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [
                {
                    "TAG" : "A", "TYPE" : "SKILL", "NAME" : "Serving", "DIFFICULTY" : 30,
                    "REWARD" : "NONE", "R_NAME" : "NONE", "VALUE" : 100, "OPT" : 0
                } ],
            "POST" : [
                {
                    "TYPE" : "NPC_STAT", "NAME" : "Mood", "VALUE" : 5, "OPT" : "TAG_A"
                },
                {
                    "TYPE" : "MONEY", "VALUE" : 20, "OPT" : "TAG_A"
                }
            ],
            "START" : "\
                You start your shift. The Tavern is mostly quiet this time of day and the customers are \
                relatively orderly. "
            ,
            "RESULTS" : [
                {
                    "A":  33,
                    "TEXT": "However, despite this, you find it @@difficult@@ to manage all of your orders and \
                    keep them happy."
                },
                {
                    "A":  66,
                    "TEXT": "You start off slowly and make a few miss-steps, but eventually @@you get the hang of it@@ \
                    and fall into a natural rhythm of slinging ale and grub."
                },
                {
                    "A": 500,
                    "TEXT": "All in all, it's @@not very difficult@@ to keep everyone happy - plied with drinks and food."
                }
            ],
            "END" : "\
                Eventually the rush ends and you get a few moments to catch your breath and prepare for the \
                next bustle of customers.\
            ",
        }
    ],
    "END" : "\
        Finally, your shift in the tavern is over. NPC_NAME comes up to you and hands you your pay for the night.\
        ",
    "JOB_RESULTS" : [ ]
};