// Weak Goblin
App.Combat.EncounterData['abamond goblin weak'] = {
    Enemies: [ "weak goblin"],
    Fatal: false,
    WinPassage: "CombatAbamondGenericWin",
    LosePassage: "CombatAbamondGenericLoseNonFatal",
    LootMessage: "Scattered on the ground you find the following items...",
    Loot: [ 
        {
            Chance: 100,
            Type: 'Coins',
            Tag: null,
            Min: 1,
            Max: 20
        },
        {
            Chance: 20,
            Type: 'Random',
            Tag: null,
            Min: 50,
            Max: 100
        },
        {
            Chance: 10,
            Type: 'MISC_CONSUMABLE',
            Tag: 'broken rune',
            Min: 1,
            Max: 1,
        }
    ],
    WinHandler : function() {
    },
    LoseHandler : function() { 
        setup.player.AdjustStat('Energy', -1); 
    },
    FleeHandler : function() {
    }
};

// Weak Slime
App.Combat.EncounterData['abamond slime weak'] = {
    Enemies: [ "weak slime"],
    Fatal: false,
    WinPassage: "CombatAbamondGenericWin",
    LosePassage: "CombatAbamondGenericLoseNonFatal",
    LootMessage: "Scattered on the ground you find the following items...",
    Loot: [ 
        {
            Chance: 100,
            Type: 'Coins',
            Tag: null,
            Min: 1,
            Max: 20
        },
        {
            Chance: 20,
            Type: 'Random',
            Tag: null,
            Min: 50,
            Max: 100
        },
        {
            Chance: 10,
            Type: 'MISC_CONSUMABLE',
            Tag: 'broken rune',
            Min: 1,
            Max: 1,
        }
    ],
    WinHandler : function() {
    },
    LoseHandler : function() { 
        setup.player.AdjustStat('Energy', -1); 
    },
    FleeHandler : function() {
    }
};

// Goblin Scout
App.Combat.EncounterData['abamond goblin scout'] = {
    Enemies: [ "goblin scout"],
    Fatal: false,
    WinPassage: "CombatAbamondGenericWin",
    LosePassage: "CombatAbamondGenericLoseNonFatal",
    LootMessage: "Scattered on the ground you find the following items...",
    Loot: [ 
        {
            Chance: 100,
            Type: 'Coins',
            Tag: null,
            Min: 5,
            Max: 35
        },
        {
            Chance: 30,
            Type: 'Random',
            Tag: null,
            Min: 50,
            Max: 125
        },
        {
            Chance: 20,
            Type: 'MISC_CONSUMABLE',
            Tag: 'broken rune',
            Min: 1,
            Max: 1,
        }
    ],
    WinHandler : function() {
    },
    LoseHandler : function() { 
        setup.player.AdjustStat('Energy', -1); 
    },
    FleeHandler : function() {
    }
};

// Blue Slime
App.Combat.EncounterData['abamond blue slime'] = {
    Enemies: [ "blue slime"],
    Fatal: false,
    WinPassage: "CombatAbamondGenericWin",
    LosePassage: "CombatAbamondGenericLoseNonFatal",
    LootMessage: "Scattered on the ground you find the following items...",
    Loot: [ 
        {
            Chance: 100,
            Type: 'Coins',
            Tag: null,
            Min: 5,
            Max: 35
        },
        {
            Chance: 30,
            Type: 'Random',
            Tag: null,
            Min: 50,
            Max: 125
        },
        {
            Chance: 20,
            Type: 'MISC_CONSUMABLE',
            Tag: 'broken rune',
            Min: 1,
            Max: 1,
        }
    ],
    WinHandler : function() {
    },
    LoseHandler : function() { 
        setup.player.AdjustStat('Energy', -1); 
    },
    FleeHandler : function() {
    }
};

// Goblin Hunter
App.Combat.EncounterData['abamond goblin hunter'] = {
    Enemies: [ "goblin hunter"],
    Fatal: false,
    WinPassage: "CombatAbamondGenericWin",
    LosePassage: "CombatAbamondGenericLoseNonFatal",
    LootMessage: "Scattered on the ground you find the following items...",
    Loot: [ 
        {
            Chance: 100,
            Type: 'Coins',
            Tag: null,
            Min: 5,
            Max: 55
        },
        {
            Chance: 30,
            Type: 'Random',
            Tag: null,
            Min: 50,
            Max: 160
        },
        {
            Chance: 30,
            Type: 'MISC_CONSUMABLE',
            Tag: 'broken rune',
            Min: 1,
            Max: 2,
        }
    ],
    WinHandler : function() {
    },
    LoseHandler : function() { 
        setup.player.AdjustStat('Energy', -1); 
    },
    FleeHandler : function() {
    }
};

