App.Combat.Moves["BOOBPIRE"] = {
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
    Bite: {
        Name: "Bite",
        Description: "\
        Monster Attack - No Info<br>\
        ",
        Icon: "slash_icon",
        Stamina: 10,
        Combo: 2, 
        Speed: 20,
        Damage: 0.5,
        Unlock: function(player) {
                return true;   
            },
        Miss: [
                [
                    "BUG - ATTACK NOT USABLE BY PLAYER",
                    "NPC_NAME tries to bite you, but misses!" 
                ]
            ],
        Hit: [
                [
                    "BUG - ATTACK NOT USABLE BY PLAYER!",
                    "NPC_NAME sinks NPC_PRONOUN fangs into your chest!"
                ]
            ]
    },
    Claw: {
        Name: "Claw",
        Description: "\
        Monster Attack - No Info<br>\
        ",
        Icon: "slash_icon",
        Stamina: 20,
        Combo: 3,
        Speed: 20,
        Damage: 2.5,
        Unlock: function(player) {
                return true;   
            },
        Miss: [
                [
                    "BUG - ATTACK NOT USABLE BY PLAYER",
                    "NPC_NAME flails at you with NPC_PRONOUN claws, but misses!" 
                ]
            ],
        Hit: [
                [
                    "BUG - ATTACK NOT USABLE BY PLAYER!",
                    "NPC_NAME rakes you with NPC_PRONOUN deadly claws!"
                ]
            ]
    }
}