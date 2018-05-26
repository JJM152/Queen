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
    this._Spins = 5;
    this._Spinning = false;
    this._SelectedCustomer = null;
    this._Player = null;
    this._ActiveReels = [ ];
    this._MoneyEarned = [ ];
    this._XPEarned = { };
    this._Misses = 0;
    this._DesperationSpins = 0;
    this._ReturnPassage = "Deck";

    /**
     * Dictionary of string tokens to css class names.
     * @type {{ASS: string, TITS: string, BJ: string, HAND: string, FEM: string, PERV: string, BEAUTY: string}}
     * @private
     */
    this._SlotTypes = {
        "ASS" : "AssSlotReel",
        "TITS" : "TitsSlotReel",
        "BJ" : "BJSlotReel",
        "HAND" : "HandSlotReel",
        "FEM" : "FemSlotReel",
        "PERV" : "PervSlotReel",
        "BEAUTY" : "BeautySlotReel"
    };

    this._WildCards = [
        "FEM", "PERV", "BEAUTY"
    ];

    //region TESTING MOCKS

    this._Slots = [ ];

    this.GetSlots = function() {
        if (this._Slots.length <1 ) {
            this.Slots = [
                App.Item.Factory('REEL', 'COMMON_WHORE', 0),
                App.Item.Factory('REEL', 'COMMON_WHORE', 0),
                App.Item.Factory('REEL', 'COMMON_WILDCARD', 0),
                App.Item.Factory('REEL', 'COMMON_WHORE', 0),
                App.Item.Factory('REEL', 'COMMON_WHORE', 0)
            ];
        }
            return this.Slots;
    };

    //endregion

    // region PUBLIC FUNCTIONS
    this.LoadScene = function(dataKey, returnPassage,  Player, elementID) {
        console.log("SlotEngine:LoadScene=> datakey:"+dataKey+", returnPassage:"+returnPassage);
        if (typeof elementID !== 'undefined' ) this.Element = elementID;
        this._Player = Player;
        this.DataKey = dataKey;
        this._ReturnPassage = returnPassage;

        // Load the data dictionary for this scene.
        var dict = App.Data.Whoring[dataKey];

        // You can have up to 6 customers. This is largely dictated by the overall lust of the NPC container object.
        var npc = this._Player.GetNPC(dict['NPC_TAG']);
        //var maxCustomers = Math.round(Math.max(1, Math.min( (6 * (npc.Lust()/100)), 6)));

        this.Customers = [ ]; // Clear data.
        this.Rares = [ ];
        this._MoneyEarned = [ ]; //
        this._XPEarned = { };
        this._Spins = 5;
        this._DesperationSpins = 0;
        this._Misses = 0;

        var customerObject;
        while( this.Customers.length < 6 ) {
            // We could generate a rare customer.
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
    // endregion

    // region PRIVATE FUNCTIONS

    // UI SPECIFIC FUNCTIONS
    this._DrawUI = function() {
        this._Spinning = false;
        this._DrawCustomers();
        this._DrawStatus();
        this._DrawSlots();
    };

    this._DrawCustomers = function() {
        var i;
        for (i = 0; i < 6; i++ )
            $("#WhoreCustomer"+i).remove();

        for (i = 0; i < this.Customers.length; i++)
            $(this.Element).append( this._GetCustomerUI(i) );
    };

    this._RedrawCustomerUI = function(index) {
        console.log("Redrawing customer at index:" + index);
        var mood = $('#WhoreMood'+index);
            mood.width(this.Customers[index].Mood);
        var lust = $('#WhoreLust'+index);
            lust.width(this.Customers[index].Lust);
        var sat = $('#WhoreSatisfaction'+index);
            sat.width(this.Customers[index].Satisfaction);
        var root = $('#WhoreCustomer'+index);
        if (this._SelectedCustomer == index) {
            root.css('border-color', 'lime');
        } else {
            root.css('border-color', 'saddlebrown');
        }
    };

    this._GetCustomerUI = function(index) {

        var ob = this.Customers[index];

        var root =  $('<div>').addClass('WhoreCustomerGUI').attr('id', "WhoreCustomer"+index);
        // Assign select customer callback
        if (ob.Satisfaction < 100) {
            root.on("click", { customer : index }, this._CustomerSelectCB.bind(this));
        } else {
            root.css('opacity', '0.4');
            root.css('cursor', 'not-allowed');
            var completed = $('<div>').addClass('CustomerComplete').text('COMPLETED');
            root.append(completed);
        }

        if (this._SelectedCustomer == index) {
            root.css('border-color', 'lime');
        } else {
            root.css('border-color', 'saddlebrown');
        }

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

    this._DrawSlots = function() {

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
        var starting = [ ];
        var winning = [ ];

        for (i = 0; i < this.GetSlots().length; i++) {
            slots.push(this.GetSlots()[i].Reels());
            starting.push(0);
            winning.push(0);
        }

        this._Reels = new this.EZSlots("SlotContainer",
                    {"reelCount": this.Slots.length,"startingSet" : starting, "winningSet" : winning, time: 3.5,
                    "symbols" : slots, "height" : 90,"width": 60, "callback" : this._SlotCB.bind(this)});

        // Draw 'after' locked slots.
        for (i = 0; i < after; i++) {
            lockedSlot = $('<div style="background-image:[img[locked_slot_icon]]" class="LockedSlot"></div>');
            root.append(lockedSlot);
        }
        // Add Spin button, hook up click event.
        var spinButton = $('<button>').addClass("WhoreSpinButton").text("SPIN AHOY!");
        spinButton.on("click", this._SpinEH.bind(this) );
        $('#WhoreStatusPanel').append(spinButton);

        // Add cash out button, hook up click event.
        var cashOutButton = $('<button>').addClass("WhoreCashOutButton").text("CASH OUT!");
        cashOutButton.on("click", this._CashOutEH.bind(this) );
        $('#WhoreStatusPanel').append(cashOutButton);
    };

    this._DrawStatus = function() {

        $('#WhoreStatusPanel').remove();

        var root =  $('<div>').addClass('WhoreStatus').attr('id', "WhoreStatusPanel");
        var title = $('<div>').addClass(('WhoreStatusTitle')).text('THE SALTY MERMAID');
        root.append(title);

        var spinTitle = $('<span>').addClass('WhoreSpinsLeftTitle').text('SPINS LEFT');
        root.append(spinTitle);

        var buyButton = $('<button>').addClass("WhoreBuySpinButton").text("BUY 5 SPINS FOR 1 ENERGY");
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
        for (var i = 0; i < this._MoneyEarned.length; i++) {
            var wantClass = $('<span>').addClass("WhoreWantColor"+this._MoneyEarned[i]["want"]).html('$ ');
            lootBox.append(wantClass);
        }

		root.append(lootBox);

        // If we reloaded page or came back from another passage, reset the bar to it's last known position.
        var width = 116 * this._Misses;
        var bar = $('#DesperationFiller');
        bar.width(width);

        // Draw Desperation button

        $('#DesperationButton').remove();
        var desperationButton = $('<button>').addClass("DesperationButtonDeactivated").attr('id', 'DesperationButton').text('DESPERATION SPIN');
        desperationButton.on("click", this._DesperationButtonCB.bind(this));
        $('#DesperationContainer').append(desperationButton);

        $(this.Element).append(root);

        this._RedrawSpins();
    };

    this._DrawDesperationBar = function() {
        if (this._Misses > 5) return; // Don't keep drawing past the maximum of 5 misses.
        var width = 116 * this._Misses;
        var bar = $('#DesperationFiller');
        if (width == 0) {
            bar.animate( { "width" : width, "easing" : "linear" }, 1000);
        } else {
            bar.animate( { "width" : width, "easing" : "swing" }, 1000);
        }
    };

    this._AddMoneyToEarningsBox = function (want )
    {
        var wantClass = $('<span>').addClass("WhoreWantColor"+want).html('$ ');
        $('#WhoreLootBox').append(wantClass);
    };

    this._RedrawSpins = function() {
        var i, spinText = "";
        var root = $('#WhoreStatusPanel');

        for (i = 0; i < this._Spins; i++) spinText += "&#10026; "
        var spinBox = $('<div>').addClass(('WhoreSpinsLeftBox')).attr('id', "WhoreSpinsLeftBox").html(spinText);

        root.append(spinBox);
    };

    this._ModalDialog = function(message) {
        console.log(message);
        return false;
    };

    this._SlotWinDiv = function(slot, content) {
        var child = $("#SlotWindow_"+slot);
        var parent = child.parent();
        var pxy = parent.position();
        var cxy = child.position();
        var startTop = pxy.top - 60;
        var startLeft = cxy.left +5;
        var endTop =  pxy.top - 400;

        var newDiv = $('<div>').addClass("SlotWinner").attr('id', 'SlotWinner_'+slot).html(content);
        newDiv.css('top', startTop);
        newDiv.css('left', startLeft);
        newDiv.animate({ opacity: 0.8, top: endTop }, 4000, function() { $(this).remove(); });
        $(this.Element).append(newDiv);
    };

    this._RemoveCustomer = function(index) {
        this._SelectedCustomer = null;
        $('#WhoreCustomer'+index).remove();
        $(this.Element).append( this._GetCustomerUI(index));
    };

    //HELPER FUNCTIONS
    this._GetSlotClass = function(Type) {
        return this._SlotTypes[Type];
    };

    this._IsWild = function(token, map) {
        if (typeof map !== 'undefined') return map['WILD'].contains(token);
        return this._WildCards.contains(token);
    };
    this._IsPerv = function(num, map) { return map['PERV'].contains(num); }
    this._IsFem = function(num, map) { return map['FEM'].contains(num); }
    this._IsBeauty = function(num, map) { return map['BEAUTY'].contains(num); }
    this._splitReel = function(a) {
        var r = [];
        var t = [];

        for (var i = 0; i < a.length; ++i) {
            if (i == 0) {
                t.push(a[i]);
                continue;
            }

            if (a[i - 1] != (a[i] - 1)) {
                r.push(t);
                t = [];
            }

            t.push(a[i]);
        }
        r.push(t);

        return r;
    };

    // Bonus modifiers
    this._SkillBonus = function(player, skill) { return player.StatRoll("SKILL", skill, 100, 1, true); };
    this._BodyBonus = function(player, body) { return player.StatRoll("BODY", body, 100, 1, true); };
    this._StatBonus = function(player, stat) { return player.StatRoll("STAT", stat, 100, 1, true); };
    this._FashionBonus = function(player, fashion) { return Math.floor(player.GetStyleSpecRating(fashion) / 100); }; // Just a flat bonus.
    this._StyleBonus = function(player, arg) { return Math.floor( player.Beauty()/100); };

    this._BonusMods = { };

    this._BonusMods['PERV']         = function(player, d) { return player.StatRoll("STAT", "Perversion", d, 1, true); };
    this._BonusMods['Perversion']   = this._StatBonus;
    this._BonusMods['FEM']          = function(player, d) { return player.StatRoll("STAT", "Femininity", d, 1, true); };
    this._BonusMods['Femininity']   = this._StatBonus;
    this._BonusMods['BEAUTY']       = this._StyleBonus;
    this._BonusMods['Beauty']       = this._StyleBonus;

    this._BonusMods['Bust']     = this._BodyBonus;
    this._BonusMods['Ass']      = this._BodyBonus;
    this._BonusMods['Face']     = this._BodyBonus;
    this._BonusMods['Lips']     = this._BodyBonus;
    this._BonusMods['Penis']    = this._BodyBonus;

    this._BonusMods['ASS']      = function(player, d) { return player.StatRoll("SKILL", "AssFucking", d, 1, true); };
    this._BonusMods['HAND']     = function(player, d) { return player.StatRoll("SKILL", "HandJobs", d, 1, true); };
    this._BonusMods['TITS']     = function(player, d) { return player.StatRoll("SKILL", "TitFucking", d, 1, true); };
    this._BonusMods['BJ']       = function(player, d) { return player.StatRoll("SKILL", "BlowJobs", d, 1, true); };

    this._BonusMods["Pirate Slut"]      = this._FashionBonus;
    this._BonusMods["Bimbo"]            = this._FashionBonus;
    this._BonusMods["Sissy Lolita"]     = this._FashionBonus;
    this._BonusMods["Gothic Lolita"]    = this._FashionBonus;
    this._BonusMods["BDSM"]             = this._FashionBonus;
    this._BonusMods["Daddy's Girl"]     = this._FashionBonus;
    this._BonusMods["Naughty Nun"]      = this._FashionBonus;
    this._BonusMods["Pet Girl"]         = this._FashionBonus;
    this._BonusMods["High Class Whore"] = this._FashionBonus;
    this._BonusMods["Slutty Lady"]      = this._FashionBonus;
    this._BonusMods["Sexy Dancer"]      = this._FashionBonus;

    /**
     * Calculate a bonus mod between 0 and 2.0
     * @param key
     * @param player
     * @param arg
     * @returns {number}
     * @private
     */
    this._CalcBonus = function(key, player, arg) {
        return this._BonusMods.hasOwnProperty(key) == false ? 1.0 : this._BonusMods[key](player, arg);
    };

    this._CalculateJackpot = function(slotMap, key, slots ) {
        var c = this.Customers[this._SelectedCustomer];
        var mood = Math.floor( (c.Mood / 2));
        var lust = Math.floor( (c.Lust / 2));

        var basePay = (c.Payout * 10); // How much pay per slot.

        // See if the customer even WANTS this.
        var i;
        var wantMod = 0;
        var wantPos = 0;
        // Sex match
        if (!this._IsWild(key) ) {
            for (i = 0; i < c.Wants.length; i++)
                if (c.Wants[i].toUpperCase() == key) {
                    wantPos = (i+1);
                    wantMod = (i == 0) ? 1.25 : (i == 1) ? 0.75 : 0.5;
                }
        } else { // This was a wildcard match
            wantMod = this._CalcBonus(key, this._Player, key);
        }

        if (wantMod == 0) return [ ]; // What? We didn't even WANT this. It's not a payout.

        basePay = Math.ceil( basePay * wantMod);

        // This is the overall modifier for the pay.
        switch(slots.length) {
            case 9: basePay = (basePay * 10);   break;
            case 8: basePay = (basePay * 5);    break;
            case 7: basePay = (basePay * 4);    break;
            case 6: basePay = (basePay * 3);    break;
            case 5: basePay = (basePay * 2);    break;
            case 4: basePay = (basePay * 1.5);  break;
        }

        // Build results for the spin.
        // ========  BASE PAYOUT =========
        // Payout is equal to the Pay * the modifier returned by the skill check for sex acts
        // The difficulty is equal to the c.PayOut attribute of the customer * 20
        // For wildcard matches it's just the default pay.
        // All results for pay are multiplied by the jackpot modifier. Add result as "PAYOUT"
        // ========  BONUS PAYOUT ========
        // Take the 1/2 the payout for that slot and apply the Category as a wildcard mod, add this to "PAYOUT"
        // Check Repeat the process for the bonus mod from the customer, add this to "PAYOUT"
        // ======== SKILL XP GAIN ========
        // You can gain skill in sex and perversion and femininity. The default XP is equal to c.PayOut * 20, modified by the result mod
        // This is checked once for each matching slot (including wild cards, but not beauty). Bonus does not grant XP.
        // ======== RAISING MOOD, LUST and SATISFACTION =========
        // Satisfaction is raised by 20 * skill check mod for every reel in the hit. When it reaches max, the customer is removed (as satisfied).
        // Mood is raised by 5 * skill check mod for every reel hit. There is no maximum.
        // Lust is raised only by Perversion wildcards, it is raised by 10 flat for each one hit.
        // ======== MOOD and LUST PAYOUT ======
        // After positive adjustments the base payout is modified by 0.5 + (50/(c.Mood/2)), for a 0.5 to 1.0 modifier.
        // Bonus pay is then added equal to 1 + (50/(c.Lust/2))
        // ======== MAXIMUM SATISFACTION ======
        // When satisfaction reaches 100 or higher, the customer is removed from the pool of available customers. The
        // game ends (no more spins) when there are no customers left.

        var results = [ ];

        for (i = 0; i < slots.length; i++) {
            var result = { slot: slots[i], payout: 0, xp: 0, mood: 0, lust: 0, sat: 0, type: key, want: wantPos  };

            // Reset the type if this is a wildcard match
            if (this._IsWild(slots[i], slotMap)) {
                if (this._IsPerv(slots[i], slotMap)) result.type = 'PERV';
                if (this._IsFem(slots[i], slotMap)) result.type = 'FEM';
                if (this._IsBeauty(slots[i], slotMap)) result.type = 'BEAUTY';
            }

            var checkMod = this._CalcBonus(key, this._Player, (c.Payout * 20) );

            // The base value for the slot. 0.25 - 2.0 max
            result.payout = basePay * checkMod;
            // Add bonus category for style/fem/perv
            result.payout += Math.floor( (result.payout/2) * this._CalcBonus(c.BonusCat, this._Player, c.BonusCat));
            // Add bonus cat for body parts / styles
            result.payout += Math.floor( (result.payout/2) * this._CalcBonus(c.Bonus, this._Player, c.Bonus));
            // Add XP bonus for everything but BEAUTY
            result.xp = ( this._IsBeauty(slots[i], slotMap) != true ) ? Math.floor(((c.Payout * 20) * checkMod)) : 0;
            // Add Mood
            result.mood = Math.ceil( 5 * checkMod );
            // Add Lust
            result.lust = (this._IsPerv(slots[i], slotMap)) ? 20 : -5;
            // Add Satisfaction
            result.sat = Math.ceil( 15 * checkMod );
            // Modify pay by mood formula
            result.payout = Math.ceil( (result.payout * (0.5 + (mood/100))));
            // Add a bonus due to high lust.
            result.payout +=  Math.ceil( (result.payout * (0.5 + (lust/100))));

            results.push(result);
        }

        return results;
    };

    this._AddMoneyToPlayer = function ( money, want ) {
        this._MoneyEarned.push( { 'money' : money, 'want' : want });
        this._AddMoneyToEarningsBox( want );
    };

    this._AddXPToPlayer = function(type, xp) {
        if (this._XPEarned.hasOwnProperty(type)) {
            this._XPEarned[type] += xp;
        } else {
            this._XPEarned[type] = xp;
        }
    };

    this._AddMoodToCustomer = function(mood) {
        this.Customers[this._SelectedCustomer].Mood = Math.max(0, Math.min((this.Customers[this._SelectedCustomer].Mood + mood), 100));
        var div = $('#WhoreMood'+this._SelectedCustomer);
        div.animate({ width: this.Customers[this._SelectedCustomer].Mood, easing: 'linear'}, 500);
        //div.width(this.Customers[this._SelectedCustomer].Mood);
    };

    this._AddLustToCustomer = function(lust) {
        this.Customers[this._SelectedCustomer].Lust = Math.max(0, Math.min((this.Customers[this._SelectedCustomer].Lust + lust), 100));
        var div = $('#WhoreLust'+this._SelectedCustomer);
        div.animate({ width: this.Customers[this._SelectedCustomer].Lust, easing: 'linear'}, 500);
        //div.width(this.Customers[this._SelectedCustomer].Lust);
    };

    this._AddSatisfactionToCustomer = function(satisfaction) {
        this.Customers[this._SelectedCustomer].Satisfaction = Math.max(0, Math.min((this.Customers[this._SelectedCustomer].Satisfaction + satisfaction), 100));
        var div = $('#WhoreSatisfaction'+this._SelectedCustomer);
        div.animate({ width: this.Customers[this._SelectedCustomer].Satisfaction, easing: 'linear'}, 500);
    };

    // endregion

    // region OBJECTS WITH CONSTRUCTORS
    /**
     * This is the customer object for the game. It just holds data.
     * @param {string} dataKey
     * @constructor
     */
    this.Customer = function(dataKey) {
        this.Name          = "Pirate Pete";    // Name of the customer.
        this.Lust          = 1;                // Current Lust.
        this.oLust         = 1;                // Original Lust.
        this.Mood          = 1;                // Current Mood.
        this.oMood         = 1;                // Original Mood.
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

        // Set Name.
        this.Name = App.PR.GetRandomListItem(dict['NAMES']);
        if (typeof dict['TITLE'] !== 'undefined' && dict['TITLE'] != null) { this.Name = dict['TITLE'] + " " + this.Name; }

        // Set the Payout
        this.Payout = (dict['MIN_PAY'] >= dict['MAX_PAY']) ? dict['MIN_PAY'] :  dict['MIN_PAY'] + Math.floor(Math.random() * (dict['MAX_PAY'] - dict['MIN_PAY']));

        // Get the NPC from the Player.
        var npc = App.SlotEngine._Player.GetNPC(dict['NPC_TAG']);

        if (typeof npc !== 'undefined') {
            // Adjust the mood and lust of the customer by the mood of the stored associated NPC object.
            this.oMood = Math.floor((npc.Mood() / 2)) + Math.floor(Math.random() * ( npc.Mood() / 2));
            this.Mood = this.oMood;
            this.oLust = Math.floor((npc.Lust() / 2)) + Math.floor(Math.random() * ( npc.Lust() / 2));
            this.Lust = this.oLust;
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

    /**
     * Gratuitously stolen from Kirk Israel and modified for this game.
     * @param id
     * @param useroptions
     * @returns {{spin: spin, win: win}}
     * @constructor
     */
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
                var jqoWindow = $('<div class="window" id="SlotWindow_'+i+'"></div>');
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

        /**
         * Hack by me to force a specific symbol.
         * @param symbol
         */
        this.spinWin = function( symbol )
        {
            var winningSet = [ ];
            for (var i = 0; i < this.symbols.length; i++) {
                var arr = this.symbols[i]; // the array of options on the reel.
                if (arr.indexOf(symbol) != -1) {
                    winningSet.push(arr.indexOf(symbol));
                } else
                if (arr.indexOf('PERV') != -1) {
                    winningSet.push(arr.indexOf('PERV'));
                } else
                if (arr.indexOf('FEM') != -1) {
                    winningSet.push(arr.indexOf('FEM'));
                } else
                if (arr.indexOf('BEAUTY') != -1) {
                    winningSet.push(arr.indexOf('BEAUTY'));
                } else {
                    winningSet.push(0);
                }
            }

            this.winningSet = winningSet;
            this.spinAll(true);
        };

        this.init();
        return {
            spin : function(){
                return that.spinAll();
            },
            win : function(symbol){
                return that.spinWin(symbol)
            }
        }
    };

    //endregion

    // region CALLBACKS AND EVENT HANDLERS

    /**
     * Called by the Reel object when the slot animation has finished playing. Passes the results as an array of strings.
     * @param {Array.<string>} results the slot wheel results.
     * @private
     */
    this._SlotCB = function(results) {
        // Convert array positions back into tokens.
        var spinResult = [];
        var i;

        for (i = 0; i < results.length; i++) spinResult.push( this.GetSlots()[i].Symbol(results[i]));

        var slotMap = {
            "ASS"       : [ ],
            "HAND"      : [ ],
            "BJ"        : [ ],
            "TITS"      : [ ],
            "WILD"      : [ ],
            "FEM"       : [ ],
            "PERV"      : [ ],
            "BEAUTY"    : [ ]
        };

        // Create mapping.

        var key;
        for (key in slotMap) {
            if (!slotMap.hasOwnProperty(key)) continue;
            for (i = 0; i < spinResult.length; i++) {
                if (spinResult[i] == key) slotMap[key].push(i);
                if (this._IsWild(spinResult[i]) && slotMap[key].contains(i) == false && !this._IsWild(key)) slotMap[key].push(i); // track wilds separately
            }
        }

        // Transform map into an array of arrays representing sequences.
        var sequences = { };
        for (key in slotMap) {
            if (!slotMap.hasOwnProperty(key)) continue;
            // We have a minimum of 3 sequential numbers in a map category
            if (slotMap[key].length >= 3) sequences[key] = this._splitReel((slotMap[key]));
        }

        //Iterate through sequence map to calculate payout.
        var payout = [ ];
        for (key in sequences) {
            if (!sequences.hasOwnProperty(key) ) continue;

            for (i = 0; i < sequences[key].length; i++ ) {
                if (sequences[key][i].length >= 3) {
                    payout = payout.concat(this._CalculateJackpot(slotMap, key, sequences[key][i]));
                }
            }

        }

        var timeout = 500;
        if (payout.length > 0 ) {
            // sneak peak
            var keys = Object.keys(payout[0]);
            console.log(payout);
            for (i = 0; i < keys.length; i++) {
                if (keys[i] == 'slot' || keys[i] == 'type' || keys[i] == 'want') continue;
                console.log("calling_printSlotResults for :"+keys[i]);
                timeout = 300 * i;
                setTimeout( this._DoSlotResults.bind(this,payout, keys[i]), timeout);
            }

            timeout += 500; // For finishing up spin.
            this._Misses = 0;
            $('#DesperationButton').removeClass("DesperationButtonActivated").addClass("DesperationButtonDeactivated");
        } else {
            // We missed.
            this._Misses++;
            if (this._Misses == 5)
                $('#DesperationButton').addClass("DesperationButtonActivated").removeClass("DesperationButtonDeactivated");
        }

        setTimeout(this._DrawDesperationBar.bind(this),100);

        setTimeout(this._UnlockSpinnerCB.bind(this), timeout);

    };

    /**
     * Called by timeout after a spin has resolved. All animation events should be in process before this
     * fires off. Check to see if customer is satisfied and remove him from available selection.
     * @private
     */
    this._UnlockSpinnerCB = function()
    {
        if (this.Customers[this._SelectedCustomer].Satisfaction >= 100) this._RemoveCustomer(this._SelectedCustomer);
        this._Spinning = false;

    };

    /**
     * Print and animate the results of the slot spin. Modify the earnings and customer objects.
     * @param {Array.<*>} results Array of payout objects
     * @param {string} key The key we are checking on the payout object.
     * @private
     */
    this._DoSlotResults = function( results, key ) {
        for (var i = 0; i < results.length; i++) {
            console.log("slot = "+results[i].slot+", key =" + key );
            var html = "";
            switch(key) {
                case 'payout':
                    html = '<span class="SlotPayout">$'+results[i][key]+'</span>';
                    this._AddMoneyToPlayer(results[i][key], results[i].want);
                    break;
                case 'xp':
                    html = '<span class="SlotXp">'+results[i][key]+' XP</span>';
                    this._AddXPToPlayer(results[i].type, results[i][key]);
                    break;
                case 'mood':
                    html = '<span class="SlotMood">'+results[i][key]+' MOOD</span>';
                    this._AddMoodToCustomer(results[i][key]);
                    break;
                case 'lust':
                    html = '<span class="SlotLust">'+results[i][key]+' LUST</span>';
                    this._AddLustToCustomer(results[i][key]);
                    break;
                case 'sat':
                    this._AddSatisfactionToCustomer(results[i][key]);
                    break;
            }

            if (html == "") continue;
            this._SlotWinDiv(results[i].slot, html);
        }
    };

    /**
     * Called when you click the 'spin' button.
     * @param {*} e
     * @private
     */
    this._SpinEH = function(e) {
        if (this._Spins <= 0) return this._ModalDialog("You are out of spins. Buy more.");
        if (this._Spinning == true) return; // No effect if spin in process. Maybe make it play a sound later?
        if (this._SelectedCustomer == null) return this._ModalDialog("You must select a customer to whore with first.");
        this._Spinning = true;
        this._Spins--;
        this._RedrawSpins();
        this._Reels.spin();
    };

    this._CashOutEH = function(e) {
        if (this._Spinning == true) return;
        SugarCube.State.display("WhoreEnd");
    };

    /**
     * Attached to the Customer's UI at creation.
     * @param {*} e event object
     * @private
     */
    this._CustomerSelectCB = function(e) {

        if (this._Spinning == true) return; // Can't switch customers in the middle of a spin.
        var oldCustomer = $('#WhoreCustomer' + this._SelectedCustomer).css( 'border-color', 'saddlebrown');
        var newCustomer = $('#WhoreCustomer' + e.data.customer).css('border-color', 'lime');

        this._SelectedCustomer = e.data.customer;
    };

    /**
     * Called from the Twine passage. Set the player object in the engine and attach an event to listen
     * for when the passage finishes rendering to fire off jquery.
     * @param {App.Entity.Player} Player
     */
    this.DrawUI = function(Player) {
        if (typeof Player !== 'undefined') this._Player = Player;
        $(document).one(":passageend", this._DrawUI.bind(this));
    };

    /**
     * Attached to the 'Buy more spins' button.
     * @param {*} e event object.
     * @private
     */
    this._BuyEnergyCB = function(e) {

        if (this._Spins >= 20 || this._Player.GetStat("STAT", "Energy") < 1) return;
        this._Spins += 5;
        this._Player.AdjustStat("Energy", -1);

        // Redraw Energy bar
        var energy = $('#Energy').html(App.PR.pStatMeter("Energy", this._Player, 0, true));
        this._RedrawSpins();
    };

    this._DesperationButtonCB = function(e) {
        if (this._Misses < 5) return;
        this._DesperationSpins++;
        this._Spinning = true;
        this._Reels.win(this.Customers[this._SelectedCustomer].Wants[0]);
    };
    // endregion
};