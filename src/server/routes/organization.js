const OrganizationSchema = require('../../schemas/organization');

const routes = [
  {
    method: 'POST',
    url: '/api/v1/organizations/token',
    schema: OrganizationSchema.createOrganizationTokenSchema,
    handler: 'OrganizationController.createOrganizationToken',
  },
];

module.exports = routes;
