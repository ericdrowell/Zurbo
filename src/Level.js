var Level_width = 14000;

var Level_grid;
var Level_blocks;

var Level_levels = [];

var Level_init = function() {
  Level_grid = Level1_grid;
  Level_blocks = Level1_blocks;

  Level_renderBlocks();
  Level_renderGrid();
  Level_initMobs();
};

var Level_initMobs = function() {
  var pos;
  Level_grid[3].forEach(function(rowBlock, r) {
    rowBlock.forEach(function(blockIndex, c) {
      if (blockIndex === 'A' || blockIndex === 'M') {
        pos = Level_getPositionFromRowCol(r, c);
        console.log(pos);
        Level_mobs.push({
          type: blockIndex,
          x: pos.x,
          y: pos.y
        });
      }
    });
  });
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

var Level_render = function() {
  // render distant ground, middleground, and foreground
  Canvas_sceneContext.drawImage(Canvas_foregroundCanvas, -1 * (Zurbo_x - Game_viewportWidth/2), 0);

  Level_renderMobs();
};

var Level_renderMobs = function() {
  Level_mobs.forEach(function(mob) {
    var direction = -1;
    var spriteIndex = 3;

    Canvas_sceneContext.save();
    Canvas_sceneContext.translate(mob.x - Zurbo_x + Game_viewportWidth/2, mob.y+1);
    Canvas_sceneContext.scale(-1 * direction * 4, 4);
    Canvas_sceneContext.translate(-16, -26);
    Canvas_sceneContext.drawImage(Canvas_staticSpriteCanvas, spriteIndex * 32, 26, 32, 26, 0, 0, 32, 26);


    Canvas_sceneContext.restore();
  });
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

var Level_mobs = [];