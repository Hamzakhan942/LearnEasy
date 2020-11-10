const router = require('express').Router();

const { authenticate } = require('../middlewares/authentication');

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

// GET student by university ID

router.route('/rollno/:id').get((req, res) => {
    Student.find()
    .then(student => res.json(student.filter(student => student.studentId == req.params.id)))
    .catch(err => res.status(400).json('Error: '+err));
});

// GET teacher by Database ID

router.route('/:id').get((req, res) => {
    Student.findById(req.params.id)
    .then(student => res.json(student))
    .catch(err => res.status(400).json('Error: '+err));
});

// UPDATE teacher by database ID 

router.route('/update/:id').post((req, res) => {
    Student.findById(req.params.id)
    .then(student => {
        student.studentName = req.body.studentName;
        student.studentId = req.body.studentId;

        student.save()
        .then( student => res.json('student Updated'))
        .catch(err => res.status(400).json('Error: ', err));
    }
    )
    .catch(err => res.status(400).json('Error: ' + err));
})

// DELETE teacher by mongo ID

router.route('/delete/:id').delete((req, res) => {
    Student.findByIdAndDelete(req.params.id)
    .then(student => res.json('Student '+ student.studentName + ' has been succesfully deleted!'))
    .catch(err => res.status(400).json('Error: '+err));
})

// router.route('/login/:id').get(authenticate(Student), (req, res) => { 
//     Student.find({studentName : req.body.studentName}) 
//         .then(students => res.json(students))
//         .catch(err => res.status(400).json('Error: ' + err));  
// })
 
module.exports = router;  