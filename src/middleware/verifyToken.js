const jwt = require('jsonwebtoken');

const verifyToken = async (token) => {
  try {
    const secret = "secret"
    const decoded = jwt.verify(token, secret);

    return decoded;
  } catch (error) {
    return {
      message: 'Expired or invalid token',
    };
  }
};

module.exports = verifyToken;
