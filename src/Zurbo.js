var Zurbo_vm_body_x = 0;
var Zurbo_vm_body_y = -200;
var Zurbo_vm_body_radius = 30;
var Zurbo_vm_body_angle = Math.PI*0.1;

var Zurbo_vm_head_radius = 25;
var Zurbo_vm_head_horn_length = 30;
var Zurbo_vm_head_horn_radius = 5;

var Zurbo_vm_legs_length = 30;
var Zurbo_vm_legs_angle = Math.PI*0.2;

var Zurbo_bodyColor = '#ff00f6';
var Zurbo_bodyColorDark = '#df00d7';
var Zurbo_legSpacing = 20;
var Zurbo_hornColor = 'white';

var Zurbo_gravity = 2000; // pixels / second^2
var Zurbo_runSpeed = 300; // pixels / second
var Zurbo_direction = 0;
var Zurbo_verticalVelocity = 0; // pixels / second
var Zurbo_jumpVelocity = -800;

// Zurbo can jump once off the ground, and then in the air!
var Zurbo_jumpsLeft = 0;


var Zurbo_init = function() {
  Zurbo_listen();
};

var Zurbo_listen = function() {
  document.addEventListener('click', function() {
    SoundEffects_play('laser');
    //Music_play();
  });

  var wDown = false;
  var aDown = false;
  var sDown = false;
  var dDown = false;

  document.addEventListener('keydown', function(evt) {
    var keycode = ((evt.which) || (evt.keyCode));

    switch (keycode) {
      case 65:
        // a
        aDown = true;
        Zurbo_direction = -1;
        break;
      case 87:
        // w

        break;
      case 68:
        // d
        dDown = true;
        Zurbo_direction = 1;
        break;
      case 83: 
        // s

        break;
      case 32:
        // space
        if (Zurbo_jumpsLeft > 0) {
          Zurbo_verticalVelocity = Zurbo_jumpVelocity;
          Zurbo_vm_legs_angle = Math.PI * 0.3;
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
        aDown = false;

        if (!aDown && !dDown) {
          Zurbo_direction = 0;
        }
        
        break;
      case 87:
        // w

        break;
      case 68:
        // d
        dDown = false;
        if (!aDown && !dDown) {
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
  var gradient;
  


  // shadow
  var shadowRadius = Zurbo_vm_body_radius * 0.18 * Game_viewportHeight / (Game_viewportHeight-Zurbo_vm_body_y);
  Canvas_sceneContext.save();
  Canvas_sceneContext.beginPath();
  Canvas_sceneContext.globalAlpha = 0.2;
  Canvas_sceneContext.translate(Game_viewportWidth/2, Game_viewportHeight-70);
  Canvas_sceneContext.scale(1, 0.2);
  Canvas_sceneContext.arc(0, 0, shadowRadius, 0, Math.PI*2, false);

  //Canvas_sceneContext.shadowBlur = 10;
  //Canvas_sceneContext.shadowColor = 'black';
  Canvas_sceneContext.fillStyle = 'black';

  Canvas_sceneContext.fill();
  Canvas_sceneContext.restore();

  // legs
  Canvas_sceneContext.save();
  Canvas_sceneContext.translate(Game_viewportWidth/2, Zurbo_vm_body_y);
  Canvas_sceneContext.translate(0, -1 * (Zurbo_vm_legs_length + Zurbo_vm_body_radius));
  Zurbo_renderLeg(-1);
  Zurbo_renderLeg(1);
  Canvas_sceneContext.restore();

  // body
  Canvas_sceneContext.save();
  Canvas_sceneContext.translate(Game_viewportWidth/2, Zurbo_vm_body_y);
  Canvas_sceneContext.translate(0, -1 * (Zurbo_vm_legs_length + Zurbo_vm_body_radius));
  Canvas_sceneContext.rotate(Zurbo_vm_body_angle);
  
  Canvas_sceneContext.beginPath();
  Canvas_sceneContext.arc(0, 0, Zurbo_vm_body_radius, 0, Math.PI*2, false);
  //Canvas_sceneContext.shadowBlur=30;
  //Canvas_sceneContext.shadowColor = Zurbo_bodyColor;
  gradient = Canvas_sceneContext.createRadialGradient(10, -10, 0, 10, -10, Zurbo_vm_body_radius);
  gradient.addColorStop(0, Zurbo_bodyColor);
  gradient.addColorStop(1, Zurbo_bodyColorDark);
  Canvas_sceneContext.fillStyle = gradient;

  Canvas_sceneContext.fill();

  // head
  Canvas_sceneContext.translate(0, -1 * (Zurbo_vm_body_radius + Zurbo_vm_head_radius/2));
  Canvas_sceneContext.beginPath();
  Canvas_sceneContext.arc(0, 0, Zurbo_vm_head_radius, 0, Math.PI*2, false);
  gradient = Canvas_sceneContext.createRadialGradient(10, -10, 0, 10, -10, Zurbo_vm_head_radius);
  gradient.addColorStop(0, Zurbo_bodyColor);
  gradient.addColorStop(1, Zurbo_bodyColorDark);
  Canvas_sceneContext.fillStyle = gradient;
  Canvas_sceneContext.fill();

  // head horn
  //Canvas_sceneContext.rotate(Math.PI*0.1);
  Canvas_sceneContext.beginPath();
  Canvas_sceneContext.moveTo(0, -1 * (Zurbo_vm_head_horn_length + Zurbo_vm_head_radius));
  Canvas_sceneContext.lineTo(-1 * Zurbo_vm_head_horn_radius, -1 * Zurbo_vm_head_radius + 5);
  Canvas_sceneContext.lineTo(Zurbo_vm_head_horn_radius, -1 * Zurbo_vm_head_radius + 5);
  //Canvas_sceneContext.shadowBlur = 30;
  //Canvas_sceneContext.shadowColor = Zurbo_hornColor;
  gradient = Canvas_sceneContext.createRadialGradient(10, -10, 0, 10, -10, Zurbo_vm_head_radius);
  gradient.addColorStop(0, Zurbo_bodyColor);
  gradient.addColorStop(1, Zurbo_bodyColorDark);
  Canvas_sceneContext.fillStyle = gradient;
  Canvas_sceneContext.fill();
  Canvas_sceneContext.restore();




};

var Zurbo_renderLeg = function(side) {
  var gradient;
  var offset = -1 * side * Zurbo_legSpacing/2;
  Canvas_sceneContext.save();
  Canvas_sceneContext.translate(offset, 0);
  Canvas_sceneContext.rotate(Zurbo_vm_legs_angle * side);
  Canvas_sceneContext.beginPath();
  Canvas_sceneContext.moveTo(0, 0);
  Canvas_sceneContext.bezierCurveTo(-40, Zurbo_vm_body_radius+Zurbo_vm_legs_length+20, 40, Zurbo_vm_body_radius+Zurbo_vm_legs_length+20, 0, 0);
  //Canvas_sceneContext.shadowBlur = 30;
  //Canvas_sceneContext.shadowColor = Zurbo_bodyColor;
  gradient = Canvas_sceneContext.createRadialGradient(10, -10, 0, 10, -10, Zurbo_vm_legs_length);
  gradient.addColorStop(0, Zurbo_bodyColor);
  gradient.addColorStop(1, Zurbo_bodyColorDark);
  Canvas_sceneContext.fillStyle = gradient;
  Canvas_sceneContext.fill();
  Canvas_sceneContext.restore();
};

var Zurbo_update = function(timeDiff) {
  // x
  if (Zurbo_direction !== 0) {
    Zurbo_vm_body_x += Zurbo_runSpeed * Zurbo_direction * timeDiff/1000;
  }

  // y
  // v = a t
  Zurbo_verticalVelocity += (Zurbo_gravity) * (timeDiff/1000);

  //console.log(Zurbo_verticalVelocity);

  // d = v t
  if (Zurbo_verticalVelocity !== 0) {
    Zurbo_vm_body_y += Zurbo_verticalVelocity * (timeDiff/1000);
  }

  // landed on the ground
  if (Zurbo_vm_body_y > Game_viewportHeight - 70) {
    Zurbo_vm_body_y = Game_viewportHeight - 70;
    Zurbo_verticalVelocity = 0;
    Zurbo_jumpsLeft = 2;
  }


  if (Zurbo_jumpsLeft === 0) {
    Zurbo_vm_legs_angle = Math.PI * 0.2;
  }
  else if (Zurbo_jumpsLeft === 1) {
    Zurbo_vm_legs_angle = Math.PI * 0;
  }
  else if (Zurbo_jumpsLeft === 2) {
    Zurbo_vm_legs_angle = Math.PI * 0.05;
  }

  Zurbo_updateBodyAngle();




};

var Zurbo_updateBodyAngle = function() {
  var canvasPoint = Game_mouseToCanvas({
    x: Game_mouseX,
    y: Game_mouseY
  });

  // angle between two points
  // a = atan(dy/dx)
  var bodyCenterY = Zurbo_vm_body_y - Zurbo_vm_legs_length - Zurbo_vm_body_radius;
  var dx = 1 * (canvasPoint.x - Game_viewportWidth/2);
  var dy = 1 * (canvasPoint.y - bodyCenterY);
  var angle = Math.atan(dy/dx);

  Zurbo_vm_body_angle = angle + (dx >= 0 ? Math.PI/2 : -1 * Math.PI/2);
};

