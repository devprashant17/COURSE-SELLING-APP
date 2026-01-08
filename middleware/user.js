require('dotenv').config();
const JWT_USER_PASSWORD = process.env.JWT_USER_PASSWORD; 
const jwt = require('jsonwebtoken');

function userMiddleware(req,res,next){
    const token = req.headers.token;
    const decoded = jwt.verify(token,JWT_USER_PASSWORD)

    if(decoded){
        req.userId = decoded.id;
        next();
    }
    else{
        res.status(403).json({
            msg:"You are not signed in"
        });
    }
}

module.exports = {
    userMiddleware: userMiddleware
}