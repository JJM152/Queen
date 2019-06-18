App.Data.Events["PR_BackAlley"] = [
    {
        ID: 'BoobpireAttack',
        FROM: 'Any',
        MAX_REPEAT: 0,
        MIN_DAY: 0,
        MAX_DAY: 0,
        COOL: 5,
        PHASE: [ 2, 3, 4],
        PASSAGE: 'BoobpireEvent',
        CHECK: function(p) {
           return ( p.GetStat('BODY', 'Bust') >= 50 && Math.floor(math.random() * 3) == 0);

        }
    },
];

App.Data.Events["PR_DarkAlley"] = [
    {
        ID: 'BoobpireAttack',
        FROM: 'Any',
        MAX_REPEAT: 0,
        MIN_DAY: 0,
        MAX_DAY: 0,
        COOL: 5,
        PHASE: [ 2, 3, 4],
        PASSAGE: 'BoobpireEvent',
        CHECK: function(p) {
           return ( p.GetStat('BODY', 'Bust') >= 50 && Math.floor(math.random() * 3) == 0);

        }
    },
    {
        ID: 'LevantBoobpireAttack',
        FROM: 'PR_Levant',
        FORCE: true,
        MAX_REPEAT: 1,
        MIN_DAY: 0,
        MAX_DAY: 0,
        COOL: 5,
        PHASE: [ 2, 3, 4],
        PASSAGE: 'LevantBoobpireEvent',
        CHECK: function(p) {
           return (App.Quest.IsCompleted(setup.player, "BERTIE_QUEEN_PT2_INFO_SOLENN"));

        }
    },
];

App.Data.Events["EntertainmentDistrict"] = [
    {
        ID: 'BoobpireAttack',
        FROM: 'Any',
        MAX_REPEAT: 0,
        MIN_DAY: 0,
        MAX_DAY: 0,
        COOL: 5,
        PHASE: [ 2, 3, 4],
        PASSAGE: 'BoobpireEvent',
        CHECK: function(p) {
           return ( p.GetStat('BODY', 'Bust') >= 50 && Math.floor(math.random() * 3) == 0);

        }
    },
];

App.Data.Events["WealthyDistrict"] = [ 
    { 
        ID: 'CourtesanQuestEvent',
        FROM: 'CourtesansGuild',
        MAX_REPEAT: 1,
        MIN_DAY: 0,
        MAX_DAY: 0,
        COOL: 1,
        PHASE: [ 0, 1, 2, 3, 4 ],
        PASSAGE: 'CourtesanQuestEvent',
        CHECK: function(p) {
            return (App.Quest.IsActive(setup.player, "COURTESAN_GUILD_JOIN"));
        }
    }
];

// Queen favor part 2 ambush
App.Data.Events["PortRoyale"] = [ 
    { 
        ID: 'QueenFavorAmbushEvent',
        FROM: 'Deck',
        MAX_REPEAT: 1,
        MIN_DAY: 0,
        MAX_DAY: 0,
        COOL: 1,
        PHASE: [ 0, 1, 2, 3, 4 ],
        PASSAGE: 'QueenFavorAmbushEvent',
        CHECK: function(p) {
            return (App.Quest.IsActive(setup.player, "BERTIE_QUEEN_PT2_DELIVERY_B"));
        }
    }
];