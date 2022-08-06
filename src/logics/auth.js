const jwt = require('jsonwebtoken');

const { tokenKey } = require('../config/environments/default');

module.exports = class Auth {
  static generateToken({ organizationId, name, password }) {
    return jwt.sign(
      { organizationId, name, password },
      tokenKey,
      { expiresIn: '365d' },
    );
  }

  static verifyToken({ token }) {
    return jwt.verify(token, tokenKey);
  }
};
