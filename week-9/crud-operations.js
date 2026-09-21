const mongoose = require('mongoose');

const uri = 'mongodb+srv://<pragnasri>:<Pragnasri09>@cluster0.8cwcqn9.mongodb.net/?appName=Cluster0';

const studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    department: String
});

const Student = mongoose.model('Student', studentSchema);

async function crud() {
    try {
        await mongoose.connect(uri);
        console.log('MongoDB connected');

        const student = await Student.create({
            name: 'Pragna',
            age: 20,
            department: 'CSE'
        });
        console.log('Created:', student);

        const students = await Student.find();
        console.log('Read:', students);

        await Student.findByIdAndUpdate(student._id, {
            age: 21
        });
        console.log('Updated successfully');

        await Student.findByIdAndDelete(student._id);
        console.log('Deleted successfully');

        await mongoose.connection.close();
    } catch (error) {
        console.log(error);
    }
}

crud();