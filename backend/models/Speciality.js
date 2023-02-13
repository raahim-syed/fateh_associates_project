const {Schema, model} = require("mongoose")

const SpecialitySchema = new Schema({
    name:{
        type: String,
        required: true
    },
    payRate: {
      type: Number,
      required: true
    },
    chargeRate: {
      type: Number,
      required: true
    }
})


module.exports = model("Speciality", SpecialitySchema);