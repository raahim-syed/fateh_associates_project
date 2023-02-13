const Speciality = require("../models/Speciality");

module.exports = {
    checkExistence: async (name) => {
        return await Speciality.findOne({name}) ? true: false;
    },
    getSpecialities: async (req, res) => {
        try{
            //Getting Data From DB
            const getSpecialities = await Speciality.find({});

            //Checking If Object Is Empty and Sending a Response
            if(getSpecialities[0] == {}) res.status(200).json({msg: "No specialities found in database", specialities: getSpecialities});

            res.status(200).json({msg: "Here are your results", specialities: getSpecialities});
        }catch(error){
            res.status("400").json({message: error.message, error})
        }
    },
    addSpeciality: async (req, res) => {
        try {
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
        } catch (error) {
            res.status(400).json({msg: error.message})
        }
    },
    specificSpeciality: async (req, res) => {
        try {
            const { id } = req.params;
            const speciality = await Speciality.findById(id);

            if (!speciality) throw new Error("Speciality not found");

            res.status(200).json({ msg: "Speciality found", speciality });
        } catch (error) {
            res.status(400).json({ message: error.message, error });
        }
    },
    updateSpeciality: async (req, res) => {
        try {
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
        } catch (error) {
            res.status(400).json({ message: error.message, error });
        }
    },
    removeSpeciality: async (req, res) => {
        try{
            const { id } = req.params.id
            console.log(id)
            if(!req.params.id) throw new Error("Please enter a speciality name to delete");

            //Getting Data From DB
            const removeSpeciality = await Speciality.findOneAndDelete(id);

            console.log(removeSpeciality)

            //Checking If Object Is Empty and Sending a Response
            if(!removeSpeciality) res.status(200).json({msg: "No specialities found in database", specialities: getSpecialities});

            //Sending back the response
            res.status(200).json({msg: "This speciality was deleted", speciality: removeSpeciality});
        }catch(error){
            res.status(400).json({message: error.message, error})
        }
    }
}