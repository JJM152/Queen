// Fightclub menu
App.Combat.ClubData['Salty Mermaid'] = [
    {
        'Title' : 'Landlubber -  One vs. One.',
        'WinsRequired' : 0,
        'MaxWins' : 2,
        'Bet' : 25,
        'Encounter' : 'Salty Mermaid Landlubber',
    },
    {
        'Title' : 'Swabbie - One vs. One.',
        'WinsRequired' : 2,
        'MaxWins' : 6,
        'Bet' : 25,
        'Encounter' : 'Salty Mermaid Swabbie',
    },
    {
        'Title' : 'Middy - One vs. One.',
        'WinsRequired' : 5,
        'MaxWins' : 10,
        'Bet' : 25,
        'Encounter' : 'Salty Mermaid Middy',
    },
    {
        'Title' : 'Seadog - One vs. One.',
        'WinsRequired' : 8,
        'MaxWins' : 14,
        'Bet' : 25,
        'Encounter' : 'Salty Mermaid Seadog',
    },
    {
        'Title' : 'Marine - One vs. Two.',
        'WinsRequired' : 12,
        'MaxWins' : 17,
        'Bet' : 25,
        'Encounter' : 'Salty Mermaid Marine',
    },
    {
        'Title' : 'Privateer - One vs. Two.',
        'WinsRequired' : 16,
        'MaxWins' : 21,
        'Bet' : 25,
        'Encounter' : 'Salty Mermaid Privateer',
    },
    {
        'Title' : 'Buccaneer - One vs. Two.',
        'WinsRequired' : 20,
        'MaxWins' : 0,
        'Bet' : 25,
        'Encounter' : 'Salty Mermaid Buccaneer',
    },
];

//Enemies that you can bet on.
App.Combat.ClubBetData['Salty Mermaid'] = [
    'Salty Mermaid Landlubber', 'Salty Mermaid Swabbie', 'Salty Mermaid Middy', 'Salty Mermaid Seadog'
];

//Enemies
App.Combat.EnemyData['Salty Mermaid Landlubber'] = {
    Name: 'RANDOM_MALE_NAME',
    Title: 'Landlubber NAME',
    Health: 40,
    MaxHealth: 40,
    Energy: 3,
    Attack: 40,
    Defense: 20,
    MaxStamina: 100,
    Stamina: 100,
    Speed: 50,
    Moves: 'UNARMED',
    Gender: 1,
    Portraits: [ 'pirate_a', 'pirate_b', 'pirate_c', 'pirate_d', 'pugilist_a', 'pugilist_b', 'pugilist_c']   
};

App.Combat.EnemyData['Salty Mermaid Swabbie'] = {
    Name: 'RANDOM_MALE_NAME',
    Title: 'Swabbie NAME',
    Health: 60,
    MaxHealth: 60,
    Energy: 3,
    Attack: 50,
    Defense: 25,
    MaxStamina: 100,
    Stamina: 100,
    Speed: 50,
    Moves: 'UNARMED',
    Gender: 1,
    Portraits: [ 'pirate_a', 'pirate_b', 'pirate_c', 'pirate_d', 'pugilist_a', 'pugilist_b', 'pugilist_c']    
};

App.Combat.EnemyData['Salty Mermaid Middy'] = {
    Name: 'RANDOM_MALE_NAME',
    Title: 'Middy NAME',
    Health: 80,
    MaxHealth: 80,
    Energy: 3,
    Attack: 60,
    Defense: 30,
    MaxStamina: 100,
    Stamina: 100,
    Speed: 50,
    Moves: 'UNARMED',
    Gender: 1,
    Portraits: [ 'pirate_a', 'pirate_b', 'pirate_c', 'pirate_d', 'pugilist_a', 'pugilist_b', 'pugilist_c']    
};

App.Combat.EnemyData['Salty Mermaid Seadog'] = {
    Name: 'RANDOM_MALE_NAME',
    Title: 'Seadog NAME',
    Health: 100,
    MaxHealth: 100,
    Energy: 3,
    Attack: 70,
    Defense: 35,
    MaxStamina: 100,
    Stamina: 100,
    Speed: 50,
    Moves: 'UNARMED',
    Gender: 1,
    Portraits: [ 'pirate_a', 'pirate_b', 'pirate_c', 'pirate_d', 'pugilist_a', 'pugilist_b', 'pugilist_c']    
};

