module.exports = {
  env: process.env.NODE_ENV || 'dev',
  mongodb: {
    url: process.env.MONGO_URL || 'mongodb://localhost:27017/snackable',
  },
  server: {
    port: process.env.PORT || 3000,
    host: process.env.HOST || 'localhost:3000',
  },
  tokenKey: process.env.TOKEN_KEY || 'tokenkey',
  saltKey: process.env.SALT_KEY || 'saltkey',
};
