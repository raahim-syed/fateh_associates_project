const express = require("express")

const router = express.Router();

//For Getting The Login Page
router.get("/", (req, res) => {
    res.json({title: "Dashboard Page"});
})



module.exports = router;