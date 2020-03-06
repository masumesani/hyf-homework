const express = require('express');
const url = require('url');
const app = express();
const port = 3000;

app.use(express.json());

const getValues = (query) => {
    let values = Object.values(query);
    values = values.map(parseFloat);
    return values;
}

const validate = (values, operation) => {
    if (values.findIndex(isNaN) > -1) {
        throw "Invalid numbers in queries"
    }
    if (operation === 'subtract' || operation === 'divide') {
        if (values.length !== 2) {
            throw "Only two numbers can be calculated for " + operation;
        }
    }
    if (operation === 'divide') {
        if (values[1] === 0) {
            throw "Dividion by zero!"
        }
    }
}

app.use((req, res, next) => {
    let operation = req.body ? req.body.method : req.path.split("/")[2]
    try {
        validate(getValues(req.query), operation);
        next();
    } catch (err) {
        res.status = 422;
        res.send(err);
    }
})

app.get('/calculator/add', (req, res) => {
    let values = getValues(req.query);
    let result = values.reduce((acc, cur) => acc + cur, 0);
    res.send({ result });
})

app.get('/calculator/multiply', (req, res) => {
    let values = getValues(req.query);
    let result = values.reduce((acc, cur) => acc * cur, 1);
    res.send({ result })
})

app.get('/calculator/subtract', (req, res) => {
    let values = getValues(req.query);
    let result = values[0] - values[1];
    res.send({ result });
})

app.get('/calculator/divide', (req, res) => {
    let values = getValues(req.query);
    let result = values[0] / values[1];
    res.send({ result });
})

app.post('/calculator', (req, res) => {
    let operation = req.body.method;
    let redirectUrl = url.format({
        pathname: '/calculator/' + operation,
        query: req.query
    })
    res.redirect(redirectUrl);
})

app.use(function (req, res, next) {
    let operation = req.path.split("/")[2];
    if (operation) {
        res.status(404).send('Unknown opertation: ' + operation)
    } else {
        res.status(404).send('Unknown opertation')
    }
})

app.listen(port, () => console.log(`listening on port '${port}`));