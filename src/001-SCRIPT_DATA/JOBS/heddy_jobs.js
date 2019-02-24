App.Data.JobData["ISLA_MASCOT"] = {
    "ID": "ISLA_MASCOT",
    "TITLE": "Store Mascot",
    "GIVER": "IslaShopKeeper",
    "PAY" : 40,
    "RATING" : 3, // of 5
    "PHASES" : [ 0, 1, 2, 3 ],
    "DAYS"   : 1,
    "HIDDEN" : false,
    "COST" : [
        {
            "TYPE" : "TIME", "VALUE" : 1
        },
        {
            "TYPE" : "STAT", "NAME" : "Energy", "VALUE" : 1
        }
    ],
    "REQUIREMENTS" : [
        {
            "TYPE" : "STYLE", "NAME" : "STYLE", "VALUE" : 50, "CONDITION" : "gte"
        },
        {
            "TYPE" : "STAT", "NAME" : "Femininity", "VALUE" : 10, "CONDITION" : "gte"
        }
    ],
    "START" : "\
        NPC_NAME eyes you up and down, muttering to herself and then nods slowly in your direction.\n\n\
        s(I'll be honest dear, this job doesn't pay much, but it doesn't require much from you either. \
        All you need to do is wear one of the outfits from my shop and beckon customers inside. You can \
        start immediately and I'll pay you at the end of your shift.)\n\n\
        This sounds okay to you. Sure, it's probably not a lot of money, but it should be easy work. \
        But what about that costume...\n\n\
        Almost on cue NPC_NAME reaches behind her counter and pulls out a frilly pink dress along with a \
        pair of the highest platform shoes you've ever seen before. What kind of clothes does this shop sell \
        anyway? Before you can ask, she shoves the garments into your hands and directs you to a back room \
        to change.\n\n\
        Moments later you are standing in front of shop looking like a cross between a little girl and a prostitute. \
        You sigh to yourself and begin to call out to random people passing by.\
        ",
    "INTRO" : "\
        NPC_NAME says, s(I'm looking for help driving customers into the shop. The pay's not great, \
        but it's easy work.)\
        ",
    "SCENES" : [
        {
            "ID" : "SCENE01",
            "TRIGGERS" :[ ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [
                {
                    "TAG" : "A", "TYPE" : "SKILL", "NAME" : "Seduction", "DIFFICULTY" : 50,
                    "REWARD" : "NONE", "R_NAME" : "NONE", "VALUE" : 100, "OPT" : 0
                }
            ],
            "POST" : [
                {
                    "TYPE" : "NPC_STAT", "NAME" : "Mood", "VALUE" : 5, "OPT" : "TAG_A"
                },
                {
                    "TYPE" : "MONEY", "VALUE" : 20, "OPT" : "TAG_A"
                },
                {
                    "TYPE" : "STAT_XP", "NAME" : "Femininity", "VALUE" : 50, "OPT" : "TAG_A"
                }
            ],
            "START" :"\
            Several potential customers, both men and women, walk by. You call out to them extolling the \
            virtues of the wares inside the shop. At least you think you are considering you're not exactly \
            sure what this shop sells, or if it's any good. Still, lying isn't difficult and you do your best.\
            ",
            "RESULTS" : [
                {
                    "A":  33,
                    "TEXT": "\
                        Despite your efforts and outgoing antics @@not very many@@ customers enter the store. \
                        Hopefully it'll be enough."
                    },
                {
                    "A":  66,
                    "TEXT": "You seem to have a @@modest success@@ at cajoling people to check out the store. \
                    It's surprisingly more tiring than you thought to be so outgoing."
                },
                {
                    "A": 500,
                    "TEXT": "You put on your best face and try to exert your 'girlish charm'. It seems to \
                    @@have the desired effect@@ and you draw a respectable amount of customers to the shop."
                }
            ],
            "END" :
            "Eventually your shift ends and you saunter back inside."
        },
        {   // If pass check 'A' and If counter is at MAX (5), reward player and set counter to 0.
            "ID" : "SCENE04a",
            "TRIGGERS" :[
                {
                    "TYPE" : "TAG", "NAME" : "A", "VALUE" : 100, "CONDITION" : "gte"
                },
                {
                    "TYPE" : "COUNTER", "NAME" : "HEDDY_LOOT", "VALUE" : 5, "CONDITION" : "gte"
                }
            ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [ ],
            "POST" : [
                {
                    "TYPE" : "FLAG", "NAME" : "HEDDY_LOOT", "VALUE" : 0, "OPT" : "SET"
                },
                {
                    "TYPE" : "FLAG", "NAME" : "HEDDY_REWARD", "VALUE" : 1, "OPT" : "SET"
                },
                {
                    "TYPE" : "LOOT_BOX", "NAME" : "common sissy loot box",   "VALUE" :   1
                }
            ],
            "START" :   "\
                NPC_NAME says, s(Here, you've earned this PLAYER_NAME.) She hands you a small novelty gift box \
                shaped like a treasure chest, you wonder what's inside it?\
                ",
            "END" : "",
            "RESULTS" : [ ]
        },
        {   // If passed both cooking checks then increment counter. Doesn't trigger if the counter is already at MAX (5) or the reward has been given this time.
            "ID" : "SCENE04b",
            "TRIGGERS" :[
                {
                    "TYPE" : "TAG", "NAME" : "A", "VALUE" : 100, "CONDITION" : "gte"
                },
                {
                    "TYPE" : "TAG", "NAME" : "B", "VALUE" : 100, "CONDITION" : "gte"
                },
                {
                    "TYPE" : "COUNTER", "NAME" : "HEDDY_LOOT", "VALUE" : 4, "CONDITION" : "lte"
                },
                {
                    "TYPE" : "FLAG", "NAME" : "HEDDY_REWARD",  "OPT" : "NOT_SET"
                }
            ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [ ],
            "POST" : [
                {
                    "TYPE" : "COUNTER", "NAME" : "HEDDY_LOOT", "VALUE" :   1,  "OPT" : 1
                }
            ],
            "START" : "\
                NPC_NAME says, s(Nice work today. You really brought in those customers. Keep it up and I \
                    might slip you a little bit something extra...)\
                    ",
            "END" : "",
            "RESULTS" : [ ]
        },
        {   // Just unset the flag that shows we received loot and make sure we clear the counter.
            "ID" : "SCENE04c",
            "TRIGGERS" :[
                {
                    "TYPE" : "FLAG", "NAME" : "HEDDY_REWARD", "OPT" : "SET"
                }
            ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [ ],
            "POST" : [
                {
                    "TYPE" : "FLAG",   "NAME" : "HEDDY_REWARD",  "OPT" : "DELETE"
                }
            ],
            "START" : "",
            "END" : "",
            "RESULTS" : [ ]
        }
    ],
    "END" : "\
        NPC_NAME comes up to you and hands you your pay for the shift. JOB_RESULTS",
    "JOB_RESULTS" : [
        {
            "A":  33,
            "TEXT": "It seems that she was a @@little disappointed@@ in the turn out, but hey at least you still\
             got paid."
            },
        {
            "A":  66,
            "TEXT": "It appears you did @@reasonably well@@ and the pay reflects that."
        },
        {
            "A": 500,
            "TEXT": "You definitely did a @@good job@@ and the pay reflects that."
        }
    ]
};
