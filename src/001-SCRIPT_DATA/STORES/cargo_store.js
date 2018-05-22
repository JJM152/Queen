App = App || { Data: { }, Entity: { } };
App.Data.Stores = App.Data.Stores || { };

App.Data.Stores["CARGO"] = {
    "ID" : "CARGO",     "NAME" : "Julius's Secret Stash", "OPEN" : [2, 3], "RESTOCK" : 7,
        "INVENTORY" : [
        { "CATEGORY":   "COMMON",   "TYPE": "DRUGS",    "QTY":    4,    "MAX":    4,  "PRICE":  1.0, "MOOD":  0,   "LOCK": 0,  "TAG" : "pixie dust"            },
        { "CATEGORY":   "COMMON",   "TYPE": "DRUGS",    "QTY":    4,    "MAX":    4,  "PRICE":  1.0, "MOOD": 20,   "LOCK": 0,  "TAG" : "medicinal herbs"       },
        { "CATEGORY":   "COMMON",   "TYPE": "DRUGS",    "QTY":    4,    "MAX":    4,  "PRICE":  1.0, "MOOD": 40,   "LOCK": 0,  "TAG" : "fairy dust"            },
        { "CATEGORY":   "COMMON",   "TYPE": "DRUGS",    "QTY":    2,    "MAX":    2,  "PRICE":  1.0, "MOOD": 80,   "LOCK": 0,  "TAG" : "face cream"            },
        { "CATEGORY":   "COMMON",   "TYPE": "DRUGS",    "QTY":    2,    "MAX":    2,  "PRICE":  1.0, "MOOD": 70,   "LOCK": 0,  "TAG" : "lip balm"              },
        { "CATEGORY":   "COMMON",   "TYPE": "DRUGS",    "QTY":    2,    "MAX":    2,  "PRICE":  1.0, "MOOD": 20,   "LOCK": 1,  "TAG" : "khafkir"               },
        { "CATEGORY":   "COMMON",   "TYPE": "DRUGS",    "QTY":    1,    "MAX":    1,  "PRICE":  1.0, "MOOD": 60,   "LOCK": 1,  "TAG" : "siren elixir"          },
		// RARE ITEMS
        { "CATEGORY":   "RARE",     "TYPE": "DRUGS",    "QTY":    2,    "MAX":    2,  "PRICE":  1.0, "MOOD": 60,   "LOCK": 0,  "TAG" : "hair tonic"            },
        { "CATEGORY":   "RARE",     "TYPE": "FOOD",     "QTY":    2,    "MAX":    2,  "PRICE":  1.0, "MOOD": 60,   "LOCK": 0,  "TAG" : "starfruit"             },
        { "CATEGORY":   "RARE",     "TYPE": "DRUGS",    "QTY":    1,    "MAX":    1,  "PRICE":  1.0, "MOOD": 80,   "LOCK": 0,  "TAG" : "nereid philtre"        },
        { "CATEGORY":   "RARE",     "TYPE": "DRUGS",    "QTY":    1,    "MAX":    1,  "PRICE":  1.0, "MOOD": 80,   "LOCK": 0,  "TAG" : "succubus philtre"      },
		{ "CATEGORY":   "RARE",     "TYPE": "DRUGS",    "QTY":    1,    "MAX":    1,  "PRICE":  1.0, "MOOD": 0,    "LOCK": 0,  "TAG" : "brown hair dye"   	   }
    ]
};