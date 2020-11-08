const router = require('express').Router();

let Teacher = require('../models/teacher.model');

// GET all teachers

router.route('/').get((req, res) => {
    Teacher.find()
        .then(teachers => res.json(teachers))
        .catch(err => res.status(400).json('Error: ' + err));
});

// ADD teachers

router.route('/add').post((req, res) => {
    const teacherName = req.body.teacherName;
    const teacherId = req.body.teacherId;
    const course = req.body.course.map(cou => cou);

    const newTeacher = new Teacher({teacherName, teacherId, course});
    newTeacher.save()
        .then(teachers => res.json('Teacher Added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// GET teacher by university ID

router.route('/rollno/:id').get((req, res) => {
    Teacher.find()
    .then(teachers => res.json(teachers.filter(teacher => teacher.teacherId == req.params.id)))
    .catch(err => res.status(400).json('Error: '+err));
});

// GET teacher by Database ID

router.route('/:id').get((req, res) => {
    Teacher.findById(req.params.id)
    .then(teacher => res.json(teacher))
    .catch(err => res.status(400).json('Error: '+err));
});

// UPDATE teacher by database ID

router.route('/update/:id').post((req, res) => {
    Teacher.findById(req.params.id)
    .then(teacher => {
        teacher.teacherName = req.body.teacherName;
        teacher.teacherId = req.body.teacherId;
        teacher.course = req.body.course;

        teacher.save()
        .then( teacher => res.json('Teacher Updated'))
        .catch(err => res.status(400).json('Error: ', err));
    }
    )
    .catch(err => res.status(400).json('Error: ' + err));
})

// DELETE teacher by mongo ID

router.route('/delete/:id').delete((req, res) => {
    Teacher.findByIdAndDelete(req.params.id)
    .then(teacher => res.json('Teacher '+teacher.teacherName + ' has been succesfully deleted!'))
    .catch(err => res.status(400).json('Error: '+err));
})

module.exports = router;