App.Data.Quests["ROYAL_ENTRANCE_2"] = {
    "ID" : "ROYAL_ENTRANCE_2",
    "Title" : "Anal Assistance",
    "GIVER" : "Jameson",
    "PRE" : [
        {
            "TYPE" : "QUEST_FLAG", "NAME" : "ROYAL_ENTRANCE", "VALUE" : "ACTIVE"
        }
    ],
    "CHECKS" : [
        {
            "TYPE": "ITEM", "NAME": "QUEST/bucket of refined bobola sap", "VALUE": 1,
        },
        {
            "TYPE" : "ITEM", "NAME" : "FOOD/butter gourd", "VALUE" : 5,
        },
        {
            "TYPE" : "MONEY", "VALUE" : 2000
        }
    ],
    "POST" : [ ],
    "REWARD" : [
        {
            "REWARD_TYPE": "ITEM", "TYPE": "CLOTHES", "NAME": "voodoo anal plug", "AMOUNT": 1
        },
        {
            "REWARD_TYPE": "MONEY", "AMOUNT": -2000
        }
    ],
    "INTRO": "\
        It's embarassing, but you approach NPC_NAME and explain to him that you're looking for some potion or \
        device that could help open yourself up 'back there'. You're certain it's not a request that he hears \
        every day, but remarkably he takes it in stride and pulls out an old dusty tome from below the counter.\n\n\
        He flips to a specific page and jabs his finger at a drawing. s(Here, this is what you need.) he states \
        authoritatively. s(This plug is made from the rubberized sap of the Bobola tree and infused with the \
        distilled essence of several butter gourd fruits.)\n\n\
        He stops and ponders for a moment.\n\n\
        s(Also... there may be a bit of a voodoo curse involved.) Voodoo curse? What's this? It sounds like \
        just more trouble to get yourself into and you're about to walk away when you consider for a moment \
        that this may be the only way for you to get past @@color:cyan;Uticus@@ and gain entrance to \
        @@color:cyan;Black Bertie's@@ manor. NPC_NAME ignores the look of aprehension on your face and simply \
        continues speaking.\n\n\
        s(The problem is, I don't have the materials required to craft it and I have no idea where I would \
        get them, well other than the gourds which you should be able to find in shops here and there..).\n\n\
        It seems that you'll have to go searching for this mysterious Bobola tree, or at least it's sap. \
        Maybe talking to someone who specializes in chemicals, like an alchemist would help?\
        ",
    "MIDDLE": "\
        \"Have you returned with the ingredients?\" asks NPC_NAME. \"It's fine to take your time if you need it.\"\
        ",
    "FINISH": "\
        You approach NPC_NAME with the @@color:purple;bucket of refined Bobola sap@@ and a sack full of butter gourds. \
        It wasn't easy to gather these materials and you're certain that somewhere deep inside you there are \
        scars from your encounter with the animated Bobola tree, but nevertheless your moment of triumph has \
        come. You hand the materials over to NPC_NAME and he motions for you to take a seat while he begins \
        his work. In a matter of hours he returns, @@color:purple;an enormous rubbery anal plug@@ in his hands. \
        He places it on the counter and beckons you to retrieve it. \n\n\
        s(I'm not quite sure how this is supposed to work) he says, s(Well, other than the obvious application \
        of the device.) You wince at that. At least NPC_NAME is too much of a gentleman to outright state that \
        you'll be shoving this giant plug up your sissy arse.\n\n\
        s(However,) he continues, s(Regular usage should enhance your... capabilities 'back there')\
        ",
    "JOURNAL_ENTRY" :
        "\
        NPC_NAME has said he can make you a magical anal plug that should, if worn regularly, enhance your \
        anus so that it can accomodate truly massive cocks. All that is required is @@color:gold;2000 coins@@, \
        5 butter gourds, and the refined sap of a Bobola tree. He suggested that you speak to an alchemist \
        about how to procure the latter.\
        ",
"JOURNAL_COMPLETE" :
    "\
    NPC_NAME created a magical anal plug that show enhance all of your anal abilities if worn regularly. You think \
    that with propper application you will be able to gape you sissyhole large enough to be able to accomodate \
    the largest of cocks, even the monster that @@color:cyan;Uticus@@ possesses.\
    "
};

