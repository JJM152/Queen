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
        ",
    JOURNAL_ENTRY :"\
        ",
    JOURNAL_COMPLETE :"\
        "
};