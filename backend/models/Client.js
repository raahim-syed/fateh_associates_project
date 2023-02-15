const {Schema, model} = require("mongoose");

const ClientProfileSchema = new Schema({
    name: {
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
    }]
});

module.exports = model("Client", ClientProfileSchema);