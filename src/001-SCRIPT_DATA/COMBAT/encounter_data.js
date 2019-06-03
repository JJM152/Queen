App.Combat.EncounterData['TEST_FIGHT_1'] = {
    Enemies: [ "Champion Siren" ],
    Fatal: false,
    WinPassage: "CombatWinTest",
    LosePassage: "Deck",
    Intro: "You step up to the ring, ready to fight. ENEMY_0 scoffs at you."
};

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
};

// Kraken Event on the Salty Mermaid
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
};

// Siren attack on the Salty Mermaid
App.Combat.EncounterData['SirenAttack'] = {
    Enemies: [ "Siren", "Siren" ],
    Fatal: false,
    WinPassage: "CombatWinSiren",
    LosePassage: "CombatLoseSiren",
    Intro: "You are surrounded!",
    LootMessage: "Scattered on the ground you find the following items...",
    Loot: [ 
        {
            Chance: 100,
            Type: 'Coins',
            Tag: null,
            Min: 50,
            Max: 175
        },
        {
            Chance: 100,
            Type: 'Random',
            Tag: null,
            Min: 100,
            Max: 200
        },
        {
            Chance: 80,
            Type: 'Random',
            Tag: null,
            Min: 100,
            Max: 200
        },
        {
            Chance: 50,
            Type: 'DRUGS',
            Tag: 'siren elixir',
            Min: 1,
            Max: 2
        },
     
    ],
    WinHandler : function() {
        setup.player.Phase = 4;
        setup.player.GetNPC('Crew').AdjustStat('Mood', 10);
        setup.player.GetNPC('Captain').AdjustStat('Mood', 10);
        setup.player.GetNPC('FirstMate').AdjustStat('Mood', 10);
        setup.player.GetNPC('Cook').AdjustStat('Mood', 10);
        setup.player.GetNPC('Quartermaster').AdjustStat('Mood', 10);
    },
    LoseHandler : function() { //The crew is slightly happy you helped them out.
        setup.player.Phase = 4;
        setup.player.GetNPC('Crew').AdjustStat('Mood', 5);
        setup.player.GetNPC('Captain').AdjustStat('Mood', 5);
        setup.player.GetNPC('FirstMate').AdjustStat('Mood', 5);
        setup.player.GetNPC('Cook').AdjustStat('Mood', 5);
        setup.player.GetNPC('Quartermaster').AdjustStat('Mood', 5);
    },
    FleeHandler : function() {
        setup.player.Phase = 4;
        setup.player.GetNPC('Crew').AdjustStat('Mood', -5);
        setup.player.GetNPC('Captain').AdjustStat('Mood', -5);
        setup.player.GetNPC('FirstMate').AdjustStat('Mood', -5);
        setup.player.GetNPC('Cook').AdjustStat('Mood', -5);
        setup.player.GetNPC('Quartermaster').AdjustStat('Mood', -5);
    }
};

