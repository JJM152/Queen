App.Data.JobData["UTICUS_ANAL"] = {
    "ID": "UTICUS_ANAL",
    "TITLE": "Going in the Backdoor",
    "GIVER": "Uticus",
    "PAY" : 0,
    "RATING" : 3,
    "PHASES" : [ 0, 1, 2, 3 ],
    "DAYS"   : 1,
    "HIDDEN" : true,
    "COST" : [
        {
            "TYPE" : "TIME",  "VALUE" : 1
        },
        {
            "TYPE" : "STAT",  "NAME" : "Energy", "VALUE" : 2
        }
    ],
    "REQUIREMENTS" : [
        {
            "TYPE" : "QUEST", "NAME" : "ROYAL_ENTRANCE", "VALUE" : "COMPLETED", "CONDITION" : "eq"
        },
        {
            "TYPE" : "EQUIPPED", "NAME" : "voodoo anal plug"
        }
    ],
    "INTRO" : "\
        You and NPC_NAME have a deal. Keep him happy by letting him fuck your sissy slut ass with his \
        giant cock and he'll let you come and go into the @@color:gold;Governor's Mansion@@ as you please.\
    ",
    "START" : "\
    You approach NPC_NAME, the @@color:purple;enormous rubbery anal plug@@ nestled firmly up your backside. \
    It's special properties having enlarged your sissyhole enough that you now feel confident in the face \
    of the black giants enormous member.\
    ",
    "SCENES" : [
        {
            "ID" : "Ass Rape 1",
            "TRIGGERS" :[ ],
            "TRIGGERS_ANY" : [ ],
            "CHECKS" : [
                {
                    "TAG" : "ANAL_CHECK_1", "TYPE" : "SKILL", "NAME" : "AssFucking", "DIFFICULTY" : 100,
                    "REWARD" : "NPC_STAT", "R_NAME" : "Mood", "VALUE" : 20
                }

            ],
            "POST" : [
                {
                    "TYPE" : "NPC_STAT", "NAME" : "Lust", "VALUE" : -20
                }
            ],
            "START" : "\
            NPC_NAME leans down to your eye level and grins. \n\n\
            s(Oi slut, yer back izzat? Ready to getcha sissyhole pounded but good?)\n\n\
            NPC_NAME doesn't even give you a chance to respond before one of his giant meathooks is pulling you along \
            with him to the side of the building. He leads you to a semi-secluded area shaded by a few willow trees \
            and hidden from view by a large hedge. Once there he pushes you forcefully to your knees with one hand \
            and fishes his pPENIS_100 cock from his trousers. Even flaccid it's larger than any you've ever seen \
            before. At this point it's obvious what he wants and you think it'd be foolish to not comply, so you \
            begin to try and work the massive tool into your mouth, slobbering and drooling all over it until saliva \
            runs down your pEQUIP(Costume|Dress|Shirt|Bra|$bare chest).\n\n\
            NPC_NAME's breathing picks up and he starts to grunt under your administrations. Eventually he grabs you \
            by your hair, forcing you to your feet, and then thrusts you against the side of the building face first. \
            You just barely manage to catch yourself with your hands before you feel him moving your \
            pEQUIP(Costume|Dress|Pants|Panty|$naked ass) to the side and removing your anal plug. \
            Immediately afterwards you feel the biggest cockhead you've ever felt pushing against your sissy-hole.\n\n\
            It's struggle at first, but thanks to the special properties of your @@color:purple;enormous rubbery anal plug@@ \
            your asshole has gaped large enough to accomodate NPC_NAME's giant dong. You shudder as he slowly works \
            his saliva covered tool, inch by inch, up your tender asshole, eventually bottoming out somewhere so \
            deep inside your bowels that you swear you can taste his cockhead. He starts to work his dick in and out \
            of your bottom, slowly at first, but then faster as he builds up steam. Your body shakes and starts to tingle \
            as he approaches the height of frenzy. Perhaps it's the extreme penetration or your hours of training just \
            for this activity, but you spurt your sissy-cum all over the wall in a massive orgasm. Strength leaves your \
            limbs but NPC_NAME keeps fucking you hard for minutes more. Eventually he comes as well, your limp body no \
            more than a fucktoy, a hole attached to a sack of meat used for masturbation. It takes some effort for \
            him to remove his cock from you and when he finally does you are overcome with a feeling of emptyness \
            that is difficult to describe.\
            ",
            "RESULTS" : [
                {
                    "ANAL_CHECK_1": 50,
                    "TEXT" : "\
                    NPC_NAME wipes his massive cock off on your nASS and gives you a good smack to boot.\n\n\
                    s(@@Not Bad@@, slut) he says. s(Come see me again sometime if ya wanna have some fun, eh?)\n\n\
                    NPC_NAME walks away, leaving your cum drenched ass exposed to the air. It takes some time before \
                    you have recovered enough strength in your legs to get upright and carry on.\
                    "
                },
                {
                    "ANAL_CHECK_1": 500,
                    "TEXT" : "\
                    NPC_NAME wipes his massive cock off on your nASS and gives you a good smack to boot.\n\n\
                    s(@@What a nice fuck you are@@, you little slut) he says. s(Come see me again sometime if ya wanna have some fun, eh?)\n\n\
                    NPC_NAME walks away, leaving your cum drenched ass exposed to the air. It takes some time before \
                    you have recovered enough strength in your legs to get upright and carry on.\
                    "
                }
            ],
            "END" : ""
        }
    ],
    "END" : "",
    "JOB_RESULTS" : []
};
