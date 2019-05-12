App.Data.Quests["BERTIE_QUEEN_PT1"] = {
    ID: "BERTIE_QUEEN_PT1",
    Title: "The Queens Favor - Part 1",
    GIVER: "Bertie",
    PRE: [ ],
    CHECKS: [ ],
    POST: [ ],
    REWARD: [ ],
    INTRO: "\
        ",
    MIDDLE:"\
        ",
    FINISH:"\
        ",
    JOURNAL_ENTRY :"\
        ",
    JOURNAL_COMPLETE :"\
        "
};

App.Data.Quests["COURTESAN_GUILD_JOIN_FETCH"] = {
    ID: "COURTESAN_GUILD_JOIN_FETCH",
    Title: "A Letter of Introduction",
    GIVER: "Bertie",
    PRE: [
        { TYPE : "QUEST_FLAG", NAME : "COURTESAN_GUILD_JOIN", VALUE : "ACTIVE" }
     ],
    CHECKS: [ ],
    POST: [ ],
    REWARD: [ ],
    INTRO: "\
        ",
    MIDDLE:"\
        ",
    FINISH:"\
    You approach NPC_NAME and explain the situation to her.\n\n\
    s(So you're looking to join that pompous slut Selene's school for Courtesans are you? Well, yes I was a //former// \
    and not particularly willing student there.) she says.\n\n\
    NPC_NAME's eyes harden, as if she's remembering or imagining something distasteful. Never the less, she continues. \n\n\
    s(Well, as much as I hate that harlot, I have to admit - she knows her stuff. It might do you good to take a few \
    classes and, shall we say, sand down a few of your rougher edges. At least if you have aims at being ''my'' personal \
    little fuckslut.)\n\n\
    You're not quite so sure that you're willing to take NPC_NAME up on the offer she just insinuated, but at least \
    she's willing to write you the proper recomendation. A brief discussion and a few minutes later, you hold the \
    aforementioned letter of recomendation in your hands. If this doesn't impress <span style='color:cyan'>Lady Selene</span> \
    then nothing will.\
        ",
    JOURNAL_ENTRY : "HIDDEN",
    JOURNAL_COMPLETE : "HIDDEN"
};