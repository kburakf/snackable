const { InvalidTokenError } = require('../errors/types');

const { AuthLogic } = require('../logics');

module.exports = class Middleware {
  static verifyToken(req, _, next) {
    const { token } = req.headers;
    let organization;

    try {
      organization = AuthLogic.verifyToken({ token });
    }
    catch (err) {
      throw new InvalidTokenError();
    }

    req.params.organizationId = organization.organizationId;
    next();
  }
};
