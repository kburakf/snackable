const { server: { host }, env } = require('../config/environments/default');

const httpProtocol = env === 'prod' ? 'https' : 'http';

exports.options = {
  routePrefix: '/documentation',
  exposeRoute: true,
  swagger: {
    info: {
      title: 'Snackable API',
      description: 'Building a blazing fast REST API with Node.js, MongoDB, Fastify and Swagger',
      version: '1.0.0',
    },
    externalDocs: {
      url: 'https://swagger.io',
      description: 'Find more info here',
    },
    host: `${host}`,
    schemes: [httpProtocol],
    consumes: ['application/json'],
    produces: ['application/json'],
  },
};
