const movies = require('./movies');

let longTitlelist = value => value.title.length > 8;
let resultOfLongTitle = movies.filter(longTitlelist)/// should return an array of movies withtitle longer than 8

//console.log(resultOfLongTitle)

let shortTitlelist = value => value.title.length <= 8;
let resultOfShortTitle = movies.filter(shortTitlelist);

//console.log(resultOfShortTitle);




//Count the number of movies made between 1980-1989 (including both the years)
let wantedYear = value => (value.year > 1979 && value.year < 1990); /// at frist itreration frist value is first object, then you ask for comparing year prorties 
let resultofwanted = movies.filter(wantedYear);
//console.log(resultofwanted);
let calmovies = resultofwanted.length;
//console.log(calmovies);

//Create a new array that has an extra key called tag. The tag is based on the rating: Good (>= 7), Average (>= 4 and < 7), Bad (< 4)
// 

let moviesWithTag = movies.map(item => {
    if (item.rating >= 7) {
        item.tag = "Good";
        return item
    } else if
        (item.rating >= 4 && item.rating < 7) {
        item.tag = "Average";
        return item
    } else {
        item.tag = "Bad";
        return item
    }
});

//console.log(moviesWithTag);

const GoodRating = movies.filter(item => item.rating > 6).map(item => item.rating);  // Using chaining, first filterd the movies array to only contain the movies rated higher than 6. And map the movies array to only use the rating of the movies.

//console.log(GoodRating);


//count the total number of movies containing any of following keywords: Surfer, Alien or Benjamin

const moviesTitleFirstWord = movies.map(value => value.title.toLowerCase()).filter(item => {
    if (item.includes("Surfer".toLowerCase())) {
        let result = 0
        result += 1;
        return result
    }

})
//console.log(moviesTitleFirstWord);

const moviesTitleSecondWord = movies.map(value => value.title.toLowerCase()).filter(item => {
    if (item.includes("Alien".toLowerCase())) {
        let result = 0
        result += 1;
        return result
    }

})
//console.log(moviesTitleSecondWord);


const moviesTitleThirdWord = movies.map(value => value.title.toLowerCase()).filter(item => {
    if (item.includes("Benjamin".toLowerCase())) {
        let result = 0
        result += 1;
        return result
    }

})
//console.log(moviesTitleThirdWord);


function totalKeyword(firstWord, secondWord, thirdWord) {
    let total = (firstWord.length) + (secondWord.length) + (thirdWord.length);
    return total
};
let final = totalKeyword(moviesTitleFirstWord, moviesTitleSecondWord, moviesTitleThirdWord)
//console.log(final);
// should be able write it by using reduce?


//Create an array of movies where a word in the title is duplicated.


let duplicatedTitleWord = movies.filter( items =>  {
    let titleToWorkOn = items.title.split(' '); 
    for (let i = 0; i < titleToWorkOn.length ; i++) { 
        currentWord = titleToWorkOn[i].toLowerCase();  
        for (let j = i + 1; j < titleToWorkOn.length; j++) { 
            let newArrayTitle = titleToWorkOn[j].toLowerCase();
            if (currentWord === newArrayTitle) { 
                return true; 
            } 
        }
    }
    return false; 

});
let howManyDuplicated = duplicatedTitleWord.length;
console.log(howManyDuplicated);

//const duplicatedWordsInTitleArray = duplicatedTitleWord.map(item => item.title);

//console.log(duplicatedWordsInTitleArray); 















