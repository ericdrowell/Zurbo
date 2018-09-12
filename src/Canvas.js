var Canvas_sceneCanvas;
var Canvas_sceneContext;

var Canvas_staticSpriteCanvas;
var Canvas_staticSpriteContext;

var Canvas_blockSpriteCanvas;
var Canvas_blockSpriteContext;

var Canvas_tempCanvas;
var Canvas_tempContext;

var Canvas_pixelateCanvas;
var Canvas_pixelateContext;

var Canvas_projectileCanvas;
var Canvas_projectileContext;


var Canvas_init = function() {
  // farthest canvas, doesn't move
  Canvas_backgroundCanvas = Canvas_createCanvas(Game_viewportWidth, Game_viewportHeight);
  Canvas_backgroundContext = Canvas_getContext(Canvas_backgroundCanvas);

  // scene composite
  Canvas_sceneCanvas = Canvas_createCanvas(Game_viewportWidth, Game_viewportHeight);
  Canvas_sceneContext = Canvas_getContext(Canvas_sceneCanvas);
  Game_viewport.appendChild(Canvas_sceneCanvas);

  Canvas_staticSpriteCanvas = Canvas_createCanvas(256, 26*7);
  Canvas_staticSpriteContext = Canvas_getContext(Canvas_staticSpriteCanvas);

  Canvas_blockSpriteCanvas = Canvas_createCanvas(2000, 100);
  Canvas_blockSpriteContext = Canvas_getContext(Canvas_blockSpriteCanvas);

  Canvas_tempCanvas = Canvas_createCanvas(Game_viewportWidth, Game_viewportHeight);
  Canvas_tempContext = Canvas_getContext(Canvas_tempCanvas);

  Canvas_projectileCanvas = Canvas_createCanvas(Projectile_canvasSize, Projectile_canvasSize);
  Canvas_projectileContext = Canvas_getContext(Canvas_projectileCanvas);

  Canvas_pixelateCanvas = Canvas_createCanvas(Game_viewportWidth, Game_viewportHeight);
  Canvas_pixelateContext = Canvas_getContext(Canvas_pixelateCanvas);

  //Canvas_debug(Canvas_blockSpriteCanvas);
};

var Canvas_clearTemp = function() {
  Canvas_tempContext.clearRect(0, 0, Game_viewportWidth, Game_viewportHeight);
};

var Canvas_debug = function(canvas) {
  canvas.style.position = 'fixed';
  canvas.style.border = '2px solid red';
  canvas.style.top = 0;
  document.body.appendChild(canvas);
};

var Canvas_createCanvas = function(width, height) {
  var canvas = document.createElement('canvas');
  canvas.style.display = 'inline-block';
  canvas.style.position = 'absolute';
  canvas.width = width;
  canvas.height = height;

  // canvas.style.width = (Game_viewportWidth * 2) + 'px';
  // canvas.style.height = (Game_viewportHeight * 2) + 'px';

  return canvas;
};

var Canvas_getContext = function(canvas) {
  var context = canvas.getContext('2d');
  context.mozImageSmoothingEnabled = false;
  context.webkitImageSmoothingEnabled = false;
  context.imageSmoothingEnabled = false;

  return context;
};

function Canvas_pixelate(canvas, context, pixelation) {
  Canvas_pixelateContext.clearRect(0, 0, canvas.width, canvas.height);
  Canvas_pixelateContext.save();
  Canvas_pixelateContext.scale(1/pixelation, 1/pixelation);
  Canvas_pixelateContext.drawImage(canvas, 0, 0, canvas.width, canvas.height);
  Canvas_pixelateContext.restore();

  context.clearRect(0, 0, canvas.width, canvas.height);
  // the canvas.width + 3 fills in gaps left by pixelation on the right side of canvas
  context.drawImage(Canvas_pixelateCanvas, 0, 0, canvas.width/pixelation, canvas.height/pixelation, 0, 0, canvas.width+3, canvas.height);
}


