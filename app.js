var qrImage = require('qr-image');
var fs = require('fs');

qrImage
  .image("http://www.nodejs.org", {type: 'png', size:10})
  .pipe(fs.createWriteStream('MyQRCode.png'));
