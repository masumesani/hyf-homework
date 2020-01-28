let lifeSpan = 80 * 525600 ;// according to google application
let total = 0;
let seriesDurations = [
    {
        title: 'The Marvelous Mrs. Maisel',
        days: 0,
        hours: 18,
        minutes: 3,
    },
    {
        title: "The Handmaid's Tale",
        days: 2,
        hours: 1,
        minutes: 51,
    },
    {
        title: 'Good Omens',
        days: 2,
        hours: 7,
        minutes: 51,
    },
    {
        title: "Monty Python's Flying Circus",
        days: 3,
        hours: 6,
        minutes: 21,
    }
]
for (let i = 0; i < seriesDurations.length; i++) {
    
    let daysInMins = seriesDurations[i].days;
    daysInMins = daysInMins * 1440; 
    let hoursInMins = seriesDurations[i].hours;
    hoursInMins = hoursInMins * 60;
    let mins = seriesDurations[i].minutes;
       let totalTimeInMins = daysInMins + hoursInMins + mins;
    
    let percentageSerialTime = (totalTimeInMins / lifeSpan) * 100;
    
    total = total + percentageSerialTime;
    console.log(`${seriesDurations[i].title} took ${percentageSerialTime.toFixed(3)} % of my life`); // toFixed method rounds the decimal to 3 digits in this case.
 }
 
 console.log(`In total, I dedicated  ${total.toFixed(3)}% of my life span to watch TV series in last 3 months!!!`);