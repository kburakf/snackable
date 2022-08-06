const { BadRequestGenericError } = require('../errors/generics');
const ERROR_LEVELS = require('../errors/levels');

module.exports = {
  UNKNOWN: {
    error: 'UnknownError',
    message: 'unknown error',
    code: -1,
  },
  VALIDATION: {
    error: 'ValidationError',
    code: -2,
  },
  MICROSERVICE: {
    error: 'MicroserviceError',
    message: 'microservice error',
    code: -3,
  },
  FILE_NOT_FOUND: {
    parent: BadRequestGenericError,
    error: 'FileNotFound',
    level: ERROR_LEVELS.WARN,
    message: 'File not found!',
    code: 100,
  },
  FILE_STATUS_IS_PROCESSING: {
    parent: BadRequestGenericError,
    error: 'FileStatusIsProcessing',
    level: ERROR_LEVELS.WARN,
    message: 'File status is PROCESSING!',
    code: 101,
  },
  FILE_STATUS_IS_FAILED: {
    parent: BadRequestGenericError,
    error: 'FileStatusIsFailed',
    level: ERROR_LEVELS.WARN,
    message: 'File status is FAILED!',
    code: 102,
  },
  INVALID_TOKEN: {
    parent: BadRequestGenericError,
    error: 'InvalidTokenError',
    level: ERROR_LEVELS.WARN,
    message: 'Invalid token error!',
    code: 103,
  },
  ORGANIZATION_NOT_FOUND: {
    parent: BadRequestGenericError,
    error: 'OrganizationNotFound',
    level: ERROR_LEVELS.WARN,
    message: 'Organization not found!',
    code: 104,
  },
};
