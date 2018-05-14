App = App || { Data: { }, Entity: { } };
App.Rogue = App.Rogue || { };

App.Rogue.Level = function() {
    /* FIXME data structure for storing entities */
    this._beings = {};

    /* FIXME map data */
    this._size = new App.Rogue.XY(80, 25);
    this._map = {};

    this._empty = new App.Rogue.Entity({ch:".", fg:"#888", bg:null});
};

App.Rogue.Level.prototype.getSize = function() {
    return this._size;
};

App.Rogue.Level.prototype.setEntity = function(entity, xy) {
    /* FIXME remove from old position, draw */
    if (entity.getLevel() == this) {
        var oldXY = entity.getXY();
        delete this._beings[oldXY];
        if (App.Rogue.Game.level == this) { App.Rogue.Game.draw(oldXY); }
    }

    entity.setPosition(xy, this); /* propagate position data to the entity itself */

    /* FIXME set new position, draw */
    this._beings[xy] = entity;
    if (App.Rogue.Game.level == this) {
        App.Rogue.Game.draw(xy);
        App.Rogue.Game.textBuffer.write("An entity moves to " + xy + ".");
    }
};

App.Rogue.Level.prototype.getEntityAt = function(xy) {
    return this._beings[xy] || this._map[xy] || this._empty;
};

App.Rogue.Level.prototype.getBeings = function() {
    /* FIXME list of all beings */
    return this._beings;
};
