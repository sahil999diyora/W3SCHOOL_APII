var TOPIC = require('../models/topic')

exports.TOPIC_CREATE = async function (req, res, next) {

  try {

    let BODY_DATA = req.body;

    BODY_DATA.image = req.files.map(el => el.filename)

    if (!BODY_DATA.name || !BODY_DATA.image || !BODY_DATA.description || !BODY_DATA.category || !BODY_DATA.subcategory) {
      throw new Error("PLESE ENTER ALL THE FIELD")
    }

    let DATA = await TOPIC.create(BODY_DATA);

    res.status(201).json({
      message: "TOPIC ADD SUCESSFULLY",
      DATA
    })
  } catch (error) {
    res.status(404).json({
      message: error.message
    })
  }

}

exports.TOPIC_FIND = async function (req, res, next) {

  try {

    let ID = req.params.id;

    let DATA = await TOPIC.findById({ _id: ID }).populate(['category', 'subcategory']);

    res.status(201).json({
      message: "SINGLE DATA FETCH SUCESSFULLY",
      DATA
    })
  } catch (error) {
    res.status(404).json({
      message: error.message
    })
  }

}

exports.TOPIC_FINDS = async function (req, res, next) {

  try {

    let DATA = await TOPIC.find().populate(['category', 'subcategory']);

    res.status(201).json({
      message: "ALL DATA FETCH SUCESSFULLY",
      DATA
    })
  } catch (error) {
    res.status(404).json({
      message: error.message
    })
  }

}

exports.TOPIC_UPDATE = async function (req, res, next) {

  try {

    let ID = req.params.update;
    let BODY_DATA = req.body;
    let FILES = req.files;

    if (FILES && req.files.map(el => el.filename)) {
      BODY_DATA.image = req.files.map(el => el.filename)
    }

    let UPDATE_DATA = await TOPIC.findByIdAndUpdate(ID, BODY_DATA, { new: true })

    res.status(201).json({
      message: "TOPIC UPDATE SUCESSFULLY",
      UPDATE_DATA
    })
  } catch (error) {
    res.status(404).json({
      message: error.message
    })
  }

}

exports.TOPIC_DELETE = async function (req, res, next) {

  try {

    let ID = req.params.delete;

    let DELETE_DATA = await TOPIC.findByIdAndDelete(ID)

    res.status(201).json({
      message: "TOPIC DELETE SUCESSFULLY",
      DELETE_DATA
    })
  } catch (error) {
    res.status(404).json({
      message: error.message
    })
  }

}

// CATEGORY OR SUBCATEGORY THROW CREATED DATA FETCH API //

exports.TOPIC_CATEGORY = async function (req, res, next) {

  try {

    let FETCH_CATEGORY_ID = req.params.id;

    let DATA = await TOPIC.find({ category: FETCH_CATEGORY_ID }).populate(['category', 'subcategory']);

    res.status(201).json({
      message: "ALL CATEGORY DATA FETCH SUCESSFULLY",
      DATA
    })
  } catch (error) {
    res.status(404).json({
      message: error.message
    })
  }

}

exports.TOPIC_SUBCATEGORY = async function (req, res, next) {

  try {

    let FETCH_SUBCATEGORY_ID = req.params.id;

    let DATA = await TOPIC.find({ subcategory: FETCH_SUBCATEGORY_ID }).populate(['category', 'subcategory']);

    res.status(201).json({
      message: "ALL SUBCATEGORY DATA FETCH SUCESSFULLY",
      DATA
    })
  } catch (error) {
    res.status(404).json({
      message: error.message
    })
  }

}



