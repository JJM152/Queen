App.Data.Quests["Q001"] = {
    "ID": "Q001", "Title": "Price of Freedom - Part 1",
    "GIVER": "Captain",
    "PRE": [ ],
    "POST": [
        {
            "TYPE" : "QUEST", "NAME": "Q001b", "VALUE": "START"
        }
    ],
    "CHECKS": [],
    "REWARD": [],
    "PREREQ": "",
    "INTRO": "",
    "MIDDLE": "",
    "FINISH": "\
        NPC_NAME says, s(Well now slut, I see you're not walking funny after all that ass raping - you must be \
        a natural for this kind of work.)\n\n\
        He laughs menacingly at his own bad joke and continues, s(I mentioned to you that there was a way off this \
        ship... well other than the gang plank and that's simple. All you need to do is earn enough coin for me \
        to replace your faggot ass with a good and proper whore. About @@color:gold;50 grand@@ should cover it.)\n\n\
        That's a huge amount of money. Colossal even. You have no idea how you're supposed to earn it... is this \
        some kind of sick joke?\n\n\
        He continues, s(Until then... familiarize yourself with the ship and the crew. I'm sure they'll be \
        familiarizing themselves with your slutty holes sooner or later.)\n\n\
        An ominous statement for sure, particularly given the last few days. Still, even if the Captain is just \
        messing with you, there must be a way to get this blasted collar off your neck. Maybe you should walk \
        around and talk to the crew...\
        ",
    "JOURNAL_ENTRY": "\
        You have been kidnapped and forced to become the on board prostitute to a ship full of scurvy sea dogs. \
        The Captain of the ship had mentioned to you that it might be possible to purchase your freedom. You \
        should go and speak to him.\
        ",
    "JOURNAL_COMPLETE": "\
        NPC_NAME has offered to let you buy your freedom for the sum of 50,000 coins. It's an enormous amount \
        of money to earn, particularly for an inexperienced sissy-whore, but other than looking out for some \
        way to escape, you don't think there is any other way to get away from this life.\
        "
};

App.Data.Quests["Q001b"] = {
    "ID": "Q001b", "Title": "Price of Freedom - Part 2",
    "GIVER": "Captain",
    "PRE": [
        {
            "TYPE" : "QUEST_FLAG", "NAME" : "Q001", "VALUE" : "COMPLETED"
        }
    ],
    "POST": [
        {
            "TYPE" : "QUEST_FLAG", "NAME": "GAME_WON", "VALUE": 1
        }
    ],
    "CHECKS": [
        {
            "TYPE": "MONEY", "NAME": "MONEY", "VALUE": 50000
        }
    ],
    "REWARD": [],
    "PREREQ": "",
    "INTRO": "",
    "MIDDLE": "\
        NPC_NAME says, s(Ah, if it isn't little PLAYER_NAME, everyone's favorite sissy slut.)\n\n\
        He looks your body up and down, you think you detect a faint boner beginning to grow in his trousers.\n\n\
        NPC_NAME continues, s(Managed to earn that coin yet, have we? If not then what are you waiting for? \
        An idle whore earns nothing but a stiff kick to the arse as they say.)\
        ",
    "FINISH": "\
        NPC_NAME looks at you, his eyes filled with amazement. He says, s(I honestly didn't think you'd \
        manage to do it and I have to say that I'm almost sad you did. You were a fine whore PLAYER_NAME, \
        for a sissy anyways. Well, a deal's a deal. I'll take those coins and get that collar off your neck.)\n\n\
        NPC_NAME thinks for a moment and then continues, s(Of course, you're welcome to stay on and keep working \
        the deck for as long as you want. Some of the lads have grown quite fond of you, or at least your holes.)\n\n\
        You do your best to maintain a poker face, acting like your actually considering the offer as you hand \
        over the coin. Of course, you have no intention of staying one second longer than necessary. NPC_NAME \
        waves his signet ring over your neck and the collar drops off with a loud thud. It's been a \
        torturous experience, but now you are finally free.\
        ",
    "JOURNAL_ENTRY": "\
        NPC_NAME has promised your freedom for the queenly sum of 50,000 coins. It's a seemingly insurmountable \
        amount of money for you to gather, particularly as a slave to the pirates on the Salty Mermaid. However, \
        it seems to be your only way of getting free... unless another opportunity presents itself.\
        ",
    "JOURNAL_COMPLETE": "\
    You managed to scrounge up the coins required to buy your freedom. Now that it has come to this... \
    what will you do?\
    "
};

