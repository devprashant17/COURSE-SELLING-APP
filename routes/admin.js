const express = require('express');
const adminRouter = express.Router();
const {adminModel} = require('../db');

adminRouter.post("/signup",(req,res)=>{         // /user/signup laai handle garxa
    res.json({
        msg: "SIGNED UP!"
    })
});

adminRouter.post("/signin",(req,res)=>{

});

//For admin to see all their courses
adminRouter.get("/courses",(req,res)=>{

});

//For admin to make change to their courses
adminRouter.put("/course",(req,res)=>{

});

//For admin to delete their courses
adminRouter.delete("/course",(req,res)=>{

});

module.exports = {
    adminRouter: adminRouter
};