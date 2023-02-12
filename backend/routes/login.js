const express = require("express")
const bcrypt = require("bcryptjs")
const User = require("../models/User")

//Controllers
const {getLogin, postLogin} = require("../controllers/login")

const router = express.Router();

//For Getting The Login Page
router.get("/", getLogin)

//For Sending Login Details For Server To Authenticate
router.post("/", postLogin)

//Used Once to Create Users
// router.post("/register",async (req, res) => {
//     const {name, email, password} = req.body;

//     const salt = await bcrypt.genSalt(10)
//     const hash = await bcrypt.hash(password, salt)

//     const user = await User.create({
//         name,
//         email,
//         password: hash
//     });
    
//     res.json({user})
// })

module.exports = router;