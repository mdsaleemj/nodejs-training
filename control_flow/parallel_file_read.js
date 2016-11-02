var fs= require('fs');

function readJSONFile(filename){
  return new Promise(function(resolve,reject){
  	fs.readFile(filename, 'utf8', function (err, content){
    if (err){ 
    	 return reject(err);
    }
   	  return resolve(JSON.parse(content));
 	});

  });
  
}

var files = ['data.json','data1.json'];

// var myPromises = [];
// files.forEach(function(file){
//    myPromises.push(readJSONFile(file));
// });

//console.log(myPromises);

Promise.all(files.map(readJSONFile))
.then(function(results){
	console.log(results);
}).catch(function(err){
	console.log(err);
})