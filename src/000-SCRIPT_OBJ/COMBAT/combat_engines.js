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
            this.GenerateCombo(Target, Command, roll);
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

    DoDamage(Target, Command, roll)
    {
        var dmg = this.CalculateDamage(Target, Command, roll);
        this.PrintHit(Attack.Hit, Target, roll);
        Target.TakeDamage(dmg);
        this._theirStatusCB(dmg);
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

    }

    PrintHit(Attacks, Target, Roll)
    {
        var len = Math.floor(Math.max(0, Math.min((Attacks.length * Roll), (Attacks.length-1))));
        msg = Attacks[len];
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
     * @param {*} Target 
     * @param {*} Command 
     * @param {number} Roll 
     */
    CalculateDamage(Target, Command, Roll)
    {
        var base = 3;

        if (Owner.IsNPC() == false) {
            base = Math.floor(this.Owner.Player.GetStat('STAT', 'Fitness')/20);
            base = Math.max(1, Math.min(base, 5)); // clamp 1 to 5
        } 
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