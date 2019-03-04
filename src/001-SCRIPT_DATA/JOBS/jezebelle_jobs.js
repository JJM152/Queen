App.Data.JobData["JEZEBELLE_TUTOR_1"] = {
    "ID": "JEZEBELLE_TUTOR_1", 
    "TITLE": "Dance Instruction - Level 1", 
    "GIVER": "Jezebelle", 
    "PAY" : 0,
    "RATING" : 3,
    "PHASES" : [ 1, 2, 3 ],
    "DAYS"   : 1,
    "HIDDEN" : false,
    "COST" : [
        { 
            "TYPE" : "TIME",  "VALUE" : 1 
        },
        { 
            "TYPE" : "STAT",  "NAME" : "Energy", "VALUE" : 2 
        },
        {
            "TYPE" : "MONEY", "VALUE" : 100
        }
    ],
    "REQUIREMENTS" : [
        { 
            "TYPE" : "SKILL", "NAME" : "Dancing", "VALUE" : 40, "CONDITION" : "lte"
        },
        {
            "TYPE" : "STYLE_CATEGORY", "NAME" : "Sexy Dancer", "VALUE" : 40, "CONDITION" : "gte"
        }

    ],
    "INTRO" : "\
    NPC_NAME says, s(Yes, I occasionally take on new students. Be sure to be motivated and of course as \
    always, wear the proper attire!)\
    ",
    "START" : "\
    NPC_NAME leads you to a seperate group of apartments attached to the dance hall, one of the rooms has \
    been set up as a cut down version of the main stage with various poles, various hanging ladders and \
    other contraptions set up, they must all be used as part of the performance art?\n\n\
    NPC_NAME says s(This is my private studio, here we will work on the two foundational skills for all \
    dancing - grace and passion!) She punctuates her statement with a clap of her hands and then directs \
    you through a series of warm up exercises designed to increase the flexibility of your limbs. After this, \
    she begins the course of instruction.\
    ",
    "SCENES" : [
        {
            "ID" : "Dance Instruction - 1",
            "TRIGGERS" :[ ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [
                {
                    "TAG" : "DANCING_CHECK_1", "TYPE" : "SKILL", "NAME" : "Dancing", "DIFFICULTY" : 100
                }

            ],
            "POST" : [
                {
                    "TYPE" : "SKILL_XP", "NAME" : "Dancing", "VALUE" :  50
                },
                {
                    "TYPE" : "SKILL_XP", "NAME" : "Seduction", "VALUE" :  50
                }
            ],
            "START" : "\
            NPC_NAME starts off by showing you a series of beginning dance moves and flourishes that involve \
            accentuating your body in a series of sexy poses. She repeats the instruction several times until \
            you have memorized the moves and then goes over to the piano and begins to play a tune. \
            ",
            "RESULTS" : [
                {
                    "DANCING_CHECK_1": 33, 
                    "TEXT" : "\
                    You try to stroll across the stage in a sexy manner, but your pEQUIP(Shoes|$bare feet) \
                    somehow manage to catch on a loose board, sending you teetering towards the ground. You \
                    can hear NPC_NAME gasp as you halt your descent with your hands, mildly spraining your wrist. \
                    With some effort you rise to your feet and attempt to complete the rest of the routine, but \
                    it's clear that NPC_NAME is @@not impressed with your skills@@ so far. \
                    "
                },
                {
                    "DANCING_CHECK_1": 66, 
                    "TEXT" : "\
                    You take your time moving across the stage, \
                    <<if setup.player.IsEquipped('Shoes', true)>>\
                    your pEQUIP(Shoes) making a clacking sound on the boards.\
                    <<else>>\
                    your bare feet making a slapping sound on the boards.<</if>> \
                    The music makes a turn in tempo and you grab onto one of the poles on the stage and \
                    launch yourself into a simple spin. The pole is on some kind of bearing, so it rotates \
                    freely, giving you more momentum than you anticpate, throwing off your routine slightly. \
                    That being said, NPC_NAME seems to @@mostly approve@@ of your performance.\
                    "
                },
                {
                    "DANCING_CHECK_1": 500, 
                    "TEXT" : "\
                    You strut across the stage, your pASS arse wiggling in time to the beat of the music, \
                    <<if setup.player.IsEquipped('Shoes', true)>>\
                    your pEQUIP(Shoes) making a clacking sound on the boards.\
                    <<else>>\
                    your bare feet making a slapping sound on the boards.<</if>> \
                    The music makes a turn in tempo and you grab onto one of the poles on the stage and \
                    launch yourself into a simple spin. The pole is on some kind of bearing, so it rotates \
                    freely, you leverage the momentum to extend your spin, leaning backwards and doing your \
                    best to expose your nBUST to the imaginary audience. \
                    Looking over at the piano, you can see NPC_NAME @@smiling at you@@.\
                    "
                }   
            ],
            "END" : "\n\n\
            The music comes to a stop and NPC_NAME gives you a few more pointers after watching you perform \
            they're extremely valuable and you feel that you've definitely learned something. \
            "
        }
    ],
    "END" : "",
    "JOB_RESULTS" : []
};