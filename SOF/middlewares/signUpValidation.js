const { check, body, validationResult } = require('express-validator');

const validateSignUp = [
    check('fullName')
        .isLength({ min: 3 })
        .isString
        .isAlphanumeric(String['pt-BR']),
    check('user')
        .isLength({ min: 4 })
        .isString,
    check('email')
        .isEmail,
    check('emailConfirmation')
        .isEmail,
    check()
];

module.exports = validateSignUp;