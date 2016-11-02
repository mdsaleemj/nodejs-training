
var fs = require('fs');
//using ES6 promise 

if(typeof Promise){
	console.log("Promise API is available")
}

function checkFile(file){
  return new Promise(function(resolve,reject){
  	  fs.exists(file,function(exists){
         if(exists){
         	return resolve(file); //resolving with filename
         }
          return reject(new Error(file + " not exists"));
  	  })

  });
}

function statFile(file){
 return new Promise(function(resolve,reject){
     fs.stat(file,function(err,stats){
     	//console.log("file stats: "+JSON.stringify(stats));
     	if(stats.isFile()){
     		return resolve(file,stats);
     	}
        return reject(err);
     }) 
 })
}

function readFile(file){
 return new Promise(function(resolve,reject){
   fs.readFile(file,'utf8',function(err,content){
   	  if(err) return reject(err);
   	   resolve(content);
   })
 })
}


checkFile('data.json')
.then(function(file){
	console.log("file exists:" +file);
	return statFile(file);
})
.then(function(file,stats){
	console.log(file,stats);
	console.log("file stats: "+stats);
	return readFile(file);
})
.then(function(content){
	console.log("file reading");
	console.log(content);
})
.catch(function(err){
	console.error("Catch Block :" +err);
})