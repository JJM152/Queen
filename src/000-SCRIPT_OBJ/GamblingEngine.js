// Gambling classes.
// Real rough, probably clean up some a bit in the future, but maybe not.
// 'Pirates Dice' (poker like game with dice) - TBD
// 'Shut the Coffin' simple point like dice game
// 'Blackjack' We all know and love. Right? - TBD
// 'Grand Hazard' Sorta like craps. Old West style game. - TBD

App.Gambling.Coffin = class CoffinEngine {
    
    constructor() {

        this.MyScore = [0,0,0,0,0,0,0,0];
        this.OpponentScore = [0,0,0,0,0,0,0,0];

        this._ReturnPassage = "Deck"; // default
        this._CasinoFlag = false;

        this._Wants = [ "Hand Job", "Blow Job", "Tit Fuck", "Ass Fuck" ];
        this._Nouns = [ "a slutty handjob", "a sloppy cock sucking", "a titty wank", "your sissy asshole" ];
        this._Skills = [ "HandJobs", "BlowJobs", "TitFucking", "AssFucking" ];
        this._Icons = [ "handBetIcon", "bjBetIcon", "titBetIcon", "assBetIcon" ];

        this.Gamblers = [ ];
        this._GamblerPosition = 0;
        this._SelectedBet = null;
        this._Element = "#GamblingGUI";
        this._RoundNum = 1;
        this._MaxRounds = 6;
        this._GamesPlayed = 1;
        this._MaxGames = 5;
        this._DiceRolling = false;
        this._PlayerTurn = true;
        this._SuddenDeath = false;
        this._Screen = "NEW"; // NEW -> BET -> GAME -> OVER (BACK TO BET OR END PASSAGE)
        this._ChatLog = null;

    }

    get ReturnPassage() { return this._ReturnPassage; }
    set ReturnPassage(v) { this._ReturnPassage = v; }


    SetupGame(returnPassage, flag) {
        flag = flag | false;
        console.log("Setting up game of Coffin...");
        this.ReturnPassage = returnPassage;
        this._CasinoFlag = flag;
        $(document).one(":passageend", this._SetupGame.bind(this));
    }

    PrintResults() {
        var buffer = "";
        // Tally money
        var cash = this._TotalMoney();
        var items = this._TotalItems();
        var sex = this._TotalSex();
        
        if (cash == 0 && items.length == 0 && sex.length == 0 ) {
            return "You walk away from the game, none the richer, but none the worse for wear. Maybe you'll play next time?";
        }

        buffer += "The game is over and it's time to settle accounts...\n\n";

        buffer += this._PrintSex(sex);
        buffer += this._PrintItems(items);

        if(cash > 0 ) buffer += "You @@color:lime;collect@@ @@color:yellow;" + cash + " coins@@ in winnings.";
        if (cash < 0) buffer += "You @@color:red;pay@@ @@color:yellow;" + Math.abs(cash) + " coins@@ to cover your losses.";

        this._AwardSex(sex);
        this._AwardItems(items);

        return buffer;
    }

    _PrintItems(items)
    {
        var buffer = "";
        for (var i = 0; i < items.length; i++) {
            buffer += "@@color:cyan;"+items[i].name+"@@ gives you " + items[i].data.desc +".\n\n";
        }

        return buffer;
    }

    // Fetch a random sex scene, then format it.
    _PrintSex(sex)
    {
        var buffer = "";
        var lastName, lastSex = "";
        for (var i = 0; i < sex.length; i++) {
            // Don't repeat sex scenes on pirates if they are the same.
            if (lastName == sex[i].name && lastSex == sex[i].sex) continue;
            lastName = sex[i].name;
            lastSex = sex[i].name;
            // Fetch an appropriate random passage by skill.
            var passage = App.PR.GetRandomListItem(App.Gambling.Scenes[sex[i].sex]);
            // Make a fake npc to pass to tokenizer.
            var npc = setup.player.GetNPC("Dummy"); //Fake NPC
            npc.Data.Name = sex[i].name;
            passage = App.PR.TokenizeString(setup.player, npc, passage); // Tokenize passage
            // Fetch picture
            var num = Math.max(1, Math.min(Math.round(Math.random() * 10), 10));
            var pic;
            switch( sex[i].sex) {
                case "AssFucking" : pic = "ss_anal_"+num ;break;
                case "HandJobs" : pic = "ss_hand_"+num ;break;
                case "BlowJobs" : pic = "ss_bj_"+num ;break;
                case "TitFucking" : pic = "ss_tit_"+num ;break;
                default: pic = "ss_anal_"+num; break;
            }

            buffer += "\
            <div style='width:800px'><div style='float:right;width:180px;height:122px' class='"+pic+"'></div>"+passage+"\n\n</div>";
        }

        return buffer;
    }

    // Sex that needs to be paid
    _TotalSex() {
        var sex = [ ];

        for(var i = 0; i < this.Gamblers.length; i++) {
            var o = this.Gamblers[i];
            var s = { };
            if (o.bet1Want != "Coins" && o.bet1Status == 1) {
                s.name = o.n;
                s.val = o.bet1Value;
                s.sex = this._Skills[o.bet1Want];
                sex.push(s);
            } 

            if (o.bet2Want != "Coins" && o.bet2Status == 1) {
                s.name = o.n;
                s.val = o.bet2Value;
                s.sex = this._Skills[o.bet2Want];
                sex.push(s);
            }
        }

        if (sex.length > 0) {
            var cashValue = sex.length > 1 ? sex.reduce(function(acc, obj) { 
                    return isNaN(acc) ? acc.val + obj.val : acc + obj.val; 
                }) : sex[0].val;

            this._TrackStat('SexPaid', cashValue);
        }
        return sex;
    }

    _AwardSex(sex){

        for (var i = 0; i < sex.length; i++) {
            // Call skill check to award xp, then fetch the modifier back to use
            // as an indicator of how much to adjust the NPC's feelings.
            var result = setup.player.SkillRoll(sex[i].sex, sex[i].val, 1, true);
            setup.player.GetNPC("Crew").AdjustStat("Mood", Math.ceil((5*result)));
            setup.player.GetNPC("Crew").AdjustStat("Lust", Math.ceil( (-5*result)));
        }
    } 

    _AwardItems(items)
    {
        for (var i = 0; i < items.length; i++)
            setup.player.AddItem(items[i].data.cat, items[i].data.tag, 0);
    }

    _AdjustMoney(status)
    {

        var o = this.Gamblers[this._GamblerPosition];
        var offer = this._SelectedBet == 1 ? o.bet1Offer : o.bet2Offer;
        var want = this._SelectedBet == 1 ? o.bet1Want : o.bet2Want;
        var val = this._SelectedBet == 1 ? o.bet1Value : o.bet2Value;

        if (status == 1 && want == "Coins") {   //Player lost
            
            setup.player.AdjustMoney( (val * -1.0));
            App.PR.RefreshTwineMoney();
        
        } else if (status == 2 && offer == "Coins") { //Player won

            setup.player.AdjustMoney(val);
            App.PR.RefreshTwineMoney();
        }

    }

    // Items won.
    _TotalItems() {
        var items = [ ];
        var scale = function(n) {
            var out = n + Math.ceil( n * Math.random()) + Math.ceil( (n/2) * Math.random());
            console.log('Item adjusted from value ('+n+') to ('+out+')');
            return out;
        };

        for(var i = 0; i < this.Gamblers.length; i++) {
            var o = this.Gamblers[i];
            var item = { };
            var d = null

            if (o.bet1Offer == "Item" && o.bet1Status == 2) 
                d = App.Item.PickItem( [ 'FOOD', 'DRUGS', 'COSMETICS'], { price: scale(o.bet1Value) } );
               
            if (o.bet2Offer == "Item" && o.bet2Status == 2) 
                d = App.Item.PickItem( [ 'FOOD', 'DRUGS', 'COSMETICS'], { price: scale(o.bet2Value) } );

            if (d != null)
            {
                item.data = d;
                item.name = o.n;
                items.push(item);
            }
        }

        if (items.length > 0) {
            this._TrackStat('ItemsWon', items.length);
            var cashValue = items.length > 1 ? items.reduce(function(acc, obj) { //Reduce objects if needed.
                return isNaN(acc) ? acc.data.price + obj.data.price : acc + obj.data.price; 
            }) : items[0].data.price;

            this._TrackStat('ItemsWonValue', cashValue);
        }
        return items;
    }

    // Money won or lost.
    _TotalMoney() {
        var cash = 0;
        for(var i = 0; i < this.Gamblers.length; i++) {
            var o = this.Gamblers[i];
            if (o.bet1Offer == "Coins" && o.bet1Status == 2) cash += o.bet1Value;
            if (o.bet1Want == "Coins" && o.bet1Status == 1) cash -= o.bet1Value;
            if (o.bet2Offer == "Coins" && o.bet2Status == 2) cash += o.bet2Value;
            if (o.bet2Want == "Coins" && o.bet2Status == 1) cash -= o.bet2Value;
        }

        if (cash > 0) this._TrackStat('CoinsWon', cash);
        if (cash < 0) this._TrackStat('CoinsLost', Math.abs(cash));
        return cash;
    }

    // Setup functions
    _SetupGame() {

        if (this._Screen == "NEW") {
            this._CreateGamblers(this._CasinoFlag);
            this._SetupPoints();
            this._ButtonSetup();
            this._DisplayGambler(0);
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
                if (this._GamesPlayed > this._MaxGames) $('#cmdPlayAgain').css('display','none');
            }
        }

        this._RefreshChatLog();
    }

    _CreateGamblers(flag) {
        flag = flag || false;
        this.Gamblers = [ ];
        this._GamblerPosition = 0;
        this._SelectedBet = null;
        this._RoundNum = 1;
        this._GamesPlayed = 1;
        this._ChatLog = null;

        for (var i = 0; i < 6; i++) {
            var g = { };
            g.n = App.PR.GetRandomListItem(App.Data.Names["Male"]);

            if (!flag) { 
                g.n = "Pirate " + g.n;
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

            } else {

                g.bet1Offer = "Coins";
                g.bet1Want = "Coins";
                g.bet1Value = 100;
                g.bet1Status = 0;
                
                g.bet2Offer = "Coins";
                g.bet2Want = "Coins";
                g.bet2Value = 200;
                g.bet2Status = 0;

                g.lust = 50;
            }

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

        this._DecorateBet(g,1);

        //Setup second bet.
        icon = g.bet2Offer == "Coins" ? "coinBetIcon" : "itemBetIcon";
        value = g.bet2Offer == "Coins" ? g.bet2Value : "";
        $('#betIcon2a').removeClass().addClass(icon).text(value);

        icon = g.bet2Want == "Coins" ? "coinBetIcon" : this._Icons[g.bet2Want];
        value = g.bet2Want == "Coins" ? g.bet2Value : "";
        $('#betIcon2b').removeClass().addClass(icon).text(value);
        this._DecorateBet(g,2);
    }

    _DecorateBet(g,n) {
        var value = n == 1 ? g.bet1Value : g.bet2Value;
        var want = n == 1 ? g.bet1Want : g.bet2Want;
        var status = n == 1 ? g.bet1Status : g.bet2Status;
        var elementID = n == 1 ? "#CoffinBet1Blocker" : "#CoffinBet2Blocker";
        var opts = n == 1 ? { on: 1, off: 2 } : { on: 2, off: 1 };

        var e = $(elementID).empty().removeClass(); // Clear
        var d = $('<div>');

        if (want == "Coins" && setup.player.Money < value)  { // Not enough cash.
            e.addClass("disabledGamePanel");
            d.html('<span style="color:red">Not enough money.</span>');
            e.append(d);
        } else if (want != "Coins" && (value > (50 - g.lust)) || value == 0) { // Player sex skill too low for pirate lust
            e.addClass("disabledGamePanel");
            d.html("<span style='color:red'>Skill: "+this._Wants[want]+" is too low.</span>");
            e.append(d);
        } else if ( status != 0 ) {
            e.addClass("disabledGamePanel");
            var s = status == 1 ? "<span style='color:red'>Bet already lost.</span>" : "<span style='color:lime'>Bet already won.</span>";
            d.html(s);
            e.append(s);
        } else {
            e.addClass("activeGamePanel").on("click", opts, this._cbSelectBet.bind(this));
        }
    }

    _SetupPoints() {
        this.MyScore = [0,0,0,0,0,0,0,0];
        this.OpponentScore = [0,0,0,0,0,0,0,0];
        this._SuddenDeath = false;

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
        $("#cmdQuitPlay").on("click", this._cbQuitGame.bind(this));
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
        str = this._SuddenDeath == true ? str + " <span style='color:orange'>SUDDEN DEATH</span>" : str;
        $('#RoundContainer').css('display', 'block').html("<span>Round "+this._RoundNum + "/"+this._MaxRounds+"</span> "+str);
    }

    _PrintGames() {
        $('#GamesPlayedContainer').css("display", 'block').html('<span>Games played '+this._GamesPlayed + '/'+this._MaxGames+'</span>');
    }

    _WriteChat(msg) {
        var o = this.Gamblers[this._GamblerPosition];
        var npc = setup.player.GetNPC("Dummy"); // Fake NPC
        npc.Data.Name = o.n; // Swapsie name
        msg = App.PR.TokenizeString(setup.player, npc, msg);
        $('#cofUItray').append("<P>"+msg+"</P>");
        $('#cofUItray').animate({scrollTop: $('#cofUItray').prop("scrollHeight")}, 1000);
        if (this._ChatLog == null) {
            this._ChatLog = [ ];
        }
        this._ChatLog.push(msg);

    }

    _WriteStartChat() {
        var npcwager = this._GetOfferBetString();
        var pcwager = this._GetWantBetString();
        var msg = "\
        You start to play dice with NPC_NAME.\n\
        The wager is his "+npcwager+" for "+pcwager+".\n";
        this._WriteChat(msg);
    }

    _RefreshChatLog()
    {
        if (this._ChatLog != null) {
            for (var i = 0; i < this._ChatLog.length; i++) {
                $('#cofUItray').append("<P>"+this._ChatLog[i]+"</P>");
            }
            $('#cofUItray').scrollTop($('#cofUItray').prop("scrollHeight"));
        }
    }

    _GetOfferBetString() {
        var o = this.Gamblers[this._GamblerPosition];
        var bet = this._SelectedBet == 1 ? o.bet1Offer : o.bet2Offer;
        var val = this._SelectedBet == 1 ? o.bet1Value : o.bet2Value;
        if (bet == "Coins") return val + " coins";
        if (bet == "Item") return "a mystery item";
    }

    _GetWantBetString() {
        var o = this.Gamblers[this._GamblerPosition];
        var bet = this._SelectedBet == 1 ? o.bet1Want : o.bet2Want;
        var val = this._SelectedBet == 1 ? o.bet1Value : o.bet2Value;
        if (bet == "Coins") return val + " coins";
        return this._Nouns[bet];
    }

    // Callbacks
    _cbQuitGame(e)
    {
        console.log("_cbQuitGame called");
        SugarCube.State.display("CoffinGameEnd");
        this._Screen = "NEW"; // force the game to reset the next time it's loaded.
        this._PlayerTurn = true;
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
        $('#CoffinDiceContainer').css('display', 'none');
        $('#endButtons').css("display", "none");
        $('#betButtons').css("display", "block");
        $('#RoundContainer').css('display', 'none');
        if (this._SelectedBet == null) this._DialogBox("PLACE BET", "gold");
        this._DisplayGambler(this._GamblerPosition);
        this._PlayerTurn = true;
        this._SuddenDeath = false;
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

    // This is where we place the bet and start the game playing
    _cbTakeBet(e) {
        if (this._SelectedBet == null) {
            this._DialogBox("PLACE BET", "gold");
            return;
        }
        $('#CoffinBetContainer').css('display', 'none');
        $('#CoffinDiceContainer').css('display', 'block');
        $('#betButtons').css('display', 'none');
        $('#playButtons').css('display', 'block');
        this._Screen = "GAME";

        if ( (this._GamesPlayed % 2) == 0) {
            this._DialogBox("YOUR TURN", "gold");
        } else {
            this._DialogBox("OPPONENTS TURN", "gold");
            $("#cmdRollDice").css('display', 'none');
            this._PlayerTurn = false;
            this._Interval = setInterval(this._NPCRollDice.bind(this), this._NPCDiceDelay());
            this._DisableMenuLinks();
        }

        this._PrintRound();
        this._PrintGames();
        this._WriteStartChat();
        this._TrackStat("Played", 1);
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
        var point = this._CheckPoint(e);
        if (point != -1) this._AssignPoint(point);
        var win = this._CheckWin(e);

        //Scored hit.
        if (point != -1 || (this._SuddenDeath == true && win != 0)) {

            if (win != 0) { //Something happened and we need to end the game.
                
                this._Screen = "OVER";

                if (this._PlayerTurn == false) {
                    clearInterval(this._Interval); // Stop the npc if he's rolling
                    this._EnableMenuLinks();
                    $("#cmdRollDice").css('display', 'inline-block'); // turn button back on
                }

                this._GamesPlayed += 1;

                // switch button trays
                $('#playButtons').css("display", "none");
                $('#endButtons').css("display", "block");
                if (this._GamesPlayed > this._MaxGames) $('#cmdPlayAgain').css('display','none');
                if (win == 1 || win == 2) {
                    if (this._SelectedBet == 1) {
                        this.Gamblers[this._GamblerPosition].bet1Status = win;
                    } else {
                        this.Gamblers[this._GamblerPosition].bet2Status = win;
                    }
                
                }
            }

        } else {
            // Code for handling misses

            if (this._PlayerTurn) {
                this._WriteChat("<span style='color:red'>You miss the roll!</span>");
            } else {
                this._WriteChat("NPC_NAME <span style='color:red'>misses the roll!</span>");
            }

            var that = this;
            if ( (this._GamesPlayed %2) == 1) { // THE NPC IS PLAYER 1
                if (this._PlayerTurn == true) { // THE PC WAS THE ONE ROLLING
                    this._RoundNum++; // END THIS ROUND
                    this._PrintRound();
                    if (this._RoundNum >= this._MaxRounds) { //DRAW THE GAME.
                        this._DialogBox("DRAW", "gold");
                        this._GamesPlayed += 1;
                        this._WriteChat("The game ends in a draw.");
                        $('#playButtons').css("display", "none");
                        $('#endButtons').css("display", "block");
                        this._TrackStat('Draw', 1);
                    } else {
                        // HAND OVER CONTROL TO NPC
                        $("#cmdRollDice").css('display', 'none'); // HIDE ROLL BUTTON
                        setTimeout(function() { that._DialogBox("OPPONENTS TURN", "gold") }, 500);
                        this._PlayerTurn = false;
                        this._Interval = setInterval(this._NPCRollDice.bind(this), this._NPCDiceDelay());
                        this._DisableMenuLinks();
                        this._PrintRound();
                    }
                } else { // THE NPC WAS ROLLING

                    clearInterval(this._Interval); // STOP NPC ROLLING
                    this._EnableMenuLinks();
                    $("#cmdRollDice").css('display', 'inline-block'); // SHOW ROLL BUTTON
                    // HAND OVER CONTROL TO PC
                    this._PlayerTurn = true;
                    setTimeout(function() { that._DialogBox("YOUR TURN", "gold") }, 500);
                    
            }
            // TURN OFF PLAY AGAIN BUTTON AT MAX GAMES
            if (this._GamesPlayed > this._MaxGames) $('#cmdPlayAgain').css('display','none');

            } else { // THE PC IS PLAYER 1
                if (this._PlayerTurn == true) { // THE PC WAS THE ONE ROLLING

                        // HAND OVER CONTROL TO NPC
                        $("#cmdRollDice").css('display', 'none'); // HIDE ROLL BUTTON
                        setTimeout(function() { that._DialogBox("OPPONENTS TURN", "gold") }, 500);
                        this._PlayerTurn = false;
                        this._Interval = setInterval(this._NPCRollDice.bind(this), this._NPCDiceDelay());
                        this._DisableMenuLinks();
                
                } else { // THE NPC WAS ROLLING
                    this._RoundNum++; //END THIS ROUND
                    this._PrintRound();

                    if (this._RoundNum >= this._MaxRounds) { //DRAW THE GAME.
                        this._DialogBox("DRAW", "gold");
                        this._GamesPlayed += 1;
                        $('#playButtons').css("display", "none");
                        $('#endButtons').css("display", "block");
                        this._WriteChat("The game ends in a draw.");
                        this._TrackStat('Draw', 1);
                    }

                    this._PlayerTurn = true;
                    clearInterval(this._Interval); // STOP NPC ROLLING
                    this._EnableMenuLinks();
                    setTimeout(function() { that._DialogBox("YOUR TURN", "gold") }, 500);
                    $("#cmdRollDice").css('display', 'inline-block'); // SHOW ROLL BUTTON
                }
                // TURN OFF PLAY AGAIN BUTTON AT MAX GAMES
                if (this._GamesPlayed > this._MaxGames) $('#cmdPlayAgain').css('display','none');
            }

        }

    }

    _DisableMenuLinks()
    {
        var container = $('#ui-bar');
        var blocker = $('<div>').attr('id', 'CoffinMenuBlocker');
        container.append(blocker);

    }

    _EnableMenuLinks()
    {
        var blocker = $('#CoffinMenuBlocker');
        blocker.remove();
    }

    _NPCRollDice()
    {
        rollADie( { element: document.getElementById('CoffinDiceContainer'), numberOfDice: 2, callback: this._cbDiceRolled.bind(this), delay: 3000 });
    }

    _NPCDiceDelay() {
        return (SugarCube.settings.fastAnimations == true) ? 1000 : 2500;
    }

    _CheckWin(e) {
        var me = this._TotalPoints(this.MyScore);
        var him = this._TotalPoints(this.OpponentScore);

        //Doubles are an automatic win.
        if (this._SuddenDeath == true && (e[0] == e[1])) {
            this._RisingDialog("DOUBLES", "orange");
            if (this._PlayerTurn == true) {
                this._DialogBox("YOU WIN!", "gold");
                this._WriteChat("You won the match!");
                this._TrackStat("Won", 1);
                this._AdjustMoney(2);
                return 2;
            } else {
                this._DialogBox("YOU LOSE!", "red");
                this._WriteChat("You lost the match!");
                this._TrackStat("Lost", 1);
                this._AdjustMoney(1);
                return 1;
            }
        }

        if (me == 4 && him == 4) {
            this._DialogBox("DRAW", "gold");
            this._WriteChat("The game ends in a draw.");
            this._TrackStat("Draw", 1);
            return -1;
        } else if (me >= 5) {
            this._DialogBox("YOU WIN!", "gold");
            this._WriteChat("You won the match!")
            this._TrackStat("Won", 1);
            this._AdjustMoney(2);
            return 2;
        } else if (him >=5 ) {
            this._DialogBox("YOU LOSE!", "red");
            this._WriteChat("You lost the match!");
            this._TrackStat("Lost", 1);
            this._AdjustMoney(1);
            return 1;
        } else if( me + him == 7) {
            if (this._SuddenDeath == false) {
                this._RisingDialog("SUDDEN DEATH", "orange");
                this._WriteChat("The game enters <span style='color:orange'>SUDDEN DEATH!</span>")
            }
            this._SuddenDeath = true;
            return 0;
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
            this._WriteChat("<span style='color:lime'>You hit the "+(index+2)+"!</span>");
        } else {
            this.OpponentScore[index] = 1;
            $('#npcbox'+index).addClass("CoffinpointHit");
            $('#pcbox'+index).addClass("CoffinpointMissed");
            this._WriteChat("NPC_NAME <span style='color:lime'>hits the "+(index+2)+"!</span>");
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

    _TrackStat(stat, value)
    {
        if (setup.player.GameStats.hasOwnProperty('COFFIN')== false) {
            setup.player.GameStats["COFFIN"] = {
                Played: 0,
                Won: 0,
                Lost: 0,
                Draw: 0,
                CoinsWon: 0,
                CoinsLost: 0,
                ItemsWon: 0,
                ItemsWonValue: 0,
                SexPaid: 0
             };
        }

        if (setup.player.GameStats.COFFIN.hasOwnProperty(stat) == true )
            setup.player.GameStats.COFFIN[stat] += value;
    }
}

// Sex scenes
App.Gambling.Scenes = { };

App.Gambling.Scenes["HandJobs"] =
[
    "You kneel infront of NPC_NAME and assume the familiar position of an experienced cock stroker. He quickly fetches his \
    impressive schlong out of his pants and waves it lightly in your face. \
    <<if setup.player.GetStat('STAT', 'Perversion') > 80>>\
    You marvel at it's size and girth and involuntarily lick your lips. You'd love to be able to suck on it, or even \
    better, have him hammer away at your sissy asshole, but the bet was only for a quick handy, and it'd be \
    unprofessional of you to put your pleasure ahead of business.\n\n\
    <<else>>\
    <<if setup.player.GetStat('STAT', 'Perversion') > 50>>\
    You marvel at it's size and girth and feel a faint flutter tingle up your backside. Wait? What?! When did you \
    start not only finding the cocks of other men impressive, but... sexually desirable? You concentrate and try to \
    supress the twitching in your arsehole and instead get down to the task at hand.\n\n\
    <<else>>\
    It's bigger than average and you feel a slight tinge of envy, coupled with the shame of having to give this \
    bastard some sexual release, but a bet is a bet and a whore is a whore and unfortunately for you, you're a \
    whore who lost a bet. Time to get to work.\n\n\
    <</if>>\
    <</if>>\
    You take NPC_NAME's cock firmly in hand and start to gently tug him to errection. You feel his member stiffen \
    under your ministrations and eventually he lets loose a small gasp. You rub his cock back and forth across your \
    your face, looking him in the eyes while you slather it with your own drool for lubrication. Satisified that he's \
    now wet enough, you begin to stroke his meat in ernest. Within minutes he's panting and ready to blow. \
    <<if setup.player.GetStat('STAT', 'Perversion') > 80>>\
    With practiced care, you angle his errection act your face and with a couple of final pumps, he's spurting his \
    load all over you. The majority of it lands on your forehead, but some of it drips down to your lips and you \
    eagerly lick it up, earning you a smile from NPC_NAME.\n\n\
    <<else>>\
    <<if setup.player.GetStat('STAT', 'Perversion') > 50>>\
    With practiced care, you angle his errection act your face and with a couple of final pumps, he's spurting his \
    load all over you. The majority of it lands on your forehead, but some of it drips down to your lips and it \
    takes a surprisingly amount of restraint for you to resist simply licking it up.\n\n\
    <<else>>\
    You try your best to avoid the stream of jizz coming right at you, but unfortunately most of it lands on your face. \
    Apparently, NPC_NAME doesn't notice your look of disgust, but how could he since you're practically covered in a thick \
    layer of his baby batter.\n\n\
    <</if>>\
    <</if>>\
    NPC_NAME says s(Thanks PLAYER_NAME, that was one hell of a good wank)\
    "
];

App.Gambling.Scenes["BlowJobs"] =
[
    "You kneel infront of NPC_NAME and assume the familiar position of an experienced cock sucker. He quickly fetches his \
    impressive schlong out of his pants and waves it lightly in your face. \
    <<if setup.player.GetStat('STAT', 'Perversion') > 80>>\
    You marvel at it's size and girth and involuntarily lick your lips. Being able to suck on such a beautiful \
    dick hardly seems like a penalty for losing a bet, but alas here you are, about to get a mouth full of \
    delicious dong.\n\n\
    <<else>>\
    <<if setup.player.GetStat('STAT', 'Perversion') > 50>>\
    You marvel at it's size and girth and involuntarily lick your lips, a slight trail of drool \
    escapes them and pools on your chest... Wait? What?! When did you \
    start not only finding the cocks of other men impressive, but... sexually desirable? You concentrate and try to \
    supress the desire welling up in you and instead get down to the task at hand.\n\n\
    <<else>>\
    It's bigger than average and you feel a slight tinge of envy, coupled with the shame of having to give this \
    bastard some sexual release, but a bet is a bet and a whore is a whore and unfortunately for you, you're a \
    whore who lost a bet. Time to get to work.\n\n\
    <</if>>\
    <</if>>\
    You take NPC_NAME's cock firmly in hand and start to gently tug him to errection. You feel his member stiffen \
    under your ministrations and eventually he lets loose a small gasp. You rub his cock back and forth across your \
    your face, looking him in the eyes while you run it back and forth across your lips. Slowly you engulf the \
    head, rolling your tongue across it with long circular motions. NPC_NAME's dick instantly becomes as hard \
    as a rock and your start to suck on it in earnest. It doesn't take long after that before he's holding the \
    side of your head and jackhammering his dick down your throat. Without warning he smashes his pelvis into \
    your face and seizes up, a hot torrent of cum bubbling forth from his balls. \
    <<if setup.player.GetStat('STAT', 'Perversion') > 80>>\
    Your eyes widen as his hot jizz starts to pour down your throat, you quickly move your head back so that the \
    remaining ejaculate pools your mouth. Moaning, you play with it on your tongue and savor it's flavor.\n\n\
    <<else>>\
    <<if setup.player.GetStat('STAT', 'Perversion') > 50>>\
    Your eyes widen as his hot jizz starts to pump down your throat. Unbidden, a strong desire to taste this \
    man's cum springs forth in your mind - a shocking relevation to say the least. Fortunately, or perhaps \
    unfortunately, he's holding you too tightly and all you can do is whimper while his dick twitches in \
    your mouth.\n\n\
    <<else>>\
    You try your best to pull away, but NPC_NAME is holding you firmly and your forced to try to desperately \
    breathe through your nose as a seemingly endless amount of sperm is pumped into your stomach.\n\n\
    <</if>>\
    <</if>>\
    Eventually NPC_NAME is spent and he pulls out of your mouth with a load 'pop', a trail of your saliva mixed \
    with his cum spurts from your lips and lands on your chest.\n\n\
    NPC_NAME says s(Thanks PLAYER_NAME, that was one hell of a blow job)\
    "
];

App.Gambling.Scenes["TitFucking"] =
[
    "You kneel infront of NPC_NAME and assume the familiar position of an experienced whore. He quickly fetches his \
    impressive schlong out of his pants and waves it lightly in your face. \
    <<if setup.player.GetStat('STAT', 'Perversion') > 80>>\
    You marvel at it's size and girth and involuntarily lick your lips. You'd love to be able to suck on it, or even \
    better, have him hammer away at your sissy asshole, but the bet was only for a titty fuck, and it'd be \
    unprofessional of you to put your pleasure ahead of business.\n\n\
    <<else>>\
    <<if setup.player.GetStat('STAT', 'Perversion') > 50>>\
    You marvel at it's size and girth and involuntarily lick your lips, a slight trail of drool \
    escapes them and pools on your chest... Wait? What?! When did you \
    start not only finding the cocks of other men impressive, but... sexually desirable? You concentrate and try to \
    supress the desire welling up in you and instead get down to the task at hand.\n\n\
    <<else>>\
    It's bigger than average and you feel a slight tinge of envy, coupled with the shame of having to give this \
    bastard some sexual release, but a bet is a bet and a whore is a whore and unfortunately for you, you're a \
    whore who lost a bet. Time to get to work.\n\n\
    <</if>>\
    <</if>>\
    You engulf NPC_NAME's cock with your nBUST and start to gently massage it. You feel his member stiffen \
    under your ministrations and eventually he lets loose a small gasp. You gently lick the tip of his \
    dick, letting large streams of saliva drool out of your mouth to coat his member and your tits. Once \
    sufficiently lubricated, you begin to earnestly jack him off with your fuck bags. It doesn't take long \
    after that before you feel his hands grasp your shoulders and his shoulders stiffen. \
    <<if setup.player.GetStat('STAT', 'Perversion') > 80>>\
    With practiced care, you angle his errection act your face and with a couple of final pumps, he's spurting his \
    load all over you. The majority of it lands on your forehead, but some of it drips down to your lips and you \
    eagerly lick it up, earning you a smile from NPC_NAME.\n\n\
    <<else>>\
    <<if setup.player.GetStat('STAT', 'Perversion') > 50>>\
    With practiced care, you angle his errection act your face and with a couple of final pumps, he's spurting his \
    load all over you. The majority of it lands on your tits, but some of it spatters your lips and it \
    takes a surprisingly amount of restraint for you to resist simply licking it up.\n\n\
    <<else>>\
    You try your best to avoid the stream of jizz coming right at you, but unfortunately most of it lands on your face and tits. \
    Apparently, NPC_NAME doesn't notice your look of disgust, but how could he since you're practically covered in a thick \
    layer of his baby batter.\n\n\
    <</if>>\
    <</if>>\
    NPC_NAME says s(Thanks PLAYER_NAME, that was one hell of a tit fuck)\
    "
];

App.Gambling.Scenes["AssFucking"] =
[
    "You bend over in front of NPC_NAME, your bare ass and sissy slut hole exposed to the air. \
    You feel something wet and warm being rubbed between your arsecheeks, then a finger starts to gently \
    probe your anus. After a couple of minutes of these ministrations, the finger is replaced with the head \
    of a meaty cock. \
    <<if setup.player.GetStat('STAT', 'Perversion') > 80>>\
    You shudder in anticipation. You weren't always such an anal whore, but now that you have a taste for it \
    you can't imagine going back. Just the thought of what's about to happen causes your nPENIS to stiffen and \
    your sissy asshole to quiver in excitement.\n\n\
    <<else>>\
    <<if setup.player.GetStat('STAT', 'Perversion') > 50>>\
    You catch yourself in act of starting to drive back your sissy asshole to engulf his cock. A deep feeling of \
    horror wells up in your breast as you realize that you've begun to not only enjoy, but to greet the prospects \
    of such perverse acts with anticipation.\n\n\
    <<else>>\
    Your stomach does a small flip and you begin to feel ill at the prospect of another man ravaging your \
    slutty asshole. You do your best to ignore the feeling and swear to yourself that no matter what, you'll \
    never succumb to the life of a whore... even if sometimes it does feel a little good.\n\n\
    <</if>>\
    <</if>>\
    NPC_NAME works his tool up your well lubricated backside. His hands firmly grip onto your pHIPS hips and \
    he uses them for leverage as he starts to pounds your pASS arse. \
    <<if setup.player.GetStat('STAT', 'Perversion') > 80>>\
    You've long become accustomed to cocks pounding your sissy hole and the feeling it provides is one of \
    intense pleasure. Within moments you already feel your own orgasm building up as NPC_NAME continues to \
    mercilessly rail you. Eventually, he cums hard - impaling himself in you up to the hilt. The deep action \
    stirs something inside you and you feel your pBALLS start to well with your own cum. You scream out \
    sp(Yes! Fuck me! Fuck my ass!) and have an intense orgasm as NPC_NAME empties himself deep within your \
    slutty ass.\n\n\
    <<else>>\
    <<if setup.player.GetStat('STAT', 'Perversion') > 50>>\
    Even though you've become accustomed to cocks pounding your sissy hole, the feeling at first is quite \
    painful. You grit your teeth and endure while the sound of NPC_NAME slapping against your pASS ass \
    echoes in air. Slowly, you notice that the feeling of pain starts to turn into one of pleasure. You panick \
    at first, but the almost hypnotic sound of your ass being fucked combined with these new sensations \
    start to cause your breath to hitch and your mind to go blank. You almost don't even notice it when \
    NPC_NAME finally cums, impaling himself deep within your bowels. You let out a cry of shock, but one \
    tinged wth an undercurrent of desire.\n\n\
    <<else>>\
    The feeling of NPC_NAME's cock entering you is an almost indescribable mix of pain with an undercurrent \
    of something that your mind refuses to recognize as pleasure. The slapping sounds that fill the air from \
    NPC_NAME pillaging your arse form a strange cadence and you find yourself disassociating with your body \
    while you endure the act. Somewhere deep in the back of your mind a faint seed of perversion is sprouting, \
    a thought that you find entirely disturbing. You almost don't notice when NPC_NAME finally cums, filling \
    your bowels with his hot sticky seed.\n\n\
    <</if>>\
    <</if>>\
    NPC_NAME says s(Thanks PLAYER_NAME, that was one hell of a arse fuck)\
    "
];