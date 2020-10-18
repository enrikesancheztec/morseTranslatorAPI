let loginService = require('./../services/LoginService');
let { validationResult } = require('express-validator');

exports.login = function (req, res) {
    let username = req.body.username;
    let password = req.body.password;

    var result = validationResult(req);

    console.log(result);

    if (result.errors.length > 0) {
        res.status(400).json({ success: false, error: result });
    } else {
        if (loginService.authenticate(username, password)) {
            res.status(200).json({ success: true, username: username });
        } else {
            res.status(403).json({ success: false, error: 'Wrong username or password!' });
        }        
    }
};