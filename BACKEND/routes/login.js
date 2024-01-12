const router = require("express").Router();
let Login =require("../models/Login");


 //Create function
router.route("/add").post((req,res)=> {

    const name  = req.body.name;
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const telephone = req.body.telephone;
    const dob = req.body.dob;
    const gender = req.body.gender;
    const address = req.body.address;
    

    const newLogin = new Login({
     name,
     username,
     email,
     password,
     telephone,
     dob,
     gender,
     address

    })

    newLogin.save().then(()=>{  //then() is a js promise
       res.json("Login Added") //success
    }).catch((err)=>{ //unsuccess

        console.log(err);

    })     

})

//Read function (all the requests)

router.route("/").get((req,res)=>{
    Login.find().then((login)=>{
        res.json(login) //success
    }).catch((err)=>{ //unsuccess

        console.log(err);

    })     

})

//Update function

router.route("/update/:username").put(async(req,res)=>{
    let userName= req.params.username;
    const name = req.body.name; 
    const email = req.body.email;
    const password = req.body.password;
    const telephone = req.body.telephone;
    const dob = req.body.dob;
    const gender = req.body.gender;
    const address = req.body.address;

    const updateLogin ={ 
        
        name,
        email,
        password,
        telephone,
        dob,
        gender,
        address
   
       }
    const update = await Login.findOneAndUpdate({ username: userName },updateLogin).then(()=>{
        res.json("Login Updated") //success
    }).catch((err)=>{ //unsuccess

        console.log(err);

    })     
 
}) 
 //Delete function

  router.route("/delete/:username").delete(async(req,res)=>{
    let userName = req.params.username;
    await Login.findOneAndDelete({ username: userName }).then(()=>{
        res.json("Login Deleted") //success
    }).catch((err)=>{ //unsuccess

        console.log(err);
 
    })     
  })

//fetching data from one request

router.route("/get/:username").get(async(req,res)=>{
    let userName=req.params.username;
   const user= await Login.findOne({ username: userName }).then((user)=>{
        res.json(user) //success
    }).catch((err)=>{ //unsuccess

        console.log(err);
 
    })     

}) 


module.exports = router;

