const tags = ['files'];

module.exports = {
  createDummyDataSchema: {
    tags,
    summary: 'Create dummy data up to given limit to test.',
    body: {
      type: 'object',
      properties: {
        limit: { type: 'number', minimum: 1, maximum: 100 },
      },
      required: ['limit'],
    },
  },
  createOrganizationFileSchema: {
    tags,
    summary: 'Create organization file with token.',
    headers: {
      type: 'object',
      properties: {
        token: { type: 'string' },
      },
      required: ['token'],
    },
    body: {
      type: 'object',
      properties: {
        fileSegmentId: { type: 'number' },
        fileName: { type: 'string' },
        mp3Path: { type: 'string' },
        originalFilePath: { type: 'string' },
        segmentText: { type: 'string' },
        seriesTitle: { type: 'string' },
      },
      required: ['fileSegmentId', 'fileName', 'mp3Path', 'originalFilePath', 'segmentText', 'seriesTitle'],
    },
  },
  getFileByFileIdSchema: {
    tags,
    summary: 'Get file by file id.',
    params: {
      fileId: { type: 'string' },
    },
  },
  getOrganizationFilesByTokenSchema: {
    tags,
    summary: 'Get files by organization token.',
    headers: {
      type: 'object',
      properties: {
        token: { type: 'string' },
      },
      required: ['token'],
    },
  },
  getFilesBySeriesTitleSchema: {
    tags,
    summary: 'Get files by series title.',
    body: {
      type: 'object',
      properties: {
        seriesTitle: { type: 'string', minLength: 1 },
      },
      required: ['seriesTitle'],
    },
  },
  getFilesSchema: {
    tags,
    summary: 'Get files.',
    body: {
      type: 'object',
      properties: {
        limit: { type: 'number', default: 5, maximum: 5 },
        offset: { type: 'number', default: 0 },
      },
    },
  },
};
