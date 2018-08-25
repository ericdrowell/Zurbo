var Zurbo_vm_body_x;
var Zurbo_vm_body_y;
var Zurbo_vm_body_radius;

var Zurbo_vm_head_angle;
var Zurbo_vm_head_radius;
var Zurbo_vm_head_horn_length;
var Zurbo_vm_head_horn_radius;

var Zurbo_init = function() {
  Zurbo_vm_body_x = 100;
  Zurbo_vm_body_y = Game_viewportHeight - 100;
  Zurbo_vm_body_radius = 30;

  Zurbo_vm_head_angle = Math.PI*-0.1;
  Zurbo_vm_head_radius = 20;
  Zurbo_vm_head_horn_length = 30;
  Zurbo_vm_head_horn_radius = 5;
};

var Zurbo_render = function() {
  var zurboColor = '#ff00f6';
  var zurboHornColor = 'white';

  Canvas_sceneContext.save();

  // body
  Canvas_sceneContext.beginPath();
  Canvas_sceneContext.arc(Zurbo_vm_body_x, Zurbo_vm_body_y, Zurbo_vm_body_radius, 0, Math.PI*2, false);
  Canvas_sceneContext.fillStyle = zurboColor;
  Canvas_sceneContext.fill();

  // head
  Canvas_sceneContext.translate(Zurbo_vm_body_x, Zurbo_vm_body_y);
  Canvas_sceneContext.rotate(Zurbo_vm_head_angle);
  Canvas_sceneContext.translate(0, -1 * (Zurbo_vm_body_radius + Zurbo_vm_head_radius));

  Canvas_sceneContext.beginPath();
  Canvas_sceneContext.arc(0, 0, Zurbo_vm_head_radius, 0, Math.PI*2, false);
  Canvas_sceneContext.fillStyle = zurboColor;
  Canvas_sceneContext.fill();

  // head horn
  Canvas_sceneContext.rotate(Math.PI*0.1);
  Canvas_sceneContext.beginPath();
  Canvas_sceneContext.moveTo(0, -1 * (Zurbo_vm_head_horn_length + Zurbo_vm_head_radius));
  Canvas_sceneContext.lineTo(-1 * Zurbo_vm_head_horn_radius, -1 * Zurbo_vm_head_radius/2);
  Canvas_sceneContext.lineTo(Zurbo_vm_head_horn_radius, -1 * Zurbo_vm_head_radius/2);
  Canvas_sceneContext.fillStyle = zurboHornColor;
  Canvas_sceneContext.fill();

  Canvas_sceneContext.restore();


};