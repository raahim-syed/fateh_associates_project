//Loading Schemas
const Umbrella = require("../models/Umbrella");

module.exports = {
    //To get a display of all the candidates from the database
    allUmbrellas: async (req, res) => {
        try{
            //Sending Data To Client
            res.status(200).json({data: "Some Data"});

        }catch(error){
            res.status("400").json({message: error.message, error})
        }
    },
    //To display a single candidate
    specificUmbrella: async (req, res) => {
        try{

        }catch(error){
            res.status("400").json({message: error.message, error})
        }
    },
    //To add a candidate to the DB
    addUmbrella: async (req, res) => {
        try{

        }catch(error){
            res.status("400").json({message: error.message, error})
        }
    },
    //To update a candidate in the DB
    updateUmbrella: async (req, res) => {
        try{

        }catch(error){
            res.status("400").json({message: error.message, error})
        }
    },
    removeUmbrella: async () => {
        try{

        }catch(error){
            res.status("400").json({message: error.message, error})
        }
    }
}