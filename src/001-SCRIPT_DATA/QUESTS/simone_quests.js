App.Data.Quests["SIMONE_MISSING_FRIEND"] = {
    "ID": "SIMONE_MISSING_FRIEND",
    "Title": "Simone's Missing Friend",
    "GIVER": "Simone",
    "PRE": [ ],
    "POST": [ ],
    "CHECKS": [
        {
            "TYPE": "ITEM", "NAME": "QUEST/14 inch purple dildo", "VALUE": 1
        }
    ],
    "ON_ACCEPT" : [],
    "REWARD": [
        {
            "REWARD_TYPE": "MONEY", "AMOUNT": 200
        },
        {
            "REWARD_TYPE" : "MOOD", "NAME" : "Simone", "AMOUNT" : 15
        },
        {
            "REWARD_TYPE": "ITEM_CHOICE", "TYPE": "LOOT_BOX", "NAME": "legendary food loot box", "AMOUNT": 1
        },
        {
            "REWARD_TYPE": "ITEM_CHOICE", "TYPE": "LOOT_BOX", "NAME": "legendary lolita loot box", "AMOUNT": 1
        },
        {
            "REWARD_TYPE": "ITEM_CHOICE", "TYPE": "LOOT_BOX", "NAME": "legendary sissy loot box", "AMOUNT": 1
        }
    ],
    "INTRO":"\
        NPC_NAME eyes you up and down.\n\n\
        s(You look like a well-traveled slut,) she says. s(Perhaps you can help me with a little problem?) \
        She begins her tale.\n\n\
        s(Despite what you might think, being a Madame of a bunch of whores doesn't give you much time for \
        what we might call 'personal gratification'. Up until recently I had a...) she pauses for a moment \
        and then continues, s(Let's call it a 'special tool' that helped me take the edge off. \
        s(One of the sluts who worked here decided to leave my employ last month and in the process of looting \
        as much coin as she could, she also made off with my 'friend'. I'm sure it was just because she's a \
        spiteful slattern.)\n\n\
        You think you know where this is heading...\n\n\
        s(I've looked for a replacement, but they've all been... lacking. Tell you what, PLAYER_NAME, \
        if you can find me a replacement, and it really has to be huge you see, \
        then I'll reward you handsomely as well as let you work here as a free agent.)\n\n\
        It's an interesting proposition, that's for sure, but seriously... would this woman know one dildo from \
        another? You pause for a moment realizing that you can tell the differences between the cocks of most \
        of the pirates on the <span style='color:cyan'>Salty Mermaid</span> and decide that maybe she's on to \
        something.\
        ",
    "MIDDLE" : "\
        NPC_NAME says, s(Hey, PLAYER_NAME, how does the search go? I hope you find something soon, the boys \
        around here just can't measure up, if you know what I mean.)\
        ",
    "FINISH":"\
        NPC_NAME says, s(Goodness look at the size of this thing! Ahh... he's perfect PLAYER_NAME!)\n\n\
        For a moment, you think NPC_NAME is about to swoon, however she recovers and tears her eyes \
        away from the giant purple dildo and locks them on you.\n\n\
        s(Like I promised, I'll let you work out of my bar when you're in town and hell, I'll throw in a \
        special reward as well. I'm sure there'll be something \
        inside one of these that an enterprising whore like yourself can find useful.\
        ",
    "JOURNAL_ENTRY": "\
        NPC_NAME from <span style='color:gold'>Port Royale</span> has asked you to find her a 'replacement' for \
        her 'special tool' that was stolen from her room. The only real requirement she mentioned is \
        that it needs to be 'huge'.\
        ",
    "JOURNAL_COMPLETE": "\
        You're not too sure how you feel about handing in your fiance's secret dildo to a complete stranger. \
        On one hand, it's kind of disgusting, on the other hand now you can whore out of the \
        <span style='color:gold'>Lusty Lass</span>, which is... well, honestly, kind of disgusting as well. \
        Win some, lose some.\
        "
};

