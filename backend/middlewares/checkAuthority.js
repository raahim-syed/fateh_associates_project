const jwt = require("jsonwebtoken")
const {SECRET} = require("../config/config");

//Model(s)
const User = require("../models/User")

module.exports = {
    checkAuthority: async (req, res, next) => {
        //Excluding paths where this middleware will run 
        if(req.path === "/login") return next();

        try{
            const header = req.headers.authorization;

            // console.log(header)
            if(!header || !header.startsWith("Bearer")) throw new Error("Token has expired")

            //Extracting the token part from the header
            const token = header.split(" ")[1]

            // console.log(token)
            const payload = jwt.verify(token, SECRET)
            // console.log(payload)

            //Extra Verification
            const user = await User.findById(payload.id);
            if(!user) throw new Error("You are not the user")

            //Adding user object to request
            req.user = payload.id;

            //Next Middleware
            next();
        }catch(error){
            res.status(401).json({ error: "Unauthorized: Invalid or expired token." });
        }
        
    }
}