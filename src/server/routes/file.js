const FileSchema = require('../../schemas/file');

const Middleware = require('../../middleware');

const routes = [
  {
    method: 'POST',
    url: '/api/v1/files',
    schema: FileSchema.createDummyDataSchema,
    handler: 'FileController.createDummyData',
  },
  {
    method: 'POST',
    url: '/api/v1/files/organization',
    preHandler: Middleware.verifyToken,
    schema: FileSchema.createOrganizationFileSchema,
    handler: 'FileController.createOrganizationFile',
  },
  {
    method: 'GET',
    url: '/api/v1/files/:fileId',
    schema: FileSchema.getFileByFileIdSchema,
    handler: 'FileController.getFileByFileId',
  },
  {
    method: 'GET',
    url: '/api/v1/files/organization',
    preHandler: Middleware.verifyToken,
    schema: FileSchema.getOrganizationFilesByTokenSchema,
    handler: 'FileController.getOrganizationFilesByToken',
  },
  {
    method: 'POST',
    url: '/api/v1/files/series',
    schema: FileSchema.getFilesBySeriesSchema,
    handler: 'FileController.getFilesBySeriesSchema',
  },
  {
    method: 'POST',
    url: '/api/v1/files/all',
    schema: FileSchema.getFilesSchema,
    handler: 'FileController.getFiles',
  },
];

module.exports = routes;
