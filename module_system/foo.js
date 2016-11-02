'use strict';

var bar = require('./bar');

//console.log(bar);
bar();

console.log("Inside foo module");



console.log("global variable bar",global.bar);

//Try to print module object , process object , global object