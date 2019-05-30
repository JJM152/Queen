App.Data.JobData["BERTIE_WHORE"] = {
    ID: "BERTIE_WHORE",
    TITLE: "Plaything Fit for a Queen",
    GIVER: "Bertie",
    PAY: 25,
    RATING: 4,
    PHASES: [ 2, 3 ],
    DAYS: 1,
    HIDDEN: false,
    COST: [
        { TYPE : "TIME",  VALUE : 1 },
        { TYPE : "STAT",  NAME : "Energy", VALUE : 2 },
    ],
    REQUIREMENTS : [
        { TYPE : "QUEST", NAME: "BERTIE_QUEEN_PT1", CONDITION: "eq", VALUE: "COMPLETED" },
        { TYPE : "NPC_STAT", NAME : "Lust", VALUE : 60, CONDITION : "gte" }
    ],
    INTRO : "\
    s(Oh, there you are PLAYER_NAME! Just in time too... I was looking to unwind a little. Being \
    the Queen of this shitty island is alot more work than you think...)\
    ",
    START : "\
    <<set _p = setup.player.GetStat('STAT', 'Perversion');>>\
    NPC_NAME stares at you with hunger in her eyes, a look so intense that you momentarily shrink inward \
    on yourself. She approaches you with the confidence of a woman who knows what she wants and is \
    used to getting it, her wide hips swaying hypnotically as her heels go 'click clack' on the marble \
    floor of her foyer.\n\n\
    s(Well, Sugarbuns, are we ready for a night of... fun?) she grins at you, one of her delicate hands \
    reaching for your pASS derrière and giving it a firm grope.\n\n\
    <<if _p <= 30>>\
    Normally the idea of a sexy woman coming on to you so forwardly would be irresitable, but something \
    about NPC_NAME makes you uneasy. Is she too forward, or... as strange as it seems, are you just too \
    much of a prude? In either case, all you manage to do is meekly nod your head before she grabs your hand \
    to lead you away to her private chambers.\
    <<else>>\
    <<if _p <= 60>>\
    There's something enthralling about NPC_NAME, a type of charisma that goes beyond just her obvious \
    outward beauty and sex appeal. She has a unique characteristic of oozing not just sexuality, but an \
    aura of dangerousness that you find both unsettling and appealing. You're so captivated by her that \
    you just barely manage to eek out a meek sp(Yes!) before she grabs your hand and leads you away to \
    her private chambers.\
    <<else>>\
    NPC_NAME's pronouncement sends a thrill up your spine. Her unique combination of overt sex appeal \
    combined with an obviously menacing tone instantly arouses you. Without much thought or consideration \
    you nearly launch yourself at her in eagerness, a foolish act that earns you a husky chuckle from \
    the other woman. NPC_NAME wraps her arms around you, pulling your body close to hers and the two of \
    walk like this up the stairs to her private chambers.\
    <</if>>\
    <</if>>\
    ",
    SCENES: [
    // Check dancing skill and seduction skill.
    {
        ID: "Foreplay",
        TRIGGERS: [],
        TRIGGERS_ANY: [],
        CHECKS: [
            {
                TAG : "DANCING_A", TYPE: "SKILL", NAME: "Dancing", DIFFICULTY: 80, 
                REWARD: "MONEY", R_NAME: "MONEY", VALUE: 40,
            },
            {
                TAG : "SEDUCTION_A", TYPE: "SKILL", NAME: "Seduction", DIFFICULTY: 80, 
                REWARD: "MONEY", R_NAME: "MONEY", VALUE: 40,
            },
            {
                TAG: "FOREPLAY_CHECK", TYPE : "FUNC", VALUE : 80,
                "FUN": function(p, s, c) {
                    return (c["DANCING_A"]["RESULT"] + c["SEDUCTION_A"]["RESULT"])/2;
                }
            }
            ],
        POST: [ ],
        START: "\
        The two of you ascend the stairs to NPC_NAME's private chambers, a large apartment that has a scenic \
        view of the bustling seas-side city below. The room itself is well appointed, various couches and \
        plush chairs dot the periphery of the room. NPC_NAME walks up to a large circle bed that dominates the \
        center of the room and sits down on the edge.\n\n\
        s(I've ordered some dinner, but before that, I'd like a little entertainment my minx. Why don't you show \
        this old seadog what you've got?)\n\n\
        Neither the request nor the leer that accompanied it was particulary unusual, so you take a deep breath \
        to settle your nerves and start to perform your interpretation of a sexy dance. At first you sway your \
        pHIPS hips from side to side, running your hands up and down your chest as you slowly wiggle your way towards \
        the reclining Pirate Queen. You cast a coy look at her and then pivot to turn away, presenting your \
        nASS for her viewing pleasure as you continue to sway seductively. NPC_NAME takes the hint and firmly \
        grabs ahold of your pASS cheeks, massaging and groping them. \
        <<if _p <=30>>\
        You let out a series of faked moans and sighs to encourage her while you continue to grind your \
        rear into her hands. \
        <<else>>\
        <<if _p <= 60>>\
        You let out a series of moans and sighs, NPC_NAME is good with her hands and it's far too easy for \
        your well trained body to give in to her ministrations. \
        <<else>>\
        You let out a series of moans and sighs under the tender ministrations of the Pirate Queen. Your \
        whorish body being so well trained to pleasure that you find yourself getting weak in the knees \
        as you try to grind your rear into her gentle, but probing hands. \
        <</if>>\
        <</if>>\
        Just as you are about to start the next phase of your act, there is a rap at the door signifying \
        that dinner is to be served. \
        ",
        RESULTS: [
        {
            "FOREPLAY_CHECK" : 40,
            TEXT : "\
            NPC_NAME promptly stops fiddling with your buttocks and gets to her feet to let the servant \
            into the room. Obviously your seductive dance was @@not as compelling@@ as the prospect of \
            her evening meal. \
            "
        },
        {
            "FOREPLAY_CHECK" : 70,
            TEXT: "\
            NPC_NAME hestitates for a moment, then gives your buttocks one last squeeze before getting to \
            her feet to let the servant into the room. Clearly she @@didn't want the dance to end@@ so soon, \
            but her evening meal becons. \
            "
        },
        {
            "FOREPLAY_CHECK" : 500,
            TEXT: "\
            NPC_NAME hestiates for a moment, @@then continues to fondle your ass@@. The servant knocks again and \
            you swear you hear your hostess grumble something decidely unlady like under her breath before she \
            gets up and gives you one last squeeze. As she walks to the door to let the servant bearing the \
            evening meal in, you switch spots with her and sit on the edge of the bed. \
            "
        }
        ],
        END: "\n\n\
        The servant brings in a large tray on wheels that contains what can only be described as a feast for \
        a half dozen people and ports it over to a small table that sits by the window before leaving. \
        NPC_NAME sits down and uncorks a bottle of wine, beckoning for you to join her as she fills a pair of \
        glasses. \
        ",
    },
    // Serving and Courtesan
    {
        ID: "Dinner",
        TRIGGERS: [],
        TRIGGERS_ANY: [],
        CHECKS: [
            {
                TAG : "SERVING_A", TYPE: "SKILL", NAME: "Serving", DIFFICULTY: 80, 
                REWARD: "MONEY", R_NAME: "MONEY", VALUE: 40,
            },
            {
                TAG : "COURTESAN_A", TYPE: "SKILL", NAME: "Courtesan", DIFFICULTY: 80, 
                REWARD: "MONEY", R_NAME: "MONEY", VALUE: 40,
            },
            {
                TAG: "DINNER_CHECK", TYPE : "FUNC", VALUE : 80,
                "FUN": function(p, s, c) {
                    return (c["SERVING_A"]["RESULT"] + c["COURTESAN_A"]["RESULT"])/2;
                }
            }
            ],
        POST: [ ],
        START: "\
        You join NPC_NAME at the small table and take the offered glass of wine. You have to admit, as far \
        as whoring jobs go, this one so far has had a lot of perks, namely a rich and beautiful client and \
        an excellent dinner.\n\n\
        The two of you make small talk while you eat and drink, knowing your place you put forth your best \
        efforts to be both charming as well as pliant, serving NPC_NAME her food and refilling her glass \
        when it's empty - all skills you learned while practicing as a Courtesan. \
        ",
        RESULTS: [
        {
            "DINNER_CHECK" : 40,
            TEXT : "\
            However, despite all this, NPC_NAME appears to be mostly @@unimpressed@@, or at least disinterested \
            in anything other than eating and getting on with the night. Far too soon for your liking, \
            NPC_NAME signals that dinner is over and grabs your hand to lead you to the bed. \
            "
        },
        {
            "DINNER_CHECK" : 70,
            TEXT: "\
            Your efforts don't go unnoticed and as the evening moves on, NPC_NAME leans closer and closer to \
            you until the two of you are practically whispering to each other over your cups. Her hand \
            occasionally goes to your lap, to fondle your thighs and carelessly rush across your \
            semi-errect pPENIS cock. Before you know it, NPC_NAME takes your hand and leads you to her bed. \
            "
        },
        {
            "DINNER_CHECK" : 500,
            TEXT: "\
            NPC_NAME is clearly impressed with your demeanor, she motions for you to move your chair to \
            the side so that you may sit closer to her. The two of you share the last of a bottle of wine \
            with the final drink being fed to you directly from NPC_NAME's mouth as she leans in and gives \
            you a passionate kiss. Your lips linger together for long moments, before you find yourself being \
            gently pulled towards the center of the room and NPC_NAME's waiting bed. \
            "
        }
        ],
        END: "\n\n\
        At the edge of the bed, NPC_NAME pulls you close to her, her own massive breasts pressing against \
        your pBUST hooters. The sensation is almost indescribable and erotic, elictic a soft moan from \
        both of you that NPC_NAME silences with a deep wine flavored kiss. \
        ",
    },
    // BlowJobs
    {
    ID: "Desert1",
    TRIGGERS: [],
    TRIGGERS_ANY: [],
    CHECKS: [
        {
            TAG : "BLOWJOBS_A", TYPE: "SKILL", NAME: "BlowJobs", DIFFICULTY: 80, 
            REWARD: "MONEY", R_NAME: "MONEY", VALUE: 40,
        }
        ],
    POST: [
        { 
            TYPE : "FLAG", NAME : "BERTIE_COCK_REVEAL", VALUE :   1, OPT : "SET"
        },
        { 
            TYPE : "NPC_STAT", NAME : "Lust", VALUE : -10, OPT : "BLOWJOBS_A" 
        }
     ],
    START: "\
    s(Now it's time for a little desert my sweet...) says NPC_NAME as she forefully pushes you \
    backwards on to the bed. Although the movements are rough, you don't sense any sort of violent \
    intent on her part. The bed itself is luxurious beyond your wildest imagination and just as your \
    body sinks into it's cushy embrace, NPC_NAME climbs up with you and straddles your legs. Her face \
    is flushed, either from wine or from arousal and her stupendeous breasts are heaving in time with \
    her agitated breathing, the entire scene is so distracting that you almost don't notice her \
    enormous turgid cock poking free from the bottom of her dress. \
    <<if setup.player.QuestFlags.hasOwnProperty('BERTIE_COCK_REVEAL') == false>>\
    \n\n\
    ''WAIT A MINUTE HERE!''\n\n\
    You breath hitches in your throat and you momentarily choke on your own saliva in surprise. The \
    Infamous 'Pirate Queen' of the Lost Seas is actually... a man? Or maybe, more accurately, a \
    //former// man? A dizzying amount of questions flow through your head, but before you can \
    even think to order them, NPC_NAME grabs her enormous cock and points it directly at your head. \
    With just a simple throaty command of s(Suck it) you know exactly what you need to do first. \
    <<else>>\
    You're still amazed that such a beautiful woman can have such a gigantic cock and you find the \
    site of her both perplexing and mezmerizing. NPC_NAME grabs her giant tool, stroking it up and \
    down with delicate manicured fingers and then points it at your face. You know exactly what she \
    expects. \
    <</if>> \n\n\
    You prop your back up with some pillows while NPC_NAME moves closer, her turgid member dangling \
    in front of your pFACE face. She lazily draws her dick back and forth across your pLIPS lips, \
    watching it get covered with your saliva as you lick at the head. Eventually she tires of the \
    game and presses her cockhead hard against your dick suckers, you comply and open as wide as \
    you can, practically unhinging your jaw just to swallow the monster. \
    ",
    RESULTS: [
    {
        "BLOWJOBS_A" : 40,
        TEXT : "\
        You do your best to try and suck and throat NPC_NAME's monster cock, but @@your skills just \
        aren't up to it@@ and she quickly gets frustrated. In one swift movement she grabs the back \
        of your head by the hair and impales your face on her dick. Your eyes well with tears and \
        you struggle for breath as she begins to vigoursly fuck your face.\
        "
    },
    {
        "BLOWJOBS_A" : 70,
        TEXT: "\
        You @@manage to swallow@@ most of NPC_NAME's monster cock, but not without a supreme amount \
        of effort. Your eyes well with tears and your nose starts to run as endless streams of saliva \
        run down your pBUST chest and pool on your clothing. s(That's right bitch... suck it like your \
        life depends on it) she mutters as she casually begins to play with her own nipples through the \
        thin fabric of her dress. \
        "
    },
    {
        "BLOWJOBS_A" : 500,
        TEXT: "\
        You expertly accomodate the length and girth of NPC_NAME's monster cock, but not with out \
        enough struggle that your eyes start to water. s(Yes, that's it... suck it... suck it sissy!) \
        moans NPC_NAME as she is overcome with pleasure from your @@excellent blowjob@@. Her hands \
        go up to her chest and she parts her gown, freeing her stupendous breasts. It's a perverse \
        yet erotic sight to see such a beautiful and well endowed woman play with her own nipples while \
        you suck on her dick and you find yourself becoming aroused as well. \
        "
    }
    ],
    END: "\n\n\
    The tempo slowly increases and you can sense NPC_NAME's oncoming orgasm, but nothing prepares you for \
    both the quanity and thickness of her cum. Even if you wanted to avoid it, there's little other choice \
    than to gulp the gooey fluid down fast enough so that you can breath. In fact, you are so preoccupied \
    with swallowing that you fail to notice that NPC_NAME is grabbing your nPENIS with one hand while \
    she continues to fondle her own breasts with the other. \
    ",
    },
    // AssFucking
    {
        ID: "Desert2",
        TRIGGERS: [],
        TRIGGERS_ANY: [],
        CHECKS: [
            {
                TAG : "ASSFUCKING_A", TYPE: "SKILL", NAME: "AssFucking", DIFFICULTY: 80, 
                REWARD: "MONEY", R_NAME: "MONEY", VALUE: 40,
            }
            ],
        POST: [
            { 
                TYPE : "NPC_STAT", NAME : "Lust", VALUE : -10, OPT : "ASSFUCKING_A" 
            }
        ],
        START: "\
        Despite having just cum a literal bucket, NPC_NAME is far from spent. Her dick, still upright and \
        hard as a steel rod, wave menacingly in front of your face with an almost hypnotic cadence as she \
        continues to masturbate you with her free hand.\n\n\
        s(Mmmm...) she says, s(Not a bad entree... now on to the main course!)\n\n\
        Before you can ask what she means, she grabs you with strength that belies her slender figure and \
        moves you onto your stomach. Knowing what's to come next, you quickly remove your clothes and present \
        your pASS ass to your new Queen. You think momentarily to yourself that it's a good thing that your \
        blowjob was so sloppy, because now NPC_NAME's huge cock is certainly well lubricated enough to pass up \
        your well worn asshole.\n\n\
        With a fluid motion, NPC_NAME buries herself in you. It's an odd sensation - not the ass rape, but the \
        soft curves of her body against yours and her stupendous breasts pressing against your back while her \
        cock rapes your asshole. \
        <<if _p <= 40>>\
        All these senations and the situation together are confusing, you don't know if you should be \
        repulsed by being ass raped again, or enjoy being dominated by such a sexy woman. \
        <<else>>\
        <<if _p <= 60>>\
        Perhaps it's the combination of the wine, or the company, but whatever the case you find yourself \
        actually enjoying the sensation of NPC_NAME's cock as she slides it in and out of your well fucked \
        ass. Your pPENIS dick, normally limp during such activities, begins to rise to the occasion. \
        <<else>>\
        No stranger to the pleasures of a good ass fuck, you grind your bottom into NPC_NAME's pelvis as \
        she pumps away at you, doing your best to meet her pleasure with your own. Your pPENIS, already \
        hard, becomes impossibly so and the sensation of it brushing against the silk sheets of NPC_NAME's bed \
        as she fucks you is deliciously sinful. \
        <</if>>\
        <</if>>\n\n\
        ",
        RESULTS: [
        {
            "ASSFUCKING_A" : 40,
            TEXT : "\
            NPC_NAME @@gets frustrated@@ with your awkward ass fucking and soon enough her animal lust \
            takes over. She grabs your pHIPS hips with both hands and starts to vigorously pump your \
            bottom like she's trying to kill you from the inside. \
            "
        },
        {
            "ASSFUCKING_A" : 70,
            TEXT: "\
            NPC_NAME @@growls throatily with desire@@ as she continues to pillage your booty. You do your \
            best to accomodate and incite her passions, leading her to crazily pump your ass with her \
            oversized cock. \
            "
        },
        {
            "ASSFUCKING_A" : 500,
            TEXT: "\
            Your @@expert anal skills@@ drive NPC_NAME wild with desire. She abandons all reason and \
            pretext and simply begins to fuck your nASS with determination and abandon. Her cock, \
            already strong, seems to become like a burning hot rod inside your sphincter and her \
            breath becomes frentic and laboured. \
            "
        }
        ],
        END: "\n\n\
        NPC_NAME lays down on your back as she continues to pump you. With one hand to support herself, she \
        reaches over and places her other one on your nPENIS. The feeling is estatic and you muffle a \
        scream into her bedding. Encouraged by your display she begins to fill your bottom with long \
        solid strokes, while furiously working your dick with her free hand. Suddenly you feel her \
        tense up and then a split second later, her cock jumps in your ass, gushing forth another torrent \
        of hot sticky cum. The sensation, combined with her hand job is too much for you and soon you \
        are joining her in making her bed covered with sticky sissy sauce. \
        ",
    },
    {
        ID: "Finale1",
        TRIGGERS: [],
        TRIGGERS_ANY: [],
        CHECKS: [
            {
                TAG: "FINAL_CHECK", TYPE : "FUNC", VALUE : 100,
                "FUN": function(p, s, c) {
                    var ret = c["FOREPLAY_CHECK"]["MOD"] * 25;
                    ret += c["DINNER_CHECK"]["MOD"] * 25;
                    ret += c["BLOWJOBS_A"]["MOD"] * 25;
                    ret += c["ASSFUCKING_A"]["MOD"] * 25;
                    return ret;
                }
            }
            ],
        POST: [
            { 
                TYPE : "TOKENS",  NAME : "TOKENS", VALUE : 8, OPT : "TAG_FINAL_CHECK" 
            },
            {
                TYPE : "NPC_STAT", NAME : "Mood", VALUE: 8, OPT : "TAG_FINAL_CHECK"
            },
            {
                TYPE : "MONEY", NAME : "MONEY", VALUE: 100, OPT : "TAG_FINAL_CHECK"
            }
        ],
        START: "\
        Both of you are completely spent and lay on the bed in utter exhaustion. Evidently you dozed off \
        because the next thing you are aware of is NPC_NAME gently jostling you awake.\n\n\
        s(You know have this cute little snore, sugarbuns) she quips as she stretches out a \
        long yawn.\n\n\
        ",
        RESULTS: [
        {
            "FINAL_CHECK" : 40,
            TEXT : "\
            NPC_NAME says s(That wasn't bad my little strumpet, but I think you need a bit more work on some \
            of the finer parts of being a high class whore, and that's not just my opinion, I'm speaking \
            from experience). You're tempted to inquire further of her, but decide that now is not \
            the time or place for such bold questions. \
            "
        },
        {
            "FINAL_CHECK" : 70,
            TEXT: "\
            NPC_NAME says s(Mmm... not bad my little strumpet. You have all the makings of a fine \
            high class whore. If you keep this up, I might even take you all for myself). She smiles \
            at you without malice. \
            "
        },
        {
            "FINAL_CHECK" : 500,
            TEXT: "\
            NPC_NAME says s(Well done my little sweetbun. You're welcome to bring that wonderful \
            little sissy hole back here any time. Ahh... to think I'd find such an excellent whore on \
            this shitty island!). You //think// that's praise and decide to leave it at that. \
            "
        }
        ],
        END: "",
        }
    ],
    END : "\
    With the evening over and your client desiring rest, you collect your pay and politely excuse yourself from \
    her company.\
    ",
    JOB_RESULTS : [
    ]
};
