App.Data.JobData["SHILLING_CUSTOMER_1"] = {
    "ID": "SHILLING_CUSTOMER_1", 
    "TITLE": "Private Dance - Regular Customer", 
    "GIVER": "Shilling", 
    "PAY" : 25,
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
    NPC_NAME says, s(If you're looking to earn some extra coin, I have some regular customers \
    who are looking for a private dance with a little 'extra service')\
    ",
    "START" : "\
    NPC_NAME leads you to the back of the dance hall, a dimly lit corridor lined with small private \
    compartments, each one covered with a thick velvet curtain for privacy. He stops abruptly in front \
    of one of them and makes a motion with his hand beckoning you to enter.\
    ",
    "SCENES" : [
        {
            "ID" : "Lapdance Scene",
            "TRIGGERS" :[ ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [
                {
                    "TAG" : "SEDUCTION_CHECK_1", "TYPE" : "SKILL", "NAME" : "Seduction", "DIFFICULTY" : 100,
                    "REWARD" : "MONEY", "VALUE" : 50
                },
                {
                    "TAG" : "DANCING_CHECK_1", "TYPE" : "SKILL", "NAME" : "Dancing", "DIFFICULTY" : 100, 
                    "REWARD" : "MONEY", "VALUE" : 50
                }

            ],
            "POST" : [],
            "START" : "\
            Deftly, you enter the compartment, the thick drapes swishing closed behind you. Within the dimly lit \
            confines you see a well dressed man sitting on a long bench. His clothing marks him as a commoner, but \
            one of the upper classes and his fit and well muscled body \
            <<if setup.player.GetStat('STAT','Femininity') >= 50>>\
            is just the kind you like... wait, when did you start thinking of men that way? \
            <<else>>\
            means he must be a tradesman of some kind. <</if>>\
            The two of you exchange a glance and a smile and then suddenly the music in the main hall starts up.\n\n\
            ",
            "RESULTS" : [
                // Seduction results.
                {
                    "SEDUCTION_CHECK_1": 33, 
                    "TEXT" : "\
                    You try to stroll up to the customer in a sexy manner, but your pEQUIP(Shoes|$bare feet) \
                    somehow manage to catch on a carpet, sending you teetering towards the man. It's only \
                    through a pure stroke of luck that you don't end up cracking your skull open. The customer \
                    let's out a nervous chuckle, but he @@doesn't look particularly amused@@. \
                    Doing your best to recover you walk (carefully!) up to the customer and place your \
                    pASS arse in his lap to begin your dance.\n\n" 
                },
                {
                    "SEDUCTION_CHECK_1": 66, 
                    "TEXT" : "\
                    You take your time making your entrance, rolling your hips to the beat of the music and \
                    running your hands up and down your body. The customer @@seems interested in your \
                    performance@@ and even more so when you turn around and bend over, wiggling your \
                    pASS derriere in his face.\n\n" 
                },
                {
                    "SEDUCTION_CHECK_1": 500, 
                    "TEXT" : "\
                    You strut towards the man, your pASS arse wiggling in time to the beat of the music. Once \
                    in front of him you quickly turn around, still shaking your bottom in time and rubbing it \
                    on his legs and lap. With practiced ease, you reverse your position and straddle him on \
                    the bench, your nBUST \
                    <<if setup.player.IsEquipped(['Costume', 'Dress', 'Shirt'])>>\
                    practically spilling out of your pEQUIP(Costume|Dress|Shirt) and onto his face. \
                    <<else>>\
                    shaking and rubbing against his face. <</if>>\
                    Judging by the massive errection you feel poking against your thigh, it seems that the \
                    customer @@enjoyed this very much@@!\n\n"
                },
                {
                    "DANCING_CHECK_1": 33, 
                    "TEXT" : "\
                    You grind your sissy bottom against the mans' lap so awkwardly it's almost embarassing. \
                    He @@doesn't seem to be enjoying it@@ so you switch it up to climbing all over him and \
                    mashing your nBUST in his face. This as well doesn't really elicit much of a response. \
                    Oh well, at least you're trying?" 
                },
                {
                    "DANCING_CHECK_1": 66, 
                    "TEXT" : "\
                    You grind your sissy bottom against the mans' lap in a lurid and overly sensual fashion. \
                    It doesn't take long for you to feel his body giving you it's natural response and you almost \
                    lose your focus for a moment trying to mentally picture how massive this mans tool must be. \
                    The music picks up and you switch positions again to practically riding his lap, your \
                    pBUST carassing his head while you run your hands up and down his arms. Judging by the \
                    shallow breathing, he seems to be @@rather enjoying your performance@@." 
                },
                {
                    "DANCING_CHECK_1": 500, 
                    "TEXT" : "\
                    You grind your sissy bottom against the mans's lap in a lurid and overly sensual fashion. \
                    It doesn't take long for you to feel his body giving you it's natural response and you almost \
                    lose your focus for a moment trying to mentally picture how massive this mans tool must be. \
                    Devlishly, you make sure to guide your movements so the length of his cock is sliding between \
                    your arse cheeks, eliciting several low volume moans from the man. \
                    The music picks up and you switch positions again to practically riding his lap, your \
                    pBUST carassing his head while you run your hands up and down his arms. \
                    You reach out and take is hands, guiding them up to your chest. He quickly gets the hint \
                    and starts massaging your melons while you gasp and seductively bite your lip. \
                    Judging by the size of the errection pressing against your bottom, it appears the customer \
                    @@is really enjoying your performance@@!"
                },
                
            ],
            "END" : ""
        },
        {
            "ID" : "Handjob Scene",
            "TRIGGERS" :[ 
                {
                    "TYPE" : "STAT_CORE", "NAME" : "Femininity", "VALUE" : 50, "CONDITION" : "gte",
                },
                {
                    "TYPE" : "STAT_CORE", "NAME" : "Perversion", "VALUE" : 50, "CONDITION" : "gte",
                }
            ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [
                {
                    "TAG" : "HANDJOB_CHECK_1", "TYPE" : "SKILL", "NAME" : "HandJobs", "DIFFICULTY" : 100, 
                    "REWARD" : "MONEY", "VALUE" : 100
                }
            ],
            "POST" : [],
            "START" : "\
            Try as you might, you can't get the mental image of this mans giant cock out of your mind. While \
            dancing on him, you start massaging his member through his trousers and are rewarded with the \
            sensation of it stiffening underneath your fingers. The two of you lock eyes for a moment and \
            without saying words agree on what will happen next.\n\n\
            You slide off his lap and onto the floor, your fingers hastily going to his pants - he assists \
            you and you gasp in delight as his turgid 12' inch member pops up in front of your face. With \
            reverence you reach out to grasp the massive tool with your hand, gently at first and then more \
            firmly. A smile dances across your lips as you bring the cock to your mouth, first licking it and \
            then practically sloshing it around in your mouth to lubricate it with your spit.\n\n\
            Once sufficiently coated, you start working it between your fingers, doing your best to alternate \
            your grip and technique. The customer starts moaning and gasping as you stroke his rod, drips of \
            his precum mixing with your spit and coating your hands.\
            ",
            "RESULTS" : [
                {
                    "HANDJOB_CHECK_1" : 40,
                    "TEXT" : "\
                    You keep pumping his dick as fast as you can, but your movements are awkward and the music \
                    ends before you are able to get him off. He looks at you @@with a mixture of sadness and \
                    loathing@@ while you rise to your feet.\
                    "
                },
                {
                    "HANDJOB_CHECK_1" : 70,
                    "TEXT" : "\
                    You keep pumping his dick, eventually using both hands in two different motions to bring \
                    your customer to the brink of orgasm. Just as the music stops, he finally lets out a \
                    restrained yell and giant ropey streams of cum errupt from his cock and coat your hair and \
                    pEQUIP(Costume|Dress|Shirt|Bra|$naked chest). He @@sighs contently@@ as you clean yourself up.\
                    "
                },
                {
                    "HANDJOB_CHECK_1" : 500,
                    "TEXT" : "\
                    You keep pumping his dick, eventually using both hands in two different motions to bring \
                    your customer to the brink of orgasm. Just as the music stops, he finally lets out a \
                    restrained yell and giant ropey streams of cum errupt from his cock and coat your hair and \
                    pEQUIP(Costume|Dress|Shirt|Bra|$naked chest). \
                    <<if setup.player.GetStat('STAT', 'Perversion') >= 70>>\
                    You're such a practiced whore, you greedily lap up his cum from the end of his dick and then \
                    scoop the remainder off your nBUST. <</if>>\
                    The man looks @@completely spent and content@@ as you rise to your feet and straighten \
                    up your clothes.\
                    "
                }
            ],
            "END" : ""
        }
    ],
    "END" : "\
    The last strands of music die down from the hall and you can hear the girls in the other vestibules \
    moving back to the main floor. You give your farewell to the customer and collect your pay before \
    joining them.\
    ",
    "JOB_RESULTS" : []
};