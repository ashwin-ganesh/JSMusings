/*
Promises !

new Promise(  executor  function(resolve, reject) { ... } );
The executor function is executed immediately by the Promise implementation,


The executor is called before the Promise constructor even returns the created object

The executor normally initiates some asynchronous work and then, once that completes, calls either the resolve or reject function
to resolve the promise or else reject it if an error occurred


*/

/*
Callback Hell

AsyncTask(param, function(err, result) {

    // Some Processing
    if(err) throw err;
    AsyncTask1(param, function(err, result) {

        // Some Processing
        AsyncTask12(param, function(err, result) {



        });



    });

})

*/


/*
Concept implementation

var promise = new Promise(function(resolve, reject){

 // Do some opertion

 if(operation_is_done)
  resolve(pass_arguments);
 else {
   reject(pass_arguments);
 }

})

promise.then(function(passed_arguments){


  return
})

\
*/
