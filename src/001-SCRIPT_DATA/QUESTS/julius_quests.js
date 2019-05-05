App.Data.Quests["BETTER_BED"] = {
    "ID": "BETTER_BED", "Title": "A Better Bed",
    "GIVER": "Quartermaster",
    "PRE": [
        { "TYPE" : "DAYS_PASSED", "NAME" : "", "VALUE" : "13" }
    ],
    "POST": [
    ],
    "CHECKS": [
        { "TYPE" : "DAYS_PASSED", "NAME" : "JULIUS_DATE", "VALUE" : "" },
        { "TYPE" : "IS_WEARING", "NAME" : "Shoes", "VALUE" : "NOT" }
    ],
    "REWARD": [
    ],
    "INTRO":
        "NPC_NAME twitches nervously and looks around even though it's obvious only the two of you are in the room. He starts to speak but stops to look around again. Finally, he says, \"Okay, PLAYER_NAME, I actually can get you a better bunk for your room. But you have to do something for me first.\"\n\n"+
        "You roll your eyes. Of course no one wants to just fuckin' //help// on this blasted boat! You sigh and nod to him in resignation.\n\n"+
        "He smiles and raises his hands to his chest to twiddle his fingers together in excitement. \"I've been working on a new liniment -- a bona fide breakthrough! -- and you're going to help me test it. Come see me tomorrow <<if setup.player.Equipment['Shoes'] neq 0>>and make sure you're ''barefoot''.<<else>>but don't put on shoes before then.<</if>>\""+
        "<<set setup.player.QuestFlags.JULIUS_DATE to (setup.player.Day + 1)>>",
    "MIDDLE":
        "NPC_NAME says in clear agitation, \"I said to wait and come back ''barefoot'', PLAYER_NAME! It's not that hard, ya ditzy nympho!\" He looks surprised at his own words and then, after making sure no one else is around, he quietly adds, \"Just... start paying attention, how about?\"\n\n"+
        "You frown at being called a 'nympho' since you obviously didn't choose this life and you're getting fucked whether you want it or not, but you don't see any point in arguing with him.",
    "FINISH":
        "NPC_NAME looks over your shoulder to make sure no one else is with you when you approach. \"Okay,\" he says, \"sit down in the corner over here. Feet up on this.\" He smacks a bucket beside him as he kneels down in front of you.\n\n"+
        "You prop your bare feet up as requested and he immediately douses them with a warm, gooey liquid. //Ugh no... that can't be cum, right?//\n\n"+
        "He starts massaging your feet, squishing the goo between your toes and smearing it all over up to your ankles. Honestly it doesn't feel bad... just kind of gross. Especially so because there's an unsightly ferret-looking guy doing it and he's obviously enjoying himself.\n\n"+
        "Finally, he wipes his hands off on his trousers and stands up. \"Give it some time to set in. I'll go see about your bunk, PLAYER_NAME.\"\n\n"+
        "You wiggle your toes and wait for him to come back. Whatever that ooze was, it has definitely had some sort of effect. Your feet feel silky when you rub them against each other even though the gunk has completely dried and they're looking noticeably more... @@color:pink;feminine@@.\n\n"+
        "NPC_NAME hurries back into the cargo hold, shoots you a thumbs-up, and says \"You're all set, PLAYER_NAME.\"\n\n"+
        "You stand up. Oddly, it seems as if you can feel the slightest details of the warped wood underneath your bare feet. You shrug it off as your imagination.",
    "JOURNAL_ENTRY" :
        "NPC_NAME has promised to get you a more comfortable bed if you come back later without shoes for some reason... and probably not a good one.",
    "JOURNAL_COMPLETE" :
        "Surprisingly, NPC_NAME actually followed through with his promise and somehow managed to get your cot replaced with a much more comfortable bunk. All it cost you was a little dignity -- the same as everything else costs you around here, it seems."
};
App.Data.Quests["CABIN_DECORATION"] = {
    "ID": "CABIN_DECORATION", "Title": "A Decent Decoration",
    "GIVER": "Quartermaster",
    "PRE": [
        { "TYPE" : "DAYS_PASSED", "NAME" : "", "VALUE" : "15" },
        { "TYPE" : "QUEST_FLAG", "NAME" : "BETTER_BED", "VALUE" : "COMPLETED" }
    ],
    "POST": [
    ],
    "CHECKS": [
        { "TYPE" : "DAYS_PASSED", "NAME" : "JULIUS_DATE", "VALUE" : "" },
        { "TYPE" : "IS_WEARING", "NAME" : "Shoes", "VALUE" : "NOT" }
    ],
    "REWARD": [
    ],
    "INTRO":
        "NPC_NAME waits for the other sailor in the cargo hold -- a burly bastard you've sucked off two or three times before but couldn't guess the name of for the life of you -- to leave before even acknowledging your existence.\n\n"+
        "\"So you want some gimcrack and gewgaw to spruce up your cabin, huh PLAYER_NAME?\" he asks, smirking weasily. \"Of course I can help!\" He looks around. \"//After// you help me.\"\n\n"+
        "You sigh and nod, very used to the game of give-and-take aboard this scabrous ship by now.\n\n"+
        "\"Same as before, come back tomorrow -- barefoot, of course. I've revised the liniment formula and we need to test it.\" He shoots you a conspiratorial wink and then shoos you away.\n\n"+
        "<<set setup.player.QuestFlags.JULIUS_DATE to (setup.player.Day + 1)>>",
    "MIDDLE":
        "NPC_NAME says in clear agitation, \"I said to wait and come back ''barefoot'', PLAYER_NAME! Why do you keep being so thick, ya damned doofy butt-slut?\"\n\n"+
        "You roll your eyes at being called a 'butt-slut' but yet again you don't see any point in arguing with him.",
    "FINISH":
        "NPC_NAME looks over your shoulder to make sure no one else is with you when you approach. \"Okay,\" he says, \"you remember: sit down in the corner over here. Feet up on this.\" He smacks a bucket beside him as he kneels down in front of you.\n\n"+
        "You prop your bare feet up as requested and he immediately douses them with a warm, gooey liquid just as before.\n\n"+
        "Once again he starts massaging your feet, squishing the goo between your toes and smearing it all over up to your ankles. It almost feels nice... but you really wish he wasn't enjoying it so much.\n\n"+
        "You lean back and stare at the ceiling so you don't have to see his ferrety face contort in delight as he molests your feet. But suddenly you hear the familiar sound of unbuckling trousers and before you know what's happening, NPC_NAME is pumping his prick between the soles of your feet while squeezing them together with his hands.\n\n"+
        "Staring at him, more surprised than anything, you watch him feverishly fuck your feet while moaning and panting like it was the best pussy he's ever had. You wince as he spurts his hot spunk all over your feet, mashing his sputtering cockhead against your toes, but you have to admit to yourself it was the most painless load you've reaped since you became the ship slut.\n\n"+
        "Getting to his feet and huffing for breath, NPC_NAME says, \"Give it some time to set in. I'll go see about your stuff, PLAYER_NAME.\" He buckles trousers back up and hurries from the room.\n\n"+
        "You look down at your jizz-painted feet and sigh. You thought you were pretty knowledgeable about all the ways to coax cum from a cock but it's clear you still have some things to learn. The gooey cock-spew starts to get lumpy and sticky on your feet as it cools but the sensation isn't icky at all. Which is concerning. As is the impression that your feet have somewhat taken on a @@color:pink;girlish@@ contour and softness.\n\n"+
        "Finally, NPC_NAME bustles back into the cargo hold. He shoots you a thumbs-up just like he did the time before and once again says \"You're all set, PLAYER_NAME.\"\n\n"+
        "You stand up and this time you're sure the bottoms of your bare feet feel more sensitive on the warped wood of the floor. You scrunch your toes against the grain and the sensation sends a shiver up your spine. You shake your head, hoping that the weird sensitivity doesn't last much longer.",
    "JOURNAL_ENTRY" :
        "NPC_NAME has promised to get you some decoration for your cabin if you come back later without shoes again.",
    "JOURNAL_COMPLETE" :
        "Once again, NPC_NAME actually followed through with his promise and somehow managed to get a nice bright lantern for your room and a couple picturesque -- if not obscene -- paintings for your walls. All it cost you was a little more dignity and enduring a new form of sexual abuse."
};

