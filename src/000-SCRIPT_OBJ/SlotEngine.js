App = App || { Data: { }, Entity: { } };

/**
 * Main engine for slot machine mini game.
 * @type {SlotEngine}
 */
App.SlotEngine = new function() {

    this.Customers = [ 1, 2, 3, 4, 5, 6 ];
	this.Slots = [ 1, 2,3, 4, 5, 6, 7, 8, 9 ];

    this.DrawUI = function(ElementID) {
        this.DrawCustomers(ElementID);
        this.DrawSlots(ElementID);
        this.DrawStatus(ElementID);
    };

    this.DrawCustomers = function(ElementID)
    {
        for (var i = 0; i < this.Customers.length; i++)
            $(ElementID).append( this._GetCustomerUI(i+1) );
    };

    this._GetCustomerUI = function(Slot) {

        var root =  $('<div>').addClass('WhoreCustomerGUI').attr('id', "WhoreCustomer"+Slot);
        // Customer Name and Rank
        var name = $('<span>').addClass('WhoreLabel').text("Pirate Pete");
        root.append( name );
        var rank = $('<span>').addClass('WhoreRank').text('$$$$$');
        root.append( rank );

        // Mood, Lust and Satisfaction labels and bars.
        var mood = $('<span>').addClass('WhoreMood').text('Mood');
        root.append( mood );
        var moodBar =  $('<div>').addClass('WhoreMood').attr('id', "WhoreMood"+Slot);
        root.append( moodBar );
        var lust = $('<span>').addClass('WhoreLust').text('Lust ');
        root.append( lust );
        var lustBar =  $('<div>').addClass('WhoreLust').attr('id', "WhoreLust"+Slot);
        root.append( lustBar );
        var satisfaction = $('<span>').addClass('WhoreSatisfaction').text('Sat.');
        root.append( satisfaction );
        var satisfactionBar =  $('<div>').addClass('WhoreSatisfaction').attr('id', "WhoreSatisfaction"+Slot);
        root.append( satisfactionBar );

        // Wants and bonus
        var wantLabel   = $('<span>').addClass('WhoreWant').text('Wants');
        root.append( wantLabel );

        var want1   = $('<span>').addClass('WhoreWant1').text('Ass');
        root.append( want1 );

        var want2   = $('<span>').addClass('WhoreWant2').text('BJ');
        root.append( want2 );

        var want3   = $('<span>').addClass('WhoreWant3').text('Tits');
        root.append( want3 );

        var want4   = $('<span>').addClass('WhoreWant4').text('Hand');
        root.append( want4 );

        var bonusLabel  = $('<span>').addClass('WhoreBonus').text('Bonus');
        root.append( bonusLabel );

        var bonusSlot  = $('<span>').addClass('WhoreBonusSlot').text('Pirate Slut');
        root.append( bonusSlot );

        return root;

    };

    this.DrawSlots = function(ElementID)
    {
        for (var i = 0; i < this.Slots.length; i++)
            $(ElementID).append( this._GetSlotReel(i+1) );
    };

    this._GetSlotReel = function(Slot) {
        return $('<div>')
            .addClass('SlotReel')
            .attr('id', "WhoreSlot"+Slot);
    };

    this.DrawStatus = function(ElementID)
    {
        var root =  $('<div>').addClass('WhoreStatus').attr('id', "WhoreStatusPanel");
        var title = $('<div>').addClass(('WhoreStatusTitle')).text('THE SALTY MERMAID');
        root.append(title);

        var spinTitle = $('<span>').addClass('WhoreSpinsLeftTitle').text('SPINS LEFT');
        root.append(spinTitle);

        var spinBox = $('<div>').addClass(('WhoreSpinsLeftBox')).attr('id', "WhoreSpinsLeftBox").html('&#10026; &#10026; &#10026; &#10026; &#10026; &#10026; &#10026; &#10026; &#10026; &#10026; &#10026; &#10026; &#10026; &#10026; &#10026; &#10026; &#10026; &#10026; &#10026; &#10026;');
        root.append(spinBox);

        var buyButton = $('<button>').addClass("WhoreBuySpinButton").text("BUY 3 SPINS FOR 1 ENERGY");
        root.append(buyButton);

        var wildcardTitle = $('<span>').addClass('WhoreWildcardTitle').text('WILDCARD POWER');
        root.append(wildcardTitle);

        var wildcardBox = $('<div>').addClass('WhoreWildcardBox');
        var style = $('<span>').addClass('WhoreWildcardStyle').text('Style');
        wildcardBox.append( style );
        var styleBar =  $('<div>').addClass('WhoreWildcardStyle');
        wildcardBox.append( styleBar );
        var perversion = $('<span>').addClass('WhoreWildcardPerversion').text('Perversion ');
        wildcardBox.append( perversion );
        var perversionBar =  $('<div>').addClass('WhoreWildcardPerversion');
        wildcardBox.append( perversionBar );
        var femininity = $('<span>').addClass('WhoreWildcardFemininity').text('Femininity');
        wildcardBox.append( femininity );
        var femininityBar =  $('<div>').addClass('WhoreWildcardFemininity');
        wildcardBox.append( femininityBar );
        root.append(wildcardBox);

		var lootTitle = $('<span>').addClass('WhoreLootTitle').text('CURRENT EARNINGS');
        root.append(lootTitle);

        var lootBox = $('<div>').addClass('WhoreLootBox').attr('id', 'WhoreLootBox');
		root.append(lootBox);
		
		// Spin Button
		var buyButton = $('<button>').addClass("WhoreSpinButton").text("SPIN AHOY!");
        root.append(buyButton);
		
        $(ElementID).append(root);
    }
};