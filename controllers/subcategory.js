var SUB_CATEGORY = require('../models/subcategory')

exports.SUB_CATEGORY_CREATE = async function(req, res, next) {
  
  try {

    let BODY_DATA = req.body ;
    
    if (!BODY_DATA.name || !BODY_DATA.category) 
    {
        throw new Error("PLESE ENTER ALL THE FIELD")
    }

    let DATA = await SUB_CATEGORY.create(BODY_DATA) ;

    res.status(201).json({
      message : "SUB CATEGORY ADD SUCESSFULLY",
      DATA
    })
  } catch (error) {
    res.status(404).json({
      message : error.message
    })
  }

    }

exports.SUB_CATEGORY_FIND = async function(req, res, next) {
  
    try {
  
      let ID = req.params.id ;
  
      let DATA = await SUB_CATEGORY.findById({_id:ID}).populate('category') ;
  
      res.status(201).json({
        message : "SINGLE DATA SUCESSFULLY",
        DATA
      })
    } catch (error) {
      res.status(404).json({
        message : error.message
      })
    }
  
    }

exports.SUB_CATEGORY_FINDS =  async function(req, res, next) {
  
    try {
  
      let DATA = await SUB_CATEGORY.find().populate('category') ;
  
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

exports.SUB_CATEGORY_UPDATE = async function(req, res, next) {
  
    try {
  
      let ID = req.params.update ;
      let BODY_DATA = req.body ;
      
      let UPDATE_DATA = await SUB_CATEGORY.findByIdAndUpdate(ID,BODY_DATA,{new:true}) 
  
      res.status(201).json({
        message : "SUB CATEGORY UPDATE SUCESSFULLY",
        UPDATE_DATA
      })
    } catch (error) {
      res.status(404).json({
        message : error.message
      })
    }
  
    }

exports.SUB_CATEGORY_DELETE = async function(req, res, next) {
  
    try {
  
      let ID = req.params.delete ;
      
      let DELETE_DATA = await SUB_CATEGORY.findByIdAndDelete(ID) 
  
      res.status(201).json({
        message : "SUB CATEGORY DELETE SUCESSFULLY",
        DELETE_DATA
      })
    } catch (error) {
      res.status(404).json({
        message : error.message
      })
    }
  
    }
