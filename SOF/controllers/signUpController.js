const fs = require('fs');
const path = require('path');
const myuid = require('myuid');
const bcrypt = require('bcrypt');

let userDb = path.join("users.json");

const signUpController = {
    store: (req, res) => {
        let myuuid = myuid();
        let hash = bcrypt.hashSync(req.body.password, 10);
        let newUser = {
            id: myuuid,
            name: req.body.fullName,
            username: req.body.username,
            email: req.body.email,
            phone: req.body.phone,
            password: hash,
            bioUpdate: req.body.bioUpdate,
        }

        fs.writeFileSync(userDb, JSON.stringify(newUser, null, 2), { encoding: 'utf-8' });

        console.log(newUser);

        return res.redirect('/login', 200);
    },

};

module.exports = signUpController;