App = App || { Data: { }, Entity: { } };
App.Data.Stores = App.Data.Stores || { };

App.Data.Stores["GOLDEN_GOODS"] =  {
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
};