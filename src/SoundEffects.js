var SoundEffects_play;

var SoundEffects_init = function() {
  var arcadeAudio = new ArcadeAudio();

  SoundEffects_play = function(key) {
    arcadeAudio.play(key);
  };

  arcadeAudio.add('laser', 5,
    [
      //[1,,0.2923,0.2756,0.0352,0.6778,0.2,-0.2526,,,,,,0.0766,0.1339,,,,1,,,0.2094,,0.38],
      [0,,0.15,0.5099,0.2743,0.9399,0.2726,-0.36,0.0599,0.27,0.1299,0.14,0.4499,0.4699,-0.3199,,-0.0399,-0.4199,1,,,0.0599,0.0199,0.5]
    ]
  );

  arcadeAudio.add('damage', 5,
    [
      [3,,0.1426,0.3949,0.4827,0.1746,,-0.0503,,,,,,,,,,,1,,,,,0.38],
      [3,,0.2189,0.7895,0.1358,0.1205,,-0.2385,,,,,,,,,0.2261,-0.144,1,,,,,0.38],
      [3,,0.1728,0.4996,0.2668,0.0808,,0.1381,,,,,,,,,0.4345,-0.0425,1,,,,,0.38],
      [3,,0.3191,0.5696,0.3516,0.775,,-0.3272,,,,0.6291,0.7188,,,0.6283,,,1,,,,,0.38]
    ]
  );

  arcadeAudio.add('monster-hit', 5,
    [
      [3,,0.356,0.76,0.47,0.1,,0.24,,0.85,0.66,,,,,,0.0291,-0.1671,1,,,,,0.79]
    ]
  );

  arcadeAudio.add('monster-die', 2,
    [
      //[3,,0.363,0.2436,0.2058,0.079,,0.0624,,,,0.8,0.74,,,,,,1,,,,,0.72]
      [3,0.1,0.42,0.4274,0.2192,0.1281,,-0.18,0.04,,,-0.14,,,,,-0.04,-0.1999,1,-0.0999,,,-0.0999,0.72]
    ]
  );

  arcadeAudio.add('start', 1,
    [
      [2,0.4045,0.2127,0.6091,0.5411,0.552,,-0.7327,0.0561,0.0021,,-0.5946,,0.2111,-0.9549,0.8694,0.0593,-0.6822,0.9964,-0.3453,0.4295,0.4381,,0.97]
    ]
  );

  arcadeAudio.add('monster-jump', 10,
    [
      [3,0.0799,0.2099,,0.4399,0.4099,,0.0199,0.14,0.1,0.0799,0.1,0.2599,0.2891,0.134,,-0.8799,0.56,0.1,0.18,0.81,0.18,0.5199,0.93]
    ]
  );

  arcadeAudio.add('player-die', 1,
    [
      [3,,0.1099,0.3199,1,0.23,,0.4,-0.34,,,-0.4799,0.9499,,0.0281,0.2099,-0.1199,-0.1599,0.9952,0.1272,0.37,,0.0736,0.86]
    ]
  );

  arcadeAudio.add('player-win', 1,
    [
      [0,,0.01,,1,0.23,,0.1599,-0.0399,0.8,0.5,-0.0199,,0.3899,-0.0199,,,,0.91,-0.0599,0.18,0.1099,,0.5699]
    ]
  );
};






