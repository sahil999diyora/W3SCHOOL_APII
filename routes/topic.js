var express = require('express');
var router = express.Router();
// var TOPIC = require('../models/topic')
const multer = require('multer')
let SECURE_CONTROLLER = require('../controllers/secure')
let TOPIC_CONTROLLER = require('../controllers/topic')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images/topic')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, uniqueSuffix + file.originalname)
  }
})

const upload = multer({ storage: storage })

router.post('/add', SECURE_CONTROLLER.SECURE, upload.array('image', 5), TOPIC_CONTROLLER.TOPIC_CREATE);

router.get('/:id', TOPIC_CONTROLLER.TOPIC_FIND);

router.get('/', TOPIC_CONTROLLER.TOPIC_FINDS);

router.put('/:update', SECURE_CONTROLLER.SECURE, upload.array('image', 5), TOPIC_CONTROLLER.TOPIC_UPDATE);

router.delete('/:delete', SECURE_CONTROLLER.SECURE, TOPIC_CONTROLLER.TOPIC_DELETE);

// CATEGORY OR SUBCATEGORY THROW CREATED DATA FETCH API //

router.get('/category/:id', TOPIC_CONTROLLER.TOPIC_CATEGORY);
router.get('/subcategory/:id', TOPIC_CONTROLLER.TOPIC_SUBCATEGORY);



module.exports = router;
