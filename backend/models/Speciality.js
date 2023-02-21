const {Schema, model} = require("mongoose")

/* Speciality payRates Will be Set For Each Candidate.

  For Example:

  Emergency Specialty: <Rate Different>
  General Specialty:   <Rate Different>

*/

const SpecialitySchema = new Schema({

    //Name of Speciality
    name:{
        type: String,
        required: true
    },

    //Rate of Specialty
    payRate: [{
      Day: {
        type: Number,
        required: true
      },
      Night: {
        type: Number,
        required: true
      },
      Sunday: {
        type: Number,
        required: true
      },
    }],

})


module.exports = model("Speciality", SpecialitySchema);