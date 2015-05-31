var expect = require('chai').expect,
		mongoose = require('mongoose');

describe("MongoDB", function(){
	it("should have MongoDB server up and running", function(){
		expect(mongoose.connection.readyState).to.be.greaterThan(0);
	})
})
