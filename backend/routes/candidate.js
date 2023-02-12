const express = require("express")

//Controllers
const {allCandidates, specificCandidate, addCandidate, updateCandidate, removeCandidate} = require("../controllers/candidate");

//Creating Router
const router = express.Router();

//For Getting The Login Page
router.get("/", allCandidates)
router.get("/info/:id", specificCandidate)
router.post("/", addCandidate)
router.put("/update/:id", updateCandidate)
router.delete("/delete/:id", removeCandidate)

module.exports = router;