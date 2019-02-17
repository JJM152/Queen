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
            "ID" : "Intro Scene",
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
            ],
            "END" : ""
        },
        {
            "ID" : "Dance Scene 1",
            "TRIGGERS" :[ ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [
                { 
                    "TAG": "DANCE_CHECK_1", "TYPE" : "SKILL", "NAME" : "Dancing", "DIFFICULTY" : 50,
                    "REWARD" : "MONEY", "VALUE" : 10, "OPT" : "DANCE_CHECK_1" 
                }                
            ],
            "POST" : [],
            "START" : "\
            In the middle of the stage is a large revolving pole that is used to perform acrobatic stunts. You \
            saunter towards it, doing your best to exaggerate the gait of your pHIPS hips and accentuate your \
            pASS ass. Once there, you lean over and place your hands on the pole, smile at the crowd and attempt \
            a simple move.\
            ",
            "RESULTS" : [
                {
                    "DANCE_CHECK_1" : 33,
                    "TEXT" : "\
                    With a twist of your hips, you lay one leg across the pole and attempt to dive into a simple \
                    spin. At first it goes well enough, but on the second revolution you lose your grip and \
                    @@tumble uncerimonially to the floor@@.\
                    "
                },
                {
                    "DANCE_CHECK_1" : 66,
                    "TEXT" : "\
                    With a twist of your hips, you lay one leg across the pole and attempt to dive into a simple \
                    spin. You do your best to arch your back and display your nBUST to the crowd, hoping to \
                    gain some favor. Your efforts are rewarded with a @@smattering of applause@@.\
                    "
                },
                {
                    "DANCE_CHECK_1" : 500,
                    "TEXT" : "\
                    With a twist of your hips, you lay one leg across the pole and attempt to dive into a simple \
                    spin. You climb as far as you can up on the pole, wrapping your legs around it and then \
                    leaning backwards, your nBUST on display as you rotate in front of the crowd. Your skill \
                    earns you a @@healthy round of applause and cheers@@ from the crowd.\
                    "
                },

            ],
            "END" : "\
            The tempo of the music picks up and you strut towards the front of the stage, dropping to your knees \
            infront of the crowd and running your hands up your body to your hair.\
            "
        },
        {
            "ID" : "Stripping Scene 1",
            "TRIGGERS" :[ ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [  
                { 
                    "TAG": "STRIPPING_CHECK_1", "TYPE" : "SKILL", "NAME" : "Seduction", "DIFFICULTY" : 50,
                    "REWARD" : "MONEY", "VALUE" : 10, "OPT" : "STRIPPING_CHECK_1" 
                }                
            ],
            "POST" : [],
            "START" : "\
            You start the sway side to side, grinding yourself against the stage on your knees while your hands \
            roam up and down your body. \
            <<if setup.player.IsEquipped(['Costume', 'Dress', 'Shirt'], true)>>\
            With deft moves, you undo the top of your pEQUIP(Costume|Dress|Shirt) \
            and expose your pEQUIP(Bra|$naked flesh). <</if>>\
            <<if setup.player.IsEquipped('Bra', true)>>\
            You grope your pBUST chest through your pEQUIP(Bra)<<else>>\
            You grope your pBUST chest<</if>>, roughly shaking and fondling it for \
            the audience.\
            ",
            "RESULTS" : [

            ],
            "END" : "",

        },
        {
            "ID" : "Dance Scene 2",
            "TRIGGERS" :[ ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [                
            ],
            "POST" : [],
            "START" : "",
            "END" : "",
            "RESULTS" : [

            ]
        },
        {
            "ID" : "Stripping Scene 2",
            "TRIGGERS" :[ ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [                
            ],
            "POST" : [],
            "START" : "",
            "END" : "",
            "RESULTS" : [

            ]
        },


    ],
    "END" : "\
    You take one last bow, your nBUST dangling for the crowd and blow them a kiss. You scoop up the money \
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
    You take one last bow, your nBUST dangling for the crowd and blow them a kiss. You scoop up the money \
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
    You take one last bow, your nBUST dangling for the crowd and blow them a kiss. You scoop up the money \
    that was thrown on the stage and exit behind the curtains.\
    ",
    "JOB_RESULTS" : [ ]

};