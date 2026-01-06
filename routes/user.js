const express = require('express');
const userRouter = express.Router();            //const {Router}=require('express')

userRouter.post("/signup",(req,res)=>{         // /user/signup laai handle garxa
    res.json({
        msg: "SIGNED UP!"
    })
});

userRouter.post("/signin",(req,res)=>{

});

//For user to see their purchased courses
userRouter.get("/purchases",(req,res)=>{

});


module.exports = {
    userRouter: userRouter
};