"use strict";

function Class(runs , wickets){

  this.runs = runs;
  this.wickets = wickets;
}

// Class.prototype.printRuns = () =>{
//
//   console.log(this.runs);
// };

console.log(Object.keys(Class));

const dhoni = new Class(99,0);
console.log(Object.keys(dhoni));

// Factories - functions that create objects and return them .Sometimes, you don't need classes.

// new & this are unintuitive shit ? Agree? Ashamed of it ! :/



// EXAMPLE STARTS

/*
//Function Constructor implementation

function Dog(sound){

  this.sound = sound;
}

Dog.prototype.talk = () => {
  console.log(this.sound);

}
*/


class Dog{

  constructor(){
    this.sound = "woof";
  }

  talk(){
    console.log(this.sound);
  }
}

const sniffles = new Dog();
sniffles.talk();

console.log('[[Prototype]] is' , sniffles.__proto__);
console.log('[[Prototype]] of function Dog is ' , Dog.__proto__);
console.log('Function prototype is' , Function.prototype);
console.log('Function [[prototype]] is ', Function.__proto__);
console.log('props are',Object.getOwnPropertyNames(Object.__proto__));

// // This case , this points to the DOM element or something , not sniffles :()
// $('button.myButton').click(sniffles.talk());
//
// // Workarounds
// $('button.myButton').click(_ => sniffles.talk());
// $('button.myButton').click(sniffles.talk.bind(sniffles));


// Better Workaround
const dog = () => {

    const sound = 'woof'
    const func = () => {

    }
    return {
        talk: () => {
            console.log(sound);
            newFunc: func
        }
    }
}

const newSniffles = dog();
newSniffles.talk();
