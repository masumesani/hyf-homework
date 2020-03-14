const dataHelper = require('../data/dataHelper');

module.exports = (req, res) => {

    let result = dataHelper.getReservations();
    if (req.params.id) {
        result = result.find(reservation => reservation.id.toString() === req.params.id);
        if (result) {
            res.send(result);
            return;
        }
        res.sendStatus(404);
        return;
    }
    res.send(result);
}


