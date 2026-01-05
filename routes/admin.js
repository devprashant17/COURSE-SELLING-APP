const {adminRouter} = require('express');

adminRouter.post("/signup",(req,res)=>{         // /user/signup laai handle garxa
    res.json({
        msg: "SIGNED UP!"
    })
});

adminRouter.post("/signin",(req,res)=>{

});

//For user to see all the purchased courses
adminRouter.get("/purchases",(req,res)=>{

});

module.exports = {
    adminRouter: adminRouter
};