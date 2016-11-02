var fs = require('fs');
var zlib = require('zlib');

var readstream = fs.createReadStream('input.txt');

var compress = zlib.createGzip();

var writestream = fs.createWriteStream('input.txt.gz');

//Connecting the readstream->compress zlib stream -> writestream

readstream.pipe(compress).pipe(writestream);

