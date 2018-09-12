var Projectile_projectiles = [];
var Projectile_canvasSize = 100;

var Projectile_render = function() {
  Canvas_clearTemp();
  
  Projectile_projectiles.forEach(function(projectile) {
    var x = projectile.startX - Zurbo_x + Game_viewportWidth/2;
    var y = projectile.startY;
    var magnitude = projectile.magnitude;
    var angle = projectile.angle;
    var endX = Math.cos(angle) * magnitude + x;
    var endY = Math.sin(angle) * magnitude + y;
    var projectileX = Math.cos(angle) * 30;
    var projectileY = Math.sin(angle) * 30;

    var type = projectile.type;

    

    
    Canvas_projectileContext.clearRect(0, 0, Projectile_canvasSize, Projectile_canvasSize);

    if (type === 'laser') {
      Canvas_projectileContext.beginPath();
      Canvas_projectileContext.moveTo(Projectile_canvasSize/2, Projectile_canvasSize/2);
      Canvas_projectileContext.lineTo(Projectile_canvasSize/2+projectileX, Projectile_canvasSize/2+projectileY);
      Canvas_projectileContext.lineWidth = 7;
      Canvas_projectileContext.strokeStyle = projectile.color;
      Canvas_projectileContext.stroke();

      Canvas_projectileContext.beginPath();
      Canvas_projectileContext.moveTo(Projectile_canvasSize/2, Projectile_canvasSize/2);
      Canvas_projectileContext.lineTo(Projectile_canvasSize/2+projectileX, Projectile_canvasSize/2+projectileY);
      Canvas_projectileContext.lineWidth = 3;
      Canvas_projectileContext.strokeStyle = 'white';
      Canvas_projectileContext.stroke();
    }
    // ball
    else {
      Canvas_projectileContext.beginPath();
      Canvas_projectileContext.arc(Projectile_canvasSize/2, Projectile_canvasSize/2, 10, 0, Math.PI*2, false);
      Canvas_projectileContext.lineWidth = 3;
      Canvas_projectileContext.fillStyle = 'white';
      Canvas_projectileContext.fill();
      Canvas_projectileContext.strokeStyle = projectile.color;
      Canvas_projectileContext.stroke();


    }

    

    Canvas_tempContext.save();
    Canvas_tempContext.beginPath();
    Canvas_tempContext.translate(endX, endY);
    Canvas_tempContext.translate(Projectile_canvasSize/-2, Projectile_canvasSize/-2);
    Canvas_tempContext.drawImage(Canvas_projectileCanvas, 0, 0);
    Canvas_tempContext.restore();
  });

  Canvas_pixelate(Canvas_tempCanvas, Canvas_tempContext, 3);

  Canvas_sceneContext.drawImage(Canvas_tempCanvas, 0, 0, Game_viewportWidth, Game_viewportHeight, 0, 0, Game_viewportWidth, Game_viewportHeight);
};

var Projectile_fire = function(startX, startY, endX, endY, color, speed, type) {
  var angle = Math.atan((endY - startY) / (endX - startX));

  if (endX >= startX) {
    //Zurbo_faceDirection = 1;
  }
  else {
    angle += Math.PI;
    //Zurbo_faceDirection = -1;
  }

  //console.log(angle);

  Projectile_projectiles.push({
    startX: startX,
    startY: startY,
    angle: angle,
    magnitude: 50,
    angleChangeSpeed: (Math.random() - 0.5)*0.4,
    color: color,
    speed: speed,
    type: type
  });

  if (type === 'laser') {
    SoundEffects_play('laser');
  }
  // ball
  else {
    SoundEffects_play('fire-ball');
  } 
  
};

var Projectile_update = function(timeDiff) {
  Projectile_projectiles.forEach(function(projectile, index, object) {
    projectile.magnitude += timeDiff * projectile.speed;
    projectile.angle += projectile.angleChangeSpeed * timeDiff;

    var x = Math.cos(projectile.angle) * projectile.magnitude + projectile.startX;
    var y = Math.sin(projectile.angle) * projectile.magnitude + projectile.startY;

    var mob = Mob_getMob(x, y);

    // if hit a mob
    if (mob) {
      object.splice(index, 1);
      Mob_hit(mob);
    }
    // if hit zurbo
    else if (projectile.color !== 'blue' && x > Zurbo_x - 32 && x < Zurbo_x + 32 && y > Zurbo_y - 54 - 54 && y < Zurbo_y -54 + 54) {
      Zurbo_hit();
    }
    // if hit a block
    else if (Level_isBlock(x, y)) {
      object.splice(index, 1);
      SoundEffects_play('damage');
    }
    // if went into space or in ground hole
    else if (y < 0 || y > Game_viewportHeight) {
      object.splice(index, 1);
    }
  });

};