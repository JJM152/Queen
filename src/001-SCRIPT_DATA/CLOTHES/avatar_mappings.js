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
                        fill: "skybue",
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

App.Data.AvatarMaps['fishnet tights'] = [
    {
        c: "da.SuperSocks",
        a: {
            legCoverage: 0.007671939247473558,
            pattern: "da.getPattern('fishnet', 100)",
          }
    }
];