var Game_viewport;
var Game_viewportWidth = 1400;
var Game_viewportHeight = 600;
var Game_lastTime;
var Game_mouseX;
var Game_mouseY;

var Game_init = function() {
  Game_mouseX = document.body.clientWidth/2;
  Game_mouseY = -200;

  Game_setupDom();
  

  Canvas_init();
  Music_init();
  SoundEffects_init();
  Zurbo_init();
  
  Level1_render();
  Game_listen();
  Game_loop();

  
};

var Game_mouseToCanvas = function(point) {
  var topSpace = 0;
  var leftSpace = 0;
  var screenWidth = document.body.clientWidth;
  var screenHeight = document.body.clientHeight;
  var canvasWidth;
  var canvasHeight; 
  

  // tall screen
  if (screenHeight/screenWidth >= Game_viewportHeight/Game_viewportWidth) {
    canvasWidth = screenWidth;
    canvasHeight = screenWidth * Game_viewportHeight/Game_viewportWidth;
    topSpace = (screenHeight-canvasHeight)/2;
  }
  // wide screen
  else {
    canvasHeight = screenHeight;
    canvasWidth = screenHeight * Game_viewportWidth/Game_viewportHeight;
    leftSpace = (screenWidth - canvasWidth)/2;
  
  }

  //console.log(canvasWidth, canvasHeight, topSpace);

  return {
    x: (point.x - leftSpace) * Game_viewportWidth / canvasWidth,
    y: (point.y - topSpace) * Game_viewportHeight / canvasHeight
  };
};

var Game_listen = function() {
  document.body.addEventListener('mousemove', function(evt) {
    Game_mouseX = evt.clientX;
    Game_mouseY = evt.clientY;
  });
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

  //Canvas_pixelate(Canvas_sceneContext, 3);

  var sceneUrl = Canvas_sceneCanvas.toDataURL();

  Game_viewport.style.backgroundImage = 'url(' + sceneUrl + ')';
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