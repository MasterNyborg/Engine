//TODO 
//make dab flower

///////////////////
//Default Variables-Anything getting referenced in Engine.js
///////////////////
resources.load([
    'img/blueflower.png',
    'img/yellowflower.png',
    'img/background.png',
    'img/dog.png',
    'img/door.png',
    'img/testbg.png',
    'img/testbgDbl.png',
    'img/bg2x.png',
    'img/gb2xf.png',
    'img/loading.png',
    'img/1080p.png',
    'img/4k.png',
    'img/path.png',
    'img/test.png',
    'img/null.png'
]);
resources.onReady(init);
var testBgh = { bgWidth: 16, bgHeight: 15, defBg: 'path', altBg: ['test'] };
var testBgh1 = { bgWidth: 32, bgHeight: 30, defBg: 'path', altBg: ['test'] };
var testBg = [{ x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0, z: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0, z: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }];
var testBg1 = [{x:0,y:0, z:0},{x:1,y:0},{x:0,y:1},{x:0,y:0},{x:0,y:1},{x:0,y:0},{x:2,y:1},{x:2,y:0},{x:0,y:0},{x:1,y:1},{x:2,y:0},{x:1,y:1},{x:1,y:0},{x:0,y:0},{x:1,y:0},{x:1,y:0},{x:2,y:0},{x:2,y:0},{x:1,y:0},{x:1,y:1},{x:2,y:0},{x:0,y:1},{x:2,y:0},{x:1,y:1},{x:1,y:1},{x:0,y:0},{x:2,y:1},{x:0,y:0},{x:1,y:0},{x:1,y:1},{x:1,y:0},{x:0,y:1},{x:2,y:1},{x:0,y:1},{x:1,y:0},{x:1,y:1},{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:2,y:1},{x:1,y:0},{x:1,y:1},{x:1,y:1},{x:2,y:1},{x:1,y:1},{x:0,y:1},{x:2,y:0},{x:1,y:1},{x:1,y:0},{x:0,y:0},{x:0,y:1},{x:2,y:0},{x:2,y:1},{x:0,y:1},{x:0,y:1},{x:2,y:1},{x:2,y:1},{x:0,y:0},{x:1,y:1},{x:0,y:1},{x:0,y:0},{x:1,y:0},{x:1,y:1},{x:1,y:1},{x:0,y:0},{x:0,y:0},{x:0,y:1},{x:1,y:0},{x:1,y:0},{x:0,y:1},{x:1,y:1},{x:0,y:1},{x:2,y:1},{x:2,y:0},{x:2,y:1},{x:2,y:0},{x:0,y:1},{x:2,y:1},{x:1,y:1},{x:1,y:0},{x:1,y:1},{x:2,y:0},{x:0,y:0},{x:0,y:0},{x:2,y:0},{x:0,y:0},{x:1,y:1},{x:0,y:1},{x:1,y:0},{x:1,y:1},{x:1,y:0},{x:2,y:0},{x:2,y:0},{x:0,y:0},{x:1,y:1},{x:2,y:1},{x:2,y:0},{x:0,y:1},{x:0,y:1},{x:1,y:0},{x:2,y:1},{x:2,y:0},{x:2,y:0},{x:0,y:1},{x:1,y:1},{x:0,y:1},{x:2,y:0},{x:2,y:1},{x:0,y:1},{x:0,y:1},{x:0,y:0},{x:1,y:0},{x:2,y:1},{x:0,y:0},{x:1,y:1},{x:0,y:1},{x:1,y:1},{x:2,y:1},{x:0,y:1},{x:0,y:1},{x:2,y:0},{x:0,y:0},{x:2,y:0},{x:2,y:0},{x:1,y:0},{x:2,y:0},{x:1,y:1},{x:1,y:0},{x:2,y:0},{x:0,y:1},{x:2,y:0},{x:2,y:1},{x:2,y:1},{x:2,y:0},{x:2,y:0},{x:0,y:0},{x:2,y:1},{x:2,y:1},{x:2,y:0},{x:2,y:1},{x:2,y:1},{x:2,y:0},{x:2,y:0},{x:2,y:1},{x:2,y:0},{x:0,y:1},{x:2,y:0},{x:1,y:1},{x:2,y:0},{x:2,y:1},{x:1,y:0},{x:2,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:1},{x:1,y:1},{x:0,y:0},{x:1,y:1},{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:1,y:0},{x:0,y:0},{x:0,y:0},{x:2,y:0},{x:0,y:1},{x:0,y:0},{x:0,y:1},{x:0,y:0},{x:2,y:0},{x:2,y:1},{x:1,y:0},{x:1,y:1},{x:2,y:0},{x:1,y:1},{x:1,y:1},{x:0,y:0},{x:0,y:0},{x:2,y:0},{x:0,y:0},{x:0,y:0},{x:1,y:1},{x:1,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:1},{x:2,y:0},{x:1,y:1},{x:0,y:1},{x:0,y:1},{x:2,y:1},{x:2,y:0},{x:0,y:1},{x:0,y:1},{x:0,y:1},{x:0,y:0},{x:0,y:1},{x:1,y:0},{x:2,y:1},{x:0,y:0},{x:2,y:0},{x:0,y:0},{x:1,y:1},{x:2,y:0},{x:1,y:0},{x:0,y:1},{x:2,y:0},{x:2,y:0},{x:0,y:1},{x:1,y:0},{x:2,y:1},{x:1,y:1},{x:2,y:0},{x:1,y:1},{x:1,y:0},{x:0,y:0},{x:2,y:0},{x:2,y:0},{x:1,y:0},{x:1,y:0},{x:1,y:0},{x:2,y:1},{x:2,y:1},{x:2,y:0},{x:1,y:1},{x:1,y:1},{x:0,y:1},{x:1,y:0},{x:0,y:1},{x:0,y:0},{x:1,y:0},{x:0,y:0},{x:2,y:1},{x:2,y:0},{x:1,y:1},{x:1,y:1},{x:2,y:0},{x:2,y:1},{x:0,y:0},{x:1,y:0},{x:2,y:1},{x:1,y:1},{x:2,y:0},{x:1,y:0},{x:1,y:1},{x:2,y:0},{x:2,y:1},{x:2,y:0},{x:2,y:1},{x:2,y:0},{x:0,y:1},{x:1,y:1},{x:0,y:0},{x:0,y:1},{x:0,y:1},{x:0,y:0},{x:0,y:1},{x:0,y:1},{x:2,y:1},{x:0,y:0},{x:0,y:0},{x:1,y:0},{x:1,y:1},{x:2,y:1},{x:2,y:1},{x:0,y:1},{x:1,y:1},{x:1,y:1},{x:1,y:0},{x:2,y:1},{x:2,y:1},{x:0,y:1},{x:0,y:1},{x:1,y:0},{x:2,y:1},{x:0,y:1},{x:1,y:0},{x:1,y:0},{x:0,y:0},{x:2,y:0},{x:1,y:1},{x:0,y:1},{x:1,y:1},{x:0,y:0},{x:2,y:1},{x:1,y:1},{x:1,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:1,y:1},{x:2,y:1},{x:0,y:1},{x:0,y:1},{x:1,y:0},{x:2,y:1},{x:1,y:1},{x:1,y:1},{x:1,y:0},{x:1,y:1},{x:1,y:1},{x:1,y:0},{x:1,y:0},{x:0,y:1},{x:2,y:1},{x:0,y:1},{x:0,y:0},{x:0,y:0},{x:2,y:0},{x:1,y:0},{x:0,y:0},{x:2,y:1},{x:0,y:0},{x:2,y:0},{x:1,y:1},{x:0,y:1},{x:0,y:0},{x:1,y:1},{x:2,y:1},{x:0,y:0},{x:2,y:0},{x:1,y:1},{x:0,y:0},{x:2,y:1},{x:2,y:0},{x:0,y:1},{x:1,y:0},{x:1,y:1},{x:2,y:0},{x:1,y:0},{x:1,y:1},{x:1,y:1},{x:0,y:1},{x:1,y:1},{x:2,y:1},{x:0,y:1},{x:0,y:1},{x:0,y:0},{x:1,y:1},{x:0,y:1},{x:0,y:0},{x:2,y:1},{x:2,y:1},{x:0,y:0},{x:0,y:1},{x:2,y:1},{x:0,y:0},{x:1,y:1},{x:0,y:0},{x:1,y:1},{x:1,y:1},{x:0,y:1},{x:1,y:0},{x:1,y:0},{x:2,y:1},{x:1,y:1},{x:0,y:1},{x:0,y:1},{x:0,y:0},{x:0,y:1},{x:0,y:0},{x:1,y:0},{x:1,y:1},{x:0,y:1},{x:2,y:1},{x:1,y:0},{x:2,y:1},{x:0,y:1},{x:0,y:0},{x:1,y:1},{x:0,y:1},{x:0,y:1},{x:2,y:0},{x:2,y:0},{x:2,y:1},{x:2,y:1},{x:0,y:0},{x:2,y:0},{x:2,y:0},{x:2,y:1},{x:0,y:1},{x:2,y:1},{x:1,y:1},{x:2,y:1},{x:1,y:0},{x:1,y:1},{x:2,y:1},{x:2,y:1},{x:0,y:1},{x:2,y:0},{x:0,y:0},{x:2,y:1},{x:0,y:0},{x:2,y:1},{x:1,y:0},{x:0,y:0},{x:1,y:1},{x:2,y:1},{x:1,y:1},{x:0,y:0},{x:2,y:0},{x:0,y:0},{x:2,y:0},{x:0,y:0},{x:2,y:1},{x:1,y:0},{x:0,y:0},{x:1,y:0},{x:0,y:1},{x:0,y:0},{x:0,y:1},{x:2,y:1},{x:2,y:1},{x:1,y:0},{x:0,y:0},{x:2,y:1},{x:0,y:0},{x:1,y:1},{x:1,y:1},{x:1,y:1},{x:2,y:0},{x:1,y:0},{x:0,y:1},{x:0,y:0},{x:1,y:0},{x:0,y:1},{x:0,y:0},{x:1,y:1},{x:0,y:0},{x:0,y:1},{x:1,y:1},{x:0,y:0},{x:2,y:1},{x:1,y:1},{x:2,y:0},{x:0,y:1},{x:2,y:0},{x:0,y:1},{x:1,y:1},{x:0,y:0},{x:1,y:0},{x:1,y:1},{x:1,y:1},{x:0,y:1},{x:2,y:0},{x:1,y:1},{x:0,y:1},{x:1,y:1},{x:2,y:0},{x:0,y:1},{x:2,y:0},{x:0,y:0},{x:0,y:1},{x:1,y:0},{x:0,y:0},{x:1,y:1},{x:1,y:1},{x:2,y:1},{x:2,y:0},{x:0,y:1},{x:2,y:0},{x:2,y:0},{x:2,y:1},{x:2,y:1},{x:2,y:1},{x:2,y:0},{x:2,y:0},{x:1,y:0},{x:1,y:0},{x:1,y:1},{x:1,y:1},{x:0,y:1},{x:2,y:0},{x:2,y:1},{x:1,y:0},{x:0,y:1},{x:2,y:1},{x:0,y:1},{x:0,y:0},{x:2,y:0},{x:1,y:0},{x:2,y:1},{x:1,y:1},{x:0,y:1},{x:0,y:0},{x:2,y:1},{x:0,y:0},{x:1,y:1},{x:0,y:0},{x:0,y:0},{x:2,y:0},{x:0,y:1},{x:1,y:0},{x:0,y:1},{x:0,y:1},{x:2,y:0},{x:1,y:0},{x:1,y:0},{x:1,y:1},{x:0,y:1},{x:1,y:1},{x:1,y:1},{x:2,y:1},{x:2,y:1},{x:0,y:0},{x:0,y:0},{x:2,y:0},{x:0,y:1},{x:0,y:1},{x:0,y:0},{x:1,y:0},{x:2,y:0},{x:0,y:1},{x:1,y:0},{x:2,y:1},{x:2,y:0},{x:1,y:1},{x:0,y:1},{x:2,y:1},{x:1,y:1},{x:1,y:1},{x:0,y:0},{x:0,y:0},{x:1,y:0},{x:1,y:1},{x:1,y:1},{x:1,y:0},{x:2,y:1},{x:1,y:1},{x:0,y:1},{x:2,y:0},{x:0,y:1},{x:0,y:0},{x:0,y:1},{x:0,y:1},{x:0,y:1},{x:2,y:0},{x:0,y:1},{x:0,y:1},{x:0,y:1},{x:0,y:1},{x:2,y:0},{x:1,y:0},{x:2,y:0},{x:0,y:0},{x:1,y:1},{x:1,y:1},{x:1,y:1},{x:0,y:0},{x:1,y:0},{x:1,y:0},{x:2,y:1},{x:1,y:1},{x:0,y:1},{x:0,y:1},{x:0,y:0},{x:0,y:0},{x:0,y:1},{x:0,y:1},{x:2,y:0},{x:1,y:0},{x:1,y:0},{x:1,y:1},{x:2,y:1},{x:2,y:0},{x:0,y:1},{x:1,y:1},{x:1,y:1},{x:1,y:0},{x:2,y:0},{x:0,y:0},{x:2,y:0},{x:0,y:1},{x:1,y:0},{x:2,y:0},{x:0,y:1},{x:0,y:1},{x:2,y:0},{x:0,y:1},{x:0,y:1},{x:1,y:0},{x:1,y:1},{x:0,y:0},{x:2,y:1},{x:1,y:0},{x:0,y:0},{x:0,y:1},{x:2,y:1},{x:1,y:0},{x:0,y:0},{x:0,y:1},{x:2,y:0},{x:0,y:0},{x:2,y:0},{x:0,y:1},{x:2,y:0},{x:1,y:0},{x:1,y:1},{x:0,y:0},{x:0,y:1},{x:0,y:0},{x:2,y:1},{x:1,y:1},{x:1,y:1},{x:1,y:1},{x:2,y:1},{x:0,y:0},{x:2,y:0},{x:1,y:1},{x:1,y:1},{x:0,y:1},{x:1,y:0},{x:0,y:1},{x:1,y:0},{x:0,y:1},{x:0,y:0},{x:2,y:0},{x:2,y:1},{x:0,y:0},{x:1,y:0},{x:2,y:1},{x:0,y:1},{x:1,y:1},{x:1,y:1},{x:1,y:0},{x:1,y:0},{x:0,y:0},{x:1,y:0},{x:0,y:1},{x:0,y:1},{x:2,y:0},{x:0,y:0},{x:1,y:1},{x:0,y:0},{x:0,y:0},{x:1,y:0},{x:2,y:0},{x:0,y:1},{x:2,y:1},{x:2,y:0},{x:2,y:0},{x:0,y:0},{x:0,y:1},{x:1,y:1},{x:0,y:0},{x:0,y:1},{x:2,y:0},{x:2,y:0},{x:1,y:0},{x:2,y:0},{x:2,y:0},{x:1,y:1},{x:1,y:1},{x:1,y:1},{x:0,y:1},{x:2,y:1},{x:2,y:1},{x:1,y:0},{x:0,y:0},{x:2,y:0},{x:1,y:0},{x:1,y:1},{x:0,y:0},{x:1,y:0},{x:2,y:1},{x:2,y:0},{x:2,y:1},{x:0,y:1},{x:0,y:1},{x:2,y:1},{x:2,y:1},{x:0,y:1},{x:0,y:0},{x:0,y:0},{x:0,y:1},{x:0,y:0},{x:0,y:1},{x:2,y:1},{x:0,y:0},{x:2,y:0},{x:0,y:0},{x:1,y:0},{x:1,y:0},{x:0,y:1},{x:0,y:1},{x:2,y:1},{x:0,y:0},{x:2,y:0},{x:0,y:0},{x:2,y:0},{x:1,y:1},{x:1,y:1},{x:2,y:0},{x:2,y:0},{x:0,y:1},{x:2,y:0},{x:2,y:0},{x:0,y:1},{x:1,y:0},{x:2,y:1},{x:1,y:0},{x:2,y:1},{x:2,y:0},{x:2,y:0},{x:0,y:0},{x:1,y:0},{x:0,y:0},{x:2,y:0},{x:2,y:0},{x:1,y:0},{x:0,y:1},{x:2,y:1},{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:1},{x:2,y:1},{x:1,y:1},{x:1,y:0},{x:1,y:1},{x:1,y:0},{x:2,y:1},{x:1,y:1},{x:1,y:0},{x:0,y:1},{x:1,y:0},{x:1,y:0},{x:1,y:0},{x:0,y:1},{x:1,y:1},{x:0,y:1},{x:2,y:1},{x:2,y:1},{x:2,y:1},{x:1,y:0},{x:1,y:0},{x:1,y:0},{x:2,y:1},{x:0,y:0},{x:1,y:0},{x:2,y:0},{x:0,y:1},{x:1,y:1},{x:2,y:1},{x:0,y:0},{x:2,y:0},{x:2,y:0},{x:0,y:1},{x:1,y:1},{x:2,y:1},{x:0,y:1},{x:2,y:0},{x:1,y:1},{x:2,y:0},{x:0,y:1},{x:0,y:0},{x:2,y:0},{x:0,y:0},{x:1,y:0},{x:1,y:0},{x:2,y:1},{x:0,y:0},{x:1,y:1},{x:1,y:0},{x:2,y:1},{x:2,y:0},{x:2,y:1},{x:2,y:0},{x:1,y:0},{x:2,y:1},{x:0,y:1},{x:1,y:1},{x:1,y:0},{x:0,y:1},{x:2,y:1},{x:2,y:0},{x:2,y:1},{x:0,y:1},{x:0,y:0},{x:0,y:0},{x:2,y:0},{x:2,y:1},{x:2,y:0},{x:2,y:0},{x:0,y:1},{x:1,y:0},{x:2,y:1},{x:0,y:0},{x:2,y:0},{x:0,y:1},{x:1,y:1},{x:2,y:0},{x:1,y:0},{x:0,y:1},{x:2,y:1},{x:1,y:1},{x:0,y:1},{x:1,y:1},{x:0,y:1},{x:2,y:0},{x:2,y:1},{x:1,y:0},{x:1,y:0},{x:1,y:0},{x:2,y:0},{x:2,y:1},{x:0,y:0},{x:1,y:0},{x:0,y:1},{x:0,y:1},{x:1,y:1},{x:1,y:1},{x:1,y:1},{x:2,y:1},{x:1,y:0},{x:2,y:1},{x:2,y:1},{x:2,y:0},{x:1,y:1},{x:1,y:0},{x:1,y:1},{x:2,y:0},{x:0,y:0},{x:2,y:1},{x:2,y:1},{x:2,y:1},{x:1,y:0},{x:1,y:1},{x:1,y:1},{x:1,y:1},{x:2,y:0},{x:0,y:0},{x:0,y:1},{x:2,y:1},{x:1,y:0},{x:2,y:0},{x:2,y:0},{x:1,y:1},{x:0,y:0},{x:2,y:0},{x:1,y:0},{x:1,y:1},{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:2,y:0},{x:0,y:1},{x:2,y:0},{x:0,y:1},{x:2,y:1},{x:1,y:1},{x:2,y:0},{x:2,y:1},{x:0,y:1},{x:2,y:1},{x:2,y:1},{x:1,y:1},{x:0,y:1},{x:1,y:1},{x:0,y:0},{x:0,y:1},{x:2,y:0},{x:2,y:0},{x:1,y:1},{x:0,y:1},{x:0,y:0},{x:0,y:1},{x:0,y:0},{x:2,y:1},{x:2,y:1},{x:0,y:0},{x:1,y:1},{x:2,y:0},{x:1,y:1},{x:0,y:1},{x:0,y:0},{x:1,y:1},{x:2,y:1},{x:0,y:0},{x:1,y:1},{x:1,y:0},{x:1,y:0},{x:1,y:0},{x:0,y:1},{x:0,y:0},{x:2,y:1},{x:2,y:1},{x:0,y:1},{x:0,y:0},{x:1,y:1},{x:1,y:0},{x:2,y:0},{x:1,y:1},{x:0,y:0},{x:0,y:0},{x:2,y:1},{x:1,y:1},{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:2,y:1},{x:0,y:0},{x:2,y:1},{x:1,y:0},{x:0,y:1},{x:2,y:0},{x:2,y:1},{x:1,y:0},{x:2,y:1},{x:0,y:1},{x:0,y:0},{x:0,y:0},{x:2,y:1},{x:1,y:0},{x:0,y:1},{x:1,y:1},{x:1,y:1},{x:0,y:0},{x:1,y:1},{x:1,y:0},{x:0,y:1},{x:2,y:0},{x:2,y:1},{x:0,y:1},{x:2,y:1},{x:1,y:0},{x:0,y:0},{x:0,y:0},{x:2,y:0},{x:0,y:0},{x:0,y:1},{x:2,y:0},{x:1,y:0},{x:2,y:1},{x:1,y:1},{x:0,y:0},{x:1,y:1},{x:0,y:1},{x:0,y:1},{x:2,y:1},{x:2,y:1},{x:1,y:0},{x:2,y:0},{x:2,y:0},{x:0,y:1},{x:1,y:1},{x:1,y:0},{x:0,y:0},{x:2,y:1},{x:0,y:1},{x:2,y:1},{x:0,y:1},{x:0,y:1},{x:2,y:1},{x:2,y:0},{x:2,y:0},{x:0,y:0},{x:0,y:0}];

