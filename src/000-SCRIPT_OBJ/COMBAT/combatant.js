App.Combat.Combatant = class Combatant {
    
    constructor(data, myStatusCB, theirStatusCB, chatLogCB) {
        this._data = Object.create(data); // don't mangle our dictionary
        //Naming
        if (this._data.Name.includes('RANDOM_MALE_NAME')) {
            this._Name = this._data.Name.replace(/RANDOM_MALE_NAME/g, App.PR.GetRandomListItem(App.Data.Names.Male));
        } else if (this._data.Name.includes('RANDOM_FEMALE_NAME')) {
            this._Name = this._data.Name.replace(/RANDOM_FEMALE_NAME/g, App.PR.GetRandomListItem(App.Data.Names.Female));
        } else {
            this._Name = this._data.Name;
        }
        this._Title = this._data.Title.replace(/NAME/g, this._Name);

        if (this._data.__proto__.hasOwnProperty('Portraits')) {
            this._Portrait = App.PR.GetRandomListItem(this._data.Portraits);
        } else {
            this._Portrait = "pugilist_a";
        }

        this.ChangeMoveSet(App.Combat.Engines.Generic, myStatusCB, theirStatusCB, chatLogCB);

        //First round speed.
        this._Initiative = Math.ceil(this._data.Speed * Math.random());
        //Generic slowing effect
        this._Delay = 0;
        //Number of turns taken
        this._Turn = 0;
        //Current delay due to last attack speed
        this._WeaponDelay = 0;

        this._Id = null;
        //Combo meter - hidden on enemies
        this._Combo = 0;
    }

    get Name() { return this._Name; }
    get Portrait() { return this._Portrait; }
    get Id() { return this._Id; } 
    set Id(n) { this._Id = null; }
    get Title() { return this._Title; }
    get Health() { return this._data.Health; }
    get MaxHealth() { return this._data.MaxHealth; }
    get Energy() { return this._data.Energy; }
    get Combo() { return this._Combo; }
    get Skill() { return this._data.Skill; }
    get Engine() { return this._Engine; }
    get Moves() { return App.Combat.Moves[this._data.Moves]; }
    get IsNPC() { return true; }
    get MaxStamina() { return this._data.MaxStamina; }
    get Stamina() { return this._data.Stamina; }
    get Speed() { return this._data.Speed; }
    get Initiative() { return this._Initiative; }
    get Delay() { return this._Delay; }
    get WeaponDelay() { return this._Delay };
    get Turn() { return this._Turn; }
    get Gender() { return this._data.Gender; }
    get Attack() { return this._data.Attack; }
    get Defense() { return this._data.Defense; }

    TakeDamage(n) {
        this._data.Health -= n;
        this._MyStatus(this);
    }

    RecoverHealth(n) {
        this._data.Health += n;
        this._MyStatus(this);
    }

    UseEnergy(n) {
        this._data.Energy -= n;
    }

    RecoverEnergy(n) {
        this._data.Energy += n;
    }

    UseStamina(n) {
        this._data.Stamina -= n;
        this._MyStatus(this);
    }

    UseCombo(n) {
        this._Combo -= n;
        this._MyStatus(this);
    }

    RecoverCombo(n) {
        this._Combo += n;
        this._MyStatus(this);
    }

    RecoverStamina(n) {
        this._data.Stamina += n;
        this._MyStatus(this);
    }

    AddDelay(n) {
        this._Delay += n;
    }

    ReduceDelay(n) {
        this._Delay -= n;
    }

    /**
     * Call this after using attack, but before ending turn.
     * @param {number} n 
     */
    AddWeaponDelay(n) {
        this._WeaponDelay = n;
    }

    StartTurn() {
        this._WeaponDelay = 0;
    }

    EndTurn() {
        this._Turn += 1;
    }


    /**
     * Get the speed for the entity at the current turn, or optional turn in the future
     * @param {number} n 
     */
    GetTimeline(n)
    {
        n = n || this.Turn;

        if (n == 0 && this.Turn == 0) {

            return this.Initiative; // First ever call.

        } else {

            return (this.Speed + this.Delay + this.WeaponDelay) * (this.Turn + n);
        }
    }

    //We may want to alter this later.
    SkillRoll(Mine, Difficulty)
    {
        return Math.max(0.1, Math.min((Mine/Difficulty), 2.0)); // Default same as player object
    }

    /**
     * Simulate an attack roll.
     * @returns {number} roll
     */
    AttackRoll() {
        var attk = this.Attack;
        //TODO: Put some checks here to get values from effects
        return this.SkillRoll(attk, 100);
    }
    /**
     * Simulate a defensive roll.
     * @returns {number} roll
     */
    DefenseRoll()
    {
        var def = this.Defense;
        //TODO: Put some checks here to get values from effects
        return this.SkillRoll(def, 100);
    }

    /**
     * Generally only used by players to switch their attack style on the fly.
     * Called from CombatEngine 
     * @param {*} Engine reference to personal engine class
     * @param {*} myStatusCB callback to update my status elements in ui
     * @param {*} theirStatusCB callback to update enemy status elements in ui
     * @param {*} chatLogCB callback to update chat log in ui
     */
    ChangeMoveSet(Engine, myStatusCB, theirStatusCB, chatLogCB) {
        //Callbacks
        this._MyStatus = myStatusCB;
        //Moveset and personal combat engine
        this._Engine = new Engine(this, myStatusCB, theirStatusCB, chatLogCB);
    }
}

App.Combat.Player = class PlayerCombatant extends App.Combat.Combatant {

    /**
     * 
     * @param {App.Entity.Player} Player 
     * @param {object} data 
     * @param {function} myStatusCB 
     * @param {function} theirStatusCB 
     * @param {function} chatLogCB 
     */
    constructor(Player, data, myStatusCB, theirStatusCB, chatLogCB) {
        super(data, myStatusCB, theirStatusCB, chatLogCB);
        this._player = Player;
    }

    get IsNPC() { return false; }

    get AvailableMoveset() {
        var a = { "UNARMED" : "Unarmed" };

        if (this._player.IsEquipped('Weapon', true) == true) a["SWASHBUCKLING"] = "Swashbuckling";
        if (this._player.GetStat('SKILL', 'BoobJitsu') > 0) a["BOOBJITSU"] = "Boob-Jitsu";
        if (this._player.GetStat('SKILL', 'AssFu') >0 ) a["ASSFU"] = "Ass-Fu";

        return a;
    }

    get Attack() {

    }

    get Defense() {

    }

    SkillRoll() {

    }
}