const asyncHandler = require("express-async-handler");

//Models
const Invoice = require("../models/Invoice");
const Umbrella = require("../models/Umbrella");

module.exports = {
  // Get all umbrellas
  allUmbrellas: asyncHandler(async (req, res) => {
    const umbrellas = await Umbrella.find({}).populate("invoices");
    if (!umbrellas) res.status(200).json({ msg: "No Umbrellas Found!", umbrellas });
    res.status(200).json({ msg: "All Umbrellas", data: umbrellas });
  }),

  // Get a specific umbrella by ID
  specificUmbrella: asyncHandler(async (req, res) => {
    const { id } = req.params;
    const umbrella = await Umbrella.findById(id).populate("invoices");
    if (!umbrella) throw new Error("Could not find umbrella of id: " + id);
    res.status(200).json({ umbrella });
  }),

  // Add a new umbrella to the DB
  addUmbrella: asyncHandler(async (req, res) => {
    const {
      name,
      contactName,
      address,
      email,
      additionalEmailAddresses,
      phoneNumber,
      invoices,
    } = req.body;

    // Validate required fields
    if (!name || !contactName || !email || !phoneNumber) {
      res.status(400).json({ msg: "Missing required field(s)" });
      return;
    }

    // Create Umbrella object
    const newUmbrella = new Umbrella({
      name,
      contactName,
      address,
      email,
      additionalEmailAddresses,
      phoneNumber,
      invoices,
    });

    // Save it to database
    await newUmbrella.save();

    res.status(200).json({ umbrella: newUmbrella });
  }),

  // Update an existing umbrella profile
  updateUmbrella: asyncHandler(async (req, res) => {
    const { id } = req.params;
    const update = req.body;
    const options = { new: true };
    const result = await Umbrella.findByIdAndUpdate(id, update, options);
    if (!result) throw new Error("Could not find umbrella of id: " + id);
    res.status(200).json({ umbrella: result });
  }),

  // Delete an umbrella profile
  removeUmbrella: asyncHandler(async (req, res) => {
    const { id } = req.params;
    const result = await Umbrella.findByIdAndDelete(id);
    if (!result) throw new Error("Could not find umbrella of id: " + id);
    res.status(200).json({ umbrella: result });
  }),
};
