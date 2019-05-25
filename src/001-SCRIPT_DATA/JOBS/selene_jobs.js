// Etiquette
App.Data.JobData["COURTESAN_BASIC"] = {
    ID: "COURTESAN_BASIC", 
    TITLE: "Basic Etiquette", 
    GIVER: "Selene", 
    PAY: 0,
    RATING: 3, // of 5
    PHASES: [ 0 ],
    DAYS: 1,
    HIDDEN: false,
    COST : [
            { TYPE : "TIME", VALUE : 3 },
            { TYPE : "STAT", NAME : "Energy", VALUE : 5 },
            { TYPE : "MONEY", VALUE : 200 }
    ],
    REQUIREMENTS: [
        { TYPE : "QUEST", NAME: "COURTESAN_GUILD_JOIN", CONDITION: "eq", VALUE: "COMPLETED" },
        { TYPE : "SKILL", NAME: "Courtesan", CONDITION: "lte", VALUE: 30 }
    ],
    INTRO:
        "\
        NPC_NAME says s(You look a bit rough around the edges, dearie. Every proper lady needs to hold herself with \
        grace and refinement, no matter what...)",
    START :
        "\
        You assemble in a large classroom, already filled with other students, a small group of young women that \
        come from a vareity of backgrounds, but all sharing the same fate - to become the personal sex toys of \
        rich and powerful men. There isn't much chatter and the atmosphere is heavy, a few girls share a meaningful \
        look between them, it is apparent that not everyone is here willingly. \
        ",
    SCENES: [
        {
            ID : "Introduction",
            TRIGGERS :[ ],
            TRIGGERS_ANY : [ ],
            CHECKS : [
                { 
                    TAG: "A", TYPE : "SKILL", NAME : "Courtesan", DIFFICULTY : 60, 
                    REWARD : "", R_NAME : "", VALUE: 100, OPT : 0 
                }
            ],
            POST : [
                { 
                    TYPE : "SKILL_XP", NAME : "Courtesan", VALUE :  100, OPT : 0 
                }
            ],
            START :
                "\
                All eyes turn to the door as NPC_NAME enters, her head held high as she strides to the front of the room. \
                Without even sparing a glance to the assembled girls, she speaks, s(Today we are going to study the proper \
                etiquette required to not embarass yourselves in your future positions. Looks and style will only get you \
                so far, the men and women you will be serving will demand much, much more than that.)\n\n\
                A couple of the girls wince at that final proclamaition, evidently whomever they are slated to 'serve' has \
                already made them well aware of what they're expected to do.\n\n\
                NPC_NAME instructs you all to sit at small wooden desks while she continues her lecture. The subjects she covers \
                range from polite social introductions, table etiquitte and dining, to techniques for holding light \
                conversation with your betters. As the hours wind on, a girl here and there begins to space out, only to be \
                brought back to rapt attention as NPC_NAME brings down a long thin switch across either their arses or tits. \
                A punishment that thankfully you are able to avoid.\n\n\
                Towards the end of the morning, each girl is handed a few pages of parchment - a 'pop quiz' of sorts to \
                test them on how well they have been paying attention. You grimace and start working on answering the \
                questions, it doesn't take too long and you give your papers to NPC_NAME and then return to your \
                desk to wait for further instruction.n\n\
                 Eventually lunch time approaches and NPC_NAME lets the \
                class have a small break before moving on to the 'Practical' lessons for the afternoon.\n\n\
                Lunch is a depressing affair. Most of the girls have very little to eat and nothing is provided for \
                them, so the time is spent largely just looking aimlessly around or massaging a previously whipped \
                body appendange. You stare out a small window absentmindedly, only to be slightly startled when the \
                door to the class room opens loudly and NPC_NAME re-enters with a file of young men behind her.\n\n\
                <<if setup.player.GetStat('STAT', 'Perversion') <= 50>>\
                Oh shit, you don't like where this is going...\n\n\
                <<else>>\
                <<if setup.player.GetStat('STAT', 'Perversion') <= 80>>\
                Ah, so this is what she meant by 'practical'? It's not really much of a surprise in retrospect, but \
                some of the other girls are absolutely shocked. You can only inwardly smirk at their ashen faces, \
                to an experienced sissy whore like yourself, a few cocks here and there aren't much of an issue \
                to be upset about.\n\n\
                <<else>>\
                tp(Finally!) you think to yourself. That entire morning was just the most boring bullshit imaginable, spewed \
                at you by a popmous bitch. You've long ago given up any sort of revulsion to your status in life, and in fact \
                you've recently found yourself to enjoy certain aspects of it, like for instance, that growing trouser snake \
                that you can see outlined in the tight pants of one of the men that just entered the room. \n\n\
                <</if>>\
                <</if>>\
                s(Now girls) says NPC_NAME, s(lets start the practical tutoring.)\
                ",
            "RESULTS" : [ ],
            "END" :
                ""
        },
        {
            ID : "BlowJobClass",
            TRIGGERS :[ ],
            TRIGGERS_ANY : [ ],
            CHECKS : [
                { 
                    TAG: "B", TYPE : "SKILL", NAME : "BlowJobs", DIFFICULTY : 60, 
                    REWARD : "", R_NAME : "", VALUE: 100, OPT : 0 
                }
            ],
            POST : [  ],
            START :
                "\
                NPC_NAME has you and the rest of the class get up from their desks and move to the front of the room. \
                s(Now girls, on your knees!) she says with a clap of her hands. Some of the girls are reluctant, but \
                everyone complies.\n\n\
                s(The gentlemen in front of you have graciously volunteered to assist in this part of the instruction.) \
                she says. You're not quite as naive as that, at least not any more, so you think it's likely that each \
                of these fellows paid a small fee to get to fuck one of the students here today. You have to hand it \
                to NPC_NAME, she's a ruthless businesswomen.\n\n\
                The men each line up infront of a student, the one choosing you is a rather lanky boy with what looks like \
                the outline of a respectable tool starting to stiffen through his trousers. NPC_NAME gives them an \
                abrupt nod and then without much grace, the men free their cocks.\n\n\
                tp(Well, guess I was right about this boy...) you think to yourself as the lads enormous wang bobs \
                back and forth infront of your face.\n\n\
                s(The act of pleasuring your partner is not just all physical, it's also mental. You will find in the \
                future that some of your masters prefer you to respond to them in a certain way. Each of these men has \
                a different preference, and you'll be marked on how well you perform for them.)\n\n\
                There is a long silence as the class tries to let that bit of information sink in, NPC_NAME gives it \
                a pregnant pause and then claps her hands - s(Now suck, ladies.) she proclaims. \n\n\
                You think for a moment about the young man in front of you. He looks naive and still inexperienced, probably \
                not inherently prone to abuse or degrade women. He likely wants you to pretend to enjoy the experience. With \
                that in mind, you lean forward and gently place your hands on his upper thighs while gazing into his eyes, \
                your mouth slowly starting to engulf his member. \n\n\
                ",
            "RESULTS" : [
                {
                    B:  85, 
                    TEXT:  "\
                    You start off slow, trying to accomodate the girth of this young lads impressive tool, while staring up \
                    into his eyes to give him a more intimate connection, just as you've been taught. However, his own \
                    inexperience leads him to start thrusting his huge cock in and out of your mouth, banging the back of \
                    your throat and causing you to choke and gag. Try as you might, @@you can't hold back the tears@@ \
                    spilling from your eyes, or the sputtering sounds that come from your mouth as he continues to ravage \
                    your suckhole."
                },
                {
                    B: 120, 
                    TEXT: "\
                    You start off slow, trying to accomodate the girth of this young lads impressive tool, while staring up \
                    into his eyes to give him a more intimate connection, just as you've been taught. However, his own \
                    inexperience leads him to start thrusting his huge cock in and out of your mouth, banging the back of \
                    your throat and causing you to choke and gag. It takes a huge amount of effort, but you're able to \
                    gently guide him back into slowing down, allowing you to @@recover somewhat@@ and go back to your previous \
                    performance."
                },
                {
                    B: 500, 
                    TEXT:  "\
                    You start off slow, trying to accomodate the girth of this young lads impressive tool, while staring up \
                    into his eyes to give him a more intimate connection, just as you've been taught. However, his own \
                    inexperience leads him to start thrusting his huge cock in and out of your mouth, banging the back of \
                    your throat and causing you to choke and gag. It only lasts for a moment before you @@expertly recover@@, \
                    relaxing your throat to accomodate his meat rod and slowly, but surely breathing through your nose."
                }
           
             ],
            "END" :
                "\
                Not long after that, the man grabs the back of your head and pulls your face into his crotch, his ridgid \
                tool forcing it's way deep into your throat. Moments later, you can feel his dick pulse and jump in your \
                mouth as he pumps a steady stream of cum into your stomach. The lad must have been severely backed up \
                because this goes on for well over a minute before he removes his slowly deflating cock with a 'pop' from \
                your pLIPS lips.\n\n\
                You fall backwards on your pASS butt, panting and catching your breath. Several of the other girls are still \
                working on their own blowjobs and NPC_NAME is going around giving them instructions such as, s(Wimper and look \
                more pathetic!) or (I want to see that mascara run with tears!). It seems that their subjects were cut from \
                a different cloth than yours. \
                "
        },
    ],
    END:
        "\
        Your 'practical' over, you join a couple of other women whom have returned to their desks to wait for the remaining \
        girls to finish up. You watch them with keen interest, \
        <<if setup.player.GetStat('STAT', 'Perversion') <= 60>>\
        despite the enormous amount of sex you encounter every day, it isn't often you get to observe a woman performing \
        the act on someone else and it mildly arouses you. \
        <<else>>\
        one of the woman, a redhead, is struggling to choke down an absolutely huge cock. Her saliva is pooling all over \
        the front of her dress, making it look like a bucket of water has been dumped on her tits. The mans dick is thick \
        and meaty and you can't help but wonder what it would feel like between your own lips. \
        <</if>>\
        Eventually the remaining students finish, one of them so exhausted she needs help from another girl back to her \
        seat. NPC_NAME ushers the last of the male 'volunteers' out the door and then turns to give everyone their \
        own personal evaluation: \n\n\
        JOB_RESULTS\
        ",
    JOB_RESULTS: [
        {
            A: 40, 
            TEXT: "You receive an grade of @@'D'@@ on your 'Courtesean' skills. "
        },
        {
            A: 50, 
            TEXT: "You receive an grade of @@'C'@@ on your 'Courtesean' skills. "
        },
        {
            A: 60, 
            TEXT: "You receive an grade of @@'B'@@ on your 'Courtesean' skills. "
        },
        {
            A: 70, 
            TEXT: "You receive an grade of @@'A'@@ on your 'Courtesean' skills. "
        },
        {
            A: 80, 
            TEXT: "You receive an grade of @@'A+'@@ on your 'Courtesean' skills. "
        },
        {
            A: 500, 
            TEXT: "You receive an grade of @@'S+'@@ on your 'Courtesean' skills. "
        }
     ]
};

