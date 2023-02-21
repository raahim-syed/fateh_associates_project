const {Schema, model} = require("mongoose");

/* Umbrella is Where the Breakdown of Hours is Sent and Expects an Invoice */


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


  // ----------Important-------------
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
  //---------------------------------

  //All Invoices Recieved From a Specific Umbrella
  invoices: [{
    type: Schema.Types.ObjectId,
    ref: 'Invoice'
  }],

});

module.exports = model("Umbrella", UmbrellaProfileSchema)