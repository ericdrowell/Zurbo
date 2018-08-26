var Level1_render = function() {
  Canvas_backgroundContext.fillStyle = '#055444';
  Canvas_backgroundContext.fillRect(0, 0, Game_viewportWidth, Game_viewportHeight);

  Canvas_middlegroundContext.fillStyle = '#019718';
  Canvas_middlegroundContext.fillRect(0, Game_viewportHeight-90, Game_viewportWidth, Game_viewportHeight);

  // rock
  Canvas_middlegroundContext.fillStyle = '#bdbdbd';
  Canvas_middlegroundContext.fillRect(800, 430, 50, 100);
};

