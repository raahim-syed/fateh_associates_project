if(process.env.NODE_ENV !== "production"){
    require("dotenv").config();
}
const mongoose = require("mongoose");
const {CONNECTION_STRING} = process.env;

exports.connectToDb = () => {
    mongoose.connect(CONNECTION_STRING, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Connected To Database"))
    .catch(error => console.log(`Error Message: ${error.message} \n ${error}`))
}