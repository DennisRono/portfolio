const express = require("express");
const router = express.Router();

//login a user to the system
router.post("/login", async (req, res, next) => {
    req = req.body
    res.json(req)
})

module.exports = router;