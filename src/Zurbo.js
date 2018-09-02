// initial static vm
var Zurbo_vm_body_x = 0;
var Zurbo_vm_body_y = -200;
var Zurbo_vm_body_radius = 30;
var Zurbo_vm_body_angle = Math.PI*0.1;
var Zurbo_vm_body_head_distance = 40;
var Zurbo_vm_head_radius = 25;
var Zurbo_vm_head_horn_length = 50;
var Zurbo_vm_head_horn_radius = 5;
var Zurbo_vm_legs_length = 30;
var Zurbo_vm_legs_angle = Math.PI*0.2;

// vm generated at run time
// [angle, radius, color]
var Zurbo_vm_body_hair = [];
var Zurbo_vm_head_hair = [];

// constants
// light -> dark
var Zurbo_bodyColor = ['#ffa6fc', '#ff00f6', '#e600de', '#91008c', '#6a0066'];
var Zurbo_legSpacing = 20;
var Zurbo_hornColor = 'white';
var Zurbo_hair_length = 10;
var Zurbo_gravity = 2000; // pixels / second^2
var Zurbo_runSpeed = 500; // pixels / second
var Zurbo_direction = 0;
var Zurbo_verticalVelocity = 0; // pixels / second
var Zurbo_jumpVelocity = -800;

// Zurbo can jump once off the ground, and then in the air!
var Zurbo_jumpsLeft = 0;

var Zurbo_aDown = false;
var Zurbo_dDown = false;

var Zurbo_init = function() {
  Zurbo_buildHair();
  Zurbo_renderSprites();
  Zurbo_listen();
};

var Zurbo_buildHair = function() {
  var n, colorIndex, normalizedAngle;
  //var colors = ['red', 'blue'];
  var colors = [Zurbo_bodyColor[0], Zurbo_bodyColor[1], Zurbo_bodyColor[3]];
  for (n=0; n<3000; n++) {
    normalizedAngle = Math.random() - 0.5;
    Zurbo_vm_body_hair.push(normalizedAngle * Math.PI * 2);
    Zurbo_vm_body_hair.push(Math.random() * Zurbo_vm_body_radius);
    colorIndex = Math.round(Math.random() * (colors.length-1));
    Zurbo_vm_body_hair.push(colors[colorIndex]);
  }

  for (n=0; n<3000; n++) {
    normalizedAngle = Math.random();
    Zurbo_vm_head_hair.push(normalizedAngle * Math.PI * 2);
    Zurbo_vm_head_hair.push(Math.random() * Zurbo_vm_head_radius);
    colorIndex = Math.round(Math.random() * (colors.length-1));
    Zurbo_vm_head_hair.push(colors[colorIndex]);
  }

};

var Zurbo_renderHair = function(angle, radius, color) {
  Canvas_zurboSpriteContext.save();
  Canvas_zurboSpriteContext.beginPath(); 
  Canvas_zurboSpriteContext.rotate(angle);
  Canvas_zurboSpriteContext.translate(0, radius);
  Canvas_zurboSpriteContext.moveTo(0, 0);
  Canvas_zurboSpriteContext.lineTo(0, Zurbo_hair_length);

  Canvas_zurboSpriteContext.globalAlpha = 0.8;
  Canvas_zurboSpriteContext.strokeStyle = color;

  Canvas_zurboSpriteContext.shadowBlur=5;
  Canvas_zurboSpriteContext.shadowColor = Zurbo_bodyColor[3];

  Canvas_zurboSpriteContext.stroke();
  Canvas_zurboSpriteContext.restore();
};

var Zurbo_renderSprites = function() {
  var n, angle, radius, color;

  Canvas_zurboSpriteContext.save();
  Canvas_zurboSpriteContext.translate(50, 150);

  // body
  for (n=0; n<Zurbo_vm_body_hair.length; n+=3) {
    angle = Zurbo_vm_body_hair[n];
    radius = Zurbo_vm_body_hair[n+1];
    color = Zurbo_vm_body_hair[n+2];
    Zurbo_renderHair(angle, radius, color);
  }

  Canvas_zurboSpriteContext.translate(0, -1 * Zurbo_vm_body_head_distance);

  // head
  for (n=0; n<Zurbo_vm_body_hair.length; n+=3) {
    angle = Zurbo_vm_head_hair[n];
    radius = Zurbo_vm_head_hair[n+1];
    color = Zurbo_vm_head_hair[n+2];
    Zurbo_renderHair(angle, radius, color);
  }

  Canvas_zurboSpriteContext.restore();
};

