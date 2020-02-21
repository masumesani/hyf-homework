const dataHelper = require('../data/dataHelper')

module.exports = (req,res)=>{
    
    const result = dataHelper.getMealsAugmentedWithReviews();

    res.send(result);
}