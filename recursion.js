// Recursion - When a func calls itself until it doesn't

let categories = [

  {id : 'animals' , 'parent':null},
  {id : 'mammals' , 'parent':'animals'},
  {id : 'cats' , 'parent':'mammals'},
  {id : 'dogs' , 'parent':'mammals'},
  {id : 'chihuahua' , 'parent':'dogs'},
  {id : 'labrador' , 'parent':'dogs'},
  {id : 'persian' , 'parent':'cats'},
  {id : 'siamese' , 'parent':'cats'},
  {id : 'humans' , 'parent':null}

];

let buildTree = (categories,parent) => {

   let node = {};
   categories
    .filter(x => x.parent == parent)
    .forEach(x => node[x.id] = buildTree(categories , x.id) )

    return Object.keys(node).length === 0? null: node;

}

console.log(JSON.stringify(buildTree(categories,null),null ,2 ));

// How difficult is it if done with reduce ? Very much i guess !

categories.reduce((tree,animal) => {



},{})
