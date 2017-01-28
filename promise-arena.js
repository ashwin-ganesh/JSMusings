var arr = [1, 2, 3];

// // arr.forEach( (val,index) => console.log(val + ' ' + index )  );
//
// // arr.forEach((va))
//
// const add1 = (a) => a + 1;
//
// // const add1 = function(a){
// //   return a+1;
// // }
//
// const times2 = (a) => a * 2;
//

var animals = [{
    name: 'Waffles',
    type: 'dog',
    age: 12
}, {
    name: 'Fluffy',
    type: 'cat',
    age: 14
}, {
    name: 'Spelunky',
    type: 'dog',
    age: 4
}, {
    name: 'Hank',
    type: 'dog',
    age: 11
}, ];
//
// var filteredAnimals = animals.filter(function(obj) {
//     return obj.age > 13;
// }).map(function(obj) {
//     return obj.name;
// });
//
// console.log(filteredAnimals);
//
//
// var filteredAnimals = animals
//     .filter(obj => obj.age > 13)
//     .map(obj => obj.name);
// console.log(filteredAnimals);
//
// var sum = animals.map( obj => obj.age).reduce((age1, age2) => age1 + age2,0)
// console.log(sum);
//
// console.log(`In JavaScript this is
//  not legal.`);
//
//
// var flatttened  = [[1,2],[3,4],[5,6]];
//
// console.log(flattened.reduce((p, c) => p.concat(c), []));
//
// flattened.reduce(function(a,b){
//  return a.concat(b);
// },[]);
//
// function square(x){
//   return x*x;
// }
//
// function twox(x){
//   return 2*x;
// }
//
// fns = [square , twox];
//
// var finalVal = fns.reduce( function(val , fn){
//   return fn(val);
// } , 2)
//
// var finalVal = fns.reduce((val,fn) => {
//   console.log(fn(val));
//   return fn(val);
// } , 2);
//
// console.log(finalVal);
// console.log(twox(square(2)));


let promiseToCleanTheRoom = new Promise(function(resolve, reject) {

    // Do what you are supposed to do

    let done = false;

    if (done)
        resolve('Cleaned');
    else {
        reject('Not doing');
    }



});

// then is executed only when the promise is resolved.

promiseToCleanTheRoom.then(function(fromResolved) {

    console.log(fromResolved);

}).catch(function(fromReject) {
    console.log(fromReject);
});


AsyncTask(param, function(err, result) {

    // Some Processing

    AsyncTask1(param, function(err, result) {

        // Some Processing
        AsyncTask12(param, function(err, result) {



        });



    });

})


readFromFile('/path/to/file' , function(err,contents){
  if(!err){


    var writeContents = f(contents);

    writeToFile('/path/to/file',writeContents,  function(err , contents){




    });

  }
  else {

  }


});
