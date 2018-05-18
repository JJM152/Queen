App = App || { Data: { }, Entity: { } };
App.Rogue = App.Rogue || { };

App.Rogue.Game = {
    scheduler: null,
    engine: null,
    player: null,
    level: null,
    display: null,
    textBuffer: null,
    element: null,

    init: function(element) {
        this.element = element;
        console.log("Roguelike Game Init Called");
        $(document).one(":passageend", this.handleEvent);
    },

    handleEvent: function(e) {
        console.log("Initializing Roguelike game...");
        switch (e.type) {
            case ":passageend":
                App.Rogue.Game.scheduler = new ROT.Scheduler.Speed();
                App.Rogue.Game.engine = new ROT.Engine(App.Rogue.Game.scheduler);
                App.Rogue.Game.display = new ROT.Display( {width: 80, height:40, fontSize:12} );
                App.Rogue.Game.textBuffer = new App.Rogue.TextBuffer(App.Rogue.Game.display);

                $(App.Rogue.Game.element).append(App.Rogue.Game.display.getContainer());

                App.Rogue.Game.player = new App.Rogue.Player();

                var level =  App.Rogue.Game._genLevel();
                var size = level.getSize();
                App.Rogue.Game._switchLevel(level);
                App.Rogue.Game.level.setEntity(App.Rogue.Game.player, App.Rogue.Game.level.getEntrance());

                App.Rogue.Game.engine.start();
                break;
        }
    },

    _genLevel: function() {
        var level = new App.Rogue.Level();
        level.generateMap(80, 40);
        level.fillBorders(80, 40);
        level.genEntrance();
        return level;
    },

    draw: function(xy) {
        var entity = this.level.getEntityAt(xy);
        var visual = entity.getVisual();
        this.display.draw(xy.x, xy.y, visual.ch, visual.fg, visual.bg);
    },

    over: function() {
        this.engine.lock();
        /* FIXME show something */
    },

    _switchLevel: function(level) {
        /* remove old beings from the scheduler */
        this.scheduler.clear();

        this.level = level;
        var size = this.level.getSize();

        var bufferSize = 3;
        this.display.setOptions({width:size.x, height:size.y + bufferSize});
        this.textBuffer.configure({
            display: this.display,
            position: new App.Rogue.XY(0, size.y),
            size: new App.Rogue.XY(size.x, bufferSize)
        });
        this.textBuffer.clear();

        var xy = new App.Rogue.XY();
        var parts = "";
        var key = "";
        // Draw walls.
        var cells = this.level.getWalls();
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
        cells = this.level.getFreeCells();
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
        cells = this.level.getBorders();
        for (key in cells)
        {
            if (cells.hasOwnProperty(key)) {
                parts = key.split(",");
                xy.x = parseInt(parts[0]);
                xy.y = parseInt(parts[1]);
                this.draw(xy);
            }
        }
        /* FIXME draw a level */
/*        var xy = new App.Rogue.XY();
        for (var i=0;i<size.x;i++) {
            xy.x = i;
            for (var j=0;j<size.y;j++) {
                xy.y = j;
                this.draw(xy);
            }
        }*/

        /* add new beings to the scheduler */
        var beings = this.level.getBeings();
        for (var p in beings) {
            this.scheduler.add(beings[p], true);
        }
    }
};

