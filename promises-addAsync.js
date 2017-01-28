
let resultA, resultB, resultC;

function addAsync(num1, num2) {
	// use ES6 fetch API, which return a promise
// 	return fetch(`http://www.example.com?num1=${num1}&num2=${num2}`)
// 		.then(x => x.json());

    return Promise.resolve(num1 + num2);
}

addAsync(1, 2)
	// .then(success => {
	// 	resultA = success;
  //       return resultA;
	// })
	.then(success =>{resultA = success; return addAsync(success, 3) })
	.then(success => {
		resultB = success;
        return resultB;
	})
	.then(success => addAsync(success, 4))
	.then(success => {
		resultC = success;
        return resultC;
	})
    .then(success => {
        console.log('total: ' + success)
        console.log(resultA, resultB, resultC)
    });


let promise = new Promise((resolve , reject) => {

  // Do some async processing
  let is_success = true;
  let value = 5;
  if(is_success)
  resolve(value);
  else {
    reject('Some error happened')
  }

});

/*
What Promise.resolve does

return new Promise(function(resolve,reject){
     resolve(value);
})

*/

// let promise_test = Promise.resolve(null);
//
// console.log(promise_test);
//
// promise_test
//   .then((num) => console.log(num) )
//   .catch((msg) => console.log('Promise has arrived', msg) )
