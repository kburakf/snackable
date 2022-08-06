const logger = require('loglevel');

const { AuthLogic } = require('../logics');

module.exports = class OrganizationService {
  constructor({ OrganizationDatabase }) {
    this.OrganizationDatabase = OrganizationDatabase;
  }

  async createOrganizationToken({ name, password }) {
    const { OrganizationDatabase } = this;

    logger.debug('[OrganizationService] createOrganizationToken', { name });
    // Password can encrypt with Salted Hash method but ignored for test case.
    const organization = await OrganizationDatabase.createOrganization({ name, password });

    const token = AuthLogic.generateToken({ organizationId: organization._id.toString(), name, password });

    return { token };
  }
};
