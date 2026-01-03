const express = require('express');
const Router = express.Router;            //const {Router}=require('express)

const courseRouter = Router();

//For user to purchase course
app.post("/course/purchase",(req,res)=>{

});

//For user to see all the available courses
app.get("/course/purchases",(req,res)=>{

});

module.exports({
    courseRouter: courseRouter
});