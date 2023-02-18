const express = require("express")

//Controllers
const {allInvoices, specificInvoice, createInvoice, updateInvoice, removeInvoice} = require("../controllers/invoice");

//Creating Router
const router = express.Router();

router.get("/", allInvoices)
router.get("/info/:id", specificInvoice)
router.post("/", createInvoice)
router.put("/update/:id", updateInvoice)
router.delete("/delete/:id", removeInvoice)

module.exports = router;