/**
 * This class is used for spectating and betting on fights. 
 * TODO: Allow the player to input the amount they want to bet.
 * TODO: Calculate odds of match up and pay out on them.
 */
App.Combat.SpectatorEngine = class SpectatorEngine {
    constructor() {
        this._OP_A = null;
        this._OP_B = null;
        this._BetOn = null;
        this._ChatLog = [ ];
        this._LootBuffer = [ ];
        this._MaxBet = 0;
        this._Club = null;
        this._CurrentOpponent = null;
    
    }

    get OpponentA() { return this._OP_A; }
    get OpponentB() { return this._OP_B; }
    get BetOn() { return this._BetOn; }
    get Club() { return this._Club; }
    get MaxBet() { return this._MaxBet; }
    get CA() { return this._CurrentOpponent; }
    get CT() { return this.CA.Id == 'A' ? this.OpponentB : this.OpponentA; }
    get Winner() { 
        if (this.OpponentA == null && this.OpponentB == null) return "no one";
        return this.OpponentA.IsDead == true ? this.OpponentB.Name : this.OpponentA.Name; 
    }

    get IWon() {
        var winner = this.OpponentA.IsDead == true ? this.OpponentB : this.OpponentA; 
        return (winner.Id == this.BetOn);
    }

    get PayoutStr() {
        if (this.BetOn == null) return "";

        if (this.IWon) {
            return "You win @@color:gold;"+this.MaxBet+" coins@@!";
        } else {
            return "You lose @@color:gold;"+this.MaxBet+" coins@@!";
        }
    }
    LoadEncounter(Club, MaxBet)
    {
  
        sessionStorage.setItem('QOS_FIGHTCLUB_NAME', Club);
        sessionStorage.setItem('QOS_FIGHTCLUB_MAXBET', MaxBet);

        this._BET_A = 0;
        this._BET_B = 0;
        this._ChatLog = [ ];
        this._LootBuffer = [ ];
        this._Club = Club;
        this._MaxBet = MaxBet;

        this._OP_A = this._AddEnemy(App.PR.GetRandomListItem(App.Combat.ClubBetData[Club]));
        this._OP_A.Id = 'A';
        this._OP_B = this._AddEnemy(App.PR.GetRandomListItem(App.Combat.ClubBetData[Club]));
        this._OP_B.Id = 'B';
        this._CurrentOpponent = this._OP_A;

    }

    DrawUI() {

        if (this.Club == null) { //Reload from session state if browser refreshed.
            this.LoadEncounter( sessionStorage.getItem('QOS_FIGHTCLUB_NAME'), 
                                sessionStorage.getItem('QOS_FIGHTCLUB_MAXBET'));
        }

        $(document).one(":passageend", this._DrawUI.bind(this));
    }

    DrawResults() {
        $(document).one(":passageend", this._DrawWinLog.bind(this));
    }

    BetLink(Target)
    {
        var str = "<<click 'Bet "+this.MaxBet+" coins on "+Target.Title+"' 'FightBetOverUI'>> \
        <<run setup.player.NextPhase(1);>>\
        <<run setup.Spectator.PlaceBet('"+Target.Id+"')>><</click>>";

        return str;
    }

    WatchLink()
    {
        var str = "<<click 'Just watch' 'FightBetOverUI'>> \
        <<run setup.player.NextPhase(1);>>\
        <<run setup.Spectator.SpectateFight();>><</click>>";

        return str;
    }

    BetALink()
    {
        return this.BetLink(this.OpponentA);
    }

    BetBLink()
    {
        return this.BetLink(this.OpponentB);
    }

    PlaceBet(TargetId)
    {
        this._BetOn = TargetId;
        this._SimulateCombat();
        this._DoPayout();
    }

    SpectateFight()
    {
        this._BetOn = null;
        this._SimulateCombat();
    }

    _DrawUI()
    {
        this._DrawEnemyContainers();
    }

    _DrawEnemyContainers()
    {
        var root = $('#EnemyGUI');
        root.empty();
        this._DrawPortrait(this.OpponentA);
        var vs = $('<div>').attr('id', 'versusTxt').addClass('EnemyContainer').text('VS');
        root.append(vs);
        this._DrawPortrait(this.OpponentB);
    }

    _DrawPortrait(Fighter)
    {
        var root = $('#EnemyGUI');
        var container = $('<div>').attr('id', 'EnemyContainer'+Fighter.Id).addClass('EnemyContainer');
        container.append('<div>').addClass('EnemyTitle').text(Fighter.Title);
        var frame = $('<div>').attr('id', 'EnemyPortrait'+Fighter.Id).addClass('EnemyPortrait');
        frame.addClass(Fighter.Portrait);
        container.append(frame);
        root.append(container);
    }

    _DrawWinLog()
    {
        var root = $('#WinDiv');
        var log = $('<div>').attr('id', 'WinChatLog');
        root.append(log);
        for (var i = 0; i < this._ChatLog.length; i++) {
            log.append("<P class='ChatLog'>"+this._ChatLog[i]+"</P>");
            }

    log.scrollTop(log.prop("scrollHeight"));
    }

    /**
     * Add an enemy object to the encounter.
     * @param {*} e enemy object data
     * @returns {App.Combat.Combatant}
     */
    _AddEnemy(e)
    {
        const d = App.Combat.EnemyData[e];
        var enemy = new App.Combat.Combatant(d, 
            this._UpdateNPCStatusCB.bind(this),
            this._UpdatePlayerStatusCB.bind(this), 
            this._ChatLogCB.bind(this));
        return enemy;
    }

    _FormatMessage(m, o)
    {
        if (o == null || typeof o === 'undefined') {
            return m;
        }

        var npc = setup.player.GetNPC("Dummy"); // Fake NPC
        npc.Data.Name = o.Name; // Swapsie name
        // Custom replacer(s)
        var that = this;
        m = m.replace(/(ENEMY_([0-9]+))/g,function(m, f, n) {
            return "<span style='color:cyan'>"+that._enemies[n].Name+"</span>";
        });

        m = m.replace(/NPC_PRONOUN/g, function(m, f, n ) {
            return o.Gender == 1 ? "his" : "her";
        });

        m = App.PR.TokenizeString(setup.player, npc, m);
        return m;
    }

    
    /**
     * Cheap and dirty hack to re-use combat messages.
     * @param {string} m 
     * @param {App.Combat.Combatant} o 
     */
    _SubstituteYou(m, o)
    {
        var target = o.Id == this.OpponentA.Id ? this.OpponentB : this.OpponentA;
        m = m.replace(/((\s)(you)([^a-zA-z]))/g, function(m, p1, p2, p3, p4) {
            return p2+ target.Name + p4;
        });

        m = m.replace(/^You/g, target.Name);
        return m;
    }

    _WriteMessage(m, o)
    {
        m = this._SubstituteYou(m,o);
        m = this._FormatMessage(m,o);
        this._ChatLog.push(m);
    }

    // Dummy callbacks

    _ChatLogCB(m, o)
    {
        this._WriteMessage(m, o);
    }

    _UpdatePlayerStatusCB(m)
    {
    }

    _UpdateNPCStatusCB(npc)
    {

    }

    _NextRound()
    {
        this._CurrentOpponent = this.CA.Id == 'A' ? this.OpponentB : this.OpponentA;
    }

    _SimulateCombat()
    {
        while( this.OpponentA.IsDead != true && this.OpponentB.IsDead != true)
        {
            this.CA.StartTurn();
            this.CA.DoAI(this.CT, this._ChatLogCB.bind(this));
            this.CA.EndTurn();
            this._NextRound();
        }
    }

    _DoPayout()
    {
        if (this.IWon == true) {
            setup.player.AdjustMoney(this.MaxBet);
        } else {
            setup.player.AdjustMoney((this.MaxBet * -1.0));
        }
    }
};