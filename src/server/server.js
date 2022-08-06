/* eslint-disable class-methods-use-this */
const fastify = require('fastify')({ logger: true });
const fastifySwagger = require('fastify-swagger');
const swagger = require('../../src/config/swagger');
const { setup, routes } = require('../bootstrap/container');
const { server: { port } } = require('../config/environments/default');

setup();

module.exports = class Server {
  constructor() {
    this.setup();
  }

  setup() {
    fastify.register(fastifySwagger, swagger.options);
  }

  async start() {
    routes().map((endpoint) => fastify.route(endpoint));
    await fastify.listen(port, '0.0.0.0');
    fastify.swagger();
    console.log(`Server started and listening on ${fastify.server.address().port}...`);
  }

  stop() {
    fastify.close().then(() => {
      console.log('successfully closed!');
    }, (err) => {
      console.log('an error happened', err);
    });
  }
};
