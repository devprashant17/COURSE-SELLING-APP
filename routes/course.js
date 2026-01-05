const express = require('express');
const Router = express.Router;            //const {Router}=require('express)
const courseRouter = Router();

//For user to purchase course
courseRouter.post("/purchase",(req,res)=>{

});

//For user to see all the available courses
courseRouter.get("/preview",(req,res)=>{

});

module.exports({
    courseRouter: courseRouter
});