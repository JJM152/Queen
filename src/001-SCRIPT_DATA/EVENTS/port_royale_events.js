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