/**
 * Handles all the draws.
 */
class DrawController {
    constructor(context) {
        this.context = context;
        this.img = new Image();
    }

    drawAsset(coordinates, xpos, ypos) {
        // Draws given coordinates (x, y, xsize, ysize) in xpos,ypos
        this.context.drawImage(
            this.img,
            coordinates[0], // Source x
            coordinates[1], // Source y
            coordinates[2], // Source width 
            coordinates[3], // Source height
            xpos, // Destination x
            ypos, // Destination y
            coordinates[2], // Destination width
            coordinates[3], // Destination height
        );

        // console.log('Asset drawn');
    }

    drawEntity(entity) {
        this.drawAsset(entity.getCurrentAsset(), entity.xpos, entity.ypos);
    }

    clearScreen() {
        // Wipe all content inside context
        this.context.clearRect(0, 0, GLOBAL.CANVAS_WIDTH, GLOBAL.CANVAS_HEIGHT);
        // console.log('Screen cleared');
    }
}