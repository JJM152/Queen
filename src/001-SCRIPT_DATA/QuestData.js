window.App = window.App || { Data: { }, Entity: { } };

window.App.Data.Quests  = {
            "Q001": {
                "ID": "Q001", "Title": "Price of Freedom - Part 1",
                "GIVER": "Captain",
                "PRE": [
                    // Flags that are required to trigger quest.
                ],
                "POST": [
                    {"NAME": "Q001b", "VALUE": "ACTIVE"}
                ],
                "CHECKS": [
                    // Conditions that must be satisfied to complete the quest.
                ],
                "REWARD": [
                    // Rewards given when quest is completed.
                ],
                "PREREQ": "Said when you don't have the pre-req for the quest.",
                "INTRO": "Some intro text goes here",
                "MIDDLE": "This is what gets displayed when you are doing the quest.",
                "FINISH": "NPC_NAME says, \"Well now slut, I see you're not walking funny after all that ass raping - you must be a natural for this kind of work.\" " +
                "He laughs menacingly at his own bad joke and continues, \"I mentioned to you that there was a way off this ship... well other than the gang plank and that's " +
                "simple. All you need to do is @@color:cyan;earn enough filthy coin@@ for me to replace your faggot ass with a good and proper whore. About @@color:cyan;50 grand@@ should cover it. " +
                "Until then... familiarize yourself with the ship and the crew. I'm sure they'll be familiarizing themselves with your slutty holes sooner or later.\"",
                "JOURNAL_ENTRY": "You have been kidnapped and forced to become the on board prostitute to a ship full of scurvy sea dogs. " +
                "The Captain of the ship had mentioned to you that it might be possible to purchase your freedom. You should go and speak to him.",
                "JOURNAL_COMPLETE": "NPC_NAME has offered to let you buy your freedom for the sum of 50,000 coins. It's an enormous amount of money to earn, particularly for " +
                "an inexperienced sissy-whore, but other than looking out for some way to escape, you don't think there is any other way to get away from this life."
            },
            "Q001b": {
                "ID": "Q001b", "Title": "Price of Freedom - Part 2",
                "GIVER": "Captain",
                "PRE": [
                    "Q001"
                ],
                "POST": [
                    {"NAME": "GAME_WON", "VALUE": 1}
                ],
                "CHECKS": [
                    {"TYPE": "MONEY", "NAME": "MONEY", "VALUE": 50000}
                ],
                "REWARD": [],
                "PREREQ": "Said when you don't have the pre-req for the quest.",
                "INTRO": "Some intro text goes here",
                "MIDDLE": "NPC_NAME says, \"Ah, if it isn't little PLAYER_NAME, everyone's favorite sissy slut.\n" +
                    "He looks your body up and down, you think you detect a faint boner beginning to grow in his trousers.\n" +
                    "NPC_NAME continues, \"Managed to earn that coin yet, have we? If not then what are you waiting for? An idle whore earns nothing but a stiff kick to the arse as they say.\"",
                "FINISH": "NPC_NAME looks at you, his eyes filled with amazement. He says, \"I honestly didn't think you'd manage to do it and I have to say that I'm " +
                    "almost sad you did. You were a fine whore PLAYER_NAME, for a sissy anyways. Well, a deal's a deal. I'll take those coins and get that collar off your neck.\"\n" +
                    "NPC_NAME thinks for a moment and then continues, \"Of course, you're welcome to stay on and keep working the deck for as long as you want. Some of the lads have grown " +
                    "quite fond of you, or at least your holes.\"\n\n" +
                    "You do your best to maintain a poker face, acting like your actually considering the offer as you hand over the coin. Of course, you have no intention of staying one " +
                    "second longer than necessary. NPC_NAME waves his signet ring over your neck and the collar drops off with a loud thud. It's been a torturous experience, but now " +
                    "you are finally free.",
                "JOURNAL_ENTRY": "NPC_NAME has promised your freedom for the queenly sum of 50,000 coins. It's a seemingly insurmountable amount of money for you to gather, "+
                    "particularly as a slave to the pirates on the Salty Mermaid. However, it seems to be your only way of getting free... unless another opportunity presents itself.",
                "JOURNAL_COMPLETE": "You managed to scrounge up the coins required to buy your freedom. Now that it has come to this... what will you do?"
            },
            "BOARDINGPASS": {
                "ID": "BOARDINGPASS", "Title": "Boarding Pass",
                "GIVER": "Captain",
                "PRE": [
                    "PRE_BOARDINGPASS"
                ],
                "POST": [
                ],
                "CHECKS": [
                    {"TYPE": "NPC_MOOD", "NAME": "Crew", "VALUE": 90},
					{"TYPE": "NPC_MOOD", "NAME": "FirstMate", "VALUE": 90},
					{"TYPE": "NPC_MOOD", "NAME": "Cook", "VALUE": 90},
					{"TYPE": "NPC_MOOD", "NAME": "Quartermaster", "VALUE": 90},
                ],
                "REWARD": [
                    // Rewards given when quest is completed.
                ],
                "INTRO": "NPC_NAME says, \"Ah, what can I do for you slut? Wait... you want to leave the ship?\"\n\n"+
				"NPC_NAME busts out into peals of laughter. After an uncomfortably long minute, he gathers his composure.\n\n"+
				"NPC_NAME says, \"You know that the @@color:orange;geas on that slave collar@@ won't let you get more than a mile or two away from me so long as I wear "+
				"the control ring, right? Look, I'm not opposed to giving you some shore leave, but that comes after your duties are finished. "+
				"Make sure everyone, and I mean ''everyone'' on board has gotten their fill of your holes first. Then come back to me and I'll grant you leave.\"\n\n"+
				"You weren't sure what you were expecting, but as NPC_NAME dismisses you from his quarters, you feel a depressing tiredness settle over your body. "+
				"Just the sheer volume of dicks you'll have to service to meet his demands would daunt an experienced whore, let alone a reluctant sissy like yourself.",
                "MIDDLE": "NPC_NAME says, \"So, how is it PLAYER_NAME? What are you doing wasting your time around here when there are still cocks to be sucked on deck.\"",
                "FINISH": "NPC_NAME says, \"You've done a hell of a job PLAYER_NAME. A hell of a job. I'm actually surprised you can still walk after all the cocks "+
				"you've taken up your ass these last weeks.\"\n\n"+
				"NPC_NAME chuckles to himself and continues.\n\n"+
				"NPC_NAME says, \"Anyway, your leave is granted. Remember - if you get more than a couple of miles away from me however that collar around your neck "+
				"will rip your stupid bimbo head right off. Boy, that'd be a sight to see... just don't be sucking a dick when it happens... HA!\"",
				"JOURNAL_ENTRY" : "You've been told by NPC_NAME that if you want to be able to take leave liberty when the @@color:cyan;Salty Mermaid@@ is "+
				"at port then you'll first have to make sure that every man aboard the ship is @@color:DeepPink;cheered@@ by your sexual services.",
				"JOURNAL_COMPLETE" : "After what seemed like countless days filled with crazed fucking, you managed to completely sexually satisfy "+
				"every man on board the ship. Doing so, NPC_NAME deigned to grant you a special pass that will allow you to leave the ship. However if "+
				"you get too far away from the Captain, the magical geas on your collar will surely end your life. Be careful."
            },
            "Q002": {
                "ID": "Q002", "Title": "Tools of the Trade - Part 1",
                "GIVER": "FirstMate",
                "PRE": [
                    // Flags that are required to trigger quest.
                ],
                "POST": [
                    // Flags that are set when quest is completed.
                ],
                "CHECKS": [
                    {"TYPE": "NPC_MOOD", "NAME": "Crew", "VALUE": 41}
                ],
                "REWARD": [
                    {"REWARD_TYPE": "ITEM", "TYPE": "COSMETICS", "NAME": "hair accessories", "AMOUNT": 40},
                    {"REWARD_TYPE": "ITEM", "TYPE": "COSMETICS", "NAME": "hair products", "AMOUNT": 40},
                    {"REWARD_TYPE": "ITEM", "TYPE": "COSMETICS", "NAME": "basic makeup", "AMOUNT": 60},
                    {"REWARD_TYPE": "ITEM_CHOICE", "TYPE": "CLOTHES", "NAME": "bonnet", "AMOUNT": 1},
                    {"REWARD_TYPE": "ITEM_CHOICE", "TYPE": "CLOTHES", "NAME": "cotton bra", "AMOUNT": 1},
                    {"REWARD_TYPE": "ITEM_CHOICE", "TYPE": "CLOTHES", "NAME": "short heels", "AMOUNT": 1}
                ],
                "PREREQ": "Said when you don't have the pre-req for the quest.",
                "INTRO": "NPC_NAME says, \"The crew on the Salty Mermaid are a ravenously horny lot, but even they have standards and frankly, you don't really meet them. " +
                "If you ever want to earn enough money to buy your freedom, then you'll need to focus on improving your appearance. It's pretty simple really, " +
                "the higher your @@color:DeepPink;Beauty@@ and @@color:cyan;Style@@ are, the more money you will earn. Even a sissy like you can at least wear sexy clothes " +
                "and put on make-up to be more attractive. If you go and improve the @@color:lime;Mood@@ of the crew, I'll give you some items that can help you earn money. \"",
                "MIDDLE": "NPC_NAME says, \"Hey PLAYER_NAME... what are you doing wasting your time here when you should be on deck making the crew happy? Come back to me when you've " +
                "improved their @@color:lime;Mood@@ and then we'll talk.\"",
                "FINISH": "NPC_NAME says, \"I've heard that you've been out on deck whoring up a storm. Good, that's what you're supposed to do. You'll find that the crew is more " +
                "generous with their coin if you both look good and perform well, so here, have these, they'll help.\"",
                "JOURNAL_ENTRY": "You've been tasked by NPC_NAME to go forth and improve the @@color:lime;Mood@@ of the crew... obviously by letting them fuck you. " +
                "If you manage to complete this task, then NPC_NAME has promised to give you some items that will enhance your @@color:DeepPink;Beauty@@ and @@color:cyan;Style@@, " +
                "making it easier for you to earn more coin.",
                "JOURNAL_COMPLETE": "It was difficult, but after hours spent humiliating and degrading yourself as the personal fuck-toy for the crew of the Salty Mermaid, " +
                "you managed to make them happy enough for NPC_NAME give you his reward. It was an ominous first step into your life as a sissy prostitute."
            },
            "Q003": {
                "ID": "Q003", "Title": "Tools of the Trade - Part 2",
                "GIVER": "FirstMate",
                "PRE": [
                    "Q002"
                ],
                "POST": [
                    // Flags that are set when quest is completed.
                ],
                "CHECKS": [
                    {"TYPE": "NPC_MOOD", "NAME": "Cook", "VALUE": 81}
                ],
                "REWARD": [
                    {"REWARD_TYPE": "ITEM", "TYPE": "FOOD", "NAME": "milkdew melon", "AMOUNT": 3},
                    {"REWARD_TYPE": "ITEM", "TYPE": "FOOD", "NAME": "butter gourd", "AMOUNT": 3},
                    {"REWARD_TYPE": "ITEM_CHOICE", "TYPE": "CLOTHES", "NAME": "silk bra", "AMOUNT": 1},
                    {"REWARD_TYPE": "ITEM_CHOICE", "TYPE": "CLOTHES", "NAME": "frilly bloomers", "AMOUNT": 1}
                ],
                "PREREQ": "Said when you don't have the pre-req for the quest.",
                "INTRO": "NPC_NAME says, \"Not bad slut, you did pretty good keeping the crew entertained but if you want to survive on this ship then you'll need to " +
                "also get the favor of the officers. Take @@color:cyan;Cookie@@ for instance. That fat tub of lard controls the galley on this tub and if you get on his " +
                "bad side, then you'll be eating gruel and cum for the rest of your life. Go and get on his @@color:cyan;good side@@ and then come back.",
                "MIDDLE": "NPC_NAME says, \"Hey PLAYER_NAME... what are you doing wasting your time here when you should be getting on @@color:cyan;Cookie's@@ good side? Come back to me when you've " +
                "improved his @@color:magenta;Mood@@ and then we'll talk.\"",
                "FINISH": "NPC_NAME says, \"I've heard that @@color:cyan;Cookie's@@ taken a liking to you. That's good. You've probably noticed that the more people like you, the more " +
                "services they are willing to offer. That holds true for everyone really, if you think about it. Anyway, now that he's willing to occasionally feed you " +
                "better grub and not just his filthy cock, you'll have a better chance of lasting on this ship. Just be careful, some food has... certain side effects. " +
                "Why don't you experiment with these and see?\"",
                "JOURNAL_ENTRY": "You've been tasked by NPC_NAME get on @@color:cyan;Cookie's@@ good side. You'll need to make sure he's @@color:magenta;really cheerful@@.",
                "JOURNAL_COMPLETE": "It was difficult, but after days spent granting \"favors\" for Cookie in the galley, he's become quite fond of you. In the end it " +
                "paid off because not only did NPC_NAME give you a small reward, but now @@color:cyan;Cookie@@ will occasionally sell you higher quality food."
            },
            "Q004": {
                "ID": "Q004", "Title": "Tools of the Trade - Part 3",
                "GIVER": "FirstMate",
                "PRE": [
                    "Q003"
                ],
                "POST": [
                    // Flags that are set when quest is completed.
                ],
                "CHECKS": [
                    {"TYPE": "NPC_MOOD", "NAME": "Quartermaster", "VALUE": 81}
                ],
                "REWARD": [
                    {"REWARD_TYPE": "ITEM", "TYPE": "DRUGS", "NAME": "face cream", "AMOUNT": 3},
                    {"REWARD_TYPE": "ITEM", "TYPE": "DRUGS", "NAME": "fairy dust", "AMOUNT": 3},
                    {"REWARD_TYPE": "ITEM_CHOICE", "TYPE": "CLOTHES", "NAME": "silk stockings", "AMOUNT": 1},
                    {"REWARD_TYPE": "ITEM_CHOICE", "TYPE": "CLOTHES", "NAME": "frilly dress", "AMOUNT": 1}
                ],
                "PREREQ": "Said when you don't have the pre-req for the quest.",
                "INTRO": "NPC_NAME says, \"By now you should know the score. I won't waste any time explaining it to you, go and get @@color:cyan;Julius@@ on your side. He's a strange one " +
                "to be sure. More interested in his experiments than anything else... although, I wouldn't trust your asshole around him if you're passed out. You know what I mean.",
                "MIDDLE": "NPC_NAME says, \"Hey PLAYER_NAME}... what are you doing wasting your time here when you should be getting on @@color:magenta;Julius's@@ good side? Come back to me when you've " +
                "improved his @@color:magenta;Mood@@ and then we'll talk.\"",
                "FINISH": "NPC_NAME says, \"I've heard that @@color:cyan;Julius's@@ taken a liking to you. Just like @@color:cyan;Cookie@@, getting on his good side will make it so " +
                "that he offers you more drugs for sale and at cheaper prices as well. You'll need those drugs if you want to be able to optimize your earning potential. " +
                "Here, have these samples and you'll see what I mean. Just be careful, using too many drugs will increase your @@color:yellow;Toxicity@@, basically they're poison. " +
                "Just as you'd expect, if you're poisoned, not only will you not heal effectively, but you'll eventually take damage over time.",
                "JOURNAL_ENTRY": "You've been tasked by NPC_NAME get on @@color:cyan;Julius's@@ good side. You'll need to make sure he's @@color:magenta;really cheerful@@.",
                "JOURNAL_COMPLETE": "It was difficult, but after days spent granting \"favors\" for Julius in the cargo hold, he's become quite fond of you. In the end it " +
                "paid off because not only did NPC_NAME give you a small reward, but now @@color:cyan;Julius@@ will occasionally sell you higher quality drugs."
            },
            "Q005": {
                "ID": "Q005", "Title": "Build a Better Bimbo - Part 1",
                "GIVER": "Captain",
                "PRE": [],
                "POST": [
                    // Flags that are set when quest is completed.
                ],
                "CHECKS": [
                    {"TYPE": "STAT_BODY", "NAME": "Bust", "VALUE": 20},
                    {"TYPE": "STAT_BODY", "NAME": "Lips", "VALUE": 38},
                    {"TYPE": "STAT_BODY", "NAME": "Ass", "VALUE": 20}
                ],
                "REWARD": [
                    {"REWARD_TYPE": "ITEM", "TYPE": "CLOTHES", "NAME": "fashion corset", "AMOUNT": 1},
                    {"REWARD_TYPE": "ITEM", "TYPE": "CLOTHES", "NAME": "pirate hat", "AMOUNT": 1}
                ],
                "INTRO": "NPC_NAME says, \"You're going to have a lot of trouble earning the coin you need looking like that.\"\n\n" +
                "He looks you up and down, it's obvious he isn't pleased by what he sees.\n\n" +
                "NPC_NAME clears his throat and continues, \"It's like this PLAYER_NAME, a whore's earning potential is a combination of both her " +
                "skills and looks. You can get the skills by practice, but the looks... well that's a whole other story.\"\n\n" +
                "You're not quite sure you like the direction this conversation is heading in, but it's hard to deny the logic of it. Even you wouldn't " +
                "fuck yourself (as a girl) looking how you do.\n\n" +
                "\"Anyway,\" says NPC_NAME, \"There are some ways to get around this. We're a pirate ship, so we smuggle a lot of goods and some of those goods " +
                "have some pretty serious effects on the human body - why don't you see if @@color:cyan;Julius@@ or @@color:cyan;Cookie@@ have anything they can sell " +
                "you that might help. If you come back to me with some @@color:yellow;ample breasts@@, @@color:yellow;feminine lips@@ and at least a @@color:yellow;small ass@@ " +
                "then even I might fuck you... and I have to tell ya, I pay a lot better than the crew.\"\n\n" +
                "You consider NPC_NAME's offer. You're not sure if you want to alter your body that much, but earning the money for your freedom takes priority...",
                "MIDDLE": "NPC_NAME takes one look at you and says, \"Hmm, what is it? Not quite there yet are we? Come back to me when you at least " +
                "resemble something close to a proper slut.\"",
                "FINISH": "NPC_NAME says, \"Oooer, lookie here. Our little PLAYER_NAME is turning into a right and proper bimbo slut. With a body like that you'll " +
                "find yourself earning far more coin than usual. Men will pay a lot more to fuck a huge pair of tits, or a large jiggling ass and of course, a pair of " +
                "massive cock sucking lips is a great advertisement for your dick sucking skills.\"\n\n" +
                "You know that he's just stating the obvious, but from where you stand you've witnessed it first hand. As your \"womanly assets\" have grown, so has your financial assets. " +
                "It's shameful, but you have to admit that taking NPC_NAME's advice has paid off... literally.\n\n" +
                "NPC_NAME looks at you and smiles, \"Here slut, have a little something to help you on your way, and if you ever want to earn some good coin " +
                "stop by my cabin for some 'play time'.\"",
                "JOURNAL_ENTRY": "You've been told to increase your physical assets so that you have some @@color:yellow;ample breasts@@, " +
                "@@color:yellow;feminine lips@@ and at least a @@color:yellow;small ass@@. Doing so will increase your favor with the Captain.",
                "JOURNAL_COMPLETE": "You've discovered that the food and drugs you consume can alter your body in the most amazing ways. " +
                "Through trial and error you managed to increase the size of your breasts, lips and ass to proportions where your customers are willing to pay " +
                "far more for your services than before. In addition to this, the Captain will now be available as a potential customer."
            },
            "Q006": {
                "ID": "Q006", "Title": "Build a Better Bimbo - Part 2",
                "GIVER": "Captain",
                "PRE": [
                    "Q005"
                ],
                "POST": [
                    // Flags that are set when quest is completed.
                ],
                "CHECKS": [
                    {"TYPE": "STAT_BODY", "NAME": "Face", "VALUE": 39},
                    {"TYPE": "STAT_BODY", "NAME": "-Waist", "VALUE": 40},
                    {"TYPE": "STAT_BODY", "NAME": "Hair", "VALUE": 20}
                ],
                "REWARD": [
                    {"REWARD_TYPE": "ITEM", "TYPE": "DRUGS", "NAME": "healing potion", "AMOUNT": 3},
                    {"REWARD_TYPE": "ITEM_CHOICE", "TYPE": "DRUGS", "NAME": "face cream", "AMOUNT": 10},
                    {"REWARD_TYPE": "ITEM_CHOICE", "TYPE": "DRUGS", "NAME": "hair tonic", "AMOUNT": 10}
                ],
                "INTRO": "NPC_NAME says, \"Well, if it isn't the crews favorite sissy. You're definitely looking a better these days, but I think you " +
                "could do better. No, you will do better.\"\n\n" +
                "NPC_NAME gets an evil glare in his eye as he looks you up and down. He slowly reaches out a hand, cupping one of your breasts and giving it a firm squeeze.\n\n" +
                "NPC_NAME says, \"Not bad, not bad at all. But that face... that waist and that hair. It just simply doesn't do. Go and get some more work done slut, that's " +
                "an order from the Captain. Return when you're looking a bit more presentable and I'll give ye a fine little present.\"\n\n" +
                "NPC_NAME has made good on his offers so far and his advice, as much as you hate it, has helped you earn a fair amount of coin. What should you do?",
                "MIDDLE": "NPC_NAME takes one look at you and says, \"Hmm, what is it? Not quite there yet are we? Come back to me when you at least " +
                "resemble something close to a proper slut.\"",
                "FINISH": "NPC_NAME says, \"Not bad, not bad. That face won't win you any prizes... well, at least not yet, but we can discuss that later. Still, you've come a " +
                "long way from when you started aboard this ship, and I dare say you have quite a bit further to go until you can buy your freedom. But never mind that, take these " +
                "items. They'll help you perform your duties and increase your earning potential.\"",
                "JOURNAL_ENTRY": "The Captain has told you to improve your physical appearance some more - namely your @@color:yellow;face@@, @@color:magenta;waist@@ and @@color:green;hair@@. " +
                "If you satisfy his inspection, he's promised to give you some more items that could help you earn more coin.",
                "JOURNAL_COMPLETE": "It wasn't easy, but you managed to satisfy the Captain's requirements for improving your physical appearance. You have to say, that you do agree with him in " +
                "one regard - looking as you do now, the amount of money you earn from whoring out your holes has improved dramatically from when you started... back when you still had some " +
                "vague sense of manhood. You just hope that after you're free that you can find a way to reverse all the transformations you've gone through."
            },
            "Q007": {
                "ID": "Q007", "Title": "Build a Better Bimbo - Part 3",
                "GIVER": "Captain",
                "PRE": [
                    "Q006"
                ],
                "POST": [
                    // Flags that are set when quest is completed.
                ],
                "CHECKS": [
                    {"TYPE": "STAT_BODY", "NAME": "Bust", "VALUE": 39},
                    {"TYPE": "STAT_BODY", "NAME": "Ass", "VALUE": 39},
                    {"TYPE": "STAT_BODY", "NAME": "-Waist", "VALUE": 30},
                    {"TYPE": "STAT_BODY", "NAME": "Face", "VALUE": 59},
                    {"TYPE": "STAT_BODY", "NAME": "Lips", "VALUE": 54}
                ],
                "REWARD": [
                    {"REWARD_TYPE": "ITEM", "TYPE": "CLOTHES", "NAME": "knee boots", "AMOUNT": 1},
                    {"REWARD_TYPE": "ITEM", "TYPE": "CLOTHES", "NAME": "silk blouse", "AMOUNT": 1},
                    {"REWARD_TYPE": "ITEM", "TYPE": "CLOTHES", "NAME": "leather shorts", "AMOUNT": 1},
                    {"REWARD_TYPE": "ITEM", "TYPE": "FOOD", "NAME": "milkdew melon", "AMOUNT": 4},
                    {"REWARD_TYPE": "ITEM", "TYPE": "FOOD", "NAME": "butter gourd", "AMOUNT": 4},
                    {"REWARD_TYPE": "ITEM", "TYPE": "FOOD", "NAME": "honey mead", "AMOUNT": 4},
                    {"REWARD_TYPE": "ITEM_CHOICE", "TYPE": "DRUGS", "NAME": "succubus philtre", "AMOUNT": 1},
                    {"REWARD_TYPE": "ITEM_CHOICE", "TYPE": "DRUGS", "NAME": "nereid philtre", "AMOUNT": 1}

                ],
                "INTRO": "NPC_NAME says, \"Right, PLAYER_NAME, I was wondering when you'd come to see me...\"\n\n" +
                "NPC_NAME deftly puts an arm around your shoulder and leads you to his desk. He takes a seat and pulls you down into his lap.\n\n" +
                "NPC_NAME says, \"So my little sissy girl, did you come for play time or are you finally ready to take the next step?\"\n\n" +
                "\"The next step?\" @@color:DeepPink;you say@@, curious as to what the Captain has planned...\n\n" +
                "NPC_NAME chortles and cups your breasts with his hands as he grinds his crotch into your ass on his lap. The ring on his finger glows and despite yourself, you " +
                "feel a flush of arousal course through your body. You let out a small gasp and a moan as his nimble fingers start pulling on your stiff nipples.\n\n" +
                "\"It's easy, well for an easy slut like you...\" he says, \"Let's just consider it an expansion of existing assets... Grow your tits into @@color:cyan;truly huge@@ fuck pillows, " +
                "@@color:cyan;inflate that ass@@ until it's irresistibly fuckable and lastly, get some @@color:magenta;cock sucking lips@@ on a @@color:magenta;pretty face@@.\"\n\n" +
                "His words swim around in your head and as he continues to fondle and arouse you, the idea of becoming even more of a perfect fuck doll starts to enrapture your brain.\n\n" +
                "NPC_NAME gropes you, causing you to gasp and then he adds, \"Do this for me my little fuckslut and I'll give you a very nice reward.",
                "MIDDLE": "NPC_NAME commands that you stand in front of him and kneel. Once you are on your knees he begins his inspection, thoroughly prodding and groping your slutty body.\n\n" +
                "NPC_NAME says, \"You're not quite ready slut, but you're coming along nicely. Keep at it and make me proud.\"",
                "FINISH": "You enter NPC_NAME's quarter and assume a position of submission at his feet. You know this is what he prefers and it's come to be almost what you prefer as well. He " +
                "walks over to inspect you, his hand freeing your massive tits from your clothes and his fingers pulling painfully on your nipples. You find it both humiliating as well as erotic. " +
                "NPC_NAME commands you to bend over his desk and he unclothes your bottom, giving it a sound slap to watch it jiggle. He chuckles to himself, seemingly amused and does it again. The " +
                "impromptu spanking turns you on and you involuntarily feel your sissy fuckhole start to gape - an action that doesn't go unnoticed by the Captain.\n\n" +
                "NPC_NAME says, \"Getting turned on by this much? My, you really are turning into a proper bimbo slut, aren't you? Don't worry, I'll give you what you need.\"\n\n" +
                "He then proceeds to fish his massive cock out of pants and press the stiffening member against your slutty asshole. It doesn't take long before he's worked his tool up into " +
                "your rectum and is pounding away at you furiously. The feeling of his engorged member rampaging inside you turns your already horny body into overdrive and within minutes you are " +
                "gasping and panting in a mixture of pleasure and pain. \"You love this cock don't you?\" NPC_NAME asks you as he slaps your ass. When you're late in responding, he slaps it harder causing " +
                "you to yelp out a hasty, \"@@color:DeepPink;YES SIR!@@\" to which he responds, \"What is it you love slut?\" This time you don't delay and scream out, \"@@color:DeepPink;YOUR COCK UP MY BUTT SIR! I LOVE IT! I LOVE COCK!@@\" " +
                "This seems to satisfy NPC_NAME as he picks up the pace, plowing your butt hole with abandon. He grabs your hair, pulling your head backwards and driving his thick dick deep inside you. " +
                "The sensation is intense, the pain and the humiliation adding a dark undertone that sends you over the edge, your own sissy clit leaking cum onto the floor as NPC_NAME deposits load after " +
                "load of hot jizz up your ravaged ass.\n\n" +
                "Once you've collected yourself, you find the Captain throwing something at you.\n\n" +
                "\"Here, take this,\" he says. \"You'll find it useful and as a top tier slut, you should always be advertising your wares.\"",
                "JOURNAL_ENTRY": "The Captain has told you to improve your physical appearance some more - namely your @@color:magenta;face@@, @@color:cyan;ass@@, @@color:cyan;tits@@ and @@color:magenta;lips@@. " +
                "If you satisfy his inspection, he's promised to give you a reward... you hope it's one you'll like.",
                "JOURNAL_COMPLETE": "You managed to complete the Captain's quest and in the process have been turned into almost the perfect fuck doll. From when you started, a slightly boyish " +
                "looking young man, you've ended up as a slutty bimbo with huge tits, a jiggling ass and a pair of lips that could suck off a horse. Very few \"natural\" women could compete with " +
                "you when it comes to looks and technique, it'd be fitting to say that you're a Queen of a Whore."
            },
            "STRIPPING": {
                "ID": "STRIPPING", "Title": "The Casting Couch",
                "GIVER": "Cook",
                "PRE": [
                    "Q005"
                ],
                "POST": [
                    // Flags that are set when quest is completed.
                ],
                "CHECKS": [
                    {"TYPE": "STAT_SKILL", "NAME": "Dancing", "VALUE": 20},
                    {"TYPE": "STAT_CORE", "NAME": "Fitness", "VALUE": 30},
                    {"TYPE": "STAT_CORE", "NAME": "Femininity", "VALUE": 30},
                    {"TYPE": "STAT_SKILL", "NAME" : "Seduction", "VALUE" : 30}
                ],
                "REWARD": [
                    {"REWARD_TYPE": "ITEM", "TYPE": "CLOTHES", "NAME": "stripper costume", "AMOUNT": 1},
                    {"REWARD_TYPE": "ITEM", "TYPE": "COSMETICS", "NAME": "hair accessories", "AMOUNT": 20},
                    {"REWARD_TYPE": "ITEM", "TYPE": "COSMETICS", "NAME": "hair products", "AMOUNT": 20},
                    {"REWARD_TYPE": "ITEM", "TYPE": "COSMETICS", "NAME": "expensive makeup", "AMOUNT": 30}
                ],
                "INTRO": "NPC_NAME says, \"Nice to see you're putting some meat on those bones PLAYER_NAME.\" He eyes you up and down, his gaze lingering on your tits and ass. "+
                "\"And I gotta say, it's all going to the right places too.\"\n\n"+
                "You know what NPC_NAME is talking about - the rare food and drugs on board the @@color:cyan;Salty Mermaid@@ have started to make dramatic alterations to your body, "+
                "right down to a hormonal level. You'd almost wouldn't believe such dramatic changes were possible, but the pBUST tits you are dragging around beg otherwise. If only you could "+
                "find some more wholesome source of nourishment... but maybe it's too late? NPC_NAME interrupts these thoughts and continues speaking.\n\n"+
                "\"If you feel like earning some extra coin, then you might consider putting on a show.\" He motions across the Galley dining room to a small raised dias against the aft wall. "+
                "NPC_NAME says, \"We used to have a proper slut on crew and she'd put on the best stripping and burlesque shows for the boys in the evening. It'd really drive them wild and make "+
                "horny as hell. You might think about it.\"\n\n"+
                "As humiliating as it sounds, being a dancing girl is probably a step up from a whore. Still, chances are with the way you are looking these days there isn't really that "+
                "much of a difference. Still, you wonder if the tips would be good...\n\n"+
                "NPC_NAME says, \"You can use the stage to practice in the mornings and when you think you've got a decent routine come back and see me. I'll give you an 'audition' and if you pass "+
                "then I'll let you perform during the evenings for some extra coin. You may also want to think about getting in better shape - although your dance practice might help with that you "+
                "could also benefit from doing some more physical labor. Maybe something down in the cargo hold?\"",
                "MIDDLE": "NPC_NAME says, \"Don't take it the wrong way sweet tits, but I don't think you have the right 'stuff' yet in order to make it on stage. Keep working on it and come back.\"",
                "FINISH": "You approach NPC_NAME and request that he give you your 'audition' for the role of the only sissy-stripper on board the @@color:cyan;Salty Mermaid@@. NPC_NAME and half of the "+
                "kitchen staff take up seats around the Galley as you get on the stage. One of the cooks, an older man with a strange hat begins to play a raunchy tune on an even older piano that has been "+
                "recently rolled into place. You start off your gyrations a little awkwardly, trying to get in tune with the music. Each time it comes up to an exclamation, you make sure to stick out either "+
                "your pBUST tits or pASS ass with a shake and a jiggle to put extra emphasis on them. As the song progresses you start taking off more and more clothes, trying to do it in a flirty and teasing "+
                "way, smiling and winking at the audience. By now the men are clapping their hands and hooting as you are gyrating your pBUST tits at them, each nipple has a small tassel firmly attached to it "+
                "and you are swinging them counter clockwise in an alternating motion. By now everyone is fully into the show and although you're still quite the novice you feel that you have a good grasp of "+
                "how this should work. You finish off by bending over, your pBUST tits dangling towards the floor and simulating getting butt fucked in tempo to the beat of the music. As you grope and fondle "+
                "yourself and let out a series of moans, the audience is getting increasingly agitated. It's no mistake that they all want to fuck you right now.\n\n"+
                "You finish the show with a wink and a blown kiss to the crowd and they all applaud as you fetch your discarded clothing. NPC_NAME comes up to you and says, \"Well done PLAYER_NAME. "+
                "I had my doubts when I first saw you, but you're going to be a fine slut for this crew. Here take these, they'll help you perform better on stage... oh and by the way, you now "+
                "can come here and put on shows during the evenings every day. Just be careful, you might drive the men so wild that they'll fuck your asshole inside out!\"",
                "JOURNAL_ENTRY": "NPC_NAME has told you that you can @@color:orange;use the stage in the Galley to practice your dancing in the mornings@@. If you improve your abilities enough "+
                "then you will be able to put on shows in the evening for tips.",
                "JOURNAL_COMPLETE": "Your 'audition' for the cooking crew was a wild success. You bumped and wiggled yourself into their hearts, or at least you made their dicks hard for you. From now "+
                    "on you can perform on the stage during the evenings for extra coin and to raise the lust of the crew."
            },
        "THEBACKDOOR": {
            "ID": "THEBACKDOOR", "Title": "The Backdoor",
            "GIVER": "Jarvis",
            "PRE": [
                // Flags that are required to trigger quest.
            ],
            "POST": [
                // Flags that are set when quest is completed.
            ],
            "CHECKS": [
                {"TYPE": "FLAG", "NAME": "FuckedJarvisSilly", "VALUE": true}
            ],
            "REWARD": [
            ],
            "PREREQ": "Said when you don't have the pre-req for the quest.",
            "INTRO": "You approach NPC_NAME and give him what you hope is a graceful curtsy.\n\n\"@@color:DeepPink;Excuse me sir@@\", you speak, \"@@color:DeepPink;Is there anyway I could come and visit his Lordship? It's a matter of urgent importance.@@\"\n\n"+
            "NPC_NAME takes one look at you and raises his eyebrow. \"@@color:Cyan;Sorry miss, but his Lordship is not currently taking visitors@@\". He pauses for a moment and then adds, \"@@color:Cyan;Or accepting services, of a particular kind...@@\"\n\n"+
            "It's pretty obvious that the stuffy old bastard means that the Governor isn't looking for a whore. You're not sure if you should be insulted or not, particularly considering how you've been spending your "+
            "time recently. In any case, you'll have to come up with some sort of plan in order to gain access to the Governor.",
            "MIDDLE": "NPC_NAME says, \"@@color:Cyan;Sorry@@ PLAYER_NAME... @@color:Cyan;but the Governor is still not taking visitors. Please come back in a few days.@@\"",
            "FINISH": "Should never show up.",
            "JOURNAL_ENTRY": "There must be some way to gain access to the Governor or at least entrance to the Mansion after hours. You'll have to keep your eyes open for an opportunity.",
            "JOURNAL_COMPLETE": "Using a combination of alcohol and your whorish skills, you were able to completely exhaust Jarvis and loot him of his house key. You can now come and go into the mansion after dark via the back door."
        },
    "DADDYSGIRL": {
        "ID": "DADDYSGIRL", "Title": "Daddy's Little Girl",
        "GIVER": "LordRowe",
        "PRE": [
            // Flags that are required to trigger quest.
        ],
        "POST": [
            // Flags that are set when quest is completed.
        ],
        "CHECKS": [
            {"TYPE": "STYLE_CATEGORY", "NAME": "Daddy's Girl", "VALUE": 100 },
            {"TYPE": "HAIR_STYLE", "NAME": "cute pig tails", "VALUE": true },
            {"TYPE": "HAIR_COLOR", "NAME": "blond", "VALUE": true }
        ],
        "REWARD": [
        ],
        "PREREQ": "Said when you don't have the pre-req for the quest.",
        "INTRO": "You walk up to NPC_NAME and give him a deep curtsy, taking special care to thrust out your pBUST cleavage to draw his eye. He looks up at you apprehensively and for a moment you can catch the tiredness in his eyes. Clearly he has been losing sleep over the disappearance of his daughter.\n\n" +
        "You introduce yourself and step forward. @@color:DeepPink;\"Excuse me my Lord, but I've come to ask for a boon@@,\" you state as NPC_NAME eyes you up and down. It's clear from the look on his face that he has already surmised much about your current station in life.\n\n" +
        "\"@@color:Cyan;And what would a 'lady' such as yourself need from me? Can't you see that I am lost in my grief for my precious missing daughter? Begone harlot!@@\" he exclaims, his hands motioning for the door.\n\n"+
        "That could have gone better. Perhaps there might be some other way to get his attention, such as preying on his obsession with GF_NAME...",

        "MIDDLE": "NPC_NAME says, \"@@color:Cyan;I thought I told you to leave. Be gone and leave me to my grief!@@\"",
        "FINISH": "NPC_NAME looks up from his desk and takes you in. For a moment he seems puzzled and it's obvious that your superficial resemblance to GF_NAME was playing on his mind.\n\n" +
            "\"@@color:Cyan;Excuse me my dear, but why are you here? Did you get lost?@@\" he asks. Without hesitating you flounce your way over and sit on his lap, \"@@color:DeepPink;Oooph!@@\" you let out in an high voice, followed quickly by a girlish giggle.\n\n"+
            "\"@@color:DeepPink;Sowwy... It wooks wike I wost my Daddy and I can't find him anywhere. Hey mistah, would you be my new Daddy?@@\" you say, while making a show of wiggling your butt on NPC_NAME's lap. It doesn't take long before you feel something hard pushing back.\n\n" +
            "\"@@color:Cyan;What a shame little one... I'm sure we can come to some sort of... agreement.@@\" he replies, his hands gently encircling your waist. You giggle again lightly and return his embrace.\n\n" +
            "It appears your attire, a perfect mix between perversity and coquettishness has captured his attention. Now what do you do?",
        "JOURNAL_ENTRY": "NPC_NAME seems caught up in his grief for his missing daughter. Perhaps if you were to alter your appearance in a way that might draw out his 'fatherly' instincts, he might become more compliant?",
        "JOURNAL_COMPLETE": "It seems that @@color:Cyan;Lord Rowe's@@ obsession with GF_NAME had a rather 'abnormal' aspect to it. Once you changed your appearance, he was more than happy to listen to you... so long as you sit on his lap like a good little girl. In addition, you can gain access to his study at any hour of the day."
    }
    };