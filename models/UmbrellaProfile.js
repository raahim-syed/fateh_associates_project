const UmbrellaSupplierProfileSchema = new Schema({
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
      required: true
    },
    VATNumber: {
      type: String,
      required: true
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
      required: true
    },
    invoices: [{
      type: Schema.Types.ObjectId,
      ref: 'Invoice'
    }]
  });