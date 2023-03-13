const express = require("express")

//Controllers
const {allSpecialities, addSpeciality, specificSpeciality, updateSpeciality, removeSpeciality} = require("../controllers/speciality");

//Creating Router
const router = express.Router();

router.route("/").get(allSpecialities).post(addSpeciality);
router.get("/info/:id", specificSpeciality)
router.put("/update/:id", updateSpeciality)
router.delete("/delete/:id", removeSpeciality)


module.exports = router;