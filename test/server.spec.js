var expect = require('chai').expect,
		mongoose = require('mongoose');
//root open server and mongodb
before(function(){
  
	mongoose.connect('mongodb://127.0.0.1:27017/handshakeExpress');
})

after(function(){
	mongoose.connection.close();
})
