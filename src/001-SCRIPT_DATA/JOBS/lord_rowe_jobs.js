App.Data.JobData["GOV01"] = {
    "ID": "GOV01", "TITLE": "Daddy's Little Girl", "GIVER": "LordRowe", "PAY" : 200,
    "RATING" : 5, // of 5
    "PHASES" : [ 1, 2, 3 ],
    "DAYS"   : 1,
    "HIDDEN" : false,
    "COST" : [
        { "TYPE" : "TIME",  "VALUE" : 1 },
        { "TYPE" : "STAT",  "NAME" : "Energy", "VALUE" : 1 }],
    "REQUIREMENTS" : [
        { "TYPE" : "NPC_STAT",      "NAME" : "Lust",            "VALUE" : 70,           "CONDITION" : "gte" },
        {"TYPE": "STYLE_CATEGORY",  "NAME": "Daddy's Girl",     "VALUE": 100,           "CONDITION" : "gte" },
        {"TYPE": "HAIR_STYLE",      "NAME": "cute pig tails",   "VALUE": true,          "CONDITION" : "eq" },
        {"TYPE": "HAIR_COLOR",      "NAME": "blond",            "VALUE": true,          "CONDITION" : "eq" },
        {"TYPE": "QUEST",           "NAME": "DADDYSGIRL",       "VALUE": "COMPLETED",   "CONDITION" : "eq" }
    ],
    "INTRO" :
        "NPC_NAME smiles at you and says s(Well, if it isn't Daddy's little girl. Come here princess and sit on Daddy's lap, he has a \
    nice surprise for you in his pants.)",
    "SCENES" : [
        {
            "ID" : "SCENE01",
            "TRIGGERS" :[ ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [
                { "TAG" : "A", "TYPE" : "SKILL", "NAME" : "Seduction", "DIFFICULTY" : 60, "REWARD" : "MONEY", "R_NAME" : "MONEY", "VALUE" : 50, "OPT" : 0 }
            ],
            "POST" : [
                { "TYPE" : "SKILL_XP", "NAME" : "Seduction",    "VALUE" :  50,  "OPT" : "TAG_A"}
            ],
            "START" :
                "You flounce across the floor in NPC_NAME's direction taking care to put your nASS and nBUST to their maximum \
                use with the exaggerated movement. Once there, you abruptly turn around and lift up your skirt, giving NPC_NAME \
                a look at your derriere and the words, 'I @@color:pink;&#9825;@@ Daddy!' emblazoned on your panties. sp((Like what \
                you see Daddy?) you say with a giggle, earning you a playful swat on the rump. ",
            "RESULTS" : [
                {"A": 50,   "TEXT": "You're @@color:red;not sure@@ if your display was effective or not, but NPC_NAME at least seems \
                interested. " },
                {"A": 500,  "TEXT": "A quick peek at NPC_NAME's lap confirms that his cock is already tenting his trousers. It seems \
                your little display was @@color:green;very effective@@. "  }
            ],
            "END" : ""
        },
        {
            "ID" : "SCENE02",
            "TRIGGERS" :[ ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [
                { "TAG" : "B", "TYPE" : "SKILL", "NAME" : "HandJobs", "DIFFICULTY" : 60, "REWARD" : "MONEY", "R_NAME" : "MONEY", "VALUE" : 50, "OPT" : 0 }
            ],
            "POST" : [
                { "TYPE" : "SKILL_XP", "NAME" : "HandJobs",    "VALUE" :  50,  "OPT" : "TAG_B"}
            ],
            "START" :
                "NPC_NAME pulls you into his lap and starts roughly groping you. You let out a well acted girlish giggle and say \
            sp(Sheesh Daddy!You're all handsy today!) and then you proceed to make quite a show of rubbing your ass in circles on \
            his crotch. It doesn't take long before you hear NPC_NAME's breath start to become more strained and you gasp, \
            sp(Ooh Daddy! Something hard is poking me in the bottom!)\n\n\
            NPC_NAME says s(That's my... uh....) he moans softly and continues s(My... trouser snake!)\n\n\
            You give out another fake gasp. sp(Wow! What's that Daddy? Can I see?) Without waiting for a response you get down on \
            your knees and start stroking NPC_NAME's cock through his pants. sp(Gee Daddy, Mr. Snake is getting so big and hard now, \
            I'm going to let him out, okaaaaay?)\n\n\
            NPC_NAME merely nods as you unhitch his trousers, his thick meat pole springing up and flinging a droplet of pre-cum at \
            your forehead. You give out a fake gasp of surprise and cover your mouth with your free hand, earning you a short laugh \
            for your performance. ",
            "RESULTS" : [
                {"B": 50,   "TEXT": "Without being asked to, you quickly start to work your fingers up and down NPC_NAME's shaft. \
                It's hot and hard to the touch and you find yourself @@color:red;somewhat distracted@@ by it's girth. You barely \
                notice that NPC_NAME is starting to get more agitated than aroused."},
                {"B": 500,  "TEXT": "Without being asked to, you quickly start to work your fingers up and down NPC_NAME's shaft. \
                You take your time and gently massage the underside of his cock, making sure to stop every so often to give it a \
                long and drool laden lick to aid in lubrication. Your ministrations @@color:green;quickly have the desired effect@@ \
                and soon NPC_NAME is panting and moaning in arousal."}
            ],
            "END": "sp(Daddy, Mr. Snake looks so red and angry, what do you think I should do?) you ask sweetly. NPC_NAME does his \
            best to collect his thoughts under your erotic onslaught and responds s(He's mad because he is so filled with venom, \
            Princess. Why don't you do Daddy a favor and see if you can suck it all out?)",
        },
        {
            "ID" : "SCENE03",
            "TRIGGERS" :[ ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [
                { "TAG" : "C", "TYPE" : "SKILL", "NAME" : "BlowJobs", "DIFFICULTY" : 60, "REWARD" : "MONEY", "R_NAME" : "MONEY", "VALUE" : 50, "OPT" : 0 }
            ],
            "POST" : [
                { "TYPE" : "SKILL_XP",       "NAME" : "BlowJobs",   "VALUE" :  50,  "OPT" : "TAG_C"},
                { "TYPE" : "NPC_STAT",   "NAME" : "Mood",       "VALUE" :  20,  "OPT" : "TAG_C" },
                { "TYPE" : "NPC_STAT",   "NAME" : "Lust",       "VALUE" :  20,  "OPT" : "TAG_C" }
            ],
            "START" :
                "At NPC_NAME's prompting, you engulf his member with your mouth, making sure to play it up with a extremely girlish \
            squeal. You take your time at first, making sure to cover his member with your saliva and slowly stretching your mouth \
            to accommodate his meaty cock. It's a struggle to get it fully past your lips without scraping it with your teeth, but \
            eventually you manage to establish a good rhythm. You feel NPC_NAME wrap his hand in your hair, pushing your head deep \
            into his crotch while he starts moaning...s(GF_NAME... oh GF_NAME)\n\n\
            Is this for real? Is the perverted old man fantasizing about his own daughter? As disturbing as this information is, you \
            don't have much time to ponder it as you feel NPC_NAME's cock swell in your mouth, poking against the back of your \
            throat. ",
            "RESULTS" : [
                {"C": 50,   "TEXT": "You do your best to suppress your gag reflex and accept his member, @@color:red;but it's \
                difficult@@ and soon your eyes are filled with tears and you are struggling to get breath."},
                {"C": 500,  "TEXT": "You @@color:green;expertly suppress your gag reflex@@ and easily accept his member deep into your \
                throat. Soon your head is pistoning up and down on his shaft and the room is filled with the lewd sounds of his \
                panting and your face being fucked."}
            ],
            "END": "Long minutes pass, but eventually NPC_NAME firmly grasps the sides of your head and thrusts deeply into your \
            throat. In your oxygen deprived state it barely registers that this cock is twitching and spewing what feels like a \
            literal bucket of semen straight into your gut. You struggle to breathe through your nose while waiting for your \
            customer to finally be spent and are relieved when you finally feel the raging hardness in your mouth start to soften. \
            As soon as NPC_NAME's iron grip goes slack, you remove your mouth from his dick with a gasp and an audible 'pop'. "
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
    "END": "NPC_NAME is reclining in his chair, his face sweaty and flushed. You straighten up your clothing and use a small \
    handkerchief to wipe the drool and errant cum from your clothing and face.\n\n\
    sp(So Daddy, how about some allowance for widdle ol me?) you say in your best little girl voice. NPC_NAME doesn't respond but \
    he moves to his desk and takes out a bag of coins, counting out JOB_PAY and placing them in your hands.\n\n\
    s(Come back some time dear,) he says after catching his breath. You nod eagerly and tell him you always have time to play with \
    'Daddy' before taking your leave.",
    "JOB_RESULTS" : [ ]
};