App.Data.Quests["BOARDINGPASS"] = {
    "ID": "BOARDINGPASS", "Title": "Boarding Pass",
    "GIVER": "Captain",
    "PRE": [
        {
            "TYPE" : "QUEST_FLAG", "NAME" : "PRE_BOARDINGPASS", "VALUE" : "COMPLETED"
        }
    ],
    "POST": [],
    "CHECKS": [
        {
            "TYPE": "NPC_MOOD", "NAME": "Crew", "VALUE": 80
        },
        {
            "TYPE": "NPC_MOOD", "NAME": "FirstMate", "VALUE": 70
        },
        {
            "TYPE": "NPC_MOOD", "NAME": "Cook", "VALUE": 70
        },
        {
            "TYPE": "NPC_MOOD", "NAME": "Quartermaster", "VALUE": 70
        }
    ],
    "REWARD": [],
    "INTRO": "\
        NPC_NAME says, s(Ah, what can I do for you slut? Wait... you want to leave the ship?)\n\n\
        NPC_NAME busts out into peals of laughter. After an uncomfortably long minute, he gathers his \
        composure.\n\n\
        NPC_NAME says, s(You know that the <span style='color:orange'>geas on that slave collar</span> \
        won't let you get more than a mile or two away from me so long as I wear the control ring, right? \
        Look, I'm not opposed to giving you some shore leave, but that comes after your duties are finished. \
        Make sure everyone, and I mean ''everyone'' on board has gotten their fill of your holes first. \
        Then come back to me and I'll grant you leave.)\n\n\
        You weren't sure what you were expecting, but as NPC_NAME dismisses you from his quarters, you feel \
        a depressing tiredness settle over your body. Just the sheer volume of dicks you'll have to service \
        to meet his demands would daunt an experienced whore, let alone a reluctant sissy like yourself.\
        ",
    "MIDDLE": "\
        NPC_NAME says, s(So, how is it PLAYER_NAME? What are you doing wasting your time around here when \
        there are still so many cocks to be sucked on deck?)\
        ",
    "FINISH": "\
        NPC_NAME says, s(You've done a hell of a job PLAYER_NAME. A hell of a job. I'm actually surprised you \
        can still walk after all the cocks you've taken up your ass these last weeks.)\n\n\
        NPC_NAME chuckles to himself and continues.\n\n\
        NPC_NAME says, s(Anyway, your leave is granted. Remember - if you get more than a couple of miles \
        away from me however that collar around your neck will rip your stupid bimbo head right off. Boy, \
        that'd be a sight to see... just don't be sucking a dick when it happens... HA!)\
        ",
    "JOURNAL_ENTRY" : "\
        You've been told by NPC_NAME that if you want to be able to take leave liberty when the \
        @@color:cyan;Salty Mermaid@@ is at port then you'll first have to make sure that every man aboard \
        the ship is @@color:DeepPink;cheered@@ by your sexual services.\
        ",
    "JOURNAL_COMPLETE" : "\
        After what seemed like countless days filled with crazed fucking, you managed to completely sexually satisfy \
        every man on board the ship. Doing so, NPC_NAME deigned to grant you a special pass that will allow you to \
        leave the ship. However if you get too far away from the Captain, the magical geas on your collar will surely \
        end your life. Be careful.\
    "
};

