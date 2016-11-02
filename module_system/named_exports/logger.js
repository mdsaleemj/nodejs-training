//logger.js

'use strict'

//assign the function directly in the exports object
exports.info = function(message){
  console.log('info :' + message);
}

exports.verbose = function(message){
  console.log('verbose :'+message);
}