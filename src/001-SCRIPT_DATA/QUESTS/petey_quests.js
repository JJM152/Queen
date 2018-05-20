App = App || { Data: { }, Entity: { } };
App.Data.Quests = App.Data.Quests || { };

App.Data.Quests["SMUGGLER_PICKUP"] = {
    "ID": "SMUGGLER_PICKUP", "Title": "Smuggler's Run: The Pickup",
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
        {"REWARD_TYPE": "MONEY", "AMOUNT": 200 },
        {"REWARD_TYPE": "MOOD", "NAME" : "Petey", "AMOUNT": 10 }
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

App.Data.Quests["LORD_ROWE_PORNO_DELIVERY"] = {
    "ID": "LORD_ROWE_PORNO_DELIVERY", "Title": "Smuggler's Run: Special Delivery - Lord Rowe",
    "GIVER": "Petey",
    "PRE": [
        { "TYPE" : "STYLE_CATEGORY", "NAME" : "Pirate Slut", "VALUE" : 50 }
    ],
    "POST": [
        // Flags that are set when quest is completed.
    ],
    "CHECKS": [
        {"TYPE": "FLAG", "NAME": "LORD_ROWE_DELIVERY", "VALUE": "COMPLETED" }
    ],
    "ON_ACCEPT" : [
        { "TYPE" : "QUEST_FLAG", "NAME" : "LORD_ROWE_DELIVERY", "VALUE" : "ACTIVE" },
        { "TYPE" : "QUEST_ITEM", "NAME" : "lolita book", "VALUE" : 0 }
    ],
    "REWARD": [
        { "REWARD_TYPE": "MONEY", "AMOUNT": 500 },
        { "REWARD_TYPE": "UNLOCK_SHOP", "NAME" : "SMUGGLERS", "VALUE" : "steel cutlass", "NPC" : "Petey"  },
        { "REWARD_TYPE": "MOOD", "NAME" : "Petey", "AMOUNT": 10 }
    ],
    "INTRO":
        "\"Hey there PLAYER_NAME,\" say NPC_NAME, \"You look like the kind of sort who would be up for a little, how shall we say it... 'less than legal' activities?\"\n\n" +
        "You're not sure what he's implying, but after what you've gone through, it couldn't hurt to hear the man out. You simply nod your head for him to continue.\n\n" +
        "\"You see, I've got this client on Isla Harbor, a man, a very important man, who has what we might call 'peculiar tastes'. Now, there's no harm in having a little bit " +
        "of a fantasy life, but the law doesn't really see it that way. That's where you and me come in.\"\n\n" +
        "He clears his throat with a drink and then reaches behind the bar to retrieve a book. He hands it to you...\n\n" +
        "\"It's a simple job, all you need to do is take that book to his Lordship on Isla Harbor. It might be hard to get to him, and under no circumstances are you to tell " +
        "anyone the real reason why you need to see him, and of course if you get caught with that he'll probably have you thrown in the stocks, but if you manage to somehow deliver that book..." +
        "Well, let's just say I'll pay you well for your services.\"\n\n" +
        "Ignoring the fact that you've just been asked to deliver contraband to your fiance's father, the job itself does seem simple enough on it's surface."
    ,
    "MIDDLE" : "NPC_NAME says, \"Hey PLAYER_NAME, did you manage to deliver the goods to @@color:cyan;Lord Rowe@@ yet? Remember, don't get caught, and if you do, we never met.\"",
    "FINISH":
        "\"Well done PLAYER_NAME, glad to see you delivered the goods and with no one the wiser. I think you might be just the kinda dirty lass we need around here. You know, "+
        "one who can get the job done. Tell you what, check the shop from time to time and see what we have for sale. I'll open up the 'special inventory' just for you.\""
    ,
    // Don't display in journal.
    "JOURNAL_ENTRY": "You've been asked to deliver a contraband book to @@color:cyan;Lord Rowe@@ on @@color:gold;Isla Harbor@@.",
    "JOURNAL_COMPLETE": "You delivered the contraband book to @@color:cyan;Lord Rowe@@ and while your purse is a fair bit richer, you shudder to think of the things you learned about the man and "+
        "his decided unwholesome interest in his own daughter."
};
