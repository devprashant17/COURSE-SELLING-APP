require('dotenv').config();
const dbUrl = process.env.DATABASE_URL;
const PORT = process.env.PORT;
const JWT_SECRET = process.env.JWT_SECRET;

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
    await mongoose.connect(dbUrl);
    app.listen(PORT);
}

listen();