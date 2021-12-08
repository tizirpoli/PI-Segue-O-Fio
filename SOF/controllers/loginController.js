const fs = require('fs');
const path = require('path');
const myuid = require('myuid');
const bcrypt = require('bcrypt');
const { check, body, validationResult } = require('express-validator');
const session = require('express-session');

let usuarios = path.join('users.json');

const userLogin = {
    loginUser: (req, res) => {
        let errorsList = validationResult(req);
        console.log(errorsList);

        if (errorsList.isEmpty()) {
            let { email, password } = req.body;
            let userList = JSON.parse(fs.readFileSync('users.json', { encoding: 'utf-8' }));

            console.log(userList.password);


            if (email != userList.email && (!bcrypt.compareSync(password, userList.password))) {
                return res.redirect('/login')
            } else {
                req.session.user = userList;

                res.redirect('/dashboard');
            }
        } return res.render('login', { title: "Login", errors: errorsList.errors })

    },
    logout: (req, res) => {
        req.session.destroy();
        return res.redirect('login')
    }
}

module.exports = userLogin;