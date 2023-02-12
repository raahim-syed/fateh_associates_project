const express = require("express")

//Controllers
const {renderDashboard} = require("../controllers/dashboard")

//Creating Router
const router = express.Router();

//For Getting The Login Page
router.get("/", renderDashboard)



module.exports = router;