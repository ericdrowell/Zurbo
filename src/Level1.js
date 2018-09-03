var Level1_grid = [
  // background
  [

  ],
  // distant
  [

  ],
  // middleground
  [

  ],
  // foreground
  [
    [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,   4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
    [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,   4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
    [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,   4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
    [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,   4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
    [4, 0, 2, 1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0,   4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1,   1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  ]
];

var Level1_blocks = [
  // 0 - nothing
  {
    render: function() {}
  },
  // 1 - grass
  {
    render: function() {
      var colors = ['#749f29', '#84a33b', '#718612', '#9fc236', '#2b4400', '#94a729', '#acd440'];

      for (var x=0; x<100; x+=2) {
        for (var y=0; y<100; y+=2) {
          var color;

          if (x < 3 || y < 3) {
            color = '#47660c';
          }
          else {
            color = colors[Math.round(Math.random()*(colors.length-1))];
          }
          Canvas_blockSpriteContext.fillStyle = color;
          Canvas_blockSpriteContext.fillRect(x, y, 2, 2);
        }
      }


    }
  },
  // 2 - slope up grass
  {
    render: function() {
      Canvas_blockSpriteContext.save();
      Canvas_blockSpriteContext.beginPath();
      Canvas_blockSpriteContext.moveTo(0, 100);
      Canvas_blockSpriteContext.lineTo(100, 0);
      Canvas_blockSpriteContext.lineTo(100, 100);
      Canvas_blockSpriteContext.fillStyle = Canvas_blockSpriteContext.createPattern(Canvas_blockSpriteCanvas, "repeat");
      Canvas_blockSpriteContext.translate(-1*1*100, 0);
      Canvas_blockSpriteContext.fill();
      Canvas_blockSpriteContext.restore();

      // top line
      Canvas_blockSpriteContext.beginPath();
      Canvas_blockSpriteContext.strokeStyle = '#47660c';
      Canvas_blockSpriteContext.lineWidth = 2;
      Canvas_blockSpriteContext.moveTo(0, 100);
      Canvas_blockSpriteContext.lineTo(100, 0);
      Canvas_blockSpriteContext.stroke();


    }
  },
  // 3 - slope down grass
  {
    render: function() {
      Canvas_blockSpriteContext.save();
      Canvas_blockSpriteContext.beginPath();
      Canvas_blockSpriteContext.moveTo(0, 0);
      Canvas_blockSpriteContext.lineTo(100, 100);
      Canvas_blockSpriteContext.lineTo(0, 100);
      Canvas_blockSpriteContext.fillStyle = Canvas_blockSpriteContext.createPattern(Canvas_blockSpriteCanvas, "repeat");
      Canvas_blockSpriteContext.translate(-1*1*100, 0);
      Canvas_blockSpriteContext.fill();
      Canvas_blockSpriteContext.restore();

      // top line
      Canvas_blockSpriteContext.beginPath();
      Canvas_blockSpriteContext.strokeStyle = '#47660c';
      Canvas_blockSpriteContext.lineWidth = 2;
      Canvas_blockSpriteContext.moveTo(0, 0);
      Canvas_blockSpriteContext.lineTo(100, 100);
      Canvas_blockSpriteContext.stroke();
    }
  },
  // 4 - green blob
  {
    render: function() {
      Canvas_blockSpriteContext.fillStyle = 'green';
      Canvas_blockSpriteContext.fillRect(0, 0, 100, 100);
    }
  }
];



