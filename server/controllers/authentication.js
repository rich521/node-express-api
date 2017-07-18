const jwt = require('jwt-simple');
const User = require('../models/user');
const config = require('../config');

const date = new Date();

function tokenForUser(user) {
  const timestamp = date.getTime();

  // subject & issued at time
  return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}

exports.signup = (req, res, next) => {
  const reqBody = req.body;

  const userCreds = {
    email: reqBody.email,
    password: reqBody.password,
  };

  if (!userCreds.email || !userCreds.password) {
    res.status(422).send({ error: 'Email and Password required' });
  }

  User.findOne({ email: userCreds.email }, (err, doesUserExist) => {
    if (err) return next(err);

    // If exist, return error
    if (doesUserExist)
      return res.status(422).send({ error: 'Email exists already' });

    // If does not exist: create and save user record
    const user = new User(userCreds);

    user.save((err) => {
      if (err) return next(err);

      res.json({ success: 'true', token: tokenForUser(user)  });
    });
  });
};
