const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const Schema = mongoose.Schema;

const studentSchema = new Schema({
    username: {
        type: String,
        required: true,
        minlength: 3,
        trim: true,
    },
    email: {
        type: String,
        required: true
    },
    rollno: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    scores: [
    ],
}, {
    timestamps: true,
});

studentSchema.methods = {
    checkPassword: function (inputPassword) {
        return bcrypt.compareSync(inputPassword, this.password)
    },
    hashPassword: plainTextPassword => {
        return bcrypt.hashSync(plainTextPassword, 10)
    }
}

studentSchema.pre('save', function (next) {
    if (!this.password) {
      console.log('models/user.js =======NO PASSWORD PROVIDED=======')
      next()
    } else {
      console.log('models/user.js hashPassword in pre save');
      this.password = this.hashPassword(this.password)
      next()
    }
})

const Student = mongoose.model('student', studentSchema);
 
module.exports = Student;