var express = require('express');
const app = require('../app');
var router = express.Router();
const homeController = require('../controllers/homeControler');
const loginController = require('../controllers/loginController');
const signupController = require('../controllers/signUpController');

let auth = require('../middlewares/auth.js');

/* GET home page. */
router.get('/', function (req, res) {
  res.render('home', { title: 'Home page' });
});

router.get('/', function (req, res) {
  res.render('home', { title: 'Home page' });
});

router.post('/home', homeController.post);
router.post('/', homeController.post);

router.get('/about', function (req, res) {
  res.render('about', { title: 'Sobre Nós' })
})

router.get('/contact', function (req, res) {
  res.render('contact', { title: 'Contato' })
})

router.get('/credits', function (req, res) {
  res.render('credits', { title: 'Créditos' })
})

router.get('/ranking', function (req, res) {
  res.render('ranking', { title: 'Ranking' })
})

router.get('/search', function (req, res) {
  res.render('search', { title: 'Busca' })
})


router.get('/login', function (req, res) {
  res.render('login', { title: 'Login' })
})

router.post('/login', loginController.loginUser);

router.get('/signUp', function (req, res) {
  res.render('signUp', { title: 'Cadastro' })
})

router.post('/signUp', signupController.store);

router.get('/dashboard', auth, function (req, res) {
  res.render('dashboard', { title: 'Painel de Controle', user: req.session.user })
})

router.get('/newthread', auth, function (req, res) {
  res.render('newthread', { title: 'Nvo Fio' })
})

router.get('/threadsmgmt', auth, function (req, res) {
  res.render('threadsmgmt', { title: 'Gerencie Seus Fios' })
})

router.get('/profileview', auth, function (req, res) {
  res.render('profileview', { title: 'Perfil de @Usuário | Segue o Fio' })
})

router.get('/accountmgmt', auth, function (req, res) {
  res.render('accountmgmt', { title: 'Edite Seu Perfil' })
})

module.exports = router;
