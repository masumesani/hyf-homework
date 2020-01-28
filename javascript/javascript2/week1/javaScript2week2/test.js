console.log("hi I am up ");
let numbers = [1, 2, 3, 4];
let newNumbers = [];

// for(let i = 0; i < numbers.length; i++) {
//     if(numbers[i] % 2 !== 0) {
//         newNumbers[i] = numbers[i] * 2;
//     }
// }

// newNumbers = numbers.map(x % 2 !== => x * 2);
let filteredNumber = [];
filteredNumber = numbers.filter(num => num %2 !==0 );
newNumbers = numbers.map(

//newNumbers = numbers.map(num => num % 2 !== 0 num * 2);
// shouold return false
// newNumbers = numbers.map(function (num) {
//     if (num % 2 !== 0) {
//         return num*2
//     }
// });

// newNumbers = numbers.filter(()=>{
//     num % 2 !==0
//     return num * 2
    
// }

console.log("The doubled numbers are", newNumbers);    
// console.log("The filtered numbers are", getnewNumbers); 