if(process.env.NODE_ENV !== "production"){
    require("dotenv").config();
}

//Node Modules
const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const methodOverride = require("method-override");

//Routers Modules
const loginRouter = require("./routes/login");
const dashboardRouter = require("./routes/dashboard");
const candidateRouter = require("./routes/candidate")
const specialityRouter = require("./routes/speciality")
const umbrellaRouter = require("./routes/umbrella")
const invoiceRouter = require("./routes/invoice")

//Exported Middlewares
const {checkAuthority} = require("./middlewares/checkAuthority")
const errorHandler = require("./middlewares/errorHandler")

//Connecting To MongoDB 
require("./config/database").connectToDb();

//Initializing Server
const server = express();

//Setting View Engine to EJS and setting views and layouts folders
server.set("view engine", "ejs");
server.set("views", __dirname + "/views");
server.set("layout", "layouts/layout");

// CORS Middleware Setup
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5000, http://localhost:5000/login');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
});

//Form Middleware (For All Paths)
server.use(express.json())
server.use(express.urlencoded({extended: false}))//to send form data
server.use(methodOverride("_method"));

//JWT Middleware for authentication
server.use("/", checkAuthority)

//Template Engine (EJS) Middleware (For All Paths)
server.use(expressLayouts);//For loading ejs layouts
server.use(express.static("public"));//for loading static files

//No "/", so redirect to "/login" route
server.get("/", (req, res) => {
    res.redirect("/login");
})

//Router Middleware
server.use("/login", loginRouter);
server.use("/dashboard", dashboardRouter)
server.use("/candidate", candidateRouter)
server.use("/speciality", specialityRouter)
server.use("/umbrella", umbrellaRouter)
server.use("/invoice", invoiceRouter)

//Error Handler Middleware
server.use(errorHandler)

//Listening on Port
server.listen(process.env.PORT || 5000, (error) => {
    console.log("Server is running on port: " + process.env.PORT)
})
