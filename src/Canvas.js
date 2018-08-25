var Canvas_backgroundCanvas;
var Canvas_foregroundCanvas;
var Canvas_backgroundContext;
var Canvas_foregroundContext;

var Canvas_init = function() {
  Canvas_backgroundCanvas = createCanvas('background-canvas');
  Canvas_backgroundContext = Canvas_backgroundCanvas.getContext('2d');

  Canvas_foregroundCanvas = createCanvas('foreground-canvas');
  Canvas_foregroundContext = Canvas_foregroundCanvas.getContext('2d');
};

var createCanvas = function(className) {
  var canvas = document.createElement('canvas');
  canvas.className = className;
  canvas.style.display = 'inline-block';
  canvas.style.position = 'absolute';
  canvas.width = Game_viewportWidth;
  canvas.height = Game_viewportHeight;
  canvas.style.width = '1000px';
  canvas.style.height = '666px';
  return canvas;
};
