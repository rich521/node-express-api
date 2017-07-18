const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

// Define
const userSchema = new Schema({
  email: { type: String, unique: true, lowercase: true },
  password: String,
});

// Model Class
const UserClass = mongoose.model('user', userSchema);

// Export model
module.exports = UserClass;
