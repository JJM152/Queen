App = App || { Data: { }, Entity: { } };
App.Rogue = App.Rogue || { };

App.Rogue.TextBuffer = function() {
    this._data = [];
    this._options = {
        display: null,
        position: new App.Rogue.XY(),
        size: new App.Rogue.XY(),
        lines: 5,
    };

    this.configure = function(options) {
        for (var p in options) { this._options[p] = options[p]; }
    };

    this.clear = function() {
        this._data = [];
    };

    this._chunkString = function(str, length) {
        return str.match(new RegExp('.{1,' + length + '}', 'g'));
    };

    this.write = function(text) {
        //Chunk long messages into buffer sized segments.
        var s = this._chunkString(text, this._options.size.x);
        console.log(s);
        this._data = this._data.concat(s);
        // Only keep 'lines' length
        if (this._data.length >= this._options.lines) {
            this._data.splice(0, this._data.length - this._options.lines);
        }
        //this._data.push(text);
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

        var text = this._data.join("\n");
        d.drawText(pos.x, pos.y, text, size.x);
    };

};


