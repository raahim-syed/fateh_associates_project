//Loading Schemas
const Client = require("../models/Client");

module.exports = {
    //To get a display of all the candidates from the database
    allClients: async (req, res) => {
        let searchOptions = {};

        try{
            //Sending Data To Client
            res.status(200).json({data: "Some Data"});

        }catch(error){
            res.status("400").json({message: error.message, error})
        }
    },
    //To display a single candidate
    specificClient: async (req, res) => {
        try{

        }catch(error){
            res.status("400").json({message: error.message, error})
        }
    },
    //To add a candidate to the DB
    addClient: async (req, res) => {
        try{

        }catch(error){
            res.status("400").json({message: error.message, error})
        }
    },
    //To update a candidate in the DB
    updateClient: async (req, res) => {
        try{

        }catch(error){
            res.status("400").json({message: error.message, error})
        }
    },
    removeClient: async () => {
        try{

        }catch(error){
            res.status("400").json({message: error.message, error})
        }
    }
}