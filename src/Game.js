var Game_viewport;
var Game_viewportWidth = 1400;
var Game_viewportHeight = 600;
var Game_lastTime;

var Game_init = function() {
  Game_setupDom();
  

  Canvas_init();
  SoundEffects_init();
  Zurbo_init();

  Level1_render();
  Game_loop();

  
};

var Game_setupDom = function() {
  var html = document.querySelector('html');
  var body = document.querySelector('body');
  Game_viewport = document.getElementById('viewport');
  Game_viewport.style.backgroundSize = 'contain';
  Game_viewport.style.backgroundColor = 'black';
  Game_viewport.style.backgroundRepeat = 'no-repeat';
  Game_viewport.style.backgroundPosition = 'center';

  DOM_makeElementFullScreen(html);
  DOM_makeElementFullScreen(body);
  DOM_makeElementFullScreen(Game_viewport);
};

var Game_loop = function() {
  requestAnimationFrame(Game_loop);

  Game_update();
  Game_render();
};

var Game_render = function() {
  Canvas_sceneContext.clearRect(0, 0, Game_viewportWidth, Game_viewportHeight);

  Canvas_sceneContext.drawImage(Canvas_backgroundCanvas, -1 * Zurbo_vm_body_x, 0);
  Canvas_sceneContext.drawImage(Canvas_middlegroundCanvas, -1 * Zurbo_vm_body_x, 0);

  Zurbo_render();

  var scene = Canvas_sceneCanvas.toDataURL();

  Game_viewport.style.backgroundImage = 'url(' + scene + ')';
};

var Game_update = function() {
  var now = new Date().getTime();
  if (!Game_lastTime) {
    Game_lastTime = now;
  }
  var timeDiff = now - Game_lastTime;

  Zurbo_update(timeDiff);

  Game_lastTime = now;
};

// export Game.init() so it's accessible after compressing and mangling
var Game = {
  init: Game_init
};