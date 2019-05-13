App.Data.Quests["BERTIE_QUEEN_PT1"] = {
    ID: "BERTIE_QUEEN_PT1",
    Title: "The Queens Favor - Part 1",
    GIVER: "Bertie",
    PRE: [ ],
    CHECKS: [ 
        {
            TYPE : "STAT_SKILL", NAME : "Courtesan", VALUE : 60
        },
        {
            TYPE : "STAT_BODY", NAME: "Penis", VALUE: 70
        },
        {
            TYPE : "STAT_BODY", NAME: "Ass", VALUE: 70
        }
    ],
    POST: [ ],
    REWARD: [ ],
    INTRO: "\
    NPC_NAME, the infamous <span style='color:hotpink'>Pirate Queen of the Seas</span> stands before you, resplendant \
    in fine silk and gold. Only the plain cutless hanging from her bejeweled belt hints at her lethality. She eyes you \
    as you approach and then bursts into laughter!\n\n\
    s(What, is this <span style='color:cyan'>Uticus's</span> idea of a joke or something?) she snickers. s(I told that dumb \
    ape I was looking for a consort, not some random tartlet that <span style='color:cyan'>Simone</span> could send up \
    here on her own!).\n\n\
    Wait, what? Did she just say she was //looking// for a mistress? Sexual orientation aside, doesn't that also mean that \
    you just let that black bastard rape your asshole for hours on end for ''no good reason''? \n\n\
    Before you can dwell too long on that thought, NPC_NAME draws your attention by putting her finger under your chin, \
    and guiding your eyes to hers, then slowly drawing that same digit down to your collar and giving it a cheeky tug.\n\n\
    s(Oh, interesting... a sissy whore are we? Don't see many of those around here every day!) she laughs oddly at the \
    last part of that sentance, clearly it's some joke that you don't understand.\n\n\
    s(Listen here strumpet, you need some work, and I'm not just talking about the obvious.) she releases you and steps \
    back to take a seat on a nearby divan. s(You see, when you're as rich and powerful and famous and beautiful as me, \
    society has certain expectations of you and one of those expectations is not to be scene with stupid ugly whores as \
    companions.)\n\n\
    You probably shouldn't feel as attacked as you do, it's not like you ''want'' to be a whore, so being belittled \
    that way shouldn't bother you... right?\n\n\
    NPC_NAME laughs and claps her hands together. s(I don't know why I'm doing this, call it a whim, but I'm not, shall \
    we say.... totally //unsympathetic// to your obvious situation.)\n\n\
    You're about to launch into an explanation, describing your captivity, but NPC_NAME silences you with an upraised \
    hand. s(No need to explain, I can guess as much and as I said, I'm not totally berift of sympathy for your plight.) \
    a wry smile forms on her mouth. s(Do something about your looks and get a little class and I might consider \
    giving you a launch or two up the old booty bay. Just don't say I didn't warn you.)\n\n\
    You're not //entirely// sure what NPC_NAME is inferring, but you get the general gist of it. If you want to \
    gain her favor and maybe more, you'll need to be what she'd consider suitable material for a consort. \
        ",
    MIDDLE:"\
    NPC_NAME is reclining on one of her lush lounges reading a book with gilt pages. She merely looks up at you and \
    says drolly, s(Not yet sister). Despite any attempts to gain her attention she pointedly ignores you and goes \
    about her business. \n\n\
    Deciding that it's best not to push your luck in fear for your life, you reason that it's \
    probably wise to leave her alone to read. \
        ",
    FINISH:"\
    NPC_NAME is reclining on one of her lush lounges reading a book with gilt pages. She looks up at you and then \
    gently places the book down on a handy end table. s(Not bad... I see you've made some, what shall we say... \
    //improvements//, haven't you?) She takes a step forward and starts to inspect you, it's a much more \
    uncomfortable feeling than you would have surmised at first. Eventually she steps back and makes a twirling \
    motion with her finger.\n\n\
    s(Come now girlie, lets see the goods). You daintily twist around for NPC_NAME and lift up you \
    pEQUIP(Costume|Dress|Shirt) \
    <<if setup.player.IsEquipped('Panty',true)>>\
    and wth a well practiced movement, remove your pEQUIP(Panty), leaving your pASS ass and nPENIS \
    free for NPC_NAME to inspect. \
    <<else>>\
    leaving your pASS nASS and pPENIS nPENIS free for NPC_NAME to inspect. \
    <</if>>\
    \n\n\
    NPC_NAME approaches you from behind. You can hear the staccato clicks of her heels on the floor. She saddles \
    up right behind you, pressing herself against your bottom and then she grabs a hand full of your hair and twists \
    your neck back violently. In a cold and even voice, she then says, s(Now speak.... say, 'I want your giant cock up \
    my stupid fat sissy ass')\n\n\
    Despite the absuridty of the situation this isn't the weirdest request that you've ever had. In a mewling and \
    feminine voice that you've practiced well, you speak sp(... I want your giant cock up my stupid fat sissy ass! Please! \
    Please give it to me!) \n\n\
    NPC_NAME breathes heavily and grinds herself against you. For a moment you think you feel something hard pressing \
    against your puckered asshole, but that has to be your imagination, right?\n\n\
    s(You'll do nicely PLAYER_NAME) says NPC_NAME in a low, throaty voice. s(Yes, very nicely indeed). \
        ",
    JOURNAL_ENTRY :"\
    NPC_NAME is in the market for a personal consort. In your meeting she hinted that she knew something about your \
    current situation and that she might even be able to help in some way. Unfortunately her standards are pretty high, \
    so you'll need to figure out how to get on her good side. \
        ",
    JOURNAL_COMPLETE :"\
    After a great deal of work, you managed to finally convince NPC_NAME that you have the right stuff to act as \
    her consort. She's willing to give you a try, so now is your chance to get on her good side. It never hurts to \
    have a pirate as powerful as her on your side, particularly given your current situation of slavery. \
        "
};

App.Data.Quests["COURTESAN_GUILD_JOIN_FETCH"] = {
    ID: "COURTESAN_GUILD_JOIN_FETCH",
    Title: "A Letter of Introduction",
    GIVER: "Bertie",
    PRE: [
        { TYPE : "QUEST_FLAG", NAME : "COURTESAN_GUILD_JOIN", VALUE : "ACTIVE" }
     ],
    CHECKS: [ ],
    POST: [ ],
    REWARD: [ ],
    INTRO: "\
        ",
    MIDDLE:"\
        ",
    FINISH:"\
    You approach NPC_NAME and explain the situation to her.\n\n\
    s(So you're looking to join that pompous slut Selene's school for Courtesans are you? Well, yes I was a //former// \
    and not particularly willing student there.) she says.\n\n\
    NPC_NAME's eyes harden, as if she's remembering or imagining something distasteful. Never the less, she continues. \n\n\
    s(Well, as much as I hate that harlot, I have to admit - she knows her stuff. It might do you good to take a few \
    classes and, shall we say, sand down a few of your rougher edges. At least if you have aims at being ''my'' personal \
    little fuckslut.)\n\n\
    You're not quite so sure that you're willing to take NPC_NAME up on the offer she just insinuated, but at least \
    she's willing to write you the proper recomendation. A brief discussion and a few minutes later, you hold the \
    aforementioned letter of recomendation in your hands. If this doesn't impress <span style='color:cyan'>Lady Selene</span> \
    then nothing will.\
        ",
    JOURNAL_ENTRY : "HIDDEN",
    JOURNAL_COMPLETE : "HIDDEN"
};