let boughtCandyPrices = [];
const amountToSpend = Math.random() * 100;

function getPricePerGram(candyType) {
    candyType = candyType.toLowerCase();
    if (candyType === "sweet") return 0.5;
    if (candyType === "chocolate") return 0.7;
    if (candyType === "toffee") return 1.1;
    if (candyType === "chewing-gum") return 0.03;
}

function getTotalSpentMoney() {
    let index = 0;
    let sum = 0; 
    while(index<boughtCandyPrices.length) {
        sum += boughtCandyPrices[index];
        index++;
    }
    return sum;
}

function addCandy(candyType, weight) {
    let pricePerGram = getPricePerGram(candyType);
    let totalPrice = pricePerGram * weight;
    boughtCandyPrices.push(totalPrice);
}

function canBuyMoreCandy() {
    return (getTotalSpentMoney() < amountToSpend);
}

candyTypes = ["Sweet", "Chocolate", "Toffee", "Chewing-gum"];

while(canBuyMoreCandy()){
    console.log("You can buy more, so please do!")
    const candyType = candyTypes[Math.floor(Math.random()*4)];
    const weight = Math.random()*20;
    console.log(`You bought ${weight} grams ${candyType}`);
    addCandy(candyType, weight);
}

console.log("Enough candy for you!")