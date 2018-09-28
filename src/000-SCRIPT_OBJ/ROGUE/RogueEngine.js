App = App || { Data: { }, Entity: { } };
App.Rogue = App.Rogue || { };


App.Rogue.Engine = new function() {

    //Internal Variables
    this._scheduler = null;
    this._engine = null;
    this._player = null;
    this._level = null;
    this._display = null;
    this._textBuffer = null;
    this._sideBar = null;
    this._element = null;

    this.LoadScene = function(Player, Element) {
        this._element = Element;
        this._player = new App.Rogue.Player(Player);
        this._scheduler = new ROT.Scheduler.Speed();
        this._engine = new ROT.Engine(this._scheduler);
        this._display = new ROT.Display( {width: 100, height:40, fontSize:12} );
        this._textBuffer = new App.Rogue.TextBuffer(this._display);
        this._sideBar = new App.Rogue.Sidebar(this._display);
        this._player = new App.Rogue.Player();

        var level =  this._genLevel();
        var size = level.getSize();

        this._switchLevel(level);

        this._level.setEntity(this._player, this._level.getEntrance());
    };

    this.DrawUI = function(Player) {
        if (typeof Player !== 'undefined') this._player = new App.Rogue.Player(Player);
        $(document).one(":passageend", this._DrawUICB.bind(this));
    };

    this.draw = function(xy) {
        var entity = this._level.getEntityAt(xy);
        var visual = entity.getVisual();
        this._display.draw(xy.x, xy.y, visual.ch, visual.fg, visual.bg);
    };

    this.over = function() {
        this._engine.lock();
        /* FIXME show something */
    };

    this._genLevel = function() {
        var level = new App.Rogue.Level();
        level.generateMap(80, 40);
        level.fillBorders(80, 40);
        level.genEntrance();
        level.genExit();
        return level;
    };

    this._switchLevel = function(level) {
        this._scheduler.clear();

        this._level = level;
        var size = this._level.getSize();

        var bufferSize = 3;
        this._display.setOptions({width:size.x+20, height:size.y + bufferSize});
        //Side status panel

        this._sideBar.configure({
           display: this._display,
            position: new App.Rogue.XY(0, 0),
            size: new App.Rogue.XY(20, size.y + bufferSize)
        });

        this._sideBar.clear();

        //Bottom chat window
        this._textBuffer.configure({
            display: this._display,
            position: new App.Rogue.XY(0, size.y),
            size: new App.Rogue.XY(size.x, bufferSize)
        });

        this._textBuffer.clear();

        var xy = new App.Rogue.XY();
        var parts = "";
        var key = "";
        // Draw walls.
        var cells = this._level.getWalls();
        for (key in cells)
        {
            if (cells.hasOwnProperty(key)) {
                parts = key.split(",");
                xy.x = parseInt(parts[0]);
                xy.y = parseInt(parts[1]);
                this.draw(xy);
            }
        }

        // Draw open spaces.
        cells = this._level.getFreeCells();
        for (key in cells)
        {
            if (cells.hasOwnProperty(key)) {
                parts = key.split(",");
                xy.x = parseInt(parts[0]);
                xy.y = parseInt(parts[1]);
                this.draw(xy);
            }
        }

        // Draw borders.

        cells = this._level.getBorders();
        for (key in cells)
        {
            if (cells.hasOwnProperty(key)) {
                parts = key.split(",");
                xy.x = parseInt(parts[0]);
                xy.y = parseInt(parts[1]);
                this.draw(xy);
            }
        }

        /* add new beings to the scheduler */
        var beings = this._level.getBeings();
        for (var p in beings) {
            if (!beings.hasOwnProperty(p)) continue;
            this._scheduler.add(beings[p], true);
        }
    };

    /** CALL BACKS **/

    this._DrawUICB = function() {
        $(this._element).append(this._display.getContainer());
        this._engine.start();
    }

};


