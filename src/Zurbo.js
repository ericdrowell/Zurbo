// initial static vm
var Zurbo_x;
var Zurbo_y;
var Zurbo_bow_angle = Math.PI*0.1;

// constantsd
var Zurbo_gravity = 2000; // pixels / second^2
var Zurbo_runSpeed = 500; // pixels / second
var Zurbo_direction = 0;
var Zurbo_verticalVelocity = 0; // pixels / second
var Zurbo_jumpVelocity = -835;
var Zurbo_spriteVelocity = 6; // sprites / second
var Zurbo_spriteIndex = 0;
var Zurbo_faceDirection = true;

// Zurbo can jump once off the ground, and then in the air!
var Zurbo_jumpsLeft = 0;

var Zurbo_aDown = false;
var Zurbo_dDown = false;

var Zurbo_init = function() {
  Zurbo_x = Game_viewportWidth/2;
  Zurbo_y = -200;

  Zurbo_listen();
};

var Zurbo_listen = function() {
  document.addEventListener('click', function() {
    if (Game_state == GAME_PLAYING) {
      SoundEffects_play('laser');
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
          SoundEffects_play('jump');
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

  //console.log(Zurbo_x);

  if (Zurbo_isRunning()) {
    spriteIndex = Math.round(Zurbo_spriteIndex % 3) + 4;
  }
  else {
    spriteIndex = Math.round(Zurbo_spriteIndex % 3);
  }

  Canvas_sceneContext.save();
  Canvas_sceneContext.translate(Game_viewportWidth/2, Zurbo_y);

  
  //Zurbo_renderDebugPosition();

  
  Canvas_sceneContext.scale(-1 * Zurbo_faceDirection * 2, 2);
  Canvas_sceneContext.translate(-32, -52);

  Canvas_sceneContext.drawImage(Canvas_staticSpriteCanvas, spriteIndex * 64, 0, 64, 52, 0, 0, 64, 52);
  Canvas_sceneContext.restore();

};

var Zurbo_renderDebugPosition = function() {
  Canvas_sceneContext.fillStyle = 'red';
  Canvas_sceneContext.fillRect(-2, -2, 4, 4);  
  Canvas_sceneContext.fillRect(-2, -2-104, 4, 4); 
};

var Zurbo_update = function(timeDiff) {
  Zurbo_updatePosition(timeDiff);

  Zurbo_updateBodyAngle();
  Zurbo_updateSpriteIndex(timeDiff);
};

var Zurbo_updatePosition = function(timeDiff) {
  var lastZurboX = Zurbo_x;
  var lastZurboY = Zurbo_y;
  var block;

  // x
  if (Zurbo_direction !== 0) {
    Zurbo_x += Zurbo_runSpeed * Zurbo_direction  * timeDiff;
 

    block = Level_getBlock(Zurbo_x, Zurbo_y-1);
    // if hitting a block
    if (block !== undefined && block !== 0) {

      // if was moving right
      if (Zurbo_x > lastZurboX) {
        //Zurbo_x += Level_getBlockCol(x)
        Zurbo_x -= (Zurbo_x % 100 + 1);
      }
      // if was moving left
      else if (Zurbo_x < lastZurboX) {
        Zurbo_x += (100 - (Zurbo_x % 100));
      }
      
      //console.log('hit block');
    }
  }

  // y
  // v = a t
  Zurbo_verticalVelocity += (Zurbo_gravity) * (timeDiff);

  //console.log(Zurbo_verticalVelocity);

  // d = v t
  if (Zurbo_verticalVelocity !== 0) {
    Zurbo_y += Zurbo_verticalVelocity * (timeDiff);

    
    // if hitting a block

  
    // if hit the floor
    if (Zurbo_y > lastZurboY) {
      block = Level_getBlock(Zurbo_x, Zurbo_y);
      if (block) {
        Zurbo_y -= Zurbo_y % 100;
        Zurbo_verticalVelocity = 0;
        Zurbo_jumpsLeft = 2;
      }
    }
    // if hit ceiling
    else if (Zurbo_y < lastZurboY) {
      block = Level_getBlock(Zurbo_x, Zurbo_y-104);
      if (block) {
        //console.log('hit head');
        Zurbo_y += (100 - (Zurbo_y-104) % 100);
        Zurbo_verticalVelocity = 0;

      }
    }
    
  }

  // landed on the ground
  // if (Zurbo_y > Game_viewportHeight - 151) {
  //   Zurbo_y = Game_viewportHeight - 151;
  //   Zurbo_verticalVelocity = 0;
  //   Zurbo_jumpsLeft = 2;
  // }


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

