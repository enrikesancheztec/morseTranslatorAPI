//initialize express router
let router = require('express').Router();

//Import Translator Controller
var translatorController = require('./controller/TranslatorController');

// Bio routes
router.route('/morse-code')
    .post(translatorController.getMorseCode);

//Export API routes
module.exports = router;