// Brown Slime
App.Combat.EncounterData['abamond brown slime'] = {
    Enemies: [ "brown slime"],
    Fatal: false,
    WinPassage: "CombatAbamondGenericWin",
    LosePassage: "CombatAbamondGenericLoseNonFatal",
    LootMessage: "Scattered on the ground you find the following items...",
    Loot: [ 
        {
            Chance: 100,
            Type: 'Coins',
            Tag: null,
            Min: 5,
            Max: 55
        },
        {
            Chance: 30,
            Type: 'Random',
            Tag: null,
            Min: 50,
            Max: 160
        },
        {
            Chance: 30,
            Type: 'MISC_CONSUMABLE',
            Tag: 'broken rune',
            Min: 1,
            Max: 2,
        }
    ],
    WinHandler : function() {
    },
    LoseHandler : function() { 
        setup.player.AdjustStat('Energy', -1); 
    },
    FleeHandler : function() {
    }
};

// Goblin Warrior
App.Combat.EncounterData['abamond goblin warrior'] = {
    Enemies: [ "goblin warrior"],
    Fatal: false,
    WinPassage: "CombatAbamondGenericWin",
    LosePassage: "CombatAbamondGenericLoseNonFatal",
    LootMessage: "Scattered on the ground you find the following items...",
    Loot: [ 
        {
            Chance: 100,
            Type: 'Coins',
            Tag: null,
            Min: 15,
            Max: 75
        },
        {
            Chance: 30,
            Type: 'Random',
            Tag: null,
            Min: 80,
            Max: 180
        },
        {
            Chance: 35,
            Type: 'MISC_CONSUMABLE',
            Tag: 'broken rune',
            Min: 1,
            Max: 2,
        }
    ],
    WinHandler : function() {
    },
    LoseHandler : function() { 
        setup.player.AdjustStat('Energy', -1); 
    },
    FleeHandler : function() {
    }
};

// Pink Slime
App.Combat.EncounterData['abamond pink slime'] = {
    Enemies: [ "pink slime"],
    Fatal: false,
    WinPassage: "CombatAbamondGenericWin",
    LosePassage: "CombatAbamondGenericLoseNonFatal",
    LootMessage: "Scattered on the ground you find the following items...",
    Loot: [ 
        {
            Chance: 100,
            Type: 'Coins',
            Tag: null,
            Min: 15,
            Max: 75
        },
        {
            Chance: 30,
            Type: 'Random',
            Tag: null,
            Min: 80,
            Max: 180
        },
        {
            Chance: 35,
            Type: 'MISC_CONSUMABLE',
            Tag: 'broken rune',
            Min: 1,
            Max: 2,
        }
    ],
    WinHandler : function() {
    },
    LoseHandler : function() { 
        setup.player.AdjustStat('Energy', -1); 
    },
    FleeHandler : function() {
    }
};

// Cave Crawler
App.Combat.EncounterData['abamond crawler'] = {
    Enemies: [ "cave crawler"],
    Fatal: false,
    WinPassage: "CombatAbamondGenericWin",
    LosePassage: "CombatAbamondGenericLoseNonFatal",
    LootMessage: "Scattered on the ground you find the following items...",
    Loot: [ 
        {
            Chance: 100,
            Type: 'Coins',
            Tag: null,
            Min: 15,
            Max: 75
        },
        {
            Chance: 30,
            Type: 'Random',
            Tag: null,
            Min: 80,
            Max: 180
        },
        {
            Chance: 40,
            Type: 'MISC_CONSUMABLE',
            Tag: 'broken rune',
            Min: 1,
            Max: 2,
        },
        {
            Chance: 10,
            Type: 'MISC_CONSUMABLE',
            Tag: 'old arrowhead',
            Min: 1,
            Max: 1,
        }
    ],
    WinHandler : function() {
    },
    LoseHandler : function() { 
        setup.player.AdjustStat('Energy', -1); 
    },
    FleeHandler : function() {
    }
};

