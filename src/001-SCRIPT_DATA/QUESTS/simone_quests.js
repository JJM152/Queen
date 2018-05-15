App = App || { Data: { }, Entity: { } };
App.Data.Quests = App.Data.Quests || { };

App.Data.Quests["SIMONE_MISSING_FRIEND"] = {
    "ID": "SIMONE_MISSING_FRIEND", "Title": "Simone's Missing Friend",
    "GIVER": "Simone",
    "PRE": [ ],
    "POST": [ ],
    "CHECKS": [
        {"TYPE": "QUEST_ITEM", "NAME": "14 inch purple dildo", "VALUE": 1 }
    ],
    "ON_ACCEPT" : [ ],
    "REWARD": [
        {"REWARD_TYPE": "MONEY", "AMOUNT": 200 },
        {"REWARD_TYPE" : "MOOD", "NAME" : "Simone", "AMOUNT" : 15},
        {"REWARD_TYPE": "ITEM_CHOICE", "TYPE": "LOOT_BOX", "NAME": "legendary food loot box",      "AMOUNT": 1},
        {"REWARD_TYPE": "ITEM_CHOICE", "TYPE": "LOOT_BOX", "NAME": "legendary lolita loot box",    "AMOUNT": 1},
        {"REWARD_TYPE": "ITEM_CHOICE", "TYPE": "LOOT_BOX", "NAME": "legendary sissy loot box",     "AMOUNT": 1}
    ],
    "INTRO":
        "NPC_NAME eyes you up and down.\n\n"+
        "\"You look like a well-traveled slut,\" she says. \"Perhaps you can help me with a little problem?\" She begins her tale.\n\n"+
        "\"Despite what you might think, being a Madame of a bunch of whores doesn't give you much time for what we might call 'personal gratification'. Up until "+
        "recently I had a...\" she pauses for a moment and then continues, \"Let's call it a 'special tool' that helped me take the edge off. "+
        "One of the sluts who worked here decided to leave my employ last month and in the process of looting as much coin as she could, she also made off with my 'friend'. "+
        "I'm sure it was just because she's a spiteful slattern.\"\n\n"+
        "You think you know where this is heading...\n\n"+
        "\"I've looked for a replacement, but they've all been... lacking. Tell you what, PLAYER_NAME, if you can find me a replacement, and it really has to be huge you see, "+
        "then I'll reward you handsomely as well as let you work here as a free agent.\""
    ,
    "MIDDLE" : "NPC_NAME says, \"Hey, PLAYER_NAME, how does the search go? I hope you find something soon, the boys around here just can't measure up, if you know what I mean.\"",
    "FINISH":
        "NPC_NAME says, \"Goodness look at the size of this thing! Ahh... he's perfect PLAYER_NAME!\"\n\n" +
        "For a moment, you think NPC_NAME is about to swoon, however she recovers and tears her eyes away from the giant purple dildo and locks them on you.\n\n" +
        "\"Like I promised, I'll let you work out of my bar when you're in town and hell, I'll throw in a special reward as well. I'm sure there'll be something " +
        "inside one of these that an enterprising whore like yourself can find useful."
    ,
    // Don't display in journal.
    "JOURNAL_ENTRY": "NPC_NAME has asked you to find her a 'replacement' for her 'special tool' that was stolen from her room. The only real requirement she mentioned is that it needs to be 'huge'.",
    "JOURNAL_COMPLETE": "You're not too sure how you feel about handing in your fiance's hidden dildo to a complete stranger. On one hand, it's kind of disgusting, on the other hand "+
        "now you can whore out of the @@color:gold;'Lusty Lass'@@, which is... well, honestly, kind of disgusting as well. Win some, lose some."
};
