const asyncHandler = require("express-async-handler");
const Client = require("../models/Client");

module.exports = {
  // Get all clients from the database
  allClients: asyncHandler(async (req, res) => {
    //Get All Clients from DB
    const clients = await Client.find();

    if(!clients) throw new Error("No clients in database!")

    res.status(200).json({msg: "All Clients!" , client: clients });
  }),

  // Get a single client from the database
  specificClient: asyncHandler(async (req, res) => {
    //Getting Single Client
    const client = await Client.findById(req.params.id);

    if (!client) res.status(200).json({ message: "Client not found" });

    res.status(200).json({ data: client });
  }),

  // Add a client to the database
  addClient: asyncHandler(async (req, res) => {
    const { name, address, email, phoneNumber, additionalEmails } = req.body;

    //Validation
    if (!name || !address || !email || !phoneNumber) {
      throw new Error("Please Enter All Fields.");
    }

    //Creating Client Object
    const newClient = new Client(req.body);

    //Saving to Database
    const client = await newClient.save();

    //Sending Data to frontend
    res.status(201).json({ data: client });
  }),

  // Update a client in the database
  updateClient: asyncHandler(async (req, res) => {
    const client = await Client.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!client) res.status(404).json({ message: "Client not found" });
    else res.status(200).json({ msg: "Client Updated!" ,client: client });
  }),

  // Remove a client from the database
  removeClient: asyncHandler(async (req, res) => {
    //Removing Client from DB
    const client = await Client.findByIdAndRemove(req.params.id);

    if (!client) res.status(404).json({ message: "Client not found" });
    else res.status(200).json({ data: client });
  }),

  // Get all wards for a specific client
  getClientWards: asyncHandler(async (req, res) => {
    const { id } = req.params;

    // Get client
    const client = await Client.findById(id);

    if (!client) {
      return res.status(404).json({ message: "Client not found" });
    }

    // Get all wards for the client
    const wards = await Client.aggregate([
      { $match: { _id: client._id } },
      { $lookup: { from: "wards", localField: "_id", foreignField: "client", as: "wards" } },
      { $unwind: { path: "$wards", preserveNullAndEmptyArrays: true } },
      { $replaceRoot: { newRoot: "$wards" } },
    ]);

    res.status(200).json({ data: wards });
  }),
};
