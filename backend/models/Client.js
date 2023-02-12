const {Schema, model} = require("mongoose");

const ClientProfileSchema = new Schema({
    clientName: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    phoneNumber: {
      type: String,
      required: true
    },
    additionalEmails: [{
      type: String,
      required: true
    }]
});

module.exports = model("Client", ClientProfileSchema);