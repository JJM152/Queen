App = App || { Data: { }, Entity: { } };
App.Data.Stores = App.Data.Stores || { };

App.Data.Stores["ISLASTORE"] = {
    "ID" : "ISLASTORE",    "NAME" : "Isla Harbor General Store",  "OPEN" : [0, 1, 2, 3], "RESTOCK" : 7,
    "INVENTORY" : [
        { "CATEGORY":   "COMMON",   "TYPE": "COSMETICS",    "QTY":    5,     "MAX":    5,  "PRICE":  1.0, "MOOD":  0,   "LOCK": 0,  "TAG" : "basic makeup"             },
        { "CATEGORY":   "COMMON",   "TYPE": "COSMETICS",    "QTY":    5,     "MAX":    5,  "PRICE":  1.0, "MOOD":  0,   "LOCK": 0,  "TAG" : "hair products"            },
        { "CATEGORY":   "COMMON",   "TYPE": "MISC_CONSUMABLE","QTY": 10,     "MAX":   10,  "PRICE":  1.0, "MOOD":  0,   "LOCK": 0,  "TAG" : "torch"                  },
        { "CATEGORY":   "COMMON",   "TYPE": "MISC_CONSUMABLE","QTY":  8,     "MAX":    1,  "PRICE":  1.0, "MOOD":  0,   "LOCK": 0,  "TAG" : "shovel"                 },
        { "CATEGORY":   "COMMON",   "TYPE": "FOOD",         "QTY":    5,     "MAX":    5,  "PRICE":  1.0, "MOOD":  0,   "LOCK": 0,  "TAG" : "fortified wine"           },
        { "CATEGORY":   "COMMON",   "TYPE": "CLOTHES",      "QTY":    1,     "MAX":    1,  "PRICE":  1.0, "MOOD":  0,   "LOCK": 0,  "TAG" : "wig"                      },
        { "CATEGORY":   "COMMON",   "TYPE": "CLOTHES",      "QTY":    1,     "MAX":    1,  "PRICE":  1.0, "MOOD":  0,   "LOCK": 0,  "TAG" : "sundress"                 },
        { "CATEGORY":   "COMMON",   "TYPE": "CLOTHES",      "QTY":    1,     "MAX":    1,  "PRICE":  1.0, "MOOD":  0,   "LOCK": 0,  "TAG" : "striped bra"              },
        { "CATEGORY":   "COMMON",   "TYPE": "CLOTHES",      "QTY":    1,     "MAX":    1,  "PRICE":  1.0, "MOOD":  0,   "LOCK": 0,  "TAG" : "striped panties"          },
        { "CATEGORY":   "COMMON",   "TYPE": "CLOTHES",      "QTY":    1,     "MAX":    1,  "PRICE":  1.0, "MOOD":  0,   "LOCK": 0,  "TAG" : "striped stockings"        },
		// RARE ITEMS                                                                                1.0
        { "CATEGORY":   "RARE",     "TYPE": "CLOTHES",      "QTY":    1,     "MAX":    1,  "PRICE":  1.0, "MOOD":  0,   "LOCK": 0,  "TAG" : "frilly bloomers"          },
        { "CATEGORY":   "RARE",     "TYPE": "CLOTHES",      "QTY":    1,     "MAX":    1,  "PRICE":  1.0, "MOOD":  0,   "LOCK": 0,  "TAG" : "frilly dress"             },
        { "CATEGORY":   "RARE",     "TYPE": "CLOTHES",      "QTY":    1,     "MAX":    1,  "PRICE":  1.0, "MOOD":  0,   "LOCK": 0,  "TAG" : "pink mary janes"          },
        { "CATEGORY":   "RARE",     "TYPE": "CLOTHES",      "QTY":    1,     "MAX":    1,  "PRICE":  1.0, "MOOD":  0,   "LOCK": 0,  "TAG" : "pink platform mary janes" },
        { "CATEGORY":   "RARE",     "TYPE": "CLOTHES",      "QTY":    1,     "MAX":    1,  "PRICE":  1.0, "MOOD":  0,   "LOCK": 0,  "TAG" : "pink head bow"            },
		{ "CATEGORY":   "RARE",     "TYPE": "DRUGS",    	"QTY":    1,     "MAX":    1,  "PRICE":  1.0, "MOOD":  0,   "LOCK": 0,  "TAG" : "red hair dye"   		   }
		
    ]
};