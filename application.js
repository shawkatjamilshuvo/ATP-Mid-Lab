var express = require('express');
var ejs = require('ejs');
var app = express();
var port = 2000;


app.set('view engine', 'ejs');

app.get('/', function(req, res){
	res.send('You are welcome');
});

app.get('/home', function(req, res){
	res.send('Welcome to the home page!');
});

app.get('/login', function(req, res){
	res.send('Welcome to the Login page');
});

app.listen(port, function(){
	console.log(`Nodejs app listening on port ${port}!`);
});