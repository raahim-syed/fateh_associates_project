if(process.env.NODE_ENV !== "production"){
    require("dotenv").config();
}

//Node Modules
const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const mongoose = require("mongoose");  
const methodOverride = require("method-override");

//Routers Modules
const loginRouter = require("./routes/login");
const dashboardRouter = require("./routes/dashboard");

//Connecting To MongoDB 
const {CONNECTION_STRING} = process.env;

mongoose.connect(CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
.then(() => console.log("Connected To Database"))
.catch(error => console.log(`Error Message: ${error.message} \n ${error}`))

//Initializing Server
const server = express();

//Setting View Engine to EJS and setting views and layouts folders
server.set("view engine", "ejs");
server.set("views", __dirname + "/views");
server.set("layout", "layouts/layout");

//Form Middleware (For All Paths)
server.use(express.json())
server.use(express.urlencoded({extended: false}))//to send form data
server.use(methodOverride("_method"));

//Template Engine (EJS) Middleware (For All Paths)
server.use(expressLayouts);//For loading ejs layouts
server.use(express.static("public"));//for loading static files

//Router Middleware
server.use("/login", loginRouter);
server.use("/dahsboard", dashboardRouter);

//Listening on Port
server.listen(process.env.PORT || 5000, (error) => {
    console.log("Server is running on port: " + process.env.PORT)
})
