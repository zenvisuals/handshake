var httpMocks = require('node-mocks-http'),
    chai = require('chai'),
    chaiAsPromised = require('chai-as-promised'),
    expect = chai.expect,
    UserController = require('../../controllers/UserController'),
    app = require('../../app'),
    userCtrl;

chai.use(chaiAsPromised);

var req, res;


beforeEach(function(done){
  req = httpMocks.createRequest();
  res = httpMocks.createResponse();
  done();
});

describe('UserController', function(){
  var userCtrl;
  beforeEach(function(){
    userCtrl = new UserController(app);
  })
  it('should resolve no matter what', function(){
    userCtrl._read();
  });
});
