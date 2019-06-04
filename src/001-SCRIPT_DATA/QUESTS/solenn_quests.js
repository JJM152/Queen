// Part of Bertie's Queen's Favor Part 2
App.Data.Quests["BERTIE_QUEEN_PT2_INFO_SOLENN"] = {
    "ID": "BERTIE_QUEEN_PT2_INFO_SOLENN", 
    "Title": "Chasing the Thieves",
    "GIVER": "Solenn",
    "PRE": [
        {
            TYPE : "QUEST_FLAG", NAME : "BERTIE_QUEEN_PT2_DELIVERY_B", VALUE : "COMPLETED"
        },
        {
            TYPE: "QUEST_FLAG", NAME: "BERTIE_QUEEN_PT2_INFO",  VALUE: "ACTIVE"
        },
    ],
    "POST": [ ],
    "CHECKS": [],
    "ON_ACCEPT" : [],
    "REWARD": [],
    "INTRO": "",
    "MIDDLE" : "",
    "FINISH": "\
    NPC_NAME is well known around these parts for dabbling in voodoo, folk medicine and other mystical \
    sacrements of unknown origin. Wagering that she seems like someone who might have some information \
    on the strange symbol that <span style='color:cyan'>Jonah Blythe</span> drew for you.\n\n\
    s(What's dis?) she exclaims, turning her head and directing her gaze away from the paper.\n\n\
    s(I don't know anything about dat and I reckon you git gone now!) she growls through perfectly white teeth, her \
    enlarged canines nearly biting into her own lucious lips. You hestitate for a moment - clearly she \
    recognizes this symbol but doesn't walk to talk about it, however any further attempts on your part \
    are met with dark stares and gestures and shouting for you to leave.\n\
     ",
     "JOURNAL_ENTRY": "HIDDEN",
     "JOURNAL_COMPLETE": "\
     You asked NPC_NAME if she knew anything about the symbol the mysterious symbol, but she rebuffed you, rather \
     rudely. Obviously suspicious, but there isn't much you can do... is there?\
     ",
};
