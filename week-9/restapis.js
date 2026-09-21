const express = require('express');

const app = express();

app.use(express.json());

let students = [
    { id: 1, name: 'Pragna', age: 20 },
    { id: 2, name: 'Anu', age: 21 }
];

app.get('/api/students', (req, res) => {
    res.json(students);
});

app.post('/api/students', (req, res) => {
    const student = {
        id: students.length + 1,
        name: req.body.name,
        age: req.body.age
    };

    students.push(student);
    res.json(student);
});

app.put('/api/students/:id', (req, res) => {
    const student = students.find(s => s.id == req.params.id);

    if (student) {
        student.name = req.body.name;
        student.age = req.body.age;
        res.json(student);
    } else {
        res.status(404).json({ message: 'Student not found' });
    }
});

app.delete('/api/students/:id', (req, res) => {
    students = students.filter(s => s.id != req.params.id);
    res.json({ message: 'Student deleted successfully' });
});

app.get('/', (req, res) => {
    res.send(`
        <h1>Student Management</h1>
        <p>RESTful API is running successfully.</p>
        <p>GET: /api/students</p>
        <p>POST: /api/students</p>
        <p>PUT: /api/students/:id</p>
        <p>DELETE: /api/students/:id</p>
    `);
});

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});