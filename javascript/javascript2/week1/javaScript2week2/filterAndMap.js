
let numbers = [1, 2, 3, 4];
let newNumbers = [];

// for(let i = 0; i < numbers.length; i++) {
//     if(numbers[i] % 2 !== 0) {
//         newNumbers[i] = numbers[i] * 2;
//     }
// }
let oddNumber = num => num %2 !==0;

let result = numbers.filter(oddNumber);

newNumbers = result.map(num=>num*2);

console.log("The doubled numbers are", newNumbers);    