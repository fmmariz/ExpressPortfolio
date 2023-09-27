var express = require('express');
var app = express();
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
res.render('index', { title: 'Home' });
});

router.get('/about', function(req,res,next){
    res.render('about', { title: 'About Me'});
});

router.get('/contact', function(req,res,next){
    res.render('contact', { title: 'Contact Me'});
});

router.get('/product', function(req,res,next){
    res.render('product', { title: 'My Projects'});
});

router.get('/services', function(req,res,next){
    res.render('services', { title: 'Consulting'});
});

module.exports = router ;