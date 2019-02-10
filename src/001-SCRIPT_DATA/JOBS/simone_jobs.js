App = App || { Data: { }, Entity: { } };
App.Data.JobData = App.Data.JobData || { };

App.Data.JobData["SIMONE_JOB1"] = {
    "ID": "SIMONE_JOB1", "TITLE": "Whoring - Handjob Specialist", "GIVER": "Simone", "PAY" : 50,
    "RATING" : 3, // of 5
    "PHASES" : [ 2, 3 ],
    "DAYS"   : 1,
    "HIDDEN" : false,
    "COST" : [
        { "TYPE" : "TIME", "VALUE" : 1 },
        { "TYPE" : "STAT", "NAME" : "Energy", "VALUE" : 1 } ],
    "REQUIREMENTS" : [
        { "TYPE" : "SKILL", "NAME" : "HandJobs", "VALUE" : 50, "CONDITION" : "gte" }
    ],
    "INTRO" :
        "NPC_NAME says, \"I have a special group of clients that might be interested in those dainty hands of yours.\"",
    "START" :
        "NPC_NAME says, \"This handy-dandy job is as simple as stone soup, PLAYER_NAME. Go in, wiggle your wares a trifle, and then make haste with some prime peeter-pumping. Warm hands and a tender touch is vital, mind you, but you best be a mighty quick cock-juggler, too. You only got two jimmy-jerkers and there's gonna be plenty of testy peckers aching for their turn.\"\n\n"+
        "You nod in understanding. Neglecting an erection is just asking for an ass-whooping in the 'cabin girl' line of work.\n\n"+
        "\"The customary standards apply: take the load on the face unless they request elseways, swallow some jizz here and there like a good whore, and of course look like you can't never ever yank enough cummy cock to save your depraved little slutty life. You know, the usual,\" she says with a shrug.\n\n"+
        "Yeah, you think to yourself, 'the usual'.\n\n"+
        "\"On to the task at hand!\" NPC_NAME laughs and beckons for you to follow her. She ushers you to the back room and sends you in with a playful smack on your behind.",
    "SCENES" : [
        {
            // Enter into room. Flirt with men.
            "ID" : "SCENE01",
            "TRIGGERS" :[ ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [
                { "TAG" : "A", "TYPE" : "SKILL", "NAME" : "Seduction", "DIFFICULTY" : 50, "REWARD" : "NONE", "R_NAME" : "NONE", "VALUE" : 100, "OPT" : 0 }
            ],
            "POST" : [
                { "TYPE" : "MONEY", "NAME" : "", "VALUE" : 20, "OPT" : "TAG_A" }
            ],
            // Three pseudo-random introductions to the room for variety
            "START" :
                "The cramped room is lit only by a few flickering lanterns. It reeks of cigar smoke and semen. Men are crowded on the couches lined along the walls, swilling drinks and huffing fat rolls of tobacco. Most of them are manhandling various girls sat upon their laps. Tits and dicks and even two bald cooches -- both presently being finger-fucked -- are on full display.\n\n"+
                "<<set _irr to random(1,3)>>"+
                "<<if _irr eq 1>>"+
                  "A wee young blonde with smouldering eyes and a felicitous 'pixie' haircut takes your hand and leads you to the center of the room. She runs her slender fingers down your chest, smiling an adorable gap-toothed simper, and jiggles her slim behind as best she can. You catch on that you are meant to dance with her -- but the 'dance' quickly devolves into the two of you lewdly groping one another purely for the enjoyment of the men around you.\n\n"+
                  "A smirk plays on your dance partner's slender but wickedly twisty lips when her dainty hand <<if setup.player.Equipment['Penis'].Name == 'chastity cage' || setup.player.Equipment['Penis'].Name == 'luxurious chastity cage'>>discovers your caged clitty. Her finger traces around the contraption and she playfully feigns futile efforts to remove it <<else>>happens upon your hardening penis. She pinches her fingers on your budding chubby, gently kneading the blood from it and cramping it snugly in her hand to purposefully prevent you from achieving an erection <</if>>while brushing her steamy mouth on the flesh of your neck. As frustrating as it feels, you find yourself lightheaded with giddiness. Much to her delight, you redouble your unmannerly molestation of her lithe, wriggling body."+
                "<<elseif _irr eq 2>>"+
                  "An amazonian woman with dark hair and darker eyes engulfs your hand in her own and yanks you into the center of the room with her. She immediately begins manhandling your body in some sort of dance of dominance. Her brute strength makes any resistance trivial. You're forced to try your best to look pleased with her mistreatment so that you don't sour the carefree carnal mood of the others in the room.\n\n"+
                  "Still, you can't help but wince when her fingers dig into the flesh of your ass or when her teeth drag against the tender skin of your neck. You're starting to get the impression that what she truly wants is to actually eat you.\n\n"+
                  "A surprised cry escapes you when she crushes you against her and nips hard at your earlobe. Apparently this is the reaction she has been after, as she continues to search out ways to force you to wriggle, whimper, and whine."+
                "<<else>>"+
                  "An older woman with a mature motherly beauty takes your head and leads you to the center of the room. She smiles pleasantly as she turns to face you and then rather unpleasantly shoves you to your knees. She lifts her ruffled skirt to reveal her bushy muff and swings one leg over your shoulder to bring your face to her crotch. The lusty aroma of her already glistening pussy tickles your nostril hairs. With a thrust of her hips, she shoves her drooling wet cunt onto your face."+
                "<</if>>",
            "RESULTS" : [
                {"A":  33, "TEXT":
                  "<<if _irr eq 1>>"+
                    "Your obscene display of humiliated exasperation @@doesn't have much effect@@ on the men in the room. A couple of them evince an interest in the elfin blonde, who you have to honestly admit is working her petite little ass off to garner attention, but you seem to have come off more as a contrast than a comparison. Your partner throws you a disappointed pout, unhappy with your poor performance."+
                  "<<elseif _irr eq 2>>"+
                    "Your agitated annoyance at being so roughly molested @@doesn't have much effect@@ on the men in the room. A couple of them evince an interest in the tall and burly dominant woman but it seems that you came off as nothing more than a cheerless trifle for her to toy with. Your partner curls her lip at you and shakes her head in disgust at your poor performance."+
                  "<<else>>"+
                    "You do your best to lick at the woman's sloppy wet pussy but your mouth is far more experienced with cocks than cunts and your amateur attempt as pleasuring her @@doesn't have much effect@@ on the men in the room. When your ineptitude at cunnilingus becomes clear to her, the matronly woman proceeds to crassly grind her hips against your face while berating you for your incompetence."+
                  "<</if>>"
                },
                {"A":  66, "TEXT":
                  "<<if _irr eq 1>>"+
                    "The two of you squishing and pinching and nearly mangling one another has @@attracted some interest@@ from several of the men. They're certainly paying attention to both of you now. Your partner is obviously satisfied with your efforts, too. She giggles and smooches you a sweet thanks on the lips for your adequate performance."+
                  "<<elseif _irr eq 2>>"+
                    "After a few minutes of fearful bewilderment, you manage to get into the spirit of the act and start to mount a playful resistance against your lustful assailant. You manage to convincingly squirm and fuss against her persistant molestation and the two of you have soon @@attracted some interest@@ from several of the men. Your partner is obviously satisfied with your efforts and she gives you a stinging smack on the ass as thanks."+
                  "<<else>>"+
                    "Although your mouth is far more experienced with cocks than cunts, you manage to stuff your face into her crotch and lash your tongue at her tart-tasting purple folds with decently convincing enthusiasm. The woman pants and moans and unlooses some rather vulgar compliments your way. The exhibition has soon @@attracted some interest@@ from several of the men. Your partner is satisfied enough with your efforts to allow you to stand back up."+
                  "<</if>>"
                },
                {"A": 500, "TEXT":
                  "<<if _irr eq 1>>"+
                    "The majority of the men in the room @@take a keen interest@@ in the half-dance half-wrestling match in which the two of you are engaged. Your partner's spirited endeavor to torment you into a hysteric frenzy and your efforts to abuse her bantam body in a scurrilous sort of rapey revenge has paid off in spades. There's not a soft cock in the house and most of them are pointing in your direction. Your partner giggles and throws her arms around your neck to mash her balmy lips to your own in lustful gratitude for your impressive performance."+
                  "<<elseif _irr eq 2>>"+
                    "You realize that you're meant to play the victim. Confident that you're powerless against this husky woman, you slap at her and hammer your dainty fists on her hulking shoulders. The men in the room @@take a keen interest@@ as you throw a tantrum like a proper spoiled sissy while she persists in molesting you. There's not a soft cock in the house and most of them are pointing in your direction. Your partner grins in delight and lifts you from your feet to twirl you around."+
                  "<<else>>"+
                    "Cocks or cunts, it's really all the same to you nowadays. You bury your face in her sodden purple folds and work your tongue and lips with dutiful zeal. She gasps and shivers as you enthusiastically eat her out, and the men in the room @@take a keen interest@@ in the exhibition. There's not a soft cock in the house and most of them are pointing in your direction. Your partner moans in delight and eventually allows you to stand back up."+
                  "<</if>>"
                } ],
            "END" :
                ""
        },
        {
            // Start performing hand jobs
            "ID" : "SCENE02",
            "TRIGGERS" :[ ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [
                { "TAG" : "B", "TYPE" : "SKILL", "NAME" : "HandJobs", "DIFFICULTY" : 75, "REWARD" : "NONE", "R_NAME" : "NONE", "VALUE" : 100, "OPT" : 0 } ],
            "POST" : [
                { "TYPE" : "MONEY", "NAME" : "", "VALUE" : 100, "OPT" : "TAG_B" }
            ],
            "START" :
                "Foreplay now concluded, the girls hustle into their various positions like well-trained soldiers on a battlefront of debauchery. One particularly petite young lady -- with the notable exception of her proposterously ponderous posterior -- has her obese ass anally violated almost before she can even folded herself over a chair. Fleshy slaps of horny hips on blubber-butt fill the room. A line forms behind her, leaving no doubt that she was certain to be on booty duty all evening.\n\n"+
                "Your previous dance partner, the <<if _irr eq 1>>flaxen-haired nymph with the impish hands<<elseif _irr eq 2>>the burly amazonian woman<<else>>the motherly whore with the sopping cunny<</if>>, helpfully ushers you to a vacant corner of the room where you can ply your trade. She tosses a cushion from the couch onto the floor for you to kneel upon and then she hurries off to cram her cheeks with cock like a proper slut.\n\n"+
                "You sink to your knees in the corner and wait for 'customers' with your hands at the ready.",
            "END" :
                "",
            "RESULTS" : [
                {"B":  33, "TEXT": "As the evening drags on, you find yourself fondling disinterested dicks while the men wait for one of the other girls. It seems this crowd @@just isn't interested@@ in your lackluster handies. The girls aren't happy with you either, as the high turnover is scarcely giving them enough time to burp for more belly room or shit out the previous load of jizz before their whorish holes are immediately plugged with petulant pricks once again."},
                {"B":  66, "TEXT": "The 'customers' belly up to you reluctantly at first, but your capable cock-pumps keep them hard and happy while they bide their time for a warm wet cum-dump. As the time passes, you find that you have your very own line -- mostly men looking to get coaxed into another round with the other girls, but more than a few return customers have come back specifically to paint your face with their sweltry spunk. It seems word of your @@savvy handies@@ has gotten around, much to the relief of the other girls."},
                {"B": 500, "TEXT": "The very first pecker in your hand erupts several jets of hot jizz entirely unexpectedly, to both you and the owner, but he's far from upset about it. After rubbing the burning ball-load of spunk from of your eye, you find yourself facing a line that rivals that of any of the other girls. It seems the rumor of your @@crackerjack cock-pumping@@ has already circulated the room. Your velvety hands are in high demand.\n\n"+
                "For the rest of your shift, you're all over dicks -- sometimes even stroking two per hand. Your face and chest are plastered with congealed cum and you'll be picking cock-snot boogers out of your nose for days, but everyone in the room is thrilled with your service."} ]
        },
        {
            // Perversion check for cum play.
            "ID" : "SCENE03",
            "TRIGGERS" :[ ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [
                { "TAG" : "C", "TYPE" : "STAT", "NAME" : "Perversion", "DIFFICULTY" : 50, "REWARD" : "MONEY", "R_NAME" : "MONEY", "VALUE" : 50, "OPT" : 0 } ],
            "POST" : [
                { "TYPE" : "STAT_XP", "NAME" : "Perversion", "VALUE" : 100, "OPT" : "TAG_C" }
            ],
            "START" :
                "Finally, the last two clients of your shift stand in front of you, their weary dicks flopping free. You shake out your hands, hork a huge glob of spit into each palm, and wrap your fingers around their shafts. They look doubtful -- like it'll be a miracle if you can even get them half-hard -- but you glare at them with lusty determination and commence your work.\n\n"+
                "It takes a great deal of effort and focus, not to mention gobs and gobs of saliva, but you eventually have their cocks rock-hard. You pump them at your face, licking your hungry lips with your drooling tongue, and take turns staring each of them in the eye.\n\n"+
                "A small crowd has gathered around you to cheer you on, but of course each of the onlookers is either jacking themselves off or having one of the other girls do it for them. Apparently you've become tonight's finale act.\n\n"+
                "A thick rope of gooey ball-gunk splatters across your face every now and then, but they seem to be coming more and more often. You pump away madly, driven to finish the job, but you're being doused with load after load of hot spunk. You can't blink enough of it out of your eyes or swallow enough down your throat and you're soon so drenched in salty, buttery jizz that you seriously think you may drown in it.",
            "RESULTS" : [
                {"C":  33, "TEXT": "The flood of suffocating spooge proves to much for you. You @@struggle to remain standing@@ much less smiling. Your customers manage to sputter their spooge before you surrender to the staggering amounts of spunk, but nobody is satisfied with your uninspired conclusion. You sit back on your feet, blowing cock-snot from your nose and burping up curdled lumps of cum with a cacophony of repulsive retching sounds. It's clear to everyone there that you're just not the kind of girl who can respectfully hold a hot load."},
                {"C":  66, "TEXT": "Despite your distress, you manage to make a @@half-hearted attempt@@ to please your customers by catching most of their spewed spunk in your already glutted mouth. You roll your cum-numb tongue over your slimy lips and burble out an attempt at a sexy moan. Unfortunately, you can't really tell if they noticed your efforts or not. Looking around, it seems that the show you put on was received with middling approval. You sit back on your heels and do your best to clear your burning eyes of spooge."},
                {"C": 500, "TEXT": "Heedless of the incoming salvos of spooge, you lock eyes with your customers and focus on delivering a most scrumptious experience. You feverishly swallow mouthful after mouthful of cock-cream, the hungry moan of a spunk-starved banshee trilling from your cum-drenched throat. You whimper in ecstacy like the sloppy semen slut you are while gobs and gobs of gelatinous jizz dribble from your chin.\n\n"+
                "Your drooling tongue flails from your mouth, begging for more and more, as you pump these throbbing cocks for their delicious nut-butter. Your hands expertly coax them to release their reward, swift and slippery thanks to the soupy mix of saliva and spooge serving as lube.\n\n"+
                "It's not long before your customers blow their loads in the face of such shamelessly slutty supplication. You catch every droplet in your greedy maw and groan and shudder in bliss.\n\n"+
                "You slowly recover from your spunk-drunk delirium to see that your crazed ejaculation appreciation has been a big hit with your audience. Several men promise to attend the next showing the girls giggle and rollick with delight."} ],
            "END" :
                "\n\nNow that everyone is spent, you excuse yourself to clean up your face and clothes as best you can. Eventually you seek out NPC_NAME to collect your pay. You find her at the front of the bar and she waves for you to come see her."
        },
        {   // If pass check 'A' and If counter is at MAX (5), reward player and set counter to 0.
            "ID" : "SCENE04a",
            "TRIGGERS" :[
                { "TYPE" : "TAG", "NAME" : "A", "VALUE" : 100, "CONDITION" : "gte" },
                { "TYPE" : "TAG", "NAME" : "B", "VALUE" : 100, "CONDITION" : "gte" },
                { "TYPE" : "TAG", "NAME" : "C", "VALUE" : 100, "CONDITION" : "gte" },
                { "TYPE" : "COUNTER", "NAME" : "SIMONE_LOOT", "VALUE" : 5, "CONDITION" : "gte" }
            ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [ ],
            "POST" : [
                { "TYPE" : "NPC_STAT",  "NAME" : "Mood", "VALUE" : 5 },
                { "TYPE" : "FLAG",      "NAME" : "SIMONE_LOOT",              "VALUE" :   0,  "OPT" : "SET" },
                { "TYPE" : "FLAG",      "NAME" : "SIMONE_REWARD",            "VALUE" :   1,  "OPT" : "SET" },
                { "TYPE" : "LOOT_BOX",  "NAME" : "uncommon lolita loot box", "VALUE" :   1,  "OPT" : "" }
            ],
            "START" :   "NPC_NAME says, \"Here, you've earned this PLAYER_NAME\". She hands you a novelty gift bag shaped like a teddy bear. What goodies could be inside?",
            "END" : "",
            "RESULTS" : [ ]
        },
        {   // If passed both checks then increment counter. Doesn't trigger if the counter is already at MAX (5) or the reward has been given this time.
            "ID" : "SCENE04b",
            "TRIGGERS" :[
                { "TYPE" : "TAG", "NAME" : "A", "VALUE" : 100, "CONDITION" : "gte" },
                { "TYPE" : "TAG", "NAME" : "B", "VALUE" : 100, "CONDITION" : "gte" },
                { "TYPE" : "TAG", "NAME" : "C", "VALUE" : 100, "CONDITION" : "gte" },
                { "TYPE" : "COUNTER", "NAME" : "SIMONE_LOOT", "VALUE" : 4, "CONDITION" : "lte" },
                { "TYPE" : "FLAG", "NAME" : "SIMONE_REWARD",  "OPT" : "NOT_SET" }
            ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [ ],
            "POST" : [
                { "TYPE" : "NPC_STAT",   "NAME" : "Mood",           "VALUE" : 5 },
                { "TYPE" : "COUNTER",    "NAME" : "SIMONE_LOOT",    "VALUE" : 1, "OPT" : 1 },
                { "TYPE" : "QUEST_FLAG", "NAME" : "SIMONE_JOB_1",   "VALUE" : "COMPLETED", "OPT" : "SET" }
            ],
            "START" :   "NPC_NAME says, \"Nice work today. Those rascals were quite happy with your service. Keep it up and I might slip you a little bit something extra...\"",
            "END" : "",
            "RESULTS" : [ ]
        },
        {  // Check to see if we passed all the events and if the store is not unlocked, then unlock it.
            "ID" : "SLOT_REWARD",
            "TRIGGERS" :[
                { "TYPE" : "TAG",  "NAME" : "A", "VALUE" : 100, "CONDITION" : "gte" },
                { "TYPE" : "TAG",  "NAME" : "B", "VALUE" : 100, "CONDITION" : "gte" },
                { "TYPE" : "TAG",  "NAME" : "C", "VALUE" : 100, "CONDITION" : "gte" },
                { "TYPE" : "FLAG", "NAME" : "SIMONE_HANDJOB_UNLOCK",  "OPT" : "NOT_SET" }
            ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [ ],
            "POST" : [
                { "TYPE" : "FLAG",  "NAME" : "SIMONE_HANDJOB_UNLOCK", "VALUE" : 1, "OPT" : "SET" },
                { "TYPE" : "STORE", "NAME" : "LUSTY_LASS", "VALUE" :  "COMMON_HANDMAIDEN",   "OPT" : "UNLOCK"    }
            ],
            "START" :   "\"Oh, and before I forget... check out my shop sometime. There might be something that'd interest a wank specialist such as yourself!\"",
            "END" : "",
            "RESULTS" : [ ]
        },
        {   // Just unset the flag that shows we received loot and make sure we clear the counter.
            "ID" : "SCENE04c",
            "TRIGGERS" :[
                { "TYPE" : "FLAG", "NAME" : "SIMONE_REWARD", "OPT" : "SET" }
            ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [ ],
            "POST" : [
                { "TYPE" : "FLAG",   "NAME" : "SIMONE_REWARD",  "OPT" : "DELETE" }
            ],
            "START" : "",
            "END" : "",
            "RESULTS" : [ ]
        }

    ],
    "END" :
        "NPC_NAME says, \"Another day, another coin, eh PLAYER_NAME?\"\n\n"+
        "NPC_NAME fetches a small bag from behind the counter and counts your pay and tips for the night into your awaiting hands.",
    "JOB_RESULTS" : [ ]
};
App.Data.JobData["SIMONE_JOB2"] = {
    "ID": "SIMONE_JOB2", "TITLE": "Whoring - Blowjob Specialist", "GIVER": "Simone", "PAY" : 50,
    "RATING" : 3, // of 5
    "PHASES" : [ 2, 3 ],
    "DAYS"   : 1,
    "HIDDEN" : false,
    "COST" : [
        { "TYPE" : "TIME", "VALUE" : 1 },
        { "TYPE" : "STAT", "NAME" : "Energy", "VALUE" : 1 } ],
    "REQUIREMENTS" : [
        { "TYPE" : "SKILL", "NAME" : "BlowJobs", "VALUE" : 50, "CONDITION" : "gte" }
    ],
    "INTRO" : "NPC_NAME says, \"I have a special group of clients that might be interested in that slutty mouth of yours.\"",
    "START" :
        "NPC_NAME says, \"So here's the deal PLAYER_NAME, none of my regular girls will take the job, but I have a group of clients paying good coin to have a bit of a party in the back room. You won't be the only entertainment for the evening, but it's been requested to supply a slut who can deep throat a monster cock and look happy about it. Swallow a little jizz here and there. You know, the usual.\"\n\n"+
        "Yeah, you think to yourself, 'the usual'.\n\n"+
        "\"Time for you to get mouthy!\" NPC_NAME laughs and beckons for you to follow her. She ushers you to the back room and sends you in with a playful smack on your behind.",
    "SCENES" : [
        {
            // Enter into room. Flirt with men.
            "ID" : "SCENE01",
            "TRIGGERS" :[ ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [
                { "TAG" : "A", "TYPE" : "SKILL", "NAME" : "Seduction", "DIFFICULTY" : 50, "REWARD" : "NONE", "R_NAME" : "NONE", "VALUE" : 100, "OPT" : 0 }
            ],
            "POST" : [
                { "TYPE" : "MONEY", "NAME" : "", "VALUE" : 20, "OPT" : "TAG_A" }
            ],
            // Three pseudo-random introductions to the room for variety
            "START" :
                "The cramped room is lit only by a few flickering lanterns. It reeks of cigar smoke and semen. Men are crowded on the couches lined along the walls, swilling drinks and huffing fat rolls of tobacco. Most of them are manhandling various girls sat upon their laps. Tits and dicks and even two bald cooches -- both presently being finger-fucked -- are on full display.\n\n"+
                "<<set _irr to random(1,3)>>"+
                "<<if _irr eq 1>>"+
                  "A wee young blonde with smouldering eyes and a felicitous 'pixie' haircut takes your hand and leads you to the center of the room. She runs her slender fingers down your chest, smiling an adorable gap-toothed simper, and jiggles her slim behind as best she can. You catch on that you are meant to dance with her -- but the 'dance' quickly devolves into the two of you lewdly groping one another purely for the enjoyment of the men around you.\n\n"+
                  "A smirk plays on your dance partner's slender but wickedly twisty lips when her dainty hand <<if setup.player.Equipment['Penis'].Name == 'chastity cage' || setup.player.Equipment['Penis'].Name == 'luxurious chastity cage'>>discovers your caged clitty. Her finger traces around the contraption and she playfully feigns futile efforts to remove it <<else>>happens upon your hardening penis. She pinches her fingers on your budding chubby, gently kneading the blood from it and cramping it snugly in her hand to purposefully prevent you from achieving an erection <</if>>while brushing her steamy mouth on the flesh of your neck. As frustrating as it feels, you find yourself lightheaded with giddiness. Much to her delight, you redouble your unmannerly molestation of her lithe, wriggling body."+
                "<<elseif _irr eq 2>>"+
                  "An amazonian woman with dark hair and darker eyes engulfs your hand in her own and yanks you into the center of the room with her. She immediately begins manhandling your body in some sort of dance of dominance. Her brute strength makes any resistance trivial. You're forced to try your best to look pleased with her mistreatment so that you don't sour the carefree carnal mood of the others in the room.\n\n"+
                  "Still, you can't help but wince when her fingers dig into the flesh of your ass or when her teeth drag against the tender skin of your neck. You're starting to get the impression that what she truly wants is to actually eat you.\n\n"+
                  "A surprised cry escapes you when she crushes you against her and nips hard at your earlobe. Apparently this is the reaction she has been after, as she continues to search out ways to force you to wriggle, whimper, and whine."+
                "<<else>>"+
                  "An older woman with a mature motherly beauty takes your head and leads you to the center of the room. She smiles pleasantly as she turns to face you and then rather unpleasantly shoves you to your knees. She lifts her ruffled skirt to reveal her bushy muff and swings one leg over your shoulder to bring your face to her crotch. The lusty aroma of her already glistening pussy tickles your nostril hairs. With a thrust of her hips, she shoves her drooling wet cunt onto your face."+
                "<</if>>",
            "RESULTS" : [
                {"A":  33, "TEXT":
                  "<<if _irr eq 1>>"+
                    "Your obscene display of humiliated exasperation @@doesn't have much effect@@ on the men in the room. A couple of them evince an interest in the elfin blonde, who you have to honestly admit is working her petite little ass off to garner attention, but you seem to have come off more as a contrast than a comparison. Your partner throws you a disappointed pout, unhappy with your poor performance."+
                  "<<elseif _irr eq 2>>"+
                    "Your agitated annoyance at being so roughly molested @@doesn't have much effect@@ on the men in the room. A couple of them evince an interest in the tall and burly dominant woman but it seems that you came off as nothing more than a cheerless trifle for her to toy with. Your partner curls her lip at you and shakes her head in disgust at your poor performance."+
                  "<<else>>"+
                    "You do your best to lick at the woman's sloppy wet pussy but your mouth is far more experienced with cocks than cunts and your amateur attempt as pleasuring her @@doesn't have much effect@@ on the men in the room. When your ineptitude at cunnilingus becomes clear to her, the matronly woman proceeds to crassly grind her hips against your face while berating you for your incompetence."+
                  "<</if>>"
                },
                {"A":  66, "TEXT":
                  "<<if _irr eq 1>>"+
                    "The two of you squishing and pinching and nearly mangling one another has @@attracted some interest@@ from several of the men. They're certainly paying attention to both of you now. Your partner is obviously satisfied with your efforts, too. She giggles and smooches you a sweet thanks on the lips for your adequate performance."+
                  "<<elseif _irr eq 2>>"+
                    "After a few minutes of fearful bewilderment, you manage to get into the spirit of the act and start to mount a playful resistance against your lustful assailant. You manage to convincingly squirm and fuss against her persistant molestation and the two of you have soon @@attracted some interest@@ from several of the men. Your partner is obviously satisfied with your efforts and she gives you a stinging smack on the ass as thanks."+
                  "<<else>>"+
                    "Although your mouth is far more experienced with cocks than cunts, you manage to stuff your face into her crotch and lash your tongue at her tart-tasting purple folds with decently convincing enthusiasm. The woman pants and moans and unlooses some rather vulgar compliments your way. The exhibition has soon @@attracted some interest@@ from several of the men. Your partner is satisfied enough with your efforts to allow you to stand back up."+
                  "<</if>>"
                },
                {"A": 500, "TEXT":
                  "<<if _irr eq 1>>"+
                    "The majority of the men in the room @@take a keen interest@@ in the half-dance half-wrestling match in which the two of you are engaged. Your partner's spirited endeavor to torment you into a hysteric frenzy and your efforts to abuse her bantam body in a scurrilous sort of rapey revenge has paid off in spades. There's not a soft cock in the house and most of them are pointing in your direction. Your partner giggles and throws her arms around your neck to mash her balmy lips to your own in lustful gratitude for your impressive performance."+
                  "<<elseif _irr eq 2>>"+
                    "You realize that you're meant to play the victim. Confident that you're powerless against this husky woman, you slap at her and hammer your dainty fists on her hulking shoulders. The men in the room @@take a keen interest@@ as you throw a tantrum like a proper spoiled sissy while she persists in molesting you. There's not a soft cock in the house and most of them are pointing in your direction. Your partner grins in delight and lifts you from your feet to twirl you around."+
                  "<<else>>"+
                    "Cocks or cunts, it's really all the same to you nowadays. You bury your face in her sodden purple folds and work your tongue and lips with dutiful zeal. She gasps and shivers as you enthusiastically eat her out, and the men in the room @@take a keen interest@@ in the exhibition. There's not a soft cock in the house and most of them are pointing in your direction. Your partner moans in delight and eventually allows you to stand back up."+
                  "<</if>>"
                } ],
            "END" :
                ""
        },
        {
            // Start performing blow jobs
            "ID" : "SCENE02",
            "TRIGGERS" :[ ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [
                { "TAG" : "B", "TYPE" : "SKILL", "NAME" : "BlowJobs", "DIFFICULTY" : 75, "REWARD" : "NONE", "R_NAME" : "NONE", "VALUE" : 100, "OPT" : 0 } ],
            "POST" : [
                { "TYPE" : "MONEY", "NAME" : "", "VALUE" : 100, "OPT" : "TAG_B" }
            ],
            "START" :
                "Foreplay now concluded, the girls hustle into their various positions like well-trained soldiers on a battlefront of debauchery. One particularly petite young lady -- with the notable exception of her proposterously ponderous posterior -- has her obese ass anally violated almost before she can even folded herself over a chair. Fleshy slaps of horny hips on blubber-butt fill the room. A line forms behind her, leaving no doubt that she was certain to be on booty duty all evening.\n\n"+
                "Your previous dance partner, the <<if _irr eq 1>>flaxen-haired nymph with the impish hands<<elseif _irr eq 2>>the burly amazonian woman<<else>>the motherly whore with the sopping cunny<</if>>, helpfully ushers you to a vacant corner of the room where you can ply your trade. She tosses a cushion from the couch onto the floor for you to kneel upon and then she hurries off to cram her cheeks with cock like a proper slut.\n\n"+
                "You sink to your knees in the corner and wait for 'customers' with your mouth at the ready.",
            "END" :
                "",
            "RESULTS" : [
                {"B":  33, "TEXT": "You spend most of the time just fondling customers while they get ready for one of the other girls. It @@seems they just aren't that interested@@ in you."},
                {"B":  66, "TEXT": "You start off slowly, but soon the men are starting to notice how @@good your cock sucking@@ is and before you notice it, you're pulling a significant "+
                "number of men your way."},
                {"B": 500, "TEXT": "The remainders of the evening passes in a blur of cocks and semen. Your skills are @@so good that you find yourself in high demand@@ and you start to worry "+
                "if your jaw is going to lock from all the dick sucking."} ]
        },
        {
            // Perversion check for cum play.
            "ID" : "SCENE03",
            "TRIGGERS" :[ ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [
                { "TAG" : "C", "TYPE" : "STAT", "NAME" : "Perversion", "DIFFICULTY" : 50, "REWARD" : "MONEY", "R_NAME" : "MONEY", "VALUE" : 50, "OPT" : 0 } ],
            "POST" : [
                { "TYPE" : "STAT_XP", "NAME" : "Perversion", "VALUE" : 100, "OPT" : "TAG_C" }
            ],
            "START" :
            "Finally, the last two clients are in front of you, their cocks out and flopping free. You slowly stroke them both to hardness, using your tongue and saliva to "+
            "lubricate their shafts. Eventually both men are sporting huge erections and you greedily start slurping on their meat poles. "+
            "You bob your head up and down furiously, alternating between the men, until they begin shooting long ropey streams of cum into your mouth and lips."
            ,
            "RESULTS" : [
                {"C":  33, "TEXT": "It's difficult to deal with and you @@struggle to remain smiling@@ while the customers blow their loads."},
                {"C":  66, "TEXT": "You try to really put on a show for the men, smiling and making @@half hearted attempts@@ to lick their jizz from your lips. You couldn't really tell if "+
                "they noticed your performance or not."},
                {"C": 500, "TEXT": "You lock eyes on the men and open your mouth wide, letting their cum fall directly onto your tongue. Letting out a throaty moan you start to lap it up from "+
                "your lips and swallow it down. The super lewd act spurs them on and soon they're rock hard and you're pumping them again. They better pay you extra for this."} ],
            "END" :
            "\n\nEventually everyone is spent and you find yourself covered, literally dripping with jism. You wipe some out of your eyes and then "+
            "politely excuse yourself to clean up your face and clothes. Eventually you go to find NPC_NAME to collect your pay. She's at the front of the bar and nods when she sees you."
        },
        {   // If pass check 'A' and If counter is at MAX (5), reward player and set counter to 0.
            "ID" : "SCENE04a",
            "TRIGGERS" :[
                { "TYPE" : "TAG", "NAME" : "A", "VALUE" : 100, "CONDITION" : "gte" },
                { "TYPE" : "TAG", "NAME" : "B", "VALUE" : 100, "CONDITION" : "gte" },
                { "TYPE" : "TAG", "NAME" : "C", "VALUE" : 100, "CONDITION" : "gte" },
                { "TYPE" : "COUNTER", "NAME" : "SIMONE_LOOT", "VALUE" : 5, "CONDITION" : "gte" }
            ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [ ],
            "POST" : [
                { "TYPE" : "NPC_STAT",  "NAME" : "Mood", "VALUE" : 5 },
                { "TYPE" : "FLAG",      "NAME" : "SIMONE_LOOT",              "VALUE" :   0,  "OPT" : "SET" },
                { "TYPE" : "FLAG",      "NAME" : "SIMONE_REWARD",            "VALUE" :   1,  "OPT" : "SET" },
                { "TYPE" : "LOOT_BOX",  "NAME" : "uncommon dancer loot box",    "VALUE" :   1,  "OPT" : "" }
            ],
            "START" :   "NPC_NAME says, \"Here, you've earned this PLAYER_NAME\". She hands you a novelty gift bag shaped like a teddy bear, you wonder what's inside it?",
            "END" : "",
            "RESULTS" : [ ]
        },
        {   // If passed all checks then increment counter. Doesn't trigger if the counter is already at MAX (5) or the reward has been given this time.
            "ID" : "SCENE04b",
            "TRIGGERS" :[
                { "TYPE" : "TAG", "NAME" : "A", "VALUE" : 100, "CONDITION" : "gte" },
                { "TYPE" : "TAG", "NAME" : "B", "VALUE" : 100, "CONDITION" : "gte" },
                { "TYPE" : "TAG", "NAME" : "C", "VALUE" : 100, "CONDITION" : "gte" },
                { "TYPE" : "COUNTER", "NAME" : "SIMONE_LOOT", "VALUE" : 4, "CONDITION" : "lte" },
                { "TYPE" : "FLAG", "NAME" : "SIMONE_REWARD",  "OPT" : "NOT_SET" }
            ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [ ],
            "POST" : [
                { "TYPE" : "NPC_STAT",  "NAME" : "Mood", "VALUE" : 5 },
                { "TYPE" : "COUNTER",   "NAME" : "SIMONE_LOOT",    "VALUE" :   1,  "OPT" : 1 },
                { "TYPE" : "QUEST_FLAG", "NAME" : "SIMONE_JOB_2",   "VALUE" : "COMPLETED", "OPT" : "SET" }
            ],
            "START" :   "NPC_NAME says, \"Nice work today. Those rascals were quite happy with your service. Keep it up and I might slip you a little bit something extra...\"",
            "END" : "",
            "RESULTS" : [ ]
        },
        {  // Check to see if we passed all the events and if the store is not unlocked, then unlock it.
            "ID" : "SLOT_REWARD",
            "TRIGGERS" :[
                { "TYPE" : "TAG",  "NAME" : "A", "VALUE" : 100, "CONDITION" : "gte" },
                { "TYPE" : "TAG",  "NAME" : "B", "VALUE" : 100, "CONDITION" : "gte" },
                { "TYPE" : "TAG",  "NAME" : "C", "VALUE" : 100, "CONDITION" : "gte" },
                { "TYPE" : "FLAG", "NAME" : "SIMONE_BLOWJOB_UNLOCK",  "OPT" : "NOT_SET" }
            ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [ ],
            "POST" : [
                { "TYPE" : "FLAG",  "NAME" : "SIMONE_BLOWJOB_UNLOCK", "VALUE" : 1, "OPT" : "SET" },
                { "TYPE" : "STORE", "NAME" : "LUSTY_LASS", "VALUE" :  "COMMON_BREATH_MINT",   "OPT" : "UNLOCK"    }
            ],
            "START" :   "\"Oh, and before I forget... check out my shop sometime. There might be something that'd interest an aspiring cock sucker such as yourself!\"",
            "END" : "",
            "RESULTS" : [ ]
        },
        {   // Just unset the flag that shows we received loot and make sure we clear the counter.
            "ID" : "SCENE04c",
            "TRIGGERS" :[
                { "TYPE" : "FLAG", "NAME" : "SIMONE_REWARD", "OPT" : "SET" }
            ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [ ],
            "POST" : [
                { "TYPE" : "FLAG",   "NAME" : "SIMONE_REWARD",  "OPT" : "DELETE" }
            ],
            "START" : "",
            "END" : "",
            "RESULTS" : [ ]
        }

    ],
    "END" :
        "NPC_NAME says, \"Another day, another coin, eh PLAYER_NAME?\"\n\n"+
        "NPC_NAME fetches a small bag from behind the counter and counts your pay and tips for the night into your awaiting hands.",
    "JOB_RESULTS" : [ ]
};
App.Data.JobData["SIMONE_JOB3"] = {
    "ID": "SIMONE_JOB3", "TITLE": "Whoring - Tit Fucking Specialist", "GIVER": "Simone", "PAY" : 50,
    "RATING" : 3, // of 5
    "PHASES" : [ 2, 3 ],
    "DAYS"   : 1,
    "HIDDEN" : false,
    "COST" : [
        { "TYPE" : "TIME", "VALUE" : 1 },
        { "TYPE" : "STAT", "NAME" : "Energy", "VALUE" : 1 } ],
    "REQUIREMENTS" : [
        { "TYPE" : "SKILL", "NAME" : "TitFucking", "VALUE" : 50, "CONDITION" : "gte" },
        { "TYPE" : "BODY",  "NAME" : "Bust", "VALUE" : 20, "CONDITION" : "gte" }
    ],
    "INTRO" : "NPC_NAME says, \"I have a special group of clients that might be interested in you... if you have the skills.\"",
    "START" :
    "NPC_NAME says, \"So here's the deal PLAYER_NAME, none of my regular girls will take the job, but I have a group of clients paying good coin "+
    "to have a bit of a party in the back room. You won't be the only entertainment for the evening, but it's been requested to supply a slut who can "+
    "wank a good load all over her tits and look happy about it. Swallow a little jizz here and there. You know, the usual.\"\n\n"+
    "Yes, you think to yourself, 'the usual'.\n\n"+
    "NPC_NAME gives you the run down on the rest of the job and ushers you into the back room."
    ,
    "SCENES" : [
        {
            // Enter into room. Flirt with men.
            "ID" : "SCENE01",
            "TRIGGERS" :[ ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [
                { "TAG" : "A", "TYPE" : "SKILL", "NAME" : "Seduction", "DIFFICULTY" : 50, "REWARD" : "NONE", "R_NAME" : "NONE", "VALUE" : 100, "OPT" : 0 }
            ],
            "POST" : [
                { "TYPE" : "MONEY", "NAME" : "", "VALUE" : 20, "OPT" : "TAG_A" }
            ],
            // Three pseudo-random introductions to the room for variety
            "START" :
                "The cramped room is lit only by a few flickering lanterns. It reeks of cigar smoke and semen. Men are crowded on the couches lined along the walls, swilling drinks and huffing fat rolls of tobacco. Most of them are manhandling various girls sat upon their laps. Tits and dicks and even two bald cooches -- both presently being finger-fucked -- are on full display.\n\n"+
                "<<set _irr to random(1,3)>>"+
                "<<if _irr eq 1>>"+
                  "A wee young blonde with smouldering eyes and a felicitous 'pixie' haircut takes your hand and leads you to the center of the room. She runs her slender fingers down your chest, smiling an adorable gap-toothed simper, and jiggles her slim behind as best she can. You catch on that you are meant to dance with her -- but the 'dance' quickly devolves into the two of you lewdly groping one another purely for the enjoyment of the men around you.\n\n"+
                  "A smirk plays on your dance partner's slender but wickedly twisty lips when her dainty hand <<if setup.player.Equipment['Penis'].Name == 'chastity cage' || setup.player.Equipment['Penis'].Name == 'luxurious chastity cage'>>discovers your caged clitty. Her finger traces around the contraption and she playfully feigns futile efforts to remove it <<else>>happens upon your hardening penis. She pinches her fingers on your budding chubby, gently kneading the blood from it and cramping it snugly in her hand to purposefully prevent you from achieving an erection <</if>>while brushing her steamy mouth on the flesh of your neck. As frustrating as it feels, you find yourself lightheaded with giddiness. Much to her delight, you redouble your unmannerly molestation of her lithe, wriggling body."+
                "<<elseif _irr eq 2>>"+
                  "An amazonian woman with dark hair and darker eyes engulfs your hand in her own and yanks you into the center of the room with her. She immediately begins manhandling your body in some sort of dance of dominance. Her brute strength makes any resistance trivial. You're forced to try your best to look pleased with her mistreatment so that you don't sour the carefree carnal mood of the others in the room.\n\n"+
                  "Still, you can't help but wince when her fingers dig into the flesh of your ass or when her teeth drag against the tender skin of your neck. You're starting to get the impression that what she truly wants is to actually eat you.\n\n"+
                  "A surprised cry escapes you when she crushes you against her and nips hard at your earlobe. Apparently this is the reaction she has been after, as she continues to search out ways to force you to wriggle, whimper, and whine."+
                "<<else>>"+
                  "An older woman with a mature motherly beauty takes your head and leads you to the center of the room. She smiles pleasantly as she turns to face you and then rather unpleasantly shoves you to your knees. She lifts her ruffled skirt to reveal her bushy muff and swings one leg over your shoulder to bring your face to her crotch. The lusty aroma of her already glistening pussy tickles your nostril hairs. With a thrust of her hips, she shoves her drooling wet cunt onto your face."+
                "<</if>>",
            "RESULTS" : [
                {"A":  33, "TEXT":
                  "<<if _irr eq 1>>"+
                    "Your obscene display of humiliated exasperation @@doesn't have much effect@@ on the men in the room. A couple of them evince an interest in the elfin blonde, who you have to honestly admit is working her petite little ass off to garner attention, but you seem to have come off more as a contrast than a comparison. Your partner throws you a disappointed pout, unhappy with your poor performance."+
                  "<<elseif _irr eq 2>>"+
                    "Your agitated annoyance at being so roughly molested @@doesn't have much effect@@ on the men in the room. A couple of them evince an interest in the tall and burly dominant woman but it seems that you came off as nothing more than a cheerless trifle for her to toy with. Your partner curls her lip at you and shakes her head in disgust at your poor performance."+
                  "<<else>>"+
                    "You do your best to lick at the woman's sloppy wet pussy but your mouth is far more experienced with cocks than cunts and your amateur attempt as pleasuring her @@doesn't have much effect@@ on the men in the room. When your ineptitude at cunnilingus becomes clear to her, the matronly woman proceeds to crassly grind her hips against your face while berating you for your incompetence."+
                  "<</if>>"
                },
                {"A":  66, "TEXT":
                  "<<if _irr eq 1>>"+
                    "The two of you squishing and pinching and nearly mangling one another has @@attracted some interest@@ from several of the men. They're certainly paying attention to both of you now. Your partner is obviously satisfied with your efforts, too. She giggles and smooches you a sweet thanks on the lips for your adequate performance."+
                  "<<elseif _irr eq 2>>"+
                    "After a few minutes of fearful bewilderment, you manage to get into the spirit of the act and start to mount a playful resistance against your lustful assailant. You manage to convincingly squirm and fuss against her persistant molestation and the two of you have soon @@attracted some interest@@ from several of the men. Your partner is obviously satisfied with your efforts and she gives you a stinging smack on the ass as thanks."+
                  "<<else>>"+
                    "Although your mouth is far more experienced with cocks than cunts, you manage to stuff your face into her crotch and lash your tongue at her tart-tasting purple folds with decently convincing enthusiasm. The woman pants and moans and unlooses some rather vulgar compliments your way. The exhibition has soon @@attracted some interest@@ from several of the men. Your partner is satisfied enough with your efforts to allow you to stand back up."+
                  "<</if>>"
                },
                {"A": 500, "TEXT":
                  "<<if _irr eq 1>>"+
                    "The majority of the men in the room @@take a keen interest@@ in the half-dance half-wrestling match in which the two of you are engaged. Your partner's spirited endeavor to torment you into a hysteric frenzy and your efforts to abuse her bantam body in a scurrilous sort of rapey revenge has paid off in spades. There's not a soft cock in the house and most of them are pointing in your direction. Your partner giggles and throws her arms around your neck to mash her balmy lips to your own in lustful gratitude for your impressive performance."+
                  "<<elseif _irr eq 2>>"+
                    "You realize that you're meant to play the victim. Confident that you're powerless against this husky woman, you slap at her and hammer your dainty fists on her hulking shoulders. The men in the room @@take a keen interest@@ as you throw a tantrum like a proper spoiled sissy while she persists in molesting you. There's not a soft cock in the house and most of them are pointing in your direction. Your partner grins in delight and lifts you from your feet to twirl you around."+
                  "<<else>>"+
                    "Cocks or cunts, it's really all the same to you nowadays. You bury your face in her sodden purple folds and work your tongue and lips with dutiful zeal. She gasps and shivers as you enthusiastically eat her out, and the men in the room @@take a keen interest@@ in the exhibition. There's not a soft cock in the house and most of them are pointing in your direction. Your partner moans in delight and eventually allows you to stand back up."+
                  "<</if>>"
                } ],
            "END" :
                ""
        },
        {
            // Start performing hand jobs
            "ID" : "SCENE02",
            "TRIGGERS" :[ ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [
                { "TAG" : "B", "TYPE" : "SKILL", "NAME" : "TitFucking", "DIFFICULTY" : 75, "REWARD" : "NONE", "R_NAME" : "NONE", "VALUE" : 100, "OPT" : 0 } ],
            "POST" : [
                { "TYPE" : "MONEY", "NAME" : "", "VALUE" : 100, "OPT" : "TAG_B" }
            ],
            "START" :
                "Foreplay now concluded, the girls hustle into their various positions like well-trained soldiers on a battlefront of debauchery. One particularly petite young lady -- with the notable exception of her proposterously ponderous posterior -- has her obese ass anally violated almost before she can even folded herself over a chair. Fleshy slaps of horny hips on blubber-butt fill the room. A line forms behind her, leaving no doubt that she was certain to be on booty duty all evening.\n\n"+
                "Your previous dance partner, the <<if _irr eq 1>>flaxen-haired nymph with the impish hands<<elseif _irr eq 2>>the burly amazonian woman<<else>>the motherly whore with the sopping cunny<</if>>, helpfully ushers you to a vacant corner of the room where you can ply your trade. She tosses a cushion from the couch onto the floor for you to kneel upon and then she hurries off to cram her cheeks with cock like a proper slut.\n\n"+
                "You sink to your knees in the corner and wait for 'customers' with your tits at the ready.",
            "END" :
                "",
            "RESULTS" : [
                {"B":  33, "TEXT": "You spend most of the time just fondling customers with your pBUST tits while they get ready for one of the other girls. It @@seems they just aren't that interested@@ in you."},
                {"B":  66, "TEXT": "You start off slowly, but soon the men are starting to notice how @@good your tit jobs@@ are and before you notice it, you're pulling a significant "+
                "number of men your way."},
                {"B": 500, "TEXT": "The remainders of the evening passes in a blur of cocks and semen. Your skills are @@so good that you find yourself in high demand@@ and you start to worry "+
                "if your arms are going to hold out or not from all the dick pumping."} ]
        },
        {
            // Perversion check for cum play.
            "ID" : "SCENE03",
            "TRIGGERS" :[ ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [
                { "TAG" : "C", "TYPE" : "STAT", "NAME" : "Perversion", "DIFFICULTY" : 50, "REWARD" : "MONEY", "R_NAME" : "MONEY", "VALUE" : 50, "OPT" : 0 } ],
            "POST" : [
                { "TYPE" : "STAT_XP", "NAME" : "Perversion", "VALUE" : 100, "OPT" : "TAG_C" }
            ],
            "START" :
            "Finally, the last two clients are in front of you, their cocks out and flopping free. You slowly stroke them both to hardness, using your tongue and saliva to "+
            "lubricate their shafts. Eventually both men are sporting huge erections and the pace of your ministrations starts to increase as does their moans. "+
            "You furiously pump their turgid cocks with your tits until they begin shooting long ropey streams of cum into your face and chest. There's so much cum, "+
            "sticking to your face, your eye lids, your lips and of course your pBUST tits. "
            ,
            "RESULTS" : [
                {"C":  33, "TEXT": "It's difficult to deal with and you @@struggle to remain smiling@@ while the customers blow their loads."},
                {"C":  66, "TEXT": "You try to really put on a show for the men, smiling and making @@half hearted attempts@@ to lick their jizz from your breasts. You couldn't really tell if "+
                "they noticed your performance or not."},
                {"C": 500, "TEXT": "You lock eyes on the men and open your mouth wide, letting their cum fall directly onto your tongue. Letting out a throaty moan you start to lap it up from "+
                "your lips and swallow it down. You bring one of your breasts to your mouth and lick up an errant pool of jizz, smiling all the while. "+
                "The super lewd act spurs them on and soon they're rock hard and you're pumping them again. They better pay you extra for this."} ],
            "END" :
            "\n\nEventually everyone is spent and you find yourself covered, literally dripping with jism. You wipe some out of your eyes and then "+
            "politely excuse yourself to clean up your face and clothes. Eventually you go to find NPC_NAME to collect your pay. She's at the front of the bar and nods when she sees you."
        },
        {   // If pass check 'A' and If counter is at MAX (5), reward player and set counter to 0.
            "ID" : "SCENE04a",
            "TRIGGERS" :[
                { "TYPE" : "TAG", "NAME" : "A", "VALUE" : 100, "CONDITION" : "gte" },
                { "TYPE" : "TAG", "NAME" : "B", "VALUE" : 100, "CONDITION" : "gte" },
                { "TYPE" : "TAG", "NAME" : "C", "VALUE" : 100, "CONDITION" : "gte" },
                { "TYPE" : "COUNTER", "NAME" : "SIMONE_LOOT", "VALUE" : 5, "CONDITION" : "gte" }
            ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [ ],
            "POST" : [
                { "TYPE" : "NPC_STAT",  "NAME" : "Mood", "VALUE" : 5 },
                { "TYPE" : "FLAG",      "NAME" : "SIMONE_LOOT",              "VALUE" :   0,  "OPT" : "SET" },
                { "TYPE" : "FLAG",      "NAME" : "SIMONE_REWARD",            "VALUE" :   1,  "OPT" : "SET" },
                { "TYPE" : "LOOT_BOX",  "NAME" : "uncommon sissy loot box", "VALUE" :    1,  "OPT" : "" }
            ],
            "START" :   "NPC_NAME says, \"Here, you've earned this PLAYER_NAME\". She hands you a novelty gift bag shaped like a teddy bear, you wonder what's inside it?",
            "END" : "",
            "RESULTS" : [ ]
        },
        {   // If passed both cooking checks then increment counter. Doesn't trigger if the counter is already at MAX (5) or the reward has been given this time.
            "ID" : "SCENE04b",
            "TRIGGERS" :[
                { "TYPE" : "TAG", "NAME" : "A", "VALUE" : 100, "CONDITION" : "gte" },
                { "TYPE" : "TAG", "NAME" : "B", "VALUE" : 100, "CONDITION" : "gte" },
                { "TYPE" : "TAG", "NAME" : "C", "VALUE" : 100, "CONDITION" : "gte" },
                { "TYPE" : "COUNTER", "NAME" : "SIMONE_LOOT", "VALUE" : 4, "CONDITION" : "lte" },
                { "TYPE" : "FLAG", "NAME" : "SIMONE_REWARD",  "OPT" : "NOT_SET" }
            ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [ ],
            "POST" : [
                { "TYPE" : "NPC_STAT",  "NAME" : "Mood", "VALUE" : 5 },
                { "TYPE" : "COUNTER",   "NAME" : "SIMONE_LOOT",    "VALUE" :   1,  "OPT" : 1 },
                { "TYPE" : "QUEST_FLAG", "NAME" : "SIMONE_JOB_3",   "VALUE" : "COMPLETED", "OPT" : "SET" }
            ],
            "START" :   "NPC_NAME says, \"Nice work today. Those rascals were quite happy with your service. Keep it up and I might slip you a little bit something extra...\"",
            "END" : "",
            "RESULTS" : [ ]
        },
        {  // Check to see if we passed all the events and if the store is not unlocked, then unlock it.
            "ID" : "SLOT_REWARD",
            "TRIGGERS" :[
                { "TYPE" : "TAG",  "NAME" : "A", "VALUE" : 100, "CONDITION" : "gte" },
                { "TYPE" : "TAG",  "NAME" : "B", "VALUE" : 100, "CONDITION" : "gte" },
                { "TYPE" : "TAG",  "NAME" : "C", "VALUE" : 100, "CONDITION" : "gte" },
                { "TYPE" : "FLAG", "NAME" : "SIMONE_TIT_UNLOCK",  "OPT" : "NOT_SET" }
            ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [ ],
            "POST" : [
                { "TYPE" : "FLAG",  "NAME" : "SIMONE_TIT_UNLOCK", "VALUE" : 1, "OPT" : "SET" },
                { "TYPE" : "STORE", "NAME" : "LUSTY_LASS", "VALUE" :  "COMMON_BOOBJITSU_MATRIARCH",   "OPT" : "UNLOCK"    }
            ],
            "START" :   "\"Oh, and before I forget... check out my shop sometime. There might be something that'd interest a woman with your kind of 'assets'!\"",
            "END" : "",
            "RESULTS" : [ ]
        },
        {   // Just unset the flag that shows we received loot and make sure we clear the counter.
            "ID" : "SCENE04c",
            "TRIGGERS" :[
                { "TYPE" : "FLAG", "NAME" : "SIMONE_REWARD", "OPT" : "SET" }
            ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [ ],
            "POST" : [
                { "TYPE" : "FLAG",   "NAME" : "SIMONE_REWARD",  "OPT" : "DELETE" }
            ],
            "START" : "",
            "END" : "",
            "RESULTS" : [ ]
        }

    ],
    "END" :
        "NPC_NAME says, \"Another day, another coin, eh PLAYER_NAME?\"\n\n"+
        "NPC_NAME fetches a small bag from behind the counter and counts your pay and tips for the night into your awaiting hands.",
    "JOB_RESULTS" : [ ]
};
App.Data.JobData["SIMONE_JOB4"] = {
    "ID": "SIMONE_JOB4", "TITLE": "Whoring - Anal Specialist", "GIVER": "Simone", "PAY" : 50,
    "RATING" : 3, // of 5
    "PHASES" : [ 2, 3 ],
    "DAYS"   : 1,
    "HIDDEN" : false,
    "COST" : [
        { "TYPE" : "TIME", "VALUE" : 1 },
        { "TYPE" : "STAT", "NAME" : "Energy", "VALUE" : 1 } ],
    "REQUIREMENTS" : [
        { "TYPE" : "SKILL", "NAME" : "AssFucking", "VALUE" : 50, "CONDITION" : "gte" }
    ],
    "INTRO" : "NPC_NAME says, \"I have a special group of clients that might be interested in you... if you have the skills.\"",
    "START" :
    "NPC_NAME says, \"So here's the deal PLAYER_NAME, none of my regular girls will take the job, but I have a group of clients paying good coin "+
    "to have a bit of a party in the back room. You won't be the only entertainment for the evening, but it's been requested to supply a slut who can "+
    "furious anal pounding and look happy about it. Swallow a little jizz here and there. You know, the usual.\"\n\n"+
    "Yes, you think to yourself, 'the usual'.\n\n"+
    "NPC_NAME gives you the run down on the rest of the job and ushers you into the back room."
    ,
    "SCENES" : [
        {
            // Enter into room. Flirt with men.
            "ID" : "SCENE01",
            "TRIGGERS" :[ ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [
                { "TAG" : "A", "TYPE" : "SKILL", "NAME" : "Seduction", "DIFFICULTY" : 50, "REWARD" : "NONE", "R_NAME" : "NONE", "VALUE" : 100, "OPT" : 0 }
            ],
            "POST" : [
                { "TYPE" : "MONEY", "NAME" : "", "VALUE" : 20, "OPT" : "TAG_A" }
            ],
            // Three pseudo-random introductions to the room for variety
            "START" :
                "The cramped room is lit only by a few flickering lanterns. It reeks of cigar smoke and semen. Men are crowded on the couches lined along the walls, swilling drinks and huffing fat rolls of tobacco. Most of them are manhandling various girls sat upon their laps. Tits and dicks and even two bald cooches -- both presently being finger-fucked -- are on full display.\n\n"+
                "<<set _irr to random(1,3)>>"+
                "<<if _irr eq 1>>"+
                  "A wee young blonde with smouldering eyes and a felicitous 'pixie' haircut takes your hand and leads you to the center of the room. She runs her slender fingers down your chest, smiling an adorable gap-toothed simper, and jiggles her slim behind as best she can. You catch on that you are meant to dance with her -- but the 'dance' quickly devolves into the two of you lewdly groping one another purely for the enjoyment of the men around you.\n\n"+
                  "A smirk plays on your dance partner's slender but wickedly twisty lips when her dainty hand <<if setup.player.IsAnyClothingWorn(['chastity cage', 'luxurious chastity cage'], 'Penis')>>discovers your caged clitty. Her finger traces around the contraption and she playfully feigns futile efforts to remove it <<else>>happens upon your hardening penis. She pinches her fingers on your budding chubby, gently kneading the blood from it and cramping it snugly in her hand to purposefully prevent you from achieving an erection <</if>>while brushing her steamy mouth on the flesh of your neck. As frustrating as it feels, you find yourself lightheaded with giddiness. Much to her delight, you redouble your unmannerly molestation of her lithe, wriggling body."+
                "<<elseif _irr eq 2>>"+
                  "An amazonian woman with dark hair and darker eyes engulfs your hand in her own and yanks you into the center of the room with her. She immediately begins manhandling your body in some sort of dance of dominance. Her brute strength makes any resistance trivial. You're forced to try your best to look pleased with her mistreatment so that you don't sour the carefree carnal mood of the others in the room.\n\n"+
                  "Still, you can't help but wince when her fingers dig into the flesh of your ass or when her teeth drag against the tender skin of your neck. You're starting to get the impression that what she truly wants is to actually eat you.\n\n"+
                  "A surprised cry escapes you when she crushes you against her and nips hard at your earlobe. Apparently this is the reaction she has been after, as she continues to search out ways to force you to wriggle, whimper, and whine."+
                "<<else>>"+
                  "An older woman with a mature motherly beauty takes your head and leads you to the center of the room. She smiles pleasantly as she turns to face you and then rather unpleasantly shoves you to your knees. She lifts her ruffled skirt to reveal her bushy muff and swings one leg over your shoulder to bring your face to her crotch. The lusty aroma of her already glistening pussy tickles your nostril hairs. With a thrust of her hips, she shoves her drooling wet cunt onto your face."+
                "<</if>>",
            "RESULTS" : [
                {"A":  33, "TEXT":
                  "<<if _irr eq 1>>"+
                    "Your obscene display of humiliated exasperation @@doesn't have much effect@@ on the men in the room. A couple of them evince an interest in the elfin blonde, who you have to honestly admit is working her petite little ass off to garner attention, but you seem to have come off more as a contrast than a comparison. Your partner throws you a disappointed pout, unhappy with your poor performance."+
                  "<<elseif _irr eq 2>>"+
                    "Your agitated annoyance at being so roughly molested @@doesn't have much effect@@ on the men in the room. A couple of them evince an interest in the tall and burly dominant woman but it seems that you came off as nothing more than a cheerless trifle for her to toy with. Your partner curls her lip at you and shakes her head in disgust at your poor performance."+
                  "<<else>>"+
                    "You do your best to lick at the woman's sloppy wet pussy but your mouth is far more experienced with cocks than cunts and your amateur attempt as pleasuring her @@doesn't have much effect@@ on the men in the room. When your ineptitude at cunnilingus becomes clear to her, the matronly woman proceeds to crassly grind her hips against your face while berating you for your incompetence."+
                  "<</if>>"
                },
                {"A":  66, "TEXT":
                  "<<if _irr eq 1>>"+
                    "The two of you squishing and pinching and nearly mangling one another has @@attracted some interest@@ from several of the men. They're certainly paying attention to both of you now. Your partner is obviously satisfied with your efforts, too. She giggles and smooches you a sweet thanks on the lips for your adequate performance."+
                  "<<elseif _irr eq 2>>"+
                    "After a few minutes of fearful bewilderment, you manage to get into the spirit of the act and start to mount a playful resistance against your lustful assailant. You manage to convincingly squirm and fuss against her persistant molestation and the two of you have soon @@attracted some interest@@ from several of the men. Your partner is obviously satisfied with your efforts and she gives you a stinging smack on the ass as thanks."+
                  "<<else>>"+
                    "Although your mouth is far more experienced with cocks than cunts, you manage to stuff your face into her crotch and lash your tongue at her tart-tasting purple folds with decently convincing enthusiasm. The woman pants and moans and unlooses some rather vulgar compliments your way. The exhibition has soon @@attracted some interest@@ from several of the men. Your partner is satisfied enough with your efforts to allow you to stand back up."+
                  "<</if>>"
                },
                {"A": 500, "TEXT":
                  "<<if _irr eq 1>>"+
                    "The majority of the men in the room @@take a keen interest@@ in the half-dance half-wrestling match in which the two of you are engaged. Your partner's spirited endeavor to torment you into a hysteric frenzy and your efforts to abuse her bantam body in a scurrilous sort of rapey revenge has paid off in spades. There's not a soft cock in the house and most of them are pointing in your direction. Your partner giggles and throws her arms around your neck to mash her balmy lips to your own in lustful gratitude for your impressive performance."+
                  "<<elseif _irr eq 2>>"+
                    "You realize that you're meant to play the victim. Confident that you're powerless against this husky woman, you slap at her and hammer your dainty fists on her hulking shoulders. The men in the room @@take a keen interest@@ as you throw a tantrum like a proper spoiled sissy while she persists in molesting you. There's not a soft cock in the house and most of them are pointing in your direction. Your partner grins in delight and lifts you from your feet to twirl you around."+
                  "<<else>>"+
                    "Cocks or cunts, it's really all the same to you nowadays. You bury your face in her sodden purple folds and work your tongue and lips with dutiful zeal. She gasps and shivers as you enthusiastically eat her out, and the men in the room @@take a keen interest@@ in the exhibition. There's not a soft cock in the house and most of them are pointing in your direction. Your partner moans in delight and eventually allows you to stand back up."+
                  "<</if>>"
                } ],
            "END" :
                ""
        },
        {
            // Start performing hand jobs
            "ID" : "SCENE02",
            "TRIGGERS" :[ ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [
                { "TAG" : "B", "TYPE" : "SKILL", "NAME" : "AssFucking", "DIFFICULTY" : 75, "REWARD" : "NONE", "R_NAME" : "NONE", "VALUE" : 100, "OPT" : 0 } ],
            "POST" : [
                { "TYPE" : "MONEY", "NAME" : "", "VALUE" : 100, "OPT" : "TAG_B" }
            ],
            "START" :
                "Foreplay now concluded, the girls hustle into their various positions like well-trained soldiers on a battlefront of debauchery. One particularly petite young lady -- with the notable exception of her proposterously ponderous posterior -- has her obese ass anally violated almost before she can even folded herself over a chair. Fleshy slaps of horny hips on blubber-butt fill the room. A line forms behind her, leaving no doubt that she was certain to be on booty duty all evening.\n\n"+
                "Your previous dance partner, the <<if _irr eq 1>>flaxen-haired nymph with the impish hands<<elseif _irr eq 2>>the burly amazonian woman<<else>>the motherly whore with the sopping cunny<</if>>, helpfully ushers you to a vacant corner of the room where you can ply your trade. She pushes a chair into the corner for you to stabilize yourself on and then she hurries off to cram her cheeks with cock like a proper slut.\n\n"+
                "You bend over the chair and wait for 'customers' with your asshole at the ready.",
            "END" :
                "",
            "RESULTS" : [
                {"B":  33, "TEXT": "You spend most of the time trying to not cry and scream as you are relentlessly anally violated. This does turn some men on, but it @@seems they most aren't that interested@@ in you."},
                {"B":  66, "TEXT": "It's not easy, but since you've had enough practice you're able to mostly fake (you are faking, right?) enjoying the act of being ass raped. @@You're not the most popular girl here, but not the worst either.@@"},
                {"B": 500, "TEXT": "Fortunately for you, tonight your asshole seems up to the task of the seemingly @@endless array of dicks you satisfy@@ with it. You grind and wiggle on every cock, moaning and gasping with pleasure as you've learned to do so well."} ]
        },
        {
            // Perversion check for cum play.
            "ID" : "SCENE03",
            "TRIGGERS" :[ ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [
                { "TAG" : "C", "TYPE" : "STAT", "NAME" : "Perversion", "DIFFICULTY" : 50, "REWARD" : "MONEY", "R_NAME" : "MONEY", "VALUE" : 50, "OPT" : 0 } ],
            "POST" : [
                { "TYPE" : "STAT_XP", "NAME" : "Perversion", "VALUE" : 100, "OPT" : "TAG_C" }
            ],
            "START" :
            "Finally, the last client is in front of you, his massive tool flopping down to his knees. You slowly stroke him to hardness, using your tongue and saliva to "+
            "lubricate his shafts. Eventually he sports huge erections and flips you over, the head of his massive tool poking against your asshole. Thankfully the combination of all of the spit you "+
            " placed on his rod and the use your ass has seen tonight, makes it easy for him to enter your rectum. You start pushing back against his dick while he pounds you, reaching down " +
            "to fondle yourself, trying to get your own climax."
            ,
            "RESULTS" : [
                {"C":  33, "TEXT": "It's @@difficult to deal with the pounding you're getting@@ and still get off yourself, the customer finishes off inside you, but you're left unsatisfied."},
                {"C":  66, "TEXT": "You try to really put on a show for the man, gasping and moaning as you stroke your balls and pPENIS sissy clit. Eventually he comes hard in your ass and gives you a smile. @@Your enthusiasm was appreciated.@@" },
                {"C": 500, "TEXT": "You furiously rub your pPENIS sissy clit while being brutally sodomized by the man. Every time he thrusts into you, it sends a shiver up your spine and causes you" +
                "to moan like a bitch in heat. Eventually the man bottoms out in your ass, the violent force of his ejaculation sending you into your own perversion filed orgasm. He notices the mess and smile at you, it appears @@he liked how much you enjoyed the act.@@"} ],
            "END" :
            "\n\nEventually everyone is spent and you find yourself covered, literally dripping with jism. You wipe some out of your eyes and then "+
            "politely excuse yourself to clean up your face and clothes. Eventually you go to find NPC_NAME to collect your pay. She's at the front of the bar and nods when she sees you."
        },
        {   // If pass check 'A' and If counter is at MAX (5), reward player and set counter to 0.
            "ID" : "SCENE04a",
            "TRIGGERS" :[
                { "TYPE" : "TAG", "NAME" : "A", "VALUE" : 100, "CONDITION" : "gte" },
                { "TYPE" : "TAG", "NAME" : "B", "VALUE" : 100, "CONDITION" : "gte" },
                { "TYPE" : "TAG", "NAME" : "C", "VALUE" : 100, "CONDITION" : "gte" },
                { "TYPE" : "COUNTER", "NAME" : "SIMONE_LOOT", "VALUE" : 5, "CONDITION" : "gte" }
            ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [ ],
            "POST" : [
                { "TYPE" : "NPC_STAT",  "NAME" : "Mood", "VALUE" : 5 },
                { "TYPE" : "FLAG",      "NAME" : "SIMONE_LOOT",              "VALUE" :   0,  "OPT" : "SET" },
                { "TYPE" : "FLAG",      "NAME" : "SIMONE_REWARD",            "VALUE" :   1,  "OPT" : "SET" },
                { "TYPE" : "LOOT_BOX",  "NAME" : "uncommon pirate loot box", "VALUE" :   1,  "OPT" : "" }
            ],
            "START" :   "NPC_NAME says, \"Here, you've earned this PLAYER_NAME\". She hands you a novelty gift bag shaped like a teddy bear, you wonder what's inside it?",
            "END" : "",
            "RESULTS" : [ ]
        },
        {   // If passed both all checks then increment counter. Doesn't trigger if the counter is already at MAX (5) or the reward has been given this time.
            "ID" : "SCENE04b",
            "TRIGGERS" :[
                { "TYPE" : "TAG", "NAME" : "A", "VALUE" : 100, "CONDITION" : "gte" },
                { "TYPE" : "TAG", "NAME" : "B", "VALUE" : 100, "CONDITION" : "gte" },
                { "TYPE" : "TAG", "NAME" : "C", "VALUE" : 100, "CONDITION" : "gte" },
                { "TYPE" : "COUNTER", "NAME" : "SIMONE_LOOT", "VALUE" : 4, "CONDITION" : "lte" },
                { "TYPE" : "FLAG", "NAME" : "SIMONE_REWARD",  "OPT" : "NOT_SET" }
            ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [ ],
            "POST" : [
                { "TYPE" : "NPC_STAT",  "NAME" : "Mood", "VALUE" : 5 },
                { "TYPE" : "COUNTER",   "NAME" : "SIMONE_LOOT",    "VALUE" :   1,  "OPT" : 1 },
                { "TYPE" : "QUEST_FLAG", "NAME" : "SIMONE_JOB_4",   "VALUE" : "COMPLETED", "OPT" : "SET" }
            ],
            "START" :   "NPC_NAME says, \"Nice work today. Those rascals were quite happy with your service. Keep it up and I might slip you a little bit something extra...\"",
            "END" : "",
            "RESULTS" : [ ]
        },
        {  // Check to see if we passed all the events and if the store is not unlocked, then unlock it.
            "ID" : "SLOT_REWARD",
            "TRIGGERS" :[
                { "TYPE" : "TAG",  "NAME" : "A", "VALUE" : 100, "CONDITION" : "gte" },
                { "TYPE" : "TAG",  "NAME" : "B", "VALUE" : 100, "CONDITION" : "gte" },
                { "TYPE" : "TAG",  "NAME" : "C", "VALUE" : 100, "CONDITION" : "gte" },
                { "TYPE" : "FLAG", "NAME" : "SIMONE_ASS_UNLOCK",  "OPT" : "NOT_SET" }
            ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [ ],
            "POST" : [
                { "TYPE" : "FLAG",  "NAME" : "SIMONE_ASS_UNLOCK", "VALUE" : 1, "OPT" : "SET" },
                { "TYPE" : "STORE", "NAME" : "LUSTY_LASS", "VALUE" :  "COMMON_ANAL_ANGEL",   "OPT" : "UNLOCK"    }
            ],
            "START" :   "\"Oh, and before I forget... check out my shop sometime. There might be something that'd interest a whore with such a loose arse!!\"",
            "END" : "",
            "RESULTS" : [ ]
        },
        {   // Just unset the flag that shows we received loot and make sure we clear the counter.
            "ID" : "SCENE04c",
            "TRIGGERS" :[
                { "TYPE" : "FLAG", "NAME" : "SIMONE_REWARD", "OPT" : "SET" }
            ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [ ],
            "POST" : [
                { "TYPE" : "FLAG",   "NAME" : "SIMONE_REWARD",  "OPT" : "DELETE" }
            ],
            "START" : "",
            "END" : "",
            "RESULTS" : [ ]
        }

    ],
    "END" :
        "NPC_NAME says, \"Another day, another coin, eh PLAYER_NAME?\"\n\n"+
        "NPC_NAME fetches a small bag from behind the counter and counts your pay and tips for the night into your awaiting hands.",
    "JOB_RESULTS" : [ ]
};
