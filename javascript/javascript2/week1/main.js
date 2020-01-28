let danishWords = ['ø', 'bil', 'plante', 'kaffe', 'bog', 'planetarium', 'du'];
let danishWords2 = ['ø', 'bil', 'a', 'kaffe', 'bog', 'planetarium', 'du'];
let housePrices = [3000000, 3500000, 1300000, 40000000, 100000000, 8000000, 2100000];
let animalName = ["Chestnut", "Citrus", "Cheddar","Cadbury","Panther", "Chanelle", "Ms Noblelickle", "Suduko", "Stevie", "Puffins", "Silhouette", "Cecily", "Raven", "Tiger", "Licorice","Stripes","Catwoman", "Ms Wild"];
window.onload =
    function(){
        //console.log(findAvgAndMed(medianPrice(housePrices), averagePrice(housePrices)));
        let shortest = findShortest(danishWords);
        let averagehousePrice = averagePrice(housePrices);
        let medianHousePrice = medianPrice(housePrices);
        let aveAndMed= findAvgAndMed(averagePrice(housePrices), medianPrice(housePrices));


        setText("shortest-word",shortest)
        setText("danish-words",danishWords);
        setText("average-price",averagehousePrice);
        setText("median-price",medianHousePrice);
        setText("average-median", JSON.stringify(aveAndMed, null, 4))

        
    }

function setText(id, value){
    let dom = document.getElementById(id);
    if (dom === null){
        alert(`cannot find id:'${id}'`);
        return
    }
    dom.innerHTML = value;
    
}
// frist task+ a bit more complicated one



function findShortest(arr) {
    let shortest = arr[0].length;
    let shortestWord = arr[0];
    for (let j = 1; j < arr.length; j++) {
        if (arr[j].length <= shortest) {
            shortest = arr[j].length;
            shortestWord = arr[j];
        }
    }
    return shortestWord;

}



// function findallShortests(arr) {
//     let shortest = arr[0].length;
//     let shortestWord = arr[0];
//     for (let j = 1; j < arr.length; j++) {
//         if (arr[j].length <= shortest) {
//             shortest = arr[j].length;
//             shortestWord = arr[j];
//         }
//     }
//     return shortestWord;

// }


//console.log(findShortest(danishWords)); // o

//console.log(findallShortests(danishWords2));
//[o,l]

// second task part 1: average
function averagePrice(arr) {
    for (let i = 0; i < arr.length; i++) {
        let sum = arr.reduce((previous, current) => current += previous);
        let avg = sum / arr.length;
        avg = Math.floor(avg);
        return avg

    }
}

//console.log(averagePrice(housePrices)); // 22557142

// second task part 2: median
function medianPrice(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr.sort((a, b) => a - b);
        let lowMiddle = Math.floor((arr.length - 1) / 2);
        let highMiddle = Math.ceil((arr.length - 1) / 2);
        let median = (arr[lowMiddle] + arr[highMiddle]) / 2;
        return median
    }

}

//console.log(medianPrice(housePrices));// 3500000

// second task part 3: object of average and median
function findAvgAndMed(average, median) {
    let obj = { average, median };
    return obj
}
//console.log(findAvgAndMed(medianPrice(housePrices), averagePrice(housePrices))); // Object {avg: 3500000, med: 22557142}

// spirit animal name
 
function getSpritName(arr) {
    let randomName = arr[Math.floor(Math.random()*arr.length)];
    return randomName
}
 

function getAnimalName(params) { 
    let userInputElement = document.getElementById("user-name").value;
    let nameSpaceElement = document.getElementById("animal-name");
    if(userInputElement === "") {
    nameSpaceElement.innerHTML =  `Please enter Your name`;
    } else { 
    nameSpaceElement.innerHTML =  `${userInputElement} - ${getSpritName(animalName)}`;
    }
};
