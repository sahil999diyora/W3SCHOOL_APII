var express = require('express');
var router = express.Router();
// var SUB_CATEGORY = require('../models/subcategory')
let SECURE_CONTROLLER = require('../controllers/secure')
let SUB_CATEGORY_CONTROLLER = require('../controllers/subcategory')


router.post('/add',SECURE_CONTROLLER.SECURE, SUB_CATEGORY_CONTROLLER.SUB_CATEGORY_CREATE);

router.get('/:id', SUB_CATEGORY_CONTROLLER.SUB_CATEGORY_FIND);

router.get('/', SUB_CATEGORY_CONTROLLER.SUB_CATEGORY_FINDS);

router.put('/:update',SECURE_CONTROLLER.SECURE, SUB_CATEGORY_CONTROLLER.SUB_CATEGORY_UPDATE);

router.delete('/:delete',SECURE_CONTROLLER.SECURE, SUB_CATEGORY_CONTROLLER.SUB_CATEGORY_DELETE);

module.exports = router;
