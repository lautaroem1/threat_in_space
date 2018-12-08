class Entity {
    constructor(xsize, ysize, xpos, ypos, zaxis = -1) {
        this.xsize = xsize;
        this.ysize = ysize;
        this.xpos = xpos;
        this.ypos = ypos;
        this.xspeed = 0;
        this.yspeed = 0;
        this.zaxis = zaxis;
        this.current_asset = 'debug_sprite';
        this.assets = {
            'debug_sprite': [0, 0, GLOBAL.CANVAS_WIDTH, GLOBAL.CANVAS_HEIGHT]
        }
    }

    update() {
        this.xpos += this.xspeed;
        this.ypos += this.yspeed;
    }

    render() {
        console.log('todo_render');
    }

    getCurrentAsset() {
        return this.assets[this.current_asset];
    }

    stopMovement() {
        this.xspeed = 0;
        this.yspeed = 0;
    }
}