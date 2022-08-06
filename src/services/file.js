const logger = require('loglevel');
const {
  FileNotFound,
  FileStatusIsProcessing,
  FileStatusIsFailed,
} = require('../errors/types');

const { FileLogic } = require('../logics');
const { FileFormatter } = require('../formatters');

module.exports = class FileService {
  constructor({ FileDatabase }) {
    this.FileDatabase = FileDatabase;
  }

  async createDummyData({ limit }) {
    const { FileDatabase } = this;

    logger.debug('[FileService] createDummyData', { limit });

    const data = FileLogic.createDummyData({ limit });

    await FileDatabase.createDummyData({ data });

    return { message: 'success', statusCode: 200 };
  }

  async createOrganizationFile({ data }) {
    const { FileDatabase } = this;

    logger.debug('[FileService] createOrganizationFile', data);

    let file = FileLogic.createOrganizationFile(data);

    file = await FileDatabase.createOrganizationFile({ file });

    file = FileFormatter.prepareFileResponse({ file });

    return file;
  }

  async getFileByFileId({ fileId }) {
    const { FileDatabase } = this;

    logger.debug('[FileService] getFileByFileId', { fileId });

    let file = await FileDatabase.getFileByFileId({ fileId });

    if (!file) {
      throw new FileNotFound();
    }

    else if (FileLogic.isFileStatusProcessing({ file })) {
      throw new FileStatusIsProcessing();
    }

    else if (FileLogic.isFileStatusFailed({ file })) {
      throw new FileStatusIsFailed();
    }

    file = FileFormatter.prepareFileResponse({ file });

    return file;
  }

  async getOrganizationFilesByToken({ organizationId }) {
    const { FileDatabase } = this;

    logger.debug('[FileService] getOrganizationFilesByToken', { organizationId });

    const files = await FileDatabase.getOrganizationFilesByToken({ organizationId });

    if (!files.length) {
      throw new FileNotFound();
    }

    return files;
  }

  async getFilesBySeriesSchema({ seriesTitle }) {
    const { FileDatabase } = this;

    logger.debug('[FileService] getFilesBySeriesSchema', { seriesTitle });

    const files = await FileDatabase.getFilesBySeriesSchema({ seriesTitle });

    if (!files.length) {
      throw new FileNotFound();
    }

    return files;
  }

  async getFiles({ limit, offset }) {
    const { FileDatabase } = this;

    logger.debug('[FileService] getFiles', { limit, offset });

    const files = await FileDatabase.getFiles({ limit, offset });

    if (!files.length) {
      throw new FileNotFound();
    }

    return files;
  }
};
