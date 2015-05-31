var Promise = require('bluebird');
var BaseController = require('./BaseController');
var util = require('util');
var app = require('../app');

function UserController(app){
  BaseController.call(this, app, 'user');
};

util.inherits(UserController, BaseController);

UserController.prototype._create = function(req, res, next) {
  console.log(req);
  next(req);
};

UserController.prototype._read = function(req, res, next){
  console.log("reading twice");
  next("i think i hit something");
};

Promise.promisifyAll(UserController);
Promise.promisifyAll(UserController.prototype);

module.exports = UserController;
