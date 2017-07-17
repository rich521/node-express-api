const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define
const userSchema = new Schema({
  user: { type: String, unique: true, lowercase: true },
  password: String,
});

// Model Class

// Export model
