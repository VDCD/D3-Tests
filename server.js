var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var logger = require('./tools/logger');

var app = express();

//Middlewares
app.use(logger);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

//Routes
app.get('/1', function(req, res){
  res.sendFile(path.join(__dirname + '/public/test.html'));
});

app.get('/2', function(req, res){
  res.sendFile(path.join(__dirname + '/public/test2.html'));
});

app.get('/3', function(req, res){
  res.sendFile(path.join(__dirname + '/public/test3.html'));
});

app.get('/4', function(req, res){
  res.sendFile(path.join(__dirname + '/public/test4.html'));
});

app.listen(process.env.PORT || 3000, function(req, res){
  if(process.env.PORT){
    console.log('API is running on port 3000 or '+process.env.PORT);
  }else{
    console.log('API is running on port 3000');
  }
});
