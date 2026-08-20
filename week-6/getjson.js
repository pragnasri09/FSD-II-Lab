const express = require('express');

const app = express();

app.get('/student', (req, res) => {
    res.json({
        name: 'Pragna',
        rollNo: 101,
        department: 'CSE'
    });
});

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000/student');
});