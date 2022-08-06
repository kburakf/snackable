const mongoose = require('mongoose');

const { Schema } = mongoose;

const OrganizationSchema = new Schema({
  name: { type: String },
  password: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const OrganizationModel = () => mongoose.model('Organization', OrganizationSchema);

module.exports = OrganizationModel;
