(function () {
    function Sprite(url, pos, size, speed, frames, active = true, scale = 1, dir = 'horizontal', once = false) {
        this.pos = pos;
        this.size = size;
        this.speed = typeof speed === 'number' ? speed : 0;
        this.state = 0;
        this.frames = frames;
        this._index = 0;
        this.url = url;
        this.active = active;
        this.scale = scale;
        this.once = once;
        this.dir = dir;
    };

    Sprite.prototype = {
        update: function (dt) {
            this._index += this.speed * dt;
        },

        render: function (ctx) {
            var frame;

            if (this.speed > 0 && this.active) {
                var max = this.frames[this.state].length;
                var idx = Math.floor(this._index);
                frame = this.frames[this.state][idx % max];

                if (this.once && idx >= max) {
                    this.done = true;
                    return;
                }
            }
            else {
                frame = 0;
            }


            var x = this.pos[0];
            var y = this.pos[1] + (this.state * this.size[1]);

            if (this.dir == 'vertical') {
                y += frame * this.size[1];
            }
            else {
                x += frame * this.size[0];
            }
            ctx.drawImage(resources.get(this.url), x, y, this.size[0], this.size[1], 0-stateCoordX, 0-stateCoordY, this.size[0] * this.scale, this.size[1] * this.scale);
        }
    };

    window.Sprite = Sprite;
})();