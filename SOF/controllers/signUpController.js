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


            return res.redirect('login');
        } else {
            return res.render('signUp', { title: "Cadastro", errors: errorsList.errors, fields: userList });
        }


    },
    updateUsername: (req, res) => {
        let errorsList = validationResult(req);
        let userList = JSON.parse(fs.readFileSync('users.json', { encoding: 'utf-8' }));

        if (errorsList.isEmpty()) {
            userList.username = req.body.username;

            console.log(userList);



            let newUser = fs.writeFileSync(userDb, JSON.stringify(userList, null, 2), { encoding: 'utf-8' });


            req.session.user = userList;

            return res.redirect('accountmgmt')
        } else {
            console.log(errorsList)

            return res.redirect('accountmgmt');
        }

    },
    updateEmail: (req, res) => {
        let errorsList = validationResult(req);
        let userList = JSON.parse(fs.readFileSync('users.json', { encoding: 'utf-8' }));

        if (errorsList.isEmpty()) {
            userList.email = req.body.email;

            console.log(userList);



            let newUser = fs.writeFileSync(userDb, JSON.stringify(userList, null, 2), { encoding: 'utf-8' });


            req.session.user = userList;

            return res.redirect('accountmgmt')
        } else {
            console.log(errorsList)

            return res.redirect('accountmgmt')
        }

    },
    updatePassword: (req, res) => {
        let errorsList = validationResult(req);
        let userList = JSON.parse(fs.readFileSync('users.json', { encoding: 'utf-8' }));

        if (errorsList.isEmpty()) {
            userList.password = bcrypt.hashSync(req.body.password, 10);

            console.log(userList);



            let newUser = fs.writeFileSync(userDb, JSON.stringify(userList, null, 2), { encoding: 'utf-8' });


            req.session.user = userList;

            return res.redirect('accountmgmt')
        } else {
            console.log(errorsList)

            return res.redirect('accountmgmt')
        }

    },
    updatePhone: (req, res) => {
        let userList = JSON.parse(fs.readFileSync('users.json', { encoding: 'utf-8' }));

        userList.phone = req.body.phone;

        console.log(userList);

        let newUser = fs.writeFileSync(userDb, JSON.stringify(userList, null, 2), { encoding: 'utf-8' });

        console.log('NewUser', newUser);

        req.session.user = userList;

        return res.redirect('/accountmgmt');


    },
    updateAvatar: (req, res) => {
        let errorsList = validationResult(req);
        let userList = JSON.parse(fs.readFileSync('users.json', { encoding: 'utf-8' }));

        if (errorsList.isEmpty()) {
            userList.avatar = req.file;

            console.log(userList);



            let newUser = fs.writeFileSync(userDb, JSON.stringify(userList, null, 2), { encoding: 'utf-8' });


            req.session.user = userList;

            return res.redirect('accountmgmt')
        } else {
            console.log(errorsList)

            return res.redirect('accountmgmt');
        }

    },

    updatename: (req, res) => {
        let errorsList = validationResult(req);
        let userList = JSON.parse(fs.readFileSync('users.json', { encoding: 'utf-8' }));

        if (errorsList.isEmpty()) {
            userList.name = req.body.name;

            console.log(userList);



            let newUser = fs.writeFileSync(userDb, JSON.stringify(userList, null, 2), { encoding: 'utf-8' });


            req.session.user = userList;

            return res.redirect('accountmgmt')
        } else {
            console.log(errorsList)

            return res.redirect('accountmgmt');
        }

    },

    updatebio: (req, res) => {
        let errorsList = validationResult(req);
        let userList = JSON.parse(fs.readFileSync('users.json', { encoding: 'utf-8' }));

        if (errorsList.isEmpty()) {
            userList.bioUpdate = req.body.bioUpdate;

            console.log(userList);



            let newUser = fs.writeFileSync(userDb, JSON.stringify(userList, null, 2), { encoding: 'utf-8' });


            req.session.user = userList;

            return res.redirect('accountmgmt')
        } else {
            console.log(errorsList)

            return res.redirect('accountmgmt');
        }

    },


}

module.exports = signUpController;