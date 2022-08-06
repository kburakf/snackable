const { v4: uuidv4 } = require('uuid');
const { PROCESSING_STATUS } = require('../constants');

module.exports = class FileLogic {
  static createDummyData({ limit }) {
    const data = [];

    for (let i = 1; i <= limit; i += 1) {
      const randomProcess = Math.floor(Math.random() * Object.values(PROCESSING_STATUS).length);

      data.push({
        fileId: uuidv4(),
        fileSegmentId: i,
        fileName: `FILE_NAME_${i}`,
        mp3Path: `http://s3.amazonaws.com/snackable-test-audio/mp3Audio/audioFileName${i}.mp3`,
        originalFilePath: `http://s3.amazonaws.com/snackable-test-audio/originalFile/audioFileName${i}.mp3`,
        segmentText: `Full segment text ${i}`,
        seriesTitle: `Series Title ${i}`,
        startTime: new Date(),
        endTime: new Date(),
        processingStatus: Object.values(PROCESSING_STATUS)[randomProcess],
      });
    }

    return data;
  }

  static createOrganizationFile({
    organizationId, fileSegmentId, fileName, mp3Path, originalFilePath, segmentText, seriesTitle,
  }) {
    const randomProcess = Math.floor(Math.random() * Object.values(PROCESSING_STATUS).length);

    return {
      organizationId,
      fileId: uuidv4(),
      fileSegmentId,
      fileName,
      mp3Path,
      originalFilePath,
      segmentText,
      seriesTitle,
      startTime: new Date(),
      endTime: new Date(),
      processingStatus: Object.values(PROCESSING_STATUS)[randomProcess],
    };
  }

  static isFileStatusProcessing({ file }) {
    return file.processingStatus === PROCESSING_STATUS.PROCESSING;
  }

  static isFileStatusFailed({ file }) {
    return file.processingStatus === PROCESSING_STATUS.FAILED;
  }
};
