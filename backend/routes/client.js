const express = require("express")

//Controllers
const {allClients, specificClient, addClient, updateClient, removeClient} = require("../controllers/client");

//Creating Router
const router = express.Router();

router.get("/", allClients)
router.get("/info/:id", specificClient)
router.post("/", addClient)
router.put("/update/:id", updateClient)
router.delete("/delete/:id", removeClient)

module.exports = router;