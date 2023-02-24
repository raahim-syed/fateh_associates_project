const asyncHandler = require("express-async-handler");
const Speciality = require("../models/Speciality");

module.exports = {
  checkExistence: async (name) => {
    return await Speciality.findOne({ name }) ? true : false;
  },

  getSpecialities: asyncHandler(async (req, res) => {
    const getSpecialities = await Speciality.find({});
    if (getSpecialities.length === 0) {
      res.status(200).json({
        msg: "No specialities found in database",
        specialities: getSpecialities,
      });
    } else {
      res
        .status(200)
        .json({ msg: "Here are your results", specialities: getSpecialities });
    }
  }),

  addSpeciality: asyncHandler(async (req, res) => {
    const { candidateName, name, description, payRate } = req.body;

    //Validation
    if (!candidateName || !name || !payRate) {
      throw new Error("Please enter all fields");
    }

    //Check Existence
    const exists = await module.exports.checkExistence(name);
    if (exists) {
      throw new Error("Speciality Already Exists");
    }

    //Creating object and Sending to DB
    const speciality = new Speciality({
      candidateName,
      name,
      description,
      payRate,
    });

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
    const speciality = await Speciality.findById(id);

    if (!speciality) {
      throw new Error("Speciality not found");
    }

    res.status(200).json({ msg: "Speciality found", speciality });
  }),

  updateSpeciality: asyncHandler(async (req, res) => {
    //Getting ID and Data from request object
    const { id } = req.params;
    const { candidateName, name, description, payRate } = req.body;

    //Form Validation
    if (!candidateName || !name || !payRate) {
      throw new Error("Please enter all fields");
    }

    const updatedSpeciality = await Speciality.findByIdAndUpdate(
      id,
      { candidateName, name, description, payRate },
      { new: true }
    );

    if (!updatedSpeciality) {
      throw new Error("Speciality not found");
    }

    res
      .status(200)
      .json({ msg: "Speciality updated", speciality: updatedSpeciality });
  }),

  removeSpeciality: asyncHandler(async (req, res) => {
    const { id } = req.params;
    if (!id) {
      throw new Error("Please enter a speciality id to delete");
    }

    const deletedSpeciality = await Speciality.findByIdAndDelete(id);
    if (!deletedSpeciality) {
      throw new Error("Speciality not found");
    }

    res
      .status(200)
      .json({ msg: "This speciality was deleted", speciality: deletedSpeciality });
  }),
};
