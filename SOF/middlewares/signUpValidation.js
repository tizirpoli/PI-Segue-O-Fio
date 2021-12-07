const { check, body, validationResult } = require('express-validator');

const validateSignUp = [
    check('fullName')
        .isEmpty()
        .isLength({ min: 3 })
        .isAlphanumeric(String['pt-BR']),
    check('user')
        .isEmpty()
        .isLength({ min: 4 }),
    check('email')
        .isEmpty()
        .isEmail(),
    check('emailConfirmation')
        .isEmpty()
        .isEmail()
        .equals('email'),
    check('password')
        .isEmpty()
        .isLength({ min: 4 }),
    check('passwordConfirmation')
        .isEmpty()
        .equals('password'),
    check('phone')
        .isInt
];

module.exports = validateSignUp;