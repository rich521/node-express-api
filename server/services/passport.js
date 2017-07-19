const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');

const User = require('../models/user');
const config = require('../config');

// Create LocalStrategy
const localOptions = { usernameField: 'email' };
const localLogin = new LocalStrategy(localOptions, (email, password, done) => {
  // verification
  User.findOne({ email }, (err, user) => {
    if (err) return done();

    if (!user) return done(null, false);

    // compare passwords hash vs input password
  });
});

// Setup options for JWT Strategty
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: config.secret,
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
passport.use(jwtLogin);
