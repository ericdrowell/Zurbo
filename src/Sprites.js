var Sprites_init = function() {
  var img = new Image();
  img.src = Sprites_base64;
  img.onload = function(){
    Canvas_staticSpriteContext.drawImage(img, 0, 0);

    // prep dynamic sprites
    //Canvas_staticSpriteContext.drawImage(img, 0, 52);
    //Canvas_staticSpriteContext.drawImage(img, 0, 104);
    Sprites_generateHitSprites();
    Sprites_generateGraySprites();
    Sprites_drawHeart();
  };
};

var Sprites_generateHitSprites = function() {
  var imageData = Canvas_staticSpriteContext.getImageData(0, 0, 256, 52);
  var data = imageData.data;

  for(var i = 0; i < data.length; i += 4) {
    if (data[i] > 0 || data[i + 1] > 0 || data[i + 2] > 0) {
      // red
      data[i] = 255;
      // green
      data[i + 1] = 255;
      // blue
      data[i + 2] = 255;
    }

  }

  // overwrite original image
  Canvas_staticSpriteContext.putImageData(imageData, 0, 52);
};

var Sprites_generateGraySprites = function() {
  var imageData = Canvas_staticSpriteContext.getImageData(0, 0, 256, 52);
  var data = imageData.data;

  for(var i = 0; i < data.length; i += 4) {
    var brightness = 0.34 * data[i] + 0.5 * data[i + 1] + 0.16 * data[i + 2];
    // red
    data[i] = brightness;
    // green
    data[i + 1] = brightness;
    // blue
    data[i + 2] = brightness;
  }

  // overwrite original image
  Canvas_staticSpriteContext.putImageData(imageData, 0, 104);
};

var Sprites_drawHeart = function() {
  Canvas_tempContext.clearRect(0, 0, Game_viewportWidth, Game_viewportHeight);
  Canvas_tempContext.save();
  Canvas_tempContext.translate(10, 20);
  Canvas_tempContext.fillStyle = 'red';

  // bottom triangle
  Canvas_tempContext.beginPath();
  Canvas_tempContext.moveTo(0, 0);
  Canvas_tempContext.lineTo(-10, -15);
  Canvas_tempContext.lineTo(10, -15);
  Canvas_tempContext.closePath();
  Canvas_tempContext.fill();

  // left hump
  Canvas_tempContext.beginPath();
  Canvas_tempContext.arc(-5, -15, 5, 0, Math.PI, true);
  Canvas_tempContext.fill();

  // right hump
  Canvas_tempContext.beginPath();
  Canvas_tempContext.arc(5, -15, 5, 0, Math.PI, true);
  Canvas_tempContext.fill();

  Canvas_tempContext.restore();

  Canvas_pixelate(Canvas_tempCanvas, Canvas_tempContext, 3);


  // copy to sprite canvas
  Canvas_staticSpriteContext.save();
  Canvas_staticSpriteContext.beginPath();
  Canvas_staticSpriteContext.translate(0, 26*6+5);
  Canvas_staticSpriteContext.drawImage(Canvas_tempCanvas, 0, 0);
  Canvas_staticSpriteContext.restore();


};