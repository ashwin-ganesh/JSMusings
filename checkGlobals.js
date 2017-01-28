//console.log(global);
// console.log(this === global);

// console.log(Object.keys(global));
// console.log(Object.keys(this).length);


Object.keys(global).forEach(function(property) {

    if (typeof global[property] == "object")
        console.log(property);


})


Object.values(global).forEach((value) => {
    if (typeof value == "object")
        console.log(value);

})
