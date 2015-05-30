var expect = require('chai').expect;

describe("Configuration setup", function(){
	it("should load local config and has port 3000", function(){
		var config = require('../config')();
		expect(config.mode).to.be.equal('local');
		expect(config.port).to.be.equal(3000);
	});
	it("should load staging config and has port 8080", function(){
		var config = require('../config')('staging');
		expect(config.mode).to.be.equal('staging');
		expect(config.port).to.be.equal(8080);
	});
	it("should load production config and has port 80", function() {
		var config = require('../config')('production');
		expect(config.mode).to.be.equal('production');
		expect(config.port).to.be.equal(80);
	});
});
