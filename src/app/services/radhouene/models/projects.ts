/* tslint:disable */
/* eslint-disable */
import { Contest } from '../models/contest';
import { User } from '../models/user';
export interface Projects {
  classe?: string;
  coach?: string;
  contest?: Contest;
  date?: string;
  groupName?: string;
  groupStreak?: number;
  id?: number;
  imageUrl?: string;
  name?: string;
  niveau?: 'PREMIERE' | 'DEUXIEME' | 'TROIXIEME' | 'QUATRIEME' | 'CINQUEME';
  nominated?: boolean;
  numberOfVotes?: number;
  scolarYear?: string;
  videoUrl?: string;
  voters?: Array<User>;
  votingpool?: boolean;
  winner?: boolean;
}
