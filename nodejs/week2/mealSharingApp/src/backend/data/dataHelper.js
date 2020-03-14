module.exports.getMeals = () => {
    const meals = require('./meals.json');
    return meals;
}

module.exports.getReservations = () => {
    const reservations = require('./reservations.json');
    return reservations;
}

module.exports.getReviews = ()=>{
    const reviews = require('./reviews.json');
    return reviews;
}