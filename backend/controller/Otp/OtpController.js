const routes = require("express").Router();
const sha1 = require("sha1")
const jwt = require("jsonwebtoken")
const Admin = require("../../models/Admin")
const random_num = require("random-number")
let nodemailer = require("nodemailer")
let mailGen = require("mailgen")
const {EMAIL, PASSWORD} = require("../../config/env")
routes.get("/", async (req,res)=> {
    var gen = random_num.generator({
        min:  99999
      , max:  999999
      , integer: true
      })
    if(req.headers.admin_token) {
        let admin_token = req.headers.admin_token;
        let obj = jwt.decode(admin_token, "Aliasger web")
        
        let result = await Admin.find({_id : obj._id})
    if(result.length == 1) {
        let otp = gen()
        await Admin.updateOne({_id : obj._id}, {otp : otp})
        setTimeout(async ()=> {
          await Admin.updateOne({ _id: id },
          { $set: { otp: null } })
            }, 5 * 60 * 1000); // 5 minutes expressed in milliseconds
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
                code : otp,
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
    subject : "Varification code to reset Password on 1001 Ai",
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
  
  
    }
}
})

routes.post("/", async (req, res)=> {
  if(req.headers.admin_token) {
    let admin_token = req.headers.admin_token;
    let obj = jwt.decode(admin_token, "Aliasger web")
        
    let result = await Admin.find({_id : obj._id})
if(result.length == 1) {
  let storedOtp = result[0].otp
  let ClientOtp = req.body.otp

  if(storedOtp == ClientOtp) {
    res.send({ status: 200, success: true });
  } else { 
    res.send({ status: 401, success: false });
  }
}
  }
})

routes.post("/create/pass", async (req,res)=> {
  if(req.headers.admin_token) {
    let admin_token = req.headers.admin_token;
    let obj = jwt.decode(admin_token, "Aliasger web")
    let result = await Admin.updateOne({_id : obj._id}, {screen_pass : sha1(req.body.password)})
      res.send({status : 200, success : true})
  }
})

module.exports = routes;