const express = require("express")

//Controllers
const {allUmbrellas, specificUmbrella, addUmbrella, updateUmbrella, removeUmbrella} = require("../controllers/umbrella");

//Creating Router
const router = express.Router();

router.get("/", allUmbrellas)
router.get("/info/:id", specificUmbrella)
router.post("/", addUmbrella)
router.put("/update/:id", updateUmbrella)
router.delete("/delete/:id", removeUmbrella)

module.exports = router;