const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/user');
const config = require('../config');

// Setup options for JWT Strategty
const jewOptions = {

};

// Create JWT Strategty
const jwtLogin = new JwtStrategy(jwtOptions, (payload, done) => {
  // User Id in payload
  User.findById(payload.sub, (err, user) => {
    if (err) return done(err, false); // error

    if (user) {
      done(null, user); // found user
    } else {
      done(null, false); // did not find user
    }
  });
});


// Passport to use JWT
