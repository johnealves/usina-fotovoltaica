const jwt = require('jsonwebtoken');

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const secret = "secret"

const createToken = async (userData) => {
  const token = jwt.sign(userData, secret, jwtConfig);

  return token;
};

module.exports = createToken;
