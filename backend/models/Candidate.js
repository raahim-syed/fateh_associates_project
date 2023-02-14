const {Schema, model, mongo, default: mongoose} = require("mongoose");
const Umbrella = require("./Umbrella");

const CandidateProfileSchema = new Schema({
  name: 
  {
    type: String,
    required: true
  },
  DOB: 
  {
    type: Date,
    required: true,
  },
  NINumber: 
  {
    type: String,
    required: true,
  },
  CurrAddress: 
  {
    type:String,
    required: true,
  },
 phoneNumber: 
 {
  type: String, 
  required: true,
 },
 emailAddress: 
 {
  type:String,
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
 CandidatepayRate: [{
  Day:Number, Night:Number, Sunday:Number,
  required: true,
 }],
 ChargeRate: [{
  type: Schema.Types.ObjectId,
  ref: 'Umbrella',
  required: true
 }],

 speciality: [{
  type: Schema.Types.ObjectId,
  ref: 'Speciality',
  required: true,
}],

 
}, {timestamps: true}
);

const Speciality= mongoose.model("Speciality", SpecialitySchema)
const Umbrella = mongoose.model("Umbrella", UmbrellaProfileSchema);
module.exports = model("Candidate", CandidateProfileSchema);