// Zombie
App.Combat.EncounterData['abamond zombie'] = {
    Enemies: [ "zombie"],
    Fatal: false,
    WinPassage: "CombatAbamondGenericWin",
    LosePassage: "CombatAbamondGenericLoseNonFatal",
    LootMessage: "Scattered on the ground you find the following items...",
    Loot: [ 
        {
            Chance: 100,
            Type: 'Coins',
            Tag: null,
            Min: 15,
            Max: 75
        },
        {
            Chance: 30,
            Type: 'Random',
            Tag: null,
            Min: 80,
            Max: 180
        },
        {
            Chance: 40,
            Type: 'MISC_CONSUMABLE',
            Tag: 'broken rune',
            Min: 1,
            Max: 2,
        },
        {
            Chance: 10,
            Type: 'MISC_CONSUMABLE',
            Tag: 'old arrowhead',
            Min: 1,
            Max: 1,
        }
    ],
    WinHandler : function() {
    },
    LoseHandler : function() { 
        setup.player.AdjustStat('Energy', -1); 
    },
    FleeHandler : function() {
    }
};

// Dark Cave Crawler
App.Combat.EncounterData['abamond dark crawler'] = {
    Enemies: [ "dark cave crawler"],
    Fatal: false,
    WinPassage: "CombatAbamondGenericWin",
    LosePassage: "CombatAbamondGenericLoseNonFatal",
    LootMessage: "Scattered on the ground you find the following items...",
    Loot: [ 
        {
            Chance: 100,
            Type: 'Coins',
            Tag: null,
            Min: 15,
            Max: 75
        },
        {
            Chance: 30,
            Type: 'Random',
            Tag: null,
            Min: 80,
            Max: 180
        },
        {
            Chance: 40,
            Type: 'MISC_CONSUMABLE',
            Tag: 'broken rune',
            Min: 1,
            Max: 2,
        },
        {
            Chance: 20,
            Type: 'MISC_CONSUMABLE',
            Tag: 'old arrowhead',
            Min: 1,
            Max: 1,
        }
    ],
    WinHandler : function() {
    },
    LoseHandler : function() { 
        setup.player.AdjustStat('Energy', -1); 
    },
    FleeHandler : function() {
    }
};

// Dark Zombie
App.Combat.EncounterData['abamond dark zombie'] = {
    Enemies: [ "dark zombie"],
    Fatal: false,
    WinPassage: "CombatAbamondGenericWin",
    LosePassage: "CombatAbamondGenericLoseNonFatal",
    LootMessage: "Scattered on the ground you find the following items...",
    Loot: [ 
        {
            Chance: 100,
            Type: 'Coins',
            Tag: null,
            Min: 15,
            Max: 75
        },
        {
            Chance: 30,
            Type: 'Random',
            Tag: null,
            Min: 80,
            Max: 180
        },
        {
            Chance: 40,
            Type: 'MISC_CONSUMABLE',
            Tag: 'broken rune',
            Min: 1,
            Max: 2,
        },
        {
            Chance: 20,
            Type: 'MISC_CONSUMABLE',
            Tag: 'old arrowhead',
            Min: 1,
            Max: 1,
        }
    ],
    WinHandler : function() {
    },
    LoseHandler : function() { 
        setup.player.AdjustStat('Energy', -1); 
    },
    FleeHandler : function() {
    }
};

// Deep Crawler
App.Combat.EncounterData['abamond deep crawler'] = {
    Enemies: [ "deep cave crawler"],
    Fatal: false,
    WinPassage: "CombatAbamondGenericWin",
    LosePassage: "CombatAbamondGenericLoseNonFatal",
    LootMessage: "Scattered on the ground you find the following items...",
    Loot: [ 
        {
            Chance: 100,
            Type: 'Coins',
            Tag: null,
            Min: 15,
            Max: 75
        },
        {
            Chance: 30,
            Type: 'Random',
            Tag: null,
            Min: 80,
            Max: 180
        },
        {
            Chance: 40,
            Type: 'MISC_CONSUMABLE',
            Tag: 'broken rune',
            Min: 1,
            Max: 2,
        },
        {
            Chance: 30,
            Type: 'MISC_CONSUMABLE',
            Tag: 'old arrowhead',
            Min: 1,
            Max: 1,
        },
        {
            Chance: 10,
            Type: 'MISC_CONSUMABLE',
            Tag: 'glowing crystal',
            Min: 1,
            Max: 1,
        }
    ],
    WinHandler : function() {
    },
    LoseHandler : function() { 
        setup.player.AdjustStat('Energy', -1); 
    },
    FleeHandler : function() {
    }
};

