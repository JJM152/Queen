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

    get Owner() { return this._owner }


    AttackTarget(Target, Command) {

        this.ConsumeResources(Command);
        var roll = this.CalculateHit(Target, Command);

        // Try to hit target
        if (roll > 0) {
            this.DoDamage(Target, Command, roll);
            this.ApplyEffects(Target, Command, roll);
            return true;
        } else {
            var Message = this.GetMissMessage(Misses);
            this.PrintMessage(Message, Target);
            return false;
        }
    }

    ConsumeResources(Command) {
        this.Owner.UseStamina(Command.Stamina);
        this.Owner.UseCombo(Command.Combo);
        this.Owner.AddWeaponDelay(Command.Speed);
    }

    /**
     * Calculate if an attack hits.
     * @param {*} Target Entity that you are attacking
     */
    CalculateHit(Target)
    {
        const MyRoll = this.Owner.AttackRoll(); //Includes getting attack buffs
        const TheirRoll = Target.DefenseRoll(); //Includes getting defense buffs

        return (MyRoll - TheirRoll);
    }

     /**
     * @param {string} Message Miss array from attack definition.
     * @param {*} Target Object we are attacking.
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

    DoDamage(Target, Command)
    {
        var dmg = this.CalculateDamage(Target, Command);
        Target.AdjustStat('Health', dmg);
        this.PrintHit(Attack.Hit, Target, Damage);
        this._theirStatusCB(dmg);
    }

    CalculateDamage(Target, Command)
    {
        return 1;
    }

    ApplyEffects(Attack, Target, Effects)
    {

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

// Specialized engine
App.Combat.Engines.Unarmed = class UnarmedCombatEngine extends App.Combat.Engines.Generic {

    constructor(...args)
    {
        super(...args);
    }
};