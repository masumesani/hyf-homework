let travelInformation = {
    speed: 100,
    destinationDistance: 322,
};


function timeToGetThere(travelInformation) {
    consumedTime = travelInformation.destinationDistance / travelInformation.speed;
    let timeInHours = Math.floor(consumedTime);
    console.log(timeInHours);
    let timeInMinutes = consumedTime - timeInHours;
    timeInMinutes = timeInMinutes * 60;
    timeInMinutes = Math.floor(timeInMinutes);
    console.log(timeInMinutes);
    let time = `${timeInHours} hours and ${timeInMinutes} minutes`;
    return time;

}


let travelTime = timeToGetThere(travelInformation);
console.log(travelTime);