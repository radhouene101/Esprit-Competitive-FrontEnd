import {Role} from "../services/User/models/role";

export class UserDetails{
  email?: string;
  id?: number;
  name?: string;
  password?: string;
  phone?: string;
  roles?: Array<Role>;
  status?: 'ONLINE' | 'OFFLINE';
}
