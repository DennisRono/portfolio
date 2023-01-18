require('dotenv').config()
var jwt = require('jsonwebtoken')

function verifyToken(req, res,next){
    const token = req.header('authToken');
    if(!token){return res.send("Access denied")}
    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET)
        req.user = verified
        next()
    } catch (error) {
        res.send({"invalid Token":error})
    }
};

module.exports = verifyToken