'use strict';

module.exports = function bar(){
	console.log("Inside the bar function");
}

console.log("Inside the bar module");


//Global variable :Everything that is assigned to this variable will end up automatically in the global scope.
//storing many things will pollute the global namespace  
global.bar = {
	msg : "set in bar.js"
};


