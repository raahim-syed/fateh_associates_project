const asyncHandler = require("express-async-handler");
const Invoice = require("../models/Invoice");

module.exports = {
    //To get a display of all the candidates from the database
    allInvoices: asyncHandler(async (req, res) => {
        //Sending Data To Client
        res.status(200).json({data: "Some Data"});
    }),

    //To display a single candidate
    specificInvoice: asyncHandler(async (req, res) => {
        // your code here
    }),

    //To add a candidate to the DB
    createInvoice: asyncHandler(async (req, res) => {
        // your code here
    }),

    //To update a candidate in the DB
    updateInvoice: asyncHandler(async (req, res) => {
        // your code here
    }),

    //To delete a candidate from the DB
    removeInvoice: asyncHandler(async (req, res) => {
        // your code here
    })
}