// Deep Zombie
App.Combat.EncounterData['abamond deep zombie'] = {
    Enemies: [ "deep zombie"],
    Fatal: false,
    WinPassage: "CombatAbamondGenericWin",
    LosePassage: "CombatAbamondGenericLoseNonFatal",
    LootMessage: "Scattered on the ground you find the following items...",
    Loot: [ 
        {
            Chance: 100,
            Type: 'Coins',
            Tag: null,
            Min: 15,
            Max: 75
        },
        {
            Chance: 30,
            Type: 'Random',
            Tag: null,
            Min: 80,
            Max: 180
        },
        {
            Chance: 40,
            Type: 'MISC_CONSUMABLE',
            Tag: 'broken rune',
            Min: 1,
            Max: 2,
        },
        {
            Chance: 30,
            Type: 'MISC_CONSUMABLE',
            Tag: 'old arrowhead',
            Min: 1,
            Max: 1,
        },
        {
            Chance: 10,
            Type: 'MISC_CONSUMABLE',
            Tag: 'glowing crystal',
            Min: 1,
            Max: 1,
        }
    ],
    WinHandler : function() {
    },
    LoseHandler : function() { 
        setup.player.AdjustStat('Energy', -1); 
    },
    FleeHandler : function() {
    }
};

// Hobgoblin Chief
App.Combat.EncounterData['abamond hobgoblin chief'] = {
    Enemies: [ "hobgoblin chief"],
    Fatal: false,
    WinPassage: "CombatAbamondGenericWin",
    LosePassage: "CombatAbamondGenericLoseNonFatal",
    LootMessage: "Scattered on the ground you find the following items...",
    Loot: [ 
        {
            Chance: 100,
            Type: 'Coins',
            Tag: null,
            Min: 25,
            Max: 100
        },
        {
            Chance: 30,
            Type: 'Random',
            Tag: null,
            Min: 100,
            Max: 220
        },
        {
            Chance: 40,
            Type: 'MISC_CONSUMABLE',
            Tag: 'broken rune',
            Min: 1,
            Max: 2,
        },
        {
            Chance: 35,
            Type: 'MISC_CONSUMABLE',
            Tag: 'old arrowhead',
            Min: 1,
            Max: 1,
        },
        {
            Chance: 15,
            Type: 'MISC_CONSUMABLE',
            Tag: 'glowing crystal',
            Min: 1,
            Max: 1,
        }
    ],
    WinHandler : function() {
    },
    LoseHandler : function() { 
        setup.player.AdjustStat('Energy', -1); 
    },
    FleeHandler : function() {
    }
};

// Gelatinous Cube
App.Combat.EncounterData['abamond gelatinous cube'] = {
    Enemies: [ "gelatinous cube"],
    Fatal: false,
    WinPassage: "CombatAbamondGenericWin",
    LosePassage: "CombatAbamondGenericLoseNonFatal",
    LootMessage: "Scattered on the ground you find the following items...",
    Loot: [ 
        {
            Chance: 100,
            Type: 'Coins',
            Tag: null,
            Min: 25,
            Max: 100
        },
        {
            Chance: 30,
            Type: 'Random',
            Tag: null,
            Min: 100,
            Max: 220
        },
        {
            Chance: 40,
            Type: 'MISC_CONSUMABLE',
            Tag: 'broken rune',
            Min: 1,
            Max: 2,
        },
        {
            Chance: 35,
            Type: 'MISC_CONSUMABLE',
            Tag: 'old arrowhead',
            Min: 1,
            Max: 1,
        },
        {
            Chance: 15,
            Type: 'MISC_CONSUMABLE',
            Tag: 'glowing crystal',
            Min: 1,
            Max: 1,
        }
    ],
    WinHandler : function() {
    },
    LoseHandler : function() { 
        setup.player.AdjustStat('Energy', -1); 
    },
    FleeHandler : function() {
    }
};

// Hobgoblin Sorcerer
App.Combat.EncounterData['abamond hobgoblin sorcerer'] = {
    Enemies: [ "hobgoblin sorcerer"],
    Fatal: false,
    WinPassage: "CombatAbamondGenericWin",
    LosePassage: "CombatAbamondGenericLoseNonFatal",
    LootMessage: "Scattered on the ground you find the following items...",
    Loot: [ 
        {
            Chance: 100,
            Type: 'Coins',
            Tag: null,
            Min: 25,
            Max: 110
        },
        {
            Chance: 30,
            Type: 'Random',
            Tag: null,
            Min: 100,
            Max: 220
        },
        {
            Chance: 40,
            Type: 'MISC_CONSUMABLE',
            Tag: 'broken rune',
            Min: 1,
            Max: 2,
        },
        {
            Chance: 40,
            Type: 'MISC_CONSUMABLE',
            Tag: 'old arrowhead',
            Min: 1,
            Max: 1,
        },
        {
            Chance: 20,
            Type: 'MISC_CONSUMABLE',
            Tag: 'glowing crystal',
            Min: 1,
            Max: 1,
        },
        {
            Chance: 5,
            Type: 'MISC_CONSUMABLE',
            Tag: 'stone tablet',
            Min: 1,
            Max: 1,
        }
    ],
    WinHandler : function() {
    },
    LoseHandler : function() { 
        setup.player.AdjustStat('Energy', -1); 
    },
    FleeHandler : function() {
    }
};

