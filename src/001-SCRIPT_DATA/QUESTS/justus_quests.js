App = App || { Data: { }, Entity: { } };
App.Data.Quests = App.Data.Quests || { };

App.Data.Quests["JUSTUS_WHORING"] = {
    "ID": "JUSTUS_WHORING", "Title": "Getting Friendly With the Guards - Golden Isle",
    "GIVER": "Justus",
    "PRE": [
        // Flags that are required to trigger quest.
    ],
    "POST": [
        // Flags that are set when quest is completed.
    ],
    "CHECKS": [
        { "TYPE": "TRACK_CUSTOMERS",  "NAME": "GoldenIsleGuards", "VALUE": 20 }
    ],
    "ON_ACCEPT" : [
        { "TYPE" : "TRACK_CUSTOMERS", "NAME" : "GoldenIsleGuards"  }
    ],
    "REWARD": [
    ],
    "INTRO":
        "NPC_NAME says, \"Look, I can't let very brazen strumpet looking for a little coin through these gates or @@color:cyan;Bertie@@ will have me head.\"\n\n"+
        "He mutters something under his breath that sounds suspiciously like //that crazy bitch// before collecting himself and addressing you again.\n\n"+
        "\"Maybe if you want in bad enough, we can work out a deal. I can look the other way, but you have to do something for me in return... You see I have a barracks full of "+
        "horny bastards that aren't getting paid enough to afford a proper whore. You help them out and I'll help you out. Sound like a deal?\"\n",
    "MIDDLE" :
        "NPC_NAME says, \"How's it going PLAYER_NAME? The deal's the same - you give my boys enough freebies and I'll let you past these gates to ply your trade on the rich folk.\"",
    "FINISH":
    "NPC_NAME says, \"Well, well, well PLAYER_NAME. It seems you've been a busy little minx. My men have a lot of good things to say about you, so much so that I'm tempted to try "+
    "you out myself - and that's saying something since I don't usually go for 'girls' like yourself. Anyway, I'll uphold my part of the deal. You're free to come and go as you "+
    "please, but I warn ye - make any trouble and it's off to the stockade for you.\"\n\n"+
    "The warning is well received, after the railing his men gave you, the idea of being locked up and under their watch isn't one you think you can stomach."
    ,
    // Don't display in journal.
    "JOURNAL_ENTRY": "NPC_NAME has agreed to let you into the @@color:gold;High Hill District@@ if you can satisfy the sexual urges of his troops. There are 20 men in all, so it will probably "+
    "take some time.",
    "JOURNAL_COMPLETE": "Somehow you managed a tour-de-force of whoring, completely satisfying 20 of Golden Isle's horniest guardsmen. True to his word, NPC_NAME has agreed to let you enter and "+
        "exit the @@color:gold;High Hill District@@ as you please."
};