var strbg = "";
//for(i=0; i<960; i++){ var x=randNum(0,2);var y =randNum(0,1); strbg +=`{x:${x},y:${y}},`;}
//console.log(strbg);

var player = {
    /*
    player states
    0 = right
    1 = left
    2 = up
    3 = down
    */
    pos: [50, canvas.height / 2],
    sprite: new Sprite('img/dog.png', [0, 0], [40, 40], 3, [[0, 1], [0, 1], [0, 1], [0, 1]]),
    clicked: false,
    speed: 200,
    direction: [0, 0, 0, 0]//r l u d
};

var doors = [];
var gameTime = 0;
var isGameOver;
var score = 0;
var scoreEl = document.getElementById('score');

//game state history
var ingameInit = false;
var testInit = false;

function handleInput(dt) {
    player.sprite.active = false;
    player.clicked = false;
    player.direction = [0, 0, 0, 0];
    if (input.isDown('DOWN') || input.isDown('s') || (swipe && hoverY - 5 > player.pos[1] + player.sprite.size[1] / 2) || (click && hoverY - 5 > player.pos[1] + player.sprite.size[1] / 2)) {
        player.sprite.active = true;
        player.sprite.state = 3;
        player.direction[player.sprite.state] = true;
        if (swipe) {
            hoverY += player.speed * dt;
        }
        player.pos[1] += player.speed * dt;
    }
    if (input.isDown('UP') || input.isDown('w') || (swipe && hoverY + 5 < player.pos[1] + player.sprite.size[1] / 2) || (click && hoverY + 5 < player.pos[1] + player.sprite.size[1] / 2)) {
        player.sprite.active = true;
        player.sprite.state = 2;
        player.direction[player.sprite.state] = true;
        if (swipe) {
            hoverY -= player.speed * dt;
        }
        player.pos[1] -= player.speed * dt;
    }
    if (input.isDown('LEFT') || input.isDown('a') || (swipe && hoverX + 5 < player.pos[0] + player.sprite.size[0] / 2 || (click && hoverX + 5 < player.pos[0] + player.sprite.size[0] / 2))) {
        player.sprite.active = true;
        player.sprite.state = 1;
        player.direction[player.sprite.state] = true;
        if (swipe) {
            hoverX -= player.speed * dt;
        }
        player.pos[0] -= player.speed * dt;
    }
    if (input.isDown('RIGHT') || input.isDown('d') || (swipe && hoverX - 5 > player.pos[0] + player.sprite.size[0] / 2) || (click && hoverX - 5 > player.pos[0] + player.sprite.size[0] / 2)) {
        player.sprite.active = true;
        player.sprite.state = 0;
        player.direction[player.sprite.state] = true;
        if (swipe) {
            hoverX += player.speed * dt;
        }
        player.pos[0] += player.speed * dt;
    }
    if (input.isDown('SPACE') && !isGameOver && Date.now()) {
        player.clicked = true;
    }
    if (boxCollides(player.pos, player.sprite.size, [hoverX, hoverY], [1, 1])) { click = false; }
}

