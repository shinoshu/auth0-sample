import { Organization } from '../organization/organization.model';

export interface User {
  id: string;
  organizations: Organization[];
}
