var fs = require('fs')
fs.readFile('./dist/zurbo-concatenated.js', 'utf8', function (err, jsContent) {
  if (err) {
    return console.log(err);
  }



  var newJsContent = '(function(){' + jsContent + ';Game.init();})();';

  fs.writeFile('./dist/zurbo-wrapped.js', newJsContent, 'utf8', function (err) {
     if (err) return console.log(err);
  });
  


});