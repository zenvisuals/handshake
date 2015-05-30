var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    bcrypt = require('bcrypt'),
    SALT_WORK_FACTOR = 10;

var UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    index: {unique:true}
  },
  firstName: String,
  lastName: String,
  password: {
    type: String,
    required: true
  }
});

UserSchema.pre('save', function(done){
  var user = this;

  if(!user.isModified('password')) return done();

  //generate salt
  bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt){
    if(err) return done(err);

    //hash the password with the salt
    bcrypt.hash(user.password, salt, function(err, hash){
      if(err) return done(err);

      //override the current password
      user.password = hash;
      done();
    })
  })
})

module.exports = mongoose.model('User', UserSchema);
