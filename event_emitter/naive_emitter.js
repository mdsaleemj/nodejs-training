//create list of files with some content to be searched


var EventEmitter = require('events').EventEmitter;
var fs = require('fs');


/*
 find the pattern of text in the file using regex
 @param files  list of files array
 @regex string/regex   pattern to be matched in the file content
 */
function findPattern(files,regex){
  var emitter = new EventEmitter();
  files.forEach(function(file){
    fs.readFile(file,'utf8', function(err,content){
    	if(err)
    		return emitter.emit('error',err);  //return is very important here

    	emitter.emit('fileread',file);
    	var match = null;
    	if(match = content.match(regex)){
    		match.forEach(function(elem){
    			emitter.emit('found',file,elem);
    		});
    	}
    });
  });
  return emitter;

}


//invoking the findPattern method

findPattern(['file1.txt','file2.txt'], 
			 /hello \w+/g
).on('fileread',function(file){
   console.log(file + ' was read');
}).on('found',function(file,match){
   console.log('Matched  ' + match + ' in file ' + file);
}).on('error',function(err){
   console.log('Error emitted: '+err.message);
})
