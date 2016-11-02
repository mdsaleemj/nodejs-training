
var fs = require('fs');

var file = 'data.json';

fs.exists(file, function(exists){  //1st cb
	if(exists){
		fs.stat(file, function(error,stats){ //2nd cb
			if(error){ 
				throw error; //bad practice. only for demo
			}
			if(stats.isFile()){
				fs.readFile(file,"utf8",function(err,data){ //3rd cb
					if(error) {
						throw error;
					}
					console.log(data);
				});
			};
		});
	}
})