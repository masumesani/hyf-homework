let names = ['Peter', 'Ahmad', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala'];
let nameToRemove = 'Ahmad';

// Write some code here
//let filteredItems = names.filter(item => item !== nameToRemove);
for(i=0; i<names.length; i++) {
    if ( names [i] === nameToRemove ) {
        names.splice(i, 1); 
      }
};
console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']
let items = ['a', 'b', 'c', 'd', 'e', 'f'];
let valueToRemove = 'c';
//filteredItems = items.filter(item => item !== valueToRemove);
//console.log(filteredItems); // ['a', 'b','d', 'e', 'f']
for(i=0; i<items.length; i++) {
    if ( items [i] === valueToRemove ) {
        items.splice(i, 1); 
      }
};
console.log(items);
// Code done
