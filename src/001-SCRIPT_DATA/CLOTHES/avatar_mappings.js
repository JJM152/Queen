// Custom patterns.
App.Data.AvatarPatterns = [
    "white hearts"
]

App.Data.AvatarMaps = {
    Neck: [ { c: "da.Collar", a: null } ],
    Nipples: [ 
                {   c: "da.RingPiercing", 
                    a: { side: "right", relativeLocation: { 
                            drawpoint: "breast.center",
                            dx: 0,
                            dy: 0,
                        },
                        fill: "lightsteelblue"
                    }
                },
                {   c: "da.RingPiercing", 
                    a: { side: "left", relativeLocation: { 
                            drawpoint: "breast.center",
                            dx: 0,
                            dy: 0,
                        },
                        fill: "lightsteelblue"
                    }
                },
                ],
    Bra:        [ { c: "da.Bra", a: { fill: "white" } }],
    Corset:     [ { c: "da.Corset", a: { botCoverage: 0, lacing: 0, fill: "black" } }],
    Panty:      [ { c: "da.Panties", a: { fill: "white" } }],
    Stockings:  [ { c: "da.Stockings", a: { bandWidth: 1, legCoverage: 0.3, fill: "white"}}],
    Shirt:      [ { c: "da.HalterTop", 
                    a:{ 
                        cleavageCoverage: 0.3, 
                        innerNeckCoverage: 0.3, 
                        outerNeckCoverage: 1, 
                        waistCoverage: 0.7,
                        fill: "white"
                    } 
                }],
    Pants:      [ { c: "da.MediumTightPants", a: null}],
    Dress:      [ { c: "da.SuperDress",
                    a:{
                        armCoverage: 0.5,
                        bustle: true,
                        cleavageCoverage: 0.3,
                        legCoverage: 0.4,
                        legLoose: 0.3,
                        fill: "skyblue",
                        stroke: "black"
                      }    
                }],
    Costume:    [
                    {   c: "da.HalfCorset", a: null },
                    {   c: "da.SuperPants", 
                        a: {  
                            legCoverage: 0.12,
                            fill: "red"
                      }
                    },
                    {   c: "da.FingerlessGloves",
                        a: {
                            armCoverage: 0.28,
                            fill: "red"
                        }
                    }
                ],
    Shoes:      [ { c: "da.FlatShoes", a: null } ]
};

// Adding these items here instead of on the item records themselves just so that I can 
// keep this module incase I need to rip it out later.

// Bimbo Clothes
App.Data.AvatarMaps['bimbo collar'] = [
    {
        c: "da.Choker",
        a: {
            neckBotCoverage: -0.051518301363407515,
            neckCoverage: 0.3036231423018787,
            fill: "hotpink",
            stroke: "white"
          }
    }
];

App.Data.AvatarMaps['bimbo bra'] = [
    {
        c: "da.Bra",
        a: {
            fill: "hotpink",
            stroke: "black"
          }
    }
];

App.Data.AvatarMaps['cupless corset'] = [
    {
        c: "da.HalfCorset",
        a:{
            pattern: "da.getPattern('lace', 100)",
          }
    }
];

App.Data.AvatarMaps['bimbo thong'] = [
    {
        c: "da.Panties",
        a: {
            genCoverage: 1,
            waistCoverage: -0.01205814095615343,
            fill: "hotpink"
          }
    }
];

App.Data.AvatarMaps['sexy micro dress'] = [
    {
        c: "da.TubeTop",
        a: {
            chestCoverage: 0.7574149869853,
            waistCoverage: -0.722341028286726,
            fill: "hotpink",
            stroke: "black"
          }
    }
];

App.Data.AvatarMaps['bimbo cocktail dress'] = [
    {
        c: "da.SuperDress",
        a: {
            fill: "hotpink",
            stroke: "black",
            armCoverage: 0.007671939247473558,
            cleavageCoverage: 0.8166052275961815,
            legCoverage: 0.3036231423018787,
            legLoose: 2,
            curveCleavageX: 11
        }
    }
];

App.Data.AvatarMaps['bimbo cheerleader costume'] = [
    {
        c: "da.HalterTop",
        a: {
            cleavageCoverage: 0.42200362352364085,
            innerNeckCoverage: 0.6982247463744191,
            waistCoverage: 0.9349857088179432,
            fill: "lightpink",
            stroke: "hotpink"
        }
    },
    {
        c: "da.SuperPants",
        a: {
            innerLoose: 0.724394840041321,
            legCoverage: 0.18524266108011678,
            outerLoose: 2,
            waistCoverage: 0.04713209965472753,
            fill: "lightpink",
            stroke: "lightpink"
        }
    }
];

