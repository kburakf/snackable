const mongoose = require('mongoose');
const { PROCESSING_STATUS } = require('../constants');

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const FileSchema = new Schema({
  organizationId: { type: ObjectId, index: true },
  fileId: { type: String, index: true },
  fileSegmentId: { type: String },
  fileName: { type: String },
  mp3Path: { type: String },
  segmentText: { type: String },
  originalFilepath: { type: String },
  seriesTitle: { type: String },
  startTime: { type: Date },
  endTime: { type: Date },
  processingStatus: { type: String, enum: Object.values(PROCESSING_STATUS) },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const FileModel = () => mongoose.model('File', FileSchema);

module.exports = FileModel;
