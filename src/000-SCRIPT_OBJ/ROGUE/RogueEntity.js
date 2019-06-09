App.Rogue = App.Rogue || { };

// Base Entity Class - dig sites, traps, stairs, etc.
App.Rogue.Entity = class RogueEntity {
    constructor(visual)
    {
        this._visual = visual;
        this._xy = null;
        this._level = null;
        this._type = null;
        this._name = null;
        this._encounter = null;
    }

    get Type() { return this._type; }
    set Type(t) { this._type = t; }
    get Visual() { return this._visual; }
    set Visual(v) { this._visual = v; }
    get XY() { return this._xy; }
    set XY(xy) { this._xy = xy; }
    get Level() { return this._level; }
    set Level(l) { this._level = l; }
    get Name() { return this._name; }
    set Name(n) { this._name = n; }
    get Encounter() { return this._encounter; }
    set Encounter(e) { this._encounter = e; }

    setPosition(xy, level) {
        this._xy = xy;
        this._level = level;
        return this;
    }
};

// Living creatures
App.Rogue.Being = class RogueBeing extends App.Rogue.Entity {
    constructor(visual)
    {
        super(visual);
        this._speed = 100;
        this._hp = 10;
        this._awake = false;

        App.Rogue.Engine._scheduler.add(this, true); // Add newly created creatures to scheduler

    }

    get Speed() { return this._speed; }
    set Speed(s) { this._speed = s; }
    get Awake() { return this._awake; }
    set Awake(s) {
        if (s == true && this._awake != true) {
            App.Rogue.Engine._textBuffer.write( this.Name + " notices you!");
        }
        this._awake = s;
    }

    // Used by ROT engine.
    getSpeed() {
        return this._speed;
    }
    
    damage(d)
    {
        this._hp -= d;
        if (this._hp <= 0) {
            this.die();
        }
    }

    die()
    {
        App.Rogue.Engine._scheduler.remove(this);
        this.Level.removeBeing(this);
    }
    
    act()
    {
        console.log("RogueBeing: act() called");
        //Check if I need to wakeup.
        if (this.XY.dist(App.Rogue.Engine._player.XY) <= 10) {
            this.Awake = true;
        } else {
            this.Awake = false; // go to sleep if the player is too far away
        }

        if (this.Awake == true) { // Chase the player.

            var x = App.Rogue.Engine._player.XY.x;
            var y = App.Rogue.Engine._player.XY.y;
            var passableCallback = function(x, y) {
                return (x+","+y in App.Rogue.Engine._level._freeCells); // obstacle free
            }
            var astar = new ROT.Path.AStar(x, y, passableCallback, {topology:4});
         
            var path = [];
            var pathCallback = function(x, y) {
                path.push([x, y]);
            }

            astar.compute(this.XY.x, this.XY.y, pathCallback);
            // Now move.
            path.shift(); // remove mobs position
            if (path.length == 1) {
                App.Rogue.Engine._scheduler.remove(this);
                this.Level.removeBeing(this);
                App.Rogue.Engine._engine.lock();

                setup.Combat.InitializeScene({flee:30, fleePassage: "CombatAbamondGenericWin"});
                setup.Combat.LoadEncounter( this.Encounter);
                SugarCube.State.display("Combat");
                // Switch to combat mode here.
            } else if (path.length > 0) {
                x = path[0][0];
                y = path[0][1];
                var newXY = new App.Rogue.XY(x, y);
                this.Level.setEntity(this, newXY);
            }

        }
    }

    setPosition(xy, level) {

        this._xy = xy;
        this._level = level;
        return this;
    };

};

