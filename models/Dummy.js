const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const InvoiceSchema = new Schema({
  invoiceNumber: {
    type: Number,
    required: true,
    unique: true
  },
  client: {
    type: Schema.Types.ObjectId,
    ref: 'ClientProfile',
    required: true
  },
  candidateName: {
    type: String,
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
    issueDate: {
        type: Date,
        default: Date.now,
        required: true
        }
    },
    dueDate: {
    type: Date,
    required: true
    },
    paymentStatus: {
    type: String,
    default: 'Unpaid',
    required: true
    }
});

const CandidateProfile = mongoose.model('CandidateProfile', CandidateProfileSchema);
const UmbrellaSupplierProfile = mongoose.model('UmbrellaSupplierProfile', UmbrellaSupplierProfileSchema);
const ClientProfile = mongoose.model('ClientProfile', ClientProfileSchema);
const Invoice = mongoose.model('Invoice', InvoiceSchema);

module.exports = { CandidateProfile, UmbrellaSupplierProfile, ClientProfile, Invoice };
