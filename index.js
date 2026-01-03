const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const {userRouter} = require('./routes/user');
const {courseRouter} = require('./routes/course');

app.use("/user",userRouter);
app.use('/course',courseRouter);

app.post("/admin/signup",(req,res)=>{

});

app.post("/admin/login",(req,res)=>{

});

app.post("/createCourse",(req,res)=>{

});

app.post("/deleteCourse",(req,res)=>{

});

app.post("/addContentToCourse",(req,res)=>{

});