App.Data.AvatarMaps['tall heels'] = [
    {
        c: "da.ClosedToePumps",
        a: {
            platformHeight: -3.0,
            toeCoverage: 2
        }
    }
];

App.Data.AvatarMaps['platform heels'] = [
    {
        c: "da.ClosedToeStrappedPumps",
        a: {
            platformHeight: -5.0,
            toeCoverage: 2
        }
    }
];

App.Data.AvatarMaps['bimbo heels'] = [
    {
        c: "da.ClosedToeStrappedPumps",
        a: {
            platformHeight: -5.0,
            toeCoverage: 2,
            fill: "lightpink",
        }
    }
];

// Bondage clothes
App.Data.AvatarMaps['training corset'] = [
    {
        c: "da.HalfCorset",
        a: {
            botCoverage: 0.48,
            topCoverage: 0.38,
            lacing: false,
            pattern: "da.getPattern('black leather', 100)"
        }
    }
];

App.Data.AvatarMaps['bondage corset'] = [
    {
        c: "da.HalfCorset",
        a: {
            botCoverage: 0.98,
            topCoverage: 0.66,
            pattern: "da.getPattern('black leather', 100)"
        }
    }
];

App.Data.AvatarMaps['bondage dress'] = [
    {
        c: "da.SuperDress",
        a: {
            bustle: true,
            cleavageCoverage: 0.8,
            cleavegeOpeness: 30,
            lacing: true,
            armCoverage: 1.3,
            legCoverage: 0.56,
            pattern: "da.getPattern('black leather', 100)"
        }
    }
];

// Custom Pattern on super dress at least for this.
// App.Data.AvatarMaps['rubber nurse outfit'] = [ { } ];

// Custom boots part need for both of these.
//App.Data.AvatarMaps['shiny knee boots'] = [ { } ];
//App.Data.AvatarMaps['spiked boots'] = [ { } ];

// Daddy's Girl

App.Data.AvatarMaps['collar for daddy'] = [
    {
        c: "da.Choker",
        a: {
            neckBotCoverage: -0.051518301363407515,
            neckCoverage: 0.3036231423018787,
            fill: "white",
            stroke: "hotpink"
          }
    }
];

App.Data.AvatarMaps['cute pink bra'] = [
    {
        c: "da.Bra",
        a: {
            fill: "lightpink",
            stroke: "white",
            pattern: "da.getPattern('white hearts', 12)",
          }
    }
];

App.Data.AvatarMaps['belt with glitter'] = [
    {
        c: "da.HalfCorset",
        a:{
            botCoverage: 0.28,
            lacing: false,
            topCoverage: 0.07977197913902945,
            stroke: "hsla(298.6,55.0%,54.7%,0.06)",
            fill: "white",
          }
    }
];

App.Data.AvatarMaps['cute pink panties'] = [
    {
        c: "da.SuperSocks",
        a: {
            legCoverage: 0.007671939247473558,
            pattern: "da.getPattern('fishnet', 100)",
          }
    }
];

App.Data.AvatarMaps['pink knee socks'] = [
    {
        c: "da.SuperSocks",
        a: {
            legCoverage: 0.007671939247473558,
            pattern: "da.getPattern('fishnet', 100)",
          }
    }
];

App.Data.AvatarMaps['white knee socks'] = [
    {
        c: "da.SuperSocks",
        a: {
            legCoverage: 0.007671939247473558,
            pattern: "da.getPattern('fishnet', 100)",
          }
    }
];

App.Data.AvatarMaps['pink t-shirt'] = [
    {
        c: "da.SuperSocks",
        a: {
            legCoverage: 0.007671939247473558,
            pattern: "da.getPattern('fishnet', 100)",
          }
    }
];

App.Data.AvatarMaps['pink tartan'] = [
    {
        c: "da.SuperSocks",
        a: {
            legCoverage: 0.007671939247473558,
            pattern: "da.getPattern('fishnet', 100)",
          }
    }
];

App.Data.AvatarMaps['pink gingham dress'] = [
    {

    }
];

App.Data.AvatarMaps['babydoll dress'] = [
    {

    }
];

App.Data.AvatarMaps['naughty schoolgirl outfit'] = [
    {

    }
];

App.Data.AvatarMaps['low heel maryjanes"'] = [
    {

    }
];


App.Data.AvatarMaps['fishnet tights'] = [
    {
        c: "da.SuperSocks",
        a: {
            legCoverage: 0.007671939247473558,
            pattern: "da.getPattern('fishnet', 100)",
          }
    }
];