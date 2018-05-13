App = App || { Data: { }, Entity: { } };
App.Data.Quests = App.Data.Quests || { };

App.Data.Quests["THEBACKDOOR"] = {
    "ID": "THEBACKDOOR", "Title": "The Backdoor",
    "GIVER": "Jarvis",
    "PRE": [
        // Flags that are required to trigger quest.
    ],
    "POST": [
        // Flags that are set when quest is completed.
    ],
    "CHECKS": [
        {"TYPE": "FLAG", "NAME": "FuckedJarvisSilly", "VALUE": true}
    ],
    "REWARD": [
    ],
    "PREREQ": "Said when you don't have the pre-req for the quest.",
    "INTRO": "You approach NPC_NAME and give him what you hope is a graceful curtsy.\n\n\"@@color:DeepPink;Excuse me sir@@\", you speak, \"@@color:DeepPink;Is there anyway I could come and visit his Lordship? It's a matter of urgent importance.@@\"\n\n"+
    "NPC_NAME takes one look at you and raises his eyebrow. \"@@color:Cyan;Sorry miss, but his Lordship is not currently taking visitors@@\". He pauses for a moment and then adds, \"@@color:Cyan;Or accepting services, of a particular kind...@@\"\n\n"+
    "It's pretty obvious that the stuffy old bastard means that the Governor isn't looking for a whore. You're not sure if you should be insulted or not, particularly considering how you've been spending your "+
    "time recently. In any case, you'll have to come up with some sort of plan in order to gain access to the Governor.",
    "MIDDLE": "NPC_NAME says, \"@@color:Cyan;Sorry@@ PLAYER_NAME... @@color:Cyan;but the Governor is still not taking visitors. Please come back in a few days.@@\"",
    "FINISH": "Should never show up.",
    "JOURNAL_ENTRY": "There must be some way to gain access to the Governor or at least entrance to the Mansion after hours. You'll have to keep your eyes open for an opportunity.",
    "JOURNAL_COMPLETE": "Using a combination of alcohol and your whorish skills, you were able to completely exhaust Jarvis and loot him of his house key. You can now come and go into the mansion after dark via the back door."
};
