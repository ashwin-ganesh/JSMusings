// Currying

var _ = require('lodash')

let dragonNonCurry = (name, size, element) =>
    name + ' is a ' +
    size + ' dragon that breathes ' +
    element + '!';


let dragonCurry = _.curry(dragonNonCurry);

let dragon =
    name =>
    size =>
    element =>
    name + ' is a ' +
    size + ' dragon that breathes ' +
    element + '!'

console.log(dragonNonCurry('fluffykins', 'tiny', 'lightning'));

console.log(dragon('fluffykins')('tiny')('lightning'));

console.log(dragonCurry('fluffykins')('tiny')('lightning'));


// See second example from https://www.youtube.com/watch?v=iZLP4qOwY8I&index=6&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84
