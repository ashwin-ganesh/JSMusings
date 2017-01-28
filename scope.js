// var , let & cons

'use strict';

// console.log('Value before loop ' , i);

// for(var i = 0; i < 10 ; i++){
//   console.log(i);
// }

/*
  let introduces block scope
  use strict - prevents accidental declration of global variables - bad !

*/

var i = 9999;


(function (){

  for( i = 0; i < 10 ; i++){
    console.log(i);
  }



})();

console.log('Value after loop is', i);

// const - you cannot reassign the variable

const x = 1;
x = 2;
console.log(x);

// Absolutely use const, use let if you HAVE to change the variables


// Minimize mutable state - Universal truths 
