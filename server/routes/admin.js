const express = require("express")
const router = express.Router()
import verifyToken from "../utils/verify";

//secure route
router.post("/register", verifyToken, async (req, res, next) => {

})

module.exports = router;