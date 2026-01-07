require('dotenv').config();
const dbUrl = process.env.DATABASE_URL;
const PORT = process.env.PORT;
  
const JWT_ADMIN_PASSWORD = process.env.JWT_ADMIN_PASSWORD;

const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');

const mongoose = require('mongoose');

app.use(express.json());

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