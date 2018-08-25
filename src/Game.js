var Game_viewport;

var Game_init = function() {
  // setup dom stuff
  var html = document.querySelector('html');
  var body = document.querySelector('body');
  Game_viewport = document.getElementById('viewport');
  Game_viewport.style.backgroundSize = 'contain';
  Game_viewport.style.backgroundColor = '#eee';
  Game_viewport.style.backgroundRepeat = 'no-repeat';
  Game_viewport.style.backgroundPosition = 'center';

  DOM_makeElementFullScreen(html);
  DOM_makeElementFullScreen(body);
  DOM_makeElementFullScreen(Game_viewport);

  Canvas_init();

  Game_render();
};

var Game_render = function() {
  Canvas_backgroundContext.clearRect(0, 0, 1000, 666);
  Canvas_foregroundContext.clearRect(0, 0, 1000, 666);

  Zurbo_render();


  Canvas_backgroundContext.drawImage(Canvas_foregroundCanvas, 0, 0);
  var scene = Canvas_backgroundCanvas.toDataURL();

  Game_viewport.style.backgroundImage = 'url(' + scene + ')';
};

// export Game.init() so it's accessible after compressing and mangling
var Game = {
  init: Game_init
};