// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');
var bodyParser = require('body-parser');
var app        = express();
var morgan     = require('morgan');

var mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost/countryApp'); 

// configuring our app
// morgan middleware logs to console
app.use(morgan('dev')); 

// configure body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var port  = process.env.PORT || 8000; // set our port



// mount the api routing 
var router = require('./app/routes');
app.use('/api', router);

// starting the server
app.listen(port,function(){
	console.log('server listening  on port ' + port);
});

