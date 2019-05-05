App.Combat.Moves["SWASHBUCKLING"] = {
    Engine: App.Combat.Engines.Swashbuckling,
    Slash : {
        Name: "Slash",
        Description: "\
        A fast, quick, attack.<br>\
        If used after a riposte, recover some combo points.<br>\
        <span style='color:darkred'>DMG LOW</span> \
        <span style='color:darkgoldenrod'>STA LOW</span> \
        <span style='color:cyan'>SPD FAST</span><br>\
        <span style='color:deeppink'>Combo Builder</span>\
        ",
        Icon: "slash_icon",
        Stamina: 5,
        Combo: 0, // Costs no combo points
        Speed: 5,
        Damage: 1.0,
        Unlock: function(player) {
                return player.IsEquipped("Weapon", true);   
            },
        Miss: [
                [
                    "You swing at NPC_NAME with your pEQUIP(Weapon|$weapon), but miss!",
                    "NPC_NAME swings at you, but misses!" 
                ],
                [
                    "You slash at NPC_NAME with your pEQUIP(Weapon|$weapon), but the attack is deflected!",
                    "NPC_NAME slashes at you with NPC_PRONOUN weapon, but you deflect the attack!"
                ],
                [
                    "NPC_NAME dodges your stab!",
                    "You dodge NPC_NAME's stab!"
                ]
            ],
        Hit: [
                [
                    "You hit NPC_NAME with a light slash!",
                    "NPC_NAME hits you with a light slash!"
                ],
                [
                    "You hit NPC_NAME with a solid slash!",
                    "NPC_NAME slashes you with a solid slash!"
                ],
                [
                    "You attack NPC_NAME with a brutal slash!",
                    "NPC_NAME attacks you with a brutal slash!"
                ],
                [
                    "You assault NPC_NAME with a vicious slash!",
                    "NPC_NAME assaults you with a vicious slash!"
                ]
            ]
    },
    Stab : {
        Name: "Stab",
        Description: "\
        A powerful weapon stab.<br>\
        If used after a riposte, grant an accuracy buff.<br>\
        <span style='color:darkred'>DMG MED</span> \
        <span style='color:darkgoldenrod'>STA MED</span> \
        <span style='color:cyan'>SPD SLOW</span><br>\
        <span style='color:deeppink'>Combo Builder</span>\
        ",
        Icon: "stab_icon",
        Stamina: 10,
        Combo: 0, // Costs no combo points
        Speed: 10,
        Damage: 1.5,
        Unlock: function(player) {
                return player.IsEquipped("Weapon", true);   
            },
        Miss: [
                [
                    "You stab at NPC_NAME with your pEQUIP(Weapon|$weapon), but miss!",
                    "NPC_NAME stabs at you, but misses!" 
                ],
                [
                    "You stab at NPC_NAME with your pEQUIP(Weapon|$weapon), but the attack is deflected!",
                    "NPC_NAME stabs at you with NPC_PRONOUN weapon, but you deflect the attack!"
                ],
                [
                    "NPC_NAME dodges your stab!",
                    "You dodge NPC_NAME's stab!"
                ]
            ],
        Hit: [
                [
                    "You hit NPC_NAME with a shallow stab!",
                    "NPC_NAME hits you with a shallow stab!"
                ],
                [
                    "You hit NPC_NAME with a solid stab!",
                    "NPC_NAME slashes you with a solid stab!"
                ],
                [
                    "You attack NPC_NAME with a deep stab!",
                    "NPC_NAME attacks you with a deep stab!"
                ],
                [
                    "You assault NPC_NAME with a brutal stab!",
                    "NPC_NAME assaults you with a brutal stab!"
                ]
            ]
    },
    Parry : {
        Name: "Parry",
        Description: "\
        A defensive move, does no damage. Sets up for riposte.<br> \
        You cannot parry twice in a row or after a riposte.<br>\
        <span style='color:darkred'>DMG NONE</span> \
        <span style='color:darkgoldenrod'>STA LOW</span> \
        <span style='color:cyan'>SPD VERY SLOW</span><br>\
        <span style='color:deeppink'>Combo Builder</span>\
        ",
        Icon: "parry_icon",
        Stamina: 5,
        Combo: 0, // Costs no combo points
        Speed: 20,
        Damage: 0,
        Unlock: function(player) {
                return player.IsEquipped("Weapon", true) && player.Engine.LastMove != 'Parry' && player.Engine.LastMove != 'Riposte';   
            },
        Miss: [
                [
                    "You try to parry with your pEQUIP(Weapon|$weapon), but fail!",
                    "NPC_NAME tries to parry with NPC_PRONOUN weapon, but fails!" 
                ]
            ],
        Hit: [
                [
                    "You parry with your pEQUIP(Weapon|$weapon)!",
                    "NPC_NAME parries with NPC_PRONOUN weapon!" 
                ]
            ]
    },
    Riposte : {
        Name: "Riposte",
        Description: "\
        Use after a parry success. Converts combo points into extra damage.<br>\
        <span style='color:darkred'>DMG HIGH</span> \
        <span style='color:darkgoldenrod'>STA MED</span> \
        <span style='color:cyan'>SPD SLOW</span><br>\
        <span style='color:deeppink'>Combo Consumer (Variable)</span>\
        ",
        Icon: "riposte_icon",
        Stamina: 10,
        Combo: 1,
        Speed: 15,
        Damage: 2,
        Unlock: function(player) {
                return player.IsEquipped("Weapon", true) && player.Engine.LastMove == 'Parry';   
            },
        Miss: [
                [
                    "You try to riposte NPC_NAME with your pEQUIP(Weapon|$weapon), but miss!",
                    "NPC_NAME tries to riposte with NPC_PRONOUN weapon, but misses!" 
                ]
            ],
        Hit: [
                [
                    "You riposte NPC_NAME with your pEQUIP(Weapon|$weapon)!",
                    "NPC_NAME ripostes with NPC_PRONOUN weapon!" 
                ]
            ]
    },
    Cleave : {
        Name: "Cleave",
        Description: "\
        Usable only after a slash.<br>\
        <span style='color:darkred'>DMG HIGH</span> \
        <span style='color:darkgoldenrod'>STA LOW</span> \
        <span style='color:cyan'>SPD FAST</span><br>\
        <span style='color:deeppink'>Combo Consumer</span>\
        ",
        Icon: "cleave_icon",
        Stamina: 5,
        Combo: 3, // Costs no combo points
        Speed: 5,
        Damage: 2.5,
        Unlock: function(player) {
                return player.IsEquipped("Weapon", true) && player.Engine.LastMove == 'Slash';   
            },
        Miss: [
                [
                    "You try to cleave NPC_NAME with your pEQUIP(Weapon|$weapon), but miss!",
                    "NPC_NAME tries to cleave you with NPC_PRONOUN weapon, but misses!" 
                ]
            ],
        Hit: [
                [
                    "You cleave NPC_NAME with your pEQUIP(Weapon|$weapon)!",
                    "NPC_NAME cleaves you with NPC_PRONOUN weapon!" 
                ]
            ]
    },
    Behead : {
        Name: "Behead",
        Description: "\
        Small chance to insta-kill enemies below 50% health.<br>\
        <span style='color:darkred'>DMG HIGH</span> \
        <span style='color:darkgoldenrod'>STA HIGH</span> \
        <span style='color:cyan'>SPD SLOW</span><br>\
        <span style='color:deeppink'>Combo Consumer</span>\
        ",
        Icon: "behead_icon",
        Stamina: 15,
        Combo: 5,
        Speed: 20,
        Damage: 3.0,
        Unlock: function(player) {
                return player.IsEquipped("Weapon", true);   
            },
        Miss: [
                [
                    "You try to behead NPC_NAME with your pEQUIP(Weapon|$weapon), but miss!",
                    "NPC_NAME tries to behead you with NPC_PRONOUN weapon, but misses!" 
                ]
            ],
        Hit: [
                [
                    "You chop at NPC_NAME's vitals with your pEQUIP(Weapon|$weapon)!",
                    "NPC_NAME chops at your vitals with NPC_PRONOUN weapon!" 
                ]
            ]
    },
};
