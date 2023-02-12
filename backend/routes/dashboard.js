const express = require("express")

//Controllers
const {loadDashboard} = require("../controllers/dashboard")

//Middlewares
const {checkAuthority} = require("../middlewares/checkAuthority")

//Creating Router
const router = express.Router();

//For Getting The Login Page
router.get("/", checkAuthority ,loadDashboard)

module.exports = router;