App.Data.Quests["Q005"] = {
    "ID": "Q005", "Title": "Build a Better Bimbo - Part 1",
    "GIVER": "Captain",
    "PRE": [],
    "POST": [],
    "CHECKS": [
        {
            "TYPE": "STAT_BODY", "NAME": "Bust", "VALUE": 11
        },
        {
            "TYPE": "STAT_BODY", "NAME": "Lips", "VALUE": 32
        },
        {
            "TYPE": "STAT_BODY", "NAME": "Ass", "VALUE": 11
        }
    ],
    "REWARD": [
        {
            "REWARD_TYPE": "ITEM", "TYPE": "CLOTHES", "NAME": "fashion corset", "AMOUNT": 1
        },
        {
            "REWARD_TYPE": "ITEM", "TYPE": "CLOTHES", "NAME": "pirate hat", "AMOUNT": 1
        }
    ],
    "INTRO": "\
        NPC_NAME says, s(You're going to have a lot of trouble earning the coin you need looking like that.)\n\n\
        He looks you up and down, it's obvious he isn't pleased by what he sees.\n\n\
        NPC_NAME clears his throat and continues, s(It's like this PLAYER_NAME, a whore's earning potential is \
        a combination of both her skills and looks. You can get the skills by practice, but the looks... well \
        that's a whole other story.)\n\n\
        You're not quite sure you like the direction this conversation is heading in, but it's hard to deny \
        the logic of it. Even you wouldn't fuck yourself (as a girl) looking how you do.\n\n\
        s(Anyway), says NPC_NAME, s(There are some ways to get around this. We're a pirate ship, so we smuggle \
        a lot of goods and some of those goods have some pretty serious effects on the human body - why don't \
        you see if <span style='color:cyan'>Julius</span> or <span style='color:cyan'>Cookie</span> have \
        anything they can sell you that might help. If you come back to me with some \
        pBUST_11 tits, pLIPS_32 lips and at least a pASS_11 ass then even I might fuck you... and I have to tell ya, \
        I pay a lot better than the crew.)\n\n\
        You consider NPC_NAME's offer. You're not sure if you want to alter your body that much, but \
        earning the money for your freedom takes priority...\
        ",
    "MIDDLE": "\
        NPC_NAME takes one look at you and says, s(Hmm, what is it? Not quite there yet are we? Come back to \
            me when you at least resemble something close to a proper slut.)\
            ",
    "FINISH": "\
        NPC_NAME says, s(Oooer, lookie here. Our little PLAYER_NAME is turning into a right and proper bimbo slut. \
        With a body like that you'll find yourself earning far more coin than usual. Men will pay a lot more to \
        fuck a huge pair of tits, or a large jiggling ass and of course, a pair of massive cock sucking lips is a \
        great advertisement for your dick sucking skills.)\n\n\
        You know that he's just stating the obvious, but from where you stand you've witnessed it first hand. \
        As your \"womanly assets\" have grown, so has your financial assets. It's shameful, but you have to admit \
        that taking NPC_NAME's advice has paid off... literally.\n\n\
        NPC_NAME looks at you and smiles, s(Here slut, have a little something to help you on your way, and if \
        you ever want to earn some good coin stop by my cabin for some 'play time'.)\
        ",
    "JOURNAL_ENTRY": "\
        You've been told to increase your physical assets so that you have some pBUST_11 tits, pLIPS_32 lips \
        and at least a pASS_11 arse. Doing so will increase your favor with the Captain.\
    ",
    "JOURNAL_COMPLETE": "\
        You've discovered that the food and drugs you consume can alter your body in the most amazing ways. \
        Through trial and error you managed to increase the size of your breasts, lips and ass to proportions \
        where your customers are willing to pay far more for your services than before. In addition to this, \
        the Captain will now be available as a potential customer.\
        "
};

