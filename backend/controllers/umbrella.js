const asyncHandler = require("express-async-handler");

//Models
const Invoice = require("../models/Invoice");
const Umbrella = require("../models/Umbrella");

module.exports = {
  // Get all umbrellas
  allUmbrellas: asyncHandler(async (req, res) => {
    const umbrellas = await Umbrella.find({}).populate("invoices");

    if (!umbrellas) res.status(200).json({ msg: "No Umbrellas Found!", umbrellas });

    res.status(200).json({ msg: "All Umbrellas", umbrella: umbrellas });
  }),

  // Get a specific umbrella by ID
  specificUmbrella: asyncHandler(async (req, res) => {
    const { id } = req.params;

    if(!id) throw new Error("Please Enter an ID to find.")

    const umbrella = await Umbrella.findById(id).populate("invoices");

    if (!umbrella) throw new Error("Could not find umbrella of id: " + id);

    res.status(200).json({ msg: "Umbrella Found!" , umbrella });
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
    if (!name || !contactName || !email || !phoneNumber) throw new Error("Please enter all fields.");
    
    let getInvoice;

    // //If invoices exits
    // if(invoices){
    //   getInvoice = await Invoice.find({name: invoices})
    // }

    // console.log(getInvoice);

    // Create Umbrella object
    const newUmbrella = new Umbrella(req.body);

    // Save it to database
    await newUmbrella.save();

    res.status(200).json({ msg: "Umbrella Added To Database Sucessfully!", umbrella: newUmbrella });
  }),

  // Update an existing umbrella profile
  updateUmbrella: asyncHandler(async (req, res) => {
    //Umbrella ID to edit
    const { id } = req.params;

    //Data to edit
    const update = req.body;

    //To return the updated object
    const options = { new: true };

    //Updating the object
    const result = await Umbrella.findByIdAndUpdate(id, update, options);

    //Sending to frontend
    if (!result) throw new Error("Could not find umbrella of id: " + id);

    res.status(200).json({ msg: "Umbrella Updated!" ,umbrella: result });
  }),

  // Delete an umbrella profile
  removeUmbrella: asyncHandler(async (req, res) => {
    const { id } = req.params;

    if(!id) throw new Error("Please enter and ID.")

    const result = await Umbrella.findByIdAndDelete(id);

    if (!result) throw new Error("Could not find umbrella of id: " + id);

    res.status(200).json({ msg: "Umbrella Deleted!", umbrella: result });
  }),
};
