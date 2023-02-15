const {Schema, model} = require("mongoose")

const InvoiceSchema = new Schema({
invoiceNumber: {
    type: Number,
    required: true,
    unique: true
},
client: {
    type: Schema.Types.ObjectId,
    ref: 'Client',
    required: true
},
candidateName: {
    type: Schema.Types.ObjectId,
    ref: "Candidate",
    required: true
},
description: {
    type: String,
    required: true
},
hours: {
    type: Number,
    required: true
},
rate: {
    type: Number,
    required: true
},
totalCharge: {
    type: Number,
    required: true
},
VAT: {
    type: Number,
    required: true
},
totalPayable: {
    type: Number,
    required: true
},
companyName: {
    type: String,
    required: true
},
companyAddress: {
    type: String,
    required: true,
},
issueDate: {
    type: Date,
    default: Date.now,
    required: true
},
dueDate: {
    type: Date,
    required: true
},
paymentStatus: {
    type: Boolean,
    default: false,
    required: true
}
});

module.exports = model("Invoice", InvoiceSchema)