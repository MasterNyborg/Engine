////////
//TODO//
////////
//toggle grid lines
//set hot key for 'painting' tiles
//export level + header
//import level + header
//load multiple tilesets
//add custom viewport size of canvas and add scrolling (mouse and keys?)


var levelWidth = 16;
var levelHeight = 15;
var tileSize = 32;
var gWidth;
var gHeight;
var canvas = document.createElement("canvas");//The main viewport of our game
var ctx = canvas.getContext("2d");//Set game to 2D
var tileset = [""];


var panel = document.createElement("canvas");
var pctx = panel.getContext("2d");

var toolbar = document.createElement("canvas");
var tctx = toolbar.getContext("2d");

if (typeof ctx.filter === "undefined") {
    alert("Sorry, the browser doesn't support Context2D filters. Your image quality may suffer. For best experience please play in Chrome Browser0");
}
var hoverX;
var hoverY;
var initialX;
var initialY;
var click;
var swipe;

var activeX = -1;
var activeY = -1;

var startScreen = `<div id=theBox style="border-style:outset; border-color:#008CBA; width:40%; margin-left:30%; margin-top:5%;">
<div style="width:90%; margin-left:5%; margin-right:5%;>
<b style="text-align:center; font-weight:900;">Editor Settings</b><br />
<b>How many tiles wide is the level? </b><input id=levelWidth value=${levelWidth} style="width:30%;"></input><br />
<b>How many tiles tall? </b><input id=levelHeight value=${levelHeight} style="width:30%;"></input><br />
<b > What is your tile size(pixels)</b><input id=tileSize value=${tileSize} style="width:30%;"></input><br />
<b>Tileset 1  </b><input id=tileset1 ths=1 type="file" />​<br />
<b>Tileset 2  </b><input id=tileset2 ths=2 type="file" />​<br />
<b>Tileset 3  </b><input id=tileset3 ths=3 type="file" />​<br />
<b>Tileset 4  </b><input id=tileset4 ths=4 type="file" />​<br />
<b>Tileset 5  </b><input id=tileset5 ths=5 type="file" />​<br />
<button id=start style="background-color:#008CBA; color:white; border:none; margin-left:45%; margin-bottom:2%; margin-top:2%;">GO!</button>
</div>
</div>`;


var tiles = [];

init();
function init() {
    $('body').append(startScreen);
    $('#tileset2').toggle();
    $('#tileset3').toggle();
    $('#tileset4').toggle();
    $('#tileset5').toggle();
}

$('body').on('click', '#start', function () {
    if ($('#tileset1').val().length) { tileset = []; tileset.push($('#tileset1').val().replace("C:\\fakepath\\", "")); }
    if ($('#tileset2').val().length) { tileset.push($('#tileset2').val().replace("C:\\fakepath\\", "")); }
    if ($('#tileset3').val().length) { tileset.push($('#tileset3').val().replace("C:\\fakepath\\", "")); }
    if ($('#tileset4').val().length) { tileset.push($('#tileset3').val().replace("C:\\fakepath\\", "")); }
    if ($('#tileset5').val().length) { tileset.push($('#tileset3').val().replace("C:\\fakepath\\", "")); }
    levelWidth = $('#levelWidth').val();
    levelHeight = $('#levelHeight').val();
    tileSize = $('#tileSize').val();
    gWidth = levelWidth * tileSize;
    gHeight = levelHeight * tileSize;
    $('body').empty();
    for (l = 0; l < tileset.length; l++) { resources.load(['img/' + tileset[l]]); }
    if ((tileset[0].length < 1)) { init(); }
    resources.onReady(setup);
});


$('input[type=file]').change(function () {
    var ths = $(this).attr('ths');
    if (ths < 5) {
        ths++;
        $(`input[type=file][ths=${ths}]`).toggle();
    }
})


function setup() {
    canvas.width = levelWidth * tileSize;
    canvas.height = levelHeight * tileSize;
    document.body.appendChild(canvas);
    blankCanvas();
    loadToolbar(tileset[0]);
    //loadTiles();
}

function loadToolbar(src) {
    tctx.imageSmoothingEnabled = false;
    tctx.webkitImageSmoothingEnabled = false;
    tctx.mozImageSmoothingEnabled = false;
    toolbar.width = resources.get('img/' + src).width + (resources.get('img/' + src).width / tileSize) * 5 + 5;
    toolbar.height = resources.get('img/' + src).height + (resources.get('img/' + src).height / tileSize) * 5 + 5;
    for (y = 0; y < resources.get('img/' + src).height / tileSize; y++) {
        for (x = 0; x < resources.get('img/' + src).height / tileSize; x++) {
            tctx.drawImage(resources.get('img/' + src), x * tileSize, y * tileSize, tileSize, tileSize, (x * tileSize) + (x * 5) + 5, (y * tileSize) + (y * 5) + 5, tileSize, tileSize);
        }
    }
    tctx.beginPath();
    tctx.moveTo(0, 0); //top left
    tctx.lineTo(toolbar.width, 0);
    tctx.lineTo(toolbar.width, toolbar.height);
    tctx.lineTo(0, toolbar.height);
    tctx.lineTo(0, 0);
    tctx.stroke();
    $('body').append(`​<br />`);
    $('body').append(toolbar);
}

