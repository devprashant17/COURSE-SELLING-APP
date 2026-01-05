const {adminRouter} = require('express');

adminRouter.post("/signup",(req,res)=>{         // /user/signup laai handle garxa
    res.json({
        msg: "SIGNED UP!"
    })
});

adminRouter.post("/signin",(req,res)=>{

});

//For admin to see all their courses
userRouter.get("/courses",(req,res)=>{

});

//For admin to make change to their courses
userRouter.put("/course",(req,res)=>{

});

//For admin to delete their courses
userRouter.delete("/course",(req,res)=>{

});

module.exports = {
    adminRouter: adminRouter
};