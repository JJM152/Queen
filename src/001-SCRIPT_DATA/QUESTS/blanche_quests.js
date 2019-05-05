App.Data.Quests["VOODOO_PICKUP"] = {
    "ID": "VOODOO_PICKUP", "Title": "Voodoo Supplies",
    "GIVER": "Blanche",
    "PRE": [
        // Flags that are required to trigger quest.
        { "TYPE" : "QUEST_FLAG", "NAME" : "PAOLA_FETCH", "VALUE" : "ACTIVE" }
    ],
    "POST": [
        // Flags that are set when quest is completed.
    ],
    "CHECKS": [
        {"TYPE": "FLAG", "NAME": "PAOLA_FETCH", "VALUE": "ACTIVE" }
    ],
    "ON_ACCEPT" : [
    ],
    "REWARD": [
        {"REWARD_TYPE": "ITEM", "TYPE": "QUEST", "NAME": "bag of mojo", "AMOUNT": 1}
    ],
    "INTRO": "",
    "MIDDLE" : "",
    "FINISH":
        "NPC_NAME says s(So that crazy witch finally sent someone to pick this feral shit up, did she? Don't look at me like \
        that, if you had this bag of rotting garbage festering in your house, you'd be mad too.)\n\n\
        She sighs sadly and then reaches behind a counter to retrieve a large brown bag. You swear it's dripping with... \
        well, something.\n\n\
        s(Just get this out of my sight, please!) she pleads as she pushes the bag into your hands."
    ,
    // Don't display in journal.
    "JOURNAL_ENTRY": "HIDDEN",
    "JOURNAL_COMPLETE": "HIDDEN"
};
