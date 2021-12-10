const category = require('../models/categories');

const categoryController = {
    index: (req, res) => {
        return res.render('categories', { title: 'Categorias', user: req.session.user });
    },

};

module.exports = categoryController;