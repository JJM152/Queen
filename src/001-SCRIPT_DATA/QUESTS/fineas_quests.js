App.Data.Quests["BOBOLA_SAP_1"] = {
    "ID": "BOBOLA_SAP_1", "Title": "Processing Bobola Sap",
    "GIVER": "Fineas Quincy",
    "PRE": [
        {
            "TYPE" : "QUEST_FLAG", "NAME" : "ROYAL_ENTRANCE_2", "VALUE" : "ACTIVE"
        }
    ],
    "POST": [],
    "CHECKS": [
        {
            "TYPE": "FLAG", "NAME": "ROYAL_ENTRANCE_2", "VALUE": "ACTIVE"
        },
        {
            "TYPE": "MONEY", "NAME": "MONEY", "VALUE": 500
        },
        {
            "TYPE": "ITEM", "NAME": "QUEST/bucket of bobola sap", "VALUE": 1
        }
    ],
    "ON_ACCEPT" : [],
    "REWARD": [
        {
            "REWARD_TYPE": "ITEM", "TYPE": "QUEST", "NAME": "bucket of refined bobola sap", "AMOUNT": 1
        },
        {
            "REWARD_TYPE": "MONEY", "AMOUNT": -500
        }
    ],
    "INTRO": "\
        NPC_NAME greets you as you enter his shop. s(Ho there traveller! What can I get for you today? Perhaps a rare tonic \
        to add sheen to your hair or a cream for your fair skin?)\n\n\
        You explain to him that you're not in the market for beauty products, but instead looking for the sap of the \
        rare Bobola tree. He considers the matter briefly and then speaks.\n\n\
        s(I know how to process the stuff - handy it is, makes a fine rubber with some 'interesting' properties). He gives you \
        a knowing look and continues, s(You can find the trees themselves in the swamps on <span style='color:gold'>Abamond</span>, \
        but I don't know much more than that. Why don't you try speaking to the locals there and see what they say?) \n\n\
        This sounds suspiciously like an activity that will end up with you servicing a tribe of angry naked savages on a \
        tropical island. You sigh inwardly and nod your head.\n\n\
        s(Anyway, bring back a good deal of the stuff and around <span style='color:gold'>500 coins</span> and I'll process it for \
        you so that it can be used in crafting.)\
        ",
    "MIDDLE" : "\
        NPC_NAME says, s(Come back when you have the <span style='color:gold'>500 coins</span> and the sap lass, then we'll make \
        a fair trade.)\
        ",
    "FINISH":
        "\
        NPC_NAME says, s(Ah I see you've managed to scrape together the coin and sap? Just wait here it shant be a moment!)\n\n\
        He excuses himself and ducks into a backroom. You can hear the muffled soundds of boxes crashing and glassware \
        clinking, accompanied occasionally with the sound of cursing. It takes about 2 hours, but eventually he reappears \
        holding a bucket of a strange smelling purple liquid.\n\n\
        s(Here, as promised - your refined sap. It's been a pleasure PLAYER_NAME, \
        but before you go, could I interest you in some rare bust enhancing creams)\n\n\
        You politely decline his offer.\
        ",
    "JOURNAL_ENTRY" : "\
        NPC_NAME has offered to process any Bobola sap that you find for the price of <span style='color:gold'>500 coins</span>. \
        He's suggested that you could find the sap on the island of @@color:gold;Abamond@@ and that you should inquire with the \
        natives there on how to procure it.\
    ",
    "JOURNAL_COMPLETE" : "\
        NPC_NAME proessed the raw sap that you found on @@color:gold;Abamond@@ into a refined goop that can be used by \
        @@color:cyan;Jameson@@ to create the magical anal plug. You should return to him with the raw materials. \
    "
};

App.Data.Quests["CHEMICAL_PICKUP"] = {
    "ID": "CHEMICAL_PICKUP", "Title": "Alchemical Supplies",
    "GIVER": "Fineas Quincy",
    // Don't display in journal.
    "JOURNAL_ENTRY": "HIDDEN",
    "JOURNAL_COMPLETE": "HIDDEN",
    "PRE": [
        {
            "TYPE" : "QUEST_FLAG", "NAME" : "FINDING_YOUR_BALLS_1", "VALUE" : "ACTIVE"
        }
    ],
    "POST": [],
    "CHECKS": [
        {
            "TYPE": "FLAG", "NAME": "FINDING_YOUR_BALLS_1", "VALUE": "ACTIVE"
        },
        {
            "TYPE": "MONEY", "NAME": "MONEY", "VALUE": 1000
        }
    ],
    "ON_ACCEPT" : [],
    "REWARD": [
        {
            "REWARD_TYPE": "ITEM", "TYPE": "QUEST", "NAME": "strange chemicals", "AMOUNT": 1
        },
        {
            "REWARD_TYPE": "MONEY", "AMOUNT": -1000
        }
    ],
    "INTRO": "\
        NPC_NAME greets you as you enter his shop. s(Ho there traveller! What can I get for you today? Perhaps a rare tonic \
        to add sheen to your hair or a cream for your fair skin?)\n\n\
        You explain to him that you're not in the market for beauty products, but instead looking for certain rare chemicals \
        suitable for alchemical experiments. He considers the matter briefly and then speaks.\n\n\
        s(I'm not certain what you require, but I do have a box of ju... uhm, 'rare ingredients' that I could be see my \
        way to parting with. How does a price of 1,000 coins sound?)\n\n\
        That's a lot of money, but if you want relief from this ball crushing agony, then you'll have to pay it, right?",
    "MIDDLE" : "\
        NPC_NAME says, s(Come back when you have the <span style='color:gold'>1000 coins</span> coins lass and we'll \
        make a fair trade.)\
        ",
    "FINISH":
        "\
        NPC_NAME says, s(Ah I see you've managed to scrape together the coin? Just wait here it shant be a moment!)\n\n\
        He excuses himself and ducks into a backroom. You can hear the muffled soundds of boxes crashing and glassware \
        clinking, accompanied occasionally with the sound of cursing. It takes about 10 minutes, but eventually he reappears \
        holding a rather rickety looking crate practically spilling over with strange bottles.\n\n\
        s(Here, as promised - a wide assortment of chemicals sure to delight any journeyman alchemist. It's been a pleasure, \
        but before you go, could I interest you in some rare bust enhancing creams?)\n\n\
        You politely decline his offer. It's time to return this stuff before it explodes. \
     "
};
