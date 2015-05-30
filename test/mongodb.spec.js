var expect = require('chai').expect,
		mongoose = require('mongoose');
//root open mongodb connection
before(function(){
	mongoose.connect('mongodb://127.0.0.1:27017');
})

after(function(){
	mongoose.connection.close();
})

describe("MongoDB", function(){
	it("should have only one instance of MongoDB client running", function(){
		expect(mongoose.connection.readyState).to.be.equal(1);
	})
})
