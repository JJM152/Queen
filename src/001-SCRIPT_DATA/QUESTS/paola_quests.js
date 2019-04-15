App.Data.Quests["PAOLA_FETCH"] = {
    "ID": "PAOLA_FETCH", "Title": "Voodoo Supplies",
    "GIVER": "Paola",
    "PRE": [ ],
    "POST": [ ],
    "CHECKS": [
        { "TYPE": "ITEM", "NAME": "QUEST/bag of mojo", "VALUE": 1 }
    ],
    "ON_ACCEPT" : [
        { "TYPE" : "QUEST", "NAME" : "VOODOO_PICKUP", "VALUE" : "START" }
    ],
    "REWARD": [
        {"REWARD_TYPE": "MONEY", "AMOUNT": 200 }
    ],
    "INTRO":
        "NPC_NAME laughs heartily as you approach. \"You be seekin' the great powah of NPC_NAME eh???\"\n\n"+
        "You're not sure if that statement is true or not, but... maybe? The strange brown woman continues her speech.\n\n" +
        "\"Ah well, I can't be doin' mah hexin' until I restock mah mojo, ya ken wot I mean?\"\n\n"+
        "You're not actually sure what she means, but you suspect that if you were to bring her some 'mojo' she might be able to do some magic for you?\n\n"+
        "NPC_NAME says, \"Find that white bitty @@color:cyan;Blanche@@ in @@color:gold;Port Royale@@ and get me my mojo!\"",
    "MIDDLE": "You need to bring the following items to NPC_NAME:",
    "FINISH":
        "NPC_NAME says, \"Thanks be PLAYER_NAME! I be scraping da bottem o' da barrel, but now with dis, mah mojo is back!\"\n\n"+
        "She throws back her head and cackles to herself, her massive mammaries shaking like two giant globes of jello.\n\n"+
        "NPC_NAME says, \"If yee be wantin' the gifts o' the spirits, let me know and I'll be castin' dem hexes full on ya bet!\"",
    "JOURNAL_ENTRY":
        "NPC_NAME on @@color:gold;Abamond@@ wants your help in replenishing her 'mojo', whatever that means. Supposedly someone named "+
        "@@color:cyan;Blanche@@ in @@color:gold;Port Royale@@ has it?",
    "JOURNAL_COMPLETE": "You fetched the bag of mojo for NPC_NAME. She will now provide some specialized 'voodoo' services."
};