var Zurbo_listen = function() {
  document.addEventListener('click', function() {
    SoundEffects_play('laser');
    //Music_play();
  });

  document.addEventListener('keydown', function(evt) {
    var keycode = ((evt.which) || (evt.keyCode));

    switch (keycode) {
      case 65:
        // a
        Zurbo_aDown = true;
        Zurbo_direction = -1;
        break;
      case 87:
        // w

        break;
      case 68:
        // d
        Zurbo_dDown = true;
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
  var gradient;

  //Zurbo_renderShadow();
  Zurbo_renderLegs();
  Zurbo_renderHorn();
  Zurbo_renderBodyAndHead();
  Zurbo_renderFace();
};

var Zurbo_renderHorn = function() {
  Canvas_sceneContext.save();
  Canvas_sceneContext.translate(Game_viewportWidth/2, Zurbo_vm_body_y);
  Canvas_sceneContext.translate(0, -1 * (Zurbo_vm_legs_length + Zurbo_vm_body_radius));
  Canvas_sceneContext.rotate(Zurbo_vm_body_angle);
  Canvas_sceneContext.translate(0, -1 * (Zurbo_vm_body_radius + Zurbo_vm_body_head_distance));


  Canvas_sceneContext.beginPath();
  Canvas_sceneContext.moveTo(-1 * Zurbo_vm_head_horn_radius, 0);
  Canvas_sceneContext.lineTo(Zurbo_vm_head_horn_radius, 0);
  Canvas_sceneContext.lineTo(0, -1 * Zurbo_vm_head_horn_length);
  Canvas_sceneContext.fillStyle = Zurbo_bodyColor[1];
  Canvas_sceneContext.fill();
  Canvas_sceneContext.restore();
};

var Zurbo_renderShadow = function() {
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
};
var Zurbo_renderLegs = function() {
  Canvas_sceneContext.save();
  Canvas_sceneContext.translate(Game_viewportWidth/2, Zurbo_vm_body_y);
  Canvas_sceneContext.translate(0, -1 * (Zurbo_vm_legs_length + Zurbo_vm_body_radius));
  Zurbo_renderLeg(-1);
  Zurbo_renderLeg(1);
  Canvas_sceneContext.restore();
};

var Zurbo_renderLeg = function(side) {
  var gradient;
  var offset = -1 * side * Zurbo_legSpacing/2;
  Canvas_sceneContext.save();
  Canvas_sceneContext.translate(0, 0);
  Canvas_sceneContext.rotate(Zurbo_vm_legs_angle * side);
  Canvas_sceneContext.beginPath();
  Canvas_sceneContext.moveTo(0, 0);
  Canvas_sceneContext.bezierCurveTo(-40, Zurbo_vm_body_radius+Zurbo_vm_legs_length+20, 40, Zurbo_vm_body_radius+Zurbo_vm_legs_length+20, 0, 0);
  Canvas_sceneContext.fillStyle = Zurbo_bodyColor[2];
  Canvas_sceneContext.fill();

  Canvas_sceneContext.beginPath();
  Canvas_sceneContext.fillStyle = Zurbo_bodyColor[0];
  Canvas_sceneContext.fillRect(-7, 20, 14, 30);



  Canvas_sceneContext.restore();
};

var Zurbo_renderBodyAndHead = function() {
  Canvas_sceneContext.save();

  Canvas_sceneContext.translate(Game_viewportWidth/2, Zurbo_vm_body_y);
  Canvas_sceneContext.translate(0, -1 * (Zurbo_vm_legs_length + Zurbo_vm_body_radius));

  Canvas_sceneContext.rotate(Zurbo_vm_body_angle);
  Canvas_sceneContext.translate(-50, -150);
  Canvas_sceneContext.drawImage(Canvas_zurboSpriteCanvas, 0, 0);
  Canvas_sceneContext.restore();
};

var Zurbo_renderFace = function() {
  if (Math.abs(Zurbo_vm_body_angle) < Math.PI*0.6) {
    Zurbo_renderEyes();
  }
};

var Zurbo_renderEyes = function() {
  
  Zurbo_renderEye(-1);
  Zurbo_renderEye(1);
  
};

var Zurbo_renderEye = function(side) {
  Canvas_sceneContext.save();

  Canvas_sceneContext.translate(Game_viewportWidth/2, Zurbo_vm_body_y);
  Canvas_sceneContext.translate(0, -1 * (Zurbo_vm_legs_length + Zurbo_vm_body_radius));

  Canvas_sceneContext.rotate(Zurbo_vm_body_angle);
  Canvas_sceneContext.translate(0, -1 * (Zurbo_vm_body_head_distance));
  Canvas_sceneContext.scale(side, 1);
  
  Canvas_sceneContext.beginPath();
  Canvas_sceneContext.moveTo(-5, 0);
  Canvas_sceneContext.quadraticCurveTo(-12, -15, -19, 0);
  Canvas_sceneContext.strokeStyle = Zurbo_bodyColor[4];
  Canvas_sceneContext.lineWidth = 3;
  Canvas_sceneContext.stroke();


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
    Zurbo_vm_legs_angle = Math.PI * 0.3;
  }
  else if (Zurbo_jumpsLeft === 1) {
    Zurbo_vm_legs_angle = Math.PI * 0;
  }
  else if (Zurbo_jumpsLeft === 2) {
    //Zurbo_vm_legs_angle = Math.PI * 0.05;
    if (Zurbo_isRunning()) {
      Zurbo_vm_legs_angle = Math.sin(new Date().getTime()/50)*0.6;
    }
    else {
      Zurbo_vm_legs_angle = Math.PI * 0.1;
    }
  }

  Zurbo_updateBodyAngle();
};

var Zurbo_isRunning = function() {
  return Zurbo_aDown || Zurbo_dDown;
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
  var bodyCenterY = Zurbo_vm_body_y - Zurbo_vm_legs_length - Zurbo_vm_body_radius;
  var dx = 1 * (canvasPoint.x - Game_viewportWidth/2);
  var dy = 1 * (canvasPoint.y - bodyCenterY);
  var angle = Math.atan(dy/dx);

  Zurbo_vm_body_angle = angle + (dx >= 0 ? Math.PI/2 : -1 * Math.PI/2);

  if (!Zurbo_isInAir() && Zurbo_isRunning()) {
    Zurbo_vm_body_angle += 0.1 * Math.sin(new Date().getTime()/50);
  }

};

