App.Data.Quests["BELLA_INTRODUCTION"] = {
    "ID": "BELLA_INTRODUCTION", "Title": "A Matter of Introductions",
    "GIVER": "Bella",
    "PRE": [],
    "POST": [],
    "CHECKS": [
        {
            "TYPE" : "ITEM", "NAME" : "QUEST/letter of introduction", "VALUE" : 1,
        }
    ],
    "ON_ACCEPT" : [],
    "REWARD": [
        {
            "REWARD_TYPE": "MOOD", "NAME" : "Bella", "AMOUNT": 40
        },
        {
            "REWARD_TYPE": "RESET_SHOP", "NAME" : "Bella"
        }
    ],
    "INTRO": "\
        As you enter the shop, NPC_NAME quickly approaches you. s(Hello there miss, I'm not sure I've seen you around \
        before? Are you new to <span style='color:gold'>Golden Isle</span>?)\n\n\
        You nod and briefly explain that you travel to the island from time to time. NPC_NAME listens to you attentively \
        and then smiles and says, s(I see... well, you may not know it but this humble storefront doesn't just sell \
        our designer clothing to anyone off the street!)\n\n\
        You must obviously look crestfallen because NPC_NAME quickly reaches out to touch your shoulder.\n\n\
        s(Don't worry dear) she says, s(Just find another member to write you an introduction letter and I'll make you \
        whatever you desire. It's just that I have a reputation to uphold, you understand?)\n\n\
        Well, you suppose you can't really hold it against her as definitely her business might suffer if it became \
        known she was treating a sissy whore like a respected customer. Still, how will you manage to get a \
        recommendation from someone?\
        ",
    "MIDDLE" : "\
        NPC_NAME says, s(Sorry dear, but the shop is closed to you until you can find a reputable recommendation.)\
        ",
    "FINISH":
        "\
        NPC_NAME eyes you warily as you enter the shop, looking around to makeing sure that no one else saw you come in \
        through her front door. However, before she can shoe you away, you produce the <span style='color:purple'>\
        letter of introduction</span> that you 'found'.\n\n\
        She quickly snatches it from your hand and reads it with a complex expression. Finally she folds it up and tucks \
        it into her apron and address you. s(Well... welcome PLAYER_NAME. I guess you have friends in high places)\n\n\
        You put on your best smug face, which isn't too hard to do considering she looks so uncomfortable having to \
        serve you.\n\n\
        s(We restock the shelves every week with new items, please see what we have to offer.)\
        ",
    "JOURNAL_ENTRY" : "\
        NPC_NAME will only sell clothing to you if you can get an introduction from another member or some other \
        high profile person. Keep an eye out for an opportunity.\
    ",
    "JOURNAL_COMPLETE" : "\
        You brought a <span style='color:purple'>letter of introduction</span> to NPC_NAME and now she'll let you buy \
        clothing from her shop. The shop evidently gets new items every week so it's worth checking every time you're in \
        port for something new.\
    "
};
