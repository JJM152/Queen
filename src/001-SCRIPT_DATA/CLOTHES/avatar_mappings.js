// Annoying. Turn this into a function maybe to convert html names into hsl?
App.Data.HSLMAP = {
     white              : 'hsla(0.0,0.0%,100.0%,1.00)',
     black              : 'hsla(0,0%,0%,1.00)',
     red                : 'hsla(0,100%,50%,1.00)',
     skybue             : 'hsla(197,71%,73%,1.00)',
     lightsteelblue     : 'hsla(214,41%,78%,1.00)'
};

App.Data.AvatarMaps = {
    Neck: [ { c: "da.Collar", a: null } ],
    Nipples: [ 
                {   c: "da.RingPiercing", 
                    a: { side: "right", relativeLocation: { 
                            drawpoint: "breast.center",
                            dx: 0,
                            dy: 0,
                        },
                        fill: App.Data.HSLMAP.lightsteelblue
                    }
                },
                {   c: "da.RingPiercing", 
                    a: { side: "left", relativeLocation: { 
                            drawpoint: "breast.center",
                            dx: 0,
                            dy: 0,
                        },
                        fill: App.Data.HSLMAP.lightsteelblue
                    }
                },
                ],
    Bra:        [ { c: "da.Bra", a: { fill: App.Data.HSLMAP.white } }],
    Corset:     [ { c: "da.Corset", a: { botCoverage: 0, lacing: 0, fill: App.Data.HSLMAP.black } }],
    Panty:      [ { c: "da.Panties", a: { fill: App.Data.HSLMAP.white } }],
    Stockings:  [ { c: "da.Stockings", a: { bandWidth: 1, legCoverage: 0.3, fill: App.Data.HSLMAP.white}}],
    Shirt:      [ { c: "da.HalterTop", 
                    a:{ 
                        cleavageCoverage: 0.3, 
                        innerNeckCoverage: 0.3, 
                        outerNeckCoverage: 1, 
                        waistCoverage: 0.7,
                        fill: App.Data.HSLMAP.white
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
                        fill: App.Data.HSLMAP.skybue,
                        stroke: App.Data.HSLMAP.black
                      }    
                }],
    Costume:    [
                    {   c: "da.HalfCorset", a: null },
                    {   c: "da.SuperPants", 
                        a: {  
                            legCoverage: 0.12,
                            fill: App.Data.HSLMAP.red
                      }
                    },
                    {   c: "da.FingerlessGloves",
                        a: {
                            armCoverage: 0.28,
                            fill: App.Data.HSLMAP.red
                        }
                    }
                ],
    Shoes:      [ { c: "da.FlatShoes", a: null } ]
};

App.Data.AvatarMaps['fishnet tights'] = [
    {
        c: "da.SuperSocks",
        a: {
            legCoverage: 0.007671939247473558,
            pattern: "da.getPattern('fishnet', 100)",
          }
    }
]