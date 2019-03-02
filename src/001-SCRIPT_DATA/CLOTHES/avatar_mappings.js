// Custom patterns.
App.Data.AvatarPatterns = [
    "white hearts",
    "pink athletic socks",
    "pink checks",
    "pink tartan",
    "red tartan",
    "pink gingham",
    "black lace",
    "black purple stripe"
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
        c: "da.Panties",
        a: {
            fill: "lightpink",
            stroke: "white"
          }
    }
];

App.Data.AvatarMaps['pink knee socks'] = [
    {
        c: "da.SuperSocks",
        a: {
            fill: "lightpink",
            stroke: "white",
            pattern: "da.getPattern('pink athletic socks',100)"
          }
    }
];

App.Data.AvatarMaps['white knee socks'] = [
    {
        c: "da.SuperSocks",
        a: {
            fill: "white",
            stroke: "black",
          }
    }
];

// Need a special cut-off t shirt for this.
App.Data.AvatarMaps['pink t-shirt'] = [
    {
        c: "da.Tee",
        a:{
            armCoverage: 0.32,
            waistCoverage: 1.4,
            fill: "lightpink",
            stroke: "white",
          }
    }
];

// need a proper skirt piece for this
App.Data.AvatarMaps['pink tartan'] = [
    {
        c: "da.SuperPants",
        a: {
            innerLoose: 1.311719625215395,
            legCoverage: 0.17841725232614758,
            outerLoose: 1.587926390139326,
            waistCoverage: 0.19814630696357116,
            fill: "lightpink",
            stroke: "white",
            pattern: "da.getPattern('pink tartan',100)"
          }
    }
];

App.Data.AvatarMaps['pink gingham dress'] = [
    {
        c: "da.SuperDress",
        a:  {
            armCoverage: -0.40,
            cleavageCoverage: 0.12,
            legLoose: 1.4,
            fill: "lightpink",
            stroke: "lightpink",
            pattern: "da.getPattern('pink gingham', 100)"
          }
    }
];

App.Data.AvatarMaps['babydoll dress'] = [
    {
        c: "da.SuperDress",
        a: {
            armCoverage: 0.18,
            armLoose: 0.8,
            cleavageCoverage: 0.6,
            curveCleavageX: 5,
            legCoverage: 0.18,
            legLoose: 0.65,
            fill: "antiquewhite",
            stroke: "lightpink"
          }
    }
];

App.Data.AvatarMaps['naughty schoolgirl outfit'] = [
    {
            c: "da.WomenDressShirt",
            a:{
                botParted: 10,
                collarCoverage: 0.15868819768872377,
                collarHeight: 3.8669059478170666,
                collarWidth: 4.129960009649384,
                liningWidth: 2.8146897004878077,
                sleeveLength: -0.0999999999999999,
                stomachCoverage: -0.05833140332293607,
                topParted: 10,
                collarPattern: "antiquewhite",
                cuffPattern: "antiquewhite",
                fill: "white",
                stroke: "antiquewhite"
              }
    },
    {
        c: "da.SuperPants",
        a: {
            legCoverage: 0.17841725232614758,
            innerLoose: 2.0,
            outerLoose: 2.0,
            waistCoverage: 0.19814630696357116,
            fill: "red",
            stroke: "black",
            pattern: "da.getPattern('red tartan',100)"
          }
    }
    
];

App.Data.AvatarMaps['low heel maryjanes'] = [
    {
        c: "da.ClosedToeStrappedPumps",
        a: {
            shoeHeight: 0.5,
            platformHeight: 0.10,
            toeCoverage: 1.0,
            fill: "black"
        }
    }
];

// Gothic lolita clothes

// These are hat pieces and need special parts.
//App.Data.AvatarMaps["red and black flower hair pin"] = [ ];
//App.Data.AvatarMaps["dark dreams bonnet"] = [ ];

App.Data.AvatarMaps["black gothic collar"] = [ 
    {
        c: "da.Choker",
        a: {
            "fill": "black",
            "stroke" : "darkred"
        }
    }
];

App.Data.AvatarMaps["gothic black bra"] = [ 
    {
        c: "da.SuperBra",
        a: {
            fill: "black",
            highlight: "black",
            stroke: "darkred",
            pattern: "da.getPattern('black lace', 100)",
            showStrap: true
          }
    }
];