// The livingist creature - the player
App.Rogue.Player = class RoguePlayer extends App.Rogue.Being {

    constructor(visual)
    {
        super(visual);

        this._lightLevel = 1;
        this._lightDuration = 0;

        this._keys = {};
        this._akeys = {};
        //Directions
    
        //North
        this._keys[ROT.VK_NUMPAD8] = 0;
        this._keys[ROT.VK_UP] = 0; // Arrow Key
        this._akeys[ROT.VK_W] = 0;
        //North East
        this._keys[ROT.VK_NUMPAD9] = 1;
        this._akeys[ROT.VK_E] = 1;
        // East
        this._keys[ROT.VK_NUMPAD6] = 2;
        this._keys[ROT.VK_RIGHT] = 2; // Arrow Key
        this._akeys[ROT.VK_D] = 2;
        // South East
        this._keys[ROT.VK_NUMPAD3] = 3;
        this._akeys[ROT.VK_X] = 3;
        // South
        this._keys[ROT.VK_NUMPAD2] = 4;
        this._keys[ROT.VK_DOWN] = 4; // Arrow Key
        this._akeys[ROT.VK_S] = 4;
        // South West
        this._keys[ROT.VK_NUMPAD1] = 5;
        this._akeys[ROT.VK_Z] = 5;
        // West
        this._keys[ROT.VK_NUMPAD4] = 6;
        this._keys[ROT.VK_LEFT] = 6; // Arrow Key
        this._akeys[ROT.VK_A] = 6;
        // North West
        this._keys[ROT.VK_NUMPAD7] = 7;
        this._akeys[ROT.VK_Q] = 7;
    
        // Reserved
        this._keys[ROT.VK_PERIOD] = -1;
        this._keys[ROT.VK_CLEAR] = -1;
    
        // Ascend / Descend / Dig
        this._keys[ROT.VK_NUMPAD5] = -1;
        this._akeys[ROT.VK_R] = -1;
    
        // Use Torch
        this._keys[ROT.VK_DIVIDE] = -1;
        this._keys[ROT.VK_SLASH] = -1;
        this._akeys[ROT.VK_T] = -1;
    }

    get LightLevel() { return this._lightLevel; }
    set LightLevel(l) { this._lightLevel = l; }
    get LightDuration() { return this._lightDuration; }
    set LightDuration(d) { this._lightDuration = d; }

    get Torches() {
        var torch = setup.player.GetItemByName("torch");
        return typeof torch === 'undefined' ? 0 : torch.Charges();
    }

    get Shovels() {
        var shovel = setup.player.GetItemByName("shovel");
        return typeof shovel === 'undefined' ? 0 : shovel.Charges();
    }

    act() {
        console.log("Player:act() called");
        this._printEntityAtLocationMessage();
        App.Rogue.Engine._textBuffer.flush();
        App.Rogue.Engine._engine.lock();
        $(document).on("keydown", this.handleEvent.bind(this));
    }

    die() {
        App.Rogue.Engine._scheduler.remove(this);
        App.Rogue.Engine.over();
    }

    _printEntityAtLocationMessage()
    {
        if (this.Level._freeCells.hasOwnProperty(this.XY.toString()) != true) return;
        var entity = this.Level._freeCells[this.XY];
        if (typeof entity === 'undefined') return;

        var keyCmd = SugarCube.settings.alternateControlForRogue == true ? "'r'" : 'NUMPAD5';

        switch(entity.Type) {
            case null:
                break;
            case 'stairs_up':
                if (this.Level._depth > 1) {
                    App.Rogue.Engine._textBuffer.write("Press "+keyCmd+" to ascend a level.");
                } else {
                    App.Rogue.Engine._textBuffer.write("Press "+keyCmd+" to exit.");
                }
                break;
            case 'stairs_down':
                App.Rogue.Engine._textBuffer.write("Press "+keyCmd+" to descend a level.");
                break;
            case 'dig_spot':
                App.Rogue.Engine._textBuffer.write("Press "+keyCmd+" to dig here");
                break;
        }
    }
    
    handleEvent(e) {

        var keyHandled = this._handleKey(e.keyCode);

        if (keyHandled) {
            $(document).off("keydown");
            App.Rogue.Engine._engine.unlock();
        }
    }

    _handleKey(code) {

        console.log("code="+code);

        var keys = SugarCube.settings.alternateControlForRogue == true ? this._akeys : this._keys;

        if (code in keys) {
            //App.Rogue.Engine._textBuffer.clear();

            // Traverse staircase
            if ((code == ROT.VK_NUMPAD5) || (code == ROT.VK_R)) {

                // Handle Up / Down
                if (this.XY.toString() == this.Level.getEntrance().toString()) {
                    if ( setup.player.GetStat("STAT", "Energy") < 1 ) {
                        App.Rogue.Engine._textBuffer.write("You are too tired to climb up.");
                        return 1;
                    }
                    setup.player.AdjustStat("Energy", -1);
                    App.PR.RefreshTwineMeter("Energy");
                    App.Rogue.Engine.Ascend();
                    return true;
                } else if (this.XY.toString() == this.Level.getExit().toString()) {
                    if ( setup.player.GetStat("STAT", "Energy") < 1 ) {
                        App.Rogue.Engine._textBuffer.write("You are too tired to climb down.");
                        return 1;
                    }
                    setup.player.AdjustStat("Energy", -1);
                    App.PR.RefreshTwineMeter("Energy");
                    App.Rogue.Engine.Descend();
                    return true;
                } else if (this.Level.isTreasure(this.XY) != null ) {

                    if (this.Shovels > 0 ) {
                        App.Rogue.Engine._textBuffer.write("You start digging...");
                        this.Level.digAt(this.XY);

                        // Randomly draw down charge.
                        if ( this.Level._depth > (200 * Math.random())) {
                            var shovel = setup.player.GetItemByName("shovel");
                            setup.player.UseItem(shovel.Id);
                            App.Rogue.Engine._textBuffer.write("Your shovel breaks!");
                        }
                        App.Rogue.Engine.RefreshStatus();
                        return true;
                    } else {
                        App.Rogue.Engine._textBuffer.write("Out of shovels!!");
                        return true;
                    }
                }
                return true;
            }

            // Use a light
            if (code == ROT.VK_SLASH || code == ROT.VK_DIVIDE || code == ROT.VK_T) {
                if (this.Torches > 0 ) {
                    var torch = setup.player.GetItemByName("torch");
                    setup.player.UseItem(torch.Id); // draw down a charge
                    App.Rogue.Engine._textBuffer.write("You light a torch.");
                    this.LightLevel = 10;
                    this.LightDuration = 100;
                    App.Rogue.Engine._drawWithLight(this.XY);
                    App.Rogue.Engine.RefreshStatus();
                    return true;
                } else {
                    App.Rogue.Engine._textBuffer.write("You don't have any torches!");
                }
            }

            var direction = keys[code];
            if (direction == -1) { /* noop */
                /* FIXME show something? */
                return true;
            }

            var dir = ROT.DIRS[8][direction];
            var xy = this.XY.plus(new App.Rogue.XY(dir[0], dir[1]));

            if (typeof this.Level.getFreeCells()[xy] === 'undefined') {
                /* FIXME collision detection */
                return true;
            }

            if (this.LightDuration < 20 && this.LightDuration > 1 && Math.floor((Math.random() * 3)) == 0) App.Rogue.Engine._textBuffer.write("Your torch is sputtering.");
            if (this.LightDuration == 1) App.Rogue.Engine._textBuffer.write("Your torch goes out!");
            if (this.LightDuration > 0) this._lightDuration--;
            if (this.LightDuration < 1) {
                if (SugarCube.settings.alternateControlForRogue == true) {
                    App.Rogue.Engine._textBuffer.write("It is dark. Press 't' to light a torch.");
                } else {
                    App.Rogue.Engine._textBuffer.write("It is dark. Press '/' to light a torch.");
                }
                this.LightLevel = 1;
            }

            if (this.LightDuration > 0 && Math.random() < 0.10) {
                // get approximate direction to exit
                /** @type {App.Rogue.XY} */
                const exit = this.Level.getExit();
                const dirToExit = Math.atan2(xy.y - exit.y, exit.x - xy.x); // y axis it from top to bottom

                function dirString(angle) {
                    const sector = angle / (Math.PI / 4);
                    if (angle < -3 || sector > 3) return "west";
                    if (sector > 1) return "north";
                    if (sector < -1) return "south";
                    return "east";
                }
                App.Rogue.Engine._textBuffer.write(`A light breeze from the ${dirString(dirToExit)} causes your torch to flicker.`);
            }

            this.Level.setEntity(this, xy);
            App.Rogue.Engine.redraw(xy);
            return true;
        }

        return false; /* unknown key */
    }

}