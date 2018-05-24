App = App || { Data: { }, Entity: { } };
App.Data.Stores = App.Data.Stores || { };

App.Data.Stores["GOLDEN_GOODS"] =  {
    "ID" : "GOLDEN_GOODS",    "NAME" : "Golden Goods",  "OPEN" : [0, 1, 2, 3 ], "RESTOCK" : 7,
    "INVENTORY" : [
        { "CATEGORY":   "COMMON",   "TYPE": "FOOD",         "QTY":   12,     "MAX":   12,  "PRICE":  1.0, "MOOD":  0,   "LOCK": 0,  "TAG" : "beer"                   },
        { "CATEGORY":   "COMMON",   "TYPE": "FOOD",         "QTY":   12,     "MAX":   12,  "PRICE":  1.0, "MOOD":  0,   "LOCK": 0,  "TAG" : "rum"                    },
        { "CATEGORY":   "COMMON",   "TYPE": "COSMETICS",    "QTY":   10,     "MAX":   10,  "PRICE":  1.0, "MOOD":  0,   "LOCK": 0,  "TAG" : "basic makeup"           },
        { "CATEGORY":   "COMMON",   "TYPE": "COSMETICS",    "QTY":   10,     "MAX":   10,  "PRICE":  1.0, "MOOD":  0,   "LOCK": 0,  "TAG" : "hair products"          },
        { "CATEGORY":   "COMMON",   "TYPE": "DRUGS",        "QTY":    8,     "MAX":    8,  "PRICE":  1.0, "MOOD":  0,   "LOCK": 0,  "TAG" : "medicinal herbs"        },
		{ "CATEGORY":   "RARE",     "TYPE": "DRUGS",    	"QTY":    1,     "MAX":    1,  "PRICE":  1.0, "MOOD":  0,   "LOCK": 0,  "TAG" : "black hair dye"   	     },
        { "CATEGORY":   "COMMON",   "TYPE": "CLOTHES",      "QTY":    1,     "MAX":    1,  "PRICE":  1.0, "MOOD":  0,   "LOCK": 0,  "TAG" : "pirate boots"           },
        { "CATEGORY":   "RARE",     "TYPE": "CLOTHES",      "QTY":    1,     "MAX":    1,  "PRICE":  1.0, "MOOD":  0,   "LOCK": 0,  "TAG" : "pirate bra"             },
        { "CATEGORY":   "RARE",     "TYPE": "CLOTHES",      "QTY":    1,     "MAX":    1,  "PRICE":  1.0, "MOOD":  0,   "LOCK": 0,  "TAG" : "pirate thong"           },
        { "CATEGORY":   "RARE",     "TYPE": "FOOD",         "QTY":    2,     "MAX":    2,  "PRICE":  1.0, "MOOD":  0,   "LOCK": 0,  "TAG" : "milkdew melon"          },
        { "CATEGORY":   "RARE",     "TYPE": "FOOD",         "QTY":    2,     "MAX":    2,  "PRICE":  1.0, "MOOD":  0,   "LOCK": 0,  "TAG" : "mighty banana"          },
        { "CATEGORY":   "RARE",     "TYPE": "FOOD",         "QTY":    2,     "MAX":    2,  "PRICE":  1.0, "MOOD":  0,   "LOCK": 0,  "TAG" : "honey mead"             },
        { "CATEGORY":   "RARE",     "TYPE": "FOOD",         "QTY":    2,     "MAX":    2,  "PRICE":  1.0, "MOOD":  0,   "LOCK": 0,  "TAG" : "butter gourd"           }
    ]
};