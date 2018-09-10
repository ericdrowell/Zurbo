var Text_render = function() {
  // 120px between lines
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
      Text_renderLine('and your world...', 80, 60);
      break;
    case GAME_INTRO_3:
      Text_renderLine('In its darkest corners', 80, -180);
      Text_renderLine('evil is online...', 80, -60);
      Text_renderLine('Beware its darkness', 80, 60);
      Text_renderLine('Your blaster won\'t fire there...', 80, 180);
      break;
    case GAME_INTRO_4:
      Text_renderLine('Meet me in the', 80, -120);
      Text_renderLine('Throne of Mirrors', 80, 0);
      Text_renderLine('before its too late...', 80, 120);
      break;
    case GAME_INSTRUCTIONS:
      Text_renderLine('[WASD] - move around', 80, -120);
      Text_renderLine('[Space] - jump and double jump', 80, 0);
      Text_renderLine('Mouse - Blaster Bow', 80, 120);
      break;
    case GAME_DIED:
      Text_renderLine('Zurbo, You have failed...', 80, -120);
      Text_renderLine('We are now one...', 80, 0);
      Text_renderLine('Press [Enter] to continue...', 80, 120);
      break;
    case GAME_WON:
      Text_renderLine('Zurbo, you have defeated', 80, -180);
      Text_renderLine('your inner darkness', 80, -60);
      Text_renderLine('Evil is... offline', 80, 60);
      Text_renderLine('Press [Enter] to play again...', 80, 180);
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