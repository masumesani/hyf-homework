function getEventWeekDay(daysUpToEvent) {
    let daysOfTheWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    return `Today is ${new Date()} . Your next event will be held on ${daysOfTheWeek[(daysUpToEvent + new Date().getDay()) % (daysOfTheWeek.length)]} `;
}
console.log(getEventWeekDay(4));
console.log(getEventWeekDay(6));
console.log(getEventWeekDay(0));
console.log(getEventWeekDay(21));
console.log(getEventWeekDay(2));
