const express = require('express');
const { userMiddleware } = require('../middleware/user');
const { purchasesModel } = require('../db');
const Router = express.Router;            //const {Router}=require('express')
const courseRouter = Router();

//For user to purchase course
courseRouter.post("/purchase",userMiddleware,async(req,res)=>{
    const userId = req.userId;
    const courseId = req.body.courseId;
    await purchasesModel.create({
        courseId: courseId,
        userId: userId
    });

    res.json({
        msg:"Course purchased",
        courseId: courseId
    });
});

//For user to see all the available courses
courseRouter.get("/preview",async (req,res)=>{
    const courses  = await purchasesModel.find({});

    res.json({
        courses
    });

});

module.exports = {
    courseRouter: courseRouter
};