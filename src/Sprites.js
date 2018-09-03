var Sprites_init = function() {
  var img = new Image();
  img.src = Sprites_base64;
  img.onload = function(){
    Canvas_staticSpriteContext.drawImage(img, 0, 0);
  };
};