// Generic engine with default behavior
App.Combat.Engines.Generic = class GenericEngine {

    constructor( owner, myStatusCB, theirStatusCB, chatLogCB )
    {
        this._owner = owner; // The object that owns this engine.
        this._myStatusCB = myStatusCB; // Callback for updating a html component
        this._theirStatusCB = theirStatusCB; // Callback for updating a html component
        this._chatLogCB = chatLogCB; // Callback for updating an html component

        if ( typeof this._owner === 'undefined' ) throw new Error("You must associate this engine with an owner.");

        this._AttackHistory = [ ];
    }

    /**
     * @returns {App.Combat.Combatant|App.Combat.Player}
     */
    get Owner() { return this._owner }

    get LastMove() {
        return this._AttackHistory.length >= 1 ? this._AttackHistory[this._AttackHistory.length-1] : null;
    }

    /**
     * Attack the enemy
     * @param {App.Combat.Combatant|App.Combat.Player} Target
     * @param {*} Command 
     */
    AttackTarget(Target, Command) {

        this.ConsumeResources(Command);
        var roll = this.CalculateHit(Target, Command);

        // Try to hit target
        if (roll > 0) {
            this.DoDamage(Target, Command, roll);
            this.ApplyEffects(Target, Command, roll);
            this.Owner.RecoverCombo(this.GenerateCombo(Target, Command, roll));
            return true;
        } else {
            var Message = this.GetMissMessage(Command.Miss);
            this.PrintMessage(Message, Target);
            return false;
        }
    }

    ConsumeResources(Command) {
        this.Owner.UseStamina(Command.Stamina);
        this.Owner.UseCombo(Command.Combo);
        this.Owner.AddWeaponDelay(Command.Speed);
    }

    CheckCommand(Command) {
        //console.log(Command);
        if (Command.Unlock(this.Owner) == false) return false;
        if (Command.Stamina > this.Owner.Stamina) return false;
        if (Command.Combo > this.Owner.Combo) return false;

        return true;
    }

    /**
     * Calculate if an attack hits.
     * @param {App.Combat.Combatant|App.Combat.Player} Target  Entity that you are attacking
     */
    CalculateHit(Target)
    {
        const MyRoll = this.Owner.AttackRoll(); //Includes getting attack buffs
        const TheirRoll = Target.DefenseRoll(); //Includes getting defense buffs
        console.log("CalculateHit: MyRoll="+MyRoll+",TheirRoll="+TheirRoll);
        return (MyRoll - TheirRoll);
    }

     /**
     * @param {string} Message Miss array from attack definition.
     * @param {App.Combat.Combatant|App.Combat.Player} Target  Object we are attacking.
     */
    PrintMessage(Message, Target) {
        
        if (typeof this._chatLogCB === 'function') {
            if (this.Owner.IsNPC == true) {
                this._chatLogCB(Message, this.Owner);
            } else {
                this._chatLogCB(Message, Target);
            }
        }
    }

    DoDamage(Target, Command, roll)
    {
        var dmg = this.CalculateDamage(Target, Command, roll);
        this.PrintHit(Command.Hit, Target, roll);
        Target.TakeDamage(dmg);
    }

    CalculateDamage(Target, Command, Roll)
    {
        return 1;
    }

    ApplyEffects(Attack, Target, Effects)
    {

    }

    GenerateCombo(Target, Command, roll)
    {
        return 0;
    }

    PrintHit(Attacks, Target, Roll)
    {
        var len = Math.floor(Math.max(0, Math.min((Attacks.length * Roll), (Attacks.length-1))));
        var msg = (typeof this.Owner.IsNPC !== 'undefined' && this.Owner.IsNPC == true ) ? Attacks[len][1] : Attacks[len][0];
        this.PrintMessage(msg, Target);
    }

    /**
     * 
     * @param {Array.<string>} Arr Message to show to chat log for misses.
     */
    GetMissMessage(Arr) {
        const MissMessage = App.PR.GetRandomListItem(Arr);

        return (typeof this.Owner.IsNPC !== 'undefined' && this.Owner.IsNPC == true ) ? MissMessage[1] : MissMessage[0];
    }

};

// Unarmed combat class
App.Combat.Engines.Unarmed = class UnarmedCombatEngine extends App.Combat.Engines.Generic {

    constructor(...args)
    {
        super(...args);
    }

    get Class() { return "UNARMED"; }

    /**
     * Calculate the damage of an unarmed attack
     * @param {App.Combat.Combatant|App.Combat.Player} Target 
     * @param {*} Command 
     * @param {number} Roll 
     * @returns {number} Damage
     */
    CalculateDamage(Target, Command, Roll)
    {
        var base = 3;

        if (Owner.IsNPC() == false) {
            base = Math.max(1, Math.min(Math.floor(this.Owner.Player.GetStat('STAT', 'Fitness')/20), 5));
        } else {
            base = base + Math.floor(this.Owner.Attack/20);
        }
        
        if (Command.Name != "Knee") {
            base = Math.floor(base * Command.Damage); // Add damage mod
        } else {
            var mod = Target.Gender == 1 ? 4.0 : 2.0; // Knee attack does more damage on male enemies
            base = Math.floor(base * mod);
        }

        return base;
    }

    /**
     * Generate any combo points
     * @param {App.Combat.Combatant|App.Combat.Player} Target  
     * @param {*} Command 
     * @param {*} Roll 
     */
    GenerateCombo(Target, Command, Roll)
    {
        if ( (Command.Name == "Punch" && this.LastMove() == "Kick") ||
             (Command.Name == "Kick" && this.LastMove() == "Punch") ) {
                 return 1;
             }
    }

    /**
     * Apply effects to enemy
     * @param {App.Combat.Combatant|App.Combat.Player} Target  
     * @param {*} Command 
     * @param {*} Roll 
     */
    ApplyEffects(Target, Command, Roll)
    {

    }

};

//Swashbuckling Class
App.Combat.Engines.Swashbuckling = class SwashbucklingCombatEngine extends App.Combat.Engines.Generic {

    constructor(...args)
    {
        super(...args);
    }

    get Class() { return "SWASHBUCKLING"; }
};

//Boob-jitsu Class
App.Combat.Engines.Boobjitsu = class BoobjitsuCombatEngine extends App.Combat.Engines.Generic {

    constructor(...args)
    {
        super(...args);
    }

    get Class() { return "BOOBJITSU"; }
};

//Ass-fu Class
App.Combat.Engines.Assfu = class AssfuCombatEngine extends App.Combat.Engines.Generic {

    constructor(...args)
    {
        super(...args);
    }

    get Class() { return "ASSFU"; }
};