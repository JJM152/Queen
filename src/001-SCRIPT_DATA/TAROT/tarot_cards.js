App = App || { Data: { }, Entity: { } };

App.Data.Tarot = App.Data.Tarot || { };

App.Data.Tarot["001"] = {
    Name: "The Magician",
    Css: "tcard1",
    Chat: "\"Ah... @@color:cyan;The Magician@@. Your fate is one of good fortune leading you towards your truest potential. I see you have been held back from that which you seek by someone who has imposed transformation upon you. Your card foretells more positive changes ahead.\""+
    "You feel a distinct warming sensation throughout your body as Madame Blanche utters the words of your fortune. Though nothing seems to differ immediately, you get the overwhelming feeling that something will soon change you for the better.",
    Msg: "As you fall asleep, the words of the fortune teller are suddenly strong in your mind. You feel a momentary resurgence of your faded masculinity and sense of purpose.",
    Effects : [ "MALE_HORMONE_XP_LEGENDARY", "BOLSTER_WILL_RARE", "FEMININITY_DOWN_XP_LEGENDARY" ]
};

App.Data.Tarot["002"] = {
    Name: "The Popess",
    Css: "tcard2",
    Chat: "\"It is @@color:cyan;The Popess@@ who guides your future, I see. You shall venture upon the sea, though your destination remains shrouded by mystery. The Popess shelters you in the divine, her feminine influence restoring life and vitality.\"\n\n"+
    "Strange sensations come over you as Madame Blanche reads your fortune. You smell fragrant notes of jasmine and lavender, and a feeling of softness and comfort permeates your body. It fades away, but a lingering feeling remains that soothes your mind.",
    Msg: "As you fall asleep, the fortune teller's words come back to your mind. You feel an invisible but definitely feminine presence, and are oddly comforted by it.",
    Effects : [ "FEMALE_HORMONE_XP_LEGENDARY", "HEAL_LEGENDARY", "FEMININITY_XP_LEGENDARY" ]
};

App.Data.Tarot["003"] = {
    Name: "The Empress",
    Css: "tcard3",
    Chat: "\"Your future falls under the protection of @@color:cyan;The Empress@@. She is the steward of life, a nurturer and sustainer. Her blessings herald the creation of good things and more bountiful times ahead.\"\n\n"+
    "As Madame Blanche's reading concludes, you feel a pleasant, sweet taste on your tongue. You can't pinpoint the flavor, but it reminds you of a happy moment from your childhood in which you were given a treat and felt you had all you needed in the world. The memory fades before you can place it exactly, but the feeling of contentment it gave you lingers.",
    Msg: "As sleep begins to overtake you, the fortune teller's words echo in your mind. A feeling of satiation washes over you, and you drift off to sleep feeling hale, hearty and somehow fuller than you've been in a long while.\n\n"+
    "You also realize there's an unfamiliar box in your possession that wasn't there before. You fall asleep before you have a chance to examine it closely, but you get the sense that it's probably something good.",
    Effects : [ "NUTRITION_LEGENDARY", "HEAL_LEGENDARY", "THE_EMPRESS" ]
};

App.Data.Tarot["004"] = {
    Name: "The Emperor",
    Css: "tcard4",
    Chat: "\"I see your fate is ruled by @@color:cyan;The Emperor@@. His power is unyielding and cold, but his influence is one of masculinity and assertiveness. His command of the world symbolizes the control you seek.\"\n\n"+
    "As Madame Blanche speaks, you are immediately conscious as your emotions cool and intense purpose comes over you. Your eyes darken with a rising sense of power within your grasp, but the feeling erodes as you are reminded of your circumstances.",
    Msg: "The strong feelings that overcame you at Madame Blanche's earlier return as you feel sleep approach. The sense your fortune has reversed, that you wield control over your fate leaves an awareness of surging confidence as your last distinct thought of the night.",
    Effects : [ "MALE_HORMONE_XP_LEGENDARY", "BOLSTER_WILL_RARE", "FEMININITY_DOWN_XP_LEGENDARY" ]
};

