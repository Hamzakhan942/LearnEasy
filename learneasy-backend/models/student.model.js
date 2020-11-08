const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentSchema = new Schema({
    studentName: {
        type: String,
        required: true,
        minlength: 3,
        trim: true,
    },
    studentId: {
        type: String,
        required: true
    },
}, {
    timestamps: true,
});

const Student = mongoose.model('student', studentSchema);
 
module.exports = Student;