App.Data.Quests["Q006"] = {
    "ID": "Q006", "Title": "Build a Better Bimbo - Part 2",
    "GIVER": "Captain",
    "PRE": [
        {
            "TYPE" : "QUEST_FLAG", "NAME" : "Q005", "VALUE" : "COMPLETED"
        }
    ],
    "POST": [],
    "CHECKS": [
        {
            "TYPE": "STAT_BODY", "NAME": "Face", "VALUE": 39
        },
        {
            "TYPE": "STAT_BODY", "NAME": "-Waist", "VALUE": 40
        },
        {
            "TYPE": "STAT_BODY", "NAME": "Hair", "VALUE": 20
        }
    ],
    "REWARD": [
        {
            "REWARD_TYPE": "SLOT" },
        {
            "REWARD_TYPE": "ITEM", "TYPE": "DRUGS", "NAME": "healing potion", "AMOUNT": 3
        },
        {
            "REWARD_TYPE": "ITEM_CHOICE", "TYPE": "DRUGS", "NAME": "face cream", "AMOUNT": 10
        },
        {
            "REWARD_TYPE": "ITEM_CHOICE", "TYPE": "DRUGS", "NAME": "hair tonic", "AMOUNT": 10
        }
    ],
    "INTRO": "\
        NPC_NAME says, s(Well, if it isn't the crews favorite sissy. You're definitely looking a better these \
        days, but I think you could do better. No, you will do better.)\n\n\
        NPC_NAME gets an evil glint in his eye as he looks you up and down. He slowly reaches out a hand, \
        cupping one of your pBUST teats and giving it a firm squeeze.\n\n\
        NPC_NAME says, s(Not bad, not bad at all. But that face... that waist and that hair. It just simply \
        doesn't do. Go and get some more work done slut, that's an order from the Captain. Return when you're \
        looking a bit more presentable and I'll give ye a fine little present.)\n\n\
        NPC_NAME has made good on his offers so far and his advice, as much as you hate it, has helped you earn \
        a fair amount of coin. What should you do?\
        ",
    "MIDDLE": "\
        NPC_NAME takes one look at you and says, s(Hmm, what is it? Not quite there yet are we? Come back to me \
        when you at least resemble something close to a proper slut.)\
        ",
    "FINISH": "\
        NPC_NAME says, s(Not bad, not bad. That face won't win you any prizes... well, at least not yet, but we \
        can discuss that later. Still, you've come a long way from when you started aboard this ship, and I dare \
        say you have quite a bit further to go until you can buy your freedom. But never mind that, take these \
        items. They'll help you perform your duties and increase your earning potential.)\
        ",
    "JOURNAL_ENTRY": "\
        The Captain has told you to improve your physical appearance some more - namely your face, waist and \
        hair.If you satisfy his inspection, he's promised to give you some more items that could help you earn \
        more coin.\
        ",
    "JOURNAL_COMPLETE": "\
        It wasn't easy, but you managed to satisfy the Captain's requirements for improving your physical \
        appearance. You have to say, that you do agree with him in one regard - looking as you do now, the \
        amount of money you earn from whoring out your holes has improved dramatically from when you started... \
        back when you still had some vague sense of manhood. You just hope that after you're free that you can \
        find a way to reverse all the transformations you've gone through.\
        "
};

