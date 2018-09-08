var Canvas_backgroundCanvas;
var Canvas_backgroundContext;

var Canvas_middlegroundCanvas;
var Canvas_middlegroundContext;

var Canvas_foregroundCanvas;
var Canvas_foregroundContext;

var Canvas_sceneCanvas;
var Canvas_sceneContext;

var Canvas_staticSpriteCanvas;
var Canvas_staticSpriteContext;

var Canvas_blockSpriteCanvas;
var Canvas_blockSpriteContext;

var Canvas_tempCanvas;
var Canvas_tempContext;

var Canvas_projectileCanvas;
var Canvas_projectileContext;

var Canvas_init = function() {
  // 0 - farthest canvas, doesn't move
  Canvas_backgroundCanvas = Canvas_createCanvas(Level_width, Game_viewportHeight);
  Canvas_backgroundContext = Canvas_getContext(Canvas_backgroundCanvas);

  // 1 - far away canvas, moves slowly
  Canvas_distantCanvas = Canvas_createCanvas(Level_width/2, Game_viewportHeight);
  Canvas_distantContext = Canvas_getContext(Canvas_distantCanvas);

  // 2 - canvas behind the layer, no interaction
  Canvas_middlegroundCanvas = Canvas_createCanvas(Level_width, Game_viewportHeight);
  Canvas_middlegroundContext = Canvas_getContext(Canvas_middlegroundCanvas);

  // 3 - canvas touching the player, has interaction
  Canvas_foregroundCanvas = Canvas_createCanvas(Level_width, Game_viewportHeight);
  Canvas_foregroundContext = Canvas_getContext(Canvas_foregroundCanvas);

  // scene composite
  Canvas_sceneCanvas = Canvas_createCanvas(Game_viewportWidth, Game_viewportHeight);
  Canvas_sceneContext = Canvas_getContext(Canvas_sceneCanvas);
  Game_viewport.appendChild(Canvas_sceneCanvas);

  Canvas_staticSpriteCanvas = Canvas_createCanvas(256, 106);
  Canvas_staticSpriteContext = Canvas_getContext(Canvas_staticSpriteCanvas);

  Canvas_blockSpriteCanvas = Canvas_createCanvas(1000, 100);
  Canvas_blockSpriteContext = Canvas_getContext(Canvas_blockSpriteCanvas);

  Canvas_tempCanvas = Canvas_createCanvas(Game_viewportWidth, Game_viewportHeight);
  Canvas_tempContext = Canvas_getContext(Canvas_tempCanvas);

  Canvas_projectileCanvas = Canvas_createCanvas(Projectile_canvasSize, Projectile_canvasSize);
  Canvas_projectileContext = Canvas_getContext(Canvas_projectileCanvas);

  Canvas_debug(Canvas_staticSpriteCanvas);
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
  //var w = Game_viewportWidth * size;
  //var h = Game_viewportHeight * size;

  // then draw that scaled image thumb back to fill canvas
  // As smoothing is off the result will be pixelated
  //context.scale(size, size);

  Canvas_tempContext.clearRect(0, 0, canvas.width, canvas.height);
  Canvas_tempContext.save();
  Canvas_tempContext.scale(1/pixelation, 1/pixelation);
  Canvas_tempContext.drawImage(canvas, 0, 0, canvas.width, canvas.height);
  Canvas_tempContext.restore();

  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(Canvas_tempCanvas, 0, 0, canvas.width/pixelation, canvas.height/pixelation, 0, 0, canvas.width, canvas.height);
}


