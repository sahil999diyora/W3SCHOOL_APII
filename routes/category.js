var express = require('express');
var router = express.Router();
// var CATEGORY = require('../models/category')
const multer  = require('multer')
let SECURE_CONTROLLER = require('../controllers/secure')
let CATEGORY_CONTROLLER = require('../controllers/category')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images/category')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, uniqueSuffix + file.originalname)
  }
})

const upload = multer({ storage: storage })

router.post('/add',SECURE_CONTROLLER.SECURE, upload.single('image') ,CATEGORY_CONTROLLER.CREATE_CATEGORY);

router.get('/:id',CATEGORY_CONTROLLER.FIND_CATEGORY );

router.get('/', CATEGORY_CONTROLLER.FIND_CATEGORIES);

router.put('/:update',SECURE_CONTROLLER.SECURE, upload.single('image') , CATEGORY_CONTROLLER.UPDATE_CATEGORY);

router.delete('/:delete',SECURE_CONTROLLER.SECURE, CATEGORY_CONTROLLER.DELETE_CATEGORY );

module.exports = router;
