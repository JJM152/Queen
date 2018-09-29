App.Rogue = App.Rogue || { };

// Player Code.
App.Rogue.Player = function() {

    this._visual = {ch:"@", fg:"deepPink"};
    this._xy = null;
    this._level = null;
    this._speed = 100;
    this._hp = 10;
    this._lightLevel = 1;
    this._lightDuration = 0;

    this._keys = {};
    this._keys[ROT.VK_K] = 0;
    this._keys[ROT.VK_UP] = 0;
    this._keys[ROT.VK_NUMPAD8] = 0;
    this._keys[ROT.VK_U] = 1;
    this._keys[ROT.VK_NUMPAD9] = 1;
    this._keys[ROT.VK_L] = 2;
    this._keys[ROT.VK_RIGHT] = 2;
    this._keys[ROT.VK_NUMPAD6] = 2;
    this._keys[ROT.VK_N] = 3;
    this._keys[ROT.VK_NUMPAD3] = 3;
    this._keys[ROT.VK_J] = 4;
    this._keys[ROT.VK_DOWN] = 4;
    this._keys[ROT.VK_NUMPAD2] = 4;
    this._keys[ROT.VK_B] = 5;
    this._keys[ROT.VK_NUMPAD1] = 5;
    this._keys[ROT.VK_H] = 6;
    this._keys[ROT.VK_LEFT] = 6;
    this._keys[ROT.VK_NUMPAD4] = 6;
    this._keys[ROT.VK_Y] = 7;
    this._keys[ROT.VK_NUMPAD7] = 7;

    this._keys[ROT.VK_PERIOD] = -1;
    this._keys[ROT.VK_CLEAR] = -1;

    // Ascend / Descend
    this._keys[ROT.VK_NUMPAD5] = -1;
    this._keys[ROT.VK_DIVIDE] = -1;
    // Use torch
    this._keys[ROT.VK_SLASH] = -1;
    // Dig here.
    this._keys[ROT.VK_ASTERISK] = -1;

    this.act = function() {
        console.log("Player:act() called");
        App.Rogue.Engine._textBuffer.write("It is your turn, press any relevant key.");
        App.Rogue.Engine._textBuffer.flush();
        App.Rogue.Engine._engine.lock();
       // window.addEventListener("keydown", this);
        $(document).on("keydown", this.handleEvent.bind(this));
    };

    this.die = function() {
        App.Rogue.Engine._scheduler.remove(this);
        App.Rogue.Engine.over();
    };

    this.handleEvent = function(e) {
        var code = e.keyCode;

        var keyHandled = this._handleKey(e.keyCode);

        if (keyHandled) {
            $(document).off("keydown");
            //window.removeEventListener("keydown", this);
            App.Rogue.Engine._engine.unlock();
        }
    };

    this._handleKey = function(code) {

        console.log("code="+code);

        if (code in this._keys) {
            App.Rogue.Engine._textBuffer.clear();

            // Traverse staircase
            if (code == ROT.VK_NUMPAD5) {
                console.log("Player="+this.getXY()+",Entrance="+this._level.getEntrance()+",Exit="+this._level.getExit());
                if (this.getXY().toString() == this._level.getEntrance().toString()) {
                    App.Rogue.Engine.Ascend();
                } else if (this.getXY().toString() == this._level.getExit().toString()) {
                    App.Rogue.Engine.Descend();
                }
                return true;
            }

            // Use a light
            if (code == ROT.VK_SLASH || code == ROT.VK_DIVIDE) {
                var torch = setup.player.GetItemByName("torch");
                if (typeof torch !== 'undefined') {
                    setup.player.UseItem(torch.Id()); // draw down a charge
                    App.Rogue.Engine._textBuffer.write("You light a torch.");
                    this._lightLevel = 10;
                    this._lightDuration = 100;
                    App.Rogue.Engine._drawWithLight(this._xy);
                    return true;
                } else {
                    App.Rogue.Engine._textBuffer.write("You don't have any torches!");
                }
            }

            var direction = this._keys[code];
            if (direction == -1) { /* noop */
                /* FIXME show something? */
                return true;
            }

            var dir = ROT.DIRS[8][direction];
            var xy = this._xy.plus(new App.Rogue.XY(dir[0], dir[1]));

            if (typeof this._level.getFreeCells()[xy] === 'undefined') {
                /* FIXME collision detection */
                return true;
            }

            if (this._lightDuration > 0) this._lightDuration--;
            if (this._lightDuration < 1) this._lightLevel = 1;
            this._level.setEntity(this, xy);
            App.Rogue.Engine.redraw(xy);
            return true;
        }

        return false; /* unknown key */
    };

    this.getSpeed = function() {
        return this._speed;
    };

    /** TODO: Actually damage player **/
    this.damage = function(damage) {
        this._hp -= damage;
        if (this._hp <= 0) { this.die(); }
    };

    this.setPosition = function(xy, level) {

        /* came to a currently active level; add self to the scheduler */
        if (level != this._level && level == App.Rogue.Engine._level) {
            App.Rogue.Engine._scheduler.add(this, true);
        }
        this._xy = xy;
        this._level = level;
        return this;
    };

    this.getVisual = function() {
        return this._visual;
    };

    this.getXY = function() {
        return this._xy;
    };

    this.getLevel = function() {
        return this._level;
    };
};