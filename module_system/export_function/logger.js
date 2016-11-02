//file logger.js

//single point of public/main api
module.exports = function(message){
	console.log('info : '+message);
}


//Also can be expanded to show the secondary or advanced use cases.
module.exports.verbose = function(message){
	console.log('verbose : '+message)
}


//Tip 
/*
  You can expose any configuration in json format via exporting single function

  module.exports = function(){
	return {
	  "host" : "abc@xyz.com",
	   "db"  : "xxx",
	}

  }
*/