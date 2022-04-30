import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './jwt-auth.guard';
import { Auth0Service } from './auth0.service';

@Controller()
@UseGuards(JwtAuthGuard)
export class AppController {
  constructor(private readonly auth0Service: Auth0Service) {}

  @Get('users')
  async getUsers() {
    return this.auth0Service.getUsers();
  }

  @Post('users')
  async createUser(@Body() user: any) {
    return this.auth0Service.createUser(user);
  }

  @Get('organizations')
  async getOrganizations() {
    return this.auth0Service.getOrganizations();
  }

  @Post('organizations')
  async createOrganization(@Body() organization: any) {
    return this.auth0Service.createOrganization(organization);
  }

  @Get('organizations/:id/invitations')
  async getInvitations(@Param('id') id: string) {
    return this.auth0Service.getInvitations(id);
  }

  @Post('organizations/:id/invitations')
  async createInvitation(@Param('id') id: string, @Body() invitation: any) {
    return this.auth0Service.createInvitation(id, invitation);
  }
}
