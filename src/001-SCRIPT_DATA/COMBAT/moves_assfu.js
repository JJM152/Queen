App.Combat.Moves["ASSFU"] = {
    Engine: App.Combat.Engines.Assfu,
    "Shake It" : {
        Name: "Shake It",
        Description: "\
        Light attack. These hips don't lie.<br>\
        Dazes enemies.<br>\
        <span style='color:darkred'>DMG LOW</span> \
        <span style='color:darkgoldenrod'>STA AVERAGE</span> \
        <span style='color:cyan'>SPD FAST</span><br>\
        <span style='color:deeppink'>Combo Builder</span>\
        ",
        Icon: "shakeit_icon",
        Stamina: 10,
        Combo: 0,
        Speed: 10,
        Damage: 1.2,
        Unlock: function(player) {
                return player.Ass >= 30;    
            },
        Miss: [
                [
                    "You attempt shake your pASS ass at NPC_NAME, but miss!",
                    "NPC_NAME tries to shake NPC_PRONOUN jiggly ass at you, but misses!" 
                ]
            ],
        Hit: [
                [
                    "You shake your pASS ass at NPC_NAME!",
                    "NPC_NAME NPC_PRONOUN jiggly ass at you!" 
                ]
            ]
    },
    "Booty Slam" : {
        Name: "Booty Slam",
        Description: "\
        Medium attack.<br>\
        <span style='color:darkred'>DMG MEDIUM</span> \
        <span style='color:darkgoldenrod'>STA AVERAGE</span> \
        <span style='color:cyan'>SPD SLOW</span><br>\
        <span style='color:deeppink'>Combo Builder</span>\
        ",
        Icon: "bootyslam_icon",
        Stamina: 10,
        Combo: 0,
        Speed: 20,
        Damage: 1.5,
        Unlock: function(player) {
                return player.Ass >= 30;    
            },
        Miss: [
                [
                    "You attempt slam NPC_NAME with your pASS booty, but miss!",
                    "NPC_NAME tries to slam you with NPC_PRONOUN bouncy booty, but misses!" 
                ]
            ],
        Hit: [
                [
                    "You slam NPC_NAME with your pASS booty!",
                    "NPC_NAME slams you with NPC_PRONOUN bouncy booty!" 
                ]
            ]
    },
    "Twerk" : {
        Name: "Twerk",
        Description: "\
        Light attack. Defense Buff.<br>\
        Recovers combo points after a consumer.<br>\
        <span style='color:darkred'>DMG LOW</span> \
        <span style='color:darkgoldenrod'>STA AVERAGE</span> \
        <span style='color:cyan'>SPD AVERAGE</span><br>\
        <span style='color:deeppink'>Combo Builder</span>\
        ",
        Icon: "twerk_icon",
        Stamina: 10,
        Combo: 0,
        Speed: 15,
        Damage: 1.0,
        Unlock: function(player) {
                return player.Ass >= 30;    
            },
        Miss: [
                [
                    "You attempt to twerk NPC_NAME with your pASS ass, but miss!",
                    "NPC_NAME tries to twerk you with NPC_PRONOUN jiggly ass, but misses!" 
                ]
            ],
        Hit: [
                [
                    "You twerk NPC_NAME with your pASS ass!",
                    "NPC_NAME twerks you with NPC_PRONOUN jiggly ass!" 
                ]
            ]
    },
    "Ass Quake" : {
        Name: "Ass Quake",
        Description: "\
        Medium attack. Modest chance of stun<br>\
        <span style='color:darkred'>DMG MED</span> \
        <span style='color:darkgoldenrod'>STA AVERAGE</span> \
        <span style='color:cyan'>SPD AVERAGE</span><br>\
        <span style='color:deeppink'>Combo Consumer</span>\
        ",
        Icon: "assquake_icon",
        Stamina: 10,
        Combo: 2,
        Speed: 15,
        Damage: 1.5,
        Unlock: function(player) {
                return player.Ass >= 30;    
            },
        Miss: [
                [
                    "You attempt to smother NPC_NAME with your pASS ass, but miss!",
                    "NPC_NAME tries to smother you with NPC_PRONOUN jiggly ass, but misses!" 
                ]
            ],
        Hit: [
                [
                    "You grab the cheeks of your pASS ass and smother NPC_NAME with them!",
                    "NPC_NAME grabs the cheeks of NPC_PRONOUN gigantic ass and smothers you!" 
                ]
            ]
    },
    "Thunder Buns" : {
        Name: "Thunder Buns",
        Description: "\
        Strong attack. Good chance of stun<br>\
        <span style='color:darkred'>DMG HIGH</span> \
        <span style='color:darkgoldenrod'>STA AVERAGE</span> \
        <span style='color:cyan'>SPD AVERAGE</span><br>\
        <span style='color:deeppink'>Combo Consumer</span>\
        ",
        Icon: "thunderbuns_icon",
        Stamina: 10,
        Combo: 3,
        Speed: 15,
        Damage: 2.0,
        Unlock: function(player) {
                return player.Ass >= 30;    
            },
        Miss: [
                [
                    "You attempt to leap at NPC_NAME with your pASS ass, but miss!",
                    "NPC_NAME tries to leap at you with NPC_PRONOUN jiggly ass, but misses!" 
                ]
            ],
        Hit: [
                [
                    "You leap at NPC_NAME and crash into them with your pASS ass!",
                    "NPC_NAME leaps at you with NPC_PRONOUN gigantic ass and crashes into you!" 
                ]
            ]
    },
    "Buns of Steel" : {
        Name: "Buns of Steel",
        Description: "\
        Strong attack. Good chance of stun<br>\
        Strong defense buff.<br>\
        <span style='color:darkred'>DMG HIGH</span> \
        <span style='color:darkgoldenrod'>STA AVERAGE</span> \
        <span style='color:cyan'>SPD SLOW</span><br>\
        <span style='color:deeppink'>Combo Consumer</span>\
        ",
        Icon: "bunsofsteel_icon",
        Stamina: 10,
        Combo: 4,
        Speed: 20,
        Damage: 2.0,
        Unlock: function(player) {
                return player.Ass >= 30;    
            },
        Miss: [
                [
                    "You attempt to charge at NPC_NAME with your pASS ass, but miss!",
                    "NPC_NAME tries to charge at you with NPC_PRONOUN jiggly ass, but misses!" 
                ]
            ],
        Hit: [
                [
                    "You charge at NPC_NAME with your pASS ass and send them flying!",
                    "NPC_NAME charges at you with NPC_PRONOUN gigantic ass and sends you flying!" 
                ]
            ]
    },
};
