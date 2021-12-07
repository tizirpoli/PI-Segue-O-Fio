const fs = require('fs');
const path = require('path');
const myuid = require('myuid');
const bcrypt = require('bcrypt');

let usuarios = path.join('users.json');

const userLogin = {
    loginUser: (req, res) => {
        let { email, password } = req.body;
        let userList = JSON.parse(fs.readFileSync('users.json', { encoding: 'utf-8' }));

        console.log(userList.password);


        if (email != userList.email && (!bcrypt.compareSync(password, userList.password))) {
            return res.redirect('/login')
        } else {
            req.session.user = userList;

            return res.redirect('/dashboard', { user: req.session.user });
        }
    }
}

module.exports = userLogin;