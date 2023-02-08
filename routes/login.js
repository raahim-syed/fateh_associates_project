const express = require("express")

const router = express.Router();

router.get("/", (req, res) => {
    res.send({title: "Login page"});
})

router.post("/", (req, res) => {
    res.redirect("/dashboard");
})

module.exports = router;