// DANCING
App.Data.JobData["COURTESAN_DANCING"] = {
    ID: "COURTESAN_DANCING", 
    TITLE: "Seductive Dance Class", 
    GIVER: "Selene", 
    PAY: 0,
    RATING: 3, // of 5
    PHASES: [ 0 ],
    DAYS: 1,
    HIDDEN: false,
    COST : [
            { TYPE : "TIME", VALUE : 3 },
            { TYPE : "STAT", NAME : "Energy", VALUE : 5 },
            { TYPE : "MONEY", VALUE : 100 },
            { TYPE : "TOKENS", VALUE: 5}
    ],
    REQUIREMENTS: [
        { TYPE : "QUEST", NAME: "COURTESAN_GUILD_JOIN", CONDITION: "eq", VALUE: "COMPLETED" },
        { TYPE : "SKILL", NAME: "Dancing", CONDITION: "lte", VALUE: 60 }
    ],
    INTRO:
        "NPC_NAME says s(Looking for some style tutoring? Sure, I can help you, for a price...)",
    START :
        "\
        ",
    SCENES: [

    ],
    END:
        "\
        ",
    JOB_RESULTS: [ ]
};

// SINGING
App.Data.JobData["COURTESAN_SINGING"] = {
    ID: "COURTESAN_SINGING", 
    TITLE: "Eloquent Singing Class", 
    GIVER: "Selene", 
    PAY: 0,
    RATING: 3, // of 5
    PHASES: [ 0 ],
    DAYS: 1,
    HIDDEN: false,
    COST : [
            { TYPE : "TIME", VALUE : 3 },
            { TYPE : "STAT", NAME : "Energy", VALUE : 5 },
            { TYPE : "MONEY", VALUE : 100 },
            { TYPE : "TOKENS", VALUE: 5}
    ],
    REQUIREMENTS: [
        { TYPE : "QUEST", NAME: "COURTESAN_GUILD_JOIN", CONDITION: "eq", VALUE: "COMPLETED" },
        { TYPE : "SKILL", NAME: "Singing", CONDITION: "lte", VALUE: 60 }
    ],
    INTRO:
        "NPC_NAME says s(Looking for some style tutoring? Sure, I can help you, for a price...)",
    START :
        "\
        ",
    SCENES: [

    ],
    END:
        "\
        ",
    JOB_RESULTS: [ ]
};

