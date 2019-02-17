App.Data.JobData["SHILLING_CUSTOMER_1"] = {
    "ID": "SHILLING_CUSTOMER_1", 
    "TITLE": "Private Dance - Regular Customer", 
    "GIVER": "Shilling", 
    "PAY" : 25,
    "RATING" : 2,
    "PHASES" : [ 0, 1, 2, 3 ],
    "DAYS"   : 1,
    "HIDDEN" : false,
    "COST" : [
        { 
            "TYPE" : "TIME",  "VALUE" : 1 
        },
        { 
            "TYPE" : "STAT",  "NAME" : "Energy", "VALUE" : 2 
        },
    ],
    "REQUIREMENTS" : [
        { 
            "TYPE" : "SKILL", "NAME" : "Dancing", "VALUE" : 50, "CONDITION" : "gte"
        },
        { 
            "TYPE" : "STAT", "NAME" : "Perversion", "VALUE" : 40, "CONDITION" : "gte" 
        },
        {
            "TYPE" : "META", "NAME" : "BEAUTY", "VALUE" : 50, "CONDITION" : "gte"
        },
        {
            "TYPE" : "NPC_STAT", "NAME" : "Mood", "VALUE" : 60, "CONDITION" : "gte"
        }

    ],
    "INTRO" : "\
    NPC_NAME has a regular customer who wants a private dance. \
    ",
    "START" : "\
    The music begins and that's your cue to slip out of the velvet curtains and on to the stage.\
    ",
    "SCENES" : [
        {
            "ID" : "Lapdance Scene",
            "TRIGGERS" :[ ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [],
            "POST" : [],
            "START" : "",
            "RESULTS" : [],
            "END" : ""
        },
        {
            "ID" : "Handjob Scene",
            "TRIGGERS" :[ ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [],
            "POST" : [],
            "START" : "",
            "RESULTS" : [],
            "END" : ""
        },
        {
            "ID" : "Blowjob Scene",
            "TRIGGERS" :[ ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [],
            "POST" : [],
            "START" : "",
            "RESULTS" : [],
            "END" : ""
        }

    ],
    "END" : "",
    "JOB_RESULTS" : []
};

App.Data.JobData["SHILLING_CUSTOMER_2"] = {
    "ID": "SHILLING_CUSTOMER_2", 
    "TITLE": "Private Dance - Wealthy Customer", 
    "GIVER": "Shilling", 
    "PAY" : 50,
    "RATING" : 4,
    "PHASES" : [ 0, 1, 2, 3 ],
    "DAYS"   : 1,
    "HIDDEN" : false,
    "COST" : [
        { 
            "TYPE" : "TIME",  "VALUE" : 1 
        },
        { 
            "TYPE" : "STAT",  "NAME" : "Energy", "VALUE" : 2 
        },
    ],
    "REQUIREMENTS" : [
        { 
            "TYPE" : "SKILL", "NAME" : "Dancing", "VALUE" : 50, "CONDITION" : "gte"
        },
        { 
            "TYPE" : "STAT", "NAME" : "Perversion", "VALUE" : 40, "CONDITION" : "gte" 
        },
        {
            "TYPE" : "META", "NAME" : "BEAUTY", "VALUE" : 70, "CONDITION" : "gte"
        },
        {
            "TYPE" : "NPC_STAT", "NAME" : "Mood", "VALUE" : 60, "CONDITION" : "gte"
        }

    ],
    "INTRO" : "\
    NPC_NAME has a wealthy customer who wants a private dance from a beautiful slut. \
    ",
    "START" : "\
    The music begins and that's your cue to slip out of the velvet curtains and on to the stage.\
    ",
    "SCENES" : [
        {
            "ID" : "Lapdance Scene",
            "TRIGGERS" :[ ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [],
            "POST" : [],
            "START" : "",
            "RESULTS" : [],
            "END" : ""
        },
        {
            "ID" : "Handjob Scene",
            "TRIGGERS" :[ ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [],
            "POST" : [],
            "START" : "",
            "RESULTS" : [],
            "END" : ""
        },
        {
            "ID" : "Blowjob Scene",
            "TRIGGERS" :[ ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [],
            "POST" : [],
            "START" : "",
            "RESULTS" : [],
            "END" : ""
        }

    ],
    "END" : "",
    "JOB_RESULTS" : []
};