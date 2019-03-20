/**
 * Make sure to instantiate this object to a namespace that will not be cleared during
 * normal play. Prior to drawing the UI with the <<combatUI>> widget, make sure that you
 * call this.InitializeScene() to clear variables and then this.LoadEncounter({}) from the
 * PREVIOUS passage inside a <<click>> macro, so that the state of this object will not be 
 * overwritten if the player goes into another menu screen while playing.
 */
App.Combat.CombatEngine = class CombatEngine {
    constructor() {

        this._encounterData = null;
        this._enemies = [ ];
        this._player = null;
        this._turn = 0;
        this._Timeline = [];

        this._UI_MaxInitiative = 13;
        this._HpBars = { };
        this._StaminaBars = { };
        this._ChatLog = [ ];
        this._LastSelectedStyle = "UNARMED"; // Don't overwrite
    
    }

    get Enemies() { return this._enemies; }

    /**
     * Call before load encounter.
     */
    InitializeScene()
    {
        this._encounterData = null;
        this._enemies = [ ];
        this._player = null;
        this._turn = 0;
        this._Timeline = [];
        this._HpBars = { };
        this._StaminaBars = { };
        this._ChatLog = [ ];
        
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
        this._encounterData = Object.create(App.Combat.EncounterData[Encounter]);
        for(const e of this._encounterData.Enemies) this._AddEnemy(e);
        this._AddPlayer(setup.player);
        this._AddChat(this._encounterData.Intro);
    }

    DrawUI() {
        if (this._encounterData == null)
            this.LoadEncounter(sessionStorage.getItem('QOS_ENCOUNTER_KEY'));

        $(document).one(":passageend", this._DrawUI.bind(this));
    }

    //UI COMPONENTS

    _DrawUI()
    {
        this._DrawInitiativeBar();
        this._DrawEnemyContainers();
        this._DrawChatLog();
        this._DrawStyles();
        this._DrawCombatButtons();
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
            var span = $('<span>').addClass("CombatToolTip").text(d[prop].Description);
            var button = $('<div>').attr('id', 'combatButton'+prop).addClass("CombatButton");
            button.addClass(d[prop].Icon);
            if (d[prop].Unlock(this._player)) {
                button.addClass("CombatButtonEnabled");
            } else {
                button.addClass("CombatButtonDisabled");
            }
            //button.append(span);
            container.append(span);
            container.append(button);
            root.append(container);
        }
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
                log.append("<P>"+this._ChatLog[i]+"</P>");
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
            var frame = $('<div>').attr('id', 'EnemyPortrait'+i).addClass('EnemyPortrait InactivePortraitFrame');
            frame.addClass(this._enemies[i].Portrait);
            container.append(frame);
            root.append(container);
            this._DrawStatus(frame, i);
            this._UpdateHPBar(this._enemies[i]);
            this._UpdateStaminaBar(this._enemies[i]);
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

    _DrawInitiativeBar()
    {
        this._GenerateTimeLine(); // Generate data structure

        var root = $('#InitiativeBar');
        root.empty(); // Clear all elements that already exist.

        //Title
        root.append( $('<div>').addClass('InitiativePortrait').text('TURN'));

        // Create portrait frames.
        for (var i = 0; i < this._UI_MaxInitiative; i ++)
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
        log.append("<P>"+m+"</P>");
        log.animate({scrollTop: log.prop("scrollHeight")}, 1000);
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
    }

    /**
     * Creates an array of the predicted order of turns.
     */
    _GenerateTimeLine()
    {
        var Timeline = { };
        this._PopulateTimeline(this._player, Timeline);
        for(var i = 0; i < this._enemies.length; i++) this._PopulateTimeline(this._enemies[i], Timeline);

        
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
        for(var i = 0; i < 10; i++) {
            var t = o.GetTimeline(i);
            if (Timeline.hasOwnProperty(t)) {
                Timeline[t].push(o);
            } else {
                Timeline[t] = [ o ];
            }
        }
    }

    // CALLBACKS

    _ChatLogCB(m, o)
    {
        this._WriteMessage(m, o);
    }

    _UpdatePlayerStatusCB(m)
    {
        console.log(m);
    }

    _UpdateNPCStatusCB(npc)
    {
        this._UpdateHPBar(npc);
        this._UpdateStaminaBar(npc);
    }
}