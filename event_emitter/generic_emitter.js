
var FindPattern = require('./find_pattern');

var myPatternFinder = new FindPattern(/hello \w+/) ;

myPatternFinder
.addFile('file1.txt')
.addFile('file2.txt')
.find()
.on('found',function(file,match){
	console.log('Matched  ' + match + ' in file ' + file);
})
.on('error',function(err){
	console.log('Error emitted: ' + err.message);
})