function loadTiles() {
    newCanvas(tileset[0], 0, 0, tileSize);
    newCanvas(tileset[0], 1, 0, tileSize);
}

function newCanvas(src, x, y, tileSize) {
    var hcanvas = document.createElement("canvas");
    var hctx = hcanvas.getContext("2d");
    hcanvas.width = hcanvas.height = tileSize;
    //hctx.drawImage(resources.get('img/'+tileset[0]), 0, 0, tileSize, tileSize); //hilariously draws the whole tileset to the canvas tile. Save for icons later
    hctx.drawImage(resources.get('img/' + src), x * tileSize, y * tileSize, tileSize, tileSize, 0, 0, tileSize, tileSize);
    tiles.push(hcanvas);
    if ($('canvas').length < 2) { $('body').append(`​<br />`); }
    $('body').append(tiles[tiles.length - 1]);
}

$('body').on('click', 'canvas', function (e) {
    if ($(this)[0] != $('canvas')[0]) {
        if (activeX != -1) {boxAround('#ffffff', activeX, activeY, tileSize); }
        const pos = {
            x: e.offsetX - (5 * e.offsetX / tileSize) - 7,
            y: e.offsetY - (5 * e.offsetY / tileSize) - 7
        };
        var clickX = Math.floor(pos.x / tileSize);
        var clickY = Math.floor(pos.y / tileSize);
        boxAround('#af19af', clickX, clickY, tileSize);
        activeX = clickX;
        activeY = clickY;
    }
});

function boxAround(color, x, y, size) {
    tctx.strokeStyle = color;
    tctx.lineWidth = 4;
    var xn = x * size * 1 + x * 5 + 3;
    var xs = xn + size * 1 + 4;
    var yn = y * size * 1 + y * 5 + 3;
    var ys = yn + size * 1 + 4;
    tctx.beginPath();
    tctx.moveTo(xn, yn); //top left
    tctx.lineTo(xs, yn);
    tctx.lineTo(xs, ys);
    tctx.lineTo(xn, ys);
    tctx.lineTo(xn, yn);
    tctx.stroke();
}

function blankCanvas() {
    for (i = 0; i < levelWidth; i++) {
        for (j = 0; j < levelHeight; j++) {
            if ( i % 2 == j % 2 ) {ctx.fillStyle = '#828282';} else {ctx.fillStyle = '#ffffff';}
            ctx.fillRect(i * tileSize, j * tileSize, tileSize, tileSize);
        }
    }
    ctx.beginPath();
    ctx.moveTo(0, 0); //top left
    ctx.lineTo(gWidth, 0);
    ctx.lineTo(gWidth, gHeight);
    ctx.lineTo(0, gHeight);
    ctx.lineTo(0, 0);
    ctx.stroke();
}

canvas.addEventListener('mousedown', function (e) {//When user presses down on mouse:
    click = false;//set variables to default state
    swipe = true;
    var pos = getMousePos(canvas, e);
    hoverX = Math.floor(pos.x);
    hoverY = Math.floor(pos.y);
    initialX = Math.floor(pos.x);
    initialY = Math.floor(pos.y);
});

canvas.addEventListener('mousemove', function (e) {
    var pos = getMousePos(canvas, e);
    if (swipe) {
        click = false;
        hoverX = Math.floor(pos.x);
        hoverY = Math.floor(pos.y);
        //ctx.drawImage(tiles[0], Math.floor(hoverX / tileSize) * tileSize, Math.floor(hoverY / tileSize) * tileSize);
    }
});

canvas.addEventListener('mouseup', function (e) {
    swipe = false;
    if ((initialX < hoverX + tileSize && initialX > hoverX - tileSize) && (initialY < hoverY + tileSize && initialY > hoverY - tileSize)) { click = true; }
    //ctx.drawImage(tiles[0], Math.floor(initialX / tileSize) * tileSize, Math.floor(initialY / tileSize) * tileSize);
});

canvas.addEventListener('mouseenter', function (e) {
    swipe = false;
});

function isEven(n) {
    return n % 2 == 0;
}

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}