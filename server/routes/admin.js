const express = require("express")
const router = express.Router()
const  verifyToken = require("../utils/verify")

//secure route
router.post("/secure", verifyToken, async (req, res, next) => {
    req.json({secure: true})
})

module.exports = router;