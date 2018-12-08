const X_FORCE = 2;

class Player extends Entity {
    constructor(xsize, ysize, xpos, ypos, frames) {
        super(xsize, ysize, xpos, ypos, frames, 1);
        // Player z-axis is 1.

        // TODO: Player atributes
        this.health = 100;

        this.inputController = ev => {
            // For x-axis: true = RIGHT; false = LEFT
            if (ev.type === 'touchstart') {
                const input_right = ev.touches[0].clientX > GLOBAL.X_REGION;
                const input_top = ev.touches[0].clientY < GLOBAL.Y_REGION

                if (input_right) {
                    this.xspeed = X_FORCE;
                } else {
                    this.xspeed = -X_FORCE;
                }
            } else {
                // On touch release stop all movement.
                this.stopMovement();
            }

            console.log('Player data:', this.xpos, this.ypos, this.xspeed, this.yspeed);

        }
    }

}