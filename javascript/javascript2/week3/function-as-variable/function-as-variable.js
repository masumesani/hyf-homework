
const funVacation = () => { console.log("Have fun and enjoy your vacation :)") }
const happyNewYear = () => { console.log("May yaer ahead brings you happiness and joy <3") }
const safeTrip = () => { console.log("Drive safe") }

let arrayOfFunctions = [];
arrayOfFunctions.push(funVacation);
arrayOfFunctions.push(happyNewYear);
arrayOfFunctions.push(safeTrip);


arrayOfFunctions.forEach((value) => {
    value()
})


const mathFunctions = {
    add: (a, b) => (a + b),
    subtact: (a, b) => (a - b),
    divide: (a, b) => (a / b),
    multiply: (a, b) => (a * b),
    sampleValue1: 1,
    sampleValue2: 2,
};

mathFunctions.multiply(mathFunctions.add(mathFunctions.sampleValue1, mathFunctions.sampleValue2), mathFunctions.sampleValue2)