const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const Schema = mongoose.Schema;

// Define
const userSchema = new Schema({
  email: { type: String, unique: true, lowercase: true },
  password: String,
});

// Hook, Bcrypt password (No arrow functions allowed)
userSchema.pre('save', function (next) {
  const user = this;

  bcrypt.genSalt(10, function(err, salt) {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, null, function(err, hash) {
      if (err) return next(err);

      user.password = hash;
      next();
    });
  });
});

userSchema.method.comparePassword = function(candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) {
      return callback(err);
    }

    callback(null, isMatch);
  });
};

// Model Class
const UserClass = mongoose.model('user', userSchema);

// Export model
module.exports = UserClass;
