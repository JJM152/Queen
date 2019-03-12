// Generic engine with default behavior
App.Combat.Engines.Generic = class GenericEngine {

    constructor( owner, myStatusCB, theirStatusCB, chatLogCB )
    {
        this._owner = owner; // The object that owns this engine.
        this._myStatusCB = myStatusCB; // Callback for updating a html component
        this._theirStatusCB = theirStatusCB; // Callback for updating a html component
        this._chatLogCB = chatLogCB; // Callback for updating an html component

        if ( typeof this._owner === 'undefined' ) throw new Error("You must associate this engine with an owner.");

        this._Stamina = 0;
        this._ComboPoints = 0;
        this._AttackHistory = [ ];
    }

    get Owner() { return this._owner }

    /**
     * Calculate if an attack hits.
     * @param {*} Attack Data entry that constitutes the attack
     * @param {*} Target Entity that you are attacking
     * @param {string} MySkill Attacking skill to test
     * @param {string} TheirSkill Defending skill to test
     */
    CalculateHit(Attack, Target, MySkill, TheirSkill)
    {
        const MyRoll = this.Owner.SkillRoll(MySkill, 100, 100, true);
        const TheirRoll = Target.SkillRoll(TheirSkill, 100, 100, true);

        if (MyRoll < TheirRoll ) {
            this.PrintMiss(Attack.Miss, Target);
            return 0;
        } else {
            return 1;
        }
    }

    DoDamage(Attack, Target, Damage)
    {
        var dmg = Math.ceil(Damage * -1.0);
        Target.AdjustStat('Health', dmg);
        this.PrintHit(Attack.Hit, Target, Damage);
        this._theirStatusCB(dmg);
    }

    ApplyEffects(Attack, Target, Effects)
    {

    }

    /**
     * @param {Array} Misses Miss array from attack definition.
     * @param {*} Them Object we are attacking.
     */
    PrintMiss(Misses, Them) {
        var Message = this.GetMissMessage(Misses);
        Message = this._FormatChat(Message, Them);
        if (typeof this._chatLogCB === 'function') this._chatLogCB(Message);
    }

    _FormatChat(Message, Them) {
        const TheirName = (typeof Them.Name === 'undefined' ? Them.SlaveName : Them.Name );
        const MyName = (typeof Them.Name === 'undefined' ? Them.SlaveName : Them.Name );

        Message = Message.replace(/TARGET/g, TheirName);
        Message = Message.replace(/ATTACKER/g, MyName);

        return Message;
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