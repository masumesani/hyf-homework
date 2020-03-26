const dataHelper = require('../data/dataHelper');

module.exports = (req,res)=>{
    
    let meals = dataHelper.getMeals();
    
    if(!req.query.margin){

        res.send(dataHelper.getMealsAugmentedWithReviews(meals));
        
    } else {
        let margin = parseInt(req.query.margin);

        meals = meals.filter(meal=>meal.price<margin);

        const result = dataHelper.getMealsAugmentedWithReviews(meals);
    
        res.send(result);
    }
}