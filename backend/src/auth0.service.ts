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

  async getUsers() {
    return await this.management.getUsers();
  }

  async createUser(user: any) {
    return await this.management.createUser(user);
  }

  async getOrganizations() {
    return await this.management.organizations.getAll();
  }

  async createOrganization(organization: any) {
    return await this.management.organizations.create(organization);
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
