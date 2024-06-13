var ADMIN = require('../models/admin');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: "sahildiyora123@gmail.com",
    pass: "jjlsuovxetarkrof",
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function main(email) {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: 'sahildiyora123@gmail.com', // sender address
    to: email, // list of receivers
    subject: "TESTING", // Subject line
    // text: "Hello world?", // plain text body
    html: "<h1> HELLO NODE-MAILER </h1>", // html body
  });

  console.log("Message sent: %s", info.messageId);
}

exports.SIGN_UP_CONTROLLER = async function(req, res, next) {
  
    try {
      
      let BODY_DATA = req.body ;
  
      if (!BODY_DATA.name || !BODY_DATA.email || !BODY_DATA.password || !BODY_DATA.confirm_password) {
          throw new Error("PLESE ENTER ALL THE FIELDS") ;
      }
  
      if (BODY_DATA.password != BODY_DATA.confirm_password) {
        throw new Error("PASS AND CONFIRM PASSWORD ARE NOT SAME") ;
      }
  
      BODY_DATA.password = await bcrypt.hash(BODY_DATA.password , 10)
  
      let DATA  = await ADMIN.create(BODY_DATA)
  
      main(BODY_DATA.email)
  
      let TOKEN = await jwt.sign({secure : DATA._id},'W3SCHOOL')
  
      res.status(201).json({
        message : "USER OR SIGN UP SUCESSFULLY :)",
        DATA,
        TOKEN
      })
    } catch (error) {
      res.status(404).json({
        message : error.message
      })
    }
  
  }

exports.LOG_IN_CONTROLLER = async function(req, res, next) {
  
    try {
      
      let BODY_DATA = req.body ;
  
      if (!BODY_DATA.email || !BODY_DATA.password) {
          throw new Error("PLESE ENTER ALL THE FIELDS") ;
      }
  
      let CHEAK_USER = await ADMIN.findOne({email:BODY_DATA.email})
  
      if (!CHEAK_USER) {
          throw new Error("USER NOT FOUND !")
      }
  
      let CHEAK_PASS = await bcrypt.compare(BODY_DATA.password , CHEAK_USER.password)
  
      if (!CHEAK_PASS) {
        throw new Error("PASSWORD IS WRONG!")
    }
  
      res.status(201).json({
        message : "LOG IN SUCESSFULLY :)"
      })
    } catch (error) {
      res.status(404).json({
        message : error.message
      })
    }
  
  }

exports.ONE_USER_CONTROLLER = async function(req, res, next) {
  
    try {
      
      let ONE_USER = req.params.user ;
      console.log(ONE_USER);
      
      let ALL_DATA = await ADMIN.findById(ONE_USER) ;
      // let ALL_DATA = await ADMIN.findById({_id : ONE_USER}) ;
  
      res.status(201).json({
        message : "ALL DATA FETCH SUCESSFULLY :)",
        ALL_DATA
      })
    } catch (error) {
      res.status(404).json({
        message : error.message
      })
    }
  
  }

exports.MULTI_USERS_CONTROLLER = async function(req, res, next) {
  
    try {
      
      let ALL_DATA = await ADMIN.find()
  
      res.status(201).json({
        message : "ALL DATA FETCH SUCESSFULLY :)",
        ALL_DATA
      })
    } catch (error) {
      res.status(404).json({
        message : error.message
      })
    }
  
  }