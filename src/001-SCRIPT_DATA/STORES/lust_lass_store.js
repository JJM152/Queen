App = App || { Data: { }, Entity: { } };
App.Data.Stores = App.Data.Stores || { };

App.Data.Stores["LUSTY_LASS"] = {
    "ID" : "LUSTY_LASS",    "NAME" : "The Lusty Lass",  "OPEN" : [0, 1, 2, 3, 4], "RESTOCK" : 7,
    // Simone's mood starts at 40.
    "INVENTORY" : [
        // Food
        { "CATEGORY":   "COMMON",   "TYPE": "FOOD",    "QTY":   12,     "MAX":   12,  "PRICE":    16, "MOOD":  0,   "LOCK": 0,  "TAG" : "beer"                          },
        { "CATEGORY":   "COMMON",   "TYPE": "FOOD",    "QTY":   12,     "MAX":   12,  "PRICE":    20, "MOOD":  0,   "LOCK": 0,  "TAG" : "cheap wine"                    },
        { "CATEGORY":   "COMMON",   "TYPE": "FOOD",    "QTY":    4,     "MAX":    4,  "PRICE":    50, "MOOD":  0,   "LOCK": 0,  "TAG" : "bread and cheese"              },
        { "CATEGORY":   "COMMON",   "TYPE": "FOOD",    "QTY":    4,     "MAX":    4,  "PRICE":    50, "MOOD":  0,   "LOCK": 0,  "TAG" : "roast fish"                    },
        { "CATEGORY":   "COMMON",   "TYPE": "FOOD",    "QTY":   12,     "MAX":   12,  "PRICE":    60, "MOOD":  0,   "LOCK": 0,  "TAG" : "rum"                           },
        // Clothes COMMON/UNCOMMON - Mood 40+
        { "CATEGORY":   "COMMON",   "TYPE": "CLOTHES",      "QTY":    1,     "MAX":    1,  "PRICE":   150, "MOOD":   0,   "LOCK": 0,  "TAG" : "silk stockings"           },
        { "CATEGORY":   "COMMON",   "TYPE": "CLOTHES",      "QTY":    1,     "MAX":    1,  "PRICE":   500, "MOOD":   0,   "LOCK": 0,  "TAG" : "tall heels"               },
        // Clothes UNCOMMON - Mood 50+
        { "CATEGORY":   "COMMON",   "TYPE": "CLOTHES",      "QTY":    1,     "MAX":    1,  "PRICE":   200, "MOOD":  50,   "LOCK": 0,  "TAG" : "cute pink bra"            },
        { "CATEGORY":   "COMMON",   "TYPE": "CLOTHES",      "QTY":    1,     "MAX":    1,  "PRICE":   300, "MOOD":  60,   "LOCK": 0,  "TAG" : "cute pink panties"        },
        // Clothes RARE - Mood 80+
        { "CATEGORY":   "COMMON",   "TYPE": "CLOTHES",      "QTY":    1,     "MAX":    1,  "PRICE":   500, "MOOD":  80,   "LOCK": 0,  "TAG" : "pigtail wig"              },
        // RARE ITEMS
        { "CATEGORY":   "RARE",     "TYPE": "DRUGS",    "QTY":    1,     "MAX":    1,  "PRICE":   100, "MOOD": 0,   "LOCK": 0,  "TAG" : "khafkir"          },
        { "CATEGORY":   "RARE",     "TYPE": "DRUGS",    "QTY":    1,     "MAX":    1,  "PRICE":    50, "MOOD": 0,   "LOCK": 0,  "TAG" : "pixie dust"       },
        { "CATEGORY":   "RARE",     "TYPE": "FOOD",     "QTY":    1,     "MAX":    1,  "PRICE":   140, "MOOD": 0,   "LOCK": 0,  "TAG" : "butter gourd"     },
        // RARE CLOTHES - Mood 90+
        { "CATEGORY":   "COMMON",   "TYPE": "CLOTHES",      "QTY":    1,     "MAX":    1,  "PRICE":   1000, "MOOD":  90,   "LOCK": 0,  "TAG" : "pink tartan"         },
        { "CATEGORY":   "COMMON",   "TYPE": "CLOTHES",      "QTY":    1,     "MAX":    1,  "PRICE":   1000, "MOOD":  90,   "LOCK": 0,  "TAG" : "pink t-shirt"        }
    ]
};