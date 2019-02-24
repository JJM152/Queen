App.CombatEngine = new function()
{
    /** Array of current enemies.
     * @type {Array}
     * @private */
    this._Enemies = [ ];

    /** Returns the enemies for the encounter.
     * @returns {Array.<Enemy>}
     */
    this.GetEnemies = function() {
      return this._Enemies;
    };

    /**
     * Load an encounter into the _Enemies array.
     * @param {string} Key
     */
    this.LoadEncounter = function(Key)
    {
        this._Enemies = [ ];

        var EncounterList = App.Data.Encounters[Key];
        var Encounter;
        var Chance = Math.floor((Math.random() * 99)+1);

        for (var i = 0; i < EncounterList.length; i++) {
            Encounter = EncounterList[i];
            if (Chance <=  Encounter["CHANCE"]) break;
        }

        for (var j = 0; j < Encounter["ENEMIES"].length; j++)
            this._MakeEnemy( Encounter["ENEMIES"][j] );

    };

    /**
     * Make an enemy object.
     * @param {object} EnemyData
     * @private
     */
    this._MakeEnemy = function(EnemyData)
    {
        console.log(JSON.stringify(EnemyData));

        var NumberAppearing = Math.max(EnemyData["MIN"], Math.min(Math.floor( (Math.random() * EnemyData["MAX"]) +1), EnemyData["MAX"]));

        for (var c = 0; c < NumberAppearing; c++)
            this._Enemies.push( new this.Enemy( App.Data.Enemies[EnemyData["ENEMY"]]));
    };

    /**
     * An "ENEMY" to fight in combat.
     * @param {Object} Data
     * @constructor
     */
    this.Enemy = function(Data)
    {
        /** @type {Object}
         * @private */
        this._Data = Data;

        /** @returns {string} */
        this.Name = function() { return  this._Data["NAME"]; };

        /** @returns {string} */
        this.ShortDesc = function() { return this._Data["NAME"]; };

        /** @returns {*} */
        this.GetStat = function(StatName) { return this._Data[StatName]; };

        /** @param {string} StatName
         * @param {number} Value */
        this.AdjustStat = function(StatName, Value) { this._Data[StatName] += Value; };

        /** @returns {string} */
        this.HealthMeter = function() { return App.PR.pMeter( this.GetStat("Health"), this.GetStat("MaxHealth"), 0); };

        /** @returns {string} */
        this.EnergyMeter = function() { return App.PR.pMeter( this.GetStat("Energy"), this.GetStat("MaxEnergy"), 0); };

    };
};
