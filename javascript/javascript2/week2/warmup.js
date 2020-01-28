
let numbers = [1, 2, 3, 4];
let newNumbers = [];

let oddNumber = num => num %2 !==0;

let result = numbers.filter(oddNumber);

newNumbers = result.map(num=>num*2);

console.log("The doubled numbers are", newNumbers);    