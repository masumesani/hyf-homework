let firstWords = ["Invincible", "Amazing", "Divine", "Magnificent", "Amazing", "Splendid", "Lovely", "Marvelous", "Fantastic", "Great"];
let secondWords = ["Training", "Fitness", "Resort", "Holiday", "Connection", "Voyage", "Food", "Friend", "Toy", "Help" ]
let startupName = firstWords[Math.floor(Math.random() * 10) + 0] + " " + secondWords[Math.floor(Math.random() * 10) + 0];

console.log(`Your startup name will be  ${startupName}`);