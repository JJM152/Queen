App.Data.Quests["DADDYSGIRL"] =  {
    "ID": "DADDYSGIRL", "Title": "Daddy's Little Girl",
        "GIVER": "LordRowe",
        "PRE": [
        // Flags that are required to trigger quest.
    ],
        "POST": [
        // Flags that are set when quest is completed.
    ],
        "CHECKS": [
        {"TYPE": "STYLE_CATEGORY", "NAME": "Daddy's Girl", "VALUE": 100 },
        {"TYPE": "HAIR_STYLE", "NAME": "cute pig tails", "VALUE": true },
        {"TYPE": "HAIR_COLOR", "NAME": "blond", "VALUE": true }
    ],
        "REWARD": [
    ],
        "PREREQ": "Said when you don't have the pre-req for the quest.",
        "INTRO": "You walk up to NPC_NAME and give him a deep curtsy, taking special care to thrust out your pBUST cleavage to draw his eye. He looks up at you apprehensively and for a moment you can catch the tiredness in his eyes. Clearly he has been losing sleep over the disappearance of his daughter.\n\n" +
    "You introduce yourself and step forward. @@color:DeepPink;\"Excuse me my Lord, but I've come to ask for a boon@@,\" you state as NPC_NAME eyes you up and down. It's clear from the look on his face that he has already surmised much about your current station in life.\n\n" +
    "\"@@color:Cyan;And what would a 'lady' such as yourself need from me? Can't you see that I am lost in my grief for my precious missing daughter? Begone harlot!@@\" he exclaims, his hands motioning for the door.\n\n"+
    "That could have gone better. Perhaps there might be some other way to get his attention, such as preying on his obsession with GF_NAME...",

        "MIDDLE": "NPC_NAME says, \"@@color:Cyan;I thought I told you to leave. Be gone and leave me to my grief!@@\"",
        "FINISH": "NPC_NAME looks up from his desk and takes you in. For a moment he seems puzzled and it's obvious that your superficial resemblance to GF_NAME was playing on his mind.\n\n" +
    "\"@@color:Cyan;Excuse me my dear, but why are you here? Did you get lost?@@\" he asks. Without hesitating you flounce your way over and sit on his lap, \"@@color:DeepPink;Oooph!@@\" you let out in an high voice, followed quickly by a girlish giggle.\n\n"+
    "\"@@color:DeepPink;Sowwy... It wooks wike I wost my Daddy and I can't find him anywhere. Hey mistah, would you be my new Daddy?@@\" you say, while making a show of wiggling your butt on NPC_NAME's lap. It doesn't take long before you feel something hard pushing back.\n\n" +
    "\"@@color:Cyan;What a shame little one... I'm sure we can come to some sort of... agreement.@@\" he replies, his hands gently encircling your waist. You giggle again lightly and return his embrace.\n\n" +
    "It appears your attire, a perfect mix between perversity and coquettishness has captured his attention. Now what do you do?",
        "JOURNAL_ENTRY": "NPC_NAME seems caught up in his grief for his missing daughter. Perhaps if you were to alter your appearance in a way that might draw out his 'fatherly' instincts, he might become more compliant?",
        "JOURNAL_COMPLETE": "It seems that @@color:Cyan;Lord Rowe's@@ obsession with GF_NAME had a rather 'abnormal' aspect to it. Once you changed your appearance, he was more than happy to listen to you... so long as you sit on his lap like a good little girl. In addition, you can gain access to his study at any hour of the day."
};

App.Data.Quests["LORD_ROWE_DELIVERY"] = {
    "ID": "LORD_ROWE_DELIVERY", "Title": "Smuggler's Run: Special Delivery - Lord Rowe",
    "GIVER": "LordRowe",
    "PRE": [
        { "TYPE" : "QUEST_FLAG", "NAME" : "LORD_ROWE_PORNO_DELIVERY", "VALUE" : "ACTIVE"}
    ],
    "POST": [
    ],
    "CHECKS": [
        {"TYPE": "ITEM", "NAME": "QUEST/lolita book", "VALUE": 1 }
    ],
    "ON_ACCEPT" : [
    ],
    "REWARD": [
        {"REWARD_TYPE": "ITEM", "TYPE": "LOOT_BOX", "NAME": "uncommon lolita loot box", "AMOUNT": 1}
    ],
    "INTRO": "",
    "MIDDLE": "You need to bring the following items to NPC_NAME:",
    "FINISH": "NPC_NAME looks behind you to make sure no one is watching and then greedily takes the contraband novel from your hands. "+
        "He then looks you dead in the eye and says, \"You were never here.\"\n\n"+
        "So much for a thank-you, you suppose. And to think this dirty bastard was eying his own daughter like this... Before that thought can "+
        "get much further, NPC_NAME shoves something into your hand and bids you good day. It's clear that he wants you to leave, and you don't have to guess why."
    ,
    // Don't display in journal.
    "JOURNAL_ENTRY": "HIDDEN",
    "JOURNAL_COMPLETE": "HIDDEN"
};