function checkPlayerBounds() {
    // Check bounds
    if (player.pos[0] < 1) {
        player.pos[0] = 1;
    }

    if (player.pos[0] > stateSizeX - player.sprite.size[0] - 1) {
        player.pos[0] = stateSizeX - player.sprite.size[0] - 1;
    }

    if (player.pos[1] < 1) {
        player.pos[1] = 1;
    }

    if (player.pos[1] > stateSizeY - player.sprite.size[1] - 1) {
        player.pos[1] = stateSizeY - player.sprite.size[1] - 1;
    }
}

function updateDoors(dt) {
    var len = doors.length;
    for (dr = 0; dr < len; dr++) {
        doors[dr].sprite.update(dt);
    }
}

function drawBackground(background, header) {
    var tileX = Math.floor(stateCoordX / tileSize); // current top left tile of game render
    var tileY = Math.floor(stateCoordY / tileSize);
    var tileCoordX = Math.floor(stateCoordX % tileSize);//current coordinate within tile for camera position
    var tileCoordY = Math.floor(stateCoordY % tileSize);
    var prevTileX = Math.floor(prevStateCoordX / tileSize);//tileX,tileY fromt previous frame
    var prevTileY = Math.floor(prevStateCoordY / tileSize);
    var prevTileCoordX = Math.floor(prevStateCoordX % tileSize);//tileCoordX,tileCoordY fromt previous frame
    var prevTileCoordY = Math.floor(prevStateCoordY % tileSize);
    var newState = (gameState != prevGameState);//Boolean whether the state has changed

    if (newState) { prevTileX = prevTileY = prevTileCoordX = prevTileCoordY = null;}//if its a new state forget about the last states variables
    if ((tileX != prevTileX) || (tileY != prevTileY)) { reloadBackgroundBuffer(); }//if the variables don't match each other reload the background tiles
    if ((tileCoordX != prevTileCoordX) || (tileCoordY != prevTileCoordY)) { ctx.drawImage(backgroundBuffer, tileCoordX, tileCoordY, canvas.width, canvas.height, 0, 0, canvas.width, canvas.height);}
    else { ctx.drawImage(backgroundBuffer, tileCoordX, tileCoordY, canvas.width, canvas.height, 0, 0, canvas.width, canvas.height);}//if the player has moved the camera within the tile subcoordinate, redraw the buffer to the canvas. Else 'do nothing' (redraw until transparancy is implemented)

    prevStateCoordX = stateCoordX;
    prevStateCoordY = stateCoordY;
    prevGameState = gameState;

    function reloadBackgroundBuffer() {
        for (y = 0; y < backgroundBuffer.height/tileSize; y++) {
            for (x = 0; x < backgroundBuffer.width/tileSize; x++) {    
                if ((x+tileX >= header.bgWidth) || (y+tileY >= header.bgHeight)) {
                    bbctx.drawImage(resources.get('img/null.png'), 0, 0, tileSize, tileSize, x * tileSize, y * tileSize, tileSize, tileSize);
                } else {
                    var place = getBackgroundTile(x+tileX, y+tileY, header.bgWidth); //index in background array of current tile
                    var nsrc = header.defBg;
                    if (Object.keys(background[place]).length > 2) { nsrc = header.altBg[background[place].z]; }
                    bbctx.drawImage(resources.get('img/' + nsrc + '.png'), (background[place].x)*tileSize, (background[place].y)*tileSize, tileSize, tileSize, x * tileSize, y * tileSize, tileSize, tileSize);
                }
            }
        }
    }
}

