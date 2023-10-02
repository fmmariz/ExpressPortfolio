var express = require('express');
var app = express();
var router = express.Router();

/* GET home page. */
router.get('/home', function(req, res, next) {
res.render('index', { title: 'Home' });
});

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Home' });
});

router.get('/about', function(req,res,next){
    res.render('about', { title: 'About Me'});
});

router.get('/contact', function(req,res,next){
    res.render('contact', { title: 'Contact Me'});
});

router.get('/project', function(req,res,next){
    res.render('project', { title: 'My Projects'});
});

router.get('/projectgame', function(req,res,next){
    res.render('projectgame', { title: 'Game Projects'});
});

router.get('/projectmobile', function(req,res,next){
    res.render('projectmobile', { title: 'Mobile Projects'});
});

router.get('/projectweb', function(req,res,next){
    res.render('projectweb', { title: 'Web Projects'});
});

router.get('/services', function(req,res,next){
    res.render('services', { title: 'Services'});
});

module.exports = router ;