//Encounters
App.Combat.EncounterData['Salty Mermaid Landlubber'] = {
    Enemies: [ "Salty Mermaid Landlubber" ],
    Fatal: false,
    WinPassage: "CombatWinFightClubMermaid",
    LosePassage: "CombatLoseFightClubMermaid",
    Intro: "You step up to the ring, ready to fight. ENEMY_0 scoffs at you.",
    LootMessage: "You claim your victory prize...",
    Loot: [ 
        {
            Chance: 100,
            Type: 'Coins',
            Tag: null,
            Min: 10,
            Max: 50
        },
        {
            Chance: 80,
            Type: 'Random',
            Tag: null,
            Min: 50,
            Max: 100
        },
    ],
    WinHandler : function() {
        setup.player.NextPhase(1);
        App.PR.AddFightClubResult(setup.player, 'Salty Mermaid', 1);
    },
    LoseHandler : function() { 
        setup.player.NextPhase(1);
        App.PR.AddFightClubResult(setup.player, 'Salty Mermaid', 0);
    },
    FleeHandler : function() {
        setup.player.NextPhase(1);
    }
};

App.Combat.EncounterData['Salty Mermaid Swabbie'] = {
    Enemies: [ "Salty Mermaid Swabbie" ],
    Fatal: false,
    WinPassage: "CombatWinFightClubMermaid",
    LosePassage: "CombatLoseFightClubMermaid",
    Intro: "You step up to the ring, ready to fight. ENEMY_0 scoffs at you.",
    LootMessage: "You claim your victory prize...",
    Loot: [ 
        {
            Chance: 100,
            Type: 'Coins',
            Tag: null,
            Min: 20,
            Max: 75
        },
        {
            Chance: 80,
            Type: 'Random',
            Tag: null,
            Min: 75,
            Max: 150
        },
    ],
    WinHandler : function() {
        setup.player.NextPhase(1);
        App.PR.AddFightClubResult(setup.player, 'Salty Mermaid', 1);
    },
    LoseHandler : function() { 
        setup.player.NextPhase(1);
        App.PR.AddFightClubResult(setup.player, 'Salty Mermaid', 0);
    },
    FleeHandler : function() {
        setup.player.NextPhase(1);
    }
};

App.Combat.EncounterData['Salty Mermaid Middy'] = {
    Enemies: [ "Salty Mermaid Middy" ],
    Fatal: false,
    WinPassage: "CombatWinFightClubMermaid",
    LosePassage: "CombatLoseFightClubMermaid",
    Intro: "You step up to the ring, ready to fight. ENEMY_0 scoffs at you.",
    LootMessage: "You claim your victory prize...",
    Loot: [ 
        {
            Chance: 100,
            Type: 'Coins',
            Tag: null,
            Min: 30,
            Max: 100
        },
        {
            Chance: 80,
            Type: 'Random',
            Tag: null,
            Min: 100,
            Max: 200
        },
    ],
    WinHandler : function() {
        setup.player.NextPhase(1);
        App.PR.AddFightClubResult(setup.player, 'Salty Mermaid', 1);
    },
    LoseHandler : function() { 
        setup.player.NextPhase(1);
        App.PR.AddFightClubResult(setup.player, 'Salty Mermaid', 0);
    },
    FleeHandler : function() {
        setup.player.NextPhase(1);
    }
};

App.Combat.EncounterData['Salty Mermaid Seadog'] = {
    Enemies: [ "Salty Mermaid Seadog" ],
    Fatal: false,
    WinPassage: "CombatWinFightClubMermaid",
    LosePassage: "CombatLoseFightClubMermaid",
    Intro: "You step up to the ring, ready to fight. ENEMY_0 scoffs at you.",
    LootMessage: "You claim your victory prize...",
    Loot: [ 
        {
            Chance: 100,
            Type: 'Coins',
            Tag: null,
            Min: 40,
            Max: 130
        },
        {
            Chance: 80,
            Type: 'Random',
            Tag: null,
            Min: 150,
            Max: 250
        },
    ],
    WinHandler : function() {
        setup.player.NextPhase(1);
        App.PR.AddFightClubResult(setup.player, 'Salty Mermaid', 1);
    },
    LoseHandler : function() { 
        setup.player.NextPhase(1);
        App.PR.AddFightClubResult(setup.player, 'Salty Mermaid', 0);
    },
    FleeHandler : function() {
        setup.player.NextPhase(1);
    }
};

