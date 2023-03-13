const asyncHandler = require("express-async-handler");
const Speciality = require("../models/Speciality");

module.exports = {
  checkExistence: async (name) => {
    return await Speciality.findOne({ name }) ? true : false;
  },

  allSpecialities: asyncHandler(async (req, res) => {
    //All Specialities
    const allSpecialities = await Speciality.find({});

    //Checking for empty object return
    if (!allSpecialities)  res.status(200).json({
        msg: "No specialities found in database"
      });
      
    //Sending status
    res.status(200).json({ msg: "Here are your results", specialities: allSpecialities });
  }),

  //Adding Speciality to database
  addSpeciality: asyncHandler(async (req, res) => {
    const {name, description, payRate } = req.body;

    console.log(req.body)

    //Validation
    if (!name || !payRate) throw new Error("Please enter all fields");

    //Check Existence
    const exists = await module.exports.checkExistence(name);

    //Existence Check
    if (exists) {
      throw new Error("Speciality Already Exists");
    }

    //Creating object and Sending to DB
    const speciality = new Speciality({
      name,
      description,
      payRate
    });

    //Saving to database
    const saved = await speciality.save();

    if (!saved) {
      throw new Error({ msg: "Problem Saving To Datebase", code: 500 });
    }

    res.status(200).json({
      msg: "Successfully added to DB",
      speciality,
    });
  }),

  specificSpeciality: asyncHandler(async (req, res) => {
    const { id } = req.params;

    if(!id) throw new Error("Please enter na ID to search")

    const speciality = await Speciality.findById(id);

    if (!speciality) {
      throw new Error("Speciality not found");
    }

    res.status(200).json({ msg: "Speciality found", speciality });
  }),

  updateSpeciality: asyncHandler(async (req, res) => {
    //Getting ID and Data from request object
    const { id } = req.params;
    const update = {...req.body};

    //Validation
    if(!id) throw new Error("Please enter an Id.")

    const updatedSpeciality = await Speciality.findByIdAndUpdate(
      id,
      update,
      {new: true}
    );

    if (!updatedSpeciality) {
      throw new Error("Could not find speciality to update");
    }

    res.status(200).json({ msg: "Speciality updated", speciality: updatedSpeciality });
  }),

  removeSpeciality: asyncHandler(async (req, res) => {
    const { id } = req.params;

    if (!id) throw new Error("Please enter a speciality id to delete");

    const deletedSpeciality = await Speciality.findByIdAndDelete(id);

    if (!deletedSpeciality) {
      throw new Error("Speciality not found");
    }

    res
      .status(200)
      .json({ msg: "Speciality Deleted Sucessfully!", speciality: deletedSpeciality });
  }),
};
