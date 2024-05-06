/* tslint:disable */
/* eslint-disable */
import { Event } from '../models/event';
import { User } from '../models/user';
export interface Group {
  captain?: string;
  event?: Event;
  id?: number;
  members?: Array<User>;
  name?: string;
}
