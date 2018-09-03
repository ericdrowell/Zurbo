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

  Canvas_staticSpriteCanvas = Canvas_createCanvas(512, 52);
  Canvas_staticSpriteContext = Canvas_getContext(Canvas_staticSpriteCanvas);

  Canvas_blockSpriteCanvas = Canvas_createCanvas(1000, 100);
  Canvas_blockSpriteContext = Canvas_getContext(Canvas_blockSpriteCanvas);

  Canvas_tempCanvas = Canvas_createCanvas(Game_viewportWidth, Game_viewportHeight);
  Canvas_tempContext = Canvas_getContext(Canvas_tempCanvas);

  //Canvas_debug(Canvas_foregroundCanvas);
  //Canvas_debug(Canvas_blocksSpriteCanvas);
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

// var Canvas_pixelate = function(context, pixelation) {
//   var imageData = context.getImageData(0, 0, Game_viewportWidth, Game_viewportHeight);
//   var data = imageData.data;

//   for(var y = 0; y < Game_viewportHeight; y += pixelation) {
//     for(var x = 0; x < Game_viewportWidth; x += pixelation) {
//       var red = data[((Game_viewportWidth * y) + x) * 4];
//       var green = data[((Game_viewportWidth * y) + x) * 4 + 1];
//       var blue = data[((Game_viewportWidth * y) + x) * 4 + 2];

//       for(var n = 0; n < pixelation; n++) {
//         for(var m = 0; m < pixelation; m++) {
//           if(x + m < Game_viewportWidth) {
//             data[((Game_viewportWidth * (y + n)) + (x + m)) * 4] = red;
//             data[((Game_viewportWidth * (y + n)) + (x + m)) * 4 + 1] = green;
//             data[((Game_viewportWidth * (y + n)) + (x + m)) * 4 + 2] = blue;
//           }


//         }
//       }
//     }
//   }

//   context.putImageData(imageData, 0, 0);
// };

function Canvas_pixelate(canvas, context, pixelation) {
  //var w = Game_viewportWidth * size;
  //var h = Game_viewportHeight * size;

  // then draw that scaled image thumb back to fill canvas
  // As smoothing is off the result will be pixelated
  //context.scale(size, size);

  Canvas_tempContext.clearRect(0, 0, Game_viewportWidth, Game_viewportHeight);
  Canvas_tempContext.save();
  Canvas_tempContext.scale(1/pixelation, 1/pixelation);
  Canvas_tempContext.drawImage(canvas, 0, 0, Game_viewportWidth, Game_viewportHeight);
  Canvas_tempContext.restore();

  context.clearRect(0, 0, Game_viewportWidth, Game_viewportHeight);
  context.drawImage(Canvas_tempCanvas, 0, 0, Game_viewportWidth/pixelation, Game_viewportHeight/pixelation, 0, 0, Game_viewportWidth, Game_viewportHeight);
}


