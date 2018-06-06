App.Data.Quests["CHARMAINE_CUSTOMER_SERVICE"] = {
    "ID": "CHARMAINE_CUSTOMER_SERVICE", "Title": "Customer Service - The Saucy Slattern",
    "GIVER": "Charmaine",
    "PRE": [
        { "TYPE" : "QUEST_FLAG", "NAME" : "CHARMAINE_JOB_1", "VALUE" : "COMPLETED" },
        { "TYPE" : "QUEST_FLAG", "NAME" : "CHARMAINE_JOB_2", "VALUE" : "COMPLETED" },
        { "TYPE" : "QUEST_FLAG", "NAME" : "CHARMAINE_JOB_3", "VALUE" : "COMPLETED" },
        { "TYPE" : "QUEST_FLAG", "NAME" : "CHARMAINE_JOB_4", "VALUE" : "COMPLETED" }
    ],
    "POST": [ ],
    "CHECKS": [
        { "TYPE": "TRACK_CUSTOMERS",  "NAME": "SaucySlattern", "VALUE": 20 }
    ],
    "ON_ACCEPT" : [
        { "TYPE" : "TRACK_CUSTOMERS", "NAME" : "SaucySlattern"  }
    ],
    "REWARD": [
        {"REWARD_TYPE": "MONEY", "AMOUNT": 1000 },
        {"REWARD_TYPE" : "MOOD", "NAME" : "Charmaine", "AMOUNT" : 15},
        {"REWARD_TYPE" : "SLOT" },
        {"REWARD_TYPE": "ITEM_CHOICE", "TYPE": "REEL", "NAME": "RARE_HANDMAIDEN",           "AMOUNT": 1},
        {"REWARD_TYPE": "ITEM_CHOICE", "TYPE": "REEL", "NAME": "RARE_BREATH_MINT",          "AMOUNT": 1},
        {"REWARD_TYPE": "ITEM_CHOICE", "TYPE": "REEL", "NAME": "RARE_ANAL_ANGEL",           "AMOUNT": 1},
        {"REWARD_TYPE": "ITEM_CHOICE", "TYPE": "REEL", "NAME": "RARE_BOOBJITSU_MATRIARCH",  "AMOUNT": 1},
        {"REWARD_TYPE": "ITEM_CHOICE", "TYPE": "REEL", "NAME": "UNCOMMON_CONCUBINE",        "AMOUNT": 1},
        {"REWARD_TYPE": "ITEM_CHOICE", "TYPE": "REEL", "NAME": "LEGENDARY_WHORE",           "AMOUNT": 1}
    ],
    "INTRO":
    "NPC_NAME greets you warmly with a smile and says, \"Well, if it isn't PLAYER_NAME? The boys here at the Lass sure can't get enough of you, can they?\"\n\n"+
    "She seems to consider something for a moment and then grabs you by the arm, pulling you in close.\n\n"+
    "\"You've become pretty popular here and I'm thinkin' there's a way we could both benefit,\" she says. The tone of her voice makes you sure that any sort of agreement is "+
    "definitely going to favor her, but still you're intrigued.\n\n"+
    "NPC_NAME leads you over to the main floor, looking out upon the clientele gathered for the days festivities. There's a literal throbbing mass of horny men and dozens of "+
    "girls working the crowd, in more ways than one.\n\n"+
    "\"Tell you what, you work for me for a bit all proper like - fuck my customers, and fuck them //good//. Drive them crazy. Make it so they can't shut up about the whores here "+
    "at the @@color:gold;Saucy Slattern@@ and I'll give you a cut of the house profits, and maybe a little present. What do you say to that?\"\n\n"+
    "It's an interesting deal, and obviously it's not the first time you've worked for NPC_NAME. You know she pays well and keeps her word. "
    ,
    "MIDDLE" : "NPC_NAME says, \"Hey, PLAYER_NAME, keeping your holes busy I hope? The words starting to get around, just keep at it.\"",
    "FINISH":
    "NPC_NAME says, \"Nicely done PLAYER_NAME. Just this morning I heard a chaplain talking to a baker outside his stall about the class of sluts we have here and I'm sure we owe a lot of that to you.\"\n\n" +
    "It's dubious praise, but considering your circumstances, you'll take it.\n\n" +
    "\"Like I promised, here's your cut of the take, oh and also, I threw in a little something extra that'd be of particular use to a working girl like yourself.\""
    ,
    "JOURNAL_ENTRY": "NPC_NAME has asked you to work at her establishment, whoring for her customers and satisfying them so that they'll spread the word about the experience.",
    "JOURNAL_COMPLETE": "You completed NPC_NAME's dubious task, screwing and sucking your way through her customer base and helping increase the notoriety of the @@color:gold;Saucy Slattern@@. "+
    "NPC_NAME was so grateful she gave you a fair sized cut of the profits and overall increased your whoring ability."
};