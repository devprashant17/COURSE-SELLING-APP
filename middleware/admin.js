require('dotenv').config();
const JWT_ADMIN_PASSWORD = process.env.JWT_ADMIN_PASSWORD; 
const jwt = require('jsonwebtoken');

function adminMiddleware(req,res,next){
    const token = req.headers.token;
    const decodedInfo = jwt.verify(token,JWT_ADMIN_PASSWORD);

    if(decodedInfo){
        req.userId = decodedInfo.id;
        next();
    }
    else{
        res.status(403).json({
            msg:"You are not signed in"
        })
    }
}

module.exports = {
    adminMiddleware: adminMiddleware
}