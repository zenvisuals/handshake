var express = require('express'),
		app = module.exports = express(),
		config = require('./config')(),
		port = config.port || 3000,
		mode = config.mode || 'local';

app.get('/', function(req, res) {
	res.send('Hello World');
});

var server = app.listen(port, function(){
	console.log("Server is on " + mode + " mode, port: " + port);
})
