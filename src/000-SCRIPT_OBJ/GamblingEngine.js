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

    _SetupGame() {
        this._ButtonSetup();
        console.log("Game setup");
    }

    _ButtonSetup() {
        var qButton = $('#cmdQuit');
        var sButton = $('#cmdStart');

        qButton.on("click", this._cbQuitGame.bind(this));
        sButton.on("click", this._cbStartGame.bind(this));
    }

    _cbQuitGame(e)
    {
        console.log("Quithandler called");
        SugarCube.State.display("CoffinGameEnd");
    }

    _cbStartGame(e)
    {

    }
}