// Part of Bertie's Queen's Favor Part 2
App.Data.Quests["BERTIE_QUEEN_PT2_DELIVERY_B"] = {
    "ID": "BERTIE_QUEEN_PT2_DELIVERY_B", 
    "Title": "Chasing the Thieves",
    "GIVER": "Blythe",
    "PRE": [
        {
            TYPE : "QUEST_FLAG", NAME : "BERTIE_QUEEN_PT2_DELIVERY_A", VALUE : "ACTIVE"
        }
    ],
    "POST": [
        { 
            TYPE : "QUEST", NAME : "BERTIE_QUEEN_PT2_DELIVERY_A", VALUE : "COMPLETE" 
        },
        {
            TYPE: "QUEST_FLAG", NAME: "BERTIE_QUEEN_PT2_INFO", OPT: "SET", VALUE: "ACTIVE"
        },
        { 
            TYPE : "QUEST", NAME : "BERTIE_QUEEN_PT2_INFO_SOLENN", VALUE : "START" 
        },
        { 
            TYPE : "QUEST", NAME : "BERTIE_QUEEN_PT2_INFO_PAOLA", VALUE : "START" 
        },
        { 
            TYPE : "QUEST", NAME : "BERTIE_QUEEN_PT2_INFO_PAPA_BABA", VALUE : "START" 
        },
    ],
    "CHECKS": [
        {
            TYPE: "FLAG", NAME: "BERTIE_QUEEN_PT2_DELIVERY_A", VALUE: "ACTIVE"
        },
        {
            TYPE: "ITEM", NAME: "QUEST/strange parcel", VALUE: 1 
        }
    ],
    "ON_ACCEPT" : [],
    "REWARD": [],
    "INTRO": "",
    "MIDDLE" : "",
    "FINISH": "\
    NPC_NAME sizes you up and then sneers. s(So you're the patsy that <span style='color:cyan'>Petey</span> \
    found to smuggle the goods, eh? Well hand 'em over.)\n\n\
    What? Smuggle the.... you think for a moment about the parcel that you've been carrying around, the \
    one that you were attacked over... is it perhaps some contraband of some sort? You take the package \
    out and stare at it, but NPC_NAME snatches it out of your trembling hands.\n\n\
    NPC_NAME peeks inside and then takes out a note. He then inspects the contents of the parcel a second \
    time and then seemingly satisified that everythign is in order he addresses you.\n\n\
    s(Ha, this is rich... I have to hand it to that bastard <span style='color:cyan'>O'Bannon</span>, here \
    you are trying to track down the thieves who ripped off that hussie <span style='color:cyan'>Bertie</span> \
    and you just helped boost some of her loot!)\n\n\
    ''WAIT, WHAT?''\n\n\
    This is bad, if <span style='color:cyan'>Bertie</span> finds out about this, well there's no telling \
    what she would do, and in fact, all the trust you've tried to establish between the two of you would be \
    all for nothing. Fuck, you fucked up.\n\n\
    NPC_NAME observes the change in your demeanor and then his voice takes on a slight (for him) \
    conciliatory tone. s(Don't sweat it sweet cheeks, this is just <span style='color:cyan'>Petey's</span> \
    way on keeping you off-sides in his little business. We're still going to help you.)\n\n\
    NPC_NAME's words do little to soothe your nerves and you debate just running back to the \
    <span style='color:cyan'>Salty Mermaid</span> to hide under your bunk.\n\n\
    NPC_NAME pull something out of his pocket and stuffs it into your hands. Your fingers tremble as \
    you open it up to see what appears to be a drawing of some kind of bizzare symbols\n\n\
    s(That's your lead) says NPC_NAME, s(All the thieves wore that symbol around their neck and before \
    ye ask, I aint got no idea what it means. Best you try asking around for people who are into \
    that kind of mumbo jumbo.) With a wave of his meaty fist, NPC_NAME dismisses you. It's not a great \
    lead, but at least it's something. The symbol is so unique that //someone/// has to know something \
    about it, right?\
     ",
     "JOURNAL_ENTRY": "HIDDEN",
     "JOURNAL_COMPLETE": "HIDDEN",
};
