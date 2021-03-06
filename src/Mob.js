var Mob_mobs = [];
var Mob_dieVerticalVelocity = -800;
var Mob_minTimeBetweenHits = 0.5; // seconds

var Mob_minTimeBetweenLasers = 0.5;
var Mob_lastLaserTime = 0;
var Mob_bossHitDistance = 1200;

var Mob_types = {
  // axe guy
  A: {
    spriteVelocity: 6, // sprite velocity sprites / second
    runSpeed: 200, // run speed pixels / second,
    spriteY: 26,
    spriteHitY: 26 + 52,
    spriteDeadY: 26 + 52 + 52,
    spriteStartIndex: 0,
    startLife: 5,
    hitDistance: 60
  },
  // monster
  M: {
    spriteVelocity: 6, // sprites / second
    runSpeed: 100, // pixels / second,
    spriteY: 26,
    spriteHitY: 26 + 52,
    spriteDeadY: 26 + 52 + 52,
    spriteStartIndex: 4,
    startLife: 15,
    minTimeBetweenLasers: 2,
    hitDistance: 1200,
    projectileSpeed: 400,
    projectileColor: 'orange',
    projectileType: 'ball'
  },
  // boss
  B: {
    spriteVelocity: 6, // sprites / second
    runSpeed: 300, // pixels / second 
    spriteY: 26*4,
    spriteHitY: 26*2,
    spriteDeadY: 26*4,
    spriteStartIndex: 4,
    startLife: 40,
    minTimeBetweenLasers: 0.5,
    hitDistance: 1200,
    projectileSpeed: 1000,
    projectileColor: 'red',
    projectileType: 'laser'
  }
};

var Mob_reset = function() {
  var pos, mob;

  Mob_mobs = [];
  Level_grid[2].forEach(function(rowBlock, r) {
    rowBlock.forEach(function(type, c) {
      if (Mob_isMob(type)) {
        mob = Mob_types[type];
        pos = Level_getPositionFromRowCol(r, c);
        //console.log(pos);
        Mob_mobs.push({
          type: type,
          spriteIndex: Math.round(Math.random() * 3),
          direction: -1,
          x: pos.x,
          y: pos.y,
          hit: false,
          life: mob.startLife,
          verticalVelocity: 0,
          hitDistance: mob.hitDistance, 
          minTimeBetweenLasers: mob.minTimeBetweenLasers,
          lastLaserTime: 0,
          projectileColor: mob.projectileColor,
          projectileSpeed: mob.projectileSpeed,
          projectileType: mob.projectileType
        });
      }
    });
  });
};

var Mob_isMob = function(type) {
  return type === 'A' || type === 'M' || type === 'B';
};

var Mob_render = function() {
  Mob_mobs.forEach(function(mob) {
    var spriteStartIndex = Mob_types[mob.type].spriteStartIndex;
    var spriteIndex;
    var spriteY;

    if (mob.life === 0) {
      spriteIndex = 0 + spriteStartIndex;
      spriteY = Mob_types[mob.type].spriteDeadY;
    }
    else if (mob.hit) {
      spriteIndex = Math.round(mob.spriteIndex % 3) + spriteStartIndex;
      spriteY = Mob_types[mob.type].spriteHitY;
    }
    else {
      spriteIndex = Math.round(mob.spriteIndex % 3) + spriteStartIndex;
      spriteY = Mob_types[mob.type].spriteY;
    }


    Canvas_sceneContext.save();
    Canvas_sceneContext.translate(mob.x - Zurbo_x + Game_viewportWidth/2, mob.y+1);

    //Mob_renderDebugPosition();

    Canvas_sceneContext.scale(-1 * mob.direction * 4, 4);
    Canvas_sceneContext.translate(-16, -26);
    Canvas_sceneContext.drawImage(Canvas_staticSpriteCanvas, spriteIndex * 32, spriteY, 32, 26, 0, 0, 32, 26);


    Canvas_sceneContext.restore();

    // reset hit
    mob.hit = false;
  });
};

