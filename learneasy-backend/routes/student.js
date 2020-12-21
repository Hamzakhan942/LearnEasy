const router = require('express').Router();
let Student = require('../models/student.model');
const passport = require('../passport');
const { redirect } = require('../passport/localStrategy');
const checkAuthenticated = require('../passport/middleware');
// const { compare } = require('bcryptjs');

// function checkAuthenticated(req, res, next){
//     console.log("HEre")
//     if(req.isAuthenticated()){
//         next()
//     } else{
//         res.redirect('http://localhost:3000/login')
//     }

// }

router.post('/signup', (req, res) => {
    console.log('user signup');

    const { username, email, rollno, password } = req.body
    // ADD VALIDATION
    Student.findOne({ rollno: rollno }, (err, user) => {
        if (err) {
            console.log('User.js post error: ', err)
        } else if (user) {
            res.json({
                error: `Sorry, already a user with the username: ${username}`
            })
        }
        else {
            const newStudent = new Student({
                username: username,
                email: email,
                rollno: rollno,
                password: password,
                scores: []
            })
            newStudent.save((err, savedUser) => {
                if (err) return res.json(err)
                res.json(savedUser)
            }) 
        }
    })
})

router.post('/login',function (req, res, next) {
        console.log('routes/user.js, login, req.body: ');
        console.log(req.body)
        next()
    },
    passport.authenticate('local'),
    (req, res) => {
        console.log('logged in', req.user);
        var userInfo = {
            username: req.user.username
        };
        res.send( req.user);
    }
)

router.get('/get', checkAuthenticated, (req, res, next) => {
    console.log('===== user!!======')
    console.log(req.user)
    if (req.user) {
        console.log(req.user)
        res.json({ user: req.user })
    } else {
        console.log('here' + req.user)
        res.json({ user: null })
    }
    // return res.redirect('/student/dashboard')
})

router.get('/details', checkAuthenticated, (req, res) => {
    if (req.user) {
        Student.findById(req.user._id, (err, resp) => { 
            console.log("Sending.." + resp)
            res.json(resp)
        });
    } else {
        res.send({ msg: 'no user Found' })
    }
})

router.post('/score', (req, res) => {
    // console.log(req.body)
    let newValue = {subject: req.body.subject, score: req.body.score, total:req.body.total, comments: req.body.comments}
    console.log(newValue)
    Student.findByIdAndUpdate(
        req.user._id, 
        { $push: {scores: newValue}},
        function (error, success) {
            if (error) {
                console.log(error);
            } else {
                console.log("Success");
            }
        }
        )
})

router.post('/logout', (req, res) => {
    if (req.user) {
        console.log("Logging out")
        console.log(req.user)
        req.logout()
        res.send({ msg: 'logging out' })
        console.log(req.user)
    } else {
        res.send({ msg: 'no user to log out' })
    }
})

module.exports = router