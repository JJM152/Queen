App = App || { Data: { }, Entity: { } };

/**
 * Main engine for slot machine mini game.
 * @type {SlotEngine}
 */
App.SlotEngine = new function() {

    this._Customers = [ ];
    this._Rares = [ ];
    this._MaxSlots = 9;
    this._Element = "#WhoreUI";
    this._InventoryElement = "#SlotInventoryUI";
    this._DataKey = "";
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
    this._EndStatus = [ ];
    this._Title = "A BACK ALLEY";
    this._Marquee = null;
    this._SelectedSlot = null;

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

    this._SlotTypesToNames = {
        "ASS" : "Ass Fucking",
        "TITS" : "Tit Fucking",
        "BJ" : "Blowjobs",
        "HAND" : "Handjobs",
        "FEM" : "Femininity",
        "PERV" : "Perversion",
        "BEAUTY" : "Beauty"
    };

    this._SlotTypesToSkillNames = {
        "ASS" : "AssFucking",
        "TITS" : "TitFucking",
        "BJ" : "BlowJobs",
        "HAND" : "HandJobs",
        "FEM" : "Femininity",
        "PERV" : "Perversion",
        "BEAUTY" : "Beauty"
    };

    this._WildCards = [
        "FEM", "PERV", "BEAUTY"
    ];


    // region PUBLIC FUNCTIONS
    this.LoadScene = function(dataKey, returnPassage,  Player, elementID) {
        if (typeof elementID !== 'undefined' ) this._Element = elementID;
        this._Player = Player;
        this._DataKey = dataKey;
        this._ReturnPassage = returnPassage;

        // Load the data dictionary for this scene.
        var dict = App.Data.Whoring[dataKey];

        // You can have up to 6 customers. This is largely dictated by the overall lust of the NPC container object.
        var npc = this._Player.GetNPC(dict['NPC_TAG']);
        //var maxCustomers = Math.round(Math.max(1, Math.min( (6 * (npc.Lust()/100)), 6)));
        this._Title = dict['DESC'];
        this._Customers = [ ]; // Clear data.
        this._Rares = [ ];
        this._MoneyEarned = [ ]; //
        this._XPEarned = { };
        this._Spins = 5;
        this._DesperationSpins = 0;
        this._Misses = 0;
        this._EndStatus = [ ];
        this._SelectedCustomer = null;
        this._Marquee =  dict.hasOwnProperty('MARQUEE') ? dict['MARQUEE'] : null;

        var customerObject;
        while( this._Customers.length < 6 ) {
            // We could generate a rare customer.
            if (dict['RARES'].length > 0) {
                if (Math.floor(Math.random() * 100) >= 90) {
                    customerObject = new this.Customer(App.PR.GetRandomListItem(dict['RARES']));
                    // Check to see if we already drew this rare.
                    if (!this._Rares.includes(customerObject.Name)) {
                        this._Customers.push(customerObject);
                        this._Rares.push(customerObject.Name);
                        continue;
                    }
                }
            }

            customerObject = new this.Customer(this._DataKey);
            this._Customers.push(customerObject);
        }
    };

    /**
     * Called from the Twine passage. Set the player object in the engine and attach an event to listen
     * for when the passage finishes rendering to fire off jquery.
     * @param {App.Entity.Player} Player
     */
    this.DrawUI = function(Player) {
        if (typeof Player !== 'undefined') this._Player = Player;
        $(document).one(":passageend", this._DrawUICB.bind(this));
    };

    /**
     * Fetch the equipped slots on the player.
     * @returns {Array.<App.Item.Reel>}
     * @constructor
     */

    this.GetSlots = function() {
        if (this._Player === 'undefined') return [ ];
        return this._Player.GetReels();
    };

    /**
     * Called from the skills panel to draw the interface for slot management.
     * @param {App.Entity.Player} Player 
     */
    this.DrawSlotInventory = function(Player) {
        if (typeof Player !== 'undefined') this._Player = Player;
        $(document).one(":passageend", this._DrawSlotInventoryCB.bind(this));  
    };


    this._AddXXX = function (ob, root)
    {
        var num = Math.max(1, Math.min(Math.round(Math.random() * 10), 10));
        var pic;
        switch( ob.MostSatisfied()[0]) {
            case "ASS" : pic = "ss_anal_"+num ;break;
            case "HAND" : pic = "ss_hand_"+num ;break;
            case "BJ" : pic = "ss_bj_"+num ;break;
            case "TITS" : pic = "ss_tit_"+num ;break;
            default: pic = "ss_anal_"+num; break;
        }

        root.addClass(pic);
    };

    /**
     * Called from the 'WhoreEnd' passage to give out loot/rewards and to tell the player about it.
     * @param {App.Entity.Player} Player
     * @returns {string}
     */
    this.PrintResults = function(Player) {
        if (this._EndStatus.length > 0 ) return this._EndStatus.join('\n');

        this._Player = Player;
        this._EndStatus = [ ];

        this._Player.NextPhase();

        var tmp = "";
        var bonus = 0;
        var i = 0;
        var oSatisfied = this._Customers.filter(function(o) { return o.Satisfaction >= 100; });

        Player.AddHistory("CUSTOMERS", this._DataKey, oSatisfied.length); // Keep track of satisfied customers.

        switch(oSatisfied.length) {
            case 0: tmp = "You satisfied no customers, this is going to catch up with you later."; bonus = 1.0; break;
            case 1:
            case 2: tmp = "You satisfied "+ oSatisfied.length +" customers, earning you a slight boost in overall mood."; bonus = 1.1; break;
            case 3:
            case 4:
            case 5: tmp = "You satisfied "+ oSatisfied.length +" customers, earning you a healthy boost in overall mood."; bonus = 1.2; break;
            case 6: tmp = "You satisfied "+ oSatisfied.length +" customers, earning you a large boost in overall mood."; bonus = 1.5; break;
        }

        this._EndStatus.push(tmp); // Add mood chat.

        var npcTags = this._Customers.map(function(o) { return o.Tag; }).filter(function(a,b,s) { return s.indexOf(a) == b; }); // All available tags.

        var oMood = this._Customers.filter(function(o) { return (o.Mood != o.oMood); } ); // Get all affected customers.
        var mood = Math.floor(Math.floor(Math.floor((oMood.reduce(function(a, o) { return ( a + (o.Mood - o.oMood)) }, 0)/ 6)) * bonus) * 0.8); // Set mood adjustment
        var affTags = oMood.map(function(o) { return o.Tag; }).filter(function(a,b,s) { return s.indexOf(a) == b; }); // Tags we touched their mood.

        for(i = 0; i < npcTags.length; i++) // Iterate through and adjust mood.
            if (affTags.contains(npcTags[i]))
                this._Player.GetNPC(npcTags[i]).AdjustStat("Mood", mood);

        // Do the same for lust.

        var oLust = this._Customers.filter(function(o) { return (o.Lust != o.oLust); } ); // Get all affected customers.
        var lust = ( Math.floor(Math.floor((oLust.reduce(function(a, o) { return ( a + (o.oLust - o.Lust)) }, 0)/ 6)) * 0.5) * -1.0); // Set mood adjustment
        affTags = oLust.map(function(o) { return o.Tag; }).filter(function(a,b,s) { return s.indexOf(a) == b; }); // Tags we touched their mood.

        for(i = 0; i < npcTags.length; i++) // Iterate through and adjust mood.
            console.log("Adjusting Lust for " + npcTags[i] + " by " + lust);
            if (affTags.contains(npcTags[i]))
                this._Player.GetNPC(npcTags[i]).AdjustStat("Lust", lust);

        // Show XP gain.
        for (var key in this._XPEarned) {
            if (!this._XPEarned.hasOwnProperty(key) || key == 'BEAUTY') continue;

            var name = this._SlotTypesToNames[key];
            var statName = this._SlotTypesToSkillNames[key];
            var xp = this._XPEarned[key];
            if (key == 'PERV' || key == 'FEM') {
                this._Player.AdjustStatXP(statName, xp);
            } else {
                this._Player.AdjustSkillXP(statName, xp);
            }
            this._EndStatus.push("You gained @@color:cyan;" + xp + "@@ " + name + " XP.");
        }

        // Show Money Gain.
        var money = this._Customers.reduce(function(a, o) { return a + o.Spent }, 0);
        this._Player.AdjustMoney(money);
        this._EndStatus.push("You gained @@color:gold;"+money+"@@ coins in payment for services rendered.");

        // Check for rare loot drops.
        for (i = 0; i < oSatisfied.length; i++) {
            if ( (1 + Math.floor(Math.random() * 100)) <= (oSatisfied[i].Mood - 60)) {
                var tipTotal = oSatisfied[i].Spent;
                var item = App.Item.PickItem( [ 'FOOD', 'DRUGS', 'COSMETICS'], { price: tipTotal } );
                if (item != null) {
                    this._Player.AddItem(item.cat, item.tag, 0);
                    this._EndStatus.push(oSatisfied[i].Name + " gave you an extra tip: " + item.desc);
                }
            }
        }

        var desperation = this._DesperationSpins * 20;
        if (desperation > 0) {
            this._Player.AdjustStatXP("WillPower", (desperation * -1.0));
            this._EndStatus.push("You lost @@color:red;" + desperation + " willpower XP@@. This is a dangerous situation.");
        }
        return this._EndStatus.join("\n");
    };
    
    // endregion

    // region PRIVATE FUNCTIONS

    // UI SPECIFIC FUNCTIONS
    
    this._DrawCustomers = function() {
        var i;
        for (i = 0; i < 6; i++ )
            $("#WhoreCustomer"+i).remove();

        for (i = 0; i < this._Customers.length; i++)
            $(this._Element).append( this._GetCustomerUI(i) );
    };

    this._RedrawCustomerUI = function(index) {
        var mood = $('#WhoreMood'+index);
            mood.width(this._Customers[index].Mood);
        var lust = $('#WhoreLust'+index);
            lust.width(this._Customers[index].Lust);
        var sat = $('#WhoreSatisfaction'+index);
            sat.width(this._Customers[index].Satisfaction);
        var root = $('#WhoreCustomer'+index);
        if (this._SelectedCustomer == index) {
            root.css('border-color', 'lime');
        } else {
            root.css('border-color', 'saddlebrown');
        }
    };

    this._GetCustomerUI = function(index) {

        var ob = this._Customers[index];

        var root =  $('<div>').addClass('WhoreCustomerGUI').attr('id', "WhoreCustomer"+index);
        // Assign select customer callback
        if (ob.Satisfaction < 100) {
            root.on("click", { customer : index }, this._CustomerSelectCB.bind(this));
        } else {
            root.empty();
            root.addClass('WhoreCustomer');
            root.css('opacity', '0.4');
            root.css('cursor', 'not-allowed');
            this._AddXXX( ob, root);
            var completed = $('<div>').addClass('CustomerComplete').text('SATISFIED');
            completed.css('opacity', '0');
            completed.animate({ opacity: 1.0 }, 2000);
            root.append(completed);
            return root;
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
        $(this._Element).append(root);

        // Calculate locked slots.
        var lockedSlots = this._MaxSlots - this.GetSlots().length;
        var before, after;

        switch(lockedSlots) {
            case 1: before = 0; after = 1; break;
            case 2: before = 1; after = 1; break;
            case 3: before = 1; after = 2; break;
            case 4: before = 2; after = 2; break;
            case 5: before = 3; after = 2; break;
            case 6: before = 3; after = 3; break;
            case 7: before = 3; after = 4; break;
            case 8: before = 4; after = 4; break;
            default: before = 4; after = 5;
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
        if (slots.length >= 3) {
            this._Reels = new this.EZSlots("SlotContainer",
                {
                    "reelCount": slots.length, "startingSet": starting, "winningSet": winning, time: 2.0,
                    "symbols": slots, "height": 90, "width": 60, "callback": this._SlotCB.bind(this)
                });

        }

        // Draw 'after' locked slots.
        for (i = 0; i < after; i++) {
            lockedSlot = $('<div style="background-image:[img[locked_slot_icon]]" class="LockedSlot"></div>');
            root.append(lockedSlot);
        }
        // Add Spin button, hook up click event.
        var spinButton = $('<button>').addClass("WhoreSpinButton").text("SPIN AHOY!");
        spinButton.on("click", this._SpinEH.bind(this) );
        var statusPanel = $('#WhoreStatusPanel');
        statusPanel.append(spinButton);

        // Add cash out button, hook up click event.
        var cashOutButton = $('<button>').addClass("WhoreCashOutButton").text("CASH OUT!");
        cashOutButton.on("click", this._CashOutEH.bind(this) );
        statusPanel.append(cashOutButton);
    };

    /**
     * Draw the slot inventory management screen.
     * @private
     */
    this._DrawSlotInventory = function()
    {
        // Get the root panel in the screen.
        var root = $(this._InventoryElement);
        // Find the container div and empty it
        root.empty();
        
        // Calculate locked slots.
        var lockedSlots = this._Player.MaxSlots - this._Player.CurrentSlots;
        var before, after;
        switch(lockedSlots) {
            case 1: before = 0; after = 9; break;
            case 2: before = 1; after = 9; break;
            case 3: before = 1; after = 8; break;
            case 4: before = 2; after = 8; break;
            case 5: before = 3; after = 8; break;
            case 6: before = 3; after = 7; break;
            case 7: before = 3; after = 6; break;
            case 8: before = 4; after = 6; break;
            default: before = -1; after = 10;
        }

        // Draw active.
        var i = 0, slot;
        for (var key in this._Player.Slots) {
            i++;
            if (!this._Player.Slots.hasOwnProperty(key)) continue;
            var reel = this._Player.Slots[key];
            // Check to see if this is a locked slot.
            if ((this._Player.Slots[key] == null || typeof this._Player.Slots[key] === 'undefined') && i <= before) {
                // Empty slot that is not unlocked. Add a place holder.
                slot = $('<div class="LockedSlot2"></div>');
            } else if ((this._Player.Slots[key] == null || typeof this._Player.Slots[key] === 'undefined') && i >= after) {
                // Empty slot that is not unlocked. Add a place holder.
                slot = $('<div class="LockedSlot2"></div>');
            } else if ((this._Player.Slots[key] == null || typeof this._Player.Slots[key] === 'undefined') && i >= before && i <= after ) {
                // Slot is empty AND unlocked.
                slot = $('<div>').attr('id', 'SlotInventory_'+key).addClass('OpenSlot');
                slot.on("click", { slot : key }, this._SelectSlotCB.bind(this));
                if (this._SelectedSlot == null) this._SelectedSlot = key;
            } else {
                // Slot is not empty and it's unlocked.
                slot = $('<div>').attr('id', 'SlotInventory_'+key).addClass('SlottedSlot');
                slot.addClass(reel.Css());
                slot.on("click", { slot : key }, this._SelectSlotCB.bind(this));
                if (this._SelectedSlot == null) this._SelectedSlot = key;
            }

            if (this._SelectedSlot != null && key == this._SelectedSlot.toString()) slot.css('border', 'solid 1px lime');

            root.append(slot);
        }

        this._DrawSlotInventoryList();
        this._DrawInventoryCurrent();

    };

    this._DrawSlotInventoryList = function() {

        var attrs = [ 'ASS', 'BJ', 'HAND', 'TITS', 'FEM', 'PERV', 'BEAUTY'];
        var text = ['Ass Fucking', 'Blowjobs', 'Handjobs', 'Tit Fucking', 'Femininity', 'Perversion', 'Beauty'];

        var root = $(this._InventoryElement);
        // Draw slot inventory
        var inventory = $('<div>').addClass('SlotInventory');
        root.append(inventory);

        var reels = this._Player.GetReelsInInventory();

        for(var i = 0; i < reels.length; i++) {
            var item = $('<div>').addClass('SlotInventoryItem');
            var head = $('<span>').addClass('SlotHeader').html("("+ reels[i].Rank() + ") " + reels[i].Name());

            switch(reels[i].Rank()) {
                case 'COMMON': head.css('color', 'grey'); break;
                case 'UNCOMMON' : head.css('color','lime');break;
                case 'RARE' : head.css('color','cyan'); break;
                case 'LEGENDARY': head.css('color', 'orange'); break;
            }

            item.append(head);
            item.append($('<br>'));
            for (var x = 0; x < attrs.length; x++) {
                var percent = reels[i].CalcPercent(attrs[x]);
                if (percent <= 0) continue;
                var span = $('<span>').addClass('SlotAttribute').text(text[x] + " " + percent +"%");
                item.append(span);
            }

            item.append($('<br>'));
            var button = $('<button>').addClass('EquipSlotButton').text('EQUIP');
            button.on('click', { 'id' : reels[i].Id() }, this._EquipSlotCB.bind(this));

            item.append(button);
            inventory.append(item);
        }

    };

    this._DrawInventoryCurrent = function() {
        var attrs = [ 'ASS', 'BJ', 'HAND', 'TITS', 'FEM', 'PERV', 'BEAUTY'];
        var text = ['Ass Fucking', 'Blowjobs', 'Handjobs', 'Tit Fucking', 'Femininity', 'Perversion', 'Beauty'];
        var root = $(this._InventoryElement);
        // Draw current slot item info.
        var current = $('<div>').addClass('SlotCurrent');
        root.append(current);

        if (this._Player.Slots[this._SelectedSlot] == null || typeof this._Player.Slots[this._SelectedSlot] === 'undefined') {
            var tempHeader = $('<div>').addClass('SlotCurrentHeader').text("EMPTY SLOT SELECTED");
            current.append(tempHeader);

        } else {

            var reel = this._Player.Slots[this._SelectedSlot];

            var header = $('<div>').addClass('SlotCurrentHeader').html("("+reel.Rank()+") "+reel.Name());

            switch(reel.Rank()) {
                case 'COMMON': header.css('color', 'grey'); break;
                case 'UNCOMMON' : header.css('color','lime');break;
                case 'RARE' : header.css('color','cyan'); break;
                case 'LEGENDARY': header.css('color', 'orange'); break;
            }

            current.append(header);
            var buttonDiv = $('<div>').addClass('SlotCurrentButton');
            var button = $('<button>').addClass('RemoveSlotButton').text('REMOVE');
            button.on('click', this._RemoveSelectedSlotCB.bind(this));

            buttonDiv.append(button);
            current.append(buttonDiv);
            current.append($('<hr>').addClass('SlotCurrent'));

            for (var x = 0; x < attrs.length; x++) {
                var percent = reel.CalcPercent(attrs[x]);
                if (percent <= 0) continue;
                var span = $('<span>').addClass('SlotAttribute').text(text[x] + " " + percent +"%");
                current.append(span);
            }

            current.append($('<hr>').addClass('SlotCurrent'));

        }
    };

    this._DrawStatus = function() {

        $('#WhoreStatusPanel').remove();

        var root =  $('<div>').addClass('WhoreStatus').attr('id', "WhoreStatusPanel");
        if (this._Marquee != null ) {
            var marquee = $('<div>').addClass('WhoreMarquee');
            marquee.addClass(this._Marquee);
            root.append(marquee);
        } else {
            var title = $('<div>').addClass(('WhoreStatusTitle')).text(this._Title);
            root.append(title);
            var spinTitle = $('<span>').addClass('WhoreSpinsLeftTitle').text('SPINS LEFT');
            root.append(spinTitle);
        }

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
        var width = Math.max(0, Math.min(116 * this._Misses, 696));
        var bar = $('#DesperationFiller');
        bar.width(width);

        // Draw Desperation button

        $('#DesperationButton').remove();
        var desperationButton = $('<button>').addClass("DesperationButtonDeactivated").attr('id', 'DesperationButton').text('DESPERATION SPIN');
        desperationButton.on("click", this._DesperationButtonCB.bind(this));
        $('#DesperationContainer').append(desperationButton);

        $(this._Element).append(root);

        this._RedrawSpins();
    };

    this._DrawDesperationBar = function() {
        if (this._Misses > 5) return; // Don't keep drawing past the maximum of 5 misses.
        var width = Math.max(0, Math.min(116 * this._Misses, 696))
        var bar = $('#DesperationFiller');
        if (width == 0) {
            bar.animate( { "width" : width, "easing" : "linear" }, 1000);
        } else {
            bar.animate( { "width" : width, "easing" : "swing" }, 1000);
        }
    };

    this._AddMoneyToEarningsBox = function (want) {
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

    /** Make a cool looking dialog.
     //    <h1 class="ml1">
     //    <span class="text-wrapper">
     //    <span class="line line1"></span>
     //    <span class="letters">THURSDAY</span>
     //    <span class="line line2"></span>
     //    </span>
     //    </h1>
     * @param message
     * @private
     */
    this._Dialog = function(message) {
        var root = $(this._Element);
        $('#WhoreDialogDiv').remove();

        var div = $('<div>').addClass('WhoreDialog').attr('id', 'WhoreDialogDiv');
        var header = $('<h1>').addClass('ml1');
        var inner = $('<span>').addClass('text-wrapper');

        inner.append( $('<span>').addClass('line line1'));
        inner.append( $('<span>').addClass('letters').html(message));
        inner.append( $('<span>').addClass('line line2'));

        header.append( inner );
        div.append(header);
        root.append(div);

        // Javascript animations.
        $('.ml1 .letters').each(function(){
            $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
        });

        anime.timeline({loop: false})
            .add({
                targets: '.ml1 .letter',
                scale: [0.3,1],
                opacity: [0,1],
                translateZ: 0,
                easing: "easeOutExpo",
                duration: 600,
                delay: function(el, i) {
                    return 70 * (i+1)
                }
            }).add({
            targets: '.ml1 .line',
            scaleX: [0,1],
            opacity: [0.5,1],
            easing: "easeOutExpo",
            duration: 700,
            offset: '-=875',
            delay: function(el, i, l) {
                return 80 * (l - i);
            }
        }).add({
            targets: '.ml1',
            opacity: 0,
            duration: 1000,
            easing: "easeOutExpo",
            delay: 1000
        });
    };

    /**
     * Rising message
     * <h1 class="ml13">Rising Strong</h1>
     * @param {string} message
     * @param {string} color
     * @private
     */
    this._RisingDialog = function(message, color) {
        color = color || 'white';
        var root = $(this._Element);
        $('#WhoreDialogDiv').remove();

        var div = $('<div>').addClass('WhoreDialog').attr('id', 'WhoreDialogDiv');
        var header = $('<h1>').addClass('ml13').html(message);
        header.css('color', color);
        div.append(header);
        root.append(div)

        // Wrap every letter in a span
        $('.ml13').each(function(){
            $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
        });

        anime.timeline({loop: false})
            .add({
                targets: '.ml13 .letter',
                translateY: [100,0],
                translateZ: 0,
                opacity: [0,1],
                easing: "easeOutExpo",
                duration: 1000,
                delay: function(el, i) {
                    return 300 + 30 * i;
                }
            }).add({
            targets: '.ml13 .letter',
            translateY: [0,-100],
            opacity: [1,0],
            easing: "easeInExpo",
            duration: 1000,
            delay: function(el, i) {
                return 100 + 30 * i;
            }
        });
    };

    /** Draw a big circle with a bang on it.
         <h1 class="ml8">
         <span class="letters-container">
         <span class="letters letters-left">Hi</span>
         <span class="letters bang">!</span>
         </span>
         <span class="circle circle-white"></span>
         <span class="circle circle-dark"></span>
         <span class="circle circle-container"><span class="circle circle-dark-dashed"></span></span>
         </h1>
     * @private
     */
    this._WhackPlayer = function() {
        this._Player.AdjustStat('Health', -10);
        // Redraw Health Bar
        $('#Health').html(App.PR.pStatMeter("Health", this._Player, 0, true));
        var root = $(this._Element);
        $('#WhoreDialogDiv').remove();

        var div = $('<div>').addClass('WhoreDialog').attr('id', 'WhoreDialogDiv');
        var header = $('<h1>').addClass('ml8');
        var lContainer = $('<span>').addClass('letters-container');

        header.append(lContainer);

        // Word
        var words = ['POW','BANG', 'SLAP', 'WHACK', 'KICK', 'SMACK', 'THUD' ];
        var word = App.PR.GetRandomListItem(words);
        lContainer.append( $('<span>').addClass('letters letters-left').text(word));
        lContainer.append( $('<span>').addClass('letters bang').text('!'));

        // Circle
        header.append( $('<span>').addClass('circle circle-white'));
        header.append( $('<span>').addClass('circle circle-dark'));

        var cContainer = $('<span>').addClass('circle circle-container');
        cContainer.append($('<span>').addClass('circle circle-dark-dashed'));
        header.append(cContainer);

        // finish up.
        div.append(header);
        root.append(div);

        anime.timeline({loop: false})
            .add({
                targets: '.ml8 .circle-white',
                scale: [0, 3],
                opacity: [1, 0],
                easing: "easeInOutExpo",
                rotateZ: 360,
                duration: 1100
            }).add({
            targets: '.ml8 .circle-container',
            scale: [0, 1],
            duration: 1100,
            easing: "easeInOutExpo",
            offset: '-=1000'
        }).add({
            targets: '.ml8 .circle-dark',
            scale: [0, 1],
            duration: 1100,
            easing: "easeOutExpo",
            offset: '-=600'
        }).add({
            targets: '.ml8 .letters-left',
            scale: [0, 1],
            duration: 1200,
            offset: '-=550'
        }).add({
            targets: '.ml8 .bang',
            scale: [0, 1],
            rotateZ: [45, 15],
            duration: 1200,
            offset: '-=1000'
        }).add({
            targets: '.ml8',
            opacity: 0,
            duration: 1000,
            easing: "easeOutExpo",
            delay: 1400
        });

        anime({
            targets: '.ml8 .circle-dark-dashed',
            rotateZ: 360,
            duration: 8000,
            easing: "linear",
            loop: false
        });

        setTimeout(this._CheckIfDead.bind(this), 3000);
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
        $(this._Element).append(newDiv);
    };

    this._RemoveCustomer = function(index) {
        this._SelectedCustomer = null;
        $('#WhoreCustomer'+index).remove();
        $(this._Element).append( this._GetCustomerUI(index));
    };

    this._CheckIfDead = function() {
        if (this._Player.GetStat('STAT', 'Health') <= 0 ) SugarCube.State.display('DeathEnd');
    };

    //HELPER FUNCTIONS
    this._GetSlotClass = function(Type) {
        return this._SlotTypes[Type];
    };

    this._IsWild = function(token, map) {
        if (typeof map !== 'undefined') return map['WILD'].contains(token);
        return this._WildCards.contains(token);
    };
    this._IsPerv = function(num, map) { return map['PERV'].contains(num); };
    this._IsFem = function(num, map) { return map['FEM'].contains(num); };
    this._IsBeauty = function(num, map) { return map['BEAUTY'].contains(num); };
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
    this._FashionBonus = function(player, fashion) { return player.GetStyleSpecRating(fashion) / 100; };

    // 0.0 to 1.0 mods.
    this._StyleBonus = function(player, arg) { return (player.Beauty()/100); };
    this._FemBonus = function(player, arg) { return player.GetStat('STAT', 'Femininity')/ 100; };   
    this._PervBonus = function(player, arg) { return player.GetStat('STAT', 'Perversion')/100; };

    this._BonusMods = { };

    this._BonusMods['PERV']         = this._PervBonus;
    this._BonusMods['Perversion']   = this._StatBonus;
    this._BonusMods['FEM']          = this._FemBonus;
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
        var mod = this._BonusMods.hasOwnProperty(key) == false ? 1.0 : this._BonusMods[key](player, arg);
        return mod;
    };

    this._CalculateJackpot = function(slotMap, key, slots ) {
        var c = this._Customers[this._SelectedCustomer];
        var mood = Math.floor( (c.Mood / 2));
        var lust = Math.floor( (c.Lust / 2));

        var basePay = 2 + (c.Payout * 2);

        // See if the customer even WANTS this.
        var i;
        var wantMod = 0;
        var wantPos = 0;
        // Sex match
        if (!this._IsWild(key) ) {
            for (i = 0; i < c.Wants.length; i++)
                if (c.Wants[i].toUpperCase() == key) {
                    wantPos = (i+1);
                    wantMod = (i == 0) ? 1.0 : (i == 1) ? 0.75 : 0.5;
                }
        } else { // This was a wildcard match
            wantMod = this._CalcBonus(key, this._Player, key); 
        }

        if (wantMod == 0) return [ ]; // What? We didn't even WANT this. It's not a payout.

        basePay = ( basePay * wantMod); // 25, 18.75, 12.5

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
            var checkmod = 1.0;

            // Reset the type if this is a wildcard match
            if (this._IsWild(slots[i], slotMap)) {
                if (this._IsPerv(slots[i], slotMap)) result.type = 'PERV';
                if (this._IsFem(slots[i], slotMap)) result.type = 'FEM';
                if (this._IsBeauty(slots[i], slotMap)) result.type = 'BEAUTY';

                checkmod = this._CalcBonus(result.type, this._Player, null)
            } else {
                checkmod = this._CalcBonus(key, this._Player, (c.Payout * 20) );
            }

            //Lets clamp the mod to 0.2 to 1.6
            checkmod = Math.max(0.2, Math.min(checkmod, 1.6));

            result.payout = basePay * checkmod;
            // Add bonus category for style/fem/perv
            result.payout +=  ((basePay/3) * this._CalcBonus(c.BonusCat, this._Player, c.BonusCat));
            // Add bonus cat for body parts / styles
            result.payout += ((basePay/3) * this._CalcBonus(c.Bonus, this._Player, c.Bonus));
            // Add XP bonus for everything but BEAUTY
            result.xp = ( this._IsBeauty(slots[i], slotMap) != true ) ? Math.round((c.Payout * 7.5)*wantMod) : 0;
            // Add Mood
            result.mood =  Math.round(5 * checkmod);
            // Add Lust
            result.lust = (this._IsPerv(slots[i], slotMap)) ? 20 : -5;
            // Add Satisfaction
            result.sat = Math.round( 15 * checkmod );
            // Modify pay by mood formula
            result.payout = (result.payout * (0.5 + (mood/100)));
            // Add a bonus due to high lust.
            result.payout +=  (basePay * (lust/100));

            result.payout = Math.round(result.payout);
            this._AddMoneyToCustomer(result.payout);
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
        this._Customers[this._SelectedCustomer].Mood = Math.max(0, Math.min((this._Customers[this._SelectedCustomer].Mood + mood), 100));
        var div = $('#WhoreMood'+this._SelectedCustomer);
        div.animate({ width: this._Customers[this._SelectedCustomer].Mood, easing: 'linear'}, 500);
        //div.width(this._Customers[this._SelectedCustomer].Mood);
    };

    this._AddLustToCustomer = function(lust) {
        this._Customers[this._SelectedCustomer].Lust = Math.max(0, Math.min((this._Customers[this._SelectedCustomer].Lust + lust), 100));
        var div = $('#WhoreLust'+this._SelectedCustomer);
        div.animate({ width: this._Customers[this._SelectedCustomer].Lust, easing: 'linear'}, 500);
        //div.width(this._Customers[this._SelectedCustomer].Lust);
    };

    this._AddMoneyToCustomer = function(money) {
        this._Customers[this._SelectedCustomer].Spent += money;
    };

    this._AddSatisfactionToCustomer = function(satisfaction) {
        this._Customers[this._SelectedCustomer].Satisfaction = Math.max(0, Math.min((this._Customers[this._SelectedCustomer].Satisfaction + satisfaction), 100));
        var div = $('#WhoreSatisfaction'+this._SelectedCustomer);
        div.animate({ width: this._Customers[this._SelectedCustomer].Satisfaction, easing: 'linear'}, 500);
    };

    // endregion

    // region OBJECTS WITH CONSTRUCTORS
    /**
     * This is the customer object for the game. It just holds data.
     * @param {string} dataKey
     * @constructor
     */
    this.Customer = function(dataKey) {
        this.Name           = "Pirate Pete";    // Name of the customer.
        this.Lust           = 1;                // Current Lust.
        this.oLust          = 1;                // Original Lust.
        this.Mood           = 1;                // Current Mood.
        this.oMood          = 1;                // Original Mood.
        this.Satisfaction   = 1;                // Current Satisfaction.
        this.Payout         = 5;                // Payout on scale of 1 to 5
        this.Bonus          = "Pirate Slut";    // Bonus Reward Category
        this.BonusCat       = "Perversion";     // Wildcard category on bonus
        this.Wants          = [ ];
        this.Spent          = 0;                // How much we've paid out.
        this.Tag            = "";               // NPC tag.
        this.SatisfiedWants = { };
        if (typeof App.Data.Whoring === 'undefined' || App.Data.Whoring.hasOwnProperty(dataKey) == false) {
            alert("Bad call to new Customer() : dataKey '"+dataKey+"' is undefined or missing.");
            return;
        }

        var dict = App.Data.Whoring[dataKey];

        // Set Name.
        this.Name = App.PR.GetRandomListItem(dict['NAMES']);
        if (typeof dict['TITLE'] !== 'undefined' && dict['TITLE'] != null) { this.Name = dict['TITLE'] + " " + this.Name; }

        // Set the Payout
        this.Payout = (dict['MIN_PAY'] >= dict['MAX_PAY']) ? dict['MIN_PAY'] :  dict['MIN_PAY'] + Math.round(Math.random() * (dict['MAX_PAY'] - dict['MIN_PAY']));

        // Get the NPC from the Player.
        this.Tag = dict['NPC_TAG'];
        var npc = App.SlotEngine._Player.GetNPC(this.Tag);

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
            if (!this.Wants.contains(tmp)) {
                this.SatisfiedWants[tmp] = 0;
                this.Wants.push(tmp);
            }
            if (count >= 30) break;
        }

        // Set the bonus and bonus category.
        this.Bonus = App.PR.GetRandomListItem(dict["BONUS"]);
        this.BonusCat = App.PR.GetRandomListItem(dict["BONUS_CATS"]);

        this.MostSatisfied = function() {
            var sortable = [];
            for (var want in this.SatisfiedWants) {
                if (!this.SatisfiedWants.hasOwnProperty(want)) continue;
                sortable.push([want, this.SatisfiedWants[want]]);
            }

            sortable.sort(function(a, b) {
                return b[1] - a[1];
            });

            return sortable[0];
        }
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
        //this.howManySymbolsToAppend = Math.round(this.time/325); //how many symbols each spin adds
        this.howManySymbolsToAppend = 30;
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
            // Let's calculate all of the satisfaction, mood and lust at one go.
            this._AddSatisfactionToCustomer(payout.reduce(function(a, o) { return ( a + o.sat) }, 0));
            this._AddMoodToCustomer(payout.reduce(function(a, o) { return ( a + o.mood) }, 0));
            this._AddLustToCustomer(payout.reduce(function(a, o) { return ( a + o.lust) }, 0));

            // sneak peak
            var keys = Object.keys(payout[0]);
            for (i = 0; i < keys.length; i++) {
                if (keys[i] == 'slot' || keys[i] == 'type' || keys[i] == 'want') continue;
                timeout = 300 * i;
                setTimeout( this._DoSlotResults.bind(this,payout, keys[i]), timeout);
            }

            timeout += 500; // For finishing up spin.
            this._Misses = 0;

            var jackpot = [ 'JACKPOT', 'JACKPOT', 'JACKPOT', 'DOUBLE JACKPOT', 'TRIPLE JACKPOT', 'QUADRUPLE JACKPOT', 'SUPER JACKPOT', 'MEGA JACKPOT', 'ULTRA JACKPOT' ];
            var colors = [ 'lime', 'lime', 'lime', 'gold', 'gold', 'orange', 'orange', 'cyan', 'purple'];
            this._RisingDialog(jackpot[payout.length-1], colors[payout.length-1]);
            $('#DesperationButton').removeClass("DesperationButtonActivated").addClass("DesperationButtonDeactivated");
        } else {
            // We missed.
            this._Misses++;
            if (this._Misses == 5) {
                this._RisingDialog('DESPERATION MODE UNLOCKED', 'deepPink');
                $('#DesperationButton').addClass("DesperationButtonActivated").removeClass("DesperationButtonDeactivated");
            } else
            if (this._Misses < 5) { // No desperation mode yet.
                this._RisingDialog('MISS', 'red');
            } else {
                this._WhackPlayer();
            }
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
        if (this._Customers[this._SelectedCustomer].Satisfaction >= 100) this._RemoveCustomer(this._SelectedCustomer);
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
                    break;
                case 'lust':
                    html = '<span class="SlotLust">'+results[i][key]+' LUST</span>';
                    break;
                case 'sat':
                    var wantType = results[i].type;
                    var ob = this._Customers[this._SelectedCustomer];
                    if ( ob.SatisfiedWants.hasOwnProperty(wantType)) ob.SatisfiedWants[wantType] += 1;
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
        if (this._Spins <= 0) return this._Dialog("NO SPINS LEFT");
        if (this._Spinning == true) return; // No effect if spin in process. Maybe make it play a sound later?
        if (this.GetSlots().length < 3) return this._Dialog("EQUIP 3 SLOTS");
        if (this._SelectedCustomer == null) return this._Dialog("SELECT CUSTOMER");
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
     * Attached to the 'Buy more spins' button.
     * @param {*} e event object.
     * @private
     */
    this._BuyEnergyCB = function(e) {
        if (this.GetSlots().length < 3) return this._Dialog("EQUIP 3 SLOTS");

        if (this._Spins >= 20 || this._Player.GetStat("STAT", "Energy") < 1) return;
        this._Spins += 5;
        this._Player.AdjustStat("Energy", -1);

        // Redraw Energy bar
        $('#Energy').html(App.PR.pStatMeter("Energy", this._Player, 0, true));
        this._RedrawSpins();
    };

    this._DesperationButtonCB = function(e) {
        if (this._Misses < 5) return;
        this._DesperationSpins++;
        this._Spinning = true;
        this._Reels.win(this._Customers[this._SelectedCustomer].Wants[0]);
    };

    this._DrawUICB = function() {
        this._Spinning = false;
        this._DrawCustomers();
        this._DrawStatus();
        this._DrawSlots();

        if (this.GetSlots().length < 3) {
            this._Dialog("EQUIP 3 SLOTS");
        } else {
            if (this._SelectedCustomer == null) this._Dialog("SELECT CUSTOMER");
        }
    };

    this._DrawSlotInventoryCB = function() {
        this._DrawSlotInventory();
    };

    this._SelectSlotCB = function(e) {
        this._SelectedSlot = e.data.slot;
        this._DrawSlotInventory();
    };

    this._EquipSlotCB = function(e) {
        this._Player.EquipReel(e.data.id, this._SelectedSlot.toString());
        this._DrawSlotInventory();
    };

    this._RemoveSelectedSlotCB = function(e) {
        this._Player.RemoveReel(this._SelectedSlot);
        this._DrawSlotInventory();
    };

    // endregion
};
