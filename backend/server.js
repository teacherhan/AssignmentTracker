const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());



var url = "mongodb://localhost:27017/NewDB"
mongoose.connect(url, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
mongoose.connect(url, function (err, db) {
    if (err) throw err;
    console.log("DB Connected Successfully");
})

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users')

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})

