const {Schema, model} = require("mongoose")

/* Speciality payRates Will be Set For Each Candidate.

  For Example:

  Emergency Specialty: <Rate Different>
  General Specialty:   <Rate Different>

*/

const SpecialitySchema = new Schema({

  //Candidate Name <Whose Speciality is Being Defined>
  candidateName: {
    type: Schema.Types.ObjectId,
    ref: "Candidate",
    required: true
},

    //Name of Speciality
    name:{
        type: String,
        unique: true,
        required: true
    },

    //Description of the Speciality (Optional)
    description: {
      type: String,
    },

    //Rate of Specialty
    payRate: {
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
    },
})


module.exports = model("Speciality", SpecialitySchema);