App.Data.Quests["CABIN_RUG"] = {
    "ID": "CABIN_RUG", "Title": "A Reasonable Rug",
    "GIVER": "Quartermaster",
    "PRE": [
        { "TYPE" : "DAYS_PASSED", "NAME" : "", "VALUE" : "17" },
        { "TYPE" : "IS_WEARING", "NAME" : "Shoes", "VALUE" : "NOT" },
        { "TYPE" : "QUEST_FLAG", "NAME" : "CABIN_DECORATION", "VALUE" : "COMPLETED" }
    ],
    "POST": [
    ],
    "CHECKS": [
        { "TYPE" : "DAYS_PASSED", "NAME" : "JULIUS_DATE", "VALUE" : "" },
        { "TYPE" : "IS_WEARING", "NAME" : "Shoes", "VALUE" : "NOT" }
    ],
    "REWARD": [
        {"REWARD_TYPE": "ITEM", "TYPE": "CLOTHES", "NAME": "barefoot sandals", "AMOUNT": 1},
    ],
    "INTRO":
        "You patiently wait for NPC_NAME to finish his skittish surveillance of the cargo hold before you approach. He flagrantly eyes your bare feet while licking his tongue across his parched lips and his trousers tent with impressive rapidity.\n\n"+
        "\"Back for more, huh PLAYER_NAME?\" he asks. His eyes go shifty for a few moments and he whispers to you, \"Keep this between the two of us... I have //perfected// the liniment.\"\n\n"+
        "You nod at him as if you care about his nasty spunk-salve.\n\n"+
        "\"You know the deal, sweetfeet. Come back tomorrow prepared to test the liniment and I will see about securing you a patch of carpet in your cabin for your tender footsies.\" He grins and wiggles his eyebrows.\n\n"+
        "Again you nod. With a satisfied simper, he gestures for you to scram."+
        "<<set setup.player.QuestFlags.JULIUS_DATE to (setup.player.Day + 1)>>",
    "MIDDLE":
        "NPC_NAME stares at you, his weak jaw clenched tight. \"You are the dumbest dingbat I've ever met, PLAYER_NAME. Wait. And. Come. Back. Barefoot. You. Silly. Cock-sock.\"\n\n"+
        "You snort at the term juvenile 'cock-sock' but once more you don't see any point in arguing with him.",
    "FINISH":
        "NPC_NAME scans the area and excitedly beckons for you to approach. \"Sit down in the corner already! Feet up!\" He smacks a bucket beside him as he kneels down in front of you.\n\n"+
        "You prop your bare feet up yet again and he immediately douses them with a warm, gooey liquid for the third time.\n\n"+
        "His fingers squish between your toes and knead against your soles. Like the times before, it isn't exactly unpleasant -- but unlike the times before, you soon find yourself squirming in your seat and worrying to yourself about how suddenly aroused you feel.\n\n"+
        "You shake your head and look away but NPC_NAME is already moaning and it's difficult to ignore. You clamp your eyes closed at the sound of his trousers unbuckling, sure enough, NPC_NAME starts pumping his prick between the soles of your feet.\n\n"+
        "Pressing your lips tight and keeping your eyes tightly closed, you don't have to wait for long before you hear his goofy orgasm groan.The silly sound is quickly followed by the telltale warmth of his syrupy spunk oozing between your toes. You feel him sliding his still-spurting cock up and down the underside of your feet, smearing his spooge everywhere.\n\n"+
        "When you're sure he's spent, you open your eyes and glance down. He's staring at your feet, licking his lips, and for a brief second you think he's going to suck your toes. But a moment later he seems to think better of it and stands up to fasten up his trousers.\n\n"+
        "NPC_NAME says, \"Just needs time to set. I'll go see about that rug, PLAYER_NAME.\" He hurries from the room.\n\n"+
        "The jizz on your feet tingles. Actually your feet just tingle everywhere. You wonder about the effects of the 'perfected' version of his liniment because the not unpleasant sensation of the quickly cooling cum is making your whole body quiver. And you can no longer deny that your feet have somehow become remarkably @@color:pink;girly@@.\n\n"+
        "Finally, NPC_NAME bustles back into the cargo hold. He shoots you a thumbs-up just like he has done every time before and once again says \"You're all set, PLAYER_NAME.\"\n\n"+
        "You stand up and you have no doubt at all that the bottoms of your bare feet feel more sensitive on the warped wood of the floor. Your whole body trembles in delight at the scintillating sensations underfoot. You have to steady yourself with a hand on the bulkhead and take short breaths to calm yourself.\n\n"+
        "NPC_NAME smirks at you and says, \"Told you it was perfected.\" He drops some fine @@color:orange;dangling silver chains@@ into your free hand and winks. \"I think you'll like those.\"",
    "JOURNAL_ENTRY" :
        "NPC_NAME has promised to get you a rug for your cabin to help assuage the distracting sensitivity of your feet if you come back later without shoes again.",
    "JOURNAL_COMPLETE" :
        "Once again, NPC_NAME actually followed through with his promise and somehow managed to get a plush rug for your cabin floor. All it cost you was more dignity and another round of fetishy foot ravishment."
};

