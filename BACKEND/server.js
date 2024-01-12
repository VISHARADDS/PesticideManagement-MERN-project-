const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const app = express();
const multer=require("multer"); 
const fs = require('fs')
const Counter = require("./models/Counter");
require("dotenv").config();



const PORT = process.env.PORT || 8070;
 app.use(cors());
 app.use(bodyParser.json());

 const URL= process.env.MONGODB_URL;

 mongoose.connect(URL, {
   // useCreateIndex: true,
   // useNewUrlParser: true,
   //useUnifiedTopology: true,     
   // useFindAndModify: false
 });

 const connection = mongoose.connection;
 connection.once("open", () => {
console.log("Mongodb Connection success!");
 });

 // Initialize the counter if it doesn't exist
Counter.findOne({ name: "IdCounter" })
.then((counter) => {
  if (!counter) {
    // Create a new counter document if it doesn't exist
    const newCounter = new Counter({ name: "IdCounter", count: 0 });
    return newCounter.save();
  }
  return null; // No need to return anything if the counter already exists
})
.then(() => {
  console.log("Counter initialized successfully.");
})
.catch((err) => {
  console.error("Error initializing counter:", err);
});



 app.get("/",(req,res)=>res.send("This is working fine"));
 
 
const requestFormRouter = require("./routes/requestForms.js");
app.use("/requestPesticide",requestFormRouter);


const responseRouter = require("./routes/bankSlip.js");
app.use("/bankPayment",responseRouter);

const loginRouter = require("./routes/login.js");
app.use("/stafflogin",loginRouter);


const pesticideRouter = require("./routes/pesticide.js");
app.use("/pesticides",pesticideRouter);

 app.listen(PORT, () => {
    console.log(`Server is up and running on port number : ${PORT}`);
 });