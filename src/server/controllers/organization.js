module.exports = class OrganizationController {
  constructor({ OrganizationService }) {
    this.OrganizationService = OrganizationService;
  }

  async createOrganizationToken(request) {
    const { OrganizationService } = this;
    const { name, password } = request.body;
    return OrganizationService.createOrganizationToken({ name, password });
  }
};
