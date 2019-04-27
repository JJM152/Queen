/**
 * Base combatant class, used by NPC's and inherited by the player class.
 */
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

        if (this._data.__proto__.hasOwnProperty('Moves')) {
            this.ChangeMoveSet(App.Combat.Moves[this._data.Moves].Engine, myStatusCB, theirStatusCB, chatLogCB);
        } else {
            this.ChangeMoveSet(App.Combat.Engines.Generic, myStatusCB, theirStatusCB, chatLogCB);
        }

        //Number of turns taken
        this._Turn = 1;
        //Current delay due to last attack speed
        this._WeaponDelay = 0;

        this._Id = null;
        //Combo meter - hidden on enemies
        this._Combo = 0;

        //Is this object alive or dead?
        this._Dead = false;

        this._AllowedEffects = [
            'STUNNED', 'BLINDED', 'GUARDED', 'DODGING', 'BLOODTHIRST', 'SEEKING', 'LIFE LEECH', 'PARRY'
        ]
        
        this._Effects = { };
    }

    get Name() { return this._Name; }
    get Portrait() { return this._Portrait; }
    get Id() { return this._Id; } 
    set Id(n) { this._Id = n; }
    get Title() { return this._Title; }
    get Health() { return this._data.Health; }
    get MaxHealth() { return this._data.MaxHealth; }
    get MaxEnergy() { return 10; } // Hardcoded - same as player max energy.
    get Energy() { return this._data.Energy; }
    get MaxCombo() { return 10; } // Hardcoded
    get Combo() { return this._Combo; }
    get Skill() { return this._data.Skill; }
    /**
     * @returns {App.Combat.Engines.Generic}
     */
    get Engine() { return this._Engine; }
    get Moves() { return App.Combat.Moves[this.Engine.Class]; }
    get IsNPC() { return true; }
    get IsDead() { return this._Dead; };
    get MaxStamina() { return this._data.MaxStamina; }
    get Stamina() { return this._data.Stamina; }
    get Speed() { return this._data.Speed; }
    get WeaponDelay() { return this._WeaponDelay; };
    get Turn() { return this._Turn; }
    get Gender() { return this._data.Gender; }
    get Attack() { return this._data.Attack; }
    get Defense() { return this._data.Defense; }
    get AllowedEffects() { return this._AllowedEffects; }
    get Effects() { return this._Effects; }

    /**
     * 
     * @param {string} e one of 'STUNNED', 'BLINDED', 'GUARDED', 'DODGING', 'BLOODTHIRST', 'SEEKING', 'LIFE LEECH', 'PARRY'
     * @returns {boolean}
     */
    HasEffect(e) { return this._Effects.hasOwnProperty(e); }

    /**
     * Add a valid effect
     * @param {string} e one of 'STUNNED', 'BLINDED', 'GUARDED', 'DODGING', 'BLOODTHIRST', 'SEEKING', 'LIFE LEECH', 'PARRY' 
     * @param {number} d 
     */
    AddEffect(e, d) {
        if ( this.AllowedEffects.includes(e) == true) {
            if ( this._Effects.hasOwnProperty(e) ) {
                var n = Math.abs(this._Effects[e]) + d;
                this._Effects[e] = n;
            } else {
                this._Effects[e] = d;
            }
        }
    }

    /**
     * Reduce an effect
     * @param {string} e  one of 'STUNNED', 'BLINDED', 'GUARDED', 'DODGING', 'BLOODTHIRST', 'SEEKING', 'LIFE LEECH', 'PARRY'
     * @param {number} d 
     */
    ReduceEffect(e, d) {
        if (this._Effects.hasOwnProperty(e)) {
            this._Effects[e] -= d;
            if (this._Effects[e] <= 0) {
                delete this._Effects[e];
            }
        }
    }

    TakeDamage(n) {
        this._data.Health -= n;
        if (this._data.Health <= 0) this._Dead = true;
        this._MyStatus(this);
    }

    RecoverHealth(n) {
        this._data.Health += n;
        if (this._data.Health >= this.MaxHealth) this._data.Health = this.MaxHealth;
        this._MyStatus(this);
    }

    UseEnergy(n) {
        this._data.Energy -= n;
        this._MyStatus(this);
    }

    RecoverEnergy(n) {
        this._data.Energy += n;
        if (this._data.Energy >= this.MaxEnergy) this._data.Energy = this.MaxEnergy;
        this._MyStatus(this);
    }

    UseStamina(n) {
        this._data.Stamina -= n;
        this._MyStatus(this);
    }

    RecoverStamina(n) {
        this._data.Stamina += n;
        if (this._data.Stamina >= this.MaxStamina) this._data.Stamina = this.MaxStamina;
        this._MyStatus(this);
    }

    UseCombo(n) {
        this._Combo -= n;
        this._MyStatus(this);
    }

    RecoverCombo(n) {
        this._Combo += n;
        if(this._Combo >= this.MaxCombo) this._Combo = this.MaxCombo;
        this._MyStatus(this);
    }

    /**
     * Call this after using attack, but before ending turn.
     * @param {number} n 
     */
    AddWeaponDelay(n) {
        this._WeaponDelay += n;
    }

    StartTurn() {
        this._WeaponDelay = 0;
    }

    EndTurn() {
        this._Turn += 1;
        for (var k in this.Effects) 
        {
            this.ReduceEffect(k, 1);
        }
    }


    /**
     * Get the speed for the entity at the current turn, or optional turn in the future
     * @param {number} n The number of turns to predict.
     */
    GetTimeline(n)
    {
        var arr = [];
        for (var i = 1; i <= n; i++) {
            var Time = (this.Speed * (this.Turn+i)) + this.WeaponDelay;
            arr.push(Time);
        }

        return arr;
    }

    /**
     * 
     * @param {number} Mine My skill value
     * @param {number} Difficulty to check against
     * @param {number} Mod bonus / penalty to roll
     * @return {number} Floating point between 0.1 and 2.0 indicating value of roll.
     */
    SkillRoll(Mine, Difficulty, Mod)
    {

        var targetRoll = (100 - Math.max(5, Math.min((50 + (Mine - Difficulty)), 95)));
        var diceRoll = Math.floor(Math.random() * 100) + Mod;

        return Math.max(0.1, Math.min((diceRoll/targetRoll), 2.0)); // Default same as player object
    }

    /**
     * Simulate an attack roll.
     * @returns {number} roll - floating point between 0.1 and 2.0
     */
    AttackRoll() {
        var attk = this.Attack;
        var Mod = 0;
        
        if ( this.HasEffect("BLINDED")) Mod -= 30;
        if ( this.HasEffect("SEEKING")) Mod += 30;

        //TODO: Put some checks here to get values from effects
        return this.SkillRoll(attk, 100, Mod);
    }
    /**
     * Simulate a defensive roll.
     * @returns {number} roll - floating point between 0.1 and 2.0
     */
    DefenseRoll()
    {
        var def = this.Defense;
        var Mod = 0;

        if ( this.HasEffect("STUNNED")) Mod -= 30;
        if ( this.HasEffect("DODGING")) Mod += 30;

        //TODO: Put some checks here to get values from effects
        return this.SkillRoll(def, 100, Mod);
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

    /**
     * 
     * @param {App.Combat.Combatant|App.Combat.Player} Target 
     * @param {function} chatLogCB 
     */
    DoAI(Target, chatLogCB)
    {
        if (this.HasEffect("STUNNED")) {
            chatLogCB("NPC_NAME looks dazed and fumbles around.", this);
            return;
        }

        if (this.Stamina < 10) {
            if (this.Energy > 0 ) {
                this.Engine.Recover();
            } else {
                this.Engine.Defend();
            }
            return;
        }

        //Call Enginef or Specific routine.
        this.Engine.DoAI(Target);
    }
}

