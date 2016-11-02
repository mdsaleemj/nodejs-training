

var fs = require('fs');
//Async function to read file
function readJSON(filename , callback){
	fs.readFile(filename,'utf8',function(err,data){
		if(err){
			//handle error by passing error
			 callback(err);
		}
        
		return callback(null,JSON.parse(data));
        
	});
}
//Invoke the readJSON by passing the callback
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

/*Output :Error
SyntaxError: Unexpected token {
    at Object.parse (native)
    at C:\xx\xx\xx\xx\asynchronous_programming\error_handling_1.js:12:29
    at FSReqWrap.readFileAfterClose [as oncomplete] (fs.js:380:3)
 */