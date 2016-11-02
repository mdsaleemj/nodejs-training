
var fs = require('fs');

//creating stream with setting encoding
var readable = fs.createReadStream('input.txt','utf8');

//creating stream without encoding which means binary
//var readable = fs.createReadStream('input.txt');

readable.on('readable',function(){
	var chunk;
	while(null !== (chunk = readable.read())) {
	 console.log('recieved ' + chunk.length + 'bytes of data');
	 console.log(chunk);
	}

});
