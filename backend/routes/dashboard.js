const express = require("express")

//Controllers
const {loadDashboard} = require("../controllers/dashboard")

//Creating Router
const router = express.Router();

//For Getting The Login Page
router.get("/", loadDashboard)

module.exports = router;