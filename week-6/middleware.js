const express = require('express');

const app = express();

const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
};

app.use(logger);

app.get('/', (req, res) => {
    res.send('Home Page');
});

app.get('/about', (req, res) => {
    res.send('About Page');
});

app.get('/student/:id', (req, res) => {
    res.send(`Student ID: ${req.params.id}`);
});

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});