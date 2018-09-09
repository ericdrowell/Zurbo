var A = 'A'; // axe guy
var M = 'M'; // monster

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
    [1,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 1],
    [1,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , A,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 1],
    [1, 1,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 1, 1,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 1],
    [1, 1,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 1],
    [1, 1, 1,  ,  ,  ,  ,  ,  , 1, 1,  ,  ,  ,  ,  ,  ,  ,  ,  , A,  ,  ,  ,  ,  , A, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,  ,  , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
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
  }
];



