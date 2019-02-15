App = App || { Data: { }, Entity: { } };
App.Data.Quests = App.Data.Quests || { };

App.Data.Quests["CHEMICAL_PICKUP"] = {
    "ID": "CHEMICAL_PICKUP", "Title": "Alchemical Supplies",
    "GIVER": "Fineas Quincy",
    "PRE": [
        // Flags that are required to trigger quest.
        { "TYPE" : "QUEST_FLAG", "NAME" : "FINDING_YOUR_BALLS_1", "VALUE" : "ACTIVE" }
    ],
    "POST": [
        // Flags that are set when quest is completed.
    ],
    "CHECKS": [
        {"TYPE": "FLAG", "NAME": "FINDING_YOUR_BALLS_1", "VALUE": "ACTIVE" },
        {"TYPE": "MONEY", "NAME": "MONEY", "VALUE": 1000}
    ],
    "ON_ACCEPT" : [
    ],
    "REWARD": [
        {"REWARD_TYPE": "ITEM", "TYPE": "QUEST", "NAME": "strange chemicals", "AMOUNT": 1},
        {"REWARD_TYPE": "MONEY", "AMOUNT": -1000}
    ],
    "INTRO": "\
    NPC_NAME greets you as you enter his shop. \"Ho there traveller! What can I get for you today? Perhaps a rare tonic \
    to add sheen to your hair or a cream for your fair skin?\"\n\n\
    You explain to him that you're not in the market for beauty products, but instead looking for certain rare chemicals \
    suitable for alchemical experiments. He considers the matter briefly and then speaks.\n\n\
    \"I'm not certain what you require, but I do have a box of ju... uhm, 'rare ingredients' that I could be see my \
    way to parting with. How does a price of 1,000 coins sound?\"\n\n\
    That's a lot of money, but if you want relief from this ball crushing agony, then you'll have to pay it, right?",
    "MIDDLE" : "\
    NPC_NAME says, \"Come back when you have the 1000 coins lass and we'll make a fair trade.\"",
    "FINISH":
        "\
     NPC_NAME says, \"Ah I see you've managed to scrape together the coin? Just wait here it shant be a moment!\"\n\
     He excuses himself and ducks into a backroom. You can hear the muffled soundds of boxes crashing and glassware \
     clinking, accompanied occasionally with the sound of cursing. It takes about 10 minutes, but eventually he reappears \
     holding a rather rickety looking crate practically spilling over with strange bottles.\n\
     \"Here, as promised - a wide assortment of chemicals sure to delight any journeyman alchemist. It's been a pleasure, \
     but before you go, could I interest you in some rare bust enhancing creams?\"\n\
     You politely decline his offer. It's time to return this stuff before it explodes."
    ,
    // Don't display in journal.
    "JOURNAL_ENTRY": "HIDDEN",
    "JOURNAL_COMPLETE": "HIDDEN"
};