App.Data.Tarot["005"] = {
    Name: "The Pope",
    Css: "tcard5",
    Chat: "\"It seems the wisdom of the @@color:cyan;The Pope@@ steers your fortune. He brings the blessings of knowledge to you. However, he also heralds the influence of one who will help you define your role in a group which surrounds you. Whether for better or worse, it is not for me to say.\"\n\n"+
    "You are struck by a sudden sense of new learning, though paradoxically you're not sure what specific knowledge you've gained. You ponder it for a few moments, but become distracted as you speculate who the influential person she spoke of is, and how they might affect you.",
    Msg: "Just as your consciousness reaches the verge of sleep, the fortune teller's predictions emerge briefly but clearly as your night's final thought. You recall the strange sensation of learning without knowing exactly what you'd learned, and remember the person she said would help you define your role. Very strange.\n\n"+
    "One of your skills has greatly improved.",
    Effects : [ "RANDOM_SKILL_XP_LEGENDARY" ]
};

App.Data.Tarot["006"] = {
    Name: "The Lovers",
    Css: "tcard6",
    Chat: "\"The cards foretell it is @@color:cyan;The Lovers@@ who sway your future. Their appearance tells of us of a romance which stands at a crossroads. How this dilemma will resolve is uncertain, but temptation and sacrifice are surely involved.\"\n\n"+
    "The weight of your heart's burden suddenly explodes to the forefront of your thoughts. You are tormented by uncertainty about the fate of your beloved or your future together. Simultaneously, you can see that submission to a future of lust and debauchery promises a perverse release from your torture. The clarity you once held is suddenly in question.\n\n"+
    "Then, your intense moment of crisis fades just as mysteriously as it emerged, although traces of confusion remain behind.",
    Msg: "Drifting away in your bed, you become aware once more of the crisis of the heart you felt at your fortune telling. Though it doesn't ward off sleep's inevitable grasp, you catch yourself moaning in emotional distress as you begin to fall asleep.\n\n"+
    "You become dimly aware of a bottle among your belongings that wasn't there before, but it's too late to look at it closely before you pass out completely.",
    Effects : [ "BREAK_WILL_RARE", "THE_LOVERS" ]
};

App.Data.Tarot["007"] = {
    Name: "The Chariot",
    Css: "tcard7",
    Chat: "\"@@color:cyan;The Chariot@@ leads the way forwards into your future. Energy and determination grow within you to face decisions ahead, but your path must be chosen with care. The Chariot's way is one of divine guidance and victory through hard choices, but only if one proceeds wisely.\"\n\n"+
    "Just as Madame Blanche lays the card down, a feeling of great possibility and vigor begins to course through you. You wonder what to do with your new found sense of purpose, and it feels like anything you do will succeed.\n\n"+
    "The feeling largely dissipates when you're reminded just how you arrived at this island, but a little more spring remains in your step anyway. Maybe if you try, things can get better.",
    Msg: "As you begin to fall asleep, you remember the feeling you had at Madame Blanche's fortune telling, that achieving anything might still be possible. Despite your horrible circumstances, a tiny flame of positivity burns inside you.",
    Effects : [ "BOLSTER_WILL_LEGENDARY", "ENERGY_LEGENDARY" ]
};

App.Data.Tarot["008"] = {
    Name: "Justice",
    Css: "tcard8",
    Chat: "\"Your fate now rests with the hands of @@color:cyan;Justice@@. This path is one of balance and decision, delivering those who pay heed to her into right action and responsibility. Her guidance will help bring clarity and awareness to your situation so you can do what you must.\"\n\n"+
    "At these words from the fortune teller, you gain perfect awareness of the circumstances surrounding your capture and your ensuing voyage for a few, brief moments. In this flash of fleeting clarity, everything you need to change your fate coalesces into a concrete plan. However, just as quickly as it came to you, it fades. Fortunately, the underlying sense of grounding remains.",
    Msg: "At the moment where you transition from waking into sleep, the fortune teller's words return to you. Along with them comes the same decisive feeling you experienced at her table. It stays with you as you finally drowse away.",
    Effects : [ "BOLSTER_WILL_LEGENDARY", "PERVERSION_DOWN_XP_RARE" ]
};

