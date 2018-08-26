var Zurbo_vm_body_x = 0;
var Zurbo_vm_body_y = -200;
var Zurbo_vm_body_radius = 30;
var Zurbo_vm_body_angle = Math.PI*0.1;

var Zurbo_vm_head_radius = 20;
var Zurbo_vm_head_horn_length = 30;
var Zurbo_vm_head_horn_radius = 5;

var Zurbo_vm_legs_length = 30;
var Zurbo_vm_legs_angle = Math.PI*-0.0;

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
var Zurbo_jumpsLeft = 2;


var Zurbo_init = function() {
  Zurbo_listen();
};

var Zurbo_listen = function() {
  document.addEventListener('click', function() {
    SoundEffects_play('laser');
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

  Canvas_sceneContext.save();


  // legs
  Canvas_sceneContext.save();
  Canvas_sceneContext.translate(Game_viewportWidth/2, Zurbo_vm_body_y);
  Canvas_sceneContext.translate(0, -1 * Zurbo_vm_legs_length);
  Zurbo_renderLeg(Zurbo_legSpacing/2, true);
  Zurbo_renderLeg(Zurbo_legSpacing/-2, false);
  
  Canvas_sceneContext.restore();

  // body
  Canvas_sceneContext.translate(Game_viewportWidth/2, Zurbo_vm_body_y);
  Canvas_sceneContext.translate(0, -1 * Zurbo_vm_legs_length);
  Canvas_sceneContext.rotate(Zurbo_vm_body_angle);
  
  Canvas_sceneContext.beginPath();
  Canvas_sceneContext.arc(0, 0, Zurbo_vm_body_radius, 0, Math.PI*2, false);
  Canvas_sceneContext.shadowBlur=30;
  Canvas_sceneContext.shadowColor = Zurbo_bodyColor;
  //Canvas_sceneContext.fillStyle = Zurbo_bodyColor;

  var gradient = Canvas_sceneContext.createRadialGradient(10, -10, 0, 10, -10, Zurbo_vm_body_radius);
  gradient.addColorStop(0, Zurbo_bodyColor);
  gradient.addColorStop(1, Zurbo_bodyColorDark);
  Canvas_sceneContext.fillStyle = gradient;

  Canvas_sceneContext.fill();

  // head
  Canvas_sceneContext.translate(0, -1 * (Zurbo_vm_body_radius + Zurbo_vm_head_radius));
  Canvas_sceneContext.beginPath();
  Canvas_sceneContext.arc(0, 0, Zurbo_vm_head_radius, 0, Math.PI*2, false);
  Canvas_sceneContext.fillStyle = Zurbo_bodyColor;
  Canvas_sceneContext.fill();

  // head horn
  //Canvas_sceneContext.rotate(Math.PI*0.1);
  Canvas_sceneContext.beginPath();
  Canvas_sceneContext.moveTo(0, -1 * (Zurbo_vm_head_horn_length + Zurbo_vm_head_radius));
  Canvas_sceneContext.lineTo(-1 * Zurbo_vm_head_horn_radius, -1 * Zurbo_vm_head_radius + 5);
  Canvas_sceneContext.lineTo(Zurbo_vm_head_horn_radius, -1 * Zurbo_vm_head_radius + 5);
  Canvas_sceneContext.shadowBlur = 30;
  Canvas_sceneContext.shadowColor = Zurbo_hornColor;
  Canvas_sceneContext.fillStyle = Zurbo_hornColor;
  Canvas_sceneContext.fill();
  Canvas_sceneContext.restore();



};

var Zurbo_renderLeg = function(offset, isDark) {
  var polarity = offset > 0 ? -1 : 1;
  var legColor = isDark ? Zurbo_bodyColorDark : Zurbo_bodyColor;

  Canvas_sceneContext.save();
  Canvas_sceneContext.translate(offset, 0);
  Canvas_sceneContext.rotate(Zurbo_vm_legs_angle * polarity);
  Canvas_sceneContext.beginPath();
  Canvas_sceneContext.moveTo(0, 0);
  Canvas_sceneContext.bezierCurveTo(-40, Zurbo_vm_body_radius+Zurbo_vm_legs_length+20, 40, Zurbo_vm_body_radius+Zurbo_vm_legs_length+20, 0, 0);
  Canvas_sceneContext.shadowBlur = 30;
  Canvas_sceneContext.shadowColor = Zurbo_bodyColor;
  Canvas_sceneContext.fillStyle = legColor;
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

  // vertical velocity
  if (Zurbo_vm_body_y > Game_viewportHeight - 100) {
    Zurbo_vm_body_y = Game_viewportHeight - 100;
    Zurbo_verticalVelocity = 0;
    Zurbo_jumpsLeft = 2;
  }
};

