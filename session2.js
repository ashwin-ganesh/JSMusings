// Dynamic Typing


// Types - Primitive & Object

// var a = "123";
// console.log(typeof a);
// var a = 123;
// console.log(typeof a);
// var a = true;
// console.log(typeof a);
//
// var a = {};
// console.log(typeof a);
//
// var s = new String("abc");
// console.log(typeof s);

// Pass by value & reference

function changeVal(x){
  x = 3;
}
var a = 2;
changeVal(a);
console.log(a);
//console.log(x);

function changeObj(obj){
    obj.runs = 20;
}

var player = {};
player.runs = 10;
player.wickets = 2;
var dhoni = player;
var team = {};
team.captain = player;

//changeObj(player);
//console.log(player);

function clearObj(){
  obj = {};
  return obj;
}

function deleteProperties(obj){
  Object.keys(obj).forEach(function(prop){
    delete obj[prop];
  });
}

//player = clearObj();
deleteProperties(player);

console.log(player);
console.log(dhoni);
console.log(team);


// FOF enable creation of Higher Order functions

function sayHi(name){
  console.log("Hi " + name);
}

function sayHello(){
  console.log("Hello !");
}

// sayHi();
// sayHello();

function greet(fn,person){
  fn(person);
}

var person = "Lijo"
greet(sayHi,person);
greet(sayHello,person);

// // function callbacks & Abstraction

a = [1,2,3,4,5,6];

// for(var i = 0; i < a.length ; i ++ ){
//   console.log(a[i]);
// }
//
// a.forEach(function(num){
//
//   // console.log(num);
// });
//
// var obj = {};
// obj.value = 5;
//
// var a = [];
//
// for(var i = 0; i < 5 ; i++){
//   a.push(obj);
// }
//
// for(var i = 0; i < a.size ; i++){
//   var obj = a[i];
//
//   for(var j = 0; j < obj.)
// }
//
// a.forEach(function(obj){
//
//   obj.forEach(function (o){
//
//
//   });
// })

a2 = a.filter(function(num){
  return num >4 ;
});

console.log(a2);

// Nodejs - callbacks

function isBigger(a){
  return function (b){
     return a<b;
  }
}

var isBiggerThan5 = isBigger(5);
console.log(isBiggerThan5(10));
