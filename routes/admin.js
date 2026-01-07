const express = require('express');
const adminRouter = express.Router();
const {adminModel} = require('../db');
const jwt = require('jsonwebtoken');
const JWT_ADMIN_PASSWORD = process.env.JWT_ADMIN_PASSWORD; 
const bcrypt = require('bcrypt');
const {z} = require('zod');



adminRouter.post("/signup",async (req,res)=>{           // /admin/signup laai handle garxa    
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
            await adminModel.create({
                email:email,
                password: hashedPassword,
                firstName: firstName,
                lastName: lastName
            });
            res.json({
            msg: "ADMIN SIGNED UPPP!"
            });
        }
        catch{
            return res.status(500).json({
                msg:"Signup failed"
            });
        }
    }
});


adminRouter.post("/signin",async (req,res)=>{
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
        const admin = await adminModel.findOne({
            email: email
        });
        if(!admin){
            return res.status(401).json({
                msg:"Incorrect creds"
            });
        }
        else{
            const passwordMatched = await bcrypt.compare(password,admin.password);
            if(passwordMatched){
                const token = jwt.sign({
                    id: admin._id.toString()
                },JWT_ADMIN_PASSWORD);
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