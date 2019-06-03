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
    "FINISH": "\
        NPC_NAME says, s(Aye PLAYER_NAME, I have that delivery for @@color:cyan;Bosun@@ right behind the bar. Be sure to \
        tell him I'll have the next delivery on time. Sorry for the hassle, take this gold from me as payment for your time.)"
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
        { "TYPE" : "QUEST", "NAME" : "LORD_ROWE_DELIVERY", "VALUE" : "START" },
        { "TYPE" : "ITEM", "NAME" : "QUEST/lolita book", "VALUE" : 1 }
    ],
    "REWARD": [
        { "REWARD_TYPE": "MONEY", "AMOUNT": 500 },
        { "REWARD_TYPE" : "STORE", "NAME" : "SMUGGLERS", "VALUE" :  "steel cutlass",   "OPT" : "UNLOCK"    },
        { "REWARD_TYPE": "MOOD", "NAME" : "Petey", "AMOUNT": 10 }
    ],
    "INTRO": "\
        s(Hey there PLAYER_NAME,) say NPC_NAME, s(You look like the kind of sort who would be up for a little, how shall we say \
        it... 'less than legal' activities?)\n\n\
        You're not sure what he's implying, but after what you've gone through, it couldn't hurt to hear the man out. You simply nod \
        your head for him to continue.\n\n\
        s(You see, I've got this client on Isla Harbor, a man, a very important man, who has what we might call 'peculiar tastes'. \
        Now, there's no harm in having a little bit of a fantasy life, but the law doesn't really see it that way. That's where you \
        and me come in.)\n\n\
        He clears his throat with a drink and then reaches behind the bar to retrieve a book. He hands it to you...\n\n\
        s(It's a simple job, all you need to do is take that book to his Lordship on Isla Harbor. It might be hard to get to him, and \
        under no circumstances are you to tell anyone the real reason why you need to see him, and of course if you get caught with \
        that he'll probably have you thrown in the stocks, but if you manage to somehow deliver that book... Well, let's just say \
        I'll pay you well for your services.)\n\n\
        Ignoring the fact that you've just been asked to deliver contraband to your fiance's father, the job itself does seem simple \
        enough on it's surface."
    ,
    "MIDDLE": "\
        NPC_NAME says s(Hey PLAYER_NAME, did you manage to deliver the goods to @@color:cyan;Lord Rowe@@ yet? Remember, don't\
        get caught, and if you do, we never met.)",
    "FINISH":"\
        s(Well done, PLAYER_NAME, glad to see you delivered the goods and with no one the wiser. I think you might be just the kinda \
        dirty lass we need around here. You know, one who can get the job done. Tell you what, check the shop from time to time and \
        see what we have for sale. I'll open up the 'special inventory' just for you.)"
    ,
    // Don't display in journal.
    "JOURNAL_ENTRY": "You've been asked to deliver a contraband book to @@color:cyan;Lord Rowe@@ on @@color:gold;Isla Harbor@@.",
    "JOURNAL_COMPLETE": "You delivered the contraband book to @@color:cyan;Lord Rowe@@ and while your purse is a fair bit richer, you shudder to think of the things you learned about the man and "+
        "his decided unwholesome interest in his own daughter."
};

App.Data.Quests["FORGED_LETTER"] = {
    "ID": "FORGED_LETTER", "Title": "Forgery is a Crime - Letter of Introduction",
    "GIVER": "Petey",
    // Don't display in journal.
    "JOURNAL_ENTRY": "HIDDEN",
    "JOURNAL_COMPLETE": "HIDDEN",
    "PRE": [
        {
            "TYPE" : "QUEST_FLAG", "NAME" : "BELLA_INTRODUCTION", "VALUE" : "ACTIVE"
        }
    ],
    "POST": [],
    "CHECKS": [
        {
            "TYPE": "FLAG", "NAME": "BELLA_INTRODUCTION", "VALUE": "ACTIVE"
        },
        {
            "TYPE": "MONEY", "NAME": "MONEY", "VALUE": 500
        }
    ],
    "ON_ACCEPT" : [],
    "REWARD": [
        {
            "REWARD_TYPE": "ITEM", "TYPE": "QUEST", "NAME": "letter of introduction", "AMOUNT": 1
        },
        {
            "REWARD_TYPE": "MONEY", "AMOUNT": -500
        }
    ],
    "INTRO": "\
        NPC_NAME greets you as you enter his shop. s(Ho there traveller! What can I get for you today? Perhaps one o' \
        our famous ales?)\n\n\
        You approach the bar top - you've heard rumors about what kind of man NPC_NAME is and if they're right, he \
        might be just the man to help you. You briefly explain the situation to him and he strokes his chin, \
        in an apparent act of deep thought.\n\n\
        s(It shouldn't be too hard to fool that dimwit, her tits are bigger than her brain for sure. Tell you \
        what PLAYER_NAME, pay me <span style='color:gold'>500 coins</span> and I'll set you up with a propper \
        letter of introduction, well at least propper enough to fool that biddy.)\n\n\
        It's a little pricey, especially just to get access to a place where you can spend even MORE money, but \
        your curiosity is eating away at you... what to do?\
        ",
    "MIDDLE" : "\
        NPC_NAME says, s(Come back when you have the <span style='color:gold'>500 coins</span> coins lass and I'll \
        get you that letter.)\
        ",
    "FINISH":
        "\
        NPC_NAME says, s(Ah I see you've managed to scrape together the coin? Just wait here it shant be a moment!)\n\n\
        He excuses himself and ducks into a backroom. It takes about 10 minutes, but eventually he reappears \
        holding a thin piece of vellium parchment.\n\n\
        s(Here, as promised - a proper letter of introduction, seal and everything. Not my best work, but \
        definitely good enough to fool dimwit Darling)\n\n\
        You politely accept the letter from him and go on your way. \
     "
};

