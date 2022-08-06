module.exports = class OrganizationDatabase {
  constructor({ OrganizationModel }) {
    this.OrganizationModel = OrganizationModel;
  }

  async createOrganization({ name, password }) {
    const { OrganizationModel } = this;

    return OrganizationModel.create({ name, password });
  }
};