App.Data.AvatarMaps["black panties"] = [
    {
        c: "da.Panties",
        a: {
            fill: "black",
            //pattern: "da.getPattern('black lace', 100)",
            stroke: "darkred"
          }
    }
];

App.Data.AvatarMaps["gothic frilly bloomers"] = [
    {
        c: "da.Panties",
        a: {
            fill: "black",
            pattern: "da.getPattern('black lace', 100)",
            stroke: "darkred"
          }
    }
 ];

App.Data.AvatarMaps["gothic striped stockings"] = [
   {
        c: "da.Stockings", 
        a: { 
            bandWidth: 1, 
            legCoverage: 0.3, 
            fill: "black",
            stroke: "purple",
            pattern: "da.getPattern('black purple stripe',10)"
        }
    }
 ];

App.Data.AvatarMaps["gothic frilly dress"] = [ 
    {
        c: "da.SuperDress",
        a: {
            armLoose: 1.0,
            bustle: true,
            cleavageCoverage: 0.65,
            lacing: true,
            legCoverage: 0.35,
            legLoose: 2,
            stroke: "purple",
            fill: "black",
            pattern: "da.getPattern('black lace', 25)"
            
          }
    }
];

App.Data.AvatarMaps["dark dreams dress"] = [
    {
        c: "da.SuperDress",
        a: {
            forcedNoSideString: true,
            armCoverage: 1.0662247110102107,
            armLoose: 1.0223601571998486,
            cleavageCoverage: 0.6519145636243149,
            lacing: true,
            legCoverage: 0.35597874406296026,
            legLoose: 1.0881236726579273,
            stroke: "black",
            fill: "darkred",
            
          }
    }
 ];

App.Data.AvatarMaps["gothic maid outfit"] = [ 
    {
        c: "da.SuperDress",
        a: {
            forcedNoSideString: true,
            armCoverage: 0.5,
            armLoose: 1.0223601571998486,
            cleavageCoverage: 0.3,
            lacing: false,
            legCoverage: 0.35597874406296026,
            legLoose: 1.0881236726579273,
            stroke: "white",
            fill: "black",
            
          }
    }
];

// Need boots for this
//App.Data.AvatarMaps["black high heeled boots"] = [];

App.Data.AvatarMaps["black platform mary janes"] = [
    {
        c: "da.ClosedToeStrappedPumps",
        a: {
            platformHeight: -5.0,
            toeCoverage: 2,
            fill: "black",
        }
    }
 ];

App.Data.AvatarMaps["dark dreams shoes"] = [
    {
        c: "da.ClosedToeStrappedPumps",
        a: {
            platformHeight: -5.0,
            toeCoverage: 2,
            fill: "black",
        }
    }
 ];

//Highclass Whore Clothes

App.Data.AvatarMaps["whore belt"] = [ ];

App.Data.AvatarMaps["slutty strumpet dress"] = [ ];

App.Data.AvatarMaps["sexy librarian outfit"] = [ ];

App.Data.AvatarMaps["whore sandals"] = [ ];

// Naughty Nun Clothes

// Need a hat piece for this
//App.Data.AvatarMaps["sexy nun cowl"] = [ ];

App.Data.AvatarMaps["naughty nun dress"] = [ ];

App.Data.AvatarMaps["sexy nun habit"] = [ ];

//Need boot piece for this
//App.Data.AvatarMaps["sexy nun boots"] = [ ];

// Pet Girl Clothes

// Hat pieces
//App.Data.AvatarMaps["cow headband"] = [ ];
//App.Data.AvatarMaps["cat ears"] = [ ];

//Use defaults for now.
//App.Data.AvatarMaps["cow collar"] = [ ];
//App.Data.AvatarMaps["nipple bells"] = [ ];

App.Data.AvatarMaps["cow bra"] = [ ];

App.Data.AvatarMaps["cow corset"] = [ ];

App.Data.AvatarMaps["cow panties"] = [ ];

App.Data.AvatarMaps["cow stockings"] = [ ];

App.Data.AvatarMaps["cow skirt"] = [ ];

App.Data.AvatarMaps["fuzzy black bikini"] = [ ];

App.Data.AvatarMaps["sexy kitten costume"] = [ ];

// Needs boots
//App.Data.AvatarMaps["cow boots"] = [ ];

App.Data.AvatarMaps["fuzzy paws"] = [ ];

// Pirate Slut Clothines

// Needs hat piece.
//App.Data.AvatarMaps["pirate hat"] = [ ];

