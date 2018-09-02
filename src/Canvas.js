var Canvas_backgroundCanvas;
var Canvas_backgroundContext;

var Canvas_middlegroundCanvas;
var Canvas_middlegroundContext;

var Canvas_foregroundCanvas;
var Canvas_foregroundContext;

var Canvas_sceneCanvas;
var Canvas_sceneContext;

var Canvas_zurboSpriteCanvas;
var Canvas_zurboSpriteContext;

var Canvas_init = function() {
  Canvas_backgroundCanvas = Canvas_createCanvas(Game_viewportWidth, Game_viewportHeight);
  Canvas_backgroundContext = Canvas_backgroundCanvas.getContext('2d');

  Canvas_middlegroundCanvas = Canvas_createCanvas(Game_viewportWidth, Game_viewportHeight);
  Canvas_middlegroundContext = Canvas_middlegroundCanvas.getContext('2d');

  Canvas_foregroundCanvas = Canvas_createCanvas(Game_viewportWidth, Game_viewportHeight);
  Canvas_foregroundContext = Canvas_foregroundCanvas.getContext('2d');

  Canvas_sceneCanvas = Canvas_createCanvas(Game_viewportWidth, Game_viewportHeight);
  Canvas_sceneContext = Canvas_sceneCanvas.getContext('2d');

  Canvas_zurboSpriteCanvas = Canvas_createCanvas(100, 200);
  Canvas_zurboSpriteContext = Canvas_zurboSpriteCanvas.getContext('2d');

  // debug
  Canvas_zurboSpriteCanvas.style.position = 'fixed';
  Canvas_zurboSpriteCanvas.style.border = '2px solid red';
  Canvas_zurboSpriteCanvas.style.top = 0;
  document.body.appendChild(Canvas_zurboSpriteCanvas);
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

var Canvas_pixelate = function(context, pixelation) {
  var imageData = context.getImageData(0, 0, Game_viewportWidth, Game_viewportHeight);
  var data = imageData.data;

  for(var y = 0; y < Game_viewportHeight; y += pixelation) {
    for(var x = 0; x < Game_viewportWidth; x += pixelation) {
      var red = data[((Game_viewportWidth * y) + x) * 4];
      var green = data[((Game_viewportWidth * y) + x) * 4 + 1];
      var blue = data[((Game_viewportWidth * y) + x) * 4 + 2];

      for(var n = 0; n < pixelation; n++) {
        for(var m = 0; m < pixelation; m++) {
          if(x + m < Game_viewportWidth) {
            data[((Game_viewportWidth * (y + n)) + (x + m)) * 4] = red;
            data[((Game_viewportWidth * (y + n)) + (x + m)) * 4 + 1] = green;
            data[((Game_viewportWidth * (y + n)) + (x + m)) * 4 + 2] = blue;
          }
        }
      }
    }
  }

  context.putImageData(imageData, 0, 0);
};


