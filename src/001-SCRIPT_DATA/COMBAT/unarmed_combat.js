App.Combat.Moves["UNARMED"] = {
    Punch : {
            Name: "Punch",
            Description: "\
            A basic strike with the unarmed fist. No fancy technique.",
            Stamina: 5,
            Combo: 0, // Generates no combo points
            Speed: 5,
            Engine: App.Combat.Engines.Unarmed, //Used to do damage and callback to Combat Engine.
            Unlock: function(player) {
                    return true; // No requirements or skills to use.
                },
            Effects: [ ], //No effects to apply.
            Miss: [
                    [
                        "You swing at TARGET with your fist, but miss!",
                        "ATTACKER swings at you, but misses!" 
                    ],
                    [
                        "You strike at TARGET with your fist, but the attack is deflected!",
                        "ATTACKER strikes at you with PRONOUN fist, but you deflect the attack!"
                    ],
                    [
                        "TARGET dodges your fist!",
                        "You dodge ATTACKER's fist!"
                    ]
                ],
            Hit: [
                    [
                        "You strike TARGET with a light blow!",
                        "ATTACKER strikes you with a light blow!"
                    ],
                    [
                        "You punch TARGET with a solid strike!",
                        "ATTACKER punches you with a solid strike!"
                    ],
                    [
                        "You punch TARGET with a brutal strike!",
                        "ATTACKER punches you with a brutal strike!"
                    ],
                    [
                        "You hit TARGET with a bone crushing punch!",
                        "ATTACKER hits you with a bone crushing punch!"
                    ]
                ]
        },
        Kick : {
            Name: "Kick",
            Description: "\
            A basic kick. Solid damage, but slow.",
            Stamina: 5,
            Combo: 0, // Generates no combo points.
            Speed: 10,
            Engine: App.Combat.Engines.Unarmed, //Used to do damage and callback to Combat Engine.
            Unlock: function(player) {
                    return true; // No requirements or skills to use.
                },
            Effects: [ ], //No effects to apply.
            Miss: [
                    [
                        "You kick at TARGET, but miss!",
                        "ATTACKER kicks at you, but misses!" 
                    ],
                    [
                        "You kick at TARGET, but the attack is deflected!",
                        "ATTACKER kicks at you, but you deflect the attack!"
                    ],
                    [
                        "TARGET dodges your kick!",
                        "You dodge ATTACKER's kick!"
                    ]
                ],
            Hit: [
                    [
                        "You strike TARGET with a light kick!",
                        "ATTACKER strikes you with a light kick!"
                    ],
                    [
                        "You hit TARGET with a solid kick!",
                        "ATTACKER hits you with a solid kick!"
                    ],
                    [
                        "You hit TARGET with a brutal kick!",
                        "ATTACKER hits you with a brutal kick!"
                    ],
                    [
                        "You hit TARGET with a bone crushing kick!",
                        "ATTACKER hits you with a bone crushing kick!"
                    ]
            ]
        },
};
