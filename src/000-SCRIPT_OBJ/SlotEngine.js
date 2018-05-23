App = App || { Data: { }, Entity: { } };

/**
 * Main engine for slot machine mini game.
 * @type {SlotEngine}
 */
App.SlotEngine = new function() {

    /** @type {Array.<App.SlotEngine.Customer>} */
    this.Customers = [ ];
    this.Rares = [ ];

    this.MaxSlots = 9;
    this.Element = "#WhoreUI";
    this.DataKey = "";
    this._Spins = 6;
    this._SelectedCustomer = 0;
    this._Player = null;

    this._SlotTypes = {
        "ASS" : "AssSlotReel",
        "TITS" : "TitsSlotReel",
        "BJ" : "BJSlotReel",
        "HAND" : "HandSlotReel",
        "FEM" : "FemSlotReel",
        "PERV" : "PervSlotReel",
        "BEAUTY" : "BeautySlotReel"
    };

    // Fake Player Slots for testing.

    this._Slots = [ ];
    this.GetSlots = function() {
        if (this._Slots.length <1 ) {
            this.Slots = [
                App.Item.Factory('REEL', 'COMMON_WHORE', 0),
                App.Item.Factory('REEL', 'COMMON_WILDCARD', 0),
                App.Item.Factory('REEL', 'COMMON_WHORE', 0)
            ];
        }
            return this.Slots;
    };

    this.LoadScene = function(dataKey, Player, elementID) {
        if (typeof elementID !== 'undefined' ) this.Element = elementID;
        this._Player = Player;
        this.DataKey = dataKey;

        // Load the data dictionary for this scene.
        var dict = App.Data.Whoring[dataKey];

        // You can have up to 6 customers. This is largely dictated by the overall lust of the NPC container object.
        var npc = this._Player.GetNPC(dict['NPC_TAG']);
        var maxCustomers = Math.round(Math.max(1, Math.min( (6 * (npc.Lust()/100)), 6)));

        this.Customers = [ ]; // Clear data.
        this.Rares = [ ];

        var customerObject;
        while( this.Customers.length < maxCustomers) {
            // We could generate a rate customer.
            if (dict['RARES'].length > 0) {
                if (Math.floor(Math.random() * 100) >= 90) {
                    customerObject = new this.Customer(App.PR.GetRandomListItem(dict['RARES']));
                    // Check to see if we already drew this rare.
                    if (!this.Rares.includes(customerObject.Name)) {
                        this.Customers.push(customerObject);
                        this.Rares.push(customerObject.Name);
                        continue;
                    }
                }
            }

            customerObject = new this.Customer(this.DataKey);
            this.Customers.push(customerObject);
        }
    };

    // Render after passage in Twine.
    this.DrawUI = function(Player) {
        if (typeof Player !== 'undefined') this._Player = Player;
        $(document).one(":passageend", this._DrawUI.bind(this));
    };

    this._DrawUI = function() {
        this.DrawCustomers();
        this.DrawStatus();
        this.DrawSlots();
    };

    this.DrawCustomers = function() {
        var i;
        for (i = 0; i < 6; i++ )
            $("#WhoreCustomer"+i).remove();

        for (i = 0; i < this.Customers.length; i++)
            $(this.Element).append( this._GetCustomerUI(i) );
    };

    this._GetCustomerUI = function(index) {

        var ob = this.Customers[index];

        var root =  $('<div>').addClass('WhoreCustomerGUI').attr('id', "WhoreCustomer"+index);
        // Assign select customer callback
        root.on("click", { customer : index }, this._CustomerSelectCB.bind(this));

        // Customer Name and Rank
        var name = $('<span>').addClass('WhoreLabel').text(ob.Name);
        root.append( name );

        var payText = "";
        for (var i = 0; i < ob.Payout;i++) payText += "$";
        var rank = $('<span>').addClass('WhoreRank').text(payText);
        root.append( rank );

        // Mood, Lust and Satisfaction labels and bars.
        var mood = $('<span>').addClass('WhoreMood').text('Mood');
        root.append( mood );
        var moodBar =  $('<div>').addClass('WhoreMood').attr('id', "WhoreMood"+index).width(ob.Mood);
        root.append( moodBar );

        var lust = $('<span>').addClass('WhoreLust').text('Lust ');
        root.append( lust );
        var lustBar =  $('<div>').addClass('WhoreLust').attr('id', "WhoreLust"+index).width(ob.Lust);
        root.append( lustBar );

        var satisfaction = $('<span>').addClass('WhoreSatisfaction').text('Sat.');
        root.append( satisfaction );
        var satisfactionBar =  $('<div>').addClass('WhoreSatisfaction').attr('id', "WhoreSatisfaction"+index).width(ob.Satisfaction);
        root.append( satisfactionBar );

        // Wants and bonus
        var wantLabel   = $('<span>').addClass('WhoreWant').text('Wants');
        root.append( wantLabel );

        var want, want_class;
        for (i = 0; i < ob.Wants.length; i++) {
            want_class = "WhoreWant" + (i+1) + " WhoreWantColor"+(i+1);
            want   = $('<span>').addClass(want_class).text(ob.Wants[i]);
            root.append( want );
        }

        var bonusLabel  = $('<span>').addClass('WhoreBonus').text('Bonus');
        root.append( bonusLabel );

        var bonusSlot_class = "WhoreBonusSlot " + "BonusCat"+ob.BonusCat;
        var bonusSlot  = $('<span>').addClass(bonusSlot_class).text(ob.Bonus);
        root.append( bonusSlot );

        return root;

    };

    this._CustomerSelectCB = function(e)
    {
        console.log(e.data.customer);
        var oldCustomer = $('#WhoreCustomer' + this._SelectedCustomer).css( 'border-color', 'saddlebrown');
        var newCustomer = $('#WhoreCustomer' + e.data.customer).css('border-color', 'lime');

        this._SelectedCustomer = e.data.customer;
    };

    this.DrawSlots = function() {

        $('#SlotContainer').remove();
        // Make slot container div.
        var root = $('<div>').attr('id', "SlotContainer");
        $(this.Element).append(root);

        // Calculate locked slots.
        var lockedSlots = this.MaxSlots - this.GetSlots().length;
        var before, after;
        switch(lockedSlots) {
            case 1: before = 0; after = 1; break;
            case 2: before = 1; after = 1; break;
            case 3: before = 1; after = 2; break;
            case 4: before = 2; after = 2; break;
            case 5: before = 3; after = 2; break;
            case 6: before = 3; after = 3; break;
            default: before = 0; after = 0;
        }

        // Draw 'before' locked slots.
        var i, lockedSlot;
        for (i = 0; i < before; i++) {
            lockedSlot = $('<div class="LockedSlot"></div>');
            root.append(lockedSlot);
        }

        //Get slot reels.
        var slots = [ ];

        for (i = 0; i < this.GetSlots().length; i++) slots.push(this.GetSlots()[i].Reels());

        console.log(slots);
        var reels = new this.EZSlots("SlotContainer",
                    {"reelCount": this.Slots.length,"startingSet" :[0,0,0,0,0,0,0,0,0], "winningSet" :[7,7,7,7,7,7,7,7,7], time: 3.5,
                    "symbols" : slots, "height" : 90,"width": 60, "callback" : this._SlotCB.bind(this)});

        // Draw 'after' locked slots.
        for (i = 0; i < after; i++) {
            lockedSlot = $('<div style="background-image:[img[locked_slot_icon]]" class="LockedSlot"></div>');
            root.append(lockedSlot);
        }
        // Add Spin button, hook up click event.
        var spinButton = $('<button>').addClass("WhoreSpinButton").text("SPIN AHOY!");
        spinButton.on("click", function() { reels.spin(); } );
        $('#WhoreStatusPanel').append(spinButton);

    };

    this._SlotCB = function(results) {
        console.log(results);
    };


    this.DrawStatus = function() {

        $('#WhoreStatusPanel').remove();

        var root =  $('<div>').addClass('WhoreStatus').attr('id', "WhoreStatusPanel");
        var title = $('<div>').addClass(('WhoreStatusTitle')).text('THE SALTY MERMAID');
        root.append(title);

        var spinTitle = $('<span>').addClass('WhoreSpinsLeftTitle').text('SPINS LEFT');
        root.append(spinTitle);

        var buyButton = $('<button>').addClass("WhoreBuySpinButton").text("BUY 3 SPINS FOR 1 ENERGY");
        buyButton.on("click", this._BuyEnergyCB.bind(this));
        root.append(buyButton);

        var wildcardTitle = $('<span>').addClass('WhoreWildcardTitle').text('WILDCARD POWER');
        root.append(wildcardTitle);

        var wildcardBox = $('<div>').addClass('WhoreWildcardBox');
        var style = $('<span>').addClass('WhoreWildcardStyle').text('Beauty');
        wildcardBox.append( style );
        var styleBar =  $('<div>').addClass('WhoreWildcardStyle').width(this._Player.Beauty());
        wildcardBox.append( styleBar );
        var perversion = $('<span>').addClass('WhoreWildcardPerversion').text('Perversion ');
        wildcardBox.append( perversion );
        var perversionBar =  $('<div>').addClass('WhoreWildcardPerversion').width(this._Player.GetStat("STAT", "Perversion"));
        wildcardBox.append( perversionBar );
        var femininity = $('<span>').addClass('WhoreWildcardFemininity').text('Femininity');
        wildcardBox.append( femininity );
        var femininityBar =  $('<div>').addClass('WhoreWildcardFemininity').width(this._Player.GetStat("STAT", "Femininity"));
        wildcardBox.append( femininityBar );
        root.append(wildcardBox);

		var lootTitle = $('<span>').addClass('WhoreLootTitle').text('CURRENT EARNINGS');
        root.append(lootTitle);

        var lootBox = $('<div>').addClass('WhoreLootBox').attr('id', 'WhoreLootBox');
		root.append(lootBox);

        // Add some default loot to test
        var i, loot;
        for(i = 0; i < 10; i++) {
            loot = $('<span>').addClass("WhoreWantColor1").text('$ ');
            lootBox.append(loot);
        }

        for(i = 0; i < 10; i++) {
            loot = $('<span>').addClass("WhoreWantColor2").text('$ ');
            lootBox.append(loot);
        }

        for(i = 0; i < 10; i++) {
            loot = $('<span>').addClass("WhoreWantColor3").text('$ ');
            lootBox.append(loot);
        }

        for(i = 0; i < 10; i++) {
            loot = $('<span>').addClass("WhoreBonusColor").text('$ ');
            lootBox.append(loot);
        }
		
        $(this.Element).append(root);

        this._RedrawSpins();
    };

    this._RedrawSpins = function() {
        var i, spinText = "";
        var root = $('#WhoreStatusPanel');

        for (i = 0; i < this._Spins; i++) spinText += "&#10026; "
        var spinBox = $('<div>').addClass(('WhoreSpinsLeftBox')).attr('id', "WhoreSpinsLeftBox").html(spinText);

        root.append(spinBox);
    };

    this._BuyEnergyCB = function(e) {

        if (this._Spins >= 20 || this._Player.GetStat("STAT", "Energy") < 1) return;
        this._Spins += 3;
        this._Player.AdjustStat("Energy", -1);

        // Redraw Energy bar
        var energy = $('#Energy').html(App.PR.pStatMeter("Energy", this._Player, 0, true));
        this._RedrawSpins();
    };

    /**
     * This is the customer object for the game. It just holds data.
     * @param {string} dataKey
     * @constructor
     */
    this.Customer = function(dataKey) {
        this.Name          = "Pirate Pete";    // Name of the customer.
        this.Lust          = 1;                // Current Lust.
        this.Mood          = 1;                // Current Mood.
        this.Satisfaction  = 1;                // Current Satisfaction.
        this.Payout        = 5;                // Payout on scale of 1 to 5
        this.Bonus         = "Pirate Slut";    // Bonus Reward Category
        this.BonusCat      = "Perversion";     // Wildcard category on bonus
        this.Wants         = [ ];

        if (typeof App.Data.Whoring === 'undefined' || App.Data.Whoring.hasOwnProperty(dataKey) == false) {
            alert("Bad call to new Customer() : dataKey '"+dataKey+"' is undefined or missing.");
            return;
        }

        var dict = App.Data.Whoring[dataKey];
        console.log(dict);

        // Set Name.
        this.Name = App.PR.GetRandomListItem(dict['NAMES']);
        if (typeof dict['TITLE'] !== 'undefined' && dict['TITLE'] != null) { this.Name = dict['TITLE'] + " " + this.Name; }

        // Set the Payout
        this.Payout = (dict['MIN_PAY'] >= dict['MAX_PAY']) ? dict['MIN_PAY'] :  dict['MIN_PAY'] + Math.floor(Math.random() * (dict['MAX_PAY'] - dict['MIN_PAY']));

        // Get the NPC from the Player.
        var npc = App.SlotEngine._Player.GetNPC(dict['NPC_TAG']);

        if (typeof npc !== 'undefined') {
            // Adjust the mood and lust of the customer by the mood of the stored associated NPC object.
            this.Mood = Math.floor(Math.random() * ( npc.Mood() / 2));
            this.Lust = Math.floor(Math.random() * ( npc.Lust() / 2))
        }

        // Set the Wants array of the character.
        var tmp;
        var count = 0;
        while (this.Wants.length < 3) {
            ++count;
            tmp = App.PR.GetRandomListItem(dict["WANTS"]);
            if (!this.Wants.includes(tmp)) this.Wants.push(tmp);
            if (count >= 30) break;
        }

        // Set the bonus and bonus category.
        this.Bonus = App.PR.GetRandomListItem(dict["BONUS"]);
        this.BonusCat = App.PR.GetRandomListItem(dict["BONUS_CATS"]);
    };

    this.EZSlots =function (id, useroptions){
        var that = this; //keep reference to function for use in callbacks
        //set some variables from the options, or with defaults.
        var options = useroptions ? useroptions : {};
        this.reelCount = options.reelCount ? options.reelCount : 3; //how many reels, assume 3
        this.symbols = options.symbols ? options.symbols : ['A','B','C'];
        this.sameSymbolsEachSlot = true;
        this.startingSet = options.startingSet;
        this.winningSet = options.winningSet;
        this.width = options.width ? options.width : 100;
        this.height = options.width ? options.height : 100;
        this.time = options.time ? (options.time * 1000) : 6500; //time in millis for a spin to take
        this.howManySymbolsToAppend = Math.round(this.time/325); //how many symbols each spin adds
        this.endingLocation = 7; //location for selected symbol... needs to be a few smaller than howManySymbolsToAppend
        this.jqo = $("#"+id); //jquery object reference to main wrapper
        this.jqoSliders = []; //jquery object reference to strips sliding up and down
        this.callback = options.callback; //callback function to be called once slots animation is finished

        //to initialize we construct the correct number of slot windows
        //and then populate each strip once
        this.init = function(){
            this.jqo.addClass("ezslots"); //to get the css goodness
            //figure out if we are using the same of symbols for each window - assume if the first
            //entry of the symbols is not a string we have an array of arrays
            if(typeof this.symbols[0] != 'string'){
                this.sameSymbolsEachSlot = false;
            }
            //make each slot window
            for(var i = 0; i < this.reelCount; i++){
                var jqoSlider = $('<div class="slider"></div>');
                var jqoWindow = $('<div class="window window_"'+i+'></div>');
                this.scaleJqo(jqoWindow).append(jqoSlider); //make window right size and put slider in it
                this.jqo.append(jqoWindow); //add window to main div
                this.jqoSliders.push(jqoSlider); //keep reference to jqo of slider
                this.addSymbolsToStrip(jqoSlider,i, false, true); //and add the initial set
            }
        };
        //convenience function since we need to apply width and height to multiple parts
        this.scaleJqo = function(jqo){
            jqo.css("height",this.height+"px").css("width",this.width+"px");
            return jqo;
        };

        //add the various symbols - but take care to possibly add the "winner" as the symbol chosen
        this.addSymbolsToStrip = function(jqoSlider, whichReel, shouldWin, isInitialCall){
            var symbolsToUse = that.sameSymbolsEachSlot ? that.symbols : that.symbols[whichReel];
            console.log(symbolsToUse);
            var chosen =  shouldWin ? that.winningSet[whichReel] : Math.floor(Math.random()*symbolsToUse.length);
            for(var i = 0; i < that.howManySymbolsToAppend; i++){
                var ctr = (i == that.endingLocation) ? chosen : Math.floor(Math.random()*symbolsToUse.length);
                if(i == 0 && isInitialCall && that.startingSet){
                    ctr = that.startingSet[whichReel];
                }
                //we nest "content" inside of "symbol" so we can do vertical and horizontal centering more easily
                // var jqoContent = $("<div class='content'>"+symbolsToUse[ctr]+"</div>");
                var contentDiv = "<div class='content "+App.SlotEngine._GetSlotClass(symbolsToUse[ctr])+"'></div>";
                var jqoContent = $(contentDiv);
                that.scaleJqo(jqoContent);
                var jqoSymbol = $("<div class='symbol'></div>");
                that.scaleJqo(jqoSymbol);
                jqoSymbol.append(jqoContent);
                jqoSlider.append(jqoSymbol);
            }
            return chosen;
        };

        //to spin, we add symbols to a strip, and then bounce it down
        this.spinOne = function(jqoSlider,whichReel,shouldWin){
            var heightBefore = parseInt(jqoSlider.css("height"), 10);
            var chosen = that.addSymbolsToStrip(jqoSlider,whichReel,shouldWin);
            var marginTop = -(heightBefore + ((that.endingLocation) * that.height));
            jqoSlider.stop(true,true).animate(
                {"margin-top":marginTop+"px"},
                {'duration' : that.time + Math.round(Math.random()*1000), 'easing' : "easeOutElastic"});
            return chosen;
        };

        this.spinAll = function(shouldWin){
            var results = [];
            for(var i = 0; i < that.reelCount; i++){
                results.push(that.spinOne(that.jqoSliders[i],i,shouldWin));
            }

            if(that.callback) {
                setTimeout(function(){
                    that.callback(results);
                }, that.time);
            }

            return results;
        };

        this.init();
        return {
            spin : function(){
                return that.spinAll();
            },
            win : function(){
                return that.spinAll(true);
            }
        }
    };


    this._GetSlotClass = function(Type) {
        console.log(Type);
        return this._SlotTypes[Type];
    }
};