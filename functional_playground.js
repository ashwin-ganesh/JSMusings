function object(o) {
    function F() {}
    F.prototype = o;
    return new F();
}


if (typeof Object.create !== 'function') {
    Object.create = function(o) {
        function F() {}
        F.prototype = o;
        return new F();
    };
}
// var newObj = Object.create(objToInheritFrom)

// Functors - map , filter ..


const fs = require('fs');

// fs.readFile('data.txt','utf8', (err,data) =>{
//   if (err) throw err;
//   console.log(data);
// });

let promise = new Promise((resolve, reject) => {

    fs.readFile('data1.txt', 'utf8', (err, data) => {
        if (err)
            reject(err);

        // console.log(data);
        resolve(data);
    });

});

promise.then(function(data){
  console.log('Some data is here');
  console.log(data);
},function(err){
  console.log('Looks like there was some error');
  console.log(err);
})
