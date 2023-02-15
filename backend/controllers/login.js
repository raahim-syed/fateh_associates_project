const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")

//Config
const {SECRET} = require("../config/config");

//Model(s)
const User = require("../models/User")

module.exports = {
    genToken: (id) => {
        return jwt.sign({ id }, SECRET, { expiresIn: "1d" })
    },
    getLogin: (req, res) => {
        try{
            res.status(200).json({title: "Login page"}); 
        }catch(error) {
            res.status(400).json({msg: error.message, error})
        }
    },
    postLogin: async (req, res) => {
        try{
            const {email, password} = req.body;

            //Checking for empty fields
            if(!email || !password) throw new Error("Please Enter All Feilds");        
    
            //Now check the database for that user
            const user = await User.findOne({email: email})
            if(user == null) throw Error("User not found!");

            //Checking for password validation
            const passwordMatch = await bcrypt.compare(password, user.password);
            if(!passwordMatch) throw new Error("Invalid Password You Hacker ;)")

            //Generate JSON web token
            const token = module.exports.genToken(user.id);

            //Sending response if everything works
            res.status(200).json({user, token})
        }catch(error){
            console.log(error)

            res.status(400).json({msg: error.message, error})
        }
    }
}