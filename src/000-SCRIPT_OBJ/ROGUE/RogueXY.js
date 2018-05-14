App = App || { Data: { }, Entity: { } };
App.Rogue = App.Rogue || { };

App.Rogue.XY = function(x, y) {
    this.x = x || 0;
    this.y = y || 0;
};

App.Rogue.XY.prototype.toString = function() {
    return this.x+","+this.y;
};

App.Rogue.XY.prototype.is = function(xy) {
    return (this.x==xy.x && this.y==xy.y);
};

App.Rogue.XY.prototype.dist8 = function(xy) {
    var dx = xy.x-this.x;
    var dy = xy.y-this.y;
    return Math.max(Math.abs(dx), Math.abs(dy));
};

App.Rogue.XY.prototype.dist4 = function(xy) {
    var dx = xy.x-this.x;
    var dy = xy.y-this.y;
    return Math.abs(dx) + Math.abs(dy);
};

App.Rogue.XY.prototype.dist = function(xy) {
    var dx = xy.x-this.x;
    var dy = xy.y-this.y;
    return Math.sqrt(dx*dx+dy*dy);
};

App.Rogue.XY.prototype.plus = function(xy) {
    return new App.Rogue.XY(this.x+xy.x, this.y+xy.y);
};

App.Rogue.XY.prototype.minus = function(xy) {
    return new App.Rogue.XY(this.x-xy.x, this.y-xy.y);
};
