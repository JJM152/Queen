App.Data.Quests["BOBOLA_SAP_2"] = {
    "ID": "BOBOLA_SAP_2", "Title": "Just What the Doctor Ordered",
    "GIVER": "Papa Baba",
    "PRE": [
        {
            "TYPE" : "QUEST_FLAG", "NAME" : "BOBOLA_SAP_1", "VALUE" : "ACTIVE"
        }
    ],
    "POST": [ ],
    "CHECKS": [
        {
            "TYPE": "FLAG", "NAME": "BOBOLA_SAP_1", "VALUE": "ACTIVE"
        },
        {
            "TYPE" : "ITEM", "NAME" : "FOOD/smugglers ale", "VALUE" : 6,
        }
    ],
    "ON_ACCEPT" : [],
    "REWARD": [
        {
            "REWARD_TYPE": "MOOD", "NAME" : "Papa Baba", "AMOUNT": 10
        }
    ],
    "INTRO": "\
        s(So ya be wanting da sap o' da Bobola tree?) Papa Baba says as he laughs to himself. \
        s(Surely ya must be some kind o' crazy slut, but neermind dat.)\n\n\
        He thinks for a moment, scratching his natty hair underneath his tattered hat.\n\n\
        s(Tell ya wot, gimme some o' dat fine smugglers beer and I be tellin ya wot you want ta knew!) he says.\n\n\
        You stare at him incredulously for a moment. If all this madman wants is alcohol, then isn't that \
        easy enough to get?\
        ",
    "MIDDLE" : "\
        NPC_NAME says, s(Ehhh... PLAYER_NAME. I be gettin thirsty o'er here! Gimme dat beer and make it quick!)\
        ",
    "FINISH":
        "\
        NPC_NAME eyes light up as he sees you return with the bottles of ale. You can't say you blame him as \
        Petey's brew is reknown in the isles for it's taste and invigourating qualities. He quickly snatches them \
        out of your hands, pops one open, downing it in a long fluid motion.\n\n\
        s(Aaaaah!!! Dat be hittin da spot!) he exclaims as he wipes his mouth. s(Normally this be da part where I be \
        makin ewe suck mah dick, but since you be visitin da Bobola, that'd be just mean.) he says, his expression \
        uncharacteristically somber. He reaches for a shelf in the shack and pulls down a wooden bucket, thrusting it \
        into your hands.\n\n\
        s(Take dis, try ta get some o dat dere sap innit. Ewe figgur out howe!)\n\n\
        You're starting to wonder if you've bitten off more than you can chew with this quest. In any regards, NPC_NAME \
        helpfully draws you a map in the dirt of the location of the Bobola tree. You can find it now from the \
        @@color:gold;Swamp River@@.\
        ",
    "JOURNAL_ENTRY" : "\
        NPC_NAME will tell you where to find the rumoured Bobola tree, but first he wants you to bring him a brace of \
        six Smuggler's Ales.\
    ",
    "JOURNAL_COMPLETE" : "\
        You brought the ales to NPC_NAME and he drew you a map to the Bobola tree and handed you a bucket for collecting \
        the sap. Something about this seems wrong to you, but you should be able to find the tree now somewhere from the \
        @@color:gold;Swamp River@@.\
    "
};

// Part of Bertie's Queen's Favor Part 2
App.Data.Quests["BERTIE_QUEEN_PT2_INFO_PAPA_BABA"] = {
    "ID": "BERTIE_QUEEN_PT2_INFO_PAPA_BABA", 
    "Title": "Chasing the Thieves",
    "GIVER": "Papa Baba",
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
            TYPE: "QUEST_FLAG", NAME: "BERTIE_QUEEN_PT2_INFO_PAOLA", OPT: "DELETE"
        },
    ],
    "CHECKS": [],
    "ON_ACCEPT" : [],
    "REWARD": [],
    "INTRO": "",
    "MIDDLE" : "",
    "FINISH": "\
    You approach NPC_NAME, the mysterious jungle medicine man. He greets you somberly and and gestures for \
    you to take a seat. s(Wot ye be needin' girlie? Sumthin Baba ken do for ye?)\n\
    You clear your throat and lick your lips, then reach into your garments and produce the drawing that \
    <span style='color:cyan'>Jonah Blythe</span> gave you and politely ask her if she recognizes it.\n\n\
    NPC_NAME's mouth twists in a grimace. He hands the picture back and sits down across from you on a simple \
    stool. s(Ye, I know et. I know et well.) he says. s(Ets a devil the white man worship. Dey be callin' et \
    'Mahomet') he stops and makes a sign over his heart, possibly some kind of protective charm.\n\n\
    Who is that? What does it mean? You have a dozen questions pop into your mind. However, all you can get \
    out of NPC_NAME is a single statement - s(I dun noe much, but dis - dat devil fills a man with madness \
    and lust and demands a price in blood. Unfaithful. Dat's what eet likes - unfaithful, disloyal, liars.)\n\n\
    You ponder this information for a moment, it's not much, but you at least have a name and some indication \
    of who might be behind it. It's probably enough to return to <span style='color:cyan'>Bertie</span> with.\
     ",
     "JOURNAL_ENTRY": "HIDDEN",
     "JOURNAL_COMPLETE": "\
     You asked NPC_NAME if he knew anything about the mysterious symbol. He told you a couple of key \
     pieces of information. Namely the symbol belongs to a cult that worships some type of demonic \
     figure named 'Mahomet' and that you should look for his followers amongst the 'unfaithful'.\
     ",
};