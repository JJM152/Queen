App = App || { Data: { }, Entity: { } };

App.Data.Drugs = {
    "nereid philtre": {
        "Name": "nereid philtre",
        "ShortDesc": "Philter of Nereid Tears",
        "LongDesc": "This light blue potion has faint specks of silver swirling in it. It smells faintly of the sea.",
        "Message": "You quaff the philter. For a moment you feel the bite of the sea... and then tranquility so sublime you lose yourself to it.",
        "Type": "potion",
        "Charges": 1,
        "Effects": [ "NEREID_PHILTRE" ]
    },
    "succubus philtre": {
        "Name": "succubus philtre",
        "ShortDesc": "Philter of Succubus Lust",
        "LongDesc": "This deep purple potion pulses with an otherworldly light. It smells of roses and brimstone.",
        "Message": "You quaff the philter. Almost instantly a deep feeling of arousal surfaces and your mind is filled with perverted thoughts.",
        "Type": "potion",
        "Charges": 1,
        "Effects": [ "SUCCUBUS_PHILTRE" ]
    },
    "pixie dust": {
        "Name": "pixie dust",
        "ShortDesc": "Pixie Dust",
        "LongDesc": "This pile of dust looks to be made of gold and glimmers with magic. Touching it makes your fingers itch.",
        "Message": "You snort the pixie dust up your nostril. After a few moments of dizziness you feel yourself invigorated with energy!",
        "Type": "potion",
        "Charges": 1,
        "Effects": [ "ENERGY_UNCOMMON", "SHRINK_UNCOMMON", "TOXICITY_COMMON", "BREAK_WILL_COMMON" ]
    },
    "fairy dust": {
        "Name": "fairy dust",
        "ShortDesc": "Fairy Dust",
        "LongDesc": "This pile of dust looks to be made of pink metal flakes and glimmers with magic. Touching it makes your fingers itch.",
        "Message": "You snort the fairy dust up your nostril. After a few moments of dizziness you start giggling madly and feel yourself invigorated with energy!",
        "Type": "potion",
        "Charges": 1,
        "Effects": [ "ENERGY_COMMON", "SHRINK_COMMON", "TOXICITY_COMMON", "BREAK_WILL_COMMON" ]
    },
    "medicinal herbs": {
        "Name": "medicinal herbs",
        "ShortDesc": "Medicinal Herbs",
        "LongDesc": "These are common herbs from a variety of plants with medicinal properties.",
        "Message": "You apply the herbs to your wounds and feel slightly better.",
        "Type": "potion",
        "Charges": 1,
        "Effects" : [ "HEAL_COMMON", "TOXICITY_COMMON" ]
    },
    "healing potion" : {
        "Name": "healing potion",
        "ShortDesc": "Potion of Healing",
        "LongDesc": "These potions are a lot more common than most people would believe. They have the ability to cure minor wounds, combat disease and purge poisons from your system.",
        "Message": "You gulp down the potion. It's sickly sweet, like a viscous syrup made from pure sugar. Within moments you feel the effects as your body starts to rejuvenate.",
        "Type": "potion",
        "Charges": 1,
        "Effects" : [ "HEAL_COMMON", "PURGE_COMMON", "NUTRITION_UNCOMMON" ]
    },
    "hair tonic": {
        "Name": "hair tonic",
        "ShortDesc": "Old JumJum's Hair Tonic",
        "LongDesc": "Old JumJum's Hair Tonic - Guaranteed to do something. Guarantee not valid if seal broken.",
        "Message": "You pour the tonic over your head and massage it into your scalp. Moments later you feel a burning and itching sensation.",
        "Type": "potion",
        "Charges": 1,
        "Effects" : [ "HAIR_XP_COMMON", "TOXICITY_COMMON" ]
    },
    "siren elixir": {
        "Name": "siren elixir",
        "ShortDesc": "Siren's Elixir of the Mind and Body",
        "LongDesc": "You can see the pulsing pink liquid bubbling inside the small glass bottle. It glows faintly in the dark.",
        "Message": "You drink the elixir in one gulp and sense a feeling of peace flow through you. It has a faint, bittersweet taste.",
        "Type": "potion",
        "Charges": 1,
        "Effects" : [ "SIREN_ELIXIR" ]
    },
    "khafkir": {
        "Name": "khafkir",
        "ShortDesc": "A bottle of distilled Khafkir",
        "LongDesc": "This potent liquor is famed for it's healing and regenerative abilities. Over consumption can have odd side effects.",
        "Message": "You tip back the bottle and take a drink. Surprisingly it doesn't burn, but instead tastes earthy and strong.",
        "Type": "potion",
        "Charges": 1,
        "Effects" : [ "HEAL_COMMON", "NUTRITION_COMMON", "MALE_HORMONE_XP_RARE", "TOXICITY_UNCOMMON" ]
    },
    "face cream": {
        "Name": "face cream",
        "ShortDesc": "Jojo Nut Face Cream",
        "LongDesc": "This brown, buttery face cream is popular for it's anti-aging and moisturising properties.",
        "Message": "You rub the lightly tan cream into your face. It has an earthy, almost nutty scent. Your face feels refreshed.",
        "Type": "potion",
        "Charges": 1,
        "Effects" : [ "FACE_XP_COMMON", "FEMALE_HORMONE_XP_COMMON", "TOXICITY_COMMON"]
    },
     "lip balm": {
        "Name": "lip balm",
        "ShortDesc": "strawberry flavored lip balm",
        "LongDesc": "This one time use lip balm smells like strawberry and makes your lips feel nice.",
        "Message": "You rub the lip balm into your lips. It smells like natural strawberry and makes your lips tingle.",
        "Type": "potion",
        "Charges": 1,
        "Effects" : [ "LIPS_XP_COMMON", "FEMALE_HORMONE_XP_COMMON", "TOXICITY_COMMON"]
    },
	"black hair dye": {
        "Name": "black hair dye",
        "ShortDesc": "a vial of plant based black dye",
        "LongDesc": "This common dye product can be used to change the color of your hair.",
        "Message": "You rub the inky mess into your hair and let it sit. Eventually you washing the remnants out and your hair has taken on a new color.",
        "Type": "potion",
        "Charges": 1,
        "Effects" : [ "BLACK_HAIR_DYE" ]
    },
	"brown hair dye": {
        "Name": "brown hair dye",
        "ShortDesc": "a vial of plant based brown dye",
        "LongDesc": "This common dye product can be used to change the color of your hair.",
        "Message": "You rub the muddy colored mess into your hair and let it sit. Eventually you washing the remnants out and your hair has taken on a new color.",
        "Type": "potion",
        "Charges": 1,
        "Effects" : [ "BROWN_HAIR_DYE" ]
    },
	"red hair dye": {
        "Name": "red hair dye",
        "ShortDesc": "a vial of plant based red dye",
        "LongDesc": "This common dye product can be used to change the color of your hair.",
        "Message": "You rub the ruddy mess into your hair and let it sit. Eventually you washing the remnants out and your hair has taken on a new color.",
        "Type": "potion",
        "Charges": 1,
        "Effects" : [ "RED_HAIR_DYE" ]
    },
	"blond hair dye": {
        "Name": "blond hair dye",
        "ShortDesc": "a vial of strong hair bleach",
        "LongDesc": "This foul smelling concotion can be used to remove color from your hair.",
        "Message": "You rub the causting chemicals into your hair, trying not to burn you scalp. After suffering for a while through the fumes, you wash it out and your hair has changed color.",
        "Type": "potion",
        "Charges": 1,
        "Effects" : [ "BLOND_HAIR_DYE" ]
    }		
};





