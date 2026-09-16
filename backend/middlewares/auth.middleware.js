const jsonwebtoken = require("jsonwebtoken");
const AppError = require("../utils/appError");
const authMiddleware = (req,res,next)=>{

    try{

        const token = req.cookies?.token;

        if(!token){
            throw new AppError("not authenticated!!",401);
        }

        const decode = jsonwebtoken.verify(token,process.env.JWT_SECRET,{algorithms:["HS256"]});

    
        req.user = {
            id:decode.id,
            user:decode.username
            
        }

        next()

    }catch(err){
        next(new AppError("invalid or expired token!!!", 401));
    }

}

module.exports = authMiddleware;