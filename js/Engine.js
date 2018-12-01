//Generic Game Engine

//Version                0.0.3
//Author                 Master Nyborg
//Start Date             (11/07/2018)
//Current Version Date   (11/25/2018)

//TODO
//Laundry

///////////////////
//Default variables
///////////////////
const debug = true;
var canvas = document.createElement("canvas");//The main viewport of our game
var ctx = canvas.getContext("2d");//Set game to 2D
if (typeof ctx.filter === "undefined") {
    alert("Sorry, the browser doesn't support Context2D filters. Your image quality may suffer. For best experience please play in Chrome Browser0");
}
canvas.width = 512;
canvas.height = 480;
var tileSize = 32;
document.body.appendChild(canvas);//add viewport to window

var backgroundBuffer = document.createElement("canvas");//create a buffer for rendering and storing the background behind the scenes
var bbctx = backgroundBuffer.getContext("2d");//set to 2d
var backgroundBufferedTiles = 2;
backgroundBuffer.width = canvas.width+(tileSize*backgroundBufferedTiles);//make buffer the size of canvas plus an extra square of 'buffer'
backgroundBuffer.height = canvas.height+(tileSize*backgroundBufferedTiles);
var prevStateCoordX;
var prevStateCoordY;
var prevGameState;
if(debug) { }//document.body.appendChild(backgroundBuffer); }

var stateCoordX = 0; //
var stateCoordY = 0; //top left coordinate of view in level
var stateSizeX = 0; //
var stateSizeY = 0; //entire size of current level


var scrollBuffer = 125;
var gameName = "Test Game";
var gameState = "loading";

var click = false;
var swipe = false;
var hoverX;
var hoverY;
var initialX;
var initialY;


canvas.addEventListener('mousedown', function (e) {//When user presses down on mouse:
    click = false;//set variables to default state
    swipe = true;
    var pos = getMousePos(canvas, e);
    hoverX = Math.floor(getBackgroundCoordX(pos.x));
    hoverY = Math.floor(getBackgroundCoordY(pos.y));
    initialX = Math.floor(getBackgroundCoordX(pos.x));
    initialY = Math.floor(getBackgroundCoordY(pos.y));
});

canvas.addEventListener('mousemove', function (e) {
    var pos = getMousePos(canvas, e);
    if (swipe) {
        click = false;
        hoverX = Math.floor(getBackgroundCoordX(pos.x));
        hoverY = Math.floor(getBackgroundCoordY(pos.y));
    }
});

canvas.addEventListener('mouseup', function (e) {
    swipe = false;
    if ((initialX < hoverX + 50 && initialX > hoverX - 50) && (initialY < hoverY + 50 && initialY > hoverY - 50)) { click = true; }
});

canvas.addEventListener('mouseenter', function (e) {
    swipe = false;
});

canvas.addEventListener('touchstart', function (e) {
    if (e.target == canvas) {
        e.preventDefault();
    }
    console.log(e.touches[0].clientX);
    click = false;
    swipe = true;
    var pos = getMousePos(canvas, e);
    hoverX = Math.floor(e.touches[0].clientX);
    hoverY = Math.floor(e.touches[0].clientY);
    initialX = Math.floor(e.touches[0].clientX);
    initialY = Math.floor(e.touches[0].clientY);
}, false);

canvas.addEventListener('touchmove', function (e) {
    if (swipe) {
        hoverX = Math.floor(e.touches[0].clientX);
        hoverY = Math.floor(e.touches[0].clientY);
    }
}, false);

canvas.addEventListener('touchend', function (e) {
    swipe = false;
    if ((initialX == hoverX) && (initialY == hoverY)) { click = true; }
}, false);

var requestAnimFrame = (function () {// See https://hacks.mozilla.org/2011/08/animating-with-javascript-from-setinterval-to-requestanimationframe/
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 1000 / 60);
        };
})();

var fps; //Current frame time (formatted to fps)
var lastTime;
var pressedKeys = {}; //List of every press key this update
var pressHistory = ""; //String containing the last x amount of key inputs
var pressHistorySize = 100; //default size of pressHistory

// The main game loop
var lastTime;
function main() {
    var now = Date.now();
    var dt = (now - lastTime) / 1000.0;
    update(dt);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    render();
    lastTime = now;
    requestAnimFrame(main);
};

function init() {
    ctx.drawImage(resources.get('img/loading.png'), 0, 0);
    lastTime = Date.now();
    gameState = "ingame";
    ctx.imageSmoothingEnabled = false;
    ctx.webkitImageSmoothingEnabled = false;
    ctx.mozImageSmoothingEnabled = false;
    main();
}

function update(dt) {
    gameTime += dt;
    handleInput(dt);
    updateEntities(dt);//animate sprites based on time + input
    checkCollisions();
};

function collides(x, y, r, b, x2, y2, r2, b2) {
    return !(r <= x2 || x > r2 ||
        b <= y2 || y > b2);
}

function boxCollides(pos, size, pos2, size2) {
    return collides(pos[0], pos[1],
        pos[0] + size[0], pos[1] + size[1],
        pos2[0], pos2[1],
        pos2[0] + size2[0], pos2[1] + size2[1]);
}

function collision(obj1, obj2) {
    return boxCollides(obj1.pos, obj1.sprite.size, obj2.pos, obj2.sprite.size);
}

function renderEntities(list) {
    for (var i = 0; i < list.length; i++) {
        renderEntity(list[i]);
    }
}

function renderEntity(entity) {
    ctx.save();
    ctx.translate(entity.pos[0].toFixed(), entity.pos[1].toFixed());
    entity.sprite.render(ctx);
    ctx.restore();
}

function randNum(min, max) { //returns a random integer between min and max
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function draw(src) {
    ctx.drawImage(resources.get('img/background.png'), 0, 0);
}

function getMousePos(thiscanvas, evt) {
    var rect = thiscanvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}

function getCanvasCoord(backgroundX, backgroundY){
    return [backgroundX-stateCoordX, backgroundY-stateCoordY];
}

function getCanvasCoordX(backgroundX){
    return backgroundX-stateCoordX;
}

function getCanvasCoordY(backgroundY){
    return backgroundY-stateCoordY;
}

function getBackgroundCoord(canvasX, canvasY){
    return [canvasX+stateCoordX, canvasY+stateCoordY];
}

function getBackgroundCoordX(canvasX){
    return canvasX+stateCoordX;
}

function getBackgroundCoordY(canvasY){
    return canvasY+stateCoordY;
}