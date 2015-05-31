var mongoose = require('mongoose'),
    User = require('../../models/User'),
    chai = require('chai'),
    expect = chai.expect;

describe('User Generation', function(){
  var currentUser = null;
  var tmpData = {
    email: 'test@test.com',
    password: 'password'
  };
  beforeEach(function(done){
    var user = new User(tmpData);
    user.save(function(err, newUser){
      if(err) throw err;
      currentUser = newUser;
      done();
    });
  });

  afterEach(function(){
    User.remove({_id: currentUser._id}, function(err){
      if(err) throw err;
    })
  });

  it('the user should be created', function(done){
    expect(currentUser).to.not.null;
    done();
  });

  it('user id should be generated', function(done){
    expect(currentUser._id).to.not.null;
    done();
  })

  it('user email should be same', function(done){
    expect(currentUser.email).to.be.equal(tmpData.email);
    done();
  });

  it('user password should be encrypted', function(done){
    expect(currentUser.password).to.not.equal(tmpData.password);
    done();
  });
});

describe('User validation', function(){
  it('should prompt an error if email not filled up', function(done){
    var errData = {
      password: 'password'
    };
    var user = new User(errData);
    user.save(function(err){
      expect(err).to.not.null;
      done();
    });
  });
  it('should prompt an error if password not filled up', function(done){
    var errData = {
      email: 'test@test.com'
    };
    var user = new User(errData);
    user.save(function(err){
      expect(err).to.not.null;
      done();
    })
  })
})
