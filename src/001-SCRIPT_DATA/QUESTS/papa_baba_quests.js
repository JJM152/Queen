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
