import { Role } from '../../enums/role';

export class User {
  _id?: number;
  name?: string;
  email?: string;
  roles?: Role[];
  token?: string;
}
