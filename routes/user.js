const express = require('express');
const Router = express.Router;            //const {Router}=require('express')

const userRouter = Router();

userRouter.post("/signup",(req,res)=>{         // /user/signup laai handle garxa
    res.json({
        msg: "SIGNED UP!"
    })
});

userRouter.post("/signin",(req,res)=>{

});

//For admin to post new courses
userRouter.post("/course",(req,res)=>{

});

//For admin to see all their courses
userRouter.get("/yourCourses",(req,res)=>{

});

//For admin to make change to their courses
userRouter.put("/course",(req,res)=>{

});


module.exports = {
    userRouter: userRouter
};