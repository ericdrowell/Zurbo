var Level_grid;
var Level_blocks;
var Level_renderBackground;
var Level_levels = [];

var Level_init = function() {
  Level_grid = Level1_grid;
  Level_blocks = Level1_blocks;
  Level_renderBackground = Level1_renderBackground;

  Level_renderBackground();
  Level_renderBlocks();
  Level_renderGrids();
};

var Level_getPositionFromRowCol = function(row, col) {
  return {
    x: col * 100 + 50,
    y: row * 100 + 100
  };
};

var Level_getBlockIndex = function(x, y) {
  var col = Math.round((x-50) / 100);
  var row = Math.round((y-50) / 100);
  var blockIndex = Level_grid[2][row] && Level_grid[2][row][col];
  return blockIndex;
};

var Level_isBlock = function(x, y) {
  var blockIndex = Level_getBlockIndex(x, y);
  return blockIndex !== undefined && Level_blocks[blockIndex];
};

var Level_getBlockLeft = function(x) {
  return x - (x % 100) - 1;
};

var Level_getBlockRight = function(x) {
  return x + 100 - (x % 100);
};

var Level_render = function() {
  // render distant ground, middleground, and foreground
  Canvas_sceneContext.drawImage(Canvas_backgroundCanvas, -0.25 * (Zurbo_x - Game_viewportWidth/2), 0);
  Canvas_sceneContext.drawImage(Canvas_middlegroundCanvas, -1 * (Zurbo_x - Game_viewportWidth/2), 0);
  Canvas_sceneContext.drawImage(Canvas_foregroundCanvas, -1 * (Zurbo_x - Game_viewportWidth/2), 0);
};

var Level_getRandomColor = function(colors) {
  return colors[Math.round(Math.random()*(colors.length-1))];
};

Level_renderParticleBlock = function(colors, pixelSize) {
  var color;
  for (var x=0; x<100/pixelSize; x++) {
    for (var y=0; y<100/pixelSize; y++) {
      color = Level_getRandomColor(colors);
      Canvas_blockSpriteContext.fillStyle = color;
      Canvas_blockSpriteContext.fillRect(x*pixelSize, y*pixelSize, pixelSize, pixelSize);
    }
  }
};

Level_renderSolidBlock = function(color) {
  Canvas_blockSpriteContext.fillStyle = color;
  Canvas_blockSpriteContext.fillRect(0, 0, 100, 100);
};

var Level_renderBlocks = function() {
  var block;
  for (var key in Level_blocks) {
    block = Level_blocks[key];
    Canvas_blockSpriteContext.save();
    Canvas_blockSpriteContext.translate(block.index*100, 0);
    block.render();
    Canvas_blockSpriteContext.restore();
  }
};

var Level_renderTopHighlight = function() {
  var grd = Canvas_blockSpriteContext.createLinearGradient(0, 0, 0, 20);
  grd.addColorStop(0, 'rgba(255, 255, 255, 0.4)');
  grd.addColorStop(1, 'rgba(255, 255, 255, 0)');

  Canvas_blockSpriteContext.fillStyle = grd;
  Canvas_blockSpriteContext.fillRect(0, 0, 100, 20);
};

var Level_renderBottomShadow = function() {
  var grd = Canvas_blockSpriteContext.createLinearGradient(0, 100, 0, 80);
  grd.addColorStop(0, 'rgba(0, 0, 0, 0.7)');
  grd.addColorStop(1, 'rgba(0, 0, 0, 0)');

  Canvas_blockSpriteContext.fillStyle = grd;
  Canvas_blockSpriteContext.fillRect(0, 80, 100, 100);
};

var Level_renderGrids = function() {
  Level_renderGrid(0, Canvas_backgroundContext);
  Level_renderGrid(1, Canvas_foregroundContext);
  Level_renderGrid(2, Canvas_foregroundContext);
};

var Level_renderGrid = function(gridIndex, context) {
  var block;
  var blockIndex;

  Level_grid[gridIndex].forEach(function(rowBlock, r) {
    rowBlock.forEach(function(type, c) {
      block = Level_blocks[type];
      if (block) {
        blockIndex = block.index;
        Canvas_blockSpriteContext.save();
        context.drawImage(Canvas_blockSpriteCanvas, blockIndex*100, 0, 100, 100, c*100, r*100, 100, 100);
        Canvas_blockSpriteContext.restore();
      }
    });
  });
};