const dataHelper = require('../data/dataHelper');

module.exports = (req, res) => {

    const reservations = dataHelper.getReservations();

    const randomIndex = Math.floor(Math.random()*reservations.length);

    const reservation = reservations[randomIndex];

    res.send(reservation);
}