App.Data.Quests["MAMAZON_CHAMP"] = {
    "ID": "MAMAZON_CHAMP",
    "Title": "Join the Tribe",
    "GIVER": "Bustilla",
    "PRE": [
        {
            "TYPE" : "QUEST_FLAG", "NAME" : "GLUTEZON_CHAMP",  "CONDITION": "ne", "VALUE" : "COMPLETED",
            "TYPE" : "QUEST_FLAG", "NAME" : "GLUTEZON_CHAMP",  "CONDITION": "ne", "VALUE" : "ACTIVE",
        }
    ],
    "CHECKS": [
        {
            "TYPE" : "QUEST_FLAG", "NAME" : "MAMAZON_CHAMP_SUB1", "VALUE" : "COMPLETED", "ALT_TITLE" : "Find out what is destroying the crops."
        }
    ],
    "POST": [
        {
            "TYPE": "SKILL", "NAME": "BoobJitsu", "VALUE": 10
        },
        {
            "TYPE" : "NPC_STAT", "NAME" : "Mood", "VALUE" : 30
        }
    ],
    "REWARD": [
        {
            "REWARD_TYPE": "ITEM_CHOICE", "TYPE": "LOOT_BOX", "NAME": "legendary food loot box", "AMOUNT": 1
        },
        {
            "REWARD_TYPE": "ITEM_CHOICE", "TYPE": "LOOT_BOX", "NAME": "legendary lolita loot box", "AMOUNT": 1
        },
        {
            "REWARD_TYPE": "ITEM_CHOICE", "TYPE": "LOOT_BOX", "NAME": "legendary pirate loot box", "AMOUNT": 1
        },
        {
            "REWARD_TYPE": "ITEM_CHOICE", "TYPE": "LOOT_BOX", "NAME": "legendary dancer loot box", "AMOUNT": 1
        },
        {
            "REWARD_TYPE": "ITEM_CHOICE", "TYPE": "LOOT_BOX", "NAME": "legendary sissy loot box", "AMOUNT": 1
        },

     ],
    "INTRO": "\
    NPC_NAME greets you with a warm smile. s(Hail outsider) she says while eying your pBUST chest. \
    s(Are you interested in joining our tribe? We typically welcome those who possess... such quality attributes.) \n\n\
    Okay, she's not being coy about this at all.\n\n\
    sp(How could I join the Mamazons?) you ask... against your better judgement. \n\n\
    NPC_NAME's smile widens, s(Yes... well, we've been having some troubles recently... something, or \
    //someone// has been sneaking into our farms at night and laying waste to our precious crops of \
    melons.) \n\n\
    You try your hardest to keep a straight face.\n\n\
    s(If you could find out what's going on and even put a stop to it, well we'd teach you our ways and \
    welcome you to the tribe as a sister.)\n\n\
    It's not a teribly compelling offer on it's surface, but perhaps being a 'sister' of a tribe of \
    angry jungle women might come in handy some day? \
        ",
    "MIDDLE":"\
    s(How goes the search?), says NPC_NAME.\n\n\
    You give her a non-commital answer, but assure her that you'll be doing something about it soon.\
        ",
    "FINISH":"\
    NPC_NAME greets you warmly, pulling you into an embrace.\n\n\
    s(Welcome back.. sister!) NPC_NAME exclaims with a smile. s(The villagers have been talking about \
    your mighty victory over the cruel Glutezons. We're thrilled that not only did you stop the \
    destruction of our farms, but you taught those skanky bitches a lesson to boot!) \n\n\
    You try not to pay attention to NPC_NAME's slight slip in decorum, however she still catches \
    herself and recovers with a fake cough.\n\n\
    s(Yes, well, I'm a Queen of my word. From now on you are consider a fellow sister of the Mamazon \
    tribe and as such I will personally teach you our secret martial art - Boob-Jitsu and provide you \
    with your pick of these spoils our scouts have found).\n\n\
    This turned out far better than your initial expectations. It's a pity about the Glutezons though, \
    they'll probably never talk to you again.\
        ",
    "JOURNAL_ENTRY" :"\
    NPC_NAME has asked you to put a stop to whatever is spoiling the village crops. If you do so, she has \
    promised to promote you to a member of her tribe, for whatever good that's worth. \
        ",
    "JOURNAL_COMPLETE" :"\
    You found out that the Glutezons were destroying the village crops in secret late night raids. After \
    defeating the raiding party and sending them packing, you were promoted to a full member of the \
    Mamazon tribe and taught their secret martial art, Boob-Jitsu!\
        "
};