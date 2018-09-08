var Projectile_projectiles = [];
var Projectile_speed = 1000; // pixels / second
var Projectile_magnitude = 30;
var Projectile_canvasSize = 100;

var Projectile_render = function() {
  Projectile_projectiles.forEach(function(projectile) {
    var x = projectile.startX - Zurbo_x + Game_viewportWidth/2;
    var y = projectile.startY;
    var magnitude = projectile.magnitude;
    var angle = projectile.angle;
    var endX = Math.cos(angle) * magnitude + x;
    var endY = Math.sin(angle) * magnitude + y;
    var projectileX = Math.cos(angle) * Projectile_magnitude;
    var projectileY = Math.sin(angle) * Projectile_magnitude;


    Canvas_projectileContext.clearRect(0, 0, Projectile_canvasSize, Projectile_canvasSize);
    Canvas_projectileContext.beginPath();
    Canvas_projectileContext.moveTo(Projectile_canvasSize/2, Projectile_canvasSize/2);
    Canvas_projectileContext.lineTo(Projectile_canvasSize/2+projectileX, Projectile_canvasSize/2+projectileY);
    Canvas_projectileContext.lineWidth = 7;
    Canvas_projectileContext.strokeStyle = 'red';
    Canvas_projectileContext.stroke();

    Canvas_projectileContext.beginPath();
    Canvas_projectileContext.moveTo(Projectile_canvasSize/2, Projectile_canvasSize/2);
    Canvas_projectileContext.lineTo(Projectile_canvasSize/2+projectileX, Projectile_canvasSize/2+projectileY);
    Canvas_projectileContext.lineWidth = 3;
    Canvas_projectileContext.strokeStyle = 'white';
    Canvas_projectileContext.stroke();

    Canvas_pixelate(Canvas_projectileCanvas, Canvas_projectileContext, 3);

    Canvas_sceneContext.save();
    Canvas_sceneContext.beginPath();
    Canvas_sceneContext.translate(endX, endY);
    Canvas_sceneContext.translate(Projectile_canvasSize/-2, Projectile_canvasSize/-2);
    Canvas_sceneContext.drawImage(Canvas_projectileCanvas, 0, 0);
    Canvas_sceneContext.restore();
  });
};

var Projectile_update = function(timeDiff) {
  Projectile_projectiles.forEach(function(projectile, index, object) {
    projectile.magnitude += timeDiff * Projectile_speed;
    projectile.angle += projectile.angleChangeSpeed * timeDiff;

    var x = Math.cos(projectile.angle) * projectile.magnitude + projectile.startX;
    var y = Math.sin(projectile.angle) * projectile.magnitude + projectile.startY;

    var mob = Mob_getMob(x, y);

    // if hit a mob
    if (mob) {
      object.splice(index, 1);
      SoundEffects_play('hit');
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