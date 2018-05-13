App = App || { Data: { }, Entity: { } };
App.Data.Quests = App.Data.Quests || { };

App.Data.Quests["SMUGGLER_PICKUP"] = {
    "ID": "SMUGGLER_PICKUP", "Title": "Smuggler's Run - The Pickup",
    "GIVER": "Petey",
    "PRE": [
        // Flags that are required to trigger quest.
        { "TYPE" : "QUEST_FLAG", "NAME" : "ISLA_TAVERN02", "VALUE" : "ACTIVE" }
    ],
    "POST": [
        // Flags that are set when quest is completed.
    ],
    "CHECKS": [
        {"TYPE": "FLAG", "NAME": "ISLA_TAVERN02", "VALUE": "ACTIVE" }
    ],
    "ON_ACCEPT" : [
    ],
    "REWARD": [
        {"REWARD_TYPE": "ITEM", "TYPE": "QUEST", "NAME": "smugglers rum cask", "AMOUNT": 1},
        {"REWARD_TYPE": "MONEY", "AMOUNT": 200 }
    ],
    "INTRO": "",
    "MIDDLE" : "",
    "FINISH": "NPC_NAME says, \"Aye PLAYER_NAME, I have that delivery for @@color:cyan;Bosun@@ right behind the bar. Be sure to tell him I'll have the next "+
        "delivery on time. Sorry for the hassle, take this gold from me as payment for your time.\""
    ,
    // Don't display in journal.
    "JOURNAL_ENTRY": "HIDDEN",
    "JOURNAL_COMPLETE": "HIDDEN"
};
