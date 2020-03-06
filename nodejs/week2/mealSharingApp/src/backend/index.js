const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');

const mealsRouter = require('./routes/meals.js');
const reservationsRouter = require('./routes/reservations.js');
const reviewsRouter = require('./routes/reviews.js');

app.use(function (req, res, next) {
    const msg = `${(new Date()).toLocaleString()} request received for path: ${req.url}`;
    console.log(msg);
    fs.appendFile('logs', msg + '\r\n', () => {
        next()
    });
})

app.get('/meals', mealsRouter);
app.get('/meals/:id', mealsRouter);
app.get('/reservations', reservationsRouter);
app.get('/reservations/:id', reservationsRouter);
app.get('/reviews', reviewsRouter);
app.get('/reviews/:id', reviewsRouter);


app.listen(port, () => console.log(`listening on port ${port}`));