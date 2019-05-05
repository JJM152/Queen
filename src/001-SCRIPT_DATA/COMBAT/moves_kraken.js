App.Combat.Moves["KRAKEN"] = {
    Engine: App.Combat.Engines.Kraken,
    Grab : {
        Name: "Grab",
        Description: "\
        Monster Attack - No Info<br>\
        ",
        Icon: "slash_icon",
        Stamina: 5,
        Combo: 0, // Costs no combo points
        Speed: 5,
        Damage: 0.8,
        Unlock: function(player) {
                return true;   
            },
        Miss: [
                [
                    "BUG - ATTACK NOT USABLE BY PLAYER",
                    "NPC_NAME grabs at you, but misses!" 
                ]
            ],
        Hit: [
                [
                    "BUG - ATTACK NOT USABLE BY PLAYER!",
                    "NPC_NAME grabs you in a slimy grip!"
                ]
            ]
    },
    Strangle: {
        Name: "Strangle",
        Description: "\
        Monster Attack - No Info<br>\
        ",
        Icon: "slash_icon",
        Stamina: 10,
        Combo: 0, // Costs no combo points
        Speed: 10,
        Damage: 1.2,
        Unlock: function(player) {
                return true;   
            },
        Miss: [
                [
                    "BUG - ATTACK NOT USABLE BY PLAYER",
                    "NPC_NAME tries to strangle you, but you break free!" 
                ]
            ],
        Hit: [
                [
                    "BUG - ATTACK NOT USABLE BY PLAYER!",
                    "NPC_NAME wraps around your neck and squeezes!"
                ]
            ]
    },
    Mouth: {
        Name: "Mouth",
        Description: "\
        Monster Attack - No Info<br>\
        ",
        Icon: "slash_icon",
        Stamina: 10,
        Combo: 0, // Costs no combo points
        Speed: 20,
        Damage: 1.5,
        Unlock: function(player) {
                return true;   
            },
        Miss: [
                [
                    "BUG - ATTACK NOT USABLE BY PLAYER",
                    "NPC_NAME tries to jam into your mouth, but you break free!" 
                ]
            ],
        Hit: [
                [
                    "BUG - ATTACK NOT USABLE BY PLAYER!",
                    "NPC_NAME slides into your mouth and starts to throat fuck you!"
                ]
            ]
    },
    Ejaculate1: {
        Name: "Ejaculate1",
        Description: "\
        Monster Attack - No Info<br>\
        ",
        Icon: "slash_icon",
        Stamina: 10,
        Combo: 0,
        Speed: 20,
        Damage: 0,
        Unlock: function(player) {
                return true;   
            },
        Miss: [
                [
                    "BUG - ATTACK NOT USABLE BY PLAYER",
                    "NPC_NAME starts to ejaculate into your throat, but you move your head and break free!" 
                ]
            ],
        Hit: [
                [
                    "BUG - ATTACK NOT USABLE BY PLAYER!",
                    "NPC_NAME tenses up and starts to ejaculate into your mouth, pumping a thick stream of goo into your stomach!"
                ]
            ]
    },
    Ass: {
        Name: "Ass",
        Description: "\
        Monster Attack - No Info<br>\
        ",
        Icon: "slash_icon",
        Stamina: 10,
        Combo: 0, // Costs no combo points
        Speed: 20,
        Damage: 1.5,
        Unlock: function(player) {
                return true;   
            },
        Miss: [
                [
                    "BUG - ATTACK NOT USABLE BY PLAYER",
                    "NPC_NAME tries to jam into your asshole, but you break free!" 
                ]
            ],
        Hit: [
                [
                    "BUG - ATTACK NOT USABLE BY PLAYER!",
                    "NPC_NAME slides into your asshole and starts to violently fuck you!"
                ]
            ]
    },
    Ejaculate2: {
        Name: "Ejaculate2",
        Description: "\
        Monster Attack - No Info<br>\
        ",
        Icon: "slash_icon",
        Stamina: 10,
        Combo: 0,
        Speed: 20,
        Damage: 0,
        Unlock: function(player) {
                return true;   
            },
        Miss: [
                [
                    "BUG - ATTACK NOT USABLE BY PLAYER",
                    "NPC_NAME starts to ejaculate into your ass, but you shale your hips and break free!" 
                ]
            ],
        Hit: [
                [
                    "BUG - ATTACK NOT USABLE BY PLAYER!",
                    "NPC_NAME tenses up and starts to ejaculate into your ass, pumping a thick stream of goo into your bowels!"
                ]
            ]
    }
}