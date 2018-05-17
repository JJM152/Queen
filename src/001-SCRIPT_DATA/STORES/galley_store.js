App = App || { Data: { }, Entity: { } };
App.Data.Stores = App.Data.Stores || { };

App.Data.Stores["GALLEY"] = {
    "ID" : "GALLEY",    "NAME" : "Salty Mermaid Galley",  "OPEN" : [0, 1, 2, 3], "RESTOCK" : 7,
    "INVENTORY" : [
        { "CATEGORY":   "COMMON",   "TYPE": "FOOD",    "QTY":   12,     "MAX":   12,  "PRICE":  1.0, "MOOD":  0,   "LOCK": 0,  "TAG" : "slave gruel"            },
        { "CATEGORY":   "COMMON",   "TYPE": "FOOD",    "QTY":    8,     "MAX":    8,  "PRICE":  1.0, "MOOD":  0,   "LOCK": 0,  "TAG" : "grog"                   },
        { "CATEGORY":   "COMMON",   "TYPE": "FOOD",    "QTY":    4,     "MAX":    4,  "PRICE":  1.0, "MOOD": 20,   "LOCK": 0,  "TAG" : "mystery stew"           },
        { "CATEGORY":   "COMMON",   "TYPE": "FOOD",    "QTY":    2,     "MAX":    2,  "PRICE":  1.0, "MOOD": 40,   "LOCK": 0,  "TAG" : "starfruit"              },
        { "CATEGORY":   "COMMON",   "TYPE": "FOOD",    "QTY":    2,     "MAX":    2,  "PRICE":  1.0, "MOOD": 65,   "LOCK": 0,  "TAG" : "pink peach"             },
        { "CATEGORY":   "RARE",     "TYPE": "FOOD",    "QTY":    1,     "MAX":    1,  "PRICE":  1.0, "MOOD": 60,   "LOCK": 0,  "TAG" : "milkdew melon"          },
        { "CATEGORY":   "RARE",     "TYPE": "FOOD",    "QTY":    1,     "MAX":    1,  "PRICE":  1.0, "MOOD": 80,   "LOCK": 0,  "TAG" : "honey mead"             },
        { "CATEGORY":   "RARE",     "TYPE": "FOOD",    "QTY":    1,     "MAX":    1,  "PRICE":  1.0, "MOOD": 80,   "LOCK": 0,  "TAG" : "butter gourd"           }
    ]
};