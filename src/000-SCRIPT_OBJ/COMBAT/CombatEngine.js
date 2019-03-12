App.Combat.CombatEngine = class CombatEngine {
    constructor() {

        this._encounterData = null;
        this._enemies = [ ];
        this._player = null;
        this._turn = 0;
        this._Timeline = { };
    }

    get Enemies() { return this._enemies; }

    InitializeScene()
    {
        this._encounterData = null;
        this._enemies = [ ];
        this._player = null;
        this._turn = 0;
        this._Timeline = { };
    }

    LoadEncounter(Encounter)
    {
        this._encounterData = Object.create(App.Combat.EncounterData[Encounter]);
        for(const e of this._encounterData.Enemies) this._AddEnemy(e);
        this._AddPlayer(setup.player);
    }

    /**
     * Add an enemy object to the encounter.
     * @param {*} e enemy object data
     */
    _AddEnemy(e)
    {
        const d = App.Combat.EnemyData[e];
        this._enemies.push( new App.Combat.Combatant(d, 
                this._UpdateNPCStatusCB.bind(this),
                this._UpdatePlayerStatusCB.bind(this), 
                this._ChatLogCB.bind(this)) );
    }

    /**
     * Add the player to the encounter.
     * @param {App.Entity.Player} p 
     */
    _AddPlayer(p)
    {
        var data = {
            Name: p.SlaveName,
            Title: 'NAME',
            Health: p.GetStat('STAT', 'Health'),
            Energy: p.GetStat('STAT', 'Energy'),
            MaxStamina: 100,
            Stamina: 100,
            Speed: 50,
            Moves: 'UNARMED'
        };
        this._player = new App.Combat.Player(setup.player, data,
                this._UpdatePlayerStatusCB.bind(this),
                this._UpdateNPCStatusCB.bind(this),
                this._ChatLogCB.bind(this));
    }

    /**
     * Creates an array of the predicted order of turns.
     */
    GenerateTimeLine()
    {
        this._Timeline = { };
        this._PopulateTimeline(this._player);
        for(var i = 0; i < this._enemies.length; i++) this._PopulateTimeline(this._enemies[i]);
    }

    _PopulateTimeline(o)
    {
        for(var i = 0; i < 10; i++) {
            var t = o.GetTimeline(i);
            if (this._Timeline.hasOwnProperty(t)) {
                this._Timeline[t].push(o);
            } else {
                this._Timeline[t] = [ o ];
            }
        }
    }

    // Callbacks

    _ChatLogCB(m)
    {
        console.log(m);
    }

    _UpdatePlayerStatusCB(m)
    {
        console.log(m);
    }

    _UpdateNPCStatusCB(m)
    {
        console.log(m);
    }
}