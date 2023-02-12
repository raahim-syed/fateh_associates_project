const express = require("express")

//Controllers
const {getLogin, postLogin} = require("../controllers/login")

const router = express.Router();

//For Getting The Login Page
router.get("/", postLogin)

//For Sending Login Details For Server To Authenticate
router.post("/", getLogin)

module.exports = router;