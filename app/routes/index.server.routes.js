var express = require('express');
var app = express();
var router = express.Router();
var alert = require('alert');

/* GET home page. */
router.get('/home', function(req, res, next) {
res.render('index', { title: 'Home' , active: {active_home:true} });
});

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Home' , active: {home:true}});
});

router.get('/about', function(req,res,next){
    res.render('about', { title: 'About Me', active: {about:true}});
});

router.get('/contact', function(req,res,next){
    res.render('contact', { title: 'Contact Me', path:"contact"});
});

router.get('/project', function(req,res,next){
    res.render('project', { title: 'My Projects',path:"project"});
});

router.get('/projectgame', function(req,res,next){
    res.render('projectgame', { title: 'Game Projects',path:"project"});
});

router.get('/projectmobile', function(req,res,next){
    res.render('projectmobile', { title: 'Mobile Projects', path:"project"});
});

router.get('/projectweb', function(req,res,next){
    res.render('projectweb', { title: 'Web Projects', path:"project"});
});

router.get('/services', function(req,res,next){
    res.render('services', { title: 'Services', path:"service"});
});

router.post('/contact', function(req,res){
    var info = req.body;
    console.log(info.firstname);
    if(!info.firstname || !info.lastname || !info.email){
        alert("Fields filled incorrectly");
        res.redirect('/home');
    }else{
      var message = "Thank you for messaging me "+info.firstname+" "+info.lastname+", I will probably get back to you at "+info.email+", so please keep track of it for my response!";
      alert(message);
      res.redirect('/home');
    }
  });

module.exports = router ;