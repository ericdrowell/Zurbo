// initial static vm
var Zurbo_x = 0;
var Zurbo_y = -200;
var Zurbo_bow_angle = Math.PI*0.1;

// constants
var Zurbo_gravity = 2000; // pixels / second^2
var Zurbo_runSpeed = 500; // pixels / second
var Zurbo_direction = 0;
var Zurbo_verticalVelocity = 0; // pixels / second
var Zurbo_jumpVelocity = -900;
var Zurbo_spriteVelocity = 6; // sprites / second
var Zurbo_spriteIndex = 0;
var Zurbo_faceDirection = true;

// Zurbo can jump once off the ground, and then in the air!
var Zurbo_jumpsLeft = 0;

var Zurbo_aDown = false;
var Zurbo_dDown = false;

var Zurbo_init = function() {
  Zurbo_listen();
};

var Zurbo_listen = function() {
  document.addEventListener('click', function() {
    SoundEffects_play('laser');

    if (Music_ready && !Music_playing) {
      Music_play();
    }
    
  });

  document.addEventListener('keydown', function(evt) {
    var keycode = ((evt.which) || (evt.keyCode));

    switch (keycode) {
      case 65:
        // a
        Zurbo_aDown = true;
        Zurbo_direction = -1;
        Zurbo_faceDirection = -1;
        break;
      case 87:
        // w

        break;
      case 68:
        // d
        Zurbo_dDown = true;
        Zurbo_direction = 1;
        Zurbo_faceDirection = 1;
        break;
      case 83: 
        // s

        break;
      case 32:
        // space
        if (Zurbo_jumpsLeft > 0) {
          Zurbo_verticalVelocity = Zurbo_jumpVelocity;
          Zurbo_jumpsLeft--;
        }
        break;
    }
  });

  document.addEventListener('keyup', function(evt) {
    var keycode = ((evt.which) || (evt.keyCode));

    switch (keycode) {
      case 65:
        // a
        Zurbo_aDown = false;

        if (!Zurbo_aDown && !Zurbo_dDown) {
          Zurbo_direction = 0;
        }
        
        break;
      case 87:
        // w

        break;
      case 68:
        // d
        Zurbo_dDown = false;
        if (!Zurbo_aDown && !Zurbo_dDown) {
          Zurbo_direction = 0;
        }
        
        break;
      case 83: 
        // s

        break;
      case 32:
        // space


        break;
    }
  });
};



var Zurbo_render = function() {
  var spriteIndex;

  if (Zurbo_isRunning()) {
    spriteIndex = Math.round(Zurbo_spriteIndex % 3) + 4;
  }
  else {
    spriteIndex = Math.round(Zurbo_spriteIndex % 3);
  }

  Canvas_sceneContext.save();
  Canvas_sceneContext.translate(Game_viewportWidth/2, Zurbo_y);

  
  Canvas_sceneContext.scale(-1 * Zurbo_faceDirection * 2, 2);
  Canvas_sceneContext.translate(-32, 0);

  Canvas_sceneContext.drawImage(Canvas_staticSpriteCanvas, spriteIndex * 64, 0, 64, 52, 0, 0, 64, 52);
  Canvas_sceneContext.restore();

};

var Zurbo_update = function(timeDiff) {
  // x
  if (Zurbo_direction !== 0) {
    Zurbo_x += Zurbo_runSpeed * Zurbo_direction * timeDiff;
  }

  // y
  // v = a t
  Zurbo_verticalVelocity += (Zurbo_gravity) * (timeDiff);

  //console.log(Zurbo_verticalVelocity);

  // d = v t
  if (Zurbo_verticalVelocity !== 0) {
    Zurbo_y += Zurbo_verticalVelocity * (timeDiff);
  }

  // landed on the ground
  if (Zurbo_y > Game_viewportHeight - 203) {
    Zurbo_y = Game_viewportHeight - 203;
    Zurbo_verticalVelocity = 0;
    Zurbo_jumpsLeft = 2;
  }

  Zurbo_updateBodyAngle();
  Zurbo_updateSpriteIndex(timeDiff);
};

var Zurbo_updateSpriteIndex = function(timeDiff) {
  Zurbo_spriteIndex += Zurbo_spriteVelocity * timeDiff;
};

var Zurbo_isRunning = function() {
  return !Zurbo_isInAir() && (Zurbo_aDown || Zurbo_dDown);
};

var Zurbo_isInAir = function() {
  return Zurbo_jumpsLeft < 2;
};

var Zurbo_updateBodyAngle = function() {
  var canvasPoint = Game_mouseToCanvas({
    x: Game_mouseX,
    y: Game_mouseY
  });

  // angle between two points
  // a = atan(dy/dx)
  var dx = 1 * (canvasPoint.x - Game_viewportWidth/2);
  var dy = 1 * (canvasPoint.y - Zurbo_y);
  var angle = Math.atan(dy/dx);

  Zurbo_bow_angle = angle + (dx >= 0 ? Math.PI/2 : -1 * Math.PI/2);

  if (!Zurbo_isInAir() && Zurbo_isRunning()) {
    Zurbo_bow_angle += 0.1 * Math.sin(new Date().getTime()/50);
  }

};

