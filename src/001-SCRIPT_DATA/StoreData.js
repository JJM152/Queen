window.App = window.App || { Data: { }, Entity: { } };

window.App.Data.Stores =  {
    "CARGO" : {
        "ID" : "CARGO",     "NAME" : "Julius's Secret Stash", "OPEN" : [2, 3], "RESTOCK" : 7,
        "INVENTORY" : [
            { "CATEGORY":   "COMMON",   "TYPE": "DRUGS",    "QTY":    4,    "MAX":    4,  "PRICE":    50, "MOOD":  0,   "LOCK": 0,  "TAG" : "pixie dust"            },
            { "CATEGORY":   "COMMON",   "TYPE": "DRUGS",    "QTY":    4,    "MAX":    4,  "PRICE":    50, "MOOD": 20,   "LOCK": 0,  "TAG" : "medicinal herbs"       },
            { "CATEGORY":   "COMMON",   "TYPE": "DRUGS",    "QTY":    4,    "MAX":    4,  "PRICE":    25, "MOOD": 40,   "LOCK": 0,  "TAG" : "fairy dust"            },
            { "CATEGORY":   "COMMON",   "TYPE": "DRUGS",    "QTY":    2,    "MAX":    2,  "PRICE":   150, "MOOD": 80,   "LOCK": 0,  "TAG" : "face cream"            },
            { "CATEGORY":   "COMMON",   "TYPE": "DRUGS",    "QTY":    2,    "MAX":    2,  "PRICE":   100, "MOOD": 20,   "LOCK": 1,  "TAG" : "khafkir"               },
            { "CATEGORY":   "COMMON",   "TYPE": "DRUGS",    "QTY":    1,    "MAX":    1,  "PRICE":   500, "MOOD": 60,   "LOCK": 1,  "TAG" : "siren elixir"          },
            { "CATEGORY":   "RARE",     "TYPE": "DRUGS",    "QTY":    2,    "MAX":    2,  "PRICE":    50, "MOOD": 60,   "LOCK": 0,  "TAG" : "hair tonic"            },
            { "CATEGORY":   "RARE",     "TYPE": "FOOD",     "QTY":    2,    "MAX":    2,  "PRICE":   100, "MOOD": 60,   "LOCK": 0,  "TAG" : "starfruit"             },
            { "CATEGORY":   "RARE",     "TYPE": "DRUGS",    "QTY":    1,    "MAX":    1,  "PRICE":  2500, "MOOD": 80,   "LOCK": 0,  "TAG" : "nereid philtre"        },
            { "CATEGORY":   "RARE",     "TYPE": "DRUGS",    "QTY":    1,    "MAX":    1,  "PRICE":  2500, "MOOD": 80,   "LOCK": 0,  "TAG" : "succubus philtre"      }
        ]
    },
    "GALLEY" : {
        "ID" : "GALLEY",    "NAME" : "Salty Mermaid Galley",  "OPEN" : [0, 1, 2, 3], "RESTOCK" : 7,
        "INVENTORY" : [
            { "CATEGORY":   "COMMON",   "TYPE": "FOOD",    "QTY":   12,     "MAX":   12,  "PRICE":    10, "MOOD":  0,   "LOCK": 0,  "TAG" : "slave gruel"            },
            { "CATEGORY":   "COMMON",   "TYPE": "FOOD",    "QTY":    8,     "MAX":    8,  "PRICE":     8, "MOOD":  0,   "LOCK": 0,  "TAG" : "grog"                   },
            { "CATEGORY":   "COMMON",   "TYPE": "FOOD",    "QTY":    4,     "MAX":    4,  "PRICE":    25, "MOOD": 20,   "LOCK": 0,  "TAG" : "mystery stew"           },
            { "CATEGORY":   "COMMON",   "TYPE": "FOOD",    "QTY":    2,     "MAX":    2,  "PRICE":   100, "MOOD": 40,   "LOCK": 0,  "TAG" : "starfruit"              },
            { "CATEGORY":   "COMMON",   "TYPE": "FOOD",    "QTY":    2,     "MAX":    2,  "PRICE":   175, "MOOD": 65,   "LOCK": 0,  "TAG" : "pink peach"             },
            { "CATEGORY":   "RARE",     "TYPE": "FOOD",    "QTY":    1,     "MAX":    1,  "PRICE":   100, "MOOD": 60,   "LOCK": 0,  "TAG" : "milkdew melon"          },
            { "CATEGORY":   "RARE",     "TYPE": "FOOD",    "QTY":    1,     "MAX":    1,  "PRICE":   100, "MOOD": 80,   "LOCK": 0,  "TAG" : "honey mead"             },
            { "CATEGORY":   "RARE",     "TYPE": "FOOD",    "QTY":    1,     "MAX":    1,  "PRICE":   140, "MOOD": 80,   "LOCK": 0,  "TAG" : "butter gourd"           }
        ]
    },
    "ISLATAVERN" : {
        "ID" : "ISLATAVERN",    "NAME" : "Isla Harbor Tavern",  "OPEN" : [1, 2, 3, 4], "RESTOCK" : 7,
        "INVENTORY" : [
            { "CATEGORY":   "COMMON",   "TYPE": "FOOD",    "QTY":   12,     "MAX":   12,  "PRICE":    16, "MOOD":  0,   "LOCK": 0,  "TAG" : "beer"                   },
            { "CATEGORY":   "COMMON",   "TYPE": "FOOD",    "QTY":   12,     "MAX":   12,  "PRICE":    20, "MOOD":  0,   "LOCK": 0,  "TAG" : "cheap wine"             },
            { "CATEGORY":   "COMMON",   "TYPE": "FOOD",    "QTY":    4,     "MAX":    4,  "PRICE":    50, "MOOD":  0,   "LOCK": 0,  "TAG" : "bread and cheese"       },
            { "CATEGORY":   "COMMON",   "TYPE": "FOOD",    "QTY":    4,     "MAX":    4,  "PRICE":    50, "MOOD":  0,   "LOCK": 0,  "TAG" : "roast fish"             },
            { "CATEGORY":   "COMMON",   "TYPE": "FOOD",    "QTY":   12,     "MAX":   12,  "PRICE":    60, "MOOD":  0,   "LOCK": 0,  "TAG" : "rum"                    }
        ]
    },
    "ISLASTORE" : {
        "ID" : "ISLASTORE",    "NAME" : "Isla Harbor General Store",  "OPEN" : [0, 1, 2, 3], "RESTOCK" : 7,
        "INVENTORY" : [
            { "CATEGORY":   "COMMON",   "TYPE": "COSMETICS",    "QTY":    5,     "MAX":    5,  "PRICE":    20, "MOOD":  0,   "LOCK": 0,  "TAG" : "basic makeup"             },
            { "CATEGORY":   "COMMON",   "TYPE": "COSMETICS",    "QTY":    5,     "MAX":    5,  "PRICE":    20, "MOOD":  0,   "LOCK": 0,  "TAG" : "hair products"            },
            { "CATEGORY":   "COMMON",   "TYPE": "FOOD",         "QTY":    5,     "MAX":    5,  "PRICE":  1000, "MOOD":  0,   "LOCK": 0,  "TAG" : "fortified wine"           },
            { "CATEGORY":   "COMMON",   "TYPE": "CLOTHES",      "QTY":    1,     "MAX":    1,  "PRICE":   300, "MOOD":  0,   "LOCK": 0,  "TAG" : "wig"                      },
            { "CATEGORY":   "COMMON",   "TYPE": "CLOTHES",      "QTY":    1,     "MAX":    1,  "PRICE":   200, "MOOD":  0,   "LOCK": 0,  "TAG" : "sundress"                 },
            { "CATEGORY":   "COMMON",   "TYPE": "CLOTHES",      "QTY":    1,     "MAX":    1,  "PRICE":   160, "MOOD":  0,   "LOCK": 0,  "TAG" : "striped bra"              },
            { "CATEGORY":   "COMMON",   "TYPE": "CLOTHES",      "QTY":    1,     "MAX":    1,  "PRICE":   160, "MOOD":  0,   "LOCK": 0,  "TAG" : "striped panties"          },
            { "CATEGORY":   "COMMON",   "TYPE": "CLOTHES",      "QTY":    1,     "MAX":    1,  "PRICE":   150, "MOOD":  0,   "LOCK": 0,  "TAG" : "striped stockings"        },
            { "CATEGORY":   "RARE",     "TYPE": "CLOTHES",      "QTY":    1,     "MAX":    1,  "PRICE":   300, "MOOD":  0,   "LOCK": 0,  "TAG" : "frilly bloomers"          },
            { "CATEGORY":   "RARE",     "TYPE": "CLOTHES",      "QTY":    1,     "MAX":    1,  "PRICE":   500, "MOOD":  0,   "LOCK": 0,  "TAG" : "frilly dress"             },
            { "CATEGORY":   "RARE",     "TYPE": "CLOTHES",      "QTY":    1,     "MAX":    1,  "PRICE":   250, "MOOD":  0,   "LOCK": 0,  "TAG" : "pink mary janes"          },
            { "CATEGORY":   "RARE",     "TYPE": "CLOTHES",      "QTY":    1,     "MAX":    1,  "PRICE":   400, "MOOD":  0,   "LOCK": 0,  "TAG" : "pink platform mary janes" },
            { "CATEGORY":   "RARE",     "TYPE": "CLOTHES",      "QTY":    1,     "MAX":    1,  "PRICE":   120, "MOOD":  0,   "LOCK": 0,  "TAG" : "pink head bow"            }
        ]
    },
    "SMUGGLERS" : {
        "ID" : "SMUGGLERS",    "NAME" : "The Smuggler's Den",  "OPEN" : [ 0, 1, 2, 3, 4], "RESTOCK" : 7,
        "INVENTORY" : [
            { "CATEGORY":   "COMMON",   "TYPE": "FOOD",    "QTY":   12,     "MAX":   12,  "PRICE":    16, "MOOD":  0,   "LOCK": 0,  "TAG" : "beer"                   },
            { "CATEGORY":   "COMMON",   "TYPE": "FOOD",    "QTY":   12,     "MAX":   12,  "PRICE":    20, "MOOD":  0,   "LOCK": 0,  "TAG" : "cheap wine"             },
            { "CATEGORY":   "COMMON",   "TYPE": "FOOD",    "QTY":   12,     "MAX":   12,  "PRICE":    60, "MOOD":  0,   "LOCK": 0,  "TAG" : "rum"                    },
            { "CATEGORY":   "COMMON",   "TYPE": "FOOD",    "QTY":   12,     "MAX":   12,  "PRICE":    40, "MOOD":  0,   "LOCK": 0,  "TAG" : "smugglers ale"          },
            { "CATEGORY":   "COMMON",   "TYPE": "DRUGS",   "QTY":    4,     "MAX":    4,  "PRICE":    25, "MOOD": 40,   "LOCK": 0,  "TAG" : "fairy dust"             }
        ]
    },
    "PEACOCK" : {
        "ID" : "PEACOCK",    "NAME" : "The Grey Peacock Tavern",  "OPEN" : [1, 2, 3, 4], "RESTOCK" : 7,
        "INVENTORY" : [
            { "CATEGORY":   "COMMON",   "TYPE": "FOOD",    "QTY":   12,     "MAX":   12,  "PRICE":    16, "MOOD":  0,   "LOCK": 0,  "TAG" : "beer"                   },
            { "CATEGORY":   "COMMON",   "TYPE": "FOOD",    "QTY":   12,     "MAX":   12,  "PRICE":    20, "MOOD":  0,   "LOCK": 0,  "TAG" : "cheap wine"             },
            { "CATEGORY":   "COMMON",   "TYPE": "FOOD",    "QTY":    4,     "MAX":    4,  "PRICE":    50, "MOOD":  0,   "LOCK": 0,  "TAG" : "bread and cheese"       },
            { "CATEGORY":   "COMMON",   "TYPE": "FOOD",    "QTY":    4,     "MAX":    4,  "PRICE":    50, "MOOD":  0,   "LOCK": 0,  "TAG" : "roast fish"             },
            { "CATEGORY":   "COMMON",   "TYPE": "FOOD",    "QTY":   12,     "MAX":   12,  "PRICE":    60, "MOOD":  0,   "LOCK": 0,  "TAG" : "rum"                    }
        ]
    },
    "GOLDEN_GOODS" : {
        "ID" : "GOLDEN_GOODS",    "NAME" : "Golden Goods",  "OPEN" : [0, 1, 2, 3 ], "RESTOCK" : 7,
        "INVENTORY" : [
            { "CATEGORY":   "COMMON",   "TYPE": "FOOD",         "QTY":   12,     "MAX":   12,  "PRICE":    16, "MOOD":  0,   "LOCK": 0,  "TAG" : "beer"                   },
            { "CATEGORY":   "COMMON",   "TYPE": "FOOD",         "QTY":   12,     "MAX":   12,  "PRICE":    60, "MOOD":  0,   "LOCK": 0,  "TAG" : "rum"                    },
            { "CATEGORY":   "COMMON",   "TYPE": "COSMETICS",    "QTY":   10,     "MAX":   10,  "PRICE":    20, "MOOD":  0,   "LOCK": 0,  "TAG" : "basic makeup"           },
            { "CATEGORY":   "COMMON",   "TYPE": "COSMETICS",    "QTY":   10,     "MAX":   10,  "PRICE":    20, "MOOD":  0,   "LOCK": 0,  "TAG" : "hair products"          },
            { "CATEGORY":   "COMMON",   "TYPE": "DRUGS",        "QTY":    8,     "MAX":    8,  "PRICE":    50, "MOOD":  0,   "LOCK": 0,  "TAG" : "medicinal herbs"        },
            { "CATEGORY":   "COMMON",   "TYPE": "CLOTHES",      "QTY":    1,     "MAX":    1,  "PRICE":   300, "MOOD":  0,   "LOCK": 0,  "TAG" : "pirate boots"           },
            { "CATEGORY":   "COMMON",   "TYPE": "CLOTHES",      "QTY":    1,     "MAX":    1,  "PRICE":   200, "MOOD":  0,   "LOCK": 0,  "TAG" : "pirate bra"             },
            { "CATEGORY":   "COMMON",   "TYPE": "CLOTHES",      "QTY":    1,     "MAX":    1,  "PRICE":   200, "MOOD":  0,   "LOCK": 0,  "TAG" : "pirate thong"           },
            { "CATEGORY":   "RARE",     "TYPE": "FOOD",         "QTY":    2,     "MAX":    2,  "PRICE":   100, "MOOD":  0,   "LOCK": 0,  "TAG" : "milkdew melon"          },
            { "CATEGORY":   "RARE",     "TYPE": "FOOD",         "QTY":    2,     "MAX":    2,  "PRICE":   100, "MOOD":  0,   "LOCK": 0,  "TAG" : "honey mead"             },
            { "CATEGORY":   "RARE",     "TYPE": "FOOD",         "QTY":    2,     "MAX":    2,  "PRICE":   140, "MOOD":  0,   "LOCK": 0,  "TAG" : "butter gourd"           }
        ]
    },
};
