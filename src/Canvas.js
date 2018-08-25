var Canvas_backgroundCanvas;
var Canvas_backgroundContext;

var Canvas_middlegroundCanvas;
var Canvas_middlegroundContext;

var Canvas_foregroundCanvas;
var Canvas_foregroundContext;

var Canvas_sceneCanvas;
var Canvas_sceneContext;

var Canvas_init = function() {
  Canvas_backgroundCanvas = createCanvas();
  Canvas_backgroundContext = Canvas_backgroundCanvas.getContext('2d');

  Canvas_middlegroundCanvas = createCanvas();
  Canvas_middlegroundContext = Canvas_middlegroundCanvas.getContext('2d');

  Canvas_foregroundCanvas = createCanvas();
  Canvas_foregroundContext = Canvas_foregroundCanvas.getContext('2d');

  Canvas_sceneCanvas = createCanvas();
  Canvas_sceneContext = Canvas_sceneCanvas.getContext('2d');
};

var createCanvas = function() {
  var canvas = document.createElement('canvas');
  canvas.style.display = 'inline-block';
  canvas.style.position = 'absolute';
  canvas.width = Game_viewportWidth;
  canvas.height = Game_viewportHeight;
  canvas.style.width = '1000px';
  canvas.style.height = '666px';
  return canvas;
};
