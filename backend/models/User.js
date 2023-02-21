const {Schema, model} = require("mongoose");

// To Sign In into the Dashboard (Web Application)

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

module.exports = model("User", UserSchema);