let router = require('express').Router();
const { check } = require('express-validator');

var translatorController = require('./controller/TranslatorController');
var loginController = require('./controller/LoginController');

router.post('/morse-code', [check('message', 'Message cannot be empty').not().isEmpty()], translatorController.getMorseCode);
router.post('/login', [check('username', 'Username cannot be empty').not().isEmpty(), check('password', 'Password cannot be empty').not().isEmpty()], loginController.login);

module.exports = router;