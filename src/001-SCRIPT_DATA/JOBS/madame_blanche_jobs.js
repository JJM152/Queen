App.Data.JobData["BLANCHE_TAROT"] = {
    "ID": "BLANCHE_TAROT", "TITLE": "A Tarot Reading", "GIVER": "Blanche", "PAY" : 0,
    "RATING" : 5, // of 5
    "PHASES" : [ 0, 1, 2, 3 ],
    "DAYS"   : 7,
    "HIDDEN" : false,
    "COST" : [
        { "TYPE" : "TIME", "VALUE" : 1 },
        { "TYPE" : "STAT", "NAME" : "Energy", "VALUE" : 1 },
        { "TYPE" : "MONEY", "VALUE" : 250 }
    ],
    "REQUIREMENTS" : [

    ],
    "INTRO" :
        "NPC_NAME says s(Come dear, let me read your fortune in the cards... who knows what awaits you?)",
    "START" :
        "Seeing your interest, Madame Blanche makes a sweeping arm gesture, inviting you to take a seat at her circular table. As you \
        sit, she searches your face intently. She solemnly asks for a strand of your hair and your payment, and you offer up both. \
        She quickly wisks the money away into the folds her silken robe with a graceful flourish of her hand, then begins her \
        fortune-telling ritual.\n\n\
        The aged woman whispers a chant in an unrecognizable tongue, while sweeping a sprig of fragrant herb rhythmically over the \
        table. She smoothly spreads the cards across the table face down, shuffling them, then collects them three at a time to \
        regather the deck.\n\n\
        s(So my child,) she begins, her accent thick over her words, s(What question do you seek the answer to? Tell me not, but \
        focus your attention so it is foremost on your mind, and open yourself. The Tarot can give back only as much as we ourselves \
        offer in earnest.)\n\n\
        She lifts the stack of cards with one hand and holds it above a candle. With her other hand, she burns your surrendered hair \
        fiber, allowing the tendril of smoke it releases to waft around the deck. She then sets the deck back down and draws out a \
        card:\n\n",
    "SCENES" : [
        {
            // No requirements.
            "ID" : "SCENE01",
            "TRIGGERS" :[ ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [
            ],
            "POST" : [
            ],
            // Just print widget
            "START" :
            "<<readTarot setup.player>>",
            "RESULTS" : [ ],
            "END" :
                ""
        }

    ],
    "END" :
    "",
    "JOB_RESULTS" : [ ]
};
