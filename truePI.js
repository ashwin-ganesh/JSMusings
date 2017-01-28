
// The normal way of doing inheritances

// function Circle(radius) {
//   this.radius = radius;
// }
// Circle.prototype.area = function() {
//   return Math.PI * this.radius * this.radius;
// }
// // Constructor pattern for creating new objects
// let circ = new Circle(5);


// The correct way of doing inheritance in js

let Circle = {
  create(radius) {
    // Creating prototypal linkage using Object.create
    let obj = Object.create(this);
    obj.radius = radius;
    return obj;
  },
  area() {
    return Math.PI * this.radius * this.radius;
  }
};
let circ = Circle.create(5);
console.log(circ.area());

console.log(Object.getPrototypeOf(Circle));
