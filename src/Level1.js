var A = 'A'; // axe guy
var M = 'M'; // monster
var B = 'B'; // boss

var Level1_grid = [
  // background
  [
  ],
  // middleground
  [
    [ ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 1, 1, 1, 1, 1, 1,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,],
    [ ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 1, 1, 1, 1, 1, 1, 1, 1,  , 1, 1, 1, 1, 1, 1,  ,  , 5, 5, 5, 5,  , 5,  ,  , 5, 5,  ,  ,  ,  ,  , 5, 5,  ,  , 1, 5, 5, 5, 5, 5,  , 1, 1,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,],
    [ ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 1, 1, 1,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 1, 1,  ,  ,  ,  ,  , 1,  , 1, 1,  , 1, 1, 1, 1, 1, 5, 5, 5, 5, 5, 5,  ,  , 5, 5,  , 5, 1, 1, 5, 5, 5, 5,  , 1, 5, 5, 5, 5, 5, 5, 1, 1,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 1,  , 1,  ,  ,  ,  ,  ,  , 1,  ,  ,  ,  , 1,  , 1,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,],
    [ ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 1, 1, 1, 1, 1, 1,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 1, 1,  ,  ,  ,  ,  ,  ,  ,  ,  , 1,  ,  ,  ,  , 1, 1, 1, 1, 1,  ,  , 1, 1, 1, 1, 1, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1, 1, 5, 5, 5, 5, 5,  , 5, 5, 5, 5, 5, 5, 1, 1,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 1,  ,  ,  ,  ,  ,  ,  ,  , 1,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 1,  ,  ,  ,  ,  ,  ,  ,  ,  ,],
    [ ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 1, 1,  ,  ,  , 1, 1, 1, 1, 1, 1,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 1, 1,  ,  ,  ,  ,  ,  ,  ,  ,  , 1,  ,  ,  ,  , 1, 1, 1, 1, 1,  ,  ,  , 1, 1, 1, 1,  , 5, 5, 5,  ,  , 5, 5, 5, 5, 5, 5,  ,  , 5, 5, 5, 5, 5, 5, 5,  , 5, 5, 5, 5, 1, 1,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 1,  ,  ,  ,  , 1,  ,  ,  , 1,  ,  ,  ,  , 1,  , 1,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 1,  ,  ,  ,  ,  ,  ,  ,  ,  ,],
    [ ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 1, 1,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 1, 1,  ,  ,  ,  , 1, 1,  ,  ,  ,  ,  ,  ,  ,  ,  , 1,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 5, 5,  ,  , 5,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 1,  ,  ,  ,  ,  ,  ,  , 1,  ,  ,  , 1,  ,  , 1,  ,  ,  ,  ,  ,  ,]
  ],                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
  // foreground                                                                                                                                                                                                                                                                                                                                                                                                                                                            
  [                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
    [0, 0, 0, 0, 0, 0, 0, 0, 2,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 4, 4, 4, 4, 4, 0, 0, 4, 4, 4, 4, 0, 0, 0, 0, 4, 4, 0, 0, 0, 0, 0, 4, 4, 0, 0, 4, 4, 4, 4, 4, 0, 0, 4, 4,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , A,  ,  ,  ,  ,  ,  ,  ,  A  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 2, 3, 3, 3,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 0, 4,  ,  ,  ,  ,  , 4, 4,  ,  ,  ,  , 4, 4, 0, 0,  ,  , 0, 4, 4, 4, 4,  ,  , 4, 0,  ,  ,  ,  ,  , 4, 4,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 3,  , 3, 3, 3, 3,  ,  , 3, 3,  ,  , 3, 3, 3,  , 3,  ,  , 3,  ,  ,  ,  ,  ,  ,  ,  , A,  ,  ,  ,  ,  ,  ,  ,  ,  ,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , A,  ,  ,  , 3, 3, 4,  ,  ,  ,  ,  ,  ,  , 2,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 3, 3,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 2, 2, 2, 2, 3,  , 4,  ,  , 2,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 4, 4,  ,  , 4,  ,  ,  ,  ,  ,  ,  , 4,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 3,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 3,  ,  ,  ,  ,  ,  ,  ,  ,  , 3,  ,  ,  ,  ,  ,  ,  ,  ,  ,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 3, 3,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 2, 0, 2,  ,  ,  ,  , A,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 2, 0, 0, 0, 4,  ,  ,  ,  , 2, 0,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , M,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 3,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , A,  ,  ,  , 1,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 3, 3, 3, 3,  ,  ,  ,  ,  ,  ,  , 3, 3,  , 3, 3,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 2,  ,  ,  ,  ,  ,  ,  , 2, 2,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , A,  ,  ,  ,  , 0, 0, 0,  ,  ,  , 3, 3,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , A,  ,  ,  ,  , 0, 0, 0, 0,  ,  , A,  , 2, 0, 0, 2,  , A,  ,  , 2,  ,  ,  , 2, 2,  ,  ,  ,  ,  ,  , 2, 2,  ,  ,  ,  ,  ,  , M, 2,  ,  ,  ,  , M, 2,  ,  ,  , 3,  ,  ,  , 1,  ,  ,  , A,  ,  , 2,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 3,  ,  ,  ,  ,  , 3,  ,  ,  ,  ,  ,  , 3,  ,  ,  ,  ,  ,  ,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 0, 0,  ,  ,  ,  ,  , 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 2, 2,  ,  ,  , 0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 0, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2,  , 2, 2, 2, 0, 2, 2, 2, 2, 2, 0,  ,  ,  , 1,  ,  ,  , 1,  ,  ,  , 2,  ,  , 0, 2, 2,  , 2, 2, 2, 2,  ,  , 2, 2, 2,  , 2, 2, 2,  ,  ,  ,  , 3,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,]
  ]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
];                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        

