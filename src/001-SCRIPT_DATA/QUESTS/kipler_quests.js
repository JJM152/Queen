App = App || { Data: { }, Entity: { } };
App.Data.Quests = App.Data.Quests || { };

App.Data.Quests["Q002"] = {
    "ID": "Q002", "Title": "Tools of the Trade - Part 1",
    "GIVER": "FirstMate",
    "PRE": [
        // Flags that are required to trigger quest.
    ],
    "POST": [
        // Flags that are set when quest is completed.
    ],
    "CHECKS": [
        {"TYPE": "NPC_MOOD", "NAME": "Crew", "VALUE": 41}
    ],
    "REWARD": [
        {"REWARD_TYPE": "ITEM", "TYPE": "COSMETICS", "NAME": "hair accessories", "AMOUNT": 40},
        {"REWARD_TYPE": "ITEM", "TYPE": "COSMETICS", "NAME": "hair products", "AMOUNT": 40},
        {"REWARD_TYPE": "ITEM", "TYPE": "COSMETICS", "NAME": "basic makeup", "AMOUNT": 60},
        {"REWARD_TYPE": "ITEM_CHOICE", "TYPE": "CLOTHES", "NAME": "bonnet", "AMOUNT": 1},
        {"REWARD_TYPE": "ITEM_CHOICE", "TYPE": "CLOTHES", "NAME": "cotton bra", "AMOUNT": 1},
        {"REWARD_TYPE": "ITEM_CHOICE", "TYPE": "CLOTHES", "NAME": "short heels", "AMOUNT": 1}
    ],
    "PREREQ": "Said when you don't have the pre-req for the quest.",
    "INTRO": "NPC_NAME says, \"The crew on the Salty Mermaid are a ravenously horny lot, but even they have standards and frankly, you don't really meet them. " +
    "If you ever want to earn enough money to buy your freedom, then you'll need to focus on improving your appearance. It's pretty simple really, " +
    "the higher your @@color:DeepPink;Beauty@@ and @@color:cyan;Style@@ are, the more money you will earn. Even a sissy like you can at least wear sexy clothes " +
    "and put on make-up to be more attractive. If you go and improve the @@color:lime;Mood@@ of the crew, I'll give you some items that can help you earn money. \"",
    "MIDDLE": "NPC_NAME says, \"Hey PLAYER_NAME... what are you doing wasting your time here when you should be on deck making the crew happy? Come back to me when you've " +
    "improved their @@color:lime;Mood@@ and then we'll talk.\"",
    "FINISH": "NPC_NAME says, \"I've heard that you've been out on deck whoring up a storm. Good, that's what you're supposed to do. You'll find that the crew is more " +
    "generous with their coin if you both look good and perform well, so here, have these, they'll help.\"",
    "JOURNAL_ENTRY": "You've been tasked by NPC_NAME to go forth and improve the @@color:lime;Mood@@ of the crew... obviously by letting them fuck you. " +
    "If you manage to complete this task, then NPC_NAME has promised to give you some items that will enhance your @@color:DeepPink;Beauty@@ and @@color:cyan;Style@@, " +
    "making it easier for you to earn more coin.",
    "JOURNAL_COMPLETE": "It was difficult, but after hours spent humiliating and degrading yourself as the personal fuck-toy for the crew of the Salty Mermaid, " +
    "you managed to make them happy enough for NPC_NAME give you his reward. It was an ominous first step into your life as a sissy prostitute."
};

