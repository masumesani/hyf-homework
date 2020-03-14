const dataHelper = require('../data/dataHelper')

module.exports = (req, res) => {
    let result = dataHelper.getMeals();
    if (!req.params.id) {
        if(req.query.maxPrice){
            const maxPrice = parseInt(req.query.maxPrice) || Infinity;
            result = result.filter(meal => meal.price < maxPrice);
        }

        if(req.query.title){
            const title = req.query.title ;
            result = result.filter(meal => meal.title.includes(title));
        }

        if(req.query.createdAfter){
            const createdAfter = new Date(req.query.createdAfter);
            result = result.filter(meal => new Date(meal.createdAt) > createdAfter);
        }

        if(req.query.limit){
            const limit = parseInt(req.query.limit) || Infinity;
            result = result.slice(0,limit)
        }

        res.send(result);
    }else{
        result = result.find(meal => meal.id.toString() === req.params.id);
        if(result){
            res.send(result)
            return
        }
        res.sendStatus(404);
    }


}