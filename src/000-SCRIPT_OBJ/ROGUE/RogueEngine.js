App.Rogue = App.Rogue || { };


App.Rogue.Engine = new function() {

    //Internal Variables
    this._scheduler = null;
    this._engine = null;
    /** @type {App.Rogue.Player} */
    this._player = null;
    /** @type {App.Rogue.Level} */
    this._level = null;
    this._display = null;
    this._textBuffer = null;
    this._sideBar = null;
    this._element = null;
    this._passage = null;
    this._depth = 1;
    this._maxDepth = 100;
    this._lastDrawnCells = [ ];
    this._currentDrawnCells = [ ];
    this._title = "Dungeon";

    this.LoadScene = function(Element, ExitPassage, Depth) {
        this._element = Element;
        this._player = new App.Rogue.Player( { ch: "@", fg: "hotpink", bg: null} );
        this._title = "Abamond Caves";
        this._passage = ExitPassage;
        this._scheduler = new ROT.Scheduler.Speed();
        this._engine = new ROT.Engine(this._scheduler);
        this._display = new ROT.Display( {width: 100, height:40, fontSize:12} );
        this._textBuffer = new App.Rogue.TextBuffer();
        this._sideBar = new App.Rogue.Sidebar();
        this._depth = Depth;
        this._maxDepth = 100;
        this._lastDrawnCells = [ ];

        var level =  this._genLevel(this._depth);

        this._switchLevel(level);

    };

    /** @returns {number} */
    this.GetDepth = function() { return this._depth; };

    this.Descend = function() {
        this._depth += 1;
        if (setup.player.JobFlags.hasOwnProperty("ABAMOND_CAVE_LEVEL")) {
            if ( setup.player.JobFlags["ABAMOND_CAVE_LEVEL"] < this._depth) setup.player.JobFlags["ABAMOND_CAVE_LEVEL"] = this._depth;
        } else {
            setup.player.JobFlags["ABAMOND_CAVE_LEVEL"] = this._depth;
        }
        this._lastDrawnCells = [ ]; // Clear buffer
        var level = this._genLevel(this._depth);
        this._switchLevel(level);
    };

    this.Ascend = function() {
        console.log("Current depth:"+this._depth);
        this._depth -= 1;
        console.log("Moving to depth:"+this._depth);
        this._lastDrawnCells = [ ];
        if (this._depth <= 0) {
            console.log("Exiting dungeon...");
            setup.player.Phase = 3;
            SugarCube.State.display(this._passage);
        } else {
            var level = this._genLevel(this._depth);
            this._switchLevel(level, true);

        }
    };

    this.DrawUI = function() {
        $(document).one(":passageend", this._DrawUICB.bind(this));
    };

    this.draw = function(xy) {
        var entity = this._level.getEntityAt(xy);
        var visual = entity.Visual;
        this._display.draw(xy.x, xy.y, visual.ch, visual.fg, visual.bg);
    };

    this.redraw = function(xy) {
        this._lastDrawnCells = this._currentDrawnCells;
        this._drawWithLight(xy);
    };

    this.over = function() {
        this._engine.lock();
        /* FIXME show something */
    };

    this._genLevel = function(depth) {
        var level = new App.Rogue.Level(depth);
        level.generateMap(80, 40);
        level.fillBorders(80, 40);
        level.genEntrance();
        level.genExit();
        level.genTreasure();
        level.genMonsters();
        return level;
    };

    this.RefreshStatus = function() {
        this._sideBar.clear();
        this._sideBar.flush();
        // Draw GUI.
        this._sideBar.Title(this._title);
        this._sideBar.Level("Level: "+this._depth + "/" + this._maxDepth);
        this._sideBar.Torches("Torches: "+ this._player.Torches);
        this._sideBar.Shovels("Shovels: "+ this._player.Shovels);
        this._sideBar.Help();
    };

    this._switchLevel = function(level, opt) {
        this._scheduler.clear();
        this._level = level;

        if (typeof opt !== 'undefined') {
            this._level.setEntity(this._player, this._level.getExit());
        } else {
            this._level.setEntity(this._player, this._level.getEntrance());
        }
        var size = this._level.getSize();

        var bufferSize = 3;
        this._display.setOptions({width:size.x+20, height:size.y + bufferSize});
        //Side status panel

        this._sideBar.configure({
            display: this._display,
            position: new App.Rogue.XY(size.x+1, 0),
            size: new App.Rogue.XY(20, size.y + bufferSize)
        });

        //Bottom chat window
        this._textBuffer.configure({
            display: this._display,
            position: new App.Rogue.XY(0, size.y),
            size: new App.Rogue.XY(size.x, bufferSize)
        });

        this._textBuffer.clear();

        this._display.clear();
        this._drawWithLight(this._player.XY);

        this.RefreshStatus();

        /* add new beings to the scheduler */
        var beings = this._level.getBeings();
        for (var p in beings) {
            if (!beings.hasOwnProperty(p)) continue;
            this._scheduler.add(beings[p], true);
        }
    };

    this._drawWithLight = function (pxy) {
        /** light level
         * @type {number} */
        const LL = this._player._lightLevel;
        this._currentDrawnCells = this._level.cellsAtRadius(pxy.x, pxy.y, LL, false);

        /** @type {App.Rogue.XY[]} */
        const currentDrawnCellsXY = this._currentDrawnCells.map(function (s) {
            let xy = new App.Rogue.XY();
            xy.setStr(s);
            return xy;
        });

        let walls = new Array(LL * 2 + 1);
        let visibilityMap = new Array(LL * 2 + 1);
        for (let i = 0; i < walls.length; ++i) {
            walls[i] = new Array(LL * 2 + 1);
            walls[i].fill(0); // starting with no walls
            visibilityMap[i] = new Array(LL * 2 + 1);
            visibilityMap[i].fill(false); // everything is invisible
        }

        const x0 = pxy.x - LL;
        const y0 = pxy.y - LL;

        const wallXY = this._level.getWalls();
        for (let xy of currentDrawnCellsXY) {
            if (wallXY[xy]) {
                walls[xy.x - x0][xy.y - y0] = 1; // put a wall
            }
        }

        // ray tracing to detect visible walls
        function traceLine(i, j) { // i and j are orts
            for (let l = 1; l <= LL; ++l) {
                const x = Math.round(LL + l * i);
                const y = Math.round(LL + l * j);
                visibilityMap[x][y] = true;
                if (walls[x][y] === 1) { // wall found
                    break;
                }
            }
        }

        // player's position is always visible
        visibilityMap[LL][LL] = 1;

        traceLine(1, 0);
        traceLine(-1, 0);
        traceLine(0, 1);
        traceLine(0, -1);
        for (let t = 1; t <= LL; ++t) {
            let vX = LL;
            let vY = t;
            const vL = Math.sqrt(vX * vX + vY * vY);
            const iX = vX / vL;
            const iY = vY / vL;

            traceLine(iX, iY);
            traceLine(-iX, iY);
            traceLine(iX, -iY);
            traceLine(-iX, -iY);

            traceLine(iY, iX);
            traceLine(-iY, iX);
            traceLine(iY, -iX);
            traceLine(-iY, -iX);
        }

        for (const xy of currentDrawnCellsXY) {
            if (visibilityMap[xy.x - x0][xy.y - y0]) {
                this.draw(xy);
            } else {
                this._display.draw(xy.x, xy.y, null, null, null);
            }
        }

        if (this._lastDrawnCells.length > 0 ) {
            var mapped = this._mapCells(this._currentDrawnCells, this._lastDrawnCells);
            this._drawBlank(mapped);
        }
    };

    this._mapCells = function( dest, source ) {
        return source.filter(function(key) { return dest.includes(key) == false; });
    };

    this._drawBlank = function(cells)
    {
        for (var i = 0; i < cells.length; i++) {
            var xy = new App.Rogue.XY();
            xy.setStr(cells[i]);
            this._display.draw(xy.x, xy.y, null, null, null);
        }
    };
    /** CALL BACKS **/

    this._DrawUICB = function() {
        $(this._element).append(this._display.getContainer());
        this._engine.start();
    }

};
