const express = require("express")

//Controllers
const {allCandidates, specificCandidate, addCandidate, updateCandidate} = require("../controllers/candidate");

//Creating Router
const router = express.Router();

//For Getting The Login Page
router.get("/", allCandidates)

router.get("/info/:id", specificCandidate)

//For Sending Login Details For Server To Authenticate
router.post("/", addCandidate)

router.put("/update/:id", updateCandidate)

router.delete("/delete/:id", (req, res) => {
    try{

    }catch(error){
        res.status("400").json({message: error.message, error})
    }
})

module.exports = router;