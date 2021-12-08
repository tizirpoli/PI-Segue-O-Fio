const fs = require('fs');
const path = require('path');
const myuid = require('myuid');
const bcrypt = require('bcrypt');
const { check, body, validationResult } = require('express-validator');
const multer = require('multer');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

var upload = multer({ storage: storage });


let userDb = path.join("users.json");

const signUpController = {
    store: (req, res) => {
        let errorsList = validationResult(req);
        console.log(errorsList);

        if (errorsList.isEmpty()) {
            let myuuid = myuid();
            let hash = bcrypt.hashSync(req.body.password, 10);
            let newUser = {
                id: myuuid,
                name: req.body.fullName,
                username: req.body.username,
                email: req.body.email,
                emailConfirmation: req.body.emailConfirmation,
                phone: req.body.phone,
                password: hash,
                passwordConfirmation: bcrypt.hashSync(req.body.passwordConfirmation, 10),
                bioUpdate: req.body.bioUpdate,
                avatar: req.file,
            }


            fs.writeFileSync(userDb, JSON.stringify(newUser, null, 2), { encoding: 'utf-8' });

            console.log(newUser);


            return res.redirect(200, '/login');
        } else {
            return res.render('signUp', { title: "Cadastro", errors: errorsList.errors })
        }


    },

};

module.exports = signUpController;