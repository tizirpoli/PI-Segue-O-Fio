var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/home', function(req, res){
  res.render('home', {title: 'Home page'});
});

router.get('/about', function(req, res){
  res.render('about', {title: 'Sobre Nós'})
})

router.get('/contact', function(req, res){
  res.render('contact', {title: 'Contato'})
})

router.get('/credits', function(req, res){
  res.render('credits', {title: 'Créditos'})
})

router.get('/ranking', function(req, res){
  res.render('ranking', {title: 'Ranking'})
})

router.get('/search', function(req, res){
  res.render('search', {title: 'Busca'})
})

router.get('/dashboard', function(req, res){
  res.render('dashboard', {title: 'Painel de Controle'})
})

router.get('/newthread', function(req, res){
  res.render('newthread', {title: 'Nvo Fio'})
})

router.get('/threadsmgmt', function(req, res){
  res.render('threadsmgmt', {title: 'Gerencie Seus Fios'})
})

router.get('/profileview', function(req, res){
  res.render('profileview', {title: 'Perfil de @Usuário | Segue o Fio'})
})

router.get('/accountmgmt', function(req, res){
  res.render('accountmgmt', {title: 'Edite Seu Perfil'})
})

router.get('/login', function(req, res){
  res.render('login', {title: 'Login'})
})

router.post('/login', function(req, res){
  let user = {
    username: req.body.username,
    password: req.body.paswword,
  }
  res.redirect('dashboard')
})

module.exports = router;