App.Data.Tarot["009"] = {
    Name: "The Hermit",
    Css: "tcard9",
    Chat: "\"I see @@color:cyan;The Hermit@@ is now the herald of your future. He reflects upon the inward knowledge of one's truest self, and leads one towards removing distractions. With his guidance, you may begin to find the new direction you are seeking.\"\n\n"+
    "Your focus turns towards your innermost thoughts and desires, and you feel the maelstrom of chaos you've been dealing with start to abate. Feelings of isolation that burdened you since you were press-ganged into slavery now soothe you instead, helping you find perspective. As you ponder things, you're left with a modest amount of positive thought where none existed before.",
    Msg: "In your fading moments before you fall asleep, your feeling of reflection returns amid the sliver of privacy you have in the world of your thoughts. You are granted a moment of acceptance and understanding that goes beyond your circumstances. Perhaps tomorrow will be better somehow.",
    Effects : [ "BOLSTER_WILL_RARE", "ENERGY_RARE", "PERVERSION_DOWN_XP_RARE"]
};

App.Data.Tarot["010"] = {
    Name: "The Wheel of Fortune",
    Css: "tcard10",
    Chat: "\"Ah, this card signals a turning point. @@color:cyan;The Wheel of Fortune@@ brings forth destiny, offering luck in misfortune and opportunity that springs from accidents. It is said the Wheel can change one's stars, though it is up to you to chart the course that suits you most.\"\n\n"+
    "As Madame Blanche lays the card on the tablecloth, a light sea breeze inexplicably blows through the room, stirring against draperies, fabric and the locks of your hair. In a moment, the draft reverses direction and your eyes flutter as the warm breeze caresses your cheek. As the air returns to its former calm, you enjoy the premonition of a new direction ahead.",
    Msg: "Just as you're about to fall asleep, the same strange sea breeze you felt at the fortune teller's filters through your berth, replacing the dankness of the ship's grimy decks with the clean scent of the sea. If only for a few passing moments, you feel like things could be looking up.",
    Effects : [ "BOLSTER_WILL_RARE", "HEALING_RARE", "ENERGY_RARE" ]
};

App.Data.Tarot["011"] = {
    Name: "Strength",
    Css: "tcard11",
    Chat: "\"Your fortune resides in the ascendancy of @@color:cyan;Strength@@. Though pure might is one aspect of this card, Strength can also signal composure in the face of danger, calm amid frustration, and the ability to overcome adversaries with compassion and persuasion.\"\n\n"+
    "Madame Blanche sets the card down, and almost immediately your body prickles with a flow of energy that comes from nowhere. As the sensation intensifies, you flex your fists as profound new power courses through your arms and torso. It is matched by an inner calm that builds up like the foundation of a fortress, placid but stable, allowing you to act from a collected state of mind.\n\n"+
    "Though the feeling is only transitory, you're left relaxed and feeling much more confident and capable than you've been in some time.",
    Msg: "You are nearly asleep when the power you felt at Madame Blanche's parlor returns to your body for a few seconds, leaving you feeling renewed and ready to take action. Though it fades once more, you know that somehow, a bit of that feeling of strength will stay with you.",
    Effects : [ "FITNESS_XP_LEGENDARY", "SEDUCTION_XP_RARE", "BOLSTER_WILL_RARE", "ENERGY_UNCOMMON", "HEAL_COMMON" ]
};

App.Data.Tarot["012"] = {
    Name: "The Hanged Man",
    Css: "tcard12",
    Chat: "\"Very interesting, indeed,\" says Madame Blanche. \"It appears your fate resides with @@color:cyan;The Hanged Man@@.\"\n\n"+
    "\"Though it may seem the opposite is true at first,\" she explains, \"this destiny is one of self-sacrifice, not condemnation. The Hanged Man's position is of his own choosing. Through it, he seeks a reversal of direction, surrender in the moment for gain in the long run, and yielding of one's fight for control in order to get true release. He retreats to restore the ability to advance further.\"\n\n"+
    "You contemplate Madame Blanche's words, wondering how they might apply to your situation. At length, you realise that the more you've struggled, the more you've been forced to make compromises that led you further from your goal.\n\n"+
    "",
    Msg: "At this realization, you are filled by a strange, supernatural feeling that time has been suspended, if only for a few split seconds. As it fades away, you gain a surreal calm and sense of catharsis.",
    Effects : [ "BREAK_WILL_LEGENDARY", "SERVING_XP_RARE", "COOKING_XP_RARE", "CLEANING_XP_RARE"]
};

