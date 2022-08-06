/* eslint-disable class-methods-use-this */
const mongoose = require('mongoose');
const { mongodb: { url } } = require('../../config/environments/default');

module.exports = class MongooseConnection {
  constructor() {
    this.url = url;
  }

  async start() {
    await mongoose.connect(this.url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })
      .then(() => {
        console.log('MongoDB connected...');
        // this.stop();
      })
      .catch((err) => {
        console.log(err);

        throw new Error(err);
      });
  }

  stop() {
    mongoose.connection.close();
  }
};
