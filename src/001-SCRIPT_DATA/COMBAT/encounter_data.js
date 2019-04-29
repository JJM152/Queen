App.Combat.EncounterData['TEST_FIGHT_1'] = {
    Enemies: [ "Pirate", 'Mamazon', 'Gluteus' ],
    Fatal: false,
    WinPassage: "Deck",
    LosePassage: "Deck",
    Intro: "You step up to the ring, ready to fight. ENEMY_0 scoffs at you."
}

App.Combat.EncounterData['TEST_FIGHT_2'] = {
    Enemies: [ "Kraken Tentacle", "Kraken Tentacle", "Kraken Tentacle" ],
    Fatal: false,
    WinPassage: "CombatWinTest",
    LosePassage: "Deck",
    Intro: "You are surrounded!",
    LootMessage: "Scattered on the ground you find the following items...",
    Loot: [ 
        {
            Chance: 100,
            Type: 'Coins',
            Tag: null,
            Min: 10,
            Max: 50
        },
        {
            Chance: 100,
            Type: 'Random',
            Tag: null,
            Min: 50,
            Max: 100
        },
        {
            Chance: 80,
            Type: 'FOOD',
            Tag: 'purple tentacle',
            Min: 1,
            Max: 1,
        },
        {
            Chance: 60,
            Type: 'FOOD',
            Tag: 'purple tentacle',
            Min: 1,
            Max: 1,
        },
        {
            Chance: 40,
            Type: 'FOOD',
            Tag: 'purple tentacle',
            Min: 1,
            Max: 1,
        }
    ]
}

App.Combat.EncounterData['KrakenAttack'] = {
    Enemies: [ "Kraken Tentacle", "Kraken Tentacle", "Kraken Tentacle" ],
    Fatal: false,
    WinPassage: "CombatWinKraken",
    LosePassage: "CombatLoseKraken",
    Intro: "You are surrounded!",
    LootMessage: "Scattered on the ground you find the following items...",
    Loot: [ 
        {
            Chance: 100,
            Type: 'Coins',
            Tag: null,
            Min: 10,
            Max: 50
        },
        {
            Chance: 100,
            Type: 'Random',
            Tag: null,
            Min: 50,
            Max: 100
        },
        {
            Chance: 20,
            Type: 'Random',
            Tag: null,
            Min: 50,
            Max: 300
        },
        {
            Chance: 80,
            Type: 'FOOD',
            Tag: 'purple tentacle',
            Min: 1,
            Max: 1,
        },
        {
            Chance: 60,
            Type: 'FOOD',
            Tag: 'purple tentacle',
            Min: 1,
            Max: 1,
        },
        {
            Chance: 40,
            Type: 'FOOD',
            Tag: 'purple tentacle',
            Min: 1,
            Max: 1,
        }
    ],
    WinHandler : function() {
        setup.player.Phase = 1;
        setup.player.GetNPC('Crew').AdjustStat('Mood', 10);
        setup.player.GetNPC('Captain').AdjustStat('Mood', 10);
        setup.player.GetNPC('FirstMate').AdjustStat('Mood', 10);
        setup.player.GetNPC('Cook').AdjustStat('Mood', 10);
        setup.player.GetNPC('Quartermaster').AdjustStat('Mood', 10);
    },
    LoseHandler : function() { //The crew is slightly happy you helped them out.
        setup.player.Phase = 3;
        setup.player.GetNPC('Crew').AdjustStat('Mood', 5);
        setup.player.GetNPC('Captain').AdjustStat('Mood', 5);
        setup.player.GetNPC('FirstMate').AdjustStat('Mood', 5);
        setup.player.GetNPC('Cook').AdjustStat('Mood', 5);
        setup.player.GetNPC('Quartermaster').AdjustStat('Mood', 5);
    },
    FleeHandler : function() {
        setup.player.Phase = 1;
        setup.player.GetNPC('Crew').AdjustStat('Mood', -5);
        setup.player.GetNPC('Captain').AdjustStat('Mood', -5);
        setup.player.GetNPC('FirstMate').AdjustStat('Mood', -5);
        setup.player.GetNPC('Cook').AdjustStat('Mood', -5);
        setup.player.GetNPC('Quartermaster').AdjustStat('Mood', -5);
    }
}