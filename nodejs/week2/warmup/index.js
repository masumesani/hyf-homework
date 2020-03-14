const express = require('express');
const app = express();
const port = 3000;

app.get('/numbers/add', (req, res) => {
    let first = parseInt(req.query.first);
    let second = parseInt(req.query.second);
    if (!first || !second) {
        res.sendStatus(422);
        return
    }
    res.status = 200;
    res.send({ result: first + second });
})

app.get('/numbers/multiply/:first/:second', (req, res) => {


    let first = parseInt(req.params.first);
    let second = parseInt(req.params.second);
    if (!first || !second) {
        res.sendStatus(422);
        return
    }
    res.status = 200;
    res.send({ result: first * second });
})

app.listen(port, () => { console.log(`I am listening on ${port}`) });

