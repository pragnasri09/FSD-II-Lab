const express = require('express');

const app = express();

app.get('/user/:name', (req, res) => {
    const name = req.params.name;
    res.send(`Hello ${name}`);
});

app.get('/search', (req, res) => {
    const name = req.query.name;
    const age = req.query.age;
    res.send(`Name: ${name}, Age: ${age}`);
});

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});