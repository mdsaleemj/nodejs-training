

var fs = require('fs');
function readJSON(filename , callback){
	fs.readFile(filename,'utf8',function(err,data){
		if(err){
			//handle error by passing error
			return callback(err);
		}
		try {
			//parse the file . This is a sync logic ,
         var json = JSON.parse(data);
		}
		catch(e){
			//again invoke callback if error
			return callback(e);
		}
		//no error, invoke callback with data, 
        return callback(null,data);
     });
}

readJSON("data.json", function(err,data){
	if(err){
	  console.log("**ERROR***:",err);
	  return;
	}
	console.log(data);
});

/*output:Success:
{
        "language" : "js",
        "engine"    : "v8"
}
*/
//Output Error:
//**ERROR***: [SyntaxError: Unexpected token {]
