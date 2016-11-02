var fs = require('fs');
var stream = fs.createReadStream('./input.txt', 'UTF-8');
var data = '';

stream.once('data', function () {
  console.log('\n');
  console.log('Started Reading The input  File');
});

stream.on('data', function (chunk) {
  process.stdout.write(`chunk: ${chunk.length} \n`);
  data += chunk;
});

stream.on('end', function () {
  console.log(`Finished Reading The Input File ${data.length}`);
  console.log('\n');
});