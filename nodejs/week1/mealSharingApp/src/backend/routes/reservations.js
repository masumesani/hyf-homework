const dataHelper = require('../data/dataHelper');

module.exports = (req,res) => {

    const result = dataHelper.getReservations();

    res.send(result);
}