App.Data.Tarot["013"] = {
    Name: "DEATH",
    Css: "tcard13",
    Chat: "\"@@color:cyan;The Death card@@ - your fate lies out of your own hands when Death commands your fortunes. You cannot change the situation you find yourself in, and it is only by closing the door to the past that a new one can open. Going forward into the unknown, by letting go of that which was only true in the past, is the only way to escape from the misfortunes of the present.\"\n\n"+
    "Upon hearing this reading, you are overwhelmed by a sense of hopelessness and inevitability. The rules of the life you knew before your misadventures are certainly of no use while you travail with pirates. How else can you escape but to learn to survive your situation as it is, taken at face value? A supernatural chill comes over you at this conclusion, and though you shrug it off, you wonder if it may just be true.",
    Msg: "The unease you felt upon the revelation of the Death card at Madame Blanche's has lingered throughout the day. As your mind sinks into slumber, you feel the spectral chill infiltrate your bones again, eating away at your hopefulness and sending you onward to a troubled night's sleep.",
    Effects : [ "BREAK_WILL_LEGENDARY", "HUNGER_RARE", "TOXICITY_RARE"]
};

App.Data.Tarot["014"] = {
    Name: "The Temperance",
    Css: "tcard14",
    Chat: "\"Ah... it seems your fate now lies under the measured direction of @@color:cyan;Temperance@@,\" says Madame Blanche. \"She signifies good health and vitality in full measure, but also a need for finding balance in one's circumstances. Through compromise and making accords with others, Temperance can help you find the middle ground that could improve your harsh position.\"\n\n"+
    "Madame Blanche lowers her chin and meets your gaze with wizened eyes.\n\n"+
    "\"You are wise to find moderation in your course, avoiding excesses on either side that may bring you imbalance.\"\n\n"+
    "A subtle feeling of equilibrium begins to grow as you receive the fortune teller's advice. You feel your most extreme desires compete with one another until they fade into a middle ground of modest hopefulness. Out of the exchange grows a serene sense of security that remains with you, despite the troubles you know are ahead.",
    Msg: "At the last flicker of your consciousness, you recall your fortune reading with Madame Blanche. Once more, the feeling of security amid compromise returns as you fall asleep, letting you rest peacefully throughout the night.",
    Effects : [ "BOLSTER_WILL_UNCOMMON", "PERVERSION_DOWN_XP_RARE", "HEAL_RARE", "NUTRITION_RARE", "HORMONAL_BALANCE_COMMON"]
};

App.Data.Tarot["015"] = {
    Name: "The Devil",
    Css: "tcard15",
    Chat: "Madame Blanche's hand trembles as she glances at the card she drew, hesitating before she places it face up before you. She takes hold of a small, wooden fetish and kisses it, holding it close to her heart before she begins her reading.\n\n"+
    "\"Beware, child,\" she warns, \"for @@color:cyan;The Devil@@ holds the reigns of your fortune.\"\n\n"+
    "\"You are trapped in bondage and slavery from which you cannot now escape,\" she continues. \"He shows us that you are hopeless, wandering in the dark, controlled by others, and tied down by unwanted circumstances. Your only hope is to see the situation for what it is and hold to the vision of yourself that can lead you out, for dangerous waters lie ahead.\"\n\n"+
    "Your fears and lost independence weigh on you like anchoring chains, dragging you downward. The numerous candles in the room suddenly flicker and glow less brightly for several seconds. You shiver, as if touched by a shadow. Though the feeling of invisible shackles is a fleeting one, they serve to remind you of the actual ones you must still contend with.",
    Msg: "You toss in your bunk, recalling the fortune teller's warning as you grapple with feelings of doubt and despair. As you descend into unconciousness, the lanterns on deck grow dimmer without any apparent cause, drawing superstitious mumblings from several crewmen. Sleep overcomes you anyway, but the bleak feeling snakes on through dark dreams that trouble your night.",
    Effects : [ "BREAK_WILL_LEGENDARY", "TOXICITY_RARE" ]
};

