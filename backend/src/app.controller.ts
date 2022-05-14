import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from './jwt-auth.guard';
import { Auth0Service } from './auth0.service';

@Controller()
@UseGuards(JwtAuthGuard)
export class AppController {
  constructor(private readonly auth0Service: Auth0Service) {}

  @Get('users/:id')
  async getUser(@Param('id') id: string) {
    return this.auth0Service.getUser(id);
  }

  @Get('users')
  async getUsers() {
    return this.auth0Service.getUsers();
  }

  @Post('users')
  async createUser(@Body() user: any) {
    return this.auth0Service.createUser(user);
  }

  @Put('users/:id')
  async updateUser(@Param('id') id: string, @Body() user: any) {
    return this.auth0Service.updateUser(id, user);
  }

  @Delete('users/:id')
  async deleteUser(@Param('id') id: string) {
    return this.auth0Service.deleteUser(id);
  }

  @Get('users/:id/organizations')
  async getUserOrganizations(@Param('id') id: string) {
    return this.auth0Service.getUserOrganizations(id);
  }

  @Get('organizations/:id')
  async getOrganization(@Param('id') id: string) {
    return this.auth0Service.getOrganization(id);
  }

  @Get('organizations')
  async getOrganizations() {
    return this.auth0Service.getOrganizations();
  }

  @Post('organizations')
  async createOrganization(@Body() organization: any) {
    return this.auth0Service.createOrganization(organization);
  }

  @Put('organizations/:id')
  async updateOrganization(@Param('id') id: string, @Body() organization: any) {
    return this.auth0Service.updateOrganization(id, organization);
  }

  @Delete('organizations/:id')
  async deleteOrganization(@Param('id') id: string) {
    return this.auth0Service.deleteOrganization(id);
  }

  @Get('organizations/:id/invitations')
  async getInvitations(@Param('id') id: string) {
    return this.auth0Service.getInvitations(id);
  }

  @Post('organizations/:id/invitations')
  async createInvitation(@Param('id') id: string, @Body() invitation: any) {
    return this.auth0Service.createInvitation(id, invitation);
  }

  @Get('organizations/:id/members')
  async getOrganizationUser(@Param('id') id: string) {
    return this.auth0Service.getMembers(id);
  }
}
