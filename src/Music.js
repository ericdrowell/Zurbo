var audio;

var Music_init = function() {
    // This music has been exported by SoundBox. You can use it with
    // http://sb.bitsnbites.eu/player-small.js in your own product.

    // See http://sb.bitsnbites.eu/demo.html for an example of how to
    // use it in a demo.

    // Song data
    var song = {
      songData: [
        { // Instrument 0
          i: [
          1, // OSC1_WAVEFORM
          192, // OSC1_VOL
          128, // OSC1_SEMI
          0, // OSC1_XENV
          1, // OSC2_WAVEFORM
          191, // OSC2_VOL
          116, // OSC2_SEMI
          9, // OSC2_DETUNE
          0, // OSC2_XENV
          0, // NOISE_VOL
          6, // ENV_ATTACK
          22, // ENV_SUSTAIN
          34, // ENV_RELEASE
          0, // ARP_CHORD
          0, // ARP_SPEED
          0, // LFO_WAVEFORM
          69, // LFO_AMT
          3, // LFO_FREQ
          1, // LFO_FX_FREQ
          1, // FX_FILTER
          23, // FX_FREQ
          167, // FX_RESONANCE
          0, // FX_DIST
          32, // FX_DRIVE
          77, // FX_PAN_AMT
          6, // FX_PAN_FREQ
          25, // FX_DELAY_AMT
          6 // FX_DELAY_TIME
          ],
          // Patterns
          p: [1],
          // Columns
          c: [
            {n: [136,137,139,149,146,144,154,151,147,158,156,158,154,149],
             f: []}
          ]
        },
      ],
      rowLen: 5513,   // In sample lengths
      patternLen: 32,  // Rows per pattern
      endPattern: 0,  // End pattern
      numChannels: 1  // Number of channels
    };

    var player = new CPlayer();
    player.init(song);
    player.generate();
    var wave = player.createWave();
    audio = document.createElement("audio");
    audio.src = URL.createObjectURL(new Blob([wave], {type: "audio/wav"}));



};

var Music_play = function() {

    audio.play();
};