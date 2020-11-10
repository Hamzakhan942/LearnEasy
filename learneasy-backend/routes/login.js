const app = require('../server');
const studentRouter = require('./student');
let Student = require('../models/student.model');
const router = require('express').Router();
const { authenticate } = require('../middlewares/authentication');


router.route('/:id').get(authenticate(Student), (req, res) => {
    req.url = '/studets'; 
    res.redirect('/students'); 
})

module.exports = router;    