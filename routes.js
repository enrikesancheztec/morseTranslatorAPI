let router = require('express').Router();
const { check } = require('express-validator');

var translatorController = require('./controller/TranslatorController');

router.post('/morse-code', [check('message', 'Message cannot be empty').not().isEmpty()], translatorController.getMorseCode);

module.exports = router;