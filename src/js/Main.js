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

const coin = new AnimatedEntity(GLOBAL.CANVAS_WIDTH, GLOBAL.CANVAS_WIDTH, 0, 0, 6);
coin.current_asset = 'spinning'
coin.assets['spinning'] = [
    [0, 0, 9, 10],
    [9, 0, 9, 10],
    [18, 0, 9, 10],
    [27, 0, 9, 10],
    [36, 0, 9, 10],
    [45, 0, 9, 10],
]

// Game entry point
window.onload = () => {
    loadImage('src/img/coin.png').then(
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

    // drawController.drawAsset(background.getCurrentAsset(), 0, 0);
    drawController.drawAsset(coin.getCurrentAsset(), 0, 0)
    coin.updateAnimation();
    // Game loop
    window.requestAnimationFrame(game);
}