var Level_width = Level1_grid[2][0].length * 100;

//console.log('level width = ' + Level_width + 'px');

var Level1_renderBackground = function() {
  var x;
  var y;
  var radius;
  var opacity;

  Canvas_tempContext.clearRect(0, 0, Game_viewportWidth, Game_viewportHeight);
  // sky
  Canvas_tempContext.fillStyle = '#1f4379';
  Canvas_tempContext.fillRect(0, 0, Game_viewportWidth, Game_viewportHeight);

  // stars
  for (var n=0; n<40; n++) {
    x = Math.random() * Game_viewportWidth;
    y = Math.random() * Game_viewportHeight;
    radius = Math.random() * 3;
    opacity = Math.random();
    Canvas_tempContext.save();
    Canvas_tempContext.beginPath();
    Canvas_tempContext.arc(x, y, radius, 0, Math.PI*2, false);
    Canvas_tempContext.fillStyle = 'white';
    Canvas_tempContext.globalAlpha = opacity;
    Canvas_tempContext.fill();
    Canvas_tempContext.restore();
  }

  // darker mountains
  Canvas_tempContext.beginPath();
  Canvas_tempContext.moveTo(0, 500);
  Canvas_tempContext.lineTo(500, 400);
  Canvas_tempContext.lineTo(600, 450);
  Canvas_tempContext.lineTo(Game_viewportWidth, 500);
  Canvas_tempContext.lineTo(Game_viewportWidth, Game_viewportHeight);
  Canvas_tempContext.lineTo(0, Game_viewportHeight);
  Canvas_tempContext.closePath();
  Canvas_tempContext.fillStyle = '#0f2b55';
  Canvas_tempContext.fill();


  Canvas_pixelate(Canvas_tempCanvas, Canvas_tempContext, 3);

  
  x = 0;
  while (x <= Level_width) {
    Canvas_backgroundContext.drawImage(Canvas_tempCanvas, 0, 0, Game_viewportWidth, Game_viewportHeight, Math.floor(x), 0, Game_viewportWidth, Game_viewportHeight);
    x+= Game_viewportWidth;
  }
};

var Level1_blocks = {
  // grass
  0: {
    index: 0,
    render: function() {
      // '#37660c'
      Level_renderParticleBlock(['#749f29', '#84a33b', '#718612', '#9fc236', '#2b4400', '#94a729', '#acd440'], 2);
    }
  },
  // dirt
  1: {
    index: 1,
    render: function() {
      Level_renderParticleBlock(['#593f28', '#3d220d', '#573b25', '#6b4f39', '#553923', '#3d210b'], 2);
    }
  },
  // grass with top
  2: {
    index: 2,
    render: function() {
      // '#47660c'
      Level_renderParticleBlock(['#749f29', '#84a33b', '#718612', '#9fc236', '#2b4400', '#94a729', '#acd440'], 2);
      Level_renderTopHighlight();
    }
  },
  // grass with top and bottom
  3: {
    index: 3,
    render: function() {
      // '#47660c'
      Level_renderParticleBlock(['#749f29', '#84a33b', '#718612', '#9fc236', '#2b4400', '#94a729', '#acd440'], 2);
      Level_renderTopHighlight();
      Level_renderBottomShadow();
    }
  },
  // grass with bottom
  4: {
    index: 4,
    render: function() {
      // '#47660c'
      Level_renderParticleBlock(['#749f29', '#84a33b', '#718612', '#9fc236', '#2b4400', '#94a729', '#acd440'], 2);
      Level_renderBottomShadow();
    }
  },
  // evil zone
  5: {
    index: 5,
    render: function() {
      Level_renderBrickBlock('#302d36', '#19171c', '#45414f');
    }
  },



  
};



