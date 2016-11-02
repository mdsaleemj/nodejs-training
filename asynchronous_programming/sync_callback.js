
//ordinary function . Also called Pure function

function add(a,b){
	return a+b;
}


//callback function but synchronous

function add(a, b ,callback) {
	 callback(a+b);
}


console.log("before");

add(1,2,function(result){
  console.log('Result: '+ result);
})

console.log("after");

/*
output :

before
Result : 3
after

*/

