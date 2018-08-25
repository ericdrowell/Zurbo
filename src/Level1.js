var Level1_render = function() {
  Canvas_backgroundContext.fillStyle = '#055444';
  Canvas_backgroundContext.fillRect(0, 0, Game_viewportWidth, Game_viewportHeight);

  Canvas_middlegroundContext.fillStyle = '#019718';
  Canvas_middlegroundContext.fillRect(0, Game_viewportHeight-70, Game_viewportWidth, Game_viewportHeight);
};