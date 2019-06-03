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

App.Data.Quests["BERTIE_SISSY"] = {
    ID: "BERTIE_SISSY",
    Title: "The Queen's Past",
    GIVER: "Bertie",
    PRE: [
        { 
            TYPE : "JOB_FLAG", NAME : "BERTIE_COCK_REVEAL", CONDITION: "eq", VALUE : 1 }
     ],
    CHECKS: [ 
        { 
            TYPE: "NPC_MOOD", NAME: "Bertie", VALUE: 80
        }
    ],
    POST: [ ],
    REWARD: [
        {
            REWARD_TYPE: "ITEM_CHOICE", TYPE: "REEL", NAME: "RARE_ANAL_ANGEL", AMOUNT: 2
        },
        {
            REWARD_TYPE: "ITEM_CHOICE", TYPE: "REEL", NAME: "RARE_BOOBJITSU_MATRIARCH", AMOUNT: 2
        },
        {
            REWARD_TYPE: "ITEM_CHOICE", TYPE: "REEL", NAME: "RARE_BREATH_MINT", AMOUNT: 2
        },
        {
            REWARD_TYPE: "ITEM_CHOICE", TYPE: "REEL", NAME: "RARE_HANDMAIDEN", AMOUNT: 2
        },
     ],
    INTRO: "\
    s(I can see from the look on your face that you have some questions about our little, 'encounter'?) \
    asks NPC_NAME saucily.\n\n\
    Of course you do! It's not every day you run into another feminized male, let \
    alone one as beautiful and powerful as the current Pirate Queen.\n\n\
    s(Look, you're not a bad lay my sweetbun, but my past is my past and I don't relish talking about it).\n\n\
    It seems that NPC_NAME won't easily give up the information that you seek, perhaps if you were to \
    manage to get closer to her she might be more forthcoming? \
        ",
    MIDDLE:"\
    NPC_NAME is looking out the window of her private apartments, absentmindly flipping a dagger between \
    the tips of her fingers. She pauses for a moment to look at you quizically, and then goes back to \
    staring out the window. Perhaps it's better to not disturb her when she's feeling so obviously pensive. \
        ",
    FINISH:"\
    <<set _f = setup.player.GetStat('STAT', 'Femininity')>>\
    NPC_NAME turns to face you. s(I... I guess I do kind of owe it to you my sweetbun. Not just because \
    you've been such a great lay, but because I guess I can sympathize with your plight.)\n\n\
    She grimaces and puts her knife down on the table and motions for you to sit.\n\n\
    s(Years ago, when I was young and foolish, I lived on one of the furthest isles in the Lost Coast, a place \
    so small and inconsequential it doesn't even have a name.) She pauses for a moment, is that look in her \
    eyes something like homesickness?\n\n\
    s(I was desperate to get away, so I did what any hot blooded young //man// would do... I signed up with \
    a passing crew as their 'cabin boy') she looks at you knowingly. s(I suppose I don't have to explain to \
    you what happened from there, do I?)\n\n\
    A moment of acknowledgement passes between the two of you.\n\n\
    s(Anyway, I was able to gain my freedom eventually, but not before both my body and mind were completely \
    changed. Even now, when I have the means to, I don't want to go back to being a man. I don't know if it's \
    because of the trials I was put through on board that ship, or as part of that life, or if it just merely \
    awakened something in me that I didn't know was there).\n\n\
    <<if _f <= 40>>\
    You find the idea of being corrupted so much that one would actually //enjoy// being a woman, simply \
    ludicrious. Surely, that would never happen to you... right? \
    <<else>>\
    <<if _f <= 70>>\
    You nod your head in sympathy with NPC_NAME. You know exactly what she is talking about. Your own \
    mind and body have been so thoroughly warped that you often forget not only what you looked like before \
    but what it was like to live as a man in general.\
    <<else>>\
    You know exactly what NPC_NAME is talking about. All of the physical and mental changes that you have \
    endured up to this point have made your body and mind so feminine that it's almost impossible for \
    you to imagine what it was like to be a man... and like NPC_NAME, you struggle to find it in yourself \
    to summon the will to do anything about it. \
    <</if>>\
    <</if>>\n\n\
    s(I can see from that collar around your neck that even if I wanted to help you, I doubt there is \
    much I could do... or frankly, much I'd want to do. Governing this place is truly an exercise in \
    disaster and one of the things I take pride in is not heedlessly making enemies. Still, that doesn't \
    mean I can't lend a little bit of a hand.)\n\n\
    Her words both simultaneously plumet your spirits while giving you just the faintest glimmer of hope. \
    What aid could she offer?\n\n\
    s(Here, take these) she offers. s(I don't need them any more and they'll probably help you out of \
    whatever situation your in now.)\n\n\
    With that, NPC_NAME bids you farewell and returns to brooding by the window. Clearly she wishes to not \
    speak of this any more. \
        ",
    JOURNAL_ENTRY :"\
    While having sex with NPC_NAME you noticed that she's a particularly well hung shemale. Due to your \
    own situation and the disparity between your current lots in life, you're desperatate to ask her about \
    this, but alas, fear that the two of you are not close enough to talk about it.\
        ",
    JOURNAL_COMPLETE :"\
    After a great deal of work, you managed to gain the affection of NPC_NAME. She confided in you that \
    she too was a former 'Cabin Girl' on board a pirate ship. She didn't tell you how she managed to \
    free herself, but she did at least lend a small amount of aid. \
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

App.Data.Quests["BERTIE_QUEEN_PT2"] = {
    ID: "BERTIE_QUEEN_PT2",
    Title: "The Queens Favor - Part 2",
    GIVER: "Bertie",
    PRE: [
        { TYPE : "QUEST_FLAG", NAME : "EE_BertieMapStolen_COUNT", VALUE : 1 }
     ],
    CHECKS: [
        { 
            TYPE : "QUEST_FLAG", NAME : "BERTIE_INFO_FOUND", VALUE : "COMPLETED", 
            ALT_TITLE: "Find information on the thieves" 
        }
     ],
    POST: [ ],
    REWARD: [
        {
            REWARD_TYPE: "SLOT" 
        },
        {
            REWARD_TYPE: "ITEM_CHOICE", TYPE: "DRUGS", NAME: "AP_mars", AMOUNT: 1
        },
        {
            REWARD_TYPE: "ITEM_CHOICE", TYPE: "DRUGS", NAME: "AP_venus", AMOUNT: 1
        },
        {
            REWARD_TYPE: "ITEM_CHOICE", TYPE: "REEL", NAME: "RARE_ANAL_ANGEL", AMOUNT: 1
        },
        {
            REWARD_TYPE: "ITEM_CHOICE", TYPE: "REEL", NAME: "RARE_BOOBJITSU_MATRIARCH", AMOUNT: 1
        },
        {
            REWARD_TYPE: "ITEM_CHOICE", TYPE: "REEL", NAME: "RARE_BREATH_MINT", AMOUNT: 1
        },
        {
            REWARD_TYPE: "ITEM_CHOICE", TYPE: "REEL", NAME: "RARE_HANDMAIDEN", AMOUNT: 1
        },
     ],
    INTRO: "\
    NPC_NAME looks distraught. Her fists, clenching and unclenching in rage.\n\n\
    s(Some damn thieves have broken into the mansion and made off with something... precious to me!) she \
    complains. \n\n\
    She looks at you for a moment and then relaxes slightly.\n\n\
    s(I can't trust that oaf <span style='color:cyan'>Uticus</span> to keep his damn trouser snake \
    in his pants for more than five minutes, but you... I can trust you, can't I?) she says.\n\n\
    It appears that all your efforts with NPC_NAME have born fruit - she is coming to you first for \
    help, surely you may be able to ask for the favor to be returned in the future?\n\n\
    s(Some thieves broke into the mansion and made off with one half of my personal treasure map!) she \
    exclaims. s(Normally, I'd hunt them down myself but I'm leery of walking into a //trap// of some sort, \
    that's where you come in.) She smirks to herself over her own innudendo.\n\n\
    s(Don't worry, I don't expect it will be dangerous, at least if you're smart. All I need you to do is \
    track down who stole my map. You don't need to return it, just tell me who they are.)\n\n\
    That actually... doesn't sound too bad, and if you're lucky it won't involve you getting raped \
    by a giant tree or some other ghastly monster.\n\n\
    NPC_NAME continues speaking, s(I don't have any leads, but if I were you I'd start asking around \
    at the <span style='color:gold'>Docks</span>, after all there's only one way in or out of this \
    blasted island.)\
        ",
    MIDDLE:"\
    NPC_NAME is sitting at a large gilded oak desk, pouring over a pile of documents, doubtless part of \
    her official duties as the Governor of this island. She briefly looks up at you with a cocked eyebrow \
    and then returns to her work without saying a word.\n\n\
    Considering you don't have anything solid to report yet, you decide to not waste her time.\
        ",
    FINISH:"\
    You approach NPC_NAME and explain the results of your search.\n\n\
    s(Mahomet you say? Cultists? What a load of hornswaggle...) she mutters.\n\n\
    As you provide more details around how you came by this information, NPC_NAME's look of disbelief \
    hardens, her eyes burning bright with indignation.\n\n\
    s(Alright, PLAYER_NAME, I believe you... after all, you've no real reason to tell me such a \
    cockamamie lie, but the issue is... Why? Why would these devil worshipers be after my map?) \n\n\
    You don't have any real reason to provide, so you helplessly look on as NPC_NAME ponders the \
    situation.\n\n\
    NPC_NAME sighs wearily. s(I've still more work to do... don't get me wrong, you've been a big \
    help and I intend to reward you appropriately, but I'll have to have some of my underlings \
    look into this some more. In any case, pick one of these as a reward... you've earned it.)\n\n\
    NPC_NAME gestures to a table, filled with a rare alchemical goods.\n\n\
    s(Just... make sure to come back later and talk to me again. I might have another job for you \
    once I make some more progress.) she says.\n\n\
    You nod as your hand reaches out for your reward. Clearly getting in good with NPC_NAME is paying \
    off, you only wonder what more you'll have to do to earn her total confidence? \
        ",
    JOURNAL_ENTRY : "\
    Some thieves have made off with one half of NPC_NAME's personal treasure map. You've been asked to \
    to see what you can find out about who they are and to return to NPC_NAME with the information.\
    ",
    JOURNAL_COMPLETE : "\
    After an exhaustive search you've managed to determine that the people who stole NPC_NAME's treasure map \
    are connected to a cult that worships a strange devil named 'Mahomet'. NPC_NAME was thankful for the \
    information and to check back with her later after her agents did some more snooping around. \
    "
};