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
});
const session = require('express-session');

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
    updateUsername: (req, res) => {
        let userList = JSON.parse(fs.readFileSync('users.json', { encoding: 'utf-8' }));

        userList.username = req.body.username;

        console.log(userList);

        let newUser = fs.writeFileSync(userDb, JSON.stringify(userList, null, 2), { encoding: 'utf-8' });

        req.session.user = newUser;

        return res.redirect('accountmgmt', { user: req.session.user, title: "Edite Seu Perfil" })

    },
    updateEmail: (req, res) => {
        let userList = JSON.parse(fs.readFileSync('users.json', { encoding: 'utf-8' }));

        userList.email = req.body.email;
        req.session.user.email = req.body.email;

        console.log(userList);

        let updatedUser = fs.writeFileSync(userDb, JSON.stringify(userList, null, 2), { encoding: 'utf-8' });

        console.log(updatedUser);

        return res.redirect('accountmgmt', { user: req.session.user, title: "Edite Seu Perfil" })

    },
    updatePassword: (req, res) => {
        let userList = JSON.parse(fs.readFileSync('users.json', { encoding: 'utf-8' }));

        userList.password = req.body.password;
        req.session.user.password = req.body.password;

        console.log(userList);

        let updatedUser = fs.writeFileSync(userDb, JSON.stringify(userList, null, 2), { encoding: 'utf-8' });

        console.log(updatedUser);

        return res.redirect('accountmgmt', { user: req.session.user, title: "Edite Seu Perfil" })

    },
    updatePassword: (req, res) => {
        let userList = JSON.parse(fs.readFileSync('users.json', { encoding: 'utf-8' }));

        userList.password = req.body.password;
        req.session.user.phone = req.body.phone;

        console.log(userList);

        let updatedUser = fs.writeFileSync(userDb, JSON.stringify(userList, null, 2), { encoding: 'utf-8' });

        console.log(updatedUser);

        return res.redirect('accountmgmt', { user: req.session.user, title: "Edite Seu Perfil" })

    }


};

module.exports = signUpController;