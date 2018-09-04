var Text_render = function() {
  switch (Game_state) {
    case GAME_LOADING:
      Text_renderLine('Loading...', 80, 0);
      break;
    case GAME_TITLE:
      Text_renderLine('Press [Enter] to continue...', 80, 0);
      break;
    case GAME_INTRO_1:
      Text_renderLine('Wake up Zurbo...', 80, 0);
      break;
    case GAME_INTRO_2:
      Text_renderLine('I\'ve been watching you', 80, -60);
      Text_renderLine('And your world...', 80, 60);
      break;
    case GAME_INTRO_3:
      Text_renderLine('In its darkest corners', 80, -60);
      Text_renderLine('Evil is online...', 80, 60);
      break;
    case GAME_INTRO_4:
      Text_renderLine('Meet me in the', 80, -130);
      Text_renderLine('Throne of Mirrors', 80, 0);
      Text_renderLine('Before its too late...', 80, 130);
      break;
    case GAME_INSTRUCTIONS:
      Text_renderLine('[WASD] - move around', 80, -130);
      Text_renderLine('[Space] - jump and double jump', 80, 0);
      Text_renderLine('Mouse - bow blaster', 80, 130);
      break;
  }


};

Text_renderLine = function(text, fontSize, yOffset) {
  Canvas_sceneContext.save();
  Canvas_sceneContext.font = fontSize + 'px verdana';
  Canvas_sceneContext.fillStyle = 'white';
  Canvas_sceneContext.textBaseline = 'middle';
  Canvas_sceneContext.textAlign = 'center';
  Canvas_sceneContext.translate(Game_viewportWidth/2, Game_viewportHeight/2 + yOffset);
  Canvas_sceneContext.fillText(text, 0, 0);
  Canvas_sceneContext.restore();
};