const {Schema, model} = require("mongoose");

const CandidateProfileSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  speciality: [{
    type: Schema.Types.ObjectId,
    required: true,
  }],
  // umbrella: {
  //   type: Schema.Types.ObjectId,
  //   required: true
  // },
  // client: [{
  //   type: String,
  //   required: true
  // }]
});

module.exports = model("Candidate", CandidateProfileSchema);