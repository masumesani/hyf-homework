const getMeals = () => {
    const meals = require('./meals.json');
    return meals;
}

module.exports.getMealsAugmentedWithReviews = (meals, reviews) => {
    meals = meals || getMeals();
    reviews = reviews || require('./reviews.json');
    const result = meals.map(meal => {
        meal.reviews = reviews.filter(review => review.mealId === meal.id);
        return meal;
    });

    return result;
}

module.exports.getMeals = getMeals;

module.exports.getReservations = () => {
    const reservations = require('./reservations.json');
    return reservations;
}