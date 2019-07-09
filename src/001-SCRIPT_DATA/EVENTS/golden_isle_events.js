App.Data.Events["Portside"] = [
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

App.Data.Events["Bazaar"] = [
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

App.Data.Events["GI_GovernorsMansionInside"] = [
    {
        ID: 'BertieMapStolen',
        FROM: 'GI_GovernorsMansion',
        FORCE: true,
        MAX_REPEAT: 1,
        MIN_DAY: 0,
        MAX_DAY: 0,
        COOL: 5,
        PHASE: [ 2, 3, 4],
        PASSAGE: 'BertieMapStolenEvent',
        CHECK: function(p) {
           if (p.QuestFlags.hasOwnProperty('BERTIE_SISSY_CompletedOn')) {
               let t = p.QuestFlags['BERTIE_SISSY_CompletedOn'] + 2;
               return t <= p.Day;
           }
           return false;
        }
    },
];

App.Data.Events["GoldenIsle"] = [
    {
        ID: 'BertieCourierEvent',
        FROM: 'Any',
        MAX_REPEAT: 0,
        MIN_DAY: 0,
        MAX_DAY: 0,
        COOL: 5,
        PHASE: [ 0, 1, 2, 3, 4],
        PASSAGE: 'BertieCourierEvent',
        CHECK: function(p) {
            if (p.QuestFlags.hasOwnProperty('BERTIE_QUEEN_PT2_CompletedOn')) {
                let t = p.QuestFlags['BERTIE_QUEEN_PT2_CompletedOn'] + 5;
                return t <= p.Day;
            }
            return false;
         }
    },
];