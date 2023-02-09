const express = require("express")

const router = express.Router();

//For Getting The Login Page
router.get("/", (req, res) => {
    res.json({title: "Login page"});
})

//For Sending Login Details For Server To Authenticate
router.post("/", (req, res) => {
    //Validation And Verification Goes Here

    //Redirecting To Desired Page
    res.redirect("/dashboard");
})

module.exports = router;