App.Data.JobData["DANCE_AMATEUR"] = {
    "ID": "DANCE_AMATEUR", 
    "TITLE": "Amateur Hour", 
    "GIVER": "DANCEHALL_JOBS", 
    "PAY" : 25,
    "RATING" : 2,
    "PHASES" : [ 0, 1, 2, 3 ],
    "DAYS"   : 0,
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
                { 
                    "TAG": "BEAUTY_CHECK", "TYPE" : "META", "NAME" : "BEAUTY", "DIFFICULTY" : 120,
                    "REWARD" : "MONEY", "VALUE" : 10
                },
                { 
                    "TAG": "STYLE_CHECK", "TYPE" : "META", "NAME": "DANCE_STYLE", "DIFFICULTY" : 120,
                    "REWARD" : "MONEY", "VALUE" : 10
                },
                { 
                    "TAG": "APPEARANCE_CHECK", "TYPE" : "FUNC", 
                    "NAME": function(p, o) {
                        return (o._Checks["BEAUTY_CHECK"]["RESULT"] + o._Checks["STYLE_CHECK"]["RESULT"])/2;
                    }
                }                
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
                    "REWARD" : "MONEY", "VALUE" : 10
                }                
            ],
            "POST" : [
                {
                    "TYPE" : "STAT_XP", "NAME" : "Fitness", "VALUE" : 10, "OPT" : "TAG_DANCE_CHECK_1"
                }
            ],
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
                    "REWARD" : "MONEY", "VALUE" : 10 
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
                {
                    "STRIPPING_CHECK_1" : 33,
                    "TEXT" : "\
                    They seem @@mostly unimpressed@@ by your actions.\
                    "
                },
                {
                    "STRIPPING_CHECK_1" : 66,
                    "TEXT" : "\
                    You get a @@few cheers and a bit of applause@@ for your display.\
                    "
                },
                {
                    "STRIPPING_CHECK_1" : 500,
                    "TEXT" : "\
                    The @@crowd shouts out for more@@ and encourages you to go further!\
                    "
                },

            ],
            "END" : "",

        },
        {
            "ID" : "Dance Scene 2",
            "TRIGGERS" :[ ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [
                { 
                    "TAG": "DANCE_CHECK_2", "TYPE" : "SKILL", "NAME" : "Dancing", "DIFFICULTY" : 50,
                    "REWARD" : "MONEY", "VALUE" : 10
                }                  
            ],
            "POST" : [
                {
                    "TYPE" : "STAT_XP", "NAME" : "Fitness", "VALUE" : 10, "OPT" : "TAG_DANCE_CHECK_2"
                }
            ],
            "START" : "\
            You stand up and pivot, facing your rear to the crowd and swaying your pASS butt at them. \
            <<if setup.player.IsEquipped(['Costume', 'Dress', 'Shirt'])>>\
            With a wiggle and a bump, you remove your pEQUIP(Costume|Dress|Shirt) and drop it to the stage. \
            <</if>>\
            <<if setup.player.IsEquipped('Pants')>>\
            You then bend over, swaying your ass from side to side as you wiggle out of your pEQUIP(Pants).\
            <</if>>\
            You slowly spin around to face the crowd, clad only in your pEQUIP(Bra|$bare chest), pEQUIP(Panty|$naked ass) \
            and a (fake) smile plastered on your face.  You time your movements to the music, undulating around \
            the stage in a series of exageratedly flirty movements, slapping your pASS ass and fake moaning as you grope \
            yourself.\
            ",
            "RESULTS" : [
                {
                    "DANCE_CHECK_2" : 33,
                    "TEXT" : "\
                    Unfortunately your performance is a little @@stilted and awkward@@ and the crowd doesn't seem \
                    to enjoy it very much.\
                    "
                },
                {
                    "DANCE_CHECK_2" : 66,
                    "TEXT" : "\
                    You get a @@few scattered cheers and some whistles@@ at your display. Not bad.\
                    "
                },
                {
                    "DANCE_CHECK_2" : 500,
                    "TEXT" : "\
                    The @@crowd shouts out for more@@ and encourages you to go further!\
                    "
                }
            ],
            "END" : ""
        },
        {
            "ID" : "Stripping Scene 2",
            "TRIGGERS" :[ ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [ 
                { 
                    "TAG": "STRIPPING_CHECK_2", "TYPE" : "SKILL", "NAME" : "Seduction", "DIFFICULTY" : 50,
                    "REWARD" : "MONEY", "VALUE" : 10 
                }                 
            ],
            "POST" : [],
            "START" : "\
            You waltz across the stage, your pEQUIP(Shoes|$bare feet) \
            <<if setup.player.IsEquipped('Shoes',true)>>clicking<<else>>slapping<</if>> \
            on the wooden surface. \
            <<if setup.player.IsEquipped('Bra',true)>>\
            With practiced ease you remove your pEQUIP(Bra), using your arm to cover your \
            nBUST and fling it over your shoulder. You dance that way for a minute, trying to tease \
            the crowd with a hint of your nipples. After a while, you remove your arm and thrust your \
            hands under your breasts and give them a firm shake. \
            <<else>>\
            You place your hands under your breasts and give them a firm shake at the crowd while \
            smiling broadly. <</if>>\
            Slowly you rub and tweak your nipples, your pLIPS lips making an exaggerated 'o' to delight them.\
            <<if setup.player.IsEquipped('Panty',true)>>\
            You bend over infront of your crowd, your hands going to the sides of your \
            pEQUIP(Panty). With exaggerated movements you slowly wiggle them down your legs until they \
            reach the floor and you casually step out of them, exposing your nPENIS to the crowd. \
            <<else>>\
            You do another exaggerated movement, wiggling your hips and flopping your nPENIS around \
            at the crowd. <</if>>\
            <<if setup.player.GetStat('BODY', 'Penis') <= 10>>\
            There is a smattering of laughter at the size of your member and a few shouts of 'Sissy!' \
            out in the crowd. It's humilating but you smile through it. <</if>>\
            With a final pirouette, you expose your pASS ass to the crowd and spread your cheeks at them\
            <<if setup.player.IsEquipped('Ass', true)>> exposing your pEQUIP(Ass), much to their delight. \
            <<else>>.<</if>>\
            Just as the music begins to finish up, you give yourself one last double handed slap on the \
            cheeks, making an loud (and you hope sexy) shout.\
            ",
            "RESULTS" : [
                {
                    "STRIPPING_CHECK_2" : 33,
                    "TEXT" : "\
                    Sadly, there isn't much applause and the crowd @@mostly ignores you@@ while seeming to \
                    be more interested in their drinks than your performance. What did you do wrong?\
                    "
                },
                {
                    "STRIPPING_CHECK_2" : 66,
                    "TEXT" : "\
                    There is a @@round of applause and a few cheers@@ from the crowd and some extra tips \
                    fly through the air as you finish your performance.\
                    "
                },
                {
                    "STRIPPING_CHECK_2" : 500,
                    "TEXT" : "\
                    There is a @@large amount of cheering and laughing@@ from the crowd at the end of your \
                    performance, some of them even going so far as to yell out for an encore! A large amount \
                    of tips shower down on the stage.\
                    "
                },
            ],
            "END" : "",
        },
        {
            "ID" : "Final Fixup",
            "TRIGGERS" :[ ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [
                { 
                    "TAG": "PERFORMANCE_BONUS", "TYPE" : "FUNC", 
                    "NAME": function(p, o) {
                        return (o._Checks["DANCE_CHECK_1"]["MOD"] + 
                               o._Checks["DANCE_CHECK_2"]["MOD"] +
                               o._Checks["STRIPPING_CHECK_1"]["MOD"] + 
                               o._Checks["STRIPPING_CHECK_2"]["MOD"])/4;
                    },
                    "VALUE" : 1
                } 
            ],
            "POST" : [
                { 
                    "TYPE" : "STAT_XP", "NAME" : "WillPower", "VALUE" : -20, "OPT" : 0 
                },
                { 
                    "TYPE" : "STAT_XP", "NAME" : "Perversion", "VALUE" : 50, "OPT" : "TAG_PERFORMANCE_BONUS"
                },
                { 
                    "TYPE" : "NPC_STAT", "NAME" : "Mood", "VALUE" : 5, "OPT" : "TAG_PERFORMANCE_BONUS"
                },
            ],
            "START" : "",
            "RESULTS" : [],
            "END" : ""
        }

    ],
    "END" : "\
    With your performance over, you take one last bow, your nBUST dangling for the crowd and blow them a kiss. \
    You scoop up the money that was thrown on the stage and exit behind the curtains, but not before \
    noticing that NPC_NAME was watching you dance... JOB_RESULTS\
    ",
    "JOB_RESULTS" : [ 
        {
            "PERFORMANCE_BONUS" : 0.33,
            "TEXT" : "they @@didn't look very impressed@@."
        },
        {
            "PERFORMANCE_BONUS" : 0.66,
            "TEXT" : "they @@looked slightly impressed@@."
        },
        {
            "PERFORMANCE_BONUS" : 1,
            "TEXT" : "they @@seemed to enjoy the show@@."
        },
        {
            "PERFORMANCE_BONUS" : 100,
            "TEXT" : "they @@looked rather pleased with your performance@@."
        }
    ]

};

App.Data.JobData["DANCE_PROFESSIONAL"] = {
    "ID": "DANCE_PROFESSIONAL", 
    "TITLE": "Strutting Your Stuff", 
    "GIVER": "DANCEHALL_JOBS", 
    "PAY" : 50,
    "RATING" : 3,
    "PHASES" : [ 0, 1, 2, 3 ],
    "DAYS"   : 0,
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
             "ID" : "Intro Scene",
             "TRIGGERS" :[ ],
             "TRIGGERS_ANY" : [ ],
             "CHECKS" : [ 
                 { 
                     "TAG": "BEAUTY_CHECK", "TYPE" : "META", "NAME" : "BEAUTY", "DIFFICULTY" : 120,
                     "REWARD" : "MONEY", "VALUE" : 10
                 },
                 { 
                     "TAG": "STYLE_CHECK", "TYPE" : "META", "NAME": "DANCE_STYLE", "DIFFICULTY" : 120,
                     "REWARD" : "MONEY", "VALUE" : 10
                 },
                 { 
                     "TAG": "APPEARANCE_CHECK", "TYPE" : "FUNC", 
                     "NAME": function(p, o) {
                         return (o._Checks["BEAUTY_CHECK"]["RESULT"] + o._Checks["STYLE_CHECK"]["RESULT"])/2;
                     }
                 }                
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
                     "TAG": "DANCE_CHECK_1", "TYPE" : "SKILL", "NAME" : "Dancing", "DIFFICULTY" : 70,
                     "REWARD" : "MONEY", "VALUE" : 20
                 }                
             ],
             "POST" : [
                {
                    "TYPE" : "STAT_XP", "NAME" : "Fitness", "VALUE" : 10, "OPT" : "TAG_DANCE_CHECK_1"
                }
             ],
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
                     "TAG": "STRIPPING_CHECK_1", "TYPE" : "SKILL", "NAME" : "Seduction", "DIFFICULTY" : 70,
                     "REWARD" : "MONEY", "VALUE" : 20 
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
                 {
                     "STRIPPING_CHECK_1" : 33,
                     "TEXT" : "\
                     They seem @@mostly unimpressed@@ by your actions.\
                     "
                 },
                 {
                     "STRIPPING_CHECK_1" : 66,
                     "TEXT" : "\
                     You get a @@few cheers and a bit of applause@@ for your display.\
                     "
                 },
                 {
                     "STRIPPING_CHECK_1" : 500,
                     "TEXT" : "\
                     The @@crowd shouts out for more@@ and encourages you to go further!\
                     "
                 },
 
             ],
             "END" : "",
 
         },
         {
             "ID" : "Dance Scene 2",
             "TRIGGERS" :[ ],
             "TRIGGERS_ANY" : [ ],
             "CHECKS" : [
                 { 
                     "TAG": "DANCE_CHECK_2", "TYPE" : "SKILL", "NAME" : "Dancing", "DIFFICULTY" : 70,
                     "REWARD" : "MONEY", "VALUE" : 20
                 }                  
             ],
             "POST" : [
                {
                    "TYPE" : "STAT_XP", "NAME" : "Fitness", "VALUE" : 10, "OPT" : "TAG_DANCE_CHECK_2"
                }
             ],
             "START" : "\
             You stand up and pivot, facing your rear to the crowd and swaying your pASS butt at them. \
             <<if setup.player.IsEquipped(['Costume', 'Dress', 'Shirt'])>>\
             With a wiggle and a bump, you remove your pEQUIP(Costume|Dress|Shirt) and drop it to the stage. \
             <</if>>\
             <<if setup.player.IsEquipped('Pants')>>\
             You then bend over, swaying your ass from side to side as you wiggle out of your pEQUIP(Pants).\
             <</if>>\
             You slowly spin around to face the crowd, clad only in your pEQUIP(Bra|$bare chest), pEQUIP(Panty|$naked ass) \
             and a (fake) smile plastered on your face.  You time your movements to the music, undulating around \
             the stage in a series of exageratedly flirty movements, slapping your pASS ass and fake moaning as you grope \
             yourself.\
             ",
             "RESULTS" : [
                 {
                     "DANCE_CHECK_2" : 33,
                     "TEXT" : "\
                     Unfortunately your performance is a little @@stilted and awkward@@ and the crowd doesn't seem \
                     to enjoy it very much.\
                     "
                 },
                 {
                     "DANCE_CHECK_2" : 66,
                     "TEXT" : "\
                     You get a @@few scattered cheers and some whistles@@ at your display. Not bad.\
                     "
                 },
                 {
                     "DANCE_CHECK_2" : 500,
                     "TEXT" : "\
                     The @@crowd shouts out for more@@ and encourages you to go further!\
                     "
                 }
             ],
             "END" : ""
         },
         {
             "ID" : "Stripping Scene 2",
             "TRIGGERS" :[ ],
             "TRIGGERS_ANY" : [ ],
             "CHECKS" : [ 
                 { 
                     "TAG": "STRIPPING_CHECK_2", "TYPE" : "SKILL", "NAME" : "Seduction", "DIFFICULTY" : 70,
                     "REWARD" : "MONEY", "VALUE" : 20 
                 }                 
             ],
             "POST" : [],
             "START" : "\
             You waltz across the stage, your pEQUIP(Shoes|$bare feet) \
             <<if setup.player.IsEquipped('Shoes',true)>>clicking<<else>>slapping<</if>> \
             on the wooden surface. \
             <<if setup.player.IsEquipped('Bra',true)>>\
             With practiced ease you remove your pEQUIP(Bra), using your arm to cover your \
             nBUST and fling it over your shoulder. You dance that way for a minute, trying to tease \
             the crowd with a hint of your nipples. After a while, you remove your arm and thrust your \
             hands under your breasts and give them a firm shake. \
             <<else>>\
             You place your hands under your breasts and give them a firm shake at the crowd while \
             smiling broadly. <</if>>\
             Slowly you rub and tweak your nipples, your pLIPS lips making an exaggerated 'o' to delight them.\
             <<if setup.player.IsEquipped('Panty',true)>>\
             You bend over infront of your crowd, your hands going to the sides of your \
             pEQUIP(Panty). With exaggerated movements you slowly wiggle them down your legs until they \
             reach the floor and you casually step out of them, exposing your nPENIS to the crowd. \
             <<else>>\
             You do another exaggerated movement, wiggling your hips and flopping your nPENIS around \
             at the crowd. <</if>>\
             <<if setup.player.GetStat('BODY', 'Penis') <= 10>>\
             There is a smattering of laughter at the size of your member and a few shouts of 'Sissy!' \
             out in the crowd. It's humilating but you smile through it. <</if>>\
             With a final pirouette, you expose your pASS ass to the crowd and spread your cheeks at them\
             <<if setup.player.IsEquipped('Ass', true)>> exposing your pEQUIP(Ass), much to their delight. \
             <<else>>.<</if>>\
             Just as the music begins to finish up, you give yourself one last double handed slap on the \
             cheeks, making an loud (and you hope sexy) shout.\
             ",
             "RESULTS" : [
                 {
                     "STRIPPING_CHECK_2" : 33,
                     "TEXT" : "\
                     Sadly, there isn't much applause and the crowd @@mostly ignores you@@ while seeming to \
                     be more interested in their drinks than your performance. What did you do wrong?\
                     "
                 },
                 {
                     "STRIPPING_CHECK_2" : 66,
                     "TEXT" : "\
                     There is a @@round of applause and a few cheers@@ from the crowd and some extra tips \
                     fly through the air towards the stage.\
                     "
                 },
                 {
                     "STRIPPING_CHECK_2" : 500,
                     "TEXT" : "\
                     There is a @@large amount of cheering and laughing@@ from the crowd. A large amount \
                     of tips shower down on the stage and a few audience members shout for an encore!\
                     "
                 },
             ],
             "END" : "",
         },
         {
             "ID" : "Optional Dildo Scene",
             "TRIGGERS" : [
                 {
                     "TYPE" : "HAS_ITEM", "NAME" : "QUEST/14 inch purple dildo"
                 },
                 {
                     "TYPE" : "STAT_CORE", "NAME" : "Perversion", "VALUE" : 50, "CONDITION" : "gte", "VALUE" : 50
                 }
             ],
             "TRIGGERS_ANY" : [ ],
             "CHECKS" : [
                { 
                    "TAG": "BLOWJOB_CHECK", "TYPE" : "SKILL", "NAME" : "BlowJobs", "DIFFICULTY" : 100,
                    "REWARD" : "MONEY", "VALUE" : 50
                }   
             ],
             "POST" : [
                 { 
                     "TYPE" : "STAT_XP", "NAME" : "Perversion", "VALUE" : 50
                 }
             ],
             "START" : "\
             Something about the thrill of performing naked on stage for a bunch of horny men resonates deeply \
             within your corrupted mind. Before the performance you had placed the @@color:purple;14 inch purple dildo@@ \
             that you found in GF_NAME's wardrobe nearby and now you know just how to use it...\n\n\
             A small cheer goes up from the crowd as you produce the gigantic rubber phallus and start rubbing it up \
             and down your body. You place it between your nBUST in a simulated titfuck while you \
             slather the tip with your tongue and mouth. Such a lewd act of behavior gets you a giant cheer and spurred \
             on you decide to take your act a bit further. You move to the side so that the audience can see your \
             profile and arch your head back, then you slowly start to swallow the massive dildo.\
             ",
             "RESULTS" : [
                 {
                     "BLOWJOB_CHECK" : 33,
                     "TEXT" : "\
                     You do your best to get the monster down your throat, but after a minute of struggling in vain \
                     you are forced to give up. The crowd @@seems somewhat dissapointed@@ but at least you tried."
                 },
                 {
                    "BLOWJOB_CHECK" : 66,
                    "TEXT" : "\
                    You do your best to get the monster down your throat, and after a minute of struggling you feel \
                    it's simulated plastic balls touching your chin. The crowd @@applauds your efforts@@ and marvels \
                    that they can see the distended buldge in your neck as you've swallowed the giant cock to the hilt!"
                },
                {
                    "BLOWJOB_CHECK" : 500,
                    "TEXT" : "\
                    You swallow the simulated dong with an ease that amazes the crowd. With a slight hum through your nose \
                    you begin to rapidly work the dildo in and out of your throat, your neck distending with every thrust \
                    and causing the @@crowd to go wild with excitement@@!"
                }
             ],
             "END" : "\
             Finally, you pull the dildo out of your mouth with a large 'plop' sound and smile, trails of drools \
             dripping from your chin and running in between your breasts."
         },
         {
             "ID" : "Final Fixup",
             "TRIGGERS" :[ ],
             "TRIGGERS_ANY" : [ ],
             "CHECKS" : [
                 { 
                     "TAG": "PERFORMANCE_BONUS", "TYPE" : "FUNC", 
                     "NAME": function(p, o) {
                         return (o._Checks["DANCE_CHECK_1"]["MOD"] + 
                                o._Checks["DANCE_CHECK_2"]["MOD"] +
                                o._Checks["STRIPPING_CHECK_1"]["MOD"] + 
                                o._Checks["STRIPPING_CHECK_2"]["MOD"])/4;
                     },
                     "VALUE" : 1
                 } 
             ],
             "POST" : [
                 { 
                     "TYPE" : "STAT_XP", "NAME" : "WillPower", "VALUE" : -20, "OPT" : 0 
                 },
                 { 
                     "TYPE" : "STAT_XP", "NAME" : "Perversion", "VALUE" : 50, "OPT" : "TAG_PERFORMANCE_BONUS"
                 },
                 { 
                     "TYPE" : "NPC_STAT", "NAME" : "Mood", "VALUE" : 5, "OPT" : "TAG_PERFORMANCE_BONUS"
                 },
             ],
             "START" : "",
             "RESULTS" : [],
             "END" : ""
         }
 
     ],
     "END" : "\
     With your performance over, you take one last bow, your nBUST dangling for the crowd and blow them a kiss. \
     You scoop up the money that was thrown on the stage and exit behind the curtains, but not before \
     noticing that NPC_NAME was watching you dance... JOB_RESULTS\
     ",
     "JOB_RESULTS" : [ 
         {
             "PERFORMANCE_BONUS" : 0.33,
             "TEXT" : "they @@didn't look very impressed@@."
         },
         {
             "PERFORMANCE_BONUS" : 0.66,
             "TEXT" : "they @@looked slightly impressed@@."
         },
         {
             "PERFORMANCE_BONUS" : 1,
             "TEXT" : "they @@seemed to enjoy the show@@."
         },
         {
             "PERFORMANCE_BONUS" : 100,
             "TEXT" : "they @@looked rather pleased with your performance@@."
         }
     ]

};

