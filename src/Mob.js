var Mob_mobs = [];

var Mob_init = function() {
  var pos;
  Level_grid[3].forEach(function(rowBlock, r) {
    rowBlock.forEach(function(blockIndex, c) {
      if (blockIndex === 'A' || blockIndex === 'M') {
        pos = Level_getPositionFromRowCol(r, c);
        console.log(pos);
        Mob_mobs.push({
          type: blockIndex,
          spriteIndex: Math.round(Math.random() * 3),
          direction: -1,
          x: pos.x,
          y: pos.y
        });
      }
    });
  });
};

var Mob_render = function() {
  Mob_mobs.forEach(function(mob) {
    var spriteIndex = Math.round(mob.spriteIndex % 3);

    Canvas_sceneContext.save();
    Canvas_sceneContext.translate(mob.x - Zurbo_x + Game_viewportWidth/2, mob.y+1);
    Canvas_sceneContext.scale(-1 * mob.direction * 4, 4);
    Canvas_sceneContext.translate(-16, -26);
    Canvas_sceneContext.drawImage(Canvas_staticSpriteCanvas, spriteIndex * 32, 26, 32, 26, 0, 0, 32, 26);


    Canvas_sceneContext.restore();
  });
};

var Mob_update = function(timeDiff) {
  Mob_updatePosition(timeDiff);

  Mob_updateSpriteIndex(timeDiff);
};

var Mob_updatePosition = function(timeDiff) {
  Mob_mobs.forEach(function(mob) {
    var runSpeed = Mob_types[mob.type].runSpeed;
    var dist = runSpeed * timeDiff;
    var startX = mob.x;
    var lastX;
    var newX;

    // x
    mob.x += dist * mob.direction;
    // bottom point

    //console.log(mob.direction);
    if (Level_isBlock(mob.x, mob.y-1)) {

      // if was moving right
      if (mob.direction == 1) {
        mob.x = Level_getBlockLeft(mob.x);
        mob.direction = -1;
      }
      // if was moving left
      else {
        mob.x = Level_getBlockRight(mob.x);
        mob.direction = 1;
      }
    }

    if (!Level_isBlock(mob.x, mob.y)) {
      // if was moving right
      if (mob.direction == 1) {
        mob.x = Level_getBlockLeft(mob.x);
        mob.direction = -1;
      }
      // if was moving left
      else {
        mob.x = Level_getBlockRight(mob.x);
        mob.direction = 1;
      }
    }

  });
};

var Mob_updateSpriteIndex = function(timeDiff) {
  Mob_mobs.forEach(function(mob) {
    var typeObj = Mob_types[mob.type];
    mob.spriteIndex += typeObj.spriteVelocity * timeDiff;
  });

  
};

var Mob_types = {
  A: {
    spriteVelocity: 6, // sprites / second
    runSpeed: 200 // pixels / second
  },
  M: {

  }
};