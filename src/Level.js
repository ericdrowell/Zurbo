var Level_width = 14000;

var Level_grid;
var Level_blocks;

var Level_levels = [];

var Level_init = function() {
  Level_grid = Level1_grid;
  Level_blocks = Level1_blocks;

  Level_renderBlocks();
  Level_renderGrid();
};

var Level_getBlockCol = function(x) {
  return Math.round((x-50) / 100);
};

var Level_getBlockRow = function(y) {
  return Math.round((y-50) / 100);
};

var Level_getBlock = function(x, y) {
  var col = Level_getBlockCol(x);
  var row = Level_getBlockRow(y);

  //console.log(row, col);
  var blockIndex = Level_grid[3][row] && Level_grid[3][row][col];

  //console.log(col + '-' + row + ', ' + blockIndex);

  return blockIndex;
};

var Level_render = function() {
  Canvas_sceneContext.drawImage(Canvas_backgroundCanvas, -1 * (Zurbo_x - Game_viewportWidth/2), 0);
  Canvas_sceneContext.drawImage(Canvas_foregroundCanvas, -1 * (Zurbo_x - Game_viewportWidth/2), 0);
};

var Level_renderBlocks = function(){
  Level_blocks.forEach(function(block, n) {
    Canvas_blockSpriteContext.save();
    Canvas_blockSpriteContext.translate(n*100, 0);
    block.render();
    Canvas_blockSpriteContext.restore();
  });
};

var Level_renderGrid = function() {
  Level_grid[3].forEach(function(rowBlock, r) {
    rowBlock.forEach(function(blockIndex, c) {
      Canvas_blockSpriteContext.save();
      Canvas_foregroundContext.drawImage(Canvas_blockSpriteCanvas, blockIndex*100, 0, 100, 100, c*100, r*100, 100, 100);
      Canvas_blockSpriteContext.restore();
    });
  });
};