App = App || { Data: { }, Entity: { } };
App.Rogue = App.Rogue || { };

App.Rogue.Level = function() {
    /* FIXME data structure for storing entities */
    this._beings = {};

    /* FIXME map data */
    this._size = new App.Rogue.XY(80, 40);
    this._map = {};
    this._walls = {};
    this._freeCells = { };
    this._borders = { };
    this._entrance = { };
    this._exit = { };

    this._empty = new App.Rogue.Entity({ch:".", fg:"#888", bg:null});
    
    this.getSize = function() {
        return this._size;
    };

    /**
     * Create a Cave map.
     * 0 = free space, 1 = wall;
     * @param {number} w width (x axis)
     * @param {number} h height (y axis)
     */
    
    this.generateMap = function(w, h) {

        this._map = new ROT.Map.Cellular(w, h, { connected: true });
        this._map.randomize(0.5);

        /* make a few generations */
        for (var i=0; i<4; i++) this._map.create();
        
        this._map.connect(this._createCB.bind(this), 1, this._connectCB.bind(this));
    };
    
    this._createCB = function(x,y,v) {
        var xy = new App.Rogue.XY(x, y);
        if (v) {
            this._freeCells[xy] = new App.Rogue.Entity( { ch:null, fg:null, bg:null });
        } else {
            this._walls[xy] = new App.Rogue.Entity( { ch:'.', fg:"#888", bg:null });
        }
    };
    this._connectCB = function( from, to) {
        console.log("from="+from+", to="+to);
        //this._cells[from] = new App.Rogue.Entity( { ch:"X", fg:"#777", bg:null });
        //this._cells[to] = new App.Rogue.Entity( { ch:"O", fg:"#777", bg:null });
    };
    
    this.getWalls = function() { return this._walls; };
    this.getFreeCells = function() { return this._freeCells; };
    this.getBorders = function() { return this._borders; };

    /**
     * Fill in the borders of the map.
     * Generate an entrance and save it.
     * @param {number} w width, x axis
     * @param {number} h height, y axis
     */
    this.fillBorders = function(w, h) {

        var key = {};
        for (var i = 0; i < w; i++ ) {
            // Top of map.
            key = new App.Rogue.XY(i, 0);
            if (typeof this._freeCells[key] !== 'undefined') delete this._freeCells[key];
            if (typeof this._walls[key] !== 'undefined') delete this._walls[key];
            this._borders[key] = new App.Rogue.Entity( {ch:'#', fg:"white", bg:null });

            // Bottom of map.
            key = new App.Rogue.XY(i, h-1);
            if (typeof this._freeCells[key] !== 'undefined') delete this._freeCells[key];
            if (typeof this._walls[key] !== 'undefined') delete this._walls[key];
            this._borders[key] = new App.Rogue.Entity( {ch:'#', fg:"white", bg:null });
        }

        for( i = 0; i < h; i++) {
            // Left of map.
            key = new App.Rogue.XY(0, i);
            if (typeof this._freeCells[key] !== 'undefined') delete this._freeCells[key];
            if (typeof this._walls[key] !== 'undefined') delete this._walls[key];
            this._borders[key] = new App.Rogue.Entity( {ch:'#', fg:"white", bg:null });

            // Right of map.
            key = new App.Rogue.XY(w-1, i);
            if (typeof this._freeCells[key] !== 'undefined') delete this._freeCells[key];
            if (typeof this._walls[key] !== 'undefined') delete this._walls[key];
            this._borders[key] = new App.Rogue.Entity( {ch:'#', fg:"white", bg:null });
        }
    };
    
    this.genEntrance = function()
    {
        var entrance = Object.keys(this._freeCells)[Math.floor(Math.random() * Object.keys(this._freeCells).length)];
        this._entrance = new App.Rogue.XY();
        this._entrance.setStr(entrance);
        this._freeCells[entrance] = new App.Rogue.Entity({ ch:'O', fg:'#3f3', bg:null})

    };
    
    this.getEntrance = function() { return this._entrance; };
    
    this.setEntity = function(entity, xy) {
        /* FIXME remove from old position, draw */
        if (entity.getLevel() == this) {
            var oldXY = entity.getXY();
            delete this._beings[oldXY];
            if (App.Rogue.Engine._level == this) { App.Rogue.Engine.draw(oldXY); }
        }

        entity.setPosition(xy, this); /* propagate position data to the entity itself */

        /* FIXME set new position, draw */
        this._beings[xy] = entity;
        if (App.Rogue.Engine._level == this) {
            App.Rogue.Engine.draw(xy);
            App.Rogue.Engine._textBuffer.write("An entity moves to " + xy + ".");
        }
    };

    this.getEntityAt = function(xy) {
        return this._beings[xy] || this._walls[xy] || this._freeCells[xy] || this._borders[xy];
    };

    this.getBeings = function() {
        /* FIXME list of all beings */
        return this._beings;
    };
};