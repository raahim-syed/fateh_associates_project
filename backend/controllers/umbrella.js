const asyncHandler = require("express-async-handler")

//Models
const Invoice = require("../models/Invoice");
const Umbrella = require("../models/Umbrella");

module.exports = {
    // Get all umbrellas
    allUmbrellas: asyncHandler(async (req, res) => {
        const umbrellas = await Umbrella.find({});
        if(!umbrellas) res.status(200).json({ msg: "No Umbrellas Found!", umbrellas})
        res.status(200).json({msg: "All Umbrellas" ,data: umbrellas});
    }),

    // Get a specific umbrella by ID
    specificUmbrella: asyncHandler(async (req, res) => {
        const searchOptions = req.params.id;
        const umbrella = await Umbrella.findById(searchOptions);
        if(!umbrella) throw new Error("Could not find umbrella of id: " + searchOptions);
        res.status(200).json({umbrella})
    }),

    // Add a new umbrella to the DB
    addUmbrella: asyncHandler(async (req, res) => {
        //Destructured Request Body
        let {
            name,
            contactName,
            address,
            VATNumber,
            companyNumber,
            email,
            additionalEmailAddresses,
            phoneNumber,
            bankDetails,
            invoices,
            payRate,
          } = req.body;

          console.log(additionalEmailAddresses)

          //Parsing the objects
          payRate = JSON.parse(payRate)
          additionalEmailAddresses = JSON.parse(additionalEmailAddresses)
 
        // Validate required fields
        if (!name || !contactName || !email || !phoneNumber || !payRate) res.status(400).json({ msg: "Missing required field(s)" });

        //Getting Invoices

        //Create Umbrella Object
        const newUmbrella = new Umbrella(
            {name,
            contactName,
            address,
            VATNumber,
            companyNumber,
            email,
            additionalEmailAddresses,
            phoneNumber,
            bankDetails,
            invoices,
            payRate: [payRate]
          });

        //Save it to database
        await newUmbrella.save();

        res.status(200).json({umbrella: newUmbrella})
    }),

    // Update an existing umbrella profile
    updateUmbrella: asyncHandler(async (req, res) => {
        const searchOptions = req.params.id;
        const update = req.body;
        const options = { new: true };
        const result = await Umbrella.findByIdAndUpdate(searchOptions, update, options);
        if (!result) throw new Error("Could not find umbrella of id: " + searchOptions);
        res.status(200).json({ umbrella: result });
    }),

    // Delete an umbrella profile
    removeUmbrella: asyncHandler(async (req, res) => {
        const searchOptions = req.params.id;
        const result = await Umbrella.findByIdAndDelete(searchOptions);
        if(!result) throw new Error("Could not find umbrella of id: " + searchOptions);
        res.status(200).json({umbrella: result});
    })
}
