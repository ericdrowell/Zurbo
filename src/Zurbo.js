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

  Canvas_backgroundContext.fillStyle = 'blue';
  Canvas_backgroundContext.fillRect(0, 0, Game_viewportWidth, Game_viewportHeight);

  Canvas_foregroundContext.save();

  // body
  Canvas_foregroundContext.beginPath();
  Canvas_foregroundContext.arc(Zurbo_vm_body_x, Zurbo_vm_body_y, Zurbo_vm_body_radius, 0, Math.PI*2, false);
  Canvas_foregroundContext.fillStyle = zurboColor;
  Canvas_foregroundContext.fill();

  // head
  Canvas_foregroundContext.translate(Zurbo_vm_body_x, Zurbo_vm_body_y);
  Canvas_foregroundContext.rotate(Zurbo_vm_head_angle);
  Canvas_foregroundContext.translate(0, -1 * (Zurbo_vm_body_radius + Zurbo_vm_head_radius));

  Canvas_foregroundContext.beginPath();
  Canvas_foregroundContext.arc(0, 0, Zurbo_vm_head_radius, 0, Math.PI*2, false);
  Canvas_foregroundContext.fillStyle = zurboColor;
  Canvas_foregroundContext.fill();

  // head horn
  Canvas_foregroundContext.rotate(Math.PI*0.1);
  Canvas_foregroundContext.beginPath();
  Canvas_foregroundContext.moveTo(0, -1 * (Zurbo_vm_head_horn_length + Zurbo_vm_head_radius));
  Canvas_foregroundContext.lineTo(-1 * Zurbo_vm_head_horn_radius, -1 * Zurbo_vm_head_radius/2);
  Canvas_foregroundContext.lineTo(Zurbo_vm_head_horn_radius, -1 * Zurbo_vm_head_radius/2);
  Canvas_foregroundContext.fillStyle = zurboHornColor;
  Canvas_foregroundContext.fill();

  Canvas_foregroundContext.restore();


};