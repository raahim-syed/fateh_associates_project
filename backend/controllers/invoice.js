const asyncHandler = require("express-async-handler");
const Invoice = require("../models/Invoice");

module.exports = {
  // Get all invoices
  allInvoices: asyncHandler(async (req, res) => {
    const invoices = await Invoice.find({});
    res.status(200).json({ data: invoices });
  }),

  // Get a specific invoice by ID
  specificInvoice: asyncHandler(async (req, res) => {
    const { id } = req.params;
    const invoice = await Invoice.findById(id);

    if (!invoice) {
      res.status(404);
      throw new Error("Invoice not found");
    }

    res.status(200).json({ data: invoice });
  }),

  // Create a new invoice
  createInvoice: asyncHandler(async (req, res) => {
    const {
      invoiceNumber,
      client,
      candidateName,
      description,
      hours,
      rate,
      totalCharge,
      VAT,
      totalPayable,
      companyName,
      companyAddress,
      issueDate,
      dueDate,
      paymentStatus,
    } = req.body;

    const newInvoice = await Invoice.create({
      invoiceNumber,
      client,
      candidateName,
      description,
      hours,
      rate,
      totalCharge,
      VAT,
      totalPayable,
      companyName,
      companyAddress,
      issueDate,
      dueDate,
      paymentStatus,
    });

    res.status(201).json({ data: newInvoice });
  }),

  // Update an existing invoice
  updateInvoice: asyncHandler(async (req, res) => {
    const { id } = req.params;
    const {
      invoiceNumber,
      client,
      candidateName,
      description,
      hours,
      rate,
      totalCharge,
      VAT,
      totalPayable,
      companyName,
      companyAddress,
      issueDate,
      dueDate,
      paymentStatus,
    } = req.body;

    const invoice = await Invoice.findById(id);

    if (!invoice) {
      res.status(404);
      throw new Error("Invoice not found");
    }

    invoice.invoiceNumber = invoiceNumber;
    invoice.client = client;
    invoice.candidateName = candidateName;
    invoice.description = description;
    invoice.hours = hours;
    invoice.rate = rate;
    invoice.totalCharge = totalCharge;
    invoice.VAT = VAT;
    invoice.totalPayable = totalPayable;
    invoice.companyName = companyName;
    invoice.companyAddress = companyAddress;
    invoice.issueDate = issueDate;
    invoice.dueDate = dueDate;
    invoice.paymentStatus = paymentStatus;

    const updatedInvoice = await invoice.save();

    res.status(200).json({ data: updatedInvoice });
  }),

  // Delete an invoice
  removeInvoice: asyncHandler(async (req, res) => {
    const { id } = req.params;
    const invoice = await Invoice.findById(id);

    if (!invoice) {
      res.status(404);
      throw new Error("Invoice not found");
    }

    await invoice.remove();

    res.status(200).json({ message: "Invoice removed" });
  }),
};
