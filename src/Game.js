var Game_viewport;
var Game_viewportWidth = 1000;
var Game_viewportHeight = 666;

var Game_init = function() {
  Game_setupDom();
  
  Canvas_init();
  Zurbo_init();

  Game_render();
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

var Game_render = function() {
  Canvas_backgroundContext.clearRect(0, 0, Game_viewportWidth, Game_viewportHeight);
  Canvas_foregroundContext.clearRect(0, 0, Game_viewportWidth, Game_viewportHeight);

  Zurbo_render();


  Canvas_backgroundContext.drawImage(Canvas_foregroundCanvas, 0, 0);
  var scene = Canvas_backgroundCanvas.toDataURL();

  Game_viewport.style.backgroundImage = 'url(' + scene + ')';
};

// export Game.init() so it's accessible after compressing and mangling
var Game = {
  init: Game_init
};