App.Data.Quests["BETTER_LOCKER"] = {
    "ID": "BETTER_LOCKER",
    "Title": "Clean up the locker",
    "GIVER": "Quartermaster",
    "PRE": [
        {
            "TYPE" : "QUEST_FLAG", "NAME" : "BETTER_LOCKER_REQUIRED", "VALUE" : true
        }
    ],
    "ON_ACCEPT" : [
        {
            "TYPE" : "TRACK_PROGRESS", "NAME" : "JuliusHandwork"
        }
    ],
    "CHECKS": [
        {
            "TYPE": "TRACK_PROGRESS",  "NAME": "JuliusHandwork", "VALUE" : 1.0
        }
    ],
    "POST": [
        {
            "TYPE" : "QUEST_FLAG", "NAME" : "BETTER_LOCKER_REQUIRED", "OPT" : "DELETE"
        },
    ],
    "REWARD": [],
    "INTRO":"\
        Given that he is the ship's Quartermaster, NPC_NAME is likely the person to help you with your storage \
        problem.\n\n\
        You approach him and gently ask if he can help you solve the issue. To your surprise, NPC_NAME agrees.\
        s(Looking for a special favor, huh?) says NPC_NAME. s(Yes, I can help ya. Better lockers, you say? Well, \
        I could make some for you... if you help me out.)\n\n\
        That sounds promising, and you ask him if he means anything in particular?\n\n\
        s(Just help in general...) NPC_NAME replies s(You help me out with jobs, keep me happy, and I'll \
        make the boxes for you in my free time. Deal?)\
        ",
    "MIDDLE":
        "s(Don't try to push me, PLAYER_NAME.) says NPC_NAME. s(It'll be done when it's done. You'd \
        better take care of your part of the deal and let me work!)\
        ",
    "ON_DAY_PASSED": function(Player) {
        var npcMood = Player.GetNPC(this.GIVER).Mood();
        // at highest mood this should take 7 days, but if mood is lower than 60 (Satisfied), Julius re-uses already done items for other means
        App.Quest.SetProgressValue(SugarCube.setup.player, "JuliusHandwork",
            Math.clamp(App.Quest.GetProgressValue(SugarCube.setup.player, "JuliusHandwork") + (npcMood - 60)/7/40., 0., 1.));
    },
    "FINISH":"\
        s(Okay, PLAYER_NAME, here is your stuff.) NPC_NAME handles you a set of servicable, if heavy, wooden boxes, \
        crates and caskets. s(I've made them of various sizes so you can keep your junk well sorted, ha-ha!)\n\n\
        Was that some sort of pun? In any case, you're happy to find that these storage compartments suit your \
        needs and that they'll finally bring some order that locker so desperately needs.\
        ",
    "JOURNAL_ENTRY" :
        "\
        NPC_NAME has promised to make you a number of custom boxes for your locker. Hopefully this will help \
        you to organize your belongings. All he wants in return is for you to keep him satisifed while he works.\
        ",
    "JOURNAL_COMPLETE" :
        "\
        Once again, NPC_NAME actually followed through with his promise and somehow constructed nice \
        boxes of different sizes that perfectly fit in your locker and into each other. The boxes will \
        certainly help you to keep your stuff organized and easily accessible. (Favorites are now unlocked)."
};

