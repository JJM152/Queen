// Gambling engine.
// 'Pirates Dice' (poker like game with dice) - TBD
// 'Shut the Coffin' simple point like dice game
// 'Blackjack' We all know and love. Right? - TBD
// 'Grand Hazard' Sorta like craps. Old West style game. - TBD

App.Gambling.Coffin = class CoffinEngine {
    
    constructor() {

        this.MyScore = [0,0,0,0,0,0,0,0];
        this.OpponentScore = [0,0,0,0,0,0,0,0];
        
        this.SexOwed = {
                            AssFucking: 0,
                            BlowJobs: 0,
                            HandJobs: 0,
                            TitJobs: 0
                        };

        this._ReturnPassage = "Deck"; // default

        this._Wants = [ "Hand Job", "Blow Job", "Tit Fuck", "Ass Fuck" ];
        this._Skills = [ "HandJobs", "BlowJobs", "TitFucking", "AssFucking" ];
        this._Icons = [ "handBetIcon", "bjBetIcon", "titBetIcon", "assBetIcon" ];

        this.Gamblers = [ ];
        this._GamblerPosition = 0;

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

        //Only do this if a game hasn't finished yet.
        this._CreateGamblers();
        this._ButtonSetup();
        this._DisplayGambler(0);
        console.log("Game setup");
    }

    _CreateGamblers() {
        this.Gamblers = [ ];

        for (var i = 0; i < 6; i++) {
            var g = { };
            g.n = App.PR.GetRandomListItem(App.Data.Names["Male"]);
            g.bet1Offer = (100 * Math.random()) > 90 ? "Item" : "Coins";
            g.bet1Want = (100 * Math.random() > 40) ? "Coins" : Math.round((this._Wants.length-1) * Math.random());
            g.bet1Value = this._CalculateBetValue(g.bet1Offer, g.bet1Want);
            
            g.bet2Offer = (100 * Math.random()) > 90 ? "Item" : "Coins";
            g.bet2Want = (100 * Math.random() > 40) ? "Coins" : Math.round((this._Wants.length-1) * Math.random());
            g.bet2Value = this._CalculateBetValue(g.bet2Offer, g.bet2Want);
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
        var lust = Math.floor(setup.player.GetNPC("Crew").Lust()/2);
        console.log(g);
        $("#CoffinNPCName").text(g.n);
        
        //Setup first bet.
        var icon = g.bet1Offer == "Coins" ? "coinBetIcon" : "itemBetIcon";
        var value = g.bet1Offer == "Coins" ? g.bet1Value : "";
        $('#betIcon1a').removeClass().addClass(icon).text(value);

        icon = g.bet1Want == "Coins" ? "coinBetIcon" : this._Icons[g.bet1Want];
        value = g.bet1Want == "Coins" ? g.bet1Value : "";
        $('#betIcon1b').removeClass().addClass(icon).text(value);

        if (g.bet1Value < lust && g.bet1Want != "Coins") {
            $('#CoffinBet1Blocker').removeClass().addClass("disabledGamePanel").text("NO BET, YOUR SKILL IS TOO LOW").off();
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
        
        if (g.bet2Value < lust && g.bet2Want != "Coins") {
            $('#CoffinBet2Blocker').removeClass().addClass("disabledGamePanel").text("NO BET, YOUR SKILL IS TOO LOW").off();
        } else {
            $('#CoffinBet2Blocker').removeClass().addClass("activeGamePanel").text("").on("click", { on: 2, off: 1 }, this._cbSelectBet.bind(this));
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
    }

    _cbNextBet(e)
    {
        var pos = this._GamblerPosition + 1 >= this.Gamblers.length ? 0 : this._GamblerPosition +1;
        this._DisplayGambler(pos);
        this._GamblerPosition = pos;
        $('#CoffinBet1Blocker').removeClass("selectedBet");
        $('#CoffinBet2Blocker').removeClass("selectedBet");
    }

    _cbPrevBet(e) {
        var pos = this._GamblerPosition - 1 < 0 ? this.Gamblers.length - 1 : this._GamblerPosition - 1;
        this._DisplayGambler(pos);
        this._GamblerPosition = pos;
    }

    _cbTakeBet(e) {

    }

    _cbSelectBet(e) {
        this._SelectedBet = e.data.on;
        $('#CoffinBet'+e.data.on+'Blocker').addClass("selectedBet");
        $('#CoffinBet'+e.data.off+'Blocker').removeClass("selectedBet");
    }
}
