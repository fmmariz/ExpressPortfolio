/*---------------------------------------------------------------------------
server.js
by Filipe Mendes Mariz (301255800)
2023-09-27
-----------------------------------------------------------------------------*/
const express = require('express');
const morgan = require('morgan');
const compression = require('compression');
const multer = require('multer');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const session = require('express-session');
const alert = require('alert');

module.exports = function () {
  const app = express();
  const upload = multer();

  if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
  } else if (process.env.NODE_ENV === 'production') {
    app.use(compression());
  }

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(methodOverride());
  app.use(upload.array());
  app.use(express.static('public'));

  // Define your session secret here (replace 'your-secret-key-here' with your actual secret key)
  //const sessionSecret = 'your-secret-key-here';
    const sessionSecret='developmentSessionSecret';
  app.use(session({
    saveUninitialized: true,
    resave: true,
    secret: sessionSecret
  }));

  app.set('views', './app/views');
  app.set('view engine', 'ejs');
  app.use('/', require('../app/routes/index.server.routes.js'));



//app.use('/', 'routes');

//require('../app/routes/index.server.routes.js')(app);

  // Example route for demonstration
  //app.get('/', (req, res) => {
    //res.render('index'); // Replace 'index' with the name of your template
    //});
    
    //require('../app/routes/index.server.routes.js')(app);

  // Serve static files from the 'public' directory
  app.use(express.static('./public'));

  return app;
};
