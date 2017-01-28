// Module provides scope

// IIFE
// Function constructor


function sayHi(){
  console.log('Hi');
}

function sayHey(){
  console.log('Hey');
}

function repeat(n,fn){
  for(var i = 0; i < n ; i++)
   fn();
}

//repeat(10,sayHi);

a = [1,2,3,4,5,6,7,8,9,10];


console.log(a.filter(function(num){
  return num>=5;
}));

function filter(array,test){
  var arr =[];
  for(var i = 0 ; i < array.length ; i++){
    if(test(array[i]))
      arr.push(array[i]);
  }
  return arr;
}

/*console.log(filter(a,function(num){
  return num>=5;
}));*/

function listEven(arr , displayfn){
  evenNos = arr.filter(function (num){
    return num%2 == 0;
  });
  displayfn(evenNos);
};


function printToConsole(element){
   console.log(element);
};

//listEven(a,printToConsole);


/*Game = {};

Game.score = 0;

Game.roll = function (bottles){
    this.score =this.score + bottles;
}

Game.rolls = [];


Game.roll(8);
console.log(Game);
//console.log(global);*/

//console.log(Object.keys(global));
//console.log(module);


function BowlingGame(){
  this.points = 0;
  console.log(this);
};

BowlingGame.prototype.roll = (number) => {
  console.log(this);
  this.points = this.points + number;
}

console.log('Defining a new object');
var g = new BowlingGame();

console.log(Object.keys(g));
console.log('Calling roll');
g.roll(10);
console.log(g.points);


function repeat(times , fn){
  for(var i = 0; i < times ; i ++)
    fn();
}

var Game = {};
Game.points = 0;
Game.rolls = [];
Game.frameScores = [];
Game.roll = function(bottlesDown){
  this.rolls.push(bottlesDown);
};
Game.isRollStrike = function(roll){
  return roll === 10;
}
Game.isFrameSpare = function(roll1 , roll2){
  return (roll1 + roll2 === 10 );
}

Game.bonusForSpare = function(nextRoll){
  return 2*nextRoll;
}

Game.bonusForStrike = function(roll1 , roll2){
  if(this.isRollStrike(roll1))
    return 2*10;
  else {
    return (roll1 + roll2)*2;
  }
}

Game.score = function(){
  /*var that = this;
  this.rolls.forEach(function(roll,index){

   that.points += roll;

 });

  for(var frame = 0 ; frame < 10 ; frame++){
      if(this.isRollStrike(this.rolls[frame]))
        this.points += roll;
  }*/

  for(var i = 0 ; i < this.rolls.length ; i++ ){
    if(this.isRollStrike(this.rolls[i])){
        this.points += 10 + this.bonusForStrike(this.rolls[i+1] , this.rolls[i+2]);
      }
    else
    if(this.isFrameSpare(this.rolls[i],this.rolls[i+1])){

        this.points += 10 + this.bonusForSpare(this.rolls[i+2]);
        console.log(this.points);
      i++;
    }
    else {
      this.points += this.rolls[i] + this.rolls[i+1];
      i++;
      console.log(this.points);
    }

  }

  return this.points;
};

Game.roll(6);
Game.roll(4);
repeat(18,function(){
  Game.roll(1);
});

console.log(Game.score());
