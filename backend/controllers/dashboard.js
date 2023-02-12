const User = require("../models/User")

module.exports = {
    loadDashboard: async (req, res) => {
        try{
            //Getting User from DB
            const user = await User.findById(req.user);
            if(!user) throw new Error("User Not Found");

            res.status(200).json({msg: `Welcome ${user.name}` , user})
        }catch(error){
            res.status(500).json({msg: error.message, error})
        }
    }
}