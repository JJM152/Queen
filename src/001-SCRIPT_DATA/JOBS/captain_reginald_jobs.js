App.Data.JobData["CAPT01"] = {
    "ID": "CAPT01", "TITLE": "Sissy Training", "GIVER": "Captain", "PAY" : 40,
    "RATING" : 4, // of 5
    "PHASES" : [ 1, 2 ],
    "DAYS"   : 2,
    "HIDDEN" : false,
    "COST" : [
        { "TYPE" : "TIME",  "VALUE" : 2 },
        { "TYPE" : "STAT",  "NAME" : "Energy", "VALUE" : 2 }],
    "REQUIREMENTS" : [
        { "TYPE" : "QUEST",     "NAME" : "Q005",        "VALUE" : "COMPLETED",  "CONDITION" : "eq"  },
        { "TYPE" : "NPC_STAT",  "NAME" : "Lust",        "VALUE" : 70,           "CONDITION" : "gte" },
        { "TYPE" : "STAT",      "NAME" : "Perversion",  "VALUE" : 30,           "CONDITION" : "gte"  }
    ],
    "INTRO" :
    "NPC_NAME says, s(Not bad PLAYER_NAME, not bad at all. I was dubious at first, but it seems like you're 'developing' quite nicely. \
    With those nBUST and nASS you certainly have the right assets for the job of the ship's whore. Tell you what, I might be \
    persuaded to part with some coin and some 'special training' that is guaranteed to increase your income. You game slut?)",
    "START" :
    "NPC_NAME roughly pushes you through the door into his private chambers with such force that you nearly trip. You \
    recover your sense and turn around only to see that he has locked the heavy iron door behind him. The \"click\" of \
    the lock itself rings out loudly and ominously in your ears.\n\n\
    NPC_NAME says, s(Now that's a good whore. Get on your knees.)",
    "SCENES" : [
        {
            "ID" : "SCENE01a",
            "TRIGGERS" :[
                { "TYPE" : "FLAG",      "NAME" : "CAPTAIN_TRAINING", "OPT" : "NOT_SET" }
            ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [ ],
            "POST" : [ ],
            "START" :
            "Nothing out of the regular here, it seems a good blow job is what most of these pirate \
            scum want. Just as you're about to comply however, NPC_NAME reaches out and backhands you across the face!\n\n\
            s(Stupid slut!) he bellows at you. s(When I give you a command, you immediately answer 'Yes master!'. Do you understand?)\n\n\
            sp(Yes master!) you respond as you lower yourself to your knees before NPC_NAME. \
            It's humiliating, but it's better than getting belted across the side of the face again.",
            "END" : "",
            "RESULTS" : [ ]
        },
        {
            "ID" : "SCENE01b",
            "TRIGGERS" :[
                { "TYPE" : "FLAG",      "NAME" : "CAPTAIN_TRAINING", "OPT" : "SET" }
            ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [ ],
            "POST" : [ ],
            "START" :
            "sp(Yes master!) you respond as you lower yourself to your knees before NPC_NAME. \
            You've learned from experience that he expects you to act like a completely subservient bimbo slut \
            otherwise he'll quickly get abusive. For a good tip and a few less bruises, then you'll gladly act the part.",
            "END" : "",
            "RESULTS" : [ ]
        },
        {
            "ID": "SCENE02a",
            "TRIGGERS": [
                {"TYPE": "FLAG", "NAME": "CAPTAIN_TRAINING", "OPT": "NOT_SET"}
            ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS": [],
            "POST": [],
            "START":
            "You are about to reach for NPC_NAME's trousers so that you can fish out his cock and start your service, but he bats your \
            hands away. A look of confusion flutters across your face and he rolls his eyes and explains, s(Keep your hands behind \
            your back and use your mouth like a good little whore.)\n\n\
            You put your hands behind your back as the Captain wants. He could probably use shackles, or even command you with his ring, \
            but for some reason he prefers that you do this of your own accord. You clumsily move your head forward and with your \
            teeth start yanking down his trousers. It takes some effort, but eventually you free his cock, a massive 11 inch member that \
            is already erect and waving dauntingly in front of your face.",
            "END": "",
            "RESULTS": []
        },
        {
            "ID": "SCENE02b",
            "TRIGGERS": [
                {"TYPE": "FLAG", "NAME": "CAPTAIN_TRAINING", "OPT": "SET"}
            ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS": [],
            "POST": [],
            "START":
            "You put your hands behind your back as you know is NPC_NAME's preference. He could probably use shackles, or even command you \
            with his ring, but for some reason he prefers that you do this of your own accord. It's probably more humiliating this way. \
            You clumsily move your head forward and with your teeth start yanking down his trousers. It takes some effort, but eventually \
            you free his cock, a massive 11 inch member that is already erect and waving menacingly in front of your face.",
            "END": "",
            "RESULTS": []
        },
        {
            "ID": "SCENE03",
            "TRIGGERS": [ ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS": [
                { "TAG" : "A", "TYPE" : "SKILL", "NAME" : "BlowJobs", "DIFFICULTY" : 80, "REWARD" : "MONEY", "R_NAME" : "MONEY", "VALUE" : 20, "OPT" : 0 }
            ],
            "POST": [
                { "TYPE" : "NPC_STAT", "NAME" : "Mood",    "VALUE" :  3,  "OPT" : "TAG_A" },
                { "TYPE" : "NPC_STAT", "NAME" : "Lust",    "VALUE" : -5,  "OPT" : "TAG_A" }
            ],
            "START":
            "You wrap your nLIPS around the head of NPC_NAME's cock and begin to suck. He doesn't move at all, evidently \
            he expects you to completely service him. It takes some effort but you slowly work your mouth down to the root of \
            his thick dick. Your jaw hurts and you have trouble breathing through your nose as you struggle to get his massive \
            member in your mouth.\n\n\
            Eventually NPC_NAME grabs the back of your head and pushes his cock, inch by inch down your throat. You gag and \
            struggle even harder to breath, tears flowing from your eyes. After what seems like ages your nLIPS are \
            buried in his pubic hair and his massive member is halfway down your gullet. From there he starts mercilessly \
            pounding away at your face, his dick using your mouth and throat as a cock sleeve.\n\n",
            "END":
            "\n\nAfter withdrawing his cock from your throat, NPC_NAME produces a long leash, like the kind used for a dog or other \
            pet and attaches it to your collar. You try to move, to get up from your knees, but you find yourself unable to do \
            anything except crawl. You look up at NPC_NAME expectantly and he nods as to confirm your fears - he's using his magic \
            ring on your slave collar to compel you to \"forget\" how to walk.",
            "RESULTS": [
                {"A":  50,   "TEXT":"You try your best to accommodate NPC_NAME's tool, but @@it doesn't seem to matter too much@@. After a few minutes \
                of the steady face fucking, you feel his already huge member engorge to what feels like almost double it's normal \
                size and then the familiar twitching sensation as stream after stream of hot white jizz is deposited directly into your stomach."},
                {"A": 500,   "TEXT":"Slowly you start to work your head up and down, the tightness of your full throat fucking causing NPC_NAME \
                to @@moan in pleasure@@. You quickly pick up the tempo and after what seems like an eternity you feel his already \
                huge member engorge to what feels like almost double it's normal size and start to shake as stream after stream of \
                hot white jizz is deposited directly into your stomach."}
            ]
        },
        {
            "ID": "SCENE04a",
            "TRIGGERS": [
                {"TYPE": "FLAG", "NAME": "CAPTAIN_TRAINING", "OPT": "NOT_SET"}
            ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS": [],
            "POST": [],
            "START":
            "NPC_NAME slowly strips you and produces a new garment and accessories that cause your blood to run cold. First there \
            is a small, but vicious looking garment - an @@color:orange;extreme bondage corset@@ that is made out of metal and steel with \
            various attachments for keeping it's wearer subjugated. Next to that are a @@color:orange;pair of nipple clamps@@, horrible \
            looking devices that leave little to the imagination as to what they are for.\n\n\
            Finally, the last item is the one that scares you the most. It's a large black @@color:orange;anal dildo@@. It's obviously \
            designed to be inserted into your ass and then locked into place with a strap on the corset. This is not going to end well \
            for your poor behind.",
            "END": "",
            "RESULTS": []
        },
        {
            "ID": "SCENE04b",
            "TRIGGERS": [
                {"TYPE": "FLAG", "NAME": "CAPTAIN_TRAINING", "OPT": "SET"}
            ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS": [],
            "POST": [],
            "START":
            "NPC_NAME slowly strips you and produces the familiar 'training' equipment that he used on you last time. You stare timidly \
            at the @@color:orange;extreme bondage corset and anal dildo@@, the memory still fresh in your mind of the previous experience. \
            You slowly swallow in fear...",
            "END": "",
            "RESULTS": []
        },
        {
            "ID": "SCENE05",
            "TRIGGERS": [ ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS": [
                { "TAG" : "B", "TYPE" : "SKILL", "NAME" : "AssFucking", "DIFFICULTY" : 80, "REWARD" : "MONEY", "R_NAME" : "MONEY", "VALUE" : 20, "OPT" : 0 }
            ],
            "POST": [
                { "TYPE" : "NPC_STAT", "NAME" : "Mood",    "VALUE" :  3,  "OPT" : "TAG_B" },
                { "TYPE" : "NPC_STAT", "NAME" : "Lust",    "VALUE" : -5,  "OPT" : "TAG_B" }
            ],
            "START":
            "NPC_NAME changes your clothes. The corset is so tight around your nWAIST that it keeps you from taking \
            anything but the most shallow of breaths. It pushes up your nBUST and flatters your nHIPS, causing \
            your nASS to look more pronounced.\n\n\
            After you've been situated such, he locks you into the device, your arms firmly at your side. Next comes the \
            @@color:orange;nipple clamps@@ - he spends some time toying with your nipples to get them fully errect and you \
            have to admit that it feels quite pleasurable, at least until he attaches the cruel clamps to you. It's all \
            you can manage to keep from crying.\n\n\
            Finally, he produces the @@color:orange;large anal plug@@. He puts it in front of your face so that you can \
            spit on it to try and provide some small amount of lubrication before it finds purchase in your soon to be \
            abused ass. Once done, he bends you over - a painful prospect in the corset and proceeds to push the end of \
            the bulbous dildo against your rectum.\n\n",
            "END":
            "\n\nOnce fully attired NPC_NAME spends the rest of the pPHASE tormenting you with a variety of implements \
            and raping your mouth. He constantly degrades you, forcing you to lick his feet, his anus and his cum off the \
            floor while you call yourself names.\n\n\
            sp(I'm a stupid dumb bimbo whore!) you say with false pride in your happy voice. \
            NPC_NAME laughs and slaps you on the ass, obviously pleased at your act of self degradation.\n\n\
            s(That's right, and now you're going to prove it,) NPC_NAME says as he removes the dildo from your ass.\n\n\
            He grabs you by the collar and leads you over to a specially prepared rocking horse. It has a long furry and \
            plush main and a (slightly) smaller dildo protruding from the seat.",
            "RESULTS": [
                {"B":  50,   "TEXT":"You try your hardest to gape your asshole, but it's to no avail. The dildo is just \
                @@too massive to easily fit up your butt@@ and it takes NPC_NAME quite a bit of effort to slowly work it \
                up into your bowels. You grunt in pain and tears begin streaming from your eyes. NPC_NAME doesn't relent \
                and methodically keeps forcing the monstrous tool up your rectum. By the time he manages to get it firmly \
                lodged in your posterior and locked into place you are sobbing and convulsing as much the cruel corset you \
                are wearing allows you to."},
                {"B": 500,   "TEXT":"You strain and with great effort manage to gape your asshole sufficiently enough so that \
                the @@monstrously huge dildo easily enters your backside@@. NPC_NAME is surprised by how fluidly he is able \
                to drive the evil looking phallus into you. Obviously it annoys him a little, so right as the dildo is about \
                to bottom out he gives it a wicked slam, driving it deep into your bowels. The shock and pain cause you to \
                involuntarily let out a scream and despite yourself your eyes start to tear up. While painful, the display seems \
                to have satisfied the sadistic Captain and he locks the dildo in place with a grin."}
            ]
        },
        {
            "ID": "SCENE06a",
            "TRIGGERS": [
                {"TYPE": "FLAG", "NAME": "CAPTAIN_TRAINING", "OPT": "NOT_SET"}
            ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS": [],
            "POST": [],
            "START":
            "s(Well slut, get to it) he states. You look confused for a moment until you feel the harsh boot of NPC_NAME's foot upon \
            your arse, sending you sprawling towards the little horsie. It's obvious what he wants you to do, but how much more can \
            the man humiliate you? Slowly you pick yourself up off the floor, a task made more difficult by the constricting corset \
            you are wearing and straddle the perverted toy. You give one last look at NPC_NAME and he simply nods. You hold your breath \
            and steel your guts while you impale yourself on the phallus.",
            "END": "",
            "RESULTS": []
        },
        {
            "ID": "SCENE06b",
            "TRIGGERS": [
                {"TYPE": "FLAG", "NAME": "CAPTAIN_TRAINING", "OPT": "SET"}
            ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS": [],
            "POST": [],
            "START":
            "s(Well slut, get to it) he states. Knowing just what NPC_NAME wants to see, you daintily prance over to the perverted \
            rocking horse and straddle it, only taking a moment to catch your breath in the constricting corset until you impale your \
            abused ass on the upright phallus.",
            "END": "",
            "RESULTS": []
        },
        {
            "ID": "SCENE07",
            "TRIGGERS": [ ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS": [
                { "TAG" : "C", "TYPE" : "SKILL", "NAME" : "BlowJobs", "DIFFICULTY" : 80, "REWARD" : "MONEY", "R_NAME" : "MONEY", "VALUE" : 20, "OPT" : 0 }
            ],
            "POST": [
                { "TYPE" : "NPC_STAT", "NAME" : "Mood",    "VALUE" :  3,  "OPT" : "TAG_C" },
                { "TYPE" : "NPC_STAT", "NAME" : "Lust",    "VALUE" : -5,  "OPT" : "TAG_C" }
            ],
            "START":
            "Once in place, NPC_NAME puts his dick in front of your face and with your hands at your side you proceed to \
            give him a blow job while riding the rocking dildo with your sissy asshole. The mane of the rocking horse is \
            made out of some type of material that brushes sensually against your nPENIS and combined with the \
            stimulation in your ass starts to arouse you. It doesn't take long until your nPENIS is hard and you \
            are straining you rub it more furiously as you bounce up and down, your butt being self-raped while you suck off NPC_NAME.\n\n",
            "END":
            "\n\nAfter you've recovered your senses NPC_NAME leads you again by the collar to the floor and forces you to eat all \
            of the semen with your tongue and not using your hands. You lazily gobble up the mixed pool of jizz while he continues \
            to humiliate and insult you. By the time you are done, without even realizing it you're crying and sobbing to yourself.\n\
            Thankfully the 'special training' time is almost over and NPC_NAME lets you get changed and cleaned up.",
            "RESULTS": [
                {"C": 500,   "TEXT":"Eventually @@your cock sucking has the desired effect@@ on NPC_NAME and he grabs your head and \
                starts to blow load and load of hot semen in your mouth. There's so much of it that you can't even swallow it all \
                and it starts to pool out of your lips and nose. At this exact same moment, the combination of the anal stimulation, \
                your nPENIS rubbing on the horse and the humiliation of the situation brings about your own orgasm and you find yourself \
                shooting your own sissy cum while ironically drinking another mans hot jizz."}
            ]
        },
        {   // If pass check 'A', 'B', 'C' and If counter is at MAX (5), reward player and set counter to 0.
            "ID" : "SCENE08a",
            "TRIGGERS" :[
                { "TYPE" : "TAG", "NAME" : "A", "VALUE" : 100, "CONDITION" : "gte" },
                { "TYPE" : "TAG", "NAME" : "B", "VALUE" : 100, "CONDITION" : "gte" },
                { "TYPE" : "TAG", "NAME" : "C", "VALUE" : 100, "CONDITION" : "gte" },
                { "TYPE" : "COUNTER", "NAME" : "CAPTAIN_LOOT", "VALUE" : 5, "CONDITION" : "gte" }
            ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [ ],
            "POST" : [
                { "TYPE" : "FLAG",      "NAME" : "CAPTAIN_LOOT",              "VALUE" :   0,  "OPT" : "SET" },
                { "TYPE" : "FLAG",      "NAME" : "CAPTAIN_REWARD",            "VALUE" :   1,  "OPT" : "SET" },
                { "TYPE" : "LOOT_BOX",  "NAME" : "uncommon pirate loot box",   "VALUE" :   1,  "OPT" : "" }
            ],
            "START": "NPC_NAME says, s(You've really come a long way PLAYER_NAME. When I first brought you aboard I had no idea you'd \
            turn into such a fine slut. I'm pleasantly surprised. Here, take this...) NPC_NAME retrieves something from his desk. It's \
            a small treasure chest emblazoned with a skull and crossbones. You wonder what's inside?",
            "END" : "",
            "RESULTS" : [ ]
        },
        {   // If passed all checks then increment counter. Doesn't trigger if the counter is already at MAX (5) or the reward has been given this time.
            "ID" : "SCENE08b",
            "TRIGGERS" :[
                { "TYPE" : "TAG", "NAME" : "A", "VALUE" : 100, "CONDITION" : "gte" },
                { "TYPE" : "TAG", "NAME" : "B", "VALUE" : 100, "CONDITION" : "gte" },
                { "TYPE" : "TAG", "NAME" : "C", "VALUE" : 100, "CONDITION" : "gte" },
                { "TYPE" : "COUNTER", "NAME" : "CAPTAIN_LOOT", "VALUE" : 4, "CONDITION" : "lte" },
                { "TYPE" : "FLAG", "NAME" : "CAPTAIN_REWARD",  "OPT" : "NOT_SET" }
            ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [ ],
            "POST" : [
                { "TYPE" : "COUNTER",   "NAME" : "CAPTAIN_LOOT",    "VALUE" :   1,  "OPT" : 1 }
            ],
            "START" :   "NPC_NAME says, s(Ahh... that was relaxing. Who knew you'd take so well to your new job, eh my little cumslut?)\n\n\
            You're not sure this is the kind of compliment you've ever wanted, but what choice do you have?\n\n\
            NPC_NAME says, s(Keep up the good work and I'll make sure to reward you properly... and not just with a gullet full o' me jizz!)",
            "END" : "",
            "RESULTS" : [ ]
        },
        {   // Just unset the flag that shows we received loot and make sure we clear the counter.
            "ID" : "SCENE08c",
            "TRIGGERS" :[
                { "TYPE" : "FLAG", "NAME" : "CAPTAIN_REWARD", "OPT" : "SET" }
            ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [ ],
            "POST" : [
                { "TYPE" : "FLAG",   "NAME" : "CAPTAIN_REWARD",  "OPT" : "DELETE" }
            ],
            "START" : "",
            "END" : "",
            "RESULTS" : [ ]
        },
        {
            "ID": "SCENE09",
            "TRIGGERS": [],
            "TRIGGERS_ANY" : [ ],
            "CHECKS": [],
            "POST": [
                { "TYPE" : "FLAG",       "NAME" : "CAPTAIN_TRAINING",   "VALUE" :   1, "OPT" : "SET"},
                { "TYPE" : "STAT_XP",    "NAME" : "WillPower",          "VALUE" : -50, "OPT" : "RANDOM" },
                { "TYPE" : "STAT_XP",    "NAME" : "Perversion",         "VALUE" : 100, "OPT" : "RANDOM" }
            ],
            "START": "",
            "END": "",
            "RESULTS": []
        },
        {
            ID: "CourtesanCheck",
            TRIGGERS: [],
            TRIGGERS_ANY: [],
            CHECKS: [
                {
                    TAG : "Courtesan", TYPE: "SKILL", NAME: "Courtesan", DIFFICULTY: 100, 
                    REWARD: "TOKENS", R_NAME: "TOKENS", VALUE: 5,
                }
             ],
            POST: [ ],
            START: "",
            END: "",
            RESULTS: [ ],
        }

    ],
    "END" : "NPC_NAME hands you a small pouch filled with coins and says, s(Don't just lay there, your job is over so see yourself out whore.)\n\n\
    You'd almost be offended if it wasn't for the fact that what he said was essentially true. You pick up your poor and battered body and \
    head for the door.",
    "JOB_RESULTS" : [ ]
};
