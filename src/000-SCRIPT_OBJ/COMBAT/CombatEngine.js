/**
 * Make sure to instantiate this object to a namespace that will not be cleared during
 * normal play. Prior to drawing the UI with the <<combatUI>> widget, make sure that you
 * call this.InitializeScene() to clear variables and then this.LoadEncounter({}) from the
 * PREVIOUS passage inside a <<click>> macro, so that the state of this object will not be 
 * overwritten if the player goes into another menu screen while playing.
 */
App.Combat.CombatEngine = class CombatEngine {
    constructor() {

        this._target = null;
        this._encounterData = null;
        this._enemies = [ ];
        /** @type {App.Combat.Player} */
        this._player = null;
        this._turn = 0;
        this._Timeline = [];

        this._UI_MaxInitiative = 13;
        this._HpBars = { };
        this._StaminaBars = { };
        this._ChatLog = [ ];
        this._LastSelectedStyle = "UNARMED"; // Don't overwrite
        this._flee = 0;
        this._fleePassage = 'Cabin';
    
    }

    get Enemies() { return this._enemies; }

    /**
     * Call before load encounter.
     * @param {*} opts option object
     */
    InitializeScene(opts)
    {
        this._encounterData = null;
        this._enemies = [ ];
        this._player = null;
        this._turn = 0;
        this._Timeline = [];
        this._HpBars = { };
        this._StaminaBars = { };
        this._ChatLog = [ ];
        
        if (typeof opts !== 'undefined') {
            if (opts.hasOwnProperty('flee')) this._flee = opts.flee;
            if (opts.hasOwnProperty('fleePassage')) this._fleePassage = opts.fleePassage;
        }
        
    }

    /**
     * Load an encounter to the engine.
     * Come back later and serialize the enemy stats and player stats to save to sessionStorage
     * and then reconstitute them on reload of page.
     * @param {string} Encounter encounter data record
     */
    LoadEncounter(Encounter)
    {
        sessionStorage.setItem('QOS_ENCOUNTER_KEY', Encounter);
        sessionStorage.setItem('QOS_ENCOUNTER_FLEE', this._flee);
        sessionStorage.setItem('QOS_ENCOUNTER_FLEE_PASSAGE', this._fleePassage);
        this._encounterData = Object.create(App.Combat.EncounterData[Encounter]);
        for(const e of this._encounterData.Enemies) this._AddEnemy(e);
        this._AddPlayer(setup.player);
        this._AddChat(this._encounterData.Intro);
    }

    DrawUI() {
        // Reconstitute some data from the session storage if the player reloaded the page to be a cheat.
        if (this._encounterData == null) {
            this.LoadEncounter(sessionStorage.getItem('QOS_ENCOUNTER_KEY'));
            this._flee = sessionStorage.getItem('QOS_ENCOUNTER_FLEE');
            this._fleePassage = sessionStorage.getItem('QOS_ENCOUNTER_FLEE_PASSAGE');
        }

        $(document).one(":passageend", this._DrawUI.bind(this));
    }

    StartCombat()
    {
        this._StartRound();
    }

    //UI COMPONENTS

    _DrawUI()
    {
        // Main UI Components.
        this._DrawInitiativeBar();
        this._DrawEnemyContainers();
        this._DrawChatLog();
        this._DrawStyles();
        this._DrawCombatButtons();

        // Default Control buttons
        this._AddDefaultCommands();

        //Status for players.
        this._UpdatePlayerComboBar();
        this._UpdatePlayerStaminaBar();
        //Start the fight.
        this._StartRound();
    }

    _DrawCombatButtons()
    {
        var selectedStyle = $('#combatStyles').children("option:selected").val();
        var root = $('#CombatCommands');
        root.empty();

        var d = App.Combat.Moves[selectedStyle];

        for(var prop in d)
        {
            if (prop == 'Engine') continue; // filter out this one.
            var container = $('<div>').addClass("CombatButtonContainer");
            var span = $('<span>').addClass("CombatToolTip").html(
                "<span style='color:yellow'>"+d[prop].Name+"</span><br>"+d[prop].Description);
            var button = $('<div>').attr('id', 'combatButton'+prop).addClass("CombatButton");
            button.addClass(d[prop].Icon);
            //if (d[prop].Unlock(this._player)) {
            if (this._player.Engine.CheckCommand(d[prop])) {
                button.on("click", {cmd:prop}, this._CombatCommandHandler.bind(this));
                button.addClass("CombatButtonEnabled");
            } else {
                button.addClass("CombatButtonDisabled");
            }
            container.append(span);
            container.append(button);
            root.append(container);
        }
    }

    _UpdateCombatButtons()
    {
        var selectedStyle = $('#combatStyles').children("option:selected").val();
        var d = App.Combat.Moves[selectedStyle];

        for(var prop in d)
        {
            if (prop == 'Engine') continue; // filter out this one.
            var button = $("#combatButton"+prop);
            button.off('click');
            if (this._player.Engine.CheckCommand(d[prop])) {
                button.on("click", {cmd:prop}, this._CombatCommandHandler.bind(this));
                button.removeClass("CombatButtonDisabled");
                button.addClass("CombatButtonEnabled");
            } else {
                button.removeClass("CombatButtonEnabled");
                button.addClass("CombatButtonDisabled");
            }
        }
    }

    _AddDefaultCommands()
    {
        var defendBtn = $('#cmdDefend');
        defendBtn.on("click", {cmd: 'defend'}, this._CombatCommandHandler.bind(this));
        var fleeBtn = $('#cmdFlee');
        fleeBtn.on("click", {cmd: 'flee'}, this._CombatCommandHandler.bind(this));
        var restoreBtn = $('#cmdRestoreStamina');
        restoreBtn.on("click", {cmd: 'restoreStamina'}, this._CombatCommandHandler.bind(this));
    }

    _UpdateDefaultCommands()
    {

    }
    
    _DrawStyles()
    {
        var root = $('#combatStyles');
        var styles = this._player.AvailableMoveset;
        for(var prop in styles)
        {
            var opt = $('<option>').attr('value', prop).text(styles[prop]);
            if (prop == this._LastSelectedStyle) opt.attr('selected', 'selected');
            root.append(opt);
        }

    }

    _DrawChatLog()
    {
        var root = $('#EnemyGUI');
        var log = $('<div>').attr('id', 'CombatChatLog');
        root.append(log);
            for (var i = 0; i < this._ChatLog.length; i++) {
                log.append("<P class='ChatLog'>"+this._ChatLog[i]+"</P>");
                }

        log.scrollTop(log.prop("scrollHeight"));
    }

    _DrawEnemyContainers()
    {
        var root = $('#EnemyGUI');
        root.empty();

        for (var i = 0; i < this._enemies.length; i++) {
            var container = $('<div>').attr('id', 'EnemyContainer'+i).addClass('EnemyContainer');
            container.append('<div>').addClass('EnemyTitle').text(this._enemies[i].Title);
            var frame = $('<div>').attr('id', 'EnemyPortrait'+i).addClass('EnemyPortrait');
            frame.addClass("EnemySelectEnabled");
            frame.addClass(this._enemies[i].Portrait);
            frame.on("click", {index:i}, this._SelectEnemyHandler.bind(this));
            container.append(frame);
            root.append(container);
            this._DrawStatus(frame, i);
            this._UpdateHPBar(this._enemies[i]);
            this._UpdateStaminaBar(this._enemies[i]);
            this._UpdateEnemyPortraits();
        }
    }

    _DrawStatus(container, enemyIndex)
    {
        var frame = $('<div>').attr('id', 'StatusFrame'+enemyIndex).addClass('EnemyStatusFrame');

        var hp = $('<div>').attr('id', 'HpHolder'+enemyIndex).addClass('EnemyHPHolder');
        var hpBar = $('<div>').attr('id', 'EnemyHpBar'+enemyIndex).addClass('EnemyHpBar');
        var hpCover = $('<div>').attr('id','EnemyHpBarCover'+enemyIndex).addClass('EnemyHpBarCover');
        hp.append(hpBar);
        hpBar.append(hpCover);
        frame.append(hp);
        this._HpBars[this._enemies[enemyIndex].Id] = hpCover;

        var stamina = $('<div>').attr('id', 'StaminaHolder'+enemyIndex).addClass('EnemyStaminaHolder');
        var staminaBar = $('<div>').attr('id', 'EnemyStaminaBar'+enemyIndex).addClass('EnemyStaminaBar');
        var staminaCover = $('<div>').attr('id','EnemyStaminaBarCover'+enemyIndex).addClass('EnemyStaminaBarCover');

        stamina.append(staminaBar);
        staminaBar.append(staminaCover);
        frame.append(stamina);
        this._StaminaBars[this._enemies[enemyIndex].Id] = staminaCover;

        container.append(frame);

    }

    _UpdateEnemyPortraits()
    {
        for (var i = 0; i < this._enemies.length; i++)
        {
            var frame = $("#EnemyPortrait"+i);
            frame.removeClass("ActivePortraitFrame");
            frame.removeClass("InactivePortraitFrame");

            if (this._enemies[i].IsDead) {
                frame.css("opacity", 0.5);
                frame.addClass("InactivePortraitFrame");
                frame.removeClass("EnemySelectEnabled");
                if (this._enemies[i] == this._target) this._target = null;
                frame.off("click");
            } else {
                if (this._enemies[i] == this._target) {
                    frame.addClass("ActivePortraitFrame");
                } else {
                    frame.addClass("InactivePortraitFrame");
                }
            }
        }
    }

    _UpdateHPBar(obj)
    {
        var element = this._HpBars[obj.Id];
        var x = Math.ceil( 190 * (obj.Health / obj.MaxHealth));
        element.css('width', x+"px");
    }

    _UpdateStaminaBar(obj)
    {
        var element = this._StaminaBars[obj.Id];
        var x = Math.ceil( 190 * (obj.Stamina / obj.MaxStamina));
        element.css('width', x+"px");
    }

    _UpdatePlayerStaminaBar()
    {
        var element = $('#PlayerStaminaBar');
        var x = Math.ceil( 120 * (this._player.Stamina / this._player.MaxStamina));
        element.css('width', x+"px");
    }

    _UpdatePlayerComboBar()
    {
        var element = $('#PlayerComboBar');
        var x = Math.ceil( 120 * (this._player.Combo / this._player.MaxCombo));
        element.css('width', x+"px");
    }

    _DrawInitiativeBar()
    {
        this._GenerateTimeLine(); // Generate data structure

        var root = $('#InitiativeBar');
        root.empty(); // Clear all elements that already exist.

        //Title
        root.append( $('<div>').addClass('InitiativePortrait').text('TURN'));

        var max = this._Timeline.length >= this._UI_MaxInitiative ? this._UI_MaxInitiative : this._Timeline.length;
        // Create portrait frames.
        for (var i = 0; i < max; i ++)
        {
            var frame = $('<div>').attr('id', 'InitiativePortrait'+i).addClass('InitiativePortrait');
            
            if (i == 0) {
                frame.addClass('ActiveInitiativeFrame');
            } else {
                frame.addClass('InactiveInitiativeFrame');
            }
            frame.text(this._Timeline[i].Name);
            root.append( frame );
        }

 
    }
    // OTHER INTERNAL METHODS

    _AddChat(m)
    {
        m = this._FormatMessage(m);
        this._ChatLog.push(m);
    }

    _FormatMessage(m, o)
    {
        if (o == null || typeof o === 'undefined') {
            o = this._enemies[0];
        }

        var npc = setup.player.GetNPC("Dummy"); // Fake NPC
        npc.Data.Name = o.Name; // Swapsie name
        // Custom replacer(s)
        var that = this;
        m = m.replace(/(ENEMY_([0-9]+))/g,function(m, f, n) {
            console.log("f="+f+",n="+n);
            return "<span style='color:cyan'>"+that._enemies[n].Name+"</span>";
        });

        m = App.PR.TokenizeString(setup.player, npc, m);
        return m;
    }

    _WriteMessage(m, o)
    {
        m = this._FormatMessage(m,o);
        this._ChatLog.push(m);
        var log = $('#CombatChatLog');
        log.append("<P class='ChatLog'>"+m+"</P>");
        log.animate({scrollTop: log.prop("scrollHeight")}, 500);
    }

    /**
     * Add an enemy object to the encounter.
     * @param {*} e enemy object data
     */
    _AddEnemy(e)
    {
        const d = App.Combat.EnemyData[e];
        var enemy = new App.Combat.Combatant(d, 
            this._UpdateNPCStatusCB.bind(this),
            this._UpdatePlayerStatusCB.bind(this), 
            this._ChatLogCB.bind(this));
        enemy.Id = "ENEMY_"+this._enemies.length;
        this._enemies.push( enemy );
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
            MaxHealth: 100,
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
        this._player.Id = "PLAYER";
        this._SwitchMoveSet("UNARMED");

    }

    _SwitchMoveSet(Name)
    {
        var MoveSet = App.Combat.Moves[Name];
        this._player.ChangeMoveSet(MoveSet.Engine, this._UpdatePlayerStatusCB.bind(this),
                this._UpdateNPCStatusCB.bind(this),
                this._ChatLogCB.bind(this));
    }

    /**
     * Creates an array of the predicted order of turns.
     */
    _GenerateTimeLine()
    {
        this._Timeline = [ ];
        var Timeline = { };
        this._PopulateTimeline(this._player, Timeline);
        for(var i = 0; i < this._enemies.length; i++) {
            if (this._enemies[i].IsDead == true) continue;
            this._PopulateTimeline(this._enemies[i], Timeline);
        }

        
        // Navigate timeline. Rely on the expected behavior of first set keys being retrieved first.
        // If this doens't work then get keys as array, sort, navigate that. Dumb but whatever.
        var position = 0;
        for (var prop in Timeline) 
        {
            if (position >= this._UI_MaxInitiative) break; // Abort out of range of the portraits.

            var arr = Timeline[prop];
            for (var x = 0; x < arr.length; x++) {
                if (position >= this._UI_MaxInitiative) break; // Abort nested loop
                this._Timeline.push(Timeline[prop][x]);
                position++;
            }
        }

    }

    _PopulateTimeline(o, Timeline)
    {
        var last = 0;
        for(var i = 0; i < 5; i++) {
            var t = o.GetTimeline(i);
            if (t <= last) continue;
            last = t;
            if (Timeline.hasOwnProperty(t)) {
                Timeline[t].push(o);
            } else {
                Timeline[t] = [ o ];
            }
        }
    }

    _StartRound()
    {
        //Who's turn is it?
        if (this._GetCombatant().IsNPC) {
            this._EnemyTurn();
        } else {
            this._PlayerTurn();
        }
    }

    _NextRound()
    {
        this._DrawInitiativeBar();
        this._StartRound();
    }

    /**
     * @returns {App.Combat.Combatant|App.Combat.Player}
     */
    _GetCombatant()
    {
        return this._Timeline[0];
    }

    _EnemyTurn()
    {
        this._GetCombatant().StartTurn();
        this._WriteMessage("NPC_NAME attacks you", this._GetCombatant());
        this._GetCombatant().AddWeaponDelay(10);
        this._GetCombatant().EndTurn();
        setTimeout(this._NextRound.bind(this), 500);
    }

    _PlayerTurn()
    {
        //this._WriteMessage("It is your turn!", this._player);
    }

    // CALLBACKS

    _CombatCommandHandler(e)
    {
        console.log("command: "+e.data.cmd);
        if (this._GetCombatant() !== this._player) return;

        if (e.data.cmd == 'flee') {

            if (this._flee == 0) {
                this._WriteMessage("<span style='color:red'>You cannot flee!</span>", this._player);
                return;
            }
            if (Math.floor(Math.random() * 100) > this._flee) {
                this._WriteMessage("<span style='color:red'>You attempt to flee, but fail!</span>", this._player);
                this._GetCombatant().StartTurn();
                //no op
                this._GetCombatant().EndTurn();
                this._DrawInitiativeBar();
                this._StartRound();
                return;
            } else {
                // placeholder for now
                SugarCube.State.display(this._fleePassage);
            }
            return;
        }

        if (e.data.cmd == 'defend') {
            this._GetCombatant().StartTurn();
            this._GetCombatant().Engine.Defend();
            this._GetCombatant().EndTurn();
            this._DrawInitiativeBar();
            this._StartRound();
            return;
        }

        if (e.data.cmd == 'restoreStamina')
        {
            if (SugarCube.setup.player.Energy <= 0) {
                this._WriteMessage("<span style='color:red'>You do not have enough energy!</span>", this._player);
                return;
            } else {
                this._WriteMessage("<span style='color:lime'>You pull deep from your reserves and catch a second wind!</span>", this._player);
                this._GetCombatant().StartTurn();
                this._GetCombatant().RecoverStamina(100);
                this._GetCombatant().UseEnergy(1);
                this._GetCombatant().EndTurn();
                this._DrawInitiativeBar();
                this._StartRound();
                return;
            }
        }

        if (this._target == null) {
            this._WriteMessage("<span style='color:red'>Select a target first!</span>");
            return;
        }

        var Command = this._GetCombatant().Moves[e.data.cmd];
        console.log(Command);
        this._GetCombatant().StartTurn();
        this._GetCombatant().Engine.AttackTarget(this._target, Command);
        this._GetCombatant().EndTurn();
        this._DrawInitiativeBar();
        this._StartRound();
    }

    _SelectEnemyHandler(e)
    {
        console.log("_SelectEnemyHandler:"+e.data.index);
        var obj = this._enemies[e.data.index];
        if (obj.IsDead != true) {
            this._target = obj;
        }

        this._UpdateEnemyPortraits();
    }

    _ChatLogCB(m, o)
    {
        this._WriteMessage(m, o);
    }

    _UpdatePlayerStatusCB(m)
    {
        this._UpdatePlayerComboBar();
        this._UpdatePlayerStaminaBar();
        this._UpdateCombatButtons();
    }

    _UpdateNPCStatusCB(npc)
    {
        console.log(npc);
        this._UpdateHPBar(npc);
        this._UpdateStaminaBar(npc);
        this._UpdateEnemyPortraits();
    }
}