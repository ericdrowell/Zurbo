var fs = require('fs')
fs.readFile('./src/index.html', 'utf8', function (err, indexContent) {
  if (err) {
    return console.log(err);
  }

  fs.readFile('./img/sprites.base64.txt', 'utf8', function (err, spritesContent) {
    if (err) {
      return console.log(err);
    }

    fs.readFile('./dist/zurbo.min.js', 'utf8', function (err, jsContent) {
      if (err) {
        return console.log(err);
      }

      var newIndexContent = indexContent;
      newIndexContent = newIndexContent.replace('{sprites}', spritesContent);
      newIndexContent = newIndexContent.replace('{js}', jsContent);

      fs.writeFile('./dist/index-uncompressed.html', newIndexContent, 'utf8', function (err) {
         if (err) return console.log(err);
      });
    });
  });


});