App.Data.Quests["Q003"] = {
    "ID": "Q003", "Title": "Tools of the Trade - Part 2",
    "GIVER": "FirstMate",
    "PRE": [
        { "TYPE" : "QUEST_FLAG", "NAME" : "Q002", "VALUE" : "COMPLETED" }
    ],
    "POST": [
        // Flags that are set when quest is completed.
    ],
    "CHECKS": [
        {"TYPE": "NPC_MOOD", "NAME": "Cook", "VALUE": 81}
    ],
    "REWARD": [
        {"REWARD_TYPE": "ITEM", "TYPE": "FOOD", "NAME": "milkdew melon", "AMOUNT": 3},
        {"REWARD_TYPE": "ITEM", "TYPE": "FOOD", "NAME": "butter gourd", "AMOUNT": 3},
        {"REWARD_TYPE": "ITEM_CHOICE", "TYPE": "CLOTHES", "NAME": "silk bra", "AMOUNT": 1},
        {"REWARD_TYPE": "ITEM_CHOICE", "TYPE": "CLOTHES", "NAME": "frilly bloomers", "AMOUNT": 1}
    ],
    "PREREQ": "Said when you don't have the pre-req for the quest.",
    "INTRO": "NPC_NAME says, \"Not bad slut, you did pretty good keeping the crew entertained but if you want to survive on this ship then you'll need to " +
    "also get the favor of the officers. Take @@color:cyan;Cookie@@ for instance. That fat tub of lard controls the galley on this tub and if you get on his " +
    "bad side, then you'll be eating gruel and cum for the rest of your life. Go and get on his @@color:cyan;good side@@ and then come back.",
    "MIDDLE": "NPC_NAME says, \"Hey PLAYER_NAME... what are you doing wasting your time here when you should be getting on @@color:cyan;Cookie's@@ good side? Come back to me when you've " +
    "improved his @@color:magenta;Mood@@ and then we'll talk.\"",
    "FINISH": "NPC_NAME says, \"I've heard that @@color:cyan;Cookie's@@ taken a liking to you. That's good. You've probably noticed that the more people like you, the more " +
    "services they are willing to offer. That holds true for everyone really, if you think about it. Anyway, now that he's willing to occasionally feed you " +
    "better grub and not just his filthy cock, you'll have a better chance of lasting on this ship. Just be careful, some food has... certain side effects. " +
    "Why don't you experiment with these and see?\"",
    "JOURNAL_ENTRY": "You've been tasked by NPC_NAME get on @@color:cyan;Cookie's@@ good side. You'll need to make sure he's @@color:magenta;really cheerful@@.",
    "JOURNAL_COMPLETE": "It was difficult, but after days spent granting \"favors\" for Cookie in the galley, he's become quite fond of you. In the end it " +
    "paid off because not only did NPC_NAME give you a small reward, but now @@color:cyan;Cookie@@ will occasionally sell you higher quality food."
};

App.Data.Quests["Q004"] = {
    "ID": "Q004", "Title": "Tools of the Trade - Part 3",
    "GIVER": "FirstMate",
    "PRE": [
        { "TYPE" : "QUEST_FLAG", "NAME" : "Q003", "VALUE" : "COMPLETED" }
    ],
    "POST": [
        // Flags that are set when quest is completed.
    ],
    "CHECKS": [
        {"TYPE": "NPC_MOOD", "NAME": "Quartermaster", "VALUE": 81}
    ],
    "REWARD": [
        {"REWARD_TYPE": "ITEM", "TYPE": "DRUGS", "NAME": "face cream", "AMOUNT": 3},
        {"REWARD_TYPE": "ITEM", "TYPE": "DRUGS", "NAME": "fairy dust", "AMOUNT": 3},
        {"REWARD_TYPE": "ITEM_CHOICE", "TYPE": "CLOTHES", "NAME": "silk stockings", "AMOUNT": 1},
        {"REWARD_TYPE": "ITEM_CHOICE", "TYPE": "CLOTHES", "NAME": "frilly dress", "AMOUNT": 1}
    ],
    "PREREQ": "Said when you don't have the pre-req for the quest.",
    "INTRO": "NPC_NAME says, \"By now you should know the score. I won't waste any time explaining it to you, go and get @@color:cyan;Julius@@ on your side. He's a strange one " +
    "to be sure. More interested in his experiments than anything else... although, I wouldn't trust your asshole around him if you're passed out. You know what I mean.",
    "MIDDLE": "NPC_NAME says, \"Hey PLAYER_NAME}... what are you doing wasting your time here when you should be getting on @@color:magenta;Julius's@@ good side? Come back to me when you've " +
    "improved his @@color:magenta;Mood@@ and then we'll talk.\"",
    "FINISH": "NPC_NAME says, \"I've heard that @@color:cyan;Julius's@@ taken a liking to you. Just like @@color:cyan;Cookie@@, getting on his good side will make it so " +
    "that he offers you more drugs for sale and at cheaper prices as well. You'll need those drugs if you want to be able to optimize your earning potential. " +
    "Here, have these samples and you'll see what I mean. Just be careful, using too many drugs will increase your @@color:yellow;Toxicity@@, basically they're poison. " +
    "Just as you'd expect, if you're poisoned, not only will you not heal effectively, but you'll eventually take damage over time.",
    "JOURNAL_ENTRY": "You've been tasked by NPC_NAME get on @@color:cyan;Julius's@@ good side. You'll need to make sure he's @@color:magenta;really cheerful@@.",
    "JOURNAL_COMPLETE": "It was difficult, but after days spent granting \"favors\" for Julius in the cargo hold, he's become quite fond of you. In the end it " +
    "paid off because not only did NPC_NAME give you a small reward, but now @@color:cyan;Julius@@ will occasionally sell you higher quality drugs."
};
