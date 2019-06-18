App.Data.Quests["PAOLA_FETCH"] = {
    "ID": "PAOLA_FETCH", "Title": "Voodoo Supplies",
    "GIVER": "Paola",
    "PRE": [ ],
    "POST": [ ],
    "CHECKS": [
        { "TYPE": "ITEM", "NAME": "QUEST/bag of mojo", "VALUE": 1 }
    ],
    "ON_ACCEPT" : [
        { "TYPE" : "QUEST", "NAME" : "VOODOO_PICKUP", "VALUE" : "START" }
    ],
    "REWARD": [
        {"REWARD_TYPE": "MONEY", "AMOUNT": 200 }
    ],
    "INTRO": "\
        NPC_NAME laughs heartily as you approach. s(You be seekin' the great powah of NPC_NAME eh???)\n\n\
        You're not sure if that statement is true or not, but... maybe? The strange brown woman continues her speech.\n\n\
        s(Ah well, I can't be doin' mah hexin' until I restock mah mojo, ya ken wot I mean?)\n\n\
        You're not actually sure what she means, but you suspect that if you were to bring her some 'mojo' she might be able \
        to do some magic for you?\n\n\
        NPC_NAME says s(Find that white bitty @@color:cyan;Blanche@@ in @@color:gold;Port Royale@@ and get me my mojo!)",
    "MIDDLE": "You need to bring the following items to NPC_NAME:",
    "FINISH": "\
        NPC_NAME says s(Thanks be PLAYER_NAME! I be scraping da bottem o' da barrel, but now with dis, mah mojo is back!)\n\n\
        She throws back her head and cackles to herself, her massive mammaries shaking like two giant globes of jello.\n\n\
        NPC_NAME says s(If yee be wantin' the gifts o' the spirits, let me know and I'll be castin' dem hexes full on ya bet!)",
    "JOURNAL_ENTRY": "\
        NPC_NAME on @@color:gold;Abamond@@ wants your help in replenishing her 'mojo', whatever that means. Supposedly someone \
        named @@color:cyan;Blanche@@ in @@color:gold;Port Royale@@ has it?",
    "JOURNAL_COMPLETE": "You fetched the bag of mojo for NPC_NAME. She will now provide some specialized 'voodoo' services."
};

// Part of Bertie's Queen's Favor Part 2
App.Data.Quests["BERTIE_QUEEN_PT2_INFO_PAOLA"] = {
    "ID": "BERTIE_QUEEN_PT2_INFO_PAOLA", 
    "Title": "Chasing the Thieves",
    "GIVER": "Paola",
    "PRE": [
        {
            TYPE : "QUEST_FLAG", NAME : "BERTIE_QUEEN_PT2_DELIVERY_B", VALUE : "COMPLETED"
        },
        {
            TYPE: "QUEST_FLAG", NAME: "BERTIE_QUEEN_PT2_INFO",  VALUE: "ACTIVE"
        },
    ],
    "POST": [
        {
            TYPE: "QUEST_FLAG", NAME: "BERTIE_QUEEN_PT2_INFO", OPT: "SET", VALUE: "COMPLETED"
        },
        {
            TYPE: "QUEST_FLAG", NAME: "BERTIE_QUEEN_PT2_INFO_PAPA_BABA", OPT: "DELETE"
        },
    ],
    "CHECKS": [],
    "ON_ACCEPT" : [],
    "REWARD": [],
    "INTRO": "",
    "MIDDLE" : "",
    "FINISH": "\
    You approach NPC_NAME, the mysterious jungle medicine woman. She greets you normally and offers you a simple \
    refreshment. s(What brings ye here to ol' Paola? You be needin a charm? A hex on a lover? Speak sweets!)\n\n\
    An interesting offer to say the least, but not exactly what you're after right now. You clear your throat \
    and lick your lips, then reach into your garments and produce the drawing that <span style='color:cyan'>\
    Jonah Blythe</span> gave you and politely ask her if she recognizes it.\n\n\
    NPC_NAME's mouth twists in a grimace. She hands the picture back and sits down across from you on a fallen \
    log. s(Ye, I know et. I know et well.) she says. s(Ets a devil the white man worship. Dey be callin' et \
    'Mahomet') she stops and makes a sign over her heart, possibly some kind of protective charm.\n\n\
    Who is that? What does it mean? You have a dozen questions pop into your mind. However, all you can get \
    out of NPC_NAME is a single statement - s(I dun noe much, but dis - dat devil fills a man with madness \
    and lust and demands a price in blood. Unfaithful. Dat's what eet likes - unfaithful, disloyal, liars.)\n\n\
    You ponder this information for a moment, it's not much, but you at least have a name and some indication \
    of who might be behind it. It's probably enough to return to <span style='color:cyan'>Bertie</span> with.\
     ",
     "JOURNAL_ENTRY": "HIDDEN",
     "JOURNAL_COMPLETE": "\
     You asked NPC_NAME if she knew anything about the mysterious symbol. She told you a couple of key \
     pieces of information. Namely the symbol belongs to a cult that worships some type of demonic \
     figure named 'Mahomet' and that you should look for his followers amongst the 'unfaithful'.\
     ",
};