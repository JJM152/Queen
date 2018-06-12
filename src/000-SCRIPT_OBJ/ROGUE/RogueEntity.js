App.Rogue = App.Rogue || { };

// Entity Code
App.Rogue.Entity = function(visual) {
    this._visual = visual;
    this._xy = null;
    this._level = null;

    this.getVisual = function() {
        return this._visual;
    };
    this.getXY = function() {
        return this._xy;
    };

    this.getLevel = function() {
        return this._level;
    };

    this.setPosition = function(xy, level) {
        console.log("App.Rogue.Entity.setPosition: called");
        this._xy = xy;
        this._level = level;
        return this;
    };
};

