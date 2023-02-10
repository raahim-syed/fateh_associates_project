const {Schema, model} = require("mongoose");

const CandidateProfileSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  speciality: [{
    type: String,
    required: true,
    payRate: {
      type: Number,
      required: true
    },
    chargeRate: {
      type: Number,
      required: true
    }
  }],
  supplier: {
    type: String,
    required: true
  },
  client: [{
    type: String,
    required: true
  }]
});

module.exports = model("CandidateProfile", CandidateProfileSchema);