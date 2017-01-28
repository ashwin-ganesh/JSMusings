
function sayHi(){
  console.log('Hi !!');
}

function sayHello(){
  console.log('Hello !!');
}

greet(function(){
  console.log('Hey !!');
} )

function greet(fn){
  fn();
}
//console.log(func);


function changeString(s){
  //s = "abd";
  //s = new String("abd");
  s[0] = 'x';

}

var testString = "abc";
changeString("abc");
//console.log(testString);

var testString2 = new String("abc");
console.log(testString2);
console.log(testString2[0]);

//console.log(typeof testString);
//console.log(typeof testString2);

changeString(testString2);
console.log('changed string is ' + testString2);

console.log(testString2[2] = 'd');
console.log(testString2);

//console.log(global.process.env.NODE_ENV);
// console.log(Object.keys(global));
//
// console.log('------------------------------------');
// //
// Object.keys(global).forEach(function(key){
//    var val = global[key];
//    if(typeof val == "function")
//     console.log(key);
// });

//console.log(typeof global.Buffer);
//console.log(require);



//console.log(Object.keys(global.global));



//console.log(Object.keys(global));

function doAsyncTask(parameter,callback){
   // DB code which runs asynchronously..

   processedName = "Lijo";

   callback(processedName);
}

doAsyncTask('/file/path', function(name){

    console.log('Hi ' + name);

});


var val = 1;

(function(){
  var val = 2;
})();

console.log(val);

function changeObj(obj){
  obj.runs = 5;
}

var player = {};
player.runs = 10;
changeObj(player);
console.log(player);
// Get the data

// Print the data
