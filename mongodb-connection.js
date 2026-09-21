const mongoose = require('mongoose');

const uri = 'mongodb+srv://<pragnasri>:<Pragnasri09>@cluster0.8cwcqn9.mongodb.net/?appName=Cluster0';

mongoose.connect(uri)
    .then(() => {
        console.log('MongoDB Atlas connected successfully');
    })
    .catch((error) => {
        console.log('Connection failed:', error);
    });