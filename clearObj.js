// Types
function changeVal(x){

  x.runs = 4;

}

function clearObj(obj){

  var obj = {};
  return obj;
}

function deleteProperties(obj){
  Object.keys(obj).forEach(function(prop){
    delete obj[prop];
  });
}

var dhoni = {};
dhoni.runs = 5;

var kohli = dhoni;

deleteProperties(dhoni);
//dhoni = clearObj(dhoni);

console.log(dhoni);
console.log(kohli);
