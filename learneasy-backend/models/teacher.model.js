const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const teacherSchema = new Schema({
    teacherName: {
        type: String,
        required: true,
        minlength: 3,
        trim: true,
    },
    teacherId: {
        type: String,
        required: true
    },
    course: {
        type: String,
        trim: true,
        required: true,
    }
}, {
    timestamps: true,
});

const Teacher = mongoose.model('teacher', teacherSchema);
 
module.exports = Teacher;