const express = require("express")
const router = express.Router()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const db = require("../utils/auth")
const { loginDataSchema } = require("../schemas/user")

//login a user to the system
router.post("/login", async (req, res, next) => {
    try{
        const validate = await loginDataSchema.validateAsync(req.body);
        await db.one(validate.email).then((user) => {
            if (!user) return res.json({status: 400, type:"Error", message:"user is not registered!"})
            bcrypt.compare(req.body.password, user.Password, function(err, result) {
                if (err) {return res.send({ type: "Error", message: "wrong password!", details: err })}
                if (result) {
                    const token = jwt.sign({ data: user.UserID }, process.env.TOKEN_SECRET, { expiresIn: '15m' });
                    const refreshToken = jwt.sign({ data: user.UserID }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '1h' })
                    return res.set({ authToken: token, 'refreshToken': refreshToken }).json({ type: 'success', message: 'Login successful!!', authToken: token, refreshToken: refreshToken, userName: user.FirstName });
                } else {
                    return res.json({status: 400, type: "Error", message: "Wrong password!"})
                }
            })
        })
    } catch(err){

    }
})

module.exports = router;