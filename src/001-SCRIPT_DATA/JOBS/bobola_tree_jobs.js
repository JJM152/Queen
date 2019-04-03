App.Data.JobData["BOBOLA_SAP"] = {
    "ID": "BOBOLA_SAP",
    "TITLE": "Tap the Sap",
    "GIVER": "Bobola Tree",
    "PAY" : 0,
    "RATING" : 3,
    "PHASES" : [ 0, 1, 2, 3 ],
    "DAYS"   : 1,
    "HIDDEN" : false,
    "COST" : [
        {
            "TYPE" : "TIME",  "VALUE" : 1
        },
        {
            "TYPE" : "STAT",  "NAME" : "Energy", "VALUE" : 4
        }
    ],
    "REQUIREMENTS" : [],
    "INTRO" : "\
        The mighty NPC_NAME looks dark and ominous, do you dare approach it?\
    ",
    "START" : "\
        You carefully approach the dark NPC_NAME, your feet making a slight splashing sound in the ankle deep water. For \
        every step you take forward, the ominous thrumming sound gets louder until you realize it's eminating from the \
        tree itself. At the bottom of the tree you look for a way to extract some sap... it's strange that you were \
        only given a bucket for this task, wouldn't some other kind of tool be necessary?\n\n\
        Too preoccupied pondering your predicament, you fail to notice the creeping presence behind you until it's too \
        late!\n\n\
        You feel a strong gripping pressure on your leg and let out a high pitched screech as you are hoisted into the air! \
        From your upside down position you can see that the NPC_NAME's network of roots are all animated and thrashing \
        around, waving menacingly at you! You open your mouth to scream again, but before you can make a sound one of \
        the thinner roots jams through your pLIPS lips. It's only then that you truely realize the horror that is in \
        store for you.\
    ",
    "SCENES" : [
        {
            "ID" : "Milking 1",
            "TRIGGERS" :[ ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [
                {
                    "TAG" : "MILKING_CHECK_1", "TYPE" : "SKILL", "NAME" : "HandJobs", "DIFFICULTY" : 100
                }

            ],
            "POST" : [ ],
            "START" : "\
            The beast starts to ram it's tentacle deep down your throat, a normal person would probably pass out \
            from the lack of oxygen, but you've been face fucked so many times that you've become accustomed to \
            shallow breathing and the pain of the rape. Suddenly you feel the root become turgid and seize up in \
            your mouth and then undulate, followed by a sensation of something hot being deposited right into your \
            stomach. Being a practiced sissywhore you definitely know what this is and you finally understand \
            why you were given the bucket. As the tentacle removes itself and another one starts to take it's place, \
            you grab it and try to redirect the still dripping 'sap' into the bucket, accompanied by whatever remnants \
            are still trailing from your mouth. Soon the new 'tree cock' in your mouth is pulsating again, another hot \
            load emptying into your stomach. You have no idea how many of these loads you can take before you literally \
            explode with vile demon tree cum, so you start grabbing any nearby tendril and using your best techniques \
            try to jack it off directly into the bucket.\
            ",
            "RESULTS" : [
                {
                    "MILKING_CHECK_1": 50,
                    "TEXT" : "\
                    You're no novice to giving handjobs, but given the circumstances you find it difficult to capture \
                    enough 'sap' in the bucket. You look at the @@small amount@@ and sigh inwardly, just as another root \
                    snakes dangerously close to your ass.\
                    "
                },
                {
                    "MILKING_CHECK_1": 500,
                    "TEXT" : "\
                    Your time spent being a sissywhore aboard the Mermaid has given you ample opportunity to learn how \
                    to jerk off a cock. Sure, these roots are not quite the same thing, but under your ministrations \
                    they still spurt just the same. It takes a few minutes and many more loads to your face, but \
                    eventually you think you've gotten the bucket about @@half way full@@.\
                    "
                }
            ],
            "END" : ""
        },
        {
            "ID" : "Milking 2",
            "TRIGGERS" :[ ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [
                {
                    "TAG" : "MILKING_CHECK_2", "TYPE" : "SKILL", "NAME" : "HandJobs", "DIFFICULTY" : 100
                }

            ],
            "POST" : [ ],
            "START" : "\
            Still wretching and trying to gather your breath, you struggle to escape from the NPC_NAME whilst still \
            holding onto your bucket of precious sap. However, all is for naught as the demon tree pummels you \
            in the gut with one of it's mighty roots, causing your consciousness to dim. It's only through a stroke of \
            luck that your bucket doesn't drop to the ground, but before you can breath a sigh of relief the monster \
            has slithered another tendril into your pEQUIP(Costume|Dress|Pants|Panty|$bare ass). You feel a familiar \
            pressure against your sissyhole and then a sick sensation in your gut as the beast mercilessly drives \
            it's appendage home. You scream for all you're worth, another tendril entering your mouth and depositing \
            a load of hot sticky sap down your gullet. You desperately flail to get the situation under control.\
            ",
            "RESULTS" : [
                {
                    "MILKING_CHECK_2": 50,
                    "TEXT" : "\
                    As the beasts various appendages violate your mouth and ass, you reach out to grab them and try to \
                    direct their spurting liquids into your bucket. Unfortunately @@you don't have much success@@.\
                    "
                },
                {
                    "MILKING_CHECK_2": 500,
                    "TEXT" : "\
                    As the beasts various appendages violate your mouth and ass, you reach out to grab them and try to \
                    direct their spurting liquids into your bucket. With skill borne from countless handjobs you somehow \
                    @@manage to capture a sizable amount@@ of the slimy seed in your bucket.\
                    "
                }
            ],
            "END" : " "
        },
        {
            "ID" : "Final Result",
            "TRIGGERS" :[ ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [
                {
                    "TAG" : "FINAL_RESULT", "TYPE" : "FUNC",
                    "FUN" : function(p, s, c)
                    {
                        return ( c["MILKING_CHECK_1"]["RESULT"] + c["MILKING_CHECK_2"]["RESULT"]);
                    },
                    "VALUE" : 100
                }

            ],
            "POST" : [ ],
            "START" : "\
            The horrid creature seems momentarily sated after having ravaged your asshole. Using this opportunity you \
            twist and extract yourself from it's grip, plumetting to the shallow water below. The drop knocks the \
            wind out of you, but you manage to stagger to your feet only to notice that your bucket has been tipped \
            over and is no longer full. Fetching it anyway, you run to edge of the clearing and ponder what to do.\n\n\
            Suddenly an idea comes over you and push aside your pEQUIP(Costume|Dress|Pants|Panty) and squat over the bucket, \
            doing your best to relax your already gaping sphincter. Within moments you feel something hot and slimy \
            start to descend from your ravaged anus, the first drops making a retched sound as it hits the remaining \
            'sap'.\
            ",
            "RESULTS" : [
                {
                    "FINAL_RESULT": 120,
                    "TEXT" : "\
                    You attempt to aid the process by flexing and opening your ass as far as it can go, but unfortunately \
                    when you look at the result you realize you haven't collected nearly enough of the disgusting purple \
                    fluid. As horrible as it sounds, you may need to go through that ordeal again.\
                    "
                },
                {
                    "FINAL_RESULT": 500,
                    "TEXT" : "\
                    After long minutes of squatting over the bucket, feeling the demon trees seed slipping from your \
                    backside, you look down and realize with a sick sense of relief that the bucket is mostly filled. \
                    You don't know how you could have forced yourself to go through that ordeal again if it wasn't.\
                    "
                }
            ],
            "END" : ""
        },
        {
            "ID" : "Reward Player",
            "TRIGGERS" :[
                {
                    "TYPE" : "TAG", "NAME" : "FINAL_RESULT", "VALUE" : 121, "CONDITION" : "gte"
                }
             ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [],
            "POST" : [
                {
                    "TYPE" : "ITEM", "NAME" : "QUEST/bucket of bobola sap", "VALUE" : 1
                }
             ],
            "START" : "",
            "RESULTS" : [],
            "END" : ""
        }
    ],
    "END" : "",
    "JOB_RESULTS" : []
};
