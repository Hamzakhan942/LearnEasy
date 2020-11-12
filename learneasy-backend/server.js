const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('./passport');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(morgan('dev'))

app.use(cors());
app.use(express.json());
app.use(session({
    secret: 'fraggle-rock',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false
    }
}))

// app.use( (req, res, next) => {
//     console.log('req.session', req.session);
//     next()
// });


// Passport
app.use(passport.initialize())
app.use(passport.session()) // calls the deserializeUser

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established succefully!");
})

const studentRouter = require('./routes/student');
app.use('/student', studentRouter); 

module.exports = app

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}) 
