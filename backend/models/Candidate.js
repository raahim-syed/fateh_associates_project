const {Schema, model} = require("mongoose");

const CandidateProfileSchema = new Schema({
  name: 
  {
    type: String,
    required: true
  },
  dob: 
  {
    type: Date,
    required: true,
  }, 
  NIN_Number: 
  {
    type: String,
    required: true,
  },
  currAddress: 
  {
    type: String,
    required: true,
    },
  phoneNumber: 
  {
    type: String, 
    required: true,
  },
  emailAddress: {
    type: String,
    required: true,
    max: 50,
    unique: true,
  },
 candidateAccountFormLink: 
 {
  type: String,
  default: '',
 },
  Umbrella: {
    type: Schema.Types.ObjectId,
    ref: 'Umbrella',
    required: true,
  },
  consultant: {
    type: String,
  },
  // candidatePayRate: [{
  //   Day:{
  //     type: Number,
  //     required: true
  //   },
  //   Night: {
  //     type: Number,
  //     required: true
  //   },
  //   Sunday: {
  //     type: Number,
  //     require: true
  //   },
  //   required: true,
  // }],
  // chargeRate: [{
  //   type: Schema.Types.ObjectId,
  //   ref: 'Umbrella',
  //   required: true
  // }],
  speciality: [{
    type: Schema.Types.ObjectId,
    ref: 'Speciality',
    required: true,
  }],
}, {timestamps: true});

module.exports = model("Candidate", CandidateProfileSchema);