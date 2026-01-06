const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');

const mongoose = require('mongoose');

const {userRouter} = require('./routes/user');
const {courseRouter} = require('./routes/course');
const {adminRouter} = require('./routes/admin');

app.use("/user",userRouter);
app.use('/course',courseRouter);
app.use('/admin',adminRouter);

async function listen(){
    await mongoose.connect('mongodb+srv://prashantkarki:nHTQ99lLTXjSI6aI@cluster0.bc0zy5d.mongodb.net/COURSE-SELLING-APP');
    app.listen(3000);
}

listen();