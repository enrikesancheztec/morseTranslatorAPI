//Import Translator Service
var translatorService = require('./../services/TranslatorService');

//For getMorseCode
exports.getMorseCode = function (req, res) {
    let inputText = req.body.message;
    res.json(translatorService.translate(inputText));
};