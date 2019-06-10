App.Data.Quests["RELIC_HUNTER_PT1"] = {
    ID: "RELIC_HUNTER_PT1",
    Title: "Relic Hunter - Part 1",
    GIVER: "Bram",
    PRE: [ ],
    CHECKS: [
        {
            "TYPE" : "ITEM", "NAME" : "MISC_LOOT/broken rune", "VALUE" : 5,
        }
    ],
    POST: [ ],
    REWARD: [
        {
            "REWARD_TYPE": "MONEY", "AMOUNT": 600
        },
        {
            "REWARD_TYPE": "MOOD", "NAME" : "Bram", "AMOUNT": 40
        },
    ],
    INTRO: "\
    You lightly step through the cluttered curio shop, it's shelves stacked high with an odd assortment of \
    items, most of which are beyond your ken. As you approach the back counter, a blue macaw squacks out a \
    call of '//customer//!' which draws the attention of NPC_NAME, the proprieter of the shop.\n\n\
    The two of you engage in some idle conversation, mostly questions you have about the odd item here or \
    there that catches your eye. Far from your usual experience, it's a pleasant way to pass the time and \
    NPC_NAME himself is a witty and charming gent. As the hour winds down, you beg your pardons and begin \
    to depart, only to be stopped by <span style='color:cyan'>Bram</span> calling out to you.\n\n\
    s(Wait miss..) he calls out to you, s(You seem to be the well traveled sort and, perhaps more importantly \
    in dire need of coin... am I right?)\n\n\
    It's a //little// insulting to be marked as some sort of impoverished beggar, but that feeling passes \
    rather quickly as you remind yourself of your current station in life. You simply nod your head and return \
    haltingly to the counter.\n\n\
    NPC_NAME smiles at you, clearly he was worried about the outcome of him calling out to you. \
    s(I've heard tales of strange artifacts coming from the island of <span style='color:gold'>Abamond</span> \
    and I've wondered myself if there is any truth to the tales...) You catch a faint expression on his \
    face and the crows feet around his eyes lilt upward as his smile tightens.\n\n\
    s(If you were to happen across any in your travels, well... I'd pay you for them. Well even!)\n\n\
    He pauses for a moment and ten adds s(Well, just keep it in mind PLAYER_NAME).\
        ",
    MIDDLE: "\
        s(Have you had any luck?) asks NPC_NAME, clearly excited to see you in his shop again. You tell him \
        that you're still working on his request and then chat for a quarter of an hour about your recent \
        travels.\
        ",
    FINISH: "\
        You approach NPC_NAME with the requested relics in hand and gently deposit them on the counter \
        in front of him. He stares at the broken runes before gingerly reaching out and touching \
        one with the tip of his finger. You swear you saw a slight spark when he did so, but it could \
        just be your imagination.\n\n\
        s(Astounding PLAYER_NAME, so... the rumors were true after all!) he exclaims.\n\n\
        You spend some time filling <span style='color:cyan'>Bram</span> in on your adventurers and \
        recounting how you acquired the \
        rare relics. He listens intently, hanging on your every word. When you finally arrive at the \
        end of your retelling, he thanks you again and then leans close to you, whispering in a \
        conspiratorial voice - s(I wasn't quite as honest with you as I could have been. Truth be told \
        I've been looking for these relics, and others as well, for a very long time. They're just \
        incredibly hard to come by.) He then reaches behind his counter and draws forth a large leather \
        bound tome, placing it squarely on the table.\n\n\
        s(I came into possession of this book at the estate sale of a local nobleman. At first I thought \
        it was rubbish, but the more I researched it, the more it seemed there was some truth to the \
        claims....)\n\n\
        You look at him dumbfounded, just what is he getting at?\n\n\
        <span style='color:cyan'>Bram</span> coughs and says, s(Ah... yes, well... This book details the \
        creation of several rare \
        potions and pills, but the method of manufacture is not something that I thought could be achieved...\
        at least until you brought me these!) he gestures again to the runes on the table.\n\n\
        s(Tell you what PLAYER_NAME, you keep bringing me whatever items you manage to free from those \
        cavernous depths and I'll be more than happy to trade you some of the elixirs and what not that \
        I am able to create.)\n\n\
        A tempting offer for sure and one you should consider in the future. You and \
        <span style='color:cyan'>Bram</span> shake hands \
        firmly and then he presents you with your reward for bringing him the runes. It should be interesting \
        to see what types of tonics he will be able to manufacture. \
        ",
    JOURNAL_ENTRY :
        "\
        NPC_NAME has asked you to be on the lookout for any strange relics that you might acquire \
        while exploring the depths of <span style='color:gold'>Abamond</span>. He has promised to \
        you a handsome reward if you can return some to him.\
        ",
    JOURNAL_COMPLETE:
    "\
    You returned to NPC_NAME with a handfull of broken runes that you found in the depths below \
    <span style='color:gold'>Abamond</span> and he rewarded you with gold. In addition he claimed \
    that with these items and more, he could manufacture an assortment of rare alchemical goods. \
    You should definitely see what he has on offer.\
    "
};