App.Data.Quests["FINDING_YOUR_BALLS_2"] = {
    "ID": "FINDING_YOUR_BALLS_2", "Title": "Finding Your Balls - Part 2",
    "GIVER": "Jameson",
    "PRE": [
        {
            "TYPE" : "QUEST_FLAG", "NAME" : "FINDING_YOUR_BALLS_1", "VALUE" : "COMPLETED"
        }
    ],
    "CHECKS": [
        {
            "TYPE": "ITEM", "NAME": "QUEST/rare ore", "VALUE": 1
        },
        {
            "TYPE": "MONEY", "NAME": "MONEY", "VALUE": 2000
        }
    ],
    "POST": [
    ],
    "REWARD": [
        {
            "REWARD_TYPE": "ITEM", "TYPE": "CLOTHES", "NAME": "magic cock ring", "AMOUNT": 1
        },
        {
            "REWARD_TYPE": "MONEY", "AMOUNT": -2000
        }
    ],
    "INTRO":
        "\
        \"Welcome to the Locker miss\" says NPC_NAME. \"Is there anything I could help you with?\"\n\n\
        It's an awkward conversation, but you managed to ask NPC_NAME if he has anything that could help with \
        your rapidly diminishing manhood. At this point, it's pretty clear that he realizes you are a sissy, but \
        he doesn't make any sort of issue of it. You get enough abuse aboard the Mermaid, so you're thankful for \
        these small things.\n\n\
        NPC_NAME ponders for a moment and then reaches under the counter to produce a large dusty tome. He gently \
        opens and flips to a specific page.\n\n\
        \"This might do the trick\" he mutters in a low voice. You glance at the page and it seems to be a diagram \
        for some sort of cock torture device? How could this possibly help you??\n\n\
        NPC_NAME notices your discontent and continues to speak, \"Now, don't be alarmed. This device, when affixed to... \
        ahem... your 'apendage' will prevent it from being affected by all sorts of diseases and magical curses. I'm \
        not one hundred percent certain that this will reverse any damage already done, but it should at least protect \
        you going forward.\"\n\n\
        He stops and ponders for a moment.\n\n\
        \"The only issue is, I don't have one in stock and I don't have the materials available to reproduce it from \
        this diagram. Tell you what PLAYER_NAME, if you can find me some @@color:purple;rare ore@@ and bring me \
        the sum of @@color:gold;2000 coins@@ then I'll be able to help you. Sound like a deal?\"\n\n\
        It's a lot of money and you have no idea where youll find this 'rare ore' at, but do you really \
        have a choice in the matter?\
        ",
    "MIDDLE":
        "\
        \"Have you returned with the rare ore?\" asks NPC_NAME. \"It's fine to take your time if you need it.\"\
        ",
    "FINISH":
    "\
    You approach NPC_NAME with the rare ore that you retrieved from the depths of the caves of \
    @@color:gold;Abamond@@. Placing it gently down on the counter with a hefty purse of gold, you allow yourself \
    a small smile as you imagine your slightly brighter future. NPC_NAME retrieves both items and motions for \
    you to take a seat on a nearby divan while he begins his work.\n\n\
    Eventually he returns and hands over the item to you, a large ring made of shiny silver metal emblazoned with \
    strange runes and pictograms. You study it intently while he speaks.\n\n\
    \"It should adjust to your 'size', but once affixed will not change until removed again. Just wearing it is \
    enough to grant you the protection.\"\n\n\
    He bows to you deeply and takes his leave to tend his shop. It occurs to you that clever use of this item \
    may allow you to encourage the development of your genitals in certain directions... if you so desired.\
    "
,
    "JOURNAL_ENTRY" :
        "\
        NPC_NAME has said he can make you a magical cock ring that can protect your genitals from the influence \
        of disease and magic. All that is required is to return to him some special 'rare ore' and 2000 gold \
        coins. You'll have to explore to find the ore, but the coins should be easy enough to gather.\
        ",
    "JOURNAL_COMPLETE" :
        "\
        NPC_NAME created a magical cock ring for you that can protect your genitals from the influence of \
        disease and magic. You have no idea how complete this protection is, but you consider that with \
        clever use, you may finally have a way to reclaim a portion of your stolen manhood.\
        "

};
