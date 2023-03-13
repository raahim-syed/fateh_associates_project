if(process.env.NODE_ENV !== "production"){
    require("dotenv").config();
}

//Node Modules
const express = require("express");
const methodOverride = require("method-override");
const cors = require("cors")
const helmet = require("helmet")

//Routers Modules
const loginRouter = require("./routes/login");
const dashboardRouter = require("./routes/dashboard");
const candidateRouter = require("./routes/candidate")
const specialityRouter = require("./routes/speciality")
const umbrellaRouter = require("./routes/umbrella")
const clientRouter = require("./routes/client")
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

//Configuration For Recieving Data
server.use(express.json())
// CORS Middleware Setup
server.use(helmet());
server.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));

server.use(express.urlencoded({extended: false}))//to send form data
server.use(methodOverride("_method"));
server.use(cors())

//JWT Middleware for authentication
server.use("/", checkAuthority)

//No "/", so redirect to "/login" route
server.get("/", (req, res) => {
    res.redirect("/login");
})

//Router Middleware
server.use("/login", loginRouter);
server.use("/dashboard", dashboardRouter)
server.use("/dashboard/candidate", candidateRouter)
server.use("/dashboard/speciality", specialityRouter)
server.use("/dashboard/umbrella", umbrellaRouter)
server.use("/dashboard/invoice", invoiceRouter)
server.use("/dashboard/client", clientRouter)

//Error Handler Middleware
server.use(errorHandler)

//Listening on Port
server.listen(process.env.PORT || 5000, (error) => {
    console.log("Server is running on port: " + process.env.PORT)
})
