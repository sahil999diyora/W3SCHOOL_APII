var jwt = require('jsonwebtoken');
var ADMIN = require('../models/admin');

exports.SECURE = async function(req, res, next) {
  
    try {
  
      let TOKEN = req.headers.authorization ;
      
      if (!TOKEN) {
        throw new Error("PLESE ATTECH TOKEN")
      }

      let CHEAK_TOKEN = await jwt.verify(TOKEN,'W3SCHOOL')

      // let CHEAK_TOKEN_USER = await ADMIN.findById(CHEAK_TOKEN._id) ;
      let CHEAK_USER = await ADMIN.findById({_id : CHEAK_TOKEN.secure})
      
      if (!CHEAK_USER) 
      {
        throw new Error("USER NOT FOUND FOR THIS TOKEN !")  
      }

      next()
    
    } catch (error) {
      res.status(404).json({
        message : error.message
      })
    }
  
  }