App.Data.Quests["FINDING_YOUR_BALLS_1"] = {
    "ID": "FINDING_YOUR_BALLS_1",
    "Title": "Finding Your Balls - Part 1",
    "GIVER": "Quartermaster",
    "PRE": [
        {
            "TYPE" : "QUEST_FLAG", "NAME" : "EE_PenisShrink_COUNT", "VALUE" : 1
        }
    ],
    "CHECKS": [
        {
            "TYPE": "ITEM", "NAME": "QUEST/strange chemicals", "VALUE": 1
        }
    ],
    "POST": [
        {
            "TYPE" : "SET_CLOTHING_LOCK", "NAME" : "Penis", "VALUE" : false
        }
    ],
    "REWARD": [],
    "INTRO": "\
        s(Ah, so our little sissy wants out of her cage, is it?) mocks NPC_NAME.\n\n\
        s(Well, I can help you, but of course I'll need you to do something for me as well), he pauses \
        for a moment and looks over his shoulder before continuining to speak.\n\n\
        s(Look, I do a lot of 'experimenting' here on the ship. The Captain don't rightly like it, \
        always complaining about storing explosive chemicals and what not, but he just doesn't understand \
        science like I do. Tell you what, if you can find me a new supply of chemicals, ones fit for a \
        proper alchemical genius like myself, then I'll not only help you \
        get that cock cage off, I'll give you some information you might be interested in...)\n\n\
        It's a compelling offer. You're not sure exactly where you'll find these chemicals, or what information \
        he has for you that would be so precious, but you don't appear to have many options \
        if you want to remove your chastity cage.\
        ",
    "MIDDLE":"\
        s(Do you have those chemicals for me PLAYER_NAME?) asks NPC_NAME. s(Don't worry, if you take care of \
        your part of the deal then I'll uphold my end too!)\
        ",
    "FINISH":"\
        You approach NPC_NAME with the crate of chemicals that you retrieved, at no small cost, from the \
        apothecary on <span style='color:gold'>Golden Isle</span>. It looks like mostly (dangerous) junk to you, \
        but it's clearly evident that there must be some good stuff in here by the way NPC_NAME's eyes light up \
        as he inspects the various bottles.\n\n\
        s(Great work, PLAYER_NAME!) exclaims NPC_NAME. s(Here, let me remove that cage like I promised and I'll \
        tell you something good as well.)\n\n\
        NPC_NAME fetches some small tools from his apron and starts to gently cut apart the cage on your cock. \
        It's a bit of a struggle, but you manage to somehow not become errect as he carelessly fondles your balls.\n\n\
        s(There, that should do it) he says as he manages to finally free your pBALLS balls. You breath a \
        sigh of relief.\n\n\
        s(Look, there aren't many things that can undo this damage, but there is a fellow that might \
        know something that could help. Next time you get shore leave, look up a bloke by the name of \
        <span style='color:cyan'>Jameson</span> at a place called \
        <span style='color:gold'>David Jones' Locker in Port Royale</span>. He's a dealer in rare goods and \
        might have something that can help you with your... hahah...'little problem'... hahaha!)\n\n\
        You stand there, open mouthed for a second. Despite the obvious joke at your expense, NPC_NAME was \
        uncharacteristcally helpful for a change and it takes a moment to process what he just said. \
        It seems your next course of action is all but decided, at least if you want to keep your dick from \
        becoming a clit.\
        ",
    "JOURNAL_ENTRY" :"\
        NPC_NAME has promised to remove your chastity cage if you can find him a source of rare alchemical ingredients.\
        ",
    "JOURNAL_COMPLETE" :"\
        NPC_NAME followed through on his part of the deal and removed your chastity cage. He also mentioned \
        that there was a man named <span style='color:cyan'>Jameson</span>living on \
        <span style='color:gold'>Port Royale</span> that might be able to help with your ever shrinking \
        manhood.\
        "
};
