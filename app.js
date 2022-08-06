require('dotenv').config();
const Server = require('./src/server/server');
const MongooseConnection = require('./src/bootstrap/modules/mongoose');

async function app() {
  const server = new Server();
  const mongooseConnection = new MongooseConnection();

  await mongooseConnection.start();
  server.start();

  process.on('SIGTERM', () => {
    console.log('asdasd')
    mongooseConnection.stop();
  });
  process.on('SIGINT', () => {
    console.log('asdasd')
    mongooseConnection.stop();
  });
}

app().catch(console.log);
