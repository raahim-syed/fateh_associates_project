const asyncHandler = require("express-async-handler");
const Invoice = require("../models/Invoice");
const Candidate = require("../models/Candidate");
const Umbrella = require("../models/Umbrella");

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

module.exports = { createInvoice, getInvoicesWithCandidates };
