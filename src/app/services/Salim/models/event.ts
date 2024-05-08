/* tslint:disable */
/* eslint-disable */
import { Group } from '../models/group';
export interface Event {
  date?: string;
  description?: string;
  groups?: Array<Group>;
  id?: number;
  imageUrl?: string;
  lattitude?: number;
  location?: string;
  longitude?: number;
  name?: string;
  organizer?: string;
  prize?: string;
}
