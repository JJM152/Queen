App = App || { Data: { }, Entity: { } };

App.Data.Drugs = {
    "nereid philtre": {
        "Name": "nereid philtre",
        "ShortDesc": "Philter of Nereid Tears",
        "LongDesc": "This light blue potion has faint specks of silver swirling in it. It smells faintly of the sea.",
        "Message": "You quaff the philter. For a moment you feel the bite of the sea... and then tranquility so sublime you lose yourself to it.",
        "Type": "potion",
        "Charges": 1,
        "UseEffect": {
            "Hormones": [5, 300, 0],
            "Femininity": [5, 100, 0],
            "Face": [0, 500, 0],
            "Lips": [0, 500, 0],
            "Hair": [6, 600, 0],
            "Waist" : [0,-500,0],
            "WillPower": [-5, -200, 0],
            "Toxicity": [50, 0, 0]
        },
        "Price": 500
    },
    "succubus philtre": {
        "Name": "succubus philtre",
        "ShortDesc": "Philter of Succubus Lust",
        "LongDesc": "This deep purple potion pulses with an otherworldly light. It smells of roses and brimstone.",
        "Message": "You quaff the philter. Almost instantly a deep feeling of arousal surfaces and your mind is filled with perverted thoughts.",
        "Type": "potion",
        "Charges": 1,
        "UseEffect": {
            "Hormones": [5, 500, 0],
            "Femininity": [5, 100, 0],
            "Bust": [5, 500, 0],
            "Ass": [5, 500, 0],
            "Hips": [5, 500, 0],
            "Waist": [-5, -500, 0],
            "Perversion": [6, 600, 0],
            "WillPower": [-10, -500, 0],
            "Toxicity": [50, 0, 0]
        },
        "Price": 500
    },
    "pixie dust": {
        "Name": "pixie dust",
        "ShortDesc": "Pixie Dust",
        "LongDesc": "This pile of dust looks to be made of gold and glimmers with magic. Touching it makes your fingers itch.",
        "Message": "You snort the pixie dust up your nostril. After a few moments of dizziness you feel yourself invigorated with energy!",
        "Type": "potion",
        "Charges": 1,
        "UseEffect": {"Energy": [3, 0, 0], "Height" : [0,-100,0], "WillPower": [0, -50, 0], "Toxicity": [10, 0, 0]},
        "Price": 10
    },
    "fairy dust": {
        "Name": "fairy dust",
        "ShortDesc": "Fairy Dust",
        "LongDesc": "This pile of dust looks to be made of pink metal flakes and glimmers with magic. Touching it makes your fingers itch.",
        "Message": "You snort the fairy dust up your nostril. After a few moments of dizziness you start giggling madly and feel yourself invigorated with energy!",
        "Type": "potion",
        "Charges": 1,
        "UseEffect": {"Energy": [2, 0, 0], "WillPower": [0, -50, 0], "Toxicity": [10, 0, 0], "Height" : [0,-50,0], "Hormones" : [0,100,0] },
        "Price": 5
    },
    "medicinal herbs": {
        "Name": "medicinal herbs",
        "ShortDesc": "Medicinal Herbs",
        "LongDesc": "These are common herbs from a variety of plants with medicinal properties.",
        "Message": "You apply the herbs to your wounds and feel slightly better.",
        "Type": "potion",
        "Charges": 1,
        "UseEffect": {"Health": [10, 0, 0], "Toxicity": [3, 0, 0]},
        "Price": 10
    },
    "healing potion" : {
        "Name": "healing potion",
        "ShortDesc": "Potion of Healing",
        "LongDesc": "These potions are a lot more common than most people would believe. They have the ability to cure minor wounds, combat disease and purge poisons from your system.",
        "Message": "You gulp down the potion. It's sickly sweet, like a viscous syrup made from pure sugar. Within moments you feel the effects as your body starts to rejuvenate.",
        "Type": "potion",
        "Charges": 1,
        "UseEffect": {"Health": [30, 0, 0], "Toxicity": [-20, 0, 0], "Nutrition" : [20, 0, 0]},
        "Price": 50
    },
    "hair tonic": {
        "Name": "hair tonic",
        "ShortDesc": "Old JumJum's Hair Tonic",
        "LongDesc": "Old JumJum's Hair Tonic - Guaranteed to do something. Guarantee not valid if seal broken.",
        "Message": "You pour the tonic over your head and massage it into your scalp. Moments later you feel a burning and itching sensation.",
        "Type": "potion",
        "Charges": 1,
        "UseEffect": {"Hair": [0, 100, 0], "Toxicity": [20, 0, 0]},
        "Price": 10
    },
    "siren elixir": {
        "Name": "siren elixir",
        "ShortDesc": "Siren's Elixir of the Mind and Body",
        "LongDesc": "You can see the pulsing pink liquid bubbling inside the small glass bottle. It glows faintly in the dark.",
        "Message": "You drink the elixir in one gulp and sense a feeling of peace flow through you. It has a faint, bittersweet taste.",
        "Type": "potion",
        "Charges": 1,
        "UseEffect": {"WillPower" : [0,200,0], "Perversion" : [0,-200,0], "Hormones" : [0,200,0], "Face" : [0,200,0], "Bust" : [0,200,0], "Waist" : [0,-100,0], "Ass" : [0,200,0], "Hair": [0, 200, 0], "Toxicity": [100, 0, 0]},
        "Price": 100
    },
    "khafkir": {
        "Name": "khafkir",
        "ShortDesc": "A bottle of distilled Khafkir",
        "LongDesc": "This potent liquor is famed for it's healing and regenerative abilities. Over consumption can have odd side effects.",
        "Message": "You tip back the bottle and take a drink. Surprisingly it doesn't burn, but instead tastes earthy and strong.",
        "Type": "potion",
        "Charges": 1,
        "UseEffect": {"Health": [20, 0, 0], "Nutrition" : [10,0,0], "Hormones" : [0,-200,0], "Toxicity": [5, 0, 0]},
        "Price": 20
    },
    "face cream": {
        "Name": "face cream",
        "ShortDesc": "Jojo Nut Face Cream",
        "LongDesc": "This brown, buttery face cream is popular for it's anti-aging and moisturising properties.",
        "Message": "You rub the lightly tan cream into your face. It has an earthy, almost nutty scent. Your face feels refreshed.",
        "Type": "potion",
        "Charges": 1,
        "UseEffect": {"Face" : [0,100,0], "Hormones" : [0,100,0],  "Toxicity": [5, 0, 0]},
        "Price": 30
    }
};