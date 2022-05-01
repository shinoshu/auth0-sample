import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import * as auth0 from 'auth0';

@Injectable()
export class Auth0Service {
  management: auth0.ManagementClient;

  constructor(private configService: ConfigService) {
    this.management = new auth0.ManagementClient({
      domain: this.configService.get('DOMAIN'),
      clientId: this.configService.get('CLIENT_ID'),
      clientSecret: this.configService.get('CLIENT_SECRET'),
      scope: this.configService.get('SCOPE'),
    });
  }

  async getUser(id: string) {
    return await this.management.getUser({ id });
  }

  async getUsers() {
    return await this.management.getUsers();
  }

  async createUser(user: any) {
    return await this.management.createUser(user);
  }

  async updateUser(id: string, user: any) {
    return await this.management.updateUser({ id }, user);
  }

  async deleteUser(id: string) {
    return await this.management.deleteUser({ id });
  }

  async getUserOrganizations(id: string) {
    return await (this.management as any).users.getUserOrganizations({ id });
  }

  async getOrganization(id: string) {
    return await this.management.organizations.getByID({ id });
  }

  async getOrganizations() {
    return await this.management.organizations.getAll();
  }

  async createOrganization(organization: any) {
    return await this.management.organizations.create(organization);
  }

  async updateOrganization(id: string, organization: any) {
    return await this.management.organizations.update({ id }, organization);
  }

  async deleteOrganization(id: string) {
    return await this.management.organizations.delete({ id });
  }

  async getInvitations(id: string) {
    return await this.management.organizations.getInvitations({ id });
  }

  async createInvitation(id: string, invitation: any) {
    return await this.management.organizations.createInvitation(
      { id },
      invitation,
    );
  }
}
