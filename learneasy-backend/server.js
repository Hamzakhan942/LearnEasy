const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const session = require('express-session');


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

app.use( (req, res, next) => {
    console.log('req.session', req.session);
    next()
});

// app.post('/signup/', (req, res) => {
//     console.log('user signup '+ req.body.username);
//     req.session.username = req.body.username;
//     // req.session.save()
//     // res.send({ some: 'json' })
//     res.end()
// })  



// app.get('/', (req, res) => {
//     console.log('inhere ');
//     req.session.username = 'hamza';
//     res.end()
// })  

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established succefully!");
})

// const teacherRouter = require('./routes/teacher');
// const studentRouter = require('./routes/student');
// const loginRouter = require('./routes/login');

// app.use('/teachers', teacherRouter);
// app.use('/students', studentRouter); 
// app.use('/login', loginRouter); 

module.exports = app

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}) 
