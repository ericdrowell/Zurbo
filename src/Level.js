var Level_width = 14000;

var Level_init = function() {
  Level_renderBlocks();
  Level_renderGrid();
};

var Level_renderBlocks = function(){
  Level1_blocks.forEach(function(block, n) {
    Canvas_blockSpriteContext.save();
    Canvas_blockSpriteContext.translate(n*100, 0);
    block.render();
    Canvas_blockSpriteContext.restore();
  });


};

var Level_renderGrid = function() {
  Level1_grid[3].forEach(function(rowBlock, r) {
    rowBlock.forEach(function(blockIndex, c) {
      Canvas_blockSpriteContext.save();
      Canvas_foregroundContext.drawImage(Canvas_blockSpriteCanvas, blockIndex*100, 0, 100, 100, c*100, r*100, 100, 100);
      Canvas_blockSpriteContext.restore();
    });
  });
};