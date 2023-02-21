const {Schema, model} = require("mongoose");

   /* 
   Not Much information of Cliet is Needed. 
   The Main Information is the Name of the Client (Hospital)
   and the Wards 
   */

const ClientProfileSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    address: {
      type: String,
    },
    email: {
      type: String,
    },
    phoneNumber: {
      type: String,
    },
    additionalEmails: [{
      type: String,
    }]
});

module.exports = model("Client", ClientProfileSchema);