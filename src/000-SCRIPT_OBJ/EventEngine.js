App.EventEngine = class EventEngine {

    constructor() {
        this._PassageOverride = null;
    }

    get PassageOverride() { return this._PassageOverride; }
    set PassageOverride(n) { this._PassageOverride = n; };
    
    /**
     * Checks a dictionary of destinations (including 'any') for conditions to process.
     * On a succesful evaluation return a string of a twine passage to the initiating handler
     * that overrides the characters navigation to that passage. Also, save both the calling
     * passage and the original destination passage for later use by the passage we are
     * redirecting to.
     * @param {App.Entity.Player} Player
     * @param {string} FromPassage
     * @param {string} ToPassage
     * @returns {string|null} OverridePassage
     */
    CheckEvents(Player, FromPassage, ToPassage) {

        this._fromPassage = FromPassage;
        this._toPassage = ToPassage;

        this._d("From: "+FromPassage+",To:"+ToPassage);
        
        //One time override
        if (this.PassageOverride != null) {
            var tmp = this.PassageOverride;
            this.PassageOverride = null;
            return tmp;
        }

        // Check gameover conditions first. Hardcoded just because they are rare.
        if (setup.player.GetStat("STAT", "Health") <= 0) {
            this._d("Player died event.");
            //State.temporary.followup = passageName;
            return "DeathEnd";
        }

        if (setup.player.GetStat("STAT", "WillPower") < 20) {
            this._d("Player lost too much willpower event.");
            //State.temporary.followup = passageName;
            return "WillPowerEnd";
        }

        // For now, let's throttle events to 1 per day.
        if (Player.QuestFlags.hasOwnProperty("LAST_EVENT_DAY") && Player.QuestFlags["LAST_EVENT_DAY"] == Player.Day) return;

        // Location specific events get checked first.
        var validEvents = this._FilterEvents(Player, FromPassage, ToPassage);

        //todo: have to add quest flags to character when event fires off.
        if (validEvents.length > 0) {
            var event = this._SelectEvent(validEvents);
            if (event["CHECK"](Player) == true) {
                this._setFlags(Player, event["ID"]);
                return event["PASSAGE"];
            }
        }

        validEvents = this._FilterEvents(Player, FromPassage, "Any");

        if (validEvents.length > 0) {
            var event = this._SelectEvent(validEvents);
            if (event["CHECK"](Player) == true) {
                this._setFlags(Player, event["ID"]);
                return event["PASSAGE"];
            }
        }

    }

    /**
     * Filter events down to only potentially valid ones.
     * @param {App.Entity.Player} Player
     * @param {string} FromPassage
     * @param {string} ToPassage
     * @returns {*[]}
     */
    _FilterEvents(Player, FromPassage, ToPassage)
    {

        if (App.Data.Events.hasOwnProperty(ToPassage) == false || App.Data.Events[ToPassage].length < 1) return [];

        return App.Data.Events[ToPassage].filter(function(o) {
            return ( (o["FROM"] == 'Any' || o["FROM"] == FromPassage) && ( Player.Day >= o["MIN_DAY"])
                && ( o["PHASE"].includes(Player.Phase) )
                && ( o["MAX_DAY"] == 0 ? true : Player.Day <= o["MAX_DAY"] )
                && ( o["MAX_REPEAT"] == 0 ? true :
                    (Player.QuestFlags.hasOwnProperty("EE_"+o["ID"]+"_COUNT") ? Player.QuestFlags["EE_"+o["ID"]+"_COUNT"] < o["MAX_REPEAT"] : true))
                &&  (Player.QuestFlags.hasOwnProperty("EE_"+o["ID"]+"_LAST") ? Player.QuestFlags["EE_"+o["ID"]+"_LAST"] + o["COOL"] < Player.Day : true)
            );
        });
    }

    /**
     * Select an event from the available ones.
     * @param {Array<object>} eventArray 
     */
    _SelectEvent(eventArray)
    {
        this._d("_SelectEvent:");
        this._d(eventArray);
        var events = eventArray.filter( o =>    
                        o.hasOwnProperty('FORCE') && 
                        o.FORCE == true &&
                        o.CHECK(setup.player) == true);
                        
        if (events.length > 0) return events.shift();

        return eventArray[Math.floor(Math.random() * eventArray.length)];
    }

    /**
     * Helper Method to set quest flags in player state for event tracking.
     * @param {App.Entity.Player} Player
     * @param {string} Key
     */
    _setFlags(Player, Key) {
        var countKey = "EE_"+Key+"_COUNT";
        var lastKey = "EE_"+Key+"_LAST";

        Player.QuestFlags["LAST_EVENT_DAY"] = Player.Day;
        Player.QuestFlags[lastKey] = Player.Day;

        Player.QuestFlags[countKey] = Player.QuestFlags.hasOwnProperty(countKey) ?
            Player.QuestFlags[countKey] = Player.QuestFlags[countKey] + 1 : 1;
    }

    /**
     * @param {App.Entity.Player} Player 
     * @param {string} ID Event Id
     * @returns {number} Last Day event was fired. 0 if never fired
     */
    EventFired(Player, ID)
    {
        var lastKey = "EE_"+ID+"_LAST";
        if (Player.QuestFlags.hasOwnProperty(lastKey)== false) return 0;
        return Player.QuestFlags[lastKey];
    }

    /**
     * Manually trigger an event and ignore checks, coolsdowns, etc.
     * @param {App.Entity.Player} Player 
     * @param {string} Passage 
     * @param {string} ID 
     */
    FireEvent(Player, Passage, ID)
    {
        var event = App.Data.Events[Passage].filter(function(o) { return o.ID == ID; })[0];
        console.log(event);
        this._setFlags(Player, event["ID"]);
        SugarCube.State.display(event["PASSAGE"]);
    }

    // This isn't working exactly how I want to right now. If a player reloads his page (naughty naughty)
    // then this object gets baleeeeted and these references are null, which means I can't use them for
    // dynamic links. However, it's probably not really necessary. I'll think about it.
    get FromPassage() { return this._fromPassage; }
    get ToPassage() { return this._toPassage; }

    _d(m) {
        if (setup.player.debugMode == true) console.log(m);
    }
}
