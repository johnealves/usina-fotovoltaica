const invalidData = require('../util/invalidData');
const verifyToken = require('./verifyToken');

const UNAUTHORIZED = 401;

const validJWT = async (req, _res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) throw invalidData('Token not found', UNAUTHORIZED);
    const validVerifyToken = await verifyToken(token);
    
    if (validVerifyToken.message) throw invalidData(validVerifyToken.message, UNAUTHORIZED);
  
    const data = validVerifyToken;
  
    req.user = data;
    next();
  } catch (error) {
    return next(error);
  }
};

module.exports = validJWT;