const asyncHandler = require("express-async-handler")

//Schema
const Speciality = require("../models/Speciality");

module.exports = {
    checkExistence: async (name) => {
        return await Speciality.findOne({name}) ? true: false;
    },
    getSpecialities: asyncHandler(async (req, res) => {
        //Getting Data From DB
        const getSpecialities = await Speciality.find({});

        //Checking If Object Is Empty and Sending a Response
        if(getSpecialities[0] == {}) res.status(200).json({msg: "No specialities found in database", specialities: getSpecialities});

        res.status(200).json({msg: "Here are your results", specialities: getSpecialities});
    }),
    addSpeciality: asyncHandler(async (req, res) => {
        const {name, chargeRate, payRate} = req.body;

        //Validation
        if(!name || !chargeRate || !payRate) throw new Error("Please enter all feilds")

        //Check Existence
        const exists = await module.exports.checkExistence(name);
        if(exists) throw new Error("Speciality Already Exists")

        //Datatype Check
        // if(tyoeof chargeRate != Number || typeof payRate != Number)

        //Creating object and Sending to DB
        const speciality = new Speciality({
            name,
            chargeRate,
            payRate
        });

        const saved = await speciality.save();
        if(!saved) throw new Error({msg: "Problem Saving To Datebase", code: 500})

        res.status(200).json({msg: "Successfully added to DB", speciality})
    }),
    specificSpeciality: asyncHandler(async (req, res) => {
        const { id } = req.params;
        const speciality = await Speciality.findById(id);

        if (!speciality) throw new Error("Speciality not found");

        res.status(200).json({ msg: "Speciality found", speciality });
    }),
    updateSpeciality: asyncHandler(async (req, res) => {
        //Getting ID and Data form request object
        const { id } = req.params;
        const { name, chargeRate, payRate } = req.body;

        //Form Validation
        if (!name || !chargeRate || !payRate) throw new Error("Please enter all fields");

        const updatedSpeciality = await Speciality.findByIdAndUpdate(
            id,
            { name, chargeRate, payRate },
            { new: true }
        );

        if (!updatedSpeciality) throw new Error("Speciality not found");

        res.status(200).json({ msg: "Speciality updated", speciality: updatedSpeciality });
    }),
    removeSpeciality: asyncHandler(async (req, res) => {
        //Getting and checking sent ID
        const { id } = req.params;
        if(!id) throw new Error("Please enter a speciality id to delete");

        //Getting Data From DB
        const getSpeciality = await Speciality.findById(id);

        //Checking If Object Is Empty and Sending a Response
        if(!getSpeciality) res.status(200).json({msg: "No specialities found in database", specialities: getSpeciality});

        //Delete Speciality here
        const deletedSpeciality = await getSpeciality.delete();

        //Sending back the response
        res.status(200).json({msg: "This speciality was deleted", speciality: deletedSpeciality});
    })
}