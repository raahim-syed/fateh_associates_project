const {Schema, model} = require("mongoose")


//Main Objective is To Store Invoice (PDF) and Checking the Payment Status.


const InvoiceSchema = new Schema({
    candidateName: {
        type: Schema.Types.ObjectId,
        ref: "Candidate",
        required: true
    },
    description: {
        type: String,
    },

    //From Which Umbrella Invoice is Recieved
    umbrella: {
        type: Schema.Types.ObjectId,
        ref: 'Umbrella',
        required: true,
      },

    //Time When the Invoice is Recieved From the Umbrella
    issueDate: {
        type: Date,
        default: Date.now,
        required: true
    },
    // Compulsory
    invoiceLink: {
        type: String,
        required: true
    },

    //Status If the Invoice is Payed or Not
    paymentStatus: {
        type: Boolean,
        default: false,
        required: true
    }
});

module.exports = model("Invoice", InvoiceSchema)