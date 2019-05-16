App.Data.JobData["COOK01"] = {
    "ID": "COOK01", "TITLE": "Helping out in the Galley", "GIVER": "Cook", "PAY" : 10,
    "RATING" : 2, // of 5
    "PHASES" : [ 0, 1, 2, 3 ],
    "DAYS"   : 1,
    "HIDDEN" : false,
    "COST" : [  { "TYPE" : "TIME", "VALUE" : 1 },
        { "TYPE" : "STAT", "NAME" : "Energy", "VALUE" : 1 } ],
    "REQUIREMENTS" : [
        { "TYPE" : "SKILL", "NAME" : "Cooking", "VALUE" : 20, "CONDITION" : "gte" } ],
    "INTRO" :   "NPC_NAME says, s(PLAYER_NAME, you've become a decently good hand in the galley recently, so if you'd \
    like to earn some extra coin, how 'bout giving me an the boys a 'hand'... or an arse even! \
    Ye have no idea how boring it is to slop up gruel all day long - having a pBLOWJOBS like you \
    around'd be a nice change o' pace...)",
    "START" : "",
    "SCENES" : [
        {
            "ID" : "SCENE01",
            "TRIGGERS" :[ ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [
                { "TAG": "A", "TYPE" : "SKILL", "NAME" : "Cooking", "DIFFICULTY" : 30, "REWARD" : "MONEY", "R_NAME" : "MONEY","VALUE" : 10, "OPT" : 0 }],
            "POST" : [
                { "TYPE" : "NPC_STAT", "NAME" : "Mood", "VALUE" : 5, "OPT" : 0 } ],
            "START" :   "The galley is small and cramped and it doesn't help matters that NPC_NAME himself is enormous. \
            You do your best to mostly try to stay out of the way, but every now and then his hands \
            seem to find you with a not so subtle shove or a grope of your nBUST or nASS.",
            "END" : "",
            "RESULTS" : [
                {"A":  25, "TEXT": "The @@distraction is too much for you@@ and you end up burning some food. That'll come out of your pay, or your ass, later."},
                {"A":  50, "TEXT": "Despite being distracted by the constant groping you @@manage to keep your food from burning@@."},
                {"A": 500, "TEXT": "You @@expertly manage to keep your eyes on the dishes@@ you are preparing even as your tits and ass are being "+
                "mauled by NPC_NAME and his staff. It seems you're quite used to being sexually harassed."} ]
        },
        {
            "ID" : "SCENE02",
            "TRIGGERS" :[
                { "TYPE" : "NPC_STAT", "NAME" : "Lust", "VALUE" : 80, "CONDITION" : "gte" }
            ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [
                { "TAG" : "B", "TYPE" : "SKILL", "NAME" : "Cooking", "DIFFICULTY" : 30, "REWARD" : "MONEY", "R_NAME" : "MONEY", "VALUE" : 10, "OPT" : 0 },
                { "TAG" : "C", "TYPE" : "SKILL", "NAME" : "AssFucking", "DIFFICULTY" : 30, "REWARD" : "MONEY","R_NAME" : "MONEY","VALUE" : 10, "OPT" : 0 }],
            "POST" : [
                { "TYPE" : "NPC_STAT", "NAME" : "Lust", "VALUE" : -20, "OPT" : 0 },
                { "TYPE" : "NPC_STAT", "NAME" : "Mood", "VALUE" : 5, "OPT" : 0 }
            ],
            "START" :   "You're chopping some vegetables for NPC_NAME's famous 'mystery stew' when you feel a pair of large arms \
            wrap around you. It's NPC_NAME and he whispers in your ear, s(Just relax and keep chopping those veggies, slut.) \
            You take a deep breath and continue chopping while his burly hands start removing your lower clothes. Within minutes \
            you feel something wet and slick being rubbed all over your asshole and shortly after that the sensation of NPC_NAME's \
            cock being pushed up against your sphincter.",
            END : "NPC_NAME cleans off his cock on a nearby rag and wanders off, leaving you humiliated and with a slippery ass dripping cum.",
            "RESULTS" : [
                {"B":  25, "TEXT":  "You try to steady yourself, but the feeling of the rough penetration is too much for your inexperienced ass and @@you "+
                "make a huge mess of the vegetables@@ as NPC_NAME pillages your butt hole."},
                {"B":  50, "TEXT":  "It's difficult, but you @@somehow manage to not make too much of a mess@@ as NPC_NAME rams his tool up your slick asshole."},
                {"B": 500, "TEXT":  "You steel yourself for a moment and force your asshole to gape open so as to accommodate NPC_NAME's tool. Doing so allows "+
                "him to easily achieve maximum penetration into your sissy ass and @@keeps you from ruining the food in front of you@@."},
                {"C":  25, "TEXT":  "He pumps away at your pASS butt for what seems like ages, you try to encourage him, just to get the ordeal over, but it "+
                "@@doesn't seem to have much effect@@. Eventually he does manage to climax, and dumps a hot load of cum up your whore ass."},
                {"C":  50, "TEXT":  "He ravages your whore ass, pushing his meaty cock so deep into you that you @@gasp in a mixture of pain and arousal@@. This goes on "+
                "for a long time until you feel his cock twitch and start squirting hot jizz up your pASS butt."},
                {"C": 500, "TEXT":  "He plows your whore ass with extreme vigour and you do your best to respond and encourage him, @@grinding your own ass against "+
                "his cock and bucking your hips in time with him@@. It doesn't take long for NPC_NAME to loudly groan and climax, his meaty cock shooting an "+
                "enormous amount of cum up your backside. As he pulls out, NPC_NAME gives you a swat on the ass and says, \"Good job, whore.\""}]
        },
        {
            "ID" : "SCENE03",
            "TRIGGERS" :[
                { "TYPE" : "RANDOM-100", "VALUE" : 33, "CONDITION" : "lte" } ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [ ],
            "POST" : [
                { "TYPE" : "FOOD", "NAME" : "bread crust", "VALUE" : 3, "OPT" : "RANDOM" }
            ],
            "START" :   "The work in the galley is winding down and there are less people about, you take the opportunity to pocket a few crusts of bread.",
            "END" : "",
            "RESULTS" : [ ]
        },
        {   // If pass both cooking checks and If counter is at MAX (5), reward player and set counter to 0.
            "ID" : "SCENE04a",
            "TRIGGERS" :[
                { "TYPE" : "TAG", "NAME" : "A", "VALUE" : 100, "CONDITION" : "gte" },
                { "TYPE" : "TAG", "NAME" : "B", "VALUE" : 100, "CONDITION" : "gte" },
                { "TYPE" : "COUNTER", "NAME" : "COOKIE_LOOT", "VALUE" : 5, "CONDITION" : "gte" }
            ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [ ],
            "POST" : [
                { "TYPE" : "FLAG",      "NAME" : "COOKIE_LOOT",             "VALUE" :   0,  "OPT" : "SET" },
                { "TYPE" : "FLAG",      "NAME" : "COOKIE_REWARD",           "VALUE" :   1,  "OPT" : "SET" },
                { "TYPE" : "LOOT_BOX",  "NAME" : "common food loot box",    "VALUE" : 1,    "OPT" : "" }
            ],
            "START" :   "NPC_NAME says, s(Here, you've earned this PLAYER_NAME.) He hands you a small wooden crate, you wonder what's inside it?",
            "END" : "",
            "RESULTS" : [ ]
        },
        {   // If passed both cooking checks then increment counter. Doesn't trigger if the counter is already at MAX (5) or the reward has been given this time.
            "ID" : "SCENE04b",
            "TRIGGERS" :[
                { "TYPE" : "TAG", "NAME" : "A", "VALUE" : 100, "CONDITION" : "gte" },
                { "TYPE" : "TAG", "NAME" : "B", "VALUE" : 100, "CONDITION" : "gte" },
                { "TYPE" : "COUNTER", "NAME" : "COOKIE_LOOT", "VALUE" : 4, "CONDITION" : "lte" },
                { "TYPE" : "FLAG", "NAME" : "COOKIE_REWARD",  "OPT" : "NOT_SET" }
            ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [ ],
            "POST" : [
                { "TYPE" : "COUNTER",   "NAME" : "COOKIE_LOOT",    "VALUE" :   1,  "OPT" : 1 }
            ],
            "START" :   "NPC_NAME says, s(Nice work today. It's a pleasure to have you around the galley... in more ways than one. Keep it up and I might slip you a little bit something extra...)",
            "END" : "",
            "RESULTS" : [ ]
        },
        {   // Just unset the flag that shows we received loot and make sure we clear the counter.
            "ID" : "SCENE04c",
            "TRIGGERS" :[
                { "TYPE" : "FLAG", "NAME" : "COOKIE_REWARD", "OPT" : "SET" }
            ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [ ],
            "POST" : [
                { "TYPE" : "FLAG",   "NAME" : "COOKIE_REWARD",  "OPT" : "DELETE" }
            ],
            "START" : "",
            "END" : "",
            "RESULTS" : [ ]
        }
    ],
    "END" : "Finally, your shift in the galley is over. NPC_NAME comes up to you and says, s(JOB_RESULTS) He then hands you some coins.",
    "JOB_RESULTS" : [
        { "A" :  25,  "TEXT" : "Your @@cooking was pretty horrible@@, don't complain about the pay." },
        { "A" :  50, "TEXT" : "Your @@cooking was passable@@, but then again these slobs here aren't used to fine chow anyway." },
        { "A" : 500, "TEXT" : "I'm impressed that your @@cooking was so good@@. Who knew you had that kind of talent as well?" },
        { "C" :  25, "TEXT" : "How can you be such @@a bad fuck@@? You'd think after all the dicks you've taken you'd be halfway decent at it by now." },
        { "C" :  50, "TEXT" : "Your ass @@was pretty good@@ - but I think you need more practice. Like tomorrow, and here." },
        { "C" : 500, "TEXT" : "But who cares about your cooking when you can @@work a cock with your ass like that@@. Come back later if you want some more fun." }
    ]
};

App.Data.JobData["COOK02"] = {
    "ID": "COOK02", "TITLE": "Cooking Lessons", "GIVER": "Cook", "PAY" : 0,
    "RATING" : 1, // of 5
    "PHASES" : [ 0, 1, 2, 3 ],
    "DAYS"   : 1,
    "HIDDEN" : false,
    "COST" : [
        { "TYPE" : "TIME",  "VALUE" : 1 },
        { "TYPE" : "STAT",  "NAME" : "Energy", "VALUE" : 1 },
        { "TYPE" : "MONEY", "VALUE" : 20 } ],
    "REQUIREMENTS" : [
        { "TYPE" : "SKILL", "NAME" : "Cooking", "VALUE" : 5,  "CONDITION" : "gte" } ],
    "INTRO" :
        "NPC_NAME says, s(We can always use help here in the galley, PLAYER_NAME. And if yer crap at cooking, \
        then I might could be obliged to give you a 'personal lesson' fer a small fee...)",
    "START" :
        "NPC_NAME leads you to the back of the galley and lumbers up to a large table where he has laid out a collection of \
        cooking tools and ingredients. You're surprised that he's put so much thought into this considering the quality of \
        the food that the pirates on board the ship eat.",
    "SCENES" : [
        {
            "ID" : "SCENE01",
            "TRIGGERS" :[ ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [
                { "TAG" : "A", "TYPE" : "SKILL", "NAME" : "Cooking", "DIFFICULTY" : 30, "REWARD" : "NONE", "R_NAME" : "NONE", "VALUE" : 100, "OPT" : 0 }
            ],
            "POST" : [
                { "TYPE" : "SKILL_XP", "NAME" : "Cooking", "VALUE" :  10, "OPT" : 0 },
                { "TYPE" : "SKILL_XP", "NAME" : "Cooking", "VALUE" : 100, "OPT" : "RANDOM" }
            ],
            "START" :
                "NPC_NAME starts by giving you some basic instruction on how to use various tools and implements in the \
                galley. He goes into a practical demonstration of some simple dishes by explaining their ingredients and \
                preparation. After watching him, it's then your turn to repeat the recipes.",
            "END" : "",
            "RESULTS" : [
                {"A":  25, "TEXT":  "Unfortunately, it seems that the lesson didn't really stick and your @@dishes came out horrible@@. NPC_NAME sneers at your various piles of glop and shakes his head, not at all pleased with the results."},
                {"A":  50, "TEXT":  "With a small amount of effort you manage to cook a @@dish that isn't half bad@@. NPC_NAME takes a few tastes and shrugs in passable acceptance."},
                {"A": 500, "TEXT":  "You take your time and manage to @@skillfully recreate the dishes@@ that you were shown. NPC_NAME looks at them, takes a few tastes, and then nods in approval."} ]
        },
        {
            "ID" : "SCENE02",
            "TRIGGERS" :[
                { "TYPE" : "NPC_STAT", "NAME" : "Lust", "VALUE" : 50, "CONDITION" : "gte" }
            ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [
                { "TAG" : "B", "TYPE" : "SKILL", "NAME" : "BlowJobs", "DIFFICULTY" : 30, "REWARD" : "MONEY", "R_NAME" : "MONEY", "VALUE" : 10, "OPT" : 0 }
            ],
            "POST" : [
                { "TYPE" : "NPC_STAT",  "NAME" : "Lust",        "VALUE" : -20,  "OPT" : 0 },
                { "TYPE" : "NPC_STAT",  "NAME" : "Mood",        "VALUE" : 5,    "OPT" : 0 },
                { "TYPE" : "STAT",      "NAME" : "Nutrition",   "VALUE" : 5,    "OPT" : 0 }
            ],
            "START" :
                "After the cooking lesson, NPC_NAME says, s(Now that we got the business out of the way, it's high time for the pleasure! \
                So how about you get on your knees, ya little cunt, and try to earn back a little bit of your tuition with that slutty mouth \
                of yours?)\n\n\
                He doesn't wait for a response before he abruptly shoves you to your knees and fishes his stiffening prick from his filthy \ trousers. You wince at the sight of the sweaty length of veiny fuckmeat, but you quickly resign yourself to the task of sucking \
                off his clammy cock by telling yourself that you have no choice in the matter.\n\n\
                NPC_NAME joggles his shaft in the endeavor to harden himself up. The plump purpled bulb-end bobbles a mere inch from your face. \
                You can see glistening precum already starting to ooze from his puckered piss slit.He jabs his swollen sausage against your nLIPS, \
                smearing salty pre around your mouth and chin, and sputters an array of vulgarities down at you: s(Suck, you little whore!) s(Lick \
                it!) s(Gulp my hot gravy!)\n\n\
                As ordered, you begin to slowly lick the glans of his wobbly wang in the attempt to arouse him to full-mast.",
            "END" :
                "NPC_NAME pulls up his cruddy trousers, gives you a rough pat on the head, and then lumbers away.",
            "RESULTS" : [
                {"B":  25, "TEXT":
                "Without warning, NPC_NAME crams the whole of his still quite spongy shlong full on into your mouth. You try to accommodate the bulging mouthful of half-hard chub, @@but you struggle to find the right movement and tempo@@ to provide any sort of satisfying service to it.\n\n\
                In a fit of frustration, NPC_NAME clamps your head betwixt his huge hands and settles for smashing his groin against you. Thankfully his burgeoning bush of bristy pubes cushions the impact but having your face repeatedly squashed into his nappy nest of oily public hair isn't much better. Struggling for a breath, you slap your hands on his thighs uselessly as he skids his rubbery rod into your mouth and throat again and again. You gag noisily as he finally stiffens up and, of fucking course, that seems to do it for him.\n\n\
                Brackish baby-batter boils out of his gullet-gorging cock and your cheeks bulge out with the sultry spooge. He gleefully crams the salty spunk down your throat, triumphantly groaning with each thrust. Finally content, he releases you and cuffs your head away from his softening prick as if you'd done him a dire disservice.\n\n\
                NPC_NAME says, s(That was downright horrible, PLAYER_NAME! You ought to be paying me for such a rotten showing at that. You best get some practice, god dammmit. It's not like there isn't a ship full of dicks to suck here, ya crummy cockswab.)"},
                {"B":  50, "TEXT":
                "Taking note of his growing impatience, you quickly commence fondling his balls while you smush your mouth and tongue against the underside of his shaft, squashing his stiffening prick into his squishy stomach with your cheek like a ditzy cock-starved slut. You sputter out as much saliva as you can manage, coating everything you can in quick-and-dirty lube, so you can slide your face up and down his slowly plumping pecker.\n\n\
                You let out a soft, girlish mewl to feign your own arousal in an attempt to provoke a proper erection. He replies with a merry grunt and caresses your hair with his fat sausage fingers. His heartbeat pulsates on your lips as you lick and smooch his twitching fuckstick, coaxing him to serviceable rigidity. Satisfied that he's ready at long last, you envelope his prick with your mouth and @@begin to suck it in earnest@@. You bob your head back and forth, spearing his dick through your pursed lips and over your rippling tongue while purposefully but softly huffing a breath out of your nose with every intake. He begins to mimic your panting. Every time he moans, you return it with purr. And every time he grunts, you let slip a shamelessly sloppy sucking sound.\n\n\
                It doesn't take much longer before he grabs ahold of your head and rams his throbbing knob into your mouth as deep as he can. You try your best to relax -- despite having your esophagus gorged with a cum spewing cock -- so that he can unload his balls straight down your gullet. With a shuttering sigh, he finishes filling your belly with his sultry spunk and releases you. You take a gasping breath, errant cum burbling obscenely in your throat, and sit back on your feet to compose yourself.\n\n\
                s(Not bad, PLAYER_NAME,) he says, simpering down at you. s(It's right good to see yer enjoying yerself, lass. Nothing as rousing as having a happy cock-sucker handy, I always say! And, here now, I'll give you back some coins fer yer sweet spirit.)"},
                {"B": 500, "TEXT":
                "But, wise to this silly half-hard nonsense a few of these men are inclined towards, you simply slurp his spongy schlong into your mouth, work the bouncy bastard into your throat, and then @@you commence to gluttonously gulp against his rubbery rod@@ while lashing at the naughty non-erection with your tongue.\n\n\
                In less than a minute, NPC_NAME is reluctantly pushing you away, whimpering from such surprisingly speedy over-stimulation. After some nominal resistance, you let him shove you off his palpitating pecker but you immediately shoot him a lusty scowl that makes him shiver. The expression reads, 'How dare you deprive me of this dick!' He swallows hard and draws back his hands. Graciously, you settle for gently smooching his shaft and cuddling his doughy sack in your hand while his overwhelmed arousal calms to a more pleasurable level. After some time, his ragged breath becomes much less hurried.\n\n\
                You throw him a lewd pout that tells him you're done waiting and then you instantly sheath the swashbucker's cocksword in your sultry, silky throat. Your tongue slithers out to work the base of his shaft and you tenderly squeeze his balls, coaxing out his seed, as you zealously attempt to swallow his dick right off his body. In no time, you feel him getting close again -- his fingernails graze against your skin as he prepares to unload -- and you open your mouth wide and abandon his pulsating prick with only a breathy exhale as a farewell.\n\n\
                You watch in ruthless delight as he rides the very edge of orgasm: his breath stuck, his eyes frozen, his twitching cock struggling mightily to disgorge itself. Precum swelters and trickles from the angry purple head. You reach out your tongue and lightly lick a tongueful of the salty scum into your mouth. You swallow it with a husky purr while staring up into his eyes. You wait. And you wait some more. His respiration returns to him and he slowly comes to his senses as his imminent orgasm subsides.\n\n\
                But you don't let it get too far away. With a blustery assault of hungry kisses, frenzied licks, and sloppy wet suckles, NPC_NAME is promptly teetering on the brink of nut-busting once again. Having had your fun, you fall into the complacent routine of bobbing your head back and forth on his fevered fuckstick, just sucking and slurping yet another cock like a typical shameless slut. You swill down several spates of hot viscous jizz without missing a beat and then pop your lips off his squeaky-clean prick with a satisfied smack. You wipe your mouth with your fingers and gaze up at him with a desirous look to ensure he observes you dutifully suck them clean as well.\n\n\
                Finding his breath at last, NPC_NAME says, s(That was... right sufficient, PLAYER_NAME.) He wipes the sweat off his forehead with the back of his arm and heaves out a breath of relief. s(I'd heavily wager you enjoyed yerself even more than I did, lass, but I'm a man of me word. I'll have you back some coins for yer... most merciful attention.)"} ]
        },
        {
            "ID" : "SCENE03",
            "TRIGGERS" :[
                { "TYPE" : "RANDOM-100", "VALUE" : 50, "CONDITION" : "lte" } ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [ ],
            "POST" : [
                { "TYPE" : "FOOD", "NAME" : "bread crust", "VALUE" : 3, "OPT" : "RANDOM" }],
            "START" :
            "With the lesson in galley over, you notice an opportunity for you to steal some food. Normally you're not a thief, but these are not "+
            "normal times. When you're sure no one is looking you manage to swipe some bread crusts. At least it's better than the semen gruel they keep feeding you.",
            "END" : "",
            "RESULTS" : [ ]
        }
    ],
    "END" :
        "You feel like you made some JOB_RESULTS.",
    "JOB_RESULTS" : [
        { "A" :  25,  "TEXT" : "@@minimal progress@@ today" },
        { "A" :  50, "TEXT" : "@@moderate progress@@ today" },
        { "A" : 500, "TEXT" : "@@good progress@@ today" },
        { "B" :  25, "TEXT" : " even if you did have to @@suck a cock@@ to get the lesson" },
        { "B" :  50, "TEXT" : " even if you did have to @@suck a cock@@ to get the lesson" },
        { "B" : 500, "TEXT" : " even if you did have to @@suck a cock@@ to get the lesson" }
    ]

};

App.Data.JobData["COOK03"] = {
    "ID": "COOK03", "TITLE": "A 'Free Meal'", "GIVER": "Cook", "PAY" : 0,
    "RATING" : 1, // of 5
    "PHASES" : [ 0, 1, 2, 3 ],
    "DAYS"   : 1,
    "HIDDEN" : true,
    "COST" : [
    { "TYPE" : "TIME",  "VALUE" : 1 },
    { "TYPE" : "STAT",  "NAME" : "Energy", "VALUE" : 1 }],
    "REQUIREMENTS" : [
    { "TYPE" : "STAT",      "NAME" : "Nutrition",   "VALUE" : 70,   "CONDITION" : "lte" },
    { "TYPE" : "NPC_STAT",  "NAME" : "Lust",        "VALUE" : 60,   "CONDITION" : "gte" }
],
    "INTRO" :
    "NPC_NAME says, s(You're looking a little hungry PLAYER_NAME... and I don't just mean for cock. Tell you what, if you want to get a \
    'free meal' I might be willing to oblige if you have a little fun with me in return.) He gestures his head in the direction of a \
    large 'high chair' across the room, the kind you might feed a child from, but obviously built for an adult. You have a bad feeling about this.",
    "START" :
    "NPC_NAME leads you over to the looming high chair and shoves you into it. Before you can even catch your breath, you find yourself \
    locked in behind the large wooden tray. Just as you are about to protest, NPC_NAME puts one of his massive fingers against your lips \
    and goes, s(Shh... just be quiet like a good little sissy baby.)\n\n\
    He then manacles you to the chair and produces a large pink bonnet that he secures to your head as well as a frilly pink bib that he \
    places around your neck. He chuckles mirthfully to himself and then says, s(One minute sissy girl. Daddy has a treat for you.) You  \
    hear some shuffling behind you as NPC_NAME rummages around in the kitchen. Within moments he returns with a large bowl of yellowish \
    goop and ominously, no spoon. He sets the bowl down on the counter next to him and pulls down his trousers, revealing a fat and massive cock.",
        "SCENES" : [
    {
        "ID" : "SCENE01",
        "TRIGGERS" :[ ],
        "TRIGGERS_ANY" : [ ],
        "CHECKS" : [
            { "TAG" : "A", "TYPE" : "SKILL", "NAME" : "BlowJobs", "DIFFICULTY" : 30, "REWARD" : "NPC_STAT", "R_NAME" : "Mood", "VALUE" : 10, "OPT" : 0 }
        ],
        "POST" : [
            { "TYPE" : "STAT_XP",   "NAME" : "Nutrition",   "VALUE" : 100,  "OPT" : 0 },
            { "TYPE" : "STAT",      "NAME" : "Nutrition",   "VALUE" :  20,  "OPT" : 0 },
            { "TYPE" : "BODY_XP",   "NAME" : "Lips",        "VALUE" :  50,  "OPT" : 0 },
            { "TYPE" : "BODY_XP",   "NAME" : "Lips",        "VALUE" : 100,  "OPT" : "RANDOM" },
            { "TYPE" : "STAT_XP",   "NAME" : "Hormones",    "VALUE" : 100,  "OPT" : "RANDOM" },
            { "TYPE" : "STAT_XP",   "NAME" : "WillPower",   "VALUE" : -20,  "OPT" : 0 },
            { "TYPE" : "NPC_STAT",  "NAME" : "Mood",        "VALUE" :   5,  "OPT" : 0 },
            { "TYPE" : "NPC_STAT",  "NAME" : "Lust",        "VALUE" : -20,  "OPT" : 0 }
        ],
        "START" :
        "With one hand he scoops up some of the mysterious goop and slathers a large heaping on his turgid member. He approaches you eagerly, \
        his massive cock waving in front of your face.\n\n NPC_NAME says, s(Now be a good sissy and open wide...)\n\n\
        You quickly turn your head away, but it's to no avail as NPC_NAME easily palms your entire skull with one of his massive meat hooks and \
        turns you to face his cock. Without much ceremony he pushes his meat past your nLIPS.\n\n\
        Inwardly you sigh. This entire act is humiliating and degrading, but you're the one that wanted a free meal. Faking a smile you lean \
        forward and start licking the goop from NPC_NAME's dick, taking care to run your tongue and nLIPS over his glans while consuming as much \
        of the 'food' as you can.\n\n\
        NPC_NAME continues feeding you this way by putting more and more of the mystery gruel on his cock and forcing it past your lips. Somewhere \
        after the fourth or fifth serving you start to feel your head get light and your lips start to tingle. Without even noticing it you have \
        been absently slurping and licking the gruel off his massive member and licking your lips in between servings. Eventually NPC_NAME gets \
        tired of the game and begins to fuck your face in earnest. You think that this is supposed to hurt, but for some reason your entire face \
        and brain feel numb. Maybe there was something in the gruel?\n\n\
        NPC_NAME grabs your head and forces it down on his pole. The strength of this man is not to be underestimated as he easily buries \
        your nLIPS down to the root of his shaft. You feel his already massive member swell in size and then start to spasm as he shoots an \
        enormous amount of cum past your tonsils and down your throat.",
        "END" :
            "After all is said and done and after NPC_NAME has unlocked you from the chair, you let out a small burp flavored with sperm and say \
            to yourself, sp(I guess there's no such thing as a 'free meal')",
        "RESULTS" : [
            {"A": 25,   "TEXT": "NPC_NAME says, s(That was fun, but you're a @@lousy cock sucker@@. Oh well at least you'll have time to learn.)"},
            {"A": 50,   "TEXT": "NPC_NAME says, s(Not bad PLAYER_NAME. Not bad at all. You keep @@sucking my dick like that@@ and I might keep \
            you as my personal little girl.)"},
            {"A": 500,  "TEXT": "NPC_NAME says, s(Damn you're a pretty @@good cock sucker@@ ain't ya? Come back later if you want to 'fill your \
            belly' again slut.)"}
        ]
    }
],
    "END" : "",
    "JOB_RESULTS" : [ ]
};

App.Data.JobData["COOK04"] = {
    "ID": "COOK04", "TITLE": "Fresh Dairy in the Galley", "GIVER": "Cook", "PAY" : 0,
    "RATING" : 3, // of 5
    "PHASES" : [ 0 ],
    "DAYS"   : 1,
    "HIDDEN" : true,
    "COST" : [
        { "TYPE" : "TIME",  "VALUE" : 1 },
        { "TYPE" : "STAT",  "NAME" : "Energy", "VALUE" : 1 }],
    "REQUIREMENTS" : [
        { "TYPE" : "BODY",      "NAME" : "Lactation",   "VALUE" :  1,   "CONDITION" : "gte" }
    ],
    "INTRO" :
    "You stand next to the cauldron, stirring it with a great wooden ladle. It is full of oatmeal for the crew’s morning meal. It is a \
    bit awkward today, your breasts are still swollen from your session with the first mate last night.",
    "START" :
    "NPC_NAME comes up behind you and grinds his groin into your backside with his hands on your hips. He leans into it and breaths into your ear \
    saying, s(I think I know who's going to get a little cream for their oatmeal today. Maybe I should just put it straight up into your belly \
    from behind right now!). You smell the rum on his breath. He guffaws at his own crude joke and presses his rotund belly into you with more \
    aggression, pinning you to the cauldron. With you trapped he reaches around you in a bear hug while still grinding away. As you feel his \
    manhood hardening and pressing against you, you can not help but let out a bit of a squeal. He fully cups both of your pBUST breasts with his \
    large hands, your nipples centered in his palms. He begins to roughly kneed your boobs as you begin to squirm frantically trying to get away \
    from both him and the growing heat from being pressed onto the cauldron.",
    "SCENES" : [
        {
            "ID" : "SCENE01",
            "TRIGGERS" :[ ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [
                { "TAG" : "A", "TYPE" : "BODY", "NAME" : "Bust", "DIFFICULTY" : 100, "REWARD" : "MONEY", "R_NAME" : "MONEY", "VALUE" : 150, "OPT" : 0 }
            ],
            "POST" : [
            ],
            "START" :
            "s(Whats this!) he bellows, face askew.\n\n\
            You stop your struggle as he eases back a bit to look over your shoulder at his hands grasping at your breasts. You also focus where \
            he looks to see that his hands are wet with a white liquid. Your own breast milk you realize. tp(Still?) you think to yourself, \
            tp(What is Kipler injecting me with? What is it going to do to me in the long haul? I think my boobs never shrink back down all the way again afterwards. And why am I producing so much milk? It’s seems to be more than normal for a woman, let alone me!).\n\n\
            s(Well, well, what do we have here? Are you trying to find your place in the crew by replacing the dairy goat? Come over here!) \
            NPC_NAME grabs your upper arm and drags you over to the high chair. s(Sit!) he orders, and you do. He clears any obstruction to \
            gain access to your bounty and locks the wood tray into place. It is low, just on top your thighs. He barks, s(Sit up straight and \
            stay still. Do not cease to do so if you don’t want to be backhanded.) He goes and fetches a large clean oven pan and places it on \
            the tray under your boobs.\n\n\
            He fondles your your breasts and gently strokes them. Being a bit afraid you do as he said and in no time your nipples engorge and \
            begin to drip into the pan. He teases your nipples and your breasts begin to let down. And then with a surprisingly efficient skill \
            he proceeds to milk you like a dairy beast.\n\n\
            He is firm and purposeful, but he is tender with his touch and speaks to you soothingly. You suppose he does not wish to sour the milk. \
            After a while you begin to find that you quite enjoy the feeling, and you think under the right conditions if it was to go on long enough \
            you might find a release into a state of bliss.\n\n\
            Tug right, tug left, tug right, tug left, right, left, right, left, tug tug tug...\n\n\
            You lost yourself there, but you snap back. The milk is pooling now in the pan you see. Your breasts feel lighter, and look softer. The milk \
            being released is tapering off.\n\n\
            NPC_NAME ceases to milk you, wipes his hands on his dirty apron, takes the pan and pores it into the kitchens magically cooled milk barrel. \
            s(Not bad, Not bad at all.) His hairy fist comes towards you with some gold coins in it and rains it over your teats onto the tray. s(Those \
            are for you. The more you produce the more I'll pay you. A bit for enough for the captains iced coffees, and some real coin if you give me \
            enough to to sell fresh milkshakes to the crew. Be sure to eat well now cabin COW! I guess cabin girl wasn't good enough for ya! HA- HA!)",
            "END" : "",
            "RESULTS" : [
            ]
        },
        {
            "ID" : "REWARD",
            "TRIGGERS" :[
                { "TYPE" : "TAG", "NAME" : "A", "VALUE" : 90, "CONDITION" : "gte" }
            ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [ ],
            "POST" : [
                { "TYPE" : "PICK_ITEM", "NAME" : "CLOTHES", "VALUE" : { price: 5000, meta_key: 'cow outfit'} },
                { "TYPE" : "FOOD", "NAME" : "milkdew melon", "VALUE" : 2 }
            ],
            "START" :
            "Cookie seems pleased with the amount of milk you gave. He's greedily rubbing his hands together and smacking his lips. Without a second \
            thought he reaches for a small bag and throws it your way. s(Here, take that, you've earned it!)",
            "END" : "",
            "RESULTS" : [ ]
        }
    ],
    "END" : "He releases you from the chair and yells, s(Back to work, back to work!) and gropes your ass till your back at it with the ladle.",
    "JOB_RESULTS" : [ ]
};