var Mob_renderDebugPosition = function() {
  Canvas_sceneContext.fillStyle = 'red';
  Canvas_sceneContext.fillRect(-2, -2, 4, 4);  
};

var Mob_getMob = function(x, y) {
  var mob;
  for (var n=0; n<Mob_mobs.length; n++) {
    mob = Mob_mobs[n];
    //console.log(x, y, mob.x, mob.y);
    if (x > mob.x - 32 && x < mob.x + 32 && y > mob.y - 54 - 54 && y < mob.y -54 + 54) {
      return mob;
    }
  }

  return null;
};

var Mob_update = function(timeDiff) {
  Mob_purgeDeadMobs();
  Mob_updatePosition(timeDiff);
  Mob_updateSpriteIndex(timeDiff);
  // axe guys hit
  Mob_hitZurbo();
  // monsters and boss shoots
  Mob_fireLasers();
  

};

var Mob_fireLasers = function() {
  var time = new Date().getTime()/1000;

  Mob_mobs.forEach(function(mob, index, object) {
    
    if ((mob.type === 'B' || mob.type === 'M') && mob.life > 0 && Zurbo_life > 0 && time - mob.lastLaserTime > mob.minTimeBetweenLasers) {
      //console.log(mob.lastLaserTime, mob.minTimeBetweenLasers, mob.hitDistance);
      if (Math.abs(Zurbo_y - (mob.y-52)) <= mob.hitDistance) {
        if ((Zurbo_x > mob.x && Zurbo_x-mob.x <= mob.hitDistance) || (Zurbo_x < mob.x && mob.x - Zurbo_x <= mob.hitDistance)) {
          Projectile_fire(mob.x, mob.y-52, Zurbo_x, Zurbo_y-52, mob.projectileColor, mob.projectileSpeed, mob.projectileType);
          mob.lastLaserTime = time;
        }
      }
    }
  });
};

var Mob_hitZurbo = function() {
  Mob_mobs.forEach(function(mob, index, object) {
    // if alive
    if (mob.type === 'A' && mob.life > 0) {
      // if vertically near
      if (Math.abs(Zurbo_y - (mob.y-52)) <= mob.hitDistance) {
        // if facing Zurbo and horizontally near
        if ((mob.direction === 1 && Zurbo_x > mob.x && Zurbo_x-mob.x <= mob.hitDistance) || (mob.direction === -1 && Zurbo_x < mob.x && mob.x - Zurbo_x <= mob.hitDistance)) {
          Zurbo_hit();
        }
      }
    }
  });
};

var Mob_purgeDeadMobs = function() {
  Mob_mobs.forEach(function(mob, index, object) {
    if (mob.y > Game_viewportHeight) {
      object.splice(index, 1);
    }
  });
};

var Mob_updatePosition = function(timeDiff) {
  Mob_mobs.forEach(function(mob) {
    var rs = Mob_types[mob.type].runSpeed;
    var dist = rs * timeDiff;
    var startX = mob.x;
    var lastX;
    var newX;

    if (mob.life > 0) {
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
    }
    else {
      mob.verticalVelocity += Game_gravity * timeDiff;
      mob.y += mob.verticalVelocity * (timeDiff);
    
    }


  });
};

var Mob_updateSpriteIndex = function(timeDiff) {
  Mob_mobs.forEach(function(mob) {
    var typeObj = Mob_types[mob.type];
    mob.spriteIndex += typeObj.spriteVelocity * timeDiff;
  });

  
};

var Mob_hit = function(mob) {
  mob.hit = true;
  if (mob.life > 0) {
    mob.life--;

    if (mob.life === 0) {
      mob.verticalVelocity = Mob_dieVerticalVelocity;
      SoundEffects_play('bad-guy-die');
      if (mob.type === 'B') {
        Mob_bossDie();
      }
    }

    SoundEffects_play('hit');
  }
  
};

var Mob_bossDie = function() {
  setTimeout(function() {
    Game_setState(GAME_WON);
  }, 3000);
};

