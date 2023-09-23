const jwt=require('jsonwebtoken')

const jwtMiddleWare = (req,res,next)=>{

    try{
        //access token from headers
        const token = req.headers['access_token']

        //true or false
        jwt.verify(token, "secretkey123")
        next()
    }
    catch{
        res.status(401).json({
            status:false,
            message:"please login first",
            statusCode:401

        })
    }
}
module.exports=jwtMiddleWare