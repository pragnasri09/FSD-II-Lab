const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to the Home Page');
});

app.get('/about', (req, res) => {
    res.send('This is the About Page');
});

app.get('/contact', (req, res) => {
    res.send('This is the Contact Page');
});

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
