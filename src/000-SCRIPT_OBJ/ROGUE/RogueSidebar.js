App = App || { Data: { }, Entity: { } };
App.Rogue = App.Rogue || { };

App.Rogue.Sidebar = function() {
    this._data = [];
    this._options = {
        display: null,
        position: new App.Rogue.XY(),
        size: new App.Rogue.XY()
    };

    this.configure = function(options) {
        for (var p in options) { this._options[p] = options[p]; }
    };

    this.clear = function() {
        this._data = [];
    };

    this.write = function(text) {
        this._data.push(text);
    };

    this.Title = function(text) {
        var o = this._options;
        var d = o.display;
        var pos = o.position;
        var size = o.size;

        d.drawText(pos.x, pos.y, text, size.x);
    };

    this.Level = function(text) {
        var o = this._options;
        var d = o.display;
        var pos = o.position;
        var size = o.size;

        d.drawText(pos.x, pos.y+1, text, size.x);
    };

    this.Torches = function(text) {
        var o = this._options;
        var d = o.display;
        var pos = o.position;
        var size = o.size;

        d.drawText(pos.x, pos.y+3, text, size.x);
    };

    this.Shovels = function(text) {
        var o = this._options;
        var d = o.display;
        var pos = o.position;
        var size = o.size;

        d.drawText(pos.x, pos.y+4, text, size.x);
    };

    this.Help = function()
    {
        var o = this._options;
        var d = o.display;
        var pos = o.position;
        var size = o.size;

        d.drawText(pos.x, pos.y+6, "COMMANDS", size.x);
        d.drawText(pos.x, pos.y+7, "Move = NUMPAD", size.x);
        d.drawText(pos.x, pos.y+8, "Torch = /", size.x);
        d.drawText(pos.x, pos.y+9, "Dig = NUMPAD5", size.x);
        d.drawText(pos.x, pos.y+10, "Up/Down = NUMPAD5", size.x);
    };

    this.flush = function() {
        var o = this._options;
        var d = o.display;
        var pos = o.position;
        var size = o.size;

        /* clear */
        for (var i=0;i<size.x;i++) {
            for (var j=0;j<size.y;j++) {
                d.draw(pos.x+i, pos.y+j);
            }
        }

        var text = this._data.join(" ");
        d.drawText(pos.x, pos.y, text, size.x);
    };

};


