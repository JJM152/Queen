App.Data.JobData["JUNGLE01"] = {
    "ID": "JUNGLE", "TITLE": "Explore the Jungle", "GIVER": "JUNGLE", "PAY" : 0,
    "RATING" : 1, // of 5
    // Can't do late at night
    "PHASES" : [ 0, 1, 2, 3 ],
    // Can do as many times as wanted in day.
    "DAYS"   : 0,
    // Job is hidden by default until requirements are met.
    "HIDDEN" : false,
    "COST" : [
        { "TYPE" : "TIME",  "VALUE" : 1 },
        { "TYPE" : "STAT",  "NAME" : "Energy", "VALUE" : 2 }
    ],
    "REQUIREMENTS" : [
        // Check to make sure player is equipped the worn machete
            { "TYPE" : "EQUIPPED", "NAME" : "worn machete"}
        ],
    "INTRO" :
        // This is run from a room, so no NPC teaser text.
            "",
    "START" :
    "You pull out your trusty @@color:purple;worn machete@@ and begin hacking away at the underbrush.",
    "SCENES" : [
        {
            // Just check the players navigation skill and store the result.
            "ID" : "SCENE01",
            "TRIGGERS" :[ ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [
                { "TAG" : "A", "TYPE" : "SKILL", "NAME" : "Navigating", "DIFFICULTY" : 50 }
            ],
            "POST" : [ ],
            "START" : "",
            "END" : "",
            "RESULTS" : [
                {"A":  50, "TEXT":  "You spend what seems like hours traipsing through the jungle, @@not really sure@@ which way you are heading."},
                {"A":  99, "TEXT":  "You do your best to clear a straight path, trying to follow the sun, however, your managed to @@get turned around someplace@@... how unfortunate."},
                {"A": 500, "TEXT":  "You do your best to clear a straight path, trying to follow the sun. @@It seems to have worked@@ and you managed to survey a large part of the jungle."}
                ]
        },
        {   // If pass check 'A' and If counter is at MAX (3) and the cove hasn't been found yet.
            "ID" : "SCENE04a",
            "TRIGGERS" :[
                { "TYPE" : "TAG", "NAME" : "A", "VALUE" : 100, "CONDITION" : "gte" },
                { "TYPE" : "COUNTER",   "NAME" : "JUNGLE_COUNTER", "VALUE" : 3, "CONDITION" : "gte" },
                { "TYPE" : "FLAG",      "NAME" : "COVE_FOUND",     "OPT"   : "NOT_SET" }
            ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [ ],
            "POST" : [
                // Clear counter, remember we just found something, set flag for finding the cove (used by jungle.twee)
                { "TYPE" : "FLAG",      "NAME" : "JUNGLE_COUNTER",  "VALUE" :   0,  "OPT" : "SET" },
                { "TYPE" : "FLAG",      "NAME" : "JUNGLE_REWARD",   "VALUE" :   1,  "OPT" : "SET" },
                { "TYPE" : "FLAG",      "NAME" : "COVE_FOUND",      "VALUE" :   1,  "OPT" : "SET" }
            ],
            "START" :   "Along your adventure you seemed to have stumbled across a trail that doesn't look natural. It's cleverly disguised but leads towards the leeward side of the island and a small hidden cove.",
            "END" : "",
            "RESULTS" : [ ]
        },
        {   // If pass check 'A' and If counter is at MAX (3) and if we haven't just found the cove (reward flag) and the ruins hasn't been found yet.
            "ID" : "SCENE04a",
            "TRIGGERS" :[
                { "TYPE" : "TAG",       "NAME" : "A",               "VALUE" : 100,  "CONDITION" : "gte" },
                { "TYPE" : "COUNTER",   "NAME" : "JUNGLE_COUNTER",  "VALUE" : 3,    "CONDITION" : "gte" },
                { "TYPE" : "FLAG",      "NAME" : "JUNGLE_REWARD",   "OPT"   : "NOT_SET" },
                { "TYPE" : "FLAG",      "NAME" : "RUINS_FOUND",     "OPT"   : "NOT_SET" },
                { "TYPE" : "FLAG",      "NAME" : "COVE_FOUND",      "OPT"   : "SET" }
            ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [ ],
            "POST" : [
                // Clear counter, remember we just found something, set flag for finding the cove (used by jungle.twee)
                { "TYPE" : "FLAG",      "NAME" : "JUNGLE_COUNTER",   "VALUE" :   0,  "OPT" : "SET" },
                { "TYPE" : "FLAG",      "NAME" : "JUNGLE_REWARD",    "VALUE" :   1,  "OPT" : "SET" },
                { "TYPE" : "FLAG",      "NAME" : "RUINS_FOUND",      "VALUE" :   1,  "OPT" : "SET" }
            ],
            "START" :   "As you're hacking across the jungle, you stumble across what appears to be a large stone stature. You cautiously sneak up closer to inspect it. "+
                        "As you approach the fallen statue, you choke back a gasp as you realize that it's part of a larger structure, almost buried under the foliage. "+
                        "You are tempted to explore it immediately, but for now you return to the jungle clearing to plan your next move.",
            "END" : "",
            "RESULTS" : [ ]
        },
        {
            // On a skill success we want to increment our success counter. Don't process if we just hit max (3) and set the reward counter.
            "ID" : "SCENE04b",
            "TRIGGERS" :[
                { "TYPE" : "TAG", "NAME" : "A", "VALUE" : 100, "CONDITION" : "gte" },
                { "TYPE" : "COUNTER", "NAME" : "JUNGLE_COUNTER", "VALUE" : 2, "CONDITION" : "lte" },
                { "TYPE" : "FLAG", "NAME" : "JUNGLE_REWARD",  "OPT" : "NOT_SET" }
            ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [ ],
            "POST" : [
                // Increment counter.
                { "TYPE" : "COUNTER",   "NAME" : "JUNGLE_COUNTER",    "VALUE" :   1,  "OPT" : 1 }
            ],
            "START" :   "You didn't find anything today, but you have a feeling that you're getting closer...",
            "END" : "",
            "RESULTS" : [ ]
        },
        {   // Just unset the flag that shows we found a path and make sure we clear the counter.
            "ID" : "SCENE04c",
            "TRIGGERS" :[
                { "TYPE" : "FLAG", "NAME" : "JUNGLE_REWARD", "OPT" : "SET" }
            ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [ ],
            "POST" : [
                { "TYPE" : "FLAG",   "NAME" : "JUNGLE_REWARD",  "OPT" : "DELETE" }
            ],
            "START" : "",
            "END" : "",
            "RESULTS" : [ ]
        }

    ],
    "END" : "",
    "JOB_RESULTS" : [ ]

};
