// Gambling engine.
// 'Pirates Dice' (poker like game with dice) - TBD
// 'Shut the Coffin' simple point like dice game
// 'Blackjack' We all know and love. Right? - TBD
// 'Grand Hazard' Sorta like craps. Old West style game. - TBD

App.Gambling.Coffin = class CoffinEngine {
    
    constructor() {

        this.MyScore = [0,0,0,0,0,0,0,0];
        this.OpponentScore = [0,0,0,0,0,0,0,0];

        this._ReturnPassage = "Deck"; // default

        this._Wants = [ "Hand Job", "Blow Job", "Tit Fuck", "Ass Fuck" ];
        this._Skills = [ "HandJobs", "BlowJobs", "TitFucking", "AssFucking" ];
        this._Icons = [ "handBetIcon", "bjBetIcon", "titBetIcon", "assBetIcon" ];

        this.Gamblers = [ ];
        this._GamblerPosition = 0;
        this._SelectedBet = null;
        this._Element = "#GamblingGUI";
        this._RoundNum = 1;
        this._DiceRolling = false;
        this._PlayerTurn = true;
        this._Screen = "NEW"; // NEW -> BET -> GAME -> OVER (BACK TO BET OR END PASSAGE)

    }

    get ReturnPassage() { return this._ReturnPassage; }
    set ReturnPassage(v) { this._ReturnPassage = v; }

    SetupGame(returnPassage) {
        console.log("Setting up game of Coffin...");
        this.ReturnPassage = returnPassage;
        $(document).one(":passageend", this._SetupGame.bind(this));
    }

    PrintResults() {
        return "You walk away from the game.";
    }

    // Setup functions
    _SetupGame() {

        if (this._Screen == "NEW") {
            this._CreateGamblers();
            this._SetupPoints();
            this._ButtonSetup();
            this._DisplayGambler(0);
            console.log("Game setup");
        } else if (this._Screen == "BET") {
            this._SetupPoints();
            this._ButtonSetup();
            this._cbStartGame();
            this._DisplayGambler(this._GamblerPosition);
            this._HighlightBet();
        } else if (this._Screen == "GAME" || this._Screen == "OVER") {
            this._ReDrawPoints();
            this._ButtonSetup();
            this._PrintRound();
            $('#CoffinBetContainer').css('display', 'none');
            $('#CoffinDiceContainer').css('display', 'block');
            $('#betButtons').css('display', 'none');

            if (this._PlayerTurn == true && this._Screen == "GAME") {
                this._DialogBox("YOUR TURN", "gold");
                $('#playButtons').css('display', 'block');
            } else {
                $('#playButtons').css('display', 'none');
                $('#endButtons').css('display', 'block');
            }
        }
    }

    _CreateGamblers() {
        this.Gamblers = [ ];
        this._GamblerPosition = 0;
        this._SelectedBet = null;
        this._RoundNum = 1;

        for (var i = 0; i < 6; i++) {
            var g = { };
            g.n = App.PR.GetRandomListItem(App.Data.Names["Male"]);
            g.bet1Offer = (100 * Math.random()) > 90 ? "Item" : "Coins";
            g.bet1Want = (100 * Math.random() > 40) ? "Coins" : Math.round((this._Wants.length-1) * Math.random());
            g.bet1Value = this._CalculateBetValue(g.bet1Offer, g.bet1Want);
            g.bet1Status = 0; // 0 nothing, 1 lose, 2 win
            
            g.bet2Offer = (100 * Math.random()) > 90 ? "Item" : "Coins";
            g.bet2Want = (100 * Math.random() > 40) ? "Coins" : Math.round((this._Wants.length-1) * Math.random());
            g.bet2Value = this._CalculateBetValue(g.bet2Offer, g.bet2Want);
            g.bet2Status = 0;

            // Add lust
            var npcLust = setup.player.GetNPC("Crew").Lust();
            // 1-10 + random 0-40
            g.lust = ( Math.floor(npcLust/10) ) + Math.floor( ((40 * npcLust/100) * Math.random()) );
            this.Gamblers.push(g);
        }
    }

    _CalculateBetValue(Offer, Want)
    {
        if ((Offer == "Item" || Offer == "Coins") && Want == "Coins") return 25 + Math.ceil(25 * Math.random());
        return Math.ceil( 50 * (setup.player.Skills[this._Skills[Want]]/100));
    }

    _DisplayGambler(pos = 0) { 
        const g = this.Gamblers[pos];
        console.log(g);
        $("#CoffinNPCName").text(g.n);
        
        //Setup first bet.
        var icon = g.bet1Offer == "Coins" ? "coinBetIcon" : "itemBetIcon";
        var value = g.bet1Offer == "Coins" ? g.bet1Value : "";
        $('#betIcon1a').removeClass().addClass(icon).text(value);

        icon = g.bet1Want == "Coins" ? "coinBetIcon" : this._Icons[g.bet1Want];
        value = g.bet1Want == "Coins" ? g.bet1Value : "";
        $('#betIcon1b').removeClass().addClass(icon).text(value);

        if (g.bet1Value < g.lust && g.bet1Want != "Coins") {
            $('#CoffinBet1Blocker').removeClass().addClass("disabledGamePanel").text("NO BET, YOUR SKILL IS TOO LOW").off();
        } else if (g.bet1Status != 0) {
            $('#CoffinBet1Blocker').removeClass().addClass("disabledGamePanel").text("ALREADY BET").off();
        } else {
            $('#CoffinBet1Blocker').removeClass().addClass("activeGamePanel").text("").on("click", {on: 1, off: 2 }, this._cbSelectBet.bind(this));
        }

        //Setup second bet.
        icon = g.bet2Offer == "Coins" ? "coinBetIcon" : "itemBetIcon";
        value = g.bet2Offer == "Coins" ? g.bet2Value : "";
        $('#betIcon2a').removeClass().addClass(icon).text(value);

        icon = g.bet2Want == "Coins" ? "coinBetIcon" : this._Icons[g.bet2Want];
        value = g.bet2Want == "Coins" ? g.bet2Value : "";
        $('#betIcon2b').removeClass().addClass(icon).text(value);
        
        if (g.bet2Value < g.lust && g.bet2Want != "Coins") {
            $('#CoffinBet2Blocker').removeClass().addClass("disabledGamePanel").text("NO BET, YOUR SKILL IS TOO LOW").off();
        } else if (g.bet2Status != 0) {
            $('#CoffinBet2Blocker').removeClass().addClass("disabledGamePanel").text("ALREADY BET").off();
        } else {
            $('#CoffinBet2Blocker').removeClass().addClass("activeGamePanel").text("").on("click", { on: 2, off: 1 }, this._cbSelectBet.bind(this));
        }
    }

    _SetupPoints() {
        this.MyScore = [0,0,0,0,0,0,0,0];
        this.OpponentScore = [0,0,0,0,0,0,0,0];

        for(var i = 0; i < this.MyScore.length; i++) {
            $('#pcbox'+i).removeClass().addClass('coffinNumBox CoffinpointEmpty');
            $('#npcbox'+i).removeClass().addClass('coffinNumBox CoffinpointEmpty');
        }
    }

    _ReDrawPoints() {
        for(var i = 0; i < this.MyScore.length; i++) {
            if (this.MyScore[i] == 1) {
                $('#pcbox'+i).removeClass().addClass('coffinNumBox CoffinpointHit');
                $('#npcbox'+i).removeClass().addClass('coffinNumBox CoffinpointMissed');
            } else if (this.OpponentScore[i] == 1) {
                $('#pcbox'+i).removeClass().addClass('coffinNumBox CoffinpointMissed');
                $('#npcbox'+i).removeClass().addClass('coffinNumBox CoffinpointHit');
            } else {
                $('#pcbox'+i).removeClass().addClass('coffinNumBox CoffinpointEmpty');
                $('#npcbox'+i).removeClass().addClass('coffinNumBox CoffinpointEmpty'); 
            }

        }
    }
    _ButtonSetup() {

        // Initial buttons
        $('#cmdQuit').on("click", this._cbQuitGame.bind(this));
        $('#cmdStart').on("click", this._cbStartGame.bind(this));

        //Betting Phase buttons;
        $('#cmdNextBet').on("click", this._cbNextBet.bind(this));
        $('#cmdPrevBet').on("click", this._cbPrevBet.bind(this));
        $('#cmdTakeBet').on("click", this._cbTakeBet.bind(this));
        $("#cmdQuitBet").on("click", this._cbQuitGame.bind(this));

        //Game playing buttons
        $('#cmdRollDice').on("click", this._cbRollDice.bind(this));
        $('#cmdPlayAgain').on("click", this._cbPlayAgain.bind(this));
    }

    _HighlightBet(data) {
        if (this._SelectedBet != null) {
            $('#CoffinBet'+this._SelectedBet+'Blocker').addClass("selectedBet");
            if (typeof data !== 'undefined')
            $('#CoffinBet'+data.off+'Blocker').removeClass("selectedBet");
        }
    }

    _PrintRound() {
        var str = this._PlayerTurn == true ? "<span style='color:green'>YOUR TURN</span>" : "<span style='color:red'>OPPONENTS TURN</span>";
        $('#RoundContainer').css('display', 'block').html("<span>Round "+this._RoundNum + "/10</span> "+str);
    }

    // Callbacks
    _cbQuitGame(e)
    {
        console.log("_cbQuitGame called");
        SugarCube.State.display("CoffinGameEnd");
    }

    _cbStartGame(e)
    {
        console.log("_cbStartGame called");
        $('#CoffinBetContainer').css("display", "block");
        $('#startButtons').css("display", "none");
        $('#betButtons').css("display", "block");
        if (this._SelectedBet == null) this._DialogBox("PLACE BET", "gold");
        this._Screen = "BET";
    }

    _cbPlayAgain(e) {
        console.log("_cbPlayAgain called");
        this._SetupPoints();
        $('#CoffinBetContainer').css("display", "block");
        $('#endButtons').css("display", "none");
        $('#betButtons').css("display", "block");
        $('#RoundContainer').css('display', 'none');
        if (this._SelectedBet == null) this._DialogBox("PLACE BET", "gold");
        this._DisplayGambler(this._GamblerPosition);
        this._PlayerTurn = true;
        this._RoundNum = 1;
        this._Screen = "BET";
    }

    _cbNextBet(e)
    {
        var pos = this._GamblerPosition + 1 >= this.Gamblers.length ? 0 : this._GamblerPosition +1;
        this._DisplayGambler(pos);
        this._GamblerPosition = pos;
        this._SelectedBet = null;
        $('#CoffinBet1Blocker').removeClass("selectedBet");
        $('#CoffinBet2Blocker').removeClass("selectedBet");
    }

    _cbPrevBet(e) {
        var pos = this._GamblerPosition - 1 < 0 ? this.Gamblers.length - 1 : this._GamblerPosition - 1;
        this._DisplayGambler(pos);
        this._GamblerPosition = pos;
        this._SelectedBet = null;
    }

    _cbTakeBet(e) {

        if (this._SelectedBet == null) {
            this._DialogBox("PLACE BET", "gold");
            return;
        }
        $('#CoffinBetContainer').css('display', 'none');
        $('#CoffinDiceContainer').css('display', 'block');
        $('#betButtons').css('display', 'none');
        $('#playButtons').css('display', 'block');
        this._DialogBox("YOUR TURN", "gold");
        this._Screen = "GAME";
        this._PrintRound();
    }

    _cbSelectBet(e) {
        this._SelectedBet = e.data.on;
        this._HighlightBet(e.data);
    }

    _cbRollDice(e) {
        if (this._DiceRolling == true || this._PlayerTurn == false) return; //noop
        rollADie( { element: document.getElementById('CoffinDiceContainer'), numberOfDice: 2, callback: this._cbDiceRolled.bind(this), delay: 3000 });
    }

    _cbDiceRolled(e)
    {
        console.log(e);
        var point = this._CheckPoint(e);
        //Scored hit.
        if (point != -1) {
            this._AssignPoint(point);

            var win = this._CheckWin();

            if (win != 0) { //Something happened and we need to end the game.
                this._Screen = "OVER";
                if (this._PlayerTurn == false) {
                    clearInterval(this._Interval); // Stop the npc if he's rolling
                    $("#cmdRollDice").attr("disabled", false); // turn button back on
                }
               // switch button trays
               $('#playButtons').css("display", "none");
               $('#endButtons').css("display", "block");
               if (win == 1 || win == 2) {
                   if (this._SelectedBet == 1) {
                       this.Gamblers[this._GamblerPosition].bet1Status = win;
                   } else {
                       this.Gamblers[this._GamblerPosition].bet2Status = win;
                   }
               
               }
            }
        } else {
            var that = this;
            if (this._PlayerTurn == true) { // Turn control over to NPC.
                $("#cmdRollDice").attr("disabled", true);
                setTimeout(function() { that._DialogBox("OPPONENTS TURN", "gold") }, 1000);
                this._PlayerTurn = false;
                this._Interval = setInterval(this._NPCRollDice.bind(this), 3000);
                this._PrintRound();
            } else {
                this._RoundNum++;
                this._PlayerTurn = true;
                this._PrintRound();
                clearInterval(this._Interval);
                if (this._RoundNum > 10) {
                    this._DialogBox("DRAW", "gold");
                    // switch button trays
                    $('#playButtons').css("display", "none");
                    $('#endButtons').css("display", "block");
                    $("#cmdRollDice").attr("disabled", false);
                } else {
                    setTimeout(function() { that._DialogBox("YOUR TURN", "gold") }, 1000);
                    $("#cmdRollDice").attr("disabled", false);
                }
            }
        }

    }

    _NPCRollDice()
    {
        rollADie( { element: document.getElementById('CoffinDiceContainer'), numberOfDice: 2, callback: this._cbDiceRolled.bind(this), delay: 3000 });
    }

    _CheckWin() {
        var me = this._TotalPoints(this.MyScore);
        var him = this._TotalPoints(this.OpponentScore);

        if (me == 4 && him == 4) {
            this._DialogBox("DRAW", "gold");
            return -1;
        } else if (me >= 5) {
            this._DialogBox("YOU WIN!", "gold");
            return 2;
        } else if (him >=5 ) {
            this._DialogBox("YOU LOSE!", "red");
            return 1;
        }

        return 0;
    }

    _CheckPoint(dice) {
        var point = dice.reduce(function(a,b) { return a+b; });
        if (point > 9 ) return -1; // Out of range of any possible points.
        var index = point - 2; // shift 2-9 to 0-7
        if (this.MyScore[index] == 1 || this.OpponentScore[index] == 1) return -1; // Point already assigned.
        return index;
    }

    _AssignPoint(index) {
        if (this._PlayerTurn == true ) {
            this.MyScore[index] = 1;
            $('#pcbox'+index).addClass("CoffinpointHit");
            $('#npcbox'+index).addClass("CoffinpointMissed");
        } else {
            this.OpponentScore[index] = 1;
            $('#npcbox'+index).addClass("CoffinpointHit");
            $('#pcbox'+index).addClass("CoffinpointMissed");
        }
    }

    _TotalPoints(Points) {
        return Points.reduce(function(a,b){ return a+b; });
    }

    _DialogBox(message, color) {
        var props = { top: "90px", right: "0px", width:"800px", color: "DeepPink"  };
        if (typeof color !== 'undefined') props.color = color;
        App.PR.DialogBox(this._Element, message, props);
    }

    _RisingDialog(message, color) {
        App.PR.RisingDialog(this._Element, message, color);
    }
}
