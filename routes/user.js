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

//For user to see all the purchased courses
userRouter.get("/purchases",(req,res)=>{

});

module.exports = {
    userRouter: userRouter
};