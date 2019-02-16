App = App || { Data: { }, Entity: { } };
App.Data.Quests = App.Data.Quests || { };

App.Data.Quests["FINDING_YOUR_BALLS_2"] = {
    "ID": "FINDING_YOUR_BALLS_2", "Title": "Finding Your Balls - Part 2",
    "GIVER": "Jameson",
    "PRE": [
        { "TYPE" : "QUEST_FLAG", "NAME" : "FINDING_YOUR_BALLS_1", "VALUE" : "COMPLETED" }
    ],
    "CHECKS": [
        {"TYPE": "QUEST_ITEM", "NAME": "rare ore", "VALUE": 1 },
        {"TYPE": "MONEY", "NAME": "MONEY", "VALUE": 2000}
    ],
    "POST": [
    ],
    "REWARD": [
        { "REWARD_TYPE": "ITEM", "TYPE": "CLOTHES", "NAME": "magic cock ring", "AMOUNT": 1},
        {"REWARD_TYPE": "MONEY", "AMOUNT": -2000}
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