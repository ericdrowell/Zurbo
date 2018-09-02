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
    [4, 0, 0, 0, 2, 1, 3, 0, 0, 0, 0, 0, 0, 0,   4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
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

      for (var x=0; x<100; x++) {
        for (var y=0; y<100; y++) {
          var color;

          if (x < 3 || y < 3) {
            color = '#47660c';
          }
          else {
            color = colors[Math.round(Math.random()*(colors.length-1))];
          }
          Canvas_blocksSpriteContext.fillStyle = color;
          Canvas_blocksSpriteContext.fillRect(x, y, 1, 1);
        }
      }


    }
  },
  // 2 - slope up grass
  {
    render: function() {
      Canvas_blocksSpriteContext.save();
      Canvas_blocksSpriteContext.beginPath();
      Canvas_blocksSpriteContext.moveTo(0, 100);
      Canvas_blocksSpriteContext.lineTo(100, 0);
      Canvas_blocksSpriteContext.lineTo(100, 100);
      Canvas_blocksSpriteContext.fillStyle = Canvas_blocksSpriteContext.createPattern(Canvas_blocksSpriteCanvas, "repeat");
      Canvas_blocksSpriteContext.translate(-1*1*100, 0);
      Canvas_blocksSpriteContext.fill();
      Canvas_blocksSpriteContext.restore();

      // top line
      Canvas_blocksSpriteContext.beginPath();
      Canvas_blocksSpriteContext.strokeStyle = '#47660c';
      Canvas_blocksSpriteContext.lineWidth = 2;
      Canvas_blocksSpriteContext.moveTo(0, 100);
      Canvas_blocksSpriteContext.lineTo(100, 0);
      Canvas_blocksSpriteContext.stroke();


    }
  },
  // 3 - slope down grass
  {
    render: function() {
      Canvas_blocksSpriteContext.save();
      Canvas_blocksSpriteContext.beginPath();
      Canvas_blocksSpriteContext.moveTo(0, 0);
      Canvas_blocksSpriteContext.lineTo(100, 100);
      Canvas_blocksSpriteContext.lineTo(0, 100);
      Canvas_blocksSpriteContext.fillStyle = Canvas_blocksSpriteContext.createPattern(Canvas_blocksSpriteCanvas, "repeat");
      Canvas_blocksSpriteContext.translate(-1*1*100, 0);
      Canvas_blocksSpriteContext.fill();
      Canvas_blocksSpriteContext.restore();

      // top line
      Canvas_blocksSpriteContext.beginPath();
      Canvas_blocksSpriteContext.strokeStyle = '#47660c';
      Canvas_blocksSpriteContext.lineWidth = 2;
      Canvas_blocksSpriteContext.moveTo(0, 0);
      Canvas_blocksSpriteContext.lineTo(100, 100);
      Canvas_blocksSpriteContext.stroke();
    }
  },
  // 4 - green blob
  {
    render: function() {
      Canvas_blocksSpriteContext.fillStyle = 'green';
      Canvas_blocksSpriteContext.fillRect(0, 0, 100, 100);
    }
  }
];



