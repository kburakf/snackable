const tags = ['organizations'];

module.exports = {
  createOrganizationTokenSchema: {
    tags,
    summary: 'Create organization token.',
    body: {
      type: 'object',
      properties: {
        name: { type: 'string', minLength: 1 },
        password: { type: 'string', minLength: 6 },
      },
      required: ['name', 'password'],
    },
  },
};
