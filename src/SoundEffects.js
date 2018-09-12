//http://www.superflashbros.net/as3sfxr/
// then press control c to copy settings

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

  arcadeAudio.add('fire-ball', 5,
    [
      [3,,0.3062,0.4533,0.3957,0.0177,,0.2154,,,,,,,,,,,1,,,,,0.5]
    ]
  );

  arcadeAudio.add('start', 1,
    [
      [2,0.4045,0.2127,0.6091,0.5411,0.552,,-0.7327,0.0561,0.0021,,-0.5946,,0.2111,-0.9549,0.8694,0.0593,-0.6822,0.9964,-0.3453,0.4295,0.4381,,0.97]
    ]
  );

  arcadeAudio.add('jump', 2,
    [
      [0,,0.1756,,0.1978,0.339,,0.2471,,,,,,0.1883,,,,,0.8865,,,,,0.5]
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

  arcadeAudio.add('hit', 5,
    [
      //[3,0.0943,0.0682,0.0338,0.7676,0.5,,0.0001,-0.0676,0.0794,0.2326,-0.861,0.474,-0.0235,-0.5411,0.0969,0.0005,-0.0003,0.8762,-0.6923,0.4782,,0.3177,0.5],
      //[3,,0.01,,0.2457,0.6007,,-0.3863,,,,,,,,,,,1,,,,,0.5],
      [3,,0.096,,0.1501,0.3326,,-0.3845,,,,,,,,,,,1,,,,,0.5]
    ]
  );

  arcadeAudio.add('bad-guy-die', 5,
    [
      [3,0.0669,0.32,0.64,0.39,0.62,,0.0001,0.26,-0.926,0.1831,-0.36,0.5,,,,-0.0348,-0.48,0.3483,-0.012,0.66,0.0464,0.56,0.5]
    ]
  );

  arcadeAudio.add('player-hit', 4,
    [
      [3,0.0002,0.02,0.3558,0.9727,0.5,,0.0138,-0.8858,0.0016,0.8367,-0.9543,0.6003,,-0.7373,0.9221,-0.0312,-0.1326,0.9548,-0.4151,0.4419,0.0027,0.0959,0.5]
    ]
  );

  arcadeAudio.add('player-die', 1,
    [
      [3,,0.1099,0.3199,1,0.23,,0.4,-0.34,,,-0.4799,0.9499,,0.0281,0.2099,-0.1199,-0.1599,0.9952,0.1272,0.37,,0.0736,0.86]
    ]
  );


  arcadeAudio.add('player-win', 1,
    [
      [0,0.0009,0.1511,0.3111,0.9371,0.5483,,0.2513,-0.0433,0.3465,0.2313,0.5955,0.1058,0.0313,-0.1773,0.5405,-0.199,-0.0699,0.8486,0.4363,,,-0.4909,0.5]
    ]
  );

  arcadeAudio.add('laser-jam', 1,
    [
      [3,,0.0833,,0.248,0.2707,,-0.5066,,,,,,,,,,,1,,,,,0.5]
    ]
  );

  arcadeAudio.add('evil-online', 2,
    [
      [1,0.3546,0.01,0.0196,0.8704,0.1556,,-0.0008,-0.0255,,,-0.7422,0.5081,,0.0142,0.4572,0.0187,-0.6615,0.2794,-0.0333,0.3196,0.4398,-0.1309,0.5]
    ]
  );

  arcadeAudio.add('evil-offline', 2,
    [
      [0,0.0037,0.0443,0.0071,0.9835,0.0096,,0.605,0.6706,-0.0455,0.9295,-0.1253,0.3149,,0.0708,0.6381,0.693,-0.0557,0.383,-0.2426,,,,0.5]
    ]
  );







  

  //3,0.7894,0.2173,0.1645,0.9284,0.7468,,-0.2332,,0.6066,-0.7357,-0.2797,-0.2036,0.2118,-0.0009,,0.0292,-0.0086,0.9729,0.1956,0.7847,,0.0473,0.5


// cool sounds
  // 1,0.3377,0.7074,0.3589,0.4313,0.3127,,-0.3212,-0.0026,-0.0257,-0.6029,0.1261,-0.7064,0.0031,-0.0011,0.0696,0.0362,0.0347,0.991,-0.3213,0.0083,,-0.1037,0.5
// 2,0.4028,0.5312,0.0328,0.4486,0.1253,,0.1174,0.6336,0.0239,,0.3643,-0.6004,0.9064,-0.2041,0.8993,-0.4373,-0.8032,0.7917,0.0467,0.6994,0.0006,0.1103,0.5

// 3,0.0031,0.5832,0.4598,0.5202,0.5067,,0.0073,-0.358,0.2894,,-0.0507,0.5299,-0.6702,-0.3441,,0.594,-0.1075,0.4428,-0.1911,-0.0968,,0.0119,0.5



  // arcadeAudio.add('monster-die', 2,
  //   [
  //     //[3,,0.363,0.2436,0.2058,0.079,,0.0624,,,,0.8,0.74,,,,,,1,,,,,0.72]
  //     [3,0.1,0.42,0.4274,0.2192,0.1281,,-0.18,0.04,,,-0.14,,,,,-0.04,-0.1999,1,-0.0999,,,-0.0999,0.72]
  //   ]
  // );

  // arcadeAudio.add('player-die', 1,
  //   [
  //     [3,,0.1099,0.3199,1,0.23,,0.4,-0.34,,,-0.4799,0.9499,,0.0281,0.2099,-0.1199,-0.1599,0.9952,0.1272,0.37,,0.0736,0.86]
  //   ]
  // );

  // arcadeAudio.add('player-win', 1,
  //   [
  //     [0,,0.01,,1,0.23,,0.1599,-0.0399,0.8,0.5,-0.0199,,0.3899,-0.0199,,,,0.91,-0.0599,0.18,0.1099,,0.5699]
  //   ]
  // );
};


// 3,0.0014,0.3053,0.0138,0.8213,0.5,,-0.0108,,-0.4769,-0.7141,0.3471,0.8566,,-0.0046,0.4097,-0.0855,-0.0772,0.9907,,0.2409,,0.0277,0.5

// 0,0.2002,0.1916,0.32,0.0958,0.3736,,0.057,0.741,0.2579,0.9638,-0.7385,0.9617,-0.4299,-0.0826,0.5361,-0.0919,-0.2177,0.5072,-0.0033,0.4279,0.4097,,0.5

// 3,0.0081,0.3982,0.0226,0.7526,0.0289,,0.1378,0.1896,,-0.8011,-0.4009,,0.0523,0.4106,0.203,-0.0282,0.297,0.8297,-0.7879,0.0017,,-0.0003,0.5

// 3,0.2392,0.6816,0.1221,0.131,0.5,,0.0018,-0.1291,,-0.6143,-0.5646,0.7436,0.4014,0.1236,,-0.0484,-0.4453,0.7214,0.0425,0.7585,,0.021,0.5

// 3,0.2392,0.6816,0.1221,0.131,0.5,,0.0018,-0.1291,,-0.6143,-0.5646,0.7436,0.4014,0.1236,,-0.0484,-0.4453,0.7214,0.0425,0.7585,,0.021,0.5

// 0,,0.1613,,0.134,0.3722,,0.2683,,,,,,0.039,,,,,1,,,,,0.5

// 0,,0.1756,,0.1978,0.339,,0.2471,,,,,,0.1883,,,,,0.8865,,,,,0.5

// 3,0.0204,0.01,0.0301,0.9119,0.3938,,-0.0304,-0.0593,0.0002,0.6691,-0.1811,,-0.2366,-0.4108,,0.2626,-0.0426,0.9838,0.501,0.3863,0.9329,-0.3861,0.5
