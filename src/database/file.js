const fileProjection = {
  _id: 0,
  fileId: 1,
  fileSegmentId: 1,
  fileName: 1,
  mp3Path: 1,
  segmentText: 1,
  originalFilepath: 1,
  seriesTitle: 1,
  startTime: 1,
  endTime: 1,
  processingStatus: 1,
  createdAt: 1,
  updatedAt: 1,
};

module.exports = class FileDatabase {
  constructor({ FileModel }) {
    this.FileModel = FileModel;
  }

  async createDummyData({ data }) {
    const { FileModel } = this;

    return FileModel.insertMany(data);
  }

  async createOrganizationFile({ file }) {
    const { FileModel } = this;

    return FileModel.create(file);
  }

  async getFileByFileId({ fileId }) {
    const { FileModel } = this;

    return FileModel.findOne({ fileId }, fileProjection)
      .lean()
      .exec();
  }

  async getOrganizationFilesByToken({ organizationId }) {
    const { FileModel } = this;

    return FileModel.find({ organizationId }, fileProjection)
      .lean()
      .exec();
  }

  async getFilesBySeriesTitle({ seriesTitle }) {
    const { FileModel } = this;

    return FileModel.find({ seriesTitle: { $regex: seriesTitle } }, fileProjection)
      .lean()
      .exec();
  }

  async getFiles({ limit, offset }) {
    const { FileModel } = this;

    return FileModel.find({}, fileProjection)
      .skip(offset)
      .limit(limit)
      .lean()
      .exec();
  }
};