// Death Jelly
App.Combat.EncounterData['abamond death jelly'] = {
    Enemies: [ "death jelly"],
    Fatal: false,
    WinPassage: "CombatAbamondGenericWin",
    LosePassage: "CombatAbamondGenericLoseNonFatal",
    LootMessage: "Scattered on the ground you find the following items...",
    Loot: [ 
        {
            Chance: 100,
            Type: 'Coins',
            Tag: null,
            Min: 25,
            Max: 110
        },
        {
            Chance: 30,
            Type: 'Random',
            Tag: null,
            Min: 100,
            Max: 220
        },
        {
            Chance: 40,
            Type: 'MISC_CONSUMABLE',
            Tag: 'broken rune',
            Min: 1,
            Max: 2,
        },
        {
            Chance: 40,
            Type: 'MISC_CONSUMABLE',
            Tag: 'old arrowhead',
            Min: 1,
            Max: 1,
        },
        {
            Chance: 20,
            Type: 'MISC_CONSUMABLE',
            Tag: 'glowing crystal',
            Min: 1,
            Max: 1,
        },
        {
            Chance: 5,
            Type: 'MISC_CONSUMABLE',
            Tag: 'stone tablet',
            Min: 1,
            Max: 1,
        }
    ],
    WinHandler : function() {
    },
    LoseHandler : function() { 
        setup.player.AdjustStat('Energy', -1); 
    },
    FleeHandler : function() {
    }
};

// Succubus
App.Combat.EncounterData['abamond succubus'] = {
    Enemies: [ "succubus"],
    Fatal: false,
    WinPassage: "CombatAbamondGenericWin",
    LosePassage: "CombatAbamondGenericLoseNonFatal",
    LootMessage: "Scattered on the ground you find the following items...",
    Loot: [ 
        {
            Chance: 100,
            Type: 'Coins',
            Tag: null,
            Min: 25,
            Max: 110
        },
        {
            Chance: 30,
            Type: 'Random',
            Tag: null,
            Min: 100,
            Max: 220
        },
        {
            Chance: 40,
            Type: 'MISC_CONSUMABLE',
            Tag: 'broken rune',
            Min: 1,
            Max: 2,
        },
        {
            Chance: 40,
            Type: 'MISC_CONSUMABLE',
            Tag: 'old arrowhead',
            Min: 1,
            Max: 1,
        },
        {
            Chance: 20,
            Type: 'MISC_CONSUMABLE',
            Tag: 'glowing crystal',
            Min: 1,
            Max: 1,
        },
        {
            Chance: 10,
            Type: 'MISC_CONSUMABLE',
            Tag: 'stone tablet',
            Min: 1,
            Max: 1,
        }
    ],
    WinHandler : function() {
    },
    LoseHandler : function() { 
        setup.player.AdjustStat('Energy', -1); 
    },
    FleeHandler : function() {
    }
};

// Incubus
App.Combat.EncounterData['abamond incubus'] = {
    Enemies: [ "incubus"],
    Fatal: false,
    WinPassage: "CombatAbamondGenericWin",
    LosePassage: "CombatAbamondGenericLoseNonFatal",
    LootMessage: "Scattered on the ground you find the following items...",
    Loot: [ 
        {
            Chance: 100,
            Type: 'Coins',
            Tag: null,
            Min: 25,
            Max: 110
        },
        {
            Chance: 30,
            Type: 'Random',
            Tag: null,
            Min: 100,
            Max: 220
        },
        {
            Chance: 40,
            Type: 'MISC_CONSUMABLE',
            Tag: 'broken rune',
            Min: 1,
            Max: 2,
        },
        {
            Chance: 40,
            Type: 'MISC_CONSUMABLE',
            Tag: 'old arrowhead',
            Min: 1,
            Max: 1,
        },
        {
            Chance: 20,
            Type: 'MISC_CONSUMABLE',
            Tag: 'glowing crystal',
            Min: 1,
            Max: 1,
        },
        {
            Chance: 10,
            Type: 'MISC_CONSUMABLE',
            Tag: 'stone tablet',
            Min: 1,
            Max: 1,
        }
    ],
    WinHandler : function() {
    },
    LoseHandler : function() { 
        setup.player.AdjustStat('Energy', -1); 
    },
    FleeHandler : function() {
    }
};