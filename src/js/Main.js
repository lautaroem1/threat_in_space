/**
 * Global scope variable declaration
 */

let GLOBAL = {
    // Global variables
    CANVAS_WIDTH: 144,
    CANVAS_HEIGHT: 256,
    X_REGION: window.innerWidth / 2,
    Y_REGION: window.innerHeight / 3,
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

// Initalize canvas
const canvas = document.getElementById('canvas');
canvas.setAttribute('width', GLOBAL.CANVAS_WIDTH);
canvas.setAttribute('height', GLOBAL.CANVAS_HEIGHT);

// Initialize 2D context
const context = canvas.getContext('2d');

// Initalize Draw Controller
const drawController = new DrawController(context);

// Initialize entities
const background = new Background();
const coin = new AnimatedEntity(
    9,
    10,
    50,
    50,
    6
);
coin.current_asset = 'spinning'
coin.assets['spinning'] = [
    [0, 0, 9, 10],
    [9, 0, 9, 10],
    [18, 0, 9, 10],
    [27, 0, 9, 10],
    [36, 0, 9, 10],
    [45, 0, 9, 10],
];
const player = new Player(
    50,
    50,
    0,
    0,
    0
)

document.addEventListener('touchstart', player.inputController);
document.addEventListener('touchend', player.inputController);

// Game entry point
window.onload = () => {
    loadImage('src/img/ship.png').then(
        img => {
            // Set drawController image resource
            drawController.img = img;
            drawController.drawEntity(player);
            game();
        }
    )

}

// Main game loop
function game() {
    drawController.clearScreen();
    player.update();
    drawController.drawEntity(player);
    // Game loop
    window.requestAnimationFrame(game);
}