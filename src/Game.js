var Game_viewport;
var Game_viewportWidth = 1400;
var Game_viewportHeight = 600;
var Game_lastTime;
var Game_mouseX;
var Game_mouseY;
var Game_pixelation = 5;
var Game_endPixelation = 5;
var Game_pixelationVelocity = 24; // pixels / second

// enums
var GAME_LOADING        = 'loading';
var GAME_TITLE          = 'title';
var GAME_INTRO_1        = 'intro-1';
var GAME_INTRO_2        = 'intro-2';
var GAME_INTRO_3        = 'intro-3';
var GAME_INTRO_4        = 'intro-4';
var GAME_INSTRUCTIONS   = 'instructions';
var GAME_PLAYING        = 'playing';

var Game_state = GAME_LOADING;


var Game_init = function() {
  Game_mouseX = document.body.clientWidth/2;
  Game_mouseY = -200;

  Game_setupDom();
  
  Canvas_init();
  Music_init();
  SoundEffects_init();
  Sprites_init();
  Zurbo_init();
  Level_init();

  Game_listen();
  Game_loop();
  Game_waitForReady();
};

var Game_onReady = function() {
  Game_setState(GAME_TITLE);
  console.log('game ready.');
};

var Game_waitForReady = function() {
  console.log('Waiting for game to be ready...');
  var interval = setInterval(function() {
    if (Music_ready) {
      clearInterval(interval);
      Game_onReady(); 
    }
  }, 17);
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

  document.addEventListener('keydown', function(evt) {
    var keycode = ((evt.which) || (evt.keyCode));

    switch (keycode) {
      // enter rkey
      case 13:
        if (Game_state === GAME_TITLE) {
          Game_setState(GAME_INTRO_1);
        }
        else if (Game_state === GAME_INTRO_1) {
          Game_setState(GAME_INTRO_2);
        }
        else if (Game_state === GAME_INTRO_1) {
          Game_setState(GAME_INTRO_2);
        }
        else if (Game_state === GAME_INTRO_2) {
          Game_setState(GAME_INTRO_3);
        }
        else if (Game_state === GAME_INTRO_3) {
          Game_setState(GAME_INTRO_4);
        }
        else if (Game_state === GAME_INTRO_4) {
          Game_setState(GAME_INSTRUCTIONS);
        }
        else if (Game_state === GAME_INSTRUCTIONS) {
          Game_setState(GAME_PLAYING);
        }
        break;

    }
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

  if (Game_state === GAME_PLAYING) {
    Level_render();
    Zurbo_render();
  }
  else {
    Text_render();
  }

  Canvas_pixelate(Canvas_sceneCanvas, Canvas_sceneContext, Math.round(Game_pixelation));
  //Canvas_pixelate(Canvas_sceneCanvas, Canvas_sceneContext, 5);

  var sceneUrl = Canvas_sceneCanvas.toDataURL();

  Game_viewport.style.backgroundImage = 'url(' + sceneUrl + ')';
};

var Game_update = function() {
  var now = new Date().getTime();
  if (!Game_lastTime) {
    Game_lastTime = now;
  }
  var timeDiff = (now - Game_lastTime)/1000;

  if (Game_state === GAME_PLAYING) {
    Zurbo_update(timeDiff);
  }

  Zurbo_updatePixelation(timeDiff);

  Game_lastTime = now;
};

var Game_setState = function(state) {
  switch(state) {
    case GAME_TITLE:
      Game_pixelation = 20;
      Game_endPixelation = 5;
      break;
    case GAME_INTRO_1:
      Game_pixelation = 20;
      Game_endPixelation = 5;
      Music_play();
      break;
    case GAME_INTRO_2:
      Game_pixelation = 20;
      Game_endPixelation = 5;
      break;
    case GAME_INTRO_3:
      Game_pixelation = 20;
      Game_endPixelation = 5;
      break;
    case GAME_INTRO_4:
      Game_pixelation = 20;
      Game_endPixelation = 5;
      break;
    case GAME_INSTRUCTIONS:
      Game_pixelation = 20;
      Game_endPixelation = 5;
      break;
    case GAME_PLAYING:
      Game_pixelation = 40;
      Game_endPixelation = 1;
      Game_pixelationVelocity = 48;
      Zurbo_y = -200;
      SoundEffects_play('start');
      break;
  }

  Game_state = state;
};

var Zurbo_updatePixelation = function(timeDiff) {
  if (Game_pixelation !== Game_endPixelation) {
    Game_pixelation -= timeDiff * Game_pixelationVelocity;
    if (Game_pixelation < Game_endPixelation) {
      Game_pixelation = Game_endPixelation;
    }
  }
};

// export Game.init() so it's accessible after compressing and mangling
var Game = {
  init: Game_init
};