App.Data.JobData["SHIP_NAV01"] = {
    "ID": "SHIP_NAV01", "TITLE": "Assist at the helm", "GIVER": "HELM", "PAY" : 100,
    "RATING" : 3, // of 5
    "PHASES" : [ 0 ],
    "DAYS"   : 1,
    "HIDDEN" : true,
    "COST" : [
        { "TYPE" : "TIME", "VALUE" : 3 },
        { "TYPE" : "STAT", "NAME" : "Energy", "VALUE" : 5 } ],
    "REQUIREMENTS" : [
        { "TYPE" : "SKILL", "NAME" : "Navigating", "CONDITION" : "gte", "VALUE" : 20  },
        { "TYPE" : "SKILL", "NAME" : "Sailing", "CONDITION" : "gte",  "VALUE" : 20   },
        { "TYPE" : "FLAG", "NAME" : "KIPLER_NAV_REWARD", "CONDITION" : "eq", "VALUE": 1 },
        { "TYPE" : "IN_PORT", "VALUE" : 0, "CONDITION": false }
    ],
    "INTRO" : "Not used",
    "START": `You approach the ships helm, nodding briefly to @@color:cyan;Kipler@@ as you assume your station. Normally the huge \
    pirate stares at you with lavacious eyes, but when it comes his job of piloting the @@color:cyan;Salty Mermaid@@ he's quite \
    the professional.`,
    "SCENES" : [
        {
            "ID" : "SCENE01",
            "TRIGGERS" :[ ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [
                { "TAG" : "A", "TYPE" : "SKILL", "NAME" : "Sailing", "DIFFICULTY" : 60, "REWARD" : "MONEY", "R_NAME" : "MONEY", "VALUE" : 30, "OPT" : 0 },
                { "TAG" : "B", "TYPE" : "SKILL", "NAME" : "Navigating", "DIFFICULTY" : 60, "REWARD" : "MONEY", "R_NAME" : "MONEY", "VALUE" : 30, "OPT" : 0 }
            ],
            "POST" : [ ],
            "START" : `The morning starts off well enough, easy sailing as they say. However by mid-afternoon a small squall looms on the horizon.

            You do your best to try and avoid it, but ultimately you have no choice but to try and steer through it.`,
            "RESULTS" : [
                {"A":  40, "TEXT":
                    `Unfortunately it becomes quickly apparent that @@your skills are not up for the task@@ and Kipler rushes over to the helm to assist
                    you. Within moments he has the ship smoothly breaking the waves and heading on it's course, leaving you looking like a fool.`
                },
                {"A":  80, "TEXT":
                    `You @@struggle painfully against the wheel@@ of the helm for what seems like hours, occasionally Kipler will come by and help you out
                    of a particularly bad swell, but other than that you're left to fend for yourself.`
                },
                {"A": 500, "TEXT":
                    `Your skills at the helm surprise even you as you @@masterfully navigate each swell@@ and guide the ship towards it's course.`
                }
            ],
            "END" : `Eventually the clouds break and the seas calm. With a steady wind at your back you do your best to make up for lost time.`
        },
        {
            "ID" : "GOOD_SAILING",
            "TRIGGERS" :[
                { "TYPE" : "TAG", "NAME" : "A", "VALUE" : 100, "CONDITION" : "gte" },
                { "TYPE" : "TAG", "NAME" : "B", "VALUE" : 100, "CONDITION" : "gte" }
            ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [ ],
            "POST" : [
                { "TYPE" : "SAIL_DAYS", "VALUE": 1 }
            ],
            "START": `You made amazing time today, even @@color:cyan;Kipler@@ noticed how switched on you were. You feel as if \
            the wind was pushing you towards your destination and all you had to do was just gently nudge the ship in the right \
            direction. It's a satisfying feeling.`,
            "RESULTS" : [ ],
            "END" : ""
        }
    ],
    "END" : "",
    "JOB_RESULTS" : [
    ]

};
