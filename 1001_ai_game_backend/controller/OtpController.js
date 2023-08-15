let routes = require("express").Router();
let User = require("../models/User")


let rn = require('random-number');


let nodemailer = require("nodemailer")
let mailGen = require("mailgen")
const {EMAIL, PASSWORD} = require("../config/env")


// let callCount = 0; // Initialize the call counter variable

routes.get("/:id", async (req, res) => {
  // if (callCount >= 3) { // Check if the API has been called three times
    // return res.status(403).json({ status : 403 }); // Return an error response
  // }

  // callCount++; // Increment the call counter variable

  let id = req.params.id;
var gen = rn.generator({
  min:  99999
, max:  999999
, integer: true
})
let random = gen()
  // let random = Math.floor(Math.random() * 1000000);
  await User.updateOne({_id : id}, {otp : random});
  // await User.updateOne({ _id: id },
  //   { $set: { times_otp : callCount } })
  setTimeout(async ()=> {
  await User.updateOne({ _id: id },
  { $set: { otp: null } })
    }, 5 * 60 * 1000); // 5 minutes expressed in milliseconds
    
  let result = await User.find({_id : id})

  let userEmail = result[0].email; 
  let userName = result[0].name; 

  // send mail using gmail, nodemailer and Mailgen
let config = {
  service : "gmail",
  auth : {
      user : EMAIL,
      pass : PASSWORD,
  }
}

let transporter = nodemailer.createTransport(config);

let MailGenerator = new mailGen({
  theme : "default",
  product : {
      name : "Mailgen",
      link : 'https://mailgen.js/'
  }
})

let response = {
  body : {
      name : userName,
      intro : "Your verification code is arived !",
      table : {
          data : [
              {
              subject : "Your Verification Code : ",
              description : "Verification code will expire after 5 minutes, so fastly verify your account !",
              code : random,
              }
          ]
      },
      outro : "click on this link to reach otp page : "
  }
}

let mail = MailGenerator.generate(response)

let message = {
  from : EMAIL,
  to : userEmail,
  subject : "Varification code to login on SabkaApp",
  html : mail
}

transporter.sendMail(message).then(()=> {
  return res.status(200).json({
      msg : "You should recieve a mail",
      status : 200, 
      success : true,
      // otpCount : callCount
  })
}).catch (error => {
  console.log(error)
  res.status(500).json({error})
})


});

routes.post("/checkotp", async (req,res)=> {

    let otp = req.body.data.otp;
    let email = req.body.email;
    try {
        let verifyEmail = await User.find({email : email })
        if(verifyEmail.length == 1) {
    let result = await User.find({otp : otp})
if(result.length == 1) {
    res.send({status : 200, success : true})
}else {
    res.send({status : 401, success : false})
}
        }
   }catch (error) {
    console.log(error)
}
})

routes.get("/otpverified/:id", async (req,res)=> {
    let id = req.params.id;
try {
    let result = await User.updateMany({_id : id}, {isVerified : true})
res.send({status : 200, success : true})
}catch (error) {
    console.log(error)
}
})


module.exports = routes;