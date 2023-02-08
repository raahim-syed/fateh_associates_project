if(process.env.NODE_ENV !== "production"){
    require("dotenv").config();
}

//Node Modules
const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");  
const methodOverride = require("method-override")

//Routers Modules

//Initializing Server
const server = express();

//Setting View Engine to EJS and setting views and layouts folders
server.set("view engine", "ejs");
server.set("views", __dirname + "/views");
server.set("layout", "layouts/layout");

//Middleware for all Paths
server.use(express.json())
server.use(expressLayouts);//For loading ejs layouts
server.use(express.static("public"));//for loading static files
server.use(bodyParser.urlencoded({extended: false, limit: "10mb"}))//to send form data
server.use(methodOverride("_method"));

//Router Middleware

//Listening on Port
server.listen(process.env.PORT || 5000, (error) => {
    console.log("Server is running on port: " + process.env.PORT)
})
