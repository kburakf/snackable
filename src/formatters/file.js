module.exports = class FileFormatter {
  static prepareFileResponse({ file }) {
    return {
      fileId: file.fileId,
      fileSegmentId: file.fileSegmentId,
      fileName: file.fileName,
      mp3Path: file.mp3Path,
      segmentText: file.segmentText,
      originalFilepath: file.originalFilepath,
      seriesTitle: file.seriesTitle,
      startTime: file.startTime,
      endTime: file.endTime,
      processingStatus: file.processingStatus,
      createdAt: file.createdAt,
      updatedAt: file.updatedAt,
    };
  }
};
