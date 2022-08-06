module.exports = class FileController {
  constructor({ FileService }) {
    this.FileService = FileService;
  }

  async createDummyData(request) {
    const { FileService } = this;
    const { limit } = request.body;
    return FileService.createDummyData({ limit });
  }

  async createOrganizationFile(request) {
    const { FileService } = this;
    const { organizationId } = request.params;
    const data = {
      ...request.body,
      organizationId,
    };
    return FileService.createOrganizationFile({ data });
  }

  async getFileByFileId(request) {
    const { FileService } = this;
    const { fileId } = request.params;
    return FileService.getFileByFileId({ fileId });
  }

  async getOrganizationFilesByToken(request) {
    const { FileService } = this;
    const { organizationId } = request.params;
    return FileService.getOrganizationFilesByToken({ organizationId });
  }

  async getFilesBySeriesTitle(request) {
    const { FileService } = this;
    const { seriesTitle } = request.body;
    return FileService.getFilesBySeriesTitle({ seriesTitle });
  }

  async getFiles(request) {
    const { FileService } = this;
    const { limit, offset } = request.body;
    return FileService.getFiles({ limit, offset });
  }
};
