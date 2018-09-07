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

var Level_getPositionFromRowCol = function(row, col) {
  return {
    x: col * 100 + 50,
    y: row * 100 + 100
  };
};

var Level_getBlockIndex = function(x, y) {
  var col = Math.round((x-50) / 100);
  var row = Math.round((y-50) / 100);

  //console.log(row, col);
  var blockIndex = Level_grid[3][row] && Level_grid[3][row][col];

  //console.log(col + '-' + row + ', ' + blockIndex);

  return blockIndex;
};

var Level_isBlock = function(x, y) {
  var blockIndex = Level_getBlockIndex(x, y);
  return blockIndex && Number.isInteger(blockIndex);
};

var Level_moveObject = function(x, startX, y, test) {
  if (Level_isBlock(x, y) === test) {

    // if was moving right
    if (x > startX) {
      x -= (x % 100 + 1);
    }
    // if was moving left
    else if (x < startX) {
      x += (100 - (x % 100));
    }
  }

  return x;
};

var Level_getBlockLeft = function(x) {
  return x - (x % 100);
};

var Level_getBlockRight = function(x) {
  return x + 100 - (x % 100);
};

var Level_render = function() {
  // render distant ground, middleground, and foreground
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
      // if blockIndex is A or M, these are mobs so don't render anything.
      if (Number.isInteger(blockIndex)) {
        Canvas_blockSpriteContext.save();
        Canvas_foregroundContext.drawImage(Canvas_blockSpriteCanvas, blockIndex*100, 0, 100, 100, c*100, r*100, 100, 100);
        Canvas_blockSpriteContext.restore();
      }
    });
  });
};