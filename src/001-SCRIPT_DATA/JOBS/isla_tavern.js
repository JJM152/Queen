App = App || { Data: { }, Entity: { } };
App.Data.JobData = App.Data.JobData || { };

App.Data.JobData["ISLA_WAITRESS"] = {
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
};
