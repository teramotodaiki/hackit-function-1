var p5 = require('https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.3/p5.min.js');

var sketch = new p5();
pixelDensity(1);
resizeCanvas(1000, 1000);
Hack.view = canvas;

module.exports = sketch;
