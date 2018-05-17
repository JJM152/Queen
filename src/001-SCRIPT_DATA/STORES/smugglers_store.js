App = App || { Data: { }, Entity: { } };
App.Data.Stores = App.Data.Stores || { };

App.Data.Stores["SMUGGLERS"] =  {
    "ID" : "SMUGGLERS",    "NAME" : "The Smuggler's Den",  "OPEN" : [ 0, 1, 2, 3, 4], "RESTOCK" : 7,
    "INVENTORY" : [
        { "CATEGORY":   "COMMON",   "TYPE": "FOOD",    "QTY":   12,     "MAX":   12,  "PRICE":    16, "MOOD":  0,   "LOCK": 0,  "TAG" : "beer"                   },
        { "CATEGORY":   "COMMON",   "TYPE": "FOOD",    "QTY":   12,     "MAX":   12,  "PRICE":    20, "MOOD":  0,   "LOCK": 0,  "TAG" : "cheap wine"             },
        { "CATEGORY":   "COMMON",   "TYPE": "FOOD",    "QTY":   12,     "MAX":   12,  "PRICE":    60, "MOOD":  0,   "LOCK": 0,  "TAG" : "rum"                    },
        { "CATEGORY":   "COMMON",   "TYPE": "FOOD",    "QTY":   12,     "MAX":   12,  "PRICE":    40, "MOOD":  0,   "LOCK": 0,  "TAG" : "smugglers ale"          },
        { "CATEGORY":   "COMMON",   "TYPE": "DRUGS",   "QTY":    4,     "MAX":    4,  "PRICE":    25, "MOOD": 40,   "LOCK": 0,  "TAG" : "fairy dust"             },
    ]
};