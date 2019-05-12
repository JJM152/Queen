App.Data.Quests["COURTESAN_GUILD_JOIN"] = {
    ID: "COURTESAN_GUILD_JOIN",
    Title: "School's in Session",
    GIVER: "Selene",
    PRE: [ ],
    CHECKS: [
        { TYPE : "QUEST_FLAG", NAME : "COURTESAN_GUILD_JOIN_FETCH", VALUE : "COMPLETED", ALT_TITLE: "Get a letter of recomendation" }
     ],
    ON_ACCEPT: [
        { TYPE : "QUEST", NAME : "COURTESAN_GUILD_JOIN_FETCH", VALUE : "START" } // Start the fetch quest.
     ],
    POST: [ ],
    REWARD: [ ],
    INTRO: "\
    NPC_NAME eyes you up and down with a look of faint disgust on her well made up face and sighs despondantly. \
    s(Look dear, I don't take in just any strumpet off the streets, why don't you try to get work down at \
    Simone's? I'm sure that'll be more suitable for... someone like you) \n\n\
    You know what she's getting at - you'd be more suited for being a cock sleeve at the local brothel than \
    a high class whore like NPC_NAME and her girls, still you persist.\n\n\
    sp(Please m'am, is there //anything// I could do to change your mind?)\n\n\
    NPC_NAME scoffs at you. s(Dearie, the heavy implication in that sentance is exactly the reason why you're \
    not the right material for this school.) \n\n\
    tp(Well then,) you think to yourself, tp(What kind of 'material' do you need to be to work as a fancy whore?)\n\n\
    NPC_NAME sees the look on your face and perhaps in a moment of pity offers up a faint ray of hope.\n\n\
    s(Well, perhaps.... perhaps if you were to learn even a //little// bit of class and get a recomendation from \
    an alumni, then I might be persuaded to let you join.)\n\n\
    It's not much, but it's something to go on. Never in a million years did you think you'd be seriously considering \
    chasing down a professional whore for a letter of recommendation to her alma mater, but such is life. \
        ",
    MIDDLE:"\
    NPC_NAME pointedly ignores you. It looks like you'll need to do something dramatic to get her attention. If you can \
    just find the right person to back you, then she'd be forced to admit you to her precious school. \
        ",
    FINISH:"\
    You saunter up to NPC_NAME with your nose held so high you're eyeballs are practically rolling in your head. Perhaps \
    you're overdoing it, but you hold in your hands a recomendation that she dare not refuse, one from the Pirate Queen \
    herself, <span style='color:cyan'>Black Bertie</span>.\n\n\
    Before NPC_NAME can even open her mouth, you daintily lay your letter into her hands. She looks at you in the yes, \
    her mouth contorted in consternation and then down at the letter. You can tell she's about to dismiss you regardless \
    so you tap gently on the letter and say, as loftily as you can.\n\n\
    sp(You see, //Dearie//, a very important alumnus of \
    this fine school has given me her recomendation. You should at least do her the honor of reading it.)\n\n\
    s(Of course!) says NPC_NAME in a huff and then opens the letter, her eyes drawn first the flowing signature at the \
    bottom. She quickly closes it, not bothering to read the words because she knows that they're immaterial. The last \
    thing she wants to do is offend the writer of this particular missive.\n\n\
    s(Ahem), she clears her voice, s(Yes, well, everything seems in order. Classes start in the early morning and last \
    until evening. You purchase your own supplies as required from the school store.)\n\n\
    After the brief sentance, she turns her back and marches off to talk to another student, clearly she's boiling \
    underneath and fuming, but what do you care? Now to find out what all of this Courtesan stuff is about... \
        ",
    JOURNAL_ENTRY :"\
    NPC_NAME has hinted that if you were to find one of her former students and get her to write you a letter of \
    recommendation, then she'd allow you to enroll in her school for 'Courtesans', essentially a school for really, \
    really, really expensive sluts. \
        ",
    JOURNAL_COMPLETE :"\
    Getting a letter of recomendation from <span style='color:cyan'>Black Bertie</span> was too much for \
    NPC_NAME to ignore. She didn't like it, but she granted you membership to her guild. From there, you \
    can train your skills and access the guild's shop and gift exchange, both useful features. \
        "
};