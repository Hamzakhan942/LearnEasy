const router = require('express').Router();

let Student = require('../models/student.model');

router.route('/').get((req, res) => {
    Student.find()
        .then(students => res.json(students))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const studentName = req.body.studentName;
    const studentId = req.body.studentId;

    const newStudent = new Student({studentName, studentId});
    newStudent.save()
        .then(students => res.json('Student Added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;