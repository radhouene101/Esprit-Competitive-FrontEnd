/* tslint:disable */
/* eslint-disable */
import { User } from '../models/user';
export interface Role {
  id?: number;
  name?: string;
  user_roles?: Array<User>;
}