App.Data.Tarot["016"] = {
    Name: "The Tower",
    Css: "tcard16",
    Chat:
    "\"@@color:cyan;The Tower@@. It means your fate is in question, your plans thwarted, and great peril now surrounds you. You have fallen into a place from which chaos has taken over your life, and your ego has been humbled. Regrettably, this is not a card for good news,\" says Madame Blanche.\n\n"+
    "\"However, the Tower also shows us that a new realization may be upon you. What you thought was true was not, and now you may see yourself as you really are because of it. What you do with that knowledge is up to you.\"\n\n"+
    "At her words, you begin to search yourself for the formerly hidden revelation she spoke of. The downfall and peril she spoke of are obvious, but you begin to focus on how you've reacted to your misfortune. Perhaps that says a lot about who you are.\n\n"+
    "Like a chime from a clarion bell on a dark night, you start to see the choices you've made and where they are taking you. Now, you've got to make up your own mind about what to do next with that knowledge.\n\n",
    Msg: "With your eyes closed, you lie in your bunk, waiting for sleep. Just as you are about to drift off, you remember Madame Blanche's telling of your fortune and the reflection of self that came along with it. You fall asleep, your last ruminations spent on what direction to take next.",
    Effects : [ "TOXICITY_RARE" ]
};

App.Data.Tarot["017"] = {
    Name: "The Star",
    Css: "tcard17",
    Chat: "\"This card means good things lie in the future. @@color:cyan;The Star@@ is a symbol of hope, of creativity and giving. It means inspiration may be coming to you, and that you can find a sense of peace and harmony,\" she smiles.\n\n"+
    "\"You should know, however, The Star is more about possibility than about solutions to problems we have right now,\" she cautions. \"You must still act on your own to improve your situation, but The Star sends us light in the darkness to inspire and guide us.\"\n\n"+
    "Your reading leaves you with a greatly improved sense of hopefulness, and Madame Blanche's words get you thinking about how you can better your situation. You get the feeling that if you put your mind to it, things could work out. For a second, it really does feel like you're being guided by the light of a star looking down on you, and the thought leaves you smiling contentedly.",
    Msg: "On the way to your bunk, you glimpse a particularly bright star through one of the hatches. As you lie down and settle in, you find yourself feeling relatively good despite the day's trials. Maybe there is hope, like your fortune said.",
    Effects : [ "BOLSTER_WILL_RARE", "ENERGY_LEGENDARY", "HEAL_LEGENDARY" ]
};

App.Data.Tarot["018"] = {
    Name: "The Moon",
    Css: "tcard18",
    Chat: "\"@@color:cyan;The Moon@@ signifies a moment of confusion, anxiety and disorientation. Your life may be full of things unfamiliar and frightenting, but your own inability to think clearly and overcome your own illusions and fears prevents you from overcoming them. Fortunately, The Moon also gives you the freedom to act on your imagination, opening yourself to creativity which may help you find an escape.\"\n\n"+
    "You reflect on the fortune Madame Blanche has given you, wondering if it really is your inner fears that are keeping you from confronting the very real dangers around you. You've spent so much time despairing over your situation, trying to puzzle your way out, that what she says hits home. The questions remain, however: How do you find clarity to respond when your situation is so overwhelming? And, would it be so bad to indulge your fevered thoughts if they will help you get away from the horrors you're facing?\n\n"+
    "Your head swims and you feel physically disoriented for a moment, as if the day was suddenly turned upside down and the glow of the moon was all that lights your surroundings. You come to after a moment, but residual confusion remains.",
    Msg: "Tonight, the ship is awash in pale, purple light, cast by an unnaturally large moon. As you head to your cabin, you notice that even aboard a pirate ship, the world feels veiled by a surreal reality that feels more like fantasy. Several crewmembers look into the night sky with suspicion, murmuring tales to one another in hushed voices.\n\n"+
    "You try to shrug it off, but as you sink into your bunk, the feeling of disorientation you felt at the fortune teller's comes back, multiplying your misgivings and swamping your thoughts with confusion once more. The allure of imaginative escape overcomes you as you fall asleep, and a night full of lecherous imaginings lies ahead in your wettest of dreams.",
    Effects : [ "PERVERSION_XP_LEGENDARY", "BREAK_WILL_RARE" ]
};

App.Data.Tarot["019"] = {
    Name: "The Sun",
    Css: "tcard19",
    Chat: "\"@@color:cyan;The Sun@@ guides your path, I am glad to say. The light of The Sun is a powerful and benevolent force, giving you good fortune and confidence in matters you face ahead. This is a way of courage and vitality, of self-assuredness and success.\"\n\n"+
    "As Madame Blanche releases the card to the tabletop, you feel an all-encompasing warmth permeating your whole body. It's accompanied by confidence in yourself and assurance that you can do what you need to do to get through everything. You don't feel boastful, just sure and competent.",
    Msg: "As you make ready to get some sleep, settling into your bunk, the feeling of warmth you felt at the fortune tellers waxes through your body again. Basking in the glow of confidence and assurance it brings, you know that tomorrow you're going to be in a much better place about this whole ordeal.",
    Effects : [ "BOLSTER_WILL_LEGENDARY", "HEAL_LEGENDARY", "ENERGY_LEGENDARY", "NUTRITION_LEGENDARY"]
};