// Pirate Attack on the Salty Mermaid
App.Combat.EncounterData['PirateAttack'] = {
    Enemies: [ "Pirate", "Pirate" ],
    Fatal: false,
    WinPassage: "CombatWinPirate",
    LosePassage: "CombatLosePirate",
    Intro: "You are surrounded! ENEMY_0 jeers at you, ready for a fight!",
    LootMessage: "Scattered on the ground you find the following items...",
    Loot: [ 
        {
            Chance: 100,
            Type: 'Coins',
            Tag: null,
            Min: 50,
            Max: 125
        },
        {
            Chance: 100,
            Type: 'Random',
            Tag: null,
            Min: 100,
            Max: 200
        },
        {
            Chance: 80,
            Type: 'Random',
            Tag: null,
            Min: 100,
            Max: 200
        },
        {
            Chance: 60,
            Type: 'Random',
            Tag: null,
            Min: 100,
            Max: 200
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
};

// Kipler Duel
App.Combat.EncounterData['KIPLER_DUEL'] = {
    Enemies: [ "Kipler" ],
    Fatal: false,
    WinPassage: "CombatWinKiplerDuel",
    LosePassage: "CombatLoseKiplerDuel",
    Intro: "You follow <span style='color:cyan;'>Kipler</span> out onto the deck, a small crowd assembles to watch your duel",
    WinHandler : function() {
        setup.player.NextPhase(1);
        setup.player.QuestFlags['KIPLER_DEFEATED_SUB_QUEST'] = 'COMPLETED';
        setup.player.GetNPC('Crew').AdjustStat('Mood', 20);
    },
    LoseHandler : function() { 
        setup.player.NextPhase(1);
    },
    FleeHandler : function() {
        setup.player.NextPhase(1);
    }
};

// Mamazon Quest Encounter
App.Combat.EncounterData['GlutezonAmbush'] = {
    Enemies: [ "Weak Glutezon", "Weak Glutezon", "Weak Glutezon" ],
    Fatal: true,
    WinPassage: "CombatWinMamazonQuest",
    LosePassage: "CombatLoseMamazonQuest",
    Intro: "You leap from your hiding spot and engage with the raiders!",
    WinHandler : function() {
        setup.player.NextPhase(1);
        setup.player.QuestFlags['MAMAZON_CHAMP_SUB1'] = 'COMPLETED';
        setup.player.GetNPC('Bustilla').AdjustStat('Mood', 20);
        setup.player.GetNPC('Emi Bigwuns').AdjustStat('Mood', 20);
    },
    LoseHandler : function() { 
        setup.player.NextPhase(1);
    },
    FleeHandler : function() {
        setup.player.NextPhase(1);
    }
};

// Glutezon Quest Encounter
App.Combat.EncounterData['MamazonAmbush'] = {
    Enemies: [ "Weak Mamazon", "Weak Mamazon" ],
    Fatal: true,
    WinPassage: "CombatWinGlutezonQuest",
    LosePassage: "CombatLoseGlutezonQuest",
    Intro: "You leap from your hiding spot and engage with the seductresses!",
    WinHandler : function() {
        setup.player.NextPhase(1);
    },
    LoseHandler : function() { 
        setup.player.NextPhase(1);
    },
    FleeHandler : function() {
        setup.player.NextPhase(1);
    }
};

// Boobpire street encounter
App.Combat.EncounterData['BoobpireStreets'] = {
    Enemies: [ "Boobpire" ],
    Fatal: false,
    WinPassage: "CombatWinBoobpireStreets",
    LosePassage: "CombatLoseBoobpireStreets",
    Intro: "Suddenly, the woman corners you in an alley and reveals herself to be a dreaded <span style='color:hotpink'>Boobpire</span>!",
    LootMessage: "Scattered on the ground you find the following items...",
    Loot: [ 
        {
            Chance: 100,
            Type: 'Coins',
            Tag: null,
            Min: 50,
            Max: 250
        },
        {
            Chance: 100,
            Type: 'Random',
            Tag: null,
            Min: 150,
            Max: 250
        },
        {
            Chance: 80,
            Type: 'DRUGS',
            Tag: 'siren elixir',
            Min: 1,
            Max: 1,
        }
    ],
    WinHandler : function() {
        setup.player.NextPhase(1);
    },
    LoseHandler : function() {
        setup.player.AdjustBodyXP('Bust', -200); 
        setup.player.NextPhase(1);
    },
    FleeHandler : function() {
        setup.player.NextPhase(1);
    }
};

//Bertie Quest Encounter - Queen's Favor Part 2
App.Combat.EncounterData['QueenFavorAmbush'] = {
    Enemies: [ "HoodedAssassain" ],
    Fatal: true,
    WinPassage: "CombatWinQueenFavorAmbush",
    LosePassage: "CombatLoseQueenFavorAmbush",
    Intro: "The hooded man leaps to attack you!",
    WinHandler : function() {
    },
    LoseHandler : function() { 
    },
    FleeHandler : function() {

    }
};