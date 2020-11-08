const router = require('express').Router();

let Teacher = require('../models/teacher.model');

router.route('/').get((req, res) => {
    Teacher.find()
        .then(teachers => res.json(teachers))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const teacherName = req.body.teacherName;
    const teacherId = req.body.teacherId;
    const course = req.body.course;

    const newTeacher = new Teacher({teacherName, teacherId, course});
    newTeacher.save()
        .then(teachers => res.json('Teacher Added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;