App.Data.Tarot["020"] = {
    Name: "Judgement",
    Css: "tcard20",
    Chat: "\"This reading is cloudy for me,\" she says, \"because much is left for you to decide. That's how @@color:cyan;Judgement@@ works, as it represents many things, making it one of the most difficult among the Tarot to discern.\"\n"+
    "\"For you, Judgement may mean you need to make a stand - or else make the hard choice not to, in order to survive. It may mean making a fresh start, seeing your situation in a different light and acting accordingly. It may also mean that a reckoning is upon you, and you need to seek redemption before its too late. I see all these things in your future, but which among them is the strongest remains uncertain.\"\n\n"+
    "As the card slides from Madame Blanche's hand onto the table, you feel a growing call to action inside you, calling for decisions and seeking absolution for your choices and deeds, past and future. Your eyes fill with bright light for an instant, though as soon as you blink, it fades away. As your vision returns, you feel compelled to decide your next course of action carefully, knowing that Judgment may well be upon you.",
    Msg: "Closing your eyes to sleep, the blinding light flashes in your eyes, and the urgent call to decisive action returns. The light fades, but you don't even have time to realize it before you fall into slumber. As you sleep, you dream of being absolved of all your recent sins and cleansed, though critical choices still remain ahead of you.",
    Effects : [ "BOLSTER_WILL_UNCOMMON", "HEAL_LEGENDARY", "ENERGY_UNCOMMON", "PERVERSION_DOWN_XP_LEGENDARY" ]
};

App.Data.Tarot["021"] = {
    Name: "The World",
    Css: "tcard21",
    Chat: "\"I am very happy to tell you,\" Madame Blanche smiles, \"@@color:cyan;The World@@ brings the most positive influence on your fortunes among all the Tarot. It represents the connection of the world and the divine, a perfect wholeness that creates joy, fulfillment and contentment. It is a sign of coming prosperity and solutions at hand to problems you've faced, and of gaining peace of mind.\""+
    "You feel immediately buoyed inside by the words of Madame Blanche's reading, daring to hope for a positive turn in your life. Though a full resolution of your many problems seems unlikely, you wonder just how far some good fortune would go to set things right for you. The thought pours through you like a salve, washing away bad feelings and hopeless thoughts like an incoming tide.",
    Msg: "You slide into your bunk, looking forward to the respite of sleep, when the warm tide of hope returns, just as it did at Madame Blanche's fortune telling parlor. You smile with a new found contentment. Though the future is still uncertain, right now you feel pretty good about it.",
    Effects : [ "HEAL_LEGENDARY", "ENERGY_LEGENDARY", "NUTRITION_LEGENDARY", "BOLSTER_WILL_RARE" ]
};

App.Data.Tarot["022"] = {
    Name: "The Fool",
    Css: "tcard22",
    Chat: "\"Ah, @@color:cyan;The Fool@@,\" says Madame Blanche. \"His journey represents the beginning of all things, though he is accompanied by doubt and uncertainty. The Fool tells us that transition lies ahead of you, through personal transformations and life changes that will take place as you travel along. He also represents embracing folly, by taking chances where the odds are long or the choice seems crazy, in order to obtain the thing you desire most.\"\n\n"+
    "You consider the words of your reading, and are inspired to imagine your path ahead as a new adventure with a hopeful ending. You admit you've never faced a challenge like the one in front of you now. Maybe the odds are long and the choices dubious, but if you tackle it head on and let the chips fall where they may, you might just come out of it better than you'd ever have been otherwise.",
    Msg: "The image of The Fool returns to your thoughts as you lie in your bunk getting ready to go to sleep. As your eyes flutter closed, you begin to think about the bizarre journey you've begun. Though many parts of it have been unspeakably horrible to be sure, you wonder if you might also extract some good from it? It's crazy... but it just might work.",
    Effects : [ "HEAL_LEGENDARY", "ENERGY_LEGENDARY"]
};