/**
 * Player combatant class. Just a few tweaks from the base.
 */
App.Combat.Player = class PlayerCombatant extends App.Combat.Combatant {

    /**
     * 
     * @param {App.Entity.Player} Player 
     * @param {object} data 
     * @param {function} myStatusCB 
     * @param {function} theirStatusCB 
     * @param {function} chatLogCB 
     * @param {function} loseHandler 
     * @param {function} winHandler 
     */
    constructor(Player, data, myStatusCB, theirStatusCB, chatLogCB, loseHandler, winHandler) {
        super(data, myStatusCB, theirStatusCB, chatLogCB);
        this._player = Player;
        this._loseHandler = loseHandler;
        this._winHandler = winHandler;
    }

    get Name() { return this._player.SlaveName; }
    get Player() { return this._player; }
    get IsNPC() { return false; }

    get AvailableMoveset() {
        var a = { "UNARMED" : "Unarmed" };

        if (this._player.IsEquipped('Weapon', true) == true) a["SWASHBUCKLING"] = "Swashbuckling";
        if (this._player.GetStat('SKILL', 'BoobJitsu') > 0) a["BOOBJITSU"] = "Boob-Jitsu";
        if (this._player.GetStat('SKILL', 'AssFu') >0 ) a["ASSFU"] = "Ass-Fu";

        return a;
    }

    // Player attack depends on what skill they are using.
    get Attack() {
        var val = 0;

        switch(this.Engine.Class) {
            case 'SWASHBUCKLING':
                val = this.Player.GetStat('SKILL','Swashbuckling');
                // Technicaly a private method... but whatever javascript
                val += this.Player._RollBonus('SKILL', 'Swashbuckling');
                break;
            case 'BOOBJITSU':
                val = this.player.GetStat('SKILL', 'BoobJitsu');
                val += this.Player._RollBonus('SKILL', 'BoobJitsu');
                break;
            case 'ASSFU':
                val = this.Player.GetStat('SKILL', 'AssFu');
                val += this.Player._RollBonus('SKILL', 'AssFu');
                break;
            default:
                val = 20;
                val += Math.floor(this.Player.GetStat('STAT', 'Fitness') * 0.8); // Cap it at 80% of fitness.
                // no roll bonus for unarmed attacks
                break;
        }

        return val;
    }

    get Defense() {
        var val = 0;

        switch(this.Engine.Class) {
            case 'SWASHBUCKLING':
                val = this.Player.GetStat('SKILL','Swashbuckling');
                // Technicaly a private method... but whatever javascript
                val += this.Player._RollBonus('SKILL', 'Swashbuckling');
                break;
            case 'BOOBJITSU':
                val = this.player.GetStat('SKILL', 'BoobJitsu');
                val += this.Player._RollBonus('SKILL', 'BoobJitsu');
                break;
            case 'ASSFU':
                val = this.Player.GetStat('SKILL', 'AssFu');
                val += this.Player._RollBonus('SKILL', 'AssFu');
                break;
            default:
                val = 20;
                val += Math.floor(this.Player.GetStat('STAT', 'Fitness') * 0.4); // Cap it at 40% of fitness.
                val += Math.floor(this.Player.GetStat('SKILL', 'Dancing') * 0.4); // Cap it at 40% of dancing skill.
                // no roll bonus for unarmed attacks
                break;
        }

        return val;
    }


    // Grant xp to players
    AttackRoll() {
        var mod = super.AttackRoll();
        this.GrantXP(Math.floor(10 * mod));
        return mod;
    }

    DefenseRoll() {
        var mod = super.DefenseRoll();
        this.GrantXP(Math.floor(10 * mod));
        return mod;
    }

    GrantXP(xp)
    {
        switch(this.Engine.Class) {
            case 'SWASHBUCKLING':
                this.Player.AdjustSkillXP('Swashbuckling', xp);
                break;
            case 'BOOBJITSU':
                this.Player.AdjustSkillXP('BoobJitsu', xp);
                break;
            case 'ASSFU':
                this.Player.AdjustSkillXP('AssFu', xp);
                break;
            default:
                this.Player.AdjustStatXP('Fitness', Math.floor(xp/2));
                this.Player.AdjustSkillXP('Dancing', Math.floor(xp/2));
                break;
        }
    }

    UseEnergy(n) {
        var x = Math.abs(n) * -1; // Always reduce
        this.Player.AdjustStat('Energy', x);
        App.PR.RefreshTwineMeter("Energy");
    }

    RecoverEnergy(n)
    {
        this.Player.AdjustStat('Energy', n);
        App.PR.RefreshTwineMeter("Energy");
    }

    TakeDamage(n) {
        var x = Math.abs(n) * -1; // Always reduce
        this.Player.AdjustStat('Health', x);
        App.PR.RefreshTwineMeter('Health');
        // Test for loss - 
        if (this.Player.GetStat('STAT', 'Health') <= 0) {
            this._loseHandler(this.Player);
        }
    }

    RecoverHealth(n) {
        this.Player.AdjustStat('Health', n);
        App.PR.RefreshTwineMeter('Health');
    }

    IsEquipped(Slot, Flag)
    {
        return this.Player.IsEquipped(Slot, Flag);
    }

    /**
     * Attempt to figure out the quality of an equipped weapon.
     * @returns {number} value 1 through 5.
     */
    GetWeaponQuality()
    {
        if (this.IsEquipped('Weapon', true) == false) return 1;
        var o = this.Player.GetEquipmentInSlot('Weapon');
        if (!o || typeof o === 'undefined' || o == null) return 1;

        if (o.Data.Style == 'COMMON') { 
            return 2;
        } else if (o.Data.Style == 'UNCOMMON' ) {
            return 3;
        } else if (o.Data.Style == 'RARE' ) {
            return 4;
        } else if (o.Data.Style == 'LEGENDARY' ) {
            return 5;
        } else {
            return 1;
        }
    }

}