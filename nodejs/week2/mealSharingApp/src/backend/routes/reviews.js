const dataHelper = require('../data/dataHelper');

module.exports = (req, res) => {

    let result = dataHelper.getReviews();
    if (req.params.id) {
        result = result.find(review => review.id.toString() === req.params.id);
        if (result) {
            res.send(result)
            return
        }
        res.sendStatus(404);
        return;
    }
    res.send(result);
}