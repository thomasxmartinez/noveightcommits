var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cons = require('consolidate');
var dust = require('dustjs-helpers');
var pg = require('pg');
var app = express();

//DB connection string
var connect = 'postgres://admin:fullbird34@localhost/records';

//Assign Dust engine To .dust files
app.engine('dust', cons.dust);

// Set Default Ext .dust
app.set('view engine', 'dust');
app.set('views', __dirname + '/views');

//set public folder
app.use(express.static(path.join(__dirname, 'public')));

//Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res) {
  res.render('index');
  console.log('make sure it works');
});

//server
app.listen(3000, function() {
  console.log('3005 we all the way up!');
});
