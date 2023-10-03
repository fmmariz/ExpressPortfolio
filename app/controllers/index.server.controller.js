// ---------------------------------------------------------------------------
// index.server.controller.js
// by Filipe Mendes Mariz (301255800)
// 2023-10-03
// ----------------------------------------------------------------------------- 
exports.render = function(req, res) { 
    if (req.session.lastVisit) { 
          console.log(req.session.lastVisit); 
       }
    req.session.lastVisit = new Date();
     
    res.render('index', { 
       title: 'Hello World' 
    }); 
}; 
    