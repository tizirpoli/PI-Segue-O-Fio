const fs = require('fs');
const path = require('path');
const myuid = require('myuid');
const bcrypt = require('bcrypt');
const { check, body, validationResult } = require('express-validator');
const session = require('express-session');
const { search } = require('../routes');

let userDb = path.join("search.json");

const searchController = {
    search: (req, res) => {
        let searchItem = req.body.searchbox;

        fs.writeFileSync(userDb, JSON.stringify(searchItem, null, 2), { encoding: 'utf-8' });

        console.log(searchItem);


        return res.render('search', { title: "Busca", user: req.session.user, search: searchItem });
    }


}
module.exports = searchController;