App.Combat.Moves["SIREN"] = {
    Engine: App.Combat.Engines.Siren,
    Touch : {
        Name: "Touch",
        Description: "\
        Monster Attack - No Info<br>\
        ",
        Icon: "slash_icon",
        Stamina: 5,
        Combo: 0, // Costs no combo points
        Speed: 10,
        Damage: 1.0,
        Unlock: function(player) {
                return true;   
            },
        Miss: [
                [
                    "BUG - ATTACK NOT USABLE BY PLAYER",
                    "NPC_NAME reaches for you, but misses!" 
                ]
            ],
        Hit: [
                [
                    "BUG - ATTACK NOT USABLE BY PLAYER!",
                    "NPC_NAME lands an icy touch on you, so cold it burns!"
                ]
            ]
    },
    Toss: {
        Name: "Toss",
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
                    "NPC_NAME tries to grab you, but you break free!" 
                ]
            ],
        Hit: [
                [
                    "BUG - ATTACK NOT USABLE BY PLAYER!",
                    "NPC_NAME grabs you and tosses you to the ground!"
                ]
            ]
    },
    Scream: {
        Name: "Scream",
        Description: "\
        Monster Attack - No Info<br>\
        ",
        Icon: "slash_icon",
        Stamina: 10,
        Combo: 4, 
        Speed: 20,
        Damage: 1.5,
        Unlock: function(player) {
                return true;   
            },
        Miss: [
                [
                    "BUG - ATTACK NOT USABLE BY PLAYER",
                    "NPC_NAME lets loose an ear splitting scream, but it has no effect!" 
                ]
            ],
        Hit: [
                [
                    "BUG - ATTACK NOT USABLE BY PLAYER!",
                    "NPC_NAME lets loosean ear splitting scream, causing immense pain!"
                ]
            ]
    },
    Drown: {
        Name: "Drown",
        Description: "\
        Monster Attack - No Info<br>\
        ",
        Icon: "slash_icon",
        Stamina: 20,
        Combo: 6,
        Speed: 20,
        Damage: 2.5,
        Unlock: function(player) {
                return true;   
            },
        Miss: [
                [
                    "BUG - ATTACK NOT USABLE BY PLAYER",
                    "NPC_NAME summons a large tidal wave, but you narrowly avoid it!" 
                ]
            ],
        Hit: [
                [
                    "BUG - ATTACK NOT USABLE BY PLAYER!",
                    "NPC_NAME summons a large tidal wave that smothers and drowns you!"
                ]
            ]
    }
}