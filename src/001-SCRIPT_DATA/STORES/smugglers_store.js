App = App || { Data: { }, Entity: { } };
App.Data.Stores = App.Data.Stores || { };

App.Data.Stores["SMUGGLERS"] =  {
    "ID" : "SMUGGLERS",    "NAME" : "The Smuggler's Den",  "OPEN" : [ 0, 1, 2, 3, 4], "RESTOCK" : 7,
    "INVENTORY" : [
        { "CATEGORY":   "COMMON",   "TYPE": "FOOD",    "QTY":   12,     "MAX":   12,  "PRICE":   1.0, "MOOD":  0,   "LOCK": 0,  "TAG" : "beer"                   },
        { "CATEGORY":   "COMMON",   "TYPE": "FOOD",    "QTY":   12,     "MAX":   12,  "PRICE":   1.0, "MOOD":  0,   "LOCK": 0,  "TAG" : "cheap wine"             },
        { "CATEGORY":   "COMMON",   "TYPE": "FOOD",    "QTY":   12,     "MAX":   12,  "PRICE":   1.0, "MOOD":  0,   "LOCK": 0,  "TAG" : "rum"                    },
        { "CATEGORY":   "COMMON",   "TYPE": "FOOD",    "QTY":   12,     "MAX":   12,  "PRICE":   1.0, "MOOD":  0,   "LOCK": 0,  "TAG" : "smugglers ale"          },
        { "CATEGORY":   "COMMON",   "TYPE": "DRUGS",   "QTY":    4,     "MAX":    4,  "PRICE":   1.0, "MOOD": 40,   "LOCK": 0,  "TAG" : "fairy dust"             },
        // LOCKED ITEMS
        { "CATEGORY":   "COMMON",   "TYPE": "WEAPON",  "QTY":    1,     "MAX":    1,  "PRICE":   1.0, "MOOD": 50,   "LOCK": 1,  "TAG" : "steel cutlass"          },
        // RARE ITEMS
        { "CATEGORY":   "RARE",     "TYPE": "DRUGS",   "QTY":    1,     "MAX":    1,  "PRICE":   1.0, "MOOD":  0,   "LOCK": 0,  "TAG" : "female mandrake"        },
        { "CATEGORY":   "RARE",     "TYPE": "DRUGS",   "QTY":    1,     "MAX":    1,  "PRICE":   1.0, "MOOD":  0,   "LOCK": 0,  "TAG" : "male mandrake"          }
    ]
};