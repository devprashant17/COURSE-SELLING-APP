const express = require('express');
const userRouter = express.Router();            //const {Router}=require('express')
const bcrypt = require('bcrypt');
const {z} = require('zod');
const { purchasesModel } = require('../db');
const { userMiddleware } = require('../middleware/user');

const jwt = require('jsonwebtoken');
const JWT_USER_PASSWORD = process.env.JWT_USER_PASSWORD;  


const {userModel} =require('../db');

userRouter.post("/signup",async (req,res)=>{       // /user/signup laai handle garxa    
    const requiredBody = z.object({
        email: z.string().trim().email("Invalid email"),
        password: z.string().min(8).max(25),
        firstName: z.string().min(1),
        lastName: z.string().min(1)
    });

    const parsedData = requiredBody.safeParse(req.body);
    if(!parsedData.success){
        return res.json({
            msg:"Incorrect format",
            error: parsedData.error
        });
    }
    else{
        const {email,password,firstName,lastName} = parsedData.data;
        const hashedPassword =await bcrypt.hash(password,5);
        try{
            await userModel.create({
                email:email,
                password: hashedPassword,
                firstName: firstName,
                lastName: lastName
            });
            res.json({
            msg: "USER SIGNED UPPP!"
            });
        }
        catch{
            return res.status(500).json({
                msg:"Signup failed"
            });
        }
    }
});

userRouter.post("/signin",async (req,res)=>{
    const requiredBody = z.object({
        email: z.string().trim().email("Invalid email"),
        password: z.string().min(8).max(25)
    });

    const parsedData = requiredBody.safeParse(req.body);
    if(!parsedData.success){
        return res.json({
            msg:"Incorrect format",
            error: parsedData.error
        });
    }
    else{
        const { email,password } = parsedData.data;
        const user = await userModel.findOne({
            email: email
        });
            if(!user){
        return res.status(401).json({
            msg:"Incorrect creds"
        });
    }
    else{
        const passwordMatched = await bcrypt.compare(password,user.password);
        if(passwordMatched){
            const token = jwt.sign({
            id: user._id.toString()
         },JWT_USER_PASSWORD);
        return res.json({
            token: token
         });
        }
        else{
            return res.status(401).json({
                msg: "Incorrect creds"
         });
        }
    }

    }
});

//For users to see all the purchased courses
userRouter.get("/preview",userMiddleware,async (req,res)=>{
    const userId = req.userId;

    const purchases  = await purchasesModel.find({
        userId: userId
    });

    res.json({
        purchases
    });
});

module.exports = {
    userRouter: userRouter
};