App = App || { Data: { }, Entity: { } };
App.Data.Quests = App.Data.Quests || { };

App.Data.Quests["ISLA_TAVERN01"] = {
    "ID": "ISLA_TAVERN01", "Title": "Customer Relations",
    "GIVER": "IslaTavernKeeper",
    "PRE": [
        // Flags that are required to trigger quest.
    ],
    "POST": [
        // Flags that are set when quest is completed.
    ],
    "CHECKS": [
        {"TYPE": "NPC_MOOD", "NAME": "IslaTavernKeeper", "VALUE": 90},
        {"TYPE": "NPC_MOOD", "NAME": "IslaShopKeeper", "VALUE": 90}
    ],
    "REWARD": [
        {"REWARD_TYPE": "ITEM", "TYPE": "LOOT_BOX", "NAME": "rare food loot box", "AMOUNT": 1},
        {"REWARD_TYPE": "ITEM", "TYPE": "LOOT_BOX", "NAME": "rare sissy loot box", "AMOUNT":  1}
    ],
    "INTRO":  "NPC_NAME says, \"Hey there PLAYER_NAME... Have I seen you around here before? You look somewhat familiar to me. Ah, never you mind me "+
              "I must be mistaken. Well, anyway, business has been dull around here lately, both for me and my lady @@color:cyan;Heddy@@. No matter what we "+
              "do, we just can't seem to get any customers these days!\"\n\n"+
              "Well, you think to yourself, if he could only stop pirates from abducting them than his business might not be so bad...\n\n"+
              "\"Anyway,\" he continues, \"We could use some help and a pretty young thing like yourself might be just the help we need. Why don't you "+
              "work a few shifts in our establishments and if you do a good enough job, I'll make it worth your while!\"\n\n"+
              "Definitely not the most disgusting offer anyone's made to you recently, so this might be worth looking into.",
    "MIDDLE": "NPC_NAME says, \"Well, PLAYER_NAME, it's coming along, but we're not quite there yet. Keep at it though, I'm sure you'll have our establishments bursting with customers in no time!\"",
    "FINISH": "NPC_NAME says, \"Good job PLAYER_NAME! I knew you could do it and @@color:cyan;Heddy@@ and me are happier than a couple of pigs in shit! " +
              "Here, take this for your troubles and come back and see me sometime. I could always use a couple more favors.\"",
    "JOURNAL_ENTRY": "You've been asked by NPC_NAME to help out his and his girlfriends establishments on @@color:gold;Isla Harbor@@. Work some jobs, do well, and make them happy.",
    "JOURNAL_COMPLETE": "It wasn't the worst work you done, in fact it was delightfully boring. In any case, you now find yourself in NPC_NAME's good graces."
};

App.Data.Quests["ISLA_TAVERN02"] = {
    "ID": "ISLA_TAVERN02", "Title": "Smuggler's Run",
    "GIVER": "IslaTavernKeeper",
    "PRE": [
        // Flags that are required to trigger quest.
        { "TYPE" : "QUEST_FLAG", "NAME" : "ISLA_TAVERN01", "VALUE" : "COMPLETED" }
    ],
    "POST": [
        // Flags that are set when quest is completed.
    ],
    "CHECKS": [
        {"TYPE": "QUEST_ITEM", "NAME": "smugglers rum cask", "VALUE": 1 }
    ],
    "ON_ACCEPT" : [
        { "TYPE" : "QUEST_FLAG", "NAME" : "SMUGGLER_PICKUP", "VALUE" : "ACTIVE" }
    ],
    "REWARD": [
        {"REWARD_TYPE": "ITEM", "TYPE": "WEAPON", "NAME": "worn machete", "AMOUNT": 1}
    ],
    "INTRO": "NPC_NAME says, \"Why hello again PLAYER_NAME. You were telling me that you're part of a crew that sails around these islands, right? Well I could use a little favor.\"\n\n"+
             "He gestures to the shelf behind him and continues speaking, \"I'm nearly out of my best seller, 'Smuggler's Rum'! I have a deal with @@color:cyan;Petey O'Bannon@@ on @@color:gold;Golden Isle@@, he's supposed "+
             "to regularly ship me a resupply, but lately they've stopped coming. Can you go and find out what's the problem and maybe bring me back a cask o' his special rum?\"",
    "MIDDLE": "NPC_NAME says, \"How's it going PLAYER_NAME? Did you get my rum off of old Petey yet?\"",
    "FINISH": "NPC_NAME says, \"Thanks PLAYER_NAME! I'm practically down to my last drop and there are plenty of thirsty scaliwags around these parts! Since you seem to be the handy type, why "+
              "don't you take this.\"\n\n"+
              "He reaches behind his bar and pulls out a @@color:purple;worn machete@@. You momentarily jump back in surprise!\n\n"+
              "NPC_NAME chuckles to himself. \"Don't be afraid, I'm giving this to you nice and proper. It's served me well back when I was a freebooter. An all around handy tool and good "+
              "for a fight when you're in a pinch."
    ,
    "JOURNAL_ENTRY": "NPC_NAME on @@color:gold;Isla Harbor@@ wants you to collect a cask of Smuggler's Rum from @@color:cyan;Petey O'Bannon@@ on @@color:gold;Golden Isle@@.",
    "JOURNAL_COMPLETE": "You fetched a cask of Smuggler's Rum for NPC_NAME and he rewarded you with a @@color:purple;worn machete@@. It's a useful tool for any pirate or explorer."
};

