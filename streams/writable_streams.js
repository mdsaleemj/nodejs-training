
var fs = require('fs');

var writer = fs.createWriteStream('output.txt');

for (var i = 0; i < 100; i ++) {
  writer.write('hello, '+ i +' !\n');
}
writer.end('This is the end\n');

writer.on('finish',function(){
  console.log('All writes are now complete.');
});