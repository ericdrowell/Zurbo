var Zurbo_render = function() {
  Canvas_backgroundContext.fillStyle = 'blue';
  Canvas_backgroundContext.fillRect(0, 0, 1000, 666);

  Canvas_foregroundContext.arc(50, 50, 50, 0, Math.PI*2, false);
  Canvas_foregroundContext.fillStyle = 'red';
  Canvas_foregroundContext.fill();
};