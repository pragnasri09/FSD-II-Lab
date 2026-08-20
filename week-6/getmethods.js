const express = require('express');

const app = express();

app.use(express.json());

app.get('/student/:id', (req, res) => {
    res.json({
        message: 'Student details',
        id: req.params.id
    });
});

app.post('/student', (req, res) => {
    res.json({
        message: 'Student added successfully',
        data: req.body
    });
});

app.put('/student/:id', (req, res) => {
    res.json({
        message: 'Student updated successfully',
        id: req.params.id,
        data: req.body
    });
});

app.delete('/student/:id', (req, res) => {
    res.json({
        message: 'Student deleted successfully',
        id: req.params.id
    });
});

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000/student/101');
});