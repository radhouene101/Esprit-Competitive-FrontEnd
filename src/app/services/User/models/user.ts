/* tslint:disable */
/* eslint-disable */
import { Role } from '../models/role';
export interface User {
  email?: string;
  id?: number;
  name?: string;
  password?: string;
  phone?: string;
  roles?: Array<Role>;
  status?: 'ONLINE' | 'OFFLINE';
}
