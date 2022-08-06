const MESSAGES = require('../constants/error-messages');

const { createCustomErrorType } = require('./utils');

module.exports = (
  Object.values(MESSAGES)
    .filter((message) => message.parent)
    .reduce((acc, message) => ({
      ...acc,
      [message.error]: createCustomErrorType(message.parent, message.error, message.level, message.message, message.code),
    }), {})
);
