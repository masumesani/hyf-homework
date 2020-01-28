function calcAge() {
    //A future age calculator
    let input = document.getElementById("yearOfBirth");
    let yearOfBirth = parseInt(input.value);
    let input2 = document.getElementById("yearFuture")
    let yearFuture = parseInt(input2.value);

    let age = yearFuture - yearOfBirth;
    let outputText = `You will be ${age} years old in ${yearFuture}`;

    let output = document.getElementById("age-ify");
    output.innerHTML = outputText;
}
function calcDogAge() {
    //A future dog age calculator
    let input = document.getElementById("dogYearOfBirth");
    let dogYearOfBirth = parseInt(input.value);
    let input2 = document.getElementById("dogYearFuture")
    let dogYearFuture = parseInt(input2.value);
    let input3 = document.getElementById("shouldShowResultInDogYears");
    let shouldShowResultInDogYears = input3.checked;


    let dogAge = dogYearFuture - dogYearOfBirth;

    let outputText = "";

    if (shouldShowResultInDogYears) {
        outputText = `Your dog will be ${dogAge * 7} dog years old in ${dogYearFuture}`;
    } else {
        outputText = `Your dog will be ${dogAge} human years old in ${dogYearFuture}`;
    }


    let output = document.getElementById("dog-age");
    output.innerHTML = outputText;
}
// House price calculator
function housyPricy() {
    let input = document.getElementById("customer");
    let customer = parseInt(input.value);
    let input2 = document.getElementById("wide")
    let wide = parseInt(input2.value);
    let input3 = document.getElementById("deep");
    let deep = parseInt(input3.value);
    let input4 = document.getElementById("high");
    let high = parseInt(input4.value);

    let houseSizeInM3 = (wide * deep * high);

    let input5 = document.getElementById("gardenSizeInM2");
    let gardenSizeInM2 = parseInt(input5.value);
    let input6 = document.getElementById(houseOffer);
    let houseOffer = parseInt(input6.value);

    let housePrice = (houseSizeInM3 * 2.5 * 1000 + gardenSizeInM2 * 300);

    let outputText = `${customer} should pay ${housePrice}`;

    if (houseOffer < housePrice) {
        outputText += `Congrats ${customer}! It is a good deal!`;
    } else {
        outputText += `${customer} think twice, you're paying too much`;
    }
    let output = document.getElementById("housey-pricy");
    output.innerHTML = outputText;

}
// Name generator
function nameGenerator() {
    let firstWords = ["Invincible", "Amazing", "Divine", "Magnificent", "Amazing", "Splendid", "Lovely", "Marvelous", "Fantastic", "Great"];
    let secondWords = ["Training", "Fitness", "Resort", "Holiday", "Connection", "Voyage", "Food", "Friend", "Toy", "Help"]
    let startupName = firstWords[Math.floor(Math.random() * 10) + 0] + " " + secondWords[Math.floor(Math.random() * 10) + 0];

    let output = document.getElementById("name-generator");
    output.innerHTML =`Your startup name will be  ${startupName}`;
}
    