App.Data.JobData["DANCE_EXPERT"] = {
    "ID": "DANCE_EXPERT", 
    "TITLE": "Bringing Down the House", 
    "GIVER": "DANCEHALL_JOBS", 
    "PAY" : 75,
    "RATING" : 5,
    "PHASES" : [ 0, 1, 2, 3 ],
    "DAYS"   : 0,
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
             "ID" : "Intro Scene",
             "TRIGGERS" :[ ],
             "TRIGGERS_ANY" : [ ],
             "CHECKS" : [ 
                 { 
                     "TAG": "BEAUTY_CHECK", "TYPE" : "META", "NAME" : "BEAUTY", "DIFFICULTY" : 120,
                     "REWARD" : "MONEY", "VALUE" : 10
                 },
                 { 
                     "TAG": "STYLE_CHECK", "TYPE" : "META", "NAME": "DANCE_STYLE", "DIFFICULTY" : 120,
                     "REWARD" : "MONEY", "VALUE" : 10
                 },
                 { 
                     "TAG": "APPEARANCE_CHECK", "TYPE" : "FUNC", 
                     "NAME": function(p, o) {
                         return (o._Checks["BEAUTY_CHECK"]["RESULT"] + o._Checks["STYLE_CHECK"]["RESULT"])/2;
                     }
                 }                
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
                     "TAG": "DANCE_CHECK_1", "TYPE" : "SKILL", "NAME" : "Dancing", "DIFFICULTY" : 100,
                     "REWARD" : "MONEY", "VALUE" : 30
                 }                
             ],
             "POST" : [
                {
                    "TYPE" : "STAT_XP", "NAME" : "Fitness", "VALUE" : 10, "OPT" : "TAG_DANCE_CHECK_1"
                }
             ],
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
                     "TAG": "STRIPPING_CHECK_1", "TYPE" : "SKILL", "NAME" : "Seduction", "DIFFICULTY" : 100,
                     "REWARD" : "MONEY", "VALUE" : 30 
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
                 {
                     "STRIPPING_CHECK_1" : 33,
                     "TEXT" : "\
                     They seem @@mostly unimpressed@@ by your actions.\
                     "
                 },
                 {
                     "STRIPPING_CHECK_1" : 66,
                     "TEXT" : "\
                     You get a @@few cheers and a bit of applause@@ for your display.\
                     "
                 },
                 {
                     "STRIPPING_CHECK_1" : 500,
                     "TEXT" : "\
                     The @@crowd shouts out for more@@ and encourages you to go further!\
                     "
                 },
 
             ],
             "END" : "",
 
         },
         {
             "ID" : "Dance Scene 2",
             "TRIGGERS" :[ ],
             "TRIGGERS_ANY" : [ ],
             "CHECKS" : [
                 { 
                     "TAG": "DANCE_CHECK_2", "TYPE" : "SKILL", "NAME" : "Dancing", "DIFFICULTY" : 100,
                     "REWARD" : "MONEY", "VALUE" : 30
                 }                  
             ],
             "POST" : [
                {
                    "TYPE" : "STAT_XP", "NAME" : "Fitness", "VALUE" : 10, "OPT" : "TAG_DANCE_CHECK_2"
                }
             ],
             "START" : "\
             You stand up and pivot, facing your rear to the crowd and swaying your pASS butt at them. \
             <<if setup.player.IsEquipped(['Costume', 'Dress', 'Shirt'])>>\
             With a wiggle and a bump, you remove your pEQUIP(Costume|Dress|Shirt) and drop it to the stage. \
             <</if>>\
             <<if setup.player.IsEquipped('Pants')>>\
             You then bend over, swaying your ass from side to side as you wiggle out of your pEQUIP(Pants).\
             <</if>>\
             You slowly spin around to face the crowd, clad only in your pEQUIP(Bra|$bare chest), pEQUIP(Panty|$naked ass) \
             and a (fake) smile plastered on your face.  You time your movements to the music, undulating around \
             the stage in a series of exageratedly flirty movements, slapping your pASS ass and fake moaning as you grope \
             yourself.\
             ",
             "RESULTS" : [
                 {
                     "DANCE_CHECK_2" : 33,
                     "TEXT" : "\
                     Unfortunately your performance is a little @@stilted and awkward@@ and the crowd doesn't seem \
                     to enjoy it very much.\
                     "
                 },
                 {
                     "DANCE_CHECK_2" : 66,
                     "TEXT" : "\
                     You get a @@few scattered cheers and some whistles@@ at your display. Not bad.\
                     "
                 },
                 {
                     "DANCE_CHECK_2" : 500,
                     "TEXT" : "\
                     The @@crowd shouts out for more@@ and encourages you to go further!\
                     "
                 }
             ],
             "END" : ""
         },
         {
             "ID" : "Stripping Scene 2",
             "TRIGGERS" :[ ],
             "TRIGGERS_ANY" : [ ],
             "CHECKS" : [ 
                 { 
                     "TAG": "STRIPPING_CHECK_2", "TYPE" : "SKILL", "NAME" : "Seduction", "DIFFICULTY" : 100,
                     "REWARD" : "MONEY", "VALUE" : 30 
                 }                 
             ],
             "POST" : [],
             "START" : "\
             You waltz across the stage, your pEQUIP(Shoes|$bare feet) \
             <<if setup.player.IsEquipped('Shoes',true)>>clicking<<else>>slapping<</if>> \
             on the wooden surface. \
             <<if setup.player.IsEquipped('Bra',true)>>\
             With practiced ease you remove your pEQUIP(Bra), using your arm to cover your \
             nBUST and fling it over your shoulder. You dance that way for a minute, trying to tease \
             the crowd with a hint of your nipples. After a while, you remove your arm and thrust your \
             hands under your breasts and give them a firm shake. \
             <<else>>\
             You place your hands under your breasts and give them a firm shake at the crowd while \
             smiling broadly. <</if>>\
             Slowly you rub and tweak your nipples, your pLIPS lips making an exaggerated 'o' to delight them.\
             <<if setup.player.IsEquipped('Panty',true)>>\
             You bend over infront of your crowd, your hands going to the sides of your \
             pEQUIP(Panty). With exaggerated movements you slowly wiggle them down your legs until they \
             reach the floor and you casually step out of them, exposing your nPENIS to the crowd. \
             <<else>>\
             You do another exaggerated movement, wiggling your hips and flopping your nPENIS around \
             at the crowd. <</if>>\
             <<if setup.player.GetStat('BODY', 'Penis') <= 10>>\
             There is a smattering of laughter at the size of your member and a few shouts of 'Sissy!' \
             out in the crowd. It's humilating but you smile through it. <</if>>\
             With a final pirouette, you expose your pASS ass to the crowd and spread your cheeks at them\
             <<if setup.player.IsEquipped('Ass', true)>> exposing your pEQUIP(Ass), much to their delight. \
             <<else>>.<</if>>\
             Just as the music begins to finish up, you give yourself one last double handed slap on the \
             cheeks, making an loud (and you hope sexy) shout.\
             ",
             "RESULTS" : [
                {
                    "STRIPPING_CHECK_2" : 33,
                    "TEXT" : "\
                    Sadly, there isn't much applause and the crowd @@mostly ignores you@@ while seeming to \
                    be more interested in their drinks than your performance. What did you do wrong?\
                    "
                },
                {
                    "STRIPPING_CHECK_2" : 66,
                    "TEXT" : "\
                    There is a @@round of applause and a few cheers@@ from the crowd and some extra tips \
                    fly through the air towards the stage.\
                    "
                },
                {
                    "STRIPPING_CHECK_2" : 500,
                    "TEXT" : "\
                    There is a @@large amount of cheering and laughing@@ from the crowd. A large amount \
                    of tips shower down on the stage and a few audience members shout for an encore!\
                    "
                },
             ],
             "END" : "",
         },
         {
            "ID" : "Optional Dildo Scene",
            "TRIGGERS" : [
                {
                    "TYPE" : "HAS_ITEM", "NAME" : "QUEST/14 inch purple dildo"
                },
                {
                    "TYPE" : "STAT_CORE", "NAME" : "Perversion", "VALUE" : 60, "CONDITION" : "gte", "VALUE" : 70
                }
            ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [
               { 
                   "TAG": "ASSFUCK_CHECK", "TYPE" : "SKILL", "NAME" : "AssFucking", "DIFFICULTY" : 100,
                   "REWARD" : "MONEY", "VALUE" : 100
               }   
            ],
            "POST" : [
                { 
                    "TYPE" : "STAT_XP", "NAME" : "Perversion", "VALUE" : 50
                }
            ],
            "START" : "\
            Before the performance you had arrainged a special treat with the help of one of the other dancers. \
            You nod subtly to the side of the stage and a young girl with giant tits steps up brandishing the \
            @@color:purple;14 inch purple dildo@@ that once belonged to your girlfriend GF_NAME. The crowd \
            gasps in shock as they anticipate what they are about to witness, their surprise bringing an \
            amused smile to your face.\n\n\
            You kneel in front of the dancer as she holds the dildo out infront of her like it's her own cock. \
            With practiced movements you felate the giant purple monster, coating it with your saliva. Once \
            satisified, you stand up and lean over, bracing yourself against the stripper pole. The dancer takes \
            this movement as it's intended and places the head of the giant phallus against your sphincter.\n\n\
            The crowd collectively holds it's breath as you pause for a moment, and then with force you start \
            pushing back against the fake cock.\
            ",
            "RESULTS" : [
                {
                    "ASSFUCK_CHECK" : 33,
                    "TEXT" : "\
                    You do your best to get the monster up your ass, but only manage to swallow about half of it. \
                    The dancer you enlisted gives you a few solid thrusts, each one eliciting a gasp and a small \
                    scream from you. It's not quite what you intended and the crowd @@doesn't look amused@@."
                },
                {
                   "ASSFUCK_CHECK" : 66,
                   "TEXT" : "\
                   You struggle valiantly against the giant dong, wiggling your ass from side to side as you slowly \
                   swallow it up your backside. Within a minute the majority of it's 14 inches is buried deeply in \
                   your bowels and you relax, giving out a small sigh. It doesn't last long before the dancer behind \
                   you starts to move the dildo in and out of your rectum, each thrust causing you to elicit a small \
                   gasp and moan. The crowd is @@eating this up@@ and cheering while you get fucked on stage."
               },
               {
                   "ASSFUCK_CHECK" : 500,
                   "TEXT" : "\
                   Like the whore you are, you take the giant dildo up your backside with one long fluid movement. \
                   You turn your head and smile at the girl holding the root of the monster and mouth the words \
                   'do it hard' to her. She nods back to you and immediately starts reaming your butthole with the \
                   fake cock. The feeling is intense and you give yourself over to your natural instincts, gasping and \
                   moaning as the beast fucks you hard. The crowd is eating the entire act up, particularly the fact \
                   that you're obviously enjoying it. Within minutes you're thrashing around as the cock mercilessly \
                   ravages your backside, culiminating in a massive sissygasm that sends cum flying across the stage and \
                   eliciting a @@massive cheer from the crowd@@!"
               }
            ],
            "END" : "\
            Finally, your accomplice pulls the dildo out of your ass with a large 'plop' and you turn around to face the \
            crowd with a smile."
        },
         {
             "ID" : "Final Fixup",
             "TRIGGERS" :[ ],
             "TRIGGERS_ANY" : [ ],
             "CHECKS" : [
                 { 
                     "TAG": "PERFORMANCE_BONUS", "TYPE" : "FUNC", 
                     "NAME": function(p, o) {
                         return (o._Checks["DANCE_CHECK_1"]["MOD"] + 
                                o._Checks["DANCE_CHECK_2"]["MOD"] +
                                o._Checks["STRIPPING_CHECK_1"]["MOD"] + 
                                o._Checks["STRIPPING_CHECK_2"]["MOD"])/4;
                     },
                     "VALUE" : 1
                 } 
             ],
             "POST" : [
                 { 
                     "TYPE" : "STAT_XP", "NAME" : "WillPower", "VALUE" : -20, "OPT" : 0 
                 },
                 { 
                     "TYPE" : "STAT_XP", "NAME" : "Perversion", "VALUE" : 50, "OPT" : "TAG_PERFORMANCE_BONUS"
                 },
                 { 
                     "TYPE" : "NPC_STAT", "NAME" : "Mood", "VALUE" : 5, "OPT" : "TAG_PERFORMANCE_BONUS"
                 },
             ],
             "START" : "",
             "RESULTS" : [],
             "END" : ""
         }
 
     ],
     "END" : "\
     With your performance over, you take one last bow, your nBUST dangling for the crowd and blow them a kiss. \
     You scoop up the money that was thrown on the stage and exit behind the curtains, but not before \
     noticing that NPC_NAME was watching you dance... JOB_RESULTS\
     ",
     "JOB_RESULTS" : [ 
         {
             "PERFORMANCE_BONUS" : 0.33,
             "TEXT" : "they @@didn't look very impressed@@."
         },
         {
             "PERFORMANCE_BONUS" : 0.66,
             "TEXT" : "they @@looked slightly impressed@@."
         },
         {
             "PERFORMANCE_BONUS" : 1,
             "TEXT" : "they @@seemed to enjoy the show@@."
         },
         {
             "PERFORMANCE_BONUS" : 100,
             "TEXT" : "they @@looked rather pleased with your performance@@."
         }
     ]

};