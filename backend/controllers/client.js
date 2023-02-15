const asyncHandler = require("express-async-handler");
const Client = require("../models/Client");

module.exports = {
  // Get all clients from the database
  allClients: asyncHandler(async (req, res) => {
    //Get All Clients from DB
    const clients = await Client.find();

    res.status(200).json({ data: clients });
  }),

  // Get a single client from the database
  specificClient: asyncHandler(async (req, res) => {
    //Getting Single Client
    const client = await Client.findById(req.params.id);

    if (!client) res.status(404).json({ message: "Client not found" });

    if (client) res.status(200).json({ data: client });
  }),

  // Add a client to the database
  addClient: asyncHandler(async (req, res) => {
    console.log(req.body);
    const  { name, address, email, additionalEmails, phoneNumber } = req.body;

    //Validation
    if(!name || !address || !email || !phoneNumber) throw new Error("Please Enter All Feilds.");

    //Creating Client Object
    const newClient = new Client(req.body);

    //Saving to Database
    const client = await newClient.save();

    //Sending Data to frontend
    res.status(201).json({ data: client });
  }),

  // Update a client in the database
  updateClient: asyncHandler(async (req, res) => {
    const client = await Client.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    //
    if (client) res.status(200).json({ data: client });

    if (!client) res.status(404).json({ message: "Client not found" });
  }),

  // Remove a client from the database
  removeClient: asyncHandler(async (req, res) => {
    //Removing Client from DB
    const client = await Client.findByIdAndRemove(req.params.id);

    if (client) res.status(200).json({ data: client });
    
    if (!client) res.status(404).json({ message: "Client not found" });
  }),
};