function getBackgroundTile(x, y, bgW) { //returns index in array given x and y coordinates + width of background
    return x + bgW * y;
}


function setCamera() {
    if (stateSizeX > canvas.width || stateSizeY > canvas.width) {
        if (player.direction[0] && player.pos[0] + player.sprite.size[0] > stateCoordX + canvas.width - scrollBuffer) {
            stateCoordX = stateCoordX + player.pos[0] + player.sprite.size[0] - (stateCoordX + canvas.width - scrollBuffer);
        }
        if (player.direction[1] && player.pos[0] < stateCoordX + scrollBuffer) {
            stateCoordX = player.pos[0] - scrollBuffer;
        }
        if (player.direction[3] && player.pos[1] + player.sprite.size[1] > stateCoordY + canvas.height - scrollBuffer) {
            stateCoordY = stateCoordY + player.pos[1] + player.sprite.size[1] - (stateCoordY + canvas.height - scrollBuffer);
        }
        if (player.direction[2] && player.pos[1] < stateCoordY + scrollBuffer) {
            stateCoordY = player.pos[1] - scrollBuffer;
        }
        if (stateCoordX + canvas.width > stateSizeX) {
            stateCoordX = stateSizeX - canvas.width;
        }
        if (stateCoordY + canvas.height > stateSizeY) {
            stateCoordY = stateSizeY - canvas.height;
        }
        if (stateCoordX < 0) {
            stateCoordX = 0;
        }
        if (stateCoordY < 0) {
            stateCoordY = 0;
        }
    } else {
        stateCoordX = stateCoordY = 0;
    }
}

function centerCamera() {
    stateCoordX = player.pos[0] - (canvas.width / 2) + player.sprite.size[0] / 2;
    stateCoordY = player.pos[1] - (canvas.height / 2) + player.sprite.size[1] / 2;
}