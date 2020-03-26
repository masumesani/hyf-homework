const dataHelper = require('../data/dataHelper');

module.exports = (req,res)=>{

    let meals = dataHelper.getMeals();

    let portion = parseInt(req.query.portion) || 0;

    meals = meals.filter(meal=>meal.maxNumberOfGuests>portion);

    let result = dataHelper.getMealsAugmentedWithReviews(meals)

    res.send(result);
}