// Part of Bertie's Queen's Favor Part 2
App.Data.Quests["BERTIE_QUEEN_PT2_DELIVERY_A"] = {
    "ID": "BERTIE_QUEEN_PT2_DELIVERY_A", 
    "Title": "Chasing the Thieves",
    "GIVER": "Petey",
    "PRE": [
        {
            "TYPE" : "QUEST_FLAG", "NAME" : "BERTIE_QUEEN_PT2", "VALUE" : "ACTIVE"
        }
    ],
    "POST": [],
    "CHECKS": [
        {
            "TYPE": "FLAG", "NAME": "BERTIE_QUEEN_PT2_DELIVERY_B", "VALUE": "COMPLETED",
            ALT_TITLE: "Deliver the parcel to Jonah Blythe"
        }
    ],
    "ON_ACCEPT" : [
        { "TYPE" : "QUEST", "NAME" : "BERTIE_QUEEN_PT2_DELIVERY_B", "VALUE" : "START" },
        { "TYPE" : "ITEM", "NAME" : "QUEST/strange parcel", "VALUE" : 1 }
    ],
    "REWARD": [
        { "REWARD_TYPE": "MOOD", "NAME" : "Petey", "AMOUNT": 10 }
    ],
    "INTRO": "\
        NPC_NAME greets you as you enter his shop. s(Ho there traveller! What can I get for you today? Perhaps one o' \
        our famous ales?)\n\n\
        You approach the bar top - you've heard rumors about what kind of man NPC_NAME is and if they're right, he \
        might be just the man to help you. You briefly explain the situation to him and he strokes his chin, \
        in an apparent act of deep thought.\n\n\
        s(Now, let's say I do know something about what yee're after, I'm not quite so sure I can say it outright, \
        not even under threat of the <span style='color:cyan;'>Pirate Queen's</span> wrath. But tell you what, \
        you do a favor for old Petey here and I might be able to sing you a line or two that could help.)\n\n\
        Frankly, this is already better than you had hoped for. A little 'quid pro quo', as long as it doesn't \
        involve your poor abused asshole, isn't out of the question.\n\n\
        NPC_NAME reaches below his bar top and produces a small package. He then hastily writes a note and stuffs \
        it inside before waving the entire thing in your face.\n\n\
        s(Take this to my man on <span style='color:gold'>Port Royal</span>, a crooked Constable by the name \
        of <span style='color:cyan'>Jonah Blythe</span>. He'll set you straight... just don't lose that \
        package and we'll be right as rain miss.)\
        ",
    "MIDDLE" : "\
        NPC_NAME says, s(Did you deliver that package yet? What? Well then what are you doing lollygagging around \
        these parts!)\
        ",
    "FINISH":
        "",
     "JOURNAL_ENTRY": "\
     NPC_NAME has offered to give up some valuable information about the thieves that stole part of \
     <span style='color:cyan'>Bertie's</span> treasure map. All you need to do is to deliver this parcel \
     he gave you to his inside man on <span style='color:gold'>Port Royal</span>, a crooked Constable \
     by the name of <span style='color:cyan'>Jonah Blythe</span>.\
     ",
     "JOURNAL_COMPLETE": "\
     You handed over the parcel to <span style='color:cyan'>Jonah Blythe</span> only to learn that NPC_NAME \
     had cleverly made you an accomplice in the theft. Still, he did come through with his words and you \
     did learn some valuable information - <span style='color:cyan'>Blythe</span> was able to reproduce \
     for you a strange symbol that the thieves all wore, an emblem of some sort of arcane or mystical \
     significance. Now, you just need to get someone to tell you what it all means.\
     ",
};
