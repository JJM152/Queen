App.Rogue = App.Rogue || { };

// Player Code.
App.Rogue.Player = function() {

    this._visual = {ch:"@", fg:"deepPink"};
    this._xy = null;
    this._level = null;
    this._speed = 100;
    this._hp = 10;

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
    this._keys[ROT.VK_NUMPAD5] = -1;
};

App.Rogue.Player.prototype.act = function() {
    console.log("Player:act() called");
    App.Rogue.Game.textBuffer.write("It is your turn, press any relevant key.");
    App.Rogue.Game.textBuffer.flush();
    App.Rogue.Game.engine.lock();
    window.addEventListener("keydown", this);
};

App.Rogue.Player.prototype.die = function() {
    App.Rogue.Game.scheduler.remove(this);
    App.Rogue.Game.over();
};

App.Rogue.Player.prototype.handleEvent = function(e) {
    var code = e.keyCode;

    var keyHandled = this._handleKey(e.keyCode);

    if (keyHandled) {
        window.removeEventListener("keydown", this);
        App.Rogue.Game.engine.unlock();
    }
};

App.Rogue.Player.prototype._handleKey = function(code) {
    if (code in this._keys) {
        App.Rogue.Game.textBuffer.clear();

        var direction = this._keys[code];
        if (direction == -1) { /* noop */
            /* FIXME show something? */
            return true;
        }

        var dir = ROT.DIRS[8][direction];
        var xy = this._xy.plus(new App.Rogue.XY(dir[0], dir[1]));

        this._level.setEntity(this, xy); /* FIXME collision detection */
        return true;
    }

    return false; /* unknown key */
};

App.Rogue.Player.prototype.getSpeed = function() {
    return this._speed;
};

App.Rogue.Player.prototype.damage = function(damage) {
    this._hp -= damage;
    if (this._hp <= 0) { this.die(); }
};

App.Rogue.Player.prototype.setPosition = function(xy, level) {

    /* came to a currently active level; add self to the scheduler */
    if (level != this._level && level == App.Rogue.Game.level) {
        App.Rogue.Game.scheduler.add(this, true);
    }
    this._xy = xy;
    this._level = level;
    return this;
};

App.Rogue.Player.prototype.getVisual = function() {
    return this._visual;
};

App.Rogue.Player.prototype.getXY = function() {
    return this._xy;
};

App.Rogue.Player.prototype.getLevel = function() {
    return this._level;
};

// Being Code.
App.Rogue.Being = function(visual) {
    App.Rogue.Entity.call(this, visual);

    this._speed = 100;
    this._hp = 10;
};

/**
 * Called by the Scheduler
 */
App.Rogue.Being.prototype.getSpeed = function() {
    return this._speed;
};

App.Rogue.Being.prototype.damage = function(damage) {
    this._hp -= damage;
    if (this._hp <= 0) { this.die(); }
};

App.Rogue.Being.prototype.act = function() {
    console.log("Being:act() called");
    /* FIXME */
};

App.Rogue.Being.prototype.die = function() {
    App.Rogue.Game.scheduler.remove(this);
};

App.Rogue.Being.prototype.setPosition = function(xy, level) {
    console.log("App.Rogue.Being.setPosition: called:");
    console.log(xy);
    console.log("incoming level:");
    console.log(level);
    console.log("stored level:");
    console.log(this._level);

    /* came to a currently active level; add self to the scheduler */
    if (level != this._level && level == App.Rogue.Game.level) {
        App.Rogue.Game.scheduler.add(this, true);
    }
    this._xy = xy;
    this._level = level;
    return this;
};

// Entity Code
App.Rogue.Entity = function(visual) {
    this._visual = visual;
    this._xy = null;
    this._level = null;
};

App.Rogue.Entity.prototype.getVisual = function() {
    return this._visual;
};

App.Rogue.Entity.prototype.getXY = function() {
    return this._xy;
};

App.Rogue.Entity.prototype.getLevel = function() {
    return this._level;
};

App.Rogue.Entity.prototype.setPosition = function(xy, level) {
    console.log("App.Rogue.Entity.setPosition: called");
    this._xy = xy;
    this._level = level;
    return this;
};

// Inheritance
//App.Rogue.Being = $.extend(App.Rogue.Entity, App.Rogue.Being);
//App.Rogue.Player.prototype = $.extend(App.Rogue.Entity.prototype, App.Rogue.Being.prototype, App.Rogue.Player.prototype);
//App.Rogue.Being.prototype = $.extend(App.Rogue.Entity.prototype, App.Rogue.Being.prototype);
//App.Rogue.Player = $.extend(App.Rogue.Being, App.Rogue.Player);


//App.Rogue.Player.extend(App.Rogue.Being);
//App.Rogue.Being.extend(App.Rogue.Entity);
