const { Schema, model } = require("mongoose");

/*
The Main Information of Client (Doctors/Nurses) is Stored Here.
Not Much Data is Needed. The Basic are to be Fulfilled.
*/

const CandidateProfileSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  dob: {
    type: Date,
    required: true,
  },
  NIN_Number: {
    type: String,
    required: true,
  },
  currentAddress: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  emailAddress: {
    type: String,
    required: true,
    max: 50,
    unique: true,
  },
  candidateAccountFormLink: {
    type: String,
    default: '',
  },
  umbrella: {
    type: Schema.Types.ObjectId,
    ref: 'Umbrella',
    required: true,
  },
  consultant: {
    type: String,
  },

  //This Payrate is the Base Payrate, This Can Be Changed if the
  // Candidtate Works with a Different Client or in Different Ward

  candidatePayRate: [{
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
  
  specialty: [{
    type: Schema.Types.ObjectId,
    ref: 'Specialty',
    required: true,
  }],


}, { timestamps: true });

module.exports = model("Candidate", CandidateProfileSchema);
