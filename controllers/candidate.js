//Loading Schemas
const Candidate = require("../models/Candidate");

module.exports = {
    //To get a display of all the candidates from the database
    allCandidates: async (req, res) => {
        let searchOptions = {};

        try{
            //Sending Data To Client
            res.status(200).json({data: "Some Data"});

        }catch(error){
            res.status("400").json({message: error.message, error})
        }
    },
    //To display a single candidate
    specificCandidate: async (req, res) => {
        try{

        }catch(error){
            res.status("400").json({message: error.message, error})
        }
    },
    //To add a candidate to the DB
    addCandidate: async (req, res) => {
        try{

        }catch(error){
            res.status("400").json({message: error.message, error})
        }
    },
    //To update a candidate in the DB
    updateCandidate: async (req, res) => {
        try{

        }catch(error){
            res.status("400").json({message: error.message, error})
        }
    },
    removeCandidate: async () => {
        try{

        }catch(error){
            res.status("400").json({message: error.message, error})
        }
    }
}