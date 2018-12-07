console.log('up an running...');

/**
 * Global scope variable declaration
 */

let GLOBAL = {
    // Global variables
    CANVAS_WIDTH: 144,
    CANVAS_HEIGHT: 256,
}

/**
 * Function declaration
 */

function loadImage(url) {
    // Given an img url returns an Image() object with url as src
    return new Promise(resolve => {
        const img = new Image();
        img.addEventListener('load', () => {
            resolve(img)
        });
        img.src = url;
    });
}

class Background extends Entity {
    constructor(xsize, ysize, xpos, ypos) {
        super(xsize, ysize, xpos, ypos);
    }
}

// Initalize canvas
const canvas = document.getElementById('canvas');
canvas.setAttribute('width', GLOBAL.CANVAS_WIDTH);
canvas.setAttribute('height', GLOBAL.CANVAS_HEIGHT);

// Initialize 2D context
const context = canvas.getContext('2d');

// Initalize Draw Controller
const drawController = new DrawController(context);

// Initialize entities
const background = new Background(GLOBAL.CANVAS_WIDTH, GLOBAL.CANVAS_HEIGHT, 0, 0);


// Game entry point
window.onload = () => {
    loadImage('src/img/bg.png').then(
        img => {
            // Set drawController image resource
            drawController.img = img;
            game();
        }
    )

}

// Main game loop
function game() {
    drawController.clearScreen();

    drawController.drawAsset(background.assets.debug_sprite, 0, 0);

    // Game loop
    // window.requestAnimationFrame(game);
}