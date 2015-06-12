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
  });

  describe('constructor', function(){

    it('should be okay', function(){
      expect(userCtrl).to.be.ok;
    });

    it('result should be something', function(done){
      userCtrl._read(req, res, function(result){
        console.log(result);
        expect(result).to.be.ok;
        done();
      })
    })

  })

});
