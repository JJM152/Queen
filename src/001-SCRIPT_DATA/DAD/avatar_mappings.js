// Custom patterns.
App.Data.AvatarPatterns = [
    "white hearts",
    "pink athletic socks",
    "pink checks",
    "pink tartan",
    "red tartan",
    "pink gingham",
    "leather",
    "black lace",
    "black purple stripe",
    "red plastic",
    "red cotton",
    "cow print",
    "black fur",
    "jolly roger big",
    "black sequins",
    "horizontal pink stripe",
    "vertical pink stripe",
    "pink polka dot",
    "pink chevron",
    "pink flowers",
    'blue cotton',
    "pink leather",
    "hot pink",
    "purple lace",
    "red sequin",
    "red velvet",
    "pink fishnet"
]

App.Data.AvatarMaps = {
    Neck: [ { c: "da.Collar", a: null } ],
// Nipple slots removed due to a bug. Need a new part.
    Bra:        [ { c: "da.Bra", a: { fill: "white" } }],
    Corset:     [ { c: "da.Corset", a: { botCoverage: 0, lacing: 0, fill: "black" } }],
    Panty:      [ { c: "da.Panties", a: { fill: "white" } }],
    Stockings:  [ { c: "da.Stockings", a: { bandWidth: 1, legCoverage: 0.3, fill: "white", stroke: "antiquewhite"}}],
    Shirt:      [ { c: "da.HalterTop", 
                    a:{ 
                        cleavageCoverage: 0.3, 
                        innerNeckCoverage: 0.3, 
                        outerNeckCoverage: 1, 
                        waistCoverage: 0.7,
                        fill: "white",
                        stroke: "antiquewhite"
                    } 
                }],
    Pants:      [ { c: "da.MediumTightPants", a: null}],
    Dress:      [ { c: "da.SuperDress",
                    a:{
                        armCoverage: 0.5,
                        cleavageCoverage: 0.3,
                        legCoverage: 0.4,
                        legLoose: 0.3,
                        fill: "skyblue",
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
            stroke: "antiquewhite"
          }
    }
];

App.Data.AvatarMaps['bimbo bra'] = [
    {
        c: "da.Bra",
        a: {
            fill: "hotpink",
            stroke: "lightpink",
            pattern: "da.getPattern('hot pink', 100)",
          }
    }
];

App.Data.AvatarMaps['bimbo thong'] = [
    {
        c: "da.SuperPanties",
        a: {
            curveBotX: 4,
            curveTopY: -7,
            genCoverage: 0.67,
            topY: -11,
            waistCoverage: 0.46,
            waistCoverageLower: 0.11,
            fill: "hotpink",
            stroke: "lightpink",
            pattern: "da.getPattern('hot pink', 100)",
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



App.Data.AvatarMaps['sexy micro dress'] = [
    {
        c: "da.TubeTop",
        a: {
            chestCoverage: 0.7574149869853,
            waistCoverage: -0.722341028286726,
            fill: "hotpink",
            stroke: "lightpink",
            pattern: "da.getPattern('hot pink', 300)",
          }
    }
];

App.Data.AvatarMaps['bimbo cocktail dress'] = [
    {
        c: "da.SuperDress",
        a: {
            armCoverage: 0.13266879046346713,
            bustle: true,
            cleavageCoverage: 0.8035145411571265,
            cleavageOpeness: 0.31,
            crosses: 3,
            curveCleavageX: 2,
            curveCleavageY: -43,
            lacing: true,
            legCoverage: 0.2905148494502108,
            legLoose: 0.6104203062377968,
            pattern: "da.getPattern('pink leather', 100)",
            fill: "hotpink",
            stroke: "lightpink",
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
            stroke: "antiquewhite"
        }
    },
    {
        c: "da.QueenSkirt",
        a: {
            legLoose: 0.724394840041321,
            legCoverage: 0.18524266108011678,
            waistCoverage: 0.04713209965472753,
            fill: "lightpink",
            stroke: "antiquewhite"
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
            stroke: "black"
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
            pattern: "da.getPattern('leather', 100)"
        }
    }
];

App.Data.AvatarMaps['bondage corset'] = [
    {
        c: "da.HalfCorset",
        a: {
            botCoverage: 0.98,
            topCoverage: 0.66,
            pattern: "da.getPattern('leather', 100)"
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
            pattern: "da.getPattern('leather', 100)"
        }
    }
];

// Custom Pattern on super dress at least for this.
// App.Data.AvatarMaps['rubber nurse outfit'] = [ { } ];

// Custom boots part need for both of these.
App.Data.AvatarMaps['shiny knee boots'] = [ 
    { 
         c: "da.QueenBoots",
         a: {
             legCoverage : 0.40,
             fill: "black",
             stroke: "black",
             pattern: "da.getPattern('black leather', 100)"
         }
    } 
];

App.Data.AvatarMaps['spiked boots'] = [ 
    { 
        c: "da.QueenBoots",
        a: {
            legCoverage : 0.65,
            fill: "black",
            stroke: "black",
            pattern: "da.getPattern('black leather', 100)"
        }
    } 
];

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

//Need an actual belt part
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
        c: "da.QueenSkirt",
        a: {
            legCoverage: 0.20,
            legLoose: 1.0,
            waistCoverage: 0.0,
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
        c: "da.QueenSkirt",
        a: {
            legCoverage: 0.20,
            legLoose: 1.0,
            waistCoverage: 0.0,
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
App.Data.AvatarMaps["red and black flower hair pin"] = [
    {
        c: "da.QueenHairPin",
        a: { 
            fill: "darkred",
            stroke: "black",
            ballFill: "black",
            ballStroke: "darkred"
        }
    }
 ];

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
            stroke: "maroon",
            fill: "darkred",
            pattern: "da.getPattern('red velvet', 300)"
            
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
App.Data.AvatarMaps["black high heeled boots"] = [
    {    
        c: "da.QueenBoots",
        a: {
            legCoverage : 0.40,
            fill: "black",
            stroke: "black",
            pattern: "da.getPattern('black leather', 100)"
        }
    } 
];

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

App.Data.AvatarMaps["gold hairpin"] = [
    {
        c: "da.QueenHairPin",
        a: null
    }
 ];
//App.Data.AvatarMaps["gold necklace"] = [ ];

App.Data.AvatarMaps["luxurious purple bra"] = [
    {
        c: "da.Bra",
        a: {
            fill: "purple",
            stroke: "lavender",
            pattern: "da.getPattern('purple lace', 100)",
          }
    }
];

// Need actual belt part.
App.Data.AvatarMaps["whore belt"] = [
    {
        c: "da.HalfCorset",
        a:{
            botCoverage: 0.28,
            lacing: false,
            topCoverage: 0.07977197913902945,
            stroke: "hsla(298.6,55.0%,54.7%,0.06)",
            fill: "gold",
        }
    }
 ];

App.Data.AvatarMaps["luxurious purple panties"] = [
    {
        c: "da.Panties",
        a: {
            genCoverage: 1,
            waistCoverage: -0.01205814095615343,
            fill: "purple",
            stroke: "lavender",
            pattern: "da.getPattern('purple lace', 100)",
          }
    }
];

App.Data.AvatarMaps["luxurious purple stockings"] = [
    {
        c: "da.StockingsGarter",
        a:  {
            pattern: "da.getPattern('purple lace', 100)",
          }
    }
];

App.Data.AvatarMaps["red halter top"] = [
    {
        c: "da.HalterTop",
        a: {

            fill: "darkred",
            stroke: "red",
            pattern: "da.getPattern('red cotton', 100)",
        }
    }
];

App.Data.AvatarMaps["white microskirt"] = [
    {
        c: "da.QueenSkirt",
        a: {
            waistCoverage: 0.1,
            legLoose: 0.0,
            legCoverage: 0.15,
            fill: "ivory",
            stroke: "antiquewhite"
        }
    }
];


App.Data.AvatarMaps["red wedges"] = [
    {
        c: "da.ClosedToeStrappedPumps",
        a: {
            platformHeight: 0.0,
            toeCoverage: 2,
            fill: "red",
            pattern: "da.getPattern('red plastic', 100)"
        }
    }
];

App.Data.AvatarMaps["slutty strumpet dress"] = [
    {
        c: "da.SuperDress",
        a:  {
            armCoverage: -0.40,
            cleavageCoverage: 0.12,
            curveCleavageX: 10,
            curveCleavagey: 10,
            legCoverage: 0.1,
            fill: "red",
            stroke: "darkred",
            pattern: "da.getPattern('red plastic',400)"
          }
    }
 ];

App.Data.AvatarMaps["sexy librarian outfit"] = [
    {
        c: "da.WomenDressShirt",
        a:{
            botParted: 0,
            collarWidth: 5,
            liningWidth: 3.5,
            sleeveLength: 0.2,
            stomachCoverage: 0.35,
            topParted: 5,
            liningPattern: "white",
            collarPattern: "white",
            cuffPattern: "white",
            fill: "antiquewhite",
            stroke: "white"
        }
    },
    {
        c: "da.QueenSkirt",
        a: {
            legCoverage: 0.18,
            legLoose: 0,
            waistCoverage: 0.19,
            fill: "black",
            stroke: "black",
            pattern: "da.getPattern('leather',100)"
        }
    },
    {
        c: "da.Glasses",
        a: {
            eccentricity: 5.1000000000000005,
            fill: "hsla(0.0,0.0%,63.5%,0.06)",
          }
    }
 ];

App.Data.AvatarMaps["whore sandals"] = [
    {
        c: "da.ClosedToeStrappedPumps",
        a: {
            platformHeight: 0.0,
            toeCoverage: 2,
            fill: "red",
            pattern: "da.getPattern('red plastic', 100)"
        }
    }
 ];

// Naughty Nun Clothes

// Need a hat piece for this
App.Data.AvatarMaps["sexy nun cowl"] = [ 
    {
        c: "da.QueenHabit",
        a: {
            ScapularStroke: "hsla(0.0,0.0%,41.2%,0.13)",
        }
    }
];

// Redo these with new models or parts... think hard.
App.Data.AvatarMaps["naughty nun dress"] = [
    {
        c: "da.TubeTop",
        a: {
            waistCoverage: 0.9744458692251974,
            fill: "hsla(0.0,0.0%,0.0%,0.48)",
            stroke: "hsla(0.0,0.0%,0.0%,1.00)",
        }
    },
    {
        c: "da.QueenSkirt",
        a:  {
            legCoverage: 0.18,
            legLoose: 0,
            waistCoverage: 0.19,
            fill: "hsla(0.0,0.0%,0.0%,0.48)",
            stroke: "hsla(0.0,0.0%,0.0%,1.00)",
          }
    }
 ];

App.Data.AvatarMaps["sexy nun habit"] = [

    {
        c: "da.QueenHabit",
        a: {
            //fill: "hsla(321.0,36.0%,100.0%,255)",
            ScapularFill: "white",
            ScapularStroke: "antiquewhite",
            fill: "hsl(322, 100%, 82%)",
            stroke: "hsla(0.0,0.0%,0.0%,0.48)",
        }
    },
    {
        c: "da.HalterTop",
        a: {
            cleavageCoverage: 0.36,
            curveCleavageX: 9.6,
            outerNeckCoverage: 1.05,
            waistCoverage: 1.2,
            pattern: "da.getPattern('pink fishnet', 100)",
            stroke: "hsla(0.0,0.0%,0.0%,0.48)",
            fill: "light pink"
        }
    },
    {
        c: "da.QueenSkirt",
        a: {
            legCoverage: 0.12,
            waistCoverage: 0.0,
            fill: "hsl(322, 100%, 82%)",
            stroke: "hsla(0.0,0.0%,0.0%,0.48)",
        }
    }
 ];

//Need boot piece for this
App.Data.AvatarMaps["sexy nun boots"] = [
    { 
        c: "da.QueenBoots",
        a: {
            legCoverage : 0.65,
            fill: "black",
            stroke: "black",
            pattern: "da.getPattern('black leather', 100)"
        }
    } 
 ];

// Pet Girl Clothes

// Hat pieces
//App.Data.AvatarMaps["cow headband"] = [ ];
//App.Data.AvatarMaps["cat ears"] = [ ];

//Use defaults for now.
//App.Data.AvatarMaps["cow collar"] = [ ];
//App.Data.AvatarMaps["nipple bells"] = [ ];

App.Data.AvatarMaps["cow bra"] = [
    {
        c: "da.Bra",
        a: {
            fill: "white",
            stroke: "black",
            pattern: "da.getPattern('cow print',100)"
        }
    }
 ];

App.Data.AvatarMaps["cow corset"] = [
    {
        c: "da.HalfCorset",
        a: {
            botCoverage: 0.98,
            topCoverage: 0.66,
            pattern: "da.getPattern('cow print', 100)",
            fill: "white",
            stroke: "black"
        }
    } 
 ];

App.Data.AvatarMaps["cow panties"] = [
    {
        c: "da.Panties",
        a: {
            pattern: "da.getPattern('leather', 100)",
            fill: "black",
            stroke: "black"
        }
    } 
 ];

App.Data.AvatarMaps["cow stockings"] = [
    {
         c: "da.Stockings", 
         a: { 
            bandWidth: 1, 
            legCoverage: 0.3, 
            fill: "white",
            stroke: "black",
            pattern: "da.getPattern('cow print', 100)"
        }
    }
 ];

App.Data.AvatarMaps["cow skirt"] = [
    {
        c: "da.QueenSkirt",
        a: {
            legCoverage: 0.17841725232614758,
            legLoose: 2.0,
            waistCoverage: 0.19814630696357116,
            fill: "white",
            stroke: "black",
            pattern: "da.getPattern('cow print',100)"
          }
    }
 ];

App.Data.AvatarMaps["fuzzy black bikini"] = [
    {
        c: "da.Bra",
        a: {
            fill : "black",
            stroke: "dimgray",
            pattern: "da.getPattern('black fur',20)"
        }
    },
    {
        c: "da.Panties",
        a: {
            fill : "black",
            stroke: "dimgray",
            pattern: "da.getPattern('black fur',20)"
        }
    }
 ];

 // Maybe do something creative with this???
App.Data.AvatarMaps["sexy kitten costume"] = [
    {
        c: "da.Bra",
        a: {
            fill : "black",
            stroke: "dimgray",
            pattern: "da.getPattern('black fur',20)"
        }
    },
    {
        c: "da.Panties",
        a: {
            fill : "black",
            stroke: "dimgray",
            pattern: "da.getPattern('black fur',20)"
        }
    }  
 ];

// Needs boots
App.Data.AvatarMaps["cow boots"] = [
        { 
            c: "da.QueenBoots",
            a: {
                legCoverage : 0.30,
                fill: "black",
                stroke: "black",
                pattern: "da.getPattern('black leather', 100)"
            }
        } 
 ];

// These could be better too, but not a priority
App.Data.AvatarMaps["fuzzy paws"] = [
    {
        c: "da.LongGloves",
        a: {
            armCoverage: 0.87,
            fill: "black",
            stroke: "dimgray",
            pattern: "da.getPattern('black fur', 20)"
        } 
    }
 ];

// Pirate Slut Clothines

// Needs hat piece.
//App.Data.AvatarMaps["pirate hat"] = [ ];

//Use default
//App.Data.AvatarMaps["skull piercings"] = [ ];

App.Data.AvatarMaps["pirate bra"] = [
    {
        c: "da.Bra",
        a: {
            fill : "black",
            stroke: "antiquewhite",
            pattern: "da.getPattern('jolly roger big', 30)"
        }
    }
 ];

 // Need something cool for this.
//App.Data.AvatarMaps["pistol brace"] = [ ];

App.Data.AvatarMaps["pirate thong"] = [
    {
        c: "da.SuperPanties",
        a: {
            fill : "black",
            stroke: "antiquewhite",
            pattern: "da.getPattern('jolly roger big', 30)"
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

App.Data.AvatarMaps["fishnet stockings"] = [
    {
        c: "da.Stockings",
        a: {
            pattern: "da.getPattern('fishnet', 100)",
          }
    }
 ];

 // Need something cool for this
//App.Data.AvatarMaps["pirate waistcoat"] = [ ];

App.Data.AvatarMaps["pirate queen regalia"] = [
    {
        c: "da.WomenDressShirt",
        a: {
                collarCoverage: 1.1254118749224817,
                collarHeight: 11.758527802786517,
                collarWidth: 9.917149369960313,
                liningWidth: 8,
                sleeveLength: 0.7,
                stomachCoverage: 0.4,
                topParted: 5,
                botParted: 0,
                cling: 1,
                fill: "black",
                stroke: "darkred",
                pattern: "da.getPattern('leather',100)",
                collarPattern: "goldenrod",
                cuffPattern: "goldenrod",
                liningPattern: "darkred",
                buttonFill: "goldenrod",
                buttonStroke: "goldenrod"
        }
    },
    {
        c: "da.QueenSkirt",
        a: {
            legCoverage: 0.17841725232614758,
            legLoose: 2.0,
            waistCoverage: 0.5,
            fill: "black",
            stroke: "darkred",
            pattern: "da.getPattern('leather',100)"
          }
    }

 ];

App.Data.AvatarMaps["pirate stripper costume"] = [
    {
        c: "da.Bra",
        a: {
            fill : "black",
            stroke: "antiquewhite",
            pattern: "da.getPattern('jolly roger big', 30)"
        }
    },
    {
        c: "da.SuperPanties",
        a: {
            fill : "black",
            stroke: "antiquewhite",
            pattern: "da.getPattern('jolly roger big', 30)"
        }
    }

 ];

// Needs boots
App.Data.AvatarMaps["pirate boots"] = [
    { 
        c: "da.QueenBoots",
        a: {
            legCoverage : 0.65,
            fill: "black",
            stroke: "black",
            pattern: "da.getPattern('leather', 100)"
        }
    }
 ];
App.Data.AvatarMaps["pirate ankle boots"] = [
    { 
        c: "da.QueenBoots",
        a: {
            legCoverage : 0.20,
            fill: "black",
            stroke: "black",
            pattern: "da.getPattern('black leather', 100)"
        }
    }
 ];

// Sexy Dancer Clothes

// Wigs are handled by hair handler.
//App.Data.AvatarMaps["exotic wig"] = [ ];

//Really need a special part for this and the nipple rings.
//App.Data.AvatarMaps["nipple tassels"] = [ ];

App.Data.AvatarMaps["sequined g-string"] = [
    {
        c: "da.Panties",
        a: {
            genCoverage: 1,
            waistCoverage: -0.01205814095615343,
            fill: "black",
            stroke: "black",
            pattern: "da.getPattern('black sequins',100)"
          }
    }
 ];

App.Data.AvatarMaps["silk stockings"] = [
    {
        c: "da.StockingsGarter",
        a:  {
            fill: "hsla(0.0,0.0%,27.8%,0.72)",
          }
    }
 ];

App.Data.AvatarMaps["stripper costume"] = [
    {
        c: "da.WomenDressShirt",
        a: {
                collarCoverage: 1.1254118749224817,
                collarHeight: 11.758527802786517,
                collarWidth: 9.917149369960313,
                liningWidth: 8,
                sleeveLength: 0.7,
                stomachCoverage: 0.2,
                topParted: 5,
                botParted: 0,
                cling: 1,
                fill: "navy",
                //stroke: "antiquewhite",
                collarPattern: "goldenrod",
                cuffPattern: "white",
                liningPattern: "white",
                buttonFill: "goldenrod",
                buttonStroke: "goldenrod"
        }
    },
    {
        // Wanted to add trim here, but these pants suck for gradients
        c: "da.QueenSkirt",
        a: {
            legCoverage: 0.15,
            legLoose: 0.0,
           // outerLoose: 2.5,
            waistCoverage: 0.4,
            fill: "navy",
            stroke: "antiquewhite",
            //pattern: "da.getPattern('navy trim',100)"
          }
    }
 ];

App.Data.AvatarMaps["burlesque costume"] = [
    {
        c: "da.HalterTop",
        a: {
            cleavageCoverage: 0.42200362352364085,
            innerNeckCoverage: 0.6982247463744191,
            waistCoverage: 0.9349857088179432,
            fill: "darkred",
            stroke: "goldenrod",
            pattern: "da.getPattern('red sequin',100)"
          }
    },
    {
        // Wanted to add trim here, but these pants suck for gradients
        c: "da.QueenSkirt",
        a: {
            legCoverage: 0.15,
            legLoose: 0.0,
            waistCoverage: 0.3,
            fill: "darkred",
            stroke: "goldenrod",
            pattern: "da.getPattern('red sequin',100)"
          }
    }
 ];

App.Data.AvatarMaps["slutty schoolgirl"] = [
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
    c: "da.QueenSkirt",
    a: {
        legCoverage: 0.17,
        legLoose: 2.0,
        waistCoverage: 0.19,
        fill: "red",
        stroke: "black",
        pattern: "da.getPattern('red tartan',100)"
      }
}
 ];


App.Data.AvatarMaps["go-go boots"] = [
    { 
        c: "da.QueenBoots",
        a: {
            legCoverage : 0.40,
            fill: "ivory",
            stroke: "antiquewhite",
        }
    }
 ];

App.Data.AvatarMaps["stripper heels"] = [
    {
        c: "da.ClosedToeStrappedPumps",
        a: {
            platformHeight: -5.0,
            toeCoverage: 2,
            fill: "black",
        }
    }
 ];

App.Data.AvatarMaps["barefoot sandals"] = [
    {
        c: "da.ClosedToeStrappedPumps",
        a: {
            shoeHeight: 0.5,
            platformHeight: 0.10,
            toeCoverage: 1.0,
            fill: "silver"
        }
    }
];

// Sissy Lolita Clothes

//Needs hat part
//App.Data.AvatarMaps["pink head bow"] = [ ];

App.Data.AvatarMaps["sissy collar"] = [
    {
        c: "da.Choker",
        a: {
            neckBotCoverage: -0.051518301363407515,
            neckCoverage: 0.3036231423018787,
            fill: "lightpink",
            stroke: "antiquewhite"
          }
    }
 ];

App.Data.AvatarMaps["striped bra"] = [
    {
        c: "da.Bra",
        a: {
            fill: "lightpink",
            stroke: "antiquewhite",
            pattern: "da.getPattern('horizontal pink stripe',10)"
          }
    }
 ];

App.Data.AvatarMaps["striped panties"] = [
    {
        c: "da.Panties",
        a: {
            fill: "lightpink",
            stroke: "antiquewhite",
            pattern: "da.getPattern('horizontal pink stripe',10)"
          }
    }
 ];

 // Really need boy shorts style part.
App.Data.AvatarMaps["frilly bloomers"] = [
    {
        c: "da.SuperPanties",
        a: {
            fill: "lightpink",
            stroke: "antiquewhite",
            pattern: "da.getPattern('pink polka dot',100)"
          }
    }
 ];

App.Data.AvatarMaps["striped stockings"] = [
    {
        c: "da.Stockings", 
        a: { 
            bandWidth: 0, 
            legCoverage: 0.3, 
            fill: "lightpink",
            stroke: "antiquewhite",
            pattern: "da.getPattern('vertical pink stripe',10)"
        }
    }
 ];

App.Data.AvatarMaps["sweet cherry socks"] = [
    {
        c: "da.SuperSocks",
        a: {
            fill: "lightpink",
            stroke: "antiquewhite",
          }
    }
 ];

App.Data.AvatarMaps["frilly dress"] = [
    {
        c: "da.SuperDress",
        a:  {
            armCoverage: -0.40,
            cleavageCoverage: 0.12,
            legLoose: 1.4,
            fill: "lightpink",
            stroke: "antiquewhite",
          }
    }
 ];

App.Data.AvatarMaps["sweet cherry dress"] = [
    {
        c: "da.SuperDress",
        a:  {
            armCoverage: -0.40,
            legCoverage: 0.25,
            cleavageCoverage: 0.12,
            legLoose: 1.4,
            fill: "lightpink",
            stroke: "antiquewhite",
            pattern: "da.getPattern('pink chevron', 100)"
          }
    }
 ];

App.Data.AvatarMaps["sissy maid outfit"] = [
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
            stroke: "antiquewhite",
            fill: "lightpink",
            
          }
    }
 ];

App.Data.AvatarMaps["pink mary janes"] = [
    {
        c: "da.ClosedToeStrappedPumps",
        a: {
            platformHeight: -5.0,
            toeCoverage: 2,
            fill: "lightpink",
        }
    }
 ];

App.Data.AvatarMaps["pink platform mary janes"] = [
    {
        c: "da.ClosedToeStrappedPumps",
        a: {
            platformHeight: -5.0,
            toeCoverage: 2,
            fill: "lightpink",
        }
    }
 ];

App.Data.AvatarMaps["sweet cherry shoes"] = [
    {
        c: "da.ClosedToeStrappedPumps",
        a: {
            platformHeight: -5.0,
            toeCoverage: 2,
            fill: "lightpink",
        }
    }
 ];

// Slutty Lady

App.Data.AvatarMaps["luxurious black bra"] = [
    {
        c: "da.Bra",
        a:  {
            fill: "hsla(0.0,0.0%,27.8%,0.72)",
          }
    }
 ];

App.Data.AvatarMaps["luxurious black panties"] = [    {
    c: "da.Panties",
    a:  {
        fill: "hsla(0.0,0.0%,27.8%,0.72)",
      }
} ];

App.Data.AvatarMaps["luxurious black stockings"] = [
    {
        c: "da.StockingsGarter",
        a:  {
            fill: "hsla(0.0,0.0%,27.8%,0.72)",
          }
    }
 ];

App.Data.AvatarMaps["luxurious black evening gown"] = [
    {
        c: "da.SuperDress",
        a: {
            armCoverage: 0.71,
            cleavageCoverage: 0.8,
            cleavegeOpeness: 30,
            curveCleavageX: 10,
            curveCleavagey: 10,
            legCoverage: 0.92,
            legLoose: 0.26,
            pattern: "da.getPattern('black sequins', 100)",
            fill: "black",
            stroke: "black",
        }
    }
 ];

App.Data.AvatarMaps["sexy showgirl outfit"] = [
    {
        c: "da.HalterTop",
        a: {
            cleavageCoverage: 0.37570779870038384,
            innerNeckCoverage: 0.809747000723704,
            waistCoverage: 1.2437862027470236,
            fill: "darkred",
            stroke: "red"
          }
    },
    {
        // Wanted to add trim here, but these pants suck for gradients
        c: "da.QueenSkirt",
        a: {
            legCoverage: 0.15,
            legLoose: 0.0,
            waistCoverage: 0.35,
            fill: "darkred",
            stroke: "red",
          }
    }
 ];

App.Data.AvatarMaps["luxurious black high heels"] = [
    {
        c: "da.ClosedToeStrappedPumps",
        a: {
            platformHeight: -5.0,
            toeCoverage: 2,
            fill: "black",
        }
    }
 ];

//Ordinary Clothes

// Needs hat piece
//App.Data.Clothes["bonnet"] = [];

App.Data.AvatarMaps["choker"] = [
    {
        c: "da.Choker",
        a: {
            fill: "black",
            stroke: "black",
            pattern: "da.getPattern('leather', 100)"
        }
    }
];

App.Data.AvatarMaps["chemise"] = [
    {
        c: "da.QueenUndershirt",
        a: {
            fill: "ivory",
        }
    }
]

App.Data.AvatarMaps["cotton bra"] = [
    { 
        c: "da.Bra", 
        a: { 
            fill: "white",
            stroke: "antiquewhite"
        } 
    }
];

App.Data.AvatarMaps["silk bra"] = [
    {
        c: "da.Bra",
        a:  {
            fill: "hsla(0.0,0.0%,27.8%,0.90)",
          }
    }
];

App.Data.AvatarMaps["fashion corset"] = [
    {
        c: "da.HalfCorset",
        a: {
            fill: "black",
            stroke: "black",
            lacing: false,
            pattern: "da.getPattern('leather', 100)"
        }
    }
];

App.Data.AvatarMaps["cotton bloomers"] = [
    { 
        c: "da.Panties", 
        a: { 
            fill: "white",
            stroke: "antiquewhite" 
        } 
    }
];

App.Data.AvatarMaps["sheer bloomers"] = [
    { 
        c: "da.Panties", 
        a: { 
            fill: "hsla(0.0,0.0%,27.8%,0.90)",
        } 
    }
];

App.Data.AvatarMaps["cotton stockings"] = [
    { 
        c: "da.Stockings", 
        a: { bandWidth: 1, 
            legCoverage: 0.3, 
            fill: "white",
            stroke: "antiquewhite"
        }
    }
];
App.Data.AvatarMaps["cotton blouse"] = [
    { 
        c: "da.HalterTop", 
        a:{ 
            cleavageCoverage: 0.3, 
            innerNeckCoverage: 0.3, 
            outerNeckCoverage: 1, 
            waistCoverage: 0.7,
            fill: "white",
            stroke: "antiquewhite"
            } 
    }
];

App.Data.AvatarMaps["silk blouse"] = [
    { 
        c: "da.HalterTop", 
        a:{ 
            cleavageCoverage: 0.3, 
            innerNeckCoverage: 0.3, 
            outerNeckCoverage: 1, 
            waistCoverage: 0.7,
            fill: "hsla(0.0,0.0%,100.0%,0.90)",
            stroke: "antiquewhite"
        }
    } 
];

App.Data.AvatarMaps["leather pants"] = [
    {
        c: "da.SuperLeggins",
        a: {
            legCoverage: 0.7111017275365854,
            fill: "black",
            stroke: "black",
            pattern: "da.getPattern('leather', 100)"
        }
    }
];

App.Data.AvatarMaps["leather shorts"] = [
    {
        c: "da.SuperLeggins",
        a: {
            legCoverage: 0.11923008841387661,
            waistCoverage: 0.09950103377645303,
            fill: "black",
            stroke: "black",
            pattern: "da.getPattern('leather', 100)"
        }
    }
];
App.Data.AvatarMaps["cotton dress"] = [
    { 
        c: "da.SuperDress",
        a:{
            cleavageCoverage: 0.3,
            cleavageOpeness: 1.0,
            curveCleavageX: 1,
            curveCleavageY: -13,
            lacing: true,
            legCoverage: 0.2,
            legLoose: 0.4,
            pattern: "da.getPattern('blue cotton', 100)",
            stroke: "hsla(208.0,53%,78%,0.90)"
        }    
    }
];

App.Data.AvatarMaps["sundress"] = [
    {
        c: "da.SuperDress",
        a:  {
            armCoverage: -0.40,
            cleavageCoverage: 0.12,
            legLoose: 1.4,
            fill: "lightpink",
            stroke: "lightpink",
            pattern: "da.getPattern('pink flowers', 100)"
          }
    }
];

App.Data.AvatarMaps["sexy dress"] = [
    {
        c: "da.SuperDress",
        a:  {
            armCoverage: -0.40,
            cleavageCoverage: 0.12,
            curveCleavageX: 10,
            curveCleavagey: 10,
            legCoverage: 0.1,
            fill: "black",
            stroke: "black",
            pattern: "da.getPattern('black sequins',100)"
          }
    }
];


// Just use default.
//App.Data.Clothes["landlubber costume"] = [];
//App.Data.Clothes["pathetic loser costume"] = [];

//Like all maid costumes, this needs to be redone.
App.Data.AvatarMaps["maid costume"] = [
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
App.Data.AvatarMaps["worn boots"] = [
    { 
        c: "da.QueenBoots", 
        a: {
            legCoverage: 0.35
        } 
    }
];

App.Data.AvatarMaps["short heels"] =  [
    {
        c: "da.ClosedToePumps",
        a: {
            platformHeight: -3.0,
            toeCoverage: 2
        }
    }
];

App.Data.AvatarMaps["medium heels"] = [
    {
        c: "da.ClosedToePumps",
        a: {
            platformHeight: -3.0,
            toeCoverage: 2
        }
    }
];

//Makeup
App.Data.AvatarMaps["black mascara"] = [
    {
        c: "da.Mascara",
        a: {
            topFill: "black",
            botFill: "black",
            extraLength: 6
        }
    }
];

App.Data.AvatarMaps["green mascara"] = [
    {
        c: "da.Mascara",
        a: {
            topFill: "green",
            botFill: "green",
            extraLength: 6
        }
    }
];

App.Data.AvatarMaps["red mascara"] = [
    {
        c: "da.Mascara",
        a: {
            topFill: "red",
            botFill: "red",
            extraLength: 6
        }
    }
];

App.Data.AvatarMaps["yellow mascara"] = [
    {
        c: "da.Mascara",
        a: {
            topFill: "yellow",
            botFill: "yellow",
            extraLength: 6
        }
    }
];

// misc clothing

App.Data.AvatarMaps["grey tshirt"] = [
    {
        c: "da.Tee",
        a: { 
            armCoverage: 0.4,
            cleavageCoverage: 0.2,
            cleavageOpeness: 0.4,
            curveCleavageX: 12,
            curveCleavageY: -15,
            thickness: 0,
            waistCoverage: 0.6,
            fill : "grey",
            stroke: "lightgrey"
        }
    }
];

// NPC only clothing

App.Data.AvatarMaps["NPC pirate"] = [
    {
        c: "da.WomenDressShirt",
        a: {
                collarCoverage: 1.1254118749224817,
                collarHeight: 11.758527802786517,
                collarWidth: 9.917149369960313,
                liningWidth: 8,
                sleeveLength: 0.7,
                stomachCoverage: 0.4,
                topParted: 5,
                botParted: 0,
                cling: 1,
                fill: "black",
                stroke: "darkred",
                pattern: "da.getPattern('leather',100)",
                collarPattern: "goldenrod",
                cuffPattern: "goldenrod",
                liningPattern: "darkred",
                buttonFill: "goldenrod",
                buttonStroke: "goldenrod"
        }
    },
    {
        c: "da.SuperLeggins",
        a: {
            legCoverage: 0.7111017275365854,
            fill: "black",
            stroke: "black",
            pattern: "da.getPattern('leather', 100)"
        }
    }
];

App.Data.AvatarMaps['NPC_GLASSES'] = [
    {
        c: "da.Glasses",
        a: {
            eccentricity: 5.1000000000000005,
            fill: "hsla(0.0,0.0%,63.5%,0.06)",
          }
    }
];

App.Data.AvatarMaps['NPC Bertie'] = [
    {
        c: "da.AsymmetricSleevedSweater",
        a: {
            neckCoverage: -0.03178822115978053,
            stomachCoverage: -0.01205814095615343,
            thickness: 0.4,
            fill: "hsla(351.4,94.6%,85.5%,0.76)",
            stroke: "hsla(0.0,50.0%,86.7%,1.00)",
        }
    },
    {
        c: "da.Corset",
        a: {
            botCoverage: 0.5009239443381492,
            knots: 3.499999999999999,
            thickness: 0.5,
            fill: "black",
        }
    },
    {
        c: "da.QueenSkirt",
        a: {
            legCoverage: 0.36,
            waistCoverage: 0.12,
            fill: "hsla(351.4,94.6%,85.5%,0.76)",
            stroke: "hsla(0.0,50.0%,86.7%,1.00)",
        }
    },
    {
        c: "da.Stockings",
        a: {
            fill: "hsla(0.0,0.0%,100.0%,0.86)",
        }
    },
    {
        c: "da.QueenBoots",
        a: {
            legCoverage: 0.22470282148737075,
            fill: "black",
            stroke: "hsla(0.0,50.0%,86.7%,1.00)",
        }
    },
    {
        c: "da.Bracelet",
        a: {
            armCoverage: 0.7968751473925542,
            fill: "hsla(54.1,100.0%,47.6%,1.00)",
        }
    }
]