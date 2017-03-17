// Built In 
const express = require('express');
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');
const morgan = require('morgan');
const path = require('path');

// Non Built In
const router = require('./routes/router')

var app = express();


// Integrating expternal libraries from node modules
app.use(express.static(path.join(__dirname,'public')));
app.use('/css', express.static(path.join(__dirname ,'/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname , '/node_modules/jquery/dist'))); 
app.use('/js', express.static(path.join(__dirname ,'/node_modules/bootstrap/dist/js'))); 
// Integrating our css
app.use('/css', express.static(path.join(__dirname ,'/public/stylesheets/')));


// Nunjucks configuration
nunjucks.configure('views', { noCache: true });
app.engine('html', nunjucks.render);
app.set('view engine', 'html');

// Set up middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(morgan('dev'));

app.use(router);

 module.exports = app;