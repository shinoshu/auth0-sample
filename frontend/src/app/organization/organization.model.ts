import { User } from '../user/user.model';

export interface Organization {
  id: string;
  users: User[];
}
