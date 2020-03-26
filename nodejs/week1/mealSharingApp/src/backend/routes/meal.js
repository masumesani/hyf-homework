const dataHelper = require("../data/dataHelper");

module.exports = (req, res) => {
  const meals = dataHelper.getMeals();

  const randomMealIndex = Math.floor(Math.random() * meals.length);

  const meal = meals[randomMealIndex];

  const result = dataHelper.getMealsAugmentedWithReviews([meal]);

  res.send(result[0]);
};
