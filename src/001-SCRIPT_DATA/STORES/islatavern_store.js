App = App || { Data: { }, Entity: { } };
App.Data.Stores = App.Data.Stores || { };

App.Data.Stores["ISLATAVERN"] = {
    "ID" : "ISLATAVERN",    "NAME" : "Isla Harbor Tavern",  "OPEN" : [1, 2, 3, 4], "RESTOCK" : 7,
    "INVENTORY" : [
        { "CATEGORY":   "COMMON",   "TYPE": "FOOD",    "QTY":   12,     "MAX":   12,  "PRICE":    16, "MOOD":  0,   "LOCK": 0,  "TAG" : "beer"                   },
        { "CATEGORY":   "COMMON",   "TYPE": "FOOD",    "QTY":   12,     "MAX":   12,  "PRICE":    20, "MOOD":  0,   "LOCK": 0,  "TAG" : "cheap wine"             },
        { "CATEGORY":   "COMMON",   "TYPE": "FOOD",    "QTY":    4,     "MAX":    4,  "PRICE":    50, "MOOD":  0,   "LOCK": 0,  "TAG" : "bread and cheese"       },
        { "CATEGORY":   "COMMON",   "TYPE": "FOOD",    "QTY":    4,     "MAX":    4,  "PRICE":    50, "MOOD":  0,   "LOCK": 0,  "TAG" : "roast fish"             },
        { "CATEGORY":   "COMMON",   "TYPE": "FOOD",    "QTY":   12,     "MAX":   12,  "PRICE":    60, "MOOD":  0,   "LOCK": 0,  "TAG" : "rum"                    }
    ]
};