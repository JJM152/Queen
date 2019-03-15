App.Combat.Moves["UNARMED"] = {
    Engine: App.Combat.Engines.Unarmed,
    Punch : {
            Name: "Punch",
            Description: "\
            A basic strike with the unarmed fist. No fancy technique.",
            Icon: "punch_icon",
            Stamina: 5,
            Combo: 0, // Costs no combo points
            Speed: 5,
            Unlock: function(player) {
                    return true; // No requirements or skills to use.
                },
            Effects: [ ], //No effects to apply.
            Miss: [
                    [
                        "You swing at NPC_NAME with your fist, but miss!",
                        "NPC_NAME swings at you, but misses!" 
                    ],
                    [
                        "You strike at NPC_NAME with your fist, but the attack is deflected!",
                        "NPC_NAME strikes at you with NPC_PRONOUN fist, but you deflect the attack!"
                    ],
                    [
                        "NPC_NAME dodges your fist!",
                        "You dodge NPC_NAME's fist!"
                    ]
                ],
            Hit: [
                    [
                        "You strike NPC_NAME with a light blow!",
                        "NPC_NAME strikes you with a light blow!"
                    ],
                    [
                        "You punch NPC_NAME with a solid strike!",
                        "NPC_NAME punches you with a solid strike!"
                    ],
                    [
                        "You punch NPC_NAME with a brutal strike!",
                        "NPC_NAME punches you with a brutal strike!"
                    ],
                    [
                        "You hit NPC_NAME with a bone crushing punch!",
                        "NPC_NAME hits you with a bone crushing punch!"
                    ]
                ]
        },
        Kick : {
            Name: "Kick",
            Description: "\
            A basic kick. Solid damage, but slow.",
            Icon: "kick_icon",
            Stamina: 5,
            Combo: 0, // Costs no combo points
            Speed: 10,
            Unlock: function(player) {
                    return true; // No requirements or skills to use.
                },
            Effects: [ ], //No effects to apply.
            Miss: [
                    [
                        "You kick at NPC_NAME, but miss!",
                        "NPC_NAME kicks at you, but misses!" 
                    ],
                    [
                        "You kick at NPC_NAME, but the attack is deflected!",
                        "NPC_NAME kicks at you, but you deflect the attack!"
                    ],
                    [
                        "NPC_NAME dodges your kick!",
                        "You dodge NPC_NAME's kick!"
                    ]
                ],
            Hit: [
                    [
                        "You strike NPC_NAME with a light kick!",
                        "NPC_NAME strikes you with a light kick!"
                    ],
                    [
                        "You hit NPC_NAME with a solid kick!",
                        "NPC_NAME hits you with a solid kick!"
                    ],
                    [
                        "You hit NPC_NAME with a brutal kick!",
                        "NPC_NAME hits you with a brutal kick!"
                    ],
                    [
                        "You hit NPC_NAME with a bone crushing kick!",
                        "NPC_NAME hits you with a bone crushing kick!"
                    ]
            ]
        },
        Haymaker : {
            Name: "Haymaker",
            Description: "\
            A powerful uppercut that has a chance of stunning an opponent.",
            Icon: "haymaker_icon",
            Stamina: 10,
            Combo: 3, // Generates no combo points
            Speed: 10,
            Unlock: function(player) {
                    return true; // No requirements or skills to use.
                },
            Effects: [ ], //No effects to apply.
            Miss: [
                    [
                        "You swing at NPC_NAME with your fist, but miss!",
                        "NPC_NAME swings at you, but misses!" 
                    ],
                    [
                        "You strike at NPC_NAME with your fist, but the attack is deflected!",
                        "NPC_NAME strikes at you with NPC_PRONOUN fist, but you deflect the attack!"
                    ],
                    [
                        "NPC_NAME dodges your fist!",
                        "You dodge NPC_NAME's fist!"
                    ]
                ],
            Hit: [
                    [
                        "You strike NPC_NAME with a light blow!",
                        "NPC_NAME strikes you with a light blow!"
                    ],
                    [
                        "You punch NPC_NAME with a solid strike!",
                        "NPC_NAME punches you with a solid strike!"
                    ],
                    [
                        "You punch NPC_NAME with a brutal strike!",
                        "NPC_NAME punches you with a brutal strike!"
                    ],
                    [
                        "You hit NPC_NAME with a bone crushing punch!",
                        "NPC_NAME hits you with a bone crushing punch!"
                    ]
                ]
        },
        Knee : {
            Name: "Kick",
            Description: "\
            A knee to the groin. Classic move. More effective on males.",
            Icon: "knee_icon",
            Stamina: 5,
            Combo: 5, 
            Speed: 20,
            Unlock: function(player) {
                    return true; // No requirements or skills to use.
                },
            Effects: [ ], //No effects to apply.
            Miss: [
                    [
                        "You kick at NPC_NAME, but miss!",
                        "NPC_NAME kicks at you, but misses!" 
                    ],
                    [
                        "You kick at NPC_NAME, but the attack is deflected!",
                        "NPC_NAME kicks at you, but you deflect the attack!"
                    ],
                    [
                        "NPC_NAME dodges your kick!",
                        "You dodge NPC_NAME's kick!"
                    ]
                ],
            Hit: [
                    [
                        "You strike NPC_NAME with a light kick!",
                        "NPC_NAME strikes you with a light kick!"
                    ],
                    [
                        "You hit NPC_NAME with a solid kick!",
                        "NPC_NAME hits you with a solid kick!"
                    ],
                    [
                        "You hit NPC_NAME with a brutal kick!",
                        "NPC_NAME hits you with a brutal kick!"
                    ],
                    [
                        "You hit NPC_NAME with a bone crushing kick!",
                        "NPC_NAME hits you with a bone crushing kick!"
                    ]
            ]
        },
};