App.Data.Quests["SIMONE_CUSTOMER_SERVICE"] = {
    "ID": "SIMONE_CUSTOMER_SERVICE",
    "Title": "Customer Service - The Lusty Lass",
    "GIVER": "Simone",
    "PRE": [
        {
            "TYPE" : "QUEST_FLAG", "NAME" : "SIMONE_JOB_1", "VALUE" : "COMPLETED"
        },
        {
            "TYPE" : "QUEST_FLAG", "NAME" : "SIMONE_JOB_2", "VALUE" : "COMPLETED"
        },
        {
            "TYPE" : "QUEST_FLAG", "NAME" : "SIMONE_JOB_3", "VALUE" : "COMPLETED"
        },
        {
            "TYPE" : "QUEST_FLAG", "NAME" : "SIMONE_JOB_4", "VALUE" : "COMPLETED"
        },
        {
            "TYPE" : "QUEST_FLAG", "NAME" : "SIMONE_MISSING_FRIEND", "VALUE" : "COMPLETED"
        }
    ],
    "POST": [ ],
    "CHECKS": [
        {
            "TYPE": "TRACK_CUSTOMERS",  "NAME": "LustyLass", "VALUE": 20
        }
    ],
    "ON_ACCEPT" : [
        {
            "TYPE" : "TRACK_CUSTOMERS", "NAME" : "LustyLass"
        }
    ],
    "REWARD": [
        {
            "REWARD_TYPE": "MONEY", "AMOUNT": 1000
        },
        {
            "REWARD_TYPE" : "MOOD", "NAME" : "Simone", "AMOUNT" : 15
        },
        {
            "REWARD_TYPE" : "SLOT"
        },
        {
            "REWARD_TYPE": "ITEM", "TYPE": "QUEST", "NAME": "14 inch purple dildo", "AMOUNT": 1
        },
        {
            "REWARD_TYPE": "ITEM_CHOICE", "TYPE": "REEL", "NAME": "RARE_HANDMAIDEN", "AMOUNT": 1
        },
        {
            "REWARD_TYPE": "ITEM_CHOICE", "TYPE": "REEL", "NAME": "RARE_BREATH_MINT", "AMOUNT": 1
        },
        {
            "REWARD_TYPE": "ITEM_CHOICE", "TYPE": "REEL", "NAME": "RARE_ANAL_ANGEL", "AMOUNT": 1
        },
        {
            "REWARD_TYPE": "ITEM_CHOICE", "TYPE": "REEL", "NAME": "RARE_BOOBJITSU_MATRIARCH", "AMOUNT": 1
        },
        {
            "REWARD_TYPE": "ITEM_CHOICE", "TYPE": "REEL", "NAME": "UNCOMMON_CONCUBINE", "AMOUNT": 1
        },
        {
            "REWARD_TYPE": "ITEM_CHOICE", "TYPE": "REEL", "NAME": "LEGENDARY_WHORE", "AMOUNT": 1
        }
    ],
    "INTRO":"\
        NPC_NAME greets you warmly with a smile and says, s(Well, if it isn't PLAYER_NAME? The boys here \
        at the Lass sure can't get enough of you, can they?)\n\n\
        She seems to consider something for a moment and then grabs you by the arm, pulling you in close.\n\n\
        s(You've become pretty popular here and I'm thinkin' there's a way we could both benefit,) she says. \
        The tone of her voice makes you sure that any sort of agreement is definitely going to favor her, but \
        still you're intrigued.\n\n\
        NPC_NAME leads you over to the main floor, looking out upon the clientele gathered for the days \
        festivities. There's a literal throbbing mass of horny men and dozens of girls working the crowd, \
        in more ways than one.\n\n\
        s(Tell you what, you work for me for a bit all proper like - fuck my customers, and fuck them //good//. \
        Drive them crazy. Make it so they can't shut up about the whores here at the \
        <span style='color:gold'>Lusty Lass</span> and I'll give you a cut of the house profits, and maybe a \
        little present. What do you say to that?)\n\n\
        It's an interesting deal, and obviously it's not the first time you've worked for NPC_NAME. You know \
        she pays well and keeps her word. \
        ",
    "MIDDLE" : "\
        NPC_NAME says, s(Hey, PLAYER_NAME, keeping your holes busy I hope? The words starting to get around, \
        just keep at it.)\
        ",
    "FINISH":"\
        NPC_NAME says, s(Nicely done PLAYER_NAME. Just this morning I heard a chaplain talking to a baker \
        outside his stall about the class of sluts we have here and I'm sure we owe a lot of that to you.)\n\n\
        It's dubious praise, but considering your circumstances, you'll take it.\n\n\
        s(Like I promised, here's your cut of the take, oh and also, I threw in a little something extra \
        that'd be of particular use to a working girl like yourself.)\n\n\
        NPC_NAME grins lustily at you. s(You can have this back as well.)\n\n\
        You grimace as she hands you back GF_NAME's <span style='color:purple>14 inch purple dildo</span>.\n\n\
        s(Let's just say I found something bigger) she shudders slightly, a bit of drool starting to drip out \
        of the corner of her mouth. s(And seein the way you work that ass, I figure a hungry slut like you could \
        use a good thick friend)\n\n\
        <<if setup.player.GetStat('STAT', 'Perversion') >= 50>>\
        You know you should be disgusted by this, being given a giant dildo used by two different women, but \
        for some reason you eagerly reach out for it all the same. You never had a chance to properly try out \
        the monster fake cock and you daydream about what it would feel like snaking it's way up your backside.\
        <<else>>\
        You stare at NPC_NAME in disbelief. Are all women on these islands such debased peverts? There's no \
        way you'd want to be in possession of something like that... is there?\
        <</if>>\
        ",
    "JOURNAL_ENTRY": "\
        NPC_NAME has asked you to work at her establishment, whoring for her customers and satisfying them so \
        that they'll spread the word about the experience.\
        ",
    "JOURNAL_COMPLETE": "\
        You completed NPC_NAME's dubious task, screwing and sucking your way through her customer base \
        and helping increase the notoriety of the <span style='color:gold'>Lusty Lass</span>. \
        NPC_NAME was so grateful she gave you a fair sized cut of the profits, as well as a 'special' gift.\
        "
};
