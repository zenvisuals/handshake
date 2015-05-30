var express = require('express'),
		app = express(),
		config = require('./config')();

app.get('/', function(req, res) {
	res.send('Hello World');
});

var server = app.listen(config.port, function(){
	console.log("Server is on " + config.mode + " mode, port: " + config.port);
})