// Styling
App.Data.JobData["COURTESAN_STYLING"] = {
    ID: "COURTESAN_STYLING", 
    TITLE: "Sexy Styling Class", 
    GIVER: "Selene", 
    PAY: 0,
    RATING: 3, // of 5
    PHASES: [ 0 ],
    DAYS: 1,
    HIDDEN: false,
    COST : [
            { TYPE : "TIME", VALUE : 3 },
            { TYPE : "STAT", NAME : "Energy", VALUE : 5 },
            { TYPE : "MONEY", VALUE : 200 },
            { TYPE : "TOKENS", VALUE: 5}
    ],
    REQUIREMENTS: [
        { TYPE : "QUEST", NAME: "COURTESAN_GUILD_JOIN", CONDITION: "eq", VALUE: "COMPLETED" },
        { TYPE : "SKILL", NAME: "Styling", CONDITION: "lte", VALUE: 60 }
    ],
    INTRO:
        "NPC_NAME says s(Looking for some style tutoring? Sure, I can help you, for a price...)",
    START :
        "\
        ",
    SCENES: [

    ],
    END:
        "\
        ",
    JOB_RESULTS: [ ]
};

// Serving
App.Data.JobData["COURTESAN_SERVING"] = {
    ID: "COURTESAN_SERVING", 
    TITLE: "Serving your Lord and Lady", 
    GIVER: "Selene", 
    PAY: 0,
    RATING: 3, // of 5
    PHASES: [ 0 ],
    DAYS: 1,
    HIDDEN: false,
    COST : [
            { TYPE : "TIME", VALUE : 3 },
            { TYPE : "STAT", NAME : "Energy", VALUE : 5 },
            { TYPE : "MONEY", VALUE : 100 },
            { TYPE : "TOKENS", VALUE: 5}
    ],
    REQUIREMENTS: [
        { TYPE : "QUEST", NAME: "COURTESAN_GUILD_JOIN", CONDITION: "eq", VALUE: "COMPLETED" },
        { TYPE : "SKILL", NAME: "Serving", CONDITION: "lte", VALUE: 60 }
    ],
    INTRO:
        "NPC_NAME says s(Looking for some style tutoring? Sure, I can help you, for a price...)",
    START :
        "\
        ",
    SCENES: [

    ],
    END:
        "\
        ",
    JOB_RESULTS: [ ]
};