App.Data.Quests["Q007"] =  {
    "ID": "Q007", "Title": "Build a Better Bimbo - Part 3",
    "GIVER": "Captain",
    "PRE": [
        {
            "TYPE" : "QUEST_FLAG", "NAME" : "Q006", "VALUE" : "COMPLETED"
        }
    ],
    "POST": [],
    "CHECKS": [
        {
            "TYPE": "STAT_BODY", "NAME": "Bust", "VALUE": 39
        },
        {
            "TYPE": "STAT_BODY", "NAME": "Ass", "VALUE": 39
        },
        {
            "TYPE": "STAT_BODY", "NAME": "-Waist", "VALUE": 30
        },
        {
            "TYPE": "STAT_BODY", "NAME": "Face", "VALUE": 59
        },
        {
            "TYPE": "STAT_BODY", "NAME": "Lips", "VALUE": 54
        }
    ],
    "REWARD": [
        {
            "REWARD_TYPE": "ITEM", "TYPE": "CLOTHES", "NAME": "shiny knee boots", "AMOUNT": 1
        },
        {
            "REWARD_TYPE": "ITEM", "TYPE": "CLOTHES", "NAME": "silk blouse", "AMOUNT": 1
        },
        {
            "REWARD_TYPE": "ITEM", "TYPE": "CLOTHES", "NAME": "leather shorts", "AMOUNT": 1
        },
        {
            "REWARD_TYPE": "ITEM", "TYPE": "FOOD", "NAME": "milkdew melon", "AMOUNT": 4
        },
        {
            "REWARD_TYPE": "ITEM", "TYPE": "FOOD", "NAME": "butter gourd", "AMOUNT": 4
        },
        {
            "REWARD_TYPE": "ITEM", "TYPE": "FOOD", "NAME": "honey mead", "AMOUNT": 4
        },
        {
            "REWARD_TYPE": "ITEM_CHOICE", "TYPE": "REEL", "NAME": "COMMON_PERVERTED_SLUT", "AMOUNT": 1
        },
        {
            "REWARD_TYPE": "ITEM_CHOICE", "TYPE": "REEL", "NAME": "COMMON_VENUS", "AMOUNT": 1
        },
        {
            "REWARD_TYPE": "ITEM_CHOICE", "TYPE": "REEL", "NAME": "COMMON_CONCUBINE", "AMOUNT": 1
        }

    ],
    "INTRO": "\
        NPC_NAME says, s(Right, PLAYER_NAME, I was wondering when you'd come to see me...)\n\n\
        NPC_NAME deftly puts an arm around your shoulder and leads you to his desk. He takes a seat and \
        pulls you down into his lap.\n\n\
        NPC_NAME says, s(So my little sissy girl, did you come for play time or are you finally ready to \
        take the next step?)\n\n\
        s(The next step?) you say, curious as to what the Captain has planned...\n\n\
        NPC_NAME chortles and cups your breasts with his hands as he grinds his crotch into your ass on his lap. \
        The ring on his finger glows and despite yourself, you feel a flush of arousal course through your body. \
        You let out a small gasp and a moan as his nimble fingers start pulling on your stiff nipples.\n\n\
        s(It's easy, well for an easy slut like you...) he says, s(Let's just consider it an expansion of \
        existing assets... Grow your tits into pBUST_39 fuck pillows, inflate that assuntil it's pASS_39 and \
        irresistibly fuckable and lastly, get some pLIPS_54 lips on a pFACE_59 face.)\n\n\
        His words swim around in your head and as he continues to fondle and arouse you, the idea of becoming \
        even more of a perfect fuck doll starts to enrapture your brain.\n\n\
        NPC_NAME gropes you, causing you to gasp and then he adds, s(Do this for me my little fuckslut and \
        I'll give you a very nice reward.)\
        ",
    "MIDDLE": "\
        NPC_NAME commands that you stand in front of him and kneel. Once you are on your knees he \
        begins his inspection, thoroughly prodding and groping your slutty body.\n\n\
        NPC_NAME says, s(You're not quite ready slut, but you're coming along nicely. Keep at it and make me \
        proud.)\
        ",
    "FINISH": "\
        You enter NPC_NAME's quarter and assume a position of submission at his feet. You know this is what \
        he prefers and it's come to be almost what you prefer as well. He walks over to inspect you, his hand \
        freeing your pBUST tits from your clothes and his fingers pulling painfully on your nipples. You find \
        it both humiliating as well as erotic.\n\n\
        NPC_NAME commands you to bend over his desk and he unclothes your bottom, giving it a sound slap to \
        watch it jiggle. He chuckles to himself, seemingly amused and does it again. The impromptu spanking turns \
        you on and you involuntarily feel your sissy fuckhole start to gape - an action that doesn't go unnoticed \
        by the Captain.\n\n\
        NPC_NAME says, s(Getting turned on by this much? My, you really are turning into a proper bimbo slut, \
        aren't you? Don't worry, I'll give you what you need.)\n\n\
        He then proceeds to fish his massive cock out of pants and press the stiffening member against your \
        slutty asshole. It doesn't take long before he's worked his tool up into your rectum and is pounding \
        away at you furiously. The feeling of his engorged member rampaging inside you turns your already horny \
        body into overdrive and within minutes you are gasping and panting in a mixture of pleasure and pain. \
        s(You love this cock don't you?) NPC_NAME asks you as he slaps your ass. When you're late in responding, \
        he slaps it harder causing you to yelp out a hasty, s(YES SIR!) to which he responds, s(What is it you \
        love slut?) This time you don't delay and scream out, s(YOUR COCK UP MY BUTT SIR! I LOVE IT! I LOVE COCK!) \
        This seems to satisfy NPC_NAME as he picks up the pace, plowing your butt hole with abandon. He grabs your \
        hair, pulling your head backwards and driving his thick dick deep inside you. The sensation is intense, \
        the pain and the humiliation adding a dark undertone that sends you over the edge, your own sissy clit \
        leaking cum onto the floor as NPC_NAME deposits load after load of hot jizz up your ravaged ass.\n\n\
        Once you've collected yourself, you find the Captain throwing something at you.\n\n\
        s(Here, take this), he says. s(You'll find it useful and as a top tier slut, you should always be \
        advertising your wares.)\
        ",
    "JOURNAL_ENTRY": "\
    The Captain has told you to improve your physical appearance some more - namely your \
    face, ass, lips and tits. If you satisfy his inspection, he's promised to give you a reward... you hope \
    it's one you'll like.\
    ",
    "JOURNAL_COMPLETE": "\
    You managed to complete the Captain's quest and in the process have been turned into almost the perfect \
    fuck doll. From when you started, a slightly boyish looking young man, you've ended up as a slutty bimbo \
    with pBUST tits, a nASS and a pair of nLIPS that could suck off a horse. Very few \"natural\" women \
    could compete with you when it comes to looks and technique, it'd be fitting to say that you're a \
    Queen of a Whore.\
    "
};
