const router = require('express').Router();
let Student = require('../models/student.model');
const passport = require('../passport');
// const { compare } = require('bcryptjs');

router.post('/signup', (req, res) => {
    console.log('user signup');

    const { username, password } = req.body
    // ADD VALIDATION
    Student.findOne({ username: username }, (err, user) => {
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
                password: password
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
        res.send(userInfo);
    }
)

router.get('/get', (req, res, next) => {
    console.log('===== user!!======')
    console.log(req.user)
    if (req.user) {
        console.log(req.user)
        res.json({ user: req.user })
    } else {
        console.log('here' + req.user)
        res.json({ user: null })
    }
})

router.post('/logout', (req, res) => {
    if (req.user) {
        req.logout()
        res.send({ msg: 'logging out' })
    } else {
        res.send({ msg: 'no user to log out' })
    }
})

module.exports = router