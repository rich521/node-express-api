const jwt = require('jwt-simple');
const User = require('../models/user');
const config = require('../config');

const date = new Date();

function tokenForUser(user) {
  const timestamp = date.getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}

exports.signin = (req, res, next) => {
  // give token after success login
  res.send({ success: 200, signin: 'true', token: tokenForUser(req.user) });
};

exports.signup = (req, res, next) => {
  const reqBody = req.body;

  const userCreds = {
    email: reqBody.email,
    password: reqBody.password,
  };

  if (!userCreds.email || !userCreds.password) {
    res.statusMessage = 'Email required';
    res.status(422).end();
  }

  if (!userCreds.password) {
    res.statusMessage = 'Password required';
    res.status(422).end();
  }

  User.findOne({ email: userCreds.email }, (err, doesUserExist) => {
    if (err) return next(err);

    // If exist, return error
    if (doesUserExist) {
      res.statusMessage = 'Email exists already';
      return res.status(422).end();
    }

    // If does not exist: create and save user record
    const user = new User(userCreds);

    user.save((err) => {
      if (err) return next(err);

      res.json({ success: 200, signup: 'true', token: tokenForUser(user)  });
    });
  });
};
