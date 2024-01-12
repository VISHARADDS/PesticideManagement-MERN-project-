const mongoose = require ("mongoose");
const Schema = mongoose.Schema;
const loginSchema = new Schema({
    
    name : {
        type : String,
        required : true //checking whether name is null ,if so we cant login

    },
    username :{
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
       },

    
    telephone : {
        type : String,
        required : true
    },
  
    dob :{
    type : String,
    required : true
   },
    gender: {
    type : String,
    required : true
   },
   
   address:{
    type : String,
    required : true
   }
  
})
const Login = mongoose.model("Login",loginSchema);
module.exports = Login; 
