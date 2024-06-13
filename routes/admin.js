var express = require('express');
var router = express.Router();
var ADMIN_CONTROLLER = require('../controllers/admin')
// var ADMIN = require('../models/admin');
let SECURE_CONTROLLER = require('../controllers/secure')

router.post('/signup', ADMIN_CONTROLLER.SIGN_UP_CONTROLLER);

router.post('/login', ADMIN_CONTROLLER.LOG_IN_CONTROLLER);

router.get('/:user', SECURE_CONTROLLER.SECURE , ADMIN_CONTROLLER.ONE_USER_CONTROLLER);

router.get('/', SECURE_CONTROLLER.SECURE , ADMIN_CONTROLLER.MULTI_USERS_CONTROLLER);

module.exports = router;
