function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {
    if (shouldTellFunnyJoke) {
        logFunnyJoke();
    } else {
        logBadJoke();
    }
}

jokeCreator(Math.random() > 0.50, function () {
    console.log(`Today, my son asked "Can I have a book mark?" and I burst into tears. 11 years old and he still doesn't know my name is Brian.`)
}, function () {
    console.log(`How do you make holy water? You boil the hell out of it.`)
})