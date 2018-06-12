App.Rogue = App.Rogue || { };

App.Rogue.Being = function(visual) {

    this._speed = 100;
    this._hp = 10;

    this.getSpeed = function() {
        return this._speed;
    };

    this.damage = function(damage) {
        this._hp -= damage;
        if (this._hp <= 0) { this.die(); }
    };

    this.act = function() {
        console.log("Being:act() called");
        /* FIXME: Add some stuff to do!??! */
    };

    this.die = function() {
        App.Rogue.Engine._scheduler.remove(this);
    };

    this.setPosition = function(xy, level) {
        console.log("App.Rogue.Being.setPosition: called:");
        console.log(xy);
        console.log("incoming level:");
        console.log(level);
        console.log("stored level:");
        console.log(this._level);

        /* came to a currently active level; add self to the scheduler */
        if (level != this._level && level == App.Rogue.Engine._level) {
            App.Rogue.Engine._scheduler.add(this, true);
        }
        this._xy = xy;
        this._level = level;
        return this;
    };

};

