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
  
        var roll = this.CalculateHit(Target, Command);

        // Try to hit target
        if (roll > 0) {
            this.Owner.RecoverCombo(this.GenerateCombo(Target, Command, roll));
            this._AttackHistory.push(Command.Name);
            this.ConsumeResources(Command);
            this.ApplyEffects(Target, Command, roll);
            this.DoDamage(Target, Command, roll);     
            return true;
        } else {
            this._AttackHistory.push("Miss");
            this.ConsumeResources(Command);
            var Message = this.GetMissMessage(Command.Miss);
            this.PrintMessage(Message, Target);
            return false;
        }
    }

    Recover()
    {
        // use energy for stamina
        this.Owner.UseEnergy(1);
        this.Owner.RecoverStamina(100);
        this.Owner.AddWeaponDelay(10);
        if (this.Owner.IsNPC == true) {
            this.PrintMessage("<span style='color:lime'>NPC_NAME catches a second wind!</span>", this.Owner);
        } else {
            this.PrintMessage("<span style='color:lime'>You pull deep from your reserves and catch a second wind!</span>", this.Owner);
        }
    }
    Defend()
    {
        this.Owner.RecoverStamina(10); // Regain some stamina
        this.Owner.AddEffect('GUARDED', 2);
        this.Owner.AddWeaponDelay(10);
        if (this.Owner.IsNPC == true) {
            this.PrintMessage("<span style='color:lime'>NPC_NAME assumes a defensive position.</span>", this.Owner);
        } else {
            this.PrintMessage("<span style='color:lime'>You assume a defensive position and catch your breath.</span>", this.Owner);
        }
    }

    DoAI(Target)
    {
        if (this.Owner.IsNPC == true) {
            this.PrintMessage("<span style='color:red'>*BUG*</span> NPC_NAME doesn't know what to do!", this.Owner);
        } else {
            this.PrintMessage("<span style='red'>*BUG* NO AI routine implemented for player attack.", this.Owner);
        }
    }

    ConsumeResources(Command) {
        this.Owner.UseStamina(Command.Stamina);
        this.Owner.UseCombo(Command.Combo);
        this.Owner.AddWeaponDelay(Command.Speed);
    }

    CheckCommand(Command) {
        console.log("CheckCommand called on "+Command.Name);
        if (Command.Unlock(this.Owner) == false) return false;
        console.log("Passed Unlock()");
        if (Command.Stamina > this.Owner.Stamina) return false;
        console.log("Have Stamina");
        if (Command.Combo > this.Owner.Combo) return false;
        console.log("Have Combo pts");

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
        // Apply effect bonuses
        if ( this.Owner.HasEffect('BLOODTHIRST')) dmg = Math.ceil( dmg * 1.5);
        if ( Target.HasEffect('GUARDED')) dmg = Math.floor( dmg * 0.7);

        if ( Target.HasEffect('PARRY'))  {
            dmg = 0; // block all damage.
            Target.ReduceEffect('PARRY', 1); // Reduce parry counter.
            this._AttackHistory.push("Miss"); // We missed. Sadface.
            if (this.Owner.IsNPC == true) {
                this.PrintMessage("You parry NPC_NAME's attack!", Target);
            } else {
                this.PrintMessage("NPC_NAME parries your attack!", Target);
            }
        } else {

            this.PrintHit(Command.Hit, Target, roll, dmg);
            Target.TakeDamage(dmg);

        }

        if ( this.Owner.HasEffect('LIFE LEECH')) {
            var heal = Math.ceil( dmg * 0.5);
            this.Owner.RecoverHealth(heal);
            if (this.Owner.IsNPC == true) {
                this.PrintMessage("NPC_NAME heals <span style='color:lime'>" + heal + "</span> damage.", Target);
            } else {
                this.PrintMessage("You heal <span style='color:lime'>" + heal + "</span> damage.", Target);
            }
        }
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

    PrintHit(Attacks, Target, Roll, Damage)
    {
        var len = Math.floor(Math.max(0, Math.min((Attacks.length * Roll), (Attacks.length-1))));
        var msg = (typeof this.Owner.IsNPC !== 'undefined' && this.Owner.IsNPC == true ) ? Attacks[len][1] : Attacks[len][0];
        msg += " <span style='color:red'>("+Damage+")</span>";
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
        var base = 1;

        if (this.Owner.IsNPC == false) {
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
     * @returns {number} number of combo points to grant
     */
    GenerateCombo(Target, Command, Roll)
    {
        if ( (Command.Name == "Punch" && this.LastMove == "Kick") ||
             (Command.Name == "Kick" && this.LastMove == "Punch") ) {
                 return 1;
             }
             
        return 0;
    }

    /**
     * Apply effects to enemy
     * @param {App.Combat.Combatant|App.Combat.Player} Target  
     * @param {*} Command 
     * @param {*} Roll 
     */
    ApplyEffects(Target, Command, Roll)
    {

        if (Command.Name == 'Haymaker') {
            var chance = Math.max(10, Math.min((100 * Roll), 100));
            if ( chance >= Math.floor(Math.random() * 100)) {
                Target.AddEffect('STUNNED', 2);
                if (this.Owner.IsNPC) {
                    this.PrintMessage("<span style='color:yellow'>NPC_NAME stuns you!</span>", Target);
                } else {
                    this.PrintMessage("<span style='color:yellow'>You stun NPC_NAME!</span>", Target);
                }
            }
        }
    }

    DoAI(Target)
    {
        if (this.Owner.Combo >= this.Owner.Moves["Knee"].Combo) {
            this.AttackTarget(Target, this.Owner.Moves["Knee"]);
        } else if (this.Owner.Combo >= this.Owner.Moves["Haymaker"].Combo && Math.floor(Math.random()* 100) >= 60) {
            this.AttackTarget(Target, this.Owner.Moves["Haymaker"]);
        } else if (this.LastMove == "Kick") {
            this.AttackTarget(Target, this.Owner.Moves["Punch"]);
        } else {
            this.AttackTarget(Target, this.Owner.Moves["Kick"]);
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

    /**
     * Calculate the damage of an swashbuckling attack
     * @param {App.Combat.Combatant|App.Combat.Player} Target 
     * @param {*} Command 
     * @param {number} Roll 
     * @returns {number} Damage
     */
    CalculateDamage(Target, Command, Roll)
    {
        var base = 1;

        if (this.Owner.IsNPC == false) {
            var weaponQuality = this.Owner.GetWeaponQuality();
            var skill = this.Owner.Attack;
            var fitness = this.Owner.Player.GetStat('STAT', 'Fitness');
            var mod =  1 + ( skill / 100) + (fitness / 100);

            base = Math.ceil(weaponQuality * mod);
        } else {
            base = base + Math.floor(this.Owner.Attack/10);
        }
        
        if (Command.Name == 'Riposte') { // Converts combo points into extra damage.
            // Drain all combo points.
            var combo = this.Owner.Combo;
            this.Owner.UseCombo(combo);
            
            base = base + (combo * 2); // bonus base damage from combo points.
        }

        if (Command.Name == 'Behead') { // Chance to do massive damage against enemies at low health
            if (Target.Health / Target.MaxHealth < 0.5) {
                var chance = (65 - Math.floor((100 * (Target.Health / Target.MaxHealth))));
                if (chance >= Math.floor(Math.random() * 100)) {
                    base = Target.Health;
                }
            }
        }

        base = Math.floor(base * Command.Damage); // Add damage mod

        return base;
    }

    /**
     * Generate any combo points
     * @param {App.Combat.Combatant|App.Combat.Player} Target  
     * @param {*} Command 
     * @param {*} Roll 
     * @returns {number} number of combo points to grant
     */
    GenerateCombo(Target, Command, Roll)
    {

        if ( 
             (Command.Name == "Slash" && this.LastMove == "Stab") ||
             (Command.Name == "Stab" && this.LastMove == "Slash") ||
             (Command.Name == 'Slash' && this.LastMove == 'Riposte') ||
             ( Command.Name == 'Parry')
            ) {
                 return 1;
              }

        return 0;
    }

    /**
     * Apply effects to enemy
     * @param {App.Combat.Combatant|App.Combat.Player} Target  
     * @param {*} Command 
     * @param {*} Roll 
     */
    ApplyEffects(Target, Command, Roll)
    {

        if (Command.Name == 'Parry') {
            this.Owner.AddEffect('GUARDED', 2);
            this.Owner.AddEffect('PARRY', 2);
        } else if (Command.Name == 'Stab' && this.LastMove == 'Riposte') {
            this.Owner.AddEffect('SEEKING', 3);
        }

    }

    DoAI(Target)
    {
        if (this.Owner.Combo >= this.Owner.Moves["Behead"].Combo ) {
            this.AttackTarget(Target, this.Owner.Moves["Behead"]);
        } else if (this.Owner.Combo >= this.Owner.Moves["Cleave"].Combo && Math.floor(Math.random()* 100) >= 60) {
            this.AttackTarget(Target, this.Owner.Moves["Cleave"]);
        } else if (this.Owner.Combo >= this.Owner.Moves["Riposte"].Combo && this.LastMove == 'Parry') {
            this.AttackTarget(Target, this.Owner.Moves["Riposte"]);
        } else if ( (this.LastMove != 'Riposte' && this.LastMove != 'Parry') && Math.floor(Math.random() * 100) >= 70) {
            this.AttackTarget(Target, this.Owner.Moves['Parry']);
        } else if (this.LastMove == "Stab") {
            this.AttackTarget(Target, this.Owner.Moves["Stab"]);
        } else {
            this.AttackTarget(Target, this.Owner.Moves["Slash"]);
        }
    }    
};

//Boob-jitsu Class
App.Combat.Engines.Boobjitsu = class BoobjitsuCombatEngine extends App.Combat.Engines.Generic {

    constructor(...args)
    {
        super(...args);
    }

    get Class() { return "BOOBJITSU"; }

    CalculateDamage(Target, Command, Roll)
    {
        var base = Math.floor(this.Owner.Bust / 10) + Math.floor( this.Owner.Attack / 10);
        return Math.floor(base * Command.Damage); // Add damage mod
    }

    /**
     * Generate any combo points
     * @param {App.Combat.Combatant|App.Combat.Player} Target  
     * @param {*} Command 
     * @param {*} Roll 
     * @returns {number} number of combo points to grant
     */
    GenerateCombo(Target, Command, Roll)
    {

        if ( (Command.Name == "Jiggle" && this.LastMove == "Wobble") ||
             (Command.Name == "Wobble" && this.LastMove == "Jiggle") ) {
                 return 1;
             }

        if ( Command.Name == 'Bust Out' && 
            (this.LastMove == 'Twirl' || this.LastMove == 'Boob Quake' || this.LastMove == 'Titty Twister')) { 
                return 2; 
            }
             
        return 0;
    }

    /**
     * Apply effects to enemy
     * @param {App.Combat.Combatant|App.Combat.Player} Target  
     * @param {*} Command 
     * @param {*} Roll 
     */
    ApplyEffects(Target, Command, Roll)
    {

        if (Command.Name == 'Jiggle') {
            Target.AddEffect('BLINDED', 3);
        }

        if (Command.Name == 'Wobble') {
            this.Owner.AddEffect('BLOODTHIRST', 3);
        }

        if (Command.Name == 'Bust Out') {
            this.Owner.AddEffect('SEEKING');
        }

        if (Command.Name == 'Twirl') {
            this.Owner.AddEffect('LIFE LEECH', 1);
        }

        if (Command.Name == 'Boob Quake') {
            if ( Math.floor(100 * Math.random()) <= (this.Owner.Attack/2) ) {
                Target.AddEffect('STUNNED', 3);
                if (this.Owner.IsNPC) {
                    this.PrintMessage("<span style='color:yellow'>NPC_NAME stuns you!</span>", Target);
                } else {
                    this.PrintMessage("<span style='color:yellow'>You stun NPC_NAME!</span>", Target);
                }
            }
        }

        if (Command.Name == 'Titty Twister') {
            if ( Math.floor(100 * Math.random()) <= this.Owner.Attack ) {
                Target.AddEffect('STUNNED', 4);
                if (this.Owner.IsNPC) {
                    this.PrintMessage("<span style='color:yellow'>NPC_NAME stuns you!</span>", Target);
                } else {
                    this.PrintMessage("<span style='color:yellow'>You stun NPC_NAME!</span>", Target);
                }
            }
        }

    }

    DoAI(Target)
    {
        if (this.Owner.Combo >= this.Owner.Moves["Titty Twister"].Combo ) {
            this.AttackTarget(Target, this.Owner.Moves["Titty Twister"]);
        } else if (this.Owner.Combo >= this.Owner.Moves["Boob Quake"].Combo && Math.floor(Math.random()* 100) >= 60) {
            this.AttackTarget(Target, this.Owner.Moves["Boob Quake"]);
        } else if (this.Owner.Combo >= this.Owner.Moves["Twirl"].Combo && Math.floor(Math.random()* 100) >= 80) {
            this.AttackTarget(Target, this.Owner.Moves["Twirl"]);
        } else if (this.LastMove == 'Titty Twister' || this.LastMove == 'Boob Quake' || this.LastMove == 'Twirl') {
            this.AttackTarget(Target, this.Owner.Moves['Bust Out']);
        } else if (this.LastMove == "Wobble") {
            this.AttackTarget(Target, this.Owner.Moves["Jiggle"]);
        } else {
            this.AttackTarget(Target, this.Owner.Moves["Wobble"]);
        }
    } 
};

//Ass-fu Class
App.Combat.Engines.Assfu = class AssfuCombatEngine extends App.Combat.Engines.Generic {

    constructor(...args)
    {
        super(...args);
    }

    get Class() { return "ASSFU"; }

    CalculateDamage(Target, Command, Roll)
    {
        var base = Math.floor(this.Owner.Ass / 10) + Math.floor( this.Owner.Attack / 10);
        return Math.floor(base * Command.Damage); // Add damage mod
    }

    /**
     * Generate any combo points
     * @param {App.Combat.Combatant|App.Combat.Player} Target  
     * @param {*} Command 
     * @param {*} Roll 
     * @returns {number} number of combo points to grant
     */
    GenerateCombo(Target, Command, Roll)
    {

        if ( (Command.Name == "Shake It" && this.LastMove == "Booty Slam") ||
             (Command.Name == "Booty Slam" && this.LastMove == "Shake It") ) {
                 return 1;
             }

        if ( Command.Name == 'Twerk' && 
            (this.LastMove == 'Ass Quake' || this.LastMove == 'Thunder Buns' || this.LastMove == 'Buns of Steel')) { 
                return 2; 
            }
             
        return 0;
    }

    /**
     * Apply effects to enemy
     * @param {App.Combat.Combatant|App.Combat.Player} Target  
     * @param {*} Command 
     * @param {*} Roll 
     */
    ApplyEffects(Target, Command, Roll)
    {

        if (Command.Name == 'Shake It') {
            Target.AddEffect('BLINDED', 3);
        }

        if (Command.Name == 'Twerk') {
            this.Owner.AddEffect('DODGING', 3);
        }

        if (Command.Name == 'Ass Quake') {
            if ( Math.floor(100 * Math.random()) <= (this.Owner.Attack/3) ) {
                Target.AddEffect('STUNNED', 3);
                if (this.Owner.IsNPC) {
                    this.PrintMessage("<span style='color:yellow'>NPC_NAME stuns you!</span>", Target);
                } else {
                    this.PrintMessage("<span style='color:yellow'>You stun NPC_NAME!</span>", Target);
                }
            }
        }

        if (Command.Name == 'Thunder Buns') {
            if ( Math.floor(100 * Math.random()) <= this.Owner.Attack/2 ) {
                Target.AddEffect('STUNNED', 4);
                if (this.Owner.IsNPC) {
                    this.PrintMessage("<span style='color:yellow'>NPC_NAME stuns you!</span>", Target);
                } else {
                    this.PrintMessage("<span style='color:yellow'>You stun NPC_NAME!</span>", Target);
                }
            }
        }

        if (Command.Name == 'Buns of Steel') {
            if ( Math.floor(100 * Math.random()) <= this.Owner.Attack ) {
                Target.AddEffect('STUNNED', 4);
                if (this.Owner.IsNPC) {
                    this.PrintMessage("<span style='color:yellow'>NPC_NAME stuns you!</span>", Target);
                } else {
                    this.PrintMessage("<span style='color:yellow'>You stun NPC_NAME!</span>", Target);
                }
            }

            this.Owner.AddEffect('GUARDED', 4);
        }

    }

    DoAI(Target)
    {
        if (this.Owner.Combo >= this.Owner.Moves["Buns of Steel"].Combo ) {
            this.AttackTarget(Target, this.Owner.Moves["Buns of Steel"]);
        } else if (this.Owner.Combo >= this.Owner.Moves["Thunder Buns"].Combo && Math.floor(Math.random()* 100) >= 60) {
            this.AttackTarget(Target, this.Owner.Moves["Thunder Buns"]);
        } else if (this.Owner.Combo >= this.Owner.Moves["Ass Quake"].Combo && Math.floor(Math.random()* 100) >= 80) {
            this.AttackTarget(Target, this.Owner.Moves["Ass Quake"]);
        } else if (this.LastMove == 'Buns of Steel' || this.LastMove == 'Thunder Buns' || this.LastMove == 'Ass Quake') {
            this.AttackTarget(Target, this.Owner.Moves['Twerk']);
        } else if (this.LastMove == "Booty Slam") {
            this.AttackTarget(Target, this.Owner.Moves["Shake It"]);
        } else {
            this.AttackTarget(Target, this.Owner.Moves["Booty Slam"]);
        }
    } 
};

// MONSTER CLASSES
// ====================================================

// Kraken
App.Combat.Engines.Kraken = class UnarmedCombatEngine extends App.Combat.Engines.Generic {

    constructor(...args)
    {
        super(...args);
    }

    get Class() { return "KRAKEN"; }

    /**
     * Calculate the damage of an unarmed attack
     * @param {App.Combat.Combatant|App.Combat.Player} Target 
     * @param {*} Command 
     * @param {number} Roll 
     * @returns {number} Damage
     */
    CalculateDamage(Target, Command, Roll)
    {
        if (Command.Name == 'Ejactulate1' || Command.Name == 'Ejaculate2') return 0;

        return Math.ceil( Math.max(2, (5*Math.random())) * Command.Damage);
    }

    /**
     * Generate any combo points
     * @param {App.Combat.Combatant|App.Combat.Player} Target  
     * @param {*} Command 
     * @param {*} Roll 
     * @returns {number} number of combo points to grant
     */
    GenerateCombo(Target, Command, Roll)
    {
        return 0;
    }

    /**
     * Apply effects to enemy
     * @param {App.Combat.Combatant|App.Combat.Player} Target  
     * @param {*} Command 
     * @param {*} Roll 
     */
    ApplyEffects(Target, Command, Roll)
    {

        if (Target.IsNPC == true) return; // No effects on non-player characters.

        if (Command.Name == 'Grab') {
            this.Owner.AddEffect('SEEKING', 4);

        } else if (Command.Name == 'Ejaculate1') {
            Target.Player.AdjustStatXP('Perversion', 20);
            Target.Player.AdjustStatXP('WillPower', -20);
            Target.Player.AdjustBodyXP('Lips', 100);
            Target.Player.AdjustStatXP('Hormones', 100);
            Target.Player.AdjustBodyXP('Bust', 100);

        } else if (Command.Name == 'Ejaculate2') {
            Target.Player.AdjustStatXP('Perversion', 20);
            Target.Player.AdjustStatXP('WillPower', -20);
            Target.Player.AdjustBodyXP('Hips', 100);
            Target.Player.AdjustStatXP('Hormones', 100);
            Target.Player.AdjustBodyXP('Ass', 100);
        }
    }

    DoAI(Target)
    {

        if (this.Owner.Stamina < 30 && (50 >= (100 * Math.random()))) {
            this.Defend();
            return;
        }

        switch(this.LastMove) {
            case 'Ejaculate2':
            case 'Ejaculate1':
                    this.AttackTarget(Target, this.Owner.Moves["Strangle"]);
                    break;
            case 'Ass':
                    this.AttackTarget(Target, this.Owner.Moves['Ejaculate2']);
                    break;
            case 'Mouth':
                    this.AttackTarget(Target, this.Owner.Moves["Ejaculate1"]);
                    break;
            case 'Strangle':
                    if (100 * Math.random() >= 50) {
                        this.AttackTarget(Target, this.Owner.Moves['Ass']);
                    } else {
                        this.AttackTarget(Target, this.Owner.Moves['Mouth']);
                    }
                    break;
            case 'Grab':
                    this.AttackTarget(Target, this.Owner.Moves['Strangle']);
                    break;
            default: 
                    this.AttackTarget(Target, this.Owner.Moves['Grab']);
            }
    }

};