App.Combat.EncounterData['Salty Mermaid Marine'] = {
    Enemies: [ "Salty Mermaid Swabbie", "Salty Mermaid Swabbie" ],
    Fatal: false,
    WinPassage: "CombatWinFightClubMermaid",
    LosePassage: "CombatLoseFightClubMermaid",
    Intro: "You step up to the ring, ready to fight. ENEMY_0 scoffs at you.",
    LootMessage: "You claim your victory prize...",
    Loot: [ 
        {
            Chance: 100,
            Type: 'Coins',
            Tag: null,
            Min: 60,
            Max: 150
        },
        {
            Chance: 80,
            Type: 'Random',
            Tag: null,
            Min: 150,
            Max: 250
        },
        {
            Chance: 80,
            Type: 'Random',
            Tag: null,
            Min: 150,
            Max: 250
        },
    ],
    WinHandler : function() {
        setup.player.NextPhase(1);
        App.PR.AddFightClubResult(setup.player, 'Salty Mermaid', 1);
    },
    LoseHandler : function() { 
        setup.player.NextPhase(1);
        App.PR.AddFightClubResult(setup.player, 'Salty Mermaid', 0);
    },
    FleeHandler : function() {
        setup.player.NextPhase(1);
    }
};

App.Combat.EncounterData['Salty Mermaid Privateer'] = {
    Enemies: [ "Salty Mermaid Middy", "Salty Mermaid Middy" ],
    Fatal: false,
    WinPassage: "CombatWinFightClubMermaid",
    LosePassage: "CombatLoseFightClubMermaid",
    Intro: "You step up to the ring, ready to fight. ENEMY_0 scoffs at you.",
    LootMessage: "You claim your victory prize...",
    Loot: [ 
        {
            Chance: 100,
            Type: 'Coins',
            Tag: null,
            Min: 80,
            Max: 200
        },
        {
            Chance: 80,
            Type: 'Random',
            Tag: null,
            Min: 150,
            Max: 250
        },
        {
            Chance: 80,
            Type: 'Random',
            Tag: null,
            Min: 150,
            Max: 250
        },
    ],
    WinHandler : function() {
        setup.player.NextPhase(1);
        App.PR.AddFightClubResult(setup.player, 'Salty Mermaid', 1);
    },
    LoseHandler : function() { 
        setup.player.NextPhase(1);
        App.PR.AddFightClubResult(setup.player, 'Salty Mermaid', 0);
    },
    FleeHandler : function() {
        setup.player.NextPhase(1);
    }
};

App.Combat.EncounterData['Salty Mermaid Buccaneer'] = {
    Enemies: [ "Salty Mermaid Seadog", "Salty Mermaid Seadog" ],
    Fatal: false,
    WinPassage: "CombatWinFightClubMermaid",
    LosePassage: "CombatLoseFightClubMermaid",
    Intro: "You step up to the ring, ready to fight. ENEMY_0 scoffs at you.",
    LootMessage: "You claim your victory prize...",
    Loot: [ 
        {
            Chance: 100,
            Type: 'Coins',
            Tag: null,
            Min: 100,
            Max: 250
        },
        {
            Chance: 80,
            Type: 'Random',
            Tag: null,
            Min: 150,
            Max: 250
        },
        {
            Chance: 80,
            Type: 'Random',
            Tag: null,
            Min: 150,
            Max: 250
        },
    ],
    WinHandler : function() {
        setup.player.NextPhase(1);
        App.PR.AddFightClubResult(setup.player, 'Salty Mermaid', 1);
    },
    LoseHandler : function() { 
        setup.player.NextPhase(1);
        App.PR.AddFightClubResult(setup.player, 'Salty Mermaid', 0);
    },
    FleeHandler : function() {
        setup.player.NextPhase(1);
    }
};