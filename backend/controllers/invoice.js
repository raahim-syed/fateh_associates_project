const asyncHandler = require("express-async-handler");
const Invoice = require("../models/Invoice");
const Candidate = require("../models/Candidate");
const Umbrella = require("../models/Umbrella");

const allInvoices = asyncHandler(async (req, res) => {
  const invoices = await Invoice.find({});

  if(!invoices) res.status(200).json({msg: "No Invoices Found!"})

  res.status(200).json({msg: "Invoices Found!",invoices: invoices})
})

const specificInvoice = asyncHandler(async (req, res) => {
  const searchParams = {...req.params.id};

  const invoice = Invoice.find(searchParams)

  if(!invoice) res.status(200).json({msg: "no mathcing invoice found"})

  res.status(200).json({msg: "Invoices Found!", invoice: invoice})
})

const createInvoice = asyncHandler(async (req, res) => {
  const {
    candidateName,
    description,
    umbrella,
    invoiceLink,
    paymentStatus = false
  } = req.body;

  // Validate the request body against the schema
  const invoice = new Invoice({
    candidateName,
    description,
    umbrella,
    invoiceLink,
    paymentStatus
  });
  const validationResult = invoice.validateSync();
  if (validationResult) {
    res.status(400).json({ error: validationResult.message });
    return;
  }

  // Check if the referenced candidate exists
  const candidate = await Candidate.findById(candidateName);
  if (!candidate) {
    res.status(400).json({ error: "Invalid candidate ID" });
    return;
  }

  // Check if the referenced umbrella exists
  const umbrellaObj = await Umbrella.findById(umbrella);
  if (!umbrellaObj) {
    res.status(400).json({ error: "Invalid umbrella ID" });
    return;
  }

  // Create the new invoice and send it as a response
  const newInvoice = await Invoice.create({
    candidateName,
    description,
    umbrella,
    invoiceLink,
    paymentStatus
  });

  res.status(201).json({ data: newInvoice });
});

const updateInvoice = asyncHandler(async () => {
  res.status(200).json({
    msg: "Updated"
  })
})

const removeInvoice = asyncHandler(async () => {
  res.status(200).json({
    msg: "removed"
  })
})

const getInvoicesWithCandidates = asyncHandler(async (req, res) => {
  const invoices = await Invoice.aggregate([
    {
      $lookup: {
        from: "candidates",
        localField: "candidateName",
        foreignField: "_id",
        as: "candidate"
      }
    }
  ]);

  res.status(200).json({ data: invoices });
});

module.exports = {specificInvoice, allInvoices, createInvoice, getInvoicesWithCandidates, updateInvoice, removeInvoice };
