App.Data.JobData["DANCE_AMATEUR"] = {
    "ID": "DANCE_AMATEUR", 
    "TITLE": "Amateur Hour", 
    "GIVER": "DANCEHALL_JOBS", 
    "PAY" : 25,
    "RATING" : 2,
    "PHASES" : [ 0, 1, 2, 3 ],
    "DAYS"   : 1,
    "HIDDEN" : false,
    "COST" : [
        { "TYPE" : "TIME",  "VALUE" : 1 },
        { "TYPE" : "STAT",  "NAME" : "Energy", "VALUE" : 2 },
    ],
    "REQUIREMENTS" : [
        { "TYPE" : "SKILL", "NAME" : "Dancing", "VALUE" : 30, "CONDITION" : "gte" },
        { "TYPE" : "STAT", "NAME" : "Perversion", "VALUE" : 30, "CONDITION" : "gte" }
    ],
    "INTRO" : "\
    A basic routine, requiring minimal skills. You won't get a lot of tips, but you'll get valuable experience. \
    ",
    "START" : "\
    The music begins and that's your cue to slip out of the velvet curtains and on to the stage.\
    ",
    "SCENES" : [
       {
            "ID" : "SCENE01",
            "TRIGGERS" :[ ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [ 
                { "TAG": "BEAUTY_CHECK", "TYPE" : "META", "NAME" : "BEAUTY", "DIFFICULTY" : 120,
                  "REWARD" : "MONEY", "VALUE" : 10, "OPT" : "BEAUTY_CHECK" },
                { "TAG": "STYLE_CHECK", "TYPE" : "META", "NAME": "DANCE_STYLE", "DIFFICULTY" : 120,
                  "REWARD" : "MONEY", "VALUE" : 10, "OPT" : "STYLE_CHECK" },
                { "TAG": "APPEARANCE_CHECK", "TYPE" : "FUNC", "NAME": function(p, o) {
                    return (o._Checks["BEAUTY_CHECK"]["RESULT"] + o._Checks["STYLE_CHECK"]["RESULT"])/2;
                },"DIFFICULTY" : 100, "VALUE" : 10, "OPT" : "APPEARANCE_CHECK"}                
            ],
            "POST" : [],
            "START" : "",
            "END" : "",
            "RESULTS" : [
                { 
                    "APPEARANCE_CHECK" : 20,
                    "TEXT" : "\
                    The immediate reaction from the crowd to your appearance @@is tepid@@. Maybe you should \
                    work on your beauty or fashion?\
                    "
                },
                { 
                    "APPEARANCE_CHECK" : 40,
                    "TEXT" : "\
                    The crowd @@appears disinterested@@ in your upcoming performance. Maybe you should \
                    work on your beauty or fashion?\
                    "
                },
                { 
                    "APPEARANCE_CHECK" : 60,
                    "TEXT" : "\
                    The crowd @@appears mildly interested@@ in your upcoming performance. Maybe you should \
                    work on your beauty or fashion?\
                    "
                },
                { 
                    "APPEARANCE_CHECK" : 80,
                    "TEXT" : "\
                    Your arrival is greeted with the sound of several @@catcalls and cheers@@. It's a good reaction but \
                    you feel that you could do better.\
                    "
                },
                { 
                    "APPEARANCE_CHECK" : 500,
                    "TEXT" : "\
                    The @@crowd goes wild@@ as you appear. You're greated with a thunderous applause and wolf whistling.\
                    "
                }
            ]
        } 

    ],
    "END" : "\
    You take one last bow, your pBUST tits dangling for the crowd and blow them a kiss. You scoop up the money \
    that was thrown on the stage and exit behind the curtains.\
    ",
    "JOB_RESULTS" : [ ]

};

App.Data.JobData["DANCE_PROFESSIONAL"] = {
    "ID": "DANCE_PROFESSIONAL", 
    "TITLE": "Strutting Your Stuff", 
    "GIVER": "DANCEHALL_JOBS", 
    "PAY" : 50,
    "RATING" : 3,
    "PHASES" : [ 0, 1, 2, 3 ],
    "DAYS"   : 1,
    "HIDDEN" : false,
    "COST" : [
        { "TYPE" : "TIME",  "VALUE" : 1 },
        { "TYPE" : "STAT",  "NAME" : "Energy", "VALUE" : 2 },
    ],
    "REQUIREMENTS" : [
        { "TYPE" : "SKILL", "NAME" : "Dancing", "VALUE" : 50, "CONDITION" : "gte" },
        { "TYPE" : "STAT", "NAME" : "Perversion", "VALUE" : 30, "CONDITION" : "gte" }
    ],
    "INTRO" : "\
    An advanced routine, typical of an experienced dancer. Higher difficulty but more tips. \
    ",
    "START" : "",
    "SCENES" : [
        {
            "ID" : "SCENE01",
            "TRIGGERS" :[ ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [ 
                { "TAG": "BEAUTY_CHECK", "TYPE" : "META", "NAME" : "BEAUTY", "DIFFICULTY" : 120,
                  "REWARD" : "MONEY", "VALUE" : 10, "OPT" : "BEAUTY_CHECK" },
                { "TAG": "STYLE_CHECK", "TYPE" : "META", "NAME": "DANCE_STYLE", "DIFFICULTY" : 120,
                  "REWARD" : "MONEY", "VALUE" : 10, "OPT" : "STYLE_CHECK" },
                { "TAG": "APPEARANCE_CHECK", "TYPE" : "FUNC", "NAME": function(p, o) {
                    return (o._Checks["BEAUTY_CHECK"]["RESULT"] + o._Checks["STYLE_CHECK"]["RESULT"])/2;
                },"DIFFICULTY" : 100, "VALUE" : 10, "OPT" : "APPEARANCE_CHECK"}                
            ],
            "POST" : [],
            "START" : "",
            "END" : "",
            "RESULTS" : [
                { 
                    "APPEARANCE_CHECK" : 20,
                    "TEXT" : "\
                    The immediate reaction from the crowd to your appearance @@is tepid@@. Maybe you should \
                    work on your beauty or fashion?\
                    "
                },
                { 
                    "APPEARANCE_CHECK" : 40,
                    "TEXT" : "\
                    The crowd @@appears disinterested@@ in your upcoming performance. Maybe you should \
                    work on your beauty or fashion?\
                    "
                },
                { 
                    "APPEARANCE_CHECK" : 60,
                    "TEXT" : "\
                    The crowd @@appears mildly interested@@ in your upcoming performance. Maybe you should \
                    work on your beauty or fashion?\
                    "
                },
                { 
                    "APPEARANCE_CHECK" : 80,
                    "TEXT" : "\
                    Your arrival is greeted with the sound of several @@catcalls and cheers@@. It's a good reaction but \
                    you feel that you could do better.\
                    "
                },
                { 
                    "APPEARANCE_CHECK" : 500,
                    "TEXT" : "\
                    The @@crowd goes wild@@ as you appear. You're greated with a thunderous applause and wolf whistling.\
                    "
                }
            ]
        }

    ],
    "END" : "\
    You take one last bow, your pBUST tits dangling for the crowd and blow them a kiss. You scoop up the money \
    that was thrown on the stage and exit behind the curtains.\
    ",
    "JOB_RESULTS" : [ ]

};

App.Data.JobData["DANCE_EXPERT"] = {
    "ID": "DANCE_EXPERT", 
    "TITLE": "Bringing Down the House", 
    "GIVER": "DANCEHALL_JOBS", 
    "PAY" : 75,
    "RATING" : 5,
    "PHASES" : [ 0, 1, 2, 3 ],
    "DAYS"   : 1,
    "HIDDEN" : false,
    "COST" : [
        { "TYPE" : "TIME",  "VALUE" : 1 },
        { "TYPE" : "STAT",  "NAME" : "Energy", "VALUE" : 2 },
    ],
    "REQUIREMENTS" : [
        { "TYPE" : "SKILL", "NAME" : "Dancing", "VALUE" : 70, "CONDITION" : "gte" },
        { "TYPE" : "STAT", "NAME" : "Perversion", "VALUE" : 30, "CONDITION" : "gte" }
    ],
    "INTRO" : "\
    An expert level routine. Very challenging, but incredibly lucrative for a skilled dancer. \
    ",
    "START" : "",
    "SCENES" : [
        {
            "ID" : "SCENE01",
            "TRIGGERS" :[ ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [ 
                { "TAG": "BEAUTY_CHECK", "TYPE" : "META", "NAME" : "BEAUTY", "DIFFICULTY" : 120,
                  "REWARD" : "MONEY", "VALUE" : 10, "OPT" : "BEAUTY_CHECK" },
                { "TAG": "STYLE_CHECK", "TYPE" : "META", "NAME": "DANCE_STYLE", "DIFFICULTY" : 120,
                  "REWARD" : "MONEY", "VALUE" : 10, "OPT" : "STYLE_CHECK" },
                { "TAG": "APPEARANCE_CHECK", "TYPE" : "FUNC", "NAME": function(p, o) {
                    return (o._Checks["BEAUTY_CHECK"]["RESULT"] + o._Checks["STYLE_CHECK"]["RESULT"])/2;
                },"DIFFICULTY" : 100, "VALUE" : 10, "OPT" : "APPEARANCE_CHECK"}                
            ],
            "POST" : [],
            "START" : "",
            "END" : "",
            "RESULTS" : [
                { 
                    "APPEARANCE_CHECK" : 20,
                    "TEXT" : "\
                    The immediate reaction from the crowd to your appearance @@is tepid@@. Maybe you should \
                    work on your beauty or fashion?\
                    "
                },
                { 
                    "APPEARANCE_CHECK" : 40,
                    "TEXT" : "\
                    The crowd @@appears disinterested@@ in your upcoming performance. Maybe you should \
                    work on your beauty or fashion?\
                    "
                },
                { 
                    "APPEARANCE_CHECK" : 60,
                    "TEXT" : "\
                    The crowd @@appears mildly interested@@ in your upcoming performance. Maybe you should \
                    work on your beauty or fashion?\
                    "
                },
                { 
                    "APPEARANCE_CHECK" : 80,
                    "TEXT" : "\
                    Your arrival is greeted with the sound of several @@catcalls and cheers@@. It's a good reaction but \
                    you feel that you could do better.\
                    "
                },
                { 
                    "APPEARANCE_CHECK" : 500,
                    "TEXT" : "\
                    The @@crowd goes wild@@ as you appear. You're greated with a thunderous applause and wolf whistling.\
                    "
                }
            ]
        }

    ],
    "END" : "\
    You take one last bow, your pBUST tits dangling for the crowd and blow them a kiss. You scoop up the money \
    that was thrown on the stage and exit behind the curtains.\
    ",
    "JOB_RESULTS" : [ ]

};