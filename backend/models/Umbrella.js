const {Schema, model} = require("mongoose");

const UmbrellaProfileSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  contactName: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: false
  },
  VATNumber: {
    type: String,
    required: false
  },
  companyNumber: {
    type: String,
    required: true
  },
  emailAddress: {
    type: String,
    required: true
  },
  additionalEmailAddresses: [{
    type: String
  }],
  phoneNumber: {
    type: String,
    required: true
  },
  bankDetails: {
    type: String,
    required: false
  },
  invoices: [{
    type: Schema.Types.ObjectId,
    ref: 'Invoice'
  }],
  payRate: [{
    Day:Number, Night:Number, Sunday:Number,
    required: true,
   }],
});

module.exports = model("Umbrella", UmbrellaProfileSchema)