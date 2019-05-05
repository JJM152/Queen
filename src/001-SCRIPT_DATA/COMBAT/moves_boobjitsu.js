App.Combat.Moves["BOOBJITSU"] = {
    Engine: App.Combat.Engines.Boobjitsu,
    Jiggle : {
        Name: "Jiggle",
        Description: "\
        Light attack. Distracts enemies.<br>\
        <span style='color:darkred'>DMG LOW</span> \
        <span style='color:darkgoldenrod'>STA LOW</span> \
        <span style='color:cyan'>SPD FAST</span><br>\
        <span style='color:deeppink'>Combo Builder</span>\
        ",
        Icon: "jiggle_icon",
        Stamina: 5,
        Combo: 0, // Costs no combo points
        Speed: 5,
        Damage: 1.0,
        Unlock: function(player) {
                return player.Bust >= 30;   
            },
        Miss: [
                [
                    "You jiggle your nBUST at NPC_NAME, but miss!",
                    "NPC_NAME jiggles NPC_PRONOUN heaving hooters at you, but misses!" 
                ]
            ],
        Hit: [
                [
                    "You jiggle your nBUST at NPC_NAME, distracting them!",
                    "NPC_NAME jiggles NPC_PRONOUN heaving hooters at you! So distracting..." 
                ]
            ]
    },
    Wobble : {
        Name: "Wobble",
        Description: "\
        Light attack. Increases damage.<br>\
        <span style='color:darkred'>DMG LOW</span> \
        <span style='color:darkgoldenrod'>STA MED</span> \
        <span style='color:cyan'>SPD AVERAGE</span><br>\
        <span style='color:deeppink'>Combo Builder</span>\
        ",
        Icon: "wobble_icon",
        Stamina: 10,
        Combo: 0, // Costs no combo points
        Speed: 10,
        Damage: 1.0,
        Unlock: function(player) {
                return player.Bust >= 30;    
            },
        Miss: [
                [
                    "You wobble your nBUST at NPC_NAME, but miss!",
                    "NPC_NAME wobbles NPC_PRONOUN heaving hooters at you, but misses!" 
                ]
            ],
        Hit: [
                [
                    "You wobble your nBUST at NPC_NAME, slapping NPC_PRONOUN violently!",
                    "NPC_NAME wobbles NPC_PRONOUN heaving hooters at you, slaping you violently!" 
                ]
            ]
    },
    "Bust Out" : {
        Name: "Bust Out",
        Description: "\
        Medium attack. Increases Accuracy.<br>\
        Restores combo points after a consumer.<br>\
        <span style='color:darkred'>DMG MED</span> \
        <span style='color:darkgoldenrod'>STA HIGH</span> \
        <span style='color:cyan'>SPD AVERAGE</span><br>\
        <span style='color:deeppink'>Combo Builder</span>\
        ",
        Icon: "bustout_icon",
        Stamina: 15,
        Combo: 0, // Costs no combo points
        Speed: 10,
        Damage: 1.5,
        Unlock: function(player) {
                return player.Bust >= 30;    
            },
        Miss: [
                [
                    "You swing your nBUST at NPC_NAME, but miss!",
                    "NPC_NAME swings NPC_PRONOUN heaving hooters at you, but misses!" 
                ]
            ],
        Hit: [
                [
                    "You swing your nBUST at NPC_NAME, beating them harshly!",
                    "NPC_NAME swings NPC_PRONOUN heaving hooters at you, beating you harshly!" 
                ]
            ]
    },
    Twirl : {
        Name: "Twirl",
        Description: "\
        Strong attack. Increases Damage.<br>\
        Restores health comparable to damage done.<br>\
        <span style='color:darkred'>DMG HIGH</span> \
        <span style='color:darkgoldenrod'>STA HIGH</span> \
        <span style='color:cyan'>SPD VERY SLOW</span><br>\
        <span style='color:deeppink'>Combo Consumer</span>\
        ",
        Icon: "twirl_icon",
        Stamina: 15,
        Combo: 2,
        Speed: 20,
        Damage: 2.0,
        Unlock: function(player) {
                return player.Bust >= 30;    
            },
        Miss: [
                [
                    "You spin around, twirling your nBUST at NPC_NAME, but miss!",
                    "NPC_NAME spins around, twirling PC_PRONOUN heaving hooters at you, but misses!" 
                ]
            ],
        Hit: [
                [
                    "You spin around, twirling your nBUST at NPC_NAME, smashing into them with great force!",
                    "NPC_NAME spins around, twirling NPC_PRONOUN heaving hooters and smashing into you with great force!" 
                ]
            ]
    },
    "Boob Quake" : {
        Name: "Boob Quake",
        Description: "\
        Medium attack. Good chance of Stun.<br>\
        <span style='color:darkred'>DMG MED</span> \
        <span style='color:darkgoldenrod'>STA MED</span> \
        <span style='color:cyan'>SPD SLOW</span><br>\
        <span style='color:deeppink'>Combo Consumer</span>\
        ",
        Icon: "boobquake_icon",
        Stamina: 10,
        Combo: 3,
        Speed: 15,
        Damage: 1.5,
        Unlock: function(player) {
                return player.Bust >= 30;    
            },
        Miss: [
                [
                    "You attempt to grab NPC_NAME with your nBUST, but miss!",
                    "NPC_NAME tries to grab you with PC_PRONOUN jutting jugs, but misses!" 
                ]
            ],
        Hit: [
                [
                    "You grab NPC_NAME inbetween your nBUST and then shimmy wildly!",
                    "NPC_NAME grabs you between NPC_PRONOUN jutting jugs and then shimmies wildly!" 
                ]
            ]
    },
    "Titty Twister" : {
        Name: "Titty Twister",
        Description: "\
        Strong attack. Great chance of Stun.<br>\
        <span style='color:darkred'>DMG HIGH</span> \
        <span style='color:darkgoldenrod'>STA VERY HIGH</span> \
        <span style='color:cyan'>SPD SLOW</span><br>\
        <span style='color:deeppink'>Combo Consumer</span>\
        ",
        Icon: "tittytwister_icon",
        Stamina: 20,
        Combo: 4,
        Speed: 15,
        Damage: 2.5,
        Unlock: function(player) {
                return player.Bust >= 30;    
            },
        Miss: [
                [
                    "You attempt to smash NPC_NAME with your nBUST, but miss!",
                    "NPC_NAME tries to smash you with PC_PRONOUN massive mammaries, but misses!" 
                ]
            ],
        Hit: [
                [
                    "You grab your nBUST with both hands and then smash wildly at NPC_NAME!",
                    "NPC_NAME grabs NPC_PRONOUN massive mammaries with both hands and then smashes wildly at you!" 
                ]
            ]
    },
};
