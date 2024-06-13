var CATEGORY = require('../models/category')

exports.CREATE_CATEGORY = async function(req, res, next) {
  
    try {
  
      let BODY_DATA = req.body ;
  
      BODY_DATA.image = req.file.filename ;
  
      if (!BODY_DATA.name || !BODY_DATA.image || !BODY_DATA.tagline) 
      {
          throw new Error("PLESE ENTER ALL THE FIELD")
      }
  
      let DATA = await CATEGORY.create(BODY_DATA) ;
  
      res.status(201).json({
        message : "CATEGORY ADD SUCESSFULLY",
        DATA
      })
    } catch (error) {
      res.status(404).json({
        message : error.message
      })
    }
  
  }
  
exports.FIND_CATEGORY = async function(req, res, next) {
  
    try {
  
      let ID = req.params.id ;
  
      let DATA = await CATEGORY.findById({_id:ID}) ;
  
      res.status(201).json({
        message : "SINGLE DATA FETCH SUCESSFULLY",
        DATA
      })
    } catch (error) {
      res.status(404).json({
        message : error.message
      })
    }
  
  }

exports.FIND_CATEGORIES = async function(req, res, next) {
  
    try {
  
      let DATA = await CATEGORY.find() ;
  
      res.status(201).json({
        message : "ALL DATA FETCH SUCESSFULLY",
        DATA
      })
    } catch (error) {
      res.status(404).json({
        message : error.message
      })
    }
  
  }

exports.UPDATE_CATEGORY = async function(req, res, next) {
  
    try {
  
      let ID = req.params.update ;

      let BODY_DATA = req.body ;

      if (req.file && req.file.filename) 
      {
          BODY_DATA.image = req.file.filename
      }
      
      let UPDATE_DATA = await CATEGORY.findByIdAndUpdate(ID,BODY_DATA,{new:true}) 
  
      res.status(201).json({
        message : "CATEGORY UPDATE SUCESSFULLY",
        UPDATE_DATA
      })
    } catch (error) {
      res.status(404).json({
        message : error.message
      })
    }
  
  }

exports.DELETE_CATEGORY = async function(req, res, next) {
  
    try {
  
      let ID = req.params.delete ;
      
      let DELETE_DATA = await CATEGORY.findByIdAndDelete(ID) 
  
      res.status(201).json({
        message : "CATEGORY DELETE SUCESSFULLY",
        DELETE_DATA
      })
    } catch (error) {
      res.status(404).json({
        message : error.message
      })
    }
  
  }
