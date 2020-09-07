//Import Translator Service
let translatorService = require('./../services/TranslatorService');
let { validationResult } = require('express-validator');


//For getMorseCode
exports.getMorseCode = function (req, res) {
    let inputText = req.body.message;

    var result = validationResult(req);

    console.log(result);

    if (result.errors.length > 0) {
        res.status(400).json({ success: false, error: result });
    } else {
        res.json(translatorService.translate(inputText));
    }
};