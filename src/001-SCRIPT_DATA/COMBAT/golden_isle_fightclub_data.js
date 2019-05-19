App.Combat.ClubData['Golden Isle'] = [
    {
        'Title' : 'Brawler - One vs. One.',
        'WinsRequired' : 0,
        'MaxWins' : 4,
        'Encounter' : 'Golden Isle Brawler',
    },
    {
        'Title' : 'Boxer - One vs. One.',
        'WinsRequired' : 2,
        'MaxWins' : 6,
        'Encounter' : 'Golden Isle Boxer',
    },
    {
        'Title' : 'Pugilist - One vs. One.',
        'WinsRequired' : 5,
        'MaxWins' : 10,
        'Encounter' : 'Golden Isle Pugilist',
    },
    {
        'Title' : 'Champion - One vs. One.',
        'WinsRequired' : 10,
        'MaxWins' : 0,
        'Encounter' : 'Golden Isle Champion',
    }
];

//Enemies that you can bet on.
App.Combat.ClubBetData['Golden Isle'] = [
    'Golden Isle Brawler', 'Golden Isle Boxer', 'Golden Isle Pugilist', 'Golden Isle Champion'
];

// Enemies
App.Combat.EnemyData['Golden Isle Brawler'] = {
    Name: 'RANDOM_MALE_NAME',
    Title: 'Brawler NAME',
    Health: 60,
    MaxHealth: 60,
    Energy: 3,
    Attack: 60,
    Defense: 30,
    MaxStamina: 100,
    Stamina: 100,
    Speed: 50,
    Moves: 'UNARMED',
    Gender: 1,
    Portraits: [ 'pugilist_a', 'pugilist_b', 'pugilist_c']   
};

App.Combat.EnemyData['Golden Isle Boxer'] = {
    Name: 'RANDOM_MALE_NAME',
    Title: 'Boxer NAME',
    Health: 80,
    MaxHealth: 80,
    Energy: 3,
    Attack: 80,
    Defense: 40,
    MaxStamina: 100,
    Stamina: 100,
    Speed: 50,
    Moves: 'UNARMED',
    Gender: 1,
    Portraits: [ 'pugilist_a', 'pugilist_b', 'pugilist_c']   
};

App.Combat.EnemyData['Golden Isle Pugilist'] = {
    Name: 'RANDOM_MALE_NAME',
    Title: 'Pugilist NAME',
    Health: 100,
    MaxHealth: 100,
    Energy: 3,
    Attack: 100,
    Defense: 50,
    MaxStamina: 100,
    Stamina: 100,
    Speed: 50,
    Moves: 'UNARMED',
    Gender: 1,
    Portraits: [ 'pugilist_a', 'pugilist_b', 'pugilist_c']   
};

App.Combat.EnemyData['Golden Isle Champion'] = {
    Name: 'RANDOM_MALE_NAME',
    Title: 'Champ NAME',
    Health: 120,
    MaxHealth: 120,
    Energy: 3,
    Attack: 120,
    Defense: 60,
    MaxStamina: 100,
    Stamina: 100,
    Speed: 50,
    Moves: 'UNARMED',
    Gender: 1,
    Portraits: [ 'pugilist_a', 'pugilist_b', 'pugilist_c']   
};

// Encounter Descriptions
App.Combat.EncounterData['Golden Isle Brawler'] = {
    Enemies: [ "Golden Isle Brawler" ],
    Fatal: false,
    WinPassage: "CombatWinFightClubGoldenIsle",
    LosePassage: "CombatLoseFightClubGoldenIsle",
    Intro: "You step up to the ring, ready to fight. ENEMY_0 scoffs at you.",
    LootMessage: "You claim your victory prize...",
    Loot: [ 
        {
            Chance: 100,
            Type: 'Coins',
            Tag: null,
            Min: 45,
            Max: 120
        },
        {
            Chance: 100,
            Type: 'Random',
            Tag: null,
            Min: 100,
            Max: 200
        },
    ],
    WinHandler : function() {
        setup.player.NextPhase(1);
        App.PR.AddFightClubResult(setup.player, 'Golden Isle', 1);
    },
    LoseHandler : function() { 
        setup.player.NextPhase(1);
        App.PR.AddFightClubResult(setup.player, 'Golden Isle', 0);
    },
    FleeHandler : function() {
        setup.player.NextPhase(1);
    }
};

App.Combat.EncounterData['Golden Isle Boxer'] = {
    Enemies: [ "Golden Isle Boxer" ],
    Fatal: false,
    WinPassage: "CombatWinFightClubGoldenIsle",
    LosePassage: "CombatLoseFightGoldenIsle",
    Intro: "You step up to the ring, ready to fight. ENEMY_0 scoffs at you.",
    LootMessage: "You claim your victory prize...",
    Loot: [ 
        {
            Chance: 100,
            Type: 'Coins',
            Tag: null,
            Min: 60,
            Max: 140
        },
        {
            Chance: 100,
            Type: 'Random',
            Tag: null,
            Min: 125,
            Max: 250
        },
    ],
    WinHandler : function() {
        setup.player.NextPhase(1);
        App.PR.AddFightClubResult(setup.player, 'Golden Isle', 1);
    },
    LoseHandler : function() { 
        setup.player.NextPhase(1);
        App.PR.AddFightClubResult(setup.player, 'Golden Isle', 0);
    },
    FleeHandler : function() {
        setup.player.NextPhase(1);
    }
};

//Pugilist
App.Combat.EncounterData['Golden Isle Pugilist'] = {
    Enemies: [ "Golden Isle Pugilist" ],
    Fatal: false,
    WinPassage: "CombatWinFightClubGoldenIsle",
    LosePassage: "CombatLoseFightGoldenIsle",
    Intro: "You step up to the ring, ready to fight. ENEMY_0 scoffs at you.",
    LootMessage: "You claim your victory prize...",
    Loot: [ 
        {
            Chance: 100,
            Type: 'Coins',
            Tag: null,
            Min: 80,
            Max: 160
        },
        {
            Chance: 100,
            Type: 'Random',
            Tag: null,
            Min: 150,
            Max: 300
        },
    ],
    WinHandler : function() {
        setup.player.NextPhase(1);
        App.PR.AddFightClubResult(setup.player, 'Golden Isle', 1);
    },
    LoseHandler : function() { 
        setup.player.NextPhase(1);
        App.PR.AddFightClubResult(setup.player, 'Golden Isle', 0);
    },
    FleeHandler : function() {
        setup.player.NextPhase(1);
    }
};

//Champ
App.Combat.EncounterData['Golden Isle Champion'] = {
    Enemies: [ "Golden Isle Champion" ],
    Fatal: false,
    WinPassage: "CombatWinFightClubGoldenIsle",
    LosePassage: "CombatLoseFightGoldenIsle",
    Intro: "You step up to the ring, ready to fight. ENEMY_0 scoffs at you.",
    LootMessage: "You claim your victory prize...",
    Loot: [ 
        {
            Chance: 100,
            Type: 'Coins',
            Tag: null,
            Min: 100,
            Max: 200
        },
        {
            Chance: 100,
            Type: 'Random',
            Tag: null,
            Min: 200,
            Max: 500
        },
    ],
    WinHandler : function() {
        setup.player.NextPhase(1);
        App.PR.AddFightClubResult(setup.player, 'Golden Isle', 1);
    },
    LoseHandler : function() { 
        setup.player.NextPhase(1);
        App.PR.AddFightClubResult(setup.player, 'Golden Isle', 0);
    },
    FleeHandler : function() {
        setup.player.NextPhase(1);
    }
};