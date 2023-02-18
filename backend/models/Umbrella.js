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
    type: String
  },
  VATNumber: {
    type: String,
    required: false
  },
  companyNumber: {
    type: String
  },
  email: {
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
    type: String
  },
  invoices: [{
    type: Schema.Types.ObjectId,
    ref: 'Invoice'
  }],
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
    }
  }],
});

module.exports = model("Umbrella", UmbrellaProfileSchema)