//Use default
//App.Data.AvatarMaps["skull piercings"] = [ ];

App.Data.AvatarMaps["pirate bra"] = [ ];

App.Data.AvatarMaps["pistol brace"] = [ ];

App.Data.AvatarMaps["pirate thong"] = [ ];

App.Data.AvatarMaps['fishnet tights'] = [
    {
        c: "da.SuperSocks",
        a: {
            legCoverage: 0.007671939247473558,
            pattern: "da.getPattern('fishnet', 100)",
          }
    }
];

App.Data.AvatarMaps["fishnet stockings"] = [ ];

App.Data.AvatarMaps["pirate waistcoat"] = [ ];

App.Data.AvatarMaps["pirate queen regalia"] = [ ];

App.Data.AvatarMaps["pirate stripper costume"] = [ ];

// Needs boots
//App.Data.AvatarMaps["pirate boots"] = [ ];
//App.Data.AvatarMaps["pirate ankle boots"] = [ ];

// Sexy Dancer Clothes

// Wigs are handled by hair handler.
//App.Data.AvatarMaps["exotic wig"] = [ ];

App.Data.AvatarMaps["nipple tassels"] = [ ];

App.Data.AvatarMaps["sequined g-string"] = [ ];

App.Data.AvatarMaps["silk stockings"] = [ ];

App.Data.AvatarMaps["stripper costume"] = [ ];

App.Data.AvatarMaps["burlesque costume"] = [ ];

App.Data.AvatarMaps["slutty schoolgirl"] = [ ];

//Need boots parts
//App.Data.AvatarMaps["go-go boots"] = [ ];

App.Data.AvatarMaps["stripper heels"] = [ ];

App.Data.AvatarMaps["barefoot sandals"] = [];

// Sissy Lolita Clothes

//Needs hat part
//App.Data.AvatarMaps["pink head bow"] = [ ];

App.Data.AvatarMaps["sissy collar"] = [ ];

App.Data.AvatarMaps["striped bra"] = [ ];

App.Data.AvatarMaps["striped panties"] = [ ];

App.Data.AvatarMaps["frilly bloomers"] = [ ];

App.Data.AvatarMaps["striped stockings"] = [ ];

App.Data.AvatarMaps["sweet cherry socks"] = [ ];

App.Data.AvatarMaps["frilly dress"] = [ ];

App.Data.AvatarMaps["sweet cherry dress"] = [ ];

App.Data.AvatarMaps["sissy maid outfit"] = [ ];

App.Data.AvatarMaps["pink mary janes"] = [ ];

App.Data.AvatarMaps["pink platform mary janes"] = [ ];

App.Data.AvatarMaps["sweet cherry shoes"] = [ ];

// Slutty Lady

App.Data.AvatarMaps["luxurious black bra"] = [ ];

App.Data.AvatarMaps["luxurious black panties"] = [ ];

App.Data.AvatarMaps["luxurious black stockings"] = [ ];

App.Data.AvatarMaps["luxurious black evening gown"] = [ ];

App.Data.AvatarMaps["sexy showgirl outfit"] = [ ];

App.Data.AvatarMaps["luxurious black high heels"] = [ ];

//Ordinary Clothes

// Needs hat piece
//App.Data.Clothes["bonnet"] = [];

App.Data.Clothes["choker"] = [];
App.Data.Clothes["chemise"] = [];

App.Data.Clothes["cotton bra"] = [];

App.Data.Clothes["silk bra"] = [];
App.Data.Clothes["fashion corset"] = [];

App.Data.Clothes["cotton bloomers"] = [];

App.Data.Clothes["sheer bloomers"] = [];

App.Data.Clothes["cotton stockings"] = [];
App.Data.Clothes["cotton blouse"] = [];

App.Data.Clothes["silk blouse"] = [];
App.Data.Clothes["leather pants"] = [];

App.Data.Clothes["leather shorts"] = [];
App.Data.Clothes["cotton dress"] = [];
App.Data.Clothes["sundress"] = [];
App.Data.Clothes["sexy dress"] = [];

App.Data.Clothes["landlubber costume"] = [];

App.Data.Clothes["pathetic loser costume"] = [];

App.Data.Clothes["maid costume"] = [];
App.Data.Clothes["worn boots"] = [];

App.Data.Clothes["short heels"] =  [];

App.Data.Clothes["medium heels"] = [];
